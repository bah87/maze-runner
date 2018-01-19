import Node from './node';

class DepthFirstSearch {
  constructor(startPos, goalPos, grid, ctx) {
    this.stack = [grid.array[startPos[0]][startPos[1]]];
    this.visited = {};
    this.goalValue = goalPos[0] * grid.size + goalPos[1];
  }

  traverseGrid() {
    while (this.stack.length > 0) {
      let current = this.stack.pop();
      this.visited[current.value] = true;
      if (current.value === this.goalValue) {
        return current;
      }

      current.edgeNeighbors.forEach(neighbor => {
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

    return path;
  }

  solve() {
    return this.traversePath();
  }
}

export default DepthFirstSearch;
