// const fs = require('fs');
// const path = require('path');
// const {v4:uuidv4} = require('uuid');
const prisma = require('../prismaClient');

const newCustomer = async (firstName, lastName, streetAddress, city, 
    postalCode, phone, email, datetime, image, message, eventId) => {
    return await prisma.user.create({
        data: {
            first_name: firstName,
            last_name: lastName,
            street_address: streetAddress,
            city: city,
            postal_code: postalCode,
            phone: phone,
            email: email,
            Appointment: {
                create: {
                    datetime: new Date(datetime),
                    image: image,
                    message: message,
                    Event: {
                        connect: {
                            id: parseInt(eventId)
                        }
                    }
                }
            }
        }, include: {
            Appointment: {
                // select: {
                    // id: true
                // }
                include: {
                    Event: {
                        select: {
                            type_of_event: true
                        }
                    }
                }
            },
        }
    }).then((data) => {
        console.log(data);
    })
}

const getAllAppointments = async() => {
    return await prisma.appointment.findMany({
        include: {
            User:true,
            Event: true
        },
    })
}

module.exports = {newCustomer, getAllAppointments}