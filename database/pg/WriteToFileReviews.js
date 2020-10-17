var fs = require('fs');
const faker = require('faker');
// const argv = require('yargs').argv

// const lines = argv.lines || 20000000;
// const filename = argv.output || 'reviewout.csv';
// const writeStream = fs.createWriteStream(filename);

const file = fs.createWriteStream('./reviewout.csv');

let counter = 0;
const entries = 10000000;

for (counter; counter < entries; counter += 1) {
  if (counter % 10000 === 0) {
    console.log('this many entries created: ', counter);
  }


// const createRecord = () => {
  const randFit = () => {
    const fit = [0, 0.5, 1];
    return fit[Math.floor(Math.random() * fit.length)];
  };

  const randAge = () => {
    const age = ['Under 18', '18 to 24', '25 to 34', '35 to 44', '45 to 54', '55 to 64', '65 to 74', '75 or over'];
    return age[Math.floor(Math.random() * age.length)];
  };

  const randHeight = () => {
    const h = ['Shorter than 5ft', '5ft 1in', '5ft 2in', '5ft 3in', '5ft 4in', '5ft 5in', '5ft 6in', '5ft 7in', '5ft 8in', '5ft 9in', '5ft 10in', '5ft 11in', '6ft 1in', '6ft 2in', '6ft 3in', '6ft 4in', '6ft 5in', 'Taller than 6ft 5in'];
    return h[Math.floor(Math.random() * h.length)];
  };

  const randWeight = () => {
    const w = ['Less than 100 lbs', '100 - 125 lbs', '125 - 150 lbs', '175 - 200 lbs', '200 - 225 lbs', '225 - 250 lbs', '250 - 275 lbs', '275 - 300 lbs', '300 - 325 lbs', '325 - 350 lbs', '350 - 375 lbs', '375 - 400 lbs', 'More than 400 lbs'];
    return w[Math.floor(Math.random() * w.length)];
  };

  const randTag = () => {
    const tags = [];
    const n = Math.ceil((Math.random() * 5));
    let count = 0;
    while (count < n) {
      count += 1;
      tags.push(`"${faker.commerce.productAdjective()}"`);
    }
    return tags;
  };

  const productId = (max) => Math.ceil((Math.random() * max));
  
    
  const nickname = faker.name.findName();
  const randScore = (max) => Math.ceil((Math.random() * max));
  const id = counter;
  const product_id = productId(counter);
  const rating = randScore(5);
  const title = faker.commerce.product();
  const created_at = faker.date.past();
  const body = faker.lorem.sentence();
  const fit = randFit();
  const age = randAge();
  const height = randHeight();
  const weight = randWeight();
  const location = faker.address.city();
  const email = faker.internet.email();
  const helpful_yes = 2;
  const helpful_no = 3;
  const tags = randTag();
  
// }

file.write(`${product_id}|${id}|${nickname}|${rating}|${title}|${created_at}|${body}|${fit}|${age}|${height}|${weight}|${location}|${email}|${helpful_yes}|${helpful_no}|"{${tags}}"\n`);
  }
file.end();

// const startWriting = (writeStream, encoding, done) => {
//   let i = lines;
  
//   function writing() {
//     let canWrite = true;
//     do {
//       i -= 1;

//       if (i === 9999000) console.log('9999000');
//       if (i === 9990000) console.log('9990000');
//       if (i === 9900000) console.log('9900000');
//       if (i === 9750000) console.log('9750000');
//       if (i === 9500000) console.log('9500000');
//       if (i === 9250000) console.log('9250000');
//       if (i === 9000000) console.log('9000000');
//       if (i === 8750000) console.log('8750000');
//       if (i === 8500000) console.log('8500000');
//       if (i === 8250000) console.log('8250000');
//       if (i === 8000000) console.log('8000000');
//       if (i === 7750000) console.log('7750000');
//       if (i === 7500000) console.log('7500000');
//       if (i === 7250000) console.log('7250000');
//       if (i === 7000000) console.log('7000000');
//       if (i === 6750000) console.log('6750000');
//       if (i === 6500000) console.log('6500000');
//       if (i === 6250000) console.log('6250000');
//       if (i === 6000000) console.log('6000000');
//       if (i === 5750000) console.log('5750000');
//       if (i === 5500000) console.log('5500000');
//       if (i === 5250000) console.log('5250000');
//       if (i === 5000000) console.log('5000000');
//       if (i === 4750000) console.log('4750000');
//       if (i === 4500000) console.log('4500000');
//       if (i === 4250000) console.log('4250000');
//       if (i === 4000000) console.log('4000000');
//       if (i === 3750000) console.log('3750000');
//       if (i === 3500000) console.log('3500000');
//       if (i === 3250000) console.log('3250000');
//       if (i === 3000000) console.log('3000000');
//       if (i === 2750000) console.log('2750000');
//       if (i === 2500000) console.log('2500000');
//       if (i === 2250000) console.log('2250000');
//       if (i === 2000000) console.log('2000000');
//       if (i === 1750000) console.log('1750000');
//       if (i === 1500000) console.log('1500000');
//       if (i === 1250000) console.log('1250000');
//       if (i === 1000000) console.log('1000000');
//       if (i === 750000) console.log('750000');
//       if (i === 500000) console.log('500000');
//       if (i === 250000) console.log('250000');
      
 
//       let record = createRecord(i);
//       if (i === 0) {
//         writeStream.write(record, encoding, done);
//       } else {
//         writeStream.write(record, encoding);
        
