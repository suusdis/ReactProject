import React from 'react';
import '../styles/cardstyle.css';
import {withRouter} from "react-router";

class EpisodeCard extends React.Component {
    render() {
        return (
            <div className="episode_card">
                <div className="card_body_episo">
                    <h1>Episode title: {this.props.episo.name} </h1>
                    <h1>Air date: {this.props.episo.air_date} </h1>
                    <h1>Episode code: {this.props.episo.episode} </h1>
                </div>
                <div className="card_footer">
                    <form action={'/episode/detail/' + this.props.episo.id} method="get">
                        <button type="submit" className="episode_card_button">
                            Click for more details
                        </button>
                    </form>
                </div>
            </div>
        );
    };
}

export default withRouter(EpisodeCard);
