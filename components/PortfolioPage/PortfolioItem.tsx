import Link from "next/link";
import Image from "next/image";

type Tag = "Data Science" | "Web Development" | "Electrical Engineering";

type ItemProps = {
    title: string;
    link: string;
    children: string;
    website: string;
    image: StaticImageData;
    tag: Tag;
};

function PortfolioItem(props: ItemProps) {
    return (
        <Link href={props.link}>
            <a className="link-box grid lg:grid-cols-5 gap-3">
                <div className="lg:col-span-2">
                    <Image src={props.image} alt={`Image of ${props.title}`} />
                </div>

                <div className="lg:col-span-3">
                    <h2>{props.title}</h2>
                    <p className="portfolio-tag"><strong>TAG</strong>: {props.tag}</p>

                    <Link href={props.website}>
                        <a className="cta bg-gray inline-block mt-3 w-full text-center md:w-auto">
                            See it in action here
                        </a>
                    </Link>

                    <p className="text-white">{props.children}</p>
                </div>
            </a>
        </Link>
    );
}

export default PortfolioItem;
export type { ItemProps, Tag };
