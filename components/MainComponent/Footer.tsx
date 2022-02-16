import Icons from "../Icons";

function Footer() {
    return (
        <footer className="header-footer grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2">
                <p className="text-md">Call me David. I live in Cebu, PH and am currently a college student studying
                    electrical engineering. When I&apos;m not studying or coding, I am probably somewhere sleeping.</p>
            </div>

            <div>
                <Icons/>

                <nav className="footer-links">
                    <p>Sitemap</p>
                    <p>Blog RSS Feed</p>
                    <p>Content Policy</p>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;
