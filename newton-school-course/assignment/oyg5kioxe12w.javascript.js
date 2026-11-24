const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'prices.txt');
// TODO:
// Create a readable stream
 priceStream = fs.createReadStream(filePath);
 expensiveTotal = 0;
// TODO:
// Register the data event
 priceStream.on('data', (chunk) => { for (const p of chunk.toString().trim().split(/\s+/)) { const n = Number(p); if (!Number.isNaN(n) && n > 100) expensiveTotal += n; } });
// TODO:
// Register the end event
 priceStream.on('end', () => { console.log('Total of expensive orders: ' + expensiveTotal); });
module.exports = {
    priceStream,
    expensiveTotal
};