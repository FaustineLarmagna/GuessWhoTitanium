var args = arguments[0] || {};

// Contains several functions usefull to the game advancement 
var gameManager = require('gameManager');

// Displays the name of the player who has to play now (Player1 or Player2)
$.playerPlaying.setText("It's up to "+args.player);

// If player click on button "back" he has to go back 
// to previous screen (choice between Ask question and Pick character)
$.back.addEventListener('click', function(e) {
	Alloy.createController('turn', {
		player: args.player,
	}).getView().open();
});

// displays a ListItem for every category of
// questions that exists (eyes, mouse, hair, etc.)
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

// displays another ListItem for every question's options
// that exist when a category was clicked
//		OR
// search if the other player character respond
// to player questions (for example : player1 clicked skin and white
// so this code checks if player2 has white skin)
$.questions.addEventListener('itemclick', function(e) {
	// get the item that was clicked in ListItem
	var item = e.section.getItemAt(e.itemIndex);

	// find the question's options according to which question was clicked
	if (e.section.id == "questionsSection") {
		var questionOptions = _.find(Alloy.Globals.questions,function(question){ 
	        if (question.name == item.properties.title) {
	            return question.options;
	        }
	    });

		// creates ListItem with question's options retrieve just before
		var data2 = [];
		_.each(questionOptions.options, function(option) {
		 	data2.push({properties: {
		    	title: option,
		    	category: questionOptions.name,	// save question name in this attribute
		    	color: "#000",
		    	font: {
		    		fontSize:'15dp'
		    	},
		    	backgroundColor: "white"
		    }});
		});
		$.optionsSection.setItems(data2);
	} else {
		// Initialize needed variables to store the : 
		// 		- name of the property that has to be compared (hair, eyes, mouse, etc.)
		// 		- value of that property in the other player's character (blond, blue, big, etc.)
		var characterProperty = [];
		var property = null;
		for (var key in args.characterToTest) {
			if (key == item.properties.category) {
				property = key;
				characterProperty = args.characterToTest[key];
				break;
			}
		}

		// Comparing the other player's character's value of needed property
		// with the current player's question
		// Returning false if current player was wrong, true otherwise
		if (characterProperty.indexOf(item.properties.title) == -1) {
			var sentence = "Too bad : character has not "+item.properties.title+" "+item.properties.category;
			var response = false;
		} else {
			var sentence = "Good job : character has "+item.properties.title+" "+item.properties.category;
			var response = true;
		}

		// Calling for the function that removes characters that doesn't 
		// match other player's character properties (sets empty object in the board)
		gameManager.boardSpliceCharacter(args.board, property, item.properties.title, response);
		// Calling for the function that checks if there are more than 1
		// character remaining in current player's board
		var check = gameManager.checkBoard(args.board);

		// Alloy controller that displays Yes or No response to the current player
		Alloy.createController('response', {
			futurPlayer: args.futurPlayer,
			player: args.player,
			sentence: sentence,
			check: check
		}).getView().open();
	}
});