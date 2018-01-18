import Node from './node';

class BreadthFirstSearch {
  constructor(startPos, goalPos, grid) {
    this.queue = [new Node(startPos, startPos[0] * grid.size + startPos[1])];
    this.visited = {};
    this.goalNode = new Node(goalPos, goalPos[0] * grid.size + goalPos[1]);
    this.grid = grid;
  }

  traverseGrid() {
    while (this.queue.length > 0) {
      let current = this.queue.shift();
      this.visited[current.value] = true;
      if (current.value === this.goalNode.value) {
        return current;
      }

      current.grid = this.grid;
      current.neighbors().forEach(neighbor => {
        if (!this.queue.includes(neighbor) && !this.visited[neighbor.value]) {
          neighbor.parent = current;
          this.queue.push(neighbor);
        }
      });
    }
  }

  traversePath() {
    let path = [this.traverseGrid()];
    while (path.slice(-1)[0].parent) {
      path.push(path.slice(-1)[0].parent);
    }

    return path.map(node => { return node.value; });
  }

  solve() {
    return this.traversePath();
  }
}

export default BreadthFirstSearch;
