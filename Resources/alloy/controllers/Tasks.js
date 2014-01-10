function Controller() {
    function __alloyId37() {
        __alloyId37.opts || {};
        var models = filterData(__alloyId36);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId31 = models[i];
            __alloyId31.__transform = transData(__alloyId31);
            var __alloyId32 = Ti.UI.createTableViewRow({
                _id: "undefined" != typeof __alloyId31.__transform["alloy_id"] ? __alloyId31.__transform["alloy_id"] : __alloyId31.get("alloy_id")
            });
            rows.push(__alloyId32);
            doneConfirm ? __alloyId32.addEventListener("click", doneConfirm) : __defers["__alloyId32!click!doneConfirm"] = true;
            var __alloyId33 = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                top: "6dp",
                right: "11dp",
                bottom: "6dp",
                left: "11dp",
                layout: "horizontal"
            });
            __alloyId32.add(__alloyId33);
            var __alloyId34 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                font: {
                    fontSize: "18sp",
                    fontWeight: "bold"
                },
                text: "undefined" != typeof __alloyId31.__transform["task"] ? __alloyId31.__transform["task"] : __alloyId31.get("task")
            });
            __alloyId33.add(__alloyId34);
            var __alloyId35 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                font: {
                    fontSize: "14sp"
                },
                text: "undefined" != typeof __alloyId31.__transform["limitTime"] ? __alloyId31.__transform["limitTime"] : __alloyId31.get("limitTime")
            });
            __alloyId33.add(__alloyId35);
        }
        $.__views.tasks.setData(rows);
    }
    function addTask() {
        var addWin, index;
        if (void 0 == Alloy.Globals.currentTab) {
            index = Alloy.createController("index");
            Alloy.Globals.currentTab = index.getView("tasksTab");
        }
        addWin = Alloy.createController("Add").getView("addWin");
        Alloy.Globals.currentTab.open(addWin);
    }
    function transData(model) {
        var transform, limitTime;
        transform = model.toJSON();
        limitTime = transform.limitTime;
        transform.limitTime = moment(Number(limitTime)).format("YYYY/MM/DD");
        return transform;
    }
    function filterData(collection) {
        return collection.where({
            done: 0
        });
    }
    function doneConfirm(e) {
        dialogs.confirm({
            message: "Done?",
            callback: function() {
                var model = Alloy.Collections.Todo.where({
                    alloy_id: e.rowData._id
                })[0];
                model.set({
                    done: 1
                }).save();
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Tasks";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("Todo");
    $.__views.Tasks = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        title: "Tasks",
        id: "Tasks"
    });
    $.__views.Tasks && $.addTopLevelView($.__views.Tasks);
    $.__views.addButton = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.COMPOSE,
        title: "Add",
        id: "addButton"
    });
    addTask ? $.__views.addButton.addEventListener("click", addTask) : __defers["$.__views.addButton!click!addTask"] = true;
    $.__views.Tasks.rightNavButton = $.__views.addButton;
    $.__views.tasks = Ti.UI.createTableView({
        id: "tasks"
    });
    $.__views.Tasks.add($.__views.tasks);
    var __alloyId36 = Alloy.Collections["Todo"] || Todo;
    __alloyId36.on("fetch destroy change add remove reset", __alloyId37);
    exports.destroy = function() {
        __alloyId36.off("fetch destroy change add remove reset", __alloyId37);
    };
    _.extend($, $.__views);
    $.addTask = addTask;
    var moment = require("alloy/moment");
    var dialogs = require("alloy/dialogs");
    __defers["$.__views.addButton!click!addTask"] && $.__views.addButton.addEventListener("click", addTask);
    __defers["__alloyId32!click!doneConfirm"] && __alloyId32.addEventListener("click", doneConfirm);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;