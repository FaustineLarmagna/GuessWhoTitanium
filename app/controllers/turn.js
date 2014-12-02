var args = arguments[0] || {};

// setting the label for player1 or player2
$.playerPlaying.setText("It's up to "+args.player);

// setting this turn's data
if (args.player == "Player1") {
	var characterToTest = Alloy.Globals.players.player2;
	var board = Alloy.Globals.board1;
	var futurPlayer = "Player2";
} else {
	var characterToTest = Alloy.Globals.players.player1;
	var board = Alloy.Globals.board2;
	var futurPlayer = "Player1";
}

$.askQuestion.addEventListener('click', function(e) {
	Alloy.createController("askQuestion", {
		player: args.player,
		board: board,
		futurPlayer: futurPlayer,
		characterToTest: characterToTest,
	}).getView().open();
});

$.pickCharacter.addEventListener('click', function(e) {
	Alloy.createController("pickCharacter", {
		player: args.player,
		board: board,
		futurPlayer: futurPlayer,
		characterToTest: characterToTest,
	}).getView().open();
});
