const { MongoClient, ServerApiVersion } = require('mongodb');
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

function dbConnect (collectionName){
    
    const uri = process.env.MONGODB_URL
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

return client.db('addbolgs').collection(collectionName)



}

export default dbConnect