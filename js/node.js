class Node {
  constructor(pos, parent, grid) {
    this.pos = pos;
    this.parent = parent;
    // this.neighbors = Node.getNeighbors(parent, grid);
  }
}

Node.checkDir = (parent, row, col, grid) => {
  row = parent.pos[0] + row;
  col = parent.pos[1] + col;
  return grid.array[row][col] ? new Node([row, col], parent, grid) : null;
};

Node.getNeighbors = (parent, grid) => {
  // let north = new Node([parent.pos[0] - 1, parent.pos[1]], parent);
  // let east = new Node([parent.pos[0], parent.pos[1] + 1], parent);
  // let south = new Node([parent.pos[0] + 1, parent.pos[1]], parent);
  // let west = new Node([parent.pos[0], parent.pos[1] - 1], parent);
  let north = Node.checkDir(parent, -1, 0, grid);
  let east = Node.checkDir(parent, 0, 1, grid);
  let south = Node.checkDir(parent, 1, 0, grid);
  let west = Node.checkDir(parent, 0, -1, grid);
  let possibleNeighbors = [north, east, south, west];
  return possibleNeighbors.filter(neighbor => {
    if (neighbor) { return neighbor; }
  });
};

module.exports = Node;
