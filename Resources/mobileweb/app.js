var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.characterWidth = Ti.Platform.displayCaps.platformWidth / 4;

var initialization = require("initialization");

initialization.initializeGame();

Alloy.createController("index");