import React from "react";

import PropTypes from "prop-types";
import {SlLogin} from "react-icons/sl"

import "./entry_item.sass";

const EntryItem = ({
    onClick
    }) => {
    
    return( 
            <li className='entry_item' onClick={onClick}>
                    <SlLogin className='entry_link' />    
            </li>
        );
    }

    EntryItem.propTypes = {
        children: PropTypes.node,
        onClick: PropTypes.func,
        className: PropTypes.string,
        active: PropTypes.bool,
    };

    EntryItem.defaultProps = {
        children: 'Кнопка Меню',
        onClick: () => {},
        className: '',
        active: false,
    };

export default EntryItem;