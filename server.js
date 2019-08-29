const express = require("express");
var cors = require("cors");
var logger = require('morgan');

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const yargs = require("yargs");
const arguments = yargs.argv._;
const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(logger('dev'));



console.log(arguments);

//connect mongoDB
// "mongodb://localhost:27017/IGDB"
const url = `mongodb+srv://roey:Guprkhcv1990@cluster0-jzf8w.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected!");
});

//Define a schema
const Schema = mongoose.Schema;
const reviewScheme = new Schema({
  authorName: String,
  img: String,
  gameName: String,
  rating: Number,
  date: Date,
  reviewDescription: String,
  id: mongoose.ObjectId
});
// const usersScheme = new Schema({
//     userName: String,
//     pass: String,
// });

// create collection (model) with it's schema
const reviewsModel = mongoose.model("reviews", reviewScheme);

if (arguments.includes("createReviews")) {
  // Create an instance of model SomeModel
  var reviewInstance = new reviewsModel({
    authorName: "awesome",
    img:
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=beautiful-beauty-blue-414612.jpg&fm=jpg",
    date: Date.now(),
    gameName: "something",
    rating: 3.6,
    reviewDescription: "yesh li tsav she korim lo yehoshua"
  });
  //console.log(reviewInstance);
  // Save the new model instance, passing a callback
  reviewInstance.save(function (err) { });
  /* 1 */
  reviewInstance = new reviewsModel({
    authorName: "awesome",
    img:
      "https://d2skuhm0vrry40.cloudfront.net/2017/articles/2017-10-23-15-36/GTA_5_Online_LEAK_Duke_O_Death_DLC_update_coming_soon_605675.jpg/EG11/resize/300x-1/quality/75/format/jpg",
    date: "2019-06-30T10:39:15.918Z",
    gameName: "GTA5",
    rating: 4.8,
    reviewDescription: "bla bla GTA 5"
  });
  reviewInstance.save(function (err) { });
  /* 2 */
  reviewInstance = new reviewsModel({
    authorName: "roey",
    img:
      "https://hb.imgix.net/fb1a527bf84329358b1732e0432e189a047117f2.jpg?auto=compress,format&fit=crop&h=353&w=616&s=de8581ca3e0437aed022c72a1f8e99f6",
    date: "2019-06-30T13:28:37.048Z",
    gameName: "Doom3",
    rating: 1.3,
    reviewDescription:
      "Killing monsters and such \nmichael and belete look at aviv he is waiting for ya all \n\nsup sup u guys "
  });
  reviewInstance.save(function (err) { });

  /* 3 */
  reviewInstance = new reviewsModel({
    authorName: "roey",
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Dark_souls_3_cover_art.jpg/220px-Dark_souls_3_cover_art.jpg",
    date: "2019-06-30T13:31:44.006Z",
    gameName: "Dark Souls 3",
    rating: null,
    reviewDescription:
      "The Best Game eveerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
  });

  reviewInstance.save(function (err) { });
}
// if (arguments.includes('createUsers')) {
//     // create collection (model) with it's schema
//     const usersModel = mongoose.model('users', usersScheme);

//     // Create an instance of model SomeModel
//     var usersInstance = new usersModel({ userName: 'moshe', pass: 'asd' });

//     // Save the new model instance, passing a callback
//     usersInstance.save(function (err) {

//     });
// }

app.get("/Api/LatestReviews", (req, res) => {
  reviewsModel
    .find({})
    .sort([["date", -1]])
    .exec(function (err, docs) {
      // console.log(docs);
      res.send(docs);
    });
});

app.post("/Api/FindGameReview", (req, res) => {
  reviewsModel.find({ 'gameName': { $regex: `^${req.body.gameName}`, $options: "i" } }, function (err, docs) {
    //console.log(docs);
    res.send(docs);
  })
});
app.post("/Api/AddReview", (req, res) => {
  // Create an instance of model SomeModel
  var reviewInstance = new reviewsModel({
    authorName: req.body.objData.authorName,
    img: req.body.objData.img,
    date: Date.now(),
    gameName: req.body.objData.gameName,
    rating: req.body.objData.rating,
    reviewDescription: req.body.objData.reviewDescription
  });

  app.get("/*", function(req, res) {
    // res.sendFile(path.join(__dirname, "public/index.html"), function(err) {
      res.send("hello world")
  });
  // Save the new model instance, passing a callback
  reviewInstance.save(function (err) {
    res.send({ confirm: true });
  });
});

//#region port
let port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log("server ur on", port);
});
//#endregion

// module.exports = app
