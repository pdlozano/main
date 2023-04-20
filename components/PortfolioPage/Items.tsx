import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const allTags: string[] = ["Data Science", "Web Development"];

type PortfolioItem = {
    id: number;
    title: string;
    description: string;
    tag: string;
    url: string;
    image: {
        src: StaticImageData;
        alt: string;
    };
};

type PageProps = {
    data: PortfolioItem[];
};

function Items(props: PageProps) {
    const [activeTags, setActiveTags] = useState<string[]>(allTags);

    return (
        <div>
            <div className="flex flex-col md:flex-row bg-gray rounded-md px-5 py-2 md:items-center justify-between">
                <p className="m-0 font-bold">Filter</p>

                <div>
                    {allTags.map((tag) => <button
                        className={activeTags.includes(tag) ? "active-tag" : "inactive-tag"}
                        onClick={(event) => {
                            event.preventDefault();
                            const newTags = activeTags.includes(tag)
                                ? activeTags.filter((t) => t !== tag)
                                : [...activeTags, tag];

                            setActiveTags(newTags);
                        }}
                        key={tag}
                    >{tag}</button>)}
                </div>
            </div>

            <div>
                {props.data
                    .filter((item) => activeTags.includes(item.tag))
                    .map((item) => (
                        <Link href={"/portfolio/" + item.id} key={item.id}>
                            <a className="link-box grid lg:grid-cols-5 gap-3">
                                <div className="lg:col-span-2">
                                    <Image src={item.image.src} alt={item.image.alt} />
                                </div>

                                <div className="lg:col-span-3">
                                    <h2>{item.title}</h2>
                                    <p className="portfolio-tag"><strong>TAG</strong>: {item.tag}</p>
                                    <p className="text-white">{item.description}</p>
                                </div>
                            </a>
                        </Link>
                    ))}
            </div>
        </div>
    );
}

export default Items;
export type { PortfolioItem, PageProps };
