export const ShapeFactory = {
    draw: (context, commands) => {
        commands.forEach(command => {
            let [fn, ...args] = command;
            context[fn](...args);
        })
    }
}