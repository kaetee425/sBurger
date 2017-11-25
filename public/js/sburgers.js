$(document).ready(function(){
	$(".addBurger").on("click", function(event){
		console.log("something")
		event.preventDefault();

		var newBurger = {
			burger_name: $("#newMeat").val().trim()
		};
		console.log(newBurger)

		$.ajax("/api/Burger", {
			type: "POST",
			data: newBurger
		}).then(function(){
			console.log("created new burger");
			location.reload();
		});
	});

	$(".eatMe-btn").on("click", function(event){
		console.log("something2")
		event.preventDefault();

		var newState = $(this).attr("data-newstate", true)
		 
		$.ajax("/api/Burger/" + $(this).attr("data-id"), {
			type: "PUT",
		}).then(function(){
			console.log("EATEN")
			console.log(this.devoured)
			// location.reload();
		})
	})
});