import Icons from "../Icons";

function ForHire({ hire }: { hire: boolean }) {
    const classNameList = hire ? "bg-green" : "bg-red-600";

    return (
        <p className={"inline-block rounded px-2 italic " + classNameList}>
            {hire ? "" : "Not"} For Hire
        </p>
    );
}

function MainPageHead() {
    return (
        <div className="my-10 md:my-24 flex items-center justify-center">
            <div className="w-10/12 md:w-8/12">
                <h1>Hi! Call me David.</h1>
                <ForHire hire={false} />
                <p>I am a web developer and electrical engineering student.</p>

                <nav className="flex flex-col md:flex-row md:items-center">
                    <button className="cta mr-2">Read my Blog</button>

                    <div className="mt-5 mx-auto w-100 md:m-0">
                        <Icons />
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default MainPageHead;
