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
    this.__controllerPath = "characterPictureTemplate";
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
    $.__views.characterPicture = Ti.UI.createImageView({
        width: Alloy.Globals.characterWidth,
        height: Alloy.Globals.characterWidth,
        id: "characterPicture"
    });
    $.__views.characterPicture && $.addTopLevelView($.__views.characterPicture);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.characterPicture.setImage("/images/characters/" + args.characterPicture);
    $.characterPicture.top = Alloy.Globals.characterWidth * Math.floor(args.position / 4);
    $.characterPicture.left = Alloy.Globals.characterWidth * (args.position % 4);
    $.characterPicture.character = args.character;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;