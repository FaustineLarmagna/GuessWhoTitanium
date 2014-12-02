function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "pickCharacter";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.pick = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "pick"
    });
    $.__views.pick && $.addTopLevelView($.__views.pick);
    $.__views.playerPlaying = Ti.UI.createLabel({
        top: 0,
        left: 0,
        font: {
            fontFamily: "ABeeZee-Regular",
            fontSize: "20dp",
            fontStyle: "normal",
            fontWeight: "regular"
        },
        color: "#4A4A4A",
        id: "playerPlaying"
    });
    $.__views.pick.add($.__views.playerPlaying);
    $.__views.back = Ti.UI.createButton({
        title: "back",
        top: 0,
        right: 10,
        font: {
            fontFamily: "ABeeZee-Regular",
            fontSize: "15dp",
            fontWeight: "normal"
        },
        color: "white",
        backgroundColor: "darkgray",
        id: "back"
    });
    $.__views.pick.add($.__views.back);
    $.__views.characters = Ti.UI.createScrollView({
        top: 10,
        id: "characters"
    });
    $.__views.pick.add($.__views.characters);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.playerPlaying.setText("It's up to " + args.player);
    $.back.addEventListener("click", function() {
        Alloy.createController("turn", {
            player: args.player
        }).getView().open();
    });
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
    $.characters.addEventListener("click", function(e) {
        if (e.source.character.name == args.characterToTest.name) Alloy.createController("endGame", {
            winner: args.player
        }).getView().open(); else {
            _.each(args.board, function(character) {
                if (character == e.source.character) {
                    var index = args.board.indexOf(character);
                    index > -1 && args.board.splice(index, 1, {});
                    return;
                }
            });
            Alloy.createController("response", {
                futurPlayer: args.futurPlayer,
                player: args.player,
                sentence: "You did not find " + args.futurPlayer + "'s character",
                check: false
            }).getView().open();
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;