import Node from './node';
import Edge from './edge';

class BreadthOrDepthFirstSearch {
  constructor(startPos, goalPos, grid, ctx, search) {
    this.queue = [grid.array[startPos[0]][startPos[1]]];
    this.visited = {
      bool: new Array(Math.pow(grid.size, 2)).fill(false),
      all: [],
      save: []
    };
    this.goalValue = goalPos[0] * grid.size + goalPos[1];
    this.search = search;
  }

  traverseGrid() {
    while (this.queue.length > 0) {
      let current;
      if (this.search === "DFS") {
        current = this.queue.pop();
      } else {
        current = this.queue.shift();
      }
      this.visited.bool[current.value] = true;
      if (current.value === this.goalValue) {
        return current;
      }

      current.edgeNeighbors.forEach(neighbor => {
        if (!this.queue.includes(neighbor)
            && !this.visited.bool[neighbor.value]) {

          this.visited.all.push(new Edge(current, neighbor, true));

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

    return [path, this.visited.arr.slice(1)];
  }

  solve() {
    return this.traversePath();
  }
}

export default BreadthOrDepthFirstSearch;
