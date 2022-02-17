import MainComponent from "../../components/MainComponent";
import {read} from "gray-matter";
import fs from "fs/promises";
import path from "path";

type BlogItemData = {
    url: string;
    title: string;
    date: Date;
}

type BlogData = {
    data: BlogItemData[];
};

function Blog(props: BlogData) {
    return (
        <MainComponent title="Blog">
            <h1>Blog</h1>
        </MainComponent>
    )
}

async function getStaticProps(): Promise<{ props: BlogData }> {
    const current = path.join(process.cwd(), "blog");
    const dir = await fs.readdir(current);
    const links = dir.map(async (dir): Promise<BlogItemData> => {
        const reg = /(?<url>\d+)\.md/g
        const {groups} = reg.exec(dir) || {groups: null};

        const currentDir = path.join(current, dir);
        const {data} = read(currentDir);
        return {
            title: data.title,
            date: new Date(data.date),
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
export {getStaticProps};
