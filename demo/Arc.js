export class Arc {
  constructor(context,
    x = 0,
    y = 0,
    radius = 20,
    startAngle = 0,
    endAngle = Math.PI * 2,
    anticlockwise = false,
    color = "black",
    speed = 1) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.anticlockwise = anticlockwise;
    this.color = color;
    this.speed = speed;

    this.nextpos = {x, y}
  }

  draw() {
    this
      .context
      .beginPath();
    this
      .context
      .arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
    this.context.strokeStyle = this.color;
    this.context.fillStyle = this.color;

    this
      .context
      .fill();
    
    if ((Math.abs(this.x - this.nextpos.x) <= this.speed) && (Math.abs(this.y - this.nextpos.y) <= this.speed)) {
      this.getNext(1920, 1080)
      this.color = Arcs.getRandomColor()
    }
    
    this.endAngle += Math.random() / 60
    this.startAngle += Math.random() / 70
    // this.radius += Math.random() < 0.5 ? 0.25: -0.25
    
  }
  getNext(width, height) {
    this.nextpos = {
      x: Math.random() * width,
      y: Math.random() * height
    }
  }

  move () {
    this.x += this.x <= this.nextpos.x
      ? this.speed
      : (-this.speed)
    this.y += this.y <= this.nextpos.y
      ? this.speed
      : (-this.speed)
  }

}

export const Arcs = {
  getRandArcs: (context, width, height, number) => {
    let arcs = []
    for (let i = 0; i < number; i++) {
      for (let j = 0; j < number; j++) {
        let x = Math.random() * (i + width)
        let y = Math.random() * (j + height)
        let radius = 20;
        let startAngle = Math.random() * 10;
        let endAngle = Math.PI + (Math.PI * Math.random() * 2) / 2;
        let anticlockwise = i % 2 !== 0;

        let color = Arcs.getRandomColor();

        arcs.push(new Arc(context, x, y, radius, startAngle, endAngle, anticlockwise, color));
      }
    }
    return arcs;
  },
  draw: (ctx, arc) => {
    ctx.beginPath();
    ctx.arc(arc.x, arc.y, arc.radius, arc.startAngle, arc.endAngle, arc.anticlockwise);
    ctx.strokeStyle = arc.color;
    ctx.stroke();
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