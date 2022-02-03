import {useState} from "react";
import {Menu} from "react-feather";
import {Link} from ".";

function Header() {
    const [item, setItem] = useState<boolean>(false);

    return (
        <header className="flex items-center justify-between mx-5 bg-gray px-5 py-1 rounded mt-4 drop-shadow">
            <p className="text-xl font-bold font-body">David Lozano</p>

            <div>
                <button aria-label="Menu" onClick={(event) => {
                    event.preventDefault();
                    setItem(!item);
                }}>
                    <Menu />
                </button>

                {item ?
                    <ul className="">
                        <Link href="/instagram">Instagram</Link>
                    </ul>
                    : ""
                }
            </div>

        </header>
    );
}

export default Header;