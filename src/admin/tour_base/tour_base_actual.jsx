import React, { Component } from "react";

import {SlPencil} from 'react-icons/sl';
import {SlClose} from 'react-icons/sl';

import './tour_base.sass';

class TourBaseActual extends Component {

    render() {

        const {tour_name , total_num_persons, num_persons, last_date_tour, first_date_tour} = this.props;

        return (
                <div className='tour_item actual_tour' >
                    <div className="tour_description">
                        <p className="num_persons">{num_persons}/{total_num_persons}</p>
                        <p>{tour_name}</p>
                        <p className="date_tour">{first_date_tour} - {last_date_tour}</p>
                    </div>
                    <ul className="change_menu">
                        <li className="change_item">
                            <SlPencil />
                        </li>
                        <li className="change_item">
                            <SlClose />
                        </li>
                    </ul>
                </div>
        );
    }
}

export default TourBaseActual;