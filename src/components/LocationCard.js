import React from 'react';
import '../styles/cardstyle.css';
import {withRouter} from "react-router";

class LocationCard extends React.Component {

    goToCarddetails = (cardId) => {
        let location = this.props.location;
        this.props.history.push({pathname: '/detail', state: {detail: cardId, location}});
    }

    render() {
        return (
            <div className="location_card">
                <div className="card_body_loc">
                    <h1>Name: {this.props.locat.name} </h1>
                    <h1>Type: {this.props.locat.type} </h1>
                    <h1>Dimension: {this.props.locat.dimension} </h1>
                </div>
                <div className="card_footer">
                    <form action={'/location/detail/' + this.props.locat.id} method="get">
                        <button type="submit" className="location_card_button">
                            Click for more details
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(LocationCard);
