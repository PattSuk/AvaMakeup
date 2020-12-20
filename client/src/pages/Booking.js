// import { newCustomer } from "../../../server/model/customerModel";
import axios from 'axios';
import swal from 'sweetalert';

import { phoneValidation, emailValidation, validateSubmit } from '../components/utilities/validation';

function Booking (props) {

    const newAppointment = (event) => {
        event.preventDefault();

        const formData = new FormData();
        // Update the formData object
        formData.append('myFile', event.target.image.files[0]);


        const form = event.target;
        if (validateSubmit(form) && phoneValidation(form) && emailValidation(form) && beforeToday(form) && validateImage(form)) {
            let eventId;
            if(form.event.value==="Wedding") {
                eventId="2";
            }else if(form.event.value==="Special Occasion") {
                eventId="1";
            }else if (form.event.value==="Photo Shoot") {
                eventId="3";
            }

           const data = {firstName: form.firstName.value,
                lastName: form.lastName.value,
                streetAddress: form.streetAddress.value,
                city: form.city.value,
                postalCode: form.postalCode.value,
                phone: form.phone.value,
                email: form.email.value,
                datetime: form.datetime.value,
                message: form.message.value,
                eventId: eventId
            }

            axios.post(`http://localhost:5000/customers/photos`, formData)
                .then((res) => { return res.data.name })
                .then((file) => {

                    data.image = file
                    // console.log(data);
                    // console.log(form.firstName.value);
                    axios.post(`http://localhost:5000/customers`, data)

                })
                .then((_response) => {
                    swal("Thank you for booking with us!", "Please give us up to 24 hours to reply.", "success");
                    // alert("Please give us up to 24 hours to reply.")
                }).catch((error) => {
                    console.log(error);
                });

            form.reset();
        }
    }

    const validateImage = (form) => {
        let passedSubmitCheck = true;

        if (!form.image.value.trim()) {
            form.image.parentElement.classList.add('validation-error');
            passedSubmitCheck = false;
        } else {
            form.image.parentElement.classList.remove('validation-error');
        }
        return passedSubmitCheck;
    }

    const beforeToday = (form) => {
        let passedSubmitCheck = true;
        const today = new Date();
        const date = new Date(form.datetime.value);

        console.log(today);
        console.log(date);

        if (date < today) {
            form.datetime.parentElement.classList.add('date-error');
            passedSubmitCheck = false;
        } else {
            form.datetime.parentElement.classList.remove('date-error');
        }
        return passedSubmitCheck;
    }

    return (
        <section className="booking">
            <h1 className="booking__title">Schedule an Appointment</h1>
            <form className="booking__form" onSubmit={ newAppointment } encType="multipart/form-data" >
                <div className="booking__section">
                    <h2 className="booking__subtitle">Contact Details</h2>
                    <label className="booking__label">First Name</label>
                    <div className="booking__container" data-error="This field is required">
                        <input className="booking__input" type="text" name="firstName" />
                    </div>
                    <label className="booking__label">Last Name</label>
                    <div className="booking__container" data-error="This field is required">
                        <input className="booking__input" type="text" name="lastName" />
                    </div>
                    <label className="booking__label">Location</label>
                    <div className="booking__container" data-error="This field is required">
                        <input className="booking__input" type="text" name="streetAddress" />
                    </div>
                    <label className="booking__label">City</label>
                    <div className="booking__container" data-error="This field is required">
                        <input className="booking__input" type="text" name="city" />
                    </div>
                    <label className="booking__label">Postal Code</label>
                    <div className="booking__container" data-error="This field is required">
                        <input className="booking__input" type="text" name="postalCode" />
                    </div>
                    <label className="booking__label">Phone Number</label>
                    <div className="booking__container" phone-format="Please enter 10 digits of phone number" data-error="This field is required">
                        <input className="booking__input" type="text" name="phone" />
                    </div>
                    <label className="booking__label">Email</label>
                    <div className="booking__container" email-format="Please enter a valid email" data-error="This field is required">
                        <input className="booking__input" type="text" name="email" />
                    </div>
                </div>
                <div className="booking__section">
                    <h2 className="booking__subtitle">Appointment Details</h2>
                    <label className="booking__label">Type of Event</label>
                    <div className="booking__container" data-error="This field is required">
                        <select name="event" className="booking__input">
                            <option value={props.location.state.event}>{props.location.state.event}</option>
                            <option value={props.location.state.optionOne}>{props.location.state.optionOne}</option>
                            <option value={props.location.state.optionTwo}>{props.location.state.optionTwo}</option>
                        </select>
                        {/* <input className="booking__input" type="text" name="event" defaultValue={props.location.state.event} /> */}
                    </div>
                    <label className="booking__label">Event Date &amp; Time</label>
                    <div className="booking__container" date-validation="The selected date is in the past." data-error="Please select the date and time">
                        <input className="booking__input" type="datetime-local" name="datetime" />
                    </div>
                    <label className="booking__label">Upload your photo with natural light</label>
                    <div className="booking__container" data-error="Please upload a photo">
                        <input type="file" name="image" />
                    </div>
                    <label className="booking__label">Messages</label>
                    <div className="booking__container" data-error="This field is required">
                        <textarea className="booking__input" name="message"></textarea>
                    </div>
                </div>
                <div className="booking__button">
                    {/* <input className="booking__cancel" type="reset" value="Cancel" /> */}
                    <input className="booking__submit" type="submit" value="Book Now" />
                </div>
            </form>
        </section>
    )
}

export default Booking;