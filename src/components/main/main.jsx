import React, { Component } from "react";

import ActiveCardMenu from "../active_card_menu/active_card_menu";
import ActiveTourCard from "../active_tour_card/active_tour_card";
import TourCard from "../tour_card/tour_card";
import TOUR_LIST from "../bd/tourlist";

import './main.sass';


class Main extends Component {


    render() {
        
        const active = TOUR_LIST.filter(({isActive}) => (
            isActive === true
        ))
        const noActive = TOUR_LIST.filter(({isActive}) => (
            isActive === false
        ))
        return(
            <main className="main_card_holder">
               <div className="card_container">
                    {noActive.map(({id, src, tour_name, total_num_persons, num_persons, last_date_tour, first_date_tour}) => (
                        <TourCard 
                            key={`${{id}}${{tour_name}}`}
                            id={id}
                            src={src}
                            tour_name={tour_name}
                            num_persons={num_persons}
                            total_num_persons={total_num_persons}
                            first_date_tour={first_date_tour} 
                            last_date_tour={last_date_tour}
                        />
                    ))}     
               </div>
                {active.map(({id, src, tour_name, tour_descr, total_num_persons, num_persons, last_date_tour, first_date_tour}) => (
                    <div className="card_container_active" style={{backgroundImage: `linear-gradient( to bottom, rgba(0,0,0, .8), rgba(0,0,0,.3)), url(${src})`}}>
                        {/* <ul className="active_card_menu">
                            <ActiveCardMenu />
                        </ul> */}
                        <h4>{num_persons}/{total_num_persons}</h4>
                        <h2>
                            {tour_name}
                        </h2>
                        <h5>{first_date_tour} - {last_date_tour}</h5>
                        <ActiveTourCard 
                            key={`${{id}}${{tour_name}}`}
                            id={id}
                            tour_descr={tour_descr}
                        />
                    </div>
                ))}
            </main>
        );
    }   
}

export default Main;