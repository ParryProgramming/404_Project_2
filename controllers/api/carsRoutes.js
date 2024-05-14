const router = require('express').Router();
const { Cars } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const carsData = await Makes.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    res.status(200).json(carsData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post('/', withAuth, async (req, res) => {
  try {
    const newCars = await Cars.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCars);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
