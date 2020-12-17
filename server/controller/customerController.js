const customerModel = require('../model/customerModel');

const getAllAppointments = async (_req, res) => {
    data = await customerModel.getAllAppointments();
    if(!data) {
        res.sendStatus(500)
    }
    res.status(200).json(data);
}

const getAppointmentById = async (req, res) => {
    // console.log(req.params);
    const data = await customerModel.getAppointmentById(req.params.id);
    // console.log(data);
    
    if (data) {
        res.status(200).json(data);
    } else {  
        res.status(404).json({ error: "INVALID_USER_ID", message: "Appointment ID could not found"});
    }
    
}

// const newImage = async (req, res) => {
//     await 
// }

const newCustomer = async (req, res) => {
    console.log('file ----------', req.body.image);
    console.log('body ----------', req.body);

    const {firstName, lastName, streetAddress, city, postalCode, phone, email, datetime, image, message, eventId} = req.body;
    if(!firstName || !lastName || !streetAddress || !city || !postalCode || !phone || !email || !datetime || !image || !eventId) {
        res.status(400).json({
        error: 'POST body must contain all required properties',
        requiredProperties: ['firstName', 'lastName', 'streetAddress', 'city', 'postalCode', 'phone', 
        'email', 'datetime', 'image', 'eventId'],
    });
   } else {
    await customerModel.newCustomer(firstName, lastName, streetAddress, city, postalCode, phone, email, 
        datetime, image, message, eventId)
        .then (() => res.status(201)
            .json({
            message: "Created a new customer"
        })).catch(error => {
            console.log(error);
        })
   }
}

module.exports = {newCustomer,getAllAppointments, getAppointmentById};