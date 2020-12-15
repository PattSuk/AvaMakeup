import axios from 'axios';

function Appointments () {
    const appointmentsLists = [];

    axios.get(`http://localhost:5000/customers`)
    .then((response) => {
        appointmentsLists = response.data;
    })
    .catch(error => console.log(error));

    return (
        <section className="appointments">
            <h1 className="appointments__title">Appointments</h1>
            <select>
                <option value="all">All</option>
                <option value="notConfirm">Not Confirm</option>
                <option value="confirmed">Confirmed</option>
                <option value="denied">Denied</option>
                <option value="today">Today</option>
            </select>
            
        </section>
    )
}

export default Appointments;