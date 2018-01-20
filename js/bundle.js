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
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _generate_maze = __webpack_require__(2);

var _generate_maze2 = _interopRequireDefault(_generate_maze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {
  var canvasEl = document.getElementsByTagName("canvas")[0];
  var width = 34;
  var height = 24;
  canvasEl.height = height * 20 + 40;
  canvasEl.width = width * 20 + 40;
  var maze = new _generate_maze2.default(canvasEl, width, height);
  maze.generate(canvasEl);
  var bfsClicked = false;
  var dfsClicked = false;
  var astarmClicked = false;
  var astarslClicked = false;

  $(".maze-btns").append("<button class=maze-regen>Prim's Algorithm</button>");
  $(".maze-regen").on("click", function () {
    bfsClicked = false;
    dfsClicked = false;
    astarmClicked = false;
    astarslClicked = false;
    maze.generate(canvasEl);
  });

  $(".search-btns").append("<button class=bfs>Breadth First Search</button>");
  $(".bfs").on("click", function () {
    maze.quickRegen();
    if (bfsClicked) {
      maze.quickDisplay("BFS");
    } else {
      bfsClicked = true;
      maze.displayVisited("BFS");
    }
  });

  $(".search-btns").append("<button class=dfs>Depth First Search</button>");
  $(".dfs").on("click", function () {
    maze.quickRegen();
    if (dfsClicked) {
      maze.quickDisplay("DFS");
    } else {
      dfsClicked = true;
      maze.displayVisited("DFS");
    }
  });

  $(".search-btns").append("<button class=astar-m>A* (Manhattan Heuristic)</button>");
  $(".astar-m").on("click", function () {
    maze.quickRegen();
    if (astarmClicked) {
      maze.quickDisplay("A*m");
    } else {
      astarmClicked = true;
      maze.displayVisited("A*m");
    }
  });

  $(".search-btns").append("<button class=astar-sl>A* (Straight-Line Heuristic)</button>");
  $(".astar-sl").on("click", function () {
    maze.quickRegen();
    if (astarslClicked) {
      maze.quickDisplay("A*sl");
    } else {
      astarslClicked = true;
      maze.displayVisited("A*sl");
    }
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/brendanhiggins/Desktop/MazeSolver/js/generate_maze.js'\n    at Error (native)");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map