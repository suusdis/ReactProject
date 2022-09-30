import '../styles/cardstyle.css';
import React from "react";
import LocationCard from "./LocationCard";


class LocationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            LocationList: {},
            nextPage: 'https://rickandmortyapi.com/api/location',
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
                    LocationList: data.results,
                    nextPage: data.info.next,
                    previousPage: data.info.prev
                })
            })
        });
    }

    goToPreviousPage = () => {
        if (this.state.previousPage !== null) {
            fetch(this.state.previousPage).then(response => {
                response.json().then(data => {
                    this.setState({
                        LocationList: data.results,
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
        fetch('https://rickandmortyapi.com/api/location?name=' + this.state.value).then(response => {
            response.json().then(data => {
                if (!data.error) {
                    this.setState({LocationList: data.results});
                }
            });
        });
        event.preventDefault();
    }

    middlePage = (cards) => {
        return (
            <section className="location-list">
                <center><h3>Locations</h3></center>
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
                <div className="card_container">{cards}</div>
            </section>
        )
    }

    firstPage = (cards) => {
        return (
            <section className="location-list">
                <center><h3>Locations</h3></center>
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
                <div className="card_container">{cards}</div>
            </section>
        )
    }

    lastPage = (cards) => {
        return (
            <section className="location-list">
                <center><h3>Locations</h3></center>
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
                <div className="card_container">{cards}</div>
            </section>
        )
    }

    render() {
        let cards = [];

        for (let i = 0; i < this.state.LocationList.length; i++) {
            cards.push(<LocationCard key={this.state.LocationList[i].id}
                                     locat={this.state.LocationList[i]}></LocationCard>);
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

export default LocationList;
