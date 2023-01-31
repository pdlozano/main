import MainComponent from "./MainComponent";
import React from "react";

type Post = {
    title: string;
    children: React.Component | React.Component[];
    date: Date;
    description: string;
};


function BlogPost(post: Post) {
    const months = [
        "Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"
    ];
    const month = months[post.date.getMonth()];

    return (
        <MainComponent title={post.title} description={post.description}>
            <article className="post-article">
                <header>
                    <h1>{post.title}</h1>
                    <p className="text-sm">Published on {post.date.getDate()} {month} {post.date.getFullYear()}</p>
                    <blockquote>{post.description}</blockquote>
                </header>

                <main className="mt-14">
                    {post.children}
                </main>
            </article>
        </MainComponent>
    );
}

export default BlogPost;
