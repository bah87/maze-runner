import GenerateMaze from './generate_maze';

$(() => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  let width = 34;
  let height = 24;
  canvasEl.height = height * 20 + 40;
  canvasEl.width = width * 20 + 40;
  const maze = new GenerateMaze(canvasEl, width, height);
  maze.generate(canvasEl);
  $(".prims").removeClass("hidden");
  let bfsClicked = false;
  let dfsClicked = false;
  let astarmClicked = false;
  let astarslClicked = false;

  $(".maze-btns").append("<button class=maze-regen>Prim's Algorithm</button>");
  $(".maze-regen").on("click", () => {
    bfsClicked = false;
    dfsClicked = false;
    astarmClicked = false;
    astarslClicked = false;
    maze.generate(canvasEl);
    $(".prims").removeClass("hidden");
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
    $(".info").addClass("hidden");
    $(".bfs").removeClass("hidden");
    $(".bfs-recent").removeClass("hidden");
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
    $(".info").addClass("hidden");
    $(".dfs").removeClass("hidden");
    $(".dfs-recent").removeClass("hidden");
  });

  $(".search-btns").append("<button class=astar-m>A* (Manhattan Heuristic)</button>");
  $(".astar-m").on("click", () => {
    maze.quickRegen();
    if (astarmClicked) {
      maze.quickDisplay("A*m");
    } else {
      astarmClicked = true;
      maze.displayVisited("A*m");
    }
    $(".info").addClass("hidden");
    $(".astar").removeClass("hidden");
    $(".astar-m-recent").removeClass("hidden");
  });

  $(".search-btns").append("<button class=astar-sl>A* (Straight-Line Heuristic)</button>");
  $(".astar-sl").on("click", () => {
    maze.quickRegen();
    if (astarslClicked) {
      maze.quickDisplay("A*sl");
    } else {
      astarslClicked = true;
      maze.displayVisited("A*sl");
    }
    $(".info").addClass("hidden");
    $(".astar").removeClass("hidden");
    $(".astar-sl-recent").removeClass("hidden");
  });
});
