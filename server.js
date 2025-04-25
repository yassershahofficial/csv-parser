const express = require('express');
const path = require('path');
const fs = require('fs');
const csv = require('csv-parser')

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/html', 'index.html'))
})

app.get('/csv-data', (req,res) => {
    console.log('CSV data request received');

    if (!fs.existsSync('Table_Input.csv')) {
        return res.status(404).send({ message: 'CSV file not found' });
    }

    results = [];

    fs.createReadStream('Table_Input.csv')
    .pipe(csv())
    .on('data', (data) => {
        results.push(data)
    })
    .on('end', () => {
        res.json(results);
    })
    .on('error', (err) => {
        res.status(500).send({message : err.message || "Error when retrieving the CSV File data"})
    })
})

app.listen(PORT, () => {
    console.log(`Successfully connected to http://localhost:${PORT}`);
})