import MainComponent from "./MainComponent";
import Image, { StaticImageData } from "next/image";

type Portfolio = {
    title: string;
    content: string;
    description: string;
    tag: string;
    url: string;
    children: React.Component | React.Component[];
    image: {
        src: StaticImageData;
        alt: string;
    }
};


function PortfolioItem(item: Portfolio) {
    return (
        <MainComponent title={item.title} description={item.description}>
            <article className="item-article">
                <header>
                    <h1>{item.title}</h1>
                    <p>
                        <a href={item.url}>Source</a> | {item.tag}
                    </p>
                    <Image
                        src={item.image.src}
                        alt={item.image.alt}
                    />
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