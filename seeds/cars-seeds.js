const { Cars } = require('../models');

const carsData = [
  {
    car_name: 'Huracan',
    makes_name: 'Lamborghini',
    price: 349.99,
    stock: 3,
    makes_id: 1,
  },
  {
    car_name: 'Huracan',
    makes_name: 'Lamborghini',
    price: 14.99,
    stock: 3,
    makes_id: 1,
  },
  {
    car_name: 'Huracan',
    makes_name: 'Lamborghini',
    price: 14.99,
    stock: 3,
    makes_id: 1,
  },
  {
    car_name: 'Huracan',
    makes_name: 'Lamborghini',
    price: 14.99,
    stock: 3,
    makes_id: 1,
  },
  {
    car_name: 'Huracan',
    makes_name: 'Lamborghini',
    price: 14.99,
    stock: 3,
    makes_id: 1,
  },
  {
    car_name: 'Huracan',
    makes_name: 'Lamborghini',
    price: 14.99,
    stock: 3,
    makes_id: 1,
  },
  {
    car_name: 'Huracan',
    makes_name: 'Lamborghini',
    price: 14.99,
    stock: 3,
    makes_id: 1,
  },
 
];

const seedCars = () => Cars.bulkCreate(carsData);

module.exports = seedCars;
