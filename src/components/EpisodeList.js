import '../styles/cardstyle.css';
import React from "react";
import EpisodeCard from "./EpisodeCard";

class EpisodeList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            episodeData: {},
            nextPage: 'https://rickandmortyapi.com/api/episode/',
            previousPage: null,
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.goToNextPage();
    }

    goToNextPage = () => {
        fetch(this.state.nextPage).then(response => {
            response.json().then(data => {
                this.setState({
                    episodeData: data.results,
                    nextPage: data.info.next,
                    previousPage: data.info.prev
                });
            });
        });
    }

    goToPreviousPage = () => {
        if (this.state.previousPage !== null) {
            fetch(this.state.previousPage).then(response => {
                response.json().then(data => {
                    this.setState({
                        episodeData: data.results,
                        nextPage: data.info.next,
                        previousPage: data.info.prev
                    });
                })
            })
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        fetch('https://rickandmortyapi.com/api/episode?name=' + this.state.value).then(response => {
            response.json().then(data => {
                if (!data.error) {
                    this.setState({episodeData: data.results});
                }
            });
        });
        event.preventDefault();
    }

    middlePage = (cards) => {
        return (
            <section className="episode-list">
                <center><h3>Episodes</h3></center>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Episode title:
                        <input className="input_text" type="text" value={this.state.value}
                               onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <br></br>
                <button className="previous" onClick={this.goToPreviousPage}>Previous</button>
                <button className="next" onClick={this.goToNextPage}>Next</button>
                <div className="card_container">
                    {cards}
                </div>
            </section>
        )
    }

    firstPage = (cards) => {
        return (
            <section className="episode-list">
                <center><h3>Episodes</h3></center>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Episode title:
                        <input className="input_text" type="text" value={this.state.value}
                               onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <br></br>
                <button className="first_next" onClick={this.goToNextPage}>Next</button>
                <div className="card_container">
                    {cards}
                </div>
            </section>
        )
    }

    lastPage = (cards) => {
        return (
            <section className="episode-list">
                <center><h3>Episodes</h3></center>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Episode title:
                        <input className="input_text" type="text" value={this.state.value}
                               onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <br></br>
                <button className="previous" onClick={this.goToPreviousPage}>Previous</button>
                <div className="card_container">
                    {cards}
                </div>
            </section>
        )
    }

    render() {
        let cards = [];

        for (let i = 0; i < this.state.episodeData.length; i++) {
            cards.push(<EpisodeCard key={this.state.episodeData[i].id}
                                    episo={this.state.episodeData[i]}></EpisodeCard>);
        }

        if (this.state.previousPage && this.state.nextPage) {
            return this.middlePage(cards)
        } else if (this.state.previousPage) { // if not null; true
            return this.lastPage(cards)
        } else if (this.state.nextPage) { // if not null; true
            return this.firstPage(cards)
        }
    }
}

export default EpisodeList;
