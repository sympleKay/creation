let express = require("express");
let app = express();

let folderPath = process.argv[2];

/* serves all the static files*/
app.get(/^(.+)$/, function (req, res) {
    console.log("static file request : " + req.params);
    res.sendFile( (folderPath ? folderPath : __dirname) + req.params[0]);
});


let port = 2000;
app.listen (port, function() {
    console.log("Listening on port " + port);
})