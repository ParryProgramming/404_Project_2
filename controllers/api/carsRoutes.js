const router = require('express').Router();
const { Cars } = require('../../models');
const withAuth = require('../../utils/auth');
//get all cars
router.get('/', withAuth, async (req, res) => {
  try {
    const carsData = await Cars.findAll();

    res.status(200).json(carsData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//get cars by make
router.get('/makes', withAuth, async (req, res) => {
  try {
    const makesData = await Cars.findAll({
      where: {
        makes_name: req.body.makes_name
      }
    })

    res.status(200).json(makesData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//add new car
router.post('/', withAuth, async (req, res) => {
  try {
    const newCars = await Cars.create({
      ...req.body,
    });

    res.status(200).json(newCars);
  } catch (err) {
    res.status(400).json(err);
  }
});
// delete car by id
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const carsData = await Cars.destroy({
      where: {
        id: req.params.id
      },
    });

    if (!carsData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(carsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
