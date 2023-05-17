import React, {Component} from "react";

import TourBaseActual from "./tour_base/tour_base_actual.jsx";
import TourBaseCalculation from "./tour_base/tour_base_calculation";
import TourBaseNoActual from "./tour_base/tour_base_no_actual.jsx";
import ClientBase from "./client_base/client_base.jsx";
import ReportBase from "./report_base/report_base.jsx";

import CLIENT_BASE from "../components/bd/clientbase.js";
import TOUR_LIST from "../components/bd/tourlist";

import './admin_panel.sass';


class AdminPanel extends Component {
    
    render () {

        let client_num = 0;

        const status = 2;

        const active = TOUR_LIST.filter(({status_tour, b_actual}) => (
            status_tour === 1 && b_actual === 1
        ));
        const calculation = TOUR_LIST.filter(({status_tour, b_actual}) => (
            status_tour === 2 && b_actual === 1
        ));
        const no_active = TOUR_LIST.filter(({status_tour, b_actual}) => (
            status_tour === 0 && b_actual === 1
        ));

        const tour_panel = <section className="tours_base">
        <div className="all_tours actual_tours">
            <p className="tours_name_list">Активные туры</p>
            {active.map(({id, src, tour_name, total_num_persons, num_persons, last_date_tour, first_date_tour}) => (
                <TourBaseActual
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
        <div className="all_tours calc_tours">
            <p className="tours_name_list">В процессе расчета</p>
            {calculation.map(({id, src, tour_name, total_num_persons, num_persons, last_date_tour, first_date_tour}) => (
                <TourBaseCalculation 
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
        <div className="all_tours no_actual_tours">
            <p className="tours_name_list">Не активные туры</p>
            {no_active.map(({id, src, tour_name, total_num_persons, num_persons, last_date_tour, first_date_tour}) => (
                <TourBaseNoActual 
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
    </section>

        const client_panel =  <section className="client_base">
        <div className="client_base_container">
            {CLIENT_BASE.map(({client_fio, client_birth_date, client_city, client_description, client_phone ,client_social , client_status}) => (
                    <ClientBase
                        client_num={client_num++}
                        client_fio={client_fio}
                        client_birth_date={client_birth_date}
                        client_city={client_city}
                        client_description={client_description}
                        client_phone={client_phone}
                        client_social={client_social}
                        client_status={client_status}
                    />
                ))} 
        </div>
    </section>

        const report_panel = <section className="report_base">
        <ReportBase />
    </section>

        return(
            <main className="admin_main">
                {status === 0 ? tour_panel : status === 1 ? client_panel : status === 2 ? report_panel : '' }
            </main>
        );
    }
}

export default AdminPanel;