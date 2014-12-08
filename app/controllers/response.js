var args = arguments[0] || {};

/*
	This controller displays a screen in which a sentence is
	written to indicate if the current player (now previous) was
	right or wrong (if he asked if the other player's character had blue
	eyes and he actually has, the sentence will be something like "you were right !")
*/

// displaying the sentence
$.responseLabel.setText(args.sentence);

// checking the args.check boolean that indicates if there are
// still more than one character in current player's board
// If check === true then :
// 		displaying a button that has to be clicked to launch the next turn
// Or : 
// 		calling for the controller that handles the end of a game
$.nextTurnButton.addEventListener('click', function(e) {
	if (args.check === false) {
		// other player's turn
		Alloy.createController('turn', {
			player: args.futurPlayer,
		}).getView().open();
	} else {
		// stopping the game
		Alloy.createController('endGame', {
			winner: args.player
		}).getView().open();
	}
});