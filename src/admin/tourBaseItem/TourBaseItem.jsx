import React, { Component } from "react";

import './TourBaseItem.sass';


class TourBaseItem extends Component {

    render() {

        const baseItemStyle = () => tour_status === 0 ? 'tours_completed' : tour_status === 1 ? 'tours_active' : tour_status === 2 ? 'tours_process' : '';

        const { tour_name, tour_status, total_num_persons, num_persons, tour_last_date, tour_first_date } = this.props;

        return (
            <div className={`tour_base_item ${baseItemStyle()}`}>
                <span className="num_persons">{num_persons}/{total_num_persons}</span>
                <span className="tour_name">{tour_name}</span>
                <span className="tour_date_admin">{tour_first_date} - {tour_last_date}</span>
            </div>
        );
    }
}

export default TourBaseItem;