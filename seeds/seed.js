const seedCars = require('./cars-seeds.js');
const seedUsers = require('./userData.js');
const seedRentals = require('./rental-data.js');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCars();
  console.log('\n----- CATEGORIES SEEDED -----\n');
  await seedUsers();
  console.log('\n----- PRODUCTS SEEDED -----\n');
  await seedRentals();
  console.log('\n----- TAGS SEEDED -----\n');
  process.exit(0);
};

seedAll();
