var args = arguments[0] || {};

$.responseLabel.setText(args.sentence);

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