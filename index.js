const express = require("express");
const connectDb = require('./database');
var bodyParser = require('body-parser');
var cors = require('cors');


const app = express();

app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());




//get all users
app.get("/",  (req, res) => {
   
    const movies = new connectDb.mongoose.model("movies",connectDb.moviesSchema)
    movies.find({ poster: { $exists: true}},function(err,data){
        res.json(data);
    }).limit(20);
    // user.find().toArray((error, result) => {
    //     if(error) {
    //         return res.status(500).send(error);
    //     }
    //     res.send(result);
    // });
    //res.send("Hello world2");
 
});
app.get("/getMovies/:pageIndex",  (req, res) => {
   
    let pageIndex = req.params.pageIndex;
    const movies = new connectDb.mongoose.model("movies",connectDb.moviesSchema)
    movies.find({ poster: { $exists: true}},function(err,data){
        res.json(data);
    }).skip(pageIndex*20).limit(20);

  
 
});

const port = process.env.PORT || 8080;

connectDb.connectDb().then(async () => {
    app.listen(port, () =>
      console.log(`MongoMovies app listening on port 3000`),
    );
  });

