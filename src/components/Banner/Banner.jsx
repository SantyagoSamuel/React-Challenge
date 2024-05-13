import Flower from "../../assets/slogan-image.png";
import './Banner.css';

function Banner(){
    return (
        <div className="dassa-banner">
            <div className="text-box">
                <p className="dassa-title">Dassa</p>
                <div>
                    <p className="slogan">"En Dassa nos preocupamos por ti, </p>
                    <p className="slogan">y por ti encontramos tu mejor opción"</p>
                </div>
                {/* <Text text="Dassa" className="dassa-title"/>
                <Text text="Nosotros encontramos tu mejor opción" className="slogan"/> */}
            </div>
            {/* <img src={Flower} alt="dassa-flower" className="dassa-flower"/> */}
        </div>
    );
}

export default Banner;