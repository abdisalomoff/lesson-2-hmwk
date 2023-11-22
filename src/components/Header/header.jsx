import "./header.css"
import Logo from "../../assets/images/fcb-icon.svg";
import { useState } from "react";

const Header = () => {

const [burgerActive, setBurgerActive] = useState(false);

const buttonClick = () =>{
    setBurgerActive(!burgerActive)
}

return (
<div className="header ">
    <div className="container">
        <div className="header-inner">
            <a className="header-logo" href="#">
                <img src={Logo} alt="FC Barcelona" />
            </a>
            <ul className={`header-list ${burgerActive ? `active`: "" }`}>
                <li className="header-item header-item-first">
                    <a className="header-item-link" href="#">
                        First team
                    </a>
                </li>
                <li className="header-item">
                    <a className="header-item-link" href="#">
                        Club
                    </a>
                </li>
                <li className="header-item">
                    <a className="header-item-link" href="#">
                        Barça teams
                    </a>
                </li>
                <li className="header-item">
                    <a className="header-item-link" href="#">
                        Shop
                    </a>
                </li>
                <li className="header-item">
                    <a className="header-item-link" href="#">
                        Culers
                    </a>
                </li>
            </ul>
            <div class="trigger" onClick={buttonClick}>
                <svg className={`bars ${burgerActive ? `active`: "" }`} viewBox="0 0 100 100">
                    <path class="line top"
                        d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272">
                    </path>
                    <path class="line middle"
                        d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272">
                    </path>
                    <path class="line bottom"
                        d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272">
                    </path>
                </svg>
            </div>

        </div>
    </div>
</div>
)
}

export default Header