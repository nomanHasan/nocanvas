export var canvas = document.querySelector('canvas#canvas')
export var context = canvas.getContext("2d")

export var windowWidth = window.innerWidth
export var windowHeight = window.innerHeight

const percentage = (number, perc) => {
    return (number * perc)/100
}

canvas.width = percentage(windowWidth, 80)
canvas.height = percentage(windowHeight, 80)


export var canvasWidth = canvas.width;
export var canvasHeight = canvas.height;