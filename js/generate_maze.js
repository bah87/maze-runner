import Grid from './grid';
import Prims from './prims';
import Edge from './edge';
import AStar from './a_star';
import Dijkstra from './dijkstra';
import BreadthOrDepthFirstSearch from './bfs';

class GenerateMaze {
  constructor(canvasEl, width, height, enableAllBtns) {
    this.width = width * 20 + 10;
    this.height = height * 20 + 10;
    this.ctx = canvasEl.getContext("2d");
    this.setup(width, height);
    this.enableAllBtns = enableAllBtns;
  }

  setup(width, height) {
    this.grid = new Grid(width, height);
    this.startPos = this.grid.startPos;
    this.goalPos = this.grid.goalPos;
  }

  render(edges) {
    this.ctx.clearRect(10, 10, this.width, this.height);
    this.ctx.fillStyle = "rgb(35, 35, 35)";
    this.ctx.fillRect(10, 10, this.width, this.height);
    edges.forEach(edge => {
      edge.render(this.ctx, "grey");
    });
  }

  renderEndpoints() {
    this.ctx.fillStyle = "#3b721a";
    let startX = this.startPos[1] * 20 + 25;
    let startY = this.startPos[0] * 20 + 25;
    this.ctx.beginPath();
    this.ctx.arc(startX, startY, 10, 0, Math.PI*2, true);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.fillStyle = "#871919";
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

        setTimeout(animateCallback, 1);
      } else {
        this.renderEndpoints(this.ctx);
        this.enableAllBtns();
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
        path = this.nodesToEdges(this.pathBFS);
        visited = this.visitedBFS;
        break;
      case "DFS":
        path = this.nodesToEdges(this.pathDFS);
        visited = this.visitedDFS;
        break;
      case "AstarM":
        path = this.nodesToEdges(this.pathAstarM);
        visited = this.visitedAstarM;
        break;
      case "AstarSL":
        path = this.nodesToEdges(this.pathAstarSL);
        visited = this.visitedAstarSL;
        break;
      case "Dijkstra":
        path = this.nodesToEdges(this.pathDijkstra);
        visited = this.visitedDijkstra;
        break;
    }

    visited.forEach(edge => {
      edge.render(this.ctx, "#cc700e");
    });

    path.forEach(edge => {
      edge.render(this.ctx, "#1855a0");
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
        this.visitedBFS = results[1].slice();
        break;
      case "DFS":
        this.search = new BreadthOrDepthFirstSearch(this.grid, "DFS");
        results = this.search.solve();
        this.pathDFS = results[0];
        this.visitedDFS = results[1].slice();
        break;
      case "AstarM":
        this.search = new AStar(this.grid, "M");
        results = this.search.solve();
        this.pathAstarM = results[0];
        this.visitedAstarM = results[1].slice();
        break;
      case "AstarSL":
        this.search = new AStar(this.grid, "SL");
        results = this.search.solve();
        this.pathAstarSL = results[0];
        this.visitedAstarSL = results[1].slice();
        break;
      case "Dijkstra":
        this.search = new Dijkstra(this.grid, "M");
        results = this.search.solve();
        this.pathDijkstra = results[0];
        this.visitedDijkstra = results[1].slice();
        break;
    }
    this.path = results[0];
    this.visited = results[1];

    const visitedEdges = this.visited.slice();
    const renderedEdges = [];

    const animateCallback = () => {
      if (visitedEdges.length > 0) {
        renderedEdges.push(visitedEdges.shift());

        renderedEdges.forEach((edge, idx) => {
          edge.render(this.ctx, "#cc700e");
        });
        this.renderEndpoints(this.ctx);

        setTimeout(animateCallback, 1);
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
          edge.render(this.ctx, "#1855a0");
        });
        this.renderEndpoints(this.ctx);

        setTimeout(animateCallback, 1);
      } else {
        this.enableAllBtns();
      }
    };

    animateCallback();
  }
}

export default GenerateMaze;
