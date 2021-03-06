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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/Game */ "./src/scripts/Game.js");
/* harmony import */ var _scripts_Controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/Controls */ "./src/scripts/Controls.js");
/* harmony import */ var _scripts_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/Player */ "./src/scripts/Player.js");
/* harmony import */ var _scripts_ScoreTracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/ScoreTracker */ "./src/scripts/ScoreTracker.js");
/* harmony import */ var _scripts_Background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/Background */ "./src/scripts/Background.js");







const gameField = document.querySelector('#game');
const healthBar = document.querySelector('#player-health div');
const healthBarText = document.querySelector('#health-points');
const strengthBar = document.querySelector('#player-strength div');
const strengthBarText = document.querySelector('#strength-points');
const score = document.querySelector('#score');
const restartButton = document.querySelector('#play-again');
const hi_scores = document.querySelector('#hi-scores-list');
const bgMusic = document.querySelector('#bgMusic');
const soundRage = document.querySelector('#sound-rage');

restartButton.addEventListener('click', event => {
  event.preventDefault();
  location.reload();
});

// changes gamestate and removed overlay
const startButton = document.querySelector('#startbutton')

startButton.addEventListener('click', () => {
  bgMusic.play();
  gameState = 1
  document.getElementById("start-overlay").style.display = "none";
  game.start();
});
 
// Globals
let player;
let game;
let controls;
let scoreTracker;

// set timer for rage duration
let rageTimer;
let rageElapsedTime = 0;

// game will run  
let gameState = 0;

function initialize() {
  player = new _scripts_Player__WEBPACK_IMPORTED_MODULE_2__["default"]();

  scoreTracker = new _scripts_ScoreTracker__WEBPACK_IMPORTED_MODULE_3__["default"]();
  
  for (let i = 0; i < scoreTracker.savedScores.length; i++ ) {
      let item = document.createElement("li");
      item.innerHTML = scoreTracker.savedScores[i].score;
      hi_scores.appendChild(item);
  }

  scoreTracker.onScoreUpdate(newScore => {score.innerText = newScore});

  // This can be used to change game state and such too. Also trigger game over screen
  player.onDeath(() => {
    game.stop();

    document.getElementById("end-overlay").style.display = "grid";
    document.getElementById("current-score").innerText = "SCORE: " + scoreTracker.currentScore;
  })

  player.onHealthChange(health => {
    healthBar.style.width = health + '%';
    healthBarText.innerText = health;
  });

  controls = new _scripts_Controls__WEBPACK_IMPORTED_MODULE_1__["default"]({KeyW: 'up', KeyA: 'left', KeyS: 'down', KeyD: 'right', Space: 'attack'});
  controls.addEvent('keyup', 'KeyA', () => player.endAnimations('walking'));
  controls.addEvent('keyup', 'KeyD', () => player.endAnimations('walking'));
  controls.addEvent('keyup', 'KeyW', () => player.endAnimations('walking'));
  controls.addEvent('keyup', 'KeyS', () => player.endAnimations('walking'));

  game = new _scripts_Game__WEBPACK_IMPORTED_MODULE_0__["default"](gameField, player, _scripts_Background__WEBPACK_IMPORTED_MODULE_4__["default"], scoreTracker);


  requestAnimationFrame(tick);
}


function update() {

  if (gameState === 1) {
    if (controls.isPressed('attack')) {
      game.playerAttack();
    }
    if (controls.isPressed('up')) {
      game.movePlayer('up');
    }
    if (controls.isPressed('down')) {
      game.movePlayer('down');
    }
    if (controls.isPressed('left')) {
      game.movePlayer('left');
    }
    if (controls.isPressed('right')) {
      game.movePlayer('right');
    }
    
    if (player.strength == 100 && player.rageMode == false) {
      soundRage.play();
      rageTimer = setInterval(() => { rageElapsedTime++; }, 1000);
      strengthBarText.innerText = "RAGE MODE";
      strengthBar.classList.add("glowing");
      player.rageMode = true;
    } else if (player.strength < 100) {
      strengthBarText.innerText = player.strength + "/100";
      strengthBar.classList.remove("glowing");
    }
  
    strengthBar.style.width = player.strength + '%';
    
    if (rageElapsedTime >= player.rageDuration) {
      clearInterval(rageTimer);
      rageElapsedTime = 0;
      player.strength = 50;
      player.rageMode = false;
    }

    game.update();
  }
}



