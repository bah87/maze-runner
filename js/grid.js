import Node from './node';

class Grid {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.array = Grid.makeGrid(width, height);
    this.startPos = Grid.placeEndpoints(this);
    this.goalPos = Grid.placeEndpoints(this);
  }
}

Grid.placeEndpoints = grid => {
  let i = Math.floor(Math.random() * grid.height);
  let j = Math.floor(Math.random() * grid.width);
  return [i, j];
};

Grid.makeGrid = (width, height) => {
  let grid = [];
  for (let i = 0; i < height; i++) {
    let row = [];
    for (let j = 0; j < width; j++) {
      row.push(new Node([i, j], i * width + j));
    }
    grid.push(row);
  }
  return grid;
};

export default Grid;
