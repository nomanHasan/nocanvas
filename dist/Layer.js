"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Number_1 = require("./Number");
var EventRegister_1 = require("./events/EventRegister");
var MouseEvents_1 = require("./events/MouseEvents");
var Layer = /** @class */ (function () {
    function Layer(canvas, context, shapes) {
        if (shapes === void 0) { shapes = []; }
        var _this = this;
        this.canvas = canvas;
        this.context = context;
        this.shapes = shapes;
        this._id = Number_1.NumberFactory.uuidv4();
        this.initValues();
        EventRegister_1.EventRegister.events.forEach(function (eventName) {
            _this[eventName] = function (event) {
                var eventReciepents = _this.shapes.filter(function (shape) {
                    if (shape.isInside && shape.isInside(event)) {
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                eventReciepents = (Layer.sortByZindex(eventReciepents));
                console.log(eventReciepents);
                switch (eventName) {
                    case MouseEvents_1.MOUSE_MOVE: {
                        _this.shapes.forEach(function (shape) {
                            var eventQueue = [];
                            if (shape.mouseState.drag) {
                                eventQueue.push(MouseEvents_1.MOUSE_MOVE);
                            }
                            else {
                                if (shape.isInside && !shape.isInside(event)) {
                                    if (shape.mouseState.over) {
                                        shape.mouseState.over = false;
                                        eventQueue.push(MouseEvents_1.MOUSE_LEAVE);
                                    }
                                }
                                else if ((shape.isInside && shape.isInside(event))) {
                                    if (!shape.mouseState.over) {
                                        shape.mouseState.over = true;
                                        eventQueue.push(MouseEvents_1.MOUSE_ENTER);
                                    }
                                    eventQueue.push(eventName);
                                }
                            }
                            eventQueue.forEach(function (e) { return exports.execute(shape, e, event); });
                        });
                        break;
                    }
                    default: {
                        _this.shapes.forEach(function (shape) {
                            if (shape.mouseState.drag) {
                                exports.execute(shape, eventName, event);
                            }
                            if (shape.isInside && !shape.isInside(event)) {
                                if (shape.mouseState.over) {
                                    shape.mouseState.over = false;
                                    exports.execute(shape, MouseEvents_1.MOUSE_LEAVE, event);
                                }
                            }
                        });
                        if (eventReciepents.length == 0) {
                            break;
                        }
                        var shape_1 = eventReciepents[eventReciepents.length - 1];
                        var eventQueue = [];
                        eventQueue.push(eventName);
                        if (!shape_1.mouseState.over) {
                            shape_1.mouseState.over = true;
                            eventQueue.push(MouseEvents_1.MOUSE_ENTER);
                        }
                        eventQueue.forEach(function (e) { return exports.execute(shape_1, e, event); });
                    }
                }
            };
        });
    }
    Layer.sortByZindex = function (shapes) {
        if (shapes === void 0) { shapes = []; }
        return shapes.sort(function (a, b) {
            if (a._zIndex < b._zIndex) {
                return -1;
            }
            else if (a._zIndex >= b._zIndex) {
                return 1;
            }
        });
    };
    Layer.prototype.initValues = function () {
        this.nextZindex = 0;
    };
    Layer.prototype.addShape = function (shape) {
        if (shape["_id"] == undefined) {
            shape["_id"] = Number_1.NumberFactory.uuidv4();
        }
        shape["_layer"] = this;
        this.assignZIndex(shape);
        this.shapes.push(shape);
    };
    Layer.prototype.assignZIndex = function (shape) {
        shape["_zIndex"] = this.nextZindex;
        this.nextZindex++;
    };
    Layer.prototype.draw = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        console.log(this.shapes);
        this.shapes.forEach(function (element) {
            element.draw();
        });
    };
    Layer.prototype.update = function () {
        this.shapes.forEach(function (element) {
            element.update();
        });
    };
    return Layer;
}());
exports.Layer = Layer;
exports.execute = function (obj, fn) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (obj[fn]) {
        obj[fn].apply(obj, args);
    }
};
