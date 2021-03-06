// checks how many characters are left in player's board
// returns true if there is just one character remaining
// returns false if there is more than one character remaining
exports.checkBoard = function(board) {
	var charactersRemaining = [];
	_.each(board, function(character) {
		// Is this an empty object ?
		if (Object.keys(character).length != 0) {
			charactersRemaining.push(character);
		}
	});

	if (charactersRemaining.length == 1) {
		// Stop the game if there is just one character left
		return true;
	} else {
		// Other player's turn if there is more than one character left in board
		return false;
	}
};


// This function remove character from player board
// according to player's question
exports.boardSpliceCharacter = function(board, property, itemPropertyValue, response) {
	_.each(board, function(character) {
		// if character is an empty object
		if (Object.keys(character).length === 0) {
			return;
		}

		// remove corresponding character and replace it
		// with an empty object to avoid key changes in board array
		if (response === true) {
			if (character[property].indexOf(itemPropertyValue) == -1) {
				var index = board.indexOf(character);
				if (index > -1) {
					board.splice(index, 1, {});
					return;
				}
			}
		} else {
			if (character[property].indexOf(itemPropertyValue) > -1) {
				var index = board.indexOf(character);
				if (index > -1) {
					board.splice(index, 1, {});
					return;
				}
			}
		}
	});
};