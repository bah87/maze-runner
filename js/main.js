import GenerateMaze from './generate_maze';

$(() => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  let width = 50;
  let height = 30;
  canvasEl.height = height * 20 + 40;
  canvasEl.width = width * 20 + 40;
  const maze = new GenerateMaze(canvasEl, width, height);
  maze.generate(canvasEl);

  $(".search-btns").append("<button class=maze-regen>Regenerate Maze</button>");
  $(".maze-regen").on("click", () => {
    maze.generate(canvasEl);
  });

  $(".search-btns").append("<button class=bfs>BFS</button>");
  $(".bfs").on("click", () => {
    maze.quickRegen();
    maze.displayVisited("BFS");
  });

  $(".search-btns").append("<button class=dfs>DFS</button>");
  $(".dfs").on("click", () => {
    maze.quickRegen();
    maze.displayVisited("DFS");
  });

  $(".search-btns").append("<button class=astar>A*</button>");
  $(".astar").on("click", () => {
    maze.quickRegen();
    maze.displayVisited("A*");
  });
});
