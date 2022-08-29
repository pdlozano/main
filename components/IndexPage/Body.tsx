import Image from "next/image";
import Me from "../../public/me.jpg";

function Body() {
    return (
        <div className="grid gap-5 md:grid-cols-2 my-5">
            <div>
                <Image
                    src={Me}
                    alt="A picture of me."
                    placeholder="blur"
                    objectFit="cover"
                />
            </div>

            <div>
                <h2>About Me</h2>
                <p>
                    I am a proud Filipino and a web developer in my free time
                    when I&apos;m not studying. I have been coding for the web
                    since 2017 when I first touched HTML and JS. Today, I code
                    mostly in JS and Python.
                </p>

                <p>
                    I am currently busy with academic work and also learning
                    Data Science in my free time.
                </p>
            </div>
        </div>
    );
}

export default Body;
