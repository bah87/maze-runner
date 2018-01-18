import View from './view';

$(() => {
  const mazeOne = $('.maze-viz-1');
  // const mazeTwo = $('.maze-viz-2');
  const viewOne = new View(mazeOne, "Prims");
  // const viewTwo = new View(mazeTwo, "DFS");
  viewOne.render();
  // viewTwo.render();
});
