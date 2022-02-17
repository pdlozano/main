import MainComponent from "../../components/MainComponent";
import fs from "fs/promises";
import path from "path";
import {GetStaticProps} from "next";
import {read} from "gray-matter";
import ReactMarkdown from 'react-markdown';
import {Prism} from 'react-syntax-highlighter';
import codeStyle from "../../components/customCodeStyle";

type PostData = {
    title: string;
    date: string;
    content: string;
}

function Post(props: PostData) {
    return (
        <MainComponent title={props.title}>
            <header>
                <h1>{props.title}</h1>
                <p>Published on {props.date}</p>
            </header>

            <main>
                <ReactMarkdown components={{
                    code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <Prism
                                style={codeStyle}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            >
                                {String(children).replace(/\n$/, '')}
                            </Prism>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    }
                }}>
                    {props.content}
                </ReactMarkdown>
            </main>
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
