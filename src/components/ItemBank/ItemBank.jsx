import { useState } from "react";
import './ItemBank.css'

function ItemBank( {urlImg, bankName, description, age} ) {
    return (
        <li className="iterable-item">
            <img src={urlImg} alt="bank-logo" className="bank-logo"/>
            <div className="info">
                <p className="info-name">{bankName}</p>
                <br></br>
                <p className="info-description">{description}</p>
                <p className="info-age">
                    Antiguedad: {age} años
                </p>
            </div>
        </li>
    );
}

export default ItemBank;