import ReactMarkdown from 'react-markdown';
import {Prism} from 'react-syntax-highlighter';
import codeStyle from "../customCodeStyle";

type PostData = {
    title: string;
    date: string;
    content: string;
}


function BlogPost(props: PostData) {
    return (
        <>
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
        </>
    );
}

export default BlogPost;
export type { PostData };