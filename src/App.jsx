import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import AdminPage from './pages/AdminPage';
import TourPage from './pages/ToursUserPage';
import TourBasePage from './pages/ToursBasePage';
import ClientBasePage from './pages/ClientBasePage';
import ReportBasePage from './pages/ReportBasePage';

import admin__key from './utils/admin__key';






class App extends Component {
 render() {

    return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<TourPage />} />
          <Route path={admin__key} element={<AdminPage />} />
          <Route path={`${admin__key}/tour_base`} element={<TourBasePage />} />
          <Route path={`${admin__key}/client_base`} element={<ClientBasePage />} />
          <Route path={`${admin__key}/report_base`} element={<ReportBasePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    );
 }
}

export default App;