import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import fs from "fs/promises";
import dynamic from "next/dynamic";
import MainComponent from "../../components/MainComponent";

type PortfolioPageProps = {
    id: number;
}

function PortfolioPage(props: PortfolioPageProps) {
    const Component = dynamic(import("../../portfolio/" + props.id + ".mdx"), {
        loading: () => (
            <MainComponent title="Loading Portfolio Item...">
                <p>Loading Portfolio Item...</p>
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
    const files = await fs.readdir("portfolio");
    const paths = files.map((file) => {
        const id = file.split(".")[0];

        return {
            params: {
                id
            }
        };
    });

    return {
        paths: paths,
        fallback: false
    };
};

export default PortfolioPage;
export { getStaticProps, getStaticPaths };
