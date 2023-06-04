const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static("public"));
app.set('view engine', 'ejs');

let NEWITEM =[];

app.get("/", function(req,res){


    let options = {
        weekday: "long",
        month: "long",
        day: "numeric",
    }

    let today = new Date();
    let DATE = today.toLocaleDateString("en-US", options)

    res.render("index",{'date': DATE,'newitem': NEWITEM})
})




app.post("/add", function(req, res){
    
    NEWITEM.push(req.body.code)
    res.redirect("/")

})

app.post("/removeAll", function(req, res){
    
    NEWITEM = []
    res.redirect("/")

})

app.listen(PORT, function(){
    console.log(`The app start on http://localhost:${PORT}`);
});