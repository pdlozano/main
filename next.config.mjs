import a11yEmoji from "@fec/remark-a11y-emoji";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkPrism from "remark-prism";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import nextMDX from "@next/mdx";

const withMDX = nextMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [
            a11yEmoji,
            remarkMath,
            [
                remarkPrism,
                {
                    transformInlineCode: true,
                }
            ],
            remarkParse,
            remarkRehype
        ],
        rehypePlugins: [
            rehypeKatex,
            rehypeStringify
        ]
    }
});


/** @type {import("next").NextConfig} */
export default withMDX({
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    reactStrictMode: true,
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                loader: "frontmatter-markdown-loader",
                options: { mode: ["react-component"] }
            }
        );
        return cfg;
    }
});
