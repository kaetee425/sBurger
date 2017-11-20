var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT || 3333;
var app = express();

var db = require("./models");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

var exphbhs = require("express-handlebars");

app.engine("handlebars", exphbhs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

require("./routes/apiRoutes.js")(app);

db.sequelize.sync({force:true}).then(function(){
	app.listen(port, function(){
		console.log("App Listening on PORT", port)
	});
})