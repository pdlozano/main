import MainComponent from "../../components/MainComponent";
import { read } from "gray-matter";
import fs from "fs/promises";
import path from "path";
import { BlogItemData } from "../../components/Blog/BlogList";
import dynamic from "next/dynamic";

const BlogList = dynamic(() => import("../../components/Blog/BlogList"));

type BlogData = {
    data: BlogItemData[];
};

function Blog(props: BlogData) {
    return (
        <MainComponent title="Blog">
            <h1>Blog</h1>
            <p>
                I publish stuff usually related to programming and technology
                here to showcase my love for the field.
            </p>

            <BlogList data={props.data} />
        </MainComponent>
    );
}

async function getStaticProps(): Promise<{ props: BlogData }> {
    const current = path.join(process.cwd(), "blog");
    const dir = await fs.readdir(current);
    const links = dir.map(async (dir): Promise<BlogItemData> => {
        const reg = /(?<url>\d+)\.md/g;
        const { groups } = reg.exec(dir) || { groups: null };

        const currentDir = path.join(current, dir);
        const { data } = read(currentDir);
        return {
            title: data.title,
            date: data.date,
            url: groups?.url as string,
        };
    });

    return {
        props: {
            data: await Promise.all(links),
        },
    };
}

export default Blog;
export { getStaticProps };
