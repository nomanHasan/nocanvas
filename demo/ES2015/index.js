function onload() {
  

  var arcs = []
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
  
      // drawRandArcs(ctx)
      
      
      arcs = Arc.getRandArcs(800, 800, 40);
      setInterval(() => {animate(ctx)}, 1000)

    }



    function drawRandArcs(ctx){
        for (var i = 0; i < 40; i++) {
            for (var j = 0; j < 30; j++) {
              var x = Math.random() *  ( i + 800 ); // x coordinate
              var y = Math.random() *  ( j + 800 ); // y coordinate
              var radius = 20; // Arc radius
              var startAngle = Math.random() * 10; // Starting point on circle
              var endAngle = Math.PI + (Math.PI * Math.random() * 2) / 2; // End point on circle
              var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise

              
              let color = getRandomColor();
              
              ctx.strokeStyle = color;

              
              ctx.beginPath();
              ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
              ctx.stroke();

            }
          }
    }

    function clearRect(ctx){
        ctx.clearRect(0, 0, 1000, 1000)
    }

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }



      function animate(ctx){
        update(ctx);
        draw(ctx);
        // console.log(arcs[1])
      }

      function update(ctx){
        ctx.clearRect(0, 0, 800, 800)
        arcs.forEach((element, index) => {
          let {x,y} = element;
          let curpos = {x, y}
          let nextpos = Arc.getNext(800, 800);
          
          element = {...element, ...Arc.move(curpos,nextpos, 1)}
          if(index == 1){
            console.log(curpos, nextpos)
          }
        });
      }

      function draw(ctx){
        arcs.forEach(element => {
          Arc.draw(ctx, element)
        });
      }


}


const Arc = {
  getRandArcs: (width, height, number) => {
    let arcs = []
    for (let i = 0; i < number; i++) {
      for (let j = 0; j < number; j++) {
        let x = Math.random() *  (i  + width)
        let y = Math.random() *  (j + height)
        let radius = 20;  
        let startAngle = Math.random() * 10;  
        let endAngle = Math.PI + (Math.PI * Math.random() * 2) / 2;  
        let anticlockwise = i % 2 !== 0; 

        let color = Arc.getRandomColor();
        
        arcs.push(
          {
            x, 
            y, 
            radius, 
            startAngle, 
            endAngle, 
            anticlockwise, 
            color
          }
        );
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
  getRandomColor : () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  },
  getNext: (width, height) => {
    return {x: Math.random() * width, y: Math.random() * height, }
  },
  move: (curpos, nextpos, speed) => {
    let {x,y} = curpos
    x += curpos.x < nextpos.x ? speed : -speed
    y += curpos.y < nextpos.y ? speed : -speed
    return {x, y}
  }
}