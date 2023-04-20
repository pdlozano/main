import Link from "next/link";

function Introduction() {
    return (
        <div>
            <h1>Portfolio</h1>
            <p>
                Hi! My name is David and I have been developing websites as a hobby since 2017. While I try to make my
                site as modern as possible, I put focus on accessibility as well to make sure the site does not exclude
                people with disabilities.
            </p>
            <p>
                I have a firm belief that growth should be constant so I am constantly improving and learning new skills
                as well as time goes on. Here are some of the projects I have made over the years.{" "}
                <Link href="https://github.com/pdlozano">
                    Go to my GitHub
                    account if you want to see more info.
                </Link>
            </p>
            <p>
                Currently, my focus is on everything data so the most recent ones are likely related to data science,
                analytics, or engineering.
            </p>
        </div>
    );
}

export default Introduction;
