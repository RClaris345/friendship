// / Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

// * Create a set of routes for getting and posting table data
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get("/questions", function (req, res) {
    res.sendFile(path.join(__dirname, "public/questions.html"));
});

require("./routing/apiRoutes")(app);



//name photo and score

// Create New Characters - takes in JSON input
app.post("/api/questions", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newfriend = req.body;

    console.log(newfriend);

        friends.push(newfriend);
    

    res.json(newfriend);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});






///write a function that goes through the array and the compares to see who has the closet match .......
//we want a loop. friends.length 
