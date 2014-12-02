var args = arguments[0] || {};

$.characterPicture.setImage('/images/characters/' + args.characterPicture);

$.characterPicture.top = Alloy.Globals.characterWidth * Math.floor(args.position / 4);
$.characterPicture.left = Alloy.Globals.characterWidth * (args.position % 4);
$.characterPicture.character = args.character;