import BinaryMinHeap from './binary_heap';
import Edge from './edge';

class AStar {
  constructor(grid) {
    this.pq = new BinaryMinHeap();
    this.grid = grid;
    this.setupPriorityQueue();
  }

  setupPriorityQueue() {
    let [startY, startX] = this.grid.startPos;
    let startNode = this.grid.array[startY][startX];
    startNode.goalPos = this.grid.goalPos;
    startNode.costSoFar = 0;
    startNode.calcHeuristic(startNode);
    this.pq.put(startNode);
  }

  traverseGrid() {
    while (this.pq.length > 0) {
      let current = this.pq.take();

      current.edgeNeighbors.forEach(neighbor => {
        neighbor.calcHeuristic(current);
        this.pq.put(neighbor);
      });
    }
  }
}

export default AStar;
