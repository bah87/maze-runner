class Edge {
  constructor(vertex1, vertex2) {
    this.vertex1 = vertex1;
    this.vertex2 = vertex2;
    this.weight = Math.random();
    this.color = "black";
  }

  render(ctx) {
    ctx.fillStyle = this.color;
    const mult = 20;
    let x1 = this.vertex1.pos[1] * mult;
    let y1 = this.vertex1.pos[0] * mult;
    let x2 = this.vertex2.pos[1] * mult;
    let y2 = this.vertex2.pos[0] * mult;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 10;
    ctx.stroke();
  }
}

export default Edge;
