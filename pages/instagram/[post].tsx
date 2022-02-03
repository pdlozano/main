import type { NextPage } from "next";
import PageTemplate from "../../components/PageTemplate";

const Post: NextPage = () => {
    return (
        <PageTemplate title="Instagram Post #1">
            <h1>Instagram Post #1</h1>
            <p>[IMAGE]</p>
            <p>Description</p>
            <p>Download Original Image</p>
        </PageTemplate>
    );
};

export default Post;
