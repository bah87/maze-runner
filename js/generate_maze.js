import Grid from './grid';
import Prims from './prims';

class GenerateMaze {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = new Grid(50);
    this.allEdges = new Prims(this.grid).generate();
    this.edges = [];
  }

  render(ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
    this.edges.forEach(edge => {
      edge.render(ctx);
    });
  }

  start(canvasEl) {
    const ctx = canvasEl.getContext("2d");

    const animateCallback = () => {
      if (this.allEdges.length > 0) {
        this.edges.push(this.allEdges.pop());
        this.render(ctx);
        requestAnimationFrame(animateCallback);
      }
    };

    animateCallback();
  }
}

export default GenerateMaze;
