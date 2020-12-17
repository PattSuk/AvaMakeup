// import { newCustomer } from "../../../server/model/customerModel";
import axios from 'axios';
// import { useState } from 'react';
import swal from 'sweetalert';

function Booking (props) {

    const newAppointment = (event) => {
        event.preventDefault();

        const formData = new FormData();
        // Update the formData object
        formData.append('myFile', event.target.image.files[0]);


        const form = event.target;
        if (validateSubmit(form) && phoneValidation(form) && emailValidation(form)) {
            let eventId;
            if(form.event.value==="Wedding") {
                eventId="3";
            }else if(form.event.value==="Special Occasion") {
                eventId="2";
            }else if (form.event.value==="Photo Shoot") {
                eventId="1";
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
                    console.log(data);
                    console.log(form.firstName.value);
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



    const phoneValidation = (form) => {
        const phoneFormat = /^\d{10}$/;
        let passedPhoneCheck = true;

        if (!form.phone.value.match(phoneFormat)) {
            form.phone.parentElement.classList.add('phone-error');
            passedPhoneCheck = false;
        } else {
            form.phone.parentElement.classList.remove('phone-error');
        }
        return passedPhoneCheck;
    }

    const emailValidation = (form) => {
        const emailFormat = /\S+@\S+\.\S+/;
        let passedEmailCheck = true;

        if (!emailFormat.test(form.email.value)) {
            form.email.parentElement.classList.add('email-error');
            passedEmailCheck = false;
        }
        else {
            form.email.parentElement.classList.remove('email-error');
        }
        return passedEmailCheck;
    }

    const validateSubmit = (form) => {
        let passedSubmitCheck = true;

        if (!form.firstName.value.trim()) {
            form.firstName.parentElement.classList.add('validation-error');
            passedSubmitCheck = false;
        } else {
            form.firstName.parentElement.classList.remove('validation-error');
        }
        if (!form.lastName.value.trim()) {
            form.lastName.parentElement.classList.add('validation-error');
            passedSubmitCheck = false;
        } else {
            form.lastName.parentElement.classList.remove('validation-error');
        }
        if (!form.streetAddress.value.trim()) {
            form.streetAddress.parentElement.classList.add('validation-error');
            passedSubmitCheck = false;
        } else {
            form.streetAddress.parentElement.classList.remove('validation-error');
        }
        if (!form.city.value.trim()) {
            form.city.parentElement.classList.add('validation-error');
            passedSubmitCheck = false;
        } else {
            form.city.parentElement.classList.remove('validation-error');
        }
        if (!form.postalCode.value.trim()) {
            form.postalCode.parentElement.classList.add('validation-error');
            passedSubmitCheck = false;
        } else {
            form.postalCode.parentElement.classList.remove('validation-error');
        }
        if (!form.phone.value.trim()) {
            form.phone.parentElement.classList.add('validation-error');
            passedSubmitCheck = false;
        } else {
            form.phone.parentElement.classList.remove('validation-error');
        }
        if (!form.email.value.trim()) {
            form.email.parentElement.classList.add('validation-error');
            passedSubmitCheck = false;
        } else {
            form.email.parentElement.classList.remove('validation-error');
        }
        if (!form.datetime.value.trim()) {
            form.datetime.parentElement.classList.add('validation-error');
            passedSubmitCheck = false;
        } else {
            form.datetime.parentElement.classList.remove('validation-error');
        }
        if (!form.image.value.trim()) {
            form.image.parentElement.classList.add('validation-error');
            passedSubmitCheck = false;
        } else {
            form.image.parentElement.classList.remove('validation-error');
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
                    <label className="booking__label">Getting Ready Location</label>
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
                    <div className="booking__container" data-error="Please select the date and time">
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