function draw() {
  player.draw();
  game.draw();
}

function tick(){
  update();
  draw();
  requestAnimationFrame(tick);
}

initialize();


/***/ }),

/***/ "./src/scripts/Background.js":
/*!***********************************!*\
  !*** ./src/scripts/Background.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const background = {
  layers: {
    ring: {
      element: document.getElementById('playableArea'),
      position: 0,
      speed: 5,
    },
    crowd: {
      element: document.getElementById('background'),
      position: 0,
      speed: 4,
    },
  }, 
  right: function() {
    Object.values(this.layers).forEach(layer => {
      layer.position = (layer.position + layer.speed);   
    });
  },
  left: function() {
    Object.values(this.layers).forEach(layer => {
      layer.position = (layer.position - layer.speed);   
    });
  },
  draw: function() {
    this.layers.ring.element.style.backgroundPositionX = this.layers.ring.position + 'px';
    this.layers.crowd.element.style.backgroundPositionX = this.layers.crowd.position + 'px';
  }
}

/* harmony default export */ __webpack_exports__["default"] = (background);

/***/ }),

/***/ "./src/scripts/Character.js":
/*!**********************************!*\
  !*** ./src/scripts/Character.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ "./src/scripts/Entity.js");


class Character extends _Entity__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(spriteClass) {
    super(450, 400, 55, 136, spriteClass);

    this.spriteOffsetX = 72;
    this.spriteOffsetY = 64;

    this.footHeight = 25;

    this.speed = 9;

    this.weapon = 'hammer';
    this.attackCoolingDown = false;
    this.attacking = false;
    this.direction = 'right';

    this.health = 100;
    this.strength = 100;
    this.dead = false;

    this.attackCooldown = 700;

    this.soundPunch = document.querySelector('#sound-punch');

    if (process.env.DEVELOPMENT) {
      this.footbox = document.createElement('div');
      this.footbox.style = `position: absolute; border: 1px solid green; width: ${this.feet.width}px; height: ${this.feet.height}px`;
    }
  }

  get feet() {
    return {
      x: this.x,
      y: this.y + this.height - this.footHeight,
      height: this.footHeight,
      width: this.width
    };
  }

  draw() {
    super.draw();
    this.element.style.left = this.x - this.spriteOffsetX + 'px';
    this.element.style.top = this.y - this.spriteOffsetY + 'px';
    this.element.style.zIndex = this.y;

    if (process.env.DEVELOPMENT) {
      this.footbox.style = `position: absolute; border: 1px solid green; width: ${this.feet.width}px; height: ${this.feet.height}px`;
      this.footbox.style.left = this.feet.x + 'px';
      this.footbox.style.top = this.feet.y + 'px';
    }
  }

  attack(opponents, animationClass) {
    let result = {
      hits: 0,
      misses: 0,
      kills: 0
    };

    if (this.dead) return result;

    if (this.weapon === 'hammer' && !this.attackCoolingDown && !this.attacking) {
      setTimeout( () => {

        opponents.forEach(opponent => {

          console.log("hammer");

          // check distances and determine hits
          if (opponent) {
            const dx = this.x - opponent.x;
            const dy = this.y - opponent.y;
  
            if ((Math.abs(dx) < 100 && Math.abs(dy) < 40) &&
              (dx < 0 && this.direction === 'right' || dx > 0 && this.direction === 'left')) {
              if(opponent.takeHit(this.strength) === 'killed') {
                (this.strength + 10 <= 100) ? this.strength += 10 : this.strength = 100;
                result.kills++;
              } else {
                result.hits++;
              }
            } else {
              result.misses++;
            }
          }
        
      })}, 300);
    } else {

    opponents.forEach(opponent => {
      if (!this.attackCoolingDown && !this.attacking) {

        // check distances and determine hits
        if (opponent) {
          const dx = this.x - opponent.x;
          const dy = this.y - opponent.y;

          if ((Math.abs(dx) < 100 && Math.abs(dy) < 40) &&
            (dx < 0 && this.direction === 'right' || dx > 0 && this.direction === 'left')) {
            if(opponent.takeHit(this.strength) === 'killed') {
              if (this.strength < 100) { this.strength = Math.min(this.strength + 10, 100) };
              result.kills++;
            } else {
              result.hits++;
            }
          } else {
            result.misses++;
          }
        }
      }
    });
  
  }

    if(this.strength === 100) {
      this.weapon = 'hammer';
      if (!(this.element.classList.contains('hasHammer'))){
        this.element.classList.add('hasHammer');
      }
      animationClass = 'hammer';
    } else {
      this.weapon = 'fist';
      if (this.element.classList.contains('hasHammer')){
        this.element.classList.remove('hasHammer');
      }
      animationClass = 'punch';
    }
    

    this.attackCoolingDown = true;
    this.attacking = true;

    this.runAnimation(animationClass, () => {
      this.attacking = false;
      setTimeout(() => {
        this.attackCoolingDown = false;
      }, this.attackCooldown);
    });

    return result;
  }

  takeHit(damage) {
    const oldHealth = this.health;
    this.soundPunch.play();
    this.health -= damage;
    if(this.health < 0) this.health = 0;
    if (oldHealth > 0 && this.health <= 0) {
      this.die();
      return 'killed';
    } else {
      this.runAnimation('takeHit');
      return 'hit';
    }
  }

  die() {
    this.dead = true;
    this.health = 0; // Prevents negative health values
    this.endAnimations('takeHit', 'punch');
    this.startAnimations('fall');
  }

  runAnimation(animation, callback) {
    this.startAnimations(animation);

    const animationEndHandler = event => {
      if (event.animationName === animation) {
        callback && callback();
        this.endAnimations(animation);
        this.element.removeEventListener('animationend', animationEndHandler);
      }
    }

    this.element.addEventListener('animationend', animationEndHandler);
  }

  startAnimations(...classes) {
    this.element.classList.add(...classes);
  }

  endAnimations(...classes) {
    this.element.classList.remove(...classes);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Character);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/scripts/Controls.js":
/*!*********************************!*\
  !*** ./src/scripts/Controls.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Controls {
  constructor(controls) {
    this.controls = controls;

    this.controlState = Object.values(this.controls).reduce((acc, controlName) => {
      acc[controlName] = 0;
      return acc;
    }, {undefined: 0});

    this.controlEvents = {
      keyup: {},
      keydown: {}
    }

    // Add event listeners for keys
    document.addEventListener('keydown', event => {
      event.preventDefault();
      this.controlState[this.controls[event.code]] = 1;
      if (this.controlEvents.keydown[event.code]) {
        this.controlEvents.keydown[event.code].forEach(cb => cb());
      }
    });

    document.addEventListener('keyup', event => {
      this.controlState[this.controls[event.code]] = 0;
      if (this.controlEvents.keyup[event.code]) {
        this.controlEvents.keyup[event.code].forEach(cb => cb());
      }
    });
  }

  isPressed(control) {
    return this.controlState[control];
  }

  addEvent(keyDirection, keyCode, cb) {
    // Set up array of callbacks if it doesn't exist
    if (!this.controlEvents[keyDirection][keyCode]) {
      this.controlEvents[keyDirection][keyCode] = [cb];
    } else {
      this.controlEvents[keyDirection][keyCode].push(cb);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Controls);


/***/ }),

