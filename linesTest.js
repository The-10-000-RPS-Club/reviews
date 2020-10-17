var jsonlines = require('jsonlines')
var parser = jsonlines.parse()
 
parser.on('data', function (data) {
  console.log('Got json:', data)
})
 
parser.on('end', function () {
  console.log('No more data')
})
 
parser.write('{ "test": "This is a test!" }\n')
parser.write('{ "jsonlines": "is " }')
parser.end()
var jsonlines = require('jsonlines')
var stringifier = jsonlines.stringify()
 
stringifier.pipe(process.stdout)
 
stringifier.write({ test: 'This  a test!', blah: 3 })
stringifier.write({ jsonlines: 'is awesome' }, { red: 'blue' })
stringifier.end()