const Reservation = require('../models/reservation.model');
const availabilityService = require('./availability.service');

module.exports.makeAReservation = async (reservationDetails) => {
    console.info('Making a reservation details with ', reservationDetails);

    let available = await availabilityService.checkAvailabilty(reservationDetails.date);

    if (available) {
        let resv = new Reservation({
            customerId: reservationDetails.phone,
            reservedAt: new Date(reservationDetails.date),
            guests: reservationDetails.guestss
        });

        let reservation = await resv.save();
        console.info("Saved Reservation: ", reservation);
        await availabilityService.occupySlot(reservationDetails.date);
        return reservation;
    }
    else {
        console.error("No availability")
        return null;
    }
}