/***/ "./src/scripts/Enemy.js":
/*!******************************!*\
  !*** ./src/scripts/Enemy.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ "./src/scripts/Character.js");


class Enemy extends _Character__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x, y) {
    super('clown');

    this.x = x;
    this.y = y;
    this.footHeight = 38;
    this.speed = 2;
    this.strength = 35;
    this.directionBias;

    this.preparingToAttack = false;
    this.preparingToAttackTimeout = null;

    this.strength = Math.floor(Math.random() * 20) + 28;
  }

  attack(player) {
    if (!this.preparingToAttack) {
      this.preparingToAttack = true;

      // Time before attack
      const randomAttackTime = Math.floor(Math.random() * Math.floor(900)) + 200;

      this.preparingToAttackTimeout = setTimeout(() => {
        this.preparingToAttack = false;
        if (player.dead){
          super.attack([player], 'kick');
        } else {
        super.attack([player], 'punch');
        }
      }, randomAttackTime);
    }
  }

  resetAttack() {
    clearTimeout(this.preparingToAttackTimeout);
    this.preparingToAttackTimeout = null;
    this.preparingToAttack = null;
  }

  takeHit(damage) {
    // enemy can't attack or move while being hurt
    this.resetAttack();

    if (this.speed > 0) {
      const oldSpeed = this.speed;
      this.speed = 0;
      setTimeout(() => {
        this.speed = oldSpeed;
      }, 800)
    }
    return super.takeHit(damage);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Enemy);

/***/ }),

