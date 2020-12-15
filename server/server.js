const express = require('express');
const session = require('express-session');
const cors = require('cors');
const ora = require('ora');
const passport = require('passport');
// const bodyParser = require('body-parser');

const customerRoutes = require('./routes/customerRoutes');
const loginRoutes = require('./routes/loginRoutes');
const initPassport = require('./passportConfig');

require('dotenv').config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000"
    // credentials: true
}));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());
initPassport(passport);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/customers', customerRoutes);

app.use('/login', loginRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});