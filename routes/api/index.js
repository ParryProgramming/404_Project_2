const router = require('express').Router();
const makesRoutes = require('./makes-routes');
const carsRoutes = require('./cars-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
