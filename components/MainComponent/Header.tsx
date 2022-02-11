import {useState} from "react";
import {MoreVertical, X} from "react-feather";
import Link from "next/link";

type HeaderData = {
    setFn: (blur: boolean) => void;
}

function Header(props: HeaderData) {
    const [item, setItem] = useState<boolean>(true);

    return (
        <header className="header-footer items-center justify-between">
            <p className="text-xl font-bold font-body"><Link href="/">David Lozano</Link></p>

            <nav>
                <button aria-label="Open Menu" onClick={(event) => {
                    event.preventDefault();
                    setItem(!item);
                    props.setFn(true);
                }}>
                    <MoreVertical/>
                </button>

                {item ? "" : (
                    <div className="flex flex-col items-end py-5 px-10 fixed h-screen bg-gray inset-y-0 right-0 w-full md:w-4/12 -mx-5 -mt-4">
                        <button aria-label="Close Menu" onClick={(event) => {
                            event.preventDefault();
                            setItem(!item);
                            props.setFn(false);
                        }}>
                            <X/>
                        </button>

                        <ul className="w-full">
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;