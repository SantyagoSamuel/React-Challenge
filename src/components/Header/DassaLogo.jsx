import { useState } from "react";
import logo from "../../assets/logo.png";
import './Header.css';

function DassaLogo() {
    return (
        <div className="logo-dassa-container">
            <img src={logo} alt="logo-dassa" className="logo-dassa"/>
        </div>
    );
}

export default DassaLogo;