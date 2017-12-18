import { MOUSE_MOVE, MOUSE_ENTER, MOUSE_DOWN, MOUSE_LEAVE, MOUSE_UP, MOUSE_CLICK, MOUSE_DBLCLICK } from "./MouseEvents";
export const windowToCanvas = (event, crect) => {
    return {
        x: event.clientX - crect.left,
        y: event.clientY - crect.top //  * (canvas.height / crect.height)
    };
};
export const EventRegister = {
    events: [MOUSE_MOVE, MOUSE_ENTER, MOUSE_DOWN, MOUSE_LEAVE, MOUSE_UP, MOUSE_CLICK, MOUSE_DBLCLICK],
    register: (element, component, events = EventRegister.events) => {
        let crect;
        setTimeout(() => {
            crect = element.getBoundingClientRect();
        });
        events.forEach(eventName => {
            element[eventName] = event => {
                if (component[eventName]) {
                    component[eventName](windowToCanvas(event, crect));
                }
            };
        });
    },
    registerLazily: (event) => {
    },
    registerAll: (events, source, target) => {
    }
};
