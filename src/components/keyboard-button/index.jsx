import React from 'react';

import './button.scss';

const Button = (props) => {
    return (
        <div className={`button button_color_${props.colorName} button_color_${props.buttonActive}_active button_width_${props.buttonWidth} ${props.buttonHit}`}>
            <p className="text button__text">{props.buttonKey}</p>
        </div>
    )
}

export default Button;