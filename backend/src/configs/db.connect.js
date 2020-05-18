const mongoose = require('mongoose');
const DATABASE = require('../constants/db.constants');

mongoose.connect(DATABASE.URL, { useNewUrlParser: true });

mongoose.connection
    .once('open', () => {
        console.info('Connection Successful');
    })
    .on('error', (error) => {
        console.error('Connection error', error);
        process.exit(1);
    });