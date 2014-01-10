function Controller() {
    function doClick(evt) {
        Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
        ("leftButton" == evt.clicksource || "leftPane" == evt.clicksource || "leftView" == evt.clicksource) && Ti.API.info("Annotation " + evt.title + ", left button clicked.");
    }
    function setRegion() {
        $.mapView.region = {
            latitude: 37.390749,
            longitude: -122.081651,
            latitudeDelta: .01,
            longitudeDelta: .01
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ShowMap";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.map = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        id: "map"
    });
    $.__views.map && $.addTopLevelView($.__views.map);
    var __alloyId25 = [];
    $.__views.mountainView = Ti.Map.createAnnotation({
        latitude: 37.390749,
        longitude: -122.081651,
        id: "mountainView",
        title: "Appcelerator Headquarters",
        subtitle: "Moutain View, CA",
        pincolor: Titanium.Map.ANNOTATION_RED,
        leftButton: "/images/appcelerator_small.png",
        myid: "1"
    });
    __alloyId25.push($.__views.mountainView);
    $.__views.mapView = Ti.Map.createView({
        annotations: __alloyId25,
        id: "mapView",
        ns: Ti.Map,
        animate: "true",
        regionFit: "true",
        userLocation: "true",
        mapType: Ti.Map.STANDARD_TYPE
    });
    $.__views.map.add($.__views.mapView);
    doClick ? $.__views.mapView.addEventListener("click", doClick) : __defers["$.__views.mapView!click!doClick"] = true;
    setRegion ? $.__views.mapView.addEventListener("complete", setRegion) : __defers["$.__views.mapView!complete!setRegion"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.mapView.annotations = [ $.mountainView ];
    $.mapView.region = {
        latitude: 37.390749,
        longitude: -122.081651,
        latitudeDelta: .01,
        longitudeDelta: .01
    };
    $.map.open;
    __defers["$.__views.mapView!click!doClick"] && $.__views.mapView.addEventListener("click", doClick);
    __defers["$.__views.mapView!complete!setRegion"] && $.__views.mapView.addEventListener("complete", setRegion);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;