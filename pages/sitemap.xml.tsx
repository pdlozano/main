import { GetServerSideProps } from "next";
import path from "path";
import fs from "fs/promises";

const BASE_URL = "https://davidlozano.me";

function generateSiteMap(posts: string[]) {
    return (
        `<?xml version="1.0" encoding="UTF-8"?>` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
        `<url><loc>${BASE_URL}</loc></url>` +
        `<url><loc>${BASE_URL}/blog</loc></url>` +
        `<url><loc>${BASE_URL}/portfolio</loc></url>` +
        posts
            .map((id) => `<url><loc>${`${BASE_URL}/blog/${id}`}</loc></url>`)
            .join("") +
        `</urlset>`
    );
}

function SiteMap() {}

const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const current = path.join(process.cwd(), "blog");
    const dir = await fs.readdir(current);
    const links = dir.map(async (dir): Promise<string> => {
        const reg = /(?<url>\d+)\.md/g;
        const { groups } = reg.exec(dir) || { groups: null };
        return groups?.url as string;
    });
    const ids = await Promise.all(links);
    const sitemap = generateSiteMap(ids);

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default SiteMap;
export { getServerSideProps };