/***/ "./src/scripts/EnemySpawner.js":
/*!*************************************!*\
  !*** ./src/scripts/EnemySpawner.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enemy */ "./src/scripts/Enemy.js");


class EnemySpawner {
  constructor(game, player, viewWidth, leftBoundary, rightBoundary, topBoundary, bottomBoundary) {
    this.game = game;
    this.player = player;
    this.viewWidth = viewWidth;
    this.leftBoundary = leftBoundary;
    this.rightBoundary = rightBoundary;
    this.topBoundary = topBoundary;
    this.bottomBoundary = bottomBoundary;

    this.queue = [];
    this.nextSpawn = 3000;
    this.enemyAddTimeout;
    this.shouldSpawn = false;

    this.startSpawnTimeout();
    this.spawnedEnemies = 0;
    this.spawnAmount = 1;
  }

  spawnQueue() {
    const enemiesToSpawn = this.queue;
    this.spawnedEnemies += this.queue.length;
    this.queue = [];

    return enemiesToSpawn;
  }

  addEnemiesToQueue(amount) {
    for(let i = 0; i < amount; i++) {
      let x;
      let y;
      let enemy;

      do {
        const minX = this.leftBoundary + this.game.xOffset;
        const maxX = this.rightBoundary + this.game.xOffset;

        x = Math.floor(Math.random() * (minX - maxX)) + maxX;
        y = Math.floor(Math.random() * (this.topBoundary - this.bottomBoundary)) + this.bottomBoundary;
        enemy = new _Enemy__WEBPACK_IMPORTED_MODULE_0__["default"](x, y)
      } while (this.game.hasCollisions(enemy.feet) || this.game.isColliding(this.player.feet, enemy.feet));

      this.queue.push(enemy);
    }
  }

  startSpawnTimeout(amount) {
    return setTimeout(() => {
      if (this.shouldSpawn)  {
        this.spawnAmount += .02;
        this.addEnemiesToQueue(Math.floor(this.spawnAmount));
        this.startSpawnTimeout();
      }
    }, this.nextSpawn);
  }

  startSpawning() {
    this.shouldSpawn = true;
  }

  stopSpawning() {
    this.shouldSpawn = false;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (EnemySpawner);

/***/ }),

