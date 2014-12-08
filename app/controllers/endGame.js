var args = arguments[0] || {};

/*
	This controller handles the end of the game
*/

// Requiring the lib that handles game's initial states
var initialization = require('initialization');

// args.winner = which player who has won the game = Player1 or player2
$.winner.setText(args.winner + " has won the game !");

// displaying players' character's image to reveal to each other
$.player1pic.setImage('/images/characters/' + Alloy.Globals.players.player1.picture);
$.player2pic.setImage('/images/characters/' + Alloy.Globals.players.player2.picture);

// quitting game means returning to first screen with button "New Game"
$.quit.addEventListener('click', function(e) {
	// Resetting game data to prepare next game
	initialization.initializeGame();
	Alloy.createController('index').getView().open();
});