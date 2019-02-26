const friends = require("../data/friends");
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.get("/api/questions", function(req, res) {
    return res.sendFile(path.join(__dirname, "app/public/questions.html"));
  });

  app.post("/api/questions", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware

    var totalDifference = 1000;
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };
    var userData = req.body;
    //   var userName = userData.name;
    //   var userScore = userData.scores;
    //   userData = {
    //     name: req.body.name,
    //     photos: req.body.photo,
    //     scores: b
    //   };

    userData.scores = userData.scores.map(item => parseInt(item, 10));

    console.log("Name" + userData.name);
    console.log("User score" + userData.totalScore);
    userData.sum = userData.scores.reduce((a, b) => a + b, 0);
    console.log("Sum of the users score" + userData.sum);
    console.log("Best Match friend difference" + bestMatch.friendDifference);

    var friendSum;
    for (var i = 0; i < friends.length; i++) {
      friendSum = friends[i].scores
        .map(item => parseInt(item, 10))
        .reduce((x, y) => x + y, 0);

      if (friendSum < totalDifference) {
        totalDifference = friendSum;
        bestMatch = friends[i];
      }
    }

    res.json(bestMatch);
  });
};

// var newfriend = req.body;

// console.log(newfriend);

//     friends.push(newfriend);

// res.json(newfriend);
