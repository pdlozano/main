import Link from "next/link";

type BlogItemData = {
    url: string;
    title: string;
    date: string;
};

function BlogList(props: { data: BlogItemData[] }) {
    return (
        <ul>
            {props.data.map((item) => (
                <li key={item.title} className="list-none">
                    <Link href={"/blog/" + item.url}>
                        <a className="bg-gray rounded px-5 py-4 block border-2 border-gray hover:border-main-600 hover:no-underline focus:border-main-300">
                            <h2 className="text-2xl">{item.title}</h2>
                            <p className="text-sm">Published on {item.date}</p>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default BlogList;
export type { BlogItemData };
