import React, { Component } from "react";

import TourBaseItem from "../admin/tourBaseItem/TourBaseItem.jsx";

import TOUR_LIST from "../components/bd/tourlist.js";

import './Pages.sass';

class TourBasePage extends Component {

    render() {

        const tours_active = TOUR_LIST.filter(({ tour_status, b_actual }) => (
            tour_status === 1 && b_actual === 1
        ));
        const tours_calc = TOUR_LIST.filter(({ tour_status, b_actual }) => (
            tour_status === 2 && b_actual === 1
        ));
        const tours_completed = TOUR_LIST.filter(({ tour_status, b_actual }) => (
            tour_status === 0 && b_actual === 1
        ));

        return (
            <section className="tours_base_page">
                <p className="tours_name_list">Активные туры</p>
                <div className="all_tours">
                    {tours_active.map(({ id, tour_status, src, tour_name, total_num_persons, num_persons, tour_first_date, tour_last_date }) => (
                        <TourBaseItem
                            key={`${id}${tour_name}`}
                            tour_status={tour_status}
                            id={id}
                            src={src}
                            tour_name={tour_name}
                            num_persons={num_persons}
                            total_num_persons={total_num_persons}
                            tour_first_date={tour_first_date}
                            tour_last_date={tour_last_date}
                        />))}
                </div>
                <p className="tours_name_list">В процессе расчета</p>
                <div className="all_tours">
                    {tours_calc.map(({ id, tour_status, src, tour_name, total_num_persons, num_persons, tour_first_date, tour_last_date }) => (
                        <TourBaseItem
                            key={`${id}${tour_name}`}
                            tour_status={tour_status}
                            id={id}
                            src={src}
                            tour_name={tour_name}
                            num_persons={num_persons}
                            total_num_persons={total_num_persons}
                            tour_first_date={tour_first_date}
                            tour_last_date={tour_last_date}
                        />))}
                </div>
                <p className="tours_name_list">Завершенные туры</p>
                <div className="all_tours">
                    {tours_completed.map(({ id, tour_status, src, tour_name, total_num_persons, num_persons, tour_first_date, tour_last_date }) => (
                        <TourBaseItem
                            key={`${id}${tour_name}`}
                            tour_status={tour_status}
                            id={id}
                            src={src}
                            tour_name={tour_name}
                            num_persons={num_persons}
                            total_num_persons={total_num_persons}
                            tour_first_date={tour_first_date}
                            tour_last_date={tour_last_date}
                        />))}
                </div>
            </section>
        );
    }

}

export default TourBasePage;


