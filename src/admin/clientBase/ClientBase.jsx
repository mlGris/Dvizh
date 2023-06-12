import React, { Component } from "react";

import "./ClientBase.sass";

class ClientBase extends Component {

    render() {

        const {client_num, client_fio, client_birth_date, client_city, client_description, client_phone ,client_social , client_status} = this.props

        return(
            <div className="client_base_card">
                <p className="client_num">
                    {client_num}
                </p>
                <ul className="сlient_base_form">
                    <li className="client_base_item">
                        <p className="client_fio">
                            {client_fio}
                        </p>
                    </li>
                    <li className="client_base_item">
                        <p className="client_phone">
                            {client_phone}
                        </p>
                    </li>
                    <li className="client_base_item">
                        <p className="client_birth_date">
                            {client_birth_date}
                        </p>
                    </li>
                    <li className="client_base_item">
                        <p className="client_city">
                            {client_city}
                        </p>
                    </li>
                    <li className="client_base_item">
                        <p className="client_social">
                            {client_social}
                        </p>
                    </li>
                    <li className="client_base_item">
                        <p className="client_status">
                            {client_status}
                        </p>
                    </li>
                    <li className="client_base_item">
                        <p className="client_description">
                            {client_description}
                        </p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ClientBase;