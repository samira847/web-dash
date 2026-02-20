require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
const port = 8888;

console.log("Running from:", __dirname);


//connect with db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`http://localhost:${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log(err);
});



//get
app.get("/", (req, res) => {
    customer.find()
    .then((allData)=>{
        console.log("Data from DB:", allData);
        res.render("index",{arr:allData})
    })
    .catch((err)=>{throw err});

});
app.get("/user/add.html", (req, res) => {
    console.log(__dirname + "/views/user/add.ejs");
    res.render("user/add");
});


app.get("/user/edit.html", (req, res) => {
    res.render("user/edit");
});










const customer=require("./models/usersSchema")
//post
app.post("/user/add.html", (req, res) => {
    customer.create(req.body)
    .then(()=>{
        console.log("done");
        res.redirect("/");
    })
    .catch((err)=>{throw err}); 
});


