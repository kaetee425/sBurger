$(document).ready(function(){
	$(".addBurger").on("click", function(event){
		console.log("something")
		event.preventDefault();

		var newBurger = {
			name: $("#newMeat").val().trim(),
		};

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(function(){
			console.log("created new burger");
			location.reload();
		});
	});

	$(".eatMe-btn").on("click", function(event){
		console.log("something")
		event.preventDefault();

		 
		$.ajax("/api/burgers/" + $(this).attr("data-id"), {
			type: "PUT"
		}).then(function(){
			console.log("EATEN")
			location.reload();
		})
	})
});