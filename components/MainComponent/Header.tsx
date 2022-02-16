import {useState} from "react";
import {MoreHorizontal} from "react-feather";
import Link from "next/link";

function Header() {
    const [item, setItem] = useState<boolean>(true);

    return (
        <header className="header-footer flex-col md:flex-row items-center">
            <p className="text-xl font-bold font-body w-48 text-center md:text-left"><Link href="/">David Lozano</Link></p>

            <nav className="flex flex-col md:flex-row w-full items-center justify-end">
                <button onClick={(event) => {
                    event.preventDefault();
                    setItem(!item);
                }} className="my-3 md:hidden"><MoreHorizontal/></button>

                <ul className={"md:flex flex-col md:flex-row text-center " + (item ? "hidden" : "")}>
                    <li className="header-item">Blog</li>
                    <li className="header-item">Portfolio</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;