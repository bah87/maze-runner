class BFS {
  constructor(startPos, goalPos) {
    this.queue = [new Node(startPos, null)];
    this.visited = {};
    this.goalPos = goalPos;
  }

  traverseGrid() {
    while (this.queue.length > 0) {
      let current = this.queue.unshift();
      this.visited[current] = true;
      if (current.pos === this.goalPos) { break; }

      Node.getNeighbors(current).forEach(neighbor => {
        if (!this.queue.includes(neighbor) || !this.visited[neighbor]) {
          this.queue.push(neighbor);
        }
      });
    }
  }

  traversePath() {
    let path = [this.goalNode];
    while (path.slice(-1).parent) {
      path.push(path.slice(-1).parent);
    }

    return path.map(node => { return node.pos; });
  }
}

class Node {
  constructor(pos, parent) {
    this.pos = pos;
    this.parent = parent;
  }
}

Node.getNeighbors = parent => {
  let north = new Node([parent.pos[0] - 1, parent.pos[1]], parent);
  let east = new Node([parent.pos[0], parent.pos[1] + 1], parent);
  let south = new Node([parent.pos[0] + 1, parent.pos[1]], parent);
  let west = new Node([parent.pos[0], parent.pos[1] - 1], parent);
  return [north, east, south, west];
};
