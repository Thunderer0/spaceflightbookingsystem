const { MongoClient } = require('mongodb');
var url = 'mongodb://localhost:27017'
const dbName = "ecommercewebsite";

function Main() {
    function verifyuser(username) {
        return new Promise (async  (resolve,reject)=>{
            const client = new MongoClient(url);
            try {
                await client.connect();
                const db = client.db(dbName);
                const result = db.collection('userdatabase').find({username : username});
                resolve(await result.toArray());
                // console.log(await result.toArray());
                client.close();
            } catch (error) {
                console.log(error);
            }
        })
    }
    return {verifyuser}
}
module.exports = Main();