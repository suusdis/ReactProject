import '../styles/cardstyle.css';
import React from "react";
import DetailCard from "./DetailCard";

class DetailPage extends React.Component {

    render() {
        let card;

        card = <DetailCard type={this.props.match.params.type} id={this.props.match.params.id}></DetailCard>;

        return (
            <section className="detail-list">
                <center><h2>Detail page</h2></center>
                <div className="card_container">
                    {card}
                </div>
            </section>
        );
    }
}

export default DetailPage;