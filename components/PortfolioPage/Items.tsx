import Link from "next/link";
import Image from "next/image";
import Pokemon from "../../public/portfolio/pokemon.jpg";
import Advocacy from "../../public/portfolio/gay-blood.jpg";

type ItemProps = {
    title: string;
    link: string;
    children: string;
    website: string;
    image: StaticImageData;
};

function Item(props: ItemProps) {
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

function Items() {
    return (
        <div>
            <Item
                title="Pokemon Team Stats and Coverage App"
                link="https://github.com/pdlozano/pokemon"
                website="https://pokemon.davidlozano.me"
                image={Pokemon}
            >
                I play Pokemon in my free time and one of the things I have a
                hard time doing is making sure my team has proper coverage and
                is strong enough to defeat teams. Thus, this was born out of
                personal need.
            </Item>

            <Item
                title="Advocacy Page for Allowing Gays to Donate"
                link="https://github.com/pdlozano/advocacy-school"
                website="https://gay-blood.davidlozano.me"
                image={Advocacy}
            >
                This is originally a school project that I just decided to keep.
                The advocacy is something I firmly believe in and would help our
                LGBT brothers and sisters save lives.
            </Item>
        </div>
    );
}

export default Items;
