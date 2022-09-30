import React from 'react';
import '../styles/cardstyle.css';

class DetailCard extends React.Component {
    state = {data: [], isLoading: true}

    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/' + this.props.type + '/' + this.props.id).then(response => {
            response.json().then(data => {
                if (!data.error) {
                    this.setState({data: data, isLoading: false})
                }
            })
        })
    }

    characterDetails() {
        if (this.state.isLoading) {
            return (<h1>Loading...</h1>)
        }

        let episodes = [];
        for (let i = 0; i < this.state.data.episode.length; i++) {
            episodes.push(<h1>Episodes: <a
                href={'/episode/detail/' + this.state.data.episode[i].substring(this.state.data.episode[i].lastIndexOf("/") + 1)
                }>{this.state.data.episode[i]}</a></h1>);
        }

        return (
            <div className="detail_card">
                <img src={this.state.data.image} alt="rick and morty"/>
                <h1>Name: {this.state.data.name} </h1>
                <h1>Species: {this.state.data.species} </h1>
                <h1>Gender: {this.state.data.gender}</h1>
                <h1>Status: {this.state.data.status}</h1>
                <h1>Type: {this.state.data.type}</h1>
                <h1>Origin: <a
                    href={'/location/detail/' + this.state.data.origin.url.substring(this.state.data.origin.url.lastIndexOf("/") + 1)
                    }>{this.state.data.origin.name}</a></h1>
                <h1>Last known location: <a
                    href={'/location/detail/' + this.state.data.location.url.substring(this.state.data.location.url.lastIndexOf("/") + 1)
                    }>{this.state.data.location.name}</a></h1>
                {episodes}
            </div>)
    }

    episodeDetails() {
        if (this.state.isLoading) {
            return (<h1>Loading...</h1>)
        }

        let characters = [];
        for (let i = 0; i < this.state.data.characters.length; i++) {
            characters.push(<h1>Characters: <a
                href={'/character/detail/' + this.state.data.characters[i].substring(this.state.data.characters[i].lastIndexOf("/") + 1)}>{this.state.data.characters[i]}</a>
            </h1>);
        }
        return (
            <div className="detail_card">
                <h1>Name: {this.state.data.name} </h1>
                <h1>Air date: {this.state.data.air_date} </h1>
                {characters}
            </div>)
    }

    locationDetails() {
        if (this.state.isLoading) {
            return (<h1>Loading...</h1>)
        }

        let residents = [];
        for (let i = 0; i < this.state.data.residents.length; i++) {
            residents.push(<h1>Residents: <a
                href={'/character/detail/' + this.state.data.residents[i].substring(this.state.data.residents[i].lastIndexOf("/") + 1)}>{this.state.data.residents[i]}</a>
            </h1>);
        }
        return (
            <div className="detail_card">
                <h1>Name: {this.state.data.name} </h1>
                <h1>Dimension: {this.state.data.dimension} </h1>
                <h1>Type: {this.state.data.type}</h1>
                {residents}
            </div>)
    }

    render() {
        // Here we get a warning when rendering the app which states: 
        // 'each child in a list should have a unique key prop'.
        
        switch (this.props.type) {
            case 'character':
                return this.characterDetails();

            case 'episode':
                return this.episodeDetails();

            case 'location':
                return this.locationDetails();

            default:
                return (null)
        }

    }
}

export default DetailCard;