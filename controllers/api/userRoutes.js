const router = require('express').Router();
const { User } = require('../../models');
const nodemailer = require('nodemailer');
router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const userData = await User.create(req.body);

    req.session.save(async() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      const recipientEmail = userData.email;

      // Create a transporter for sending emails
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
          user: 'royceatkins93@gmail.com',
          pass: 'jgel hdyg qvir hgdr', // Your Gmail password or app-specific password
        }
      });


      // Email options
      const mailOptions = {
        from: 'royceatkins93@gmail.com', // Your Gmail address
        to: recipientEmail, // Recipient email address
        subject: 'Summit Luxury',
        text: 'Welcome to Summit Luxury Experiences. Thank you for joining! Please enjoy our selection of luxurious vehicles for you to rent on your next getaway.',
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json(userData);
    })
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
