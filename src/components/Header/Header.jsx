import { useState } from "react";
import DassaLogo from "./DassaLogo";
import NavBar from "./NavBar";
import Search from "./Search";
import './Header.css';

function Header(){
    return (
        <header className="header">
            <DassaLogo />
            <Search />
            <NavBar />
        </header>
    );
}

export default Header;