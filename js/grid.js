const BFS = require('./bfs.js');

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
  return [i, j];
};

Grid.makeGrid = size => {
  let grid = [];
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      let randBool = Math.random() < 0.3 ? false : true;
      row.push(randBool);
    }
    grid.push(row);
  }

  return grid;
};

module.exports = Grid;
