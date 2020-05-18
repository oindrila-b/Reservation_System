const router = require('express').Router();
const reservationService = require('../../services/reservation.service');
router.post('/', async (req, res) => {
    let body = req.body;
    console.info("Received request for making reservation: ", body);

    let phone = body.phone;
    let time = body.time;
    let guests = body.guests;

    let reservationDetails = {
        phone: phone,
        date: date,
        guests: guests
    }

    let reservation = await reservationService.makeAReservation(reservationDetails);
    console.info('Booked Reservation: ', reservation);
    res.status(200).send(reservation);

})