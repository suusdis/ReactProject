import React from "react";
import characterImg from "./images/characters.jpg";
import episodesImg from "./images/episodes.jpg";
import locationsImg from "./images/planets.jpg";

class Home extends React.Component {

    render() {
        return (
            <section className="Home">
                <center><h1>Welcome to the Rick and Morty Api</h1></center>
                <div className="row">
                    <div className="column">
                        <h1>Characters</h1>
                        <a href="/characters"><img src={characterImg} alt="Characters Page" width="500"
                                                   height="500"></img></a>
                    </div>
                    <div className="column">
                        <h1>Locations</h1>
                        <a href="/locations"><img src={locationsImg} alt="Locations Page" width="500"
                                                  height="500"></img></a>
                    </div>
                    <div className="column">
                        <h1>Episodes</h1>
                        <a href="/episodes"><img src={episodesImg} alt="Episodes Page" width="500"
                                                 height="500"></img></a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;
