// import View from './view';
//
// $(() => {
//   const mazeOne = $('.maze-viz-1');
//   const mazeTwo = $('.maze-viz-2');
//   const viewOne = new View(mazeOne, "Prims");
//   const viewTwo = new View(mazeTwo, "DFS");
//   viewOne.render();
//   viewTwo.render();
// });

import GenerateMaze from './generate_maze';

$(() => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.height = 620;
  canvasEl.width = 620;
  new GenerateMaze(canvasEl.width, canvasEl.height, 30).start(canvasEl);
});
