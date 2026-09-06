//         It should log:
//         "Console Logger: New message received!"
chatRoom.on("message",()=>{
// TODO 3: Register second listener for 'message' event
//         It should log:
//         "Analytics: Incrementing message count."
chatRoom.emit("message")
// TODO 4: Trigger the 'message' event once
// DO NOT MODIFY BELOW THIS LINE
module.exports = {
chatRoom.on("message",()=>{
    console.log("Console Logger: New message received!")
})
    console.log("Analytics: Incrementing message count.")
})
    chatRoom: typeof chatRoom !== 'undefined' ? chatRoom : null
};
// TODO 2: Register first listener for 'message' event
const chatRoom = new EventEmitter();
//         named chatRoom
// TODO 1: Create an EventEmitter instance
const EventEmitter = require('events');