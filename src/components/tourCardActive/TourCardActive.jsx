import React, {Component } from "react";

import './TourCardActive.sass';

class TourCardActive extends Component {

    render (){

        const {tour_name, tour_descr, src, num_persons, total_num_persons, tour_last_date, tour_first_date} = this.props;

        return (
            <div className="tour_card_active" style={{backgroundImage: `linear-gradient( to bottom, rgba(0,0,0, .8), rgba(0,0,0,.3)), url(${src})`}}>
                <h4>{num_persons}/{total_num_persons}</h4>
                <h2>
                    {tour_name}
                </h2>
                <h5>{tour_first_date} - {tour_last_date}</h5>
                <div className="card_item">
                    <div className="tour_description" >
                        <p>
                            {tour_descr}
                        </p>
                    </div>   
                </div>
            </div>
        );
    }
}

export default TourCardActive;