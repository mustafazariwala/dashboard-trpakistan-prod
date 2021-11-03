(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["common"], {
    /***/
    74848: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CountToDirective": function CountToDirective() {
          return (
            /* binding */
            _CountToDirective
          );
        },

        /* harmony export */
        "CountToModule": function CountToModule() {
          return (
            /* binding */
            _CountToModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CountToDirective = /*#__PURE__*/function () {
        /**
         * @param {?} el
         */
        function _CountToDirective(el) {
          _classCallCheck(this, _CountToDirective);

          this.el = el;
          this.from = 0;
          this.duration = 4;
          this.e = this.el.nativeElement;
          this.refreshInterval = 30;
          this.step = 0;
        }
        /**
         * @return {?}
         */


        _createClass(_CountToDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (this.CountTo) {
              this.start();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "calculate",
          value: function calculate() {
            this.duration = this.duration * 1000;
            this.steps = Math.ceil(this.duration / this.refreshInterval);
            this.increment = (this.CountTo - this.from) / this.steps;
            this.num = this.from;
          }
          /**
           * @return {?}
           */

        }, {
          key: "tick",
          value: function tick() {
            var _this = this;

            setTimeout(function () {
              _this.num += _this.increment;
              _this.step++;

              if (_this.step >= _this.steps) {
                _this.num = _this.CountTo;
                _this.e.textContent = _this.CountTo;
              } else {
                _this.e.textContent = Math.round(_this.num);

                _this.tick();
              }
            }, this.refreshInterval);
          }
          /**
           * @return {?}
           */

        }, {
          key: "start",
          value: function start() {
            this.calculate();
            this.tick();
          }
        }]);

        return _CountToDirective;
      }();

      _CountToDirective.ɵfac = function CountToDirective_Factory(t) {
        return new (t || _CountToDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _CountToDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CountToDirective,
        selectors: [["", "CountTo", ""]],
        inputs: {
          from: "from",
          duration: "duration",
          CountTo: "CountTo"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /**
       * @nocollapse
       */

      _CountToDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      _CountToDirective.propDecorators = {
        'CountTo': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        'from': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        'duration': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CountToDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[CountTo]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, {
          from: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          duration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          CountTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var _CountToModule = /*#__PURE__*/function () {
        function _CountToModule() {
          _classCallCheck(this, _CountToModule);
        }

        _createClass(_CountToModule, null, [{
          key: "forRoot",
          value:
          /**
           * Use in AppModule
           * @return {?}
           */
          function forRoot() {
            return {
              ngModule: _CountToModule,
              providers: []
            };
          }
          /**
           * Use in features modules with lazy loading
           * @return {?}
           */

        }, {
          key: "forChild",
          value: function forChild() {
            return {
              ngModule: _CountToModule,
              providers: []
            };
          }
        }]);

        return _CountToModule;
      }();

      _CountToModule.ɵfac = function CountToModule_Factory(t) {
        return new (t || _CountToModule)();
      };

      _CountToModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _CountToModule
      });
      _CountToModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
      /**
       * @nocollapse
       */

      _CountToModule.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CountToModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            declarations: [_CountToDirective // Pipes.
            // Directives.
            ],
            exports: [_CountToDirective // Pipes.
            // Directives.
            ]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_CountToModule, {
          declarations: [_CountToDirective],
          exports: [_CountToDirective]
        });
      })(); // Public classes.

      /**
       * Angular library starter.
       * Build an Angular library compatible with AoT compilation & Tree shaking.
       * Written by Roberto Simonetti.
       * MIT license.
       * https://github.com/robisim74/angular-count-to
       */

      /**
       * Entry point for all public APIs of the package.
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=angular-count-to.js.map

      /***/

    },

    /***/
    44981: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Ng2SearchPipeModule": function Ng2SearchPipeModule() {
          return (
            /* binding */
            _Ng2SearchPipeModule
          );
        },

        /* harmony export */
        "Ng2SearchPipe": function Ng2SearchPipe() {
          return (
            /* binding */
            _Ng2SearchPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _Ng2SearchPipe = /*#__PURE__*/function () {
        function _Ng2SearchPipe() {
          _classCallCheck(this, _Ng2SearchPipe);
        }

        _createClass(_Ng2SearchPipe, [{
          key: "transform",
          value:
          /**
           * @param {?} items object from array
           * @param {?} term term's search
           * @return {?}
           */
          function transform(items, term) {
            if (!term || !items) return items;
            return _Ng2SearchPipe.filter(items, term);
          }
          /**
           *
           * @param {?} items List of items to filter
           * @param {?} term  a string term to compare with every property of the list
           *
           * @return {?}
           */

        }], [{
          key: "filter",
          value: function filter(items, term) {
            var
            /** @type {?} */
            toCompare = term.toLowerCase();
            /**
             * @param {?} item
             * @param {?} term
             * @return {?}
             */

            function checkInside(item, term) {
              for (var
              /** @type {?} */
              property in item) {
                if (item[property] === null || item[property] == undefined) {
                  continue;
                }

                if (typeof item[property] === 'object') {
                  if (checkInside(item[property], term)) {
                    return true;
                  }
                }

                if (item[property].toString().toLowerCase().includes(toCompare)) {
                  return true;
                }
              }

              return false;
            }

            return items.filter(function (item) {
              return checkInside(item, term);
            });
          }
        }]);

        return _Ng2SearchPipe;
      }();

      _Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) {
        return new (t || _Ng2SearchPipe)();
      };

      _Ng2SearchPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "filter",
        type: _Ng2SearchPipe,
        pure: false
      });
      _Ng2SearchPipe.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _Ng2SearchPipe,
        factory: _Ng2SearchPipe.ɵfac
      });
      /**
       * @nocollapse
       */

      _Ng2SearchPipe.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_Ng2SearchPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
          args: [{
            name: 'filter',
            pure: false
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
        }], null, null);
      })();

      var _Ng2SearchPipeModule = function _Ng2SearchPipeModule() {
        _classCallCheck(this, _Ng2SearchPipeModule);
      };

      _Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) {
        return new (t || _Ng2SearchPipeModule)();
      };

      _Ng2SearchPipeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _Ng2SearchPipeModule
      });
      _Ng2SearchPipeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
      /**
       * @nocollapse
       */

      _Ng2SearchPipeModule.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_Ng2SearchPipeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            declarations: [_Ng2SearchPipe],
            exports: [_Ng2SearchPipe]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_Ng2SearchPipeModule, {
          declarations: [_Ng2SearchPipe],
          exports: [_Ng2SearchPipe]
        });
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng2-search-filter.js.map

      /***/

    },

    /***/
    96718: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "task": function task() {
          return (
            /* binding */
            _task
          );
        }
        /* harmony export */

      });

      var _task = [{
        text: "Weekly Bigbazar Shopping",
        completed: false
      }, {
        text: "Go Outside Picnic on Sunday",
        completed: false
      }, {
        text: "Write a blog post",
        completed: true
      }, {
        text: "Do the chicken dance",
        completed: true
      }, {
        text: "Pay the electricity bills",
        completed: false
      }];
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map