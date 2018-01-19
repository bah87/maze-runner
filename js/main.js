import GenerateMaze from './generate_maze';

$(() => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  let width = 50;
  let height = 30;
  canvasEl.height = height * 20 + 40;
  canvasEl.width = width * 20 + 40;
  let search = "DFS";
  const maze = new GenerateMaze(canvasEl, width, height, search);
  maze.generate(canvasEl);

  $(".search-btns").append("<button>BFS</button>");
  $(".search-btns").append("<button>DFS</button>");
  $(".search-btns").append("<button>A*</button>");
});
