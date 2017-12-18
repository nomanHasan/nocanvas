"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeFactory = {
    draw: function (context, commands) {
        commands.forEach(function (command) {
            var fn = command[0], args = command.slice(1);
            context[fn].apply(context, args);
        });
    }
};
