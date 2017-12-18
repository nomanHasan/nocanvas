"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Curve = /** @class */ (function () {
    function Curve(c1x, c1y, c2x, c2y, x, y) {
        this.c1x = c1x;
        this.c1y = c1y;
        this.c2x = c2x;
        this.c2y = c2y;
        this.x = x;
        this.y = y;
    }
    return Curve;
}());
exports.Curve = Curve;
exports.CurvesFactory = {
    getRandCurves: function (x, y, width, height, number) {
        var curves = [];
        var c1x, c1y, c2x, c2y, thisx, thisy;
        var mX = x + width;
        var mY = y + height;
        for (var i = 0; i < number; i++) {
            c1x = Math.random() * mX + x;
            c1y = Math.random() * mY + y;
            c2x = Math.random() * mX + x;
            c2y = Math.random() * mY + y;
            thisx = Math.random() * mX + x;
            thisy = Math.random() * mY + y;
            var curve = new Curve(c1x, c1y, c2x, c2y, thisx, thisy);
            curves.push(curve);
        }
        return curves;
    },
    getRandomPoint: function (x, y, width, height) {
        return {
            x: Math.random() * (x + width) + x,
            y: Math.random() * (y + height) + y
        };
    },
    getRandomNumber: function (number) {
        return Math.round(Math.random() * number);
    },
    draw: function (ctx, curves) {
        if (curves === void 0) { curves = []; }
        curves.forEach(function (curve) {
            ctx.bezierCurveTo(curve.c1x, curve.c1y, curve.c2x, curve.c2y, curve.x, curve.y);
        });
    },
    getRandomColor: function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    },
    getNext: function (width, height) {
        return {
            x: Math.random() * width,
            y: Math.random() * height
        };
    },
    move: function (curpos, nextpos, speed) {
        var x = curpos.x, y = curpos.y;
        x += curpos.x < nextpos.x
            ? speed
            : -speed;
        y += curpos.y < nextpos.y
            ? speed
            : -speed;
        return { x: x, y: y };
    }
};