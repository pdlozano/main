import Icons from "../Icons";
import Link from "next/link";

function MainPageHead() {
    return (
        <div className="rotating-gradient p-1 flex items-center justify-center rounded-md">
            <div className="w-full bg-gray px-10 py-10 md:py-24 rounded-sm">
                <h1>Hi! Call me <span className="text-main-600">David</span>.</h1>
                <p>I am an electrical engineering student. I&apos;m studying Data Science in my spare time.</p>

                <nav className="flex flex-col md:flex-row md:items-center">
                    <Link href="/portfolio">
                        <a className="cta mr-2 text-center">View Portfolio</a>
                    </Link>

                    <div className="mt-5 w-100 md:m-0">
                        <Icons />
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default MainPageHead;
