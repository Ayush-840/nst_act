const { error } = require('console');
const path = require('path');
const reader = fs.createReadStream(
    path.join(__dirname, 'missing_users.csv')
);
reader.on('data', (chunk) => {
    console.log('Got data');
});
reader.on('error', (err) => {
// TODO: Add an event listener to handle
// stream errors gracefully.
// Instead of crashing, print:
// "Error: File could not be found!"
// DO NOT MODIFY ABOVE CODE
const fs = require('fs');
    console.log('Error: File could not be found!');
});
// DO NOT MODIFY BELOW THIS LINE
module.exports = { reader };