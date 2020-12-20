const express = require('express');
const router = express.Router();
const multer = require('multer');
const { v4:uuidv4  } = require('uuid');
const path = require('path');
const customerController = require('../controller/customerController');

// express.use("/image/images", express.static(path.join(__dirname, "/uploads")));

const storage = multer.diskStorage({
    // destination: path.join(__dirname, "../uploads"),
    // destination: ("/image",express.static(path.join(__dirname, "../uploads"))),
    
    destination: (req, file, cb) => {
        cb(null, "./uploads");
      },
    
    filename: (req, file, cb) => {
        // const newFilename = `${uuidv4()}${req.body.firstName}${path.extname(file.originalname)}`;
        const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
        cb(null, newFilename);
    }
});

const upload = multer({ storage });

// const upload = multer({ dest: 'uploads/' });

router.get('/', customerController.getAllAppointments);

router.get('/:id', customerController.getAppointmentById);

router.post('/photos', upload.any(), (req, res) => {
    res.status(200).json({ name: req.files[0].filename })
});

router.post('/', customerController.newCustomer);

router.put('/:id', customerController.editAppointmentById);

module.exports = router;