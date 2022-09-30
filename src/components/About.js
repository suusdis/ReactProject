import '../styles/cardstyle.css';
import React from "react";


class About extends React.Component {
    render() {
        return (<section className="about_container">
                <center><h3>About</h3>
                    <div className="about_card">
                        <h1>What is this?</h1>
                        <h2>This website is build to show information about the tv show "Rick and Morty". It is inspired
                            by
                            the wiki known as "FANDOM".</h2>
                        <br></br>
                        <h1>Who are we?</h1>
                        <h2>We are Team B2. A group of students from the school Windesheim Almere. We're currently
                            studying
                            the AD Software Development education.</h2>
                        <br></br>
                        <h1>Why did we build this?</h1>
                        <h2>We build this website as an assignment for the class "Web Development". Our assigment is to
                            build a website that uses the database from: "<a
                                href="https://rickandmortyapi.com">https://rickandmortyapi.com</a>".</h2>
                        <br></br>
                        <h1>Copyright?</h1>
                        <h2>Rick and Morty is created by Justin Roiland and Dan Harmon for Adult Swim. The data and
                            images
                            are used without claim of ownership and belong to their respective owners.</h2>
                    </div>
                </center>
            </section>
        );
    }
}

export default About;