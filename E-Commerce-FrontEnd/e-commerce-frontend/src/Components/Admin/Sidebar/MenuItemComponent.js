import React from 'react';
import { bool, func, string } from 'prop-types';

function MenuItemComponent(props) {

    const { active, icon, title, ...otherProps } = props;
    return (
        <div className="menu-item-container" vertical="center" {...otherProps}>
            {active && <div className="menu-item-ActiveBar"></div>}
            <span className="menu-item-title">{title}</span>
        </div>
    );
}

MenuItemComponent.propTypes = {
    active: bool,
    icon: func,
    title: string
};

export default MenuItemComponent;