import type { NextPage } from "next";
import Image from "next/image";
import MainComponent from "../components/MainComponent";
import Trivia from "../components/About/Trivia";
import Me from "../public/me.jpg";

const Home: NextPage = () => {
    return (
        <MainComponent title="About">
            <h1>About Me</h1>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 my-3">
                <div className="col-span-2">
                    <Image
                        src={Me}
                        alt="A picture of me."
                        placeholder="blur"
                        objectFit="cover"
                    />
                </div>

                <div className="col-span-3">
                    <p>
                        My name is David. I usually spend most of my weekdays
                        studying and coding. Right now, I am progressing my body
                        to where I want it to be.
                    </p>

                    <Trivia />
                </div>
            </div>

            <div>
                <h2>Some of the things I do</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="intro zap">
                        <h3>I am working on an Electrical Engineering degree.</h3>

                        <p>
                            Currently, I am studying Electrical Engineering and
                            working both for a degree and a license.
                        </p>
                    </div>

                    <div className="intro code">
                        <h3>I am a web developer in my free time.</h3>

                        <p>
                            If I am not working on my studies or my hobbies, you
                            will likely see me coding a website.
                        </p>

                        <p>
                            Despite being a self taught web developer, I have
                            been building sites since 2017 and consistently
                            honing my skills on the field.
                        </p>
                    </div>

                    <div className="intro bar-chart">
                        <h3>I am learning Artificial Intelligence.</h3>

                        <p>
                            When there is still time left in the day for some
                            more tasks, I learn Artificial Intelligence.
                        </p>
                    </div>
                </div>
            </div>
        </MainComponent>
    );
};

export default Home;
