var args = arguments[0] || {};

$.playerPlaying.setText("It's up to "+args.player);

$.back.addEventListener('click', function(e) {
	Alloy.createController('turn', {
		player: args.player,
	}).getView().open();
});

// displays all characters that are still in player's board
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

// check if actual player picked the good character
$.characters.addEventListener('click', function(e) {
	if (e.source.character.name == args.characterToTest.name) {
		Alloy.createController('endGame', {
			winner: args.player
		}).getView().open();
	} else {
		_.each(args.board, function(character) {
			if (character == e.source.character) {
				var index = args.board.indexOf(character);
				if (index > -1) {
					args.board.splice(index, 1, {});
				}
				return;
			}
		});

		Alloy.createController('response', {
			futurPlayer: args.futurPlayer,
			player: args.player,
			sentence: "You did not find "+args.futurPlayer+"'s character",
			check: false
		}).getView().open();
	}
});