import Node from './node';

class DepthFirstSearch {
  constructor(startPos, goalPos, grid) {
    this.stack = [new Node(startPos, startPos[0] * grid.size + startPos[1])];
    this.visited = {};
    this.goalNode = new Node(goalPos, goalPos[0] * grid.size + goalPos[1]);
    this.grid = grid;
  }

  traverseGrid() {
    while (this.stack.length > 0) {
      let current = this.stack.pop();
      this.visited[current.value] = true;
      if (current.value === this.goalNode.value) {
        return current;
      }

      current.grid = this.grid;
      current.neighbors().reverse().forEach(neighbor => {
        if (!this.stack.includes(neighbor) && !this.visited[neighbor.value]) {
          neighbor.parent = current;
          this.stack.push(neighbor);
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

export default DepthFirstSearch;
