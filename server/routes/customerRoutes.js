const express = require('express');
const router = express.Router();
const customerController = require('../controller/customerController');

router.get('/', customerController.getAllAppointments);

router.post('/', customerController.newCustomer);

module.exports = router;