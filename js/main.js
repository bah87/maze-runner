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
    $(".prims").removeClass("hidden");
  });

  $(".search-btns").on("click", (event) => {
    if (clickNames.includes(event.target.className)) {
      handleClick(event.target.className);
    }
  });

  $(".BFS-recent").mouseenter(() => {
    handleHover("BFS");
  });

  $(".DFS-recent").mouseenter(() => {
    handleHover("DFS");
  });

  $(".AstarM-recent").mouseenter(() => {
    handleHover("AstarM");
  });

  $(".AstarSL-recent").mouseenter(() => {
    handleHover("AstarSL");
  });

  $(".recent").mouseleave((event) => {
    handleHover(lastAction);
  });

  // // BFS
  // $(".BFS").on("click", () => {
  //   // handleClick("BFS");
  // });
  //
  // $(".BFS-recent").mouseenter(() => {
  //   handleHover("BFS");
  // });
  //

  //
  // // DFS
  // $(".DFS").on("click", () => {
  //   // handleClick("DFS");
  // });
  //

  //
  // $(".DFS-recent").mouseleave(() => {
  //   handleHover(lastAction);
  // });
  //
  // // A* Manhattan
  // $(".AstarM").on("click", () => {
  //   // handleClick("AstarM");
  // });
  //

  //
  // $(".AstarM-recent").mouseleave(() => {
  //   handleHover(lastAction);
  // });
  //
  // // A* Straight-Line
  // $(".AstarSL").on("click", () => {
  //   // handleClick("AstarSL");
  // });
  //

  //
  // $(".AstarSL-recent").mouseleave(() => {
  //   handleHover(lastAction);
  // });
});
