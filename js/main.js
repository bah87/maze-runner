import GenerateMaze from './generate_maze';

$(() => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  let width = 50;
  let height = 30;
  canvasEl.height = height * 20 + 40;
  canvasEl.width = width * 20 + 40;
  const maze = new GenerateMaze(canvasEl, width, height);
  maze.generate(canvasEl);
});
