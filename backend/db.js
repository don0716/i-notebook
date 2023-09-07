const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/";

// async function connectToMongo() {
//     await mongoose.connect(mongoURI).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
//   }

// const connectToMongo=()=>{
//     mongoose.connect(mongoURI);
//     console.log("connected to mongo");
// }

// const connectToMongo = async () => {
//     await mongoose.connect(mongoURI)
//         console.log("Connected to Mongo Successfully")
// }

// const connectToMongo=()=>{
//     mongoose.connect(mongoURI);
//     console.log("connected to mongo");
// }

const connectToMongo = async () => {
    try {
      mongoose.set("strictQuery", false);
      mongoose.connect(mongoURI);
      console.log("Connected to mongoDB successfully");
    } catch (error) {
      console.log(error);
      process.exit();
    }
  };

module.exports = connectToMongo;