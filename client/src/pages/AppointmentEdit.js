import axios from "axios";
import swal from 'sweetalert';
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

import { phoneValidation, emailValidation, validateSubmit } from '../components/utilities/validation';
import arrow from '../assets/icons/arrow_back-24px.svg';

function AppointmentEdit ({ routerprops }) {
    const [ detail, setDetail] = useState(null);
    let history = useHistory();
    
    useEffect(() => {
        // console.log(routerprops);
        axios.get(`http://localhost:5000/customers/${routerprops.match.params.id}`)
            .then((response) => {
                console.log(response.data.Image[0].fileName);
                setDetail(response.data);
                console.log(detail);
                // console.log(detail.Image.filename);
            })
            .catch(error => console.log(error));  
    },[]);

    const confirmation = (confirm) => {
        if (confirm === null) {
            return "Not confirmed yet!"
        } else if (confirm) {
            return "Confirmed!"
        } else if (!confirm) {
            return "Denied!"
        }
    }

    const showDateTime = (datetime) => {
        const newDateTime = datetime.slice(0,16);
        return newDateTime;
    }

    const updateAppointment = (event) => {
        event.preventDefault();

        const form = event.target;
        if (validateSubmit(form) && phoneValidation(form) && emailValidation(form)) {
            let eventId;
            if(form.event.value==="Wedding") {
                eventId="2";
            }else if(form.event.value==="Special Occasion") {
                eventId="1";
            }else if (form.event.value==="Photo Shoot") {
                eventId="3";
            }

            axios.put(`http://localhost:5000/customers/${routerprops.match.params.id}`, {
                firstName: form.firstName.value,
                lastName: form.lastName.value,
                streetAddress: form.streetAddress.value,
                city: form.city.value,
                postalCode: form.postalCode.value,
                phone: form.phone.value,
                email: form.email.value,
                datetime: new Date(form.datetime.value),
                message: form.message.value,
                eventId: eventId,
                confirm: form.confirm.value
            })
            .then((_response) => {
                swal("Updated!", "The information has been updated.", "success");
                // alert("Please give us up to 24 hours to reply.")
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    return (!detail) ? <h1>Loading ...</h1> : 
    (
        <section>
            <div className="item__header">
                {/* <Link to="/appointments" className="item__link"> */}
                    {/* <img src={arrow} alt="arrow back" className="item__arrow" /> */}
                {/* </Link> */}
                <a className="item__link" type="button" onClick={() => history.goBack()}>
                    <img src={arrow} alt="arrow back" className="item__arrow" />
                </a>
                <h1 className="item__title">Edit Appointment Details</h1>
            </div>
            <form className="item__container" onSubmit={ updateAppointment }>
                <div className="item__subcontainer">
                    <div className="item__box">
                        <h2 className="item__label">First Name</h2>
                        <div className="item__input-box" data-error="This field is required">
                            <input className="item__input" type="text" name="firstName" defaultValue= {detail.User.first_name} />
                            {/* <p className="item__text">{detail.User.first_name} {detail.User.last_name}</p> */}
                        </div>
                    </div>
                    <div className="item__box">
                        <h2 className="item__label">Last Name</h2>
                        <div className="item__input-box" data-error="This field is required">
                            <input className="item__input" type="text" name="lastName" defaultValue= {detail.User.last_name} />
                            {/* <p className="item__text">{detail.User.first_name} {detail.User.last_name}</p> */}
                        </div>
                    </div>
                    <div className="item__box">
                        <h2 className="item__label">Event Date &amp; Time</h2>
                        <div className="item__input-box" data-error="This field is required">
                            <input className="item__input" type="datetime-local" name="datetime" defaultValue={showDateTime(detail.datetime)} />
                            {/* <p>{detail.datetime}</p> */}
                        </div>
                    </div>
                    <div className="item__box">
                        <h2 className="item__label">Location</h2>
                        <div className="item__input-box" data-error="This field is required">
                            <input className="item__input" type="text" name="streetAddress" defaultValue= {detail.User.street_address} />
                        </div>
                        <div className="item__input-box" data-error="This field is required">
                            <input className="item__input" type="text" name="city" defaultValue= {detail.User.city} />
                        </div>
                        <div className="item__input-box" data-error="This field is required">
                            <input className="item__input" type="text" name="postalCode" defaultValue= {detail.User.postal_code} />
                            {/* <p className="item__text">{detail.User.street_address}  {detail.User.city}  {detail.User.postal_code}</p> */}
                        </div>
                    </div>
                    <div className="item__box">
                        <h2 className="item__label">Phone Number</h2>
                        <div className="item__input-box" phone-format="Please enter 10 digits of phone number" data-error="This field is required">
                            <input className="item__input" type="text" name="phone" defaultValue= {detail.User.phone} />
                            {/* <p className="item__text">{detail.User.phone}</p> */}
                        </div>
                    </div>
                    <div className="item__box">
                        <h2 className="item__label">Email</h2>
                        <div className="item__input-box" email-format="Please enter a valid email" data-error="This field is required">
                            <input className="item__input" type="text" name="email" defaultValue= {detail.User.email} />
                            {/* <p className="item__text">{detail.User.email}</p> */}
                        </div>
                    </div>
                </div>
                <div className="item__subcontainer">
                    <div className="item__box">
                        <h2 className="item__label">Type of Event</h2>
                        <div className="item__input-box" data-error="This field is required">
                            <select name="event" className="item__input">
                                <option value={detail.Event.type_of_event} defaultValue>{detail.Event.type_of_event}</option>
                                <option value="Wedding">Wedding</option>
                                <option value="Photo Shoot">Photo Shoot</option>
                                <option value="Special Occasion">Special Occasion</option>
                            </select>
                            {/* <p className="item__text">{detail.Event.type_of_event}</p> */}
                        </div>
                    </div>
                    <div className="item__box">
                        <h2 className="item__label">Image</h2>
                        <img className="item__image" src={`http://localhost:5000/image/${detail.Image[0].fileName}`} />
                    </div>
                    <div className="item__box">
                        <h2 className="item__label">Messages</h2>
                        <textarea className="item__input item__input--textarea" defaultValue={detail.message} name="message"></textarea>
                        {/* <p className="item__text">{checkMessage (detail.message)}</p> */}
                    </div>
                    <div className="item__box">
                        <h2 className="item__label">Status</h2>
                        <select name="confirm" className="item__input">
                            <option value={detail.confirm} defaultValue>{confirmation(detail.confirm)}</option>
                            <option value="true">Confirmed</option>
                            <option value="null">Not confirm yet</option>
                            <option value="false">Denied</option>
                        </select>
                        {/* <p className="item__text">{confirmation(detail.confirm)}</p> */}
                    </div>
                </div>
                <div className="item__btn-box">
                    <input className="item__submit" type="submit" value="Save" />
                    {/* <Link className="item__btn" to={`/appointments/${detail.id}/edit`} >Edit</Link> */}
                </div>
            </form>
        </section>
    )
}

export default AppointmentEdit;