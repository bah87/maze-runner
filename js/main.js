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
  canvasEl.height = window.innerHeight;
  canvasEl.width = window.innerWidth;
  new GenerateMaze(canvasEl.width, canvasEl.height).start(canvasEl);
});
