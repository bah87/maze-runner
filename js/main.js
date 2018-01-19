import GenerateMaze from './generate_maze';

$(() => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  let width = 10;
  let height = 10;
  canvasEl.height = height * 20 + 40;
  canvasEl.width = width * 20 + 40;
  let search = "A*";
  const maze = new GenerateMaze(canvasEl, width, height, search);
  maze.generate(canvasEl);
});
