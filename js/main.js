import GenerateMaze from './generate_maze';

$(() => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.height = 620;
  canvasEl.width = 620;
  const maze = new GenerateMaze(canvasEl, 30);
  maze.generate(canvasEl);
});
