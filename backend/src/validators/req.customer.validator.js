module.exports.validateIncomingPostRequest = (req, res, next) => {
    console.info("Validating incoming POST request for Customer");
    let body = req.body;

    if (!body) {
        console.error("Empty Request Body");
        res.status(400).send("Request body cannot be empty");
    } else if (!body.phone) {
        console.error("No phone number found");
        res.status(400).send("Phone number cannot be empty");
    } else if (!body.name) {
        console.error("No name number found");
        res.status(400).send("Name cannot be empty");
    } else {
        next();

    }

}


module.exports.validateIncomingGetRequest = (req, res, next) => {
    let query = req.query;

    if (!query) {
        console.error("No query found")
        res.status(400).send("Empty query");
    } else if (!query.phone) {
        console.error("Phone is empty");
        res.status(400).send("Phone number is empty")
    } else {
        next();
    }
}