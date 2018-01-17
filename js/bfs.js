const Node = require('./node.js');

class BFS {
  constructor(startPos, goalPos, grid) {
    this.queue = [new Node(startPos, null, grid)];
    this.visited = {};
    this.goalPos = goalPos;
    this.grid = grid;
  }

  traverseGrid() {
    while (this.queue.length > 0) {
      let current = this.queue.unshift();
      this.visited[current] = true;
      if (current.pos === this.goalPos) {
        this.goalNode = current;
        break;
      }

      Node.getNeighbors(current, this.grid).forEach(neighbor => {
        if (!this.queue.includes(neighbor) && !this.visited[neighbor]) {
          this.queue.push(neighbor);
        }
      });
    }
  }

  traversePath() {
    let path = [this.goalNode];
    while (path.slice(-1).parent) {
      path.push(path.slice(-1).parent);
    }

    return path.map(node => { return node.pos; });
  }

  solve() {
    this.traverseGrid();
    return this.traversePath();
  }
}

module.exports = BFS;
