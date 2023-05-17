import React, { Component, Fragment } from "react";

import './active_card_menu.sass';

class ActiveCardMenu extends Component {

    render () {

        return (
            <Fragment>
                <li className="tour_card_menu_item">
                <a href="#">Описание тура</a>
                </li>
                <li className="tour_card_menu_item" >
                <a href="#">Участники тура</a>
                </li>
                <li className="tour_card_menu_item" >
                <a href="#">Бухгалтерия</a>
                </li>
            </Fragment>
        );
    }
}

export default ActiveCardMenu;