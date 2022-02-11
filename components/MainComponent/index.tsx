import Head from "next/head";
import Header from "./Header";
import {useState} from "react";
import Footer from "./Footer";

type MainProps = {
    children: Array<JSX.Element> | JSX.Element;
    title: string;
};

function MainComponent(props: MainProps) {
    const [blur, setBlur] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>{props.title} | David Lozano</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta charSet="UTF-8"/>
            </Head>

            <Header setFn={setBlur}/>

            <article className={"grow " + (blur ? "blur-md" : "blur-none")}>
                {props.children}
            </article>

            <Footer />
        </div>
    );
}

export default MainComponent;
export type {MainProps};
