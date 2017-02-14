//get the data//
var friends = require('../data/friends.js');

//express app export and get and post routes//
module.exports = function(app){
	
	app.get('/api/friends', function(req, res){
	res.json(friends);
	});

	app.post('/api/friends', function(req, res){

	var bestMatch = {
		name: "",
		photo: "",
		friendDifference: 1000
	};
	var userData 	= req.body;
	var userName 	= userData.name;
	var userPhoto 	= userData.photo;
	var userScores 	= userData.scores;

	var totalDifference = 0;

//for loops//
	for(var i = 0; i < friendsData.length-1; i++){
	console.log(friends[i].name);
	totalDifference = 0;

		
	for(var j = 0; j < 10; j++){
	totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
	if (totalDifference <= bestMatch.friendDifference){

	bestMatch.name = friends[i].name;
	bestMatch.photo = friends[i].photo;
	bestMatch.friendDifference = totalDifference;
		}
	}
}

//push data and return json//
friends.push(userData); 
res.json(bestMatch);
	});
};