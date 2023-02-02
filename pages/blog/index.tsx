import MainComponent from "../../components/MainComponent";
import { GetStaticProps } from "next";
import fs from "fs/promises";
import Fuse from "fuse.js";
import React, { useState } from "react";

type Post = {
    id: string;
    title: string;
    date: number;
    description: string;
    draft?: boolean;
}

type PostListPageProps = {
    data: Post[];
};

function PostListPage(props: PostListPageProps) {
    const data = props.data.sort((a, b) => b.date - a.date);
    const [search, setSearch] = useState<string>("");
    const [items, setItems] = useState<{
        id: string;
        title: string;
        description: string;
    }[]>(data);
    const fuse = new Fuse(data, {
        keys: ["title", "description"],
        threshold: 0.4
    });

    return (
        <MainComponent title="Blog">
            <h1>Blog</h1>
            <p>
                Hello! I am David and I am learning everything data. In here, you will find opinions on the field of
                data, random things, and on the rare occasion, finance.
            </p>

            <form className="flex items-center mt-2">
                <input
                    className="w-full border-2 border-yellow-600 outline-none focus:border-yellow-300 rounded-sm mr-2 px-2 py-1 bg-gray"
                    type="search"
                    value={search}
                    placeholder="p > 0.05"
                    onChange={(event) => {
                        event.preventDefault();
                        setSearch(event.target.value);
                    }} />

                <input type="submit" onClick={(event) => {
                    event.preventDefault();
                    if (search === "") {
                        setItems(data);
                    } else {
                        setItems(fuse.search(search).map(({ item }) => item));
                    }
                }} value="Search" className="cta bg-gray px-2 py-1 rounded-sm" />
            </form>

            <React.Fragment>
                {
                    items.map((item) => (
                        <div key={item.id}>
                            <a href={"blog/" + item.id} className="link-box">
                                <h2 className="text-2xl">{item.title}</h2>
                                <p className="text-white">{item.description}</p>
                            </a>
                        </div>
                    ))
                }
            </React.Fragment>
        </MainComponent>
    );
}

const getStaticProps: GetStaticProps = async () => {
    const fileContents = await fs.readdir("blog");
    const dataAsync = fileContents.map(async (file) => {
        const { meta } = await import(`blog/${file}`);

        return {
            ...meta,
            draft: meta.draft || false,
            id: file.split(".")[0],
            date: parseInt(meta.date),
        };
    });
    const data = await Promise.all(dataAsync);

    return {
        props: {
            data: data.filter(({ draft }) => !draft),
        }
    };
};

export default PostListPage;
export { getStaticProps };
