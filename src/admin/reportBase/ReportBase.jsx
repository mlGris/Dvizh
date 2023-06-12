import React, { Component } from "react";

import "./ReportBase.sass";

class ReportBase extends Component {

    render() {

        const netProfitCalc = () => (tour_profit - tour_expenses)

        const { num, tour_name, total_num_persons, num_persons, tour_last_date, tour_first_date, tour_expenses, tour_profit } = this.props;

        return (
            <div className="report_base_card">
                <p>{num}</p>
                <p>{tour_name}</p>
                <p>{tour_first_date} - {tour_last_date}</p>
                <p>{num_persons}/{total_num_persons}</p>
                <p>{tour_profit}</p>
                <p>{tour_expenses}</p>
                <p>{netProfitCalc()}</p>
            </div>
        );
    }
}

export default ReportBase;