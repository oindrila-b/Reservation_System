const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
    customerId: { type: Schema.Types.Number, required: true },
    reservedAt: { type: Schema.Types.Date, required: true },
    guests: { type: Schema.Types.Number }
}, {
    id: true,
    timestamps: true
});

const Reservation = mongoose.model('reservations', ReservationSchema);

module.exports = Reservation;