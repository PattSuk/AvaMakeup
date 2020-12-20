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
                    message: message,
                    Event: {
                        connect: {
                            id: parseInt(eventId)
                        }
                    },
                    Image: {
                        create: {
                            fileName: image
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
        }
    })
}

const getAppointmentById = async(id) => {
    // console.log(id);
    return await prisma.appointment.findUnique({
        where: { id: parseInt(id) },
        include: {
            User: true,
            Event: true,
            Image: true
        }
    })
}

const editAppointmentById = async(id, firstName, lastName, streetAddress, 
    city, postalCode, phone, email, datetime, confirm, message, event) => {
        const confirmed = (confirm) => {
            if (confirm=== "true") {
                return true;
            } else if (confirm=== "false") {
                return false;
            } else {
                return null;
            }
        }
        
        return await prisma.appointment.update({
            where: { id : parseInt(id) },
            data: {
                datetime: datetime,
                message: message,
                confirm: confirmed(confirm),
                User: {
                    update: {
                        first_name: firstName,
                        last_name: lastName,
                        street_address: streetAddress,
                        city: city,
                        postal_code: postalCode,
                        phone: phone,
                        email: email
                    },
                },
                Event: {
                    update: {
                        type_of_event: event
                    }
                }
            }
        })
}

module.exports = {newCustomer, getAllAppointments, getAppointmentById, editAppointmentById}