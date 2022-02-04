import {useState} from "react";
import {MoreVertical, X} from "react-feather";
import {Link} from ".";

function Header() {
    const [item, setItem] = useState<boolean>(true);

    return (
        <header className="flex items-center justify-between mx-5 bg-gray px-5 py-1 rounded mt-4 drop-shadow">
            <p className="text-xl font-bold font-body"><a href="/">David Lozano</a></p>

            <nav>
                <button aria-label="Open Menu" onClick={(event) => {
                    event.preventDefault();
                    setItem(!item);
                }}>
                    <MoreVertical/>
                </button>

                {item ? "" : (
                    <div className="flex flex-col items-end py-5 px-10 fixed h-screen bg-gray inset-y-0 right-0 w-full md:w-4/12 -mx-5 -mt-4">
                        <button aria-label="Close Menu" onClick={(event) => {
                            event.preventDefault();
                            setItem(!item);
                        }}>
                            <X/>
                        </button>

                        <ul className="w-full">
                            <Link href="/instagram">Instagram</Link>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;