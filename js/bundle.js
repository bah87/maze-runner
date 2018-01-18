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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function () {
  function Node(pos, value) {
    _classCallCheck(this, Node);

    this.pos = pos;
    this.value = value;
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

exports.default = Node;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _view = __webpack_require__(2);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {
  var mazeOne = $('.maze-viz-1');
  // const mazeTwo = $('.maze-viz-2');
  var viewOne = new _view2.default(mazeOne, "Prims");
  // const viewTwo = new View(mazeTwo, "DFS");
  viewOne.render();
  // viewTwo.render();
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _grid = __webpack_require__(3);

var _grid2 = _interopRequireDefault(_grid);

var _prims = __webpack_require__(6);

var _prims2 = _interopRequireDefault(_prims);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
  function View($el, algo) {
    _classCallCheck(this, View);

    this.$el = $el;
    this.grid = new _grid2.default(5);
    if (algo === "DFS") {
      this.visited = Object.keys(this.grid.dfs.visited);
      this.path = this.grid.dfs.solve();
    } else if (algo === "BFS") {
      this.visited = Object.keys(this.grid.bfs.visited);
      this.path = this.grid.bfs.solve();
    } else if (algo === "Prims") {
      this.edges = new _prims2.default(this.grid).generate();
      debugger;
    }
  }

  _createClass(View, [{
    key: 'makeGrid',
    value: function makeGrid() {
      var html = "";
      for (var i = 0; i < this.grid.size; i++) {
        html += "<ul>";
        for (var j = 0; j < this.grid.size; j++) {
          if (i === this.grid.startPos[0] && j === this.grid.startPos[1]) {
            html += '<li class=start></li>';
          } else if (i === this.grid.goalPos[0] && j === this.grid.goalPos[1]) {
            html += '<li class=goal></li>';
          } else if (this.path.includes(i * this.grid.size + j)) {
            html += '<li class=path></li>';
          } else if (this.visited.includes(i * this.grid.size + j)) {
            html += '<li class=visited></li>';
          } else if (this.grid.array[i][j]) {
            html += '<li class=empty></li>';
          } else {
            html += '<li class=wall></li>';
          }
        }
        html += "</ul>";
      }

      this.$el.html(html);
    }
  }, {
    key: 'render',
    value: function render() {
      this.makeGrid();
    }
  }]);

  return View;
}();

exports.default = View;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bfs = __webpack_require__(4);

var _bfs2 = _interopRequireDefault(_bfs);

var _dfs = __webpack_require__(5);

var _dfs2 = _interopRequireDefault(_dfs);

var _node = __webpack_require__(0);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Grid = function Grid(size) {
  _classCallCheck(this, Grid);

  this.size = size;
  this.array = Grid.makeGrid(size, -1);
  this.startPos = Grid.placeEndpoints(this);
  this.goalPos = Grid.placeEndpoints(this);
  this.bfs = new _bfs2.default(this.startPos, this.goalPos, this);
  this.dfs = new _dfs2.default(this.startPos, this.goalPos, this);
};

Grid.placeEndpoints = function (grid) {
  var i = Math.floor(Math.random() * grid.size);
  var j = Math.floor(Math.random() * grid.size);
  while (!grid.array[i][j]) {
    i = Math.floor(Math.random() * grid.size);
    j = Math.floor(Math.random() * grid.size);
  }
  return [i, j];
};

Grid.makeGrid = function (size, random) {
  var grid = [];
  for (var i = 0; i < size; i++) {
    var row = [];
    for (var j = 0; j < size; j++) {
      if (Math.random() > random) {
        row.push(new _node2.default([i, j], i * size + j));
      } else {
        row.push(null);
      }
    }
    grid.push(row);
  }
  return grid;
};

exports.default = Grid;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _node = __webpack_require__(0);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BreadthFirstSearch = function () {
  function BreadthFirstSearch(startPos, goalPos, grid) {
    _classCallCheck(this, BreadthFirstSearch);

    this.queue = [new _node2.default(startPos, startPos[0] * grid.size + startPos[1])];
    this.visited = {};
    this.goalNode = new _node2.default(goalPos, goalPos[0] * grid.size + goalPos[1]);
    this.grid = grid;
  }

  _createClass(BreadthFirstSearch, [{
    key: 'traverseGrid',
    value: function traverseGrid() {
      var _this = this;

      var _loop = function _loop() {
        var current = _this.queue.shift();
        _this.visited[current.value] = true;
        if (current.value === _this.goalNode.value) {
          return {
            v: current
          };
        }

        current.grid = _this.grid;
        current.neighbors().forEach(function (neighbor) {
          if (!_this.queue.includes(neighbor) && !_this.visited[neighbor.value]) {
            neighbor.parent = current;
            _this.queue.push(neighbor);
          }
        });
      };

      while (this.queue.length > 0) {
        var _ret = _loop();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }
    }
  }, {
    key: 'traversePath',
    value: function traversePath() {
      var path = [this.traverseGrid()];
      while (path.slice(-1)[0].parent) {
        path.push(path.slice(-1)[0].parent);
      }

      return path.map(function (node) {
        return node.value;
      });
    }
  }, {
    key: 'solve',
    value: function solve() {
      return this.traversePath();
    }
  }]);

  return BreadthFirstSearch;
}();

exports.default = BreadthFirstSearch;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _node = __webpack_require__(0);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DepthFirstSearch = function () {
  function DepthFirstSearch(startPos, goalPos, grid) {
    _classCallCheck(this, DepthFirstSearch);

    this.stack = [new _node2.default(startPos, startPos[0] * grid.size + startPos[1])];
    this.visited = {};
    this.goalNode = new _node2.default(goalPos, goalPos[0] * grid.size + goalPos[1]);
    this.grid = grid;
  }

  _createClass(DepthFirstSearch, [{
    key: 'traverseGrid',
    value: function traverseGrid() {
      var _this = this;

      var _loop = function _loop() {
        var current = _this.stack.pop();
        _this.visited[current.value] = true;
        if (current.value === _this.goalNode.value) {
          return {
            v: current
          };
        }

        current.grid = _this.grid;
        current.neighbors().reverse().forEach(function (neighbor) {
          if (!_this.stack.includes(neighbor) && !_this.visited[neighbor.value]) {
            neighbor.parent = current;
            _this.stack.push(neighbor);
          }
        });
      };

      while (this.stack.length > 0) {
        var _ret = _loop();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }
    }
  }, {
    key: 'traversePath',
    value: function traversePath() {
      var path = [this.traverseGrid()];
      while (path.slice(-1)[0].parent) {
        path.push(path.slice(-1)[0].parent);
      }

      return path.map(function (node) {
        return node.value;
      });
    }
  }, {
    key: 'solve',
    value: function solve() {
      return this.traversePath();
    }
  }]);

  return DepthFirstSearch;
}();

exports.default = DepthFirstSearch;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _binary_heap = __webpack_require__(7);

var _binary_heap2 = _interopRequireDefault(_binary_heap);

var _edge = __webpack_require__(8);

var _edge2 = _interopRequireDefault(_edge);

var _node = __webpack_require__(0);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Prims = function () {
  function Prims(grid) {
    _classCallCheck(this, Prims);

    this.pq = new _binary_heap2.default();
    this.grid = grid;
    this.boolean = {
      length: 0,
      array: new Array(Math.pow(this.grid.size, 2)).fill(false)
    };
    this.edges = [];
  }

  _createClass(Prims, [{
    key: 'generate',
    value: function generate() {
      var _this = this;

      var start = new _node2.default([0, 0], 0);
      start.grid = this.grid;
      this.boolean[start.value] = true;
      this.boolean.length++;
      start.neighbors().forEach(function (neighbor) {
        _this.pq.put(new _edge2.default(start, neighbor));
      });

      var _loop = function _loop() {
        var cheapestEdge = _this.pq.take();
        if (!_this.boolean[cheapestEdge.vertex2.value]) {
          cheapestEdge.vertex2.grid = _this.grid;
          _this.boolean[cheapestEdge.vertex2.value] = true;
          _this.boolean.length++;
          _this.edges.push(cheapestEdge);
          cheapestEdge.vertex2.neighbors().forEach(function (neighbor) {
            _this.pq.put(new _edge2.default(cheapestEdge.vertex2, neighbor));
          });
        }
      };

      while (!this.treeFull()) {
        _loop();
      }

      return this.edges;
    }
  }, {
    key: 'treeFull',
    value: function treeFull() {
      return this.boolean.length === this.boolean.array.length;
    }
  }]);

  return Prims;
}();

exports.default = Prims;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BinaryMinHeap = function () {
  function BinaryMinHeap() {
    _classCallCheck(this, BinaryMinHeap);

    this.pq = [null];
  }

  _createClass(BinaryMinHeap, [{
    key: "put",
    value: function put(edge) {
      this.pq.push(edge);
      if (this.pq.length > 2) {
        this.bubble();
      }
    }
  }, {
    key: "take",
    value: function take() {
      if (this.pq.length === 2) {
        return this.pq.pop();
      } else if (this.pq.length > 2) {
        var min = this.pq[1];
        this.pq[1] = this.pq.pop();
        this.sink();
        return min;
      }
    }
  }, {
    key: "bubble",
    value: function bubble() {
      var newIdx = this.pq.length - 1;
      var parentIdx = Math.floor(newIdx / 2);
      while (this.pq[newIdx].weight < this.pq[parentIdx].weight) {
        var _ref = [this.pq[parentIdx], this.pq[newIdx]];
        this.pq[newIdx] = _ref[0];
        this.pq[parentIdx] = _ref[1];

        newIdx = parentIdx;
        if (newIdx === 1) {
          break;
        }
        parentIdx = Math.floor(newIdx / 2);
      }
    }
  }, {
    key: "sink",
    value: function sink() {
      var idx = 1;
      var c1 = 2;
      var c2 = 3;

      while (this.pq[c1]) {
        if (this.pq[c2]) {
          if (this.pq[c2].weight < this.pq[c1].weight && this.pq[c2].weight < this.pq[idx].weight) {
            var _ref2 = [this.pq[idx], this.pq[c2]];
            this.pq[c2] = _ref2[0];
            this.pq[idx] = _ref2[1];

            idx = c2;
          } else if (this.pq[c1].weight < this.pq[idx].weight) {
            var _ref3 = [this.pq[idx], this.pq[c1]];
            this.pq[c1] = _ref3[0];
            this.pq[idx] = _ref3[1];

            idx = c1;
          } else {
            break;
          }
        } else if (this.pq[c1].weight < this.pq[idx].weight) {
          var _ref4 = [this.pq[idx], this.pq[c1]];
          this.pq[c1] = _ref4[0];
          this.pq[idx] = _ref4[1];

          idx = c1;
        } else {
          break;
        }

        c1 = idx * 2;
        c2 = idx * 2 + 1;
      }
    }
  }]);

  return BinaryMinHeap;
}();

exports.default = BinaryMinHeap;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Edge = function Edge(vertex1, vertex2) {
  _classCallCheck(this, Edge);

  this.vertex1 = vertex1;
  this.vertex2 = vertex2;
  this.weight = Math.random();
};

exports.default = Edge;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map