import ReactMarkdown from "react-markdown";
import { Prism } from "react-syntax-highlighter";
import codeStyle from "../customCodeStyle";

type MarkdownData = {
    children: string[] | string;
};

function Markdown(props: MarkdownData) {
    return (
        <ReactMarkdown
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                        <Prism
                            style={codeStyle}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                        >
                            {String(children).replace(/\n$/, "")}
                        </Prism>
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    );
                },
            }}
        >
            {props.children as string}
        </ReactMarkdown>
    );
}

export default Markdown;
