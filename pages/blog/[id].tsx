import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import fs from "fs/promises";
import dynamic from "next/dynamic";
import MainComponent from "../../components/MainComponent";

type PostPageProps = {
    id: number;
    draft: boolean;
}

function PostPage(props: PostPageProps) {
    const Component = dynamic(import("../../blog/" + props.id + ".mdx"), {
        loading: () => (
            <MainComponent title="Loading Post...">
                <p>Loading Post...</p>
            </MainComponent>
        ),
    });

    return (
        <React.Fragment>
            <Component />
        </React.Fragment>
    );
}

const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context;

    return {
        props: {
            id: params?.id || 1
        }
    };
};

const getStaticPaths: GetStaticPaths = async () => {
    const files = await fs.readdir("blog");
    const paths = files.map(async (file) => {
        const { meta } = await import(`blog/${file}`);
        const id = file.split(".")[0];

        return {
            params: {
                draft: meta.draft || false,
                id,
            }
        };
    });
    const data = await Promise.all(paths);

    return {
        paths: data.filter(({ params }) => !params.draft),
        fallback: false
    };
};

export default PostPage;
export { getStaticProps, getStaticPaths };
