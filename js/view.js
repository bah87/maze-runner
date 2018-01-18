import Grid from './grid';
import Prims from './prims';

class View {
  constructor($el, algo) {
    this.$el = $el;
    this.grid = new Grid(5);
    if (algo === "DFS") {
      this.visited = Object.keys(this.grid.dfs.visited);
      this.path = this.grid.dfs.solve();
    } else if (algo === "BFS") {
      this.visited = Object.keys(this.grid.bfs.visited);
      this.path = this.grid.bfs.solve();
    } else if (algo === "Prims") {
      this.edges = new Prims(this.grid).generate();
      debugger
    }
  }

  makeGrid() {
    let html = "";
    for (let i = 0; i < this.grid.size; i++) {
      html += "<ul>";
      for (let j = 0; j < this.grid.size; j++) {
        if (i === this.grid.startPos[0] && j === this.grid.startPos[1]) {
          html += `<li class=start></li>`;
        } else if (i === this.grid.goalPos[0] && j === this.grid.goalPos[1]) {
          html += `<li class=goal></li>`;
        } else if (this.path.includes(i * this.grid.size + j)) {
          html += `<li class=path></li>`;
        } else if (this.visited.includes(i * this.grid.size + j)) {
          html += `<li class=visited></li>`;
        } else if (this.grid.array[i][j]) {
          html += `<li class=empty></li>`;
        } else {
          html += `<li class=wall></li>`;
        }
      }
      html += "</ul>";
    }

  this.$el.html(html);
  }

  render() {
    this.makeGrid();
  }
}

export default View;
