class Prims {
  constructor(grid) {
    this.pq = [new Node([0, 0], 0)];
    this.grid = grid;
    this.visited = [];
  }

  generate() {
    while (this.pq.length > 0 || !this.allVerticesVisited()) {
      let current = this.pq
    }
  }

  allVerticesVisited() {
    return (this.visited.length === Math.pow(this.grid.size, 2));
  }
}

export default Prims;
