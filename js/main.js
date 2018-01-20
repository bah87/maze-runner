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

  // let bfsClicked = false;
  // let dfsClicked = false;
  // let astarmClicked = false;
  // let astarslClicked = false;

  $(".maze-btns").append("<button class=maze-regen>Prim's Algorithm</button>");
  $(".search-btns").append("<button class=BFS>Breadth First Search</button>");
  $(".search-btns").append("<button class=DFS>Depth First Search</button>");
  $(".search-btns").append("<button class=AstarM>A* (Manhattan Heuristic)</button>");
  $(".search-btns").append("<button class=AstarSL>A* (Straight-Line Heuristic)</button>");


  $(".maze-regen").on("click", () => {
    // bfsClicked = false;
    // dfsClicked = false;
    // astarmClicked = false;
    // astarslClicked = false;
    maze.generate(canvasEl);
    $(".prims").removeClass("hidden");
  });


  $(".BFS").on("click", () => {
    handleClick("BFS");

    // maze.quickRegen();
    // if (bfsClicked) {
    //   maze.quickDisplay("BFS");
    // } else {
    //   bfsClicked = true;
    //   maze.displayVisited("BFS");
    // }
    // $(".info").addClass("hidden");
    // $(".bfs").removeClass("hidden");
    // $(".bfs-recent").removeClass("hidden");
  });

  $(".BFS-recent").mouseenter(() => {
    handleHover("BFS");
  });

  $(".BFS-recent").mouseleave(() => {
    handleHover(lastAction);
  });


  $(".DFS").on("click", () => {
    handleClick("DFS");

    // maze.quickRegen();
    // if (dfsClicked) {
    //   maze.quickDisplay("DFS");
    // } else {
    //   dfsClicked = true;
    //   maze.displayVisited("DFS");
    // }
    // $(".info").addClass("hidden");
    // $(".dfs").removeClass("hidden");
    // $(".dfs-recent").removeClass("hidden");
  });

  $(".DFS-recent").mouseenter(() => {
    handleHover("DFS");
  });

  $(".DFS-recent").mouseleave(() => {
    handleHover(lastAction);
  });


  $(".AstarM").on("click", () => {
    handleClick("AstarM");

    // maze.quickRegen();
    // if (astarmClicked) {
    //   maze.quickDisplay("A*m");
    // } else {
    //   astarmClicked = true;
    //   maze.displayVisited("A*m");
    // }
    // $(".info").addClass("hidden");
    // $(".astar").removeClass("hidden");
    // $(".astar-m-recent").removeClass("hidden");
  });

  $(".AstarM-recent").mouseenter(() => {
    handleHover("AstarM");
  });

  $(".AstarM-recent").mouseleave(() => {
    handleHover(lastAction);
  });


  $(".AstarSL").on("click", () => {
    handleClick("AstarSL");

    // maze.quickRegen();
    // if (astarslClicked) {
    //   maze.quickDisplay("A*sl");
    // } else {
    //   astarslClicked = true;
    //   maze.displayVisited("A*sl");
    // }
    // $(".info").addClass("hidden");
    // $(".astar").removeClass("hidden");
    // $(".astar-sl-recent").removeClass("hidden");
  });

  $(".AstarSL-recent").mouseenter(() => {
    handleHover("AstarSL");
  });

  $(".AstarSL-recent").mouseleave(() => {
    handleHover(lastAction);
  });


  // $(".astar-sl-recent").mouseenter(() => {
  //   maze.quickRegen();
  //   maze.quickDisplay("A*sl");
  //   $(".info").addClass("hidden");
  //   $(".astar").removeClass("hidden");
  // });
  //
  // $(".astar-m-recent").mouseleave(() => {
  //   runLastAction(lastAction);
  // });
  //
  // const runLastAction = (lastAction) => {
  //
  // };
});
