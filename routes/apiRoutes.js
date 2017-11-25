var db = require("../models");

module.exports = function(app){

	app.get("/", function(req, res){
		db.Burger.findAll({}).then(function(data){
			var hbsObject = {
				Burger: data
			};
			res.render("index", hbsObject);
			// res.json("this works " + dbBurger)
		});
	});

	app.get("/api/Burger", function(req,res) {
		db.Burger.findAll({}).then(function(data) {
			res.send(data);
		});
	});

	app.post("/api/Burger", function(req, res){
		db.Burger.create({
			burger_name: req.body.burger_name,
			devoured: req.body.devoured
		}).then(function(dbCreate){
			res.json(dbCreate)
		}).catch(function(err){
			res.json(err)
		});
	});

	app.put("/api/Burger/:id", function(req, res){
		db.Burger.update({
			burger_name: req.body.burger_name,
			devoured: req.body.devoured
		},{
			where: {
				id: req.params.id
			}
		}).then(function(dbPut){
			res.json(dbPut);
		}).catch(function(err){
			res.json(err)
		});
	});

};