import React from 'react';
import LogoIcon from '../../../../assets/icon-logo';
import '../../../../css/admin.css';

function LogoComponent() {
    return (
        <div className="logo-container" horizontal="center" vertical="center">
            <LogoIcon/>
            <span className="title">Admin</span>
        </div>
    );
}

export default LogoComponent;