
const {fs, firebaseConfig} = require('./firebaseConfig')
// const admin = require('firebase-admin')
const { collection, addDoc, doc, getDoc } = require ("firebase/firestore"); 

var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    bodyParser = require('body-parser'),
    cors = require('cors');

app.use(cors());
app.options('*', cors());

app.use(express.json({limit: '50mb'}));


app.use(bodyParser.urlencoded({
    extended: true,
    strict: false
}));

app.use(bodyParser.json({limit: '50mb'}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials","true");
    next();
});
app.use(express.static('uploads'));

app.get("/test", (req,res) => {
    res.send ("hello world!")
})

app.get("/get", async (req,res) => {
    const docref = doc(fs, "foodStock", 'tes')
    console.log("ini docref "+docref)
    const docSnap = await getDoc(docref)
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

})

app.post("/create", async (req,res)=> {
    const data = {
        milk: req.body.data
    }
    addDoc(collection(fs, 'foodStock'), data).then(
    res.send (
        {
            msg: "Stock added"
        }
    )
    )
})

app.listen(port, process.env.HOST || 'localhost');
console.log('RESTful API server started on: ' + port);
console.log('Running on lambda')



