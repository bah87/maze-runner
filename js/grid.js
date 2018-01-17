const BFS = require('./bfs.js');
const Node = require('./node.js');

class Grid {
  constructor(size) {
    this.size = size;
    this.array = Grid.makeGrid(size);
    this.startPos = Grid.placeEndpoints(this);
    this.goalPos = Grid.placeEndpoints(this);
    this.bfs = new BFS(this.startPos, this.goalPos, this);
  }
}

Grid.placeEndpoints = grid => {
  let i = Math.floor(Math.random() * grid.size);
  let j = Math.floor(Math.random() * grid.size);
  while (!grid.array[i][j]) {
    i = Math.floor(Math.random() * grid.size);
    j = Math.floor(Math.random() * grid.size);
  }
  return [i + 1, j + 1];
};

Grid.makeGrid = size => {
  let nullRow = new Array(size + 2).fill(null);
  let grid = [nullRow];
  for (let i = 0; i < size; i++) {
    let row = [null];
    for (let j = 0; j < size; j++) {
      if (Math.random() > 0.25) {
        row.push(new Node([i, j]));
      } else {
        row.push(null);
      }
    }
    row.push(null);
    grid.push(row);
  }
  grid.push(nullRow);
  return grid;
};

module.exports = Grid;
