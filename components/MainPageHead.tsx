import Icons from "./Icons";

function MainPageHead() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-10/12 md:w-8/12">
                <h1>Hi! I&apos;m David.</h1>
                <p>Software Developer. Electrical Engineering Student.</p>

                <Icons/>
            </div>
        </div>
    )
}

export default MainPageHead;