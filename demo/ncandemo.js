import { Rect, RectFactory } from './NCAN/Rect.js';
import { ShapeFactory } from './NCAN/Shape.js';
import { ColorFactory } from './NCAN/Color.js';
import { NumberFactory } from './NCAN/Number.js';
var canvas = document.querySelector('canvas#canvas')
var context = canvas.getContext("2d")


var windowWidth = window.innerWidth
var windowHeight = window.innerHeight


canvas.width = windowWidth
canvas.height = windowHeight

console.log(canvas, context, windowWidth)



let rects = Array.from(Array(1000).keys())
    .map(el => RectFactory.generateRandomRect(-windowWidth, -windowHeight, windowWidth * 2, windowHeight * 2, 15, 5))
    .map(rect => {
        rect.color = ColorFactory.getRandomColor();
        rect.context = context;
        rect.fill = true;
        rect.speed = NumberFactory.getRandomBetween(1, 20)
        return rect
    })

rects.forEach(rect => rect.update = () => {
    if (rect.x > windowWidth) {
        rect.x = 0 - rect.x
        rect.y = Math.random() * windowHeight
        rect.speed = NumberFactory.getRandomBetween(1, 20)
        rect.height = NumberFactory.getRandomBetween(1, 5)
        rect.color = ColorFactory.getRandomColor();
        if (Math.random() > 0.8) {
            rect.fill = false
        } else {
            rect.fill = true
        }
    }
    rect.x+= rect.speed;
})

animate()

function animate() {
    context.clearRect(0, 0, windowWidth, windowHeight)
    rects.forEach(rect => {
        rect.draw()
        rect.update()
    }) 

    requestAnimationFrame(animate)
}

