import Icons from "../Icons";
import Link from "next/link";

function Footer() {
    return (
        <footer className="header-footer grid mt-4 gap-10 md:grid-cols-3 md:mx-5 md:my-4">
            <div className="md:col-span-2">
                <p className="text-md">
                    Call me David. I live in Cebu, PH and am currently a college student. I like everything data and I
                    study it a lot in my free time.
                </p>
            </div>

            <div>
                <Icons moreIcons={true} />

                <nav className="footer-links">
                    <p>
                        <Link href="/sitemap.xml">Sitemap</Link>
                    </p>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
