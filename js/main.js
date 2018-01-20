import GenerateMaze from './generate_maze';

$(() => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  let width = 34;
  let height = 24;
  canvasEl.height = height * 20 + 40;
  canvasEl.width = width * 20 + 40;
  const maze = new GenerateMaze(canvasEl, width, height);
  maze.generate(canvasEl);
  let bfsClicked = false;
  let dfsClicked = false;
  let astarClicked = false;

  $(".maze-btns").append("<button class=maze-regen>Prim's Algorithm</button>");
  $(".maze-regen").on("click", () => {
    bfsClicked = false;
    dfsClicked = false;
    astarClicked = false;
    maze.generate(canvasEl);
  });

  $(".search-btns").append("<button class=bfs>Breadth First Search</button>");
  $(".bfs").on("click", () => {
    maze.quickRegen();
    if (bfsClicked) {
      maze.quickDisplay("BFS");
    } else {
      bfsClicked = true;
      maze.displayVisited("BFS");
    }
  });

  $(".search-btns").append("<button class=dfs>Depth First Search</button>");
  $(".dfs").on("click", () => {
    maze.quickRegen();
    if (dfsClicked) {
      maze.quickDisplay("DFS");
    } else {
      dfsClicked = true;
      maze.displayVisited("DFS");
    }
  });

  $(".search-btns").append("<button class=astar>A* Algorithm</button>");
  $(".astar").hover(() => {
    maze.quickRegen();
    if (astarClicked) {
      maze.quickDisplay("A*");
    } else {
      astarClicked = true;
      maze.displayVisited("A*");
    }
  });
});
