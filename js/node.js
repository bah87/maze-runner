class Node {
  constructor(pos, value) {
    this.pos = pos;
    this.value = value;
    this.edgeNeighbors = [];
  }

  weight(costSoFar, goal) {
    // This is the heuristic for A*, named weight to be compatible with
    // binary heap
    return costSoFar + this.costToGoal(goal);
  }

  costToGoal(goal) {
    let [x1, y1] = this.pos;
    let [x2, y2] = goal;
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
