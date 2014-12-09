var args = arguments[0] || {};

/*
	This controller handles the case where the current player
	decides to choose a character in his board directly instead
	of asking a question to the other player.
	If he clicked the right character then he won
*/

// args.player = current player name = Player1 or Player2
$.playerPlaying.setText("It's up to "+args.player);

// If player click on button "back" he has to go back 
// to previous screen (choice between Ask question and Pick character)
$.back.addEventListener('click', function(e) {
	Alloy.createController('turn', {
		player: args.player,
	}).getView().open();
});

// displays all characters that are still in the current player's board
var i = 0;
_.each(args.board, function(character) {
	var image = Alloy.createController("characterPictureTemplate", {
		characterPicture: character.picture,
		position: i,
		character: character
	}).getView();

	$.characters.add(image);
	i++;
});

// check if the current player picked the good character =
// compare the character that was clicked with the other player's
// character
$.characters.addEventListener('click', function(e) {
	// if current player clicked the right character we call for
	// the controller that ends the game
	if (e.source.character.name == args.characterToTest.name) {
		Alloy.createController('endGame', {
			winner: args.player
		}).getView().open();
	} else if (Object.keys(e.source.character).length === 0) {
		return;		// don't do anything if player clicked on blank space
	} else {
		// if current player clicked the wrong character then the character
		// he clicked is just removed from his board 
		_.each(args.board, function(character) {
			if (character == e.source.character) {
				var index = args.board.indexOf(character);
				if (index > -1) {
					args.board.splice(index, 1, {});
				}
				return;
			}
		});

		// Calling for the controller that displays a response to the
		// current player : was he right or was he wrong ?
		Alloy.createController('response', {
			futurPlayer: args.futurPlayer,	// other player's name
			player: args.player,			// current player's name
			sentence: "You did not find "+args.futurPlayer+"'s character",	// sentence that will be displayed to current character in the next window
			check: false	// means the current player's board still contains more than one character
		}).getView().open();
	}
});