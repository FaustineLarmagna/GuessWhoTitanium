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
    this.__controllerPath = "turn";
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
    $.__views.turn = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "turn"
    });
    $.__views.turn && $.addTopLevelView($.__views.turn);
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
    $.__views.turn.add($.__views.playerPlaying);
    $.__views.askQuestion = Ti.UI.createButton({
        title: "Ask a question",
        top: 200,
        right: 180,
        left: 180,
        font: {
            fontFamily: "ABeeZee-Regular",
            fontSize: "20dp",
            fontWeight: "normal"
        },
        color: "white",
        backgroundColor: "darkgray",
        id: "askQuestion"
    });
    $.__views.turn.add($.__views.askQuestion);
    $.__views.pickCharacter = Ti.UI.createButton({
        title: "Pick a character",
        top: 200,
        right: 180,
        left: 180,
        font: {
            fontFamily: "ABeeZee-Regular",
            fontSize: "20dp",
            fontWeight: "normal"
        },
        color: "white",
        backgroundColor: "darkgray",
        id: "pickCharacter"
    });
    $.__views.turn.add($.__views.pickCharacter);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.playerPlaying.setText("It's up to " + args.player);
    if ("Player1" == args.player) {
        var characterToTest = Alloy.Globals.players.player2;
        var board = Alloy.Globals.board1;
        var futurPlayer = "Player2";
    } else {
        var characterToTest = Alloy.Globals.players.player1;
        var board = Alloy.Globals.board2;
        var futurPlayer = "Player1";
    }
    $.askQuestion.addEventListener("click", function() {
        Alloy.createController("askQuestion", {
            player: args.player,
            board: board,
            futurPlayer: futurPlayer,
            characterToTest: characterToTest
        }).getView().open();
    });
    $.pickCharacter.addEventListener("click", function() {
        Alloy.createController("pickCharacter", {
            player: args.player,
            board: board,
            futurPlayer: futurPlayer,
            characterToTest: characterToTest
        }).getView().open();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;