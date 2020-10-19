var fs = require('fs');
var csvWriter = require('csv-write-stream');
const faker = require('faker');
const argv = require('yargs').argv

const lines = argv.lines || 1001;
const filename = argv.output || 'imageout.csv';
const writeStream = fs.createWriteStream(filename);

const createImage = (id) => {
  const review_id = Math.ceil((Math.random() * 9999999));
  const url = `https://sdc-images-review-service.s3-us-west-2.amazonaws.com/image${id}.jpg`;
  const description = faker.lorem.sentence();
  return `${id},${url},${description},${review_id}\n`;
};

const startWriting = (writeStream, encoding, done) => {
  let i = lines;
  function writing() {
    let canWrite = true;
    do {
      i -= 1;
      let image = createImage(i);
      if (i === 1) {
        writeStream.write(image, encoding, done);
      } else {
        writeStream.write(image, encoding);
      }
    }
        while (i > 1 && canWrite) {
          if (i > 1 && !canWrite) {
            writeStream.once('drain', writing);
        }
      }
    }
  writing();
};

writeStream.write(`id,url,description,review_id\n`, 'utf-8');
startWriting(writeStream, 'utf-8', () => {
  writeStream.end();
});
