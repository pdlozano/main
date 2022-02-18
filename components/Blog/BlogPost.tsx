import dynamic from "next/dynamic";

const Markdown = dynamic(() => import("./Markdown"));

type PostData = {
    title: string;
    date: string;
    content: string;
};

function BlogPost(props: PostData) {
    return (
        <>
            <header>
                <h1>{props.title}</h1>
                <p>Published on {props.date}</p>
            </header>

            <main>
                <Markdown>{props.content}</Markdown>
            </main>
        </>
    );
}

export default BlogPost;
export type { PostData };