/***/ "./src/scripts/Entity.js":
/*!*******************************!*\
  !*** ./src/scripts/Entity.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {class Entity {
  constructor(x, y, width, height, spriteSheetClass) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;

    this.element = document.createElement('div');
    this.element.classList.add(spriteSheetClass);
    this.element.style.left = this.x;
    this.element.style.top = this.y;

    if (process.env.DEVELOPMENT) {
      this.hitbox = document.createElement('div');
      this.hitbox.style = `position: absolute; border: 1px solid blue; width: ${this.width}px; height: ${this.height}px`;
    }
  }

  get midX() {
    return this.x + this.width / 2;
  }

  get midY() {
    return this.y + this.height / 2;
  }

  get halfHeight() {
    return this.height / 2;
  }

  get halfWidth() {
    return this.width / 2;
  }

  get left() {
    return this.x;
  }

  get right() {
    return this.x + this.width
  }

  get top() {
    return this.x;
  }

  get bottom() {
    return this.y + this.height;
  }

  draw() {
    this.element.style.left = this.x + 'px';
    this.element.style.top = this.y + 'px';

    if (process.env.DEVELOPMENT) {
      this.hitbox.style.left = this.x + 'px';
      this.hitbox.style.top = this.y + 'px';
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Entity);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/scripts/Game.js":
/*!*****************************!*\
  !*** ./src/scripts/Game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _EnemySpawner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnemySpawner */ "./src/scripts/EnemySpawner.js");
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ "./src/scripts/level.js");



class World {
  constructor(gameField, player, background, scoreTracker) {
    this.width = 1360;
    this.height = 707;
    this.xOffset = 0;
    this.playAreaTop = 230; // Top of walkable area
    this.playAreaBottom = this.playAreaTop + 348; // Bottom of walkable area

    this.gameStopped = true;

    this.background = background;
    this.scoreTracker = scoreTracker;

    this.playFieldObjects = [];
    this.enemies = [];

    // Sets up gamefield 
    this.gameField = gameField;
    this.gameField.style.height = this.height + 'px';
    this.gameField.style.width = this.width + 'px';

    _level__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(entity => {
      this.registerObject(entity);
    })

    // Sets up player
    this.player = player;
    gameField.appendChild(player.element);
    if (process.env.DEVELOPMENT) {
      gameField.appendChild(player.footbox);
      gameField.appendChild(player.hitbox);
    }

    // left and right are in level.js, on the walls
    this.enemySpawner = new _EnemySpawner__WEBPACK_IMPORTED_MODULE_0__["default"](this, this.player, this.width, -900, 1900, this.playAreaTop, this.playAreaBottom);

    while (this.hasCollisions(player.feet)) {
      this.player.x = Math.floor(Math.random() * (200 - 900)) + 900;
      this.player.y = Math.floor(Math.random() * (300 - 400)) + 400;
    }
  }

  start() {
    this.enemySpawner.startSpawning();
    this.scoreTracker.startTracking();
    this.gameStopped = false;
  }

  stop() {
    this.enemySpawner.stopSpawning();
    this.scoreTracker.endTracking();
    this.gameStopped = true;
  }

  update() {
    const player = this.player;

    // Update enemies
    this.enemies.forEach((enemy, index) => {
      if (enemy.dead) return;

      const currentPosition = {
        x: enemy.x,
        y: enemy.y
      }

      enemy.startAnimations('walking');

      const dx = enemy.x - player.x;

      if (dx < 0) {
        enemy.startAnimations('facing-left');
        enemy.direction = 'right';
      } else {
        enemy.endAnimations('facing-left');
        enemy.direction = 'left';
      }

      if (dx > enemy.width) {
        enemy.x -= enemy.speed;
      } else if (dx < -enemy.width) {
        enemy.x += enemy.speed;
      }

      if (this.hasCollisions(enemy.feet, index) || this.isColliding(enemy.feet, player.feet)) {
        enemy.x = currentPosition.x;
      }

      const dy = enemy.y - player.y;
      if (dy > 4) {
        enemy.y -= enemy.speed;
      } else if (dy < -4) {
        enemy.y += enemy.speed;
      }

      if (this.hasCollisions(enemy.feet, index) || this.isColliding(enemy.feet, player.feet)) {
        enemy.y = currentPosition.y;
      }

      if (enemy.x === currentPosition.x && enemy.y === currentPosition.y) {
        enemy.endAnimations('walking');
      }

      if (Math.abs(dx) < 60 && Math.abs(dy) < 40) {
        enemy.attack(player)
      }
    });

    if (this.gameStopped) return;

    this.enemySpawner.spawnQueue().forEach(enemy => {
      this.registerObject(enemy, 'enemy');
    })
  }

