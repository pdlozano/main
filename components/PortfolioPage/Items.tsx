import PortfolioItem from "./PortfolioItem";
import type { Tag } from "./PortfolioItem";
import data from "./portfolio-items";
import { useState } from "react";

const allTags: Tag[] = ["Data Science", "Web Development", "Electrical Engineering"];

function Items() {
    const [activeTags, setActiveTags] = useState<Tag[]>(allTags);

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
                {data
                    .filter((item) => activeTags.includes(item.tag))
                    .map((item) => <PortfolioItem key={item.title} {...item} />)}
            </div>
        </div>
    );
}

export default Items;
