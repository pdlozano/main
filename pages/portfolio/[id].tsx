import MainComponent from "../../components/MainComponent";
import { GetStaticProps, GetStaticPaths } from "next";
import { remark } from "remark";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import a11yEmoji from '@fec/remark-a11y-emoji';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkPrism from "remark-prism";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";


type Post = {
    title: string;
    content: string;
    description: string;
};


function PostPage(post: Post) {
    const date = new Date(post.date);
    const months = [
        "Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"
    ];
    const month = months[date.getMonth()];

    return (
        <MainComponent title={post.title} description={post.description}>
            <article className="post-article">
                <header>
                    <h1>{post.title}</h1>
                    <p className="text-sm">Published on {date.getDate()} {month} {date.getFullYear()}</p>
                    <blockquote>{post.description}</blockquote>
                </header>

                <main className="mt-14" dangerouslySetInnerHTML={{ __html: post.content }}></main>
            </article>
        </MainComponent>
    );
};

const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context;
    const fullPath = path.join("blog", `${params?.id}.md`);
    const fileContents = await fs.readFile(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const processedContent = await remark()
        .use(a11yEmoji)
        .use(remarkMath)
        .use(remarkPrism, {
            transformInlineCode: true,
        })
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeKatex)
        .use(rehypeStringify)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        props: {
            ...matterResult.data,
            content: contentHtml,
            date: new Date(matterResult.data.date).toString()
        }
    };
};

const getStaticPaths: GetStaticPaths = async () => {
    const files = await fs.readdir("portfolio");
    const paths = files.map((file) => {
        const id = file.split(".")[0];

        return {
            params: {
                id: id
            }
        };
    });

    return {
        paths: paths,
        fallback: false
    };
};

export default PostPage;
export { getStaticProps, getStaticPaths };
