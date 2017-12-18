/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberFactory = {
    getRandomNumber: function (number) {
        return Math.round(Math.random() * number);
    },
    getRandomBetween: function (max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    uuidv4: function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MouseEvents_1 = __webpack_require__(2);
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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MOUSE_MOVE = 'onmousemove';
exports.MOUSE_ENTER = 'onmouseenter';
exports.MOUSE_DOWN = 'onmousedown';
exports.MOUSE_LEAVE = 'onmouseleave';
exports.MOUSE_UP = 'onmouseup';
exports.MOUSE_CLICK = 'onclick';
exports.MOUSE_DBLCLICK = 'ondblclick';


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventRegister_1 = __webpack_require__(1);
var initializeCanvas_1 = __webpack_require__(4);
var Layer_1 = __webpack_require__(5);
var Rect_1 = __webpack_require__(6);
var Number_1 = __webpack_require__(0);
var Color_1 = __webpack_require__(8);
// canvas.height = 500
var gameLayer = new Layer_1.Layer(initializeCanvas_1.canvas, initializeCanvas_1.context);
var crect;
setTimeout(function () {
    crect = initializeCanvas_1.canvas.getBoundingClientRect();
});
EventRegister_1.EventRegister.register(initializeCanvas_1.canvas, gameLayer);
window.onresize = function (event) {
    EventRegister_1.EventRegister.register(initializeCanvas_1.canvas, gameLayer);
};
var rect = new Rect_1.Rect(100, initializeCanvas_1.canvasHeight - 25, 100, 80, initializeCanvas_1.context);
var bottomBorder = new Rect_1.Rect(0, initializeCanvas_1.canvasHeight - 5, initializeCanvas_1.canvasWidth, 5, initializeCanvas_1.context);
bottomBorder.fill = true;
gameLayer.addShape(rect);
gameLayer.addShape(new Rect_1.Rect(120, initializeCanvas_1.canvasHeight - 25, 100, 80, initializeCanvas_1.context));
for (var i = 0; i < 70; i++) {
    var x = Number_1.NumberFactory.getRandomBetween(1, initializeCanvas_1.canvasWidth);
    var y = Number_1.NumberFactory.getRandomBetween(1, initializeCanvas_1.canvasHeight);
    var width = Number_1.NumberFactory.getRandomBetween(1, 200);
    var height = Number_1.NumberFactory.getRandomBetween(1, 200);
    var rect_1 = new Rect_1.Rect(x, y, width, height, initializeCanvas_1.context);
    rect_1.fill = true;
    rect_1.color = Color_1.ColorFactory.getRandomColor();
    gameLayer.addShape(rect_1);
}
gameLayer.shapes = Layer_1.Layer.sortByZindex(gameLayer.shapes);
gameLayer.addShape(bottomBorder);
console.log(gameLayer);
gameLayer.draw();


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.canvas = document.querySelector('canvas#canvas');
exports.context = exports.canvas.getContext("2d");
exports.windowWidth = window.innerWidth;
exports.windowHeight = window.innerHeight;
var percentage = function (number, perc) {
    return (number * perc) / 100;
};
exports.canvas.width = percentage(exports.windowWidth, 80);
exports.canvas.height = percentage(exports.windowHeight, 80);
exports.canvasWidth = exports.canvas.width;
exports.canvasHeight = exports.canvas.height;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Number_1 = __webpack_require__(0);
var EventRegister_1 = __webpack_require__(1);
var MouseEvents_1 = __webpack_require__(2);
var Layer = /** @class */ (function () {
    function Layer(canvas, context, shapes) {
        if (shapes === void 0) { shapes = []; }
        var _this = this;
        this.canvas = canvas;
        this.context = context;
        this.shapes = shapes;
        this._id = Number_1.NumberFactory.uuidv4();
        this.initValues();
        EventRegister_1.EventRegister
            .events
            .forEach(function (eventName) {
            _this[eventName] = function (event) {
                var eventReciepents = _this
                    .shapes
                    .filter(function (shape) {
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
                    case MouseEvents_1.MOUSE_MOVE:
                        {
                            _this
                                .shapes
                                .forEach(function (shape) {
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
                    default:
                        {
                            _this
                                .shapes
                                .forEach(function (shape) {
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
        this
            .shapes
            .push(shape);
    };
    Layer.prototype.assignZIndex = function (shape) {
        shape["_zIndex"] = this.nextZindex;
        this.nextZindex++;
    };
    Layer.prototype.draw = function () {
        this
            .context
            .clearRect(0, 0, this.canvas.width, this.canvas.height);
        console.log(this.shapes);
        this
            .shapes
            .forEach(function (element) {
            element.draw();
        });
    };
    Layer.prototype.update = function () {
        this
            .shapes
            .forEach(function (element) {
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


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

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
var Point_1 = __webpack_require__(7);
var Number_1 = __webpack_require__(0);
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
        var point = Point_1.PointFactory.getRandomPoint(x, y, width, height);
        var thiswidth = Number_1.NumberFactory.getRandomNumber(maxWidth);
        var thisheight = Number_1.NumberFactory.getRandomNumber(maxHeight);
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


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Number_1 = __webpack_require__(0);
exports.PointFactory = {
    getRandomPoint: function (x, y, width, height) {
        return {
            x: Number_1.NumberFactory.getRandomBetween(x, x + width),
            y: Number_1.NumberFactory.getRandomBetween(y, y + height)
        };
    }
};
exports.PointZero = {
    x: 0,
    y: 0
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorFactory = {
    getRandomColor: function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    },
};


/***/ })
/******/ ]);