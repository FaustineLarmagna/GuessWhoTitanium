var args = arguments[0] || {};

var initialization = require('initialization');

$.winner.setText(args.winner + " has won the game !");

$.player1pic.setImage('/images/characters/' + Alloy.Globals.players.player1.picture);
$.player2pic.setImage('/images/characters/' + Alloy.Globals.players.player2.picture);

$.quit.addEventListener('click', function(e) {
	// re initialize app's settings
	initialization.initializeGame();
	Alloy.createController('index').getView().open();
});