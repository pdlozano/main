import Icons from "../Icons";
import {useState} from "react";

function MainPageHead() {
    const [forHire, setForHire] = useState(false);

    return (
        <div className="mt-20 md:mt-36 flex items-center justify-center">
            <div className="w-10/12 md:w-8/12">
                <h1>Hi! Call me David.</h1>
                <p>{forHire ? "For Hire" : "Not For Hire"}</p>
                <p>I am a web developer and electrical engineering student.</p>

                <Icons/>

                <button className="cta">Read my Blog</button>
            </div>
        </div>
    )
}

export default MainPageHead;