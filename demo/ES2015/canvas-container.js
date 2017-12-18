var body = document.getElementsByTagName('body')[0]
var canvasContainer = document.getElementById('canvas-container')
var element = document.getElementById('canvas')
var options = document.getElementById('options')

changeBackground("rgb(222, 222, 222)")

var darkButton = document.createElement('button')
darkButton.innerHTML = "Dark"
darkButton.onclick = (event) => {
    changeBackground("#4a4a4a")
}

var lightButton = document.createElement('button')
lightButton.innerHTML = "Light"
lightButton.onclick = (event) => {
    changeBackground("rgb(222, 222, 222)")
}

function changeBackground(color) {
    body.style.background = color
    element.style.background = color
}


options.appendChild(darkButton)
options.appendChild(lightButton)