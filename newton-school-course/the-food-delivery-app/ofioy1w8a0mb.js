const EventEmitter = require('events');
const deliveryTracker = new EventEmitter();
deliveryTracker.on('delivered', () => {
    console.log('Food has arrived! Enjoy your meal.');
});
deliveryTracker.emit('delivered');
module.exports = { 
    deliveryTracker: typeof deliveryTracker !== 'undefined' 
        ? deliveryTracker 
        : null 
};