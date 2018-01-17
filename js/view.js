const Grid = require('./grid.js');

class View {
  constructor($el) {
    this.$el = $el;
    this.grid = new Grid(50);
  }

  makeGrid() {
    let html = "";
    for (let i = 0; i < this.grid.size; i++) {
      html += "<ul>";
      for (let j = 0; j < this.grid.size; j++) {
        html += "<li></li>";
      }
      html += "</ul>";
    }

    this.$el.html(html);
  }

  render() {

  }
}

module.exports = View;
