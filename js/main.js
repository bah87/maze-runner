import GenerateMaze from './generate_maze';

$(() => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.height = 620;
  canvasEl.width = 620;
  new GenerateMaze(canvasEl.width, canvasEl.height, 30).start(canvasEl);
});
