const express = require('express');
const router = express.Router();
const multer = require('multer');
const { v4:uuidv4  } = require('uuid');
const path = require('path');
const customerController = require('../controller/customerController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../uploads');
    },
    filename: (req, file, cb) => {
        const newFilename = `${uuidv4()}${req.body.firstName}${path.extname(file.originalname)}`;
        cb(null, newFilename);
    }
});

// const upload = multer({ storage });

const upload = multer({ dest: 'uploads/' });

router.get('/', customerController.getAllAppointments);

router.post('/', upload.any(), customerController.newCustomer);

module.exports = router;