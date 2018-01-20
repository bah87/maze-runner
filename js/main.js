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
  let lastAction = null;

  const handleClick = (searchType) => {
    maze.quickRegen();
    maze.displayVisited(searchType);

    $(".info").addClass("hidden");
    $(`.${searchType}`).removeClass("hidden");
    $(`.${searchType}-recent`).removeClass("hidden");

    lastAction = searchType;
  };

  const handleHover = (searchType) => {
    maze.quickRegen();
    maze.quickDisplay(searchType);
    $(".info").addClass("hidden");
    $(`.${searchType}`).removeClass("hidden");
  };

  $(".maze-btns").append("<button class=maze-regen>Prim's Algorithm</button>");
  $(".search-btns").append("<button class=BFS>Breadth First Search</button>");
  $(".search-btns").append("<button class=DFS>Depth First Search</button>");
  $(".search-btns").append("<button class=AstarM>A* (Manhattan Heuristic)</button>");
  $(".search-btns").append("<button class=AstarSL>A* (Straight-Line Heuristic)</button>");

  const clickNames = ["BFS", "DFS", "AstarM", "AstarSL"];

  $(".maze-regen").on("click", () => {
    maze.generate(canvasEl);
    $(".info").addClass("hidden");
    $(".recenttrav").addClass("hidden");
    $(".prims").removeClass("hidden");
  });

  $(".search-btns").on("click", (event) => {
    if (clickNames.includes(event.target.className)) {
      handleClick(event.target.className);
    }
  });

  $(".BFS-recent").mouseenter(() => {
    handleHover("BFS");
  }).mouseleave(() => {
    handleHover(lastAction);
  });

  $(".DFS-recent").mouseenter(() => {
    handleHover("DFS");
  }).mouseleave(() => {
    handleHover(lastAction);
  });

  $(".AstarM-recent").mouseenter(() => {
    handleHover("AstarM");
  }).mouseleave(() => {
    handleHover(lastAction);
  });

  $(".AstarSL-recent").mouseenter(() => {
    handleHover("AstarSL");
  }).mouseleave(() => {
    handleHover(lastAction);
  });
});
