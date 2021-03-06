// import { appointment } from '../../../server/prismaClient';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Appointments () {
    const [ appointments, setAppointments] = useState(null);
    const [ filtered, setFiltered ] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/customers`)
            .then((response) => {
                // console.log(response.data);
                setAppointments(response.data);
                // console.log(appointments);
                setFiltered(response.data);
            })
            .catch(error => console.log(error));    
    },[]);

    const confirmation = (confirm) => {
        if (confirm === null) {
            return "Have not confirmed yet!"
        } else if (confirm) {
            return "Confirmed!"
        } else if (!confirm) {
            return "Cancelled!"
        }
    }

    const filterResult = (event) => {
        const select = event.target.value;
        if (!appointments) {
            console.log("loading ...");
        } else {
            console.log(select);
            if (select === "notConfirm") {
                setFiltered(appointments.filter((item) => {
                    if(item.confirm === null) {
                        return item;
                    }
               }))
               console.log(filtered);

            } else if (select === "confirmed") {
                setFiltered(appointments.filter((item) => {
                    if(item.confirm === true) {
                        return item;
                    }
               }))
               console.log(filtered);

            } else if (select === "cancelled") {
                setFiltered(appointments.filter((item) => {
                    if(item.confirm === false) {
                        return item;
                    }
               }))
               console.log(filtered);

            } else if (select === "today") {
                const today = new Date().toLocaleDateString();
                // console.log(today);
                // console.log(appointments.datetime)
                 setFiltered(appointments.filter((item) => {
                     if(new Date(item.datetime).toLocaleDateString() === today) {
                    // if(date.datetime > today && date < Date(today.getFullYear, today.getMonth, today.getDate+1)) {
                            return item;
                    }
                }))
                console.log(filtered);
            } else {
                setFiltered(appointments);
            }
        }
    }

    return ( 
        <section className="appointments">
            <h1 className="appointments__title">Appointments</h1>
            <label>Filter :</label>
            <select onChange={ filterResult } name="filter" className="appointments__filter">
                <option value="all">All</option>
                <option value="confirmed">Confirmed</option>
                <option value="notConfirm">Not Confirmed</option>
                <option value="cancelled">Cancelled</option>
                <option value="today">Today</option>
            </select>
            <ul className="appointments__list">
            {filtered && filtered.map((appointment) => (
                    <li  key={appointment.id} className="appointments__item">
                        <div className="appointments__box">
                            <h2 className="appointments__label">Name</h2>
                            <p className="appointments__text">{appointment.User.first_name} {appointment.User.last_name}</p>
                        </div>
                        <div className="appointments__box">
                            <h2 className="appointments__label">Event Date</h2>
                            <p className="appointments__text">{new Date(appointment.datetime).toLocaleDateString()}</p>
                        </div>
                        <div className="appointments__box">
                            <h2 className="appointments__label">Event Time</h2>
                            <p className="appointments__text">{new Date(appointment.datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                        </div>
                        <div className="appointments__box">
                            <h2 className="appointments__label">Location</h2>
                            <p className="appointments__text">{appointment.User.city}</p>
                        </div>
                        <div className="appointments__box">
                            <h2 className="appointments__label">Type of Event</h2>
                            <p className="appointments__text">{appointment.Event.type_of_event}</p>
                        </div>
                        <div className="appointments__box">
                            <h2 className="appointments__label">Status</h2>
                            <p className="appointments__text">{confirmation(appointment.confirm)}</p>
                        </div>
                        <div className="appointments__btn-box">
                            <Link className="appointments__btn" to={`/appointments/${appointment.id}`} >More Details</Link>
                        </div>
                    </li>
                ))} 
            </ul>
        </section>
    )
}

export default Appointments;