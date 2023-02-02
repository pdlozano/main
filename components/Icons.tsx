import { Mail, Phone, GitHub, Linkedin, Instagram } from "react-feather";
import { Fragment } from "react";

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

type IconProps = {
    moreIcons?: boolean;
}

function Icons(props: IconProps) {
    return (
        <div className="flex flex-wrap">
            <Icon
                href="mailto:hello@davidlozano.me"
                label="Email"
                icon={<Mail />}
            />
            <Icon href="tel:+639276880048" label="Phone" icon={<Phone />} />
            <Icon
                href="https://www.linkedin.com/in/pdlozano/"
                label="LinkedIn"
                icon={<Linkedin />}
            />

            {props.moreIcons ? (
                <Fragment>
                    <Icon
                        href="https://github.com/pdlozano"
                        label="GitHub"
                        icon={<GitHub />}
                    />

                    <Icon
                        href="https://instagram.com/pd.lozano"
                        label="Instagram"
                        icon={<Instagram />}
                    />
                </Fragment>
            ) : ""}
        </div>
    );
}

export default Icons;
