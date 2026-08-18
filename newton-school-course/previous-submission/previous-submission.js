const EventEmitter = require('events');
const store = new EventEmitter();
store.on('sale', () => {
    console.log("Ka-ching! An item was sold.");
});
store.emit('sale');
module.exports = { store };