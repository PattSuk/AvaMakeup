const express = require('express');
const app = express();
const cors = require('cors');

const customerRoutes = require('./routes/customerRoutes');

require('dotenv').config();
const PORT = process.env.PORT;

app.use(express.json());

app.use(cors());

app.use('/customers', customerRoutes);

// app.use('/login', loginRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});