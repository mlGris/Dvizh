import React, { Component } from "react";

import TourCardActive from "../components/tourCardActive/TourCardActive";
import TourCard from "../components/tourCard/TourCard";
import TOUR_LIST from "../components/bd/tourlist";

import './Pages.sass';


class TourPage extends Component {


    render() {

        const cardContainerStyle = () => {
            const seacrhActiveCard = TOUR_LIST.filter(({card_active}) => (
                card_active === true
            ))
            return (seacrhActiveCard.length === 1 ? 'tour_card_container' : 'tour_card_container all_cards')
        }

        return (
            <main className="tours_user_page">
                {TOUR_LIST.map(({ id, b_actual, card_active, tour_descr, tour_card, src, tour_name, total_num_persons, num_persons, tour_last_date, tour_first_date }) => (
                    card_active === true && b_actual === 1 ? (
                        <TourCardActive
                            key={`${id}${tour_card}`}
                            id={id}
                            src={src}
                            tour_descr={tour_descr}
                            tour_name={tour_name}
                            num_persons={num_persons}
                            total_num_persons={total_num_persons}
                            tour_last_date={tour_last_date}
                            tour_first_date={tour_first_date}
                        />
                    ) : '')
                )}
                <div className={cardContainerStyle()}>
                    {TOUR_LIST.map(({ id, card_active, b_actual, src, tour_name, total_num_persons, num_persons, tour_last_date, tour_first_date }) => (
                        card_active === false && b_actual === 1 ? (
                            <TourCard
                                key={`${id}${tour_name}`}
                                id={id}
                                src={src}
                                tour_name={tour_name}
                                num_persons={num_persons}
                                total_num_persons={total_num_persons}
                                first_date_tour={tour_first_date}
                                last_date_tour={tour_last_date}
                            />
                        ) : '')
                    )}
                </div>
            </main>
        );
    }
}

export default TourPage;