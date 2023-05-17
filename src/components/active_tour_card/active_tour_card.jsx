import React, {Component } from "react";

import './active_tour_card.sass';

class ActiveTourCard extends Component {

    render (){

        const {tour_name, tour_descr, src, num_persons, total_num_persons, last_date_tour, first_date_tour} = this.props;

        return (
            <div className="active_item" style={{backgroundImage:`url(${src})`}}>
                <div className="tour_description" >
                    <p>
                        {tour_descr}
                    </p>
                </div>   
            </div>
        );
    }
}

export default ActiveTourCard;