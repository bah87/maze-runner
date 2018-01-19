import Node from './node';
import Edge from './edge';

class BreadthOrDepthFirstSearch {
  constructor(grid, searchType) {
    this.queue = [grid.array[grid.startPos[0]][grid.startPos[1]]];
    this.visited = {
      bool: new Array(grid.width * grid.height).fill(false),
      all: [],
      save: []
    };
    this.goalValue = grid.goalPos[0] * grid.width + grid.goalPos[1];
    this.searchType = searchType;
  }

  traverseGrid() {
    while (this.queue.length > 0) {
      let current;
      if (this.searchType === "DFS") {
        current = this.queue.pop();
        this.visited.save.push(this.visited.all.pop());
      } else {
        current = this.queue.shift();
        this.visited.save.push(this.visited.all.shift());
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

    return [path, this.visited.save.slice(1)];
  }

  solve() {
    return this.traversePath();
  }
}

export default BreadthOrDepthFirstSearch;
