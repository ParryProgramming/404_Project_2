const { User } = require('../models');

const userData = [
  {
    "name": "Sal",
    "email": "sal@hotmail.com",
    "password": "password"
  },
  {
    "name": "Lernantino",
    "email": "lernantino@gmail.com",
    "password": "password"
  },
  {
    "name": "Amiko",
    "email": "amiko2k20@aol.com",
    "password": "password"
  },
  {
    "name": "Salish",
    "email": "sa234l@hotmail.com",
    "password": "password"
  },
  {
    "name": "Lernantino2",
    "email": "lerna23423ntino@gmail.com",
    "password": "password"
  },
  {
    "name": "Amiko23",
    "email": "amiko2k23420@aol.com",
    "password": "password"
  },
  {
    "name": "Sa234423l",
    "email": "sa234234l@hotmail.com",
    "password": "password"
  },
  {
    "name": "Lerna435ntino",
    "email": "lern63456antino@gmail.com",
    "password": "password"
  },
  {
    "name": "Amik345o",
    "email": "am345345iko2k20@aol.com",
    "password": "password"
  }
]
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;