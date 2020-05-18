const router = require('express').Router();
const customerRouter = require('./customer.router');
const reservationRouter = require('./reservation.router');

router.get('/', (req, res) => {
    
})

router.use("/customer", customerRouter);
router.use('/reservation', reservationRouter);

module.exports = router;