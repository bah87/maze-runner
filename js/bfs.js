import Node from './node';

class BreadthFirstSearch {
  constructor(startPos, goalPos, grid) {
    this.queue = [grid.array[startPos[0]][startPos[1]]];
    this.visited = {};
    this.goalValue = goalPos[0] * grid.size + goalPos[1];
  }

  traverseGrid() {
    while (this.queue.length > 0) {
      let current = this.queue.shift();
      this.visited[current.value] = true;
      if (current.value === this.goalValue) {
        return current;
      }

      current.edgeNeighbors.forEach(neighbor => {
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

    return path;
    // return path.map(node => { return node.value; });
  }

  solve() {
    return this.traversePath();
  }
}

export default BreadthFirstSearch;
