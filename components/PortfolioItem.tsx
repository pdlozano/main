import MainComponent from "./MainComponent";
import Image, { StaticImageData } from "next/image";
import { Fragment } from "react";

type URL = {
    name: string;
    link: string;
};

type Portfolio = {
    title: string;
    content: string;
    description: string;
    tag: string;
    urls: URL[];
    children: React.Component | React.Component[];
    image: {
        src: StaticImageData;
        alt: string;
    }
};


function UrlList({ urls }: {
    urls: URL[],
}) {
    return (
        <Fragment>
            {urls.map((url, index) => (
                <Fragment key={url.name}>
                    {index == 0 ? "" : "; "}<a href={url.link}>{url.name}</a>
                </Fragment>
            ))}
        </Fragment>
    )
}


function PortfolioItem(item: Portfolio) {
    return (
        <MainComponent title={item.title} description={item.description}>
            <article className="post-article">
                <header>
                    <h1>{item.title}</h1>
                    <p>
                        {item.tag} | <UrlList urls={item.urls} />
                    </p>
                    <div className="my-3 text-center">
                        <Image
                            src={item.image.src}
                            alt={item.image.alt}
                            quality={100}
                        />
                    </div>
                    <blockquote>{item.description}</blockquote>
                </header>

                <main className="mt-14">
                    {item.children}
                </main>
            </article>
        </MainComponent>
    );
}

export default PortfolioItem;