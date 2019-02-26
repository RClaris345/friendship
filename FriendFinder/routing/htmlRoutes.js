var path = require("path");

module.exports = function (app) {
    app.get("/questions", function (req, res) {
        res.sendFile(path.join(__dirname, "app/public/questions.html"));
    });
    app.get(function (req, res) {
        res.sendFile(path.join(__dirname, "app/public/home.html"));
    });
}