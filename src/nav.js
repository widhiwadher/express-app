const express = require("express");
const app = express();
const port = 3000;



app.get('/', (req, res) => {
 res.send("now port at 3000");
});


app.get('/about', (req, res) => {
    res.send("now port at 3000");
   });
   
app.listen(port,() => {
 console.log("nav.js at 3000-about");
});