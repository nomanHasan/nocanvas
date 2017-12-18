import { PointFactory } from "./Point.js";
import { NumberFactory } from "./Number.js";
export class Rect {
    constructor(x, y, width, height, context, _zIndex = 0) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.context = context;
        this._zIndex = _zIndex;
        this.mouseState = {
            drag: false,
            previous: {
                x: 0,
                y: 0
            },
            offset: {
                x: 0,
                y: 0
            }
        };
    }
    draw() {
        if (this.color) {
            if (this.fill) {
                this.context.fillStyle = this.color;
            }
            else {
                this.context.strokeStyle = this.color;
            }
        }
        if (this.fill) {
            this
                .context
                .fillRect(this.x, this.y, this.width, this.height);
        }
        else {
            this
                .context
                .strokeRect(this.x, this.y, this.width, this.height);
        }
    }
    isInside(pos) {
        if ((pos.x > this.x && pos.y > this.y) && (pos.x < this.x + this.width && pos.y < this.y + this.height)) {
            return true;
        }
        else {
            return false;
        }
    }
    onmousemove(event) {
        if (this.mouseState.drag) {
            this.ondrag(event);
        }
    }
    ondrag(event) {
        // console.log('RET DRAG', this._id)
        if (this.mouseState.drag) {
            this.x = event.x - this.mouseState.offset.x;
            this.y = event.y - this.mouseState.offset.y;
        }
        this.dispatchDraw();
    }
    dispatchDraw() {
        this["_layer"].draw();
    }
    onmousedown(event) {
        if (!this.isInside(event)) {
            return;
        }
        console.log(event);
        this.mouseState.drag = true;
        this.mouseState.previous = Object.assign({}, event);
        this.mouseState.offset.x = this.mouseState.previous.x - this.x;
        this.mouseState.offset.y = this.mouseState.previous.y - this.y;
        this.dispatchDraw();
    }
    onmouseup(evnet) {
        this.mouseState.drag = false;
        // console.log(this.mouseState)
        this.dispatchDraw();
    }
    onmouseleave() {
        this.mouseState.drag = false;
        this.dispatchDraw();
    }
}
export const RectFactory = {
    generateRandomRect: (x, y, width, height, maxWidth, maxHeight) => {
        let point = PointFactory.getRandomPoint(x, y, width, height);
        let thiswidth = NumberFactory.getRandomNumber(maxWidth);
        let thisheight = NumberFactory.getRandomNumber(maxHeight);
        return new Rect(point.x, point.y, thiswidth, thisheight);
    },
    draw: (rect) => {
        if (rect.color) {
            rect.context.fillStyle = rect.color;
        }
        rect
            .context
            .fillRect(rect.x, rect.y, rect.width, rect.height);
    }
};
