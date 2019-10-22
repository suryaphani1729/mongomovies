const mongoose = require('mongoose');
const MongoClient = require("mongodb").MongoClient;

class Database {
  
  constructor() {
    this._connect();
  }
  
_connect() {
//   MongoClient.connect('mongodb+srv://surya123:surya123@contactkeeper-fjc9p.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
//     if(error) {
//         throw error;
//     }
//     this.database = client.db('test');
//     this.collection = this.database.collection("user");
//     console.log("Connected to Test!");
// });

     mongoose.connect('mongodb+srv://surya123:surya123@contactkeeper-fjc9p.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error(err)
       })
       return mongoose;
  }
}

const connectDb = () => {
  return   mongoose.connect('mongodb+srv://surya123:surya123@contactkeeper-fjc9p.mongodb.net/sample_mflix?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});
};







const moviesSchema = new mongoose.Schema({
  title: {    type: String  },
  cast: {    type: Array  },
  countries: {    type: Array  },
  released:  {type: Date},
  directors: {    type: Array  },
  awards: {    type: Object  },
  imdb : {    type: Object  },
  type : {    type: String  },
});


module.exports = {connectDb,moviesSchema, mongoose} ;
//module.exports = userSchema ;
//module.exports = new Database();