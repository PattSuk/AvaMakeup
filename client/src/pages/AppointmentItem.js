import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';

import arrow from '../assets/icons/arrow_back-24px.svg';

function AppointmentItem ({routerprops}) {
    const [ detail, setDetail] = useState(null);
    let history = useHistory();
    
    useEffect(() => {
        // console.log(routerprops);
        axios.get(`http://localhost:5000/customers/${routerprops.match.params.id}`)
            .then((response) => {
                // console.log(response.data.Image[0].fileName);
                setDetail(response.data);
                // console.log(detail);
                // console.log(detail.Image.filename);
            })
            .catch(error => console.log(error));  
    },[]);

    const confirmation = (confirm) => {
        if (confirm === null) {
            return "Have not confirmed yet!"
        } else if (confirm) {
            return "Confirmed!"
        } else if (!confirm) {
            return "Denied!"
        }
    }

    const checkMessage = (mes) => {
        if (mes === null) {
            return "-- No message --"
        } else {
            return mes;
        }
    }

    return (!detail) ? <h1>Loading ...</h1> : 
    (
        <section>
            <div className="item__header">
                {/* <Link to="/appointments" className="item__link">
                    <img src={arrow} alt="arrow back" className="item__arrow" />
                </Link> */}
                <a className="item__link" type="button" onClick={() => history.goBack()}>
                    <img src={arrow} alt="arrow back" className="item__arrow" />
                </a>
                <h1 className="item__title">Appointment Details</h1>
            </div>
            <div className="item__container">
                <div className="item__subcontainer">
                    <div className="item__box">
                        <h2 className="item__label">Name</h2>
                        <p className="item__text">{detail.User.first_name} {detail.User.last_name}</p>
                    </div>
                    <div className="item__box">
                        <h2 className="item__label">Event Date</h2>
                        <p className="item__text">{new Date(detail.datetime).toLocaleDateString()}</p>
                    </div>
                    <div className="item__box">
                        <h2 className="item__label">Event Time</h2>
                        <p className="item__text">{new Date(detail.datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    </div>
                    <div className="item__box">
                        <h2 className="item__label">Location</h2>
                        <p className="item__text">{detail.User.street_address}  {detail.User.city}  {detail.User.postal_code}</p>
                    </div>
                    <div className="item__box">
                        <h2 className="item__label">Phone Number</h2>
                        <p className="item__text">{detail.User.phone}</p>
                    </div>
                    <div className="item__box">
                        <h2 className="item__label">Email</h2>
                        <p className="item__text">{detail.User.email}</p>
                    </div>
                </div>
                <div className="item__subcontainer">
                    <div className="item__box">
                        <h2 className="item__label">Type of Event</h2>
                        <p className="item__text">{detail.Event.type_of_event}</p>
                    </div>
                    <div className="item__box">
                        <h2 className="item__label">Image</h2>
                        <img className="item__image" src={`http://localhost:5000/image/${detail.Image[0].fileName}`} />
                    </div>
                    <div className="item__box">
                        <h2 className="item__label">Messages</h2>
                        <p className="item__text">{checkMessage (detail.message)}</p>
                    </div>
                    <div className="item__box">
                        <h2 className="item__label">Status</h2>
                        <p className="item__text">{confirmation(detail.confirm)}</p>
                    </div>
                </div>
                <div className="item__btn-box">
                    <Link className="item__btn" to={`/appointments/${detail.id}/edit`} >Edit</Link>
                </div>
            </div>
        </section>
    )
}

export default AppointmentItem;