const { Rental } = require('../models');

const rentalData = [
  {
    car_id: 1,
    user_id: 6,
  },
  {
    car_id: 1,
    user_id: 7,
  },
  {
    car_id: 1,
    user_id: 8,
  },
  {
    car_id: 2,
    user_id: 6,
  },
  {
    car_id: 3,
    user_id: 1,
  },
  {
    car_id: 3,
    user_id: 3,
  },
  {
    car_id: 3,
    user_id: 4,
  },
  {
    car_id: 3,
    user_id: 5,
  },
  {
    car_id: 4,
    user_id: 1,
  },
  {
    car_id: 4,
    user_id: 2,
  },
  {
    car_id: 4,
    user_id: 8,
  },
  {
    car_id: 5,
    user_id: 3,
  },
];

const seedRentals = () => Rental.bulkCreate(rentalData);

module.exports = seedRentals;