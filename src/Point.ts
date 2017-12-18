import { NumberFactory } from "./Number";

export const PointFactory = {
    getRandomPoint: (x, y, width, height) => {
        return {
            x: NumberFactory.getRandomBetween(x, x + width),
            y: NumberFactory.getRandomBetween(y, y + height)
        }
    }
}

export const PointZero = {
    x: 0,
    y: 0
}