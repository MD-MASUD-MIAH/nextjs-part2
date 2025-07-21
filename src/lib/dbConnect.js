const { MongoClient, ServerApiVersion } = require('mongodb');
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

export const collectionName = {


  TEST_USER :"text_user",
  PRACTICE_DATA: 'practice_data'
}


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