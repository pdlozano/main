import Icons from "../Icons";

function Footer() {
    return (
        <footer className="header-footer">
            <div className="w-6/12">
                <p>Call me David. I live in Cebu, PH and am currently a college student studying electrical engineering. When I'm not studying or coding, I am probably somewhere sleeping.</p>
            </div>

            <div className="w-3/12">
                <Icons />

                <nav>
                    <p>Sitemap</p>
                    <p>Blog RSS Feed</p>
                    <p>Content Policy</p>
                </nav>
            </div>

            <div className="w-3/12">
                <p>Subscribe</p>
            </div>
        </footer>
    )
}

export default Footer;
