import React, { Component } from 'react';

import ReportBase from '../admin/reportBase/ReportBase';

import TOUR_LIST from "../components/bd/tourlist.js";

import './Pages.sass'

class ReportBasePage extends Component {

    render() {
        let num = 1;
        return (
            <section className="report_base">
                <div className="report_base_filters">
                    <p> Фильтры </p>
                </div>
                <div className="report_base_names">
                    <p>№</p>
                    <p>Наименование тура</p>
                    <p>Дата тура</p>
                    <p>Кол-во человек</p>
                    <p>Общая выручка</p>
                    <p>Общие траты</p>
                    <p>Прибыль</p>
                </div>
                {TOUR_LIST.map(({tour_name, tour_last_date, tour_first_date, num_persons, total_num_persons, tour_expenses, tour_profit}) => (
                    <ReportBase 
                        num={num++}
                        tour_name={tour_name}
                        tour_last_date={tour_last_date}
                        tour_first_date={tour_first_date}
                        num_persons={num_persons}
                        total_num_persons={total_num_persons}
                        tour_expenses={tour_expenses}
                        tour_profit={tour_profit}
                    />
                ))}
            </section>
        );
    }
}

export default ReportBasePage;