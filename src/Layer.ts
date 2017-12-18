import { NumberFactory } from "./Number";
import { EventRegister } from './events/EventRegister'
import { MOUSE_MOVE, MOUSE_LEAVE, MOUSE_ENTER } from "./events/MouseEvents";

export class Layer {
    public nextZindex: number;


    private _id = NumberFactory.uuidv4();

    constructor(private canvas: HTMLCanvasElement,
         private context: CanvasRenderingContext2D,
          private shapes = []) {

        this.initValues();

        EventRegister.events.forEach(eventName => {
            this[eventName] = (event) => {
                let eventReciepents = this.shapes.filter(shape => {
                    if(shape.isInside && shape.isInside(event)) {
                        return true;
                    }else{
                        return false;
                    }
                })

                eventReciepents = (Layer.sortByZindex(eventReciepents))
                console.log(eventReciepents)

                switch(eventName){
                    case MOUSE_MOVE: {
                        this.shapes.forEach(shape => {
                            let eventQueue = []

                            if(shape.mouseState.drag){
                                eventQueue.push(MOUSE_MOVE)
                            }else {
                                if(shape.isInside && !shape.isInside(event)){
                                    if (shape.mouseState.over) {
                                        shape.mouseState.over = false;
                                        eventQueue.push(MOUSE_LEAVE)
                                    }
                                }else if ((shape.isInside && shape.isInside(event))){
                                    if(!shape.mouseState.over){
                                        shape.mouseState.over = true;
                                        eventQueue.push(MOUSE_ENTER)
                                    }
                                    eventQueue.push(eventName)
                                }
                            }

                            eventQueue.forEach(e => execute(shape, e, event))
                        })
                        
                        break;
                    }
                    default: {

                        this.shapes.forEach(shape => {

                            if(shape.mouseState.drag){
                                execute(shape, eventName, event)
                            }

                            if(shape.isInside && !shape.isInside(event)){
                                if (shape.mouseState.over) {
                                    shape.mouseState.over = false;
                                    execute(shape, MOUSE_LEAVE, event)
                                }
                            }
                        })

                        if(eventReciepents.length == 0){
                            break;
                        }

                        let shape = eventReciepents[eventReciepents.length - 1];

                        let eventQueue = []
                        eventQueue.push(eventName)

                        if (!shape.mouseState.over) {
                            shape.mouseState.over = true;
                            eventQueue.push(MOUSE_ENTER)
                        }
                        eventQueue.forEach(e => execute(shape, e, event))

                    }
                }
            }
        })


    }


    static sortByZindex(shapes = []){
        return shapes.sort((a, b) => {
            if(a._zIndex < b._zIndex) {
                return -1;
            }
            else if(a._zIndex >= b._zIndex){
                return 1;
            }
        })
    }


    initValues() {
        this.nextZindex = 0;
    }

    addShape(shape) {
        if (shape["_id"] == undefined) {
            shape["_id"] = NumberFactory.uuidv4()
        }
        shape["_layer"] = this;
        this.assignZIndex(shape)

        this.shapes.push(shape)
    }

    assignZIndex(shape) {
        shape["_zIndex"] = this.nextZindex;
        this.nextZindex++;
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

        console.log(this.shapes)

        this.shapes.forEach(element => {
            element.draw()
        });
    }
    update() {
        this.shapes.forEach(element => {
            element.update()
        });
    }
}


export const execute = (obj, fn, ...args) => {
    if (obj[fn]) {
        obj[fn](...args)
    }
}