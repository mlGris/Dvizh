import React, {Component} from 'react';
import AdminPanel from './admin/admin_panel';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import './index.sass';

class App extends Component {
 render() {

    return (
    <div className="adaptive">
      <Header />
      {/* <Main /> */}
      <AdminPanel />
      {/* <Footer /> */}
      <Footer />
    </div>
    );
 }
}

export default App;