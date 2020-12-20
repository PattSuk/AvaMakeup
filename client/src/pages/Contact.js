import facebook from '../assets/icons/facebook-pink.svg'
import instagram from '../assets/icons/Icon-instagram-pink.svg'
import profile from '../assets/images/profile-contact.jpg';

function Contact () {
    return (
        <section className="contact">
            <div className="contact__container">
                <div className="contact__details">
                    <h1 className="contact__title">Keep In Touch!</h1>
                    <p className="contact__text">Hi, I'm Ava.</p>
                    <p className="contact__text">I live in Vancouver, BC, Canada</p>
                    <p className="contact__text">Email : <a className="contact__email" href="mailto:vanvara.m@gmail.com">vanvara.m@gmail.com</a></p>
                    <div className="contact__social">    
                        <p className="contact__follow">Follow me at : </p>
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/eve.montolvit"><img className="contact__icon" src={facebook} alt="facebook icon" /></a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/eve_avalifestyle/"><img className="contact__icon" src={instagram} alt="instagram icon" /></a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/avamakeupp/"><img className="contact__icon" src={instagram} alt="instagram icon" /></a>
                    </div>
                </div>
                <img className="contact__img" src={profile} alt="profile by the wall" />
            </div>
        </section>
    )
}

export default Contact;