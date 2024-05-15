const router = require('express').Router();
const userRoutes = require('./userRoutes');
const carsRoutes = require('./carsRoutes');

router.use('/users', userRoutes);
router.use('/cars', carsRoutes);

module.exports = router;