  movePlayer(direction) {
    const player = this.player;
    if (player.dead) return;

    if (player.attacking) return;
    const currentPosition = {
      x: player.x,
      y: player.y
    }

    switch (direction) {
      case "up":
        player.startAnimations('walking');
        player.y -= player.speed;
        break;
      case "down":
        player.startAnimations('walking');
        player.y += player.speed;
        break;
      case "left":
        player.startAnimations('walking');
        player.endAnimations('facing-left');
        player.direction = 'left';
        player.x -= player.speed;
        break;
      case "right":
        player.startAnimations('walking');
        player.startAnimations('facing-left');
        player.direction = 'right';
        player.x += player.speed;
        break;
    }

    if (this.hasCollisions(player.feet) ||
      player.y < this.playAreaTop ||
      player.y > this.playAreaBottom) {
      player.x = currentPosition.x;
      player.y = currentPosition.y;
    }

    // Edge bounds
    if (player.x < 300) {
      player.x = 300;
      this.background.right()
      this.moveCamera(5);
    } else if (player.x > this.width - 300) {
      player.x = this.width - 300;
      this.background.left()
      this.moveCamera(-5);
    }
  }

  playerAttack() {
    if (!this.player.attacking && !this.player.attackCoolingDown) {
      const result = this.player.attack(this.enemies,'punch');
      if (result.kills > 0) {
        this.cleanUpDead();
        this.scoreTracker.killedEnemy(result.kills);
      }
    }

  }

  cleanUpDead() {
    this.enemies = this.enemies.filter(enemy => {
      // Add dead enemy to static objects to prevent showing up as a kill on every hit
      if (enemy.dead) this.registerObject(enemy, 'static');

      // Filter out the dead enemies from the enemies array
      return !enemy.dead
    });
  }

  hasCollisions(entity1, enemySkipIndex) {
    const staticCollisions = this.playFieldObjects.some(entity2 => {
      if (entity2.dead) return false;
      return this.isColliding(entity1, entity2)
    });

    const enemyCollisions = this.enemies.some((entity2, index) => {

      // Prevent enemy from colliding with self
      if (enemySkipIndex === index) return false;

      if (entity2.feet) return this.isColliding(entity1, entity2.feet);
      return this.isColliding(entity1, entity2)
    });

    return enemyCollisions || staticCollisions;
  };

  isColliding(rect1, rect2) {
    return (
      rect1.x + rect1.width > rect2.x &&
      rect1.x < rect2.x + rect2.width &&
      rect1.y + rect1.height > rect2.y &&
      rect1.y < rect2.y + rect2.height
    );
  }

  moveCamera(amount) {
    this.xOffset += amount;
    this.playFieldObjects.forEach(object => {
      object.x += amount;
    });

    this.enemies.forEach(object => {
      object.x += amount;
    });
  }

  // Register an object to be tracked by the world
  registerObject(object, type = "static") {
    if (type === "static") {
      this.playFieldObjects.push(object);
    } else if (type === "enemy") {
      this.enemies.push(object);
    } else {
      throw new Error('Must pass a valid type');
    }

    this.gameField.appendChild(object.element);

    if (process.env.DEVELOPMENT) {
      this.gameField.appendChild(object.hitbox);
      if (object.footbox) this.gameField.appendChild(object.footbox);
    }
  }

