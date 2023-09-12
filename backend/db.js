const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/"; // LOCALHOST MUST BE CHANGED TO 127.0.0.1:27017 in the mongoURI due to the node 18 update.

const connectToMongo = async () => {
    await mongoose.connect(mongoURI)
        console.log("Connected to Mongo Successfully")
}


module.exports = connectToMongo;