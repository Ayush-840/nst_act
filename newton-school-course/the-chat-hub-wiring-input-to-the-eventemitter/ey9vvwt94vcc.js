//       - username: currentName
        //       - text: messageInput
        // TODO: Emit the 'messageReceived' event here!
        //       Pass an object containing:
            username:currentName,
            text:messageInput
        });
rl.question('Enter sender name: ', (nameInput) => {
    const currentName = nameInput.trim() || 'Anonymous';
    rl.question(`Type message for ${currentName}: `, (messageInput) => {
        chatSystem.emit("messageReceived",{
});
// 3. Ask questions and Emit
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// 2. The Input Interface
    console.log(`\n[Notification]: New message from ${data.username}!`);
    console.log(`"${data.text}"`);
    console.log(`----------------------------------------`);
// 1. The Listener
chatSystem.on('messageReceived', (data) => {
// The EventEmitter instance
const chatSystem = new EventEmitter();
const EventEmitter = require('events');
const readline = require('readline');
const { text } = require('stream/consumers');