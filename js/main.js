import GenerateMaze from './generate_maze';

$(() => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  let width = 34;
  let height = 24;
  canvasEl.height = height * 20 + 40;
  canvasEl.width = width * 20 + 40;

  const clickNames = ["BFS", "DFS", "AstarM", "AstarSL", "Dijkstra"];

  const disableAllBtns = () => {
    clickNames.concat(["maze-regen"]).forEach(className => {
      $(`.${className}`).prop("disabled", true);
      $(`.${className}-recent`).unbind("mouseenter mouseleave");
    });
  };

  const enableAllBtns = () => {
    clickNames.concat(["maze-regen"]).forEach(className => {
      $(`.${className}`).prop("disabled", false);
      $(`.${className}-recent`).mouseenter(() => {
        handleHover(`${className}`);
      }).mouseleave(() => {
        handleHover(lastAction);
      });
    });
  };

  const maze = new GenerateMaze(canvasEl, width, height, enableAllBtns);
  disableAllBtns();
  maze.generate(canvasEl);

  $(".prims").removeClass("hidden");
  let lastAction = null;

  const handleClick = searchType => {
    maze.quickRegen();
    maze.displayVisited(searchType);

    $(".info").addClass("hidden");
    $(`.${searchType}`).removeClass("hidden");
    $(`.${searchType}-recent`).removeClass("hidden");

    lastAction = searchType;
  };

  const handleHover = searchType => {
    maze.quickRegen();
    maze.quickDisplay(searchType);
    $(".info").addClass("hidden");
    $(`.${searchType}`).removeClass("hidden");
  };

  $(".maze-regen").on("click", () => {
    disableAllBtns();
    maze.generate(canvasEl);
    $(".info").addClass("hidden");
    $(".recenttrav").addClass("hidden");
    $(".prims").removeClass("hidden");
  });

  $(".search-btns").on("click", (event) => {
    if (clickNames.includes(event.target.className)) {
      disableAllBtns();
      handleClick(event.target.className);
    }
  });
});
