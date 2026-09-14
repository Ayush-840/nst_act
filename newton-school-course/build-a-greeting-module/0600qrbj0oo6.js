// ─── __previous_submission__/.env ───
PORT=3000

// ─── __previous_submission__/.gitignore ───
node_modules
package-lock.json
core
core.*
*.core


// ─── __previous_submission__/README.md ───
# Base playground for Node 20 Assignment Question ( Code server ) boilerplate

// ─── __previous_submission__/nodemon.json ───
{
    "watch": ["src/"],
    "legacyWatch": true
}

// ─── __previous_submission__/package.json ───
{
  "name": "node-20",
  "version": "1.0.0",
  "main": "src/index.js",
  "scripts": {
    "test": "mocha '__tests__/*.js' --reporter mochawesome --recursive  --timeout 1000 --exit",
    "start": "node src/index.js",
    "dev": "nodemon src/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "dotenv": "^16.4.5",
    "express": "^4.19.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.4"
  }
}

// ─── __previous_submission__/src/greet.js ───
function greet(name) {
    return `Welcome, ${name}!`;
}

module.exports = greet;

// ─── __previous_submission__/src/index.js ───
const greet = require('./greet');

console.log(greet("Aman"));