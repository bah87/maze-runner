import Grid from './grid';
import Prims from './prims';
import Edge from './edge';
import AStar from './a_star';
import BreadthOrDepthFirstSearch from './bfs';

class GenerateMaze {
  constructor(canvasEl, width, height) {
    this.width = width * 20 + 10;
    this.height = height * 20 + 10;
    this.ctx = canvasEl.getContext("2d");
    this.setup(width, height);
  }

  setup(width, height) {
    this.grid = new Grid(width, height);
    this.startPos = this.grid.startPos;
    this.goalPos = this.grid.goalPos;
  }

  render(edges) {
    this.ctx.clearRect(10, 10, this.width, this.height);
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(10, 10, this.width, this.height);
    edges.forEach(edge => {
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

    this.ctx.fillStyle = "red";
    let goalX = this.goalPos[1] * 20 + 25;
    let goalY = this.goalPos[0] * 20 + 25;
    this.ctx.beginPath();
    this.ctx.arc(goalX, goalY, 10, 0, Math.PI*2, true);
    this.ctx.closePath();
    this.ctx.fill();
  }

  quickRegen() {
    this.render(this.allEdges);
    this.renderEndpoints(this.ctx);
  }

  generate() {
    this.setup(this.grid.width, this.grid.height);
    this.allEdges = new Prims(this.grid).generate();
    this.edges = [];
    let i = 0;

    const animateCallback = () => {
      if (i < this.allEdges.length) {
        this.edges.push(this.allEdges[i]);
        i++;
        this.render(this.edges);
        requestAnimationFrame(animateCallback);
      } else {
        this.renderEndpoints(this.ctx);
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

  quickDisplay(searchType) {
    let path; let visited;
    switch (searchType) {
      case "BFS":
        // this.search = new BreadthOrDepthFirstSearch(this.grid, "BFS");
        path = this.nodesToEdges(this.pathBFS);
        visited = this.visitedBFS;
        break;
      case "DFS":
        // this.search = new BreadthOrDepthFirstSearch(this.grid, "DFS");
        path = this.nodesToEdges(this.pathDFS);
        visited = this.visitedDFS;
        break;
      case "A*":
        // this.search = new AStar(this.grid);
        path = this.nodesToEdges(this.pathAstar);
        visited = this.visitedAstar;
        break;
    }

    visited.forEach(edge => {
      edge.render(this.ctx, "orange");
    });

    path.forEach(edge => {
      edge.render(this.ctx, "blue");
    });

    this.renderEndpoints(this.ctx);
  }

  displayVisited(searchType) {
    let results;
    switch (searchType) {
      case "BFS":
        this.search = new BreadthOrDepthFirstSearch(this.grid, "BFS");
        results = this.search.solve();
        this.pathBFS = results[0];
        this.visitedBFS = results[1];
        break;
      case "DFS":
        this.search = new BreadthOrDepthFirstSearch(this.grid, "DFS");
        results = this.search.solve();
        this.pathDFS = results[0];
        this.visitedDFS = results[1];
        break;
      case "A*":
        this.search = new AStar(this.grid);
        results = this.search.solve();
        this.pathAstar = results[0];
        this.visitedAstar = results[1];
        break;
    }
    this.path = results[0];
    this.visited = results[1];

    const visitedEdges = this.visited;
    const renderedEdges = [];

    const animateCallback = () => {
      if (visitedEdges.length > 0) {
        renderedEdges.push(visitedEdges.shift());

        renderedEdges.forEach(edge => {
          edge.render(this.ctx, "orange");
        });
        this.renderEndpoints(this.ctx);

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

        requestAnimationFrame(animateCallback);
      }
    };

    animateCallback();
  }
}

export default GenerateMaze;
