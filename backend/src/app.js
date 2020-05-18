const express = require('express');
const bodyParser = require('body-parser');
const APP = require('./constants/app.constants');
const dbConnection = require('./configs/db.connect');
let customerReqValidator = require('./validators/req.customer.validator');
let reservationReqValidator = require("./validators/req.reservation.validator");
const customerService = require('./services/customer.service')
const reservationService = require('./services/reservation.service');
const cors = require('cors');


const app = express();

app.use(bodyParser.json());
app.use(cors())


app.listen(APP.PORT, () => {
    console.info("Reservation system running at port: ", APP.PORT);
})

app.use((err, req, res, next) => {
    console.error("Global error handler: ", err);
    res.sendStatus(500);
})


app.get("/", (req, res) => {
    console.log('Home call');
    res.status(200).send("Hello there");
})

app.post('/customer', customerReqValidator.validateIncomingPostRequest, async (req, res) => {
    let body = req.body;
    console.info('Received request body for creating customer: ', body);
    let customerName = body.name;
    let customerPhone = body.phone;
    let customerEmail = body.email;

    let customerDetails = {
        name: customerName,
        phone: customerPhone,
        email: customerEmail
    }

    let customer = await customerService.createCustomer(customerDetails);
    console.info("Created Customer: ", customer);
    res.status(200).send(customer);
});

app.get("/customer", customerReqValidator.validateIncomingGetRequest, async (req, res) => {
    let query = req.query;
    console.info("Querying customer with phone: ", query.phone);
    let customer = await customerService.getCustomer(query.phone);
    if (customer) {
        console.info("Found Customer: ", customer);
        res.status(200).send(customer);
    } else {
        console.error('No customer found');
        res.status(404).send('No customer found');
    }
});

app.post('/reservation', reservationReqValidator.checkIncomingPostRequest, async (req, res) => {
    let body = req.body;
    console.info("Received request for making reservation: ", body);

    let phone = body.phone;
    let date = body.date;
    let guests = body.guests;

    let reservationDetails = {
        phone: phone,
        date: date,
        guests: guests
    }

    let reservation = await reservationService.makeAReservation(reservationDetails);
    if (!reservation) {
        let error = {
            err : "NO_SLOTS"
        }
        console.error("No slots available for reservation");
        res.status(200).send(error)
    } else {
        console.info('Booked Reservation: ', reservation);
        res.status(200).send(reservation);
    }

})