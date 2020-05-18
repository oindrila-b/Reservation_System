const router = require('express').Router();

const customerService = require('../../services/customer.service');

router.post('/', async (req, res) => {
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

router.get("/", async (req, res) => {
    let query = req.query;
    console.info("Querying customer with phone: ", query.phone);
    let customer = await customerService.getCustomer(phone);
    if (customer) {
        console.info("Found Customer: ", customer);
        res.status(200).send(customer);
    } else {
        console.error('No customer found');
        res.status(404).send('No customer found');
    }
});

module.exports = router;