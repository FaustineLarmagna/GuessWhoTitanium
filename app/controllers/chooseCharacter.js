var args = arguments[0] || {};

/*
	This controller is used to display the mosaic of every 
	characters available in this game and to register which character
	the players chose
*/

// args.player = current player = Player1 or Player2
$.playerChoosing.setText(args.player + " choose your character");

// Calling a controller that creates an ImageView for each character available
// Setting their position to calcul the margins
var i = 0;
_.each(Alloy.Globals.characters, function(character) {
	var image = Alloy.createController("characterPictureTemplate", {
		characterPicture: character.picture,
		position: i,
		character: character
	}).getView();

	$.characters.add(image);
	i++;
});

// Saving players' choices
// Display either mosaic again for player2 to choose
// or player1's turn to start the game
$.characters.addEventListener('click', function(e) {
	if (Alloy.Globals.players.player1 === "") {
		Alloy.Globals.players.player1 = e.source.character;
    	Alloy.createController('chooseCharacter', {
    		player: "Player2"
    	}).getView().open();
	} else if (Alloy.Globals.players.player2 === "") {
		Alloy.Globals.players.player2 = e.source.character;
		Alloy.createController('turn', {
			player: "Player1",
		}).getView().open();
	} else {
		console.log('What are u doing here ?');
	}
});