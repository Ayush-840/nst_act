// 3. Ask questions and Emit
rl.question('Enter sender name: ', (nameInput) => {
    const currentName = nameInput.trim() || 'Anonymous';
    rl.question(`Type message for ${currentName}: `, (messageInput) => {
        // TODO: Emit the 'messageReceived' event here!
        //       Pass an object containing:
        //       - username: currentName
        //       - text: messageInput
        rl.close();
    });
        rl.emit("messageReceived",{
});
});
    output: process.stdout
    input: process.stdin,
const rl = readline.createInterface({
// 2. The Input Interface
            username:currentName,
        });
// DO NOT MODIFY BELOW THIS LINE
            text:messageInput
module.exports = { chatSystem, rl };
});
    console.log(`----------------------------------------`);
    console.log(`"${data.text}"`);
    console.log(`\n[Notification]: New message from ${data.username}!`);
chatSystem.on('messageReceived', (data) => {
// 1. The Listener