import MainComponent, {MainProps} from "./MainComponent";
import Icons from "./Icons";
import {useState} from "react";
import {Menu} from "react-feather";

function Link(props: {
    href: string;
    children: string;
}) {
    return <li><a href={props.href}>{props.children}</a></li>
}

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

function PageTemplate(props: MainProps) {
    return (
        <MainComponent title={props.title}>
            <Header/>

            <article className="grow">
                {props.children}
            </article>

            <footer>
                <Icons/>

                <ul>
                    <Link href="https://google.com">Google</Link>
                </ul>
            </footer>
        </MainComponent>
    )
}

export default PageTemplate;