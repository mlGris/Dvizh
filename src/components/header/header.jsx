import React, {Component} from "react";
import EntryItem from "../entry_item/entry_item.jsx";

import './header.sass';


class Header extends Component {

  render() {

    return (
      <header className="header">
        <nav className="nav_container">
          <ul className="nav_menu">
            <li className="company_name">
              <a href="#" className="brand">DVIZH TOUR</a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_link">
                база туров
              </a>
            </li>
            <li className="nav_item nav_active">
              <a href="#" className="nav_link">
                база клиентов
              </a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_link">
                бухгалтерия
              </a>
            </li>
            <li className="entry_menu">
              <EntryItem onClick={() => {}} children={'Вход'} />
            </li>
          </ul>
        </nav>    
      </header>
    );
  }
}

export default Header;