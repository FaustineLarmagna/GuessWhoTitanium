exports.checkBoard = function(board) {
    var charactersRemaining = [];
    _.each(board, function(character) {
        0 != Object.keys(character).length && charactersRemaining.push(character);
    });
    console.log(charactersRemaining.length);
    return 1 == charactersRemaining.length ? true : false;
};

exports.boardSpliceCharacter = function(board, property, itemPropertyValue, response) {
    _.each(board, function(character) {
        if (0 === Object.keys(character).length) return;
        if (true === response) {
            if (-1 == character[property].indexOf(itemPropertyValue)) {
                var index = board.indexOf(character);
                if (index > -1) {
                    board.splice(index, 1, {});
                    return;
                }
            }
        } else if (character[property].indexOf(itemPropertyValue) > -1) {
            var index = board.indexOf(character);
            if (index > -1) {
                board.splice(index, 1, {});
                return;
            }
        }
    });
};