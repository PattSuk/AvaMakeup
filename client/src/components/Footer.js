import {Link} from 'react-router-dom';

import logo_lighter from '../assets/logo/Ava-logo-lighter.png';
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/Icon-instagram.svg'

function Footer () {
    return (
        <footer className="footer">
            <Link to="/"><img className="footer__logo" src={logo_lighter} alt="logo" /></Link>
            <div className="footer__container">
                <div className="footer__icons-box">
                    <a href="https://www.facebook.com/eve.montolvit"><img className="footer__icon" src={facebook} alt="facebook icon" /></a>
                    <a href="https://www.instagram.com/eve_avalifestyle/"><img className="footer__icon" src={instagram} alt="instagram icon" /></a>
                </div>
                <div className="footer__text">
                    <p className="footer__mail"><a href="mailto:vanvara.m@gmail.com">vanvara.m@gmail.com</a></p>
                    <p>Vancouver in BC, Canada</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;