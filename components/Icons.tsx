import { Mail, Phone, GitHub } from "react-feather";

type IconData = {
    href: string;
    label: string;
    icon: JSX.Element;
};

function Icon(props: IconData) {
    return (
        <a
            href={props.href}
            aria-label={props.label}
            className="front-page-social-icons"
        >
            {props.icon}
        </a>
    );
}

function Icons() {
    return (
        <div className="flex flex-wrap">
            <Icon
                href="mailto:hello@davidlozano.me"
                label="Email"
                icon={<Mail />}
            />
            <Icon href="tel:+639276880048" label="Phone" icon={<Phone />} />
            <Icon
                href="https://github.com/pdlozano"
                label="GitHub"
                icon={<GitHub />}
            />
        </div>
    );
}

export default Icons;
