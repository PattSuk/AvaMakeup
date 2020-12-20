const prisma = require('./prismaClient');
const bcrypt = require('bcrypt');
const eventData = require('./data/event');
const adminData = require('./data/admin');


const insertEventData = async () => {
    eventData.forEach(async(item) => {
        await prisma.event.create({
            data: {
                type_of_event: item.type_of_event
            }
        }).then((res) => console.log(res));
    })
}

insertEventData().then((res) => console.log(res));

const insertAdminData = async () => {
    adminData.forEach(async(item) => {
        const hashedPassword = await bcrypt.hash(item.password, 10);
        await prisma.admin.create({
            data: {
                username: item.username,
                password: hashedPassword
            }
        }).then((res) => console.log(res));
    })
}

insertAdminData().then((res) => console.log(res));