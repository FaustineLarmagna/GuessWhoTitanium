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
    this.__controllerPath = "response";
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
    $.__views.responseLabel = Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: 150,
        font: {
            fontFamily: "coolvetica-rg",
            fontSize: "32dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        color: "black",
        id: "responseLabel"
    });
    $.__views.win.add($.__views.responseLabel);
    $.__views.nextTurnButton = Ti.UI.createButton({
        title: "Next turn",
        top: 450,
        right: 180,
        left: 180,
        font: {
            fontFamily: "ABeeZee-Regular",
            fontSize: "20dp",
            fontWeight: "normal"
        },
        color: "white",
        backgroundColor: "darkgray",
        id: "nextTurnButton"
    });
    $.__views.win.add($.__views.nextTurnButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.responseLabel.setText(args.sentence);
    $.nextTurnButton.addEventListener("click", function() {
        false === args.check ? Alloy.createController("turn", {
            player: args.futurPlayer
        }).getView().open() : Alloy.createController("endGame", {
            winner: args.player
        }).getView().open();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;