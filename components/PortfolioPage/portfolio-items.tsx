import Pokemon from "../../public/portfolio/pokemon.jpg";
import Advocacy from "../../public/portfolio/gay-blood.jpg";
import Omega from "../../public/portfolio/omega.jpg";
import Sketch from "../../public/portfolio/sketch.jpg";
import Trivia from "../../public/portfolio/trivia.jpg";
import CurveFitting from "../../public/portfolio/curvefitting.png";
import AirQuality from "../../public/portfolio/air-quality.jpg";

const data = [
    {
        title: "Air Quality",
        link: "https://github.com/pdlozano/air-quality",
        website: "https://colab.research.google.com/drive/1nRLPXLP_i0ZPttsqRZJCJY_7o4RdY1RC?usp=sharing",
        image: AirQuality,
        tag: "Data Science",
        children: "This notebook graphs and analyzes the air quality data from the UCI machine learning repository. It aims to look at different compounds and see their patterns throughout the year and day. It also serves as a fun practice for Matplotlib and Pandas."
    }, {
        title: "Curve Fitting",
        link: "https://github.com/pdlozano/curve_fitting",
        website: "https://colab.research.google.com/drive/1r68-THMajh2NTwqg7gnM3FTyAc1ZuqYF?usp=sharing",
        image: CurveFitting,
        tag: "Data Science",
        children: "This is a notebook that demonstrates two curve fitting algorithms - specifically, polynomial regression and Newton interpolation. It is a fun project for practicing plotting with Plotly as well as SymPy's capabilities.",
    }, {
        title: "Pokemon Team Stats and Coverage App",
        link: "https://github.com/pdlozano/pokemon",
        website: "https://pokemon.davidlozano.me",
        image: Pokemon,
        tag: "Web Development",
        children: "I play Pokemon in my free time and one of the things I have a hard time doing is making sure my team has proper coverage and is strong enough to defeat teams. Thus, this was born out of personal need.",
    }, {
        title: "Advocacy Page for Allowing Gays to Donate Blood",
        link: "https://github.com/pdlozano/advocacy-school",
        website: "https://gay-blood.davidlozano.me",
        image: Advocacy,
        tag: "Web Development",
        children: "This is originally a school project that I just decided to keep. The advocacy is something I firmly believe in and would help our LGBT brothers and sisters save lives.",
    }, {
        title: "Omega Blog",
        link: "https://github.com/pdlozano/omega",
        website: "https://omega.davidlozano.me",
        image: Omega,
        tag: "Web Development",
        children: "A health blog I used to write. While I am not a doctor, I aimed to be that friend you talk to when you have a health problem. However, I eventually stopped since I believe I could do more harm than good.",
    }, {
        title: "Sketching App",
        link: "https://github.com/pdlozano/sketch-an-etch",
        website: "https://sketch.davidlozano.me",
        image: Sketch,
        tag: "Web Development",
        children: "One of my first projects that I was genuinely proud of. It is a simple app that lets you sketch when you hover over the items.",
    }, {
        title: "Trivia App",
        link: "https://github.com/pdlozano/trivia",
        website: "https://trivia.davidlozano.me",
        image: Trivia,
        tag: "Web Development",
        children: "A small app that quizzes you on various topics. I am surprised how niche some of the questions are (the data comes from another service). Try it out and see how much you get.",
    },
];

export default data;
