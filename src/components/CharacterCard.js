import React from 'react';
import '../styles/cardstyle.css';
import {withRouter} from "react-router";

class CharacterCard extends React.Component {
    render() {
        return (
            <div className="character_card">
                <div className="card_body_char">
                    <img src={this.props.chars.image} alt="rick and morty"/>
                    <h1>Name: {this.props.chars.name} </h1>
                    <h1>Species: {this.props.chars.species} </h1>
                    <h1>Gender: {this.props.chars.gender}</h1>
                    <h1>Status: {this.props.chars.status}</h1>
                </div>
                <div className="card_footer">
                    <form action={'/character/detail/' + this.props.chars.id} method="get">
                        <button type="submit" className="character_card_button">
                            Click for more details
                        </button>
                    </form>
                </div>
            </div>
        )
    };
}

export default withRouter(CharacterCard);
