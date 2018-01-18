import Node from './node';

class Grid {
  constructor(size) {
    this.size = size;
    this.array = Grid.makeGrid(size, -1);
    this.startPos = Grid.placeEndpoints(this);
    this.goalPos = Grid.placeEndpoints(this);
  }
}

Grid.placeEndpoints = grid => {
  let i = Math.floor(Math.random() * grid.size);
  let j = Math.floor(Math.random() * grid.size);
  return [i, j];
};

Grid.makeGrid = (size, random) => {
  let grid = [];
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      if (Math.random() > random) {
        row.push(new Node([i, j], i * size + j));
      } else {
        row.push(null);
      }
    }
    grid.push(row);
  }
  return grid;
};

export default Grid;
