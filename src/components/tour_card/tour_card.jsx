import React, {Component } from "react";

import './tour_card.sass';

class TourCard extends Component {

    render (){

        const {tour_name, src , total_num_persons, num_persons, last_date_tour, first_date_tour} = this.props;

        return (
            <div className={"card_item"} style={{backgroundImage:`url(${src})`}}>
                <p className="num_persons">{num_persons}/{total_num_persons}</p>
                <p className="date_tour">{first_date_tour} - {last_date_tour}</p>
                <div className="tour_description" >
                    <h2>
                        {tour_name}
                    </h2>
                </div>   
            </div>
        );
    }
}

export default TourCard;