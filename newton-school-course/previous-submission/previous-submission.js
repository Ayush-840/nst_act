switch (input) {
    case '/help':
      console.log('Commands:');
      console.log('/help');
      console.log('/time');
      console.log('/exit');
      break;
    case '/time':
      console.log(new Date().toString());
      break;
    case '/exit':
      console.log('Bye!');
      process.exit(0);
    default:
      if (input.length > 0) {
        try {
          const result = eval(input);
          console.log(result);
        } catch (err) {
          console.log(err.message);
        }
      }
  const input = line.trim();
rl.on('line', (line) => {
rl.prompt();
});
  prompt: '> '
  output: process.stdout,
      break;
  }
  rl.prompt();
});