"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Number_js_1 = require("./Number.js");
exports.PointFactory = {
    getRandomPoint: function (x, y, width, height) {
        return {
            x: Number_js_1.NumberFactory.getRandomBetween(x, x + width),
            y: Number_js_1.NumberFactory.getRandomBetween(y, y + height)
        };
    }
};
exports.PointZero = {
    x: 0,
    y: 0
};
