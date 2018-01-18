import Grid from './grid';
import Prims from './prims';
import Edge from './edge';
import BreadthFirstSearch from './bfs';

class GenerateMaze {
  constructor(width, height, size) {
    this.width = width;
    this.height = height;
    this.grid = new Grid(size);
    this.allEdges = new Prims(this.grid).generate();
    this.startPos = this.grid.startPos;
    this.goalPos = this.grid.goalPos;
    this.bfs = new BreadthFirstSearch(this.startPos, this.goalPos, this.grid);
    this.path = this.bfs.solve();
    this.edges = [];
  }

  render(ctx) {
    ctx.clearRect(10, 10, this.width, this.height);
    ctx.fillStyle = "black";
    ctx.fillRect(10, 10, this.width, this.height);
    this.edges.forEach(edge => {
      edge.render(ctx, "white");
    });
  }

  renderEndpoints(ctx) {
    ctx.fillStyle = "green";
    let startX = this.startPos[1] * 20 + 20;
    let startY = this.startPos[0] * 20 + 20;
    ctx.fillRect(startX, startY, 10, 10);

    ctx.fillStyle = "red";
    let goalX = this.goalPos[1] * 20 + 20;
    let goalY = this.goalPos[0] * 20 + 20;
    ctx.fillRect(goalX, goalY, 10, 10);
  }

  generate(canvasEl) {
    const ctx = canvasEl.getContext("2d");

    const animateCallback = () => {
      if (this.allEdges.length > 0) {
        this.edges.push(this.allEdges.shift());
        this.render(ctx);
        requestAnimationFrame(animateCallback);
      } else {
        this.renderEndpoints(ctx);
        this.solve(ctx);
      }
    };

    animateCallback();
  }

  pathToEdges() {
    const pathEdges = [];
    for (let i = 1; i < this.path.length; i++) {
      pathEdges.push(new Edge(this.path[i-1], this.path[i]));
    }

    return pathEdges;
  }

  solve(ctx) {
    const pathEdges = this.pathToEdges();
    const renderedEdges = [];

    const animateCallback = () => {
      if (pathEdges.length > 0) {
        renderedEdges.push(pathEdges.shift());

        renderedEdges.forEach(edge => {
          edge.render(ctx, "blue");
        });

        setTimeout(animateCallback, 1000);
      }
    };

    animateCallback();
  }
}

export default GenerateMaze;
