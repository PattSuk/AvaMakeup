const { PrismaClient } = require('@prisma/client');

// const prisma = new PrismaClient({
//     log: ['info', 'warn', 'error']
// });

const prisma = process.env !== "production"
? new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL
        }
    }
})
: new PrismaClient({
    datasources: {
        db: {
            url: process.env.PRODUCTION_DB_URL
        }
    }
})

module.exports = prisma;