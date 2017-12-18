import { Arc, Arcs } from './Arc.js'
import { CurvesGenerator, Curve, CurvedObject } from './Curves.js'
import { RectGenerator } from './Rect.js';
import { PointGenerator } from './Point.js';
const WIDTH = 1920;
const HEIGHT = 1080;


var canvas = document.querySelector('canvas#canvas')
var context = canvas.getContext("2d")

canvas.width = WIDTH;
canvas.height = HEIGHT;

let arc = new Arc(context, 23, 23, 23, 0, Math.PI * 1.2, false)
arc.color = "green"
arc.draw()

let arcs = Arcs.getRandArcs(context, WIDTH, HEIGHT, 10);


let rect = RectGenerator.generateRandomRect(0, 0, WIDTH, HEIGHT, 200, 200)
let curves = CurvesGenerator.getRandCurves(rect.x, rect.y, rect.width, rect.height, 10)
let startPos = PointGenerator.getRandomPoint(rect.x, rect.y, rect.width, rect.height)
let curvedObject = new CurvedObject(context, startPos, curves, true)


let curvedObjects = [];

for(let i = 0; i< 50; i++){
    let rect = RectGenerator.generateRandomRect(0, 0, WIDTH, HEIGHT, 200, 200)
    let curves = CurvesGenerator.getRandCurves(rect.x, rect.y, rect.width, rect.height, 20)
    let startPos = PointGenerator.getRandomPoint(rect.x, rect.y, rect.width, rect.height)
    let curvedObject = new CurvedObject(context, startPos, curves, true)
    curvedObjects.push(curvedObject)
}

console.log(curvedObject, startPos)


console.log(arcs)

animate()

function animate() {
    context.clearRect(0, 0, WIDTH, HEIGHT)
    
    curvedObjects.forEach(el => {
        el.draw()
    })

    arcs.forEach(element => {
        element.draw()
        element.move()
    });
    requestAnimationFrame(animate)
}
console.log(context)