//       }
  
//     }
//     while (i > 0 && canWrite) {
//       if (i > 0 && !canWrite) {

//         writeStream.once('drain', writing);
//       }
//     }
//   }
//   writing();
// };

// writeStream.write(`product_id|id|nickname|rating|title|created_at|body|fit|age|height|weight|location|email|helpful_yes|helpful_no|tags\n`, 'utf-8');
// startWriting(writeStream, 'utf-8', () => {
//   writeStream.end();
// });








// console.log(words);

// let writer = csvWriter({headers: ['product_id', 'id', 'nickname']});
// writer.pipe(fs.createWriteStream('out.csv'));
// writer.write(words);
// writer.end();

// let writer = csvWriter({ sendHeaders: false });
// writer.pipe(fs.createWriteStream('out.csv'));
// writer.write(words);
// writer.end();

// const fs = require('fs');
// const faker = require('faker');












// const FILE_COUNT_MAX = 1000; // I know this is bad, but im being lazy

// const randScore = (max) => Math.ceil((Math.random() * max));
// const ranImage = (max = 5) => {
//   const result = [];
//   const n = Math.floor(Math.random() * max);
//   for (let i = 0; i < n; i += 1) {
//     result.push({
//       id: i,
//       url: `https://sdc-images-review-service.s3-us-west-2.amazonaws.com/image${Math.floor(Math.random() * FILE_COUNT_MAX)}.jpg`,
//       description: faker.commerce.productDescription(),
//     });
//   }
//   return result;
// };
// const randTag = () => {
//   const tags = ['Shirt', 'Pratical', '#streetWear', 'JinSwagg', 'Snoop'];
//   return tags.slice(Math.floor(Math.random() * 1), Math.floor(Math.random() * 5));
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

// const generateFakeReview = (productID, reviewID) => {
//   const fakeReviews = [];
//   for (let i = 0; i < reviewID; i += 1) {
//     fakeReviews.push(
//       {
//         product_id: productID,
//         review_id: reviewID,
//         nickname: faker.name.findName(),
//         rating: randScore(5),
//         title: faker.commerce.productDescription(),
//         created_at: faker.date.past(),
//         body: faker.lorem.paragraphs(),
//         images: ranImage(5),
//         fit: randFit(),
//         tags: randTag(),
//         age: randAge(),
//         height: randHeight(),
//         weight: randWeight(),
//         location: faker.address.city(),
//         email: faker.internet.email(),
//         helpful_yes: 1,
//         helpful_no: 2,

//       },
//     );
//   }
//   return fakeReviews;
// };

// let data = [];

// const insertData = (numDocs, maxReview) => {
//   for (let i = 0; i < numDocs; i += 1) {
//     data = data.concat((generateFakeReview(i, Math.floor(Math.random() * maxReview))));
//   }
//   fs.writeFile('testData.json', JSON.stringify(data), (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('success!');
//     }
//   });
// };

// insertData(10, 5);


// let fakeData = [];

// const insertSampleReviews = (maxReview = 10) => {
//   for (let i = 1; i <= 100; i += 1) {
//     fakeData = fakeData.concat((generateFakeReview(i, Math.floor(Math.random() * maxReview))));
//   }
//   Review.create(fakeData)
//     .then(() => db.close())
//     .catch((err) => console.log(err));
// };

// insertSampleReviews(50);