const router = require('express').Router();
const userRoutes = require('../controllers/api/userRoutes');
const makesRoutes = require('../controllers/api/makesRoutes');
const carsRoutes = require('../controllers/api/carsRoutes');
const apiRoutes = require('../controllers/api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/users', userRoutes);
router.use('/makes', makesRoutes); 
router.use('/cars', carsRoutes);

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
  });

module.exports = router;
