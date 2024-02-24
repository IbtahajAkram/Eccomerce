const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');
const bodyParser = require('body-parser');
const port = 4000;
const app = express();
const connectionString = 'mongodb+srv://zawwar1313:SKemd6qGp8cvc3BT@cluster0.yf0z8hu.mongodb.net/?retryWrites=true&w=majority';
const databaseName = 'user';
const collectionName = 'users';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/Eccomerce', async (req, res) => {
    res.sendFile(path.join(__dirname + '/Eccomerce.html'));
});


// Register Now Data Insert
app.post('/registerSubmit', async (req, res) => {
    try {
        const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect(); no
        const database = client.db(databaseName);
        const collection = database.collection(collectionName);
        const dataToInsert = req.body;
        const result = await collection.insertOne(dataToInsert);
        if (result) {
            console.log('success');
            res.status(200).send('Error');
        } else {
            console.log('error');
            res.status(500).send('Error');
        }
    } catch (error) {
        console.error('error');
        res.status(500).send('Error');
    }
});

// Product data Record Insert
app.post('/productList.html', async (req, res) => {
    try {
        const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        const database = client.db(databaseName);
        const collection = database.collection(collectionName);
        const dataToInsert = req.body;
        const result = await collection.insertOne(dataToInsert);
        if (result) {
            console.log('success');
            res.status(200).send('Sucessfully Submited Your Data!');
        } else {
            console.log('error');
            res.status(500).send('Sucessfully Submited Your Data!');
        }
    } catch (error) {
        console.error('error');
        res.status(500).send('Error');
    }
});

// Product data Record Delete
app.post('/productListDelete.html', async (req, res) => {
    try {
        const ItemId = req.params.id;
        const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        const database = client.db(databaseName);
        const collection = database.collection(collectionName);
        const result = await collection.deleteOne({ _id: new ObjectId(ItemId) });
        if (result) {
            console.log('success');
            res.status(200).send('Sucessfully Deleted Your Data!');
        } else {
            console.log('error');
            res.status(500).send('Sucessfully Deleted Your Data!');
        }
    } catch (error) {
        console.error('error');
        res.status(500).send('Error');
    }
});


// Product data Record Insert
app.post('/productListUpdate.html', async (req, res) => {
    try {
        const ItemId = req.params.id;
        const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        const database = client.db(databaseName);
        const collection = database.collection(collectionName);
        const dataToInsert = req.body;
        const result = await collection.replaceOne({_id : new ObjectId(ItemId)} , dataToInsert);
        if (result) {
            console.log('success');
            res.status(200).send('Sucessfully Submited Your Data!');
        } else {
            console.log('error');
            res.status(500).send('Sucessfully Submited Your Data!');
        }
    } catch (error) {
        console.error('error');
        res.status(500).send('Error');
    }
});

// Product data Record Insert
app.get('/productListList', async (req, res) => {
    try {
        let client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        const database = client.db(databaseName);
        const collection = database.collection(collectionName);
        const result = await collection.find().toArray();
        res.json(result);
    } catch (error) {
        console.error('error');
        res.status(500).send('Error');
    }
});



app.post('/Eccomerce', async (req, res) => {
    try {
        const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        const database = client.db(databaseName);
        const collection = database.collection(collectionName);
        const dataToInsert = req.body;
        const result = await collection.insertOne(dataToInsert);
        if (result) {
            console.log('success');
            res.status(200).send('Error');
        } else {
            console.log('error');
            res.status(500).send('Error');
        }
    } catch (error) {
        console.error('error');
        res.status(500).send('Error');
    }
});


app.listen(port, () => {
    console.log('Your server is running on this port 4000');
});

