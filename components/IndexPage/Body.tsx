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
                    I am a proud Filipino and studying Data Science in my free time
                    when I&apos;m not studying. I have been coding for the web
                    since 2017 when I first touched HTML and JS. Today, I code
                    mostly JS and Python.
                </p>

                <p>
                    I am currently busy with academic work but if you want to
                    collaborate on a project, feel free to message me through
                    my email.
                </p>
            </div>
        </div>
    );
}

export default Body;
