import {Link} from 'react-router-dom';

import logo from '../assets/logo/Ava-logo.png';

function Header() {
    const navToggle = () => {
        const navBar = document.querySelector(".header__nav");

        const size = window.matchMedia("(max-width: 767px)");

        if(size.matches) {
            if(navBar.style.display === "none") {
                navBar.style.display = "block";
            } else {
                navBar.style.display = "none";
            }
        }
    }

    return (
        <header className="header" id="top">
            <div className="header__main">      
                <Link to="/">
                    <img src={logo} alt="Logo"  className="header__logo" />  
                </Link> 
                <button className="header__toggle toggle-icon" onClick={navToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <nav className="header__nav">
                <li className="header__item"><a onClick={navToggle} className="header__link" href="/#about" >About</a></li>
                <li className="header__item"><a onClick={navToggle} className="header__link" href="/#service">Service</a></li>
                <li className="header__item"><a onClick={navToggle} className="header__link" href="/#portfolio">Portfolio</a></li>
                <li className="header__item"><Link onClick={navToggle} className="header__link" to="/contact">Contact</Link></li>
            </nav>
        </header>
    )
}

export default Header;