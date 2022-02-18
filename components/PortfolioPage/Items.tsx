import PortfolioItem from "./PortfolioItem";
import Pokemon from "../../public/portfolio/pokemon.jpg";
import Advocacy from "../../public/portfolio/gay-blood.jpg";

function Items() {
    return (
        <div>
            <PortfolioItem
                title="Pokemon Team Stats and Coverage App"
                link="https://github.com/pdlozano/pokemon"
                website="https://pokemon.davidlozano.me"
                image={Pokemon}
            >
                I play Pokemon in my free time and one of the things I have a
                hard time doing is making sure my team has proper coverage and
                is strong enough to defeat teams. Thus, this was born out of
                personal need.
            </PortfolioItem>

            <PortfolioItem
                title="Advocacy Page for Allowing Gays to Donate"
                link="https://github.com/pdlozano/advocacy-school"
                website="https://gay-blood.davidlozano.me"
                image={Advocacy}
            >
                This is originally a school project that I just decided to keep.
                The advocacy is something I firmly believe in and would help our
                LGBT brothers and sisters save lives.
            </PortfolioItem>
        </div>
    );
}

export default Items;
