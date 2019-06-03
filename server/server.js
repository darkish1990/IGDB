const express = require('express');
var cors = require('cors');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Local
const yargs = require('yargs');
const arguments = yargs.argv._
const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

console.log(arguments)

//connect mongoDB
const url = "mongodb://localhost:27017/IGDB";
mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('we are connected!');
});

//Define a schema
const Schema = mongoose.Schema;
const reviewScheme = new Schema({
    authorName: String,
    authorLast: String,
    img: String,
    gameName: String,
    rating: Number,
    date: Date,
    reviewDecription: String,
    id: mongoose.ObjectId
});
const usersScheme = new Schema({
    userName: String,
    pass: String,
});



// for (i = 0; i < 10; i++) {
//     //Schema types can be:

//     // String
//     // Number
//     // Date
//     // Buffer - https://hackernoon.com/https-medium-com-amanhimself-converting-a-buffer-to-json-and-utf8-strings-in-nodejs-2150b1e3de57
//     // Boolean
//     // Mixed - https://mongoosejs.com/docs/schematypes.html#mixed
//     // ObjectId
//     // Array
//     // Decimal128
//     // Map
// }


// // CRUD
// // https://mongoosejs.com/docs/queries.html

// SomeModel.find({ name: 'awesome' }, (err, docs) => {
//     if (err) throw err;
//     console.log('found', docs)
// })






if (arguments.includes('createReviews')) {
    // create collection (model) with it's schema
    const reviewsModel = mongoose.model('reviews', reviewScheme);

    // Create an instance of model SomeModel
    var reviewInstance = new reviewsModel({ authorName: 'awesome', authorLast: "bla", img: "", date: Date.now(), gameName: 'doom3', rating: 3.6, reviewDecription: 'yesh li tsav she korim lo yehoshua' });

    // Save the new model instance, passing a callback
    reviewInstance.save(function (err) {

    });
}
if (arguments.includes('createUsers')) {
    // create collection (model) with it's schema
    const usersModel = mongoose.model('users', usersScheme);

    // Create an instance of model SomeModel
    var usersInstance = new usersModel({ userName: 'moshe', pass: 'asd' });

    // Save the new model instance, passing a callback
    usersInstance.save(function (err) {

    });
}


//     MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//         if (err) throw err;
//         var dbo = db.db("nodechef-mongo");
//         var myobj = [
//             { name: 'John', address: 'Highway 71' },
//             { name: 'Peter', address: 'Lowstreet 4' },
//             { name: 'Amy', address: 'Apple st 652' },
//             { name: 'Hannah', address: 'Mountain 21' },
//             { name: 'Michael', address: 'Valley 345' },
//             { name: 'Sandy', address: 'Ocean blvd 2' },
//             { name: 'Betty', address: 'Green Grass 1' },
//             { name: 'Richard', address: 'Sky st 331' },
//             { name: 'Susan', address: 'One way 98' },
//             { name: 'Vicky', address: 'Yellow Garden 2' },
//             { name: 'Ben', address: 'Park Lane 38' },
//             { name: 'William', address: 'Central st 954' },
//             { name: 'Chuck', address: 'Main Road 989' },
//             { name: 'Viola', address: 'Sideway 1633' }
//         ];
//         dbo.collection("customers").insertMany(myobj, function (err, res) {
//             if (err) throw err;
//             console.log("Number of documents inserted: " + res.insertedCount);
//             db.close();
//         });
//     });

// }



// app.get('/getUsers', (req, res) => {
//     MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//         if (err) throw err;
//         var dbo = db.db("nodechef-mongo");

//         var mysort = { name: -1 };
//         dbo.collection("customers").find().sort(mysort).toArray(function (err, result) {
//             if (err) throw err;
//             res.send(result)
//             db.close();
//         });
//     });
// })

// app.post('/addUser', (req, res) => {
//     let newUser = req.body;

//     MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//         if (err) throw err;
//         var dbo = db.db("nodechef-mongo");

//         var mysort = { name: -1 };
//         dbo.collection("customers").insertOne(newUser, (function (err, result) {
//             if (err) throw err;
//             res.send(result)
//             db.close();
//         })
//         );
//     });
// })

app.get('/', (req, res) => {

    res.send('<h1>I like Big Buttssss</h1>')
})

app.get('/getMeMyAc', (req, res) => {
    setTimeout(() => {
        res.send({
            name: 'Arnold',
            last: 'schwartzeniggger',
            link: 'https://i.pinimg.com/originals/99/4d/85/994d8552520d84e068a0b513fddf1b13.jpg'
        })
    }, 2000
    )
})



//#region port
let port = process.env.port || 4000;
app.listen(port, function () { console.log("server ur on", port) })
//#endregion