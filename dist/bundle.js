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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
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

var CanvasComponent = function () {
	function CanvasComponent(w, h, filling, posx, posy, type, sx, sy, sw, sh) {
		var alpha = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 1;

		_classCallCheck(this, CanvasComponent);

		this.collidable = true;
		this.unmovable = false;

		this.type = type;

		this.posx = posx;
		this.posy = posy;
		this.width = w;
		this.height = h;

		this.sx = sx;
		this.sy = sy;
		this.sw = sw;
		this.sh = sh;

		this.alpha = alpha;

		if (type == 'image' || type == 'sprite') {
			this.image = filling;
		} else {
			this.filling = filling;
		}
	}

	_createClass(CanvasComponent, [{
		key: 'render',
		value: function render(canvasContext) {
			var defaultAlphaIndex = 1;
			canvasContext.globalAlpha = this.alpha;

			if (this.type == 'image') {
				canvasContext.drawImage(this.image, this.posx, this.posy, this.width, this.height);
			} else if (this.type == 'sprite') {
				canvasContext.drawImage(this.image, this.sx, this.sy, this.sw, this.sh, this.posx, this.posy, this.width, this.height);
			} else {
				canvasContext.fillStyle = this.filling;
				canvasContext.fillRect(this.posx, this.posy, this.width, this.height);
			}

			canvasContext.globalAlpha = defaultAlphaIndex;
		}
	}]);

	return CanvasComponent;
}();

exports.default = CanvasComponent;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var delay = function delay(identifier, object, currenttime, duration) {
	if (!isNumber(object[identifier])) object[identifier] = currenttime;
	return currenttime - object[identifier] <= duration;
};

delay.clear = function (identifier, object) {
	return delete object[identifier];
};

var entityClassName = function entityClassName(value, lookedClass) {
	return Object.prototype.toString.call(value) == lookedClass;
};

var abs = function abs(value) {
	return Math.abs(value);
};

var datenow = function datenow() {
	return Date.now && Date.now() || +new Date();
};

var isfunc = function isfunc(value) {
	return typeof value == 'function';
};

var isNumber = function isNumber(value) {
	return typeof value == 'number';
};

var isObject = function isObject(value) {
	return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' && value != null;
};

var isRegularExpression = function isRegularExpression(value) {
	return entityClassName(value, '[object RegExp]');
};

var randomizeNumber = function randomizeNumber() {
	return String(Math.random()).split(/\./)[1];
};

var each = function each(d, f) {
	return setInterval(f, d);
};

var after = function after(d, f) {
	return setTimeout(f, d);
};

var precision = function precision(number, _precision) {
	return Math.round(number * Math.pow(10, _precision)) / Math.pow(10, _precision);
};

var randomize = function randomize(min, max) {
	return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

var SPRITESPATH = '../textures/sprites';

var LEVELBGPATH = '../textures/levels';

var OTHERPATH = '../textures/other';

var CANVASSCENEW = 720,
    CANVASSCENEH = 480;
var EMPTYCHAR = '',
    SPACECHAR = '\x20';
exports.EMPTYCHAR = EMPTYCHAR;
exports.SPACECHAR = SPACECHAR;
exports.SPRITESPATH = SPRITESPATH;
exports.LEVELBGPATH = LEVELBGPATH;
exports.OTHERPATH = OTHERPATH;
exports.CANVASSCENEW = CANVASSCENEW;
exports.CANVASSCENEH = CANVASSCENEH;
exports.delay = delay;
exports.abs = abs;
exports.datenow = datenow;
exports.isfunc = isfunc;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isRegularExpression = isRegularExpression;
exports.randomizeNumber = randomizeNumber;
exports.each = each;
exports.after = after;
exports.precision = precision;
exports.randomize = randomize;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.bindGraphicalTextContainer = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvasComponent = __webpack_require__(0);

var _canvasComponent2 = _interopRequireDefault(_canvasComponent);

var _misc = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GraphicalTextContainer = function () {
	function GraphicalTextContainer(text) {
		var posx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		var posy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
		var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;
		var duration = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 800;
		var dy = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 50;

		var _sprites;

		var alpha = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
		var unmovable = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;

		_classCallCheck(this, GraphicalTextContainer);

		var componentIdentifier = 'container-gtc' + (0, _misc.randomizeNumber)(),
		    internalComponentPrefix = 'gtc-';

		var components = {};
		var _ref = [duration, dy],
		    DURATION = _ref[0],
		    DY = _ref[1],
		    U = _ref[2];


		var sprites = (_sprites = {}, _defineProperty(_sprites, _misc.SPACECHAR, [U, U, U, U, 7 * size, 7 * size]), _defineProperty(_sprites, '0', [3, 460, 10 - 3, 7, (10 - 3) * size, 7 * size]), _defineProperty(_sprites, '1', [11, 460, 18 - 11, 7, (18 - 11) * size, 7 * size]), _defineProperty(_sprites, '2', [19, 460, 26 - 19, 7, (26 - 19) * size, 7 * size]), _defineProperty(_sprites, '3', [27, 460, 34 - 27, 7, (34 - 27) * size, 7 * size]), _defineProperty(_sprites, '4', [35, 460, 42 - 35, 7, (42 - 35) * size, 7 * size]), _defineProperty(_sprites, '5', [43, 460, 50 - 43, 7, (50 - 43) * size, 7 * size]), _defineProperty(_sprites, '6', [51, 460, 58 - 51, 7, (58 - 51) * size, 7 * size]), _defineProperty(_sprites, '7', [59, 460, 66 - 59, 7, (66 - 59) * size, 7 * size]), _defineProperty(_sprites, '8', [67, 460, 74 - 67, 7, (74 - 67) * size, 7 * size]), _defineProperty(_sprites, '9', [75, 460, 82 - 75, 7, (82 - 75) * size, 7 * size]), _defineProperty(_sprites, 'A', [83, 460, 90 - 83, 7, (90 - 83) * size, 7 * size]), _defineProperty(_sprites, 'B', [91, 460, 98 - 91, 7, (98 - 91) * size, 7 * size]), _defineProperty(_sprites, 'C', [99, 460, 106 - 99, 7, (106 - 99) * size, 7 * size]), _defineProperty(_sprites, 'D', [107, 460, 114 - 107, 7, (114 - 107) * size, 7 * size]), _defineProperty(_sprites, 'E', [115, 460, 122 - 115, 7, (122 - 115) * size, 7 * size]), _defineProperty(_sprites, 'F', [123, 460, 130 - 123, 7, (130 - 123) * size, 7 * size]), _defineProperty(_sprites, 'G', [3, 468, 10 - 3, 7, (10 - 3) * size, 7 * size]), _defineProperty(_sprites, 'H', [11, 468, 18 - 11, 7, (18 - 11) * size, 7 * size]), _defineProperty(_sprites, 'I', [20, 468, 26 - 20, 7, (26 - 20) * size, 7 * size]), _defineProperty(_sprites, 'J', [27, 468, 34 - 27, 7, (34 - 27) * size, 7 * size]), _defineProperty(_sprites, 'K', [35, 468, 42 - 35, 7, (42 - 35) * size, 7 * size]), _defineProperty(_sprites, 'L', [44, 468, 50 - 44, 7, (50 - 44) * size, 7 * size]), _defineProperty(_sprites, 'M', [51, 468, 58 - 51, 7, (58 - 51) * size, 7 * size]), _defineProperty(_sprites, 'N', [59, 468, 66 - 59, 7, (66 - 59) * size, 7 * size]), _defineProperty(_sprites, 'O', [67, 468, 74 - 67, 7, (74 - 67) * size, 7 * size]), _defineProperty(_sprites, 'P', [75, 468, 82 - 75, 7, (82 - 75) * size, 7 * size]), _defineProperty(_sprites, 'Q', [83, 468, 90 - 83, 7, (90 - 83) * size, 7 * size]), _defineProperty(_sprites, 'R', [91, 468, 98 - 91, 7, (98 - 91) * size, 7 * size]), _defineProperty(_sprites, 'S', [99, 468, 106 - 99, 7, (106 - 99) * size, 7 * size]), _defineProperty(_sprites, 'T', [108, 468, 114 - 108, 7, (114 - 108) * size, 7 * size]), _defineProperty(_sprites, 'U', [115, 468, 122 - 115, 7, (122 - 115) * size, 7 * size]), _defineProperty(_sprites, 'V', [123, 468, 130 - 123, 7, (130 - 123) * size, 7 * size]), _defineProperty(_sprites, 'W', [3, 476, 10 - 3, 7, (10 - 3) * size, 7 * size]), _defineProperty(_sprites, 'X', [11, 476, 18 - 11, 7, (18 - 11) * size, 7 * size]), _defineProperty(_sprites, 'Y', [20, 476, 26 - 20, 7, (26 - 20) * size, 7 * size]), _defineProperty(_sprites, 'Z', [27, 476, 34 - 27, 7, (34 - 27) * size, 7 * size]), _defineProperty(_sprites, '-', [68, 479, 74 - 68, 481 - 479, (74 - 68) * size, (481 - 479) * size]), _defineProperty(_sprites, '!', [93, 476, 97 - 93, 484 - 476, (97 - 93) * size, (484 - 476) * size]), _defineProperty(_sprites, '\xA9', [36, 476, 44 - 36, 484 - 476, (44 - 36) * size, (484 - 476) * size]), _defineProperty(_sprites, '\xD7', [76, 478, 81 - 76, 483 - 478, (81 - 76) * size, (483 - 478) * size]), _sprites);

		for (var i = 0, iposx = posx; i < text.length; i++) {
			var _componentIdentifier = '' + internalComponentPrefix + (0, _misc.randomizeNumber)();
			var char = text.charAt(i).toUpperCase();
			var instance = void 0;

			var _sprites$char = _slicedToArray(sprites[char], 6),
			    SX = _sprites$char[0],
			    SY = _sprites$char[1],
			    SW = _sprites$char[2],
			    SH = _sprites$char[3],
			    W = _sprites$char[4],
			    H = _sprites$char[5];

			if (char == _misc.SPACECHAR) {
				instance = new _canvasComponent2.default(W, H, 'transparent', iposx, posy, 'rect');
			} else {
				instance = new _canvasComponent2.default(W, H, _canvasComponent2.default.SPRITES.GF, iposx, posy, 'sprite', SX, SY, SW, SH, alpha);
			}
			instance.collidable = false;
			instance.unmovable = unmovable;
			components[_componentIdentifier] = instance;
			iposx = iposx + W;
		}

		this._components = components;
		this.componentIdentifier = componentIdentifier;
		this.text = text;
		this.posx = posx;
		this.posy = posy;
		this.size = size;

		this.animationParameters = { DURATION: DURATION, DY: DY };
	}

	_createClass(GraphicalTextContainer, [{
		key: 'animate',
		value: function animate(time, scene) {
			var _this = this;

			if ((0, _misc.isfunc)(this.customAnimationFunction)) {
				return this.customAnimationFunction(time, scene, this._components, this.componentIdentifier);
			}
			if (!this.animationInitialized) {
				this.initposy = this.posy;
				this.inittime = time;
				this.animationInitialized = true;
			}
			var keys = Object.keys,
			    entries = Object.entries;
			var ANIMATIONCOMPLETED = false,
			    durationIndex = (time - this.inittime) / this.animationParameters.DURATION;

			if (durationIndex >= 1) ANIMATIONCOMPLETED = durationIndex = 1;

			entries(this._components).forEach(function (entry) {
				return entry[1].posy = _this.initposy - _this.animationParameters.DY * durationIndex;
			});

			if (ANIMATIONCOMPLETED) {
				keys(this._components).forEach(function (componentIdentifier) {
					return scene.unbindComponent(componentIdentifier);
				});
				scene.unbindComponent(this.componentIdentifier);
				return true;
			}
		}
	}, {
		key: 'bindCustomAnimationFunction',
		value: function bindCustomAnimationFunction(f) {
			this.customAnimationFunction = f;
		}
	}, {
		key: 'makeBindable',
		value: function makeBindable() {
			this.bindable = true;
			return this;
		}
	}]);

	return GraphicalTextContainer;
}();

var bindGraphicalTextContainer = function bindGraphicalTextContainer(customAnimationFunction, scene, text, posx, posy, size, duration, dy, alpha, unmovable) {
	var container = new GraphicalTextContainer(text, posx, posy, size, duration, dy, alpha, unmovable);
	if ((0, _misc.isfunc)(customAnimationFunction)) {
		container.bindCustomAnimationFunction(customAnimationFunction);
	}
	scene.bindComponent(container);
	scene.bindComponent(container, container.componentIdentifier);
	scene.bindComponentForAnimation(container.componentIdentifier);
};

exports.default = GraphicalTextContainer;
exports.bindGraphicalTextContainer = bindGraphicalTextContainer;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Music = exports.SFX = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _howler = __webpack_require__(24);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var assign = Object.assign;


var createHInstance = function createHInstance(src) {
	var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	return new _howler.Howl(assign({ src: src, volume: 0.12 }, parameters));
};

var SFX = function SFX() {
	_classCallCheck(this, SFX);
};

SFX.bump = createHInstance(['../audio/sfx/Bump.wav']);
SFX.coin = createHInstance(['../audio/sfx/Coin.wav']);
SFX.squish = createHInstance(['../audio/sfx/Squish.wav']);
SFX.jump = createHInstance(['../audio/sfx/Jump.wav']);
SFX.warning = createHInstance(['../audio/sfx/Warning.wav']);
SFX.die = createHInstance(['../audio/sfx/Die.mp3']);
SFX.warp = createHInstance(['../audio/sfx/Warp.wav']);
SFX.gameover = createHInstance(['../audio/sfx/GameOver.mp3']);
SFX.flagpole = createHInstance(['../audio/sfx/Flagpole.mp3']);
SFX.firework = createHInstance(['../audio/sfx/Firework.wav']);
SFX.areaclear = createHInstance(['../audio/sfx/AreaClear.mp3']);
SFX.remainingTimeToPoints = createHInstance(['../audio/sfx/RemainingTimeToPoints.mp3'], { loop: true, volume: 0.19 });

var Music = function () {
	function Music() {
		_classCallCheck(this, Music);
	}

	_createClass(Music, null, [{
		key: 'init',
		value: function init(complete) {
			var _this = this;

			var samples = [this.overworld, this.overworldAccelerated];
			var samplesSize = samples.length;
			var LOADEDSTATE = 'loaded',
			    LOADEVENT = 'load';
			var loadedSamplesSize = 0,
			    loadingSamplesSize = 0;

			var loadEventHandler = function loadEventHandler() {
				++loadedSamplesSize;
				if (loadedSamplesSize == loadingSamplesSize) {
					complete(_this.initialized = true);
				}
			};
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = samples[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var sample = _step.value;
					if (sample.state() != LOADEDSTATE) loadingSamplesSize++;
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = samples[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var _sample = _step2.value;
					if (_sample.state() != LOADEDSTATE) _sample.once(LOADEVENT, loadEventHandler);
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}
		}
	}, {
		key: 'initBackgroundMusic',
		value: function initBackgroundMusic(name) {
			if (name == 'overworld') {
				this.backgroundMusic = this.overworld;
				this.backgroundMusicAccelerated = this.overworldAccelerated;
			} else if (name = 'underground') {
				this.backgroundMusic = this.underground;
				this.backgroundMusicAccelerated = this.undergroundAccelerated;
			}
		}
	}, {
		key: 'playBackgroundMusic',
		value: function playBackgroundMusic() {
			if (this.backgroundMusic) this.backgroundMusicPlayIdentifier = this.backgroundMusic.play();
		}
	}, {
		key: 'stopBackgroundMusic',
		value: function stopBackgroundMusic() {
			if (this.backgroundMusic) {
				if (SFX.warning.playing()) {
					SFX.warning.stop();
					SFX.warning.off('end');
				}
				if (SFX.jump.playing()) SFX.jump.stop();
				if (SFX.warp.playing()) SFX.warp.stop();
				this.backgroundMusic.stop();
				this.backgroundMusicAccelerated.stop();
			}
		}
	}, {
		key: 'pauseBackgroundMusic',
		value: function pauseBackgroundMusic() {
			if (this.backgroundMusic) this.backgroundMusic.pause();
		}
	}, {
		key: 'playBackgroundMusicAccelerated',
		value: function playBackgroundMusicAccelerated() {
			if (this.backgroundMusic) {
				this.backgroundMusicAccelerated.play();
			}
		}
	}, {
		key: 'warning',
		value: function warning() {
			var _this2 = this;

			this.stopBackgroundMusic();
			SFX.warning.play();
			SFX.warning.once('end', function () {
				return _this2.playBackgroundMusicAccelerated();
			});
		}
	}]);

	return Music;
}();

Music.overworld = createHInstance(['../audio/music/Overworld.mp3'], { loop: true });
Music.overworldAccelerated = createHInstance(['../audio/music/OverworldAccelerated.mp3'], { loop: true });

Music.underground = createHInstance(['../audio/music/Underground.mp3'], { loop: true });
Music.undergroundAccelerated = createHInstance(['../audio/music/UndergroundAccelerated.mp3'], { loop: true });

exports.SFX = SFX;
exports.Music = Music;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _canvasComponent = __webpack_require__(0);

var _canvasComponent2 = _interopRequireDefault(_canvasComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TransparentBoxComponent = function (_CanvasComponent) {
	_inherits(TransparentBoxComponent, _CanvasComponent);

	function TransparentBoxComponent(posx, posy, W, H) {
		_classCallCheck(this, TransparentBoxComponent);

		return _possibleConstructorReturn(this, (TransparentBoxComponent.__proto__ || Object.getPrototypeOf(TransparentBoxComponent)).call(this, W, H, 'transparent', posx, posy, 'rect'));
	}

	return TransparentBoxComponent;
}(_canvasComponent2.default);

exports.default = TransparentBoxComponent;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _misc = __webpack_require__(1);

var _CoinstatBoxComponent = __webpack_require__(27);

var _CoinstatBoxComponent2 = _interopRequireDefault(_CoinstatBoxComponent);

var _canvasComponent = __webpack_require__(0);

var _canvasComponent2 = _interopRequireDefault(_canvasComponent);

var _PlayerBoxComponent = __webpack_require__(15);

var _PlayerBoxComponent2 = _interopRequireDefault(_PlayerBoxComponent);

var _GraphicalTextContainer = __webpack_require__(2);

var _GraphicalTextContainer2 = _interopRequireDefault(_GraphicalTextContainer);

var _sound = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TICK = 0,
    REMAININGTIMETOPOINTS = 1;
var keys = Object.keys;

var Stat = function () {
	function Stat() {
		_classCallCheck(this, Stat);
	}

	_createClass(Stat, null, [{
		key: '_zeroPrefixes',
		value: function _zeroPrefixes(value, digits) {
			var repeatNumber = 0;
			var zeroPrefix = '0';
			var valueLength = String(value).length;
			if (value == 0) {
				value = _misc.EMPTYCHAR;
				repeatNumber = digits;
			} else if (digits - valueLength < 0) repeatNumber = 0;else repeatNumber = digits - valueLength;
			return '' + zeroPrefix.repeat(repeatNumber) + value;
		}
	}, {
		key: 'clear',
		value: function clear(scene, identifiers) {
			if (identifiers) identifiers.forEach(function (identifier) {
				return scene.unbindComponent(identifier);
			});
		}
	}, {
		key: 'lives',
		value: function lives(scene, _lives) {
			this.currentLives = this.currentLives + _lives;
		}
	}, {
		key: 'livesSpent',
		value: function livesSpent() {
			return this.currentLives == 0;
		}
	}, {
		key: 'timeSpent',
		value: function timeSpent() {
			return this.currentTime == 0;
		}
	}, {
		key: 'time100',
		value: function time100() {
			return this.currentTime == 100;
		}
	}, {
		key: 'default',
		value: function _default() {
			var defaults = this.parameters.defaults;
			var _ref = [defaults.score, defaults.coins, defaults.lives, defaults.world, defaults.time];
			this.scoreValue = _ref[0];
			this.coinsAmount = _ref[1];
			this.currentLives = _ref[2];
			this.currentWorld = _ref[3];
			this.currentTime = _ref[4];

			return this;
		}
	}, {
		key: 'time',
		value: function time(scene, _time, animate) {
			this.currentTime = _time;
			var _parameters = this.parameters,
			    X1 = _parameters.X1,
			    Y1 = _parameters.Y1,
			    SIZE = _parameters.SIZE;

			var containerInstance = new _GraphicalTextContainer2.default(this._zeroPrefixes(this.currentTime, 3), 510 + X1, 26 + Y1, SIZE);
			this.clear(scene, this._timeIdentifiers);
			this._timeIdentifiers = keys(containerInstance._components);
			scene.bindComponent(containerInstance);
			if (animate) this.unfreezeTime(scene);
		}
	}, {
		key: 'world',
		value: function world(scene, _world) {
			this.currentWorld = _world;
			var identifiers = function identifiers(containerInstance) {
				return keys(containerInstance._components);
			};
			var _parameters2 = this.parameters,
			    X1 = _parameters2.X1,
			    Y1 = _parameters2.Y1,
			    SIZE = _parameters2.SIZE;

			var containerInstance1 = new _GraphicalTextContainer2.default(String(this.currentWorld).charAt(0), 370 + X1, 26 + Y1, SIZE);
			var containerInstance2 = new _GraphicalTextContainer2.default(String(this.currentWorld).charAt(1), 400 + X1, 26 + Y1, SIZE);
			this.clear(scene, this._worldIdentifiers);
			this._worldIdentifiers = [].concat(_toConsumableArray(identifiers(containerInstance1)), _toConsumableArray(identifiers(containerInstance2)));
			scene.bindComponent(containerInstance1);
			scene.bindComponent(containerInstance2);
		}
	}, {
		key: 'score',
		value: function score(scene, add) {
			this.scoreValue = this.scoreValue + add;
			var _parameters3 = this.parameters,
			    X1 = _parameters3.X1,
			    Y1 = _parameters3.Y1,
			    SIZE = _parameters3.SIZE;

			var containerInstance = new _GraphicalTextContainer2.default(this._zeroPrefixes(this.scoreValue, 6), 50 + X1, 26 + Y1, SIZE);
			this.clear(scene, this._scoreIdentifiers);
			this._scoreIdentifiers = keys(containerInstance._components);
			scene.bindComponent(containerInstance);
		}
	}, {
		key: 'coins',
		value: function coins(scene, add) {
			this.coinsAmount = this.coinsAmount + add;
			var _parameters4 = this.parameters,
			    X1 = _parameters4.X1,
			    Y1 = _parameters4.Y1,
			    SIZE = _parameters4.SIZE;

			var containerInstance = new _GraphicalTextContainer2.default(this._zeroPrefixes(this.coinsAmount, 2), 240 + X1, 26 + Y1, SIZE);
			this.clear(scene, this._coinsIdentifiers);
			this._coinsIdentifiers = keys(containerInstance._components);
			scene.bindComponent(containerInstance);
		}
	}, {
		key: 'display',
		value: function display(scene, displayBlackBackground, displayTime, displayLives) {
			var coinstatIdentifier = 'coinstat',
			    BGIdentifier = 'bg',
			    BGC = '#000',
			    PlayerBoxIdentifier = 'playerbox',
			    TXDASH = '-',
			    TXCROSS = '\xD7',
			    TXMARIO = 'MARIO',
			    TXWORLD = 'WORLD',
			    TXTIME = 'TIME';
			var _parameters5 = this.parameters,
			    X1 = _parameters5.X1,
			    Y1 = _parameters5.Y1,
			    X2 = _parameters5.X2,
			    Y2 = _parameters5.Y2,
			    SIZE = _parameters5.SIZE;


			if (displayBlackBackground) scene.bindComponent(new _canvasComponent2.default(_misc.CANVASSCENEW, _misc.CANVASSCENEH, BGC, 0, 0), BGIdentifier);

			if (!displayBlackBackground) scene.bindComponentForAnimation(coinstatIdentifier);

			scene.bindComponent(new _CoinstatBoxComponent2.default(200 + X1, 26 + Y1, true, false), coinstatIdentifier);

			scene.bindComponent(new _GraphicalTextContainer2.default(TXDASH, 387 + X1, 33 + Y1, SIZE));
			scene.bindComponent(new _GraphicalTextContainer2.default(TXCROSS, 222 + X1, 30 + Y1, SIZE));
			scene.bindComponent(new _GraphicalTextContainer2.default(TXMARIO, 50 + X1, 10 + Y1, SIZE));
			scene.bindComponent(new _GraphicalTextContainer2.default(TXWORLD, 358 + X1, 10 + Y1, SIZE));
			scene.bindComponent(new _GraphicalTextContainer2.default(TXTIME, 500 + X1, 10 + Y1, SIZE));
			this.score(scene, 0);
			this.coins(scene, 0);
			this.world(scene, this.currentWorld);

			if (displayTime) this.time(scene, this.currentTime, true);

			if (displayLives) {
				scene.bindComponent(new _GraphicalTextContainer2.default(TXWORLD, 270 + X2, 150 + Y2, SIZE));
				scene.bindComponent(new _GraphicalTextContainer2.default(String(this.currentWorld).charAt(0), 365 + X2, 150 + Y2, SIZE));
				scene.bindComponent(new _GraphicalTextContainer2.default(TXDASH, 382 + X2, 157 + Y2, SIZE));
				scene.bindComponent(new _GraphicalTextContainer2.default(String(this.currentWorld).charAt(1), 395 + X2, 150 + Y2, SIZE));
				scene.bindComponent(new _PlayerBoxComponent2.default(280 + X2, 195 + Y2), PlayerBoxIdentifier);
				scene.bindComponent(new _GraphicalTextContainer2.default(TXCROSS, 340 + X2, 212 + Y2, SIZE));
				scene.bindComponent(new _GraphicalTextContainer2.default('' + this.currentLives, 382 + X2, 208 + Y2, SIZE));
			}
		}
	}, {
		key: 'animate',
		value: function animate(time, scene) {
			var animationParameters = this.parameters.animation;
			var _animationTypes = this.animationTypes,
			    TICK = _animationTypes.TICK,
			    REMAININGTIMETOPOINTS = _animationTypes.REMAININGTIMETOPOINTS;
			var MAXFRAMEINDEX1 = animationParameters.MAXFRAMEINDEX1,
			    MAXFRAMEINDEX2 = animationParameters.MAXFRAMEINDEX2;

			var playerComponentIdentifier = 'player';
			switch (this.animationType) {
				case TICK:
					{
						if (++animationParameters.frameIndex == MAXFRAMEINDEX1) {
							animationParameters.frameIndex = 0;
							this.time(scene, this.currentTime - 1);
							if (this.time100()) {
								_sound.Music.warning();
							} else if (this.timeSpent()) {
								scene.getBindedComponent(playerComponentIdentifier).die(scene, true, true);
							}
						}
						break;
					}
				case REMAININGTIMETOPOINTS:
					{
						if (++animationParameters.frameIndex == MAXFRAMEINDEX2) {
							var points = 50,
							    _time2 = 2;
							var currentTime = this.currentTime - _time2,
							    earnedPoints = points * _time2;

							animationParameters.frameIndex = 0;
							if (currentTime == -1) {
								currentTime = 0;
								earnedPoints = earnedPoints / _time2;
							}
							this.time(scene, currentTime);
							this.score(scene, earnedPoints);
							if (currentTime == 0) {
								this.freezeTime(scene);
								this.completeAnimation();
							}
						}
						break;
					}
			}
		}
	}, {
		key: 'nextWorld',
		value: function nextWorld() {
			if (this.currentWorld % 10 == 4) this.currentWorld = this.currentWorld + 7;else this.currentWorld = this.currentWorld + 1;
		}
	}, {
		key: 'conventRemainingTimeToPoints',
		value: function conventRemainingTimeToPoints(scene, complete) {
			var _this = this;

			this.animationType = this.animationTypes.REMAININGTIMETOPOINTS;
			this.unfreezeTime(scene);
			this.completeAnimation = function () {
				_this.animationType = Stat.animationTypes.TICK;
				complete();
			};
		}
	}, {
		key: 'unfreezeTime',
		value: function unfreezeTime(scene) {
			var animationParameters = this.parameters.animation;
			animationParameters.frameIndex = 0;
			this.freezeTime(scene);
			scene.bindComponent(this, this.identifier);
			scene.bindComponentForAnimation(this.identifier);
		}
	}, {
		key: 'freezeTime',
		value: function freezeTime(scene) {
			scene.unbindComponent(this.identifier);
			scene.unbindComponentForAnimation(this.identifier);
		}
	}]);

	return Stat;
}();

Stat.animationTypes = { TICK: TICK, REMAININGTIMETOPOINTS: REMAININGTIMETOPOINTS };
Stat.animationType = Stat.animationTypes.TICK;
Stat.identifier = 'statclass';
Stat.parameters = { X1: 60, Y1: 22, X2: 15, Y2: 40, SIZE: 2, animation: { frameIndex: 0, MAXFRAMEINDEX1: 24, MAXFRAMEINDEX2: 2 } };
Stat.parameters.defaults = { score: 0, coins: 0, lives: 3, world: 11, time: 400 };

exports.default = Stat.default();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.UNKNOWN = exports.RTYPE = exports.LTYPE = exports.BTYPE = exports.TTYPE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _misc = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TTYPE = 'T',
    BTYPE = 'B',
    LTYPE = 'L',
    RTYPE = 'R',
    UNKNOWN = 'UNKNOWN';
exports.TTYPE = TTYPE;
exports.BTYPE = BTYPE;
exports.LTYPE = LTYPE;
exports.RTYPE = RTYPE;
exports.UNKNOWN = UNKNOWN;

var Collision = function () {
	function Collision() {
		_classCallCheck(this, Collision);
	}

	_createClass(Collision, null, [{
		key: 'deleteLastPXPYWHMap',
		value: function deleteLastPXPYWHMap() {
			delete Collision.LastPXPYWHMap;
		}
	}, {
		key: 'updateComponentInLastPXPYWHMap',
		value: function updateComponentInLastPXPYWHMap(componentIdentifier, map) {
			for (var q = 0; q < Collision.LastPXPYWHMap.length; q++) {
				var component = Collision.LastPXPYWHMap[q];
				if (componentIdentifier == component.componentIdentifier) {
					component.posx = map.posx;
					component.posy = map.posy;
					component.width = map.width;
					component.height = map.height;
					return true;
				}
			}
		}
	}, {
		key: 'updateLastPXPYWHMap',
		value: function updateLastPXPYWHMap(components) {
			// [{componentIdentifier, posx, posy, width, height}, {componentIdentifier, posx, posy, width, height}]
			if (!Collision.LastPXPYWHMap) {
				Collision.LastPXPYWHMap = [];
				for (var p = 0; p < components.length; p++) {
					var _ref = [components[p].component, components[p].componentIdentifier],
					    component = _ref[0],
					    componentIdentifier = _ref[1];
					var posx = component.posx,
					    posy = component.posy,
					    width = component.width,
					    height = component.height;

					Collision.LastPXPYWHMap[Collision.LastPXPYWHMap.length] = { componentIdentifier: componentIdentifier, posx: posx, posy: posy, width: width, height: height };
				}
			} else {
				// Change existing
				for (var _p = 0; _p < components.length; _p++) {
					var _ref2 = [components[_p].component, components[_p].componentIdentifier],
					    _component = _ref2[0],
					    _componentIdentifier2 = _ref2[1];
					var _posx = _component.posx,
					    _posy = _component.posy,
					    _width = _component.width,
					    _height = _component.height;

					var changedExisting = this.updateComponentInLastPXPYWHMap(_componentIdentifier2, { posx: _posx, posy: _posy, width: _width, height: _height });
					// Add new
					if (!changedExisting) Collision.LastPXPYWHMap[Collision.LastPXPYWHMap.length] = { componentIdentifier: _componentIdentifier2, posx: _posx, posy: _posy, width: _width, height: _height };
				}

				// Remove irrelevant
				for (var q = 0; q < Collision.LastPXPYWHMap.length; q++) {
					var _componentIdentifier3 = Collision.LastPXPYWHMap[q].componentIdentifier;
					var shouldRemove = true;
					for (var _p2 = 0; _p2 < components.length; _p2++) {
						if (_componentIdentifier3 == components[_p2].componentIdentifier) {
							shouldRemove = false;
							break;
						}
					}
					if (shouldRemove) Collision.LastPXPYWHMap.splice(q--, 1);
				}
			}
			return Collision.LastPXPYWHMap;
		}
	}, {
		key: 'detect',
		value: function detect(components, component, omission) {

			var isOmissionRegularExpression = (0, _misc.isRegularExpression)(omission);
			var posx = component.posx,
			    posy = component.posy,
			    width = component.width,
			    height = component.height,
			    componentIdentifier = component.componentIdentifier;
			var collisions = [],
			    types = [];
			var _ref3 = [/^(?:npc\-)/, RegExp('^(?:(?:' + componentIdentifier + ')|(?:bg))$')],
			    NPCPREFIXRE = _ref3[0],
			    OMISSIONS = _ref3[1];

			var NPC = NPCPREFIXRE.test(componentIdentifier);
			var _componentIdentifier = componentIdentifier;

			var throwNewTypeError = function throwNewTypeError(property) {
				throw new TypeError('Cannot detect collision. ' + property + ' should be primitive-number');
			};
			var p8 = function p8(number) {
				return (0, _misc.precision)(number, 8);
			};

			var first = function first(type) {
				for (var q = 0; q < collisions.length; q++) {
					if (collisions[q].collisionType == type) return collisions[q];
				}
			};

			var collisionPush = function collisionPush(componentIdentifier, collisionType, collisionOffset) {
				if (false == types.includes(collisionType)) {
					types.push(collisionType);
				}
				collisions.push({ componentIdentifier: componentIdentifier, collisionType: collisionType, collisionOffset: collisionOffset });
			};

			if (false == (0, _misc.isNumber)(posx)) throwNewTypeError('posx');
			if (false == (0, _misc.isNumber)(posy)) throwNewTypeError('posy');
			if (false == (0, _misc.isNumber)(width)) throwNewTypeError('width');
			if (false == (0, _misc.isNumber)(height)) throwNewTypeError('height');

			for (var q = 0; q < components.length; q++) {
				var _ref4 = [components[q].component, components[q].componentIdentifier],
				    _component2 = _ref4[0],
				    _componentIdentifier4 = _ref4[1];

				var OUTOFSCREEN = _component2.posx > _misc.CANVASSCENEW || _component2.posx + _component2.width < 0;
				var skip = isOmissionRegularExpression && omission.test(_componentIdentifier4) || !NPC && OUTOFSCREEN || !_component2.collidable || OMISSIONS.test(_componentIdentifier4);
				if (skip) continue;

				if (p8(posx + width) > p8(_component2.posx) && p8(posx) < p8(_component2.posx + _component2.width) && p8(posy + height) >= p8(_component2.posy) && p8(posy) <= p8(_component2.posy + _component2.height)) {
					var _ref5 = [],
					    prevComponentData1 = _ref5[0],
					    prevComponentData2 = _ref5[1];

					for (var p = 0; p < Collision.LastPXPYWHMap.length; p++) {
						var prevComponentData = Collision.LastPXPYWHMap[p];
						if (prevComponentData1 && prevComponentData2) break;
						if (prevComponentData.componentIdentifier == _componentIdentifier) prevComponentData1 = prevComponentData;
						if (prevComponentData.componentIdentifier == _componentIdentifier4) prevComponentData2 = prevComponentData;
					}
					if (prevComponentData1 && prevComponentData2) {
						var isTypeT = p8(prevComponentData1.posy + prevComponentData1.height) <= p8(prevComponentData2.posy);
						var isTypeB = p8(prevComponentData1.posy) >= p8(prevComponentData2.posy + prevComponentData2.height);
						var isTypeL = p8(prevComponentData1.posx + prevComponentData1.width) <= p8(prevComponentData2.posx);
						var isTypeR = p8(prevComponentData1.posx) >= p8(prevComponentData2.posx + prevComponentData2.width);
						if (isTypeT) {
							collisionPush(_componentIdentifier4, TTYPE, _component2.posy - (posy + height));
						} else if (isTypeB) {
							collisionPush(_componentIdentifier4, BTYPE, posy - (_component2.posy + _component2.height));
						} else if (isTypeL) {
							collisionPush(_componentIdentifier4, LTYPE, _component2.posx - (posx + width));
						} else if (isTypeR) {
							collisionPush(_componentIdentifier4, RTYPE, _component2.posx + _component2.width - posx);
						} else {
							collisionPush(_componentIdentifier4, UNKNOWN, undefined);
						}
					} else collisionPush(_componentIdentifier4, UNKNOWN, undefined);
				}
			}
			return { collisions: collisions, types: types, first: first, TTYPE: TTYPE, BTYPE: BTYPE, LTYPE: LTYPE, RTYPE: RTYPE, UNKNOWN: UNKNOWN };
		}
	}]);

	return Collision;
}();

exports.default = Collision;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _TransparentBoxComponent = __webpack_require__(4);

var _TransparentBoxComponent2 = _interopRequireDefault(_TransparentBoxComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ControlPointComponent = function (_TransparentBoxCompon) {
	_inherits(ControlPointComponent, _TransparentBoxCompon);

	function ControlPointComponent(posx, posy, W, H, type) {
		_classCallCheck(this, ControlPointComponent);

		var _this = _possibleConstructorReturn(this, (ControlPointComponent.__proto__ || Object.getPrototypeOf(ControlPointComponent)).call(this, posx, posy, W, H));

		_this.controlPointType = type;
		return _this;
	}

	return ControlPointComponent;
}(_TransparentBoxComponent2.default);

ControlPointComponent.TYPES = { CASTLEENTRY: 0, WARPZONE: 1 };
exports.default = ControlPointComponent;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _canvasComponent = __webpack_require__(0);

var _canvasComponent2 = _interopRequireDefault(_canvasComponent);

var _misc = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PipeBoxComponent = function (_CanvasComponent) {
	_inherits(PipeBoxComponent, _CanvasComponent);

	/* @type = [1, 1] SMALL/GREEN */
	/* @type = [2, 1] MIDDLE/GREEN */
	/* @type = [3, 1] LARGE/GREEN */
	/* @type = [4, 1] LARGE2/GREEN */
	/* @type = [5, 1] VERYLARGE2/GREEN */
	/* @type = [1, 2] SMALL/GREY */
	/* @type = [2, 2] MIDDLE/GREY */
	/* @type = [3, 2] LARGE/GREY */
	/* @type = [4, 2] LARGE2/GREY */
	/* @type = [5, 2] VERYLARGE2/GREY */
	/* @out = ['LXX', 'pbcXX' | 'BX'] */
	function PipeBoxComponent() {
		var posx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var posy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [1, 1];
		var penetrationAllowed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
		var out = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

		_classCallCheck(this, PipeBoxComponent);

		var _ref = [],
		    W = _ref[0],
		    H = _ref[1],
		    SX = _ref[2],
		    SY = _ref[3],
		    SW = _ref[4],
		    SH = _ref[5];


		var initWHSXSYSWSH = function initWHSXSYSWSH(_SX, _SY, SX1, SY1) {
			var _ref2 = [(0, _misc.abs)(_SX - SX1), (0, _misc.abs)(_SY - SY1)],
			    _SW = _ref2[0],
			    _SH = _ref2[1];

			SX = _SX;
			SY = _SY;
			SW = _SW;
			SH = _SH;
			W = _SW * 2;
			H = _SH * 2;
		};

		if (type[1] == 1) {
			if (type[0] == 1) {
				initWHSXSYSWSH(309, 417, 341, 450);
			} else if (type[0] == 2) {
				initWHSXSYSWSH(271, 401, 303, 450);
			} else if (type[0] == 3) {
				initWHSXSYSWSH(230, 385, 262, 450);
			} else if (type[0] == 4) {
				initWHSXSYSWSH(156, 417, 218, 449);
			} else if (type[0] == 5) {
				initWHSXSYSWSH(84, 417, 146, 449);
			}
		}

		var _this = _possibleConstructorReturn(this, (PipeBoxComponent.__proto__ || Object.getPrototypeOf(PipeBoxComponent)).call(this, W, H, _canvasComponent2.default.SPRITES.PSTF, posx, posy, 'sprite', SX, SY, SW, SH));

		_this.penetrationAllowed = penetrationAllowed;
		_this.out = out;
		return _this;
	}

	return PipeBoxComponent;
}(_canvasComponent2.default);

exports.default = PipeBoxComponent;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _canvasComponent = __webpack_require__(0);

var _canvasComponent2 = _interopRequireDefault(_canvasComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TriangleBoxComponent = function (_CanvasComponent) {
	_inherits(TriangleBoxComponent, _CanvasComponent);

	function TriangleBoxComponent() {
		var posx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var posy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		_classCallCheck(this, TriangleBoxComponent);

		var _ref = [32, 32, _canvasComponent2.default.SPRITES.PSTF, 124, 746, 16, 16],
		    W = _ref[0],
		    H = _ref[1],
		    SPRITE = _ref[2],
		    SX = _ref[3],
		    SY = _ref[4],
		    SW = _ref[5],
		    SH = _ref[6];
		// super(W, H, SPRITE, posx, posy, 'sprite', SX, SY, SW, SH)

		return _possibleConstructorReturn(this, (TriangleBoxComponent.__proto__ || Object.getPrototypeOf(TriangleBoxComponent)).call(this, W, H, 'transparent', posx, posy, 'rect'));
	}

	return TriangleBoxComponent;
}(_canvasComponent2.default);

exports.default = TriangleBoxComponent;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _misc = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _instance = undefined;

var NPCContainer = function () {
	_createClass(NPCContainer, null, [{
		key: 'instance',
		value: function instance() {
			return _instance;
		}
	}]);

	function NPCContainer() {
		var npcs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, NPCContainer);

		var entries = Object.entries;

		this._components = npcs;
		this.componentIdentifier = 'container-npc';
		this.npcs = entries(npcs).map(function (array) {
			return array[1];
		});
		_instance = this;
	}

	_createClass(NPCContainer, [{
		key: 'pushNPC',
		value: function pushNPC(npc) {
			this.npcs[this.npcs.length] = npc;
		}
	}, {
		key: 'animate',
		value: function animate(time, scene) {

			var npcs = this.npcs;

			var ifActive = function ifActive(npccomponent, callback) {
				var active = npccomponent.active;
				if (!active) if (_misc.CANVASSCENEW + 10 >= npccomponent.posx) npccomponent.active = active = true;
				if (active) callback();
			};

			npcs.forEach(function (npccomponent) {
				return ifActive(npccomponent, function () {
					return npccomponent.moveX(npccomponent.direction == 1 ? npccomponent.dx : -npccomponent.dx);
				});
			});
			npcs.forEach(function (npccomponent) {
				return ifActive(npccomponent, function () {
					return npccomponent.animate(time, scene);
				});
			});
			npcs.forEach(function (npccomponent) {
				return ifActive(npccomponent, function () {
					return npccomponent.lookForActions(scene);
				});
			});

			this.removeNPCIfRequired(scene);
		}
	}, {
		key: 'removeNPCIfRequired',
		value: function removeNPCIfRequired(scene) {
			var npcs = this.npcs;
			for (var i = 0; i < npcs.length; i++) {
				var _ref = [npcs[i], npcs[i].componentIdentifier],
				    npc = _ref[0],
				    npcID = _ref[1];

				if (npc._shouldBeRemoved) {
					npcs.splice(i--, 1);
					scene.unbindComponent(npcID);
				}
			}
		}
	}]);

	return NPCContainer;
}();

exports.default = NPCContainer;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvasComponent = __webpack_require__(0);

var _canvasComponent2 = _interopRequireDefault(_canvasComponent);

var _collision = __webpack_require__(6);

var _collision2 = _interopRequireDefault(_collision);

var _GraphicalTextContainer = __webpack_require__(2);

var _stat = __webpack_require__(5);

var _stat2 = _interopRequireDefault(_stat);

var _misc = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NPC = function (_CanvasComponent) {
	_inherits(NPC, _CanvasComponent);

	function NPC(w, h, filling, posx, posy, type, sx, sy, sw, sh) {
		_classCallCheck(this, NPC);

		var _this = _possibleConstructorReturn(this, (NPC.__proto__ || Object.getPrototypeOf(NPC)).call(this, w, h, filling, posx, posy, type, sx, sy, sw, sh));

		var WALKING = 0,
		    STOMPED = 1,
		    FLYING = 2,
		    HIT = 3,
		    BUMP = 4;
		/* MAY BE REDEFINED IN CHILD CLASS */

		_this.direction = 0;
		_this.dx = 1;
		_this.dy = 6.5;
		_this.scoreValue = 100;
		_this.states = { WALKING: WALKING, STOMPED: STOMPED, FLYING: FLYING, HIT: HIT, BUMP: BUMP };
		return _this;
	}

	_createClass(NPC, [{
		key: '_isUnderScene',
		value: function _isUnderScene() {
			return this.posy > _misc.CANVASSCENEH;
		}

		/* SHOULD BE REDEFINED IN CHILD CLASS */

	}, {
		key: 'hit',
		value: function hit() {}
	}, {
		key: 'stomp',
		value: function stomp() {}
	}, {
		key: 'bump',
		value: function bump() {
			this.state = this.states.BUMP;
		}
	}, {
		key: 'clearBump',
		value: function clearBump() {
			delete this.state;
			delete this.upDownAnimationInitialized;
			delete this.inittime;
			delete this.animationDownStage;
		}
	}, {
		key: 'moveX',
		value: function moveX(dx) {
			this.posx = this.posx + dx;
		}
	}, {
		key: 'moveY',
		value: function moveY(dy) {
			this.posy = this.posy + dy;
		}
	}, {
		key: '_animateUpDown',
		value: function _animateUpDown(durationUp, initDy, time) {
			if (!this.upDownAnimationInitialized) {
				this.inittime = time;
				this.upDownAnimationInitialized = true;
			}
			var di = time - this.inittime;
			if (di <= durationUp) this.moveY(-initDy + initDy * (di / durationUp));else {
				var dy = (time - (this.inittime + durationUp)) / 40;
				var dyMax = 10;
				if (dy > dyMax) dy = dyMax;
				this.moveY(dy);
				if (this._isUnderScene()) this._shouldBeRemoved = true;
				this.animationDownStage = true;
			}
		}
	}, {
		key: 'animationBump',
		value: function animationBump(time, scene) {
			if (this.state == this.states.BUMP) this._animateUpDown(150, this.dy * 1.2, time);
		}
	}, {
		key: 'animationHit',
		value: function animationHit(time, scene) {
			if (this.state == this.states.HIT) {
				if (!this.upDownAnimationInitialized) {
					var score = this.scoreValue * 2;
					_stat2.default.score(scene, score);
					(0, _GraphicalTextContainer.bindGraphicalTextContainer)(undefined, scene, '' + score, this.posx + this.width / 2, this.posy - 40, 1.4, 600, 35, 1);
				}
				this._animateUpDown(400, this.dy * 1.2, time);
			}
		}
	}, {
		key: 'lookForCollisions',
		value: function lookForCollisions(scene) {
			var PLAYER = false,
			    HIT = false,
			    PIT = [],
			    NPC = [],
			    NCC = [],
			    OFFSET = { dx: 0, dy: 0 };

			var res = { PLAYER: PLAYER, HIT: HIT, PIT: PIT, NPC: NPC, NCC: NCC, OFFSET: OFFSET };

			var playerComponentIdentifier = 'player',
			    NPCPREFIXRE = /^(?:npc|mushroom)\-/,
			    T = 'T',
			    L = 'L',
			    R = 'R',
			    B = 'B',
			    UNKNOWN = 'UNKNOWN';


			var components = scene.getAllBindings();
			var collisions = _collision2.default.detect(components, this).collisions;

			for (var i = 0; i < collisions.length; i++) {
				var _ref = [collisions[i].collisionType, collisions[i].collisionOffset, collisions[i].componentIdentifier],
				    collisionType = _ref[0],
				    collisionOffset = _ref[1],
				    componentIdentifier = _ref[2];


				var component = scene.getBindedComponent(componentIdentifier);

				var isPlayerComponent = componentIdentifier == playerComponentIdentifier;
				var isNPCComponent = NPCPREFIXRE.test(componentIdentifier);
				var isNCCComponent = componentIdentifier != playerComponentIdentifier && !NPCPREFIXRE.test(componentIdentifier);

				var npcL = isNPCComponent && collisionType == L;
				var npcR = isNPCComponent && collisionType == R;

				var nссL = isNCCComponent && collisionType == L;
				var nссR = isNCCComponent && collisionType == R;
				var nссT = isNCCComponent && collisionType == T;
				var nссB = isNCCComponent && collisionType == B;

				var UNKNOWNTYPECOLLISION = collisionType == UNKNOWN;

				var collidesComponentInHitMode = !!component.inHitMode;

				var PITL = collisionType == T && this.posx + this.width >= component.posx + component.width;
				var PITR = collisionType == T && this.posx <= component.posx;

				var playerComponent = undefined;
				if (isPlayerComponent) playerComponent = scene.getBindedComponent(playerComponentIdentifier);

				if (UNKNOWNTYPECOLLISION) res.UNKNOWNTYPECOLLISION = true;

				if (PITL) if (res.PIT.includes(L) == false) res.PIT.push(L);
				if (PITR) if (res.PIT.includes(R) == false) res.PIT.push(R);

				if (npcL) if (res.NPC.includes(L) == false) res.NPC.push(L);
				if (npcR) if (res.NPC.includes(R) == false) res.NPC.push(R);

				if (nссL) if (res.NCC.includes(L) == false) res.NCC.push(L);
				if (nссR) if (res.NCC.includes(R) == false) res.NCC.push(R);
				if (nссT) if (res.NCC.includes(T) == false) res.NCC.push(T);
				if (nссB) if (res.NCC.includes(B) == false) res.NCC.push(B);

				// STOMP
				var player2 = isPlayerComponent && collisionType == B && playerComponent.completedUp == true && !playerComponent.collidedNPC;
				// DIE
				var player1 = isPlayerComponent && (collisionType == T || collisionType == L || collisionType == R || collisionType == UNKNOWN && !playerComponent.collidedNPC || collisionType == B && playerComponent.completedUp == false && !playerComponent.collidedNPC);

				if (player1) res.PLAYER = 1;
				if (player2) res.PLAYER = 2;

				if (!res.HIT && collidesComponentInHitMode) res.HIT = true;

				if (nссT) res.OFFSET.dy = collisionOffset;
				if (nссL || nссR || npcL || npcR) res.OFFSET.dx = collisionOffset;
			}

			// @res.PLAYER = 1 DIE
			// @res.PLAYER = 2 STOMP
			// @res.NCC = [L,R,T,B]
			// @res.NPC = [L,R]
			// @res.PIT = [L,R]
			// @res.HIT = true | false
			// @res.OFFSET {dx, dy}
			// @res.UNKNOWNTYPECOLLISION
			res.collisions = collisions;
			return res;
		}
	}, {
		key: 'lookForActions',
		value: function lookForActions(scene) {
			var _this2 = this;

			if (this.collidable == false) return false;

			var state = void 0;
			var playerComponentID = 'player',
			    T = 'T',
			    L = 'L',
			    R = 'R',
			    B = 'B';

			var isBonusComponent = this.bonusComponent == true;
			var isBumpState = this.state == this.states.BUMP;

			var processCollisionWithPlayer = function processCollisionWithPlayer(scene) {
				var collided = false;
				var playerComponent = void 0;
				state = _this2.lookForCollisions(scene);
				if (state.PLAYER == 1 || state.PLAYER == 2) {
					collided = true;
					playerComponent = scene.getBindedComponent(playerComponentID);
				}
				if (isBonusComponent) {
					if (collided) playerComponent.collideBonus(scene, [_this2.componentIdentifier]);
				} else {
					if (state.PLAYER == 1) playerComponent.die(scene, true, true);
					if (state.PLAYER == 2) playerComponent.collideNPC(scene, _this2.scoreValue);
					if (state.PLAYER == 2) _this2.stomp();
				}
				return collided;
			};

			if (processCollisionWithPlayer(scene)) return false;else {
				var _ref2 = [this._isUnderScene(), state.HIT == true, state.PIT.includes(L), state.PIT.includes(R), state.NCC.includes(L), state.NCC.includes(R), state.NCC.includes(T), state.NPC.includes(L), state.NPC.includes(R)],
				    UNDERSCENE = _ref2[0],
				    HIT = _ref2[1],
				    PITL = _ref2[2],
				    PITR = _ref2[3],
				    NCCL = _ref2[4],
				    NCCR = _ref2[5],
				    NCCT = _ref2[6],
				    NPCL = _ref2[7],
				    NPCR = _ref2[8];

				if (UNDERSCENE) return this._shouldBeRemoved = true;
				if (HIT) if (!isBonusComponent) return this.hit();
				if (NCCL || NCCR) this.moveX(state.OFFSET.dx);
				if (this.direction == 1 && (PITL && this.detectsPit || NCCL || NPCL && !this.inHitMode)) this.direction = 0;
				if (this.direction == 0 && (PITR && this.detectsPit || NCCR || NPCR && !this.inHitMode)) this.direction = 1;
			}
			if (isBumpState) {
				if (this.animationDownStage) {
					if (state.NCC.includes(T)) {
						this.clearBump();
						this.moveY(state.OFFSET.dy);
					}
				}
			} else {
				if (!state.UNKNOWNTYPECOLLISION && !state.NCC.includes(T)) {
					this.moveY(this.dy);
					if (processCollisionWithPlayer(scene)) return false;
					if (state.NCC.includes(T)) this.moveY(state.OFFSET.dy);
				}
			}
		}
	}]);

	return NPC;
}(_canvasComponent2.default);

exports.default = NPC;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _misc = __webpack_require__(1);

var _sound = __webpack_require__(3);

var _raf = __webpack_require__(26);

var _raf2 = _interopRequireDefault(_raf);

var _keyboard = __webpack_require__(13);

var _keyboard2 = _interopRequireDefault(_keyboard);

var _control = __webpack_require__(14);

var _control2 = _interopRequireDefault(_control);

var _collision = __webpack_require__(6);

var _collision2 = _interopRequireDefault(_collision);

var _canvasComponent = __webpack_require__(0);

var _canvasComponent2 = _interopRequireDefault(_canvasComponent);

var _PlayerBoxComponent = __webpack_require__(15);

var _PlayerBoxComponent2 = _interopRequireDefault(_PlayerBoxComponent);

var _PipeBoxComponent = __webpack_require__(8);

var _PipeBoxComponent2 = _interopRequireDefault(_PipeBoxComponent);

var _TransparentBoxComponent = __webpack_require__(4);

var _TransparentBoxComponent2 = _interopRequireDefault(_TransparentBoxComponent);

var _GraphicalTextContainer = __webpack_require__(2);

var _GraphicalTextContainer2 = _interopRequireDefault(_GraphicalTextContainer);

var _L11Container = __webpack_require__(28);

var _L11Container2 = _interopRequireDefault(_L11Container);

var _L12Container = __webpack_require__(33);

var _L12Container2 = _interopRequireDefault(_L12Container);

var _NPCContainer = __webpack_require__(10);

var _NPCContainer2 = _interopRequireDefault(_NPCContainer);

var _stat = __webpack_require__(5);

var _stat2 = _interopRequireDefault(_stat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var delta = 32,
    FLOORH = 64,
    OW = 'overworld',
    UG = 'underground',
    BLACK = '#000',
    WHITE = '#fff',
    BGIdentifier = 'bg',
    playerBoxComponentIdentifier = 'player';

var Display = function () {
	function Display() {
		_classCallCheck(this, Display);
	}

	_createClass(Display, null, [{
		key: 'clear',
		value: function clear(scene) {
			_raf2.default.endLaunched();
			_collision2.default.deleteLastPXPYWHMap();
			_control2.default.clear();
			var components = scene.getAllBindings();
			var componentsForAnimation = scene.getBindedComponentsForAnimation();
			components.map(function (component) {
				return component.componentIdentifier;
			}).forEach(function (componentIdentifier) {
				return scene.unbindComponent(componentIdentifier);
			});
			while (0 < componentsForAnimation.length) {
				scene.unbindComponentForAnimation(componentsForAnimation[0]);
			}
		}
	}, {
		key: '_initBGM',
		value: function _initBGM(backgroundMusic, I6) {
			_sound.Music.initBackgroundMusic(backgroundMusic);
			if (I6) return _sound.Music.playBackgroundMusic();
			if (_stat2.default.currentTime > 100) {
				_sound.Music.playBackgroundMusic();
			} else _sound.Music.playBackgroundMusicAccelerated();
		}
	}, {
		key: '_render',
		value: function _render(scene, components, playerBoxComponent, fpsColor) {
			_raf2.default.launch(function (passedTime) {
				_collision2.default.updateLastPXPYWHMap(components);
				scene.animate(passedTime);
				playerBoxComponent.control(passedTime, components, scene, _control2.default);
				scene.render(true);
				scene.fps(fpsColor);
			});
		}
	}, {
		key: '_renderLocation',
		value: function _renderLocation(scene, container, backgroundMusic) {
			var fpsColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : BLACK;
			var directionDown = arguments[4];
			var pipeComponentIdentifier = arguments[5];
			var playerPlacement = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];
			var time = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 400;

			this.clear(scene);
			var isQBC = function isQBC(componentIdentifier) {
				return (/^(qbc)/i.test(componentIdentifier)
				);
			};
			var isCBC = function isCBC(componentIdentifier) {
				return (/^(cbc)/i.test(componentIdentifier)
				);
			};
			var isPlatformContainerComponent = function isPlatformContainerComponent(componentIdentifier) {
				return (/^(container\-platform\-(\d+))$/.test(componentIdentifier)
				);
			};
			var LocationContainer = container;

			var _ref = new LocationContainer(),
			    NPCComponents = _ref.NPCComponents,
			    NCCComponents = _ref.NCCComponents;

			var playerBoxComponent = undefined;
			scene.bindComponent({ _components: NCCComponents });
			var NPCC = new _NPCContainer2.default(NPCComponents);
			scene.bindComponent(NPCC);
			scene.bindComponent(NPCC, NPCC.componentIdentifier);
			scene.bindComponentForAnimation(NPCC.componentIdentifier);
			var components = scene.getAllBindings();
			components.filter(function (component) {
				return isPlatformContainerComponent(component.componentIdentifier) || isQBC(component.componentIdentifier) || isCBC(component.componentIdentifier);
			}).forEach(function (component) {
				return scene.bindComponentForAnimation(component.componentIdentifier);
			});
			if (pipeComponentIdentifier) {
				var _ref2 = [scene.getBindedComponent(pipeComponentIdentifier), 100],
				    pipe = _ref2[0],
				    additionalDx = _ref2[1];

				var dx = -pipe.posx + additionalDx;
				scene.move(dx);
				_stat2.default.display(scene, 0, 0, 0);
				scene.bindComponent(playerBoxComponent = new _PlayerBoxComponent2.default(0, 0), playerBoxComponentIdentifier);
				playerBoxComponent.moveFromPipe(scene, pipe, function () {
					_control2.default.init();
					_stat2.default.time(scene, _stat2.default.currentTime, true);
				});
			} else {
				if (directionDown) _control2.default.DIRECTIONDOWN = true;
				playerBoxComponent = new _PlayerBoxComponent2.default(playerPlacement[0], playerPlacement[1]);
				scene.bindComponent(playerBoxComponent, playerBoxComponentIdentifier);
				_control2.default.init();
				_stat2.default.currentTime = time;
				_stat2.default.display(scene, 0, 1, 0);
			}
			this._initBGM(backgroundMusic);
			this._render(scene, components, playerBoxComponent, fpsColor);
		}
	}, {
		key: '_renderBonusLocation',
		value: function _renderBonusLocation(scene, container, location, backgroundMusic) {
			var fpsColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : WHITE;
			var directionDown = arguments[5];
			var pipeComponentIdentifier = arguments[6];
			var playerPlacement = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [];

			this.clear(scene);
			var isQBC = function isQBC(componentIdentifier) {
				return (/^(qbc)/i.test(componentIdentifier)
				);
			};
			var isCBC = function isCBC(componentIdentifier) {
				return (/^(cbc)/i.test(componentIdentifier)
				);
			};
			var isPlatformContainerComponent = function isPlatformContainerComponent(componentIdentifier) {
				return (/^(container\-platform\-(\d+))$/.test(componentIdentifier)
				);
			};
			var LocationContainer = container;
			var locationContainerInstance = new LocationContainer();
			var locationContainerProperty = 'B' + location + 'Components';
			var BComponents = locationContainerInstance[locationContainerProperty];
			scene.bindComponent({ _components: BComponents });
			var components = scene.getAllBindings();
			components.filter(function (component) {
				return isPlatformContainerComponent(component.componentIdentifier) || isQBC(component.componentIdentifier) || isCBC(component.componentIdentifier);
			}).forEach(function (component) {
				return scene.bindComponentForAnimation(component.componentIdentifier);
			});
			var playerBoxComponent = undefined;
			if (pipeComponentIdentifier) {
				var _ref3 = [scene.getBindedComponent(pipeComponentIdentifier), 100],
				    pipe = _ref3[0],
				    additionalDx = _ref3[1];

				var dx = -pipe.posx + additionalDx;
				scene.move(dx);
				_stat2.default.display(scene, 0, 0, 0);
				scene.bindComponent(playerBoxComponent = new _PlayerBoxComponent2.default(0, 0), playerBoxComponentIdentifier);
				playerBoxComponent.moveFromPipe(scene, pipe, function () {
					_control2.default.init();
					_stat2.default.time(scene, _stat2.default.currentTime, true);
				});
			} else {
				if (directionDown) _control2.default.DIRECTIONDOWN = true;
				playerBoxComponent = new _PlayerBoxComponent2.default(playerPlacement[0], playerPlacement[1]);
				scene.bindComponent(playerBoxComponent, playerBoxComponentIdentifier);
				_control2.default.init();
				_stat2.default.display(scene, 0, 1, 0);
			}
			this._initBGM(backgroundMusic);
			this._render(scene, components, playerBoxComponent, fpsColor);
		}
	}, {
		key: 'I0',
		value: function I0(scene) {
			var TX1 = '\xA9 2018 PROGRAMMED BY NEUMANN IVAN',
			    TXS = 1.75,
			    ESImageIdentifier = 'es',
			    DURATION = 250,
			    DELAY = 1500,
			    GTCRE = /^gtc\-/,
			    U = undefined;
			var _ref4 = [],
			    inittime = _ref4[0],
			    animationStage1 = _ref4[1],
			    animationStage2 = _ref4[2],
			    animationStage3 = _ref4[3],
			    animationStage4 = _ref4[4],
			    animationStage5 = _ref4[5],
			    animationStage6 = _ref4[6],
			    animationStage7 = _ref4[7],
			    animationStage8 = _ref4[8],
			    animationStage9 = _ref4[9],
			    animationStage10 = _ref4[10];

			var durationIndex = function durationIndex(time, duration, index) {
				if (!inittime) inittime = time;
				if ((index = (time - inittime) / duration) >= 1) {
					index = 1;
					inittime = U;
				}
				return index;
			};
			scene.bindComponent(new _canvasComponent2.default(_misc.CANVASSCENEW, _misc.CANVASSCENEH, BLACK, 0, 0), BGIdentifier);
			scene.bindComponent(new _canvasComponent2.default(128, 128, _canvasComponent2.default.SPRITES.ES, (_misc.CANVASSCENEW - 128) / 2, (_misc.CANVASSCENEH - 128) / 2, 'image', U, U, U, U, 0), ESImageIdentifier);
			scene.bindComponent(new _GraphicalTextContainer2.default(TX1, (_misc.CANVASSCENEW - 7 * TXS * TX1.length) / 2, (_misc.CANVASSCENEH - 7 * TXS) / 2, TXS, U, U, 0));
			scene.render(true);
			_raf2.default.launch(function (time) {
				var DURATIONINDEX = void 0;
				if (!animationStage1) {
					DURATIONINDEX = durationIndex(time, DELAY);
					if (DURATIONINDEX < 1) return false;else animationStage1 = true;
				} else if (!animationStage2) {
					DURATIONINDEX = durationIndex(time, DURATION);
					scene.getAllBindings().filter(function (component) {
						return GTCRE.test(component.componentIdentifier);
					}).map(function (component) {
						return component.component;
					}).forEach(function (component) {
						return component.alpha = DURATIONINDEX;
					});
					if (DURATIONINDEX == 1) animationStage2 = true;
				} else if (!animationStage3) {
					DURATIONINDEX = durationIndex(time, DELAY);
					if (DURATIONINDEX < 1) return false;else animationStage3 = true;
				} else if (!animationStage4) {
					DURATIONINDEX = durationIndex(time, DURATION);
					var components = scene.getAllBindings().filter(function (component) {
						return GTCRE.test(component.componentIdentifier);
					});
					components.map(function (component) {
						return component.component;
					}).forEach(function (component) {
						return component.alpha = 1 - DURATIONINDEX;
					});
					if (DURATIONINDEX == 1) {
						components.map(function (component) {
							return component.componentIdentifier;
						}).forEach(function (componentIdentifier) {
							return scene.unbindComponent(componentIdentifier);
						});
						animationStage4 = true;
					}
				} else if (!animationStage5) {
					DURATIONINDEX = durationIndex(time, DELAY / 2);
					if (DURATIONINDEX < 1) return false;else animationStage5 = true;
				} else if (!animationStage6) {
					DURATIONINDEX = durationIndex(time, DURATION);
					scene.getBindedComponent(ESImageIdentifier).alpha = DURATIONINDEX;
					if (DURATIONINDEX == 1) animationStage6 = true;
				} else if (!animationStage7) {
					DURATIONINDEX = durationIndex(time, DELAY);
					if (DURATIONINDEX < 1) return false;else animationStage7 = true;
				} else if (!animationStage8) {
					DURATIONINDEX = durationIndex(time, DURATION);
					scene.getBindedComponent(ESImageIdentifier).alpha = 1 - DURATIONINDEX;
					if (DURATIONINDEX == 1) animationStage8 = true;
				} else if (!animationStage9) {
					DURATIONINDEX = durationIndex(time, DELAY - 1000);
					if (DURATIONINDEX < 1) return false;else animationStage9 = true;
				} else if (!animationStage10) {
					_raf2.default.endLaunched();
					Display.I4(scene);
				}
				scene.render(true);
			});
		}
	}, {
		key: 'I1',
		value: function I1(scene) {
			var _this = this;

			var isTransition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

			var W = _stat2.default.currentWorld;
			var world = function world(_world) {
				return (0, _misc.after)(3e3, function () {
					if (isTransition && (W == 12 || W == 22 || W == 42 || W == 72)) _this.I6(scene);else _this[_world](scene);
				});
			};
			this.clear(scene);
			_stat2.default.display(scene, 1, 0, 1);
			scene.render(true);
			switch (W) {
				case 11:
					world('L11');break;
				case 12:
					world('L12');break;
				case 13:
					world('L13');break;
				case 14:
					world('L14');break;
				case 21:
					world('L21');break;
				case 22:
					world('L22');break;
				case 23:
					world('L23');break;
				case 24:
					world('L24');break;
				case 31:
					world('L31');break;
				case 32:
					world('L32');break;
				case 33:
					world('L33');break;
				case 34:
					world('L34');break;
				case 41:
					world('L41');break;
				case 42:
					world('L42');break;
				case 43:
					world('L43');break;
				case 44:
					world('L44');break;
				case 51:
					world('L51');break;
				case 52:
					world('L52');break;
				case 53:
					world('L53');break;
				case 54:
					world('L54');break;
				case 61:
					world('L61');break;
				case 62:
					world('L62');break;
				case 63:
					world('L63');break;
				case 64:
					world('L64');break;
				case 71:
					world('L71');break;
				case 72:
					world('L72');break;
				case 73:
					world('L73');break;
				case 74:
					world('L74');break;
				case 81:
					world('L81');break;
				case 82:
					world('L82');break;
				case 83:
					world('L83');break;
				case 84:
					world('L84');break;
			}
		}
	}, {
		key: 'I2',
		value: function I2(scene) {
			var _this2 = this;

			var TX1 = 'TIME UP',
			    TXS = 2,
			    DELAY = 3e3;

			this.clear(scene);
			_stat2.default.display(scene, 1, 0, 0);
			scene.bindComponent(new _GraphicalTextContainer2.default(TX1, (_misc.CANVASSCENEW - 7 * TXS * TX1.length) / 2, (_misc.CANVASSCENEH - 7 * TXS) / 2, TXS));
			scene.render(true);
			(0, _misc.after)(DELAY, function () {
				return _this2.I3(scene);
			});
		}
	}, {
		key: 'I3',
		value: function I3(scene) {
			var _this3 = this;

			var TX1 = 'GAME OVER',
			    TXS = 2,
			    DELAY = 10e3;

			this.clear(scene);
			_stat2.default.display(scene, 1, 0, 0);
			scene.bindComponent(new _GraphicalTextContainer2.default(TX1, (_misc.CANVASSCENEW - 7 * TXS * TX1.length) / 2, (_misc.CANVASSCENEH - 7 * TXS) / 2, TXS));
			scene.render(true);
			(0, _misc.after)(DELAY, function () {
				return _this3.I4(scene, true);
			});
		}
	}, {
		key: 'I4',
		value: function I4(scene) {
			var _this4 = this;

			var tryAgainText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var TX1 = 'PRESS ENTER TO ' + (tryAgainText ? 'TRY AGAIN' : 'START'),
			    TXS = 1.75;

			this.clear(scene);
			_stat2.default.default();
			scene.bindComponent(new _canvasComponent2.default(_misc.CANVASSCENEW, _misc.CANVASSCENEH, BLACK, 0, 0), BGIdentifier);
			scene.bindComponent(new _GraphicalTextContainer2.default(TX1, (_misc.CANVASSCENEW - 7 * TXS * TX1.length) / 2, (_misc.CANVASSCENEH - 7 * TXS) / 2, TXS));
			scene.render(true);
			_keyboard2.default.ENTER(function () {
				return _this4.I1(scene);
			});
		}
	}, {
		key: 'I5',
		value: function I5(scene, locationLoadingData) {
			var _this5 = this;

			var DELAY = 550;

			this.clear(scene);
			scene.bindComponent(new _canvasComponent2.default(_misc.CANVASSCENEW, _misc.CANVASSCENEH, BLACK, 0, 0), BGIdentifier);
			scene.render(true);
			(0, _misc.after)(DELAY, function () {
				if (locationLoadingData.length == 1) {
					_this5[locationLoadingData[0]](scene, undefined);
				} else if (locationLoadingData.length == 2) {
					if (/^B/i.test(locationLoadingData[1])) {
						var bonusLevelMethod = '' + locationLoadingData[0] + locationLoadingData[1];
						_this5[bonusLevelMethod](scene);
					} else if (/^pbc/i.test(locationLoadingData[1])) {
						_this5[locationLoadingData[0]](scene, locationLoadingData[1]);
					}
				}
			});
		}
	}, {
		key: 'I6',
		value: function I6(scene) {
			var _ref5 = [_stat2.default.currentWorld, undefined, 2300],
			    W = _ref5[0],
			    U = _ref5[1],
			    PLAYBACKDURATION = _ref5[2];

			this.clear(scene);
			scene.bindComponent(new _canvasComponent2.default(_misc.CANVASSCENEW, _misc.CANVASSCENEH, _canvasComponent2.default.SPRITES.TRANSITION, 0, 0, 'image', U, U, U, U, 1), BGIdentifier);
			_stat2.default.display(scene, 0, 0, 0);
			var pipeBoxComponentIdentifier1 = 'pbc1p1',
			    pipeBoxComponentIdentifier2 = 'pbc1p2',
			    floorBoxComponentIdentifier = 'fbc1';

			scene.bindComponent(new _PipeBoxComponent2.default(delta * 10, _misc.CANVASSCENEH - FLOORH * 2, [4, 1], true, ['L' + W]), pipeBoxComponentIdentifier1);
			scene.bindComponent(new _canvasComponent2.default((220 - 188) * 2, (417 - 385) * 2, _canvasComponent2.default.SPRITES.PSTF, delta * 12, _misc.CANVASSCENEH - FLOORH * 2 - (417 - 385) * 2, 'sprite', 188, 385, 220 - 188, 417 - 385, 1), pipeBoxComponentIdentifier2);
			scene.bindComponent(new _TransparentBoxComponent2.default(0, _misc.CANVASSCENEH - FLOORH, delta * 23, FLOORH), floorBoxComponentIdentifier);
			_control2.default.DIRECTIONRIGHT = true;
			var playerBoxComponent = new _PlayerBoxComponent2.default(0, 0);
			var WALKING = playerBoxComponent.movement.modes.WALKING;

			playerBoxComponent.movement.mode = WALKING;
			playerBoxComponent.posx = delta * 2;
			playerBoxComponent.posy = _misc.CANVASSCENEH - FLOORH - playerBoxComponent.height;
			scene.bindComponent(playerBoxComponent, playerBoxComponentIdentifier);
			var components = scene.getAllBindings();
			(0, _misc.after)(PLAYBACKDURATION, function () {
				_sound.Music.stopBackgroundMusic();
			});
			this._initBGM(OW, true);
			this._render(scene, components, playerBoxComponent, BLACK);
		}
	}, {
		key: 'L11',
		value: function L11(scene, pipeComponentIdentifier) {
			this._renderLocation(scene, _L11Container2.default, OW, BLACK, false, pipeComponentIdentifier, [delta * 4, _misc.CANVASSCENEH - FLOORH - delta], 400);
		}
	}, {
		key: 'L12',
		value: function L12(scene, pipeComponentIdentifier) {
			this._renderLocation(scene, _L12Container2.default, UG, WHITE, !!pipeComponentIdentifier ? false : true, pipeComponentIdentifier, [delta * 2, delta * 2], 400);
		}
	}, {
		key: 'L13',
		value: function L13(scene, pipeComponentIdentifier) {}
	}, {
		key: 'L11B1',
		value: function L11B1(scene) {
			this._renderBonusLocation(scene, _L11Container2.default, 1, UG, WHITE, true, undefined, [delta * 2, delta * 2]);
		}
	}, {
		key: 'L12B1',
		value: function L12B1(scene) {
			this._renderBonusLocation(scene, _L12Container2.default, 1, UG, WHITE, true, undefined, [delta * 7, delta * 2]);
		}
	}, {
		key: 'L12B2',
		value: function L12B2(scene, pipeComponentIdentifier) {
			this._renderBonusLocation(scene, _L12Container2.default, 2, OW, BLACK, false, pipeComponentIdentifier);
		}
	}]);

	return Display;
}();

exports.default = Display;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _misc = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var keyDownEventHandler1 = void 0,
    keyDownEventHandler2 = void 0,
    keyDownEventHandler3 = void 0,
    keyUpEventHandler1 = void 0,
    keyUpEventHandler2 = void 0,
    keyDownEventHandler4 = void 0,
    keyUpEventHandler4 = void 0;

var event = window.addEventListener;
var eventRemove = window.removeEventListener;

var Keyboard = function () {
	function Keyboard() {
		_classCallCheck(this, Keyboard);
	}

	_createClass(Keyboard, null, [{
		key: '_ifLR',
		value: function _ifLR(event) {
			return event.keyCode == 39 || event.keyCode == 37;
		}
	}, {
		key: '_ifspace',
		value: function _ifspace(event) {
			return event.keyCode == 32;
		}
	}, {
		key: '_ifenter',
		value: function _ifenter(event) {
			return event.keyCode == 13;
		}
	}, {
		key: '_ifdown',
		value: function _ifdown(event) {
			return event.keyCode == 40;
		}
	}, {
		key: 'space',
		value: function space(downEventHanlder, upEventHandler) {
			event(Keyboard.KEYDOWN, keyDownEventHandler1 = function keyDownEventHandler1(event) {
				if (Keyboard._ifspace(event)) {
					if (!Keyboard._spacepressed) {
						Keyboard._spacepressed = true;
						if ((0, _misc.isfunc)(downEventHanlder)) downEventHanlder(event.keyCode);
					}
				}
			});
			event(Keyboard.KEYUP, keyUpEventHandler1 = function keyUpEventHandler1(event) {
				if (Keyboard._ifspace(event)) {
					Keyboard._spacepressed = false;
					if ((0, _misc.isfunc)(upEventHandler)) upEventHandler(event.keyCode);
				}
			});
		}
	}, {
		key: 'LR',
		value: function LR(downEventHanlder, upEventHandler) {
			event(Keyboard.KEYDOWN, keyDownEventHandler2 = function keyDownEventHandler2(event) {
				if (Keyboard._ifLR(event)) {
					if (Keyboard._LRpressedCode != event.keyCode) {
						Keyboard._LRpressedCode = event.keyCode;
						if ((0, _misc.isfunc)(downEventHanlder)) downEventHanlder(event.keyCode);
					}
				}
			});
			event(Keyboard.KEYUP, keyUpEventHandler2 = function keyUpEventHandler2(event) {
				if (Keyboard._ifLR(event)) {
					if (Keyboard._LRpressedCode == event.keyCode) {
						Keyboard._LRpressedCode = false;
						if ((0, _misc.isfunc)(upEventHandler)) upEventHandler(event.keyCode);
					}
				}
			});
		}
	}, {
		key: 'ENTER',
		value: function ENTER(downEventHanlder) {
			event(Keyboard.KEYDOWN, keyDownEventHandler3 = function keyDownEventHandler3(event) {
				if (Keyboard._ifenter(event)) downEventHanlder();
			});
		}
	}, {
		key: 'DOWN',
		value: function DOWN(downEventHanlder, upEventHandler) {
			event(Keyboard.KEYDOWN, keyDownEventHandler4 = function keyDownEventHandler4(event) {
				if (Keyboard._ifdown(event)) {
					if (Keyboard._downPressedCode != event.keyCode) {
						Keyboard._downPressedCode = event.keyCode;
						if ((0, _misc.isfunc)(downEventHanlder)) downEventHanlder(event.keyCode);
					}
				}
			});
			event(Keyboard.KEYUP, keyUpEventHandler4 = function keyUpEventHandler4(event) {
				if (Keyboard._ifdown(event)) {
					if (Keyboard._downPressedCode == event.keyCode) {
						Keyboard._downPressedCode = false;
						if ((0, _misc.isfunc)(upEventHandler)) upEventHandler(event.keyCode);
					}
				}
			});
		}
	}, {
		key: 'detachEvents',
		value: function detachEvents() {
			eventRemove(Keyboard.KEYUP, keyUpEventHandler1);
			eventRemove(Keyboard.KEYUP, keyUpEventHandler2);
			eventRemove(Keyboard.KEYDOWN, keyDownEventHandler1);
			eventRemove(Keyboard.KEYDOWN, keyDownEventHandler2);

			eventRemove(Keyboard.KEYDOWN, keyDownEventHandler3);

			eventRemove(Keyboard.KEYDOWN, keyDownEventHandler4);
			eventRemove(Keyboard.KEYUP, keyUpEventHandler4);
		}
	}]);

	return Keyboard;
}();

Keyboard.KEYUP = 'keyup';
Keyboard.KEYDOWN = 'keydown';

exports.default = Keyboard;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keyboard = __webpack_require__(13);

var _keyboard2 = _interopRequireDefault(_keyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = [],
    SPACEPRESSED = _ref[0],
    DOWNPRESSED = _ref[1],
    DIRECTIONLEFT = _ref[2],
    DIRECTIONRIGHT = _ref[3],
    DIRECTIONUPDOWN = _ref[4],
    DIRECTIONDOWN = _ref[5],
    _ref$ = _ref[6],
    INITIALIZED = _ref$ === undefined ? false : _ref$;

var control = { SPACEPRESSED: SPACEPRESSED, DOWNPRESSED: DOWNPRESSED, DIRECTIONLEFT: DIRECTIONLEFT, DIRECTIONRIGHT: DIRECTIONRIGHT, DIRECTIONUPDOWN: DIRECTIONUPDOWN, DIRECTIONDOWN: DIRECTIONDOWN, INITIALIZED: INITIALIZED };

control.init = function () {

	control.INITIALIZED = true;

	_keyboard2.default.space(function () {
		control.DIRECTIONUPDOWN = true;
		control.SPACEPRESSED = true;
	}, function () {
		return control.SPACEPRESSED = false;
	});

	_keyboard2.default.LR(function (code) {
		control.DIRECTIONLEFT = code == 37;
		control.DIRECTIONRIGHT = code == 39;
	}, function () {
		return control.DIRECTIONLEFT = control.DIRECTIONRIGHT = false;
	});

	_keyboard2.default.DOWN(function () {
		return control.DOWNPRESSED = true;
	}, function () {
		return control.DOWNPRESSED = false;
	});
};

control.clear = function () {
	return _keyboard2.default.detachEvents(control.SPACEPRESSED = control.DOWNPRESSED = control.DIRECTIONLEFT = control.DIRECTIONRIGHT = control.DIRECTIONUPDOWN = control.DIRECTIONDOWN = undefined);
};

exports.default = control;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _misc = __webpack_require__(1);

var _canvasComponent = __webpack_require__(0);

var _canvasComponent2 = _interopRequireDefault(_canvasComponent);

var _collision = __webpack_require__(6);

var _collision2 = _interopRequireDefault(_collision);

var _control2 = __webpack_require__(14);

var _control3 = _interopRequireDefault(_control2);

var _sound = __webpack_require__(3);

var _GraphicalTextContainer = __webpack_require__(2);

var _ControlPointComponent = __webpack_require__(7);

var _ControlPointComponent2 = _interopRequireDefault(_ControlPointComponent);

var _CoinBonusComponent = __webpack_require__(16);

var _CoinBonusComponent2 = _interopRequireDefault(_CoinBonusComponent);

var _display = __webpack_require__(12);

var _display2 = _interopRequireDefault(_display);

var _stat = __webpack_require__(5);

var _stat2 = _interopRequireDefault(_stat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = Object.entries;

var PlayerBoxComponent = function (_CanvasComponent) {
	_inherits(PlayerBoxComponent, _CanvasComponent);

	function PlayerBoxComponent() {
		var posx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var posy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		_classCallCheck(this, PlayerBoxComponent);

		var CLIMBING = [[[111, 44, 13, 16], [127, 44, 12, 16]], [[389, 44, 13, 16], [374, 44, 12, 16]]];
		var JUMPING = [[142, 45, 159 - 142, 60 - 45] /*L*/, [354, 45, 371 - 354, 60 - 45]];
		var STANDING = [[224, 43, 237 - 224, 60 - 43] /*L*/, [276, 43, 289 - 276, 60 - 43]];
		var SDIE = [13, 46, 27 - 13, 60 - 46];
		var DX = 5.5,
		    DY = 6.5,
		    HEIGHT = 64,
		    HEIGHTADDITIONAL = 100,
		    DURATION = 150,
		    DURATIONADDITIONAL = 100;
		var _ref = [32, 32, _canvasComponent2.default.SPRITES.CHARACTERS, STANDING[1][0], STANDING[1][1], STANDING[1][2], STANDING[1][3]],
		    W = _ref[0],
		    H = _ref[1],
		    SPRITE = _ref[2],
		    SX = _ref[3],
		    SY = _ref[4],
		    SW = _ref[5],
		    SH = _ref[6];
		var SADURATION = 130,
		    SADY = 6,
		    FLAGPOLEDY = 4;
		var IPENETRATE = 0,
		    LPENETRATE = 1,
		    DIE = 2,
		    FROMPIPE = 3,
		    ALONGFLAGPOLESTICK = 4,
		    MOVECASTLE = 5;
		var WALKING = 0,
		    SLUGGISHRUNNING = 1,
		    RUNNING = 2;


		var identifier = 'player';

		var _this = _possibleConstructorReturn(this, (PlayerBoxComponent.__proto__ || Object.getPrototypeOf(PlayerBoxComponent)).call(this, W, H, SPRITE, posx, posy, 'sprite', SX, SY, SW, SH));

		_this.animationTypes = { IPENETRATE: IPENETRATE, LPENETRATE: LPENETRATE, DIE: DIE, FROMPIPE: FROMPIPE, ALONGFLAGPOLESTICK: ALONGFLAGPOLESTICK, MOVECASTLE: MOVECASTLE };
		_this.animationParameters = { SADURATION: SADURATION, SADY: SADY };
		_this.movement = { DX: DX, DY: DY, FLAGPOLEDY: FLAGPOLEDY, HEIGHT: HEIGHT, HEIGHTADDITIONAL: HEIGHTADDITIONAL, DURATION: DURATION, DURATIONADDITIONAL: DURATIONADDITIONAL };
		_this.movement.modes = { WALKING: WALKING, SLUGGISHRUNNING: SLUGGISHRUNNING, RUNNING: RUNNING };
		_this.movement.mode = _this.movement.modes.RUNNING;

		_this.defaultWidth = W;
		_this.defaultHeight = H;

		var RR = [[291, 43, 304 - 291, 60 - 43], [306, 43, 318 - 306, 60 - 43], [320, 43, 336 - 320, 60 - 43]];

		var RL = [[222 - (304 - 291), 43, 304 - 291, 60 - 43], [207 - (318 - 306), 43, 318 - 306, 60 - 43], [193 - (336 - 320), 43, 336 - 320, 60 - 43]];

		_this.sprites = { RR: RR, RL: RL, JUMPING: JUMPING, STANDING: STANDING, SDIE: SDIE, CLIMBING: CLIMBING };
		_this.runningSpritesAmount = 3;

		_this.rsnc = _this.direction = _this.currentRunningSpriteIndex = _this.currentRunningIndex = 0;
		_this.currentClimbingSpriteIndex = _this.currentClimbingFrameIndex = 0;

		_this.jumpingSpriteNormalizationC = _this._spriteNormalization(_this.sprites.JUMPING[0]).c;
		_this.jumpingSpriteNormalizationW = _this._spriteNormalization(_this.sprites.JUMPING[0]).w;

		_this.runningSprite1NormalizationC = _this._spriteNormalization(_this.sprites.RR[1]).c;
		_this.runningSprite1NormalizationW = _this._spriteNormalization(_this.sprites.RR[1]).w;

		_this.runningSprite2NormalizationC = _this._spriteNormalization(_this.sprites.RR[2]).c;
		_this.runningSprite2NormalizationW = _this._spriteNormalization(_this.sprites.RR[2]).w;

		_this.ifReachedHalf = _this.collisionType = _this.initialDirection = _this.movingY = _this.inittime = _this.initposy = _this._initposy = _this.spaceunpressed = _this.spacepressed = _this.duration = _this.completedUp = undefined;
		_this.componentIdentifier = identifier;
		return _this;
	}

	_createClass(PlayerBoxComponent, [{
		key: '_spriteNormalization',
		value: function _spriteNormalization(sprite) {
			var c = (sprite[2] - this.sprites.STANDING[0][2]) * 2;
			var w = this.defaultWidth + c;
			return { w: w, c: c };
		}
	}, {
		key: 'getDurationIndex',
		value: function getDurationIndex(currentTime, initTime, duration) {
			var DURATIONINDEX = (currentTime - initTime) / duration;
			if (DURATIONINDEX >= 1) DURATIONINDEX = 1;
			return DURATIONINDEX;
		}
	}, {
		key: 'underScene',
		value: function underScene() {
			return this.posy - 50 > _misc.CANVASSCENEH;
		}
	}, {
		key: 'aboveScene',
		value: function aboveScene() {
			return this.posy + this.height < -50;
		}
	}, {
		key: 'reachedHalf',
		value: function reachedHalf() {
			return this.posx + this.width / 2 >= _misc.CANVASSCENEW / 2;
		}
	}, {
		key: 'placeHalf',
		value: function placeHalf() {
			this.posx = (_misc.CANVASSCENEW - this.width) * Math.pow(2, -1);
		}
	}, {
		key: 'specifyClimbing',
		value: function specifyClimbing(direction) {
			if (direction == 0) {
				this.sx = this.sprites.CLIMBING[1][this.currentClimbingSpriteIndex][0];
				this.sy = this.sprites.CLIMBING[1][this.currentClimbingSpriteIndex][1];
				this.sw = this.sprites.CLIMBING[1][this.currentClimbingSpriteIndex][2];
				this.sh = this.sprites.CLIMBING[1][this.currentClimbingSpriteIndex][3];
			} else if (direction == 1) {
				this.sx = this.sprites.CLIMBING[0][this.currentClimbingSpriteIndex][0];
				this.sy = this.sprites.CLIMBING[0][this.currentClimbingSpriteIndex][1];
				this.sw = this.sprites.CLIMBING[0][this.currentClimbingSpriteIndex][2];
				this.sh = this.sprites.CLIMBING[0][this.currentClimbingSpriteIndex][3];
			}
		}
	}, {
		key: 'specifyStanding',
		value: function specifyStanding(direction) {
			if (direction == 0) {
				this.sx = this.sprites.STANDING[1][0];
				this.sy = this.sprites.STANDING[1][1];
				this.sw = this.sprites.STANDING[1][2];
				this.sh = this.sprites.STANDING[1][3];
			} else if (direction == 1) {
				this.sx = this.sprites.STANDING[0][0];
				this.sy = this.sprites.STANDING[0][1];
				this.sw = this.sprites.STANDING[0][2];
				this.sh = this.sprites.STANDING[0][3];
			}
		}
	}, {
		key: 'specifyJumping',
		value: function specifyJumping(direction) {
			if (direction == 0) {
				this.sx = this.sprites.JUMPING[1][0];
				this.sy = this.sprites.JUMPING[1][1];
				this.sw = this.sprites.JUMPING[1][2];
				this.sh = this.sprites.JUMPING[1][3];
			} else if (direction == 1) {
				this.sx = this.sprites.JUMPING[0][0];
				this.sy = this.sprites.JUMPING[0][1];
				this.sw = this.sprites.JUMPING[0][2];
				this.sh = this.sprites.JUMPING[0][3];
			}
		}
	}, {
		key: 'specifyRunning',
		value: function specifyRunning(direction) {
			if (direction == 0) {
				this.sx = this.sprites.RR[this.currentRunningSpriteIndex][0];
				this.sy = this.sprites.RR[this.currentRunningSpriteIndex][1];
				this.sw = this.sprites.RR[this.currentRunningSpriteIndex][2];
				this.sh = this.sprites.RR[this.currentRunningSpriteIndex][3];
			} else if (direction == 1) {
				this.sx = this.sprites.RL[this.currentRunningSpriteIndex][0];
				this.sy = this.sprites.RL[this.currentRunningSpriteIndex][1];
				this.sw = this.sprites.RL[this.currentRunningSpriteIndex][2];
				this.sh = this.sprites.RL[this.currentRunningSpriteIndex][3];
			}
		}
	}, {
		key: 'specifyDying',
		value: function specifyDying() {
			this.sx = this.sprites.SDIE[0];
			this.sy = this.sprites.SDIE[1];
			this.sw = this.sprites.SDIE[2];
			this.sh = this.sprites.SDIE[2];
		}
	}, {
		key: 'specifyFrameRunning',
		value: function specifyFrameRunning(frame, direction) {
			var DLEFT = direction == 1,
			    DRIGHT = direction == 0;

			if (this.currentRunningIndex++ == frame) {
				if (DRIGHT) {
					if (this.currentRunningSpriteIndex == 0) {
						this.rsnc = 2;
						this.width = this.defaultWidth;
					}
					if (this.currentRunningSpriteIndex == 1) {
						this.rsnc = -2 * this.runningSprite1NormalizationC;
						this.width = this.runningSprite1NormalizationW;
					}
					if (this.currentRunningSpriteIndex == 2) {
						this.rsnc = -this.runningSprite2NormalizationC;
						this.width = this.runningSprite2NormalizationW;
					}
				} else if (DLEFT) {
					if (this.currentRunningSpriteIndex == 0) {
						this.rsnc = 4;
						this.width = this.defaultWidth;
					}
					if (this.currentRunningSpriteIndex == 1) {
						this.rsnc = this.runningSprite1NormalizationC;
						this.width = this.runningSprite1NormalizationW;
					}
					if (this.currentRunningSpriteIndex == 2) {
						this.rsnc = -2;
						this.width = this.runningSprite2NormalizationW;
					}
				}
				this.specifyRunning(direction);
				this.currentRunningSpriteIndex = (this.currentRunningSpriteIndex + 1) % this.runningSpritesAmount;
				this.currentRunningIndex = 0;
				this.posx = this.posx + this.rsnc;
			}
		}
	}, {
		key: 'stand',
		value: function stand(direction) {
			if (!this.movingY) {
				this.currentRunningSpriteIndex = this.currentRunningIndex = 0;
				this.width = this.defaultWidth;
				this.specifyStanding(direction);
				if (this.rsnc !== 0) this.posx = this.posx - this.rsnc;
				if (this.rsnc !== 0) this.rsnc = 0;
				if (!this.ifSceneReachedEnd) if (this.reachedHalf()) this.placeHalf();
			}
		}
	}, {
		key: 'climb',
		value: function climb(direction) {
			this.specifyClimbing(direction);
			this.width = this.sw * 2;
			this.height = this.sh * 2;
		}
	}, {
		key: 'moveX',
		value: function moveX(time, direction, components, scene, control) {
			var _this2 = this;

			this.direction = direction;

			var _ref2 = [],
			    DX = _ref2[0],
			    MAXFRAMEINDEX = _ref2[1];

			var IFREACHEDHALF = function IFREACHEDHALF() {
				return _this2.ifReachedHalf || _this2.reachedHalf();
			};
			var IFLEFT = direction == 1;
			var _movement$modes = this.movement.modes,
			    WALKING = _movement$modes.WALKING,
			    SLUGGISHRUNNING = _movement$modes.SLUGGISHRUNNING,
			    RUNNING = _movement$modes.RUNNING;


			if (!this.ifSceneReachedEnd) this.ifSceneReachedEnd = scene.backgroundOffset() >= 0;

			var MOVEPLAYERORSCENE = function MOVEPLAYERORSCENE(dx) {
				if (_this2.ifSceneReachedEnd || !IFREACHEDHALF() || IFLEFT) _this2.posx = _this2.posx + dx;else {
					scene.move(-dx, [_this2.componentIdentifier]);
					var sceneOffset = scene.backgroundOffset();
					var sceneReachedEnd = sceneOffset >= 0;
					if (sceneReachedEnd) {
						_this2.ifSceneReachedEnd = true;
						scene.move(sceneOffset, [_this2.componentIdentifier]);
					}
				}
			};

			if (this.movement.mode == WALKING) {
				DX = this.movement.DX / 4;
				MAXFRAMEINDEX = 6;
			} else if (this.movement.mode == SLUGGISHRUNNING) {
				DX = this.movement.DX / 2;
				MAXFRAMEINDEX = 3;
			} else if (this.movement.mode == RUNNING) {
				DX = this.movement.DX;
				MAXFRAMEINDEX = 1;
			}

			if (IFLEFT) MOVEPLAYERORSCENE(-DX);else MOVEPLAYERORSCENE(DX);

			if (!this.movingY) this.specifyFrameRunning(MAXFRAMEINDEX, direction);

			if (!this.ifSceneReachedEnd) {
				if (this.ifReachedHalf) {
					if (IFLEFT) this.ifReachedHalf = false;
				} else if (IFREACHEDHALF()) {
					this.placeHalf();
					this.ifReachedHalf = true;
				}
			}

			var collisions = _collision2.default.detect(components, this);
			if (this.processCollisionWithComponents(scene, collisions)) return false;

			var containsLTYPE = collisions.types.includes(collisions.LTYPE);
			var containsRTYPE = collisions.types.includes(collisions.RTYPE);
			var TYPE = void 0;
			if (containsLTYPE) TYPE = collisions.LTYPE;
			if (containsRTYPE) TYPE = collisions.RTYPE;

			if (!this.movingY) {
				var SHOULDMOVEDOWN = collisions.types.includes(collisions.TTYPE) == false;
				if (SHOULDMOVEDOWN) {
					if (this.currentRunningSpriteIndex == 0) this.currentRunningSpriteIndex = this.runningSpritesAmount - 1;else this.currentRunningSpriteIndex--;
					return control.DIRECTIONDOWN = true;
				}
			}

			if (containsLTYPE || containsRTYPE) {
				var collision = collisions.first(TYPE);
				if (this.movingY) MOVEPLAYERORSCENE(collision.collisionOffset);else {
					var collidedComponent = scene.getBindedComponent(collision.componentIdentifier);
					this.stand(direction);
					if (TYPE == collisions.LTYPE) MOVEPLAYERORSCENE(collidedComponent.posx - (this.posx + this.width));
					if (TYPE == collisions.RTYPE) MOVEPLAYERORSCENE(collidedComponent.posx + collidedComponent.width - this.posx);
				}
			}
		}
	}, {
		key: 'clearMoveYProperties',
		value: function clearMoveYProperties() {
			this.movingY = this.collisionType = this.initialDirection = this.inittime = this.initposy = this._initposy = this.spaceunpressed = this.spacepressed = this.duration = this.completedUp = undefined;
		}
	}, {
		key: 'moveY',
		value: function moveY(time, jumping, components, scene, control) {
			var _this3 = this;

			var updatePosyIncludingCollisionOffset = function updatePosyIncludingCollisionOffset(collisionOffset) {
				return _this3.posy = _this3.posy + collisionOffset;
			};
			var di0 = 'di0',
			    di1 = 'di1',
			    BTYPE = 'B',
			    ISRIGHT = this.direction == 0;


			if (!this.movingY) {
				if (jumping) _sound.SFX.jump.play();
				if (ISRIGHT) this.initialDirection = 0;
				if (jumping == false) this.completedUp = true;
				if (jumping) if (ISRIGHT) this.posx = this.posx - this.jumpingSpriteNormalizationC;
				if (jumping) this.width = this.jumpingSpriteNormalizationW;
				this.inittime = time;
				this.initposy = this._initposy = this.posy;
				this.movingY = true;
			}
			var MOVEDOWN = this.completedUp == true;
			this.achievedPlatform = this.achievedPlatformPieceID = undefined;

			if (MOVEDOWN) {
				if (this.collisionType != BTYPE && !this.collidedNPC) if ((0, _misc.delay)(di0, this, time, this.duration - this.movement.DURATION)) return false;
				if (this.gravitate(scene)) this.die(scene, false, true);
			} else {
				if (this.collidedNPC) {
					if ((0, _misc.delay)(di1, this, time, this.animationParameters.SADURATION)) {
						this.posy = this.posy - this.animationParameters.SADY;
					} else {
						this.completedUp = true;
						_misc.delay.clear(di1, this);
						delete this.collidedNPC;
					}
				} else {
					var DURATIONINDEX = void 0;
					if (control.SPACEPRESSED && !this.spaceunpressed) this.spacepressed = true;else {
						this.spacepressed = false;
						this.spaceunpressed = true;
					}
					if (this.spacepressed) {
						DURATIONINDEX = this.getDurationIndex(time, this.inittime, this.movement.DURATION);
						this.duration = this.movement.DURATION + this.movement.DURATIONADDITIONAL * DURATIONINDEX;
						this.initposy = this._initposy - this.movement.HEIGHTADDITIONAL * DURATIONINDEX;
					}
					DURATIONINDEX = this.getDurationIndex(time, this.inittime, this.duration);
					if (DURATIONINDEX == 1) this.completedUp = true;
					this.posy = this.initposy - this.movement.HEIGHT * DURATIONINDEX;
				}
			}

			if (jumping) this.specifyJumping(this.direction);else this.specifyRunning(this.direction);

			var collisions = _collision2.default.detect(components, this);
			if (this.processCollisionWithComponents(scene, collisions)) return false;

			var containsTTYPE = collisions.types.includes(collisions.TTYPE);
			var containsBTYPE = collisions.types.includes(collisions.BTYPE);
			var TYPE = void 0;
			if (containsTTYPE) TYPE = collisions.TTYPE;
			if (containsBTYPE) TYPE = collisions.BTYPE;

			if (MOVEDOWN) {
				if (containsTTYPE) {
					if (jumping) if (ISRIGHT) this.posx = this.posx + this.jumpingSpriteNormalizationC;
					this.movingY = undefined;
					_misc.delay.clear(di0, this);
					updatePosyIncludingCollisionOffset(collisions.first(TYPE).collisionOffset);
					this.stand(this.direction);
					var cs = _collision2.default.detect(components, this);
					var containsLTYPE = cs.types.includes(cs.LTYPE);
					var containsRTYPE = cs.types.includes(cs.RTYPE);
					if (containsLTYPE) TYPE = cs.LTYPE;
					if (containsRTYPE) TYPE = cs.RTYPE;
					if (containsLTYPE || containsRTYPE) this.posx = this.posx + cs.first(TYPE).collisionOffset;
					this.clearMoveYProperties();
					return true;
				}
			} else {
				if (containsBTYPE) {
					updatePosyIncludingCollisionOffset(-collisions.first(TYPE).collisionOffset);
					this.collisionType = TYPE;
					this.completedUp = true;
					(0, _misc.after)(100, function () {
						return _sound.SFX.jump.stop();
					});
					_sound.SFX.bump.play();
					if (this.collidedNPC == true) {
						_misc.delay.clear(di1, this);
						delete this.collidedNPC;
					}
					var hittedComponents = [];
					for (var i = 0; i < collisions.collisions.length; i++) {
						var collision = collisions.collisions[i];
						if (collision.collisionType == collisions.BTYPE) {
							var component = scene.getBindedComponent(collision.componentIdentifier);
							var componentHitMethodSupport = (0, _misc.isfunc)(component.hit);
							if (componentHitMethodSupport) hittedComponents[hittedComponents.length] = component;
						}
					}
					if (hittedComponents.length > 0) {
						var _ref3 = [],
						    hittedComponentLowestDx = _ref3[0],
						    hittedComponentLowestDxIndex = _ref3[1];

						for (var _i = 0; _i < hittedComponents.length; _i++) {
							var hittedComponent = hittedComponents[_i];
							var dx = Math.abs(this.posx + this.width / 2 - (hittedComponent.posx + hittedComponent.width / 2));
							if (_i == 0) {
								hittedComponentLowestDx = dx;
								hittedComponentLowestDxIndex = 0;
							}
							if (hittedComponentLowestDx > dx) {
								hittedComponentLowestDx = dx;
								hittedComponentLowestDxIndex = _i;
							}
							if (_i == hittedComponents.length - 1) {
								var _component = hittedComponents[hittedComponentLowestDxIndex];
								console.log(_component.componentIdentifier);
								_component.hit(scene);
								if (_component.coinBoxIdentifier != undefined) {
									if (scene.getBindedComponent(_component.coinBoxIdentifier) != undefined) {
										var coinBonusComponent = new _CoinBonusComponent2.default(),
										    coinBonusComponentIdentifier = 'cbc' + (0, _misc.randomizeNumber)();

										scene.unbindComponentForAnimation(_component.coinBoxIdentifier);
										scene.unbindComponent(_component.coinBoxIdentifier);
										coinBonusComponent.init(_component.posx, _component.posy, _component.width, _component.height);
										scene.bindComponent(coinBonusComponent, coinBonusComponentIdentifier);
										scene.bindComponentForAnimation(coinBonusComponentIdentifier);
									}
								}
								if (!_component.solid) {
									var _ref4 = [_collision2.default.detect(scene.getAllBindings(), _component).collisions, /^npc\-/],
									    _collisions = _ref4[0],
									    NPCPREFIXRE = _ref4[1];

									for (var _i2 = 0; _i2 < _collisions.length; _i2++) {
										var componentIdentifier = _collisions[_i2].componentIdentifier;
										var _component2 = scene.getBindedComponent(componentIdentifier);
										var _ref5 = [NPCPREFIXRE.test(componentIdentifier), _component2.bonusComponent == true],
										    isNPC = _ref5[0],
										    isBonusNPC = _ref5[1];

										if (isNPC) _component2.hit();else if (isBonusNPC) _component2.bump();
									}
								}
							}
						}
					}
					return false;
				}
			}
		}
	}, {
		key: 'processCollisionWithComponents',
		value: function processCollisionWithComponents(scene, collisions) {
			var _this4 = this;

			if (!collisions) collisions = _collision2.default.detect(scene.getAllBindings(), this);

			var processCollisionWithNPC = function processCollisionWithNPC() {
				var _collisions2 = collisions,
				    TTYPE = _collisions2.TTYPE,
				    BTYPE = _collisions2.BTYPE,
				    LTYPE = _collisions2.LTYPE,
				    RTYPE = _collisions2.RTYPE;

				var NPCPREFIXRE = /^(npc\-)/;
				var NPCcollisions = collisions.collisions.filter(function (collision) {
					return NPCPREFIXRE.test(collision.componentIdentifier);
				});
				var die = 0 < NPCcollisions.filter(function (collision) {
					return collision.collisionType == BTYPE || collision.collisionType == LTYPE || collision.collisionType == RTYPE;
				}).length;
				var stomps = NPCcollisions.filter(function (collision) {
					return collision.collisionType == TTYPE;
				});
				var stompsSomeone = 0 < stomps.length;
				var collidesNPC = die || stompsSomeone;

				if (die) _this4.die(scene, true, true);else if (stompsSomeone) {
					var scoreValue = 0;
					stomps.forEach(function (collision) {
						var npccomponent = scene.getBindedComponent(collision.componentIdentifier);
						scoreValue = scoreValue + npccomponent.scoreValue;
						npccomponent.stomp();
					});
					_this4.collideNPC(scene, scoreValue);
				}
				return collidesNPC;
			};
			var processCollisionWithBonus = function processCollisionWithBonus() {
				var BONUSPREFIXESRE = /^(cbc|mushroom\-)/;
				var bonusCollisionIdentifiers = collisions.collisions.filter(function (collision) {
					return BONUSPREFIXESRE.test(collision.componentIdentifier);
				}).map(function (collision) {
					return collision.componentIdentifier;
				});
				var collidesBonus = false;
				if (0 < bonusCollisionIdentifiers.length) {
					collidesBonus = true;
					_this4.collideBonus(scene, bonusCollisionIdentifiers);
				}
				return collidesBonus;
			};
			var processCollisionWithFlagpoleStick = function processCollisionWithFlagpoleStick() {
				var FLAGPOLESTICKRE = /^flagpole\-stick$/,
				    FLAGPOLESTICKIDENTIFIER = 'flagpole-stick',
				    FLAGPOLEFLAGIDENTIFIER = 'flagpole-flag';

				var collidesFlagpoleStick = 0 < collisions.collisions.filter(function (collision) {
					return FLAGPOLESTICKRE.test(collision.componentIdentifier);
				}).length;
				if (collidesFlagpoleStick && !_this4.flagpoleStickAnimationCompleted) {
					_this4.achieveFlagpole(scene, scene.getBindedComponent(FLAGPOLESTICKIDENTIFIER), scene.getBindedComponent(FLAGPOLEFLAGIDENTIFIER));
				}
				return collidesFlagpoleStick;
			};
			var processCollisionWithControlPoint = function processCollisionWithControlPoint() {
				var CONTROLPOINTRE = /^(controlpoint)/;
				var controlPointCollisions = collisions.collisions.filter(function (collision) {
					return CONTROLPOINTRE.test(collision.componentIdentifier);
				});
				var collidesControlPoint = 1 == controlPointCollisions.length;
				if (collidesControlPoint) {
					var controlPoint = scene.getBindedComponent(controlPointCollisions[0].componentIdentifier);
					if (controlPoint.controlPointType == _ControlPointComponent2.default.TYPES.CASTLEENTRY) {
						_this4.alpha = 0;
						_sound.SFX.remainingTimeToPoints.play();
						_control3.default.clear();
						var timeBeforeConversion = _stat2.default.currentTime;
						_stat2.default.conventRemainingTimeToPoints(scene, function () {
							var castleContainerIdentifier = 'container-castle';
							var castleContainer = scene.getBindedComponent(castleContainerIdentifier);
							castleContainer.launchAnimation(scene, timeBeforeConversion, function () {
								var DELAY = 3000;
								_stat2.default.nextWorld();
								(0, _misc.after)(DELAY, function () {
									return _display2.default.I1(scene);
								});
							});
							_sound.SFX.remainingTimeToPoints.stop();
						});
					} else if (controlPoint.controlPointType == _ControlPointComponent2.default.TYPES.WARPZONE) {
						var _ref6 = [scene.getAllBindings(), /^(warpzone\-text\-(\d+))$/],
						    components = _ref6[0],
						    warpzoneTextRE = _ref6[1];

						for (var i = 0; i < components.length; i++) {
							var container = components[i].component;
							if (warpzoneTextRE.test(container.componentIdentifier)) {
								entries(container._components).forEach(function (entry) {
									return entry[1].alpha = 1;
								});
							}
						}
					}
				}
				return collidesControlPoint;
			};
			var processCollisionWithPlatform = function processCollisionWithPlatform() {
				var platformPiecePrefixIDRE = /^(platform\-piece\-)/;
				var collidesPlatformPiece = false;
				var platformPieceID = undefined;
				for (var i = 0; i < collisions.collisions.length; i++) {
					var collision = collisions.collisions[i];
					if (platformPiecePrefixIDRE.test(collision.componentIdentifier) && collision.collisionType == collisions.TTYPE) {
						collidesPlatformPiece = true;
						platformPieceID = collision.componentIdentifier;
						break;
					}
				}
				if (collidesPlatformPiece) {
					_this4.achievePlatform(scene, platformPieceID);
				}
				return collidesPlatformPiece;
			};

			var collidesNPC = processCollisionWithNPC();
			if (collidesNPC) return true;

			var collidesBonus = processCollisionWithBonus();
			if (collidesBonus) return true;

			var collidesFlagpoleStick = processCollisionWithFlagpoleStick();
			if (collidesFlagpoleStick) return true;

			var collidesControlPoint = processCollisionWithControlPoint();
			if (collidesControlPoint) return true;

			var collidesPlatform = processCollisionWithPlatform();
			if (collidesPlatform) return false;
		}
	}, {
		key: 'collideBonus',
		value: function collideBonus(scene, bonusIdentifiers) {
			var pointsPerCoin = 200;

			bonusIdentifiers.forEach(function (identifier) {
				var COINPREFIX = /^(cbc)/,
				    MUSHROOMPREFIX = /^(mushroom\-)/;

				if (COINPREFIX.test(identifier)) {
					if (_sound.SFX.coin.playing()) _sound.SFX.coin.stop();
					scene.unbindComponent(identifier);
					scene.unbindComponentForAnimation(identifier);
					_stat2.default.coins(scene, 1);
					_stat2.default.score(scene, pointsPerCoin);
					_sound.SFX.coin.play();
				} else if (MUSHROOMPREFIX.test(identifier)) {
					scene.getBindedComponent(identifier).take();
				}
			});
		}
	}, {
		key: 'collideNPC',
		value: function collideNPC(scene, score) {
			this.collidedNPC = true;
			this.completedUp = false;
			_sound.SFX.squish.play();
			_stat2.default.score(scene, score);
			(0, _GraphicalTextContainer.bindGraphicalTextContainer)(undefined, scene, '' + score, this.posx + 10, this.posy - 30, 1.4, 600, 35, 1);
		}
	}, {
		key: 'gravitate',
		value: function gravitate(scene) {
			this.posy = this.posy + this.movement.DY;
			return this.underScene();
		}
	}, {
		key: 'animate',
		value: function animate(time, scene) {
			var _this5 = this;

			var completePenetration = function completePenetration(animationType, delay) {
				delete _this5._penetrationAnimationInitialized;
				delete _this5._initposy;
				delete _this5._inittime;
				scene.unbindComponent(_this5.componentIdentifier);
				(0, _misc.after)(delay, function () {
					_sound.Music.stopBackgroundMusic();
					_display2.default.I5(scene, _this5.pipe.out);
				});
			};
			var _animationTypes = this.animationTypes,
			    DIE = _animationTypes.DIE,
			    IPENETRATE = _animationTypes.IPENETRATE,
			    LPENETRATE = _animationTypes.LPENETRATE,
			    FROMPIPE = _animationTypes.FROMPIPE,
			    ALONGFLAGPOLESTICK = _animationTypes.ALONGFLAGPOLESTICK;

			switch (this.animationType) {
				case DIE:
					{
						var N0 = 400,
						    N1 = 400,
						    di2 = 'di2',
						    di3 = 'di3';

						if ((0, _misc.delay)(di2, this, time, N0)) return false;
						if ((0, _misc.delay)(di3, this, time, N1)) {
							this.posy = this.posy - (this.movement.DY - 2);
						} else {
							var ifUnderScene = this.gravitate(scene);
							if (ifUnderScene) {
								var completeAnimationMethodCreated = '_completeAnimation' in this;
								_misc.delay.clear(di2, this);
								_misc.delay.clear(di3, this);
								if (completeAnimationMethodCreated) this._completeAnimation();
								return true;
							}
						}
						break;
					}
				case IPENETRATE:
					{
						if (!this._penetrationAnimationInitialized) {
							this._penetrationAnimationInitialized = true;
							var _ref7 = [this.posy, time];
							this._initposy = _ref7[0];
							this._inittime = _ref7[1];
						}
						var _ref8 = [3, 350, this._inittime, this._initposy, 500, this.height + 2],
						    FRI = _ref8[0],
						    DELAY = _ref8[1],
						    inittime = _ref8[2],
						    initposy = _ref8[3],
						    duration = _ref8[4],
						    dy = _ref8[5];

						var DURATIONINDEX = this.getDurationIndex(time, inittime, duration);
						this.posy = initposy + dy * DURATIONINDEX;
						this.specifyFrameRunning(FRI, this.direction);

						if (DURATIONINDEX == 1) {
							completePenetration(IPENETRATE, DELAY);
							return true;
						}
						break;
					}
				case LPENETRATE:
					{
						var DX = this.movement.DX / 7,
						    _FRI = 5,
						    PIPEPOSX = this.pipe.posx + 10,
						    _DELAY = 550;

						this.posx = this.posx + DX;
						this.specifyFrameRunning(_FRI, this.direction);

						if (this.posx > PIPEPOSX) {
							completePenetration(LPENETRATE, _DELAY);
							return true;
						}
						break;
					}
				case FROMPIPE:
					{
						var delayIdentifier = 'di1',
						    delayValue = 1800;

						if ((0, _misc.delay)(delayIdentifier, this, time, delayValue)) return false;

						if (!this._animationInitialized) {
							this._animationInitialized = true;
							var _ref9 = [this.posy, time, this.posy - this.pipe.posy + this.height];
							this._initposy = _ref9[0];
							this._inittime = _ref9[1];
							this._dy = _ref9[2];
						}
						var _ref10 = [this._inittime, this._initposy, 500, this._dy],
						    _inittime = _ref10[0],
						    _initposy = _ref10[1],
						    _duration = _ref10[2],
						    _dy = _ref10[3];

						var _DURATIONINDEX = this.getDurationIndex(time, _inittime, _duration);
						this.posy = _initposy - _dy * _DURATIONINDEX;
						var _completeAnimationMethodCreated = '_completeAnimation' in this;
						if (_DURATIONINDEX == 1) {
							_misc.delay.clear(delayIdentifier, this);
							this.posy = this.pipe.posy - this.height;
							delete this._animationInitialized;
							delete this.pipe;
							delete this._dy;
							delete this._initposy;
							delete this._inittime;
							if (_completeAnimationMethodCreated) this._completeAnimation();
							return true;
						}
						break;
					}
				case ALONGFLAGPOLESTICK:
					{
						var _ref11 = [this.movement.FLAGPOLEDY, 10, 5, 300],
						    DY = _ref11[0],
						    stickOffset = _ref11[1],
						    MAXFRAMEINDEX = _ref11[2],
						    _DELAY2 = _ref11[3];
						var _flagpole = this.flagpole,
						    stick = _flagpole.stick,
						    flag = _flagpole.flag;

						var stickTerminalPosition = stick.posy + stick.height - stickOffset;
						var _completeAnimationMethodCreated2 = '_completeAnimation' in this;
						var renderNextSprite = (this.currentClimbingFrameIndex = ++this.currentClimbingFrameIndex % MAXFRAMEINDEX) == 0;
						var playerAnimationComplete = this.posy + this.height >= stickTerminalPosition;

						if (renderNextSprite) {
							if (this.currentClimbingSpriteIndex == 0) this.currentClimbingSpriteIndex = 1;else if (this.currentClimbingSpriteIndex == 1) this.currentClimbingSpriteIndex = 0;
							this.climb(this.direction);
						}
						if (playerAnimationComplete) {
							this.posy = stickTerminalPosition - this.height;
							return true;
						} else this.posy = this.posy + DY;

						if (!this._animationInitialized) {
							this._animationInitialized = true;
							var flagpoleContainerIdentifier = 'container-flagpole';
							var flagpoleContainer = scene.getBindedComponent(flagpoleContainerIdentifier);
							var definePointsAmount = function definePointsAmount() {
								var points = [100, 400, 800, 2000, 5000];
								var _ref12 = [_this5.posy + _this5.height, stick.posy + flag.height + 12, flag.height],
								    playerBottomPosition = _ref12[0],
								    flagBottomPosition = _ref12[1],
								    FH = _ref12[2];

								if (playerBottomPosition <= flagBottomPosition) return points[4];else if (playerBottomPosition <= flagBottomPosition + FH * 3) return points[3];else if (playerBottomPosition <= flagBottomPosition + FH * 3 + FH) return points[2];else if (playerBottomPosition <= flagBottomPosition + FH * 3 + FH + FH * 3) return points[1];else if (playerBottomPosition <= flagBottomPosition + FH * 3 + FH + FH * 3 + FH) return points[0];
							};
							this._pointsAmount = definePointsAmount();
							flagpoleContainer.launchAnimation(scene, this._pointsAmount, function () {
								_this5.currentClimbingFrameIndex = _this5.currentClimbingSpriteIndex = 0;
								_this5.climb(_this5.direction == 1 ? 0 : 1);
								_this5.posx = stick.posx + stick.width - 5;
								_stat2.default.score(scene, _this5._pointsAmount);
								delete _this5.flagpole;
								delete _this5._pointsAmount;
								delete _this5._animationInitialized;
								(0, _misc.after)(_DELAY2, function () {
									if (_completeAnimationMethodCreated2) _this5._completeAnimation();
								});
								scene.unbindComponentForAnimation(_this5.componentIdentifier);
							});
						}
						break;
					}
			}
		}
	}, {
		key: 'die',
		value: function die(scene, shouldAnimate, playSFX) {

			this.animationType = this.animationTypes.DIE;
			this.specifyDying();
			this.died = true;
			this.width = this.defaultWidth;
			this.height = this.defaultHeight;
			_stat2.default.freezeTime(scene);
			_sound.Music.stopBackgroundMusic();

			var containerNPCRE = /^container\-npc/;
			var componentsForAnimation = scene.getBindedComponentsForAnimation();
			var i = -1;
			while (++i < componentsForAnimation.length) {
				var componentIdentifier = componentsForAnimation[i];
				if (containerNPCRE.test(componentIdentifier)) {
					scene.unbindComponentForAnimation(componentIdentifier);
					i = i - 1;
				}
			}

			var defineDeathType = function defineDeathType(scene) {
				var displayTypes = ['I1', 'I2', 'I3'];
				var delay = 3000;
				var display = function display(type) {
					return (0, _misc.after)(delay, function () {
						if (type == displayTypes[0]) _display2.default[type](scene, false);else {
							_sound.SFX.gameover.play();
							_display2.default[type](scene);
						}
					});
				};
				if (_stat2.default.timeSpent()) display(displayTypes[1]);else {
					_stat2.default.lives(scene, -1);
					if (_stat2.default.livesSpent()) display(displayTypes[2]);else display(displayTypes[0]);
				}
			};

			if (playSFX) _sound.SFX.die.play();

			if (shouldAnimate) {
				scene.bindComponentForAnimation(this.componentIdentifier);
				this._completeAnimation = function () {
					return defineDeathType(scene);
				};
			} else defineDeathType(scene);
		}
	}, {
		key: 'tryPenetrate',
		value: function tryPenetrate(time, components, scene, control) {
			var _this6 = this;

			var IPIPERE = /^(pbc)\d+$/i,
			    LPIPERE = /^(pbc)\d+p1$/i;
			var DIRECTIONRIGHT = control.DIRECTIONRIGHT,
			    DOWNPRESSED = control.DOWNPRESSED;

			if (!this._pipes) {
				var _components = scene.getAllBindings();
				this._pipes = _components.filter(function (wrappedComponent) {
					var componentIdentifier = wrappedComponent.componentIdentifier,
					    component = wrappedComponent.component;
					var penetrationAllowed = component.penetrationAllowed;

					return penetrationAllowed && (IPIPERE.test(componentIdentifier) || LPIPERE.test(componentIdentifier));
				}).map(function (component) {
					return component.component;
				});
			}
			if (!this.movingY && (DIRECTIONRIGHT || DOWNPRESSED)) {
				var IPIPETYPE = 'I',
				    LPIPETYPE = 'L';

				var penetrate = function penetrate(pipe, animationType) {
					var _ref13 = [pipe, animationType, true];
					_this6.pipe = _ref13[0];
					_this6.animationType = _ref13[1];
					_this6.penetrating = _ref13[2];

					_stat2.default.freezeTime(scene);
					_sound.SFX.warp.play();
					scene.bindComponentForAnimation(_this6.componentIdentifier);
					scene.zindex(_this6.componentIdentifier, pipe.componentIdentifier);
					delete _this6._pipes;
				};
				var acceptableBoundaries = function acceptableBoundaries(pipe, pipeType, player) {
					var dx = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3;

					var p8 = function p8(number) {
						return (0, _misc.precision)(number, 8);
					};
					if (pipeType == IPIPETYPE) return p8(player.posx) > p8(pipe.posx + dx) && p8(player.posx + player.width) < p8(pipe.posx + pipe.width - dx) && p8(player.posy + player.height) >= p8(pipe.posy);
					if (pipeType == LPIPETYPE) return p8(player.posx + player.width) >= p8(pipe.posx) && p8(player.posx) < p8(pipe.posx + pipe.width) && p8(player.posy) >= p8(pipe.posy) && p8(player.posy) < p8(pipe.posy + pipe.height);
				};
				for (var i = 0; i < this._pipes.length; i++) {
					var pipe = this._pipes[i];
					var _ref14 = [IPIPERE.test(pipe.componentIdentifier), LPIPERE.test(pipe.componentIdentifier)],
					    IPIPE = _ref14[0],
					    LPIPE = _ref14[1];

					if (DIRECTIONRIGHT && LPIPE && acceptableBoundaries(pipe, LPIPETYPE, this)) {
						return penetrate(pipe, this.animationTypes.LPENETRATE);
					} else if (DOWNPRESSED && IPIPE && acceptableBoundaries(pipe, IPIPETYPE, this)) {
						console.log(true);
						return penetrate(pipe, this.animationTypes.IPENETRATE);
					}
				}
			}
		}
	}, {
		key: 'moveFromPipe',
		value: function moveFromPipe(scene, pipe, complete) {
			var _this7 = this;

			var _ref15 = [this.animationTypes.FROMPIPE, true, pipe];
			this.animationType = _ref15[0];
			this.movingFromPipe = _ref15[1];
			this.pipe = _ref15[2];

			var dy = 10;
			this.posx = pipe.posx + pipe.width / 2 - this.width / 2;
			this.posy = pipe.posy + dy;
			scene.zindex(this.componentIdentifier, pipe.componentIdentifier);
			scene.bindComponentForAnimation(this.componentIdentifier);
			this._completeAnimation = function () {
				_this7.movingFromPipe = false;
				_collision2.default.updateComponentInLastPXPYWHMap(_this7.componentIdentifier, _this7);
				complete();
			};
		}
	}, {
		key: 'achieveFlagpole',
		value: function achieveFlagpole(scene, stick, flag) {
			var _this8 = this;

			var _ref16 = [this.animationTypes.ALONGFLAGPOLESTICK, true, { stick: stick, flag: flag }];
			this.animationType = _ref16[0];
			this.movingAlongFlagpoleStick = _ref16[1];
			this.flagpole = _ref16[2];

			this.climb(this.direction);
			this.posx = stick.posx - this.width + 5;
			this.clearMoveYProperties();
			scene.zindex(flag.componentIdentifier, this.componentIdentifier);
			scene.bindComponentForAnimation(this.componentIdentifier);
			_sound.Music.stopBackgroundMusic();
			_sound.SFX.flagpole.play();
			_stat2.default.freezeTime(scene);
			_control3.default.clear();
			this._completeAnimation = function () {
				_this8.movingAlongFlagpoleStick = false;
				_this8.flagpoleStickAnimationCompleted = true;
				var SLUGGISHRUNNING = _this8.movement.modes.SLUGGISHRUNNING;

				_this8.movement.mode = SLUGGISHRUNNING;
				_sound.SFX.areaclear.play();
				_control3.default.DIRECTIONRIGHT = true;
			};
		}
	}, {
		key: 'achievePlatform',
		value: function achievePlatform(scene, platformPieceID) {
			var _ref17 = [true, platformPieceID];
			this.achievedPlatform = _ref17[0];
			this.achievedPlatformPieceID = _ref17[1];
		}
	}, {
		key: 'moveWithAchievedPlatform',
		value: function moveWithAchievedPlatform(scene, platformPieces, dy) {
			if (!this.died && this.achievedPlatform && this.achievedPlatformPieceID in platformPieces) {
				this.posy = this.posy + dy;
				if (this.underScene() || this.aboveScene()) this.die(scene, false, true);
			}
		}
	}, {
		key: 'control',
		value: function control(passedTime, components, scene, _control) {
			var _this9 = this;

			var terminate = function terminate() {
				return _this9.died || _this9.penetrating || _this9.movingFromPipe || _this9.movingAlongFlagpoleStick;
			};
			if (terminate()) return false;
			if (_control.DIRECTIONLEFT) {
				this.moveX(passedTime, 1, components, scene, _control);
			} else if (_control.DIRECTIONRIGHT) {
				this.moveX(passedTime, 0, components, scene, _control);
			} else this.stand(this.direction);
			if (terminate()) return false;
			if (_control.DIRECTIONDOWN) {
				if (this.moveY(passedTime, false, components, scene, _control)) _control.DIRECTIONDOWN = _control.DIRECTIONUPDOWN = false;
			} else if (_control.DIRECTIONUPDOWN) {
				if (this.moveY(passedTime, true, components, scene, _control)) _control.DIRECTIONUPDOWN = false;
			}
			this.tryPenetrate(passedTime, components, scene, _control);
		}
	}]);

	return PlayerBoxComponent;
}(_canvasComponent2.default);

exports.default = PlayerBoxComponent;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvasComponent = __webpack_require__(0);

var _canvasComponent2 = _interopRequireDefault(_canvasComponent);

var _GraphicalTextContainer = __webpack_require__(2);

var _GraphicalTextContainer2 = _interopRequireDefault(_GraphicalTextContainer);

var _sound = __webpack_require__(3);

var _stat = __webpack_require__(5);

var _stat2 = _interopRequireDefault(_stat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoinBonusComponent = function (_CanvasComponent) {
	_inherits(CoinBonusComponent, _CanvasComponent);

	function CoinBonusComponent() {
		_classCallCheck(this, CoinBonusComponent);

		var SW = 8,
		    SH = 14;
		var _ref = [SW * 2, SH * 2, _canvasComponent2.default.SPRITES.C],
		    W = _ref[0],
		    H = _ref[1],
		    SPRITE = _ref[2],
		    U = _ref[3];
		var DURATION = 550,
		    AMPLITUDE = 32 * 2,
		    MAXFRAMEINDEX = 4;

		var SPRITES = [[4, 113, SW, SH], [52.5, 113, SW, SH], [36, 113, SW, SH], [20, 113, SW, SH]];
		var OVERPLATFORMGAP = 16;

		var _this = _possibleConstructorReturn(this, (CoinBonusComponent.__proto__ || Object.getPrototypeOf(CoinBonusComponent)).call(this, W, H, SPRITE, U, U, 'sprite', SPRITES[0][0], SPRITES[0][1], SPRITES[0][2], SPRITES[0][3]));

		_this.animationParameters = { DURATION: DURATION, AMPLITUDE: AMPLITUDE, MAXFRAMEINDEX: MAXFRAMEINDEX };
		_this.SPRITES = SPRITES;
		_this.OVERPLATFORMGAP = OVERPLATFORMGAP;

		_this.collidable = false;
		return _this;
	}

	_createClass(CoinBonusComponent, [{
		key: 'init',
		value: function init(pposx, pposy, pw, ph) {
			this.posy = pposy - this.height - this.OVERPLATFORMGAP;
			this.posx = pposx + pw / 2 - this.width / 2;
			this.sxsyswshIndex = this.frameIndex = 0;
			this.inittime = this.initposy = this.animationInitialized = undefined;
		}
	}, {
		key: 'specifySXSYSWSH',
		value: function specifySXSYSWSH() {
			var SX = 0,
			    SY = 1,
			    SW = 2,
			    SH = 3;

			this.sx = this.SPRITES[this.sxsyswshIndex][SX];
			this.sy = this.SPRITES[this.sxsyswshIndex][SY];
			this.sw = this.SPRITES[this.sxsyswshIndex][SW];
			this.sh = this.SPRITES[this.sxsyswshIndex][SH];
		}
	}, {
		key: 'animate',
		value: function animate(time, scene) {

			if (!this.animationInitialized) {
				this.inittime = time;
				this.initposy = this.posy;
				this.animationInitialized = true;
				_sound.SFX.coin.play();
				_stat2.default.score(scene, 200);
				_stat2.default.coins(scene, 1);
			}

			var _animationParameters = this.animationParameters,
			    DURATION = _animationParameters.DURATION,
			    AMPLITUDE = _animationParameters.AMPLITUDE;

			var ANIMATIONCOMPLETED = false;
			var durationIndex = (time - this.inittime) / DURATION;

			if (durationIndex >= 1) ANIMATIONCOMPLETED = true;

			if (++this.frameIndex % this.animationParameters.MAXFRAMEINDEX == 0) {
				this.specifySXSYSWSH();
				this.frameIndex = 0;
				this.sxsyswshIndex = (this.sxsyswshIndex + 1) % this.SPRITES.length;
			}

			this.posy = this.initposy - AMPLITUDE * Math.sin(Math.PI * durationIndex);

			if (ANIMATIONCOMPLETED) {
				var GTC = new _GraphicalTextContainer2.default('200', this.posx + this.width / 2, this.posy + this.height / 2, 1.4);
				scene.bindComponentForAnimation(GTC.componentIdentifier);
				scene.bindComponent(GTC);
				scene.bindComponent(GTC, GTC.componentIdentifier);
				scene.unbindComponent(this.componentIdentifier);
				return true;
			}
		}
	}]);

	return CoinBonusComponent;
}(_canvasComponent2.default);

exports.default = CoinBonusComponent;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvasComponent = __webpack_require__(0);

var _canvasComponent2 = _interopRequireDefault(_canvasComponent);

var _misc = __webpack_require__(1);

var _NPCContainer = __webpack_require__(10);

var _NPCContainer2 = _interopRequireDefault(_NPCContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuestionBoxComponent = function (_CanvasComponent) {
	_inherits(QuestionBoxComponent, _CanvasComponent);

	/* @pallete = 'OW' (USED IN OVERWORLD LEVELS) */
	/* @pallete = 'UG' (USED IN UNDERGROUND LEVELS) */
	/* @pallete = 'CASTLE' (USED IN CASTLE LEVELS) */
	/* @pallete = 'UW' (USED IN UNDERWATER LEVELS) */
	function QuestionBoxComponent() {
		var posx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var posy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		var pallete = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'OW';

		_classCallCheck(this, QuestionBoxComponent);

		var ANIMATE = 0,
		    HIT = 1,
		    AFTERHIT = 2;
		var _ref = [32, 32, _canvasComponent2.default.SPRITES.BLOCKS],
		    W = _ref[0],
		    H = _ref[1],
		    SPRITE = _ref[2];
		var DURATION = 150,
		    AMPLITUDE = H / 2,
		    MAXFRAMEINDEX = 8,
		    DELAY = 350;
		var OW = 'OW',
		    UG = 'UG',
		    CASTLE = 'CASTLE',
		    UW = 'UW';


		var OWPALLETE = [[80 + 16 * 0, 112 + 16 * 0, 16, 16], [80 + 16 * 1, 112 + 16 * 0, 16, 16], [80 + 16 * 2, 112 + 16 * 0, 16, 16], [80 + 16 * 3, 112 + 16 * 0, 16, 16], /* HIT */
		[80 + 16 * 4, 112 + 16 * 0, 16, 16] /* AFTER HIT */
		];

		var UGPALLETE = [[80 + 16 * 0, 112 + 16 * 1, 16, 16], [80 + 16 * 1, 112 + 16 * 1, 16, 16], [80 + 16 * 2, 112 + 16 * 1, 16, 16], [80 + 16 * 3, 112 + 16 * 1, 16, 16], /* HIT */
		[80 + 16 * 4, 112 + 16 * 1, 16, 16] /* AFTER HIT */
		];

		var CASTLEPALLETE = [[80 + 16 * 0, 112 + 16 * 2, 16, 16], [80 + 16 * 1, 112 + 16 * 2, 16, 16], [80 + 16 * 2, 112 + 16 * 2, 16, 16], [80 + 16 * 3, 112 + 16 * 2, 16, 16], /* HIT */
		[80 + 16 * 4, 112 + 16 * 2, 16, 16] /* AFTER HIT */
		];

		var UWPALLETE = [[80 + 16 * 0, 112 + 16 * 3, 16, 16], [80 + 16 * 1, 112 + 16 * 3, 16, 16], [80 + 16 * 2, 112 + 16 * 3, 16, 16], [80 + 16 * 3, 112 + 16 * 3, 16, 16], /* HIT */
		[80 + 16 * 4, 112 + 16 * 3, 16, 16] /* AFTER HIT */
		];

		var PALLETE = void 0;

		if (pallete == OW) PALLETE = OWPALLETE;else if (pallete == UG) PALLETE = UGPALLETE;else if (pallete == CASTLE) PALLETE = CASTLEPALLETE;else if (pallete == UW) PALLETE = UWPALLETE;

		var _this = _possibleConstructorReturn(this, (QuestionBoxComponent.__proto__ || Object.getPrototypeOf(QuestionBoxComponent)).call(this, W, H, SPRITE, posx, posy, 'sprite', PALLETE[0][0], PALLETE[0][1], PALLETE[0][2], PALLETE[0][3]));

		_this.animationParameters = { DURATION: DURATION, AMPLITUDE: AMPLITUDE, MAXFRAMEINDEX: MAXFRAMEINDEX, DELAY: DELAY };
		_this.states = { ANIMATE: ANIMATE, HIT: HIT, AFTERHIT: AFTERHIT };
		_this.state = _this.states.ANIMATE;
		_this.pallete = PALLETE;
		_this.sxsyswshIndex = _this.animateIndex = _this.frameIndex = 0;
		return _this;
	}

	_createClass(QuestionBoxComponent, [{
		key: 'specifySXSYSWSH',
		value: function specifySXSYSWSH() {
			var SX = 0,
			    SY = 1,
			    SW = 2,
			    SH = 3;

			this.sx = this.pallete[this.sxsyswshIndex][SX];
			this.sy = this.pallete[this.sxsyswshIndex][SY];
			this.sw = this.pallete[this.sxsyswshIndex][SW];
			this.sh = this.pallete[this.sxsyswshIndex][SH];
		}
	}, {
		key: 'animate',
		value: function animate(time, scene) {

			if (this.state == this.states.ANIMATE) {
				var NFRAMESPASSED = this.NFRAMESPASSED || ++this.frameIndex % this.animationParameters.MAXFRAMEINDEX == 0;
				if (NFRAMESPASSED) {

					this.specifySXSYSWSH();

					if (this.sxsyswshIndex == 0) {
						if (!this.NFRAMESPASSED) this.NFRAMESPASSED = true;
						if (!this.inittime) this.inittime = time;
						if (time - this.inittime <= this.animationParameters.DELAY) return false;else this.NFRAMESPASSED = this.inittime = undefined;
					}

					this.frameIndex = 0;
					this.sxsyswshIndex = [1, 2, 1, 0][this.animateIndex];

					if (this.animateIndex == 3) this.animateIndex = 0;else this.animateIndex++;
				}
			} else if (this.state == this.states.HIT) {
				var _animationParameters = this.animationParameters,
				    DURATION = _animationParameters.DURATION,
				    AMPLITUDE = _animationParameters.AMPLITUDE;


				if (!this.init) {
					this.NFRAMESPASSED = undefined;
					this.frameIndex = this.animateIndex = this.sxsyswshIndex = 0;
					this.specifySXSYSWSH();
					this.init = true;
					this.initposy = this.posy;
					this.inittime = time;
					if (this.bonusComponent) {
						if (this.initBonusAfterAnimation == false) this.initBonus(scene);
					} else this.specifySXSYSWSH(this.sxsyswshIndex = 3);
				}

				var durationIndex = (time - this.inittime) / DURATION;
				var ANIMATIONCOMPLETED = false;
				if (durationIndex >= 1) ANIMATIONCOMPLETED = true;

				if (ANIMATIONCOMPLETED) {
					this.posy = this.initposy;
					this.init = this.inittime = this.initposy = undefined;
					if (this.bonusAmount) if (this.initBonusAfterAnimation == true) this.initBonus(scene);
					if (this.bonusComponent && this.bonusIndex != this.bonusAmount) this.state = this.states.ANIMATE;else {
						this.specifySXSYSWSH(this.sxsyswshIndex = 4);
						this.solid = true;
						return true;
					}
				} else this.posy = this.initposy - AMPLITUDE * Math.sin(Math.PI * durationIndex);
			}
		}
	}, {
		key: 'hit',
		value: function hit(scene) {
			if (this.solid == true) return false;
			this.state = this.states.HIT;
			scene.bindComponentForAnimation(this.componentIdentifier);
		}
	}, {
		key: 'unbindBonus',
		value: function unbindBonus() {
			delete this.bonusComponentIdentifier;
			delete this.bonusIndex;
			delete this.bonusAmount;
			delete this.bonusComponent;
			delete this.initBonusComponent;
			delete this.initBonusAfterAnimation;
		}
	}, {
		key: 'initBonus',
		value: function initBonus(scene) {
			if (this.bonusIndex++ < this.bonusAmount) this.initBonusComponent(scene);
			if (this.bonusIndex == this.bonusAmount) {
				this.unbindBonus();
				this.specifySXSYSWSH(this.sxsyswshIndex = 3);
			}
		}
	}, {
		key: 'bindBonus',
		value: function bindBonus(bonusComponent, bonusAmount) {
			var _this2 = this;

			var initBonusAfterAnimation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
			var extendsFromNPCClass = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;


			this.bonusComponentIdentifier = bonusComponent.componentIdentifier || 'bonus-' + (0, _misc.randomizeNumber)();
			this.bonusIndex = 0;
			this.bonusAmount = bonusAmount;
			this.bonusComponent = bonusComponent;
			this.initBonusAfterAnimation = initBonusAfterAnimation;

			this.initBonusComponent = function (scene) {
				var _ref2 = [_this2.bonusComponent, _this2.bonusComponentIdentifier],
				    component = _ref2[0],
				    componentIdentifier = _ref2[1];

				component.init(_this2.posx, _this2.posy, _this2.width, _this2.height);
				if (extendsFromNPCClass) {
					scene.bindComponent(component, componentIdentifier);
					_NPCContainer2.default.instance().pushNPC(component);
				} else {
					if (scene.getBindedComponent(componentIdentifier) !== component) {
						scene.bindComponent(component, componentIdentifier);
						scene.bindComponentForAnimation(componentIdentifier);
					}
				}
				scene.zindex(componentIdentifier, _this2.componentIdentifier);
			};
			return this;
		}
	}]);

	return QuestionBoxComponent;
}(_canvasComponent2.default);

exports.default = QuestionBoxComponent;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvasComponent = __webpack_require__(0);

var _canvasComponent2 = _interopRequireDefault(_canvasComponent);

var _misc = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BrickBoxComponent = function (_CanvasComponent) {
	_inherits(BrickBoxComponent, _CanvasComponent);

	/* @pallete = 'OW' (USED IN OVERWORLD LEVELS) */
	/* @pallete = 'UG' (USED IN UNDERGROUND LEVELS) */
	/* @pallete = 'CASTLE' (USED IN CASTLE LEVELS) */
	/* @pallete = 'UW' (USED IN UNDERWATER LEVELS) */
	function BrickBoxComponent() {
		var posx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var posy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		var pallete = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'OW';

		_classCallCheck(this, BrickBoxComponent);

		var _ref = [32, 32, _canvasComponent2.default.SPRITES.BLOCKS],
		    W = _ref[0],
		    H = _ref[1],
		    SPRITE = _ref[2],
		    SX = _ref[3],
		    SY = _ref[4],
		    SW = _ref[5],
		    SH = _ref[6];
		var OW = 'OW',
		    UG = 'UG',
		    CASTLE = 'CASTLE',
		    UW = 'UW';


		var OWPALLETE = [[80 + 16 * 12, 112 + 16 * 0, 16, 16]]; // 16 * 5 
		var UGPALLETE = [[80 + 16 * 12, 112 + 16 * 1, 16, 16]]; // 16 * 6
		var CASTLEPALLETE = [];
		var UWPALLETE = [];

		var DURATION = 150,
		    AMPLITUDE = H / 2;


		var PALLETE = void 0;
		if (pallete == OW) PALLETE = OWPALLETE;else if (pallete == UG) PALLETE = UGPALLETE;else if (pallete == CASTLE) PALLETE = CASTLEPALLETE;else if (pallete == UW) PALLETE = UWPALLETE;

		var _this = _possibleConstructorReturn(this, (BrickBoxComponent.__proto__ || Object.getPrototypeOf(BrickBoxComponent)).call(this, W, H, SPRITE, posx, posy, 'sprite', PALLETE[0][0], PALLETE[0][1], PALLETE[0][2], PALLETE[0][3]));

		_this.pallete = PALLETE;
		_this.animationParameters = { DURATION: DURATION, AMPLITUDE: AMPLITUDE };
		return _this;
	}

	_createClass(BrickBoxComponent, [{
		key: 'animate',
		value: function animate(time, scene) {

			if (!this.animationInitialized) {
				this.animationInitialized = true;
				this.inittime = time;
				this.initposy = this.posy;
				if (this.bonusComponent) {
					if (this.bonusIndex++ < this.bonusAmount) this.initBonusComponent(scene);
					if (this.bonusIndex == this.bonusAmount) {
						this.unbindBonus();
						//this.specifySXSYSWSH(this.sxsyswshIndex = 3)
					}
				}
				//else this.specifySXSYSWSH(this.sxsyswshIndex = 3)
			}

			var _animationParameters = this.animationParameters,
			    DURATION = _animationParameters.DURATION,
			    AMPLITUDE = _animationParameters.AMPLITUDE;

			var ANIMATIONCOMPLETED = false;
			var durationIndex = (time - this.inittime) / DURATION;

			if (durationIndex >= 1) ANIMATIONCOMPLETED = true;

			if (ANIMATIONCOMPLETED) {
				this.posy = this.initposy;
				this.animationInitialized = this.inittime = this.initposy = undefined;
				return true;
			} else this.posy = this.initposy - AMPLITUDE * Math.sin(Math.PI * durationIndex);
		}
	}, {
		key: 'hit',
		value: function hit(scene) {
			scene.bindComponentForAnimation(this.componentIdentifier);
		}
	}, {
		key: 'bindCoinBoxIdentifier',
		value: function bindCoinBoxIdentifier(identifier) {
			this.coinBoxIdentifier = identifier;
			return this;
		}
	}, {
		key: 'bindBonus',
		value: function bindBonus(bonusComponent, bonusAmount) {
			var _this2 = this;

			var bonusComponentIdentifierPrefix = 'cabc';
			this.bonusComponentIdentifier = '' + bonusComponentIdentifierPrefix + (0, _misc.randomizeNumber)();
			this.bonusIndex = 0;
			this.bonusAmount = bonusAmount;
			this.bonusComponent = bonusComponent;
			this.initBonusComponent = function (scene) {
				var _ref2 = [_this2.bonusComponent, _this2.bonusComponentIdentifier],
				    component = _ref2[0],
				    componentIdentifier = _ref2[1];

				component.init(_this2.posx, _this2.posy, _this2.width, _this2.height);
				if (scene.getBindedComponent(componentIdentifier) !== component) {
					scene.bindComponent(component, componentIdentifier);
					scene.bindComponentForAnimation(componentIdentifier);
				}
			};
			return this;
		}
	}, {
		key: 'unbindBonus',
		value: function unbindBonus() {
			delete this.bonusComponentIdentifier;
			delete this.bonusIndex;
			delete this.bonusAmount;
			delete this.bonusComponent;
			delete this.initBonusComponent;
		}
	}]);

	return BrickBoxComponent;
}(_canvasComponent2.default);

exports.default = BrickBoxComponent;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvasComponent = __webpack_require__(0);

var _canvasComponent2 = _interopRequireDefault(_canvasComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoinBoxComponent = function (_CanvasComponent) {
		_inherits(CoinBoxComponent, _CanvasComponent);

		/* @pallete = 'OW' (USED IN OVERWORLD LEVELS) */
		/* @pallete = 'UG' (USED IN UNDERGROUND LEVELS) */
		/* @pallete = 'CASTLE' (USED IN CASTLE LEVELS) */
		/* @pallete = 'UW' (USED IN UNDERWATER LEVELS) */
		function CoinBoxComponent() {
				var posx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
				var posy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
				var pallete = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'OW';

				_classCallCheck(this, CoinBoxComponent);

				var _ref = [20, 28, _canvasComponent2.default.SPRITES.C],
				    W = _ref[0],
				    H = _ref[1],
				    SPRITE = _ref[2];
				var MAXFRAMEINDEX = 8,
				    DELAY = 350;
				var OW = 'OW',
				    UG = 'UG',
				    CASTLE = 'CASTLE',
				    UW = 'UW';


				var OWPALLETE = [[3, 98, 10, 14], [19, 98, 10, 14], [35, 98, 10, 14]];

				var UGPALLETE = [[147, 98, 10, 14], [163, 98, 10, 14], [179, 98, 10, 14]];

				var CASTLEPALLETE = [[291, 98, 10, 14], [307, 98, 10, 14], [323, 98, 10, 14]];

				var UWPALLETE = [[435, 98, 10, 14], [451, 98, 10, 14], [467, 98, 10, 14]];

				var PALLETE = void 0;

				if (pallete == OW) PALLETE = OWPALLETE;else if (pallete == UG) PALLETE = UGPALLETE;else if (pallete == CASTLE) PALLETE = CASTLEPALLETE;else if (pallete == UW) PALLETE = UWPALLETE;

				var _this = _possibleConstructorReturn(this, (CoinBoxComponent.__proto__ || Object.getPrototypeOf(CoinBoxComponent)).call(this, W, H, SPRITE, posx, posy, 'sprite', PALLETE[0][0], PALLETE[0][1], PALLETE[0][2], PALLETE[0][3]));

				_this.animationParameters = { MAXFRAMEINDEX: MAXFRAMEINDEX, DELAY: DELAY };
				_this.pallete = PALLETE;
				_this.sxsyswshIndex = _this.animateIndex = _this.frameIndex = 0;
				return _this;
		}

		_createClass(CoinBoxComponent, [{
				key: 'specifySXSYSWSH',
				value: function specifySXSYSWSH() {
						var SX = 0,
						    SY = 1,
						    SW = 2,
						    SH = 3;

						this.sx = this.pallete[this.sxsyswshIndex][SX];
						this.sy = this.pallete[this.sxsyswshIndex][SY];
						this.sw = this.pallete[this.sxsyswshIndex][SW];
						this.sh = this.pallete[this.sxsyswshIndex][SH];
				}
		}, {
				key: 'animate',
				value: function animate(time, scene) {
						var NFRAMESPASSED = this.NFRAMESPASSED || ++this.frameIndex % this.animationParameters.MAXFRAMEINDEX == 0;
						if (NFRAMESPASSED) {

								this.specifySXSYSWSH();

								if (this.sxsyswshIndex == 0) {
										if (!this.NFRAMESPASSED) this.NFRAMESPASSED = true;
										if (!this.inittime) this.inittime = time;
										if (time - this.inittime <= this.animationParameters.DELAY) return false;else this.NFRAMESPASSED = this.inittime = undefined;
								}

								this.frameIndex = 0;
								this.sxsyswshIndex = [1, 2, 1, 0][this.animateIndex];

								if (this.animateIndex == 3) this.animateIndex = 0;else this.animateIndex++;
						}
				}
		}]);

		return CoinBoxComponent;
}(_canvasComponent2.default);

exports.default = CoinBoxComponent;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GraphicalTextContainer = __webpack_require__(2);

var _canvasComponent = __webpack_require__(0);

var _canvasComponent2 = _interopRequireDefault(_canvasComponent);

var _TriangleBoxComponent = __webpack_require__(9);

var _TriangleBoxComponent2 = _interopRequireDefault(_TriangleBoxComponent);

var _TransparentBoxComponent = __webpack_require__(4);

var _TransparentBoxComponent2 = _interopRequireDefault(_TransparentBoxComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var entries = Object.entries;
var stickComponentIdentifier = 'flagpole-stick',
    flagComponentIdentifier = 'flagpole-flag',
    triangleBoxComponentIdentifier = 'flagpole-ttc',
    playerComponentIdentifier = 'player';

var FlagpoleBoxComponent = function () {
	/*@pallete = 0*/
	/*@pallete = 1*/
	/*@pallete = 2*/
	function FlagpoleBoxComponent(posx, posy) {
		var _components;

		var pallete = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

		_classCallCheck(this, FlagpoleBoxComponent);

		var FFLAGPALLETE = undefined;
		var _ref = [5, 300, 32, 32, _canvasComponent2.default.SPRITES.C],
		    FSTICKW = _ref[0],
		    FSTICKWH = _ref[1],
		    FFLAGW = _ref[2],
		    FFLAGH = _ref[3],
		    FFLAGSPRITE = _ref[4];

		var FFLAGPALLETE0 = [128, 32, FFLAGW / 2, FFLAGH / 2];
		var FFLAGPALLETE1 = [272, 32, FFLAGW / 2, FFLAGH / 2];
		var FFLAGPALLETE2 = [560, 32, FFLAGW / 2, FFLAGH / 2];

		if (pallete == 0) FFLAGPALLETE = FFLAGPALLETE0;
		if (pallete == 1) FFLAGPALLETE = FFLAGPALLETE1;
		if (pallete == 2) FFLAGPALLETE = FFLAGPALLETE2;

		var triangleBoxComponent = new _TriangleBoxComponent2.default(posx, posy);
		var stickBoxComponent = new _TransparentBoxComponent2.default(posx + triangleBoxComponent.width / 2 - FSTICKW / 2, posy - FSTICKWH, FSTICKW, FSTICKWH);
		var flagBoxComponent = new _canvasComponent2.default(FFLAGW + FSTICKW, FFLAGH, FFLAGSPRITE, stickBoxComponent.posx - FFLAGW, stickBoxComponent.posy + 15, 'sprite', FFLAGPALLETE[0], FFLAGPALLETE[1], FFLAGPALLETE[2], FFLAGPALLETE[3]);
		flagBoxComponent.collidable = false;

		var components = (_components = {}, _defineProperty(_components, triangleBoxComponentIdentifier, triangleBoxComponent), _defineProperty(_components, stickComponentIdentifier, stickBoxComponent), _defineProperty(_components, flagComponentIdentifier, flagBoxComponent), _components);

		var _ref2 = [true, components];
		this.bindable = _ref2[0];
		this._components = _ref2[1];
	}

	_createClass(FlagpoleBoxComponent, [{
		key: 'launchAnimation',
		value: function launchAnimation(scene, pointsAmount, complete) {
			scene.bindComponentForAnimation(this.componentIdentifier);
			this.completeAnimaton = complete;
			this._pointsAmount = pointsAmount;
		}
	}, {
		key: 'animate',
		value: function animate(time, scene) {
			var _this = this;

			var _ref3 = [this._components[stickComponentIdentifier], this._components[flagComponentIdentifier]],
			    stick = _ref3[0],
			    flag = _ref3[1];
			var _ref4 = [10, scene.getBindedComponent(playerComponentIdentifier).movement.FLAGPOLEDY],
			    stickOffset = _ref4[0],
			    FLAGPOLEDY = _ref4[1];

			var stickTerminalPosition = stick.posy + stick.height - stickOffset;
			flag.posy = flag.posy + FLAGPOLEDY;
			this._flagAnimated = flag.posy + flag.height >= stickTerminalPosition;
			if (!this._animationInitialized) {
				this._animationInitialized = true;
				var customAnimationFunction = function customAnimationFunction(time, scene, components, containerIdentifier) {
					entries(components).forEach(function (entry) {
						return entry[1].posy = entry[1].posy - FLAGPOLEDY;
					});
					if (_this._flagAnimated) {
						scene.unbindComponent(containerIdentifier);
						_this.completeAnimaton();
						delete _this._flagAnimated;
						return true;
					}
				};
				(0, _GraphicalTextContainer.bindGraphicalTextContainer)(customAnimationFunction, scene, '' + this._pointsAmount, stick.posx + stick.width + 5, stickTerminalPosition - 30, 1.7, undefined, undefined, 1);
			}
			if (this._flagAnimated) {
				flag.posy = stickTerminalPosition - flag.height;
				delete this._animationInitialized;
				delete this._pointsAmount;
				scene.unbindComponent(this.componentIdentifier);
				return true;
			}
		}
	}]);

	return FlagpoleBoxComponent;
}();

exports.default = FlagpoleBoxComponent;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvasComponent = __webpack_require__(0);

var _canvasComponent2 = _interopRequireDefault(_canvasComponent);

var _stat = __webpack_require__(5);

var _stat2 = _interopRequireDefault(_stat);

var _sound = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var firecrackerBoxComponentIdentifier = 'firecracker',
    castleBoxComponentIdentifier = 'castle',
    castleFlagBoxComponentIdentifier = 'castle-flag';

var CastleBoxComponent = function () {
	// @type = 0 SMALL
	// @type = 1 BIG
	function CastleBoxComponent(posx, posy) {
		var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

		_classCallCheck(this, CastleBoxComponent);

		var _ref = [0, 1, _canvasComponent2.default.SPRITES.C, {}],
		    FLAG = _ref[0],
		    FIREWORK = _ref[1],
		    SPRITEC = _ref[2],
		    components = _ref[3];

		var CSPRITE = void 0,
		    CW = void 0,
		    CH = void 0;
		var _ref2 = [true, { FLAG: FLAG, FIREWORK: FIREWORK }, type, SPRITEC];
		this.bindable = _ref2[0];
		this.animationTypes = _ref2[1];
		this.castleType = _ref2[2];
		this.SPRITEC = _ref2[3];

		this.frameIndex = this.firecrackerSpriteMapIndex = this.firecrackersPositionIndex = 0;
		this.firecrackerSpriteMap = [[116, 148, 8, 8, 8 * 2, 8 * 2], [114, 161, 12, 14, 12 * 2, 14 * 2], [112, 176, 16, 16, 16 * 2, 16 * 2]];
		this.firecrackerSpriteMapSize = this.firecrackerSpriteMap.length;
		if (type == 0) {
			var _ref3 = [_canvasComponent2.default.SPRITES.ACASTLE, 160, 160];
			CSPRITE = _ref3[0];
			CW = _ref3[1];
			CH = _ref3[2];
			var CFSPRITE = SPRITEC,
			    CFW = 13 * 2,
			    CFH = 14 * 2,
			    CFSX = 129,
			    CFSY = 2,
			    CFSW = 13,
			    CFSH = 14;

			var castleFlagBoxComponent = new _canvasComponent2.default(CFW, CFH, CFSPRITE, posx + CW / 2 - CFW / 2 - 2, posy + 50, 'sprite', CFSX, CFSY, CFSW, CFSH, 1);
			castleFlagBoxComponent.collidable = false;
			components[castleFlagBoxComponentIdentifier] = castleFlagBoxComponent;
			this.shouldAnimateCastleFlag = true;
		}
		if (type == 1) {
			;
			var _ref4 = [_canvasComponent2.default.SPRITES.BCASTLE, 144 * 1.5, 176 * 1.5];
			CSPRITE = _ref4[0];
			CW = _ref4[1];
			CH = _ref4[2];
		}var castleBoxComponent = new _canvasComponent2.default(CW, CH, CSPRITE, posx, posy, 'image');
		castleBoxComponent.collidable = false;
		components[castleBoxComponentIdentifier] = castleBoxComponent;
		var _ref5 = [components, CW, CH];
		this._components = _ref5[0];
		this.CW = _ref5[1];
		this.CH = _ref5[2];

		this.MAXFRAMEINDEX = 15;
	}

	_createClass(CastleBoxComponent, [{
		key: 'launchAnimation',
		value: function launchAnimation(scene, time, complete) {
			var _scene$getBindedCompo = scene.getBindedComponent(castleBoxComponentIdentifier),
			    posx = _scene$getBindedCompo.posx,
			    posy = _scene$getBindedCompo.posy;

			var CW = this.CW,
			    CH = this.CH;
			var timeLastDigit = time % 10,
			    dx = 32;

			if (this.castleType == 0) this.firecrackersPosition = [[posx + dx, posy - dx * 5 + dx / 2], [posx - dx, posy - dx * 2], [posx + CW, posy - dx * 4], [posx + CW, posy - dx], [posx + dx * 2, posy - dx * 4], [posx - dx, posy - dx * 2]];
			if (this.castleType == 1) this.firecrackersPosition = [[posx + dx * 3, posy + dx + dx / 2], [posx + dx, posy + dx * 4], [posx + dx * 7, posy + dx * 2], [posx + dx * 7, posy + dx * 5], [posx + dx * 4, posy + dx * 2], [posx + dx, posy + dx * 4]];
			if (timeLastDigit == 1 || timeLastDigit == 3 || timeLastDigit == 6) {
				;
				var _ref6 = [true, timeLastDigit];
				this.shouldAnimateFirework = _ref6[0];
				this.firecrackersAmount = _ref6[1];
			}this.completeAnimaton = complete;
			scene.bindComponentForAnimation(this.componentIdentifier);
		}
	}, {
		key: 'animate',
		value: function animate(time, scene) {
			var _this = this;

			var _ref7 = [this._components[castleBoxComponentIdentifier], this._components[castleFlagBoxComponentIdentifier], 800],
			    castle = _ref7[0],
			    flag = _ref7[1],
			    flagAnimationDuration = _ref7[2];
			var _animationTypes = this.animationTypes,
			    FLAG = _animationTypes.FLAG,
			    FIREWORK = _animationTypes.FIREWORK;

			var completeAnimation = function completeAnimation() {
				scene.unbindComponent(_this.componentIdentifier);
				_this.completeAnimaton();
				delete _this._animationTypeDefined;
				return true;
			};
			if (!this._animationTypeDefined) {
				this._animationTypeDefined = true;
				if (this.shouldAnimateCastleFlag) this.animationType = this.animationTypes.FLAG;else if (this.shouldAnimateFirework) this.animationType = this.animationTypes.FIREWORK;else return completeAnimation();
			}
			switch (this.animationType) {
				case FLAG:
					{
						if (!this._flagAnimationInitialized) {
							var _ref8 = [time, flag.posy, flag.height + (flag.posy - castle.posy), true];
							this._inittime = _ref8[0];
							this._initposy = _ref8[1];
							this._dy = _ref8[2];
							this._flagAnimationInitialized = _ref8[3];
						}
						var durationIndex = (time - this._inittime) / flagAnimationDuration,
						    flagAnimationCompleted = false;

						if (durationIndex >= 1) {
							durationIndex = 1;
							flagAnimationCompleted = true;
						}
						flag.posy = this._initposy - this._dy * durationIndex;
						if (flagAnimationCompleted) {
							delete this._inittime;
							delete this._initposy;
							delete this._dy;
							delete this._flagAnimationInitialized;
							if (this.shouldAnimateFirework) this.animationType = this.animationTypes.FIREWORK;else return completeAnimation();
						}
						break;
					}
				case FIREWORK:
					{
						var POINTSPERFIRECRACKER = 500;

						if (++this.frameIndex == this.MAXFRAMEINDEX) {
							this.MAXFRAMEINDEX = 8;
							this.frameIndex = 0;
							scene.unbindComponent(firecrackerBoxComponentIdentifier);
							if (this._fireworkAnimationCompleted) {
								this.frameIndex = this.firecrackersPositionIndex = this.firecrackerSpriteMapIndex = 0;
								delete this._fireworkAnimationCompleted;
								return completeAnimation();
							}
							var FIRECRACKERSPRITE = this.SPRITEC;

							var _firecrackerSpriteMap = _slicedToArray(this.firecrackerSpriteMap[0], 6),
							    SX0 = _firecrackerSpriteMap[0],
							    SY0 = _firecrackerSpriteMap[1],
							    SW0 = _firecrackerSpriteMap[2],
							    SH0 = _firecrackerSpriteMap[3],
							    W0 = _firecrackerSpriteMap[4],
							    H0 = _firecrackerSpriteMap[5];

							var _firecrackersPosition = _slicedToArray(this.firecrackersPosition[this.firecrackersPositionIndex], 2),
							    POSX = _firecrackersPosition[0],
							    POSY = _firecrackersPosition[1];

							var firecrackerComponent = undefined;
							if (this.firecrackerSpriteMapIndex == 0) {
								_sound.SFX.firework.play();
								firecrackerComponent = new _canvasComponent2.default(W0, H0, FIRECRACKERSPRITE, POSX, POSY, 'sprite', SX0, SY0, SW0, SH0, 1);
							} else {
								var _firecrackerSpriteMap2 = _slicedToArray(this.firecrackerSpriteMap[this.firecrackerSpriteMapIndex], 6),
								    SX = _firecrackerSpriteMap2[0],
								    SY = _firecrackerSpriteMap2[1],
								    SW = _firecrackerSpriteMap2[2],
								    SH = _firecrackerSpriteMap2[3],
								    W = _firecrackerSpriteMap2[4],
								    H = _firecrackerSpriteMap2[5];

								firecrackerComponent = new _canvasComponent2.default(W, H, FIRECRACKERSPRITE, POSX - (W - W0) / 2, POSY - (H - H0) / 2, 'sprite', SX, SY, SW, SH, 1);
							}
							scene.bindComponent(firecrackerComponent, firecrackerBoxComponentIdentifier);
							scene.zindex(castleBoxComponentIdentifier, firecrackerBoxComponentIdentifier);
							if (++this.firecrackerSpriteMapIndex == this.firecrackerSpriteMapSize) {
								this.MAXFRAMEINDEX = 15;
								this.firecrackerSpriteMapIndex = 0;
								_stat2.default.score(scene, POINTSPERFIRECRACKER);
								if (++this.firecrackersPositionIndex == this.firecrackersAmount) this._fireworkAnimationCompleted = true;
							}
						}
						break;
					}
			}
		}
	}]);

	return CastleBoxComponent;
}();

exports.default = CastleBoxComponent;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _misc = __webpack_require__(1);

var _canvasScene = __webpack_require__(23);

var _canvasScene2 = _interopRequireDefault(_canvasScene);

var _canvasComponent = __webpack_require__(0);

var _canvasComponent2 = _interopRequireDefault(_canvasComponent);

var _display = __webpack_require__(12);

var _display2 = _interopRequireDefault(_display);

var _sound = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ACASTLE = _misc.SPRITESPATH + '/ACASTLE.png',
    BCASTLE = _misc.SPRITESPATH + '/BCASTLE.png',
    ES = _misc.OTHERPATH + '/ES.png',
    C = _misc.SPRITESPATH + '/C.png',
    BLOCKS = _misc.SPRITESPATH + '/BLOCKS.png',
    CHARACTERS = _misc.SPRITESPATH + '/CHARACTERS.png',
    PSTF = _misc.SPRITESPATH + '/PSTF.gif',
    GF = _misc.SPRITESPATH + '/GF.png',
    L11 = _misc.LEVELBGPATH + '/11/L11.png',
    L11B1 = _misc.LEVELBGPATH + '/11/L11B1.png',
    L12 = _misc.LEVELBGPATH + '/12/L12.png',
    L12B1 = _misc.LEVELBGPATH + '/12/L12B1.png',
    L12B2 = _misc.LEVELBGPATH + '/12/L12B2.png',
    TRANSITION = _misc.LEVELBGPATH + '/transition.png';

// & init CanvasComponent.SPRITES

var scene = new _canvasScene2.default(_canvasComponent2.default, _misc.CANVASSCENEW, _misc.CANVASSCENEH, { ACASTLE: ACASTLE, BCASTLE: BCASTLE, ES: ES, C: C, BLOCKS: BLOCKS, CHARACTERS: CHARACTERS, PSTF: PSTF, GF: GF, L11: L11, L11B1: L11B1, L12: L12, L12B1: L12B1, L12B2: L12B2, TRANSITION: TRANSITION });

// Music loading algorithm: Load in I0-stage then display I4 when complete
scene.init(function (scene) /*Display.I1(scene)*/{
	_display2.default.L11(scene); /*scene.move(-4900)*/
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _misc = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasScene = function () {
	function CanvasScene(CanvasComponent, w, h, sprites) {
		_classCallCheck(this, CanvasScene);

		this.CanvasComponent = CanvasComponent;
		this.CanvasComponent.SPRITES = {};

		this._sprites = sprites;
		this._components = [];
		this._componentsForAnimation = [];
		this._canvas = document.createElement('canvas');
		this._context = this._canvas.getContext('2d');
		this._canvas.width = w;
		this._canvas.height = h;
		this._fps = { freq: 60, freqIndex: 0, color: '#000', font: 'bold 11px Arial' };

		this.scene = { context: this._context };

		document.body.insertBefore(this._canvas, document.body.childNodes[0]);
	}

	_createClass(CanvasScene, [{
		key: '_computeFPS',
		value: function _computeFPS(n) {
			var fps = this._fps;
			var dp = this._fps.dp;

			if (!dp) fps.dp = (0, _misc.datenow)();
			fps.fps = ~~(1000 / ((0, _misc.datenow)() - dp) * Math.pow(10, n)) / Math.pow(10, n);
		}
	}, {
		key: 'fps',
		value: function fps(color) {
			var _ref = [this._fps, this._context, 'Frames Per Second:' + _misc.SPACECHAR],
			    fps = _ref[0],
			    context = _ref[1],
			    fpsText = _ref[2];

			if (!fps.fps) this._computeFPS(2);
			if (++fps.freqIndex % fps.freq == 0) {
				fps.freqIndex = 0;
				this._computeFPS(2);
			}
			context.font = fps.font;
			context.fillStyle = color || fps.color;
			context.fillText('' + fpsText + fps.fps, 10, 20);
			fps.dp = (0, _misc.datenow)();
		}
	}, {
		key: 'clear',
		value: function clear() {
			this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
		}
	}, {
		key: 'zindex',
		value: function zindex(componentIdentifier1, componentIdentifier2) /* component1 < component2 */{
			var _ref2 = [],
			    zindex1 = _ref2[0],
			    zindex2 = _ref2[1],
			    shouldSwap = _ref2[2];

			for (var i = 0; i < this._components.length; ++i) {
				var wrappedComponent = this._components[i];
				if (wrappedComponent.componentIdentifier == componentIdentifier1) zindex1 = i;
				if (wrappedComponent.componentIdentifier == componentIdentifier2) zindex2 = i;
				if (zindex1 !== undefined && zindex2 !== undefined) {
					shouldSwap = zindex1 > zindex2;
					break;
				}
			}
			if (shouldSwap) {
				var zindex1WrappedComponent = this._components[zindex1];
				this._components[zindex1] = this._components[zindex2];
				this._components[zindex2] = zindex1WrappedComponent;
			}
		}
	}, {
		key: 'backgroundOffset',
		value: function backgroundOffset() {
			var backgroundComponentIdentifier = 'bg';
			var backgroundComponent = this.getBindedComponent(backgroundComponentIdentifier);
			if (backgroundComponent) {
				return (0, _misc.abs)(backgroundComponent.posx) + _misc.CANVASSCENEW - backgroundComponent.width;
			}
		}
	}, {
		key: 'move',
		value: function move(dx) {
			var omissions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

			for (var i = 0; i < this._components.length; ++i) {
				if (this._components[i].component.unmovable) continue;
				if (omissions.includes(this._components[i].componentIdentifier) == false) {
					this._components[i].component.posx += dx;
				}
			}
		}
	}, {
		key: 'order',
		value: function order(patterns) {
			var componentIdentifiers = [];
			for (var i = 0; i < patterns.length; ++i) {
				for (var k = 0; k < this._components.length; ++k) {
					var componentIdentifier = this._components[k].componentIdentifier;
					if (patterns[i].test(componentIdentifier)) {
						componentIdentifiers[componentIdentifiers.length] = componentIdentifier;
					}
				}
			}
			for (var _i = 0; _i < componentIdentifiers.length; ++_i) {
				var _componentIdentifier = componentIdentifiers[_i];
				var components = this._components;
				for (var _k = 0; _k < components.length; ++_k) {
					var component = components[_k];
					if (component.componentIdentifier == _componentIdentifier) {
						components.splice(_k, 1);
						components[components.length] = component;
						break;
					}
				}
			}
		}
	}, {
		key: 'bindComponent',
		value: function bindComponent(component, componentIdentifier) {
			var _this = this;

			var playerComponentIdentifier = 'player';
			var bindComponent = function bindComponent(component, componentIdentifier) {
				component.componentIdentifier = componentIdentifier;
				_this._components[_this._components.length] = { componentIdentifier: componentIdentifier, component: component };
			};
			var isContainter = function isContainter(component) {
				return '_components' in component;
			};
			var shouldBindContainerItself = function shouldBindContainerItself(container) {
				return container.bindable == true;
			};
			if (!componentIdentifier) {
				var components = component._components;
				var componentIdentifiers = Object.keys(components);
				for (var i = 0; i < componentIdentifiers.length; ++i) {
					var _ref3 = [componentIdentifiers[i], components[componentIdentifiers[i]]],
					    _componentIdentifier2 = _ref3[0],
					    _component = _ref3[1];

					if (isContainter(_component)) {
						if (shouldBindContainerItself(_component)) {
							bindComponent(_component, _componentIdentifier2 || _component.componentIdentifier);
						}
						this.bindComponent(_component);
					} else bindComponent(_component, _componentIdentifier2);
				}
			} else bindComponent(component, componentIdentifier);
			// this._components = [..., player, pbc1, pbc2, pbcN, gtcA, gtcB, gtcN]
			this.order([/^player$/, /^pbc/, /^gtc/]);
		}
	}, {
		key: 'unbindComponent',
		value: function unbindComponent(componentIdentifier) {
			for (var i = 0; i < this._components.length; ++i) {
				if (this._components[i].componentIdentifier == componentIdentifier) {
					return this._components.splice(i, 1);
				}
			}
		}
	}, {
		key: 'getAllBindings',
		value: function getAllBindings() {
			return this._components;
		}
	}, {
		key: 'getBindedComponent',
		value: function getBindedComponent(componentIdentifier) {
			for (var i = 0; i < this._components.length; ++i) {
				if (this._components[i].componentIdentifier == componentIdentifier) {
					return this._components[i].component;
				}
			}
		}
	}, {
		key: 'getBindedComponentsForAnimation',
		value: function getBindedComponentsForAnimation() {
			return this._componentsForAnimation;
		}
	}, {
		key: 'render',
		value: function render(clearScene) {
			if (clearScene == true) {
				this.clear();
			}
			for (var i = 0; i < this._components.length; ++i) {
				if (typeof this._components[i].component.render == 'function') {
					this._components[i].component.render(this._context);
				}
			}
		}
	}, {
		key: 'unbindComponentForAnimation',
		value: function unbindComponentForAnimation(componentIdentifier) {
			for (var i = 0, componentsForAnimation = this._componentsForAnimation; i < componentsForAnimation.length; ++i) {
				if (componentsForAnimation[i] == componentIdentifier) {
					return componentsForAnimation.splice(i, 1);
				}
			}
		}
	}, {
		key: 'bindComponentForAnimation',
		value: function bindComponentForAnimation(componentIdentifier) {
			if (this._componentsForAnimation.includes(componentIdentifier) == false) {
				this._componentsForAnimation[this._componentsForAnimation.length] = componentIdentifier;
			}
		}
	}, {
		key: 'animate',
		value: function animate(time) {
			var componentsForAnimationCopy = [];
			// Copying is important here because we may remove left-elements affecting index
			for (var i = 0, componentsForAnimation = this._componentsForAnimation; i < componentsForAnimation.length; ++i) {
				componentsForAnimationCopy[componentsForAnimationCopy.length] = componentsForAnimation[i];
			}
			for (var _i2 = 0; _i2 < componentsForAnimationCopy.length; ++_i2) {
				var _ref4 = [this.getBindedComponent(componentsForAnimationCopy[_i2]), false],
				    component = _ref4[0],
				    unbind = _ref4[1];
				// This check is important: we may remove elements from scene or/and from _componentsForAnimation when component.animate() call

				if (component && this._componentsForAnimation.includes(componentsForAnimationCopy[_i2])) {
					if (typeof component.animate == 'function') {
						unbind = component.animate(time, this);
					}
					if (unbind) this.unbindComponentForAnimation(componentsForAnimationCopy[_i2]);
				}
			}
		}
	}, {
		key: 'init',
		value: function init(_init) {
			var _this2 = this;

			var spritesEntries = Object.entries(this._sprites);
			var spritesSize = spritesEntries.length;

			var spritesLoadedSize = 0;

			var spriteImageLoad = function spriteImageLoad(spriteImage, spriteName) {
				spritesLoadedSize++;
				_this2.CanvasComponent.SPRITES[spriteName] = spriteImage;
				if (spritesLoadedSize == spritesSize) _init(_this2);
			};

			spritesEntries.forEach(function (sprite) {
				var NAME = 0,
				    SRC = 1;
				var _ref5 = [sprite[NAME], sprite[SRC], new Image()],
				    spriteName = _ref5[0],
				    spriteSrc = _ref5[1],
				    spriteImage = _ref5[2];

				spriteImage.src = spriteSrc;
				spriteImage.onload = function () {
					return spriteImageLoad(spriteImage, spriteName);
				};
			});
		}
	}]);

	return CanvasScene;
}();

exports.default = CanvasScene;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 *  howler.js v2.1.0
 *  howlerjs.com
 *
 *  (c) 2013-2018, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Create the global controller. All contained methods and properties apply
   * to all sounds that are currently playing or will be in the future.
   */
  var HowlerGlobal = function() {
    this.init();
  };
  HowlerGlobal.prototype = {
    /**
     * Initialize the global Howler object.
     * @return {Howler}
     */
    init: function() {
      var self = this || Howler;

      // Create a global ID counter.
      self._counter = 1000;

      // Pool of unlocked HTML5 Audio objects.
      self._html5AudioPool = [];
      self.html5PoolSize = 10;

      // Internal properties.
      self._codecs = {};
      self._howls = [];
      self._muted = false;
      self._volume = 1;
      self._canPlayEvent = 'canplaythrough';
      self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;

      // Public properties.
      self.masterGain = null;
      self.noAudio = false;
      self.usingWebAudio = true;
      self.autoSuspend = true;
      self.ctx = null;

      // Set to false to disable the auto audio unlocker.
      self.autoUnlock = true;

      // Setup the various state values for global tracking.
      self._setup();

      return self;
    },

    /**
     * Get/set the global volume for all sounds.
     * @param  {Float} vol Volume from 0.0 to 1.0.
     * @return {Howler/Float}     Returns self or current volume.
     */
    volume: function(vol) {
      var self = this || Howler;
      vol = parseFloat(vol);

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        self._volume = vol;

        // Don't update any of the nodes if we are muted.
        if (self._muted) {
          return self;
        }

        // When using Web Audio, we just need to adjust the master gain.
        if (self.usingWebAudio) {
          self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
        }

        // Loop through and change volume for all HTML5 audio nodes.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and change the volumes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node) {
                sound._node.volume = sound._volume * vol;
              }
            }
          }
        }

        return self;
      }

      return self._volume;
    },

    /**
     * Handle muting and unmuting globally.
     * @param  {Boolean} muted Is muted or not.
     */
    mute: function(muted) {
      var self = this || Howler;

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      self._muted = muted;

      // With Web Audio, we just need to mute the master gain.
      if (self.usingWebAudio) {
        self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
      }

      // Loop through and mute all HTML5 Audio nodes.
      for (var i=0; i<self._howls.length; i++) {
        if (!self._howls[i]._webAudio) {
          // Get all of the sounds in this Howl group.
          var ids = self._howls[i]._getSoundIds();

          // Loop through all sounds and mark the audio node as muted.
          for (var j=0; j<ids.length; j++) {
            var sound = self._howls[i]._soundById(ids[j]);

            if (sound && sound._node) {
              sound._node.muted = (muted) ? true : sound._muted;
            }
          }
        }
      }

      return self;
    },

    /**
     * Unload and destroy all currently loaded Howl objects.
     * @return {Howler}
     */
    unload: function() {
      var self = this || Howler;

      for (var i=self._howls.length-1; i>=0; i--) {
        self._howls[i].unload();
      }

      // Create a new AudioContext to make sure it is fully reset.
      if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
        self.ctx.close();
        self.ctx = null;
        setupAudioContext();
      }

      return self;
    },

    /**
     * Check for codec support of specific extension.
     * @param  {String} ext Audio file extention.
     * @return {Boolean}
     */
    codecs: function(ext) {
      return (this || Howler)._codecs[ext.replace(/^x-/, '')];
    },

    /**
     * Setup various state values for global tracking.
     * @return {Howler}
     */
    _setup: function() {
      var self = this || Howler;

      // Keeps track of the suspend/resume state of the AudioContext.
      self.state = self.ctx ? self.ctx.state || 'suspended' : 'suspended';

      // Automatically begin the 30-second suspend process
      self._autoSuspend();

      // Check if audio is available.
      if (!self.usingWebAudio) {
        // No audio is available on this system if noAudio is set to true.
        if (typeof Audio !== 'undefined') {
          try {
            var test = new Audio();

            // Check if the canplaythrough event is available.
            if (typeof test.oncanplaythrough === 'undefined') {
              self._canPlayEvent = 'canplay';
            }
          } catch(e) {
            self.noAudio = true;
          }
        } else {
          self.noAudio = true;
        }
      }

      // Test to make sure audio isn't disabled in Internet Explorer.
      try {
        var test = new Audio();
        if (test.muted) {
          self.noAudio = true;
        }
      } catch (e) {}

      // Check for supported codecs.
      if (!self.noAudio) {
        self._setupCodecs();
      }

      return self;
    },

    /**
     * Check for browser support for various codecs and cache the results.
     * @return {Howler}
     */
    _setupCodecs: function() {
      var self = this || Howler;
      var audioTest = null;

      // Must wrap in a try/catch because IE11 in server mode throws an error.
      try {
        audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;
      } catch (err) {
        return self;
      }

      if (!audioTest || typeof audioTest.canPlayType !== 'function') {
        return self;
      }

      var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');

      // Opera version <33 has mixed MP3 support, so we need to check for and block it.
      var checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g);
      var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);

      self._codecs = {
        mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
        mpeg: !!mpegTest,
        opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
        ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
        aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
        caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
        m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
        webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
        dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
        flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
      };

      return self;
    },

    /**
     * Some browsers/devices will only allow audio to be played after a user interaction.
     * Attempt to automatically unlock audio on the first user interaction.
     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
     * @return {Howler}
     */
    _unlockAudio: function() {
      var self = this || Howler;

      // Only run this on certain browsers/devices.
      var shouldUnlock = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi|Chrome|Safari/i.test(self._navigator && self._navigator.userAgent);
      if (self._audioUnlocked || !self.ctx || !shouldUnlock) {
        return;
      }

      self._audioUnlocked = false;
      self.autoUnlock = false;

      // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
      // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
      // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
      if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
        self._mobileUnloaded = true;
        self.unload();
      }

      // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
      // http://stackoverflow.com/questions/24119684
      self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);

      // Call this method on touch start to create and play a buffer,
      // then check if the audio actually played to determine if
      // audio has now been unlocked on iOS, Android, etc.
      var unlock = function(e) {
        // Create a pool of unlocked HTML5 Audio objects that can
        // be used for playing sounds without user interaction. HTML5
        // Audio objects must be individually unlocked, as opposed
        // to the WebAudio API which only needs a single activation.
        // This must occur before WebAudio setup or the source.onended
        // event will not fire.
        for (var i=0; i<self.html5PoolSize; i++) {
          var audioNode = new Audio();

          // Mark this Audio object as unlocked to ensure it can get returned
          // to the unlocked pool when released.
          audioNode._unlocked = true;

          // Add the audio node to the pool.
          self._releaseHtml5Audio(audioNode);
        }

        // Loop through any assigned audio nodes and unlock them.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and unlock the audio nodes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node && !sound._node._unlocked) {
                sound._node._unlocked = true;
                sound._node.load();
              }
            }
          }
        }

        // Fix Android can not play in suspend state.
        self._autoResume();

        // Create an empty buffer.
        var source = self.ctx.createBufferSource();
        source.buffer = self._scratchBuffer;
        source.connect(self.ctx.destination);

        // Play the empty buffer.
        if (typeof source.start === 'undefined') {
          source.noteOn(0);
        } else {
          source.start(0);
        }

        // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
        if (typeof self.ctx.resume === 'function') {
          self.ctx.resume();
        }

        // Setup a timeout to check that we are unlocked on the next event loop.
        source.onended = function() {
          source.disconnect(0);

          // Update the unlocked state and prevent this check from happening again.
          self._audioUnlocked = true;

          // Remove the touch start listener.
          document.removeEventListener('touchstart', unlock, true);
          document.removeEventListener('touchend', unlock, true);
          document.removeEventListener('click', unlock, true);

          // Let all sounds know that audio has been unlocked.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('unlock');
          }
        };
      };

      // Setup a touch start listener to attempt an unlock in.
      document.addEventListener('touchstart', unlock, true);
      document.addEventListener('touchend', unlock, true);
      document.addEventListener('click', unlock, true);

      return self;
    },

    /**
     * Get an unlocked HTML5 Audio object from the pool. If none are left,
     * return a new Audio object and throw a warning.
     * @return {Audio} HTML5 Audio object.
     */
    _obtainHtml5Audio: function() {
      var self = this || Howler;

      // Return the next object from the pool if one exists.
      if (self._html5AudioPool.length) {
        return self._html5AudioPool.pop();
      }

      //.Check if the audio is locked and throw a warning.
      var testPlay = new Audio().play();
      if (testPlay && typeof Promise !== 'undefined' && (testPlay instanceof Promise || typeof testPlay.then === 'function')) {
        testPlay.catch(function() {
          console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
        });
      }

      return new Audio();
    },

    /**
     * Return an activated HTML5 Audio object to the pool.
     * @return {Howler}
     */
    _releaseHtml5Audio: function(audio) {
      var self = this || Howler;

      // Don't add audio to the pool if we don't know if it has been unlocked.
      if (audio._unlocked) {
        self._html5AudioPool.push(audio);
      }

      return self;
    },

    /**
     * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
     * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
     * @return {Howler}
     */
    _autoSuspend: function() {
      var self = this;

      if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      // Check if any sounds are playing.
      for (var i=0; i<self._howls.length; i++) {
        if (self._howls[i]._webAudio) {
          for (var j=0; j<self._howls[i]._sounds.length; j++) {
            if (!self._howls[i]._sounds[j]._paused) {
              return self;
            }
          }
        }
      }

      if (self._suspendTimer) {
        clearTimeout(self._suspendTimer);
      }

      // If no sound has played after 30 seconds, suspend the context.
      self._suspendTimer = setTimeout(function() {
        if (!self.autoSuspend) {
          return;
        }

        self._suspendTimer = null;
        self.state = 'suspending';
        self.ctx.suspend().then(function() {
          self.state = 'suspended';

          if (self._resumeAfterSuspend) {
            delete self._resumeAfterSuspend;
            self._autoResume();
          }
        });
      }, 30000);

      return self;
    },

    /**
     * Automatically resume the Web Audio AudioContext when a new sound is played.
     * @return {Howler}
     */
    _autoResume: function() {
      var self = this;

      if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      if (self.state === 'running' && self._suspendTimer) {
        clearTimeout(self._suspendTimer);
        self._suspendTimer = null;
      } else if (self.state === 'suspended') {
        self.ctx.resume().then(function() {
          self.state = 'running';

          // Emit to all Howls that the audio has resumed.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('resume');
          }
        });

        if (self._suspendTimer) {
          clearTimeout(self._suspendTimer);
          self._suspendTimer = null;
        }
      } else if (self.state === 'suspending') {
        self._resumeAfterSuspend = true;
      }

      return self;
    }
  };

  // Setup the global audio controller.
  var Howler = new HowlerGlobal();

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Create an audio group controller.
   * @param {Object} o Passed in properties for this group.
   */
  var Howl = function(o) {
    var self = this;

    // Throw an error if no source is provided.
    if (!o.src || o.src.length === 0) {
      console.error('An array of source files must be passed with any new Howl.');
      return;
    }

    self.init(o);
  };
  Howl.prototype = {
    /**
     * Initialize a new Howl group object.
     * @param  {Object} o Passed in properties for this group.
     * @return {Howl}
     */
    init: function(o) {
      var self = this;

      // If we don't have an AudioContext created yet, run the setup.
      if (!Howler.ctx) {
        setupAudioContext();
      }

      // Setup user-defined default properties.
      self._autoplay = o.autoplay || false;
      self._format = (typeof o.format !== 'string') ? o.format : [o.format];
      self._html5 = o.html5 || false;
      self._muted = o.mute || false;
      self._loop = o.loop || false;
      self._pool = o.pool || 5;
      self._preload = (typeof o.preload === 'boolean') ? o.preload : true;
      self._rate = o.rate || 1;
      self._sprite = o.sprite || {};
      self._src = (typeof o.src !== 'string') ? o.src : [o.src];
      self._volume = o.volume !== undefined ? o.volume : 1;
      self._xhrWithCredentials = o.xhrWithCredentials || false;

      // Setup all other default properties.
      self._duration = 0;
      self._state = 'unloaded';
      self._sounds = [];
      self._endTimers = {};
      self._queue = [];
      self._playLock = false;

      // Setup event listeners.
      self._onend = o.onend ? [{fn: o.onend}] : [];
      self._onfade = o.onfade ? [{fn: o.onfade}] : [];
      self._onload = o.onload ? [{fn: o.onload}] : [];
      self._onloaderror = o.onloaderror ? [{fn: o.onloaderror}] : [];
      self._onplayerror = o.onplayerror ? [{fn: o.onplayerror}] : [];
      self._onpause = o.onpause ? [{fn: o.onpause}] : [];
      self._onplay = o.onplay ? [{fn: o.onplay}] : [];
      self._onstop = o.onstop ? [{fn: o.onstop}] : [];
      self._onmute = o.onmute ? [{fn: o.onmute}] : [];
      self._onvolume = o.onvolume ? [{fn: o.onvolume}] : [];
      self._onrate = o.onrate ? [{fn: o.onrate}] : [];
      self._onseek = o.onseek ? [{fn: o.onseek}] : [];
      self._onunlock = o.onunlock ? [{fn: o.onunlock}] : [];
      self._onresume = [];

      // Web Audio or HTML5 Audio?
      self._webAudio = Howler.usingWebAudio && !self._html5;

      // Automatically try to enable audio.
      if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.autoUnlock) {
        Howler._unlockAudio();
      }

      // Keep track of this Howl group in the global controller.
      Howler._howls.push(self);

      // If they selected autoplay, add a play event to the load queue.
      if (self._autoplay) {
        self._queue.push({
          event: 'play',
          action: function() {
            self.play();
          }
        });
      }

      // Load the source file unless otherwise specified.
      if (self._preload) {
        self.load();
      }

      return self;
    },

    /**
     * Load the audio file.
     * @return {Howler}
     */
    load: function() {
      var self = this;
      var url = null;

      // If no audio is available, quit immediately.
      if (Howler.noAudio) {
        self._emit('loaderror', null, 'No audio support.');
        return;
      }

      // Make sure our source is in an array.
      if (typeof self._src === 'string') {
        self._src = [self._src];
      }

      // Loop through the sources and pick the first one that is compatible.
      for (var i=0; i<self._src.length; i++) {
        var ext, str;

        if (self._format && self._format[i]) {
          // If an extension was specified, use that instead.
          ext = self._format[i];
        } else {
          // Make sure the source is a string.
          str = self._src[i];
          if (typeof str !== 'string') {
            self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
            continue;
          }

          // Extract the file extension from the URL or base64 data URI.
          ext = /^data:audio\/([^;,]+);/i.exec(str);
          if (!ext) {
            ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
          }

          if (ext) {
            ext = ext[1].toLowerCase();
          }
        }

        // Log a warning if no extension was found.
        if (!ext) {
          console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
        }

        // Check if this extension is available.
        if (ext && Howler.codecs(ext)) {
          url = self._src[i];
          break;
        }
      }

      if (!url) {
        self._emit('loaderror', null, 'No codec support for selected audio sources.');
        return;
      }

      self._src = url;
      self._state = 'loading';

      // If the hosting page is HTTPS and the source isn't,
      // drop down to HTML5 Audio to avoid Mixed Content errors.
      if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
        self._html5 = true;
        self._webAudio = false;
      }

      // Create a new sound object and add it to the pool.
      new Sound(self);

      // Load and decode the audio data for playback.
      if (self._webAudio) {
        loadBuffer(self);
      }

      return self;
    },

    /**
     * Play a sound or resume previous playback.
     * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Number}          Sound ID.
     */
    play: function(sprite, internal) {
      var self = this;
      var id = null;

      // Determine if a sprite, sound id or nothing was passed
      if (typeof sprite === 'number') {
        id = sprite;
        sprite = null;
      } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
        // If the passed sprite doesn't exist, do nothing.
        return null;
      } else if (typeof sprite === 'undefined') {
        // Use the default sound sprite (plays the full audio length).
        sprite = '__default';
      }

      // Get the selected node, or get one from the pool.
      var sound = id ? self._soundById(id) : self._inactiveSound();

      // If the sound doesn't exist, do nothing.
      if (!sound) {
        return null;
      }

      // Select the sprite definition.
      if (id && !sprite) {
        sprite = sound._sprite || '__default';
      }

      // If the sound hasn't loaded, we must wait to get the audio's duration.
      // We also need to wait to make sure we don't run into race conditions with
      // the order of function calls.
      if (self._state !== 'loaded') {
        // Set the sprite value on this sound.
        sound._sprite = sprite;

        // Mark this sound as not ended in case another sound is played before this one loads.
        sound._ended = false;

        // Add the sound to the queue to be played on load.
        var soundId = sound._id;
        self._queue.push({
          event: 'play',
          action: function() {
            self.play(soundId);
          }
        });

        return soundId;
      }

      // Don't play the sound if an id was passed and it is already playing.
      if (id && !sound._paused) {
        // Trigger the play event, in order to keep iterating through queue.
        if (!internal) {
          self._loadQueue('play');
        }

        return sound._id;
      }

      // Make sure the AudioContext isn't suspended, and resume it if it is.
      if (self._webAudio) {
        Howler._autoResume();
      }

      // Determine how long to play for and where to start playing.
      var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
      var duration = Math.max(0, ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek);
      var timeout = (duration * 1000) / Math.abs(sound._rate);
      var start = self._sprite[sprite][0] / 1000;
      var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
      var loop = !!(sound._loop || self._sprite[sprite][2]);
      sound._sprite = sprite;

      // Mark the sound as ended instantly so that this async playback
      // doesn't get grabbed by another call to play while this one waits to start.
      sound._ended = false;

      // Update the parameters of the sound.
      var setParams = function() {
        sound._paused = false;
        sound._seek = seek;
        sound._start = start;
        sound._stop = stop;
        sound._loop = loop;
      };

      // End the sound instantly if seek is at the end.
      if (seek >= stop) {
        self._ended(sound);
        return;
      }

      // Begin the actual playback.
      var node = sound._node;
      if (self._webAudio) {
        // Fire this when the sound is ready to play to begin Web Audio playback.
        var playWebAudio = function() {
          self._playLock = false;
          setParams();
          self._refreshBuffer(sound);

          // Setup the playback params.
          var vol = (sound._muted || self._muted) ? 0 : sound._volume;
          node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
          sound._playStart = Howler.ctx.currentTime;

          // Play the sound using the supported method.
          if (typeof node.bufferSource.start === 'undefined') {
            sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
          } else {
            sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
          }

          // Start a new timer if none is present.
          if (timeout !== Infinity) {
            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
          }

          if (!internal) {
            setTimeout(function() {
              self._emit('play', sound._id);
              self._loadQueue();
            }, 0);
          }
        };

        if (Howler.state === 'running') {
          playWebAudio();
        } else {
          self._playLock = true;

          // Wait for the audio context to resume before playing.
          self.once('resume', playWebAudio);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      } else {
        // Fire this when the sound is ready to play to begin HTML5 Audio playback.
        var playHtml5 = function() {
          node.currentTime = seek;
          node.muted = sound._muted || self._muted || Howler._muted || node.muted;
          node.volume = sound._volume * Howler.volume();
          node.playbackRate = sound._rate;

          // Some browsers will throw an error if this is called without user interaction.
          try {
            var play = node.play();

            // Support older browsers that don't support promises, and thus don't have this issue.
            if (play && typeof Promise !== 'undefined' && (play instanceof Promise || typeof play.then === 'function')) {
              // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
              self._playLock = true;

              // Set param values immediately.
              setParams();

              // Releases the lock and executes queued actions.
              play
                .then(function() {
                  self._playLock = false;
                  node._unlocked = true;
                  if (!internal) {
                    self._emit('play', sound._id);
                    self._loadQueue();
                  }
                })
                .catch(function() {
                  self._playLock = false;
                  self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                    'on mobile devices and Chrome where playback was not within a user interaction.');

                  // Reset the ended and paused values.
                  sound._ended = true;
                  sound._paused = true;
                });
            } else if (!internal) {
              self._playLock = false;
              setParams();
              self._emit('play', sound._id);
              self._loadQueue();
            }

            // Setting rate before playing won't work in IE, so we set it again here.
            node.playbackRate = sound._rate;

            // If the node is still paused, then we can assume there was a playback issue.
            if (node.paused) {
              self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                'on mobile devices and Chrome where playback was not within a user interaction.');
              return;
            }

            // Setup the end timer on sprites or listen for the ended event.
            if (sprite !== '__default' || sound._loop) {
              self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            } else {
              self._endTimers[sound._id] = function() {
                // Fire ended on this audio node.
                self._ended(sound);

                // Clear this listener.
                node.removeEventListener('ended', self._endTimers[sound._id], false);
              };
              node.addEventListener('ended', self._endTimers[sound._id], false);
            }
          } catch (err) {
            self._emit('playerror', sound._id, err);
          }
        };

        // Play immediately if ready, or wait for the 'canplaythrough'e vent.
        var loadedNoReadyState = (window && window.ejecta) || (!node.readyState && Howler._navigator.isCocoonJS);
        if (node.readyState >= 3 || loadedNoReadyState) {
          playHtml5();
        } else {
          self._playLock = true;

          var listener = function() {
            // Begin playback.
            playHtml5();

            // Clear this listener.
            node.removeEventListener(Howler._canPlayEvent, listener, false);
          };
          node.addEventListener(Howler._canPlayEvent, listener, false);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      }

      return sound._id;
    },

    /**
     * Pause playback and save current position.
     * @param  {Number} id The sound ID (empty to pause all in group).
     * @return {Howl}
     */
    pause: function(id) {
      var self = this;

      // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'pause',
          action: function() {
            self.pause(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be paused.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound && !sound._paused) {
          // Reset the seek position.
          sound._seek = self.seek(ids[i]);
          sound._rateSeek = 0;
          sound._paused = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound has been created.
              if (!sound._node.bufferSource) {
                continue;
              }

              if (typeof sound._node.bufferSource.stop === 'undefined') {
                sound._node.bufferSource.noteOff(0);
              } else {
                sound._node.bufferSource.stop(0);
              }

              // Clean up the buffer source.
              self._cleanBuffer(sound._node);
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.pause();
            }
          }
        }

        // Fire the pause event, unless `true` is passed as the 2nd argument.
        if (!arguments[1]) {
          self._emit('pause', sound ? sound._id : null);
        }
      }

      return self;
    },

    /**
     * Stop playback and reset to start.
     * @param  {Number} id The sound ID (empty to stop all in group).
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Howl}
     */
    stop: function(id, internal) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to stop when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'stop',
          action: function() {
            self.stop(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be stopped.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          // Reset the seek position.
          sound._seek = sound._start || 0;
          sound._rateSeek = 0;
          sound._paused = true;
          sound._ended = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound's AudioBufferSourceNode has been created.
              if (sound._node.bufferSource) {
                if (typeof sound._node.bufferSource.stop === 'undefined') {
                  sound._node.bufferSource.noteOff(0);
                } else {
                  sound._node.bufferSource.stop(0);
                }

                // Clean up the buffer source.
                self._cleanBuffer(sound._node);
              }
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.currentTime = sound._start || 0;
              sound._node.pause();
            }
          }

          if (!internal) {
            self._emit('stop', sound._id);
          }
        }
      }

      return self;
    },

    /**
     * Mute/unmute a single sound or all sounds in this Howl group.
     * @param  {Boolean} muted Set to true to mute and false to unmute.
     * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
     * @return {Howl}
     */
    mute: function(muted, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to mute when capable.
      if (self._state !== 'loaded'|| self._playLock) {
        self._queue.push({
          event: 'mute',
          action: function() {
            self.mute(muted, id);
          }
        });

        return self;
      }

      // If applying mute/unmute to all sounds, update the group's value.
      if (typeof id === 'undefined') {
        if (typeof muted === 'boolean') {
          self._muted = muted;
        } else {
          return self._muted;
        }
      }

      // If no id is passed, get all ID's to be muted.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          sound._muted = muted;

          // Cancel active fade and set the volume to the end value.
          if (sound._interval) {
            self._stopFade(sound._id);
          }

          if (self._webAudio && sound._node) {
            sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
          } else if (sound._node) {
            sound._node.muted = Howler._muted ? true : muted;
          }

          self._emit('mute', sound._id);
        }
      }

      return self;
    },

    /**
     * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
     *   volume() -> Returns the group's volume value.
     *   volume(id) -> Returns the sound id's current volume.
     *   volume(vol) -> Sets the volume of all sounds in this Howl group.
     *   volume(vol, id) -> Sets the volume of passed sound id.
     * @return {Howl/Number} Returns self or current volume.
     */
    volume: function() {
      var self = this;
      var args = arguments;
      var vol, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // Return the value of the groups' volume.
        return self._volume;
      } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
        // First check if this is an ID, and if not, assume it is a new volume.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          vol = parseFloat(args[0]);
        }
      } else if (args.length >= 2) {
        vol = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the volume or return the current volume.
      var sound;
      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        // If the sound hasn't loaded, add it to the load queue to change volume when capable.
        if (self._state !== 'loaded'|| self._playLock) {
          self._queue.push({
            event: 'volume',
            action: function() {
              self.volume.apply(self, args);
            }
          });

          return self;
        }

        // Set the group volume.
        if (typeof id === 'undefined') {
          self._volume = vol;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            sound._volume = vol;

            // Stop currently running fades.
            if (!args[2]) {
              self._stopFade(id[i]);
            }

            if (self._webAudio && sound._node && !sound._muted) {
              sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
            } else if (sound._node && !sound._muted) {
              sound._node.volume = vol * Howler.volume();
            }

            self._emit('volume', sound._id);
          }
        }
      } else {
        sound = id ? self._soundById(id) : self._sounds[0];
        return sound ? sound._volume : 0;
      }

      return self;
    },

    /**
     * Fade a currently playing sound between two volumes (if no id is passsed, all sounds will fade).
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id (omit to fade all sounds).
     * @return {Howl}
     */
    fade: function(from, to, len, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to fade when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'fade',
          action: function() {
            self.fade(from, to, len, id);
          }
        });

        return self;
      }

      // Make sure the to/from/len values are numbers.
      from = parseFloat(from);
      to = parseFloat(to);
      len = parseFloat(len);

      // Set the volume to the start position.
      self.volume(from, id);

      // Fade the volume of one or all sounds.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        // Create a linear fade or fall back to timeouts with HTML5 Audio.
        if (sound) {
          // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
          if (!id) {
            self._stopFade(ids[i]);
          }

          // If we are using Web Audio, let the native methods do the actual fade.
          if (self._webAudio && !sound._muted) {
            var currentTime = Howler.ctx.currentTime;
            var end = currentTime + (len / 1000);
            sound._volume = from;
            sound._node.gain.setValueAtTime(from, currentTime);
            sound._node.gain.linearRampToValueAtTime(to, end);
          }

          self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
        }
      }

      return self;
    },

    /**
     * Starts the internal interval to fade a sound.
     * @param  {Object} sound Reference to sound to fade.
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id to fade.
     * @param  {Boolean} isGroup   If true, set the volume on the group.
     */
    _startFadeInterval: function(sound, from, to, len, id, isGroup) {
      var self = this;
      var vol = from;
      var diff = to - from;
      var steps = Math.abs(diff / 0.01);
      var stepLen = Math.max(4, (steps > 0) ? len / steps : len);
      var lastTick = Date.now();

      // Store the value being faded to.
      sound._fadeTo = to;

      // Update the volume value on each interval tick.
      sound._interval = setInterval(function() {
        // Update the volume based on the time since the last tick.
        var tick = (Date.now() - lastTick) / len;
        lastTick = Date.now();
        vol += diff * tick;

        // Make sure the volume is in the right bounds.
        vol = Math.max(0, vol);
        vol = Math.min(1, vol);

        // Round to within 2 decimal points.
        vol = Math.round(vol * 100) / 100;

        // Change the volume.
        if (self._webAudio) {
          sound._volume = vol;
        } else {
          self.volume(vol, sound._id, true);
        }

        // Set the group's volume.
        if (isGroup) {
          self._volume = vol;
        }

        // When the fade is complete, stop it and fire event.
        if ((to < from && vol <= to) || (to > from && vol >= to)) {
          clearInterval(sound._interval);
          sound._interval = null;
          sound._fadeTo = null;
          self.volume(to, sound._id);
          self._emit('fade', sound._id);
        }
      }, stepLen);
    },

    /**
     * Internal method that stops the currently playing fade when
     * a new fade starts, volume is changed or the sound is stopped.
     * @param  {Number} id The sound id.
     * @return {Howl}
     */
    _stopFade: function(id) {
      var self = this;
      var sound = self._soundById(id);

      if (sound && sound._interval) {
        if (self._webAudio) {
          sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
        }

        clearInterval(sound._interval);
        sound._interval = null;
        self.volume(sound._fadeTo, id);
        sound._fadeTo = null;
        self._emit('fade', id);
      }

      return self;
    },

    /**
     * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
     *   loop() -> Returns the group's loop value.
     *   loop(id) -> Returns the sound id's loop value.
     *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
     *   loop(loop, id) -> Sets the loop value of passed sound id.
     * @return {Howl/Boolean} Returns self or current loop value.
     */
    loop: function() {
      var self = this;
      var args = arguments;
      var loop, id, sound;

      // Determine the values for loop and id.
      if (args.length === 0) {
        // Return the grou's loop value.
        return self._loop;
      } else if (args.length === 1) {
        if (typeof args[0] === 'boolean') {
          loop = args[0];
          self._loop = loop;
        } else {
          // Return this sound's loop value.
          sound = self._soundById(parseInt(args[0], 10));
          return sound ? sound._loop : false;
        }
      } else if (args.length === 2) {
        loop = args[0];
        id = parseInt(args[1], 10);
      }

      // If no id is passed, get all ID's to be looped.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        sound = self._soundById(ids[i]);

        if (sound) {
          sound._loop = loop;
          if (self._webAudio && sound._node && sound._node.bufferSource) {
            sound._node.bufferSource.loop = loop;
            if (loop) {
              sound._node.bufferSource.loopStart = sound._start || 0;
              sound._node.bufferSource.loopEnd = sound._stop;
            }
          }
        }
      }

      return self;
    },

    /**
     * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   rate() -> Returns the first sound node's current playback rate.
     *   rate(id) -> Returns the sound id's current playback rate.
     *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
     *   rate(rate, id) -> Sets the playback rate of passed sound id.
     * @return {Howl/Number} Returns self or the current playback rate.
     */
    rate: function() {
      var self = this;
      var args = arguments;
      var rate, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current rate of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new rate value.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          rate = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        rate = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the playback rate or return the current value.
      var sound;
      if (typeof rate === 'number') {
        // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
        if (self._state !== 'loaded' || self._playLock) {
          self._queue.push({
            event: 'rate',
            action: function() {
              self.rate.apply(self, args);
            }
          });

          return self;
        }

        // Set the group rate.
        if (typeof id === 'undefined') {
          self._rate = rate;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            // Keep track of our position when the rate changed and update the playback
            // start position so we can properly adjust the seek position for time elapsed.
            if (self.playing(id[i])) {
              sound._rateSeek = self.seek(id[i]);
              sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
            }
            sound._rate = rate;

            // Change the playback rate.
            if (self._webAudio && sound._node && sound._node.bufferSource) {
              sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
            } else if (sound._node) {
              sound._node.playbackRate = rate;
            }

            // Reset the timers.
            var seek = self.seek(id[i]);
            var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
            var timeout = (duration * 1000) / Math.abs(sound._rate);

            // Start a new end timer if sound is already playing.
            if (self._endTimers[id[i]] || !sound._paused) {
              self._clearTimer(id[i]);
              self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
            }

            self._emit('rate', sound._id);
          }
        }
      } else {
        sound = self._soundById(id);
        return sound ? sound._rate : self._rate;
      }

      return self;
    },

    /**
     * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   seek() -> Returns the first sound node's current seek position.
     *   seek(id) -> Returns the sound id's current seek position.
     *   seek(seek) -> Sets the seek position of the first sound node.
     *   seek(seek, id) -> Sets the seek position of passed sound id.
     * @return {Howl/Number} Returns self or the current seek position.
     */
    seek: function() {
      var self = this;
      var args = arguments;
      var seek, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current position of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new seek position.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else if (self._sounds.length) {
          id = self._sounds[0]._id;
          seek = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        seek = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // If there is no ID, bail out.
      if (typeof id === 'undefined') {
        return self;
      }

      // If the sound hasn't loaded, add it to the load queue to seek when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'seek',
          action: function() {
            self.seek.apply(self, args);
          }
        });

        return self;
      }

      // Get the sound.
      var sound = self._soundById(id);

      if (sound) {
        if (typeof seek === 'number' && seek >= 0) {
          // Pause the sound and update position for restarting playback.
          var playing = self.playing(id);
          if (playing) {
            self.pause(id, true);
          }

          // Move the position of the track and cancel timer.
          sound._seek = seek;
          sound._ended = false;
          self._clearTimer(id);

          // Update the seek position for HTML5 Audio.
          if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) {
            sound._node.currentTime = seek;
          }

          // Seek and emit when ready.
          var seekAndEmit = function() {
            self._emit('seek', id);

            // Restart the playback if the sound was playing.
            if (playing) {
              self.play(id, true);
            }
          };

          // Wait for the play lock to be unset before emitting (HTML5 Audio).
          if (playing && !self._webAudio) {
            var emitSeek = function() {
              if (!self._playLock) {
                seekAndEmit();
              } else {
                setTimeout(emitSeek, 0);
              }
            };
            setTimeout(emitSeek, 0);
          } else {
            seekAndEmit();
          }
        } else {
          if (self._webAudio) {
            var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
            var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
            return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
          } else {
            return sound._node.currentTime;
          }
        }
      }

      return self;
    },

    /**
     * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
     * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
     * @return {Boolean} True if playing and false if not.
     */
    playing: function(id) {
      var self = this;

      // Check the passed sound ID (if any).
      if (typeof id === 'number') {
        var sound = self._soundById(id);
        return sound ? !sound._paused : false;
      }

      // Otherwise, loop through all sounds and check if any are playing.
      for (var i=0; i<self._sounds.length; i++) {
        if (!self._sounds[i]._paused) {
          return true;
        }
      }

      return false;
    },

    /**
     * Get the duration of this sound. Passing a sound id will return the sprite duration.
     * @param  {Number} id The sound id to check. If none is passed, return full source duration.
     * @return {Number} Audio duration in seconds.
     */
    duration: function(id) {
      var self = this;
      var duration = self._duration;

      // If we pass an ID, get the sound and return the sprite length.
      var sound = self._soundById(id);
      if (sound) {
        duration = self._sprite[sound._sprite][1] / 1000;
      }

      return duration;
    },

    /**
     * Returns the current loaded state of this Howl.
     * @return {String} 'unloaded', 'loading', 'loaded'
     */
    state: function() {
      return this._state;
    },

    /**
     * Unload and destroy the current Howl object.
     * This will immediately stop all sound instances attached to this group.
     */
    unload: function() {
      var self = this;

      // Stop playing any active sounds.
      var sounds = self._sounds;
      for (var i=0; i<sounds.length; i++) {
        // Stop the sound if it is currently playing.
        if (!sounds[i]._paused) {
          self.stop(sounds[i]._id);
        }

        // Remove the source or disconnect.
        if (!self._webAudio) {
          // Set the source to 0-second silence to stop any downloading (except in IE).
          var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);
          if (!checkIE) {
            sounds[i]._node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
          }

          // Remove any event listeners.
          sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
          sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);

          // Release the Audio object back to the pool.
          Howler._releaseHtml5Audio(sounds[i]._node);
        }

        // Empty out all of the nodes.
        delete sounds[i]._node;

        // Make sure all timers are cleared out.
        self._clearTimer(sounds[i]._id);
      }

      // Remove the references in the global Howler object.
      var index = Howler._howls.indexOf(self);
      if (index >= 0) {
        Howler._howls.splice(index, 1);
      }

      // Delete this sound from the cache (if no other Howl is using it).
      var remCache = true;
      for (i=0; i<Howler._howls.length; i++) {
        if (Howler._howls[i]._src === self._src) {
          remCache = false;
          break;
        }
      }

      if (cache && remCache) {
        delete cache[self._src];
      }

      // Clear global errors.
      Howler.noAudio = false;

      // Clear out `self`.
      self._state = 'unloaded';
      self._sounds = [];
      self = null;

      return null;
    },

    /**
     * Listen to a custom event.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
     * @return {Howl}
     */
    on: function(event, fn, id, once) {
      var self = this;
      var events = self['_on' + event];

      if (typeof fn === 'function') {
        events.push(once ? {id: id, fn: fn, once: once} : {id: id, fn: fn});
      }

      return self;
    },

    /**
     * Remove a custom event. Call without parameters to remove all events.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to remove. Leave empty to remove all.
     * @param  {Number}   id    (optional) Only remove events for this sound.
     * @return {Howl}
     */
    off: function(event, fn, id) {
      var self = this;
      var events = self['_on' + event];
      var i = 0;

      // Allow passing just an event and ID.
      if (typeof fn === 'number') {
        id = fn;
        fn = null;
      }

      if (fn || id) {
        // Loop through event store and remove the passed function.
        for (i=0; i<events.length; i++) {
          var isId = (id === events[i].id);
          if (fn === events[i].fn && isId || !fn && isId) {
            events.splice(i, 1);
            break;
          }
        }
      } else if (event) {
        // Clear out all events of this type.
        self['_on' + event] = [];
      } else {
        // Clear out all events of every type.
        var keys = Object.keys(self);
        for (i=0; i<keys.length; i++) {
          if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
            self[keys[i]] = [];
          }
        }
      }

      return self;
    },

    /**
     * Listen to a custom event and remove it once fired.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @return {Howl}
     */
    once: function(event, fn, id) {
      var self = this;

      // Setup the event listener.
      self.on(event, fn, id, 1);

      return self;
    },

    /**
     * Emit all events of a specific type and pass the sound id.
     * @param  {String} event Event name.
     * @param  {Number} id    Sound ID.
     * @param  {Number} msg   Message to go with event.
     * @return {Howl}
     */
    _emit: function(event, id, msg) {
      var self = this;
      var events = self['_on' + event];

      // Loop through event store and fire all functions.
      for (var i=events.length-1; i>=0; i--) {
        // Only fire the listener if the correct ID is used.
        if (!events[i].id || events[i].id === id || event === 'load') {
          setTimeout(function(fn) {
            fn.call(this, id, msg);
          }.bind(self, events[i].fn), 0);

          // If this event was setup with `once`, remove it.
          if (events[i].once) {
            self.off(event, events[i].fn, events[i].id);
          }
        }
      }

      // Pass the event type into load queue so that it can continue stepping.
      self._loadQueue(event);

      return self;
    },

    /**
     * Queue of actions initiated before the sound has loaded.
     * These will be called in sequence, with the next only firing
     * after the previous has finished executing (even if async like play).
     * @return {Howl}
     */
    _loadQueue: function(event) {
      var self = this;

      if (self._queue.length > 0) {
        var task = self._queue[0];

        // Remove this task if a matching event was passed.
        if (task.event === event) {
          self._queue.shift();
          self._loadQueue();
        }

        // Run the task if no event type is passed.
        if (!event) {
          task.action();
        }
      }

      return self;
    },

    /**
     * Fired when playback ends at the end of the duration.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _ended: function(sound) {
      var self = this;
      var sprite = sound._sprite;

      // If we are using IE and there was network latency we may be clipping
      // audio before it completes playing. Lets check the node to make sure it
      // believes it has completed, before ending the playback.
      if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
        setTimeout(self._ended.bind(self, sound), 100);
        return self;
      }

      // Should this sound loop?
      var loop = !!(sound._loop || self._sprite[sprite][2]);

      // Fire the ended event.
      self._emit('end', sound._id);

      // Restart the playback for HTML5 Audio loop.
      if (!self._webAudio && loop) {
        self.stop(sound._id, true).play(sound._id);
      }

      // Restart this timer if on a Web Audio loop.
      if (self._webAudio && loop) {
        self._emit('play', sound._id);
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        sound._playStart = Howler.ctx.currentTime;

        var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
        self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
      }

      // Mark the node as paused.
      if (self._webAudio && !loop) {
        sound._paused = true;
        sound._ended = true;
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        self._clearTimer(sound._id);

        // Clean up the buffer source.
        self._cleanBuffer(sound._node);

        // Attempt to auto-suspend AudioContext if no sounds are still playing.
        Howler._autoSuspend();
      }

      // When using a sprite, end the track.
      if (!self._webAudio && !loop) {
        self.stop(sound._id, true);
      }

      return self;
    },

    /**
     * Clear the end timer for a sound playback.
     * @param  {Number} id The sound ID.
     * @return {Howl}
     */
    _clearTimer: function(id) {
      var self = this;

      if (self._endTimers[id]) {
        // Clear the timeout or remove the ended listener.
        if (typeof self._endTimers[id] !== 'function') {
          clearTimeout(self._endTimers[id]);
        } else {
          var sound = self._soundById(id);
          if (sound && sound._node) {
            sound._node.removeEventListener('ended', self._endTimers[id], false);
          }
        }

        delete self._endTimers[id];
      }

      return self;
    },

    /**
     * Return the sound identified by this ID, or return null.
     * @param  {Number} id Sound ID
     * @return {Object}    Sound object or null.
     */
    _soundById: function(id) {
      var self = this;

      // Loop through all sounds and find the one with this ID.
      for (var i=0; i<self._sounds.length; i++) {
        if (id === self._sounds[i]._id) {
          return self._sounds[i];
        }
      }

      return null;
    },

    /**
     * Return an inactive sound from the pool or create a new one.
     * @return {Sound} Sound playback object.
     */
    _inactiveSound: function() {
      var self = this;

      self._drain();

      // Find the first inactive node to recycle.
      for (var i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          return self._sounds[i].reset();
        }
      }

      // If no inactive node was found, create a new one.
      return new Sound(self);
    },

    /**
     * Drain excess inactive sounds from the pool.
     */
    _drain: function() {
      var self = this;
      var limit = self._pool;
      var cnt = 0;
      var i = 0;

      // If there are less sounds than the max pool size, we are done.
      if (self._sounds.length < limit) {
        return;
      }

      // Count the number of inactive sounds.
      for (i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          cnt++;
        }
      }

      // Remove excess inactive sounds, going in reverse order.
      for (i=self._sounds.length - 1; i>=0; i--) {
        if (cnt <= limit) {
          return;
        }

        if (self._sounds[i]._ended) {
          // Disconnect the audio source when using Web Audio.
          if (self._webAudio && self._sounds[i]._node) {
            self._sounds[i]._node.disconnect(0);
          }

          // Remove sounds until we have the pool size.
          self._sounds.splice(i, 1);
          cnt--;
        }
      }
    },

    /**
     * Get all ID's from the sounds pool.
     * @param  {Number} id Only return one ID if one is passed.
     * @return {Array}    Array of IDs.
     */
    _getSoundIds: function(id) {
      var self = this;

      if (typeof id === 'undefined') {
        var ids = [];
        for (var i=0; i<self._sounds.length; i++) {
          ids.push(self._sounds[i]._id);
        }

        return ids;
      } else {
        return [id];
      }
    },

    /**
     * Load the sound back into the buffer source.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _refreshBuffer: function(sound) {
      var self = this;

      // Setup the buffer source for playback.
      sound._node.bufferSource = Howler.ctx.createBufferSource();
      sound._node.bufferSource.buffer = cache[self._src];

      // Connect to the correct node.
      if (sound._panner) {
        sound._node.bufferSource.connect(sound._panner);
      } else {
        sound._node.bufferSource.connect(sound._node);
      }

      // Setup looping and playback rate.
      sound._node.bufferSource.loop = sound._loop;
      if (sound._loop) {
        sound._node.bufferSource.loopStart = sound._start || 0;
        sound._node.bufferSource.loopEnd = sound._stop || 0;
      }
      sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);

      return self;
    },

    /**
     * Prevent memory leaks by cleaning up the buffer source after playback.
     * @param  {Object} node Sound's audio node containing the buffer source.
     * @return {Howl}
     */
    _cleanBuffer: function(node) {
      var self = this;
      var isIOS = Howler._navigator && Howler._navigator.vendor.indexOf('Apple') >= 0;

      if (Howler._scratchBuffer && node.bufferSource) {
        node.bufferSource.onended = null;
        node.bufferSource.disconnect(0);
        if (isIOS) {
          try { node.bufferSource.buffer = Howler._scratchBuffer; } catch(e) {}
        }
      }
      node.bufferSource = null;

      return self;
    }
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Setup the sound object, which each node attached to a Howl group is contained in.
   * @param {Object} howl The Howl parent group.
   */
  var Sound = function(howl) {
    this._parent = howl;
    this.init();
  };
  Sound.prototype = {
    /**
     * Initialize a new Sound object.
     * @return {Sound}
     */
    init: function() {
      var self = this;
      var parent = self._parent;

      // Setup the default parameters.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a unique ID for this sound.
      self._id = ++Howler._counter;

      // Add itself to the parent's pool.
      parent._sounds.push(self);

      // Create the new node.
      self.create();

      return self;
    },

    /**
     * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
     * @return {Sound}
     */
    create: function() {
      var self = this;
      var parent = self._parent;
      var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;

      if (parent._webAudio) {
        // Create the gain node for controlling volume (the source will connect to this).
        self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
        self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
        self._node.paused = true;
        self._node.connect(Howler.masterGain);
      } else {
        // Get an unlocked Audio object from the pool.
        self._node = Howler._obtainHtml5Audio();

        // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
        self._errorFn = self._errorListener.bind(self);
        self._node.addEventListener('error', self._errorFn, false);

        // Listen for 'canplaythrough' event to let us know the sound is ready.
        self._loadFn = self._loadListener.bind(self);
        self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);

        // Setup the new audio node.
        self._node.src = parent._src;
        self._node.preload = 'auto';
        self._node.volume = volume * Howler.volume();

        // Begin loading the source.
        self._node.load();
      }

      return self;
    },

    /**
     * Reset the parameters of this sound to the original state (for recycle).
     * @return {Sound}
     */
    reset: function() {
      var self = this;
      var parent = self._parent;

      // Reset all of the parameters of this sound.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._rateSeek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a new ID so that it isn't confused with the previous sound.
      self._id = ++Howler._counter;

      return self;
    },

    /**
     * HTML5 Audio error listener callback.
     */
    _errorListener: function() {
      var self = this;

      // Fire an error event and pass back the code.
      self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);

      // Clear the event listener.
      self._node.removeEventListener('error', self._errorFn, false);
    },

    /**
     * HTML5 Audio canplaythrough listener callback.
     */
    _loadListener: function() {
      var self = this;
      var parent = self._parent;

      // Round up the duration to account for the lower precision in HTML5 Audio.
      parent._duration = Math.ceil(self._node.duration * 10) / 10;

      // Setup a sprite if none is defined.
      if (Object.keys(parent._sprite).length === 0) {
        parent._sprite = {__default: [0, parent._duration * 1000]};
      }

      if (parent._state !== 'loaded') {
        parent._state = 'loaded';
        parent._emit('load');
        parent._loadQueue();
      }

      // Clear the event listener.
      self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
    }
  };

  /** Helper Methods **/
  /***************************************************************************/

  var cache = {};

  /**
   * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
   * @param  {Howl} self
   */
  var loadBuffer = function(self) {
    var url = self._src;

    // Check if the buffer has already been cached and use it instead.
    if (cache[url]) {
      // Set the duration from the cache.
      self._duration = cache[url].duration;

      // Load the sound into this Howl.
      loadSound(self);

      return;
    }

    if (/^data:[^;]+;base64,/.test(url)) {
      // Decode the base64 data URI without XHR, since some browsers don't support it.
      var data = atob(url.split(',')[1]);
      var dataView = new Uint8Array(data.length);
      for (var i=0; i<data.length; ++i) {
        dataView[i] = data.charCodeAt(i);
      }

      decodeAudioData(dataView.buffer, self);
    } else {
      // Load the buffer from the URL.
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.withCredentials = self._xhrWithCredentials;
      xhr.responseType = 'arraybuffer';
      xhr.onload = function() {
        // Make sure we get a successful response back.
        var code = (xhr.status + '')[0];
        if (code !== '0' && code !== '2' && code !== '3') {
          self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
          return;
        }

        decodeAudioData(xhr.response, self);
      };
      xhr.onerror = function() {
        // If there is an error, switch to HTML5 Audio.
        if (self._webAudio) {
          self._html5 = true;
          self._webAudio = false;
          self._sounds = [];
          delete cache[url];
          self.load();
        }
      };
      safeXhrSend(xhr);
    }
  };

  /**
   * Send the XHR request wrapped in a try/catch.
   * @param  {Object} xhr XHR to send.
   */
  var safeXhrSend = function(xhr) {
    try {
      xhr.send();
    } catch (e) {
      xhr.onerror();
    }
  };

  /**
   * Decode audio data from an array buffer.
   * @param  {ArrayBuffer} arraybuffer The audio data.
   * @param  {Howl}        self
   */
  var decodeAudioData = function(arraybuffer, self) {
    // Fire a load error if something broke.
    var error = function() {
      self._emit('loaderror', null, 'Decoding audio data failed.');
    };

    // Load the sound on success.
    var success = function(buffer) {
      if (buffer && self._sounds.length > 0) {
        cache[self._src] = buffer;
        loadSound(self, buffer);
      } else {
        error();
      }
    };

    // Decode the buffer into an audio source.
    if (typeof Promise !== 'undefined' && Howler.ctx.decodeAudioData.length === 1) {
      Howler.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
    } else {
      Howler.ctx.decodeAudioData(arraybuffer, success, error);
    }
  }

  /**
   * Sound is now loaded, so finish setting everything up and fire the loaded event.
   * @param  {Howl} self
   * @param  {Object} buffer The decoded buffer sound source.
   */
  var loadSound = function(self, buffer) {
    // Set the duration.
    if (buffer && !self._duration) {
      self._duration = buffer.duration;
    }

    // Setup a sprite if none is defined.
    if (Object.keys(self._sprite).length === 0) {
      self._sprite = {__default: [0, self._duration * 1000]};
    }

    // Fire the loaded event.
    if (self._state !== 'loaded') {
      self._state = 'loaded';
      self._emit('load');
      self._loadQueue();
    }
  };

  /**
   * Setup the audio context when available, or switch to HTML5 Audio mode.
   */
  var setupAudioContext = function() {
    // If we have already detected that Web Audio isn't supported, don't run this step again.
    if (!Howler.usingWebAudio) {
      return;
    }

    // Check if we are using Web Audio and setup the AudioContext if we are.
    try {
      if (typeof AudioContext !== 'undefined') {
        Howler.ctx = new AudioContext();
      } else if (typeof webkitAudioContext !== 'undefined') {
        Howler.ctx = new webkitAudioContext();
      } else {
        Howler.usingWebAudio = false;
      }
    } catch(e) {
      Howler.usingWebAudio = false;
    }

    // If the audio context creation still failed, set using web audio to false.
    if (!Howler.ctx) {
      Howler.usingWebAudio = false;
    }

    // Check if a webview is being used on iOS8 or earlier (rather than the browser).
    // If it is, disable Web Audio as it causes crashing.
    var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
    var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    var version = appVersion ? parseInt(appVersion[1], 10) : null;
    if (iOS && version && version < 9) {
      var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
      if (Howler._navigator && Howler._navigator.standalone && !safari || Howler._navigator && !Howler._navigator.standalone && !safari) {
        Howler.usingWebAudio = false;
      }
    }

    // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
    if (Howler.usingWebAudio) {
      Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
      Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : 1, Howler.ctx.currentTime);
      Howler.masterGain.connect(Howler.ctx.destination);
    }

    // Re-run the setup on Howler.
    Howler._setup();
  };

  // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return {
        Howler: Howler,
        Howl: Howl
      };
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  // Add support for CommonJS libraries such as browserify.
  if (true) {
    exports.Howler = Howler;
    exports.Howl = Howl;
  }

  // Define globally in case AMD is not available or unused.
  if (typeof window !== 'undefined') {
    window.HowlerGlobal = HowlerGlobal;
    window.Howler = Howler;
    window.Howl = Howl;
    window.Sound = Sound;
  } else if (typeof global !== 'undefined') { // Add to global in Node.js (for testing, etc).
    global.HowlerGlobal = HowlerGlobal;
    global.Howler = Howler;
    global.Howl = Howl;
    global.Sound = Sound;
  }
})();


/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.1.0
 *  howlerjs.com
 *
 *  (c) 2013-2018, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  // Setup default properties.
  HowlerGlobal.prototype._pos = [0, 0, 0];
  HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Helper method to update the stereo panning position of all current Howls.
   * Future Howls will not use this value unless explicitly set.
   * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
   * @return {Howler/Number}     Self or current stereo panning value.
   */
  HowlerGlobal.prototype.stereo = function(pan) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Loop through all Howls and update their stereo panning.
    for (var i=self._howls.length-1; i>=0; i--) {
      self._howls[i].stereo(pan);
    }

    return self;
  };

  /**
   * Get/set the position of the listener in 3D cartesian space. Sounds using
   * 3D position will be relative to the listener's position.
   * @param  {Number} x The x-position of the listener.
   * @param  {Number} y The y-position of the listener.
   * @param  {Number} z The z-position of the listener.
   * @return {Howler/Array}   Self or current listener position.
   */
  HowlerGlobal.prototype.pos = function(x, y, z) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._pos[1] : y;
    z = (typeof z !== 'number') ? self._pos[2] : z;

    if (typeof x === 'number') {
      self._pos = [x, y, z];

      if (typeof self.ctx.listener.positionX !== 'undefined') {
        self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
      }
    } else {
      return self._pos;
    }

    return self;
  };

  /**
   * Get/set the direction the listener is pointing in the 3D cartesian space.
   * A front and up vector must be provided. The front is the direction the
   * face of the listener is pointing, and up is the direction the top of the
   * listener is pointing. Thus, these values are expected to be at right angles
   * from each other.
   * @param  {Number} x   The x-orientation of the listener.
   * @param  {Number} y   The y-orientation of the listener.
   * @param  {Number} z   The z-orientation of the listener.
   * @param  {Number} xUp The x-orientation of the top of the listener.
   * @param  {Number} yUp The y-orientation of the top of the listener.
   * @param  {Number} zUp The z-orientation of the top of the listener.
   * @return {Howler/Array}     Returns self or the current orientation vectors.
   */
  HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    var or = self._orientation;
    y = (typeof y !== 'number') ? or[1] : y;
    z = (typeof z !== 'number') ? or[2] : z;
    xUp = (typeof xUp !== 'number') ? or[3] : xUp;
    yUp = (typeof yUp !== 'number') ? or[4] : yUp;
    zUp = (typeof zUp !== 'number') ? or[5] : zUp;

    if (typeof x === 'number') {
      self._orientation = [x, y, z, xUp, yUp, zUp];

      if (typeof self.ctx.listener.forwardX !== 'undefined') {
        self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
      }
    } else {
      return or;
    }

    return self;
  };

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core init.
   * @param  {Function} _super Core init method.
   * @return {Howl}
   */
  Howl.prototype.init = (function(_super) {
    return function(o) {
      var self = this;

      // Setup user-defined default properties.
      self._orientation = o.orientation || [1, 0, 0];
      self._stereo = o.stereo || null;
      self._pos = o.pos || null;
      self._pannerAttr = {
        coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
        coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
        coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
        distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
        maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
        panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
        refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
        rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
      };

      // Setup event listeners.
      self._onstereo = o.onstereo ? [{fn: o.onstereo}] : [];
      self._onpos = o.onpos ? [{fn: o.onpos}] : [];
      self._onorientation = o.onorientation ? [{fn: o.onorientation}] : [];

      // Complete initilization with howler.js core's init function.
      return _super.call(this, o);
    };
  })(Howl.prototype.init);

  /**
   * Get/set the stereo panning of the audio source for this sound or all in the group.
   * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Number}    Returns self or the current stereo panning value.
   */
  Howl.prototype.stereo = function(pan, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'stereo',
        action: function() {
          self.stereo(pan, id);
        }
      });

      return self;
    }

    // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
    var pannerType = (typeof Howler.ctx.createStereoPanner === 'undefined') ? 'spatial' : 'stereo';

    // Setup the group's stereo panning if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's stereo panning if no parameters are passed.
      if (typeof pan === 'number') {
        self._stereo = pan;
        self._pos = [pan, 0, 0];
      } else {
        return self._stereo;
      }
    }

    // Change the streo panning of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof pan === 'number') {
          sound._stereo = pan;
          sound._pos = [pan, 0, 0];

          if (sound._node) {
            // If we are falling back, make sure the panningModel is equalpower.
            sound._pannerAttr.panningModel = 'equalpower';

            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || !sound._panner.pan) {
              setupPanner(sound, pannerType);
            }

            if (pannerType === 'spatial') {
              if (typeof sound._panner.positionX !== 'undefined') {
                sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
              } else {
                sound._panner.setPosition(pan, 0, 0);
              }
            } else {
              sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
            }
          }

          self._emit('stereo', sound._id);
        } else {
          return sound._stereo;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
   * @param  {Number} x  The x-position of the audio source.
   * @param  {Number} y  The y-position of the audio source.
   * @param  {Number} z  The z-position of the audio source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
   */
  Howl.prototype.pos = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change position when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'pos',
        action: function() {
          self.pos(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? 0 : y;
    z = (typeof z !== 'number') ? -0.5 : z;

    // Setup the group's spatial position if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial position if no parameters are passed.
      if (typeof x === 'number') {
        self._pos = [x, y, z];
      } else {
        return self._pos;
      }
    }

    // Change the spatial position of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._pos = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || sound._panner.pan) {
              setupPanner(sound, 'spatial');
            }

            if (typeof sound._panner.positionX !== 'undefined') {
              sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
              sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
              sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
            } else {
              sound._panner.setPosition(x, y, z);
            }
          }

          self._emit('pos', sound._id);
        } else {
          return sound._pos;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
   * space. Depending on how direction the sound is, based on the `cone` attributes,
   * a sound pointing away from the listener can be quiet or silent.
   * @param  {Number} x  The x-orientation of the source.
   * @param  {Number} y  The y-orientation of the source.
   * @param  {Number} z  The z-orientation of the source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
   */
  Howl.prototype.orientation = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'orientation',
        action: function() {
          self.orientation(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._orientation[1] : y;
    z = (typeof z !== 'number') ? self._orientation[2] : z;

    // Setup the group's spatial orientation if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial orientation if no parameters are passed.
      if (typeof x === 'number') {
        self._orientation = [x, y, z];
      } else {
        return self._orientation;
      }
    }

    // Change the spatial orientation of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._orientation = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner) {
              // Make sure we have a position to setup the node with.
              if (!sound._pos) {
                sound._pos = self._pos || [0, 0, -0.5];
              }

              setupPanner(sound, 'spatial');
            }

            if (typeof sound._panner.orientationX !== 'undefined') {
              sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
              sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
              sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
            } else {
              sound._panner.setOrientation(x, y, z);
            }
          }

          self._emit('orientation', sound._id);
        } else {
          return sound._orientation;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the panner node's attributes for a sound or group of sounds.
   * This method can optionall take 0, 1 or 2 arguments.
   *   pannerAttr() -> Returns the group's values.
   *   pannerAttr(id) -> Returns the sound id's values.
   *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
   *   pannerAttr(o, id) -> Set's the values of passed sound id.
   *
   *   Attributes:
   *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      inside of which there will be no volume reduction.
   *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
   *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
   *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
   *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
   *                     listener. Can be `linear`, `inverse` or `exponential.
   *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
   *                   will not be reduced any further.
   *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
   *                   This is simply a variable of the distance model and has a different effect depending on which model
   *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
   *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
   *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
   *                     with `inverse` and `exponential`.
   *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
   *                     Can be `HRTF` or `equalpower`.
   *
   * @return {Howl/Object} Returns self or current panner attributes.
   */
  Howl.prototype.pannerAttr = function() {
    var self = this;
    var args = arguments;
    var o, id, sound;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // Determine the values based on arguments.
    if (args.length === 0) {
      // Return the group's panner attribute values.
      return self._pannerAttr;
    } else if (args.length === 1) {
      if (typeof args[0] === 'object') {
        o = args[0];

        // Set the grou's panner attribute values.
        if (typeof id === 'undefined') {
          if (!o.pannerAttr) {
            o.pannerAttr = {
              coneInnerAngle: o.coneInnerAngle,
              coneOuterAngle: o.coneOuterAngle,
              coneOuterGain: o.coneOuterGain,
              distanceModel: o.distanceModel,
              maxDistance: o.maxDistance,
              refDistance: o.refDistance,
              rolloffFactor: o.rolloffFactor,
              panningModel: o.panningModel
            };
          }

          self._pannerAttr = {
            coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
            coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
            coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
            distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
            maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
            refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
            rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
            panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
          };
        }
      } else {
        // Return this sound's panner attribute values.
        sound = self._soundById(parseInt(args[0], 10));
        return sound ? sound._pannerAttr : self._pannerAttr;
      }
    } else if (args.length === 2) {
      o = args[0];
      id = parseInt(args[1], 10);
    }

    // Update the values of the specified sounds.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      sound = self._soundById(ids[i]);

      if (sound) {
        // Merge the new values into the sound.
        var pa = sound._pannerAttr;
        pa = {
          coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
          coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
          coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
          distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
          maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
          refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
          rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
          panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
        };

        // Update the panner values or create a new panner if none exists.
        var panner = sound._panner;
        if (panner) {
          panner.coneInnerAngle = pa.coneInnerAngle;
          panner.coneOuterAngle = pa.coneOuterAngle;
          panner.coneOuterGain = pa.coneOuterGain;
          panner.distanceModel = pa.distanceModel;
          panner.maxDistance = pa.maxDistance;
          panner.refDistance = pa.refDistance;
          panner.rolloffFactor = pa.rolloffFactor;
          panner.panningModel = pa.panningModel;
        } else {
          // Make sure we have a position to setup the node with.
          if (!sound._pos) {
            sound._pos = self._pos || [0, 0, -0.5];
          }

          // Create a new panner node.
          setupPanner(sound, 'spatial');
        }
      }
    }

    return self;
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core Sound init.
   * @param  {Function} _super Core Sound init method.
   * @return {Sound}
   */
  Sound.prototype.init = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Setup user-defined default properties.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // Complete initilization with howler.js core Sound's init function.
      _super.call(this);

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      }
    };
  })(Sound.prototype.init);

  /**
   * Override the Sound.reset method to clean up properties from the spatial plugin.
   * @param  {Function} _super Sound reset method.
   * @return {Sound}
   */
  Sound.prototype.reset = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Reset all spatial plugin properties on this sound.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      } else if (self._panner) {
        // Disconnect the panner.
        self._panner.disconnect(0);
        self._panner = undefined;
        parent._refreshBuffer(self);
      }

      // Complete resetting of the sound.
      return _super.call(this);
    };
  })(Sound.prototype.reset);

  /** Helper Methods **/
  /***************************************************************************/

  /**
   * Create a new panner node and save it on the sound.
   * @param  {Sound} sound Specific sound to setup panning on.
   * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
   */
  var setupPanner = function(sound, type) {
    type = type || 'spatial';

    // Create the new panner node.
    if (type === 'spatial') {
      sound._panner = Howler.ctx.createPanner();
      sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
      sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
      sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
      sound._panner.distanceModel = sound._pannerAttr.distanceModel;
      sound._panner.maxDistance = sound._pannerAttr.maxDistance;
      sound._panner.refDistance = sound._pannerAttr.refDistance;
      sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
      sound._panner.panningModel = sound._pannerAttr.panningModel;

      if (typeof sound._panner.positionX !== 'undefined') {
        sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
        sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
        sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
      }

      if (typeof sound._panner.orientationX !== 'undefined') {
        sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
        sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
        sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
      }
    } else {
      sound._panner = Howler.ctx.createStereoPanner();
      sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
    }

    sound._panner.connect(sound._node);

    // Update the connections.
    if (!sound._paused) {
      sound._parent.pause(sound._id, true).play(sound._id, true);
    }
  };
})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ }),
/* 25 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _misc = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ref = [false],
    animationEnded = _ref[0],
    ns = _ref[1];
/*
		RAF.launch((pt) => {})
		RAF.endLaunched()
*/

var RAF = function () {
	function RAF() {
		_classCallCheck(this, RAF);
	}

	_createClass(RAF, null, [{
		key: '_performanceNow',
		value: function _performanceNow() {
			if (performance && (performance.now || performance.webkitNow)) {
				if ((0, _misc.isfunc)(performance.now)) return performance.now();else if ((0, _misc.isfunc)(performance.webkitNow)) return performance.webkitNow();
			} else {
				if (performance && performance.timing && performance.timing.navigationStart) ns = performance.timing.navigationStart;else ns = (0, _misc.datenow)();
				return (0, _misc.datenow)() - ns;
			}
		}
	}, {
		key: '_requestAnimationFrame',
		value: function _requestAnimationFrame() {
			return requestAnimationFrame || webkitRequestAnimationFrame || mozRequestAnimationFrame || msRequestAnimationFrame || oRequestAnimationFrame || function () {
				return function (FRAME) {
					return setTimeout(FRAME, 1000 / 60);
				};
			};
		}
	}, {
		key: 'launch',
		value: function launch(frame) {

			animationEnded = false;

			var INITTIME = RAF._performanceNow();
			var requestAnimationFrame = RAF._requestAnimationFrame();

			var FRAME = function FRAME(frameTime) {
				frame(frameTime - INITTIME);
				if (animationEnded == false) requestAnimationFrame(FRAME);
			};
			requestAnimationFrame(FRAME);
		}
	}, {
		key: 'endLaunched',
		value: function endLaunched() {
			animationEnded = true;
		}
	}]);

	return RAF;
}();

exports.default = RAF;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvasComponent = __webpack_require__(0);

var _canvasComponent2 = _interopRequireDefault(_canvasComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoinstatBoxComponent = function (_CanvasComponent) {
	_inherits(CoinstatBoxComponent, _CanvasComponent);

	function CoinstatBoxComponent(posx, posy, unmovable, collidable) {
		_classCallCheck(this, CoinstatBoxComponent);

		var _ref = [5 * 2, 8 * 2, _canvasComponent2.default.SPRITES.C],
		    W = _ref[0],
		    H = _ref[1],
		    SPRITE = _ref[2];
		var MAXFRAMEINDEX = 8,
		    DELAY = 350;


		var sprites = [[1, 160, 5, 8], [9, 160, 5, 8], [17, 160, 5, 8]];

		var _this = _possibleConstructorReturn(this, (CoinstatBoxComponent.__proto__ || Object.getPrototypeOf(CoinstatBoxComponent)).call(this, W, H, SPRITE, posx, posy, 'sprite', sprites[0][0], sprites[0][1], sprites[0][2], sprites[0][3]));

		_this.animationParameters = { MAXFRAMEINDEX: MAXFRAMEINDEX, DELAY: DELAY };
		_this.sprites = sprites;
		_this.sxsyswshIndex = _this.animateIndex = _this.frameIndex = 0;
		var _ref2 = [unmovable, collidable];
		_this.unmovable = _ref2[0];
		_this.collidable = _ref2[1];
		return _this;
	}

	_createClass(CoinstatBoxComponent, [{
		key: 'specifySXSYSWSH',
		value: function specifySXSYSWSH() {
			var SX = 0,
			    SY = 1,
			    SW = 2,
			    SH = 3;

			this.sx = this.sprites[this.sxsyswshIndex][SX];
			this.sy = this.sprites[this.sxsyswshIndex][SY];
			this.sw = this.sprites[this.sxsyswshIndex][SW];
			this.sh = this.sprites[this.sxsyswshIndex][SH];
		}
	}, {
		key: 'animate',
		value: function animate(time, scene) {
			var NFRAMESPASSED = this.NFRAMESPASSED || ++this.frameIndex % this.animationParameters.MAXFRAMEINDEX == 0;
			if (NFRAMESPASSED) {

				this.specifySXSYSWSH();

				if (this.sxsyswshIndex == 0) {
					if (!this.NFRAMESPASSED) this.NFRAMESPASSED = true;
					if (!this.inittime) this.inittime = time;
					if (time - this.inittime <= this.animationParameters.DELAY) return false;else this.NFRAMESPASSED = this.inittime = undefined;
				}

				this.frameIndex = 0;
				this.sxsyswshIndex = [1, 2, 1, 0][this.animateIndex];

				if (this.animateIndex == 3) this.animateIndex = 0;else this.animateIndex++;
			}
		}
	}]);

	return CoinstatBoxComponent;
}(_canvasComponent2.default);

exports.default = CoinstatBoxComponent;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _misc = __webpack_require__(1);

var _canvasComponent = __webpack_require__(0);

var _canvasComponent2 = _interopRequireDefault(_canvasComponent);

var _TriangleBoxComponent = __webpack_require__(9);

var _TriangleBoxComponent2 = _interopRequireDefault(_TriangleBoxComponent);

var _QuestionBoxComponent = __webpack_require__(17);

var _QuestionBoxComponent2 = _interopRequireDefault(_QuestionBoxComponent);

var _BrickBoxComponent = __webpack_require__(18);

var _BrickBoxComponent2 = _interopRequireDefault(_BrickBoxComponent);

var _PipeBoxComponent = __webpack_require__(8);

var _PipeBoxComponent2 = _interopRequireDefault(_PipeBoxComponent);

var _TransparentBoxComponent = __webpack_require__(4);

var _TransparentBoxComponent2 = _interopRequireDefault(_TransparentBoxComponent);

var _CoinBoxComponent = __webpack_require__(19);

var _CoinBoxComponent2 = _interopRequireDefault(_CoinBoxComponent);

var _InvisibleBoxComponent = __webpack_require__(29);

var _InvisibleBoxComponent2 = _interopRequireDefault(_InvisibleBoxComponent);

var _FlagpoleBoxComponent = __webpack_require__(20);

var _FlagpoleBoxComponent2 = _interopRequireDefault(_FlagpoleBoxComponent);

var _CoinBonusComponent = __webpack_require__(16);

var _CoinBonusComponent2 = _interopRequireDefault(_CoinBonusComponent);

var _ControlPointComponent = __webpack_require__(7);

var _ControlPointComponent2 = _interopRequireDefault(_ControlPointComponent);

var _CastleBoxComponent = __webpack_require__(21);

var _CastleBoxComponent2 = _interopRequireDefault(_CastleBoxComponent);

var _MushroomBonusComponent = __webpack_require__(30);

var _MushroomBonusComponent2 = _interopRequireDefault(_MushroomBonusComponent);

var _NPCGoomba = __webpack_require__(31);

var _NPCGoomba2 = _interopRequireDefault(_NPCGoomba);

var _NPCKoopaTroopa = __webpack_require__(32);

var _NPCKoopaTroopa2 = _interopRequireDefault(_NPCKoopaTroopa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var L11Container = function L11Container() {
		_classCallCheck(this, L11Container);

		var FEx = 512,
		    FEy = 288,
		    FLOORH = 64,
		    delta = 32;


		this.NPCComponents = {
				'npc-goomba1': new _NPCGoomba2.default(delta * 22, _misc.CANVASSCENEH - FLOORH - delta, 2),
				'npc-goomba2': new _NPCGoomba2.default(delta * 40, _misc.CANVASSCENEH - FLOORH - delta, 2),
				'npc-goomba3': new _NPCGoomba2.default(delta * 51, _misc.CANVASSCENEH - FLOORH - delta, 2),
				'npc-goomba4': new _NPCGoomba2.default(delta * 52 + delta / 2, _misc.CANVASSCENEH - FLOORH - delta, 2),
				'npc-goomba5': new _NPCGoomba2.default(delta * 97, _misc.CANVASSCENEH - FLOORH - delta, 2),
				'npc-goomba6': new _NPCGoomba2.default(delta * 98 + delta / 2, _misc.CANVASSCENEH - FLOORH - delta, 2),
				'npc-goomba7': new _NPCGoomba2.default(delta * 80, delta * 4, 2),
				'npc-goomba8': new _NPCGoomba2.default(delta * 82, delta * 4, 2),
				'npc-koopatroopa1': new _NPCKoopaTroopa2.default(delta * 107, _misc.CANVASSCENEH - FLOORH - 48, 1, 0),
				'npc-goomba9': new _NPCGoomba2.default(delta * 114, _misc.CANVASSCENEH - FLOORH - delta, 2),
				'npc-goomba10': new _NPCGoomba2.default(delta * 115 + delta / 2, _misc.CANVASSCENEH - FLOORH - delta, 2),
				'npc-goomba11': new _NPCGoomba2.default(delta * 124, _misc.CANVASSCENEH - FLOORH - delta, 2),
				'npc-goomba12': new _NPCGoomba2.default(delta * 125 + delta / 2, _misc.CANVASSCENEH - FLOORH - delta, 2),
				'npc-goomba13': new _NPCGoomba2.default(delta * 128, _misc.CANVASSCENEH - FLOORH - delta, 2),
				'npc-goomba14': new _NPCGoomba2.default(delta * 129 + delta / 2, _misc.CANVASSCENEH - FLOORH - delta, 2),
				'npc-goomba15': new _NPCGoomba2.default(delta * 174, _misc.CANVASSCENEH - FLOORH - delta, 2),
				'npc-goomba16': new _NPCGoomba2.default(delta * 175 + delta / 2, _misc.CANVASSCENEH - FLOORH - delta, 2)

				// 21 - mushroom in box
				// 64 - mushroom in invisible box
				// 78 - mushroom in box
				// 100 - star in box
				// 109 - mushroom in box 
		};

		this.B1Components = {
				'bg': new _canvasComponent2.default(720, _misc.CANVASSCENEH, _canvasComponent2.default.SPRITES.L11B1, 0, 0, 'image'),
				'fbc1': new _TransparentBoxComponent2.default(0, delta * 13, 720, 64),
				'cbc1': new _CoinBoxComponent2.default(delta * 8 + 22, delta * 5 + 4, 'UG'),
				'cbc2': new _CoinBoxComponent2.default(delta * 9 + 22, delta * 5 + 4, 'UG'),
				'cbc3': new _CoinBoxComponent2.default(delta * 10 + 22, delta * 5 + 4, 'UG'),
				'cbc4': new _CoinBoxComponent2.default(delta * 11 + 22, delta * 5 + 4, 'UG'),
				'cbc5': new _CoinBoxComponent2.default(delta * 12 + 22, delta * 5 + 4, 'UG'),
				'cbc6': new _CoinBoxComponent2.default(delta * 12 + 22, delta * 7 + 4, 'UG'),
				'cbc7': new _CoinBoxComponent2.default(delta * 13 + 22, delta * 7 + 4, 'UG'),
				'cbc8': new _CoinBoxComponent2.default(delta * 11 + 22, delta * 7 + 4, 'UG'),
				'cbc9': new _CoinBoxComponent2.default(delta * 10 + 22, delta * 7 + 4, 'UG'),
				'cbc10': new _CoinBoxComponent2.default(delta * 9 + 22, delta * 7 + 4, 'UG'),
				'cbc11': new _CoinBoxComponent2.default(delta * 8 + 22, delta * 7 + 4, 'UG'),
				'cbc12': new _CoinBoxComponent2.default(delta * 7 + 22, delta * 7 + 4, 'UG'),
				'cbc13': new _CoinBoxComponent2.default(delta * 12 + 22, delta * 9 + 4, 'UG'),
				'cbc14': new _CoinBoxComponent2.default(delta * 13 + 22, delta * 9 + 4, 'UG'),
				'cbc15': new _CoinBoxComponent2.default(delta * 11 + 22, delta * 9 + 4, 'UG'),
				'cbc16': new _CoinBoxComponent2.default(delta * 10 + 22, delta * 9 + 4, 'UG'),
				'cbc17': new _CoinBoxComponent2.default(delta * 9 + 22, delta * 9 + 4, 'UG'),
				'cbc18': new _CoinBoxComponent2.default(delta * 8 + 22, delta * 9 + 4, 'UG'),
				'cbc19': new _CoinBoxComponent2.default(delta * 7 + 22, delta * 9 + 4, 'UG'),
				'bbc33': new _BrickBoxComponent2.default(delta * 7 + 16, delta * 2, 'UG'),
				'bbc34': new _BrickBoxComponent2.default(delta * 8 + 16, delta * 2, 'UG'),
				'bbc35': new _BrickBoxComponent2.default(delta * 9 + 16, delta * 2, 'UG'),
				'bbc36': new _BrickBoxComponent2.default(delta * 10 + 16, delta * 2, 'UG'),
				'bbc37': new _BrickBoxComponent2.default(delta * 11 + 16, delta * 2, 'UG'),
				'bbc38': new _BrickBoxComponent2.default(delta * 12 + 16, delta * 2, 'UG'),
				'bbc39': new _BrickBoxComponent2.default(delta * 13 + 16, delta * 2, 'UG'),
				'bbc1': new _BrickBoxComponent2.default(0, delta * 2, 'UG'),
				'bbc2': new _BrickBoxComponent2.default(0, delta * 3, 'UG'),
				'bbc3': new _BrickBoxComponent2.default(0, delta * 4, 'UG'),
				'bbc4': new _BrickBoxComponent2.default(0, delta * 5, 'UG'),
				'bbc5': new _BrickBoxComponent2.default(0, delta * 6, 'UG'),
				'bbc6': new _BrickBoxComponent2.default(0, delta * 7, 'UG'),
				'bbc7': new _BrickBoxComponent2.default(0, delta * 8, 'UG'),
				'bbc8': new _BrickBoxComponent2.default(0, delta * 9, 'UG'),
				'bbc9': new _BrickBoxComponent2.default(0, delta * 10, 'UG'),
				'bbc10': new _BrickBoxComponent2.default(0, delta * 11, 'UG'),
				'bbc11': new _BrickBoxComponent2.default(0, delta * 12, 'UG'),
				'bbc12': new _BrickBoxComponent2.default(delta * 7 + 16, delta * 12, 'UG'),
				'bbc13': new _BrickBoxComponent2.default(delta * 8 + 16, delta * 12, 'UG'),
				'bbc14': new _BrickBoxComponent2.default(delta * 9 + 16, delta * 12, 'UG'),
				'bbc15': new _BrickBoxComponent2.default(delta * 10 + 16, delta * 12, 'UG'),
				'bbc16': new _BrickBoxComponent2.default(delta * 11 + 16, delta * 12, 'UG'),
				'bbc17': new _BrickBoxComponent2.default(delta * 12 + 16, delta * 12, 'UG'),
				'bbc18': new _BrickBoxComponent2.default(delta * 13 + 16, delta * 12, 'UG'),
				'bbc19': new _BrickBoxComponent2.default(delta * 7 + 16, delta * 11, 'UG'),
				'bbc20': new _BrickBoxComponent2.default(delta * 8 + 16, delta * 11, 'UG'),
				'bbc21': new _BrickBoxComponent2.default(delta * 9 + 16, delta * 11, 'UG'),
				'bbc22': new _BrickBoxComponent2.default(delta * 10 + 16, delta * 11, 'UG'),
				'bbc23': new _BrickBoxComponent2.default(delta * 11 + 16, delta * 11, 'UG'),
				'bbc24': new _BrickBoxComponent2.default(delta * 12 + 16, delta * 11, 'UG'),
				'bbc25': new _BrickBoxComponent2.default(delta * 13 + 16, delta * 11, 'UG'),
				'bbc26': new _BrickBoxComponent2.default(delta * 7 + 16, delta * 10, 'UG'),
				'bbc27': new _BrickBoxComponent2.default(delta * 8 + 16, delta * 10, 'UG'),
				'bbc28': new _BrickBoxComponent2.default(delta * 9 + 16, delta * 10, 'UG'),
				'bbc29': new _BrickBoxComponent2.default(delta * 10 + 16, delta * 10, 'UG'),
				'bbc30': new _BrickBoxComponent2.default(delta * 11 + 16, delta * 10, 'UG'),
				'bbc31': new _BrickBoxComponent2.default(delta * 12 + 16, delta * 10, 'UG'),
				'bbc32': new _BrickBoxComponent2.default(delta * 13 + 16, delta * 10, 'UG'),
				'pbc1p1': new _PipeBoxComponent2.default(delta * 20 - 16, _misc.CANVASSCENEH - FLOORH * 2, [5, 1], true, ['L11', 'pbc5']),
				'pbc1p2': new _canvasComponent2.default(28 * 2, 480 - 64 * 3, _canvasComponent2.default.SPRITES.PSTF, delta * 22 - 12, _misc.CANVASSCENEH - delta * 13, 'sprite', 118, 414, 28, 2)
		};

		this.NCCComponents = {
				'bg': new _canvasComponent2.default(6656, _misc.CANVASSCENEH, _canvasComponent2.default.SPRITES.L11, 0, 0, 'image'),
				'fbc1': new _TransparentBoxComponent2.default(0, _misc.CANVASSCENEH - FLOORH, delta * 69, FLOORH),
				'fbc2': new _TransparentBoxComponent2.default(delta * 71, _misc.CANVASSCENEH - FLOORH, delta * 15, FLOORH),
				'fbc3': new _TransparentBoxComponent2.default(delta * (71 + 15 + 3), _misc.CANVASSCENEH - FLOORH, delta * 64, FLOORH),
				'fbc4': new _TransparentBoxComponent2.default(delta * (71 + 15 + 3 + 64 + 2), _misc.CANVASSCENEH - FLOORH, delta * 53, FLOORH),
				'qbc1': new _QuestionBoxComponent2.default(FEx, FEy).bindBonus(new _CoinBonusComponent2.default(), 1),
				'qbc2': new _QuestionBoxComponent2.default(FEx + delta * 5, FEy).bindBonus(new _MushroomBonusComponent2.default('OW', false, 1), 1, true, true),
				'qbc3': new _QuestionBoxComponent2.default(FEx + delta * 6, FEy - delta * 4).bindBonus(new _CoinBonusComponent2.default(), 1),
				'qbc4': new _QuestionBoxComponent2.default(FEx + delta * 7, FEy).bindBonus(new _CoinBonusComponent2.default(), 1),
				'bbc1': new _BrickBoxComponent2.default(FEx + delta * 4, FEy),
				'bbc2': new _BrickBoxComponent2.default(FEx + delta * 6, FEy),
				'bbc3': new _BrickBoxComponent2.default(FEx + delta * 8, FEy),
				'pbc1': new _PipeBoxComponent2.default(FEx + delta * 12, FEy + delta * 2, [1, 1]),
				'pbc2': new _PipeBoxComponent2.default(FEx + delta * 22, FEy + delta, [2, 1]),
				'pbc3': new _PipeBoxComponent2.default(FEx + delta * 30, FEy, [3, 1]),
				'pbc4': new _PipeBoxComponent2.default(FEx + delta * 41, FEy, [3, 1], true, ['L11', 'B1']),
				'ibc1': new _InvisibleBoxComponent2.default(FEx + delta * 48, FEy - delta).bindBonus(new _MushroomBonusComponent2.default('OW', false, 0), 1, true, true),
				'bbc4': new _BrickBoxComponent2.default(FEx + delta * 61, FEy),
				'bbc5': new _BrickBoxComponent2.default(FEx + delta * 63, FEy),
				'qbc5': new _QuestionBoxComponent2.default(FEx + delta * 62, FEy),
				'bbc6': new _BrickBoxComponent2.default(FEx + delta * 64, FEy - delta * 4),
				'bbc7': new _BrickBoxComponent2.default(FEx + delta * 65, FEy - delta * 4),
				'bbc8': new _BrickBoxComponent2.default(FEx + delta * 66, FEy - delta * 4),
				'bbc9': new _BrickBoxComponent2.default(FEx + delta * 67, FEy - delta * 4),
				'bbc10': new _BrickBoxComponent2.default(FEx + delta * 68, FEy - delta * 4),
				'bbc11': new _BrickBoxComponent2.default(FEx + delta * 69, FEy - delta * 4),
				'bbc12': new _BrickBoxComponent2.default(FEx + delta * 70, FEy - delta * 4),
				'bbc13': new _BrickBoxComponent2.default(FEx + delta * 71, FEy - delta * 4),
				'bbc14': new _BrickBoxComponent2.default(FEx + delta * 75, FEy - delta * 4),
				'bbc15': new _BrickBoxComponent2.default(FEx + delta * 76, FEy - delta * 4),
				'bbc16': new _BrickBoxComponent2.default(FEx + delta * 77, FEy - delta * 4),
				'qbc6': new _QuestionBoxComponent2.default(FEx + delta * 78, FEy - delta * 4).bindBonus(new _CoinBonusComponent2.default(), 1),
				'bbc17': new _BrickBoxComponent2.default(FEx + delta * 78, FEy).bindBonus(new _CoinBonusComponent2.default(), 6),
				'bbc18': new _BrickBoxComponent2.default(FEx + delta * 84, FEy),
				'bbc19': new _BrickBoxComponent2.default(FEx + delta * 85, FEy),
				'qbc7': new _QuestionBoxComponent2.default(FEx + delta * 93, FEy - delta * 4),
				'qbc8': new _QuestionBoxComponent2.default(FEx + delta * 93, FEy).bindBonus(new _CoinBonusComponent2.default(), 1),
				'qbc9': new _QuestionBoxComponent2.default(FEx + delta * 90, FEy).bindBonus(new _CoinBonusComponent2.default(), 1),
				'qbc10': new _QuestionBoxComponent2.default(FEx + delta * 96, FEy).bindBonus(new _CoinBonusComponent2.default(), 1),
				'bbc20': new _BrickBoxComponent2.default(FEx + delta * 102, FEy),
				'bbc21': new _BrickBoxComponent2.default(FEx + delta * 105, FEy - delta * 4),
				'bbc22': new _BrickBoxComponent2.default(FEx + delta * 106, FEy - delta * 4),
				'bbc23': new _BrickBoxComponent2.default(FEx + delta * 107, FEy - delta * 4),
				'bbc24': new _BrickBoxComponent2.default(FEx + delta * 112, FEy - delta * 4),
				'bbc25': new _BrickBoxComponent2.default(FEx + delta * 115, FEy - delta * 4),
				'bbc26': new _BrickBoxComponent2.default(FEx + delta * 114, FEy),
				'bbc27': new _BrickBoxComponent2.default(FEx + delta * 113, FEy),
				'qbc11': new _QuestionBoxComponent2.default(FEx + delta * 113, FEy - delta * 4).bindBonus(new _CoinBonusComponent2.default(), 1),
				'qbc12': new _QuestionBoxComponent2.default(FEx + delta * 114, FEy - delta * 4).bindBonus(new _CoinBonusComponent2.default(), 1),
				'ttc1': new _TriangleBoxComponent2.default(FEx + delta * 121, FEy),
				'ttc2': new _TriangleBoxComponent2.default(FEx + delta * 121, FEy + delta * 1),
				'ttc3': new _TriangleBoxComponent2.default(FEx + delta * 121, FEy + delta * 2),
				'ttc4': new _TriangleBoxComponent2.default(FEx + delta * 121, FEy + delta * 3),
				'ttc5': new _TriangleBoxComponent2.default(FEx + delta * 120, FEy + delta * 1),
				'ttc6': new _TriangleBoxComponent2.default(FEx + delta * 119, FEy + delta * 2),
				'ttc7': new _TriangleBoxComponent2.default(FEx + delta * 118, FEy + delta * 3),
				'ttc8': new _TriangleBoxComponent2.default(FEx + delta * 119, FEy + delta * 3),
				'ttc9': new _TriangleBoxComponent2.default(FEx + delta * 120, FEy + delta * 3),
				'ttc10': new _TriangleBoxComponent2.default(FEx + delta * 120, FEy + delta * 2),
				'ttc11': new _TriangleBoxComponent2.default(FEx + delta * 124, FEy),
				'ttc12': new _TriangleBoxComponent2.default(FEx + delta * 124, FEy + delta * 1),
				'ttc13': new _TriangleBoxComponent2.default(FEx + delta * 124, FEy + delta * 2),
				'ttc14': new _TriangleBoxComponent2.default(FEx + delta * 124, FEy + delta * 3),
				'ttc15': new _TriangleBoxComponent2.default(FEx + delta * 125, FEy + delta * 1),
				'ttc16': new _TriangleBoxComponent2.default(FEx + delta * 125, FEy + delta * 2),
				'ttc17': new _TriangleBoxComponent2.default(FEx + delta * 125, FEy + delta * 3),
				'ttc18': new _TriangleBoxComponent2.default(FEx + delta * 126, FEy + delta * 3),
				'ttc19': new _TriangleBoxComponent2.default(FEx + delta * 126, FEy + delta * 2),
				'ttc20': new _TriangleBoxComponent2.default(FEx + delta * 127, FEy + delta * 3),
				'ttc21': new _TriangleBoxComponent2.default(FEx + delta * 139, FEy),
				'ttc22': new _TriangleBoxComponent2.default(FEx + delta * 139, FEy + delta * 1),
				'ttc23': new _TriangleBoxComponent2.default(FEx + delta * 139, FEy + delta * 2),
				'ttc24': new _TriangleBoxComponent2.default(FEx + delta * 139, FEy + delta * 3),
				'ttc25': new _TriangleBoxComponent2.default(FEx + delta * 140, FEy + delta * 1),
				'ttc26': new _TriangleBoxComponent2.default(FEx + delta * 140, FEy + delta * 2),
				'ttc27': new _TriangleBoxComponent2.default(FEx + delta * 140, FEy + delta * 3),
				'ttc28': new _TriangleBoxComponent2.default(FEx + delta * 141, FEy + delta * 3),
				'ttc29': new _TriangleBoxComponent2.default(FEx + delta * 141, FEy + delta * 2),
				'ttc30': new _TriangleBoxComponent2.default(FEx + delta * 142, FEy + delta * 3),
				'ttc31': new _TriangleBoxComponent2.default(FEx + delta * 135, FEy),
				'ttc32': new _TriangleBoxComponent2.default(FEx + delta * 135, FEy + delta * 1),
				'ttc33': new _TriangleBoxComponent2.default(FEx + delta * 135, FEy + delta * 2),
				'ttc34': new _TriangleBoxComponent2.default(FEx + delta * 135, FEy + delta * 3),
				'ttc35': new _TriangleBoxComponent2.default(FEx + delta * 134, FEy + delta * 1),
				'ttc36': new _TriangleBoxComponent2.default(FEx + delta * 133, FEy + delta * 2),
				'ttc37': new _TriangleBoxComponent2.default(FEx + delta * 132, FEy + delta * 3),
				'ttc38': new _TriangleBoxComponent2.default(FEx + delta * 133, FEy + delta * 3),
				'ttc39': new _TriangleBoxComponent2.default(FEx + delta * 134, FEy + delta * 3),
				'ttc40': new _TriangleBoxComponent2.default(FEx + delta * 134, FEy + delta * 2),
				'ttc41': new _TriangleBoxComponent2.default(FEx + delta * 136, FEy),
				'ttc42': new _TriangleBoxComponent2.default(FEx + delta * 136, FEy + delta * 1),
				'ttc43': new _TriangleBoxComponent2.default(FEx + delta * 136, FEy + delta * 2),
				'ttc44': new _TriangleBoxComponent2.default(FEx + delta * 136, FEy + delta * 3),
				'pbc5': new _PipeBoxComponent2.default(FEx + delta * 147, FEy + delta * 2, [1, 1]),
				'pbc6': new _PipeBoxComponent2.default(FEx + delta * 163, FEy + delta * 2, [1, 1]),
				'bbc28': new _BrickBoxComponent2.default(FEx + delta * 155, FEy),
				'bbc29': new _BrickBoxComponent2.default(FEx + delta * 153, FEy),
				'bbc30': new _BrickBoxComponent2.default(FEx + delta * 152, FEy),
				'qbc13': new _QuestionBoxComponent2.default(FEx + delta * 154, FEy).bindBonus(new _CoinBonusComponent2.default(), 1),
				'ttc45': new _TriangleBoxComponent2.default(FEx + delta * 165, FEy + delta * 3),
				'ttc46': new _TriangleBoxComponent2.default(FEx + delta * 166, FEy + delta * 3),
				'ttc47': new _TriangleBoxComponent2.default(FEx + delta * 167, FEy + delta * 3),
				'ttc48': new _TriangleBoxComponent2.default(FEx + delta * 168, FEy + delta * 3),
				'ttc49': new _TriangleBoxComponent2.default(FEx + delta * 169, FEy + delta * 3),
				'ttc50': new _TriangleBoxComponent2.default(FEx + delta * 170, FEy + delta * 3),
				'ttc51': new _TriangleBoxComponent2.default(FEx + delta * 171, FEy + delta * 3),
				'ttc52': new _TriangleBoxComponent2.default(FEx + delta * 172, FEy + delta * 3),
				'ttc53': new _TriangleBoxComponent2.default(FEx + delta * 173, FEy + delta * 3),
				'ttc54': new _TriangleBoxComponent2.default(FEx + delta * 166, FEy + delta * 2),
				'ttc55': new _TriangleBoxComponent2.default(FEx + delta * 167, FEy + delta * 2),
				'ttc56': new _TriangleBoxComponent2.default(FEx + delta * 168, FEy + delta * 2),
				'ttc57': new _TriangleBoxComponent2.default(FEx + delta * 169, FEy + delta * 2),
				'ttc58': new _TriangleBoxComponent2.default(FEx + delta * 170, FEy + delta * 2),
				'ttc59': new _TriangleBoxComponent2.default(FEx + delta * 171, FEy + delta * 2),
				'ttc60': new _TriangleBoxComponent2.default(FEx + delta * 172, FEy + delta * 2),
				'ttc61': new _TriangleBoxComponent2.default(FEx + delta * 173, FEy + delta * 2),
				'ttc62': new _TriangleBoxComponent2.default(FEx + delta * 167, FEy + delta),
				'ttc63': new _TriangleBoxComponent2.default(FEx + delta * 168, FEy + delta),
				'ttc64': new _TriangleBoxComponent2.default(FEx + delta * 169, FEy + delta),
				'ttc65': new _TriangleBoxComponent2.default(FEx + delta * 170, FEy + delta),
				'ttc66': new _TriangleBoxComponent2.default(FEx + delta * 171, FEy + delta),
				'ttc67': new _TriangleBoxComponent2.default(FEx + delta * 172, FEy + delta),
				'ttc68': new _TriangleBoxComponent2.default(FEx + delta * 173, FEy + delta),
				'ttc69': new _TriangleBoxComponent2.default(FEx + delta * 168, FEy),
				'ttc70': new _TriangleBoxComponent2.default(FEx + delta * 169, FEy),
				'ttc71': new _TriangleBoxComponent2.default(FEx + delta * 170, FEy),
				'ttc72': new _TriangleBoxComponent2.default(FEx + delta * 171, FEy),
				'ttc73': new _TriangleBoxComponent2.default(FEx + delta * 172, FEy),
				'ttc74': new _TriangleBoxComponent2.default(FEx + delta * 173, FEy),
				'ttc75': new _TriangleBoxComponent2.default(FEx + delta * 169, FEy - delta * 1),
				'ttc76': new _TriangleBoxComponent2.default(FEx + delta * 170, FEy - delta * 1),
				'ttc77': new _TriangleBoxComponent2.default(FEx + delta * 171, FEy - delta * 1),
				'ttc78': new _TriangleBoxComponent2.default(FEx + delta * 172, FEy - delta * 1),
				'ttc79': new _TriangleBoxComponent2.default(FEx + delta * 173, FEy - delta * 1),
				'ttc80': new _TriangleBoxComponent2.default(FEx + delta * 170, FEy - delta * 2),
				'ttc81': new _TriangleBoxComponent2.default(FEx + delta * 171, FEy - delta * 2),
				'ttc82': new _TriangleBoxComponent2.default(FEx + delta * 172, FEy - delta * 2),
				'ttc83': new _TriangleBoxComponent2.default(FEx + delta * 173, FEy - delta * 2),
				'ttc84': new _TriangleBoxComponent2.default(FEx + delta * 171, FEy - delta * 3),
				'ttc85': new _TriangleBoxComponent2.default(FEx + delta * 172, FEy - delta * 3),
				'ttc86': new _TriangleBoxComponent2.default(FEx + delta * 173, FEy - delta * 3),
				'ttc87': new _TriangleBoxComponent2.default(FEx + delta * 172, FEy - delta * 4),
				'ttc88': new _TriangleBoxComponent2.default(FEx + delta * 173, FEy - delta * 4),
				'container-flagpole': new _FlagpoleBoxComponent2.default(FEx + delta * 181, _misc.CANVASSCENEH - FLOORH - delta),
				'container-castle': new _CastleBoxComponent2.default(FEx + delta * 186, _misc.CANVASSCENEH - FLOORH - delta * 5, 0),
				'controlpoint': new _ControlPointComponent2.default(FEx + delta * 189, _misc.CANVASSCENEH - FLOORH - delta, 1, delta, _ControlPointComponent2.default.TYPES.CASTLEENTRY)
		};
};

exports.default = L11Container;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvasComponent = __webpack_require__(0);

var _canvasComponent2 = _interopRequireDefault(_canvasComponent);

var _NPCContainer = __webpack_require__(10);

var _NPCContainer2 = _interopRequireDefault(_NPCContainer);

var _collision = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvisibleBoxComponent = function (_CanvasComponent) {
	_inherits(InvisibleBoxComponent, _CanvasComponent);

	function InvisibleBoxComponent(posx, posy) {
		_classCallCheck(this, InvisibleBoxComponent);

		var _ref = [80 + 16 * 4, 112 + 16 * 0, 16, 16, 32, 32, _canvasComponent2.default.SPRITES.BLOCKS],
		    SX = _ref[0],
		    SY = _ref[1],
		    SW = _ref[2],
		    SH = _ref[3],
		    W = _ref[4],
		    H = _ref[5],
		    SPRITE = _ref[6];
		var DURATION = 150,
		    AMPLITUDE = H / 2;

		var _this = _possibleConstructorReturn(this, (InvisibleBoxComponent.__proto__ || Object.getPrototypeOf(InvisibleBoxComponent)).call(this, W, H, SPRITE, posx, posy, 'sprite', SX, SY, SW, SH, 0));

		_this.states = { HIT: 0 };
		_this.solid = false;
		_this.animationParameters = { DURATION: DURATION, AMPLITUDE: AMPLITUDE };
		_this.collidable = [_collision.BTYPE];
		return _this;
	}

	_createClass(InvisibleBoxComponent, [{
		key: 'makeVisible',
		value: function makeVisible() {
			this.alpha = 1;
		}
	}, {
		key: 'hit',
		value: function hit(scene) {
			if (this.solid == true) return false;
			this.solid = true;
			this.state = this.states.HIT;
			this.makeVisible();
			scene.bindComponentForAnimation(this.componentIdentifier);
		}
	}, {
		key: 'animate',
		value: function animate(time, scene) {
			if (this.state == this.states.HIT) {
				var _animationParameters = this.animationParameters,
				    DURATION = _animationParameters.DURATION,
				    AMPLITUDE = _animationParameters.AMPLITUDE;

				if (!this.animationInitialized) {
					this.animationInitialized = true;
					this.initposy = this.posy;
					this.inittime = time;
					if (this.bonusComponent) {
						if (this.initBonusAfterAnimation == false) this.initBonus(scene);
					}
				}

				var durationIndex = (time - this.inittime) / DURATION;
				var ANIMATIONCOMPLETED = false;
				if (durationIndex >= 1) ANIMATIONCOMPLETED = true;

				if (ANIMATIONCOMPLETED) {
					this.posy = this.initposy;
					this.animationInitialized = this.inittime = this.initposy = this.state = undefined;
					if (this.bonusAmount) if (this.initBonusAfterAnimation == true) this.initBonus(scene);
					return true;
				} else this.posy = this.initposy - AMPLITUDE * Math.sin(Math.PI * durationIndex);
			}
		}
	}, {
		key: 'unbindBonus',
		value: function unbindBonus() {
			delete this.bonusComponentIdentifier;
			delete this.bonusIndex;
			delete this.bonusAmount;
			delete this.bonusComponent;
			delete this.initBonusComponent;
			delete this.initBonusAfterAnimation;
		}
	}, {
		key: 'initBonus',
		value: function initBonus(scene) {
			if (this.bonusIndex++ < this.bonusAmount) this.initBonusComponent(scene);
			if (this.bonusIndex == this.bonusAmount) this.unbindBonus();
		}
	}, {
		key: 'bindBonus',
		value: function bindBonus(bonusComponent, bonusAmount) {
			var _this2 = this;

			var initBonusAfterAnimation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
			var extendsFromNPCClass = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;


			this.bonusComponentIdentifier = bonusComponent.componentIdentifier || 'bonus-' + randomizeNumber();
			this.bonusIndex = 0;
			this.bonusAmount = bonusAmount;
			this.bonusComponent = bonusComponent;
			this.initBonusAfterAnimation = initBonusAfterAnimation;

			this.initBonusComponent = function (scene) {
				var _ref2 = [_this2.bonusComponent, _this2.bonusComponentIdentifier],
				    component = _ref2[0],
				    componentIdentifier = _ref2[1];

				component.init(_this2.posx, _this2.posy, _this2.width, _this2.height);
				if (extendsFromNPCClass) {
					scene.bindComponent(component, componentIdentifier);
					_NPCContainer2.default.instance().pushNPC(component);
				} else {
					if (scene.getBindedComponent(componentIdentifier) !== component) {
						scene.bindComponent(component, componentIdentifier);
						scene.bindComponentForAnimation(componentIdentifier);
					}
				}
				scene.zindex(componentIdentifier, _this2.componentIdentifier);
			};
			return this;
		}
	}]);

	return InvisibleBoxComponent;
}(_canvasComponent2.default);

exports.default = InvisibleBoxComponent;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvasComponent = __webpack_require__(0);

var _canvasComponent2 = _interopRequireDefault(_canvasComponent);

var _NPC2 = __webpack_require__(11);

var _NPC3 = _interopRequireDefault(_NPC2);

var _misc = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MushroomBonusComponent = function (_NPC) {
    _inherits(MushroomBonusComponent, _NPC);

    /* @pallete = 'OW' (USED IN OVERWORLD LEVELS) */
    /* @pallete = 'UG' (USED IN UNDERGROUND LEVELS) */
    /* @pallete = 'CASTLE' (USED IN CASTLE LEVELS) */
    /* @pallete = 'UW' (USED IN UNDERWATER LEVELS) */
    function MushroomBonusComponent() {
        var pallete = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'OW';
        var smile = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, MushroomBonusComponent);

        var SW = 16,
            SH = 16;
        var W = SW * 2,
            H = SH * 2;
        var OW = 'OW',
            UG = 'UG',
            CASTLE = 'CASTLE',
            UW = 'UW';

        var OWPALLETE = [[0, 0, SW, SH], [16, 0, SW, SH], [32, 0, SW, SH]];
        var OWPALLETESMILE = [[0, 16, SW, SH], [16, 16, SW, SH], [32, 16, SW, SH]];
        var UGPALLETE = [[144, 0, SW, SH], [160, 0, SW, SH], [176, 0, SW, SH]];
        var UGPALLETESMILE = [[144, 16, SW, SH], [160, 16, SW, SH], [176, 16, SW, SH]];
        var CASTLEPALLETE = [[288, 0, SW, SH], [304, 0, SW, SH], [320, 0, SW, SH]];
        var CASTLEPALLETESMILE = [[288, 16, SW, SH], [304, 16, SW, SH], [320, 16, SW, SH]];
        var UWPALLETE = [[432, 0, SW, SH], [448, 0, SW, SH], [464, 0, SW, SH]];
        var UWPALLETESMILE = [[432, 16, SW, SH], [448, 16, SW, SH], [464, 16, SW, SH]];
        var PALLETE = void 0;
        if (pallete == OW) {
            PALLETE = [OWPALLETE, OWPALLETESMILE];
        } else if (pallete == UG) {
            PALLETE = [UGPALLETE, UGPALLETESMILE];
        } else if (pallete == CASTLE) {
            PALLETE = [CASTLEPALLETE, CASTLEPALLETESMILE];
        } else if (pallete == UW) {
            PALLETE = [UWPALLETE, UWPALLETESMILE];
        }
        if (smile) {
            var _this = _possibleConstructorReturn(this, (MushroomBonusComponent.__proto__ || Object.getPrototypeOf(MushroomBonusComponent)).call(this, W, H, _canvasComponent2.default.SPRITES.C, 0, 0, 'sprite', PALLETE[1][0][0], PALLETE[1][0][1], PALLETE[1][0][2], PALLETE[1][0][3]));

            _this.smile = true;
            _this.pallete = PALLETE[1];
        } else {
            var _this = _possibleConstructorReturn(this, (MushroomBonusComponent.__proto__ || Object.getPrototypeOf(MushroomBonusComponent)).call(this, W, H, _canvasComponent2.default.SPRITES.C, 0, 0, 'sprite', PALLETE[0][0][0], PALLETE[0][0][1], PALLETE[0][0][2], PALLETE[0][0][3]));

            _this.smile = false;
            _this.pallete = PALLETE[0];
        }
        _this.PALLETE = PALLETE;
        var _ref = [5, _this.states.BUMP, _this.height, 750],
            MOVINGOUTOFTHEBOX = _ref[0],
            BUMP = _ref[1],
            AMPLITUDE = _ref[2],
            DURATION = _ref[3];

        _this.states = { MOVINGOUTOFTHEBOX: MOVINGOUTOFTHEBOX, BUMP: BUMP };
        _this.animationParameters = { AMPLITUDE: AMPLITUDE, DURATION: DURATION };
        _this.direction = direction;
        _this.componentIdentifier = 'mushroom-0-' + (0, _misc.randomizeNumber)();
        _this.bonusComponent = true;
        delete _this.scoreValue;
        return _possibleConstructorReturn(_this);
    }

    _createClass(MushroomBonusComponent, [{
        key: 'init',
        value: function init(pposx, pposy, pw, ph) {
            // Play SFX
            this.posx = pposx;
            this.posy = pposy;
            this.state = this.states.MOVINGOUTOFTHEBOX;
            this.collidable = false;
            this.dx = 0;
        }
    }, {
        key: 'smile',
        value: function smile(bool) {
            this.smile = bool;
            if (this.smile) this.pallete = this.PALLETE[1];else this.pallete = this.PALLETE[0];
        }
    }, {
        key: 'take',
        value: function take() {
            this._shouldBeRemoved = true;
        }
    }, {
        key: 'animate',
        value: function animate(time, scene) {
            var _animationParameters = this.animationParameters,
                DURATION = _animationParameters.DURATION,
                AMPLITUDE = _animationParameters.AMPLITUDE;

            if (this.state == this.states.MOVINGOUTOFTHEBOX) {
                if (!this.animationInitialized) {
                    this.animationInitialized = true;
                    this.inittime = time;
                    this.initposy = this.posy;
                }
                var durationIndex = (time - this.inittime) / DURATION;
                var ANIMATIONCOMPLETED = false;
                if (durationIndex >= 1) ANIMATIONCOMPLETED = true;
                if (ANIMATIONCOMPLETED == true) {
                    this.posy = this.initposy - this.height;
                    this.collidable = true;
                    this.dx = 3.5;
                    delete this.animationInitialized;
                    delete this.inittime;
                    delete this.initposy;
                    delete this.state;
                } else this.posy = this.initposy - AMPLITUDE * durationIndex;
            } else if (this.state == this.states.BUMP) this.animationBump(time, scene);
        }
    }]);

    return MushroomBonusComponent;
}(_NPC3.default);

exports.default = MushroomBonusComponent;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvasComponent = __webpack_require__(0);

var _canvasComponent2 = _interopRequireDefault(_canvasComponent);

var _NPC2 = __webpack_require__(11);

var _NPC3 = _interopRequireDefault(_NPC2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//https://www.mariowiki.com/Super_Mario_Bros.

/*
Goomba. Mushroom traitors that walk back and forth.
They are the most weak and common enemies throughout the game and can be stomped or hit with fireballs or a Starman.  
*/
var NPCGoomba = function (_NPC) {
	_inherits(NPCGoomba, _NPC);

	/* @pallete = 0 GREY */
	/* @pallete = 1 BLUE */
	/* @pallete = 2 BROWN */
	function NPCGoomba(posx, posy) {
		var pallete = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
		var direction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

		_classCallCheck(this, NPCGoomba);

		var MAXFRAMEINDEX = 7,
		    DELAY = 500;

		var SPRITES = {
			// [SX, SY, SW, SH, W, H]
			0: [/*STOMPED*/[163, 195, 16, 8, 16 * 2, 8 * 2], /*WALKING*/[182, 187, 16, 16, 16 * 2, 16 * 2], [201, 187, 16, 16, 16 * 2, 16 * 2], /*HIT*/[136, 424, 16, 16, 16 * 2, 16 * 2]],
			1: [/*STOMPED*/[220, 195, 16, 8, 16 * 2, 8 * 2], /*WALKING*/[239, 187, 16, 16, 16 * 2, 16 * 2], [258, 187, 16, 16, 16 * 2, 16 * 2], /*HIT*/[114, 424, 16, 16, 16 * 2, 16 * 2]],
			2: [/*STOMPED*/[277, 195, 16, 8, 16 * 2, 8 * 2], /*WALKING*/[296, 187, 16, 16, 16 * 2, 16 * 2], [315, 187, 16, 16, 16 * 2, 16 * 2], /*HIT*/[156, 424, 16, 16, 16 * 2, 16 * 2]]
		};

		var SPRITE = SPRITES[pallete];

		var _SPRITE$ = _slicedToArray(SPRITE[1], 6),
		    SX = _SPRITE$[0],
		    SY = _SPRITE$[1],
		    SW = _SPRITE$[2],
		    SH = _SPRITE$[3],
		    W = _SPRITE$[4],
		    H = _SPRITE$[5];

		var _this = _possibleConstructorReturn(this, (NPCGoomba.__proto__ || Object.getPrototypeOf(NPCGoomba)).call(this, W, H, _canvasComponent2.default.SPRITES.CHARACTERS, posx, posy, 'sprite', SX, SY, SW, SH));

		_this.SPRITE = SPRITE;
		_this.state = _this.states.WALKING;
		_this.animationParameters = { MAXFRAMEINDEX: MAXFRAMEINDEX, DELAY: DELAY };
		_this.direction = direction;
		_this.frameIndex = 0;
		_this.sxsyswshIndex = 1;
		return _this;
	}

	_createClass(NPCGoomba, [{
		key: 'specifyWH',
		value: function specifyWH() {
			this.width = this.SPRITE[this.sxsyswshIndex][4];
			this.height = this.SPRITE[this.sxsyswshIndex][5];
		}
	}, {
		key: 'specifySXSYSWSH',
		value: function specifySXSYSWSH() {
			this.sx = this.SPRITE[this.sxsyswshIndex][0];
			this.sy = this.SPRITE[this.sxsyswshIndex][1];
			this.sw = this.SPRITE[this.sxsyswshIndex][2];
			this.sh = this.SPRITE[this.sxsyswshIndex][3];
		}
	}, {
		key: 'stomp',
		value: function stomp() {
			this.state = this.states.STOMPED;
			this.sxsyswshIndex = 0;
			this.dx = 0;
			this.specifySXSYSWSH();
			this.specifyWH();
			this.posy = this.posy + this.SPRITE[this.sxsyswshIndex][5];
			this.collidable = false;
		}
	}, {
		key: 'hit',
		value: function hit() {
			this.state = this.states.HIT;
			this.sxsyswshIndex = 3;
			this.direction = 1;
			this.dx = 1;
			this.specifySXSYSWSH();
			this.specifyWH();
			this.collidable = false;
		}
	}, {
		key: 'animate',
		value: function animate(time, scene) {

			if (this.state == this.states.WALKING) {
				if (++this.frameIndex % this.animationParameters.MAXFRAMEINDEX == 0) {
					this.frameIndex = 0;
					this.specifySXSYSWSH();
					if (this.sxsyswshIndex == 1) {
						this.sxsyswshIndex = 2;
					} else if (this.sxsyswshIndex == 2) {
						this.sxsyswshIndex = 1;
					}
				}
			} else if (this.state == this.states.STOMPED) {
				if (!this.init) {
					this.inittime = time;
					this.init = true;
				}
				if (time - this.inittime >= this.animationParameters.DELAY) this._shouldBeRemoved = true;
			} else if (this.state == this.states.HIT) this.animationHit(time, scene);
		}
	}]);

	return NPCGoomba;
}(_NPC3.default);

exports.default = NPCGoomba;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvasComponent = __webpack_require__(0);

var _canvasComponent2 = _interopRequireDefault(_canvasComponent);

var _NPC2 = __webpack_require__(11);

var _NPC3 = _interopRequireDefault(_NPC2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
If stomped, it retreats in its shell that can be kicked to hit other enemies and gain points.
Green ones walk back and forth just like Goomba, and red ones timidly turn around when they find a pit.
*/
var NPCKoopaTroopa = function (_NPC) {
    _inherits(NPCKoopaTroopa, _NPC);

    // @pallete = 0 RED
    // @pallete = 1 GREEN
    // @pallete = 2 BLUE
    function NPCKoopaTroopa(posx, posy) {
        var pallete = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var direction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        _classCallCheck(this, NPCKoopaTroopa);

        var MAXFRAMEINDEX = 10,
            DELAY1 = 5000,
            DELAY2 = 2500;
        var L = 'L',
            R = 'R',
            STOMP = 'STOMP',
            HIT = 'HIT';

        var isRedPallete = pallete == 0;
        // [SX, SY, SW, SH, W, H]
        var SPRITERED = {
            L: [[68, 206, 16, 24, 16 * 2, 24 * 2], [87, 206, 16, 24, 16 * 2, 24 * 2]],
            R: [[410, 206, 16, 24, 16 * 2, 24 * 2], [429, 206, 16, 24, 16 * 2, 24 * 2]],
            STOMP: [[29, 216, 18, 14, 18 * 2, 14 * 2], [48, 215, 18, 16, 18 * 2, 16 * 2]],
            HIT: [[466, 215, 18, 14, 18 * 2, 14 * 2], [447, 215, 18, 16, 18 * 2, 16 * 2]]
        };
        var SPRITEGREEN = {
            L: [[182, 206, 16, 24, 16 * 2, 24 * 2], [201, 206, 16, 24, 16 * 2, 24 * 2]],
            R: [[296, 206, 16, 24, 16 * 2, 24 * 2], [315, 206, 16, 24, 16 * 2, 24 * 2]],
            STOMP: [[143, 216, 18, 14, 18 * 2, 14 * 2], [162, 215, 18, 16, 18 * 2, 16 * 2]],
            HIT: [[352, 216, 18, 14, 18 * 2, 14 * 2], [333, 215, 18, 16, 18 * 2, 16 * 2]]
        };
        var SPRITEBLUE = {
            L: [[182, 233, 16, 24, 16 * 2, 24 * 2], [201, 233, 16, 24, 16 * 2, 24 * 2]],
            R: [[296, 233, 16, 24, 16 * 2, 24 * 2], [315, 233, 16, 24, 16 * 2, 24 * 2]],
            STOMP: [[143, 243, 18, 14, 18 * 2, 14 * 2], [162, 242, 18, 16, 18 * 2, 16 * 2]],
            HIT: [[352, 243, 18, 14, 18 * 2, 14 * 2], [333, 242, 18, 16, 18 * 2, 16 * 2]]
        };

        var SPRITES = undefined;
        if (isRedPallete) SPRITES = SPRITERED;else if (pallete == 1) SPRITES = SPRITEGREEN;else if (pallete == 2) SPRITES = SPRITEBLUE;

        var _this = _possibleConstructorReturn(this, (NPCKoopaTroopa.__proto__ || Object.getPrototypeOf(NPCKoopaTroopa)).call(this, 0, 0, _canvasComponent2.default.SPRITES.CHARACTERS, posx, posy, 'sprite', 0, 0, 0, 0));

        if (isRedPallete) _this.detectsPit = true;
        _this.speed = { STAND: 0, FAST: 5, NORMAL: _this.dx };
        _this.animationParameters = { MAXFRAMEINDEX: MAXFRAMEINDEX, DELAY1: DELAY1, DELAY2: DELAY2 };
        _this.spriteTypes = { L: L, R: R, STOMP: STOMP, HIT: HIT };
        _this.SPRITES = SPRITES;
        _this.direction = direction;
        _this.dx = _this.speed.NORMAL;
        _this.state = _this.states.WALKING;
        _this.frameIndex = _this.sxsyswshIndex = 0;
        _this.specifyWalking();
        _this.initSprite();
        _this.inHitMode = false;
        _this.scoreValue = 200;
        //this.hitbox = {}
        return _this;
    }

    _createClass(NPCKoopaTroopa, [{
        key: 'specifyWalking',
        value: function specifyWalking() {
            if (this.direction == 0) this.spriteType = this.spriteTypes.L;
            if (this.direction == 1) this.spriteType = this.spriteTypes.R;
        }
    }, {
        key: 'specifyWH',
        value: function specifyWH() {
            this.width = this.SPRITES[this.spriteType][this.sxsyswshIndex][4];
            this.height = this.SPRITES[this.spriteType][this.sxsyswshIndex][5];
        }
    }, {
        key: 'specifySXSYSWSH',
        value: function specifySXSYSWSH() {
            this.sx = this.SPRITES[this.spriteType][this.sxsyswshIndex][0];
            this.sy = this.SPRITES[this.spriteType][this.sxsyswshIndex][1];
            this.sw = this.SPRITES[this.spriteType][this.sxsyswshIndex][2];
            this.sh = this.SPRITES[this.spriteType][this.sxsyswshIndex][3];
        }
    }, {
        key: 'initSprite',
        value: function initSprite() {
            this.specifySXSYSWSH();
            this.specifyWH();
        }
    }, {
        key: 'hit',
        value: function hit() {
            this.state = this.states.HIT;
            this.spriteType = this.spriteTypes.HIT;
            this.sxsyswshIndex = 0;
            this.collidable = false;
            this.initSprite();
        }
    }, {
        key: 'stomp',
        value: function stomp() {
            if (this.state != this.states.STOMPED) {
                this.state = this.states.STOMPED;
                var dy = this.SPRITES[this.spriteTypes.L][0][5] - this.SPRITES[this.spriteTypes.STOMP][0][5];
                this.posy = this.posy + dy;
            }
            this.spriteType = this.spriteTypes.STOMP;
            this.sxsyswshIndex = 0;
            this.initSprite();
            if (!this.stand) {
                this.inHitMode = false;
                this.stand = true;
                this.dx = this.speed.STAND;
            } else if (this.stand == true) {
                this.inHitMode = true;
                this.stand = false;
                this.dx = this.speed.FAST;
                delete this.stompAnimationInitialized;
                delete this.inittime;
            }
        }
    }, {
        key: 'swapSpriteByFrameIndex',
        value: function swapSpriteByFrameIndex() {
            if (++this.frameIndex % this.animationParameters.MAXFRAMEINDEX == 0) {
                this.frameIndex = 0;
                this.initSprite();
                if (this.sxsyswshIndex == 0) {
                    this.sxsyswshIndex = 1;
                } else if (this.sxsyswshIndex == 1) {
                    this.sxsyswshIndex = 0;
                }
            }
        }
    }, {
        key: 'animate',
        value: function animate(time, scene) {
            if (this.state == this.states.WALKING) {
                this.specifyWalking();
                this.swapSpriteByFrameIndex();
            } else if (this.state == this.states.STOMPED) {
                if (this.stand == true) {
                    var _animationParameters = this.animationParameters,
                        DELAY1 = _animationParameters.DELAY1,
                        DELAY2 = _animationParameters.DELAY2;

                    if (!this.stompAnimationInitialized) {
                        this.stompAnimationInitialized = true;
                        this.inittime = time;
                    }
                    var dt1 = time - this.inittime;
                    if (dt1 >= DELAY1) {
                        var dt2 = time - (this.inittime + DELAY1);
                        if (dt2 >= DELAY2) {
                            var dy = this.SPRITES[this.spriteTypes.L][0][5] - this.SPRITES[this.spriteTypes.STOMP][0][5];
                            this.posy = this.posy - dy;
                            this.specifyWalking();
                            this.initSprite();
                            this.stand = false;
                            this.state = this.states.WALKING;
                            this.dx = this.speed.NORMAL;
                            delete this.stompAnimationInitialized;
                            delete this.inittime;
                        } else this.swapSpriteByFrameIndex();
                    }
                }
            } else if (this.state == this.states.HIT) this.animationHit(time, scene);
        }
    }]);

    return NPCKoopaTroopa;
}(_NPC3.default);

exports.default = NPCKoopaTroopa;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _misc = __webpack_require__(1);

var _canvasComponent = __webpack_require__(0);

var _canvasComponent2 = _interopRequireDefault(_canvasComponent);

var _CoinBoxComponent = __webpack_require__(19);

var _CoinBoxComponent2 = _interopRequireDefault(_CoinBoxComponent);

var _TriangleBoxComponent = __webpack_require__(9);

var _TriangleBoxComponent2 = _interopRequireDefault(_TriangleBoxComponent);

var _BrickBoxComponent = __webpack_require__(18);

var _BrickBoxComponent2 = _interopRequireDefault(_BrickBoxComponent);

var _TransparentBoxComponent = __webpack_require__(4);

var _TransparentBoxComponent2 = _interopRequireDefault(_TransparentBoxComponent);

var _QuestionBoxComponent = __webpack_require__(17);

var _QuestionBoxComponent2 = _interopRequireDefault(_QuestionBoxComponent);

var _PipeBoxComponent = __webpack_require__(8);

var _PipeBoxComponent2 = _interopRequireDefault(_PipeBoxComponent);

var _FlagpoleBoxComponent = __webpack_require__(20);

var _FlagpoleBoxComponent2 = _interopRequireDefault(_FlagpoleBoxComponent);

var _CastleBoxComponent = __webpack_require__(21);

var _CastleBoxComponent2 = _interopRequireDefault(_CastleBoxComponent);

var _ControlPointComponent = __webpack_require__(7);

var _ControlPointComponent2 = _interopRequireDefault(_ControlPointComponent);

var _PlatformBoxComponent = __webpack_require__(34);

var _PlatformBoxComponent2 = _interopRequireDefault(_PlatformBoxComponent);

var _GraphicalTextContainer = __webpack_require__(2);

var _GraphicalTextContainer2 = _interopRequireDefault(_GraphicalTextContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var L12Container = function L12Container() {
	_classCallCheck(this, L12Container);

	var FEx = 512,
	    FEy = 288,
	    FLOORH = 64,
	    delta = 32;

	this.NPCComponents = {};
	this.B1Components = {
		'bg': new _canvasComponent2.default(720, _misc.CANVASSCENEH, _canvasComponent2.default.SPRITES.L12B1, 0, 0, 'image'),
		'fbc1': new _TransparentBoxComponent2.default(0, delta * 13, 720, 64),
		'bbc0': new _BrickBoxComponent2.default(0, delta * 2, 'UG'),
		'bbc1': new _BrickBoxComponent2.default(0, delta * 3, 'UG'),
		'bbc2': new _BrickBoxComponent2.default(0, delta * 4, 'UG'),
		'bbc3': new _BrickBoxComponent2.default(0, delta * 5, 'UG'),
		'bbc4': new _BrickBoxComponent2.default(0, delta * 6, 'UG'),
		'bbc5': new _BrickBoxComponent2.default(0, delta * 7, 'UG'),
		'bbc6': new _BrickBoxComponent2.default(0, delta * 8, 'UG'),
		'bbc7': new _BrickBoxComponent2.default(0, delta * 9, 'UG'),
		'bbc8': new _BrickBoxComponent2.default(0, delta * 10, 'UG'),
		'bbc9': new _BrickBoxComponent2.default(0, delta * 11, 'UG'),
		'bbc10': new _BrickBoxComponent2.default(0, delta * 12, 'UG'),
		'bbc11': new _BrickBoxComponent2.default(delta, delta * 2, 'UG'),
		'bbc12': new _BrickBoxComponent2.default(delta, delta * 3, 'UG'),
		'bbc13': new _BrickBoxComponent2.default(delta, delta * 4, 'UG'),
		'bbc14': new _BrickBoxComponent2.default(delta, delta * 5, 'UG'),
		'bbc15': new _BrickBoxComponent2.default(delta, delta * 6, 'UG'),
		'bbc16': new _BrickBoxComponent2.default(delta, delta * 7, 'UG'),
		'bbc17': new _BrickBoxComponent2.default(delta, delta * 8, 'UG'),
		'bbc18': new _BrickBoxComponent2.default(delta, delta * 9, 'UG'),
		'bbc19': new _BrickBoxComponent2.default(delta, delta * 10, 'UG'),
		'bbc20': new _BrickBoxComponent2.default(delta, delta * 11, 'UG'),
		'bbc21': new _BrickBoxComponent2.default(delta, delta * 12, 'UG'),
		'bbc22': new _BrickBoxComponent2.default(delta * 2, delta * 2, 'UG'),
		'bbc23': new _BrickBoxComponent2.default(delta * 2, delta * 3, 'UG'),
		'bbc24': new _BrickBoxComponent2.default(delta * 2, delta * 4, 'UG'),
		'bbc25': new _BrickBoxComponent2.default(delta * 2, delta * 5, 'UG'),
		'bbc26': new _BrickBoxComponent2.default(delta * 2, delta * 6, 'UG'),
		'bbc27': new _BrickBoxComponent2.default(delta * 2, delta * 7, 'UG'),
		'bbc28': new _BrickBoxComponent2.default(delta * 2, delta * 8, 'UG'),
		'bbc29': new _BrickBoxComponent2.default(delta * 2, delta * 9, 'UG'),
		'bbc30': new _BrickBoxComponent2.default(delta * 2, delta * 10, 'UG'),
		'bbc31': new _BrickBoxComponent2.default(delta * 2, delta * 11, 'UG'),
		'bbc32': new _BrickBoxComponent2.default(delta * 2, delta * 12, 'UG'),
		'bbc33': new _BrickBoxComponent2.default(delta * 3, delta * 2, 'UG'),
		'bbc34': new _BrickBoxComponent2.default(delta * 3, delta * 3, 'UG'),
		'bbc35': new _BrickBoxComponent2.default(delta * 3, delta * 4, 'UG'),
		'bbc36': new _BrickBoxComponent2.default(delta * 3, delta * 5, 'UG'),
		'bbc37': new _BrickBoxComponent2.default(delta * 3, delta * 6, 'UG'),
		'bbc38': new _BrickBoxComponent2.default(delta * 3, delta * 7, 'UG'),
		'bbc39': new _BrickBoxComponent2.default(delta * 3, delta * 8, 'UG'),
		'bbc40': new _BrickBoxComponent2.default(delta * 3, delta * 9, 'UG'),
		'bbc41': new _BrickBoxComponent2.default(delta * 3, delta * 10, 'UG'),
		'bbc42': new _BrickBoxComponent2.default(delta * 3, delta * 11, 'UG'),
		'bbc43': new _BrickBoxComponent2.default(delta * 3, delta * 12, 'UG'),
		'bbc44': new _BrickBoxComponent2.default(delta * 4, delta * 2, 'UG'),
		'bbc45': new _BrickBoxComponent2.default(delta * 4, delta * 3, 'UG'),
		'bbc46': new _BrickBoxComponent2.default(delta * 4, delta * 4, 'UG'),
		'bbc47': new _BrickBoxComponent2.default(delta * 4, delta * 5, 'UG'),
		'bbc48': new _BrickBoxComponent2.default(delta * 4, delta * 6, 'UG'),
		'bbc49': new _BrickBoxComponent2.default(delta * 4, delta * 7, 'UG'),
		'bbc50': new _BrickBoxComponent2.default(delta * 4, delta * 8, 'UG'),
		'bbc51': new _BrickBoxComponent2.default(delta * 4, delta * 9, 'UG'),
		'bbc52': new _BrickBoxComponent2.default(delta * 4, delta * 10, 'UG'),
		'bbc53': new _BrickBoxComponent2.default(delta * 4, delta * 11, 'UG'),
		'bbc54': new _BrickBoxComponent2.default(delta * 4, delta * 12, 'UG'),
		'bbc55': new _BrickBoxComponent2.default(delta * 5, delta * 2, 'UG'),
		'bbc56': new _BrickBoxComponent2.default(delta * 5, delta * 3, 'UG'),
		'bbc57': new _BrickBoxComponent2.default(delta * 5, delta * 4, 'UG'),
		'bbc58': new _BrickBoxComponent2.default(delta * 5, delta * 5, 'UG'),
		'bbc59': new _BrickBoxComponent2.default(delta * 5, delta * 6, 'UG'),
		'bbc60': new _BrickBoxComponent2.default(delta * 5, delta * 7, 'UG'),
		'bbc61': new _BrickBoxComponent2.default(delta * 5, delta * 8, 'UG'),
		'bbc62': new _BrickBoxComponent2.default(delta * 5, delta * 9, 'UG'),
		'bbc63': new _BrickBoxComponent2.default(delta * 5, delta * 10, 'UG'),
		'bbc64': new _BrickBoxComponent2.default(delta * 5, delta * 11, 'UG'),
		'bbc65': new _BrickBoxComponent2.default(delta * 5, delta * 12, 'UG'),
		'bbc66': new _BrickBoxComponent2.default(delta * 6, delta * 2, 'UG'),
		'bbc67': new _BrickBoxComponent2.default(delta * 6, delta * 3, 'UG'),
		'bbc68': new _BrickBoxComponent2.default(delta * 6, delta * 4, 'UG'),
		'bbc69': new _BrickBoxComponent2.default(delta * 6, delta * 5, 'UG'),
		'bbc70': new _BrickBoxComponent2.default(delta * 6, delta * 6, 'UG'),
		'bbc71': new _BrickBoxComponent2.default(delta * 6, delta * 7, 'UG'),
		'bbc72': new _BrickBoxComponent2.default(delta * 6, delta * 8, 'UG'),
		'bbc73': new _BrickBoxComponent2.default(delta * 6, delta * 9, 'UG'),
		'bbc74': new _BrickBoxComponent2.default(delta * 6, delta * 10, 'UG'),
		'bbc75': new _BrickBoxComponent2.default(delta * 6, delta * 11, 'UG'),
		'bbc76': new _BrickBoxComponent2.default(delta * 6, delta * 12, 'UG'),
		'bbc77': new _BrickBoxComponent2.default(delta * 9 + delta / 2, delta * 2, 'UG'),
		'bbc78': new _BrickBoxComponent2.default(delta * 10 + delta / 2, delta * 2, 'UG'),
		'bbc79': new _BrickBoxComponent2.default(delta * 11 + delta / 2, delta * 2, 'UG'),
		'bbc80': new _BrickBoxComponent2.default(delta * 12 + delta / 2, delta * 2, 'UG'),
		'bbc81': new _BrickBoxComponent2.default(delta * 13 + delta / 2, delta * 2, 'UG'),
		'bbc82': new _BrickBoxComponent2.default(delta * 14 + delta / 2, delta * 2, 'UG'),
		'bbc83': new _BrickBoxComponent2.default(delta * 15 + delta / 2, delta * 2, 'UG'),
		'bbc84': new _BrickBoxComponent2.default(delta * 16 + delta / 2, delta * 2, 'UG'),
		'bbc85': new _BrickBoxComponent2.default(delta * 17 + delta / 2, delta * 2, 'UG'),
		'bbc86': new _BrickBoxComponent2.default(delta * 18 + delta / 2, delta * 2, 'UG'),
		'bbc87': new _BrickBoxComponent2.default(delta * 19 + delta / 2, delta * 2, 'UG'),
		'bbc88': new _BrickBoxComponent2.default(delta * 20 + delta / 2, delta * 2, 'UG'),
		'bbc89': new _BrickBoxComponent2.default(delta * 9 + delta / 2, delta * 3, 'UG'),
		'bbc90': new _BrickBoxComponent2.default(delta * 10 + delta / 2, delta * 3, 'UG'),
		'bbc91': new _BrickBoxComponent2.default(delta * 11 + delta / 2, delta * 3, 'UG'),
		'bbc92': new _BrickBoxComponent2.default(delta * 12 + delta / 2, delta * 3, 'UG'),
		'bbc93': new _BrickBoxComponent2.default(delta * 13 + delta / 2, delta * 3, 'UG'),
		'bbc94': new _BrickBoxComponent2.default(delta * 14 + delta / 2, delta * 3, 'UG'),
		'bbc95': new _BrickBoxComponent2.default(delta * 15 + delta / 2, delta * 3, 'UG'),
		'bbc96': new _BrickBoxComponent2.default(delta * 16 + delta / 2, delta * 3, 'UG'),
		'bbc97': new _BrickBoxComponent2.default(delta * 17 + delta / 2, delta * 3, 'UG'),
		'bbc98': new _BrickBoxComponent2.default(delta * 18 + delta / 2, delta * 3, 'UG'),
		'bbc99': new _BrickBoxComponent2.default(delta * 19 + delta / 2, delta * 3, 'UG'),
		'bbc100': new _BrickBoxComponent2.default(delta * 20 + delta / 2, delta * 3, 'UG'),
		'bbc101': new _BrickBoxComponent2.default(delta * 9 + delta / 2, delta * 4, 'UG'),
		'bbc102': new _BrickBoxComponent2.default(delta * 10 + delta / 2, delta * 4, 'UG'),
		'bbc103': new _BrickBoxComponent2.default(delta * 11 + delta / 2, delta * 4, 'UG'),
		'bbc104': new _BrickBoxComponent2.default(delta * 12 + delta / 2, delta * 4, 'UG'),
		'bbc105': new _BrickBoxComponent2.default(delta * 13 + delta / 2, delta * 4, 'UG'),
		'bbc106': new _BrickBoxComponent2.default(delta * 14 + delta / 2, delta * 4, 'UG'),
		'bbc107': new _BrickBoxComponent2.default(delta * 15 + delta / 2, delta * 4, 'UG'),
		'bbc108': new _BrickBoxComponent2.default(delta * 16 + delta / 2, delta * 4, 'UG'),
		'bbc109': new _BrickBoxComponent2.default(delta * 17 + delta / 2, delta * 4, 'UG'),
		'bbc110': new _BrickBoxComponent2.default(delta * 18 + delta / 2, delta * 4, 'UG'),
		'bbc111': new _BrickBoxComponent2.default(delta * 19 + delta / 2, delta * 4, 'UG'),
		'bbc112': new _BrickBoxComponent2.default(delta * 20 + delta / 2, delta * 4, 'UG'),
		'bbc113': new _BrickBoxComponent2.default(delta * 9 + delta / 2, delta * 5, 'UG'),
		'bbc114': new _BrickBoxComponent2.default(delta * 10 + delta / 2, delta * 5, 'UG'),
		'bbc115': new _BrickBoxComponent2.default(delta * 11 + delta / 2, delta * 5, 'UG'),
		'bbc116': new _BrickBoxComponent2.default(delta * 12 + delta / 2, delta * 5, 'UG'),
		'bbc117': new _BrickBoxComponent2.default(delta * 13 + delta / 2, delta * 5, 'UG'),
		'bbc118': new _BrickBoxComponent2.default(delta * 14 + delta / 2, delta * 5, 'UG'),
		'bbc119': new _BrickBoxComponent2.default(delta * 15 + delta / 2, delta * 5, 'UG'),
		'bbc120': new _BrickBoxComponent2.default(delta * 16 + delta / 2, delta * 5, 'UG'),
		'bbc121': new _BrickBoxComponent2.default(delta * 17 + delta / 2, delta * 5, 'UG'),
		'bbc122': new _BrickBoxComponent2.default(delta * 18 + delta / 2, delta * 5, 'UG'),
		'bbc123': new _BrickBoxComponent2.default(delta * 19 + delta / 2, delta * 5, 'UG'),
		'bbc124': new _BrickBoxComponent2.default(delta * 20 + delta / 2, delta * 5, 'UG'),
		'bbc125': new _BrickBoxComponent2.default(delta * 19 + delta / 2, delta * 6, 'UG'),
		'bbc126': new _BrickBoxComponent2.default(delta * 20 + delta / 2, delta * 6, 'UG'),
		'bbc127': new _BrickBoxComponent2.default(delta * 19 + delta / 2, delta * 7, 'UG'),
		'bbc128': new _BrickBoxComponent2.default(delta * 20 + delta / 2, delta * 7, 'UG'),
		'bbc129': new _BrickBoxComponent2.default(delta * 19 + delta / 2, delta * 8, 'UG'),
		'bbc130': new _BrickBoxComponent2.default(delta * 20 + delta / 2, delta * 8, 'UG'),
		'bbc131': new _BrickBoxComponent2.default(delta * 19 + delta / 2, delta * 9, 'UG'),
		'bbc132': new _BrickBoxComponent2.default(delta * 20 + delta / 2, delta * 9, 'UG'),
		'bbc133': new _BrickBoxComponent2.default(delta * 19 + delta / 2, delta * 10, 'UG'),
		'bbc134': new _BrickBoxComponent2.default(delta * 20 + delta / 2, delta * 10, 'UG'),
		'bbc135': new _BrickBoxComponent2.default(delta * 18 + delta / 2, delta * 9, 'UG'),
		'bbc144': new _BrickBoxComponent2.default(delta * 9 + delta / 2, delta * 9, 'UG'),
		'cbc1': new _CoinBoxComponent2.default(delta * 10 + 22, delta * 8 + 4, 'UG'),
		'cbc2': new _CoinBoxComponent2.default(delta * 11 + 22, delta * 8 + 4, 'UG'),
		'cbc3': new _CoinBoxComponent2.default(delta * 12 + 22, delta * 8 + 4, 'UG'),
		'cbc4': new _CoinBoxComponent2.default(delta * 13 + 22, delta * 8 + 4, 'UG'),
		'cbc5': new _CoinBoxComponent2.default(delta * 14 + 22, delta * 8 + 4, 'UG'),
		'cbc6': new _CoinBoxComponent2.default(delta * 15 + 22, delta * 8 + 4, 'UG'),
		'cbc7': new _CoinBoxComponent2.default(delta * 16 + 22, delta * 8 + 4, 'UG'),
		'cbc8': new _CoinBoxComponent2.default(delta * 17 + 22, delta * 8 + 4, 'UG'),
		'bbc136': new _BrickBoxComponent2.default(delta * 17 + delta / 2, delta * 9, 'UG').bindCoinBoxIdentifier('cbc8'),
		'bbc137': new _BrickBoxComponent2.default(delta * 16 + delta / 2, delta * 9, 'UG').bindCoinBoxIdentifier('cbc7'),
		'bbc138': new _BrickBoxComponent2.default(delta * 15 + delta / 2, delta * 9, 'UG').bindCoinBoxIdentifier('cbc6'),
		'bbc139': new _BrickBoxComponent2.default(delta * 14 + delta / 2, delta * 9, 'UG').bindCoinBoxIdentifier('cbc5'),
		'bbc140': new _BrickBoxComponent2.default(delta * 13 + delta / 2, delta * 9, 'UG').bindCoinBoxIdentifier('cbc4'),
		'bbc141': new _BrickBoxComponent2.default(delta * 12 + delta / 2, delta * 9, 'UG').bindCoinBoxIdentifier('cbc3'),
		'bbc142': new _BrickBoxComponent2.default(delta * 11 + delta / 2, delta * 9, 'UG').bindCoinBoxIdentifier('cbc2'),
		'bbc143': new _BrickBoxComponent2.default(delta * 10 + delta / 2, delta * 9, 'UG').bindCoinBoxIdentifier('cbc1'),
		'cbc9': new _CoinBoxComponent2.default(delta * 9 + 22, delta * 12 + 4, 'UG'),
		'cbc10': new _CoinBoxComponent2.default(delta * 10 + 22, delta * 12 + 4, 'UG'),
		'cbc11': new _CoinBoxComponent2.default(delta * 11 + 22, delta * 12 + 4, 'UG'),
		'cbc12': new _CoinBoxComponent2.default(delta * 12 + 22, delta * 12 + 4, 'UG'),
		'cbc13': new _CoinBoxComponent2.default(delta * 13 + 22, delta * 12 + 4, 'UG'),
		'cbc14': new _CoinBoxComponent2.default(delta * 14 + 22, delta * 12 + 4, 'UG'),
		'cbc15': new _CoinBoxComponent2.default(delta * 15 + 22, delta * 12 + 4, 'UG'),
		'cbc16': new _CoinBoxComponent2.default(delta * 16 + 22, delta * 12 + 4, 'UG'),
		'cbc17': new _CoinBoxComponent2.default(delta * 17 + 22, delta * 12 + 4, 'UG'),
		'pbc1p1': new _PipeBoxComponent2.default(delta * 20 - 16, _misc.CANVASSCENEH - FLOORH * 2, [5, 1], true, ['L12', 'pbc1']),
		'pbc1p2': new _canvasComponent2.default(28 * 2, 480 - 64 * 3, _canvasComponent2.default.SPRITES.PSTF, delta * 22 - 12, _misc.CANVASSCENEH - delta * 13, 'sprite', 118, 414, 28, 2)
	};
	this.B2Components = {
		'bg': new _canvasComponent2.default(1024, _misc.CANVASSCENEH, _canvasComponent2.default.SPRITES.L12B2, 0, 0, 'image'),
		'fbc1': new _TransparentBoxComponent2.default(0, delta * 13, 1024, 64),
		'pbc1': new _PipeBoxComponent2.default(delta * 3, delta * 11, [1, 1]),
		'ttc1': new _TransparentBoxComponent2.default(delta * 5, delta * 12, delta, delta),
		'ttc2': new _TransparentBoxComponent2.default(delta * 6, delta * 11, delta, delta * 2),
		'ttc3': new _TransparentBoxComponent2.default(delta * 7, delta * 10, delta, delta * 3),
		'ttc4': new _TransparentBoxComponent2.default(delta * 8, delta * 9, delta, delta * 4),
		'ttc5': new _TransparentBoxComponent2.default(delta * 9, delta * 8, delta, delta * 5),
		'ttc6': new _TransparentBoxComponent2.default(delta * 10, delta * 7, delta, delta * 6),
		'ttc7': new _TransparentBoxComponent2.default(delta * 11, delta * 6, delta, delta * 7),
		'ttc8': new _TransparentBoxComponent2.default(delta * 12, delta * 5, delta, delta * 8),
		'ttc9': new _TransparentBoxComponent2.default(delta * 13, delta * 5, delta, delta * 8),
		'container-flagpole': new _FlagpoleBoxComponent2.default(delta * 21, _misc.CANVASSCENEH - FLOORH - delta),
		'container-castle': new _CastleBoxComponent2.default(delta * 26, _misc.CANVASSCENEH - FLOORH - delta * 5, 0),
		'controlpoint': new _ControlPointComponent2.default(delta * 29, _misc.CANVASSCENEH - FLOORH - delta, 1, delta, _ControlPointComponent2.default.TYPES.CASTLEENTRY)
	};
	this.NCCComponents = {
		'bg': new _canvasComponent2.default(6144, _misc.CANVASSCENEH, _canvasComponent2.default.SPRITES.L12, 0, 0, 'image'),
		'bbc0': new _BrickBoxComponent2.default(0, delta * 2, 'UG'),
		'bbc1': new _BrickBoxComponent2.default(0, delta * 3, 'UG'),
		'bbc2': new _BrickBoxComponent2.default(0, delta * 4, 'UG'),
		'bbc3': new _BrickBoxComponent2.default(0, delta * 5, 'UG'),
		'bbc4': new _BrickBoxComponent2.default(0, delta * 6, 'UG'),
		'bbc5': new _BrickBoxComponent2.default(0, delta * 7, 'UG'),
		'bbc6': new _BrickBoxComponent2.default(0, delta * 8, 'UG'),
		'bbc7': new _BrickBoxComponent2.default(0, delta * 9, 'UG'),
		'bbc8': new _BrickBoxComponent2.default(0, delta * 10, 'UG'),
		'bbc9': new _BrickBoxComponent2.default(0, delta * 11, 'UG'),
		'bbc10': new _BrickBoxComponent2.default(0, delta * 12, 'UG'),
		'qbc1': new _QuestionBoxComponent2.default(delta * 10, delta * 9, 'UG'),
		'qbc2': new _QuestionBoxComponent2.default(delta * 11, delta * 9, 'UG'),
		'qbc3': new _QuestionBoxComponent2.default(delta * 12, delta * 9, 'UG'),
		'qbc4': new _QuestionBoxComponent2.default(delta * 13, delta * 9, 'UG'),
		'qbc5': new _QuestionBoxComponent2.default(delta * 14, delta * 9, 'UG'),
		'ttc1': new _TriangleBoxComponent2.default(delta * 17, delta * 12),
		'ttc2': new _TriangleBoxComponent2.default(delta * 19, delta * 12),
		'ttc3': new _TriangleBoxComponent2.default(delta * 19, delta * 11),
		'ttc4': new _TriangleBoxComponent2.default(delta * 21, delta * 12),
		'ttc5': new _TriangleBoxComponent2.default(delta * 21, delta * 11),
		'ttc6': new _TriangleBoxComponent2.default(delta * 21, delta * 10),
		'ttc7': new _TriangleBoxComponent2.default(delta * 23, delta * 10),
		'ttc8': new _TriangleBoxComponent2.default(delta * 23, delta * 11),
		'ttc9': new _TriangleBoxComponent2.default(delta * 23, delta * 12),
		'ttc10': new _TriangleBoxComponent2.default(delta * 23, delta * 9),
		'ttc11': new _TriangleBoxComponent2.default(delta * 25, delta * 9),
		'ttc12': new _TriangleBoxComponent2.default(delta * 25, delta * 10),
		'ttc13': new _TriangleBoxComponent2.default(delta * 25, delta * 11),
		'ttc14': new _TriangleBoxComponent2.default(delta * 25, delta * 12),
		'ttc15': new _TriangleBoxComponent2.default(delta * 27, delta * 10),
		'ttc16': new _TriangleBoxComponent2.default(delta * 27, delta * 11),
		'ttc17': new _TriangleBoxComponent2.default(delta * 27, delta * 12),
		'ttc18': new _TriangleBoxComponent2.default(delta * 31, delta * 10),
		'ttc19': new _TriangleBoxComponent2.default(delta * 31, delta * 11),
		'ttc20': new _TriangleBoxComponent2.default(delta * 31, delta * 12),
		'ttc21': new _TriangleBoxComponent2.default(delta * 33, delta * 11),
		'ttc22': new _TriangleBoxComponent2.default(delta * 33, delta * 12),
		'bbc11': new _BrickBoxComponent2.default(delta * 6, delta * 2, 'UG'),
		'bbc12': new _BrickBoxComponent2.default(delta * 7, delta * 2, 'UG'),
		'bbc13': new _BrickBoxComponent2.default(delta * 8, delta * 2, 'UG'),
		'bbc14': new _BrickBoxComponent2.default(delta * 9, delta * 2, 'UG'),
		'bbc15': new _BrickBoxComponent2.default(delta * 10, delta * 2, 'UG'),
		'bbc16': new _BrickBoxComponent2.default(delta * 11, delta * 2, 'UG'),
		'bbc17': new _BrickBoxComponent2.default(delta * 12, delta * 2, 'UG'),
		'bbc18': new _BrickBoxComponent2.default(delta * 13, delta * 2, 'UG'),
		'bbc19': new _BrickBoxComponent2.default(delta * 14, delta * 2, 'UG'),
		'bbc20': new _BrickBoxComponent2.default(delta * 15, delta * 2, 'UG'),
		'bbc21': new _BrickBoxComponent2.default(delta * 16, delta * 2, 'UG'),
		'bbc22': new _BrickBoxComponent2.default(delta * 17, delta * 2, 'UG'),
		'bbc23': new _BrickBoxComponent2.default(delta * 18, delta * 2, 'UG'),
		'bbc24': new _BrickBoxComponent2.default(delta * 19, delta * 2, 'UG'),
		'bbc25': new _BrickBoxComponent2.default(delta * 20, delta * 2, 'UG'),
		'bbc26': new _BrickBoxComponent2.default(delta * 21, delta * 2, 'UG'),
		'bbc27': new _BrickBoxComponent2.default(delta * 22, delta * 2, 'UG'),
		'bbc28': new _BrickBoxComponent2.default(delta * 23, delta * 2, 'UG'),
		'bbc29': new _BrickBoxComponent2.default(delta * 24, delta * 2, 'UG'),
		'bbc30': new _BrickBoxComponent2.default(delta * 25, delta * 2, 'UG'),
		'bbc31': new _BrickBoxComponent2.default(delta * 26, delta * 2, 'UG'),
		'bbc32': new _BrickBoxComponent2.default(delta * 27, delta * 2, 'UG'),
		'bbc33': new _BrickBoxComponent2.default(delta * 28, delta * 2, 'UG'),
		'bbc34': new _BrickBoxComponent2.default(delta * 29, delta * 2, 'UG'),
		'bbc35': new _BrickBoxComponent2.default(delta * 30, delta * 2, 'UG'),
		'bbc36': new _BrickBoxComponent2.default(delta * 31, delta * 2, 'UG'),
		'bbc37': new _BrickBoxComponent2.default(delta * 32, delta * 2, 'UG'),
		'bbc38': new _BrickBoxComponent2.default(delta * 33, delta * 2, 'UG'),
		'bbc39': new _BrickBoxComponent2.default(delta * 34, delta * 2, 'UG'),
		'bbc40': new _BrickBoxComponent2.default(delta * 29, delta * 8, 'UG'),
		'bbc41': new _BrickBoxComponent2.default(delta * 35, delta * 2, 'UG'),
		'bbc42': new _BrickBoxComponent2.default(delta * 36, delta * 2, 'UG'),
		'bbc43': new _BrickBoxComponent2.default(delta * 37, delta * 2, 'UG'),
		'bbc44': new _BrickBoxComponent2.default(delta * 38, delta * 2, 'UG'),
		'bbc45': new _BrickBoxComponent2.default(delta * 39, delta * 2, 'UG'),
		'bbc46': new _BrickBoxComponent2.default(delta * 40, delta * 2, 'UG'),
		'bbc47': new _BrickBoxComponent2.default(delta * 41, delta * 2, 'UG'),
		'bbc48': new _BrickBoxComponent2.default(delta * 42, delta * 2, 'UG'),
		'bbc49': new _BrickBoxComponent2.default(delta * 43, delta * 2, 'UG'),
		'bbc50': new _BrickBoxComponent2.default(delta * 44, delta * 2, 'UG'),
		'bbc51': new _BrickBoxComponent2.default(delta * 45, delta * 2, 'UG'),
		'bbc52': new _BrickBoxComponent2.default(delta * 46, delta * 2, 'UG'),
		'bbc53': new _BrickBoxComponent2.default(delta * 47, delta * 2, 'UG'),
		'bbc54': new _BrickBoxComponent2.default(delta * 48, delta * 2, 'UG'),
		'bbc55': new _BrickBoxComponent2.default(delta * 49, delta * 2, 'UG'),
		'bbc56': new _BrickBoxComponent2.default(delta * 39, delta * 7, 'UG'),
		'bbc57': new _BrickBoxComponent2.default(delta * 39, delta * 8, 'UG'),
		'bbc58': new _BrickBoxComponent2.default(delta * 39, delta * 9, 'UG'),
		'bbc59': new _BrickBoxComponent2.default(delta * 40, delta * 9, 'UG'),
		'bbc60': new _BrickBoxComponent2.default(delta * 41, delta * 9, 'UG'),
		'bbc61': new _BrickBoxComponent2.default(delta * 41, delta * 8, 'UG'),
		'bbc62': new _BrickBoxComponent2.default(delta * 41, delta * 7, 'UG'),
		'bbc63': new _BrickBoxComponent2.default(delta * 42, delta * 7, 'UG'),
		'bbc64': new _BrickBoxComponent2.default(delta * 43, delta * 7, 'UG'),
		'bbc65': new _BrickBoxComponent2.default(delta * 44, delta * 7, 'UG'),
		'bbc66': new _BrickBoxComponent2.default(delta * 44, delta * 8, 'UG'),
		'bbc67': new _BrickBoxComponent2.default(delta * 44, delta * 9, 'UG'),
		'bbc68': new _BrickBoxComponent2.default(delta * 45, delta * 9, 'UG'),
		'bbc69': new _BrickBoxComponent2.default(delta * 46, delta * 9, 'UG'),
		'bbc70': new _BrickBoxComponent2.default(delta * 46, delta * 8, 'UG'),
		'bbc71': new _BrickBoxComponent2.default(delta * 46, delta * 7, 'UG'),
		'bbc72': new _BrickBoxComponent2.default(delta * 50, delta * 2, 'UG'),
		'bbc73': new _BrickBoxComponent2.default(delta * 51, delta * 2, 'UG'),
		'bbc74': new _BrickBoxComponent2.default(delta * 51, delta * 2, 'UG'),
		'bbc75': new _BrickBoxComponent2.default(delta * 52, delta * 2, 'UG'),
		'bbc76': new _BrickBoxComponent2.default(delta * 53, delta * 2, 'UG'),
		'bbc77': new _BrickBoxComponent2.default(delta * 54, delta * 2, 'UG'),
		'bbc78': new _BrickBoxComponent2.default(delta * 55, delta * 2, 'UG'),
		'bbc79': new _BrickBoxComponent2.default(delta * 56, delta * 2, 'UG'),
		'bbc80': new _BrickBoxComponent2.default(delta * 57, delta * 2, 'UG'),
		'bbc81': new _BrickBoxComponent2.default(delta * 58, delta * 2, 'UG'),
		'bbc82': new _BrickBoxComponent2.default(delta * 59, delta * 2, 'UG'),
		'bbc83': new _BrickBoxComponent2.default(delta * 60, delta * 2, 'UG'),
		'bbc84': new _BrickBoxComponent2.default(delta * 61, delta * 2, 'UG'),
		'bbc85': new _BrickBoxComponent2.default(delta * 62, delta * 2, 'UG'),
		'bbc86': new _BrickBoxComponent2.default(delta * 63, delta * 2, 'UG'),
		'bbc87': new _BrickBoxComponent2.default(delta * 64, delta * 2, 'UG'),
		'bbc88': new _BrickBoxComponent2.default(delta * 65, delta * 2, 'UG'),
		'bbc89': new _BrickBoxComponent2.default(delta * 55, delta * 3, 'UG'),
		'bbc90': new _BrickBoxComponent2.default(delta * 54, delta * 3, 'UG'),
		'bbc91': new _BrickBoxComponent2.default(delta * 54, delta * 4, 'UG'),
		'bbc92': new _BrickBoxComponent2.default(delta * 55, delta * 4, 'UG'),
		'bbc93': new _BrickBoxComponent2.default(delta * 53, delta * 5, 'UG'),
		'bbc94': new _BrickBoxComponent2.default(delta * 52, delta * 5, 'UG'),
		'bbc95': new _BrickBoxComponent2.default(delta * 52, delta * 6, 'UG'),
		'bbc96': new _BrickBoxComponent2.default(delta * 53, delta * 6, 'UG'),
		'bbc97': new _BrickBoxComponent2.default(delta * 52, delta * 7, 'UG'),
		'bbc98': new _BrickBoxComponent2.default(delta * 53, delta * 7, 'UG'),
		'bbc99': new _BrickBoxComponent2.default(delta * 52, delta * 8, 'UG'),
		'bbc100': new _BrickBoxComponent2.default(delta * 53, delta * 8, 'UG'),
		'bbc101': new _BrickBoxComponent2.default(delta * 53, delta * 9, 'UG'),
		'bbc102': new _BrickBoxComponent2.default(delta * 52, delta * 9, 'UG'),
		'bbc103': new _BrickBoxComponent2.default(delta * 54, delta * 9, 'UG'),
		'bbc104': new _BrickBoxComponent2.default(delta * 55, delta * 9, 'UG'),
		'bbc105': new _BrickBoxComponent2.default(delta * 55, delta * 10, 'UG'),
		'bbc106': new _BrickBoxComponent2.default(delta * 54, delta * 10, 'UG'),
		'bbc107': new _BrickBoxComponent2.default(delta * 54, delta * 11, 'UG'),
		'bbc108': new _BrickBoxComponent2.default(delta * 55, delta * 11, 'UG'),
		'bbc109': new _BrickBoxComponent2.default(delta * 58, delta * 3, 'UG'),
		'bbc110': new _BrickBoxComponent2.default(delta * 58, delta * 4, 'UG'),
		'bbc111': new _BrickBoxComponent2.default(delta * 59, delta * 3, 'UG'),
		'bbc112': new _BrickBoxComponent2.default(delta * 59, delta * 4, 'UG'),
		'bbc113': new _BrickBoxComponent2.default(delta * 60, delta * 3, 'UG'),
		'bbc114': new _BrickBoxComponent2.default(delta * 60, delta * 4, 'UG'),
		'bbc115': new _BrickBoxComponent2.default(delta * 61, delta * 3, 'UG'),
		'bbc116': new _BrickBoxComponent2.default(delta * 61, delta * 4, 'UG'),
		'bbc117': new _BrickBoxComponent2.default(delta * 62, delta * 3, 'UG'),
		'bbc118': new _BrickBoxComponent2.default(delta * 62, delta * 4, 'UG'),
		'bbc119': new _BrickBoxComponent2.default(delta * 63, delta * 3, 'UG'),
		'bbc120': new _BrickBoxComponent2.default(delta * 63, delta * 4, 'UG'),
		'bbc121': new _BrickBoxComponent2.default(delta * 62, delta * 5, 'UG'),
		'bbc122': new _BrickBoxComponent2.default(delta * 62, delta * 6, 'UG'),
		'bbc123': new _BrickBoxComponent2.default(delta * 62, delta * 7, 'UG'),
		'bbc124': new _BrickBoxComponent2.default(delta * 62, delta * 8, 'UG'),
		'bbc125': new _BrickBoxComponent2.default(delta * 62, delta * 9, 'UG'),
		'bbc126': new _BrickBoxComponent2.default(delta * 63, delta * 9, 'UG'),
		'bbc127': new _BrickBoxComponent2.default(delta * 63, delta * 8, 'UG'),
		'bbc128': new _BrickBoxComponent2.default(delta * 63, delta * 7, 'UG'),
		'bbc129': new _BrickBoxComponent2.default(delta * 63, delta * 6, 'UG'),
		'bbc130': new _BrickBoxComponent2.default(delta * 63, delta * 5, 'UG'),
		'bbc131': new _BrickBoxComponent2.default(delta * 61, delta * 9, 'UG'),
		'bbc132': new _BrickBoxComponent2.default(delta * 60, delta * 9, 'UG'),
		'bbc133': new _BrickBoxComponent2.default(delta * 59, delta * 9, 'UG'),
		'bbc134': new _BrickBoxComponent2.default(delta * 58, delta * 9, 'UG'),
		'bbc135': new _BrickBoxComponent2.default(delta * 66, delta * 2, 'UG'),
		'bbc136': new _BrickBoxComponent2.default(delta * 67, delta * 2, 'UG'),
		'bbc137': new _BrickBoxComponent2.default(delta * 68, delta * 2, 'UG'),
		'bbc138': new _BrickBoxComponent2.default(delta * 69, delta * 2, 'UG'),
		'bbc139': new _BrickBoxComponent2.default(delta * 70, delta * 2, 'UG'),
		'bbc140': new _BrickBoxComponent2.default(delta * 71, delta * 2, 'UG'),
		'bbc141': new _BrickBoxComponent2.default(delta * 72, delta * 2, 'UG'),
		'bbc142': new _BrickBoxComponent2.default(delta * 73, delta * 2, 'UG'),
		'bbc143': new _BrickBoxComponent2.default(delta * 74, delta * 2, 'UG'),
		'bbc144': new _BrickBoxComponent2.default(delta * 75, delta * 2, 'UG'),
		'bbc145': new _BrickBoxComponent2.default(delta * 76, delta * 2, 'UG'),
		'bbc146': new _BrickBoxComponent2.default(delta * 77, delta * 2, 'UG'),
		'bbc147': new _BrickBoxComponent2.default(delta * 78, delta * 2, 'UG'),
		'bbc148': new _BrickBoxComponent2.default(delta * 79, delta * 2, 'UG'),
		'bbc149': new _BrickBoxComponent2.default(delta * 80, delta * 2, 'UG'),
		'bbc150': new _BrickBoxComponent2.default(delta * 81, delta * 2, 'UG'),
		'bbc151': new _BrickBoxComponent2.default(delta * 69, delta * 3, 'UG'),
		'bbc152': new _BrickBoxComponent2.default(delta * 69, delta * 4, 'UG'),
		'bbc153': new _BrickBoxComponent2.default(delta * 68, delta * 3, 'UG'),
		'bbc154': new _BrickBoxComponent2.default(delta * 68, delta * 4, 'UG'),
		'bbc155': new _BrickBoxComponent2.default(delta * 67, delta * 3, 'UG'),
		'bbc156': new _BrickBoxComponent2.default(delta * 67, delta * 4, 'UG'),
		'bbc157': new _BrickBoxComponent2.default(delta * 66, delta * 3, 'UG'),
		'bbc158': new _BrickBoxComponent2.default(delta * 66, delta * 4, 'UG'),
		'bbc159': new _BrickBoxComponent2.default(delta * 67, delta * 5, 'UG'),
		'bbc160': new _BrickBoxComponent2.default(delta * 67, delta * 6, 'UG'),
		'bbc161': new _BrickBoxComponent2.default(delta * 67, delta * 7, 'UG'),
		'bbc162': new _BrickBoxComponent2.default(delta * 67, delta * 8, 'UG'),
		'bbc163': new _BrickBoxComponent2.default(delta * 67, delta * 9, 'UG'),
		'bbc164': new _BrickBoxComponent2.default(delta * 68, delta * 9, 'UG'),
		'bbc165': new _BrickBoxComponent2.default(delta * 69, delta * 9, 'UG'),
		'bbc166': new _BrickBoxComponent2.default(delta * 69, delta * 8, 'UG'),
		'bbc167': new _BrickBoxComponent2.default(delta * 72, delta * 9, 'UG'),
		'bbc168': new _BrickBoxComponent2.default(delta * 73, delta * 9, 'UG'),
		'bbc169': new _BrickBoxComponent2.default(delta * 72, delta * 8, 'UG'),
		'bbc170': new _BrickBoxComponent2.default(delta * 73, delta * 8, 'UG'),
		'bbc171': new _BrickBoxComponent2.default(delta * 72, delta * 7, 'UG'),
		'bbc172': new _BrickBoxComponent2.default(delta * 73, delta * 7, 'UG'),
		'bbc173': new _BrickBoxComponent2.default(delta * 72, delta * 6, 'UG'),
		'bbc174': new _BrickBoxComponent2.default(delta * 73, delta * 6, 'UG'),
		'bbc175': new _BrickBoxComponent2.default(delta * 72, delta * 5, 'UG'),
		'bbc176': new _BrickBoxComponent2.default(delta * 73, delta * 5, 'UG'),
		'bbc177': new _BrickBoxComponent2.default(delta * 76, delta * 3, 'UG'),
		'bbc178': new _BrickBoxComponent2.default(delta * 77, delta * 3, 'UG'),
		'bbc179': new _BrickBoxComponent2.default(delta * 78, delta * 3, 'UG'),
		'bbc180': new _BrickBoxComponent2.default(delta * 79, delta * 3, 'UG'),
		'bbc181': new _BrickBoxComponent2.default(delta * 79, delta * 4, 'UG'),
		'bbc182': new _BrickBoxComponent2.default(delta * 78, delta * 4, 'UG'),
		'bbc183': new _BrickBoxComponent2.default(delta * 77, delta * 4, 'UG'),
		'bbc184': new _BrickBoxComponent2.default(delta * 76, delta * 4, 'UG'),
		'bbc185': new _BrickBoxComponent2.default(delta * 76, delta * 9, 'UG'),
		'bbc186': new _BrickBoxComponent2.default(delta * 77, delta * 9, 'UG'),
		'bbc187': new _BrickBoxComponent2.default(delta * 78, delta * 9, 'UG'),
		'bbc188': new _BrickBoxComponent2.default(delta * 79, delta * 9, 'UG'),
		'bbc189': new _BrickBoxComponent2.default(delta * 82, delta * 2, 'UG'),
		'bbc190': new _BrickBoxComponent2.default(delta * 83, delta * 2, 'UG'),
		'bbc191': new _BrickBoxComponent2.default(delta * 84, delta * 2, 'UG'),
		'bbc192': new _BrickBoxComponent2.default(delta * 85, delta * 2, 'UG'),
		'bbc193': new _BrickBoxComponent2.default(delta * 86, delta * 2, 'UG'),
		'bbc194': new _BrickBoxComponent2.default(delta * 87, delta * 2, 'UG'),
		'bbc195': new _BrickBoxComponent2.default(delta * 88, delta * 2, 'UG'),
		'bbc196': new _BrickBoxComponent2.default(delta * 89, delta * 2, 'UG'),
		'bbc197': new _BrickBoxComponent2.default(delta * 90, delta * 2, 'UG'),
		'bbc198': new _BrickBoxComponent2.default(delta * 91, delta * 2, 'UG'),
		'bbc199': new _BrickBoxComponent2.default(delta * 92, delta * 2, 'UG'),
		'bbc200': new _BrickBoxComponent2.default(delta * 93, delta * 2, 'UG'),
		'bbc201': new _BrickBoxComponent2.default(delta * 94, delta * 2, 'UG'),
		'bbc202': new _BrickBoxComponent2.default(delta * 95, delta * 2, 'UG'),
		'bbc203': new _BrickBoxComponent2.default(delta * 96, delta * 2, 'UG'),
		'bbc204': new _BrickBoxComponent2.default(delta * 97, delta * 2, 'UG'),
		'bbc205': new _BrickBoxComponent2.default(delta * 98, delta * 2, 'UG'),
		'bbc206': new _BrickBoxComponent2.default(delta * 99, delta * 2, 'UG'),
		'bbc207': new _BrickBoxComponent2.default(delta * 100, delta * 2, 'UG'),
		'bbc208': new _BrickBoxComponent2.default(delta * 84, delta * 7, 'UG'),
		'bbc209': new _BrickBoxComponent2.default(delta * 84, delta * 8, 'UG'),
		'bbc210': new _BrickBoxComponent2.default(delta * 85, delta * 8, 'UG'),
		'bbc211': new _BrickBoxComponent2.default(delta * 86, delta * 8, 'UG'),
		'bbc212': new _BrickBoxComponent2.default(delta * 87, delta * 8, 'UG'),
		'bbc213': new _BrickBoxComponent2.default(delta * 88, delta * 8, 'UG'),
		'bbc214': new _BrickBoxComponent2.default(delta * 89, delta * 8, 'UG'),
		'bbc215': new _BrickBoxComponent2.default(delta * 85, delta * 7, 'UG'),
		'bbc216': new _BrickBoxComponent2.default(delta * 86, delta * 7, 'UG'),
		'bbc217': new _BrickBoxComponent2.default(delta * 87, delta * 7, 'UG'),
		'bbc218': new _BrickBoxComponent2.default(delta * 88, delta * 7, 'UG'),
		'bbc219': new _BrickBoxComponent2.default(delta * 89, delta * 7, 'UG'),
		'bbc220': new _BrickBoxComponent2.default(delta * 101, delta * 2, 'UG'),
		'bbc221': new _BrickBoxComponent2.default(delta * 102, delta * 2, 'UG'),
		'bbc222': new _BrickBoxComponent2.default(delta * 103, delta * 2, 'UG'),
		'bbc223': new _BrickBoxComponent2.default(delta * 104, delta * 2, 'UG'),
		'bbc224': new _BrickBoxComponent2.default(delta * 105, delta * 2, 'UG'),
		'bbc225': new _BrickBoxComponent2.default(delta * 106, delta * 2, 'UG'),
		'bbc226': new _BrickBoxComponent2.default(delta * 107, delta * 2, 'UG'),
		'bbc227': new _BrickBoxComponent2.default(delta * 108, delta * 2, 'UG'),
		'bbc228': new _BrickBoxComponent2.default(delta * 109, delta * 2, 'UG'),
		'bbc229': new _BrickBoxComponent2.default(delta * 110, delta * 2, 'UG'),
		'bbc230': new _BrickBoxComponent2.default(delta * 111, delta * 2, 'UG'),
		'bbc231': new _BrickBoxComponent2.default(delta * 112, delta * 2, 'UG'),
		'bbc232': new _BrickBoxComponent2.default(delta * 113, delta * 2, 'UG'),
		'bbc233': new _BrickBoxComponent2.default(delta * 114, delta * 2, 'UG'),
		'bbc234': new _BrickBoxComponent2.default(delta * 115, delta * 2, 'UG'),
		'bbc235': new _BrickBoxComponent2.default(delta * 116, delta * 2, 'UG'),
		'bbc236': new _BrickBoxComponent2.default(delta * 117, delta * 2, 'UG'),
		'bbc237': new _BrickBoxComponent2.default(delta * 118, delta * 2, 'UG'),
		'bbc238': new _BrickBoxComponent2.default(delta * 119, delta * 2, 'UG'),
		'bbc239': new _BrickBoxComponent2.default(delta * 120, delta * 2, 'UG'),
		'bbc240': new _BrickBoxComponent2.default(delta * 121, delta * 2, 'UG'),
		'bbc241': new _BrickBoxComponent2.default(delta * 122, delta * 2, 'UG'),
		'bbc242': new _BrickBoxComponent2.default(delta * 123, delta * 2, 'UG'),
		'bbc243': new _BrickBoxComponent2.default(delta * 124, delta * 2, 'UG'),
		'bbc244': new _BrickBoxComponent2.default(delta * 125, delta * 2, 'UG'),
		'bbc245': new _BrickBoxComponent2.default(delta * 126, delta * 2, 'UG'),
		'bbc246': new _BrickBoxComponent2.default(delta * 127, delta * 2, 'UG'),
		'bbc247': new _BrickBoxComponent2.default(delta * 128, delta * 2, 'UG'),
		'bbc248': new _BrickBoxComponent2.default(delta * 129, delta * 2, 'UG'),
		'bbc249': new _BrickBoxComponent2.default(delta * 130, delta * 2, 'UG'),
		'bbc250': new _BrickBoxComponent2.default(delta * 131, delta * 2, 'UG'),
		'bbc251': new _BrickBoxComponent2.default(delta * 132, delta * 2, 'UG'),
		'bbc252': new _BrickBoxComponent2.default(delta * 133, delta * 2, 'UG'),
		'bbc253': new _BrickBoxComponent2.default(delta * 134, delta * 2, 'UG'),
		'bbc254': new _BrickBoxComponent2.default(delta * 135, delta * 2, 'UG'),
		'bbc255': new _BrickBoxComponent2.default(delta * 136, delta * 2, 'UG'),
		'bbc256': new _BrickBoxComponent2.default(delta * 137, delta * 2, 'UG'),
		'bbc257': new _BrickBoxComponent2.default(delta * 122, delta * 10, 'UG'),
		'bbc258': new _BrickBoxComponent2.default(delta * 122, delta * 11, 'UG'),
		'bbc259': new _BrickBoxComponent2.default(delta * 122, delta * 12, 'UG'),
		'bbc260': new _BrickBoxComponent2.default(delta * 123, delta * 12, 'UG'),
		'bbc261': new _BrickBoxComponent2.default(delta * 123, delta * 11, 'UG'),
		'bbc262': new _BrickBoxComponent2.default(delta * 123, delta * 10, 'UG'),
		'pbc1': new _PipeBoxComponent2.default(delta * 115, delta * 11, [1, 1]),
		'pbc2': new _PipeBoxComponent2.default(delta * 109, delta * 9, [3, 1]),
		'pbc3': new _PipeBoxComponent2.default(delta * 103, delta * 10, [2, 1], true, ['L12', 'B1']),
		'ttc23': new _TriangleBoxComponent2.default(delta * 137, delta * 12),
		'ttc24': new _TriangleBoxComponent2.default(delta * 136, delta * 12),
		'ttc25': new _TriangleBoxComponent2.default(delta * 135, delta * 12),
		'ttc26': new _TriangleBoxComponent2.default(delta * 134, delta * 12),
		'ttc27': new _TriangleBoxComponent2.default(delta * 133, delta * 12),
		'ttc28': new _TriangleBoxComponent2.default(delta * 134, delta * 11),
		'ttc29': new _TriangleBoxComponent2.default(delta * 135, delta * 11),
		'ttc30': new _TriangleBoxComponent2.default(delta * 136, delta * 11),
		'ttc31': new _TriangleBoxComponent2.default(delta * 137, delta * 11),
		'ttc32': new _TriangleBoxComponent2.default(delta * 137, delta * 10),
		'ttc33': new _TriangleBoxComponent2.default(delta * 137, delta * 9),
		'ttc34': new _TriangleBoxComponent2.default(delta * 136, delta * 9),
		'ttc35': new _TriangleBoxComponent2.default(delta * 136, delta * 10),
		'ttc36': new _TriangleBoxComponent2.default(delta * 135, delta * 10),
		'bbc263': new _BrickBoxComponent2.default(delta * 145, delta * 8, 'UG'),
		'bbc264': new _BrickBoxComponent2.default(delta * 146, delta * 8, 'UG'),
		'bbc265': new _BrickBoxComponent2.default(delta * 147, delta * 8, 'UG'),
		'bbc266': new _BrickBoxComponent2.default(delta * 148, delta * 8, 'UG'),
		'bbc267': new _BrickBoxComponent2.default(delta * 149, delta * 8, 'UG'),
		'bbc268': new _BrickBoxComponent2.default(delta * 150, delta * 8, 'UG'),
		'bbc269': new _BrickBoxComponent2.default(delta * 161, delta * 2, 'UG'),
		'bbc270': new _BrickBoxComponent2.default(delta * 162, delta * 2, 'UG'),
		'bbc271': new _BrickBoxComponent2.default(delta * 163, delta * 2, 'UG'),
		'bbc272': new _BrickBoxComponent2.default(delta * 164, delta * 2, 'UG'),
		'bbc273': new _BrickBoxComponent2.default(delta * 165, delta * 2, 'UG'),
		'bbc274': new _BrickBoxComponent2.default(delta * 166, delta * 2, 'UG'),
		'bbc275': new _BrickBoxComponent2.default(delta * 167, delta * 2, 'UG'),
		'bbc277': new _BrickBoxComponent2.default(delta * 170, delta * 2, 'UG'),
		'bbc278': new _BrickBoxComponent2.default(delta * 171, delta * 2, 'UG'),
		'bbc279': new _BrickBoxComponent2.default(delta * 172, delta * 2, 'UG'),
		'bbc280': new _BrickBoxComponent2.default(delta * 173, delta * 2, 'UG'),
		'bbc281': new _BrickBoxComponent2.default(delta * 174, delta * 2, 'UG'),
		'bbc282': new _BrickBoxComponent2.default(delta * 175, delta * 2, 'UG'),
		'bbc283': new _BrickBoxComponent2.default(delta * 176, delta * 2, 'UG'),
		'bbc284': new _BrickBoxComponent2.default(delta * 177, delta * 2, 'UG'),
		'bbc285': new _BrickBoxComponent2.default(delta * 178, delta * 2, 'UG'),
		'bbc286': new _BrickBoxComponent2.default(delta * 179, delta * 2, 'UG'),
		'bbc287': new _BrickBoxComponent2.default(delta * 180, delta * 2, 'UG'),
		'bbc288': new _BrickBoxComponent2.default(delta * 170, delta * 3, 'UG'),
		'bbc289': new _BrickBoxComponent2.default(delta * 171, delta * 3, 'UG'),
		'bbc290': new _BrickBoxComponent2.default(delta * 172, delta * 3, 'UG'),
		'bbc291': new _BrickBoxComponent2.default(delta * 173, delta * 3, 'UG'),
		'bbc292': new _BrickBoxComponent2.default(delta * 174, delta * 3, 'UG'),
		'bbc293': new _BrickBoxComponent2.default(delta * 175, delta * 3, 'UG'),
		'bbc294': new _BrickBoxComponent2.default(delta * 176, delta * 3, 'UG'),
		'bbc295': new _BrickBoxComponent2.default(delta * 170, delta * 4, 'UG'),
		'bbc296': new _BrickBoxComponent2.default(delta * 171, delta * 4, 'UG'),
		'bbc297': new _BrickBoxComponent2.default(delta * 172, delta * 4, 'UG'),
		'bbc298': new _BrickBoxComponent2.default(delta * 173, delta * 4, 'UG'),
		'bbc299': new _BrickBoxComponent2.default(delta * 174, delta * 4, 'UG'),
		'bbc300': new _BrickBoxComponent2.default(delta * 175, delta * 4, 'UG'),
		'bbc301': new _BrickBoxComponent2.default(delta * 176, delta * 4, 'UG'),
		'bbc302': new _BrickBoxComponent2.default(delta * 170, delta * 5, 'UG'),
		'bbc303': new _BrickBoxComponent2.default(delta * 171, delta * 5, 'UG'),
		'bbc304': new _BrickBoxComponent2.default(delta * 172, delta * 5, 'UG'),
		'bbc305': new _BrickBoxComponent2.default(delta * 173, delta * 5, 'UG'),
		'bbc306': new _BrickBoxComponent2.default(delta * 174, delta * 5, 'UG'),
		'bbc307': new _BrickBoxComponent2.default(delta * 175, delta * 5, 'UG'),
		'bbc308': new _BrickBoxComponent2.default(delta * 176, delta * 5, 'UG'),
		'bbc309': new _BrickBoxComponent2.default(delta * 170, delta * 6, 'UG'),
		'bbc310': new _BrickBoxComponent2.default(delta * 171, delta * 6, 'UG'),
		'bbc311': new _BrickBoxComponent2.default(delta * 172, delta * 6, 'UG'),
		'bbc312': new _BrickBoxComponent2.default(delta * 173, delta * 6, 'UG'),
		'bbc313': new _BrickBoxComponent2.default(delta * 174, delta * 6, 'UG'),
		'bbc314': new _BrickBoxComponent2.default(delta * 175, delta * 6, 'UG'),
		'bbc315': new _BrickBoxComponent2.default(delta * 176, delta * 6, 'UG'),
		'bbc316': new _BrickBoxComponent2.default(delta * 170, delta * 7, 'UG'),
		'bbc317': new _BrickBoxComponent2.default(delta * 171, delta * 7, 'UG'),
		'bbc318': new _BrickBoxComponent2.default(delta * 172, delta * 7, 'UG'),
		'bbc319': new _BrickBoxComponent2.default(delta * 173, delta * 7, 'UG'),
		'bbc320': new _BrickBoxComponent2.default(delta * 174, delta * 7, 'UG'),
		'bbc321': new _BrickBoxComponent2.default(delta * 175, delta * 7, 'UG'),
		'bbc322': new _BrickBoxComponent2.default(delta * 176, delta * 7, 'UG'),
		'bbc323': new _BrickBoxComponent2.default(delta * 170, delta * 8, 'UG'),
		'bbc324': new _BrickBoxComponent2.default(delta * 171, delta * 8, 'UG'),
		'bbc325': new _BrickBoxComponent2.default(delta * 172, delta * 8, 'UG'),
		'bbc326': new _BrickBoxComponent2.default(delta * 173, delta * 8, 'UG'),
		'bbc327': new _BrickBoxComponent2.default(delta * 174, delta * 8, 'UG'),
		'bbc328': new _BrickBoxComponent2.default(delta * 175, delta * 8, 'UG'),
		'bbc329': new _BrickBoxComponent2.default(delta * 176, delta * 8, 'UG'),
		'bbc330': new _BrickBoxComponent2.default(delta * 170, delta * 9, 'UG'),
		'bbc331': new _BrickBoxComponent2.default(delta * 171, delta * 9, 'UG'),
		'bbc332': new _BrickBoxComponent2.default(delta * 172, delta * 9, 'UG'),
		'bbc333': new _BrickBoxComponent2.default(delta * 173, delta * 9, 'UG'),
		'bbc334': new _BrickBoxComponent2.default(delta * 174, delta * 9, 'UG'),
		'bbc335': new _BrickBoxComponent2.default(delta * 175, delta * 9, 'UG'),
		'bbc336': new _BrickBoxComponent2.default(delta * 176, delta * 9, 'UG'),
		'bbc337': new _BrickBoxComponent2.default(delta * 170, delta * 10, 'UG'),
		'bbc338': new _BrickBoxComponent2.default(delta * 171, delta * 10, 'UG'),
		'bbc339': new _BrickBoxComponent2.default(delta * 172, delta * 10, 'UG'),
		'bbc340': new _BrickBoxComponent2.default(delta * 173, delta * 10, 'UG'),
		'bbc341': new _BrickBoxComponent2.default(delta * 174, delta * 10, 'UG'),
		'bbc342': new _BrickBoxComponent2.default(delta * 175, delta * 10, 'UG'),
		'bbc343': new _BrickBoxComponent2.default(delta * 176, delta * 10, 'UG'),
		'bbc344': new _BrickBoxComponent2.default(delta * 170, delta * 11, 'UG'),
		'bbc345': new _BrickBoxComponent2.default(delta * 171, delta * 11, 'UG'),
		'bbc346': new _BrickBoxComponent2.default(delta * 172, delta * 11, 'UG'),
		'bbc347': new _BrickBoxComponent2.default(delta * 173, delta * 11, 'UG'),
		'bbc348': new _BrickBoxComponent2.default(delta * 174, delta * 11, 'UG'),
		'bbc349': new _BrickBoxComponent2.default(delta * 175, delta * 11, 'UG'),
		'bbc350': new _BrickBoxComponent2.default(delta * 176, delta * 11, 'UG'),
		'bbc351': new _BrickBoxComponent2.default(delta * 170, delta * 12, 'UG'),
		'bbc352': new _BrickBoxComponent2.default(delta * 171, delta * 12, 'UG'),
		'bbc353': new _BrickBoxComponent2.default(delta * 172, delta * 12, 'UG'),
		'bbc354': new _BrickBoxComponent2.default(delta * 173, delta * 12, 'UG'),
		'bbc355': new _BrickBoxComponent2.default(delta * 174, delta * 12, 'UG'),
		'bbc356': new _BrickBoxComponent2.default(delta * 175, delta * 12, 'UG'),
		'bbc357': new _BrickBoxComponent2.default(delta * 176, delta * 12, 'UG'),
		'bbc358': new _BrickBoxComponent2.default(delta * 169, delta * 10, 'UG'),
		'bbc359': new _BrickBoxComponent2.default(delta * 168, delta * 10, 'UG'),
		'bbc360': new _BrickBoxComponent2.default(delta * 167, delta * 10, 'UG'),
		'bbc361': new _BrickBoxComponent2.default(delta * 166, delta * 10, 'UG'),
		'bbc362': new _BrickBoxComponent2.default(delta * 165, delta * 10, 'UG'),
		'bbc363': new _BrickBoxComponent2.default(delta * 164, delta * 10, 'UG'),
		'bbc364': new _BrickBoxComponent2.default(delta * 163, delta * 10, 'UG'),
		'bbc365': new _BrickBoxComponent2.default(delta * 162, delta * 10, 'UG'),
		'bbc366': new _BrickBoxComponent2.default(delta * 161, delta * 10, 'UG'),
		'bbc367': new _BrickBoxComponent2.default(delta * 160, delta * 10, 'UG'),
		'bbc368': new _BrickBoxComponent2.default(delta * 169, delta * 11, 'UG'),
		'bbc369': new _BrickBoxComponent2.default(delta * 168, delta * 11, 'UG'),
		'bbc370': new _BrickBoxComponent2.default(delta * 167, delta * 11, 'UG'),
		'bbc371': new _BrickBoxComponent2.default(delta * 166, delta * 11, 'UG'),
		'bbc372': new _BrickBoxComponent2.default(delta * 165, delta * 11, 'UG'),
		'bbc373': new _BrickBoxComponent2.default(delta * 164, delta * 11, 'UG'),
		'bbc374': new _BrickBoxComponent2.default(delta * 163, delta * 11, 'UG'),
		'bbc375': new _BrickBoxComponent2.default(delta * 162, delta * 11, 'UG'),
		'bbc376': new _BrickBoxComponent2.default(delta * 161, delta * 11, 'UG'),
		'bbc377': new _BrickBoxComponent2.default(delta * 160, delta * 11, 'UG'),
		'bbc378': new _BrickBoxComponent2.default(delta * 169, delta * 12, 'UG'),
		'bbc379': new _BrickBoxComponent2.default(delta * 168, delta * 12, 'UG'),
		'bbc380': new _BrickBoxComponent2.default(delta * 167, delta * 12, 'UG'),
		'bbc381': new _BrickBoxComponent2.default(delta * 166, delta * 12, 'UG'),
		'bbc382': new _BrickBoxComponent2.default(delta * 165, delta * 12, 'UG'),
		'bbc383': new _BrickBoxComponent2.default(delta * 164, delta * 12, 'UG'),
		'bbc384': new _BrickBoxComponent2.default(delta * 163, delta * 12, 'UG'),
		'bbc385': new _BrickBoxComponent2.default(delta * 162, delta * 12, 'UG'),
		'bbc386': new _BrickBoxComponent2.default(delta * 161, delta * 12, 'UG'),
		'bbc387': new _BrickBoxComponent2.default(delta * 160, delta * 12, 'UG'),
		'bbc388': new _BrickBoxComponent2.default(delta * 181, delta * 2, 'UG'),
		'bbc389': new _BrickBoxComponent2.default(delta * 182, delta * 2, 'UG'),
		'bbc390': new _BrickBoxComponent2.default(delta * 183, delta * 2, 'UG'),
		'bbc391': new _BrickBoxComponent2.default(delta * 184, delta * 2, 'UG'),
		'bbc392': new _BrickBoxComponent2.default(delta * 185, delta * 2, 'UG'),
		'bbc393': new _BrickBoxComponent2.default(delta * 186, delta * 2, 'UG'),
		'bbc394': new _BrickBoxComponent2.default(delta * 190, delta * 2, 'UG'),
		'bbc395': new _BrickBoxComponent2.default(delta * 190, delta * 3, 'UG'),
		'bbc396': new _BrickBoxComponent2.default(delta * 190, delta * 4, 'UG'),
		'bbc397': new _BrickBoxComponent2.default(delta * 190, delta * 5, 'UG'),
		'bbc398': new _BrickBoxComponent2.default(delta * 190, delta * 6, 'UG'),
		'bbc399': new _BrickBoxComponent2.default(delta * 190, delta * 7, 'UG'),
		'bbc400': new _BrickBoxComponent2.default(delta * 190, delta * 8, 'UG'),
		'bbc401': new _BrickBoxComponent2.default(delta * 190, delta * 9, 'UG'),
		'bbc402': new _BrickBoxComponent2.default(delta * 190, delta * 10, 'UG'),
		'bbc403': new _BrickBoxComponent2.default(delta * 190, delta * 11, 'UG'),
		'bbc404': new _BrickBoxComponent2.default(delta * 190, delta * 12, 'UG'),
		'bbc405': new _BrickBoxComponent2.default(delta * 191, delta * 12, 'UG'),
		'bbc406': new _BrickBoxComponent2.default(delta * 191, delta * 11, 'UG'),
		'bbc407': new _BrickBoxComponent2.default(delta * 191, delta * 10, 'UG'),
		'bbc408': new _BrickBoxComponent2.default(delta * 191, delta * 9, 'UG'),
		'bbc409': new _BrickBoxComponent2.default(delta * 191, delta * 8, 'UG'),
		'bbc410': new _BrickBoxComponent2.default(delta * 191, delta * 7, 'UG'),
		'bbc411': new _BrickBoxComponent2.default(delta * 191, delta * 6, 'UG'),
		'bbc412': new _BrickBoxComponent2.default(delta * 191, delta * 5, 'UG'),
		'bbc413': new _BrickBoxComponent2.default(delta * 191, delta * 4, 'UG'),
		'bbc414': new _BrickBoxComponent2.default(delta * 191, delta * 3, 'UG'),
		'bbc415': new _BrickBoxComponent2.default(delta * 191, delta * 2, 'UG'),
		'pbc4': new _PipeBoxComponent2.default(delta * 178, delta * 10, [2, 1], true, ['L41']),
		'pbc5': new _PipeBoxComponent2.default(delta * 182, delta * 10, [2, 1], true, ['L31']),
		'pbc6': new _PipeBoxComponent2.default(delta * 186, delta * 10, [2, 1], true, ['L21']),
		'pbc1p1': new _PipeBoxComponent2.default(delta * 166, delta * 8, [5, 1], true, ['L12B2', 'pbc1']),
		'pbc1p2': new _canvasComponent2.default((146 - 118) * 2, (417 - 321) * 2, _canvasComponent2.default.SPRITES.PSTF, delta * 168 + 4, delta * 2, 'sprite', 118, 321, 146 - 118, 417 - 321, 1),
		'fbc1': new _TransparentBoxComponent2.default(0, delta * 13, delta * 80, 64),
		'fbc2': new _TransparentBoxComponent2.default(delta * 83, delta * 13, delta * 37, 64),
		'fbc3': new _TransparentBoxComponent2.default(delta * 122, delta * 13, delta * 2, 64),
		'fbc4': new _TransparentBoxComponent2.default(delta * 126, delta * 13, delta * 12, 64),
		'fbc5': new _TransparentBoxComponent2.default(delta * 145, delta * 13, delta * 8, 64),
		'fbc6': new _TransparentBoxComponent2.default(delta * 160, delta * 13, delta * 32, 64),
		'container-platform-0': new _PlatformBoxComponent2.default(delta * 140 - delta / 4, delta * 1, 3, 0, 0, delta * 6),
		'container-platform-1': new _PlatformBoxComponent2.default(delta * 140 - delta / 4, delta * 7, 3, 0, 0, delta * 6),
		'container-platform-2': new _PlatformBoxComponent2.default(delta * 140 - delta / 4, delta * 13, 3, 0, 0, delta * 6),
		'container-platform-3': new _PlatformBoxComponent2.default(delta * 155 - delta / 4, delta * 9, 3, 1, 1, delta * 8),
		'container-platform-4': new _PlatformBoxComponent2.default(delta * 155 - delta / 4, delta * 1, 3, 1, 1, delta * 8),
		'controlpoint': new _ControlPointComponent2.default(delta * 180, -delta * 20, 1, delta * 22, _ControlPointComponent2.default.TYPES.WARPZONE),
		'warpzone-text-0': new _GraphicalTextContainer2.default('WELCOME TO WARP ZONE!', delta * 178 + delta / 2, delta * 6, 2, undefined, undefined, 0, false).makeBindable(),
		'warpzone-text-1': new _GraphicalTextContainer2.default('4', delta * 178 + delta / 2, delta * 9, 2, undefined, undefined, 0, false).makeBindable(),
		'warpzone-text-2': new _GraphicalTextContainer2.default('3', delta * 182 + delta / 2, delta * 9, 2, undefined, undefined, 0, false).makeBindable(),
		'warpzone-text-3': new _GraphicalTextContainer2.default('2', delta * 186 + delta / 2, delta * 9, 2, undefined, undefined, 0, false).makeBindable()
	};
};

exports.default = L12Container;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvasComponent = __webpack_require__(0);

var _canvasComponent2 = _interopRequireDefault(_canvasComponent);

var _misc = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var entries = Object.entries;

var PlatformBoxComponent = function () {
	function PlatformBoxComponent(posx, posy) {
		var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
		var direction = arguments[3];
		var group = arguments[4];
		var groupOffset = arguments[5];

		_classCallCheck(this, PlatformBoxComponent);

		var _ref = [64, 128, 16, 8, 16 * 2, 8 * 2, _canvasComponent2.default.SPRITES.C, 'platform-piece-', {}],
		    SX = _ref[0],
		    SY = _ref[1],
		    SW = _ref[2],
		    SH = _ref[3],
		    W = _ref[4],
		    H = _ref[5],
		    SPRITE = _ref[6],
		    PLATFORMPIECEPREFIX = _ref[7],
		    components = _ref[8];

		for (var i = 0, ppos = 0; i < size; ++i) {
			components['' + PLATFORMPIECEPREFIX + (0, _misc.randomizeNumber)()] = new _canvasComponent2.default(W, H, SPRITE, posx + ppos, posy, 'sprite', SX, SY, SW, SH, 1);
			ppos = ppos + W;
		}
		var _ref2 = [true, direction, group, groupOffset, H, components];
		this.bindable = _ref2[0];
		this.direction = _ref2[1];
		this.group = _ref2[2];
		this.groupOffset = _ref2[3];
		this.H = _ref2[4];
		this._components = _ref2[5];
	}

	_createClass(PlatformBoxComponent, [{
		key: 'animate',
		value: function animate(time, scene) {
			var _this = this;

			var DOWN = this.direction == 0,
			    UP = this.direction == 1,
			    playerComponentIdentifier = 'player';
			var group = this.group,
			    groupOffset = this.groupOffset;

			var entries_ = entries(this._components);
			var filterPlatformContainers = function filterPlatformContainers(group) {
				if (!_this.platformContainers) {
					var platformContainerIDRE = /^(container\-platform\-(\d+))$/;
					_this.platformContainers = scene.getAllBindings().filter(function (componentWrapper) {
						return platformContainerIDRE.test(componentWrapper.componentIdentifier);
					}).filter(function (componentWrapper) {
						return componentWrapper.component.group == group;
					}).map(function (componentWrapper) {
						return componentWrapper.component;
					});
				}
				return _this.platformContainers;
			};
			var placePlatformContainer = function placePlatformContainer(dy) {
				var add = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

				if (!_this.playerComponent) _this.playerComponent = scene.getBindedComponent(playerComponentIdentifier);
				var playerComponent = _this.playerComponent;

				for (var i = 0; i < entries_.length; i++) {
					if (add == false) entries_[i][1].posy = dy;
					if (add != false) entries_[i][1].posy = entries_[i][1].posy + dy;
				}
				if (add != false) playerComponent.moveWithAchievedPlatform(scene, _this._components, dy);
			};
			var dy = 1.5;
			var firstEntryPosy = entries_[0][1].posy;
			if (DOWN) {
				if (firstEntryPosy > _misc.CANVASSCENEH) {
					var _components = filterPlatformContainers(group);
					if (_components.length == 1) {
						placePlatformContainer(-this.H);
					} else {
						var topContainerPlatformPosy = undefined;
						for (var i = 0; i < _components.length; i++) {
							var containerPlatformPosy = entries(_components[i]._components)[0][1].posy;
							if (i == 0) topContainerPlatformPosy = containerPlatformPosy;else if (topContainerPlatformPosy > containerPlatformPosy) topContainerPlatformPosy = containerPlatformPosy;
						}
						placePlatformContainer(topContainerPlatformPosy - groupOffset);
					}
				}
			} else if (UP) {
				dy = -dy;
				if (firstEntryPosy + this.H < 0) {
					var _components2 = filterPlatformContainers(group);
					if (_components2.length == 1) {
						placePlatformContainer(_misc.CANVASSCENEH);
					} else {
						var bottomContainerPlatformPosy = undefined;
						for (var _i = 0; _i < _components2.length; _i++) {
							var _containerPlatformPosy = entries(_components2[_i]._components)[0][1].posy;
							if (_i == 0) bottomContainerPlatformPosy = _containerPlatformPosy;else if (bottomContainerPlatformPosy < _containerPlatformPosy) bottomContainerPlatformPosy = _containerPlatformPosy;
						}
						placePlatformContainer(bottomContainerPlatformPosy + groupOffset);
					}
				}
			}
			placePlatformContainer(dy, true);
		}
	}]);

	return PlatformBoxComponent;
}();

exports.default = PlatformBoxComponent;

/***/ })
/******/ ]);