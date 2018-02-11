let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
let port = process.env.PORT || 80;
let favicon = require("serve-favicon");

let app = express();
if (process.env.NODE_ENV !== "development") {
    app.use("/", express.static(path.join(__dirname, "dist")));
}
// view engine setup
app.engine("html", require("ejs").renderFile);
app.set("views", path.join(__dirname, "dist"));
app.set("view engine", "html");
app.use(favicon(__dirname + "/dist/favicon.ico"));

app.get("*", function(req, res, next) {
    res.render("index.html");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

var server = app.listen(port, function() {
    console.log("listening on port ", port);
});