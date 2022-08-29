import { useState } from "react";

type TriviaItemProps = {
    title: string;
    truth: boolean;
    children?: JSX.Element | JSX.Element[];
}

function TriviaItem(props: TriviaItemProps) {
    const [clicked, setClicked] = useState(false);

    return (
        <div onClick={() => setClicked(!clicked)} className="trivia-item">
            <h3>{props.title}</h3>

            <div className={clicked ? "" : "hidden"}>
                <p>
                    <span className={"px-2 rounded-md " + (props.truth ? "bg-green" : "bg-red-600")}>
                        {props.truth ? "TRUTH" : "LIE"}
                    </span>
                </p>

                {props.children}
            </div>
        </div>
    )
}

function Trivia() {
    return (
        <div>
            <h2>Two Truths and a Lie</h2>
            <p>One of these is a lie. Which is it?</p>

            <div className="bg-gray-700">
                <TriviaItem title="I am lactose intolerant" truth={true}>
                    <p>
                        Unfortunately, my Asian genes did not bless me with the
                        ability to drink milk. I get horrible loose bowel
                        movements on anything milk.
                    </p>
                    <p>
                        I can still eat cheese don&apos;t worry. But animal milk
                        is definitely a no-no. Instead of those, I drink soy or
                        almond milk.
                    </p>
                </TriviaItem>

                <TriviaItem title="I am addicted to collecting water bottles" truth={true}>
                    <p>
                        I currently have seven. I still want more. I do not ever
                        know why I want more knowing I have more than enough.
                    </p>
                </TriviaItem>

                <TriviaItem title="I wanted to be an astronaut when I was a child" truth={false}>
                    <p>
                        My child dream was to become a pilot. I do not have any
                        passion be one anymore.
                    </p>
                </TriviaItem>
            </div>
        </div>
    );
}

export default Trivia;