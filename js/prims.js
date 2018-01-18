import BinaryMinHeap from './binary_heap';
import Edge from './edge';
import Node from './node';

class Prims {
  constructor(grid) {
    this.pq = new BinaryMinHeap();
    this.grid = grid;
    this.boolean = {
      length: 0,
      array: new Array(Math.pow(this.grid.size, 2)).fill(false)
    };
    this.edges = [];
  }

  generate() {
    let start = new Node([0, 0], 0);
    start.grid = this.grid;
    this.boolean[start.value] = true;
    this.boolean.length++;
    start.neighbors().forEach(neighbor => {
      this.pq.put(new Edge(start, neighbor));
    });

    while (!this.treeFull()) {
      let cheapestEdge = this.pq.take();
      if (!this.boolean[cheapestEdge.vertex2.value]) {
        cheapestEdge.vertex2.grid = this.grid;
        this.boolean[cheapestEdge.vertex2.value] = true;
        this.boolean.length++;
        this.edges.push(cheapestEdge);
        cheapestEdge.vertex2.neighbors().forEach(neighbor => {
          this.pq.put(new Edge(cheapestEdge.vertex2, neighbor));
        });
      }
    }

    return this.edges;
  }

  treeFull() {
    return (this.boolean.length === this.boolean.array.length);
  }
}

export default Prims;
