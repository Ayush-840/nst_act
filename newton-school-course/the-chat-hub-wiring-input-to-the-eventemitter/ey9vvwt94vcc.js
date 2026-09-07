//       - username: currentName
        //       - text: messageInput
        // TODO: Emit the 'messageReceived' event here!
        //       Pass an object containing:
        //     username:currentName,
        //     text:messageInput
        // });
rl.question('Enter sender name: ', (nameInput) => {
    const currentName = nameInput.trim() || 'Anonymous';
    rl.question(`Type message for ${currentName}: `, (messageInput) => {
        // chatSystem.emit("messageReceived",{
});
// 3. Ask questions and Emit
    output: process.stdout
        rl.close();
    });
});
// DO NOT MODIFY BELOW THIS LINE
module.exports = { chatSystem, rl };
    input: process.stdin,
const rl = readline.createInterface({
// 2. The Input Interface
});