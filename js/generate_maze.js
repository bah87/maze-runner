import Grid from './grid';
import Prims from './prims';

class GenerateMaze {
  constructor(width, height, size) {
    this.width = width;
    this.height = height;
    this.grid = new Grid(size);
    this.allEdges = new Prims(this.grid).generate();
    this.edges = [];
  }

  render(ctx) {
    ctx.clearRect(10, 10, this.width, this.height);
    ctx.fillStyle = "black";
    ctx.fillRect(10, 10, this.width, this.height);
    this.edges.forEach(edge => {
      edge.render(ctx);
    });
  }

  start(canvasEl) {
    const ctx = canvasEl.getContext("2d");

    const animateCallback = () => {
      if (this.allEdges.length > 0) {
        this.edges.push(this.allEdges.shift());
        this.render(ctx);
        requestAnimationFrame(animateCallback);
      }
    };

    animateCallback();
  }
}

export default GenerateMaze;
