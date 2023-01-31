import MainComponent from "../../components/MainComponent";
import PortfolioPage, { PageProps } from "../../components/PortfolioPage";
import { GetStaticProps } from "next";
import fs from "fs/promises";

function Index(props: PageProps) {
    return (
        <MainComponent title="Portfolio">
            <PortfolioPage {...props} />
        </MainComponent>
    );
}

const getStaticProps: GetStaticProps = async () => {
    const fileContents = await fs.readdir("portfolio");
    const dataAsync = fileContents.map(async (file) => {
        const { meta } = await import(`portfolio/${file}`);
        console.log(meta);

        return {
            ...meta,
            id: file.split(".")[0],
            date: parseInt(meta.date),
        };
    });
    const data = await Promise.all(dataAsync);

    return {
        props: {
            data: data
        }
    };
};

export default Index;
export { getStaticProps };
