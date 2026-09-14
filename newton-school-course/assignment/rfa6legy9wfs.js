//write your code here.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});
rl.prompt();
rl.on('line', (line) => {
    const input = line.trim();
    if (input) {
        try {
            const result = eval(input);
            console.log(result);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }
    rl.prompt();
}).on('close', () => {
    process.exit(0);
});