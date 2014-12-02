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
    this.__controllerPath = "chooseCharacter";
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
    $.__views.choose = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "choose"
    });
    $.__views.choose && $.addTopLevelView($.__views.choose);
    $.__views.playerChoosing = Ti.UI.createLabel({
        top: 0,
        left: 0,
        font: {
            fontFamily: "ABeeZee-Regular",
            fontSize: "20dp",
            fontStyle: "normal",
            fontWeight: "regular"
        },
        color: "#4A4A4A",
        id: "playerChoosing"
    });
    $.__views.choose.add($.__views.playerChoosing);
    $.__views.characters = Ti.UI.createScrollView({
        top: 50,
        id: "characters"
    });
    $.__views.choose.add($.__views.characters);
    exports.destroy = function() {};
    _.extend($, $.__views);
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
    $.characters.addEventListener("click", function(e) {
        if ("" === Alloy.Globals.players.player1) {
            Alloy.Globals.players.player1 = e.source.character;
            Alloy.createController("chooseCharacter", {
                player: "Player2"
            }).getView().open();
        } else if ("" === Alloy.Globals.players.player2) {
            Alloy.Globals.players.player2 = e.source.character;
            Alloy.createController("turn", {
                player: "Player1"
            }).getView().open();
        } else console.log("What are u doing here ?");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;