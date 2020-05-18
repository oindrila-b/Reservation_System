const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    name: { type: Schema.Types.String, required: true },
    phone: { type: Schema.Types.Number, required: true, unique: true },
    email: { type: Schema.Types.String }
}, {
    id: true,
    timestamps: true
});

const Customer = mongoose.model('customers', CustomerSchema);

module.exports = Customer;