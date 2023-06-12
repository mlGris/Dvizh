import React, {Component} from "react";
import { NavLink } from "react-router-dom";

import './header.sass';


class Header extends Component {

  render() {

    return (
      <header className="header">
        <nav className="nav_container">
          <ul className="nav_menu">
            <li className="company_name">
              <NavLink to="/" className="brand" > 
                DVIZH TOUR
              </NavLink>
            </li>
          </ul>
        </nav>    
      </header>
    );
  }
}

export default Header;