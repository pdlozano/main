import Introduction from "./Introduction";
import dynamic from "next/dynamic";

const Items = dynamic(() => import("./Items"));

function PortfolioPage() {
    return (
        <>
            <Introduction />
            <Items />
        </>
    );
}

export default PortfolioPage;
