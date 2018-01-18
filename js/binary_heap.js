class BinaryMaxHeap {
  constructor() {
    this.pq = [];
  }

  insert(edge) {
    this.pq.push(edge);
    this.bubble();
  }

  bubble() {
    let newIdx = this.pq.length - 1;
    let parentIdx = Math.floor(newIdx/2);
    while (this.pq[newIdx].weight > this.pq[parentIdx].weight) {
      [this.pq[newIdx], this.pq[parentIdx]] =
        [this.pq[parentIdx], this.pq[newIdx]];
      newIdx = parentIdx;
      parentIdx = Math.floor(newIdx/2);
    }
  }

  remove() {
    let max = this.pq.shift();
    this.sink();
    return max;
  }
}
