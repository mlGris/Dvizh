import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./button.sass";

const Button = ({
    children, onClick, className, active
    }) => {
    
    const classes = classNames(
        'button_style',
        className,
        { active },
    );
    
    return( 
            <container className='button_container'>
                <button
                    className={classes}
                    onClick={onClick}
                 >{children}</button>
            </container>
        );
    }

    Button.propTypes = {
        children: PropTypes.node,
        onClick: PropTypes.func,
        className: PropTypes.string,
        active: PropTypes.bool,
    };

    Button.defaultProps = {
        children: 'Кнопочка',
        onClick: () => {},
        className: '',
        active: false,
    };

export default Button;