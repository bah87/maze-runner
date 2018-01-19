class Node {
  constructor(pos, value) {
    this.pos = pos;
    this.value = value;
    this.edgeNeighbors = [];
  }

  calcHeuristic(goalPos, costSoFar) {
    // This is the heuristic for A*
    // Setting this.weight to result to be compatible with binary heap
    this.costSoFar = costSoFar;
    this.weight = this.costSoFar + this.costToPos(goalPos);
    return this.weight;
  }

  costToPos(pos) {
    let [y1, x1] = this.pos;
    let [y2, x2] = pos;
    let aSquared = Math.pow(x2 - x1, 2);
    let bSquared = Math.pow(y2 - y1, 2);
    return Math.pow(aSquared + bSquared, 0.5);
  }

  neighbors() {
    let north; let east; let west; let south;
    let [y, x] = this.pos;
    if (this.grid.array[y - 1]) {
      north = this.grid.array[y - 1][x];
    }
    if (this.grid.array[y + 1]) {
      south = this.grid.array[y + 1][x];
    }
    east = this.grid.array[y][x + 1];
    west = this.grid.array[y][x - 1];

    let possibleNeighbors = [north, east, south, west];
    return possibleNeighbors.filter(neighbor => {
      if (neighbor) { return neighbor; }
    });
  }
}

export default Node;
