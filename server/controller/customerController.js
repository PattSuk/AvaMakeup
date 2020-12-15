const customerModel = require('../model/customerModel');

const getAllAppointments = async (_req, res) => {
    data = await customerModel.getAllAppointments();
    if(!data) {
        res.sendStatus(500)
    }
    res.status(200).json(data);
}

const newCustomer = async (req, res) => {
    console.log(req.files);
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

module.exports = {newCustomer,getAllAppointments};