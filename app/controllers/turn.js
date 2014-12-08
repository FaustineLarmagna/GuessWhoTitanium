var args = arguments[0] || {};

/*
	This controller handles a player's turn
*/

// setting the label for player1 or player2
$.playerPlaying.setText("It's up to "+args.player);

// setting this turn's data :
// 		- the character to test is the other player's character
// 		- the board is the current player's board (it will be used to
// 		  remove the character's that does not correspond to his question's answer)
//		- the futurPlayer is the other player's name (Player1 or Player2)

if (args.player == "Player1") {
	var characterToTest = Alloy.Globals.players.player2;
	var board = Alloy.Globals.board1;
	var futurPlayer = "Player2";
} else {
	var characterToTest = Alloy.Globals.players.player1;
	var board = Alloy.Globals.board2;
	var futurPlayer = "Player1";
}

// Displaying 2 buttons : 
//		- one to go to the screen where every questions are
//		  listed
//		- one to go to the screen where every characters left
//		  in the current player's board are displayed in a mosaic
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
