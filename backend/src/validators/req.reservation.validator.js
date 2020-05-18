module.exports.checkIncomingPostRequest = (req, res, next) => {
    console.info("Chaning validity of incoming POST request for reservation");

    let body = req.body;

    if (!body) {
        console.error("Missing body")
        res.status(400).send("Missing body");
    } else if (!body.phone) {
        console.error("Phone number not found");
        res.status(400).send("Phone number not found");
    } else if (!body.date) {
        console.error("Date not found");
        res.status(400).send("Date not found");
    } else {
        next();
    }

}