import { useState } from "react";
import { ArrowDown, ArrowUp } from "react-feather";
import Link from "next/link";

function Header() {
    const [item, setItem] = useState<boolean>(true);

    return (
        <header className="site-header mb-4 sticky top-0 z-10 md:px-5 md:py-2">
            <div className="header-footer items-center w-full justify-between md:mx-0">
                <p className="text-xl font-bold font-body text-center md:text-left my-2">
                    <Link href="/">David Lozano</Link>
                </p>

                <nav className="relative flex items-center justify-end">
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            setItem(!item);
                        }}
                        className="my-3 md:hidden z-10 absolute"
                    >
                        {item ? <ArrowDown /> : <ArrowUp />}
                    </button>

                    <ul
                        className={
                            "hamburger flex " +
                            (item ? "hamburger-hidden" : "hamburger-shown")
                        }
                    >
                        <li className="header-item">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="header-item">
                            <Link href="/portfolio">Portfolio</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
