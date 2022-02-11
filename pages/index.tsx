import type { NextPage } from "next";
import MainComponent from "../components/MainComponent";
import MainPageHead from "../components/MainPageHead";

const Home: NextPage = () => {
    return (
        <MainComponent title="Hello">
            <MainPageHead />
        </MainComponent>
    );
};

export default Home;
