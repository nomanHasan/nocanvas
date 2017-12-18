export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

export const PointGenerator = {
  getRandomPoint: (x, y, width, height) => {
    return { x: PointGenerator.getRandomBetween(x, x+width), y: PointGenerator.getRandomBetween(y, y+height)}
  },

  getRandomNumber: number => {
    return Math.round(Math.random() * number);
  },
  getRandomBetween: (max, min) => {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
}


export const PointZero = {
  x: 0,
  y: 0
}