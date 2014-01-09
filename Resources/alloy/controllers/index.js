function Controller() {
    function tabOpen(e) {
        Alloy.Globals.currentTab = e.activeTab;
    }
    function tabFocus(e) {
        Alloy.Globals.currentTab = e.tab;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.__alloyId16 = Alloy.createController("Tasks", {
        id: "__alloyId16"
    });
    $.__views.tasksTab = Ti.UI.createTab({
        window: $.__views.__alloyId16.getViewEx({
            recurse: true
        }),
        title: "Tasks",
        id: "tasksTab"
    });
    $.__views.index.addTab($.__views.tasksTab);
    $.__views.__alloyId19 = Alloy.createController("Done", {
        id: "__alloyId19"
    });
    $.__views.doneTab = Ti.UI.createTab({
        window: $.__views.__alloyId19.getViewEx({
            recurse: true
        }),
        title: "Done",
        id: "doneTab"
    });
    $.__views.index.addTab($.__views.doneTab);
    $.__views.__alloyId22 = Alloy.createController("Entry", {
        id: "__alloyId22"
    });
    $.__views.entryTab = Ti.UI.createTab({
        window: $.__views.__alloyId22.getViewEx({
            recurse: true
        }),
        title: "Entry",
        id: "entryTab"
    });
    $.__views.index.addTab($.__views.entryTab);
    $.__views.index && $.addTopLevelView($.__views.index);
    tabOpen ? $.__views.index.addEventListener("open", tabOpen) : __defers["$.__views.index!open!tabOpen"] = true;
    tabFocus ? $.__views.index.addEventListener("focus", tabFocus) : __defers["$.__views.index!focus!tabFocus"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    $.index.addEventListener("close", function() {
        $.destroy();
    });
    Alloy.Collections.Todo.fetch();
    __defers["$.__views.index!open!tabOpen"] && $.__views.index.addEventListener("open", tabOpen);
    __defers["$.__views.index!focus!tabFocus"] && $.__views.index.addEventListener("focus", tabFocus);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;