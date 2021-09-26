const express = require("express")
const app = express()
const time = require("./timer.js");
const path = require("path")
const port = 5000
app.use(time)
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public", "home.html"));
});


app.listen(port ,
     (err) => {err ? console.log(err) : console.log(`listening on port ${port}`) }
)