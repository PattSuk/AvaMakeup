import {Link} from 'react-router-dom';

import logo from '../assets/logo/Ava-logo.png';

function Header(props) {
    const navToggle = () => {
        const navBar = document.querySelector(".header__nav");

        if(navBar.style.display === "none") {
            navBar.style.display = "block";
        } else {
            navBar.style.display = "none";
        }
    }

    return (
        <header className="header">
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
                <li className="header__item"><Link className="header__link" to="/#about">About</Link></li>
                <li className="header__item"><Link className="header__link" to="/#service">Service</Link></li>
                <li className="header__item"><Link className="header__link" to="/#portfolio">Portfolio</Link></li>
                <li className="header__item"><Link className="header__link" to="/#contact">Contact</Link></li>
            </nav>
        </header>
    )
}

export default Header;