const router = require('express').Router();
const apiRoutes = require('../controllers/api');
const homeRoutes = require('./homeRoutes');

router.use('/api', apiRoutes);

router.use('/', homeRoutes);

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
  });

module.exports = router;
