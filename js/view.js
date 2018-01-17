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
        if (this.grid.array[i][j]) {
          html += "<li class=path></li>";
        } else if ([]) {
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
