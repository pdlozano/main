import Introduction from "./Introduction";
import Items, { PortfolioItem, PageProps } from "./Items";

function PortfolioPage(props: PageProps) {
    return (
        <>
            <Introduction />
            <Items {...props} />
        </>
    );
}

export default PortfolioPage;
export type { PortfolioItem, PageProps };
