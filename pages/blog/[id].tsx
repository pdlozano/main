import MainComponent from "../../components/MainComponent";
import fs from "fs/promises";
import path from "path";
import {GetStaticProps} from "next";
import {read} from "gray-matter";
import BlogPost from "../../components/Blog/BlogPost";
import type { PostData } from "../../components/Blog/BlogPost";

function Post(props: PostData) {
    return (
        <MainComponent title={props.title}>
            <BlogPost {...props} />
        </MainComponent>
    )
}

const getStaticProps: GetStaticProps = async (context) => {
    const id = context.params?.id as string;

    const current = path.join(process.cwd(), "blog/", `${id}.md`);
    const dir = await read(current);

    return {
        props: {
            title: dir.data.title,
            date: dir.data.date,
            content: dir.content,
        },
    };
}

async function getStaticPaths() {
    const current = path.join(process.cwd(), "blog");
    const dir = await fs.readdir(current);
    const links = dir.map(async (dir) => {
        const reg = /(?<url>\d+)\.md/g
        const {groups} = reg.exec(dir) || {groups: null};
        return {
            params: {
                id: groups?.url as string,
            },
        };
    });

    return {
        paths: await Promise.all(links),
        fallback: false,
    };
}

export default Post;
export {getStaticProps, getStaticPaths};
