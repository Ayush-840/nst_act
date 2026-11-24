if (
        parsedMinPrice !== undefined &&
        parsedMaxPrice !== undefined &&
        parsedMinPrice > parsedMaxPrice
    ) {
        return res.status(400).json({ error: 'minPrice cannot be greater than maxPrice' });
    }
    }
        parsedMaxPrice = Number(maxPrice);
        }
            return res.status(400).json({ error: 'Invalid maxPrice' });
        if (String(maxPrice).trim() === '' || Number.isNaN(Number(maxPrice))) {
    if (maxPrice !== undefined) {
    }
        if (String(minPrice).trim() === '' || Number.isNaN(Number(minPrice))) {
            return res.status(400).json({ error: 'Invalid minPrice' });
        }
        parsedMinPrice = Number(minPrice);
    if (minPrice !== undefined) {
    let parsedMinPrice;
    let parsedMaxPrice;
    let allProducts = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    const { name, minPrice, maxPrice } = req.query;
app.get('/products', (req, res) => {
    const dbPath = path.join(__dirname, 'db.json');
const app = express();
const fs = require('fs');
const path = require('path');
const express = require('express');
const port = 3000;