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
    this.__controllerPath = "index";
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
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.title = Ti.UI.createLabel({
        top: 60,
        font: {
            fontFamily: "coolvetica-rg",
            fontSize: "32dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        color: "black",
        text: "GuessWho",
        id: "title"
    });
    $.__views.index.add($.__views.title);
    $.__views.underTitle = Ti.UI.createLabel({
        top: 95,
        right: 120,
        font: {
            fontFamily: "ABeeZee-Italic",
            fontSize: "14dp",
            fontWeight: "normal"
        },
        text: "- geek",
        id: "underTitle"
    });
    $.__views.index.add($.__views.underTitle);
    $.__views.newGameButton = Ti.UI.createButton({
        title: "New Game",
        top: 400,
        right: 180,
        left: 180,
        font: {
            fontFamily: "ABeeZee-Regular",
            fontSize: "20dp",
            fontWeight: "normal"
        },
        color: "white",
        backgroundColor: "darkgray",
        id: "newGameButton"
    });
    $.__views.index.add($.__views.newGameButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.newGameButton.addEventListener("click", function() {
        Alloy.createController("chooseCharacter", {
            player: "Player1"
        }).getView().open();
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;