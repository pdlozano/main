import Head from "next/head";

type MainProps = {
    children: Array<JSX.Element> | JSX.Element;
    title: string;
};

function MainComponent(props: MainProps) {
    return (
        <div>
            <Head>
                <title>{props.title} | David Lozano</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta charSet="UTF-8"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto+Mono&display=swap"
                    rel="stylesheet"
                />
            </Head>

            {props.children}
        </div>
    );
}

export default MainComponent;
