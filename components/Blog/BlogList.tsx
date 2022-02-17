import Link from "next/link";

type BlogItemData = {
    url: string;
    title: string;
    date: string;
}

function BlogList(props: { data: BlogItemData[] }) {
    return (
        <ul>
            {props.data.map((item) => (
                <li key={item.title}>
                    <Link href={"/blog/" + item.url}>
                        {`${item.title} (Published on ${item.date})`}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default BlogList;
export {BlogItemData};