const ticketSystem=new EventEmitter();
ticketSystem.on("buy",(customerName)=>{
// TODO 2: Set up a listener for the 'buy' event
//         It should receive customerName and print:
//         "Ticket bought by: [customerName]"
// TODO 3: Emit the 'buy' event for customer "Alice"
// DO NOT MODIFY BELOW THIS LINE
module.exports = {
    ticketSystem: typeof ticketSystem !== 'undefined' ? ticketSystem : null
})
};
    console.log(`Ticket bought by: ${customerName}`)
ticketSystem.emit("buy","Alice")
//         named ticketSystem
// TODO 1: Create an EventEmitter instance
const EventEmitter = require('events');