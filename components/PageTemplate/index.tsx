import MainComponent, {MainProps} from "../MainComponent";
import Icons from "../Icons";
import Header from "./Header";

function Link(props: {
    href: string;
    children: string;
}) {
    return <li><a href={props.href}>{props.children}</a></li>
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
export { Link };