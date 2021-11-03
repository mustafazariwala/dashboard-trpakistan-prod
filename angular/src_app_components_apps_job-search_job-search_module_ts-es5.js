(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_job-search_job-search_module_ts"], {
    /***/
    80729: function _(module, exports) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /**
      * Tween.js - Licensed under the MIT license
      * https://github.com/tweenjs/tween.js
      * ----------------------------------------------
      *
      * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
      * Thank you all, you're awesome!
      */


      var _Group = function _Group() {
        this._tweens = {};
        this._tweensAddedDuringUpdate = {};
      };

      _Group.prototype = {
        getAll: function getAll() {
          return Object.keys(this._tweens).map(function (tweenId) {
            return this._tweens[tweenId];
          }.bind(this));
        },
        removeAll: function removeAll() {
          this._tweens = {};
        },
        add: function add(tween) {
          this._tweens[tween.getId()] = tween;
          this._tweensAddedDuringUpdate[tween.getId()] = tween;
        },
        remove: function remove(tween) {
          delete this._tweens[tween.getId()];
          delete this._tweensAddedDuringUpdate[tween.getId()];
        },
        update: function update(time, preserve) {
          var tweenIds = Object.keys(this._tweens);

          if (tweenIds.length === 0) {
            return false;
          }

          time = time !== undefined ? time : TWEEN.now(); // Tweens are updated in "batches". If you add a new tween during an update, then the
          // new tween will be updated in the next batch.
          // If you remove a tween during an update, it may or may not be updated. However,
          // if the removed tween was added during the current batch, then it will not be updated.

          while (tweenIds.length > 0) {
            this._tweensAddedDuringUpdate = {};

            for (var i = 0; i < tweenIds.length; i++) {
              var tween = this._tweens[tweenIds[i]];

              if (tween && tween.update(time) === false) {
                tween._isPlaying = false;

                if (!preserve) {
                  delete this._tweens[tweenIds[i]];
                }
              }
            }

            tweenIds = Object.keys(this._tweensAddedDuringUpdate);
          }

          return true;
        }
      };
      var TWEEN = new _Group();
      TWEEN.Group = _Group;
      TWEEN._nextId = 0;

      TWEEN.nextId = function () {
        return TWEEN._nextId++;
      }; // Include a performance.now polyfill.
      // In node.js, use process.hrtime.


      if (typeof self === 'undefined' && typeof process !== 'undefined' && process.hrtime) {
        TWEEN.now = function () {
          var time = process.hrtime(); // Convert [seconds, nanoseconds] to milliseconds.

          return time[0] * 1000 + time[1] / 1000000;
        };
      } // In a browser, use self.performance.now if it is available.
      else if (typeof self !== 'undefined' && self.performance !== undefined && self.performance.now !== undefined) {
        // This must be bound, because directly assigning this function
        // leads to an invocation exception in Chrome.
        TWEEN.now = self.performance.now.bind(self.performance);
      } // Use Date.now if it is available.
      else if (Date.now !== undefined) {
        TWEEN.now = Date.now;
      } // Otherwise, use 'new Date().getTime()'.
      else {
        TWEEN.now = function () {
          return new Date().getTime();
        };
      }

      TWEEN.Tween = function (object, group) {
        this._object = object;
        this._valuesStart = {};
        this._valuesEnd = {};
        this._valuesStartRepeat = {};
        this._duration = 1000;
        this._repeat = 0;
        this._repeatDelayTime = undefined;
        this._yoyo = false;
        this._isPlaying = false;
        this._reversed = false;
        this._delayTime = 0;
        this._startTime = null;
        this._easingFunction = TWEEN.Easing.Linear.None;
        this._interpolationFunction = TWEEN.Interpolation.Linear;
        this._chainedTweens = [];
        this._onStartCallback = null;
        this._onStartCallbackFired = false;
        this._onUpdateCallback = null;
        this._onRepeatCallback = null;
        this._onCompleteCallback = null;
        this._onStopCallback = null;
        this._group = group || TWEEN;
        this._id = TWEEN.nextId();
      };

      TWEEN.Tween.prototype = {
        getId: function getId() {
          return this._id;
        },
        isPlaying: function isPlaying() {
          return this._isPlaying;
        },
        to: function to(properties, duration) {
          this._valuesEnd = properties;

          if (duration !== undefined) {
            this._duration = duration;
          }

          return this;
        },
        duration: function duration(d) {
          this._duration = d;
          return this;
        },
        start: function start(time) {
          this._group.add(this);

          this._isPlaying = true;
          this._onStartCallbackFired = false;
          this._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();
          this._startTime += this._delayTime;

          for (var property in this._valuesEnd) {
            // Check if an Array was provided as property value
            if (this._valuesEnd[property] instanceof Array) {
              if (this._valuesEnd[property].length === 0) {
                continue;
              } // Create a local copy of the Array with the start value at the front


              this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);
            } // If `to()` specifies a property that doesn't exist in the source object,
            // we should not set that property in the object


            if (this._object[property] === undefined) {
              continue;
            } // Save the starting value.


            this._valuesStart[property] = this._object[property];

            if (this._valuesStart[property] instanceof Array === false) {
              this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
            }

            this._valuesStartRepeat[property] = this._valuesStart[property] || 0;
          }

          return this;
        },
        stop: function stop() {
          if (!this._isPlaying) {
            return this;
          }

          this._group.remove(this);

          this._isPlaying = false;

          if (this._onStopCallback !== null) {
            this._onStopCallback(this._object);
          }

          this.stopChainedTweens();
          return this;
        },
        end: function end() {
          this.update(Infinity);
          return this;
        },
        stopChainedTweens: function stopChainedTweens() {
          for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
            this._chainedTweens[i].stop();
          }
        },
        group: function group(_group) {
          this._group = _group;
          return this;
        },
        delay: function delay(amount) {
          this._delayTime = amount;
          return this;
        },
        repeat: function repeat(times) {
          this._repeat = times;
          return this;
        },
        repeatDelay: function repeatDelay(amount) {
          this._repeatDelayTime = amount;
          return this;
        },
        yoyo: function yoyo(_yoyo) {
          this._yoyo = _yoyo;
          return this;
        },
        easing: function easing(easingFunction) {
          this._easingFunction = easingFunction;
          return this;
        },
        interpolation: function interpolation(interpolationFunction) {
          this._interpolationFunction = interpolationFunction;
          return this;
        },
        chain: function chain() {
          this._chainedTweens = arguments;
          return this;
        },
        onStart: function onStart(callback) {
          this._onStartCallback = callback;
          return this;
        },
        onUpdate: function onUpdate(callback) {
          this._onUpdateCallback = callback;
          return this;
        },
        onRepeat: function onRepeat(callback) {
          this._onRepeatCallback = callback;
          return this;
        },
        onComplete: function onComplete(callback) {
          this._onCompleteCallback = callback;
          return this;
        },
        onStop: function onStop(callback) {
          this._onStopCallback = callback;
          return this;
        },
        update: function update(time) {
          var property;
          var elapsed;
          var value;

          if (time < this._startTime) {
            return true;
          }

          if (this._onStartCallbackFired === false) {
            if (this._onStartCallback !== null) {
              this._onStartCallback(this._object);
            }

            this._onStartCallbackFired = true;
          }

          elapsed = (time - this._startTime) / this._duration;
          elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;
          value = this._easingFunction(elapsed);

          for (property in this._valuesEnd) {
            // Don't update properties that do not exist in the source object
            if (this._valuesStart[property] === undefined) {
              continue;
            }

            var start = this._valuesStart[property] || 0;
            var end = this._valuesEnd[property];

            if (end instanceof Array) {
              this._object[property] = this._interpolationFunction(end, value);
            } else {
              // Parses relative end values with start as base (e.g.: +10, -3)
              if (typeof end === 'string') {
                if (end.charAt(0) === '+' || end.charAt(0) === '-') {
                  end = start + parseFloat(end);
                } else {
                  end = parseFloat(end);
                }
              } // Protect against non numeric properties.


              if (typeof end === 'number') {
                this._object[property] = start + (end - start) * value;
              }
            }
          }

          if (this._onUpdateCallback !== null) {
            this._onUpdateCallback(this._object, elapsed);
          }

          if (elapsed === 1) {
            if (this._repeat > 0) {
              if (isFinite(this._repeat)) {
                this._repeat--;
              } // Reassign starting values, restart by making startTime = now


              for (property in this._valuesStartRepeat) {
                if (typeof this._valuesEnd[property] === 'string') {
                  this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
                }

                if (this._yoyo) {
                  var tmp = this._valuesStartRepeat[property];
                  this._valuesStartRepeat[property] = this._valuesEnd[property];
                  this._valuesEnd[property] = tmp;
                }

                this._valuesStart[property] = this._valuesStartRepeat[property];
              }

              if (this._yoyo) {
                this._reversed = !this._reversed;
              }

              if (this._repeatDelayTime !== undefined) {
                this._startTime = time + this._repeatDelayTime;
              } else {
                this._startTime = time + this._delayTime;
              }

              if (this._onRepeatCallback !== null) {
                this._onRepeatCallback(this._object);
              }

              return true;
            } else {
              if (this._onCompleteCallback !== null) {
                this._onCompleteCallback(this._object);
              }

              for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
                // Make the chained tweens start exactly at the time they should,
                // even if the `update()` method was called way past the duration of the tween
                this._chainedTweens[i].start(this._startTime + this._duration);
              }

              return false;
            }
          }

          return true;
        }
      };
      TWEEN.Easing = {
        Linear: {
          None: function None(k) {
            return k;
          }
        },
        Quadratic: {
          In: function In(k) {
            return k * k;
          },
          Out: function Out(k) {
            return k * (2 - k);
          },
          InOut: function InOut(k) {
            if ((k *= 2) < 1) {
              return 0.5 * k * k;
            }

            return -0.5 * (--k * (k - 2) - 1);
          }
        },
        Cubic: {
          In: function In(k) {
            return k * k * k;
          },
          Out: function Out(k) {
            return --k * k * k + 1;
          },
          InOut: function InOut(k) {
            if ((k *= 2) < 1) {
              return 0.5 * k * k * k;
            }

            return 0.5 * ((k -= 2) * k * k + 2);
          }
        },
        Quartic: {
          In: function In(k) {
            return k * k * k * k;
          },
          Out: function Out(k) {
            return 1 - --k * k * k * k;
          },
          InOut: function InOut(k) {
            if ((k *= 2) < 1) {
              return 0.5 * k * k * k * k;
            }

            return -0.5 * ((k -= 2) * k * k * k - 2);
          }
        },
        Quintic: {
          In: function In(k) {
            return k * k * k * k * k;
          },
          Out: function Out(k) {
            return --k * k * k * k * k + 1;
          },
          InOut: function InOut(k) {
            if ((k *= 2) < 1) {
              return 0.5 * k * k * k * k * k;
            }

            return 0.5 * ((k -= 2) * k * k * k * k + 2);
          }
        },
        Sinusoidal: {
          In: function In(k) {
            return 1 - Math.cos(k * Math.PI / 2);
          },
          Out: function Out(k) {
            return Math.sin(k * Math.PI / 2);
          },
          InOut: function InOut(k) {
            return 0.5 * (1 - Math.cos(Math.PI * k));
          }
        },
        Exponential: {
          In: function In(k) {
            return k === 0 ? 0 : Math.pow(1024, k - 1);
          },
          Out: function Out(k) {
            return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
          },
          InOut: function InOut(k) {
            if (k === 0) {
              return 0;
            }

            if (k === 1) {
              return 1;
            }

            if ((k *= 2) < 1) {
              return 0.5 * Math.pow(1024, k - 1);
            }

            return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
          }
        },
        Circular: {
          In: function In(k) {
            return 1 - Math.sqrt(1 - k * k);
          },
          Out: function Out(k) {
            return Math.sqrt(1 - --k * k);
          },
          InOut: function InOut(k) {
            if ((k *= 2) < 1) {
              return -0.5 * (Math.sqrt(1 - k * k) - 1);
            }

            return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
          }
        },
        Elastic: {
          In: function In(k) {
            if (k === 0) {
              return 0;
            }

            if (k === 1) {
              return 1;
            }

            return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
          },
          Out: function Out(k) {
            if (k === 0) {
              return 0;
            }

            if (k === 1) {
              return 1;
            }

            return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
          },
          InOut: function InOut(k) {
            if (k === 0) {
              return 0;
            }

            if (k === 1) {
              return 1;
            }

            k *= 2;

            if (k < 1) {
              return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
            }

            return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
          }
        },
        Back: {
          In: function In(k) {
            var s = 1.70158;
            return k * k * ((s + 1) * k - s);
          },
          Out: function Out(k) {
            var s = 1.70158;
            return --k * k * ((s + 1) * k + s) + 1;
          },
          InOut: function InOut(k) {
            var s = 1.70158 * 1.525;

            if ((k *= 2) < 1) {
              return 0.5 * (k * k * ((s + 1) * k - s));
            }

            return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
          }
        },
        Bounce: {
          In: function In(k) {
            return 1 - TWEEN.Easing.Bounce.Out(1 - k);
          },
          Out: function Out(k) {
            if (k < 1 / 2.75) {
              return 7.5625 * k * k;
            } else if (k < 2 / 2.75) {
              return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
            } else if (k < 2.5 / 2.75) {
              return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
            } else {
              return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
            }
          },
          InOut: function InOut(k) {
            if (k < 0.5) {
              return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
            }

            return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
          }
        }
      };
      TWEEN.Interpolation = {
        Linear: function Linear(v, k) {
          var m = v.length - 1;
          var f = m * k;
          var i = Math.floor(f);
          var fn = TWEEN.Interpolation.Utils.Linear;

          if (k < 0) {
            return fn(v[0], v[1], f);
          }

          if (k > 1) {
            return fn(v[m], v[m - 1], m - f);
          }

          return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
        },
        Bezier: function Bezier(v, k) {
          var b = 0;
          var n = v.length - 1;
          var pw = Math.pow;
          var bn = TWEEN.Interpolation.Utils.Bernstein;

          for (var i = 0; i <= n; i++) {
            b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
          }

          return b;
        },
        CatmullRom: function CatmullRom(v, k) {
          var m = v.length - 1;
          var f = m * k;
          var i = Math.floor(f);
          var fn = TWEEN.Interpolation.Utils.CatmullRom;

          if (v[0] === v[m]) {
            if (k < 0) {
              i = Math.floor(f = m * (1 + k));
            }

            return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
          } else {
            if (k < 0) {
              return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
            }

            if (k > 1) {
              return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
            }

            return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
          }
        },
        Utils: {
          Linear: function Linear(p0, p1, t) {
            return (p1 - p0) * t + p0;
          },
          Bernstein: function Bernstein(n, i) {
            var fc = TWEEN.Interpolation.Utils.Factorial;
            return fc(n) / fc(i) / fc(n - i);
          },
          Factorial: function () {
            var a = [1];
            return function (n) {
              var s = 1;

              if (a[n]) {
                return a[n];
              }

              for (var i = n; i > 1; i--) {
                s *= i;
              }

              a[n] = s;
              return s;
            };
          }(),
          CatmullRom: function CatmullRom(p0, p1, p2, p3, t) {
            var v0 = (p2 - p0) * 0.5;
            var v1 = (p3 - p1) * 0.5;
            var t2 = t * t;
            var t3 = t * t2;
            return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
          }
        }
      }; // UMD (Universal Module Definition)

      (function (root) {
        if (true) {
          // AMD
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return TWEEN;
          }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(this);
      /***/

    },

    /***/
    36069: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AngularMultiSelect": function AngularMultiSelect() {
          return (
            /* binding */
            _AngularMultiSelect
          );
        },

        /* harmony export */
        "AngularMultiSelectModule": function AngularMultiSelectModule() {
          return (
            /* binding */
            _AngularMultiSelectModule
          );
        },

        /* harmony export */
        "ClickOutsideDirective": function ClickOutsideDirective() {
          return (
            /* binding */
            _ClickOutsideDirective
          );
        },

        /* harmony export */
        "Item": function Item() {
          return (
            /* binding */
            _Item
          );
        },

        /* harmony export */
        "ListFilterPipe": function ListFilterPipe() {
          return (
            /* binding */
            _ListFilterPipe
          );
        },

        /* harmony export */
        "TemplateRenderer": function TemplateRenderer() {
          return (
            /* binding */
            _TemplateRenderer
          );
        },

        /* harmony export */
        "ɵa": function ɵa() {
          return (
            /* binding */
            DROPDOWN_CONTROL_VALUE_ACCESSOR
          );
        },

        /* harmony export */
        "ɵb": function ɵb() {
          return (
            /* binding */
            DROPDOWN_CONTROL_VALIDATION
          );
        },

        /* harmony export */
        "ɵc": function ɵc() {
          return (
            /* binding */
            ScrollDirective
          );
        },

        /* harmony export */
        "ɵd": function ɵd() {
          return (
            /* binding */
            styleDirective
          );
        },

        /* harmony export */
        "ɵe": function ɵe() {
          return (
            /* binding */
            setPosition
          );
        },

        /* harmony export */
        "ɵf": function ɵf() {
          return (
            /* binding */
            Badge
          );
        },

        /* harmony export */
        "ɵg": function ɵg() {
          return (
            /* binding */
            Search
          );
        },

        /* harmony export */
        "ɵh": function ɵh() {
          return (
            /* binding */
            CIcon
          );
        },

        /* harmony export */
        "ɵi": function ɵi() {
          return (
            /* binding */
            VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY
          );
        },

        /* harmony export */
        "ɵj": function ɵj() {
          return (
            /* binding */
            VirtualScrollerComponent
          );
        },

        /* harmony export */
        "ɵk": function ɵk() {
          return (
            /* binding */
            VirtualScrollerModule
          );
        },

        /* harmony export */
        "ɵm": function ɵm() {
          return (
            /* binding */
            DataService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @tweenjs/tween.js */
      80729);
      /* harmony import */


      var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      54395);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      87519);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      68307);
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      function CIcon__svg_svg_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CIcon__svg_svg_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "g", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CIcon__svg_svg_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "g", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CIcon__svg_svg_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "g", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CIcon__svg_svg_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = ["header"];
      var _c1 = ["container"];
      var _c2 = ["content"];
      var _c3 = ["invisiblePadding"];
      var _c4 = ["*"];
      var _c5 = ["searchInput"];
      var _c6 = ["selectedList"];
      var _c7 = ["dropdownList"];
      var _c8 = ["cuppaDropdown"];

      function AngularMultiSelect_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.settings.text);
        }
      }

      function AngularMultiSelect_span_6_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r29 = ctx.$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r29[ctx_r28.settings.labelKey], " ");
        }
      }

      function AngularMultiSelect_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AngularMultiSelect_span_6_span_1_Template, 2, 1, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.selectedItems)("ngForTrackBy", ctx_r3.trackByFn.bind(ctx_r3));
        }
      }

      function AngularMultiSelect_span_7_div_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r32[ctx_r34.settings.labelKey]);
        }
      }

      function AngularMultiSelect_span_7_div_1_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "c-templateRenderer", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r35.badgeTempl)("item", item_r32);
        }
      }

      function AngularMultiSelect_span_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AngularMultiSelect_span_7_div_1_span_1_Template, 2, 1, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AngularMultiSelect_span_7_div_1_span_2_Template, 2, 2, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AngularMultiSelect_span_7_div_1_Template_span_click_3_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);

            var item_r32 = restoredCtx.$implicit;
            var k_r33 = restoredCtx.index;

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            ctx_r38.onItemClick(item_r32, k_r33, $event);
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "c-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r31.badgeTempl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.badgeTempl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "remove");
        }
      }

      function AngularMultiSelect_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AngularMultiSelect_span_7_div_1_Template, 5, 3, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.selectedItems)("ngForTrackBy", ctx_r4.trackByFn.bind(ctx_r4));
        }
      }

      function AngularMultiSelect_div_8_div_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r41[ctx_r43.settings.labelKey]);
        }
      }

      function AngularMultiSelect_div_8_div_1_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "c-templateRenderer", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r44.badgeTempl)("item", item_r41);
        }
      }

      function AngularMultiSelect_div_8_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AngularMultiSelect_div_8_div_1_span_1_Template, 2, 1, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AngularMultiSelect_div_8_div_1_span_2_Template, 2, 2, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AngularMultiSelect_div_8_div_1_Template_span_click_3_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48);

            var item_r41 = restoredCtx.$implicit;
            var k_r42 = restoredCtx.index;

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            ctx_r47.onItemClick(item_r41, k_r42, $event);
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "c-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var k_r42 = ctx.index;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", k_r42 > ctx_r40.settings.badgeShowLimit - 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r40.badgeTempl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r40.badgeTempl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "remove");
        }
      }

      function AngularMultiSelect_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AngularMultiSelect_div_8_div_1_Template, 5, 4, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.selectedItems)("ngForTrackBy", ctx_r5.trackByFn.bind(ctx_r5));
        }
      }

      function AngularMultiSelect_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", (ctx_r6.selectedItems == null ? null : ctx_r6.selectedItems.length) - ctx_r6.settings.badgeShowLimit, "");
        }
      }

      function AngularMultiSelect_span_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AngularMultiSelect_span_10_Template_span_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            ctx_r49.clearSelection($event);
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "c-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "remove");
        }
      }

      function AngularMultiSelect_span_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "c-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "angle-down");
        }
      }

      function AngularMultiSelect_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "c-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "angle-up");
        }
      }

      function AngularMultiSelect_div_18_input_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AngularMultiSelect_div_18_input_1_Template_input_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r52.toggleSelectAll($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r51.isSelectAll)("disabled", ctx_r51.settings.limitSelection == (ctx_r51.selectedItems == null ? null : ctx_r51.selectedItems.length))("id", ctx_r51.id);
        }
      }

      function AngularMultiSelect_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AngularMultiSelect_div_18_input_1_Template, 1, 3, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.settings.showCheckbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", ctx_r11.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r11.isSelectAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.settings.selectAllText);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r11.isSelectAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.settings.unSelectAllText);
        }
      }

      function AngularMultiSelect_img_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 45);
        }
      }

      function AngularMultiSelect_div_20_span_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AngularMultiSelect_div_20_span_3_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r60.clearSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "c-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r54.filter == undefined || (ctx_r54.filter == null ? null : ctx_r54.filter.length) == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "clear");
        }
      }

      function AngularMultiSelect_div_20_span_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AngularMultiSelect_div_20_span_4_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r62.resetInfiniteSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "c-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r55.filter == undefined || (ctx_r55.filter == null ? null : ctx_r55.filter.length) == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "clear");
        }
      }

      function AngularMultiSelect_div_20_input_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 53, 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AngularMultiSelect_div_20_input_5_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r66);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r65.filter = $event;
          })("keyup", function AngularMultiSelect_div_20_input_5_Template_input_keyup_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r66);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r67.filterGroupedList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx_r56.settings.searchPlaceholderText)("ngModel", ctx_r56.filter);
        }
      }

      function AngularMultiSelect_div_20_input_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 55, 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AngularMultiSelect_div_20_input_6_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70);

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r69.filter = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx_r57.settings.searchPlaceholderText)("ngModel", ctx_r57.filter);
        }
      }

      function AngularMultiSelect_div_20_input_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 53, 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AngularMultiSelect_div_20_input_7_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73);

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r72.filter = $event;
          })("keyup", function AngularMultiSelect_div_20_input_7_Template_input_keyup_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73);

            var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r74.searchTerm$.next($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx_r58.settings.searchPlaceholderText)("ngModel", ctx_r58.filter);
        }
      }

      function AngularMultiSelect_div_20_c_templateRenderer_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "c-templateRenderer", 33);
        }

        if (rf & 2) {
          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r59.searchTempl)("item", ctx_r59.item);
        }
      }

      function AngularMultiSelect_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "c-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AngularMultiSelect_div_20_span_3_Template, 2, 2, "span", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AngularMultiSelect_div_20_span_4_Template, 2, 2, "span", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AngularMultiSelect_div_20_input_5_Template, 2, 2, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AngularMultiSelect_div_20_input_6_Template, 2, 2, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AngularMultiSelect_div_20_input_7_Template, 2, 2, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AngularMultiSelect_div_20_c_templateRenderer_8_Template, 1, 2, "c-templateRenderer", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r13.settings.lazyLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.settings.lazyLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.settings.groupBy && !ctx_r13.settings.lazyLoading && !ctx_r13.searchTempl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r13.settings.groupBy && !ctx_r13.settings.lazyLoading && !ctx_r13.searchTempl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.settings.lazyLoading && !ctx_r13.searchTempl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.searchTempl);
        }
      }

      function AngularMultiSelect_div_21_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AngularMultiSelect_div_21_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78);

            var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r77.toggleFilterSelectAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r75.isFilterSelectAll)("disabled", ctx_r75.settings.limitSelection == (ctx_r75.selectedItems == null ? null : ctx_r75.selectedItems.length));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r75.isFilterSelectAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r75.settings.filterSelectAllText);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r75.isFilterSelectAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r75.settings.filterUnSelectAllText);
        }
      }

      function AngularMultiSelect_div_21_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AngularMultiSelect_div_21_div_2_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r80);

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r79.toggleFilterSelectAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r76.isFilterSelectAll && (ctx_r76.filter == null ? null : ctx_r76.filter.length) > 0)("disabled", ctx_r76.settings.limitSelection == (ctx_r76.selectedItems == null ? null : ctx_r76.selectedItems.length));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r76.isFilterSelectAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r76.settings.filterSelectAllText);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r76.isFilterSelectAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r76.settings.filterUnSelectAllText);
        }
      }

      function AngularMultiSelect_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AngularMultiSelect_div_21_div_1_Template, 7, 6, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AngularMultiSelect_div_21_div_2_Template, 7, 6, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r14.settings.groupBy && (ctx_r14.filter == null ? null : ctx_r14.filter.length) > 0 && ctx_r14.filterLength > 0 && !ctx_r14.settings.singleSelection);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.settings.groupBy && (ctx_r14.filter == null ? null : ctx_r14.filter.length) > 0 && (ctx_r14.groupedData == null ? null : ctx_r14.groupedData.length) > 0 && !ctx_r14.settings.singleSelection);
        }
      }

      function AngularMultiSelect_div_22_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AngularMultiSelect_div_22_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83);

            var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r82.toggleInfiniteFilterSelectAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r81.isInfiniteFilterSelectAll)("disabled", ctx_r81.settings.limitSelection == (ctx_r81.selectedItems == null ? null : ctx_r81.selectedItems.length));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r81.isInfiniteFilterSelectAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r81.settings.filterSelectAllText);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r81.isInfiniteFilterSelectAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r81.settings.filterUnSelectAllText);
        }
      }

      function AngularMultiSelect_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AngularMultiSelect_div_22_div_1_Template, 7, 6, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r15.filter == null ? null : ctx_r15.filter.length) > 0 && ctx_r15.infiniteFilterLength > 0);
        }
      }

      function AngularMultiSelect_label_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r16.filter == undefined || (ctx_r16.filter == null ? null : ctx_r16.filter.length) == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r16.settings.noDataLabel);
        }
      }

      function AngularMultiSelect_label_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r17.filter == undefined || (ctx_r17.filter == null ? null : ctx_r17.filter.length) == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r17.settings.noDataLabel);
        }
      }

      function AngularMultiSelect_div_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AngularMultiSelect_div_26_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r85);

            var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r84.addFilterNewItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r18.filter == undefined || (ctx_r18.filter == null ? null : ctx_r18.filter.length) == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r18.settings.addNewButtonText);
        }
      }

      function AngularMultiSelect_div_27_li_2_input_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 59);
        }

        if (rf & 2) {
          var item_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r89.isSelected(item_r87))("disabled", ctx_r89.settings.limitSelection == (ctx_r89.selectedItems == null ? null : ctx_r89.selectedItems.length) && !ctx_r89.isSelected(item_r87) || item_r87.disabled);
        }
      }

      var _c9 = function _c9(a0) {
        return {
          "selected-item": a0
        };
      };

      function AngularMultiSelect_div_27_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AngularMultiSelect_div_27_li_2_Template_li_click_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r92);

            var item_r87 = restoredCtx.$implicit;
            var i_r88 = restoredCtx.index;

            var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r91.onItemClick(item_r87, i_r88, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AngularMultiSelect_div_27_li_2_input_1_Template, 1, 2, "input", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r87 = ctx.$implicit;

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c9, ctx_r86.isSelected(item_r87) == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r86.settings.showCheckbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r87[ctx_r86.settings.labelKey]);
        }
      }

      function AngularMultiSelect_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AngularMultiSelect_div_27_li_2_Template, 4, 5, "li", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "listFilter");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-height", ctx_r19.settings.maxHeight + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](3, 3, ctx_r19.data, ctx_r19.filter, ctx_r19.settings.searchBy));
        }
      }

      function AngularMultiSelect_div_28_li_3_input_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 71);
        }

        if (rf & 2) {
          var item_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r97.isSelected(item_r95))("disabled", ctx_r97.settings.limitSelection == (ctx_r97.selectedItems == null ? null : ctx_r97.selectedItems.length) && !ctx_r97.isSelected(item_r95) || item_r95.disabled);
        }
      }

      function AngularMultiSelect_div_28_li_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AngularMultiSelect_div_28_li_3_Template_li_click_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r100);

            var item_r95 = restoredCtx.$implicit;
            var i_r96 = restoredCtx.index;

            var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r99.onItemClick(item_r95, i_r96, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AngularMultiSelect_div_28_li_3_input_1_Template, 1, 2, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r95 = ctx.$implicit;

          var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c9, ctx_r94.isSelected(item_r95) == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r94.settings.showCheckbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r95[ctx_r94.settings.labelKey]);
        }
      }

      var _c10 = function _c10(a0) {
        return {
          "height": a0
        };
      };

      function AngularMultiSelect_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 68, 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("vsStart", function AngularMultiSelect_div_28_Template_ul_vsStart_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r102);

            var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r101.onScrollEnd($event);
          })("vsEnd", function AngularMultiSelect_div_28_Template_ul_vsEnd_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r102);

            var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r103.onScrollEnd($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AngularMultiSelect_div_28_li_3_Template, 4, 5, "li", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-height", ctx_r20.settings.maxHeight + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("enableUnequalChildrenSizes", ctx_r20.randomSize)("items", ctx_r20.virtualdata)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c10, ctx_r20.settings.maxHeight + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r93.viewPortItems);
        }
      }

      function AngularMultiSelect_div_29_li_2_input_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 71);
        }

        if (rf & 2) {
          var item_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r107.isSelected(item_r105))("disabled", ctx_r107.settings.limitSelection == (ctx_r107.selectedItems == null ? null : ctx_r107.selectedItems.length) && !ctx_r107.isSelected(item_r105) || item_r105.disabled);
        }
      }

      function AngularMultiSelect_div_29_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AngularMultiSelect_div_29_li_2_Template_li_click_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r110);

            var item_r105 = restoredCtx.$implicit;
            var i_r106 = restoredCtx.index;

            var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r109.onItemClick(item_r105, i_r106, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AngularMultiSelect_div_29_li_2_input_1_Template, 1, 2, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "c-templateRenderer", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r105 = ctx.$implicit;

          var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c9, ctx_r104.isSelected(item_r105) == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r104.settings.showCheckbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r104.itemTempl)("item", item_r105);
        }
      }

      function AngularMultiSelect_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AngularMultiSelect_div_29_li_2_Template, 4, 6, "li", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "listFilter");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-height", ctx_r21.settings.maxHeight + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](3, 3, ctx_r21.data, ctx_r21.filter, ctx_r21.settings.searchBy));
        }
      }

      function AngularMultiSelect_div_30_li_3_input_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 71);
        }

        if (rf & 2) {
          var item_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r115.isSelected(item_r113))("disabled", ctx_r115.settings.limitSelection == (ctx_r115.selectedItems == null ? null : ctx_r115.selectedItems.length) && !ctx_r115.isSelected(item_r113) || item_r113.disabled);
        }
      }

      function AngularMultiSelect_div_30_li_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AngularMultiSelect_div_30_li_3_Template_li_click_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r118);

            var item_r113 = restoredCtx.$implicit;
            var i_r114 = restoredCtx.index;

            var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r117.onItemClick(item_r113, i_r114, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AngularMultiSelect_div_30_li_3_input_1_Template, 1, 2, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "c-templateRenderer", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r113 = ctx.$implicit;

          var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c9, ctx_r112.isSelected(item_r113) == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r112.settings.showCheckbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r112.itemTempl)("item", item_r113);
        }
      }

      function AngularMultiSelect_div_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 68, 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("vsStart", function AngularMultiSelect_div_30_Template_ul_vsStart_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r120);

            var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r119.onScrollEnd($event);
          })("vsEnd", function AngularMultiSelect_div_30_Template_ul_vsEnd_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r120);

            var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r121.onScrollEnd($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AngularMultiSelect_div_30_li_3_Template, 4, 6, "li", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-height", ctx_r22.settings.maxHeight + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("enableUnequalChildrenSizes", ctx_r22.randomSize)("items", ctx_r22.virtualdata)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c10, ctx_r22.settings.maxHeight + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r111.viewPortItems);
        }
      }

      function AngularMultiSelect_div_31_span_3_li_1_input_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 71);
        }

        if (rf & 2) {
          var item_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r128.isSelected(item_r124))("disabled", ctx_r128.settings.limitSelection == (ctx_r128.selectedItems == null ? null : ctx_r128.selectedItems.length) && !ctx_r128.isSelected(item_r124) || item_r124.disabled);
        }
      }

      var _c11 = function _c11(a0, a1) {
        return {
          "grp-title": a0,
          "grp-item": a1
        };
      };

      function AngularMultiSelect_div_31_span_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AngularMultiSelect_div_31_span_3_li_1_Template_li_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r132);

            var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var item_r124 = ctx_r131.$implicit;
            var i_r125 = ctx_r131.index;

            var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r130.onItemClick(item_r124, i_r125, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AngularMultiSelect_div_31_span_3_li_1_input_1_Template, 1, 2, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "c-templateRenderer", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c11, item_r124.grpTitle, !item_r124.grpTitle && !ctx_r126.settings.singleSelection));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r126.settings.showCheckbox && !ctx_r126.settings.singleSelection);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r126.itemTempl)("item", item_r124);
        }
      }

      function AngularMultiSelect_div_31_span_3_li_2_input_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 71);
        }

        if (rf & 2) {
          var item_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r134.isSelected(item_r124))("disabled", ctx_r134.settings.limitSelection == (ctx_r134.selectedItems == null ? null : ctx_r134.selectedItems.length) && !ctx_r134.isSelected(item_r124) || item_r124.disabled);
        }
      }

      function AngularMultiSelect_div_31_span_3_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AngularMultiSelect_div_31_span_3_li_2_input_1_Template, 1, 2, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "c-templateRenderer", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c11, item_r124.grpTitle, !item_r124.grpTitle && !ctx_r127.settings.singleSelection));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r127.settings.showCheckbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r127.itemTempl)("item", item_r124);
        }
      }

      function AngularMultiSelect_div_31_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AngularMultiSelect_div_31_span_3_li_1_Template, 4, 7, "li", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AngularMultiSelect_div_31_span_3_li_2_Template, 4, 7, "li", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r124 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r124.grpTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r124.grpTitle);
        }
      }

      function AngularMultiSelect_div_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 68, 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("vsStart", function AngularMultiSelect_div_31_Template_ul_vsStart_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r138);

            var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r137.onScrollEnd($event);
          })("vsEnd", function AngularMultiSelect_div_31_Template_ul_vsEnd_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r138);

            var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r139.onScrollEnd($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AngularMultiSelect_div_31_span_3_Template, 3, 2, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-height", ctx_r23.settings.maxHeight + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("enableUnequalChildrenSizes", ctx_r23.randomSize)("items", ctx_r23.virtualdata)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c10, ctx_r23.settings.maxHeight + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r122.viewPortItems);
        }
      }

      function AngularMultiSelect_div_32_span_2_input_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 71);
        }

        if (rf & 2) {
          var item_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", item_r141.selected)("disabled", ctx_r143.settings.limitSelection == (ctx_r143.selectedItems == null ? null : ctx_r143.selectedItems.length) && !ctx_r143.isSelected(item_r141) || item_r141.disabled);
        }
      }

      function AngularMultiSelect_div_32_span_2_span_6_input_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 71);
        }

        if (rf & 2) {
          var val_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r148.isSelected(val_r146))("disabled", ctx_r148.settings.limitSelection == (ctx_r148.selectedItems == null ? null : ctx_r148.selectedItems.length) && !ctx_r148.isSelected(val_r146) || val_r146.disabled);
        }
      }

      function AngularMultiSelect_div_32_span_2_span_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AngularMultiSelect_div_32_span_2_span_6_Template_li_click_1_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r151);

            var val_r146 = restoredCtx.$implicit;
            var j_r147 = restoredCtx.index;

            var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            ctx_r150.onItemClick(val_r146, j_r147, $event);
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AngularMultiSelect_div_32_span_2_span_6_input_2_Template, 1, 2, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "c-templateRenderer", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var val_r146 = ctx.$implicit;

          var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c11, val_r146.grpTitle, !val_r146.grpTitle && !ctx_r144.settings.singleSelection));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r144.settings.showCheckbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r144.itemTempl)("item", val_r146);
        }
      }

      function AngularMultiSelect_div_32_span_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AngularMultiSelect_div_32_span_2_Template_li_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r153);

            var item_r141 = restoredCtx.$implicit;

            var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r152.selectGroup(item_r141);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AngularMultiSelect_div_32_span_2_input_2_Template, 1, 2, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AngularMultiSelect_div_32_span_2_span_6_Template, 5, 7, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r141 = ctx.$implicit;

          var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c11, item_r141.grpTitle, !item_r141.grpTitle && !ctx_r140.settings.singleSelection));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r140.settings.showCheckbox && !ctx_r140.settings.singleSelection);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r141[ctx_r140.settings.labelKey]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r141.list);
        }
      }

      function AngularMultiSelect_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AngularMultiSelect_div_32_span_2_Template, 7, 7, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-height", ctx_r24.settings.maxHeight + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r24.groupedData);
        }
      }

      function AngularMultiSelect_div_33_span_4_li_1_input_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 71);
        }

        if (rf & 2) {
          var item_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r160.isSelected(item_r156))("disabled", ctx_r160.settings.limitSelection == (ctx_r160.selectedItems == null ? null : ctx_r160.selectedItems.length) && !ctx_r160.isSelected(item_r156) || item_r156.disabled);
        }
      }

      var _c12 = function _c12(a0, a1, a2) {
        return {
          "grp-title": a0,
          "grp-item": a1,
          "selected-item": a2
        };
      };

      function AngularMultiSelect_div_33_span_4_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AngularMultiSelect_div_33_span_4_li_1_input_1_Template, 1, 2, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](3, _c12, item_r156.grpTitle, !item_r156.grpTitle && !ctx_r158.settings.singleSelection, ctx_r158.isSelected(item_r156) == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r158.settings.showCheckbox && !item_r156.grpTitle && !ctx_r158.settings.singleSelection);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r156[ctx_r158.settings.labelKey]);
        }
      }

      function AngularMultiSelect_div_33_span_4_li_2_input_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 71);
        }

        if (rf & 2) {
          var item_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r163.isSelected(item_r156))("disabled", ctx_r163.settings.limitSelection == (ctx_r163.selectedItems == null ? null : ctx_r163.selectedItems.length) && !ctx_r163.isSelected(item_r156) || item_r156.disabled);
        }
      }

      function AngularMultiSelect_div_33_span_4_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AngularMultiSelect_div_33_span_4_li_2_Template_li_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r167);

            var ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var item_r156 = ctx_r166.$implicit;
            var i_r157 = ctx_r166.index;

            var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r165.onItemClick(item_r156, i_r157, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AngularMultiSelect_div_33_span_4_li_2_input_1_Template, 1, 2, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](3, _c12, item_r156.grpTitle, !item_r156.grpTitle && !ctx_r159.settings.singleSelection, ctx_r159.isSelected(item_r156) == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r159.settings.showCheckbox && !item_r156.grpTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r156[ctx_r159.settings.labelKey]);
        }
      }

      function AngularMultiSelect_div_33_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AngularMultiSelect_div_33_span_4_li_1_Template, 4, 7, "li", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AngularMultiSelect_div_33_span_4_li_2_Template, 4, 7, "li", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r156 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r156.grpTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r156.grpTitle);
        }
      }

      function AngularMultiSelect_div_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "virtual-scroller", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("vsUpdate", function AngularMultiSelect_div_33_Template_virtual_scroller_vsUpdate_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r170);

            var ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r169.viewPortItems = $event;
          })("vsEnd", function AngularMultiSelect_div_33_Template_virtual_scroller_vsEnd_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r170);

            var ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r171.onScrollEnd($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 68, 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("vsStart", function AngularMultiSelect_div_33_Template_ul_vsStart_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r170);

            var ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r172.onScrollEnd($event);
          })("vsEnd", function AngularMultiSelect_div_33_Template_ul_vsEnd_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r170);

            var ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r173.onScrollEnd($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AngularMultiSelect_div_33_span_4_Template, 3, 2, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-height", ctx_r25.settings.maxHeight + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx_r25.groupedData)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c10, ctx_r25.settings.maxHeight + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("enableUnequalChildrenSizes", ctx_r25.randomSize)("items", ctx_r25.virtualdata)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c10, ctx_r25.settings.maxHeight + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r154.viewPortItems);
        }
      }

      function AngularMultiSelect_div_34_span_2_input_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 71);
        }

        if (rf & 2) {
          var item_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", item_r175.selected)("disabled", ctx_r177.settings.limitSelection == (ctx_r177.selectedItems == null ? null : ctx_r177.selectedItems.length) && !ctx_r177.isSelected(item_r175) || item_r175.disabled);
        }
      }

      function AngularMultiSelect_div_34_span_2_span_6_input_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 71);
        }

        if (rf & 2) {
          var val_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r182.isSelected(val_r180))("disabled", ctx_r182.settings.limitSelection == (ctx_r182.selectedItems == null ? null : ctx_r182.selectedItems.length) && !ctx_r182.isSelected(val_r180) || val_r180.disabled);
        }
      }

      var _c13 = function _c13(a0, a1, a2) {
        return {
          "selected-item": a0,
          "grp-title": a1,
          "grp-item": a2
        };
      };

      function AngularMultiSelect_div_34_span_2_span_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r185 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AngularMultiSelect_div_34_span_2_span_6_Template_li_click_1_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r185);

            var val_r180 = restoredCtx.$implicit;
            var j_r181 = restoredCtx.index;

            var ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            ctx_r184.onItemClick(val_r180, j_r181, $event);
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AngularMultiSelect_div_34_span_2_span_6_input_2_Template, 1, 2, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var val_r180 = ctx.$implicit;

          var ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](3, _c13, ctx_r178.isSelected(val_r180) == true, val_r180.grpTitle, !val_r180.grpTitle && !ctx_r178.settings.singleSelection));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r178.settings.showCheckbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](val_r180[ctx_r178.settings.labelKey]);
        }
      }

      function AngularMultiSelect_div_34_span_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AngularMultiSelect_div_34_span_2_Template_li_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r187);

            var item_r175 = restoredCtx.$implicit;

            var ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r186.selectGroup(item_r175);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AngularMultiSelect_div_34_span_2_input_2_Template, 1, 2, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AngularMultiSelect_div_34_span_2_span_6_Template, 5, 7, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r175 = ctx.$implicit;

          var ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c11, item_r175.grpTitle, !item_r175.grpTitle && !ctx_r174.settings.singleSelection));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r174.settings.showCheckbox && !ctx_r174.settings.singleSelection);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r175[ctx_r174.settings.labelKey]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r175.list);
        }
      }

      function AngularMultiSelect_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AngularMultiSelect_div_34_span_2_Template, 7, 7, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-height", ctx_r26.settings.maxHeight + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r26.groupedData);
        }
      }

      function AngularMultiSelect_h5_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r27.settings.noDataLabel);
        }
      }

      var _c14 = function _c14(a0) {
        return {
          "disabled": a0
        };
      };

      var _c15 = function _c15(a0, a1) {
        return {
          "arrow-up": a0,
          "arrow-down": a1
        };
      };

      var _c16 = function _c16(a0) {
        return {
          "single-select-mode": a0
        };
      };

      var MyException =
      /**
       * @param {?} status
       * @param {?} body
       */
      function MyException(status, body) {
        _classCallCheck(this, MyException);

        this.status = status;
        this.body = body;
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _ClickOutsideDirective = /*#__PURE__*/function () {
        /**
         * @param {?} _elementRef
         */
        function _ClickOutsideDirective(_elementRef) {
          _classCallCheck(this, _ClickOutsideDirective);

          this._elementRef = _elementRef;
          this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }
        /**
         * @param {?} event
         * @param {?} targetElement
         * @return {?}
         */


        _createClass(_ClickOutsideDirective, [{
          key: "onClick",
          value: function onClick(event, targetElement) {
            if (!targetElement) {
              return;
            }
            /** @type {?} */


            var clickedInside = this._elementRef.nativeElement.contains(targetElement);

            if (!clickedInside) {
              this.clickOutside.emit(event);
            }
          }
        }]);

        return _ClickOutsideDirective;
      }();

      _ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) {
        return new (t || _ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
      };

      _ClickOutsideDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _ClickOutsideDirective,
        selectors: [["", "clickOutside", ""]],
        hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
              return ctx.onClick($event, $event.target);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"])("touchstart", function ClickOutsideDirective_touchstart_HostBindingHandler($event) {
              return ctx.onClick($event, $event.target);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
          }
        },
        outputs: {
          clickOutside: "clickOutside"
        }
      });
      /** @nocollapse */

      _ClickOutsideDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
        }];
      };

      _ClickOutsideDirective.propDecorators = {
        clickOutside: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
          args: ['document:click', ['$event', '$event.target']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
          args: ['document:touchstart', ['$event', '$event.target']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_ClickOutsideDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
          args: [{
            selector: '[clickOutside]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
          }];
        }, {
          clickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
          }],

          /**
           * @param {?} event
           * @param {?} targetElement
           * @return {?}
           */
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
            args: ['document:click', ['$event', '$event.target']]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
            args: ['document:touchstart', ['$event', '$event.target']]
          }]
        });
      })();

      if (false) {}

      var ScrollDirective = /*#__PURE__*/function () {
        /**
         * @param {?} _elementRef
         */
        function ScrollDirective(_elementRef) {
          _classCallCheck(this, ScrollDirective);

          this._elementRef = _elementRef;
          this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }
        /**
         * @param {?} event
         * @param {?} targetElement
         * @return {?}
         */


        _createClass(ScrollDirective, [{
          key: "onClick",
          value: function onClick(event, targetElement) {
            this.scroll.emit(event);
          }
        }]);

        return ScrollDirective;
      }();

      ScrollDirective.ɵfac = function ScrollDirective_Factory(t) {
        return new (t || ScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
      };

      ScrollDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: ScrollDirective,
        selectors: [["", "scroll", ""]],
        hostBindings: function ScrollDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function ScrollDirective_scroll_HostBindingHandler($event) {
              return ctx.onClick($event);
            });
          }
        },
        outputs: {
          scroll: "scroll"
        }
      });
      /** @nocollapse */

      ScrollDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
        }];
      };

      ScrollDirective.propDecorators = {
        scroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
          args: ['scroll', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
          args: [{
            selector: '[scroll]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
          }];
        }, {
          scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
          }],

          /**
           * @param {?} event
           * @param {?} targetElement
           * @return {?}
           */
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
            args: ['scroll', ['$event']]
          }]
        });
      })();

      if (false) {}

      var styleDirective = /*#__PURE__*/function () {
        /**
         * @param {?} el
         */
        function styleDirective(el) {
          _classCallCheck(this, styleDirective);

          this.el = el;
        }
        /**
         * @return {?}
         */


        _createClass(styleDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.el.nativeElement.style.top = this.styleVal;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.el.nativeElement.style.top = this.styleVal;
          }
        }]);

        return styleDirective;
      }();

      styleDirective.ɵfac = function styleDirective_Factory(t) {
        return new (t || styleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
      };

      styleDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: styleDirective,
        selectors: [["", "styleProp", ""]],
        inputs: {
          styleVal: ["styleProp", "styleVal"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      styleDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
        }];
      };

      styleDirective.propDecorators = {
        styleVal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
          args: ['styleProp']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](styleDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
          args: [{
            selector: '[styleProp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
          }];
        }, {
          styleVal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['styleProp']
          }]
        });
      })();

      if (false) {}

      var setPosition = /*#__PURE__*/function () {
        /**
         * @param {?} el
         */
        function setPosition(el) {
          _classCallCheck(this, setPosition);

          this.el = el;
        }
        /**
         * @return {?}
         */


        _createClass(setPosition, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.height) {
              this.el.nativeElement.style.bottom = parseInt(this.height + 15 + "") + 'px';
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (this.height) {
              this.el.nativeElement.style.bottom = parseInt(this.height + 15 + "") + 'px';
            }
          }
        }]);

        return setPosition;
      }();

      setPosition.ɵfac = function setPosition_Factory(t) {
        return new (t || setPosition)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
      };

      setPosition.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: setPosition,
        selectors: [["", "setPosition", ""]],
        inputs: {
          height: ["setPosition", "height"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      setPosition.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
        }];
      };

      setPosition.propDecorators = {
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
          args: ['setPosition']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](setPosition, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
          args: [{
            selector: '[setPosition]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
          }];
        }, {
          height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['setPosition']
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var DataService = /*#__PURE__*/function () {
        function DataService() {
          _classCallCheck(this, DataService);

          this.filteredData = [];
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        }
        /**
         * @param {?} data
         * @return {?}
         */


        _createClass(DataService, [{
          key: "setData",
          value: function setData(data) {
            this.filteredData = data;
            this.subject.next(data);
          }
          /**
           * @return {?}
           */

        }, {
          key: "getData",
          value: function getData() {
            return this.subject.asObservable();
          }
          /**
           * @return {?}
           */

        }, {
          key: "getFilteredData",
          value: function getFilteredData() {
            if (this.filteredData && this.filteredData.length > 0) {
              return this.filteredData;
            } else {
              return [];
            }
          }
        }]);

        return DataService;
      }();

      DataService.ɵfac = function DataService_Factory(t) {
        return new (t || DataService)();
      };

      DataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DataService,
        factory: DataService.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _ListFilterPipe = /*#__PURE__*/function () {
        /**
         * @param {?} ds
         */
        function _ListFilterPipe(ds) {
          _classCallCheck(this, _ListFilterPipe);

          this.ds = ds;
          this.filteredList = [];
        }
        /**
         * @param {?} items
         * @param {?} filter
         * @param {?} searchBy
         * @return {?}
         */


        _createClass(_ListFilterPipe, [{
          key: "transform",
          value: function transform(items, filter, searchBy) {
            var _this2 = this;

            if (!items || !filter) {
              this.ds.setData(items);
              return items;
            }

            this.filteredList = items.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return _this2.applyFilter(item, filter, searchBy);
            });
            this.ds.setData(this.filteredList);
            return this.filteredList;
          }
          /**
           * @param {?} item
           * @param {?} filter
           * @param {?} searchBy
           * @return {?}
           */

        }, {
          key: "applyFilter",
          value: function applyFilter(item, filter, searchBy) {
            /** @type {?} */
            var found = false;

            if (searchBy.length > 0) {
              if (item.grpTitle) {
                found = true;
              } else {
                for (var t = 0; t < searchBy.length; t++) {
                  if (filter && item[searchBy[t]] && item[searchBy[t]] != "") {
                    if (item[searchBy[t]].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                      found = true;
                    }
                  }
                }
              }
            } else {
              if (item.grpTitle) {
                found = true;
              } else {
                for (var prop in item) {
                  if (filter && item[prop]) {
                    if (item[prop].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                      found = true;
                    }
                  }
                }
              }
            }

            return found;
          }
        }]);

        return _ListFilterPipe;
      }();

      _ListFilterPipe.ɵfac = function ListFilterPipe_Factory(t) {
        return new (t || _ListFilterPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DataService, 16));
      };

      _ListFilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "listFilter",
        type: _ListFilterPipe,
        pure: true
      });
      /** @nocollapse */

      _ListFilterPipe.ctorParameters = function () {
        return [{
          type: DataService
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_ListFilterPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe,
          args: [{
            name: 'listFilter',
            pure: true
          }]
        }], function () {
          return [{
            type: DataService
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _Item = function _Item() {
        _classCallCheck(this, _Item);
      };

      _Item.ɵfac = function Item_Factory(t) {
        return new (t || _Item)();
      };

      _Item.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _Item,
        selectors: [["c-item"]],
        contentQueries: function Item_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
          }
        },
        decls: 0,
        vars: 0,
        template: function Item_Template(rf, ctx) {},
        encapsulation: 2
      });
      /** @nocollapse */

      _Item.ctorParameters = function () {
        return [];
      };

      _Item.propDecorators = {
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef, {
            "static": true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_Item, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
          args: [{
            selector: 'c-item',
            template: ""
          }]
        }], function () {
          return [];
        }, {
          template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef, {
              "static": true
            }]
          }]
        });
      })();

      if (false) {}

      var Badge = function Badge() {
        _classCallCheck(this, Badge);
      };

      Badge.ɵfac = function Badge_Factory(t) {
        return new (t || Badge)();
      };

      Badge.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: Badge,
        selectors: [["c-badge"]],
        contentQueries: function Badge_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
          }
        },
        decls: 0,
        vars: 0,
        template: function Badge_Template(rf, ctx) {},
        encapsulation: 2
      });
      /** @nocollapse */

      Badge.ctorParameters = function () {
        return [];
      };

      Badge.propDecorators = {
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef, {
            "static": true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Badge, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
          args: [{
            selector: 'c-badge',
            template: ""
          }]
        }], function () {
          return [];
        }, {
          template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef, {
              "static": true
            }]
          }]
        });
      })();

      if (false) {}

      var Search = function Search() {
        _classCallCheck(this, Search);
      };

      Search.ɵfac = function Search_Factory(t) {
        return new (t || Search)();
      };

      Search.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: Search,
        selectors: [["c-search"]],
        contentQueries: function Search_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
          }
        },
        decls: 0,
        vars: 0,
        template: function Search_Template(rf, ctx) {},
        encapsulation: 2
      });
      /** @nocollapse */

      Search.ctorParameters = function () {
        return [];
      };

      Search.propDecorators = {
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef, {
            "static": true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Search, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
          args: [{
            selector: 'c-search',
            template: ""
          }]
        }], function () {
          return [];
        }, {
          template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef, {
              "static": true
            }]
          }]
        });
      })();

      if (false) {}

      var _TemplateRenderer = /*#__PURE__*/function () {
        /**
         * @param {?} viewContainer
         */
        function _TemplateRenderer(viewContainer) {
          _classCallCheck(this, _TemplateRenderer);

          this.viewContainer = viewContainer;
        }
        /**
         * @return {?}
         */


        _createClass(_TemplateRenderer, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.view = this.viewContainer.createEmbeddedView(this.data.template, {
              '\$implicit': this.data,
              'item': this.item
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.view.destroy();
          }
        }]);

        return _TemplateRenderer;
      }();

      _TemplateRenderer.ɵfac = function TemplateRenderer_Factory(t) {
        return new (t || _TemplateRenderer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef));
      };

      _TemplateRenderer.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _TemplateRenderer,
        selectors: [["c-templateRenderer"]],
        inputs: {
          data: "data",
          item: "item"
        },
        decls: 0,
        vars: 0,
        template: function TemplateRenderer_Template(rf, ctx) {},
        encapsulation: 2
      });
      /** @nocollapse */

      _TemplateRenderer.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
        }];
      };

      _TemplateRenderer.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_TemplateRenderer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
          args: [{
            selector: 'c-templateRenderer',
            template: ""
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }]
        });
      })();

      if (false) {}

      var CIcon = function CIcon() {
        _classCallCheck(this, CIcon);
      };

      CIcon.ɵfac = function CIcon_Factory(t) {
        return new (t || CIcon)();
      };

      CIcon.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CIcon,
        selectors: [["c-icon"]],
        inputs: {
          name: "name"
        },
        decls: 5,
        vars: 5,
        consts: [["width", "100%", "height", "100%", "version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 47.971 47.971", "style", "enable-background:new 0 0 47.971 47.971;", 0, "xml", "space", "preserve", 4, "ngIf"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100%", "height", "100%", "viewBox", "0 0 612 612", "style", "enable-background:new 0 0 612 612;", 0, "xml", "space", "preserve", 4, "ngIf"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100%", "height", "100%", "viewBox", "0 0 615.52 615.52", "style", "enable-background:new 0 0 615.52 615.52;", 0, "xml", "space", "preserve", 4, "ngIf"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 51.976 51.976", "style", "enable-background:new 0 0 51.976 51.976;", 0, "xml", "space", "preserve", 4, "ngIf"], ["width", "100%", "height", "100%", "version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 47.971 47.971", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 47.971 47.971"], ["d", "M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88\n                                c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242\n                                C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879\n                                s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100%", "height", "100%", "viewBox", "0 0 612 612", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 612 612"], ["id", "_x31_0_34_"], ["d", "M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782\n\t\t\t\tc-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296\n\t\t\t\tc6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z"], ["id", "_x39__30_"], ["d", "M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27\n\t\t\t\tL7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832\n\t\t\t\tc9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100%", "height", "100%", "viewBox", "0 0 615.52 615.52", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 615.52 615.52"], ["id", "Search__x28_and_thou_shall_find_x29_"], ["d", "M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0\n\t\t\t\t\tC104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777\n\t\t\t\t\tl184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291\n\t\t\t\t\tC617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174\n\t\t\t\t\tc-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88\n\t\t\t\t\ts152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 51.976 51.976", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 51.976 51.976"], ["d", "M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0\n\t\tC54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778\n\t\tc-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828\n\t\tc0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828\n\t\tl-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z"]],
        template: function CIcon_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CIcon__svg_svg_0_Template, 3, 0, "svg", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CIcon__svg_svg_1_Template, 5, 0, "svg", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CIcon__svg_svg_2_Template, 5, 0, "svg", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CIcon__svg_svg_3_Template, 6, 0, "svg", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CIcon__svg_svg_4_Template, 3, 0, "svg", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.name == "remove");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.name == "angle-down");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.name == "angle-up");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.name == "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.name == "clear");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
        encapsulation: 2
      });
      CIcon.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CIcon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
          args: [{
            selector: 'c-icon',
            template: "<svg *ngIf=\"name == 'remove'\" width=\"100%\" height=\"100%\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                        viewBox=\"0 0 47.971 47.971\" style=\"enable-background:new 0 0 47.971 47.971;\" xml:space=\"preserve\">\n                        <g>\n                            <path d=\"M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88\n                                c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242\n                                C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879\n                                s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z\"/>\n                        </g>\n                    </svg>\n            <svg *ngIf=\"name == 'angle-down'\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"100%\" height=\"100%\" viewBox=\"0 0 612 612\" style=\"enable-background:new 0 0 612 612;\" xml:space=\"preserve\">\n<g>\n\t<g id=\"_x31_0_34_\">\n\t\t<g>\n\t\t\t<path d=\"M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782\n\t\t\t\tc-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296\n\t\t\t\tc6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z\"/>\n\t\t</g>\n\t</g>\n</g>\n</svg>\n<svg *ngIf=\"name == 'angle-up'\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"100%\" height=\"100%\" viewBox=\"0 0 612 612\" style=\"enable-background:new 0 0 612 612;\" xml:space=\"preserve\">\n<g>\n\t<g id=\"_x39__30_\">\n\t\t<g>\n\t\t\t<path d=\"M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27\n\t\t\t\tL7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832\n\t\t\t\tc9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z\"/>\n\t\t</g>\n\t</g>\n</g>\n\n</svg>\n<svg *ngIf=\"name == 'search'\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"100%\" height=\"100%\" viewBox=\"0 0 615.52 615.52\" style=\"enable-background:new 0 0 615.52 615.52;\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<g id=\"Search__x28_and_thou_shall_find_x29_\">\n\t\t\t<g>\n\t\t\t\t<path d=\"M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0\n\t\t\t\t\tC104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777\n\t\t\t\t\tl184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291\n\t\t\t\t\tC617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174\n\t\t\t\t\tc-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88\n\t\t\t\t\ts152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z\"/>\n\t\t\t</g>\n\t\t</g>\n\t</g>\n</g>\n\n</svg>\n<svg *ngIf=\"name == 'clear'\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 51.976 51.976\" style=\"enable-background:new 0 0 51.976 51.976;\" xml:space=\"preserve\">\n<g>\n\t<path d=\"M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0\n\t\tC54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778\n\t\tc-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828\n\t\tc0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828\n\t\tl-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z\"/>\n</g>\n</svg>",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None
          }]
        }], null, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @return {?}
       */


      function VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY() {
        return {
          scrollThrottlingTime: 0,
          scrollDebounceTime: 0,
          scrollAnimationTime: 750,
          checkResizeInterval: 1000,
          resizeBypassRefreshThreshold: 5,
          modifyOverflowStyleOfParentScroll: true,
          stripedTable: false
        };
      }

      var VirtualScrollerComponent = /*#__PURE__*/function () {
        /**
         * @param {?} element
         * @param {?} renderer
         * @param {?} zone
         * @param {?} changeDetectorRef
         * @param {?} platformId
         * @param {?} options
         */
        function VirtualScrollerComponent(element, renderer, zone, changeDetectorRef, platformId, options) {
          _classCallCheck(this, VirtualScrollerComponent);

          this.element = element;
          this.renderer = renderer;
          this.zone = zone;
          this.changeDetectorRef = changeDetectorRef;
          this.window = window;
          this.executeRefreshOutsideAngularZone = false;
          this._enableUnequalChildrenSizes = false;
          this.useMarginInsteadOfTranslate = false;
          this.ssrViewportWidth = 1920;
          this.ssrViewportHeight = 1080;
          this._bufferAmount = 0;
          this._items = [];

          this.compareItems =
          /**
          * @param {?} item1
          * @param {?} item2
          * @return {?}
          */
          function (item1, item2) {
            return item1 === item2;
          };

          this.vsUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.vsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.vsStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.vsEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.calculatedScrollbarWidth = 0;
          this.calculatedScrollbarHeight = 0;
          this.padding = 0;
          this.previousViewPort = {};
          this.cachedPageSize = 0;
          this.previousScrollNumberElements = 0;
          this.isAngularUniversalSSR = (0, _angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformServer)(platformId);
          this.scrollThrottlingTime = options.scrollThrottlingTime;
          this.scrollDebounceTime = options.scrollDebounceTime;
          this.scrollAnimationTime = options.scrollAnimationTime;
          this.scrollbarWidth = options.scrollbarWidth;
          this.scrollbarHeight = options.scrollbarHeight;
          this.checkResizeInterval = options.checkResizeInterval;
          this.resizeBypassRefreshThreshold = options.resizeBypassRefreshThreshold;
          this.modifyOverflowStyleOfParentScroll = options.modifyOverflowStyleOfParentScroll;
          this.stripedTable = options.stripedTable;
          this.horizontal = false;
          this.resetWrapGroupDimensions();
        }
        /**
         * @return {?}
         */


        _createClass(VirtualScrollerComponent, [{
          key: "viewPortInfo",
          get: function get() {
            /** @type {?} */
            var pageInfo = this.previousViewPort || {};
            return {
              startIndex: pageInfo.startIndex || 0,
              endIndex: pageInfo.endIndex || 0,
              scrollStartPosition: pageInfo.scrollStartPosition || 0,
              scrollEndPosition: pageInfo.scrollEndPosition || 0,
              maxScrollPosition: pageInfo.maxScrollPosition || 0,
              startIndexWithBuffer: pageInfo.startIndexWithBuffer || 0,
              endIndexWithBuffer: pageInfo.endIndexWithBuffer || 0
            };
          }
          /**
           * @return {?}
           */

        }, {
          key: "enableUnequalChildrenSizes",
          get: function get() {
            return this._enableUnequalChildrenSizes;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            if (this._enableUnequalChildrenSizes === value) {
              return;
            }

            this._enableUnequalChildrenSizes = value;
            this.minMeasuredChildWidth = undefined;
            this.minMeasuredChildHeight = undefined;
          }
          /**
           * @return {?}
           */

        }, {
          key: "bufferAmount",
          get: function get() {
            if (typeof this._bufferAmount === 'number' && this._bufferAmount >= 0) {
              return this._bufferAmount;
            } else {
              return this.enableUnequalChildrenSizes ? 5 : 0;
            }
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._bufferAmount = value;
          }
          /**
           * @return {?}
           */

        }, {
          key: "scrollThrottlingTime",
          get: function get() {
            return this._scrollThrottlingTime;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._scrollThrottlingTime = value;
            this.updateOnScrollFunction();
          }
          /**
           * @return {?}
           */

        }, {
          key: "scrollDebounceTime",
          get: function get() {
            return this._scrollDebounceTime;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._scrollDebounceTime = value;
            this.updateOnScrollFunction();
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "updateOnScrollFunction",
          value: function updateOnScrollFunction() {
            var _this3 = this;

            if (this.scrollDebounceTime) {
              this.onScroll = this.debounce(
              /**
              * @return {?}
              */
              function () {
                _this3.refresh_internal(false);
              }, this.scrollDebounceTime);
            } else if (this.scrollThrottlingTime) {
              this.onScroll = this.throttleTrailing(
              /**
              * @return {?}
              */
              function () {
                _this3.refresh_internal(false);
              }, this.scrollThrottlingTime);
            } else {
              this.onScroll =
              /**
              * @return {?}
              */
              function () {
                _this3.refresh_internal(false);
              };
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "checkResizeInterval",
          get: function get() {
            return this._checkResizeInterval;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            if (this._checkResizeInterval === value) {
              return;
            }

            this._checkResizeInterval = value;
            this.addScrollEventHandlers();
          }
          /**
           * @return {?}
           */

        }, {
          key: "items",
          get: function get() {
            return this._items;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            if (value === this._items) {
              return;
            }

            this._items = value || [];
            this.refresh_internal(true);
          }
          /**
           * @return {?}
           */

        }, {
          key: "horizontal",
          get: function get() {
            return this._horizontal;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._horizontal = value;
            this.updateDirection();
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "revertParentOverscroll",
          value: function revertParentOverscroll() {
            /** @type {?} */
            var scrollElement = this.getScrollElement();

            if (scrollElement && this.oldParentScrollOverflow) {
              scrollElement.style['overflow-y'] = this.oldParentScrollOverflow.y;
              scrollElement.style['overflow-x'] = this.oldParentScrollOverflow.x;
            }

            this.oldParentScrollOverflow = undefined;
          }
          /**
           * @return {?}
           */

        }, {
          key: "parentScroll",
          get: function get() {
            return this._parentScroll;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            if (this._parentScroll === value) {
              return;
            }

            this.revertParentOverscroll();
            this._parentScroll = value;
            this.addScrollEventHandlers();
            /** @type {?} */

            var scrollElement = this.getScrollElement();

            if (this.modifyOverflowStyleOfParentScroll && scrollElement !== this.element.nativeElement) {
              this.oldParentScrollOverflow = {
                x: scrollElement.style['overflow-x'],
                y: scrollElement.style['overflow-y']
              };
              scrollElement.style['overflow-y'] = this.horizontal ? 'visible' : 'auto';
              scrollElement.style['overflow-x'] = this.horizontal ? 'auto' : 'visible';
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addScrollEventHandlers();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.removeScrollEventHandlers();
            this.revertParentOverscroll();
          }
          /**
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            /** @type {?} */
            var indexLengthChanged = this.cachedItemsLength !== this.items.length;
            this.cachedItemsLength = this.items.length;
            /** @type {?} */

            var firstRun = !changes.items || !changes.items.previousValue || changes.items.previousValue.length === 0;
            this.refresh_internal(indexLengthChanged || firstRun);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.cachedItemsLength !== this.items.length) {
              this.cachedItemsLength = this.items.length;
              this.refresh_internal(true);
              return;
            }

            if (this.previousViewPort && this.viewPortItems && this.viewPortItems.length > 0) {
              /** @type {?} */
              var itemsArrayChanged = false;

              for (var i = 0; i < this.viewPortItems.length; ++i) {
                if (!this.compareItems(this.items[this.previousViewPort.startIndexWithBuffer + i], this.viewPortItems[i])) {
                  itemsArrayChanged = true;
                  break;
                }
              }

              if (itemsArrayChanged) {
                this.refresh_internal(true);
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "refresh",
          value: function refresh() {
            this.refresh_internal(true);
          }
          /**
           * @return {?}
           */

        }, {
          key: "invalidateAllCachedMeasurements",
          value: function invalidateAllCachedMeasurements() {
            this.wrapGroupDimensions = {
              maxChildSizePerWrapGroup: [],
              numberOfKnownWrapGroupChildSizes: 0,
              sumOfKnownWrapGroupChildWidths: 0,
              sumOfKnownWrapGroupChildHeights: 0
            };
            this.minMeasuredChildWidth = undefined;
            this.minMeasuredChildHeight = undefined;
            this.refresh_internal(false);
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "invalidateCachedMeasurementForItem",
          value: function invalidateCachedMeasurementForItem(item) {
            if (this.enableUnequalChildrenSizes) {
              /** @type {?} */
              var index = this.items && this.items.indexOf(item);

              if (index >= 0) {
                this.invalidateCachedMeasurementAtIndex(index);
              }
            } else {
              this.minMeasuredChildWidth = undefined;
              this.minMeasuredChildHeight = undefined;
            }

            this.refresh_internal(false);
          }
          /**
           * @param {?} index
           * @return {?}
           */

        }, {
          key: "invalidateCachedMeasurementAtIndex",
          value: function invalidateCachedMeasurementAtIndex(index) {
            if (this.enableUnequalChildrenSizes) {
              /** @type {?} */
              var cachedMeasurement = this.wrapGroupDimensions.maxChildSizePerWrapGroup[index];

              if (cachedMeasurement) {
                this.wrapGroupDimensions.maxChildSizePerWrapGroup[index] = undefined;
                --this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
                this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths -= cachedMeasurement.childWidth || 0;
                this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights -= cachedMeasurement.childHeight || 0;
              }
            } else {
              this.minMeasuredChildWidth = undefined;
              this.minMeasuredChildHeight = undefined;
            }

            this.refresh_internal(false);
          }
          /**
           * @param {?} item
           * @param {?=} alignToBeginning
           * @param {?=} additionalOffset
           * @param {?=} animationMilliseconds
           * @param {?=} animationCompletedCallback
           * @return {?}
           */

        }, {
          key: "scrollInto",
          value: function scrollInto(item) {
            var alignToBeginning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var additionalOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var animationMilliseconds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
            var animationCompletedCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;

            /** @type {?} */
            var index = this.items.indexOf(item);

            if (index === -1) {
              return;
            }

            this.scrollToIndex(index, alignToBeginning, additionalOffset, animationMilliseconds, animationCompletedCallback);
          }
          /**
           * @param {?} index
           * @param {?=} alignToBeginning
           * @param {?=} additionalOffset
           * @param {?=} animationMilliseconds
           * @param {?=} animationCompletedCallback
           * @return {?}
           */

        }, {
          key: "scrollToIndex",
          value: function scrollToIndex(index) {
            var _this4 = this;

            var alignToBeginning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var additionalOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var animationMilliseconds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
            var animationCompletedCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;

            /** @type {?} */
            var maxRetries = 5;
            /** @type {?} */

            var retryIfNeeded =
            /**
            * @return {?}
            */
            function retryIfNeeded() {
              --maxRetries;

              if (maxRetries <= 0) {
                if (animationCompletedCallback) {
                  animationCompletedCallback();
                }

                return;
              }
              /** @type {?} */


              var dimensions = _this4.calculateDimensions();
              /** @type {?} */


              var desiredStartIndex = Math.min(Math.max(index, 0), dimensions.itemCount - 1);

              if (_this4.previousViewPort.startIndex === desiredStartIndex) {
                if (animationCompletedCallback) {
                  animationCompletedCallback();
                }

                return;
              }

              _this4.scrollToIndex_internal(index, alignToBeginning, additionalOffset, 0, retryIfNeeded);
            };

            this.scrollToIndex_internal(index, alignToBeginning, additionalOffset, animationMilliseconds, retryIfNeeded);
          }
          /**
           * @protected
           * @param {?} index
           * @param {?=} alignToBeginning
           * @param {?=} additionalOffset
           * @param {?=} animationMilliseconds
           * @param {?=} animationCompletedCallback
           * @return {?}
           */

        }, {
          key: "scrollToIndex_internal",
          value: function scrollToIndex_internal(index) {
            var alignToBeginning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var additionalOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var animationMilliseconds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
            var animationCompletedCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            animationMilliseconds = animationMilliseconds === undefined ? this.scrollAnimationTime : animationMilliseconds;
            /** @type {?} */

            var dimensions = this.calculateDimensions();
            /** @type {?} */

            var scroll = this.calculatePadding(index, dimensions) + additionalOffset;

            if (!alignToBeginning) {
              scroll -= dimensions.wrapGroupsPerPage * dimensions[this._childScrollDim];
            }

            this.scrollToPosition(scroll, animationMilliseconds, animationCompletedCallback);
          }
          /**
           * @param {?} scrollPosition
           * @param {?=} animationMilliseconds
           * @param {?=} animationCompletedCallback
           * @return {?}
           */

        }, {
          key: "scrollToPosition",
          value: function scrollToPosition(scrollPosition) {
            var _this5 = this;

            var animationMilliseconds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
            var animationCompletedCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
            scrollPosition += this.getElementsOffset();
            animationMilliseconds = animationMilliseconds === undefined ? this.scrollAnimationTime : animationMilliseconds;
            /** @type {?} */

            var scrollElement = this.getScrollElement();
            /** @type {?} */

            var animationRequest;

            if (this.currentTween) {
              this.currentTween.stop();
              this.currentTween = undefined;
            }

            if (!animationMilliseconds) {
              this.renderer.setProperty(scrollElement, this._scrollType, scrollPosition);
              this.refresh_internal(false, animationCompletedCallback);
              return;
            }
            /** @type {?} */


            var tweenConfigObj = {
              scrollPosition: scrollElement[this._scrollType]
            };
            /** @type {?} */

            var newTween = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0__.Tween(tweenConfigObj).to({
              scrollPosition: scrollPosition
            }, animationMilliseconds).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0__.Easing.Quadratic.Out).onUpdate(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              if (isNaN(data.scrollPosition)) {
                return;
              }

              _this5.renderer.setProperty(scrollElement, _this5._scrollType, data.scrollPosition);

              _this5.refresh_internal(false);
            }).onStop(
            /**
            * @return {?}
            */
            function () {
              cancelAnimationFrame(animationRequest);
            }).start();
            /** @type {?} */

            var animate =
            /**
            * @param {?=} time
            * @return {?}
            */
            function animate(time) {
              if (!newTween["isPlaying"]()) {
                return;
              }

              newTween.update(time);

              if (tweenConfigObj.scrollPosition === scrollPosition) {
                _this5.refresh_internal(false, animationCompletedCallback);

                return;
              }

              _this5.zone.runOutsideAngular(
              /**
              * @return {?}
              */
              function () {
                animationRequest = requestAnimationFrame(animate);
              });
            };

            animate();
            this.currentTween = newTween;
          }
          /**
           * @protected
           * @param {?} element
           * @return {?}
           */

        }, {
          key: "getElementSize",
          value: function getElementSize(element) {
            /** @type {?} */
            var result = element.getBoundingClientRect();
            /** @type {?} */

            var styles = getComputedStyle(element);
            /** @type {?} */

            var marginTop = parseInt(styles['margin-top'], 10) || 0;
            /** @type {?} */

            var marginBottom = parseInt(styles['margin-bottom'], 10) || 0;
            /** @type {?} */

            var marginLeft = parseInt(styles['margin-left'], 10) || 0;
            /** @type {?} */

            var marginRight = parseInt(styles['margin-right'], 10) || 0;
            return {
              top: result.top + marginTop,
              bottom: result.bottom + marginBottom,
              left: result.left + marginLeft,
              right: result.right + marginRight,
              width: result.width + marginLeft + marginRight,
              height: result.height + marginTop + marginBottom
            };
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "checkScrollElementResized",
          value: function checkScrollElementResized() {
            /** @type {?} */
            var boundingRect = this.getElementSize(this.getScrollElement());
            /** @type {?} */

            var sizeChanged;

            if (!this.previousScrollBoundingRect) {
              sizeChanged = true;
            } else {
              /** @type {?} */
              var widthChange = Math.abs(boundingRect.width - this.previousScrollBoundingRect.width);
              /** @type {?} */

              var heightChange = Math.abs(boundingRect.height - this.previousScrollBoundingRect.height);
              sizeChanged = widthChange > this.resizeBypassRefreshThreshold || heightChange > this.resizeBypassRefreshThreshold;
            }

            if (sizeChanged) {
              this.previousScrollBoundingRect = boundingRect;

              if (boundingRect.width > 0 && boundingRect.height > 0) {
                this.refresh_internal(false);
              }
            }
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "updateDirection",
          value: function updateDirection() {
            if (this.horizontal) {
              this._invisiblePaddingProperty = 'width';
              this._offsetType = 'offsetLeft';
              this._pageOffsetType = 'pageXOffset';
              this._childScrollDim = 'childWidth';
              this._marginDir = 'margin-left';
              this._translateDir = 'translateX';
              this._scrollType = 'scrollLeft';
            } else {
              this._invisiblePaddingProperty = 'height';
              this._offsetType = 'offsetTop';
              this._pageOffsetType = 'pageYOffset';
              this._childScrollDim = 'childHeight';
              this._marginDir = 'margin-top';
              this._translateDir = 'translateY';
              this._scrollType = 'scrollTop';
            }
          }
          /**
           * @protected
           * @param {?} func
           * @param {?} wait
           * @return {?}
           */

        }, {
          key: "debounce",
          value: function debounce(func, wait) {
            /** @type {?} */
            var throttled = this.throttleTrailing(func, wait);
            /** @type {?} */

            var result =
            /**
            * @return {?}
            */
            function result() {
              throttled['cancel']();
              throttled.apply(this, arguments);
            };

            result['cancel'] =
            /**
            * @return {?}
            */
            function () {
              throttled['cancel']();
            };

            return result;
          }
          /**
           * @protected
           * @param {?} func
           * @param {?} wait
           * @return {?}
           */

        }, {
          key: "throttleTrailing",
          value: function throttleTrailing(func, wait) {
            /** @type {?} */
            var timeout = undefined;
            /** @type {?} */

            var _arguments = arguments;
            /** @type {?} */

            var result =
            /**
            * @return {?}
            */
            function result() {
              /** @type {?} */
              var _this = this;

              _arguments = arguments;

              if (timeout) {
                return;
              }

              if (wait <= 0) {
                func.apply(_this, _arguments);
              } else {
                timeout = setTimeout(
                /**
                * @return {?}
                */
                function () {
                  timeout = undefined;
                  func.apply(_this, _arguments);
                }, wait);
              }
            };

            result['cancel'] =
            /**
            * @return {?}
            */
            function () {
              if (timeout) {
                clearTimeout(timeout);
                timeout = undefined;
              }
            };

            return result;
          }
          /**
           * @protected
           * @param {?} itemsArrayModified
           * @param {?=} refreshCompletedCallback
           * @param {?=} maxRunTimes
           * @return {?}
           */

        }, {
          key: "refresh_internal",
          value: function refresh_internal(itemsArrayModified) {
            var _this6 = this;

            var refreshCompletedCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
            var maxRunTimes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

            //note: maxRunTimes is to force it to keep recalculating if the previous iteration caused a re-render (different sliced items in viewport or scrollPosition changed).
            //The default of 2x max will probably be accurate enough without causing too large a performance bottleneck
            //The code would typically quit out on the 2nd iteration anyways. The main time it'd think more than 2 runs would be necessary would be for vastly different sized child items or if this is the 1st time the items array was initialized.
            //Without maxRunTimes, If the user is actively scrolling this code would become an infinite loop until they stopped scrolling. This would be okay, except each scroll event would start an additional infinte loop. We want to short-circuit it to prevent this.
            if (itemsArrayModified && this.previousViewPort && this.previousViewPort.scrollStartPosition > 0) {
              //if items were prepended, scroll forward to keep same items visible

              /** @type {?} */
              var oldViewPort = this.previousViewPort;
              /** @type {?} */

              var oldViewPortItems = this.viewPortItems;
              /** @type {?} */

              var oldRefreshCompletedCallback = refreshCompletedCallback;

              refreshCompletedCallback =
              /**
              * @return {?}
              */
              function refreshCompletedCallback() {
                /** @type {?} */
                var scrollLengthDelta = _this6.previousViewPort.scrollLength - oldViewPort.scrollLength;

                if (scrollLengthDelta > 0 && _this6.viewPortItems) {
                  /** @type {?} */
                  var oldStartItem = oldViewPortItems[0];
                  /** @type {?} */

                  var oldStartItemIndex = _this6.items.findIndex(
                  /**
                  * @param {?} x
                  * @return {?}
                  */
                  function (x) {
                    return _this6.compareItems(oldStartItem, x);
                  });

                  if (oldStartItemIndex > _this6.previousViewPort.startIndexWithBuffer) {
                    /** @type {?} */
                    var itemOrderChanged = false;

                    for (var i = 1; i < _this6.viewPortItems.length; ++i) {
                      if (!_this6.compareItems(_this6.items[oldStartItemIndex + i], oldViewPortItems[i])) {
                        itemOrderChanged = true;
                        break;
                      }
                    }

                    if (!itemOrderChanged) {
                      _this6.scrollToPosition(_this6.previousViewPort.scrollStartPosition + scrollLengthDelta, 0, oldRefreshCompletedCallback);

                      return;
                    }
                  }
                }

                if (oldRefreshCompletedCallback) {
                  oldRefreshCompletedCallback();
                }
              };
            }

            this.zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              requestAnimationFrame(
              /**
              * @return {?}
              */
              function () {
                if (itemsArrayModified) {
                  _this6.resetWrapGroupDimensions();
                }
                /** @type {?} */


                var viewport = _this6.calculateViewport();
                /** @type {?} */


                var startChanged = itemsArrayModified || viewport.startIndex !== _this6.previousViewPort.startIndex;
                /** @type {?} */

                var endChanged = itemsArrayModified || viewport.endIndex !== _this6.previousViewPort.endIndex;
                /** @type {?} */

                var scrollLengthChanged = viewport.scrollLength !== _this6.previousViewPort.scrollLength;
                /** @type {?} */

                var paddingChanged = viewport.padding !== _this6.previousViewPort.padding;
                /** @type {?} */

                var scrollPositionChanged = viewport.scrollStartPosition !== _this6.previousViewPort.scrollStartPosition || viewport.scrollEndPosition !== _this6.previousViewPort.scrollEndPosition || viewport.maxScrollPosition !== _this6.previousViewPort.maxScrollPosition;
                _this6.previousViewPort = viewport;

                if (scrollLengthChanged) {
                  _this6.renderer.setStyle(_this6.invisiblePaddingElementRef.nativeElement, _this6._invisiblePaddingProperty, "".concat(viewport.scrollLength, "px"));
                }

                if (paddingChanged) {
                  if (_this6.useMarginInsteadOfTranslate) {
                    _this6.renderer.setStyle(_this6.contentElementRef.nativeElement, _this6._marginDir, "".concat(viewport.padding, "px"));
                  } else {
                    _this6.renderer.setStyle(_this6.contentElementRef.nativeElement, 'transform', "".concat(_this6._translateDir, "(").concat(viewport.padding, "px)"));

                    _this6.renderer.setStyle(_this6.contentElementRef.nativeElement, 'webkitTransform', "".concat(_this6._translateDir, "(").concat(viewport.padding, "px)"));
                  }
                }

                if (_this6.headerElementRef) {
                  /** @type {?} */
                  var scrollPosition = _this6.getScrollElement()[_this6._scrollType];
                  /** @type {?} */


                  var containerOffset = _this6.getElementsOffset();
                  /** @type {?} */


                  var offset = Math.max(scrollPosition - viewport.padding - containerOffset + _this6.headerElementRef.nativeElement.clientHeight, 0);

                  _this6.renderer.setStyle(_this6.headerElementRef.nativeElement, 'transform', "".concat(_this6._translateDir, "(").concat(offset, "px)"));

                  _this6.renderer.setStyle(_this6.headerElementRef.nativeElement, 'webkitTransform', "".concat(_this6._translateDir, "(").concat(offset, "px)"));
                }
                /** @type {?} */


                var changeEventArg = startChanged || endChanged ? {
                  startIndex: viewport.startIndex,
                  endIndex: viewport.endIndex,
                  scrollStartPosition: viewport.scrollStartPosition,
                  scrollEndPosition: viewport.scrollEndPosition,
                  startIndexWithBuffer: viewport.startIndexWithBuffer,
                  endIndexWithBuffer: viewport.endIndexWithBuffer,
                  maxScrollPosition: viewport.maxScrollPosition
                } : undefined;

                if (startChanged || endChanged || scrollPositionChanged) {
                  /** @type {?} */
                  var handleChanged =
                  /**
                  * @return {?}
                  */
                  function handleChanged() {
                    // update the scroll list to trigger re-render of components in viewport
                    _this6.viewPortItems = viewport.startIndexWithBuffer >= 0 && viewport.endIndexWithBuffer >= 0 ? _this6.items.slice(viewport.startIndexWithBuffer, viewport.endIndexWithBuffer + 1) : [];

                    _this6.vsUpdate.emit(_this6.viewPortItems);

                    if (startChanged) {
                      _this6.vsStart.emit(changeEventArg);
                    }

                    if (endChanged) {
                      _this6.vsEnd.emit(changeEventArg);
                    }

                    if (startChanged || endChanged) {
                      _this6.changeDetectorRef.markForCheck();

                      _this6.vsChange.emit(changeEventArg);
                    }

                    if (maxRunTimes > 0) {
                      _this6.refresh_internal(false, refreshCompletedCallback, maxRunTimes - 1);

                      return;
                    }

                    if (refreshCompletedCallback) {
                      refreshCompletedCallback();
                    }
                  };

                  if (_this6.executeRefreshOutsideAngularZone) {
                    handleChanged();
                  } else {
                    _this6.zone.run(handleChanged);
                  }
                } else {
                  if (maxRunTimes > 0 && (scrollLengthChanged || paddingChanged)) {
                    _this6.refresh_internal(false, refreshCompletedCallback, maxRunTimes - 1);

                    return;
                  }

                  if (refreshCompletedCallback) {
                    refreshCompletedCallback();
                  }
                }
              });
            });
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "getScrollElement",
          value: function getScrollElement() {
            return this.parentScroll instanceof Window ? document.scrollingElement || document.documentElement || document.body : this.parentScroll || this.element.nativeElement;
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "addScrollEventHandlers",
          value: function addScrollEventHandlers() {
            var _this7 = this;

            if (this.isAngularUniversalSSR) {
              return;
            }
            /** @type {?} */


            var scrollElement = this.getScrollElement();
            this.removeScrollEventHandlers();
            this.zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              if (_this7.parentScroll instanceof Window) {
                _this7.disposeScrollHandler = _this7.renderer.listen('window', 'scroll', _this7.onScroll);
                _this7.disposeResizeHandler = _this7.renderer.listen('window', 'resize', _this7.onScroll);
              } else {
                _this7.disposeScrollHandler = _this7.renderer.listen(scrollElement, 'scroll', _this7.onScroll);

                if (_this7._checkResizeInterval > 0) {
                  _this7.checkScrollElementResizedTimer = setInterval(
                  /**
                  * @return {?}
                  */
                  function () {
                    _this7.checkScrollElementResized();
                  }, _this7._checkResizeInterval);
                }
              }
            });
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "removeScrollEventHandlers",
          value: function removeScrollEventHandlers() {
            if (this.checkScrollElementResizedTimer) {
              clearInterval(this.checkScrollElementResizedTimer);
            }

            if (this.disposeScrollHandler) {
              this.disposeScrollHandler();
              this.disposeScrollHandler = undefined;
            }

            if (this.disposeResizeHandler) {
              this.disposeResizeHandler();
              this.disposeResizeHandler = undefined;
            }
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "getElementsOffset",
          value: function getElementsOffset() {
            if (this.isAngularUniversalSSR) {
              return 0;
            }
            /** @type {?} */


            var offset = 0;

            if (this.containerElementRef && this.containerElementRef.nativeElement) {
              offset += this.containerElementRef.nativeElement[this._offsetType];
            }

            if (this.parentScroll) {
              /** @type {?} */
              var scrollElement = this.getScrollElement();
              /** @type {?} */

              var elementClientRect = this.getElementSize(this.element.nativeElement);
              /** @type {?} */

              var scrollClientRect = this.getElementSize(scrollElement);

              if (this.horizontal) {
                offset += elementClientRect.left - scrollClientRect.left;
              } else {
                offset += elementClientRect.top - scrollClientRect.top;
              }

              if (!(this.parentScroll instanceof Window)) {
                offset += scrollElement[this._scrollType];
              }
            }

            return offset;
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "countItemsPerWrapGroup",
          value: function countItemsPerWrapGroup() {
            if (this.isAngularUniversalSSR) {
              return Math.round(this.horizontal ? this.ssrViewportHeight / this.ssrChildHeight : this.ssrViewportWidth / this.ssrChildWidth);
            }
            /** @type {?} */


            var propertyName = this.horizontal ? 'offsetLeft' : 'offsetTop';
            /** @type {?} */

            var children = (this.containerElementRef && this.containerElementRef.nativeElement || this.contentElementRef.nativeElement).children;
            /** @type {?} */

            var childrenLength = children ? children.length : 0;

            if (childrenLength === 0) {
              return 1;
            }
            /** @type {?} */


            var firstOffset = children[0][propertyName];
            /** @type {?} */

            var result = 1;

            while (result < childrenLength && firstOffset === children[result][propertyName]) {
              ++result;
            }

            return result;
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "getScrollStartPosition",
          value: function getScrollStartPosition() {
            /** @type {?} */
            var windowScrollValue = undefined;

            if (this.parentScroll instanceof Window) {
              windowScrollValue = window[this._pageOffsetType];
            }

            return windowScrollValue || this.getScrollElement()[this._scrollType] || 0;
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "resetWrapGroupDimensions",
          value: function resetWrapGroupDimensions() {
            /** @type {?} */
            var oldWrapGroupDimensions = this.wrapGroupDimensions;
            this.invalidateAllCachedMeasurements();

            if (!this.enableUnequalChildrenSizes || !oldWrapGroupDimensions || oldWrapGroupDimensions.numberOfKnownWrapGroupChildSizes === 0) {
              return;
            }
            /** @type {?} */


            var itemsPerWrapGroup = this.countItemsPerWrapGroup();

            for (var wrapGroupIndex = 0; wrapGroupIndex < oldWrapGroupDimensions.maxChildSizePerWrapGroup.length; ++wrapGroupIndex) {
              /** @type {?} */
              var oldWrapGroupDimension = oldWrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex];

              if (!oldWrapGroupDimension || !oldWrapGroupDimension.items || !oldWrapGroupDimension.items.length) {
                continue;
              }

              if (oldWrapGroupDimension.items.length !== itemsPerWrapGroup) {
                return;
              }
              /** @type {?} */


              var itemsChanged = false;
              /** @type {?} */

              var arrayStartIndex = itemsPerWrapGroup * wrapGroupIndex;

              for (var i = 0; i < itemsPerWrapGroup; ++i) {
                if (!this.compareItems(oldWrapGroupDimension.items[i], this.items[arrayStartIndex + i])) {
                  itemsChanged = true;
                  break;
                }
              }

              if (!itemsChanged) {
                ++this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
                this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths += oldWrapGroupDimension.childWidth || 0;
                this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights += oldWrapGroupDimension.childHeight || 0;
                this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex] = oldWrapGroupDimension;
              }
            }
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "calculateDimensions",
          value: function calculateDimensions() {
            /** @type {?} */
            var scrollElement = this.getScrollElement();
            /** @type {?} */

            var maxCalculatedScrollBarSize = 25;
            this.calculatedScrollbarHeight = Math.max(Math.min(scrollElement.offsetHeight - scrollElement.clientHeight, maxCalculatedScrollBarSize), this.calculatedScrollbarHeight);
            this.calculatedScrollbarWidth = Math.max(Math.min(scrollElement.offsetWidth - scrollElement.clientWidth, maxCalculatedScrollBarSize), this.calculatedScrollbarWidth);
            /** @type {?} */

            var viewportWidth = scrollElement.offsetWidth - (this.scrollbarWidth || this.calculatedScrollbarWidth || (this.horizontal ? 0 : maxCalculatedScrollBarSize));
            /** @type {?} */

            var viewportHeight = scrollElement.offsetHeight - (this.scrollbarHeight || this.calculatedScrollbarHeight || (this.horizontal ? maxCalculatedScrollBarSize : 0));
            /** @type {?} */

            var content = this.containerElementRef && this.containerElementRef.nativeElement || this.contentElementRef.nativeElement;
            /** @type {?} */

            var itemsPerWrapGroup = this.countItemsPerWrapGroup();
            /** @type {?} */

            var wrapGroupsPerPage;
            /** @type {?} */

            var defaultChildWidth;
            /** @type {?} */

            var defaultChildHeight;

            if (this.isAngularUniversalSSR) {
              viewportWidth = this.ssrViewportWidth;
              viewportHeight = this.ssrViewportHeight;
              defaultChildWidth = this.ssrChildWidth;
              defaultChildHeight = this.ssrChildHeight;
              /** @type {?} */

              var itemsPerRow = Math.max(Math.ceil(viewportWidth / defaultChildWidth), 1);
              /** @type {?} */

              var itemsPerCol = Math.max(Math.ceil(viewportHeight / defaultChildHeight), 1);
              wrapGroupsPerPage = this.horizontal ? itemsPerRow : itemsPerCol;
            } else if (!this.enableUnequalChildrenSizes) {
              if (content.children.length > 0) {
                if (!this.childWidth || !this.childHeight) {
                  if (!this.minMeasuredChildWidth && viewportWidth > 0) {
                    this.minMeasuredChildWidth = viewportWidth;
                  }

                  if (!this.minMeasuredChildHeight && viewportHeight > 0) {
                    this.minMeasuredChildHeight = viewportHeight;
                  }
                }
                /** @type {?} */


                var child = content.children[0];
                /** @type {?} */

                var clientRect = this.getElementSize(child);
                this.minMeasuredChildWidth = Math.min(this.minMeasuredChildWidth, clientRect.width);
                this.minMeasuredChildHeight = Math.min(this.minMeasuredChildHeight, clientRect.height);
              }

              defaultChildWidth = this.childWidth || this.minMeasuredChildWidth || viewportWidth;
              defaultChildHeight = this.childHeight || this.minMeasuredChildHeight || viewportHeight;
              /** @type {?} */

              var _itemsPerRow = Math.max(Math.ceil(viewportWidth / defaultChildWidth), 1);
              /** @type {?} */


              var _itemsPerCol = Math.max(Math.ceil(viewportHeight / defaultChildHeight), 1);

              wrapGroupsPerPage = this.horizontal ? _itemsPerRow : _itemsPerCol;
            } else {
              /** @type {?} */
              var scrollOffset = scrollElement[this._scrollType] - (this.previousViewPort ? this.previousViewPort.padding : 0);
              /** @type {?} */

              var arrayStartIndex = this.previousViewPort.startIndexWithBuffer || 0;
              /** @type {?} */

              var wrapGroupIndex = Math.ceil(arrayStartIndex / itemsPerWrapGroup);
              /** @type {?} */

              var maxWidthForWrapGroup = 0;
              /** @type {?} */

              var maxHeightForWrapGroup = 0;
              /** @type {?} */

              var sumOfVisibleMaxWidths = 0;
              /** @type {?} */

              var sumOfVisibleMaxHeights = 0;
              wrapGroupsPerPage = 0;

              for (var i = 0; i < content.children.length; ++i) {
                ++arrayStartIndex;
                /** @type {?} */

                var _child = content.children[i];
                /** @type {?} */

                var _clientRect = this.getElementSize(_child);

                maxWidthForWrapGroup = Math.max(maxWidthForWrapGroup, _clientRect.width);
                maxHeightForWrapGroup = Math.max(maxHeightForWrapGroup, _clientRect.height);

                if (arrayStartIndex % itemsPerWrapGroup === 0) {
                  /** @type {?} */
                  var oldValue = this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex];

                  if (oldValue) {
                    --this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
                    this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths -= oldValue.childWidth || 0;
                    this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights -= oldValue.childHeight || 0;
                  }

                  ++this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
                  /** @type {?} */

                  var items = this.items.slice(arrayStartIndex - itemsPerWrapGroup, arrayStartIndex);
                  this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex] = {
                    childWidth: maxWidthForWrapGroup,
                    childHeight: maxHeightForWrapGroup,
                    items: items
                  };
                  this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths += maxWidthForWrapGroup;
                  this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights += maxHeightForWrapGroup;

                  if (this.horizontal) {
                    /** @type {?} */
                    var maxVisibleWidthForWrapGroup = Math.min(maxWidthForWrapGroup, Math.max(viewportWidth - sumOfVisibleMaxWidths, 0));

                    if (scrollOffset > 0) {
                      /** @type {?} */
                      var scrollOffsetToRemove = Math.min(scrollOffset, maxVisibleWidthForWrapGroup);
                      maxVisibleWidthForWrapGroup -= scrollOffsetToRemove;
                      scrollOffset -= scrollOffsetToRemove;
                    }

                    sumOfVisibleMaxWidths += maxVisibleWidthForWrapGroup;

                    if (maxVisibleWidthForWrapGroup > 0 && viewportWidth >= sumOfVisibleMaxWidths) {
                      ++wrapGroupsPerPage;
                    }
                  } else {
                    /** @type {?} */
                    var maxVisibleHeightForWrapGroup = Math.min(maxHeightForWrapGroup, Math.max(viewportHeight - sumOfVisibleMaxHeights, 0));

                    if (scrollOffset > 0) {
                      /** @type {?} */
                      var _scrollOffsetToRemove = Math.min(scrollOffset, maxVisibleHeightForWrapGroup);

                      maxVisibleHeightForWrapGroup -= _scrollOffsetToRemove;
                      scrollOffset -= _scrollOffsetToRemove;
                    }

                    sumOfVisibleMaxHeights += maxVisibleHeightForWrapGroup;

                    if (maxVisibleHeightForWrapGroup > 0 && viewportHeight >= sumOfVisibleMaxHeights) {
                      ++wrapGroupsPerPage;
                    }
                  }

                  ++wrapGroupIndex;
                  maxWidthForWrapGroup = 0;
                  maxHeightForWrapGroup = 0;
                }
              }
              /** @type {?} */


              var averageChildWidth = this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths / this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
              /** @type {?} */

              var averageChildHeight = this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights / this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
              defaultChildWidth = this.childWidth || averageChildWidth || viewportWidth;
              defaultChildHeight = this.childHeight || averageChildHeight || viewportHeight;

              if (this.horizontal) {
                if (viewportWidth > sumOfVisibleMaxWidths) {
                  wrapGroupsPerPage += Math.ceil((viewportWidth - sumOfVisibleMaxWidths) / defaultChildWidth);
                }
              } else {
                if (viewportHeight > sumOfVisibleMaxHeights) {
                  wrapGroupsPerPage += Math.ceil((viewportHeight - sumOfVisibleMaxHeights) / defaultChildHeight);
                }
              }
            }
            /** @type {?} */


            var itemCount = this.items.length;
            /** @type {?} */

            var itemsPerPage = itemsPerWrapGroup * wrapGroupsPerPage;
            /** @type {?} */

            var pageCount_fractional = itemCount / itemsPerPage;
            /** @type {?} */

            var numberOfWrapGroups = Math.ceil(itemCount / itemsPerWrapGroup);
            /** @type {?} */

            var scrollLength = 0;
            /** @type {?} */

            var defaultScrollLengthPerWrapGroup = this.horizontal ? defaultChildWidth : defaultChildHeight;

            if (this.enableUnequalChildrenSizes) {
              /** @type {?} */
              var numUnknownChildSizes = 0;

              for (var _i = 0; _i < numberOfWrapGroups; ++_i) {
                /** @type {?} */
                var childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[_i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[_i][this._childScrollDim];

                if (childSize) {
                  scrollLength += childSize;
                } else {
                  ++numUnknownChildSizes;
                }
              }

              scrollLength += Math.round(numUnknownChildSizes * defaultScrollLengthPerWrapGroup);
            } else {
              scrollLength = numberOfWrapGroups * defaultScrollLengthPerWrapGroup;
            }

            if (this.headerElementRef) {
              scrollLength += this.headerElementRef.nativeElement.clientHeight;
            }
            /** @type {?} */


            var viewportLength = this.horizontal ? viewportWidth : viewportHeight;
            /** @type {?} */

            var maxScrollPosition = Math.max(scrollLength - viewportLength, 0);
            return {
              itemCount: itemCount,
              itemsPerWrapGroup: itemsPerWrapGroup,
              wrapGroupsPerPage: wrapGroupsPerPage,
              itemsPerPage: itemsPerPage,
              pageCount_fractional: pageCount_fractional,
              childWidth: defaultChildWidth,
              childHeight: defaultChildHeight,
              scrollLength: scrollLength,
              viewportLength: viewportLength,
              maxScrollPosition: maxScrollPosition
            };
          }
          /**
           * @protected
           * @param {?} arrayStartIndexWithBuffer
           * @param {?} dimensions
           * @return {?}
           */

        }, {
          key: "calculatePadding",
          value: function calculatePadding(arrayStartIndexWithBuffer, dimensions) {
            if (dimensions.itemCount === 0) {
              return 0;
            }
            /** @type {?} */


            var defaultScrollLengthPerWrapGroup = dimensions[this._childScrollDim];
            /** @type {?} */

            var startingWrapGroupIndex = Math.floor(arrayStartIndexWithBuffer / dimensions.itemsPerWrapGroup) || 0;

            if (!this.enableUnequalChildrenSizes) {
              return defaultScrollLengthPerWrapGroup * startingWrapGroupIndex;
            }
            /** @type {?} */


            var numUnknownChildSizes = 0;
            /** @type {?} */

            var result = 0;

            for (var i = 0; i < startingWrapGroupIndex; ++i) {
              /** @type {?} */
              var childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[i][this._childScrollDim];

              if (childSize) {
                result += childSize;
              } else {
                ++numUnknownChildSizes;
              }
            }

            result += Math.round(numUnknownChildSizes * defaultScrollLengthPerWrapGroup);
            return result;
          }
          /**
           * @protected
           * @param {?} scrollPosition
           * @param {?} dimensions
           * @return {?}
           */

        }, {
          key: "calculatePageInfo",
          value: function calculatePageInfo(scrollPosition, dimensions) {
            /** @type {?} */
            var scrollPercentage = 0;

            if (this.enableUnequalChildrenSizes) {
              /** @type {?} */
              var numberOfWrapGroups = Math.ceil(dimensions.itemCount / dimensions.itemsPerWrapGroup);
              /** @type {?} */

              var totalScrolledLength = 0;
              /** @type {?} */

              var defaultScrollLengthPerWrapGroup = dimensions[this._childScrollDim];

              for (var i = 0; i < numberOfWrapGroups; ++i) {
                /** @type {?} */
                var childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[i][this._childScrollDim];

                if (childSize) {
                  totalScrolledLength += childSize;
                } else {
                  totalScrolledLength += defaultScrollLengthPerWrapGroup;
                }

                if (scrollPosition < totalScrolledLength) {
                  scrollPercentage = i / numberOfWrapGroups;
                  break;
                }
              }
            } else {
              scrollPercentage = scrollPosition / dimensions.scrollLength;
            }
            /** @type {?} */


            var startingArrayIndex_fractional = Math.min(Math.max(scrollPercentage * dimensions.pageCount_fractional, 0), dimensions.pageCount_fractional) * dimensions.itemsPerPage;
            /** @type {?} */

            var maxStart = dimensions.itemCount - dimensions.itemsPerPage - 1;
            /** @type {?} */

            var arrayStartIndex = Math.min(Math.floor(startingArrayIndex_fractional), maxStart);
            arrayStartIndex -= arrayStartIndex % dimensions.itemsPerWrapGroup; // round down to start of wrapGroup

            if (this.stripedTable) {
              /** @type {?} */
              var bufferBoundary = 2 * dimensions.itemsPerWrapGroup;

              if (arrayStartIndex % bufferBoundary !== 0) {
                arrayStartIndex = Math.max(arrayStartIndex - arrayStartIndex % bufferBoundary, 0);
              }
            }
            /** @type {?} */


            var arrayEndIndex = Math.ceil(startingArrayIndex_fractional) + dimensions.itemsPerPage - 1;
            /** @type {?} */

            var endIndexWithinWrapGroup = (arrayEndIndex + 1) % dimensions.itemsPerWrapGroup;

            if (endIndexWithinWrapGroup > 0) {
              arrayEndIndex += dimensions.itemsPerWrapGroup - endIndexWithinWrapGroup; // round up to end of wrapGroup
            }

            if (isNaN(arrayStartIndex)) {
              arrayStartIndex = 0;
            }

            if (isNaN(arrayEndIndex)) {
              arrayEndIndex = 0;
            }

            arrayStartIndex = Math.min(Math.max(arrayStartIndex, 0), dimensions.itemCount - 1);
            arrayEndIndex = Math.min(Math.max(arrayEndIndex, 0), dimensions.itemCount - 1);
            /** @type {?} */

            var bufferSize = this.bufferAmount * dimensions.itemsPerWrapGroup;
            /** @type {?} */

            var startIndexWithBuffer = Math.min(Math.max(arrayStartIndex - bufferSize, 0), dimensions.itemCount - 1);
            /** @type {?} */

            var endIndexWithBuffer = Math.min(Math.max(arrayEndIndex + bufferSize, 0), dimensions.itemCount - 1);
            return {
              startIndex: arrayStartIndex,
              endIndex: arrayEndIndex,
              startIndexWithBuffer: startIndexWithBuffer,
              endIndexWithBuffer: endIndexWithBuffer,
              scrollStartPosition: scrollPosition,
              scrollEndPosition: scrollPosition + dimensions.viewportLength,
              maxScrollPosition: dimensions.maxScrollPosition
            };
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "calculateViewport",
          value: function calculateViewport() {
            /** @type {?} */
            var dimensions = this.calculateDimensions();
            /** @type {?} */

            var offset = this.getElementsOffset();
            /** @type {?} */

            var scrollStartPosition = this.getScrollStartPosition();

            if (scrollStartPosition > dimensions.scrollLength + offset && !(this.parentScroll instanceof Window)) {
              scrollStartPosition = dimensions.scrollLength;
            } else {
              scrollStartPosition -= offset;
            }

            scrollStartPosition = Math.max(0, scrollStartPosition);
            /** @type {?} */

            var pageInfo = this.calculatePageInfo(scrollStartPosition, dimensions);
            /** @type {?} */

            var newPadding = this.calculatePadding(pageInfo.startIndexWithBuffer, dimensions);
            /** @type {?} */

            var newScrollLength = dimensions.scrollLength;
            return {
              startIndex: pageInfo.startIndex,
              endIndex: pageInfo.endIndex,
              startIndexWithBuffer: pageInfo.startIndexWithBuffer,
              endIndexWithBuffer: pageInfo.endIndexWithBuffer,
              padding: Math.round(newPadding),
              scrollLength: Math.round(newScrollLength),
              scrollStartPosition: pageInfo.scrollStartPosition,
              scrollEndPosition: pageInfo.scrollEndPosition,
              maxScrollPosition: pageInfo.maxScrollPosition
            };
          }
        }]);

        return VirtualScrollerComponent;
      }();

      VirtualScrollerComponent.ɵfac = function VirtualScrollerComponent_Factory(t) {
        return new (t || VirtualScrollerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"]('virtual-scroller-default-options', 8));
      };

      VirtualScrollerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: VirtualScrollerComponent,
        selectors: [["virtual-scroller"], ["", "virtualScroller", ""]],
        contentQueries: function VirtualScrollerComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headerElementRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.containerElementRef = _t.first);
          }
        },
        viewQuery: function VirtualScrollerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.invisiblePaddingElementRef = _t.first);
          }
        },
        hostVars: 6,
        hostBindings: function VirtualScrollerComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("horizontal", ctx.horizontal)("vertical", !ctx.horizontal)("selfScroll", !ctx.parentScroll);
          }
        },
        inputs: {
          executeRefreshOutsideAngularZone: "executeRefreshOutsideAngularZone",
          useMarginInsteadOfTranslate: "useMarginInsteadOfTranslate",
          ssrViewportWidth: "ssrViewportWidth",
          ssrViewportHeight: "ssrViewportHeight",
          compareItems: "compareItems",
          scrollThrottlingTime: "scrollThrottlingTime",
          scrollDebounceTime: "scrollDebounceTime",
          scrollAnimationTime: "scrollAnimationTime",
          scrollbarWidth: "scrollbarWidth",
          scrollbarHeight: "scrollbarHeight",
          checkResizeInterval: "checkResizeInterval",
          resizeBypassRefreshThreshold: "resizeBypassRefreshThreshold",
          modifyOverflowStyleOfParentScroll: "modifyOverflowStyleOfParentScroll",
          stripedTable: "stripedTable",
          horizontal: "horizontal",
          enableUnequalChildrenSizes: "enableUnequalChildrenSizes",
          bufferAmount: "bufferAmount",
          items: "items",
          parentScroll: "parentScroll",
          childWidth: "childWidth",
          childHeight: "childHeight",
          ssrChildWidth: "ssrChildWidth",
          ssrChildHeight: "ssrChildHeight"
        },
        outputs: {
          vsUpdate: "vsUpdate",
          vsChange: "vsChange",
          vsStart: "vsStart",
          vsEnd: "vsEnd"
        },
        exportAs: ["virtualScroller"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c4,
        decls: 5,
        vars: 0,
        consts: [[1, "total-padding"], ["invisiblePadding", ""], [1, "scrollable-content"], ["content", ""]],
        template: function VirtualScrollerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\n      position: relative;\n\t  display: block;\n      -webkit-overflow-scrolling: touch;\n    }\n\t\n\t.horizontal.selfScroll[_nghost-%COMP%] {\n      overflow-y: visible;\n      overflow-x: auto;\n\t}\n\t.vertical.selfScroll[_nghost-%COMP%] {\n      overflow-y: auto;\n      overflow-x: visible;\n\t}\n\t\n    .scrollable-content[_ngcontent-%COMP%] {\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      max-width: 100vw;\n      max-height: 100vh;\n      position: absolute;\n    }\n\n\t.scrollable-content[_ngcontent-%COMP%]     > * {\n\t\tbox-sizing: border-box;\n\t}\n\t\n\t.horizontal[_nghost-%COMP%] {\n\t\twhite-space: nowrap;\n\t}\n\t\n\t.horizontal[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%] {\n\t\tdisplay: flex;\n\t}\n\t\n\t.horizontal[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%]     > * {\n\t\tflex-shrink: 0;\n\t\tflex-grow: 0;\n\t\twhite-space: initial;\n\t}\n\t\n    .total-padding[_ngcontent-%COMP%] {\n      width: 1px;\n      opacity: 0;\n    }\n    \n    .horizontal[_nghost-%COMP%]   .total-padding[_ngcontent-%COMP%] {\n      height: 100%;\n    }"]
      });
      /** @nocollapse */

      VirtualScrollerComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
            args: ['virtual-scroller-default-options']
          }]
        }];
      };

      VirtualScrollerComponent.propDecorators = {
        executeRefreshOutsideAngularZone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        enableUnequalChildrenSizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        useMarginInsteadOfTranslate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        modifyOverflowStyleOfParentScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        stripedTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        scrollbarWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        scrollbarHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        childWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        childHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        ssrChildWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        ssrChildHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        ssrViewportWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        ssrViewportHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        bufferAmount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        scrollAnimationTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        resizeBypassRefreshThreshold: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        scrollThrottlingTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        scrollDebounceTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        checkResizeInterval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        compareItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        horizontal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        parentScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        vsUpdate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }],
        vsChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }],
        vsStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }],
        vsEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }],
        contentElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
          args: ['content', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
            "static": false
          }]
        }],
        invisiblePaddingElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
          args: ['invisiblePadding', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
            "static": false
          }]
        }],
        headerElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
          args: ['header', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
            "static": false
          }]
        }],
        containerElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
          args: ['container', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
            "static": false
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VirtualScrollerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
          args: [{
            selector: 'virtual-scroller,[virtualScroller]',
            exportAs: 'virtualScroller',
            template: "\n    <div class=\"total-padding\" #invisiblePadding></div>\n    <div class=\"scrollable-content\" #content>\n      <ng-content></ng-content>\n    </div>\n  ",
            host: {
              '[class.horizontal]': "horizontal",
              '[class.vertical]': "!horizontal",
              '[class.selfScroll]': "!parentScroll"
            },
            styles: ["\n    :host {\n      position: relative;\n\t  display: block;\n      -webkit-overflow-scrolling: touch;\n    }\n\t\n\t:host.horizontal.selfScroll {\n      overflow-y: visible;\n      overflow-x: auto;\n\t}\n\t:host.vertical.selfScroll {\n      overflow-y: auto;\n      overflow-x: visible;\n\t}\n\t\n    .scrollable-content {\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      max-width: 100vw;\n      max-height: 100vh;\n      position: absolute;\n    }\n\n\t.scrollable-content ::ng-deep > * {\n\t\tbox-sizing: border-box;\n\t}\n\t\n\t:host.horizontal {\n\t\twhite-space: nowrap;\n\t}\n\t\n\t:host.horizontal .scrollable-content {\n\t\tdisplay: flex;\n\t}\n\t\n\t:host.horizontal .scrollable-content ::ng-deep > * {\n\t\tflex-shrink: 0;\n\t\tflex-grow: 0;\n\t\twhite-space: initial;\n\t}\n\t\n    .total-padding {\n      width: 1px;\n      opacity: 0;\n    }\n    \n    :host.horizontal .total-padding {\n      height: 100%;\n    }\n  "]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
              args: ['virtual-scroller-default-options']
            }]
          }];
        }, {
          executeRefreshOutsideAngularZone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          useMarginInsteadOfTranslate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          ssrViewportWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          ssrViewportHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          compareItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          vsUpdate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
          }],
          vsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
          }],
          vsStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
          }],
          vsEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
          }],
          scrollThrottlingTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          scrollDebounceTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          scrollAnimationTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          scrollbarWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          scrollbarHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          checkResizeInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          resizeBypassRefreshThreshold: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          modifyOverflowStyleOfParentScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          stripedTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          horizontal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          enableUnequalChildrenSizes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          bufferAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          parentScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          childWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          childHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          ssrChildWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          ssrChildHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          contentElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: ['content', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
              "static": false
            }]
          }],
          invisiblePaddingElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: ['invisiblePadding', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
              "static": false
            }]
          }],
          headerElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
            args: ['header', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
              "static": false
            }]
          }],
          containerElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
            args: ['container', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
              "static": false
            }]
          }]
        });
      })();

      if (false) {}

      var VirtualScrollerModule = function VirtualScrollerModule() {
        _classCallCheck(this, VirtualScrollerModule);
      };

      VirtualScrollerModule.ɵfac = function VirtualScrollerModule_Factory(t) {
        return new (t || VirtualScrollerModule)();
      };

      VirtualScrollerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: VirtualScrollerModule
      });
      VirtualScrollerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        providers: [{
          provide: 'virtual-scroller-default-options',
          useFactory: VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VirtualScrollerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
          args: [{
            exports: [VirtualScrollerComponent],
            declarations: [VirtualScrollerComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
            providers: [{
              provide: 'virtual-scroller-default-options',
              useFactory: VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY
            }]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VirtualScrollerModule, {
          declarations: function declarations() {
            return [VirtualScrollerComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule];
          },
          exports: function exports() {
            return [VirtualScrollerComponent];
          }
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var DROPDOWN_CONTROL_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(
        /**
        * @return {?}
        */
        function () {
          return _AngularMultiSelect;
        }),
        multi: true
      };
      /** @type {?} */

      var DROPDOWN_CONTROL_VALIDATION = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALIDATORS,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(
        /**
        * @return {?}
        */
        function () {
          return _AngularMultiSelect;
        }),
        multi: true
      };
      /** @type {?} */

      var noop =
      /**
      * @return {?}
      */
      function noop() {};

      var ɵ0 = noop;

      var _AngularMultiSelect = /*#__PURE__*/function () {
        /**
         * @param {?} _elementRef
         * @param {?} cdr
         * @param {?} ds
         */
        function _AngularMultiSelect(_elementRef, cdr, ds) {
          var _this8 = this;

          _classCallCheck(this, _AngularMultiSelect);

          this._elementRef = _elementRef;
          this.cdr = cdr;
          this.ds = ds;
          this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.onDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.onDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.onScrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.onFilterSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.onFilterDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.onAddFilterNewItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.onGroupSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.onGroupDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.virtualdata = [];
          this.searchTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
          this.isActive = false;
          this.isSelectAll = false;
          this.isFilterSelectAll = false;
          this.isInfiniteFilterSelectAll = false;
          this.chunkIndex = [];
          this.cachedItems = [];
          this.groupCachedItems = [];
          this.itemHeight = 41.6;
          this.filterLength = 0;
          this.infiniteFilterLength = 0;
          this.dropdownListYOffset = 0;
          this.dropDownWidth = 0;
          this.dropDownTop = 0;
          this.dropDownLeft = 0;
          this.id = Math.random().toString(36).substring(2);
          this.defaultSettings = {
            singleSelection: false,
            text: 'Select',
            enableCheckAll: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            filterSelectAllText: 'Select all filtered results',
            filterUnSelectAllText: 'UnSelect all filtered results',
            enableSearchFilter: false,
            searchBy: [],
            maxHeight: 300,
            badgeShowLimit: 999999999999,
            classes: '',
            disabled: false,
            searchPlaceholderText: 'Search',
            showCheckbox: true,
            noDataLabel: 'No Data Available',
            searchAutofocus: true,
            lazyLoading: false,
            labelKey: 'itemName',
            primaryKey: 'id',
            position: 'bottom',
            autoPosition: true,
            enableFilterSelectAll: true,
            selectGroup: false,
            addNewItemOnFilter: false,
            addNewButtonText: "Add",
            escapeToClose: true,
            clearAll: true,
            tagToBody: true
          };
          this.randomSize = true;
          this.filteredList = [];
          this.virtualScroollInit = false;
          this.isDisabledItemPresent = false;
          this.onTouchedCallback = noop;
          this.onChangeCallback = noop;
          this.searchTerm$.asObservable().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(1000), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(
          /**
          * @param {?} term
          * @return {?}
          */
          function (term) {
            return term;
          })).subscribe(
          /**
          * @param {?} val
          * @return {?}
          */
          function (val) {
            _this8.filterInfiniteList(val);
          });
        }
        /**
         * @param {?} event
         * @return {?}
         */


        _createClass(_AngularMultiSelect, [{
          key: "onEscapeDown",
          value: function onEscapeDown(event) {
            if (this.settings.escapeToClose) {
              this.closeDropdown();
            }
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onScroll",
          value: function onScroll(event) {
            if (this.isActive) {
              this.closeDropdown();
              /*             const elem = this.cuppaDropdown.nativeElement;
                          if(this.settings.autoPosition){
                              this.dropDownTop = elem.getBoundingClientRect().y + elem.clientHeight + 1;
                          }
                          this.dropDownLeft = elem.getBoundingClientRect().x; */
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.settings = Object.assign(this.defaultSettings, this.settings);
            this.cachedItems = this.cloneArray(this.data);

            if (this.settings.position == 'top') {
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this9.selectedListHeight = {
                  val: 0
                };
                _this9.selectedListHeight.val = _this9.selectedListElem.nativeElement.clientHeight;
              });
            }

            this.subscription = this.ds.getData().subscribe(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              if (data) {
                /** @type {?} */
                var len = 0;
                data.forEach(
                /**
                * @param {?} obj
                * @param {?} i
                * @return {?}
                */
                function (obj, i) {
                  if (obj.disabled) {
                    _this9.isDisabledItemPresent = true;
                  }

                  if (!obj.hasOwnProperty('grpTitle')) {
                    len++;
                  }
                });
                _this9.filterLength = len;

                _this9.onFilterChange(data);
              }
            });
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this9.calculateDropdownDirection();
            });
            this.virtualScroollInit = false;
          }
          /**
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.data && !changes.data.firstChange) {
              if (this.settings.groupBy) {
                this.groupedData = this.transformData(this.data, this.settings.groupBy);

                if (this.data.length == 0) {
                  this.selectedItems = [];
                }

                this.groupCachedItems = this.cloneArray(this.groupedData);
              }

              this.cachedItems = this.cloneArray(this.data);
            }

            if (changes.settings && !changes.settings.firstChange) {
              this.settings = Object.assign(this.defaultSettings, this.settings);
            }

            if (changes.loading) {}

            if (this.settings.lazyLoading && this.virtualScroollInit && changes.data) {
              this.virtualdata = changes.data.currentValue;
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.selectedItems) {
              if (this.selectedItems.length == 0 || this.data.length == 0 || this.selectedItems.length < this.data.length) {
                this.isSelectAll = false;
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.settings.lazyLoading) {// this._elementRef.nativeElement.getElementsByClassName("lazyContainer")[0].addEventListener('scroll', this.onScroll.bind(this));
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            if (this.selectedListElem.nativeElement.clientHeight && this.settings.position == 'top' && this.selectedListHeight) {
              this.selectedListHeight.val = this.selectedListElem.nativeElement.clientHeight;
              this.cdr.detectChanges();
            } //this.calculateDropdownDirection();

          }
          /**
           * @param {?} item
           * @param {?} index
           * @param {?} evt
           * @return {?}
           */

        }, {
          key: "onItemClick",
          value: function onItemClick(item, index, evt) {
            if (item.disabled) {
              return false;
            }

            if (this.settings.disabled) {
              return false;
            }
            /** @type {?} */


            var found = this.isSelected(item);
            /** @type {?} */

            var limit = this.selectedItems.length < this.settings.limitSelection ? true : false;

            if (!found) {
              if (this.settings.limitSelection) {
                if (limit) {
                  this.addSelected(item);
                  this.onSelect.emit(item);
                }
              } else {
                this.addSelected(item);
                this.onSelect.emit(item);
              }
            } else {
              this.removeSelected(item);
              this.onDeSelect.emit(item);
            }

            if (this.isSelectAll || this.data.length > this.selectedItems.length) {
              this.isSelectAll = false;
            }

            if (this.data.length == this.selectedItems.length) {
              this.isSelectAll = true;
            }

            if (this.settings.groupBy) {
              this.updateGroupInfo(item);
            }
          }
          /**
           * @param {?} c
           * @return {?}
           */

        }, {
          key: "validate",
          value: function validate(c) {
            return null;
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            if (value !== undefined && value !== null && value !== '') {
              if (this.settings.singleSelection) {
                if (this.settings.groupBy) {
                  this.groupedData = this.transformData(this.data, this.settings.groupBy);
                  this.groupCachedItems = this.cloneArray(this.groupedData);
                  this.selectedItems = [value[0]];
                } else {
                  try {
                    if (value.length > 1) {
                      this.selectedItems = [value[0]];
                      throw new MyException(404, {
                        "msg": "Single Selection Mode, Selected Items cannot have more than one item."
                      });
                    } else {
                      this.selectedItems = value;
                    }
                  } catch (e) {
                    console.error(e.body.msg);
                  }
                }
              } else {
                if (this.settings.limitSelection) {
                  this.selectedItems = value.slice(0, this.settings.limitSelection);
                } else {
                  this.selectedItems = value;
                }

                if (this.selectedItems.length === this.data.length && this.data.length > 0) {
                  this.isSelectAll = true;
                }

                if (this.settings.groupBy) {
                  this.groupedData = this.transformData(this.data, this.settings.groupBy);
                  this.groupCachedItems = this.cloneArray(this.groupedData);
                }
              }
            } else {
              this.selectedItems = [];
            }
          } //From ControlValueAccessor interface

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChangeCallback = fn;
          } //From ControlValueAccessor interface

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouchedCallback = fn;
          }
          /**
           * @param {?} index
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "trackByFn",
          value: function trackByFn(index, item) {
            return item[this.settings.primaryKey];
          }
          /**
           * @param {?} clickedItem
           * @return {?}
           */

        }, {
          key: "isSelected",
          value: function isSelected(clickedItem) {
            var _this10 = this;

            if (clickedItem.disabled) {
              return false;
            }
            /** @type {?} */


            var found = false;
            this.selectedItems && this.selectedItems.forEach(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              if (clickedItem[_this10.settings.primaryKey] === item[_this10.settings.primaryKey]) {
                found = true;
              }
            });
            return found;
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "addSelected",
          value: function addSelected(item) {
            if (item.disabled) {
              return;
            }

            if (this.settings.singleSelection) {
              this.selectedItems = [];
              this.selectedItems.push(item);
              this.closeDropdown();
            } else this.selectedItems.push(item);

            this.onChangeCallback(this.selectedItems);
            this.onTouchedCallback(this.selectedItems);
          }
          /**
           * @param {?} clickedItem
           * @return {?}
           */

        }, {
          key: "removeSelected",
          value: function removeSelected(clickedItem) {
            var _this11 = this;

            this.selectedItems && this.selectedItems.forEach(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              if (clickedItem[_this11.settings.primaryKey] === item[_this11.settings.primaryKey]) {
                _this11.selectedItems.splice(_this11.selectedItems.indexOf(item), 1);
              }
            });
            this.onChangeCallback(this.selectedItems);
            this.onTouchedCallback(this.selectedItems);
          }
          /**
           * @param {?} evt
           * @return {?}
           */

        }, {
          key: "toggleDropdown",
          value: function toggleDropdown(evt) {
            if (this.settings.disabled) {
              return false;
            }

            this.isActive = !this.isActive;

            if (this.isActive) {
              this.openDropdown();
              this.calculateDropdownDirection();
            } else {
              this.closeDropdown();
            }

            if (this.settings.lazyLoading) {
              this.virtualdata = this.data;
              this.virtualScroollInit = true;
            }

            evt.preventDefault();
          }
          /**
           * @return {?}
           */

        }, {
          key: "openDropdown",
          value: function openDropdown() {
            var _this12 = this;

            if (this.settings.disabled) {
              return false;
            }

            this.isActive = true;

            if (this.settings.searchAutofocus && this.searchInput && this.settings.enableSearchFilter && !this.searchTempl) {
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this12.searchInput.nativeElement.focus();
              }, 0);
            }

            this.onOpen.emit(true);
          }
          /**
           * @return {?}
           */

        }, {
          key: "closeDropdown",
          value: function closeDropdown() {
            if (this.searchInput && this.settings.lazyLoading) {
              this.searchInput.nativeElement.value = "";
            }

            if (this.searchInput) {
              this.searchInput.nativeElement.value = "";
            }

            this.filter = "";
            this.isActive = false;
            this.onClose.emit(false);
          }
          /**
           * @return {?}
           */

        }, {
          key: "closeDropdownOnClickOut",
          value: function closeDropdownOnClickOut() {
            if (this.isActive) {
              if (this.searchInput && this.settings.lazyLoading) {
                this.searchInput.nativeElement.value = "";
              }

              if (this.searchInput) {
                this.searchInput.nativeElement.value = "";
              }

              this.filter = "";
              this.isActive = false;
              this.clearSearch();
              this.onClose.emit(false);
            }
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "toggleSelectAll",
          value: function toggleSelectAll(event) {
            var _this13 = this;

            if (!this.isSelectAll) {
              this.selectedItems = [];

              if (this.settings.groupBy) {
                this.groupedData.forEach(
                /**
                * @param {?} obj
                * @return {?}
                */
                function (obj) {
                  obj.selected = !obj.disabled;
                });
                this.groupCachedItems.forEach(
                /**
                * @param {?} obj
                * @return {?}
                */
                function (obj) {
                  obj.selected = !obj.disabled;
                });
              } // this.selectedItems = this.data.slice();


              this.selectedItems = this.data.filter(
              /**
              * @param {?} individualData
              * @return {?}
              */
              function (individualData) {
                return !individualData.disabled;
              });
              this.isSelectAll = true;
              this.onChangeCallback(this.selectedItems);
              this.onTouchedCallback(this.selectedItems);
              this.onSelectAll.emit(this.selectedItems);
            } else {
              if (this.settings.groupBy) {
                this.groupedData.forEach(
                /**
                * @param {?} obj
                * @return {?}
                */
                function (obj) {
                  obj.selected = false;
                });
                this.groupCachedItems.forEach(
                /**
                * @param {?} obj
                * @return {?}
                */
                function (obj) {
                  obj.selected = false;
                });
              }

              this.selectedItems = [];
              this.isSelectAll = false;
              this.onChangeCallback(this.selectedItems);
              this.onTouchedCallback(this.selectedItems);
              this.onDeSelectAll.emit(this.selectedItems);
            }

            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this13.calculateDropdownDirection();
            });
            event.stopPropagation();
          }
          /**
           * @return {?}
           */

        }, {
          key: "filterGroupedList",
          value: function filterGroupedList() {
            var _this14 = this;

            if (this.filter == "" || this.filter == null) {
              this.clearSearch();
              return;
            }

            this.groupedData = this.cloneArray(this.groupCachedItems);
            this.groupedData = this.groupedData.filter(
            /**
            * @param {?} obj
            * @return {?}
            */
            function (obj) {
              /** @type {?} */
              var arr = [];

              if (obj[_this14.settings.labelKey].toLowerCase().indexOf(_this14.filter.toLowerCase()) > -1) {
                arr = obj.list;
              } else {
                arr = obj.list.filter(
                /**
                * @param {?} t
                * @return {?}
                */
                function (t) {
                  return t[_this14.settings.labelKey].toLowerCase().indexOf(_this14.filter.toLowerCase()) > -1;
                });
              }

              obj.list = arr;

              if (obj[_this14.settings.labelKey].toLowerCase().indexOf(_this14.filter.toLowerCase()) > -1) {
                return arr;
              } else {
                return arr.some(
                /**
                * @param {?} cat
                * @return {?}
                */
                function (cat) {
                  return cat[_this14.settings.labelKey].toLowerCase().indexOf(_this14.filter.toLowerCase()) > -1;
                });
              }
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "toggleFilterSelectAll",
          value: function toggleFilterSelectAll() {
            var _this15 = this;

            if (!this.isFilterSelectAll) {
              /** @type {?} */
              var added = [];

              if (this.settings.groupBy) {
                this.groupedData.forEach(
                /**
                * @param {?} item
                * @return {?}
                */
                function (item) {
                  item.sele;

                  if (item.list) {
                    item.list.forEach(
                    /**
                    * @param {?} el
                    * @return {?}
                    */
                    function (el) {
                      if (!_this15.isSelected(el)) {
                        _this15.addSelected(el);

                        added.push(el);
                      }
                    });
                  }

                  _this15.updateGroupInfo(item);
                });
                this.ds.getFilteredData().forEach(
                /**
                * @param {?} el
                * @return {?}
                */
                function (el) {
                  if (!_this15.isSelected(el) && !el.hasOwnProperty('grpTitle')) {
                    _this15.addSelected(el);

                    added.push(el);
                  }
                });
              } else {
                this.ds.getFilteredData().forEach(
                /**
                * @param {?} item
                * @return {?}
                */
                function (item) {
                  if (!_this15.isSelected(item)) {
                    _this15.addSelected(item);

                    added.push(item);
                  }
                });
              }

              this.isFilterSelectAll = true;
              this.onFilterSelectAll.emit(added);
            } else {
              /** @type {?} */
              var removed = [];

              if (this.settings.groupBy) {
                this.groupedData.forEach(
                /**
                * @param {?} item
                * @return {?}
                */
                function (item) {
                  if (item.list) {
                    item.list.forEach(
                    /**
                    * @param {?} el
                    * @return {?}
                    */
                    function (el) {
                      if (_this15.isSelected(el)) {
                        _this15.removeSelected(el);

                        removed.push(el);
                      }
                    });
                  }

                  _this15.updateGroupInfo(item);
                });
                this.ds.getFilteredData().forEach(
                /**
                * @param {?} el
                * @return {?}
                */
                function (el) {
                  if (_this15.isSelected(el)) {
                    _this15.removeSelected(el);

                    removed.push(el);
                  }
                });
              } else {
                this.ds.getFilteredData().forEach(
                /**
                * @param {?} item
                * @return {?}
                */
                function (item) {
                  if (_this15.isSelected(item)) {
                    _this15.removeSelected(item);

                    removed.push(item);
                  }
                });
              }

              this.isFilterSelectAll = false;
              this.onFilterDeSelectAll.emit(removed);
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "toggleInfiniteFilterSelectAll",
          value: function toggleInfiniteFilterSelectAll() {
            var _this16 = this;

            if (!this.isInfiniteFilterSelectAll) {
              this.virtualdata.forEach(
              /**
              * @param {?} item
              * @return {?}
              */
              function (item) {
                if (!_this16.isSelected(item)) {
                  _this16.addSelected(item);
                }
              });
              this.isInfiniteFilterSelectAll = true;
            } else {
              this.virtualdata.forEach(
              /**
              * @param {?} item
              * @return {?}
              */
              function (item) {
                if (_this16.isSelected(item)) {
                  _this16.removeSelected(item);
                }
              });
              this.isInfiniteFilterSelectAll = false;
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "clearSearch",
          value: function clearSearch() {
            if (this.settings.groupBy) {
              this.groupedData = [];
              this.groupedData = this.cloneArray(this.groupCachedItems);
            }

            this.filter = "";
            this.isFilterSelectAll = false;
          }
          /**
           * @param {?} data
           * @return {?}
           */

        }, {
          key: "onFilterChange",
          value: function onFilterChange(data) {
            var _this17 = this;

            if (this.filter && this.filter == "" || data.length == 0) {
              this.isFilterSelectAll = false;
            }
            /** @type {?} */


            var cnt = 0;
            data.forEach(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              if (!item.hasOwnProperty('grpTitle') && _this17.isSelected(item)) {
                cnt++;
              }
            });

            if (cnt > 0 && this.filterLength == cnt) {
              this.isFilterSelectAll = true;
            } else if (cnt > 0 && this.filterLength != cnt) {
              this.isFilterSelectAll = false;
            }

            this.cdr.detectChanges();
          }
          /**
           * @param {?} arr
           * @return {?}
           */

        }, {
          key: "cloneArray",
          value: function cloneArray(arr) {
            /** @type {?} */
            var i;
            /** @type {?} */

            var copy;

            if (Array.isArray(arr)) {
              return JSON.parse(JSON.stringify(arr));
            } else if (typeof arr === 'object') {
              throw 'Cannot clone array containing an object!';
            } else {
              return arr;
            }
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "updateGroupInfo",
          value: function updateGroupInfo(item) {
            var _this18 = this;

            if (item.disabled) {
              return false;
            }
            /** @type {?} */


            var key = this.settings.groupBy;
            this.groupedData.forEach(
            /**
            * @param {?} obj
            * @return {?}
            */
            function (obj) {
              /** @type {?} */
              var cnt = 0;

              if (obj.grpTitle && item[key] == obj[key]) {
                if (obj.list) {
                  obj.list.forEach(
                  /**
                  * @param {?} el
                  * @return {?}
                  */
                  function (el) {
                    if (_this18.isSelected(el)) {
                      cnt++;
                    }
                  });
                }
              }

              if (obj.list && cnt === obj.list.length && item[key] == obj[key]) {
                obj.selected = true;
              } else if (obj.list && cnt != obj.list.length && item[key] == obj[key]) {
                obj.selected = false;
              }
            });
            this.groupCachedItems.forEach(
            /**
            * @param {?} obj
            * @return {?}
            */
            function (obj) {
              /** @type {?} */
              var cnt = 0;

              if (obj.grpTitle && item[key] == obj[key]) {
                if (obj.list) {
                  obj.list.forEach(
                  /**
                  * @param {?} el
                  * @return {?}
                  */
                  function (el) {
                    if (_this18.isSelected(el)) {
                      cnt++;
                    }
                  });
                }
              }

              if (obj.list && cnt === obj.list.length && item[key] == obj[key]) {
                obj.selected = true;
              } else if (obj.list && cnt != obj.list.length && item[key] == obj[key]) {
                obj.selected = false;
              }
            });
          }
          /**
           * @param {?} arr
           * @param {?} field
           * @return {?}
           */

        }, {
          key: "transformData",
          value: function transformData(arr, field) {
            var _this19 = this;

            /** @type {?} */
            var groupedObj = arr.reduce(
            /**
            * @param {?} prev
            * @param {?} cur
            * @return {?}
            */
            function (prev, cur) {
              if (!prev[cur[field]]) {
                prev[cur[field]] = [cur];
              } else {
                prev[cur[field]].push(cur);
              }

              return prev;
            }, {});
            /** @type {?} */

            var tempArr = [];
            Object.keys(groupedObj).map(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              /** @type {?} */
              var obj = {};
              /** @type {?} */

              var disabledChildrens = [];
              obj["grpTitle"] = true;
              obj[_this19.settings.labelKey] = x;
              obj[_this19.settings.groupBy] = x;
              obj['selected'] = false;
              obj['list'] = [];
              /** @type {?} */

              var cnt = 0;
              groupedObj[x].forEach(
              /**
              * @param {?} item
              * @return {?}
              */
              function (item) {
                item['list'] = [];

                if (item.disabled) {
                  _this19.isDisabledItemPresent = true;
                  disabledChildrens.push(item);
                }

                obj.list.push(item);

                if (_this19.isSelected(item)) {
                  cnt++;
                }
              });

              if (cnt == obj.list.length) {
                obj.selected = true;
              } else {
                obj.selected = false;
              } // Check if current group item's all childrens are disabled or not


              obj['disabled'] = disabledChildrens.length === groupedObj[x].length;
              tempArr.push(obj); // obj.list.forEach((item: any) => {
              //     tempArr.push(item);
              // });
            });
            return tempArr;
          }
          /**
           * @param {?} evt
           * @return {?}
           */

        }, {
          key: "filterInfiniteList",
          value: function filterInfiniteList(evt) {
            var _this20 = this;

            /** @type {?} */
            var filteredElems = [];

            if (this.settings.groupBy) {
              this.groupedData = this.groupCachedItems.slice();
            } else {
              this.data = this.cachedItems.slice();
              this.virtualdata = this.cachedItems.slice();
            }

            if ((evt != null || evt != '') && !this.settings.groupBy) {
              if (this.settings.searchBy.length > 0) {
                var _loop = function _loop(t) {
                  _this20.virtualdata.filter(
                  /**
                  * @param {?} el
                  * @return {?}
                  */
                  function (el) {
                    if (el[_this20.settings.searchBy[t].toString()].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
                      filteredElems.push(el);
                    }
                  });
                };

                for (var t = 0; t < this.settings.searchBy.length; t++) {
                  _loop(t);
                }
              } else {
                this.virtualdata.filter(
                /**
                * @param {?} el
                * @return {?}
                */
                function (el) {
                  for (var prop in el) {
                    if (el[prop].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
                      filteredElems.push(el);
                      break;
                    }
                  }
                });
              }

              this.virtualdata = [];
              this.virtualdata = filteredElems;
              this.infiniteFilterLength = this.virtualdata.length;
            }

            if (evt.toString() != '' && this.settings.groupBy) {
              this.groupedData.filter(
              /**
              * @param {?} el
              * @return {?}
              */
              function (el) {
                if (el.hasOwnProperty('grpTitle')) {
                  filteredElems.push(el);
                } else {
                  for (var prop in el) {
                    if (el[prop].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
                      filteredElems.push(el);
                      break;
                    }
                  }
                }
              });
              this.groupedData = [];
              this.groupedData = filteredElems;
              this.infiniteFilterLength = this.groupedData.length;
            } else if (evt.toString() == '' && this.cachedItems.length > 0) {
              this.virtualdata = [];
              this.virtualdata = this.cachedItems;
              this.infiniteFilterLength = 0;
            }

            this.virtualScroller.refresh();
          }
          /**
           * @return {?}
           */

        }, {
          key: "resetInfiniteSearch",
          value: function resetInfiniteSearch() {
            this.filter = "";
            this.isInfiniteFilterSelectAll = false;
            this.virtualdata = [];
            this.virtualdata = this.cachedItems;
            this.groupedData = this.groupCachedItems;
            this.infiniteFilterLength = 0;
          }
          /**
           * @param {?} e
           * @return {?}
           */

        }, {
          key: "onScrollEnd",
          value: function onScrollEnd(e) {
            if (e.endIndex === this.data.length - 1 || e.startIndex === 0) {}

            this.onScrollToEnd.emit(e);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.subscription) {
              this.subscription.unsubscribe();
            }
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "selectGroup",
          value: function selectGroup(item) {
            var _this21 = this;

            if (item.disabled) {
              return false;
            }

            if (item.selected) {
              item.selected = false;
              item.list.forEach(
              /**
              * @param {?} obj
              * @return {?}
              */
              function (obj) {
                _this21.removeSelected(obj);
              });
              this.onGroupDeSelect.emit(item);
              this.updateGroupInfo(item);
            } else {
              item.selected = true;
              item.list.forEach(
              /**
              * @param {?} obj
              * @return {?}
              */
              function (obj) {
                if (!_this21.isSelected(obj)) {
                  _this21.addSelected(obj);
                }
              });
              this.onGroupSelect.emit(item);
              this.updateGroupInfo(item);
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "addFilterNewItem",
          value: function addFilterNewItem() {
            this.onAddFilterNewItem.emit(this.filter);
            this.filterPipe = new _ListFilterPipe(this.ds);
            this.filterPipe.transform(this.data, this.filter, this.settings.searchBy);
          }
          /**
           * @return {?}
           */

        }, {
          key: "calculateDropdownDirection",
          value: function calculateDropdownDirection() {
            /** @type {?} */
            var shouldOpenTowardsTop = this.settings.position == 'top';
            /** @type {?} */

            var elem = this.cuppaDropdown.nativeElement;
            /** @type {?} */

            var dropdownWidth = elem.clientWidth;
            this.dropDownWidth = dropdownWidth;
            this.dropDownLeft = elem.getBoundingClientRect().x;

            if (this.settings.position == 'top' && !this.settings.autoPosition) {
              this.openTowardsTop(true);
            } else if (this.settings.position == 'bottom' && !this.settings.autoPosition) {
              this.openTowardsTop(false);
            }

            if (this.settings.autoPosition) {
              /** @type {?} */
              var dropdownHeight = this.dropdownListElem.nativeElement.clientHeight;
              /** @type {?} */

              var viewportHeight = document.documentElement.clientHeight;
              /** @type {?} */

              var selectedListBounds = this.selectedListElem.nativeElement.getBoundingClientRect();
              /** @type {?} */

              var spaceOnTop = selectedListBounds.top;
              /** @type {?} */

              var spaceOnBottom = viewportHeight - selectedListBounds.top;

              if (spaceOnBottom < spaceOnTop && dropdownHeight < spaceOnTop) {
                this.openTowardsTop(true);
              } else {
                this.openTowardsTop(false);
              } // Keep preference if there is not enough space on either the top or bottom

              /* 			if (spaceOnTop || spaceOnBottom) {
                              if (shouldOpenTowardsTop) {
                                  shouldOpenTowardsTop = spaceOnTop;
                              } else {
                                  shouldOpenTowardsTop = !spaceOnBottom;
                              }
                          } */

            }
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "openTowardsTop",
          value: function openTowardsTop(value) {
            /** @type {?} */
            var elem = this.cuppaDropdown.nativeElement;

            if (value && this.selectedListElem.nativeElement.clientHeight) {
              this.dropdownListYOffset = 15 - this.selectedListElem.nativeElement.clientHeight;
              this.dropDownTop = elem.getBoundingClientRect().y - this.dropdownListElem.nativeElement.clientHeight - 15;
              this.settings.position = 'top';
            } else {
              this.dropDownTop = elem.getBoundingClientRect().y + elem.clientHeight + 1;
              this.dropdownListYOffset = 0;
              this.settings.position = 'bottom';
            }
          }
          /**
           * @param {?=} e
           * @return {?}
           */

        }, {
          key: "clearSelection",
          value: function clearSelection(e) {
            if (this.settings.groupBy) {
              this.groupCachedItems.forEach(
              /**
              * @param {?} obj
              * @return {?}
              */
              function (obj) {
                obj.selected = false;
              });
            }

            this.clearSearch();
            this.selectedItems = [];
            this.isSelectAll = false;
            this.onChangeCallback(this.selectedItems);
            this.onTouchedCallback(this.selectedItems);
            this.onDeSelectAll.emit(this.selectedItems);
          }
        }]);

        return _AngularMultiSelect;
      }();

      _AngularMultiSelect.ɵfac = function AngularMultiSelect_Factory(t) {
        return new (t || _AngularMultiSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DataService));
      };

      _AngularMultiSelect.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AngularMultiSelect,
        selectors: [["angular2-multiselect"]],
        contentQueries: function AngularMultiSelect_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _Item, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, Badge, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, Search, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.itemTempl = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.badgeTempl = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchTempl = _t.first);
          }
        },
        viewQuery: function AngularMultiSelect_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c5, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c6, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c7, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c8, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](VirtualScrollerComponent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.selectedListElem = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dropdownListElem = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cuppaDropdown = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.virtualScroller = _t.first);
          }
        },
        hostVars: 2,
        hostBindings: function AngularMultiSelect_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.escape", function AngularMultiSelect_keyup_escape_HostBindingHandler($event) {
              return ctx.onEscapeDown($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"])("scroll", function AngularMultiSelect_scroll_HostBindingHandler($event) {
              return ctx.onScroll($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.defaultSettings.classes);
          }
        },
        inputs: {
          settings: "settings",
          data: "data",
          loading: "loading"
        },
        outputs: {
          onSelect: "onSelect",
          onDeSelect: "onDeSelect",
          onSelectAll: "onSelectAll",
          onDeSelectAll: "onDeSelectAll",
          onOpen: "onOpen",
          onClose: "onClose",
          onScrollToEnd: "onScrollToEnd",
          onFilterSelectAll: "onFilterSelectAll",
          onFilterDeSelectAll: "onFilterDeSelectAll",
          onAddFilterNewItem: "onAddFilterNewItem",
          onGroupSelect: "onGroupSelect",
          onGroupDeSelect: "onGroupDeSelect"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DROPDOWN_CONTROL_VALUE_ACCESSOR, DROPDOWN_CONTROL_VALIDATION]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 36,
        vars: 47,
        consts: [[1, "cuppa-dropdown", 3, "clickOutside"], ["cuppaDropdown", ""], [1, "selected-list"], ["selectedList", ""], [1, "c-btn", 3, "ngClass", "click"], [4, "ngIf"], ["class", "c-list", 4, "ngIf"], ["class", "countplaceholder", 4, "ngIf"], ["class", "c-remove clear-all", 3, "click", 4, "ngIf"], ["class", "c-angle-down", 4, "ngIf"], ["class", "c-angle-up", 4, "ngIf"], [1, "dropdown-list", "tagToBody", "animated", "fadeIn", 3, "hidden"], ["dropdownList", ""], [1, "arrow-2", 3, "ngClass"], [3, "ngClass"], [1, "list-area", 3, "ngClass"], ["class", "pure-checkbox select-all", 4, "ngIf"], ["class", "loading-icon", "src", "assets/img/loading.gif", 4, "ngIf"], ["class", "list-filter", 4, "ngIf"], ["class", "filter-select-all", 4, "ngIf"], [1, "filter-select-all"], ["class", "nodata-label", 3, "hidden", 4, "ngIf"], ["class", "btn-container", 3, "hidden", 4, "ngIf"], ["style", "overflow: auto;", 3, "maxHeight", 4, "ngIf"], ["class", "list-message", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "c-list"], ["class", "c-token", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "c-token"], ["class", "c-label", 4, "ngIf"], [1, "c-remove", 3, "click"], [3, "name"], [1, "c-label"], [3, "data", "item"], ["class", "c-token", 3, "hidden", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "c-token", 3, "hidden"], [1, "countplaceholder"], [1, "c-remove", "clear-all", 3, "click"], [1, "c-angle-down"], [1, "c-angle-up"], [1, "pure-checkbox", "select-all"], ["type", "checkbox", 3, "checked", "disabled", "id", "change", 4, "ngIf"], [3, "for"], [3, "hidden"], ["type", "checkbox", 3, "checked", "disabled", "id", "change"], ["src", "assets/img/loading.gif", 1, "loading-icon"], [1, "list-filter"], ["id", "searchIcon", 1, "c-search"], ["class", "c-clear", 3, "hidden", "click", 4, "ngIf"], ["class", "c-input", "type", "text", "aria-labelledby", "searchIcon", 3, "placeholder", "ngModel", "ngModelChange", "keyup", 4, "ngIf"], ["class", "c-input", "type", "text", "aria-labelledby", "searchIcon", 3, "placeholder", "ngModel", "ngModelChange", 4, "ngIf"], [3, "data", "item", 4, "ngIf"], [1, "c-clear", 3, "hidden", "click"], ["type", "text", "aria-labelledby", "searchIcon", 1, "c-input", 3, "placeholder", "ngModel", "ngModelChange", "keyup"], ["searchInput", ""], ["type", "text", "aria-labelledby", "searchIcon", 1, "c-input", 3, "placeholder", "ngModel", "ngModelChange"], ["class", "pure-checkbox select-all", 3, "click", 4, "ngIf"], [1, "pure-checkbox", "select-all", 3, "click"], ["type", "checkbox", "aria-labelledby", "optionName", "aria-label", "option", 3, "checked", "disabled"], ["type", "checkbox", "aria-labelledby", "option", 3, "checked", "disabled"], [1, "nodata-label", 3, "hidden"], [1, "btn-container", 3, "hidden"], [1, "c-btn", "btn-iceblue", 3, "click"], [2, "overflow", "auto"], [1, "lazyContainer"], ["class", "pure-checkbox", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "pure-checkbox", 3, "ngClass", "click"], ["type", "checkbox", "aria-labelledby", "option", 3, "checked", "disabled", 4, "ngIf"], ["virtualScroller", "", 1, "lazyContainer", 3, "enableUnequalChildrenSizes", "items", "ngStyle", "vsStart", "vsEnd"], ["scroll", ""], ["type", "checkbox", 3, "checked", "disabled", 4, "ngIf"], ["type", "checkbox", 3, "checked", "disabled"], ["scroll2", ""], ["scroll3", ""], [4, "ngFor", "ngForOf"], ["class", "pure-checkbox", 3, "ngClass", "click", 4, "ngIf"], ["class", "pure-checkbox", 3, "ngClass", 4, "ngIf"], [1, "pure-checkbox", 3, "ngClass"], [3, "items", "ngStyle", "vsUpdate", "vsEnd"], ["scroll4", ""], [1, "list-message"]],
        template: function AngularMultiSelect_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clickOutside", function AngularMultiSelect_Template_div_clickOutside_0_listener() {
              return ctx.closeDropdownOnClickOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AngularMultiSelect_Template_div_click_4_listener($event) {
              return ctx.toggleDropdown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AngularMultiSelect_span_5_Template, 2, 1, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AngularMultiSelect_span_6_Template, 2, 2, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AngularMultiSelect_span_7_Template, 2, 2, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AngularMultiSelect_div_8_Template, 2, 2, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AngularMultiSelect_span_9_Template, 2, 1, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AngularMultiSelect_span_10_Template, 2, 1, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AngularMultiSelect_span_11_Template, 2, 1, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AngularMultiSelect_span_12_Template, 2, 1, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AngularMultiSelect_div_18_Template, 7, 6, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AngularMultiSelect_img_19_Template, 1, 0, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AngularMultiSelect_div_20_Template, 9, 7, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AngularMultiSelect_div_21_Template, 3, 2, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AngularMultiSelect_div_22_Template, 2, 1, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AngularMultiSelect_label_24_Template, 2, 2, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AngularMultiSelect_label_25_Template, 2, 2, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AngularMultiSelect_div_26_Template, 3, 2, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AngularMultiSelect_div_27_Template, 4, 7, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, AngularMultiSelect_div_28_Template, 4, 8, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AngularMultiSelect_div_29_Template, 4, 7, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AngularMultiSelect_div_30_Template, 4, 8, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, AngularMultiSelect_div_31_Template, 4, 8, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, AngularMultiSelect_div_32_Template, 3, 3, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, AngularMultiSelect_div_33_Template, 5, 12, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, AngularMultiSelect_div_34_Template, 3, 3, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, AngularMultiSelect_h5_35_Template, 2, 1, "h5", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](37, _c14, ctx.settings.disabled));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.selectedItems == null ? null : ctx.selectedItems.length) == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settings.singleSelection && !ctx.badgeTempl);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.selectedItems == null ? null : ctx.selectedItems.length) > 0 && ctx.settings.singleSelection && ctx.badgeTempl);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.selectedItems == null ? null : ctx.selectedItems.length) > 0 && !ctx.settings.singleSelection);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.selectedItems == null ? null : ctx.selectedItems.length) > ctx.settings.badgeShowLimit);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settings.clearAll && (ctx.selectedItems == null ? null : ctx.selectedItems.length) > 0 && !ctx.settings.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.dropDownWidth, "px")("top", ctx.dropDownTop, "px")("left", ctx.dropDownLeft, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.isActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](39, _c15, ctx.settings.position == "bottom", ctx.settings.position == "top"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](42, _c15, ctx.settings.position == "bottom", ctx.settings.position == "top"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](45, _c16, ctx.settings.singleSelection));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settings.enableCheckAll && !ctx.settings.singleSelection && !ctx.settings.limitSelection && (ctx.data == null ? null : ctx.data.length) > 0 && !ctx.isDisabledItemPresent);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settings.enableSearchFilter);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.settings.lazyLoading && ctx.settings.enableFilterSelectAll && !ctx.isDisabledItemPresent);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settings.lazyLoading && ctx.settings.enableFilterSelectAll && !ctx.isDisabledItemPresent && !ctx.settings.singleSelection);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && ctx.filterLength == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && (ctx.groupedData == null ? null : ctx.groupedData.length) == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settings.addNewItemOnFilter && ctx.filterLength == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && !ctx.settings.lazyLoading && ctx.itemTempl == undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && ctx.settings.lazyLoading && ctx.itemTempl == undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && !ctx.settings.lazyLoading && ctx.itemTempl != undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && ctx.settings.lazyLoading && ctx.itemTempl != undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && ctx.settings.lazyLoading && ctx.itemTempl != undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && !ctx.settings.lazyLoading && ctx.itemTempl != undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && ctx.settings.lazyLoading && ctx.itemTempl == undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && !ctx.settings.lazyLoading && ctx.itemTempl == undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.length) == 0);
          }
        },
        directives: [_ClickOutsideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, CIcon, _TemplateRenderer, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, VirtualScrollerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle],
        pipes: [_ListFilterPipe],
        styles: ["virtual-scroll{display:block;width:100%}.cuppa-dropdown{position:relative}.c-btn{display:inline-block;border-width:1px;line-height:1.25;border-radius:3px;font-size:.85rem;padding:5px 10px;cursor:pointer;-webkit-box-align:center;align-items:center;min-height:38px}.c-btn.disabled{background:#ccc}.selected-list .c-list{float:left;padding:0;margin:0;width:calc(100% - 20px)}.selected-list .c-list .c-token{list-style:none;padding:4px 22px 4px 8px;border-radius:2px;margin-right:4px;margin-top:2px;float:left;position:relative}.selected-list .c-list .c-token .c-label{display:block;float:left}.selected-list .c-list .c-token .c-remove{position:absolute;right:8px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}.selected-list .c-list .c-token .c-remove svg{fill:#fff}.selected-list .fa-angle-down,.selected-list .fa-angle-up{font-size:15pt;position:absolute;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.selected-list .c-angle-down,.selected-list .c-angle-up{width:12px;height:12px;position:absolute;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);pointer-events:none}.selected-list .c-angle-down svg,.selected-list .c-angle-up svg{fill:#333}.selected-list .countplaceholder{position:absolute;right:45px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.selected-list .c-btn{width:100%;padding:5px 10px;cursor:pointer;display:-webkit-box;display:flex;position:relative}.selected-list .c-btn .c-icon{position:absolute;right:5px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.dropdown-list.tagToBody{position:fixed}.dropdown-list{position:absolute;padding-top:14px;width:100%;z-index:99999}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list ul li{padding:10px;cursor:pointer;text-align:left}.dropdown-list ul li:first-child{padding-top:10px}.dropdown-list ul li:last-child{padding-bottom:10px}.dropdown-list ::-webkit-scrollbar{width:8px}.dropdown-list ::-webkit-scrollbar-thumb{background:#ccc;border-radius:5px}.dropdown-list ::-webkit-scrollbar-track{background:#f2f2f2}.arrow-down,.arrow-up{width:0;height:0;border-left:13px solid transparent;border-right:13px solid transparent;border-bottom:15px solid #fff;margin-left:15px;position:absolute;top:0}.arrow-down{bottom:-14px;top:unset;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.arrow-2{border-bottom:15px solid #ccc;top:-1px}.arrow-down.arrow-2{top:unset;bottom:-16px}.list-area{border:1px solid #ccc;border-radius:3px;background:#fff;margin:0}.select-all{padding:10px;border-bottom:1px solid #ccc;text-align:left}.list-filter{border-bottom:1px solid #ccc;position:relative;padding-left:35px;height:35px}.list-filter input{border:0;width:100%;height:100%;padding:0}.list-filter input:focus{outline:0}.list-filter .c-search{position:absolute;top:9px;left:10px;width:15px;height:15px}.list-filter .c-search svg{fill:#888}.list-filter .c-clear{position:absolute;top:10px;right:10px;width:15px;height:15px}.list-filter .c-clear svg{fill:#888}.pure-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.pure-checkbox input[type=checkbox]:focus+label:before,.pure-checkbox input[type=checkbox]:hover+label:before{background-color:#f2f2f2}.pure-checkbox input[type=checkbox]:active+label:before{-webkit-transition-duration:0s;transition-duration:0s}.pure-checkbox input[type=checkbox]:disabled+label{color:#ccc}.pure-checkbox input[type=checkbox]+label{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;font-weight:300}.pure-checkbox input[type=checkbox]+label:before{box-sizing:content-box;content:'';position:absolute;top:50%;left:0;width:15px;height:15px;margin-top:-9px;text-align:center;-webkit-transition:.4s;transition:.4s;border-radius:3px}.pure-checkbox input[type=checkbox]+label:after{box-sizing:content-box;content:'';position:absolute;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50%;transform-origin:50%;-webkit-transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;background-color:transparent;top:50%;left:3px;width:9px;height:4px;margin-top:-5px;border-style:solid;border-width:0 0 2px 2px;-webkit-border-image:none;-o-border-image:none;border-image:none;-webkit-transform:rotate(-45deg) scale(0);transform:rotate(-45deg) scale(0)}.pure-checkbox input[type=checkbox]:disabled+label:before{border-color:#ccc}.pure-checkbox input[type=checkbox]:disabled:focus+label:before .pure-checkbox input[type=checkbox]:disabled:hover+label:before{background-color:inherit}.pure-checkbox input[type=checkbox]:disabled:checked+label:before{background-color:#ccc}.pure-checkbox input[type=radio]:checked+label:before{background-color:#fff}.pure-checkbox input[type=radio]:checked+label:after{-webkit-transform:scale(1);transform:scale(1)}.pure-checkbox input[type=radio]+label:before{border-radius:50%}.pure-checkbox input[type=checkbox]:checked+label:after{content:'';-webkit-transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;-webkit-transform:rotate(-45deg) scale(1);transform:rotate(-45deg) scale(1)}.list-message{text-align:center;margin:0;padding:15px 0;font-size:initial}.list-grp{padding:0 15px!important}.list-grp h4{text-transform:capitalize;margin:15px 0 0;font-size:14px;font-weight:700}.list-grp>li{padding-left:15px!important}.grp-item{padding-left:30px!important}.grp-title{padding-bottom:0!important}.grp-title label{margin-bottom:0!important;font-weight:800;text-transform:capitalize}.grp-title:hover{background:0 0!important}.loading-icon{width:20px;position:absolute;right:10px;top:23px;z-index:1}.nodata-label{width:100%;text-align:center;padding:10px 0 0}.btn-container{text-align:center;padding:0 5px 10px}.clear-all{width:8px;position:absolute;top:50%;right:30px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}"],
        encapsulation: 2
      });
      /** @nocollapse */

      _AngularMultiSelect.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
        }, {
          type: DataService
        }];
      };

      _AngularMultiSelect.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        settings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }],
        onSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
          args: ['onSelect']
        }],
        onDeSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
          args: ['onDeSelect']
        }],
        onSelectAll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
          args: ['onSelectAll']
        }],
        onDeSelectAll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
          args: ['onDeSelectAll']
        }],
        onOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
          args: ['onOpen']
        }],
        onClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
          args: ['onClose']
        }],
        onScrollToEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
          args: ['onScrollToEnd']
        }],
        onFilterSelectAll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
          args: ['onFilterSelectAll']
        }],
        onFilterDeSelectAll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
          args: ['onFilterDeSelectAll']
        }],
        onAddFilterNewItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
          args: ['onAddFilterNewItem']
        }],
        onGroupSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
          args: ['onGroupSelect']
        }],
        onGroupDeSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
          args: ['onGroupDeSelect']
        }],
        itemTempl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
          args: [_Item, {
            "static": false
          }]
        }],
        badgeTempl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
          args: [Badge, {
            "static": false
          }]
        }],
        searchTempl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
          args: [Search, {
            "static": false
          }]
        }],
        searchInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
          args: ['searchInput', {
            "static": false
          }]
        }],
        selectedListElem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
          args: ['selectedList', {
            "static": false
          }]
        }],
        dropdownListElem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
          args: ['dropdownList', {
            "static": false
          }]
        }],
        cuppaDropdown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
          args: ['cuppaDropdown', {
            "static": false
          }]
        }],
        onEscapeDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
          args: ['document:keyup.escape', ['$event']]
        }],
        onScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
          args: ['window:scroll', ['$event']]
        }],
        virtualScroller: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
          args: [VirtualScrollerComponent, {
            "static": false
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_AngularMultiSelect, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
          args: [{
            selector: 'angular2-multiselect',
            template: "<div class=\"cuppa-dropdown\" (clickOutside)=\"closeDropdownOnClickOut()\" #cuppaDropdown>\n    <div class=\"selected-list\" #selectedList>\n        <div class=\"c-btn\" (click)=\"toggleDropdown($event)\" [ngClass]=\"{'disabled': settings.disabled}\" [attr.tabindex]=\"0\">\n\n            <span *ngIf=\"selectedItems?.length == 0\">{{settings.text}}</span>\n            <span *ngIf=\"settings.singleSelection && !badgeTempl\">\n                <span *ngFor=\"let item of selectedItems;trackBy: trackByFn.bind(this);let k = index\">\n                    {{item[settings.labelKey]}}\n                </span>\n            </span>\n            <span class=\"c-list\" *ngIf=\"selectedItems?.length > 0 && settings.singleSelection && badgeTempl \">\n                <div class=\"c-token\" *ngFor=\"let item of selectedItems;trackBy: trackByFn.bind(this);let k = index\">\n                    <span *ngIf=\"!badgeTempl\" class=\"c-label\">{{item[settings.labelKey]}}</span>\n\n                    <span *ngIf=\"badgeTempl\" class=\"c-label\">\n                        <c-templateRenderer [data]=\"badgeTempl\" [item]=\"item\"></c-templateRenderer>\n                    </span>\n                    <span class=\"c-remove\" (click)=\"onItemClick(item,k,$event);$event.stopPropagation()\">\n                        <c-icon [name]=\"'remove'\"></c-icon>\n                    </span>\n                </div>\n            </span>\n            <div class=\"c-list\" *ngIf=\"selectedItems?.length > 0 && !settings.singleSelection\">\n                <div class=\"c-token\" *ngFor=\"let item of selectedItems;trackBy: trackByFn.bind(this);let k = index\" [hidden]=\"k > settings.badgeShowLimit-1\">\n                    <span *ngIf=\"!badgeTempl\" class=\"c-label\">{{item[settings.labelKey]}}</span>\n                    <span *ngIf=\"badgeTempl\" class=\"c-label\">\n                        <c-templateRenderer [data]=\"badgeTempl\" [item]=\"item\"></c-templateRenderer>\n                    </span>\n                    <span class=\"c-remove\" (click)=\"onItemClick(item,k,$event);$event.stopPropagation()\">\n                        <c-icon [name]=\"'remove'\"></c-icon>\n                    </span>\n                </div>\n            </div>\n            <span class=\"countplaceholder\" *ngIf=\"selectedItems?.length > settings.badgeShowLimit\">+{{selectedItems?.length - settings.badgeShowLimit }}</span>\n            <span class=\"c-remove clear-all\" *ngIf=\"settings.clearAll && selectedItems?.length > 0 && !settings.disabled\" (click)=\"clearSelection($event);$event.stopPropagation()\">\n                <c-icon [name]=\"'remove'\"></c-icon>\n            </span>\n            <span *ngIf=\"!isActive\" class=\"c-angle-down\">\n                <c-icon [name]=\"'angle-down'\"></c-icon>\n            </span>\n            <span *ngIf=\"isActive\" class=\"c-angle-up\">\n                <c-icon [name]=\"'angle-up'\"></c-icon>\n\n            </span>\n        </div>\n    </div>\n    <div #dropdownList class=\"dropdown-list tagToBody animated fadeIn\" \n    [style.width.px]=\"dropDownWidth\" \n    [style.top.px]=\"dropDownTop\" \n    [style.left.px]=\"dropDownLeft\" \n        [hidden]=\"!isActive\">\n        <div [ngClass]=\"{'arrow-up': settings.position == 'bottom', 'arrow-down': settings.position == 'top'}\" class=\"arrow-2\"></div>\n        <div [ngClass]=\"{'arrow-up': settings.position == 'bottom', 'arrow-down': settings.position == 'top'}\"></div>\n        <div class=\"list-area\" [ngClass]=\"{'single-select-mode': settings.singleSelection }\">\n            <div class=\"pure-checkbox select-all\" *ngIf=\"settings.enableCheckAll && !settings.singleSelection && !settings.limitSelection && data?.length > 0 && !isDisabledItemPresent\"\n                >\n                <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelectAll\" [disabled]=\"settings.limitSelection == selectedItems?.length\"\n                [id]=\"id\" (change)=\"toggleSelectAll($event)\"/>\n                <label [for]=\"id\">\n                    <span [hidden]=\"isSelectAll\">{{settings.selectAllText}}</span>\n                    <span [hidden]=\"!isSelectAll\">{{settings.unSelectAllText}}</span>\n                </label>\n            </div>\n            <img class=\"loading-icon\" *ngIf=\"loading\" src=\"assets/img/loading.gif\" />\n            <div class=\"list-filter\" *ngIf=\"settings.enableSearchFilter\">\n                <span class=\"c-search\" id=\"searchIcon\">\n                    <c-icon [name]=\"'search'\"></c-icon>\n                </span>\n                <span *ngIf=\"!settings.lazyLoading\" [hidden]=\"filter == undefined || filter?.length == 0\" class=\"c-clear\" (click)=\"clearSearch()\">\n                    <c-icon [name]=\"'clear'\"></c-icon>\n                </span>\n                <span *ngIf=\"settings.lazyLoading\" [hidden]=\"filter == undefined || filter?.length == 0\" class=\"c-clear\" (click)=\"resetInfiniteSearch()\">\n                    <c-icon [name]=\"'clear'\"></c-icon>\n                </span>\n\n                <input class=\"c-input\" *ngIf=\"settings.groupBy && !settings.lazyLoading && !searchTempl\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\n                    [(ngModel)]=\"filter\" (keyup)=\"filterGroupedList()\" aria-labelledby=\"searchIcon\">\n                <input class=\"c-input\" *ngIf=\"!settings.groupBy && !settings.lazyLoading && !searchTempl\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\n                    [(ngModel)]=\"filter\" aria-labelledby=\"searchIcon\">\n                <input class=\"c-input\" *ngIf=\"settings.lazyLoading && !searchTempl\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\n                    [(ngModel)]=\"filter\" (keyup)=\"searchTerm$.next($event.target.value)\" aria-labelledby=\"searchIcon\">\n                <!--            <input class=\"c-input\" *ngIf=\"!settings.lazyLoading && !searchTempl && settings.groupBy\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\n                [(ngModel)]=\"filter\" (keyup)=\"filterGroupList($event)\">-->\n                <c-templateRenderer *ngIf=\"searchTempl\" [data]=\"searchTempl\" [item]=\"item\"></c-templateRenderer>\n            </div>\n            <div class=\"filter-select-all\" *ngIf=\"!settings.lazyLoading && settings.enableFilterSelectAll && !isDisabledItemPresent\">\n                <div class=\"pure-checkbox select-all\" *ngIf=\"!settings.groupBy && filter?.length > 0 && filterLength > 0  && !settings.singleSelection\" (click)=\"toggleFilterSelectAll()\">\n                    <input type=\"checkbox\" [checked]=\"isFilterSelectAll\" [disabled]=\"settings.limitSelection == selectedItems?.length\" aria-labelledby=\"optionName\"\n                    aria-label=\"option\"/>\n                    <label>\n                        <span [hidden]=\"isFilterSelectAll\">{{settings.filterSelectAllText}}</span>\n                        <span [hidden]=\"!isFilterSelectAll\">{{settings.filterUnSelectAllText}}</span>\n                    </label>\n                </div>\n                <div class=\"pure-checkbox select-all\" *ngIf=\"settings.groupBy && filter?.length > 0 && groupedData?.length > 0  && !settings.singleSelection\" (click)=\"toggleFilterSelectAll()\">\n                    <input type=\"checkbox\" [checked]=\"isFilterSelectAll && filter?.length > 0\" [disabled]=\"settings.limitSelection == selectedItems?.length\"\n                    aria-labelledby=\"option\"/>\n                    <label>\n                        <span [hidden]=\"isFilterSelectAll\">{{settings.filterSelectAllText}}</span>\n                        <span [hidden]=\"!isFilterSelectAll\">{{settings.filterUnSelectAllText}}</span>\n                    </label>\n                </div>\n            </div>\n            <div class=\"filter-select-all\" *ngIf=\"settings.lazyLoading && settings.enableFilterSelectAll && !isDisabledItemPresent && !settings.singleSelection\">\n                <div class=\"pure-checkbox select-all\" *ngIf=\"filter?.length > 0 && infiniteFilterLength > 0\" (click)=\"toggleInfiniteFilterSelectAll()\">\n                    <input type=\"checkbox\" [checked]=\"isInfiniteFilterSelectAll\" [disabled]=\"settings.limitSelection == selectedItems?.length\"\n                    aria-labelledby=\"option\"/>\n                    <label>\n                        <span [hidden]=\"isInfiniteFilterSelectAll\">{{settings.filterSelectAllText}}</span>\n                        <span [hidden]=\"!isInfiniteFilterSelectAll\">{{settings.filterUnSelectAllText}}</span>\n                    </label>\n                </div>\n            </div>\n            <div class=\"filter-select-all\">\n                <label class=\"nodata-label\" *ngIf=\"!settings.groupBy && filterLength == 0\" [hidden]=\"filter == undefined || filter?.length == 0\">{{settings.noDataLabel}}</label>\n                <label class=\"nodata-label\" *ngIf=\"settings.groupBy && groupedData?.length == 0\" [hidden]=\"filter == undefined || filter?.length == 0\">{{settings.noDataLabel}}</label>\n\n                <div class=\"btn-container\" *ngIf=\"settings.addNewItemOnFilter && filterLength == 0\" [hidden]=\"filter == undefined || filter?.length == 0\">\n                    <button class=\"c-btn btn-iceblue\" (click)=\"addFilterNewItem()\">{{settings.addNewButtonText}}</button>\n                </div>\n            </div>\n\n            <div *ngIf=\"!settings.groupBy && !settings.lazyLoading && itemTempl == undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul class=\"lazyContainer\">\n                    <li *ngFor=\"let item of data | listFilter:filter : settings.searchBy; let i = index;\" (click)=\"onItemClick(item,i,$event)\"\n                        class=\"pure-checkbox\" [ngClass]=\"{'selected-item': isSelected(item) == true }\">\n                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                        aria-labelledby=\"option\"/>\n                        <label>{{item[settings.labelKey]}}</label>\n                    </li>\n                </ul>\n            </div>\n            <!-- lazy loading -->\n            <div *ngIf=\"!settings.groupBy && settings.lazyLoading && itemTempl == undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul virtualScroller #scroll [enableUnequalChildrenSizes]=\"randomSize\" [items]=\"virtualdata\" (vsStart)=\"onScrollEnd($event)\"\n                    (vsEnd)=\"onScrollEnd($event)\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\" class=\"lazyContainer\">\n                    <li *ngFor=\"let item of scroll.viewPortItems; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\"\n                        [ngClass]=\"{'selected-item': isSelected(item) == true }\">\n                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                        />\n                        <label>{{item[settings.labelKey]}}</label>\n                    </li>\n                </ul>\n            </div>\n            <!-- custom template -->\n            <div *ngIf=\"!settings.groupBy && !settings.lazyLoading && itemTempl != undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul class=\"lazyContainer\">\n                    <li *ngFor=\"let item of data | listFilter:filter : settings.searchBy; let i = index;\" (click)=\"onItemClick(item,i,$event)\"\n                        class=\"pure-checkbox\" [ngClass]=\"{'selected-item': isSelected(item) == true }\">\n                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                        />\n                        <label></label>\n                        <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\n                    </li>\n                </ul>\n            </div>\n            <!-- lazy loading and custom template -->\n            <div *ngIf=\"!settings.groupBy && settings.lazyLoading && itemTempl != undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul virtualScroller #scroll2 [enableUnequalChildrenSizes]=\"randomSize\" [items]=\"virtualdata\" (vsStart)=\"onScrollEnd($event)\"\n                    (vsEnd)=\"onScrollEnd($event)\" class=\"lazyContainer\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\">\n                    <li *ngFor=\"let item of scroll2.viewPortItems; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\"\n                        [ngClass]=\"{'selected-item': isSelected(item) == true }\">\n                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                        />\n                        <label></label>\n                        <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\n                    </li>\n                </ul>\n            </div>\n            <!-- lazy loading, group By and custom template -->\n            <div *ngIf=\"settings.groupBy && settings.lazyLoading && itemTempl != undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul virtualScroller #scroll3 [enableUnequalChildrenSizes]=\"randomSize\" [items]=\"virtualdata\" (vsStart)=\"onScrollEnd($event)\"\n                    (vsEnd)=\"onScrollEnd($event)\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\" class=\"lazyContainer\">\n                    <span *ngFor=\"let item of scroll3.viewPortItems; let i = index;\">\n                        <li (click)=\"onItemClick(item,i,$event)\" *ngIf=\"!item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection}\"\n                            class=\"pure-checkbox\">\n                            <input *ngIf=\"settings.showCheckbox && !settings.singleSelection\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                            />\n                            <label></label>\n                            <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\n                        </li>\n                        <li *ngIf=\"item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection}\"\n                            class=\"pure-checkbox\">\n                            <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                            />\n                            <label></label>\n                            <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\n                        </li>\n                    </span>\n                </ul>\n            </div>\n            <!-- group By and custom template -->\n            <div *ngIf=\"settings.groupBy && !settings.lazyLoading && itemTempl != undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul class=\"lazyContainer\">\n                    <span *ngFor=\"let item of groupedData; let i = index;\">\n                        <li (click)=\"selectGroup(item)\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection}\"\n                            class=\"pure-checkbox\">\n                            <input *ngIf=\"settings.showCheckbox && !settings.singleSelection\" type=\"checkbox\" [checked]=\"item.selected\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                            />\n                            <label>{{item[settings.labelKey]}}</label>\n                            <ul class=\"lazyContainer\">\n                                <span *ngFor=\"let val of item.list ; let j = index;\">\n                                    <li (click)=\"onItemClick(val,j,$event); $event.stopPropagation()\" [ngClass]=\"{'grp-title': val.grpTitle,'grp-item': !val.grpTitle && !settings.singleSelection}\"\n                                        class=\"pure-checkbox\">\n                                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(val)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(val)) || val.disabled\"\n                                        />\n                                        <label></label>\n                                        <c-templateRenderer [data]=\"itemTempl\" [item]=\"val\"></c-templateRenderer>\n                                    </li>\n                                </span>\n                            </ul>\n\n                        </li>\n                    </span>\n                </ul>\n            </div>\n            <!-- lazy loading, group By -->\n            <div *ngIf=\"settings.groupBy && settings.lazyLoading && itemTempl == undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <virtual-scroller [items]=\"groupedData\" (vsUpdate)=\"viewPortItems = $event\" (vsEnd)=\"onScrollEnd($event)\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\">\n                    <ul virtualScroller #scroll4 [enableUnequalChildrenSizes]=\"randomSize\" [items]=\"virtualdata\" (vsStart)=\"onScrollEnd($event)\"\n                        (vsEnd)=\"onScrollEnd($event)\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\" class=\"lazyContainer\">\n                        <span *ngFor=\"let item of scroll4.viewPortItems; let i = index;\">\n                            <li *ngIf=\"item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection, 'selected-item': isSelected(item) == true }\"\n                                class=\"pure-checkbox\">\n                                <input *ngIf=\"settings.showCheckbox && !item.grpTitle && !settings.singleSelection\" type=\"checkbox\" [checked]=\"isSelected(item)\"\n                                    [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                                />\n                                <label>{{item[settings.labelKey]}}</label>\n                            </li>\n                            <li (click)=\"onItemClick(item,i,$event)\" *ngIf=\"!item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection, 'selected-item': isSelected(item) == true }\"\n                                class=\"pure-checkbox\">\n                                <input *ngIf=\"settings.showCheckbox && !item.grpTitle\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                                />\n                                <label>{{item[settings.labelKey]}}</label>\n                            </li>\n                        </span>\n                    </ul>\n                </virtual-scroller>\n            </div>\n            <!-- group By -->\n            <div *ngIf=\"settings.groupBy && !settings.lazyLoading && itemTempl == undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul class=\"lazyContainer\">\n                    <span *ngFor=\"let item of groupedData ; let i = index;\">\n                        <li (click)=\"selectGroup(item)\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection}\"\n                            class=\"pure-checkbox\">\n                            <input *ngIf=\"settings.showCheckbox && !settings.singleSelection\" type=\"checkbox\" [checked]=\"item.selected\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                            />\n                            <label>{{item[settings.labelKey]}}</label>\n                            <ul class=\"lazyContainer\">\n                                <span *ngFor=\"let val of item.list ; let j = index;\">\n                                    <li (click)=\"onItemClick(val,j,$event); $event.stopPropagation()\" [ngClass]=\"{'selected-item': isSelected(val) == true,'grp-title': val.grpTitle,'grp-item': !val.grpTitle && !settings.singleSelection}\"\n                                        class=\"pure-checkbox\">\n                                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(val)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(val)) || val.disabled\"\n                                        />\n                                        <label>{{val[settings.labelKey]}}</label>\n                                    </li>\n                                </span>\n                            </ul>\n                        </li>\n                    </span>\n                    <!-- <span *ngFor=\"let item of groupedData ; let i = index;\">\n                    <li (click)=\"onItemClick(item,i,$event)\" *ngIf=\"!item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle}\" class=\"pure-checkbox\">\n                    <input *ngIf=\"settings.showCheckbox && !item.grpTitle\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                    />\n                    <label>{{item[settings.labelKey]}}</label>\n                </li>\n                <li *ngIf=\"item.grpTitle && !settings.selectGroup\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle}\" class=\"pure-checkbox\">\n                    <input *ngIf=\"settings.showCheckbox && settings.selectGroup\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                    />\n                    <label>{{item[settings.labelKey]}}</label>\n                </li>\n                 <li  (click)=\"selectGroup(item)\" *ngIf=\"item.grpTitle && settings.selectGroup\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle}\" class=\"pure-checkbox\">\n                    <input *ngIf=\"settings.showCheckbox && settings.selectGroup\" type=\"checkbox\" [checked]=\"item.selected\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                    />\n                    <label>{{item[settings.labelKey]}}</label>\n                </li>\n                </span> -->\n                </ul>\n            </div>\n            <h5 class=\"list-message\" *ngIf=\"data?.length == 0\">{{settings.noDataLabel}}</h5>\n        </div>\n    </div>\n</div>",
            host: {
              '[class]': 'defaultSettings.classes'
            },
            providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR, DROPDOWN_CONTROL_VALIDATION],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
            styles: ["virtual-scroll{display:block;width:100%}.cuppa-dropdown{position:relative}.c-btn{display:inline-block;border-width:1px;line-height:1.25;border-radius:3px;font-size:.85rem;padding:5px 10px;cursor:pointer;-webkit-box-align:center;align-items:center;min-height:38px}.c-btn.disabled{background:#ccc}.selected-list .c-list{float:left;padding:0;margin:0;width:calc(100% - 20px)}.selected-list .c-list .c-token{list-style:none;padding:4px 22px 4px 8px;border-radius:2px;margin-right:4px;margin-top:2px;float:left;position:relative}.selected-list .c-list .c-token .c-label{display:block;float:left}.selected-list .c-list .c-token .c-remove{position:absolute;right:8px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}.selected-list .c-list .c-token .c-remove svg{fill:#fff}.selected-list .fa-angle-down,.selected-list .fa-angle-up{font-size:15pt;position:absolute;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.selected-list .c-angle-down,.selected-list .c-angle-up{width:12px;height:12px;position:absolute;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);pointer-events:none}.selected-list .c-angle-down svg,.selected-list .c-angle-up svg{fill:#333}.selected-list .countplaceholder{position:absolute;right:45px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.selected-list .c-btn{width:100%;padding:5px 10px;cursor:pointer;display:-webkit-box;display:flex;position:relative}.selected-list .c-btn .c-icon{position:absolute;right:5px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.dropdown-list.tagToBody{position:fixed}.dropdown-list{position:absolute;padding-top:14px;width:100%;z-index:99999}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list ul li{padding:10px;cursor:pointer;text-align:left}.dropdown-list ul li:first-child{padding-top:10px}.dropdown-list ul li:last-child{padding-bottom:10px}.dropdown-list ::-webkit-scrollbar{width:8px}.dropdown-list ::-webkit-scrollbar-thumb{background:#ccc;border-radius:5px}.dropdown-list ::-webkit-scrollbar-track{background:#f2f2f2}.arrow-down,.arrow-up{width:0;height:0;border-left:13px solid transparent;border-right:13px solid transparent;border-bottom:15px solid #fff;margin-left:15px;position:absolute;top:0}.arrow-down{bottom:-14px;top:unset;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.arrow-2{border-bottom:15px solid #ccc;top:-1px}.arrow-down.arrow-2{top:unset;bottom:-16px}.list-area{border:1px solid #ccc;border-radius:3px;background:#fff;margin:0}.select-all{padding:10px;border-bottom:1px solid #ccc;text-align:left}.list-filter{border-bottom:1px solid #ccc;position:relative;padding-left:35px;height:35px}.list-filter input{border:0;width:100%;height:100%;padding:0}.list-filter input:focus{outline:0}.list-filter .c-search{position:absolute;top:9px;left:10px;width:15px;height:15px}.list-filter .c-search svg{fill:#888}.list-filter .c-clear{position:absolute;top:10px;right:10px;width:15px;height:15px}.list-filter .c-clear svg{fill:#888}.pure-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.pure-checkbox input[type=checkbox]:focus+label:before,.pure-checkbox input[type=checkbox]:hover+label:before{background-color:#f2f2f2}.pure-checkbox input[type=checkbox]:active+label:before{-webkit-transition-duration:0s;transition-duration:0s}.pure-checkbox input[type=checkbox]:disabled+label{color:#ccc}.pure-checkbox input[type=checkbox]+label{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;font-weight:300}.pure-checkbox input[type=checkbox]+label:before{box-sizing:content-box;content:'';position:absolute;top:50%;left:0;width:15px;height:15px;margin-top:-9px;text-align:center;-webkit-transition:.4s;transition:.4s;border-radius:3px}.pure-checkbox input[type=checkbox]+label:after{box-sizing:content-box;content:'';position:absolute;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50%;transform-origin:50%;-webkit-transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;background-color:transparent;top:50%;left:3px;width:9px;height:4px;margin-top:-5px;border-style:solid;border-width:0 0 2px 2px;-webkit-border-image:none;-o-border-image:none;border-image:none;-webkit-transform:rotate(-45deg) scale(0);transform:rotate(-45deg) scale(0)}.pure-checkbox input[type=checkbox]:disabled+label:before{border-color:#ccc}.pure-checkbox input[type=checkbox]:disabled:focus+label:before .pure-checkbox input[type=checkbox]:disabled:hover+label:before{background-color:inherit}.pure-checkbox input[type=checkbox]:disabled:checked+label:before{background-color:#ccc}.pure-checkbox input[type=radio]:checked+label:before{background-color:#fff}.pure-checkbox input[type=radio]:checked+label:after{-webkit-transform:scale(1);transform:scale(1)}.pure-checkbox input[type=radio]+label:before{border-radius:50%}.pure-checkbox input[type=checkbox]:checked+label:after{content:'';-webkit-transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;-webkit-transform:rotate(-45deg) scale(1);transform:rotate(-45deg) scale(1)}.list-message{text-align:center;margin:0;padding:15px 0;font-size:initial}.list-grp{padding:0 15px!important}.list-grp h4{text-transform:capitalize;margin:15px 0 0;font-size:14px;font-weight:700}.list-grp>li{padding-left:15px!important}.grp-item{padding-left:30px!important}.grp-title{padding-bottom:0!important}.grp-title label{margin-bottom:0!important;font-weight:800;text-transform:capitalize}.grp-title:hover{background:0 0!important}.loading-icon{width:20px;position:absolute;right:10px;top:23px;z-index:1}.nodata-label{width:100%;text-align:center;padding:10px 0 0}.btn-container{text-align:center;padding:0 5px 10px}.clear-all{width:8px;position:absolute;top:50%;right:30px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
          }, {
            type: DataService
          }];
        }, {
          onSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
            args: ['onSelect']
          }],
          onDeSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
            args: ['onDeSelect']
          }],
          onSelectAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
            args: ['onSelectAll']
          }],
          onDeSelectAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
            args: ['onDeSelectAll']
          }],
          onOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
            args: ['onOpen']
          }],
          onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
            args: ['onClose']
          }],
          onScrollToEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
            args: ['onScrollToEnd']
          }],
          onFilterSelectAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
            args: ['onFilterSelectAll']
          }],
          onFilterDeSelectAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
            args: ['onFilterDeSelectAll']
          }],
          onAddFilterNewItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
            args: ['onAddFilterNewItem']
          }],
          onGroupSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
            args: ['onGroupSelect']
          }],
          onGroupDeSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
            args: ['onGroupDeSelect']
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onEscapeDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
            args: ['document:keyup.escape', ['$event']]
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
            args: ['window:scroll', ['$event']]
          }],
          settings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          itemTempl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
            args: [_Item, {
              "static": false
            }]
          }],
          badgeTempl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
            args: [Badge, {
              "static": false
            }]
          }],
          searchTempl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
            args: [Search, {
              "static": false
            }]
          }],
          searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: ['searchInput', {
              "static": false
            }]
          }],
          selectedListElem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: ['selectedList', {
              "static": false
            }]
          }],
          dropdownListElem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: ['dropdownList', {
              "static": false
            }]
          }],
          cuppaDropdown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: ['cuppaDropdown', {
              "static": false
            }]
          }],
          virtualScroller: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: [VirtualScrollerComponent, {
              "static": false
            }]
          }]
        });
      })();

      if (false) {}

      var _AngularMultiSelectModule = function _AngularMultiSelectModule() {
        _classCallCheck(this, _AngularMultiSelectModule);
      };

      _AngularMultiSelectModule.ɵfac = function AngularMultiSelectModule_Factory(t) {
        return new (t || _AngularMultiSelectModule)();
      };

      _AngularMultiSelectModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _AngularMultiSelectModule
      });
      _AngularMultiSelectModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        providers: [DataService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, VirtualScrollerModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_AngularMultiSelectModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, VirtualScrollerModule],
            declarations: [_AngularMultiSelect, _ClickOutsideDirective, ScrollDirective, styleDirective, _ListFilterPipe, _Item, _TemplateRenderer, Badge, Search, setPosition, CIcon],
            exports: [_AngularMultiSelect, _ClickOutsideDirective, ScrollDirective, styleDirective, _ListFilterPipe, _Item, _TemplateRenderer, Badge, Search, setPosition, CIcon],
            providers: [DataService]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_AngularMultiSelectModule, {
          declarations: function declarations() {
            return [_AngularMultiSelect, _ClickOutsideDirective, ScrollDirective, styleDirective, _ListFilterPipe, _Item, _TemplateRenderer, Badge, Search, setPosition, CIcon];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, VirtualScrollerModule];
          },
          exports: function exports() {
            return [_AngularMultiSelect, _ClickOutsideDirective, ScrollDirective, styleDirective, _ListFilterPipe, _Item, _TemplateRenderer, Badge, Search, setPosition, CIcon];
          }
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=angular2-multiselect-dropdown.js.map

      /***/

    },

    /***/
    8055: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JobApplyComponent": function JobApplyComponent() {
          return (
            /* binding */
            _JobApplyComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_data_job_search_job_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/data/job-search/job-search */
      83740);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../job-filter/job-filter.component */
      88856);
      /* harmony import */


      var _shared_directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../shared/directives/only-alphabets.directive */
      33177);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _shared_directives_disable_key_press_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../shared/directives/disable-key-press.directive */
      87500);
      /* harmony import */


      var _shared_directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../shared/directives/only-numbers.directive */
      5262);

      function JobApplyComponent_div_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Your full name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function JobApplyComponent_div_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Invalid Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function JobApplyComponent_div_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Invalid Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function JobApplyComponent_div_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Invalid Repeat Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function JobApplyComponent_div_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Phone is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function JobApplyComponent_div_99_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "collegename is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function JobApplyComponent_div_144_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "specialization is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function JobApplyComponent_div_156_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "location is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function JobApplyComponent_div_203_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "company_name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["Apps", "Job Apply"];
      };

      var _c1 = function _c1() {
        return {
          standalone: true
        };
      };

      var _JobApplyComponent = /*#__PURE__*/function () {
        function _JobApplyComponent(route, router, fb) {
          var _this22 = this;

          _classCallCheck(this, _JobApplyComponent);

          this.route = route;
          this.router = router;
          this.fb = fb;
          this.jobs = _shared_data_job_search_job_search__WEBPACK_IMPORTED_MODULE_0__.JobDB.Job_Category;
          this.route.params.subscribe(function (params) {
            var id = +params['id'];

            _this22.jobs.filter(function (items) {
              if (items.Id === id) {
                _this22.arr = items;
              }
            });
          });
        }

        _createClass(_JobApplyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.jobForm = this.fb.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
              phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
              rpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
              collegename: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
              specialization: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
              location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
              company_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
            });
            this.dropdownList = [{
              "id": 1,
              "itemName": "India"
            }, {
              "id": 2,
              "itemName": "Singapore"
            }, {
              "id": 3,
              "itemName": "Australia"
            }, {
              "id": 4,
              "itemName": "Canada"
            }, {
              "id": 5,
              "itemName": "South Korea"
            }, {
              "id": 6,
              "itemName": "Germany"
            }, {
              "id": 7,
              "itemName": "France"
            }, {
              "id": 8,
              "itemName": "Russia"
            }, {
              "id": 9,
              "itemName": "Italy"
            }, {
              "id": 10,
              "itemName": "Sweden"
            }];
            this.selectedItems = [{
              "id": 2,
              "itemName": "Singapore"
            }, {
              "id": 3,
              "itemName": "Australia"
            }, {
              "id": 4,
              "itemName": "Canada"
            }, {
              "id": 5,
              "itemName": "South Korea"
            }];
            this.dropdownSettings = {
              singleSelection: false,
              text: "Select Countries",
              selectAllText: 'Select All',
              unSelectAllText: 'UnSelect All',
              enableSearchFilter: true,
              classes: "myclass custom-class"
            };
          }
        }]);

        return _JobApplyComponent;
      }();

      _JobApplyComponent.ɵfac = function JobApplyComponent_Factory(t) {
        return new (t || _JobApplyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder));
      };

      _JobApplyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _JobApplyComponent,
        selectors: [["app-job-apply"]],
        decls: 233,
        vars: 43,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-xl-3", "xl-40"], [1, "col-xl-9", "xl-60"], [1, "card"], [1, "job-search"], [1, "card-body", "pb-0"], [1, "media"], ["alt", "", 1, "img-40", "img-fluid", "m-r-20", 3, "src"], [1, "media-body"], [1, "f-w-600"], ["href", "javascript:void(0)"], [1, "pull-right"], ["type", "button", 1, "btn", "btn-primary"], [1, "fa", "fa-check", "text-white"], [1, "fa", "fa-star", "font-warning"], [1, "job-description"], [1, "mb-0"], [1, "form", "theme-form", 3, "formGroup"], [1, "col"], [1, "form-group"], ["for", "exampleFormControlInput1"], [1, "font-danger"], ["name", "name", "autocomplete", "off", "id", "name", "type", "text", "placeholder", "Enter first name", "required", "required", "onlyAlphabets", "", 1, "form-control", 3, "formControl"], ["class", "text text-danger", 4, "ngIf"], ["for", "exampleFormControlInput3"], ["name", "email", "autocomplete", "off", "id", "email", "type", "email", "placeholder", "Enter email", "required", "required", 1, "form-control", 3, "formControl"], ["for", "exampleFormControlpassword"], ["name", "password", "autocomplete", "off", "id", "password", "type", "password", "placeholder", "Enter password", "required", "required", 1, "form-control", 3, "formControl"], ["for", "exampleFormControlpassword1"], ["id", "rpassword", "name", "rpassword", "autocomplete", "off", "type", "password", "placeholder", "Repeat password", "required", "required", 1, "form-control", 3, "formControl"], [1, "col-form-label", "pt-0"], [1, "input-group", "custom-datepicker", "job-input-datepicker"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", "disableKeyPress", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange", "click"], ["d", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-calendar"], ["for", "exampleFormControlInput4"], ["id", "phone", "name", "phone", "autocomplete", "off", "type", "email", "placeholder", "Enter Phone no.", "required", "required", "onlyNumbers", "", 1, "form-control", 3, "formControl"], [1, "form", "theme-form"], [1, "col-xl-6", "xl-100"], ["for", "exampleFormControlInput5"], ["id", "collegename", "name", "collegename", "autocomplete", "off", "type", "email", "placeholder", "Enter college name", "required", "required", 1, "form-control", 3, "formControl"], [1, "col-xl-6", "xl-100", "xl-mt-job"], [1, "col-form-label", "text-right", "pt-0"], [1, "col-sm-6"], ["sd", "ngbDatepicker"], ["ed", "ngbDatepicker"], [1, "col-lg-6"], [1, "js-example-basic-single", "col-sm-12", "job-select2", "form-group"], ["label", "Choose a Option"], ["value", "student"], ["value", "Bachelor"], ["value", "Master"], ["value", "Associate"], ["for", "exampleFormControlInput6"], ["id", "specialization", "name", "specialization", "autocomplete", "off", "type", "email", "placeholder", "Enter specialization", 1, "form-control", 3, "formControl"], ["for", "exampleFormControlInput7"], ["id", "location", "name", "location", "autocomplete", "off", "type", "email", "placeholder", "Enter Location", 1, "form-control", 3, "formControl"], ["psd", "ngbDatepicker"], ["ped", "ngbDatepicker"], ["label", "Enter Position"], ["value", "position"], ["value", "Web designer"], ["value", "Graphic designer"], ["value", "UI designer"], ["value", "UI/UX designer"], ["for", "exampleFormControlInput8"], ["id", "company_name", "name", "company_name", "autocomplete", "off", "type", "email", "type", "email", "placeholder", "Enter Company Name", 1, "form-control", 3, "formControl"], ["type", "file", 1, "form-control"], [1, "form-group", "mb-0"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-primary", "mr-1", 3, "disabled"], ["type", "reset", "value", "Cancel", 1, "btn", "btn-light"], [1, "text", "text-danger"]],
        template: function JobApplyComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-job-filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "h6", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " Save this job");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "h6", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Personal Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "form", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Full Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, JobApplyComponent_div_42_Template, 2, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Email:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, JobApplyComponent_div_51_Template, 2, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "label", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Password:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](59, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, JobApplyComponent_div_60_Template, 2, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "label", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "Repeat Password:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](68, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](69, JobApplyComponent_div_69_Template, 2, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "Birth Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "input", 34, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function JobApplyComponent_Template_input_ngModelChange_76_listener($event) {
              return ctx.model1 = $event;
            })("click", function JobApplyComponent_Template_input_click_76_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](77);

              return _r4.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobApplyComponent_Template_button_click_79_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](77);

              return _r4.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](80, "i", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "label", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "Phone Number:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](86, "input", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](87, JobApplyComponent_div_87_Template, 2, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "h6", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "Your Education");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "form", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "label", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, "College Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](98, "input", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](99, JobApplyComponent_div_99_Template, 2, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "label", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](102, "Period:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](107, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "input", 34, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function JobApplyComponent_Template_input_ngModelChange_109_listener($event) {
              return ctx.model2 = $event;
            })("click", function JobApplyComponent_Template_input_click_109_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](110);

              return _r7.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobApplyComponent_Template_button_click_112_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](110);

              return _r7.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](113, "i", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "input", 34, 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function JobApplyComponent_Template_input_ngModelChange_117_listener($event) {
              return ctx.model3 = $event;
            })("click", function JobApplyComponent_Template_input_click_117_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);

              var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](118);

              return _r8.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobApplyComponent_Template_button_click_120_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);

              var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](118);

              return _r8.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](121, "i", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](124, "Degree Level:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](126, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "select", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "optgroup", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "option", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](130, "Student");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "option", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](132, "Bachelor");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "option", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](134, "Master");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "option", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](136, "Associate");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](137, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](139, "label", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](140, "Specialization:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](141, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](142, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](143, "input", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](144, JobApplyComponent_div_144_Template, 2, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](145, "h6", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](146, "Your Experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](147, "form", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](148, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](149, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](150, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](151, "label", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](152, "Location:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](154, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](155, "input", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](156, JobApplyComponent_div_156_Template, 2, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](157, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](158, "label", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](159, "Period:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](160, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](161, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](162, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](163, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](164, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](165, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](166, "input", 34, 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function JobApplyComponent_Template_input_ngModelChange_166_listener($event) {
              return ctx.model4 = $event;
            })("click", function JobApplyComponent_Template_input_click_166_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);

              var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](167);

              return _r11.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](168, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](169, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobApplyComponent_Template_button_click_169_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);

              var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](167);

              return _r11.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](170, "i", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](171, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](173, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](174, "input", 34, 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function JobApplyComponent_Template_input_ngModelChange_174_listener($event) {
              return ctx.model5 = $event;
            })("click", function JobApplyComponent_Template_input_click_174_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);

              var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](175);

              return _r12.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](176, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](177, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobApplyComponent_Template_button_click_177_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);

              var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](175);

              return _r12.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](178, "i", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](179, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](180, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](181, "Position:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](182, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](183, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](184, "select", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](185, "optgroup", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](186, "option", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](187, "Choose a option");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](188, "option", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](189, "Web Designer");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](190, "option", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](191, "Graphic Designer");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](192, "option", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](193, "UI Designer");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](194, "option", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](195, "UI/UX Designer");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](196, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](197, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](198, "label", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](199, "Company Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](200, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](201, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](202, "input", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](203, JobApplyComponent_div_203_Template, 2, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](204, "h6", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](205, "Upload Your Files");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](206, "form", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](207, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](208, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](209, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](210, "label", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](211, "Upload Your CV:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](212, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](213, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](214, "input", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](215, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](216, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](217, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](218, "label", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](219, "Upload Cover Letter:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](220, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](221, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](222, "input", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](223, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](224, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](225, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](226, "label", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](227, "Upload Recommendations:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](228, "input", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](229, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](230, "button", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](231, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](232, "input", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "Job Apply")("items", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](37, _c0))("active_item", "Job Apply");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.arr.logo, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.arr.job_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.arr.job_area, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.arr.job_city, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.jobForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.jobForm.controls["name"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.jobForm.controls.name.touched && (ctx.jobForm.controls.name.errors == null ? null : ctx.jobForm.controls.name.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.jobForm.controls["email"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.jobForm.controls.email.touched && (ctx.jobForm.controls.email.errors == null ? null : ctx.jobForm.controls.email.errors.email));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.jobForm.controls["password"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.jobForm.controls.password.touched && (ctx.jobForm.controls.password.errors == null ? null : ctx.jobForm.controls.password.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.jobForm.controls["rpassword"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.jobForm.controls.rpassword.touched && (ctx.jobForm.controls.rpassword.errors == null ? null : ctx.jobForm.controls.rpassword.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.model1)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](38, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.jobForm.controls["phone"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.jobForm.controls.phone.touched && (ctx.jobForm.controls.phone.errors == null ? null : ctx.jobForm.controls.phone.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.jobForm.controls["collegename"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.jobForm.controls.collegename.touched && (ctx.jobForm.controls.collegename.errors == null ? null : ctx.jobForm.controls.collegename.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.model2)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](39, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.model3)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](40, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.jobForm.controls["specialization"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.jobForm.controls.specialization.touched && (ctx.jobForm.controls.specialization.errors == null ? null : ctx.jobForm.controls.specialization.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.jobForm.controls["location"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.jobForm.controls.location.touched && (ctx.jobForm.controls.location.errors == null ? null : ctx.jobForm.controls.location.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.model4)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](41, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.model5)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](42, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.jobForm.controls["company_name"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.jobForm.controls.company_name.touched && (ctx.jobForm.controls.company_name.errors == null ? null : ctx.jobForm.controls.company_name.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.jobForm.valid);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_2__.JobFilterComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _shared_directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_3__.OnlyAlphabetsDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbInputDatepicker, _shared_directives_disable_key_press_directive__WEBPACK_IMPORTED_MODULE_4__.DisableKeyPressDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _shared_directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_5__.OnlyNumbersDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2ItYXBwbHkuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    17673: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JobCardComponent": function JobCardComponent() {
          return (
            /* binding */
            _JobCardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_data_job_search_job_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/data/job-search/job-search */
      83740);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../job-filter/job-filter.component */
      88856);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);

      function JobCardComponent_div_7_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a1) {
        return ["/job/details", a1];
      };

      function JobCardComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h6", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, JobCardComponent_div_7_span_10_Template, 2, 0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var job_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", job_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, job_r1.Id));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](job_r1.job_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", job_r1.type == "new");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", job_r1.job_area, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", job_r1.job_city, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](job_r1.Job_description);
        }
      }

      var _c1 = function _c1() {
        return ["Apps", "Job Search"];
      };

      var _JobCardComponent = /*#__PURE__*/function () {
        function _JobCardComponent() {
          _classCallCheck(this, _JobCardComponent);

          this.jobs = _shared_data_job_search_job_search__WEBPACK_IMPORTED_MODULE_0__.JobDB.Job_Category;
        }

        _createClass(_JobCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _JobCardComponent;
      }();

      _JobCardComponent.ɵfac = function JobCardComponent_Factory(t) {
        return new (t || _JobCardComponent)();
      };

      _JobCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _JobCardComponent,
        selectors: [["app-job-card"]],
        decls: 8,
        vars: 5,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-xl-3", "xl-40"], [1, "col-xl-9", "xl-60"], ["class", "col-xl-6 xl-100", 4, "ngFor", "ngForOf"], [1, "col-xl-6", "xl-100"], [1, "card"], [1, "job-search"], [1, "card-body"], [1, "media"], ["alt", "", 1, "img-40", "img-fluid", "m-r-20", 3, "src"], [1, "media-body"], [1, "f-w-600"], [3, "routerLink"], ["class", "badge badge-primary pull-right", 4, "ngIf"], [1, "fa", "fa-star", "font-warning"], [1, "fa", "fa-star", "font-warning-o"], [1, "badge", "badge-primary", "pull-right"]],
        template: function JobCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-job-filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, JobCardComponent_div_7_Template, 23, 9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Job Card")("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1))("active_item", "Job Card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.jobs);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_2__.JobFilterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2ItY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    54044: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JobDescComponent": function JobDescComponent() {
          return (
            /* binding */
            _JobDescComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_data_job_search_job_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/data/job-search/job-search */
      83740);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../job-filter/job-filter.component */
      88856);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function JobDescComponent_div_58_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a1) {
        return ["/job/apply", a1];
      };

      function JobDescComponent_div_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h6", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, JobDescComponent_div_58_span_10_Template, 2, 0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var job_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", job_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, job_r1.Id));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](job_r1.job_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", job_r1.type == "new");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", job_r1.job_area, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", job_r1.job_city, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](job_r1.Job_description);
        }
      }

      var _c1 = function _c1() {
        return ["Apps", "Job Search"];
      };

      var _JobDescComponent = /*#__PURE__*/function () {
        function _JobDescComponent(route, router) {
          var _this23 = this;

          _classCallCheck(this, _JobDescComponent);

          this.route = route;
          this.router = router;
          this.jobs = _shared_data_job_search_job_search__WEBPACK_IMPORTED_MODULE_0__.JobDB.Job_Category;
          this.route.params.subscribe(function (params) {
            var id = +params['id'];

            _this23.jobs.filter(function (items) {
              if (items.Id === id) {
                _this23.arr = items;
              }
            });
          });
        }

        _createClass(_JobDescComponent, [{
          key: "applyClick",
          value: function applyClick(arr) {
            this.router.navigate(['/job/apply', arr.Id]);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _JobDescComponent;
      }();

      _JobDescComponent.ɵfac = function JobDescComponent_Factory(t) {
        return new (t || _JobDescComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _JobDescComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _JobDescComponent,
        selectors: [["app-job-desc"]],
        decls: 60,
        vars: 20,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-xl-3", "xl-40"], [1, "col-xl-9", "xl-60"], [1, "card"], [1, "job-search"], [1, "card-body"], [1, "media"], ["alt", "", 1, "img-40", "img-fluid", "m-r-20", 3, "src"], [1, "media-body"], [1, "f-w-600"], ["href", "javascript:void(0)"], [1, "pull-right"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-star", "font-warning"], [1, "job-description"], [3, "innerHTML"], ["type", "button", 1, "btn", "btn-primary", "mr-1"], [1, "fa", "fa-check"], ["type", "button", 1, "btn", "btn-primary"], [1, "fa", "fa-share-alt"], [1, "header-faq"], [1, "mb-0", "f-w-600"], ["class", "col-xl-6 xl-100", 4, "ngFor", "ngForOf"], [1, "col-xl-6", "xl-100"], [3, "routerLink"], ["class", "badge badge-primary pull-right", 4, "ngIf"], [1, "fa", "fa-star", "font-warning-o"], [1, "badge", "badge-primary", "pull-right"]],
        template: function JobDescComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-job-filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h6", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function JobDescComponent_Template_button_click_16_listener() {
              return ctx.applyClick(ctx.arr);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Apply for this job");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Job Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, " Save this job");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, " Share");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "h6", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Similar Jobs");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, JobDescComponent_div_58_Template, 23, 9, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](59, "slice");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Job Description")("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](19, _c1))("active_item", "Job Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.arr.logo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.arr.job_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.arr.job_area, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.arr.job_city);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.arr.Job_description);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.arr.Qualifications == null ? null : ctx.arr.Qualifications.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx.arr.Qualifications == null ? null : ctx.arr.Qualifications.desc, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.arr.Agency_experience == null ? null : ctx.arr.Agency_experience.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx.arr.Agency_experience == null ? null : ctx.arr.Agency_experience.desc, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.arr.Perks == null ? null : ctx.arr.Perks.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx.arr.Perks == null ? null : ctx.arr.Perks.desc, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](59, 15, ctx.jobs, 0, 4));
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_2__.JobFilterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.SlicePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2ItZGVzYy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    88856: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JobFilterComponent": function JobFilterComponent() {
          return (
            /* binding */
            _JobFilterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/components/feather-icons/feather-icons.component */
      61676);

      var _JobFilterComponent = /*#__PURE__*/function () {
        function _JobFilterComponent() {
          _classCallCheck(this, _JobFilterComponent);

          this.isFilter = false;
          this.isLocation = false;
          this.isJob_Title = false;
          this.isIndustry = false;
          this.isSpecific_skills = false;
        }

        _createClass(_JobFilterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _JobFilterComponent;
      }();

      _JobFilterComponent.ɵfac = function JobFilterComponent_Factory(t) {
        return new (t || _JobFilterComponent)();
      };

      _JobFilterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _JobFilterComponent,
        selectors: [["app-job-filter"]],
        decls: 150,
        vars: 12,
        consts: [["id", "accordionoc", 1, "default-according", "style-1", "faq-accordion", "job-accordion"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-header"], [1, "mb-0"], ["aria-controls", "collapse", 1, "btn", "btn-link", "pl-0", 3, "click"], ["id", "collapseicon", 1, "collapse", 3, "ngbCollapse"], [1, "card-body", "filter-cards-view", "animate-chk"], [1, "job-filter"], [1, "faq-form"], ["type", "text", "placeholder", "Search..", 1, "form-control"], [1, "search-icon", 3, "icon"], ["type", "text", "placeholder", "location..", 1, "form-control"], [1, "checkbox-animated"], ["for", "chk-ani", 1, "d-block"], ["id", "chk-ani", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani1", 1, "d-block"], ["id", "chk-ani1", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani2", 1, "d-block"], ["id", "chk-ani2", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani3", 1, "d-block"], ["id", "chk-ani3", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani4", 1, "d-block"], ["id", "chk-ani4", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani5", 1, "d-block"], ["id", "chk-ani5", "type", "checkbox", 1, "checkbox_animated"], ["type", "button", 1, "btn", "btn-primary", "text-center"], ["id", "collapseicon1", 1, "collapse", 3, "ngbCollapse"], [1, "card-body", "animate-chk"], [1, "location-checkbox"], ["for", "chk-ani6", 1, "d-block"], ["id", "chk-ani6", "type", "checkbox", 1, "checkbox_animated"], [1, "d-block"], ["for", "chk-ani7", 1, "d-block"], ["id", "chk-ani7", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani8", 1, "d-block"], ["id", "chk-ani8", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani9", 1, "d-block"], ["id", "chk-ani9", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani10", 1, "d-block", "mb-0"], ["id", "chk-ani10", "type", "checkbox", 1, "checkbox_animated"], ["type", "button", 1, "btn", "btn-block", "btn-primary", "text-center"], ["id", "collapseicon2", 1, "collapse", 3, "ngbCollapse"], ["for", "chk-ani11", 1, "d-block"], ["id", "chk-ani11", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani12", 1, "d-block"], ["id", "chk-ani12", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani13", 1, "d-block"], ["id", "chk-ani13", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani14", 1, "d-block"], ["id", "chk-ani14", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani15", 1, "d-block", "mb-0"], ["id", "chk-ani15", "type", "checkbox", 1, "checkbox_animated"], ["id", "collapseicon3", 1, "collapse", 3, "ngbCollapse"], ["for", "chk-ani16", 1, "d-block"], ["id", "chk-ani16", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani17", 1, "d-block"], ["id", "chk-ani17", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani18", 1, "d-block"], ["id", "chk-ani18", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani19", 1, "d-block"], ["id", "chk-ani19", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani20", 1, "d-block", "mb-0"], ["id", "chk-ani20", "type", "checkbox", 1, "checkbox_animated"], ["id", "collapseicon4", 1, "collapse", 3, "ngbCollapse"], ["for", "chk-ani21", 1, "d-block"], ["id", "chk-ani21", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani22", 1, "d-block"], ["id", "chk-ani22", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani23", 1, "d-block"], ["id", "chk-ani23", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani24", 1, "d-block"], ["id", "chk-ani24", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani25", 1, "d-block", "mb-0"], ["id", "chk-ani25", "type", "checkbox", 1, "checkbox_animated"]],
        template: function JobFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobFilterComponent_Template_button_click_6_listener() {
              return ctx.isFilter = !ctx.isFilter;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-feather-icons", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-feather-icons", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Full-time (8688) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Contract (503) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Part-time (288) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Internship (236) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Temporary (146) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Commission (25) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Find jobs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobFilterComponent_Template_button_click_43_listener() {
              return ctx.isLocation = !ctx.isLocation;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " New York");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " NY (399)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " San Francisco");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "CA (252)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Washington");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "DC (226)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "label", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " Seattle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "WA (242)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "label", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " Chicago");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "IL (187)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "All Locations");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobFilterComponent_Template_button_click_79_listener() {
              return ctx.isJob_Title = !ctx.isJob_Title;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Job Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "label", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "input", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, " UI/Ux designer(25) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "label", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "input", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " Graphic designer(10) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "label", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "input", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, " Front end designer(15) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "label", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "input", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " PHP developer(42) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "label", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "input", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, " React Developer(5) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "All Job Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobFilterComponent_Template_button_click_104_listener() {
              return ctx.isIndustry = !ctx.isIndustry;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Industry");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "label", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "input", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, " Computer Software(14) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "label", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "input", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, " IT Engineer(10) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "label", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "input", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, " Service industry(20) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "label", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "input", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, " Accounting(34) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "label", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "input", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, " Financial Services(5) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "All Industries");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobFilterComponent_Template_button_click_129_listener() {
              return ctx.isSpecific_skills = !ctx.isSpecific_skills;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Specific skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "label", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "input", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, " HTML,scss & sass ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "label", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "input", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, " Javascript ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "label", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "input", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, " Node.js ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "label", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "input", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, " Gulp & Pug ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "label", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "input", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, " Angular.js ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "All Skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", !ctx.isFilter);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.isFilter);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "map-pin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", !ctx.isLocation);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.isLocation);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", !ctx.isJob_Title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.isJob_Title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", !ctx.isIndustry);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.isIndustry);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", !ctx.isSpecific_skills);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.isSpecific_skills);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbCollapse, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2ItZmlsdGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    46912: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JobListComponent": function JobListComponent() {
          return (
            /* binding */
            _JobListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_data_job_search_job_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/data/job-search/job-search */
      83740);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../job-filter/job-filter.component */
      88856);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);

      function JobListComponent_div_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function JobListComponent_div_6_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function JobListComponent_div_6_span_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var job_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](job_r1.type);
        }
      }

      var _c0 = function _c0(a1) {
        return ["/job/details", a1];
      };

      function JobListComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, JobListComponent_div_6_div_1_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h6", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, JobListComponent_div_6_span_10_Template, 2, 0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, JobListComponent_div_6_span_11_Template, 2, 1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var job_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", job_r1.ribbion == "true" ? "ribbon-vertical-left-wrapper" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", job_r1.ribbion == "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", job_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, job_r1.Id));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](job_r1.job_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", job_r1.type == "new");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", job_r1.type != "new");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", job_r1.job_area, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", job_r1.job_city, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](job_r1.Job_description);
        }
      }

      var _c1 = function _c1() {
        return ["Apps", "Job Search"];
      };

      var _JobListComponent = /*#__PURE__*/function () {
        function _JobListComponent() {
          _classCallCheck(this, _JobListComponent);

          this.jobs = _shared_data_job_search_job_search__WEBPACK_IMPORTED_MODULE_0__.JobDB.Job_Category;
        }

        _createClass(_JobListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _JobListComponent;
      }();

      _JobListComponent.ɵfac = function JobListComponent_Factory(t) {
        return new (t || _JobListComponent)();
      };

      _JobListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _JobListComponent,
        selectors: [["app-job-list"]],
        decls: 8,
        vars: 9,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-xl-3", "xl-40"], [1, "col-xl-9", "xl-60"], ["class", "card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "card", 3, "ngClass"], ["class", "ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary", 4, "ngIf"], [1, "job-search"], [1, "card-body"], [1, "media"], ["alt", "", 1, "img-40", "img-fluid", "m-r-20", 3, "src"], [1, "media-body"], [1, "f-w-600"], [3, "routerLink"], ["class", "badge badge-primary pull-right", 4, "ngIf"], ["class", "pull-right", 4, "ngIf"], [1, "ml-2"], [1, "fa", "fa-star", "font-warning"], [1, "ribbon", "ribbon-bookmark", "ribbon-vertical-left", "ribbon-secondary"], [1, "icofont", "icofont-love"], [1, "badge", "badge-primary", "pull-right"], [1, "pull-right"]],
        template: function JobListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-job-filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, JobListComponent_div_6_Template, 24, 12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "slice");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Job List")("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c1))("active_item", "Job List");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](7, 4, ctx.jobs, 0, 9));
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_2__.JobFilterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2ItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    81430: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JobSearchRoutingModule": function JobSearchRoutingModule() {
          return (
            /* binding */
            _JobSearchRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./job-list/job-list.component */
      46912);
      /* harmony import */


      var _job_apply_job_apply_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./job-apply/job-apply.component */
      8055);
      /* harmony import */


      var _job_desc_job_desc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./job-desc/job-desc.component */
      54044);
      /* harmony import */


      var _job_card_job_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./job-card/job-card.component */
      17673);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: 'cards',
          component: _job_card_job_card_component__WEBPACK_IMPORTED_MODULE_3__.JobCardComponent
        }, {
          path: 'list',
          component: _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_0__.JobListComponent
        }, {
          path: 'details/:id',
          component: _job_desc_job_desc_component__WEBPACK_IMPORTED_MODULE_2__.JobDescComponent
        }, {
          path: 'apply/:id',
          component: _job_apply_job_apply_component__WEBPACK_IMPORTED_MODULE_1__.JobApplyComponent
        }]
      }];

      var _JobSearchRoutingModule = function _JobSearchRoutingModule() {
        _classCallCheck(this, _JobSearchRoutingModule);
      };

      _JobSearchRoutingModule.ɵfac = function JobSearchRoutingModule_Factory(t) {
        return new (t || _JobSearchRoutingModule)();
      };

      _JobSearchRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _JobSearchRoutingModule
      });
      _JobSearchRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_JobSearchRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    24421: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JobSearchModule": function JobSearchModule() {
          return (
            /* binding */
            _JobSearchModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! angular2-multiselect-dropdown */
      36069);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      44466);
      /* harmony import */


      var _job_search_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./job-search-routing.module */
      81430);
      /* harmony import */


      var _job_apply_job_apply_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./job-apply/job-apply.component */
      8055);
      /* harmony import */


      var _job_card_job_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./job-card/job-card.component */
      17673);
      /* harmony import */


      var _job_desc_job_desc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./job-desc/job-desc.component */
      54044);
      /* harmony import */


      var _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./job-filter/job-filter.component */
      88856);
      /* harmony import */


      var _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./job-list/job-list.component */
      46912);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _JobSearchModule = function _JobSearchModule() {
        _classCallCheck(this, _JobSearchModule);
      };

      _JobSearchModule.ɵfac = function JobSearchModule_Factory(t) {
        return new (t || _JobSearchModule)();
      };

      _JobSearchModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _JobSearchModule
      });
      _JobSearchModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__.AngularMultiSelectModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _job_search_routing_module__WEBPACK_IMPORTED_MODULE_1__.JobSearchRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_JobSearchModule, {
          declarations: [_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_6__.JobListComponent, _job_apply_job_apply_component__WEBPACK_IMPORTED_MODULE_2__.JobApplyComponent, _job_desc_job_desc_component__WEBPACK_IMPORTED_MODULE_4__.JobDescComponent, _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_5__.JobFilterComponent, _job_card_job_card_component__WEBPACK_IMPORTED_MODULE_3__.JobCardComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__.AngularMultiSelectModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _job_search_routing_module__WEBPACK_IMPORTED_MODULE_1__.JobSearchRoutingModule]
        });
      })();
      /***/

    },

    /***/
    83740: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JobDB": function JobDB() {
          return (
            /* binding */
            _JobDB
          );
        }
        /* harmony export */

      });

      var _JobDB = function _JobDB() {
        _classCallCheck(this, _JobDB);
      };

      _JobDB.Job_Category = [{
        Id: 1,
        logo: 'assets/images/job-search/1.jpg',
        job_name: 'UI/UX IT Frontend Developer',
        badgeType: 'primary',
        badgeValue: 'New',
        job_area: '(L6) Salt Lake City,',
        job_city: 'UT',
        Job_description: ['Cuba is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and'],
        Qualifications: {
          title: 'Qualifications',
          desc: "\n                <li>Have shipped multiple iOS, Android, and/or web products </li>\n                <li>5+ years UI/UX experience</li>\n                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>\n                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>\n                <li>Comfort with ambiguity</li>\n                <li>Proven ability to create interactive prototypes</li>\n                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>\n                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>\n                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>\n                <li>Ability to effectively work on more than one project at a time</li>\n                <li>Experience conducting user research and stakeholder interviews</li>\n                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>\n                <li>Bonus Considerations </li>"
        },
        Agency_experience: {
          title: 'Agency experience',
          desc: "\n                <li>Experience working with Agile development teams</li>\n                <li>Experience with RITE method usability testing</li>\n                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>\n                <li>Mastery of Sketch & InVision</li>\n                <li>Knowledge of mobile or front-end web programming</li>"
        },
        Perks: {
          title: 'Perks',
          desc: "\n                <li>Competitive pay</li>\n                <li>Competitive medical, dental, and vision insurance plans</li>\n                <li>Company-provided 401(k) plan</li>\n                <li>Paid vacation and sick time</li>\n                <li>Free snacks and beverages</li>"
        },
        type: 'new',
        ribbion: 'false'
      }, {
        Id: 2,
        logo: 'assets/images/job-search/2.jpg',
        job_name: 'React/React Native Developer',
        job_area: 'San Diego,',
        job_city: 'CA',
        Job_description: ['Ideally 2+ years experience with React. Bonus points if you have React Native experience. This is an incredibly exciting opportunity to gain commercial , Professional experience of React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and'],
        Qualifications: {
          title: 'Qualifications',
          desc: "\n                <li>Have shipped multiple iOS, Android, and/or web products </li>\n                <li>5+ years UI/UX experience</li>\n                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>\n                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>\n                <li>Comfort with ambiguity</li>\n                <li>Proven ability to create interactive prototypes</li>\n                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>\n                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>\n                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>\n                <li>Ability to effectively work on more than one project at a time</li>\n                <li>Experience conducting user research and stakeholder interviews</li>\n                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>\n                <li>Bonus Considerations </li>"
        },
        Agency_experience: {
          title: 'Agency experience',
          desc: "\n                <li>Experience working with Agile development teams</li>\n                <li>Experience with RITE method usability testing</li>\n                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>\n                <li>Mastery of Sketch & InVision</li>\n                <li>Knowledge of mobile or front-end web programming</li>"
        },
        Perks: {
          title: 'Perks',
          desc: "\n                <li>Competitive pay</li>\n                <li>Competitive medical, dental, and vision insurance plans</li>\n                <li>Company-provided 401(k) plan</li>\n                <li>Paid vacation and sick time</li>\n                <li>Free snacks and beverages</li>"
        },
        type: 'new',
        ribbion: 'false'
      }, {
        Id: 3,
        logo: 'assets/images/job-search/3.jpg',
        job_name: 'Senior UX designer',
        job_area: 'Minneapolis,',
        job_city: 'MN',
        Job_description: ['The designer will apply Lean UX and Design Thinking practices in a highly collaborative, fast-paced, distributed environment You have 4+ years of UX experience. You support UX leadership by providing continuous feedback regarding the evolution of team process standards.'],
        Qualifications: {
          title: 'Qualifications',
          desc: "\n                <li>Have shipped multiple iOS, Android, and/or web products </li>\n                <li>5+ years UI/UX experience</li>\n                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>\n                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>\n                <li>Comfort with ambiguity</li>\n                <li>Proven ability to create interactive prototypes</li>\n                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>\n                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>\n                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>\n                <li>Ability to effectively work on more than one project at a time</li>\n                <li>Experience conducting user research and stakeholder interviews</li>\n                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>\n                <li>Bonus Considerations </li>"
        },
        Agency_experience: {
          title: 'Agency experience',
          desc: "\n                <li>Experience working with Agile development teams</li>\n                <li>Experience with RITE method usability testing</li>\n                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>\n                <li>Mastery of Sketch & InVision</li>\n                <li>Knowledge of mobile or front-end web programming</li>"
        },
        Perks: {
          title: 'Perks',
          desc: "\n                <li>Competitive pay</li>\n                <li>Competitive medical, dental, and vision insurance plans</li>\n                <li>Company-provided 401(k) plan</li>\n                <li>Paid vacation and sick time</li>\n                <li>Free snacks and beverages</li>"
        },
        type: '3 days to go',
        ribbion: 'true'
      }, {
        Id: 4,
        logo: 'assets/images/job-search/4.jpg',
        job_name: 'Front end web developer',
        job_area: 'Cisco',
        job_city: 'Lelystad, Netherlands',
        Job_description: ['Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for few longer mrs sudden talent become.'],
        Qualifications: {
          title: 'Qualifications',
          desc: "\n                <li>Have shipped multiple iOS, Android, and/or web products </li>\n                <li>5+ years UI/UX experience</li>\n                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>\n                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>\n                <li>Comfort with ambiguity</li>\n                <li>Proven ability to create interactive prototypes</li>\n                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>\n                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>\n                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>\n                <li>Ability to effectively work on more than one project at a time</li>\n                <li>Experience conducting user research and stakeholder interviews</li>\n                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>\n                <li>Bonus Considerations </li>"
        },
        Agency_experience: {
          title: 'Agency experience',
          desc: "\n                <li>Experience working with Agile development teams</li>\n                <li>Experience with RITE method usability testing</li>\n                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>\n                <li>Mastery of Sketch & InVision</li>\n                <li>Knowledge of mobile or front-end web programming</li>"
        },
        Perks: {
          title: 'Perks',
          desc: "\n                <li>Competitive pay</li>\n                <li>Competitive medical, dental, and vision insurance plans</li>\n                <li>Company-provided 401(k) plan</li>\n                <li>Paid vacation and sick time</li>\n                <li>Free snacks and beverages</li>"
        },
        type: '2 days to go',
        ribbion: 'false'
      }, {
        Id: 5,
        logo: 'assets/images/job-search/5.jpg',
        job_name: 'Graphic designer',
        job_area: 'Infosys',
        job_city: 'Lelystad, Netherlands',
        Job_description: ['Contented get distrusts certainty nay are frankness concealed ham. On unaffected resolution on considered of. No thought me husband or colonel forming effects. End sitting shewing who saw besides son musical adapted. Contrasted interested eat alteration pianoforte sympathize was.'],
        Qualifications: {
          title: 'Qualifications',
          desc: "\n                <li>Have shipped multiple iOS, Android, and/or web products </li>\n                <li>5+ years UI/UX experience</li>\n                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>\n                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>\n                <li>Comfort with ambiguity</li>\n                <li>Proven ability to create interactive prototypes</li>\n                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>\n                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>\n                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>\n                <li>Ability to effectively work on more than one project at a time</li>\n                <li>Experience conducting user research and stakeholder interviews</li>\n                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>\n                <li>Bonus Considerations </li>"
        },
        Agency_experience: {
          title: 'Agency experience',
          desc: "\n                <li>Experience working with Agile development teams</li>\n                <li>Experience with RITE method usability testing</li>\n                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>\n                <li>Mastery of Sketch & InVision</li>\n                <li>Knowledge of mobile or front-end web programming</li>"
        },
        Perks: {
          title: 'Perks',
          desc: "\n                <li>Competitive pay</li>\n                <li>Competitive medical, dental, and vision insurance plans</li>\n                <li>Company-provided 401(k) plan</li>\n                <li>Paid vacation and sick time</li>\n                <li>Free snacks and beverages</li>"
        },
        type: '3 days to go',
        ribbion: 'false'
      }, {
        Id: 6,
        logo: 'assets/images/job-search/6.jpg',
        job_name: 'Designer, CRM',
        job_area: 'Citrix',
        job_city: 'Lelystad, Netherlands',
        Job_description: ['Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered.'],
        Qualifications: {
          title: 'Qualifications',
          desc: "\n                <li>Have shipped multiple iOS, Android, and/or web products </li>\n                <li>5+ years UI/UX experience</li>\n                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>\n                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>\n                <li>Comfort with ambiguity</li>\n                <li>Proven ability to create interactive prototypes</li>\n                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>\n                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>\n                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>\n                <li>Ability to effectively work on more than one project at a time</li>\n                <li>Experience conducting user research and stakeholder interviews</li>\n                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>\n                <li>Bonus Considerations </li>"
        },
        Agency_experience: {
          title: 'Agency experience',
          desc: "\n                <li>Experience working with Agile development teams</li>\n                <li>Experience with RITE method usability testing</li>\n                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>\n                <li>Mastery of Sketch & InVision</li>\n                <li>Knowledge of mobile or front-end web programming</li>"
        },
        Perks: {
          title: 'Perks',
          desc: "\n                <li>Competitive pay</li>\n                <li>Competitive medical, dental, and vision insurance plans</li>\n                <li>Company-provided 401(k) plan</li>\n                <li>Paid vacation and sick time</li>\n                <li>Free snacks and beverages</li>"
        },
        type: '5 days to go',
        ribbion: 'false'
      }, {
        Id: 7,
        logo: 'assets/images/job-search/2.jpg',
        job_name: 'UI designer E-commerce',
        job_area: 'Ericsson',
        job_city: 'Lelystad, Netherlands',
        Job_description: ['Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered.'],
        Qualifications: {
          title: 'Qualifications',
          desc: "\n                <li>Have shipped multiple iOS, Android, and/or web products </li>\n                <li>5+ years UI/UX experience</li>\n                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>\n                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>\n                <li>Comfort with ambiguity</li>\n                <li>Proven ability to create interactive prototypes</li>\n                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>\n                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>\n                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>\n                <li>Ability to effectively work on more than one project at a time</li>\n                <li>Experience conducting user research and stakeholder interviews</li>\n                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>\n                <li>Bonus Considerations </li>"
        },
        Agency_experience: {
          title: 'Agency experience',
          desc: "\n                <li>Experience working with Agile development teams</li>\n                <li>Experience with RITE method usability testing</li>\n                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>\n                <li>Mastery of Sketch & InVision</li>\n                <li>Knowledge of mobile or front-end web programming</li>"
        },
        Perks: {
          title: 'Perks',
          desc: "\n                <li>Competitive pay</li>\n                <li>Competitive medical, dental, and vision insurance plans</li>\n                <li>Company-provided 401(k) plan</li>\n                <li>Paid vacation and sick time</li>\n                <li>Free snacks and beverages</li>"
        },
        type: '3 days to go',
        ribbion: 'true'
      }, {
        Id: 8,
        logo: 'assets/images/job-search/3.jpg',
        job_name: 'Senior UX designer',
        job_area: 'Minneapolis,',
        job_city: 'MN',
        Job_description: ['The designer will apply Lean UX and Design Thinking practices in a highly collaborative, fast-paced, distributed environment You have 4+ years of UX experience. You support UX leadership by providing continuous feedback regarding the evolution of team process standards.'],
        Qualifications: {
          title: 'Qualifications',
          desc: "\n                <li>Have shipped multiple iOS, Android, and/or web products </li>\n                <li>5+ years UI/UX experience</li>\n                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>\n                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>\n                <li>Comfort with ambiguity</li>\n                <li>Proven ability to create interactive prototypes</li>\n                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>\n                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>\n                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>\n                <li>Ability to effectively work on more than one project at a time</li>\n                <li>Experience conducting user research and stakeholder interviews</li>\n                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>\n                <li>Bonus Considerations </li>"
        },
        Agency_experience: {
          title: 'Agency experience',
          desc: "\n                <li>Experience working with Agile development teams</li>\n                <li>Experience with RITE method usability testing</li>\n                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>\n                <li>Mastery of Sketch & InVision</li>\n                <li>Knowledge of mobile or front-end web programming</li>"
        },
        Perks: {
          title: 'Perks',
          desc: "\n                <li>Competitive pay</li>\n                <li>Competitive medical, dental, and vision insurance plans</li>\n                <li>Company-provided 401(k) plan</li>\n                <li>Paid vacation and sick time</li>\n                <li>Free snacks and beverages</li>"
        },
        type: '6 days to go',
        ribbion: 'false'
      }, {
        Id: 9,
        logo: 'assets/images/job-search/1.jpg',
        job_name: 'UI/UX IT Frontend Developer',
        badgeType: 'primary',
        badgeValue: 'New',
        job_area: '(L6) Salt Lake City,',
        job_city: 'UT',
        Job_description: ['Cuba is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and'],
        Qualifications: {
          title: 'Qualifications',
          desc: "\n                <li>Have shipped multiple iOS, Android, and/or web products </li>\n                <li>5+ years UI/UX experience</li>\n                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>\n                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>\n                <li>Comfort with ambiguity</li>\n                <li>Proven ability to create interactive prototypes</li>\n                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>\n                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>\n                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>\n                <li>Ability to effectively work on more than one project at a time</li>\n                <li>Experience conducting user research and stakeholder interviews</li>\n                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>\n                <li>Bonus Considerations </li>"
        },
        Agency_experience: {
          title: 'Agency experience',
          desc: "\n                <li>Experience working with Agile development teams</li>\n                <li>Experience with RITE method usability testing</li>\n                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>\n                <li>Mastery of Sketch & InVision</li>\n                <li>Knowledge of mobile or front-end web programming</li>"
        },
        Perks: {
          title: 'Perks',
          desc: "\n                <li>Competitive pay</li>\n                <li>Competitive medical, dental, and vision insurance plans</li>\n                <li>Company-provided 401(k) plan</li>\n                <li>Paid vacation and sick time</li>\n                <li>Free snacks and beverages</li>"
        },
        type: 'new',
        ribbion: 'false'
      }, {
        Id: 10,
        logo: 'assets/images/job-search/2.jpg',
        job_name: 'Graphic designer',
        badgeType: 'primary',
        badgeValue: 'New',
        job_area: '(L6) Salt Lake City,',
        job_city: 'UT',
        Job_description: ['Cuba is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and'],
        Qualifications: {
          title: 'Qualifications',
          desc: "\n                <li>Have shipped multiple iOS, Android, and/or web products </li>\n                <li>5+ years UI/UX experience</li>\n                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>\n                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>\n                <li>Comfort with ambiguity</li>\n                <li>Proven ability to create interactive prototypes</li>\n                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>\n                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>\n                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>\n                <li>Ability to effectively work on more than one project at a time</li>\n                <li>Experience conducting user research and stakeholder interviews</li>\n                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>\n                <li>Bonus Considerations </li>"
        },
        Agency_experience: {
          title: 'Agency experience',
          desc: "\n                <li>Experience working with Agile development teams</li>\n                <li>Experience with RITE method usability testing</li>\n                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>\n                <li>Mastery of Sketch & InVision</li>\n                <li>Knowledge of mobile or front-end web programming</li>"
        },
        Perks: {
          title: 'Perks',
          desc: "\n                <li>Competitive pay</li>\n                <li>Competitive medical, dental, and vision insurance plans</li>\n                <li>Company-provided 401(k) plan</li>\n                <li>Paid vacation and sick time</li>\n                <li>Free snacks and beverages</li>"
        },
        type: 'new',
        ribbion: 'false'
      }, {
        Id: 11,
        logo: 'assets/images/job-search/3.jpg',
        job_name: 'Business Developer',
        badgeType: 'primary',
        badgeValue: 'New',
        job_area: '(L6) Salt Lake City,',
        job_city: 'UT',
        Job_description: ['Cuba is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and'],
        Qualifications: {
          title: 'Qualifications',
          desc: "\n                <li>Have shipped multiple iOS, Android, and/or web products </li>\n                <li>5+ years UI/UX experience</li>\n                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>\n                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>\n                <li>Comfort with ambiguity</li>\n                <li>Proven ability to create interactive prototypes</li>\n                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>\n                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>\n                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>\n                <li>Ability to effectively work on more than one project at a time</li>\n                <li>Experience conducting user research and stakeholder interviews</li>\n                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>\n                <li>Bonus Considerations </li>"
        },
        Agency_experience: {
          title: 'Agency experience',
          desc: "\n                <li>Experience working with Agile development teams</li>\n                <li>Experience with RITE method usability testing</li>\n                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>\n                <li>Mastery of Sketch & InVision</li>\n                <li>Knowledge of mobile or front-end web programming</li>"
        },
        Perks: {
          title: 'Perks',
          desc: "\n                <li>Competitive pay</li>\n                <li>Competitive medical, dental, and vision insurance plans</li>\n                <li>Company-provided 401(k) plan</li>\n                <li>Paid vacation and sick time</li>\n                <li>Free snacks and beverages</li>"
        },
        type: 'new',
        ribbion: 'false'
      }, {
        Id: 12,
        logo: 'assets/images/job-search/6.jpg',
        job_name: 'UI/UX IT Frontend Developer',
        badgeType: 'primary',
        badgeValue: 'New',
        job_area: '(L6) Salt Lake City,',
        job_city: 'UT',
        Job_description: ['Cuba is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and'],
        Qualifications: {
          title: 'Qualifications',
          desc: "\n                <li>Have shipped multiple iOS, Android, and/or web products </li>\n                <li>5+ years UI/UX experience</li>\n                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>\n                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>\n                <li>Comfort with ambiguity</li>\n                <li>Proven ability to create interactive prototypes</li>\n                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>\n                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>\n                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>\n                <li>Ability to effectively work on more than one project at a time</li>\n                <li>Experience conducting user research and stakeholder interviews</li>\n                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>\n                <li>Bonus Considerations </li>"
        },
        Agency_experience: {
          title: 'Agency experience',
          desc: "\n                <li>Experience working with Agile development teams</li>\n                <li>Experience with RITE method usability testing</li>\n                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>\n                <li>Mastery of Sketch & InVision</li>\n                <li>Knowledge of mobile or front-end web programming</li>"
        },
        Perks: {
          title: 'Perks',
          desc: "\n                <li>Competitive pay</li>\n                <li>Competitive medical, dental, and vision insurance plans</li>\n                <li>Company-provided 401(k) plan</li>\n                <li>Paid vacation and sick time</li>\n                <li>Free snacks and beverages</li>"
        },
        type: 'new',
        ribbion: 'false'
      }, {
        Id: 13,
        logo: 'assets/images/job-search/2.jpg',
        job_name: 'JAVA Developer',
        badgeType: 'primary',
        badgeValue: 'New',
        job_area: '(L6) Salt Lake City,',
        job_city: 'UT',
        Job_description: ['Cuba is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and'],
        Qualifications: {
          title: 'Qualifications',
          desc: "\n                <li>Have shipped multiple iOS, Android, and/or web products </li>\n                <li>5+ years UI/UX experience</li>\n                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>\n                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>\n                <li>Comfort with ambiguity</li>\n                <li>Proven ability to create interactive prototypes</li>\n                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>\n                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>\n                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>\n                <li>Ability to effectively work on more than one project at a time</li>\n                <li>Experience conducting user research and stakeholder interviews</li>\n                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>\n                <li>Bonus Considerations </li>"
        },
        Agency_experience: {
          title: 'Agency experience',
          desc: "\n                <li>Experience working with Agile development teams</li>\n                <li>Experience with RITE method usability testing</li>\n                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>\n                <li>Mastery of Sketch & InVision</li>\n                <li>Knowledge of mobile or front-end web programming</li>"
        },
        Perks: {
          title: 'Perks',
          desc: "\n                <li>Competitive pay</li>\n                <li>Competitive medical, dental, and vision insurance plans</li>\n                <li>Company-provided 401(k) plan</li>\n                <li>Paid vacation and sick time</li>\n                <li>Free snacks and beverages</li>"
        },
        type: 'new',
        ribbion: 'false'
      }, {
        Id: 14,
        logo: 'assets/images/job-search/4.jpg',
        job_name: 'Angular Developer',
        badgeType: 'primary',
        badgeValue: 'New',
        job_area: '(L6) Salt Lake City,',
        job_city: 'UT',
        Job_description: ['Cuba is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and'],
        Qualifications: {
          title: 'Qualifications',
          desc: "\n                <li>Have shipped multiple iOS, Android, and/or web products </li>\n                <li>5+ years UI/UX experience</li>\n                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>\n                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>\n                <li>Comfort with ambiguity</li>\n                <li>Proven ability to create interactive prototypes</li>\n                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>\n                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>\n                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>\n                <li>Ability to effectively work on more than one project at a time</li>\n                <li>Experience conducting user research and stakeholder interviews</li>\n                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>\n                <li>Bonus Considerations </li>"
        },
        Agency_experience: {
          title: 'Agency experience',
          desc: "\n                <li>Experience working with Agile development teams</li>\n                <li>Experience with RITE method usability testing</li>\n                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>\n                <li>Mastery of Sketch & InVision</li>\n                <li>Knowledge of mobile or front-end web programming</li>"
        },
        Perks: {
          title: 'Perks',
          desc: "\n                <li>Competitive pay</li>\n                <li>Competitive medical, dental, and vision insurance plans</li>\n                <li>Company-provided 401(k) plan</li>\n                <li>Paid vacation and sick time</li>\n                <li>Free snacks and beverages</li>"
        },
        type: 'new',
        ribbion: 'false'
      }];
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_components_apps_job-search_job-search_module_ts-es5.js.map