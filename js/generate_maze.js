import Grid from './grid';
import Prims from './prims';
import Edge from './edge';
import AStar from './a_star';
import BreadthOrDepthFirstSearch from './bfs';

class GenerateMaze {
  constructor(canvasEl, width, height, search) {
    this.width = width * 20 + 10;
    this.height = height * 20 + 10;
    this.ctx = canvasEl.getContext("2d");

    this.setup(width, height, search);
  }

  setup(width, height, search) {
    this.grid = new Grid(width, height);
    this.allEdges = new Prims(this.grid).generate();
    this.startPos = this.grid.startPos;
    this.goalPos = this.grid.goalPos;

    // switch (search) {
    //   case "BFS":
    //     this.search = new BreadthOrDepthFirstSearch(this.grid, "BFS");
    //     break;
    //   case "DFS":
    //     this.search = new BreadthOrDepthFirstSearch(this.grid, "DFS");
    //     break;
    //   case "A*":
    //     this.search = new AStar(this.grid);
    //     break;
    // }

    // let results = this.search.solve();
    // this.path = results[0];
    // this.visited = results[1];
    // this.edges = this.allEdges;
    // this.edges = [];
  }

  render() {
    this.ctx.clearRect(10, 10, this.width, this.height);
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(10, 10, this.width, this.height);
    this.edges.forEach(edge => {
      edge.render(this.ctx, "white");
    });
  }

  renderEndpoints() {
    this.ctx.fillStyle = "green";
    let startX = this.startPos[1] * 20 + 25;
    let startY = this.startPos[0] * 20 + 25;
    this.ctx.beginPath();
    this.ctx.arc(startX, startY, 10, 0, Math.PI*2, true);
    this.ctx.closePath();
    this.ctx.fill();
    // this.ctx.fillRect(startX, startY, 10, 10);

    this.ctx.fillStyle = "red";
    let goalX = this.goalPos[1] * 20 + 25;
    let goalY = this.goalPos[0] * 20 + 25;
    this.ctx.beginPath();
    this.ctx.arc(goalX, goalY, 10, 0, Math.PI*2, true);
    this.ctx.closePath();
    this.ctx.fill();
    // this.ctx.fillRect(goalX, goalY, 10, 10);
  }

  generate() {
    const animateCallback = () => {
      if (this.allEdges.length > 0) {
        this.edges.push(this.allEdges.shift());
        this.render(this.ctx);
        requestAnimationFrame(animateCallback);
      } else {
        this.renderEndpoints(this.ctx);
        // this.displayVisited(this.ctx);
      }
    };

    animateCallback();

    // this.render(this.ctx);
    // this.renderEndpoints(this.ctx);
    // this.displayVisited(this.ctx);
  }

  nodesToEdges(path) {
    const pathEdges = [];
    for (let i = 1; i < path.length; i++) {
      pathEdges.push(new Edge(path[i-1], path[i], true));
    }

    return pathEdges;
  }

  displayVisited(searchType) {
    switch (searchType) {
      case "BFS":
        this.search = new BreadthOrDepthFirstSearch(this.grid, "BFS");
        break;
      case "DFS":
        this.search = new BreadthOrDepthFirstSearch(this.grid, "DFS");
        break;
      case "A*":
        this.search = new AStar(this.grid);
        break;
    }

    let results = this.search.solve();
    this.path = results[0];
    this.visited = results[1];
    this.edges = [];

    const visitedEdges = this.visited;
    const renderedEdges = [];

    const animateCallback = () => {
      if (visitedEdges.length > 0) {
        renderedEdges.push(visitedEdges.shift());

        renderedEdges.forEach(edge => {
          edge.render(this.ctx, "orange");
        });

        // setTimeout(animateCallback, 1000/60);
        requestAnimationFrame(animateCallback);
      } else {
        this.solve();
      }
    };

    animateCallback();
  }

  solve() {
    const pathEdges = this.nodesToEdges(this.path);
    const renderedEdges = [];

    const animateCallback = () => {
      if (pathEdges.length > 0) {
        renderedEdges.push(pathEdges.shift());

        renderedEdges.forEach(edge => {
          edge.render(this.ctx, "blue");
        });

        // setTimeout(animateCallback, 1000/60);
        requestAnimationFrame(animateCallback);
      }
    };

    animateCallback();
  }
}

export default GenerateMaze;
