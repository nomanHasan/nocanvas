"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Point_js_1 = require("./Point.js");
var Number_js_1 = require("./Number.js");
var Rect = /** @class */ (function () {
    function Rect(x, y, width, height, context, _zIndex) {
        if (_zIndex === void 0) { _zIndex = 0; }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.context = context;
        this._zIndex = _zIndex;
        this.mouseState = {
            drag: false,
            previous: {
                x: 0,
                y: 0
            },
            offset: {
                x: 0,
                y: 0
            }
        };
    }
    Rect.prototype.draw = function () {
        if (this.color) {
            if (this.fill) {
                this.context.fillStyle = this.color;
            }
            else {
                this.context.strokeStyle = this.color;
            }
        }
        if (this.fill) {
            this
                .context
                .fillRect(this.x, this.y, this.width, this.height);
        }
        else {
            this
                .context
                .strokeRect(this.x, this.y, this.width, this.height);
        }
    };
    Rect.prototype.isInside = function (pos) {
        if ((pos.x > this.x && pos.y > this.y) && (pos.x < this.x + this.width && pos.y < this.y + this.height)) {
            return true;
        }
        else {
            return false;
        }
    };
    Rect.prototype.onmousemove = function (event) {
        if (this.mouseState.drag) {
            this.ondrag(event);
        }
    };
    Rect.prototype.ondrag = function (event) {
        // console.log('RET DRAG', this._id)
        if (this.mouseState.drag) {
            this.x = event.x - this.mouseState.offset.x;
            this.y = event.y - this.mouseState.offset.y;
        }
        this.dispatchDraw();
    };
    Rect.prototype.dispatchDraw = function () {
        this["_layer"].draw();
    };
    Rect.prototype.onmousedown = function (event) {
        if (!this.isInside(event)) {
            return;
        }
        console.log(event);
        this.mouseState.drag = true;
        this.mouseState.previous = __assign({}, event);
        this.mouseState.offset.x = this.mouseState.previous.x - this.x;
        this.mouseState.offset.y = this.mouseState.previous.y - this.y;
        this.dispatchDraw();
    };
    Rect.prototype.onmouseup = function (evnet) {
        this.mouseState.drag = false;
        // console.log(this.mouseState)
        this.dispatchDraw();
    };
    Rect.prototype.onmouseleave = function () {
        this.mouseState.drag = false;
        this.dispatchDraw();
    };
    return Rect;
}());
exports.Rect = Rect;
exports.RectFactory = {
    generateRandomRect: function (x, y, width, height, maxWidth, maxHeight) {
        var point = Point_js_1.PointFactory.getRandomPoint(x, y, width, height);
        var thiswidth = Number_js_1.NumberFactory.getRandomNumber(maxWidth);
        var thisheight = Number_js_1.NumberFactory.getRandomNumber(maxHeight);
        return new Rect(point.x, point.y, thiswidth, thisheight);
    },
    draw: function (rect) {
        if (rect.color) {
            rect.context.fillStyle = rect.color;
        }
        rect
            .context
            .fillRect(rect.x, rect.y, rect.width, rect.height);
    }
};
