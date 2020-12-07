import {Link} from 'react-router-dom';

function Services () {
    return (
        <section id="service" className="service">
            <h2>Services</h2>
            <div className="service__container">
                <div className="service__box">
                    <h3 className="service__subtitle">Wedding</h3>
                    <div className="service__text">
                        <p className="service__detail">Bride: $90 + travel fee depending on location</p>
                        <div className="service__detail">
                            <p>Includes:</p>
                            <p>- Make up</p>
                            <p>- False lashes</p>
                            <p>- Consultation</p>
                        </div>
                        <p className="service__detail">* Touch ups on the wedding day available upon request for an additional fee</p>
                    </div>
                    <div className="service__btn-box">
                            <Link className="service__btn" to="/booking">Book Now</Link>
                    </div>
                </div>
                <div className="service__box">
                    <h3 className="service__subtitle">Photo Shoot</h3>
                    <div className="service__text">
                        <p className="service__detail">Photo Shoot: $70 + travel fee depending on location</p>
                        <div className="service__detail">
                            <p>Includes:</p>
                            <p>- Make up</p>
                            <p>- False lashes</p>
                        </div>
                        <p className="service__detail">* Touch ups on the wedding day available upon request for an additional fee</p>
                    </div>
                    <div className="service__btn-box">
                            <Link className="service__btn" to="/booking">Book Now</Link>
                    </div>
                </div>
                <div className="service__box">
                    <h3 className="service__subtitle">Special Occasion</h3>
                    <div className="service__text">
                        <p className="service__detail">Spacial Occasion: $60-90 + travel fee depending on location</p>
                        <div className="service__detail">
                            <p>Includes:</p>
                            <p>- Make up</p>
                            <p>- False lashes</p>
                        </div>
                        <p className="service__detail">* Touch ups on the wedding day available upon request for an additional fee</p>
                    </div>
                    <div className="service__btn-box">
                            <Link className="service__btn" to="/booking">Book Now</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;