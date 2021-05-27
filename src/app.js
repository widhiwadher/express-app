const path = require('path');
const express = require('express');
const app = express();

const staticPath = path.join(__dirname, '../public');
const templatesPath = path.join(__dirname, '../templates');
// app.use(express.static(staticPath));

app.set("view engine", "hbs");
app.set("views", templatesPath);

app.get("/", (req, res) => {
    res.render("index", {
        contactus: "Person List",
        persons: [
            { name: 'Deepak Rathor', age: 34 },
            { name: 'Gunjan Rathor', age: 27 },
            { name: 'Widhi Wadher' },
            { name: 'Niyati Rathor', age: 3 }],

        address: {
            houseNo: '213',
            street: '2nd A Cross , 2nd Main Raod',
            city: 'Bangalore',
            pin: '560043'
        }
    });
});

// if age > 30 row color will be red if age less than 10 row color will be green if age bet 10 to 30 row color will be orange
app.listen(8000, () => {
    console.log("listining at 8000");
});

