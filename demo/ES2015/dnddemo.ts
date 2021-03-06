import { EventRegister } from '../src/events/EventRegister';
import {context, canvas, canvasWidth, canvasHeight} from './initializeCanvas'
import { Layer } from '../src/Layer';
import { Rect } from '../src/Rect';
import { NumberFactory } from '../src/Number';
import { ColorFactory } from '../src/Color';


// canvas.height = 500

let gameLayer = new Layer(canvas, context);


var crect 
setTimeout(() => {
    crect = canvas.getBoundingClientRect()
})


EventRegister.register(canvas, gameLayer)


window.onresize = event => {
    EventRegister.register(canvas, gameLayer)
}


let rect = new Rect(100, canvasHeight-25, 100, 80, context)
let bottomBorder = new Rect(0, canvasHeight - 5, canvasWidth, 5, context);

bottomBorder.fill = true;

gameLayer.addShape(rect)
gameLayer.addShape(new Rect(120, canvasHeight-25, 100, 80, context))


for(let i = 0; i< 70; i++){


    let x = NumberFactory.getRandomBetween(1, canvasWidth);
    let y = NumberFactory.getRandomBetween(1, canvasHeight);
    
    let width = NumberFactory.getRandomBetween(1, 200);
    
    let height = NumberFactory.getRandomBetween(1, 200);

    let rect = new Rect(x, y, width, height, context)

    rect.fill = true;
    rect.color = ColorFactory.getRandomColor()

    gameLayer.addShape(rect)
}

gameLayer.shapes = Layer.sortByZindex(gameLayer.shapes)

gameLayer.addShape(bottomBorder)

console.log(gameLayer)


gameLayer.draw()
