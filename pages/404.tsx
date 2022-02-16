import MainComponent from "../components/MainComponent";

function _404() {
    return (
        <MainComponent title="Page Not Found">
            <h1>Error 404 - Page Not Found</h1>
            <p>This page does not exist. Perhaps you followed a wrong link?</p>
        </MainComponent>
    )
}

export default _404;