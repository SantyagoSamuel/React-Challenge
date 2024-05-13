import { useState } from "react";

function NavBar() {
    return (
        <ul className="navbar">
            <li className="navbar-item">
                <a href="">Inicio</a>
            </li>
            <li className="navbar-item">
                <a href="">Servicios</a>
            </li>
            <li className="navbar-item">
                <a href="">Acerca de Dassa</a>
            </li>  
        </ul>
    )
}

export default NavBar;