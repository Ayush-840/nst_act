reader.on('data', (chunk) => {
    // BUG IS HERE: Fix this listener so it counts
    // lines WITHOUT storing chunks in memory
    totalMemoryString += chunk;
});
reader.on('end', () => {
    // BUG IS HERE TOO: Fix this to use
    // your new memory-efficient counter
    const lines = totalMemoryString.split('\n');
    console.log('Total lines:', lines.length);
});
// DO NOT MODIFY BELOW THIS LINE
module.exports = { reader };