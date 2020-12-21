const prisma = require('./prismaClient');
const bcrypt = require('bcrypt');
const localStrategy = require('passport-local').Strategy;

function initialize (passport) {
    passport.use(
        new localStrategy (async (username, password, done) => {
            await prisma.admin.findUnique({ where: { username: username }})
            .then((user) => {
                if (!user) return done(null, false, { message: 'No user with that username' });

                bcrypt.compare(password, user.password, (error, result) => {
                    if (error) throw error;

                    if (result) {
                        return done(null, { id: user.id});
                    }
                    return done(null, false);
                })
            }).catch((error) => { throw error });
        })
    );

    passport.serializeUser((user, next) => {
        next(null, user.id);
    });

    passport.deserializeUser(async (id, next) => {
        await prisma.admin.findUnique({ where: { id: id }})
        .then((user, error) => {
            next (error, user.id);
        })
    })
}

module.exports = initialize;