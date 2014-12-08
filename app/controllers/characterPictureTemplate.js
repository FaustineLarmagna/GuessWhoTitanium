var args = arguments[0] || {};

/* 	
	This controller is used to create an ImageView for each 
	existing character in this game in order to create a mosaic 
	when players are choosing their character or when they're 
	picking a character 
*/

// setting right picture to the ImageView
$.characterPicture.setImage('/images/characters/' + args.characterPicture);

// setting margins according to the ImageView's position in the mosaic
$.characterPicture.top = Alloy.Globals.characterWidth * Math.floor(args.position / 4);
$.characterPicture.left = Alloy.Globals.characterWidth * (args.position % 4);
$.characterPicture.character = args.character;	// saving the character object