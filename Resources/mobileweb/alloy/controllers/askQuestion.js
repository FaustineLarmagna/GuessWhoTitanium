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
    this.__controllerPath = "askQuestion";
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
    $.__views.question = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "question"
    });
    $.__views.question && $.addTopLevelView($.__views.question);
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
    $.__views.question.add($.__views.playerPlaying);
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
    $.__views.question.add($.__views.back);
    $.__views.optionsSection = Ti.UI.createListSection({
        id: "optionsSection"
    });
    var __alloyId1 = [];
    __alloyId1.push($.__views.optionsSection);
    $.__views.questionsSection = Ti.UI.createListSection({
        id: "questionsSection"
    });
    __alloyId1.push($.__views.questionsSection);
    $.__views.questions = Ti.UI.createListView({
        top: 10,
        sections: __alloyId1,
        id: "questions"
    });
    $.__views.question.add($.__views.questions);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var gameManager = require("gameManager");
    $.playerPlaying.setText("It's up to " + args.player);
    $.back.addEventListener("click", function() {
        Alloy.createController("turn", {
            player: args.player
        }).getView().open();
    });
    var data = [];
    _.each(Alloy.Globals.questions, function(question) {
        data.push({
            properties: {
                title: question.name,
                color: "#000",
                font: {
                    fontSize: "15dp"
                },
                backgroundColor: "#c6c6c6"
            }
        });
        $.questionsSection.setItems(data);
    });
    $.questions.addEventListener("itemclick", function(e) {
        var item = e.section.getItemAt(e.itemIndex);
        if ("questionsSection" == e.section.id) {
            var questionOptions = _.find(Alloy.Globals.questions, function(question) {
                if (question.name == item.properties.title) return question.options;
            });
            var data2 = [];
            _.each(questionOptions.options, function(option) {
                data2.push({
                    properties: {
                        title: option,
                        category: questionOptions.name,
                        color: "#000",
                        font: {
                            fontSize: "15dp"
                        },
                        backgroundColor: "white"
                    }
                });
            });
            $.optionsSection.setItems(data2);
        } else {
            var characterProperty = [];
            var property = null;
            for (var key in args.characterToTest) if (key == item.properties.category) {
                property = key;
                characterProperty = args.characterToTest[key];
                break;
            }
            if (-1 == characterProperty.indexOf(item.properties.title)) {
                var sentence = "Too bad : character has not " + item.properties.title + " " + item.properties.category;
                var response = false;
            } else {
                var sentence = "Good job : character has " + item.properties.title + " " + item.properties.category;
                var response = true;
            }
            gameManager.boardSpliceCharacter(args.board, property, item.properties.title, response);
            var check = gameManager.checkBoard(args.board);
            Alloy.createController("response", {
                futurPlayer: args.futurPlayer,
                player: args.player,
                sentence: sentence,
                check: check
            }).getView().open();
        }
    });
    gameManager.checkBoard(Alloy.Globals.board1);
    gameManager.checkBoard(Alloy.Globals.board2);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;