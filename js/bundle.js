/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var View = __webpack_require__(1);

$(function () {
  var rootEl = $('.maze-viz');
  var view = new View(rootEl);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Grid = __webpack_require__(2);

var View = function () {
  function View($el) {
    _classCallCheck(this, View);

    this.$el = $el;
    this.grid = new Grid(10);
    this.makeGrid();
    this.path = this.grid.bfs.solve();
    console.log(this.path);
  }

  _createClass(View, [{
    key: "makeGrid",
    value: function makeGrid() {
      var html = "";
      for (var i = 1; i <= this.grid.size; i++) {
        html += "<ul>";
        for (var j = 1; j <= this.grid.size; j++) {
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
  }, {
    key: "render",
    value: function render() {}
  }]);

  return View;
}();

module.exports = View;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BFS = __webpack_require__(3);
var Node = __webpack_require__(4);

var Grid = function Grid(size) {
  _classCallCheck(this, Grid);

  this.size = size;
  this.array = Grid.makeGrid(size);
  this.startPos = Grid.placeEndpoints(this);
  this.goalPos = Grid.placeEndpoints(this);
  this.bfs = new BFS(this.startPos, this.goalPos, this);
};

Grid.placeEndpoints = function (grid) {
  var i = Math.floor(Math.random() * grid.size);
  var j = Math.floor(Math.random() * grid.size);
  while (!grid.array[i][j]) {
    i = Math.floor(Math.random() * grid.size);
    j = Math.floor(Math.random() * grid.size);
  }
  return [i + 1, j + 1];
};

Grid.makeGrid = function (size) {
  var nullRow = new Array(size + 2).fill(null);
  var grid = [nullRow];
  for (var i = 0; i < size; i++) {
    var row = [null];
    for (var j = 0; j < size; j++) {
      if (Math.random() > 0.25) {
        row.push(new Node([i, j]));
      } else {
        row.push(null);
      }
    }
    row.push(null);
    grid.push(row);
  }
  grid.push(nullRow);
  return grid;
};

module.exports = Grid;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = __webpack_require__(4);

var BFS = function () {
  function BFS(startPos, goalPos, grid) {
    _classCallCheck(this, BFS);

    this.queue = [new Node(startPos)];
    this.visited = {};
    this.goalPos = goalPos;
    this.grid = grid;
  }

  _createClass(BFS, [{
    key: "traverseGrid",
    value: function traverseGrid() {
      var _this = this;

      var _loop = function _loop() {
        var current = _this.queue.shift();
        _this.visited[current.pos.join("")] = true;
        if (current.pos[0] === _this.goalPos[0] && current.pos[1] === _this.goalPos[1]) {
          return {
            v: current
          };
        }

        current.grid = _this.grid;
        current.neighbors().forEach(function (neighbor) {
          if (!_this.queue.includes(neighbor) && !_this.visited[neighbor.pos.join("")]) {
            neighbor.parent = current;
            _this.queue.push(neighbor);
          }
        });
      };

      while (this.queue.length > 0) {
        var _ret = _loop();

        if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
      }
    }
  }, {
    key: "traversePath",
    value: function traversePath() {
      var path = [this.traverseGrid()];
      // while (path.slice(-1)[0].parent) {
      //   path.push(path.slice(-1)[0].parent);
      // }

      debugger;
      return path;
      // return path.map(node => { return node.pos; });
    }
  }, {
    key: "solve",
    value: function solve() {
      return this.traversePath();
    }
  }]);

  return BFS;
}();

module.exports = BFS;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function () {
  function Node(pos) {
    _classCallCheck(this, Node);

    this.pos = pos;
  }

  _createClass(Node, [{
    key: "neighbors",
    value: function neighbors() {
      var north = void 0;var east = void 0;var west = void 0;var south = void 0;
      if (this.grid.array[this.pos[0] - 1]) {
        north = this.grid.array[this.pos[0] - 1][this.pos[1]];
      }
      if (this.grid.array[this.pos[0] + 1]) {
        south = this.grid.array[this.pos[0] + 1][this.pos[1]];
      }
      east = this.grid.array[this.pos[0]][this.pos[1] + 1];
      west = this.grid.array[this.pos[0]][this.pos[1] - 1];

      var possibleNeighbors = [north, east, south, west];
      return possibleNeighbors.filter(function (neighbor) {
        if (neighbor) {
          return neighbor;
        }
      });
    }
  }]);

  return Node;
}();

module.exports = Node;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map