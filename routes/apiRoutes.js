var db = require("../models/burger.js");

module.exports = function(app){

	app.get("/", function(req, res){
		// var hbsObj = {
		// 	burgers:
		// };
		// console.log(hbsObj);

		db.Burger.findAll({}).then(function(dbBurger){
			res.render("index", dbBurger)
			// res.json(dbBurger)
		});
	});

	app.post("/api/burgers", function(req, res){
		db.Burger.create({
			burger_name: req.body.burger_name,
			devoured: req.body.devoured
		}).then(function(dbCreate){
			res.json(dbCreate)
		}).catch(function(err){
			res.json(err)
		});
	});

	app.put("/api/burgers/:id", function(req, res){
		// var condition = "id = " + req.params.id;

		// console.log("condition", condition);

		// burger.updateOne({devoured: true}, condition, function(result){
		// 	res.send(result);
		// });
		db.Burger.update({
			burger_name: req.body.burger_name,
			devoured: req.body.devoured
		},{
			where: {
				id: req.body.id
			}
		}).then(function(dbPut){
			res.json(dbPut);
		}).catch(function(err){
			res.json(err)
		});
	});

};