const BFS = require('./bfs.js');

class Grid {
  constructor(size) {
    this.size = size;
    this.array = Grid.makeGrid(size);
    this.startPos = Math.floor(Math.random * size);
    this.goalPos = Math.floor(Math.random * size);
    this.bfs = new BFS(this.startPos, this.goalPos, this);
  }
}

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
