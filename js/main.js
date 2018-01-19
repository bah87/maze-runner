import GenerateMaze from './generate_maze';

$(() => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  let width = 40;
  let height = 30;
  canvasEl.height = height * 20 + 40;
  canvasEl.width = width * 20 + 40;
  const maze = new GenerateMaze(canvasEl, width, height);
  maze.generate(canvasEl);
  let bfsClicked = false;
  let dfsClicked = false;
  let astarClicked = false;

  $(".search-btns").append("<button class=maze-regen>Regenerate Maze</button>");
  $(".maze-regen").on("click", () => {
    bfsClicked = false;
    dfsClicked = false;
    astarClicked = false;
    maze.generate(canvasEl);
  });

  $(".search-btns").append("<button class=bfs>BFS</button>");
  $(".bfs").on("click", () => {
    maze.quickRegen();
    if (bfsClicked) {
      maze.quickDisplay("BFS");
    } else {
      bfsClicked = true;
      maze.displayVisited("BFS");
    }
  });

  $(".search-btns").append("<button class=dfs>DFS</button>");
  $(".dfs").on("click", () => {
    maze.quickRegen();
    if (dfsClicked) {
      maze.quickDisplay("DFS");
    } else {
      dfsClicked = true;
      maze.displayVisited("DFS");
    }
  });

  $(".search-btns").append("<button class=astar>A*</button>");
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
