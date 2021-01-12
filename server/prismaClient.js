const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
    log: ['info', 'warn', 'error']
});

const prisma = process.env === production
? new PrismaClient({
    datasources: {
        my_database: {
            provider: "mysql",
            url: env("DATABASE_URL")
        }
    }
})
: new PrismaClient({
    datasources: {
        production_database: {
            provider: "mysql",
            url: process.env.JAWSDB_URL
        }
    }
})

module.exports = prisma;