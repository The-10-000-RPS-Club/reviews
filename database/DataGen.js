const faker = require('faker');
// const Stream = require('stream');
// const fs = require('fs');
const { Reviews } = require('./ReviewSQL.js');

// const getImg = (max = 3) => {
//   let rcvdImage;
//   const k = Math.floor(Math.random() * max);
//   for (let i = 0; i < k; i += 1) {
//     rcvdImage = `https://sdc-images-review-service.s3-us-west-2.amazonaws.com/image${Math.floor(Math.random() * 1000)}.jpg`;
//   }
//   return rcvdImage;
// };

// const randTag = () => {
//   const tags = ['Shirt', 'Pratical', '#streetWear', 'JinSwagg', 'Snoop'];
//   // return tags.slice(Math.floor(Math.random() * 1), Math.floor(Math.random() * 5));
//   tags.pop();
// };
// const randHeight = () => {
//   const h = ['Shorter than 5\'', '5\'1"', '5\'2"', '5\'3"', '5\'4"', '5\'5"', '5\'6"', '5\'7"', '5\'8"', '5\'9"', '5\'10"', '5\'11"', '6\'1"', '6\'2"', '6\'3"', '6\'4"', '6\'5"', 'Taller than 6\'5"'];
//   return h[Math.floor(Math.random() * h.length)];
// };

// const randWeight = () => {
//   const w = ['Less than 100 lbs', '100 - 125 lbs', '125 - 150 lbs', '175 - 200 lbs', '200 - 225 lbs', '225 - 250 lbs', '250 - 275 lbs', '275 - 300 lbs', '300 - 325 lbs', '325 - 350 lbs', '350 - 375 lbs', '375 - 400 lbs', 'More than 400 lbs'];
//   return w[Math.floor(Math.random() * w.length)];
// };

// const randAge = () => {
//   const age = ['Under 18', '18 to 24', '25 to 34', '35 to 44', '45 to 54', '55 to 64', '65 to 74', '75 or over'];
//   return age[Math.floor(Math.random() * age.length)];
// };
// const randFit = () => {
//   const fit = [0, 0.5, 1];
//   return fit[Math.floor(Math.random() * fit.length)];
// };

// Model.query(`DROP TABLE IF EXISTS reviews`, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('success');
//   }
// });

// const randId = () => Math.floor(Math.random() * 10);
// const randScore = (max) => Math.ceil((Math.random() * max));

// const generate = () => {

// let counter = 1;
// while (counter < 3) {
//   counter += 1;

 
      // Reviews.sync({ force: true })
      //   .then(() => {
          Reviews.create({
            product_id: 1,
            review_id: 2,
            nickname: faker.name.findName(),
            tags: ['red', 'blue'],
          })
          .then((data) => console.log('success'))
          .catch((err) => console.log(err));
        // })
        // .catch((err) => console.log(err));
        
       
        // rating: randScore(5),
        // title: faker.commerce.productDescription(),
        // body: faker.lorem.paragraphs(),
        // images: getImg(),
        // tags: randTag(),
        // height: randHeight(),
        // weight: randWeight(),
        // fit: randFit(),
        // age: randAge(),
        // location: faker.address.city(),
        // email: faker.internet.email(),
        // helpful_yes: 2,
        // helpful_no: 3,
   
  // }
// };

// generate();

// const seedData = generate();

// const writeStream = fs.createWriteStream('seed.json');

// writeStream.write(seedData);

// writeStream.on('finish', () => {
//   console.log('finished writing file');
// });
// writeStream.send();
// console.log(seedData);
