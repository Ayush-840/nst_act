const filePath = path.join(__dirname, 'prices.txt');
// TODO:
// Create a readable stream
let priceStream;
let expensiveTotal=0;
// TODO:
// Register the data event
// TODO:
// Register the end event
module.exports = {
    priceStream,
filePath.on("data",()=>{
    if(priceStream>100){
})
        priceStream+=expensiveTotal;
    }
    expensiveTotal
};
const path = require('path');
const fs = require('fs');