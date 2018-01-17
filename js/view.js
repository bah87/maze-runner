const Grid = require('./grid.js');

class View {
  constructor($el) {
    this.$el = $el;
    this.grid = new Grid(50);
  }

  makeGrid() {
    let html = "";
    for (let i = 0; i < this.grid.size; i++) {
      
    }
  }

  render() {

  }
}

module.exports = View;
