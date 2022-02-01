import type { NextPage } from "next";
import {MainComponent} from "../../components";

const Post: NextPage = () => {
    return (
        <MainComponent title="Instagram Post #1">
            <h1>Instagram Post #1</h1>
            <p>[IMAGE]</p>
            <p>Description</p>
            <p>Download Original Image</p>
        </MainComponent>
    );
};

export default Post;
