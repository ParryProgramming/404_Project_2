const router = require('express').Router();
const { Cars, User } = require('../models');
const withAuth = require('../utils/auth');
const nodemailer = require('nodemailer');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
       // Pass serialized data and session flag into template
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/cars/:id', async (req, res) => {
  try {
    const carData = await Cars.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const cars = carData.get({ plain: true });
    
    res.render('fleet', {
      
      ...cars,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
 router.get('/send-email', async (req, res) => {
    try {
      // Send email logic
      const mailOptions = {
        from: 'royceatkins93@gmail.com', // Your Gmail address
        to: 'royceatkins93@gmail.com', // Recipient email address
        subject: 'Test Email',
        text: 'This is a test email from Nodemailer.'
      };
  
      // Send the email
      await transporter.sendMail(mailOptions);
  
      res.send('Email sent successfully');
    } catch (err) {
      console.error('Error sending email:', err);
      res.status(500).json({ error: 'Error sending email' });
    }
  });
 
// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('main', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.render('homepage');
    return;
  }
 res.render('homepage');

}); 

module.exports = router;
