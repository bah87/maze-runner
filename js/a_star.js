import BinaryMinHeap from './binary_heap';
import Edge from './edge';

class AStar {
  constructor(grid) {
    this.pq = new BinaryMinHeap();
    this.grid = grid;
    this.visited = new Array(grid.width * grid.height).fill(false);
    this.goalValue = grid.goalPos[0] * grid.width + grid.goalPos[1];
    this.setupPriorityQueue();
  }

  setupPriorityQueue() {
    let [startY, startX] = this.grid.startPos;
    let startNode = this.grid.array[startY][startX];
    startNode.goalPos = this.grid.goalPos;
    // startNode.costSoFar = 0;
    startNode.calcHeuristic(startNode, 0);
    this.pq.put(startNode);
  }

  traverseGrid() {
    while (this.pq.length > 0) {
      let current = this.pq.take();

      if (current.value === this.goalValue) {
        return current;
      }

      current.edgeNeighbors.forEach(neighbor => {
        let newCost = current.costSoFar + current.costToPos(neighbor);
        if (!this.visited[neighbor.value]
            || newCost < neighbor.costSoFar) {
          neighbor.calcHeuristic(current, newCost);
          neighbor.parent = current;
          this.pq.put(neighbor);
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

export default AStar;
