var fs = require('fs');
var csvWriter = require('csv-write-stream');
const faker = require('faker');
const argv = require('yargs').argv





const lines = argv.lines || 10000;
const filename = argv.output || 'out.csv';
const writeStream = fs.createWriteStream(filename);


const createRecord = (lines) => {

   const randFit = () => {
      const fit = [0, 0.5, 1];
      return fit[Math.floor(Math.random() * fit.length)];
    };

    const randAge = () => {
        const age = ['Under 18', '18 to 24', '25 to 34', '35 to 44', '45 to 54', '55 to 64', '65 to 74', '75 or over'];
        return age[Math.floor(Math.random() * age.length)];
      };
      const randHeight = () => {
  const h = ['Shorter than 5\'', '5\'1"', '5\'2"', '5\'3"', '5\'4"', '5\'5"', '5\'6"', '5\'7"', '5\'8"', '5\'9"', '5\'10"', '5\'11"', '6\'1"', '6\'2"', '6\'3"', '6\'4"', '6\'5"', 'Taller than 6\'5"'];
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
    tags.push(faker.commerce.productAdjective());
  }
  return tags;
};
 
    const product_id = faker.random.number({
      'min': 1,
      'max': 10000000
    });
    const nickname = faker.name.findName();
    let id;
    for (let i = 0; i <= lines; i += 1) {
      id = i;
    }
    const randScore = (max) => Math.ceil((Math.random() * max));
    const rating = randScore(5);
    const title = faker.commerce.product();
    const created_at = faker.date.past();
    const body = faker.commerce.productDescription();
    const fit = randFit();
    const age = randAge();
    const height = randHeight();
    const weight = randWeight();
    const location = faker.address.city();
    const email = faker.internet.email();
    const helpful_yes = 2;
    const helpful_no = 3;
    const tags = randTag();

  return `${product_id},${id},${nickname},${rating},${title},${created_at},${body},${fit},${age},${height},${weight},${location},${email},${helpful_yes},${helpful_no},"${tags}"\n`;
};

const startWriting = (writeStream, encoding, done) => {
  let i = lines;
  function writing() {
    let canWrite = true;
    do {
      i -= 1;
      let record = createRecord(i);
      if (i === 0) {
        writeStream.write(record, encoding, done);
      } else {
        writeStream.write(record, encoding);
      }
    }
        while (i > 0 && canWrite) {
          if (i > 0 && !canWrite) {
            writeStream.once('drain', writing);
          
        }
      }
    }
  writing();
};

writeStream.write(`product_id,id,nickname,rating,title,created_at,body,fit,age,height,weight,location,email,helpful_yes,helpful_no,tags\n`, 'utf-8');
startWriting(writeStream, 'utf-8', () => {
  writeStream.end();
});









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