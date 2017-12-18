"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MouseEvents_1 = require("./MouseEvents");
exports.windowToCanvas = function (event, crect) {
    return {
        x: event.clientX - crect.left,
        y: event.clientY - crect.top //  * (canvas.height / crect.height)
    };
};
exports.EventRegister = {
    events: [MouseEvents_1.MOUSE_MOVE, MouseEvents_1.MOUSE_ENTER, MouseEvents_1.MOUSE_DOWN, MouseEvents_1.MOUSE_LEAVE, MouseEvents_1.MOUSE_UP, MouseEvents_1.MOUSE_CLICK, MouseEvents_1.MOUSE_DBLCLICK],
    register: function (element, component, events) {
        if (events === void 0) { events = exports.EventRegister.events; }
        var crect;
        setTimeout(function () {
            crect = element.getBoundingClientRect();
        });
        events.forEach(function (eventName) {
            element[eventName] = function (event) {
                if (component[eventName]) {
                    component[eventName](exports.windowToCanvas(event, crect));
                }
            };
        });
    },
    registerLazily: function (event) {
    },
    registerAll: function (events, source, target) {
    }
};
