var fs = require('fs');
const faker = require('faker');

const file = fs.createWriteStream('./reviewout.csv');

let counter = 0;
const entries = 10000000;

for (counter; counter < entries; counter += 1) {
  if (counter % 10000 === 0) {
    console.log('this many entries created: ', counter);
  }

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

  file.write(`${product_id}|${id}|${nickname}|${rating}|${title}|${created_at}|${body}|${fit}|${age}|${height}|${weight}|${location}|${email}|${helpful_yes}|${helpful_no}|"{${tags}}"\n`);
}

file.end();
