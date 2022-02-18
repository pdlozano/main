import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

type MainProps = {
    children: Array<JSX.Element> | JSX.Element;
    title: string;
};

function MainComponent(props: MainProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>{props.title} | David Lozano</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta charSet="UTF-8" />
            </Head>

            <Header />

            <article className="grow w-11/12 md:w-10/12 mx-auto">
                {props.children}
            </article>

            <Footer />
        </div>
    );
}

export default MainComponent;
export type { MainProps };
