import React, { Component } from "react";

import './tour_base.sass';

import {SlBriefcase} from 'react-icons/sl';
import {SlPlus} from 'react-icons/sl';
import {SlTrash} from 'react-icons/sl';

class TourBaseNoActual extends Component {

    render() {

        const {tour_name, total_num_persons, num_persons, last_date_tour, first_date_tour} = this.props;

        return (
                <div className='tour_item no_actual_tour' >
                    <div className="tour_description">
                        <p className="num_persons">{num_persons}/{total_num_persons}</p>
                        <p>{tour_name}</p>
                        <p className="date_tour">{first_date_tour} - {last_date_tour}</p>
                    </div>
                    <ul className="change_menu">
                        <li className="change_item">
                            <SlBriefcase />
                        </li>
                        <li className="change_item">
                            <SlPlus />
                        </li>
                        <li className="change_item">
                            <SlTrash />
                        </li>
                    </ul>  
                </div>
        );
    }
}

export default TourBaseNoActual;