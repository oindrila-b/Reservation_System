const Availability = require('../models/availability.model');
const moment = require('moment');
const DATE_FORMAT = "MM/DD/YYYY";
const { MAX_SLOTS } = require('../constants/app.constants');


module.exports.checkAvailabilty = async (time) => {
    console.info("Checking availability of slots for time: ", time);
    let parsedDate = moment(time).format(DATE_FORMAT)
    console.info("Parsed Date: ", parsedDate);

    let availability = await Availability.findOne({ date: new Date(parsedDate) }).exec();

    console.info("Availabilty: ", availability);

    if (!availability) {
        console.info("No slots occupied. All available");
        return true;
    }

    if (availability) {
        let slots = availability.slots;
        if (slots < MAX_SLOTS) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports.occupySlot = async (time) => {
    console.info("Occupying slots on: ", time);
    let parsedDate = moment(time).format(DATE_FORMAT);
    console.info("Parsed Date: ", parsedDate);

    let availability = await Availability.findOne({ date: new Date(parsedDate) }).exec();

    if (availability) {
        availability.slots = availability.slots + 1;
        console.log("Updating entity");
        let updatedAvail = await availability.save();
        console.log("After Updationg: ", updatedAvail);
        return updatedAvail;
    } else {
        console.log("Creating new availability");
        availability = new Availability({
            date: new Date(parsedDate),
            slots: 1
        });
        let avail = await availability.save();
        return avail;
    }

}