import Grid from './grid';
import Prims from './prims';
import Edge from './edge';
import BreadthOrDepthFirstSearch from './bfs';

class GenerateMaze {
  constructor(canvasEl, size) {
    this.width = canvasEl.width;
    this.height = canvasEl.height;
    this.ctx = canvasEl.getContext("2d");
    this.grid = new Grid(size);
    this.allEdges = new Prims(this.grid).generate();
    this.startPos = this.grid.startPos;
    this.goalPos = this.grid.goalPos;
    this.search = new BreadthOrDepthFirstSearch(
      this.startPos, this.goalPos, this.grid, this.ctx, "BFS"
    );
    let results = this.search.solve();
    this.path = results[0];
    this.visited = results[1];
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

  generate() {
    const animateCallback = () => {
      if (this.allEdges.length > 0) {
        this.edges.push(this.allEdges.shift());
        this.render(this.ctx);
        requestAnimationFrame(animateCallback);
      } else {
        this.renderEndpoints(this.ctx);
        this.displayVisited(this.ctx);
        this.solve(this.ctx);
      }
    };

    animateCallback();
  }

  nodesToEdges(path) {
    const pathEdges = [];
    for (let i = 1; i < path.length; i++) {
      pathEdges.push(new Edge(path[i-1], path[i], true));
    }

    return pathEdges;
  }

  displayVisited(ctx) {
    const visitedEdges = this.visited;
    const renderedEdges = [];

    const animateCallback = () => {
      if (visitedEdges.length > 0) {
        renderedEdges.push(visitedEdges.shift());

        renderedEdges.forEach(edge => {
          edge.render(ctx, "pink");
        });

        setTimeout(animateCallback, 1000/60);
      }
    };

    animateCallback();
  }

  solve(ctx) {
    const pathEdges = this.nodesToEdges(this.path);
    const renderedEdges = [];

    const animateCallback = () => {
      if (pathEdges.length > 0) {
        renderedEdges.push(pathEdges.pop());

        renderedEdges.forEach(edge => {
          edge.render(ctx, "blue");
        });

        setTimeout(animateCallback, 1000/20);
      }
    };

    animateCallback();
  }
}

export default GenerateMaze;
