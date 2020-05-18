const Customer = require('../models/customer.model');


module.exports.createCustomer = async (customerDetails) => {
    console.info("Creating Customer with Customer Details: ", customerDetails);
    let cust = new Customer({
        name: customerDetails.name,
        phone: customerDetails.phone,
        email: customerDetails.email
    });

    let customer = await cust.save();
    console.info('Created Customer: ', customer);
    return customer;
}

module.exports.getCustomer = async (phone) => {

    console.info("Retrieving customer with phone number: ", phone);

    let customer = await Customer.findOne({ phone: phone });

    if (customer) {
        console.info("Retrieved Customer: ", customer);
        return customer;
    } 

    console.error("No customer found with the phone number: ", phone)
    return null;
}

