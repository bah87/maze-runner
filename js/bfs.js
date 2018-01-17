const Node = require('./node.js');

class BFS {
  constructor(startPos, goalPos, grid) {
    this.queue = [new Node(startPos)];
    this.visited = {};
    this.goalPos = goalPos;
    this.grid = grid;
  }

  traverseGrid() {
    while (this.queue.length > 0) {
      let current = this.queue.shift();
      this.visited[current.pos.join("")] = true;
      if (current.pos[0] === this.goalPos[0] &&
      current.pos[1] === this.goalPos[1]) {
        return current;
      }

      current.grid = this.grid;
      current.neighbors().forEach(neighbor => {
        if (!this.queue.includes(neighbor) && !this.visited[neighbor.pos.join("")]) {
          neighbor.parent = current;
          this.queue.push(neighbor);
        }
      });
    }
  }

  traversePath() {
    let path = [this.traverseGrid()];
    // while (path.slice(-1)[0].parent) {
    //   path.push(path.slice(-1)[0].parent);
    // }

    debugger
    return path;
    // return path.map(node => { return node.pos; });
  }

  solve() {
    return this.traversePath();
  }
}

module.exports = BFS;
