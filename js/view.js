const Grid = require('./grid.js');

class View {
  constructor($el) {
    this.$el = $el;
    this.grid = new Grid(10);
    this.makeGrid();
    this.path = this.grid.bfs.solve();
    console.log(this.path);
  }

  makeGrid() {
    let html = "";
    for (let i = 0; i < this.grid.size; i++) {
      html += "<ul>";
      for (let j = 0; j < this.grid.size; j++) {
        if (i === this.grid.startPos[0] && j === this.grid.startPos[1]) {
          html += `<li class=start>${i * this.grid.size + j}</li>`;
        } else if (i === this.grid.goalPos[0] && j === this.grid.goalPos[1]) {
          html += `<li class=goal>${i * this.grid.size + j}</li>`;
        } else if (this.grid.array[i][j]) {
          html += `<li class=path>${i * this.grid.size + j}</li>`;
        } else {
          html += `<li class=wall>${i * this.grid.size + j}</li>`;
        }
      }
      html += "</ul>";
    }

  this.$el.html(html);
  }

  render() {

  }
}

module.exports = View;
