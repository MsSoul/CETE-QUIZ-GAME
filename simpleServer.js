const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const url = 'mongodb://localhost:27017/';
const dbName = 'Carera';

app.use(express.json());

app.post('/save-winner', async (req, res) => {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db(dbName);
        const result = await db.collection('winners').insertOne(req.body);
        res.status(200).send({ message: 'Winner details saved', id: result.insertedId });
    } catch (err) {
        res.status(500).send({ message: 'Error saving winner details', error: err.message });
    } finally {
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
