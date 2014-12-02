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
    this.__controllerPath = "endGame";
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
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.winner = Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: 60,
        font: {
            fontFamily: "coolvetica-rg",
            fontSize: "32dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        color: "black",
        id: "winner"
    });
    $.__views.win.add($.__views.winner);
    $.__views.player1pic = Ti.UI.createImageView({
        top: 400,
        left: 100,
        width: "100dp",
        id: "player1pic"
    });
    $.__views.win.add($.__views.player1pic);
    $.__views.player2pic = Ti.UI.createImageView({
        top: 400,
        left: 400,
        width: "100dp",
        id: "player2pic"
    });
    $.__views.win.add($.__views.player2pic);
    $.__views.player1 = Ti.UI.createLabel({
        top: 600,
        left: 145,
        width: "100dp",
        font: {
            fontFamily: "coolvetica-rg",
            fontSize: "18dp",
            fontStyle: "normal",
            fontWeight: "regular"
        },
        color: "black",
        text: "Player1",
        id: "player1"
    });
    $.__views.win.add($.__views.player1);
    $.__views.player2 = Ti.UI.createLabel({
        top: 600,
        left: 445,
        width: "100dp",
        font: {
            fontFamily: "coolvetica-rg",
            fontSize: "18dp",
            fontStyle: "normal",
            fontWeight: "regular"
        },
        color: "black",
        text: "Player2",
        id: "player2"
    });
    $.__views.win.add($.__views.player2);
    $.__views.quit = Ti.UI.createButton({
        title: "Quit game",
        bottom: 40,
        right: 200,
        left: 200,
        font: {
            fontFamily: "ABeeZee-Regular",
            fontSize: "16dp",
            fontWeight: "normal"
        },
        color: "white",
        backgroundColor: "darkgray",
        id: "quit"
    });
    $.__views.win.add($.__views.quit);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var initialization = require("initialization");
    $.winner.setText(args.winner + " has won the game !");
    $.player1pic.setImage("/images/characters/" + Alloy.Globals.players.player1.picture);
    $.player2pic.setImage("/images/characters/" + Alloy.Globals.players.player2.picture);
    $.quit.addEventListener("click", function() {
        initialization.initializeGame();
        Alloy.createController("index").getView().open();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;