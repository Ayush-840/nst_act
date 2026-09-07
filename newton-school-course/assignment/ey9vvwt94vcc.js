// 1. The Listener
chatSystem.on('messageReceived', (data) => {
    console.log(`\n[Notification]: New message from ${data.username}!`);
    console.log(`"${data.text}"`);
    console.log(`----------------------------------------`);
});
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
        chatSystem.emit("messageReceived",{
            username:currentName,
        });
            text:messageInput