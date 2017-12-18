export class Curve {
    constructor(
        private c1x,
        private c1y,
        private c2x,
        private c2y,
        private x,
        private y,
    ){

    }
    
}


export const CurvesFactory = {
    getRandCurves: (x, y, width, height, number) => {
        let curves = []
            let c1x,
                c1y,
                c2x,
                c2y,
                thisx,
                thisy;
            let mX = x + width;
            let mY = y + height;

            for (let i = 0; i < number; i++) {
                c1x = Math.random() * mX + x
                c1y = Math.random() * mY + y
                c2x = Math.random() * mX + x
                c2y = Math.random() * mY + y

                thisx = Math.random() * mX + x
                thisy = Math.random() * mY + y

                let curve = new Curve(c1x, c1y, c2x, c2y, thisx, thisy);
                curves.push(curve);
            }
            return curves;
        },
        getRandomPoint: (x, y, width, height) => {
            return {
                x: Math.random() * (x + width) + x,
                y: Math.random() * (y + height) + y
            }
        },
        getRandomNumber: number => {
            return Math.round(Math.random() * number);
        },
        draw: (ctx, curves = []) => {
            curves.forEach(curve => {
                ctx.bezierCurveTo(curve.c1x, curve.c1y, curve.c2x, curve.c2y, curve.x, curve.y);
            })
        },
        getRandomColor: () => {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },
        getNext: (width, height) => {
            return {
                x: Math.random() * width,
                y: Math.random() * height
            }
        },
        move: (curpos, nextpos, speed) => {
            let {x, y} = curpos
            x += curpos.x < nextpos.x
                ? speed
                : -speed
            y += curpos.y < nextpos.y
                ? speed
                : -speed
            return {x, y}
        }
    }