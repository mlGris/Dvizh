import React, { Component } from 'react';

import ClientBase from '../admin/clientBase/ClientBase';
import CLIENT_BASE from '../components/bd/clientbase';

class ClientBasePage extends Component {

    render() {

        let client_num = 0;

        return (
            <section className="client_base_page">
                    {CLIENT_BASE.map(({ client_fio, client_birth_date, client_city, client_description, client_phone, client_social, client_status }) => (
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
            </section>
        );
    }
}

export default ClientBasePage;