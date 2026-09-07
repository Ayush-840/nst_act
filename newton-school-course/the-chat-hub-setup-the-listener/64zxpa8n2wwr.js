//         named chatSystem
// TODO 2: Register a listener for 'messageReceived' event
//         It should accept an object with username and text
//         and print:
//         [Notification]: New message from [username]!
//         "[text]"
//         ----------------------------------------
// --- Test Code (Don't change this) ---
// DO NOT MODIFY BELOW THIS LINE
if (typeof chatSystem !== 'undefined') {
    chatSystem.emit('messageReceived', {
        username: 'TestUser',
        text: 'Hello Chunk 1!'
    });
}
module.exports = {
    chatSystem: typeof chatSystem !== 'undefined' ? chatSystem : null
// TODO 1: Create an EventEmitter instance
const chatSystem=new EventEmitter();
chatSystem.on("messageReceived",(obj)=>{
};
    console.log(`[Notification]: New message from ${obj.username}! ${obj.text}`);
});