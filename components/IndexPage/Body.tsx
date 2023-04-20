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
                <p>I am a proud Filipino and studying Data Science in my free time. I have been coding for the web since
                    2017 when I first touched HTML and JS. Today, I code mostly in Python and do a lot of data analysis
                    with Excel. Not everyone can understand what the data is telling you so I make sure that the models
                    and dashboards I build are understandable and human.</p>

                <p>If you want to collaborate on a project, feel free to message me through my email
                    (pauldavidlozano@gmail.com).</p>
            </div>
        </div>
    );
}

export default Body;
