import React, { Component } from "react";

import "./report_base.sass";

class ReportBase extends Component {

    render() {

        return(
            <div className="report_base_card">
                <ul className="report_base_table">
                    <li className="report_base_item">
                        <p className="report_base_results"> Наименование тура</p>
                    </li>
                    <li className="report_base_item">
                        <p className="report_base_results">Дата тура</p>
                    </li>
                    <li className="report_base_item">
                        <p className="report_base_results">Кол-во мест</p>
                    </li>
                    <li className="report_base_item">
                        <p className="report_base_results">Общая выручка</p>
                    </li>
                    <li className="report_base_item">
                        <p className="report_base_results">Общие траты</p>
                    </li>
                    <li className="report_base_item">
                        <p className="report_base_results">Прибыль</p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ReportBase;