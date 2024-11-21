const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const cors = require('cors'); // Include CORS to handle cross-origin requests
require('dotenv').config(); // Load environment variables from .env file

// MongoDB connection string and database name
const url = process.env.MONGODB_URL || 'mongodb://localhost:27017/';
const dbName = 'Carera';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies

// Function to save winner details to the MongoDB database
async function saveWinner(winnerDetails) {
    const client = new MongoClient(url);

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('winners');

        const result = await collection.insertOne(winnerDetails);
        return result.insertedId;
    } catch (err) {
        console.error('Error saving winner details:', err);
        throw err;
    } finally {
        await client.close();
    }
}

// POST endpoint to receive winner details and save them to the database
app.post('/save-winner', async (req, res) => {
    try {
        const insertedId = await saveWinner(req.body);
        res.status(200).send({ message: 'Winner details saved', id: insertedId });
    } catch (err) {
        res.status(500).send({ message: 'Error saving winner details', error: err.message });
    }
});

// Start the server on the specified port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
