const __dirname = path.dirname(__filename);
const PORT = 3000;
const FILE_PATH = path.join(__dirname, 'orders.txt');
const server = http.createServer((req, res) => {
  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Failed to read orders file' }));
      return;
    }
    const totalOrders = data
const __filename = fileURLToPath(import.meta.url);
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
      .split(/\r?\n/)
      .filter((line) => line.trim() !== '').length;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ totalOrders }));
  });
});
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});