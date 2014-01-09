function Controller() {
    function entryLocate() {
        alert("entry!");
        Ti.Media.showCamera({
            success: function(event) {
                event.cropRect;
                event.media;
                if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                    var imageView = Ti.UI.createImageView({
                        width: win.width,
                        height: win.height,
                        image: event.media
                    });
                    win.add(imageView);
                }
            },
            cancel: function() {
                alert("You canceled the action.");
            },
            error: function(error) {
                var a = Titanium.UI.createAlertDialog({
                    title: "Camera"
                });
                error.code == Titanium.Media.NO_CAMERA ? a.setMessage("Please run this test on device") : a.setMessage("Unexpected error: " + error.code);
                a.show();
            },
            saveToPhotoGallery: true,
            allowEditing: true,
            mediaTypes: [ Ti.Media.MEDIA_TYPE_VIDEO, Ti.Media.MEDIA_TYPE_PHOTO ]
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Entry";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.Entry = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        title: "CameraTest",
        id: "Entry"
    });
    $.__views.Entry && $.addTopLevelView($.__views.Entry);
    $.__views.__alloyId14 = Ti.UI.createButton({
        title: "camera start",
        id: "__alloyId14"
    });
    $.__views.Entry.add($.__views.__alloyId14);
    entryLocate ? $.__views.__alloyId14.addEventListener("click", entryLocate) : __defers["$.__views.__alloyId14!click!entryLocate"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Collections.photo;
    var win = Ti.UI.currentWindow;
    require("alloy/dialogs");
    __defers["$.__views.__alloyId14!click!entryLocate"] && $.__views.__alloyId14.addEventListener("click", entryLocate);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;