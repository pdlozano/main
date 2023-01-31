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
                        My name is David. I don&apos;t know how it started, but a few years after I started college, I
                        started to have a passion on the issue of financial literacy. And not just financial literacy
                        but financial accessibility as well. I genuinely believe that the financial system should not be
                        scary to anyone and that everyone should have a *choice* to be able to participate in it. It is
                        my belief that with better data and models, we can make financial institutions take lesser risks
                        and have better products for everyone.
                    </p>

                    <Trivia />
                </div>
            </div>

            <div>
                <h2>Some of the things I do</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="intro code">
                        <h3>I am learning everything data related.</h3>

                        <p>
                            Data can be hard to interpret by decision makers who know nothing about what a normal
                            distribution or Bayes factor is. I want to be the translator between data and these people
                            so that they make better decisions. Whether it is creating models that recommend the best
                            product, or a dashboard to understand key metrics of a business, I like to learn more about
                            statistics and data to help make the translation easier to understand.
                        </p>
                    </div>

                    <div className="intro bar-chart">
                        <h3>I play games in my free time.</h3>

                        <p>
                            These include competitive Pokemon (VGC mostly), Minecraft, and Stardew Valley. Occasionally
                            Civilization and Cities: Skylines. If you want me to try a game, please let me know. I
                            prefer games that don&apos;t have huge hardware requirements and have a high replayability
                            factor.
                        </p>
                    </div>
                </div>
            </div>
        </MainComponent>
    );
};

export default Home;
