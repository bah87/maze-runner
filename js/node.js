class Node {
  constructor(pos, value) {
    this.pos = pos;
    this.value = value;
    this.edgeNeighbors = [];
  }

  neighbors() {
    let north; let east; let west; let south;
    if (this.grid.array[this.pos[0] - 1]) {
      north = this.grid.array[this.pos[0] - 1][this.pos[1]];
    }
    if (this.grid.array[this.pos[0] + 1]) {
      south = this.grid.array[this.pos[0] + 1][this.pos[1]];
    }
    east = this.grid.array[this.pos[0]][this.pos[1] + 1];
    west = this.grid.array[this.pos[0]][this.pos[1] - 1];

    let possibleNeighbors = [north, east, south, west];
    return possibleNeighbors.filter(neighbor => {
      if (neighbor) { return neighbor; }
    });
  }
}

export default Node;
