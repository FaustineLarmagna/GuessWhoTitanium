/*
	First screen : a New Game button only besides the
	title of the App. 
	This controller is used to launch a new game when a
	player clicks on the button labelled "New Game"
*/

$.newGameButton.addEventListener('click', function(e) {
    Alloy.createController('chooseCharacter', {
    	player: "Player1"
    }).getView().open();
});

$.index.open();
