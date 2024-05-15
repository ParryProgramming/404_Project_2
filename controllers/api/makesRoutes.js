const router = require('express').Router();
const { Makes } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      const makesData = await Makes.findAll({
        where: {
          user_id: req.session.user_id,
        },
      });
  
      res.status(200).json(makesData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
router.post('/', withAuth, async (req, res) => {
  try {
    const newMakes = await Makes.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newMakes);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const makesData = await Makes.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!makesData) {
      res.status(404).json({ message: 'No makes found with this id!' });
      return;
    }

    res.status(200).json(makesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
