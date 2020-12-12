const prisma = require('./prismaClient');
const eventData = require('./data/event');

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