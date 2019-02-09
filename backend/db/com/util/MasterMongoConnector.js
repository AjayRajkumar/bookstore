const mongoose=require('mongoose');
let connection=mongoose.connection;
let connectionStatus=false;

function connectionMongoDb() {
    mongoose.connect("mongodb://localhost:27017/bt", {useNewUrlParser: true});
    connection.on('error', function () {
        console.log("Kindly Check the Error")
    });
    connection.once('open', function () {
        connectionStatus = true;
        console.log("Welcome to MongoDb Your are Connected")
    });
}

/**
 * Export the all required object based on the requirement information
 * @type {{Schema, Connection, ConnectionStatus: boolean}}
 */
module.exports={
    Schema:mongoose.Schema,
    Connection:connection,
    ConnectionStatus:connectionStatus,
    model:mongoose.model,
    connectionMongoDb:connectionMongoDb
};
