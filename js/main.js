const View = require('./view.js');

$(() => {
  const rootEl = $('.maze-viz');
  const view = new View(rootEl);
  view.render();
});
