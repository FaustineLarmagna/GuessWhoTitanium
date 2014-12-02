var args = arguments[0] || {};

var gameManager = require('gameManager');

$.playerPlaying.setText("It's up to "+args.player);

$.back.addEventListener('click', function(e) {
	Alloy.createController('turn', {
		player: args.player,
	}).getView().open();
});

// displays a ListItem for every category of
// questions that exists
var data = [];
_.each(Alloy.Globals.questions, function(question) {
	data.push({properties: {
    	title: question.name,
    	color: "#000",
    	font: {
    		fontSize:'15dp'
    	},
    	backgroundColor: "#c6c6c6"
    }});

	$.questionsSection.setItems(data);
});

// displays a ListItem for every option of
// category of questions that exists
// when a category was clicked
//		OR
// search if the other player character respond
// to player questions (for example : player1 clicked skin and white
// so this code checks if player2 has white skin)
$.questions.addEventListener('itemclick', function(e) {
	var item = e.section.getItemAt(e.itemIndex);

	if (e.section.id == "questionsSection") {
		var questionOptions = _.find(Alloy.Globals.questions,function(question){ 
	        if (question.name == item.properties.title) {
	            return question.options;
	        }
	    });

		var data2 = [];
		_.each(questionOptions.options, function(option) {
		 	data2.push({properties: {
		    	title: option,
		    	category: questionOptions.name,
		    	color: "#000",
		    	font: {
		    		fontSize:'15dp'
		    	},
		    	backgroundColor: "white"
		    }});
		});

		$.optionsSection.setItems(data2);
	} else {
		var characterProperty = [];
		var property = null;
		for (var key in args.characterToTest) {
			if (key == item.properties.category) {
				property = key;
				characterProperty = args.characterToTest[key];
				break;
			}
		}

		if (characterProperty.indexOf(item.properties.title) == -1) {
			// console.log("Too bad : character has not "+item.properties.title+" "+item.properties.category);
			var sentence = "Too bad : character has not "+item.properties.title+" "+item.properties.category;
			var response = false;
		} else {
			// console.log("Good job : character has "+item.properties.title+" "+item.properties.category);
			var sentence = "Good job : character has "+item.properties.title+" "+item.properties.category;
			var response = true;
		}

		// console.log(property);
		// console.log(item.properties.title);

		gameManager.boardSpliceCharacter(args.board, property, item.properties.title, response);
		var check = gameManager.checkBoard(args.board);

		// Alloy controller that displays Yes or No response to the player
		Alloy.createController('response', {
			futurPlayer: args.futurPlayer,
			player: args.player,
			sentence: sentence,
			check: check
		}).getView().open();
	}
});

gameManager.checkBoard(Alloy.Globals.board1);
gameManager.checkBoard(Alloy.Globals.board2);