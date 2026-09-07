// 3. Ask questions and Emit
rl.question('Enter sender name: ', (nameInput) => {
    const currentName = nameInput.trim() || 'Anonymous';
    rl.question(`Type message for ${currentName}: `, (messageInput) => {
        // TODO: Emit the 'messageReceived' event here!
        //       Pass an object containing:
        //       - username: currentName
        //       - text: messageInput
        rl.emit("messageReceived",{
});
    output: process.stdout
    input: process.stdin,
const rl = readline.createInterface({
            username:currentName,
        });
            text:messageInput
        rl.close();
    });
});
// DO NOT MODIFY BELOW THIS LINE
module.exports = { chatSystem, rl };