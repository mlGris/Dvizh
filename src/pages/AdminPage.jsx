import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import admin__key from "../utils/admin__key.js";

import './Pages.sass';


class AdminPage extends Component {

    render() {

        return (
            <main className="admin_page">
                <NavLink to={`${admin__key}/tour_base`} className="admin_nav_item">
                    база туров
                </NavLink>
                <NavLink to={`${admin__key}/client_base`} className="admin_nav_item">
                    база клиентов
                </NavLink>
                <NavLink to={`${admin__key}/report_base`} className="admin_nav_item">
                    бухгалтерия
                </NavLink>
            </main>
        );
    }
}

export default AdminPage;