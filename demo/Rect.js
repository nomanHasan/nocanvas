import { PointGenerator } from "./Point.js";

export const RectGenerator = {
    generateRandomRect: (x, y, width, height, maxWidth, maxHeight) => {
        let point = PointGenerator.getRandomPoint(x, y, width, height);
        let thiswidth = PointGenerator.getRandomNumber(maxWidth)
        let thisheight = PointGenerator.getRandomNumber(maxHeight)

        return {
            x: point.x,
            y: point.y,
            width: thiswidth,
            height: thisheight
        }

    }
}