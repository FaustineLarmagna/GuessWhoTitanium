var args = arguments[0] || {};

$.playerChoosing.setText(args.player + " choose your character");

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
		// console.log(Alloy.Globals.players);
	} else {
		console.log('What are u doing here ?');
	}
});