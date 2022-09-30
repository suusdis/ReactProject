import '../styles/cardstyle.css';
import React from "react";
import CharacterCard from "./CharacterCard";

class CharacterList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characterData: {},
            nextPage: 'https://rickandmortyapi.com/api/character',
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
                    characterData: data.results,
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
                        characterData: data.results,
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
        fetch('https://rickandmortyapi.com/api/character?name=' + this.state.value).then(response => {
            response.json().then(data => {
                if (!data.error) {
                    this.setState({characterData: data.results});
                }
            });
        });
        event.preventDefault();
    }

    middlePage = (cards) => {
        return (
            <section className="character-list">
                <center><h3>Characters</h3></center>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
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
            <section className="character-list">
                <center><h3>Characters</h3></center>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
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
            <section className="character-list">
                <center><h3>Characters</h3></center>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
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

        for (let i = 0; i < this.state.characterData.length; i++) {
            cards.push(<CharacterCard key={this.state.characterData[i].id}
                                      chars={this.state.characterData[i]}></CharacterCard>);
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

export default CharacterList;
