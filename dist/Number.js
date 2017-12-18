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
