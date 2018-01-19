import BinaryMinHeap from './binary_heap';
import Edge from './edge';

class AStar {
  constructor(grid) {
    this.pq = new BinaryMinHeap();
    this.grid = grid;
    this.visited = {
      bool: new Array(grid.width * grid.height).fill(false),
      pq: new BinaryMinHeap(),
      save: []
    };
    this.goalPos = this.grid.goalPos;
    this.goalValue = grid.goalPos[0] * grid.width + grid.goalPos[1];
    this.setupPriorityQueue();
  }

  setupPriorityQueue() {
    let [startY, startX] = this.grid.startPos;
    let startNode = this.grid.array[startY][startX];
    startNode.calcHeuristic(this.goalPos, 0);
    startNode.parent = null;
    this.visited.bool[startNode.value] = true;
    this.pq.put(startNode);
  }

  traverseGrid() {
    while (this.pq.length() > 1) {
      let current = this.pq.take();

      this.visited.save.push(this.visited.pq.take());

      if (current.value === this.goalValue) {
        return current;
      }

      current.edgeNeighbors.forEach(neighbor => {
        let newCost = current.costSoFar + current.costToPos(neighbor.pos);

        if (!this.visited.bool[neighbor.value]
            || newCost < neighbor.costSoFar) {
          this.visited.bool[neighbor.value] = true;
          neighbor.calcHeuristic(this.goalPos, newCost);
          neighbor.parent = current;
          this.pq.put(neighbor);

          let edge = new Edge(current, neighbor, true);
          edge.weight = neighbor.weight;
          this.visited.pq.put(edge);
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
