const { MongoClient } = require('mongodb');

async function main() {
    const uri = 'mongodb://127.0.0.1:27017';
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('mydatabase');
        const collection = database.collection('mycollection');

        // Insert a document
        const doc = { name: 'Alex', age: 20 };
        const result = await collection.insertOne(doc);
        console.log(`New document inserted with _id: ${result.insertedId}`);

        // Query the document
        const foundDoc = await collection.findOne({});
        console.log('Found document:', foundDoc);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
