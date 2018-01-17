const Grid = require('./grid.js');

class View {
  constructor($el) {
    this.$el = $el;
    this.grid = new Grid(50);
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
          html += "<li class=start></li>";
        } else if (i === this.grid.goalPos[0] && j === this.grid.goalPos[1]) {
          html += "<li class=goal></li>";
        } else if (this.grid.array[i][j]) {
          html += "<li class=path></li>";
        } else {
          html += "<li class=wall></li>";
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