  draw() {
    this.player.draw();
    this.background.draw();

    this.playFieldObjects.forEach(object => {
      object.draw();
    });
    this.enemies.forEach(object => {
      object.draw();
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (World);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/scripts/Player.js":
/*!*******************************!*\
  !*** ./src/scripts/Player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ "./src/scripts/Character.js");


class Player extends _Character__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super('player');
    this.onDeathCallbacks = [];
    this.onHitCallbacks = [];
    this.healDelayIterations = 0;
    this.rageDuration = 5;
    this.rageMode = false; 
    this.attackCooldown = 100;
    
    setInterval(() => {
      if(this.health < 100 && !this.dead && this.healDelayIterations < 0) {
        (this.health + 5 <= 100) ? this.health += 5 : this.health = 100;
        
        if (this.element.classList.contains('hasHammer')){
          this.element.classList.remove('hasHammer');
        }
        
        this.healthChanged();
      } else if (this.strength < 100) {
        (this.strength - 1 > 50) ? this.strength-- : this.strength = 50;
      }
      this.healDelayIterations--;
    }, 2000)
  }

  die() {
    super.die();
    this.onDeathCallbacks.forEach(cb => cb());
  }

  onDeath(callback) {
    this.onDeathCallbacks.push(callback);
  }

  takeHit(damage) {
    super.takeHit(damage);
    this.healDelayIterations = 3;
    this.healthChanged();
  }

  healthChanged() {
    this.onHitCallbacks.forEach(cb => cb(this.health))
  }

  onHealthChange(callback) {
    this.onHitCallbacks.push(callback);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Player);


/***/ }),

/***/ "./src/scripts/ScoreTracker.js":
/*!*************************************!*\
  !*** ./src/scripts/ScoreTracker.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class ScoreTracker {
  constructor() {
    this.currentScore = 0;
    this.enemiesKilled = 0;

    this.savedScores = [];
    if(localStorage.getItem('scores')) {
      this.savedScores = JSON.parse(localStorage.getItem('scores'));
    }

    this.gainingScore = false;
    this.onScoreUpdateCallbacks = [];
    this.scoreIncrementInterval = setInterval(() => {
      if(this.gainingScore) {
        this.currentScore += Math.floor(Math.random() * 3 + 1);
        this.scoreUpdated();
      }
    }, 1000);
  }

  killedEnemy(amount) {
    this.currentScore += (Math.floor(Math.random() * 200 + 201)) * amount;
    this.enemiesKilled += amount;
    this.scoreUpdated();
  }

  onScoreUpdate(callback) {
    this.onScoreUpdateCallbacks.push(callback);
  }

  scoreUpdated() {
    this.onScoreUpdateCallbacks.forEach(cb => cb(this.currentScore));
  }

  startTracking() {
    this.gainingScore = true;
  }

  endTracking() {
    this.gainingScore = false;
    this.saveScore();
  }

  saveScore() {
    this.savedScores.push({
      score: this.currentScore,
      enemiesKilled: this.enemiesKilled
    });

    this.savedScores.sort((firstEl, secondEl) => {
      return firstEl.score < secondEl.score;
    });

    this.savedScores = this.savedScores.slice(0, 5);

    localStorage.setItem('scores', JSON.stringify(this.savedScores));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ScoreTracker);

/***/ }),

/***/ "./src/scripts/level.js":
/*!******************************!*\
  !*** ./src/scripts/level.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ "./src/scripts/Entity.js");


const left = -900;
const width = 2800;

const top = 296;
const height = 650;

const amountOfObjects = 15;

const levelObjects = [];

// Left and right walls
levelObjects.push(new _Entity__WEBPACK_IMPORTED_MODULE_0__["default"](left, top - 9, 13, height, 'barrier'))
levelObjects.push(new _Entity__WEBPACK_IMPORTED_MODULE_0__["default"](left + width, top - 9, 13, height, 'barrier'))


for(let i = 0; i < amountOfObjects; i++) {
  const x = Math.floor(Math.random() * (left + 2000 - width - 1000)) + width - 1000;
  const y = Math.floor(Math.random() * (top - height)) + height;

  levelObjects.push(new _Entity__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, 67, 50, 'box'));
}

/* harmony default export */ __webpack_exports__["default"] = (levelObjects);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map