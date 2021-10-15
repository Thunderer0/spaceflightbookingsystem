var mongodb = require('mongodb')
var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017');
function Main(){
    function registeruser(name,pass){
        let data = {
            username: name,
            password: pass
        }
        try {
            dbConn.then(function(db){
                var dbo = db.db("ecommercewebsite")
                dbo.collection('userdatabase').insertOne(data);
            })
        } catch (error) {
            throw error;
        }
    }
    return {registeruser};
}
module.exports = Main();