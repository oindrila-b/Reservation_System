const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AvailabilitySchema = new Schema({
    date: { type: Schema.Types.Date, required: true, unique: true },
    slots: { type: Schema.Types.Number, required: true, max: 16 }
});

const Availability = mongoose.model("availabilites", AvailabilitySchema);

module.exports = Availability;