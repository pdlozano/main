import Link from "next/link";
import Image from "next/image";

type ItemProps = {
    title: string;
    link: string;
    children: string;
    website: string;
    image: StaticImageData;
};

function PortfolioItem(props: ItemProps) {
    return (
        <Link href={props.link}>
            <a className="link-box grid md:grid-cols-5 gap-3">
                <div className="md:col-span-2">
                    <Image src={props.image} alt={`Image of ${props.title}`} />
                </div>

                <div className="md:col-span-3">
                    <h2>{props.title}</h2>

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