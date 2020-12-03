import {Link} from 'react-router-dom';

import logo from '../assets/logo/Ava-logo.png';

function Header(props) {
    return (
        <header>
            <nav className="main-nav">
                <Link to="/">
                    <img src={logo} alt="Logo"  className="main-nav__logo" />    
                </Link> 
                
            </nav>
        </header>
    )
}

export default Header;