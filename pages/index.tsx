import type { NextPage } from "next";
import MainComponent from "../components/MainComponent";
import MainPageHead from "../components/IndexPage/MainPageHead";
import Body from "../components/IndexPage/Body";

const Home: NextPage = () => {
    return (
        <MainComponent title="Hello">
            <MainPageHead />
            <Body />
        </MainComponent>
    );
};

export default Home;
