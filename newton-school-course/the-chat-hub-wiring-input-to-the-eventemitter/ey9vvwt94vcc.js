// 2. The Input Interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
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
});
// DO NOT MODIFY BELOW THIS LINE
module.exports = { chatSystem, rl };