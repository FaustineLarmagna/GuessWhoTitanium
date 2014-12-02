$.newGameButton.addEventListener('click', function(e) {
    Alloy.createController('chooseCharacter', {
    	player: "Player1"
    }).getView().open();
});

$.index.open();
