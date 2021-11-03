(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_bookmarks_bookmarks_module_ts"], {
    /***/
    20964: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookmarksRoutingModule": function BookmarksRoutingModule() {
          return (
            /* binding */
            _BookmarksRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _bookmarks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bookmarks.component */
      22070);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _bookmarks_component__WEBPACK_IMPORTED_MODULE_0__.BookmarksComponent
        }]
      }];

      var _BookmarksRoutingModule = function _BookmarksRoutingModule() {
        _classCallCheck(this, _BookmarksRoutingModule);
      };

      _BookmarksRoutingModule.ɵfac = function BookmarksRoutingModule_Factory(t) {
        return new (t || _BookmarksRoutingModule)();
      };

      _BookmarksRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _BookmarksRoutingModule
      });
      _BookmarksRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_BookmarksRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    22070: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookmarksComponent": function BookmarksComponent() {
          return (
            /* binding */
            _BookmarksComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _modal_add_bookmark_add_bookmark_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./modal/add-bookmark/add-bookmark.component */
      13930);
      /* harmony import */


      var _modal_edit_bookmark_edit_bookmark_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal/edit-bookmark/edit-bookmark.component */
      66569);
      /* harmony import */


      var _modal_create_tag_create_tag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modal/create-tag/create-tag.component */
      75602);

      var _c0 = ["addbookmark"];
      var _c1 = ["editbookmark"];
      var _c2 = ["createTag"];

      var _c3 = function _c3() {
        return ["Apps"];
      };

      var _BookmarksComponent = /*#__PURE__*/function () {
        function _BookmarksComponent() {
          _classCallCheck(this, _BookmarksComponent);

          this.listBookmark = false;
        }

        _createClass(_BookmarksComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "changeLayoutBookmark",
          value: function changeLayoutBookmark() {
            this.listBookmark = !this.listBookmark;
          }
        }]);

        return _BookmarksComponent;
      }();

      _BookmarksComponent.ɵfac = function BookmarksComponent_Factory(t) {
        return new (t || _BookmarksComponent)();
      };

      _BookmarksComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _BookmarksComponent,
        selectors: [["app-bookmarks"]],
        viewQuery: function BookmarksComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.AddBookmark = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.EditBookmark = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.CreateTag = _t.first);
          }
        },
        decls: 664,
        vars: 6,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "email-wrap", "bookmark-wrap"], [1, "row"], [1, "col-xl-3", "box-col-6"], [1, "email-left-aside"], [1, "card"], [1, "card-body"], [1, "email-app-sidebar", "left-bookmark"], [1, "media"], [1, "media-size-email"], ["src", "assets/images/user/user.png", "alt", "", 1, "mr-3", "rounded-circle"], [1, "media-body"], [1, "f-w-600"], ["role", "tablist", 1, "nav", "main-menu"], [1, "nav-item"], ["type", "button", 1, "badge-light-primary", "btn-block", "btn-mail", 3, "click"], ["data-feather", "bookmark", 1, "mr-2"], [1, "main-title"], ["id", "pills-created-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-created", "aria-selected", "true"], [1, "title"], ["id", "pills-favourites-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-favourites", "aria-selected", "false", 1, "show"], ["id", "pills-shared-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-shared", "aria-selected", "false", 1, "show"], ["id", "pills-bookmark-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-bookmark", "aria-selected", "false", 1, "show"], [1, "pull-right"], ["href", "javascript:void(0)", 3, "click"], ["data-feather", "plus-circle"], ["id", "pills-notification-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-notification", "aria-selected", "false", 1, "show"], ["id", "pills-newsletter-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-newsletter", "aria-selected", "false", 1, "show"], ["id", "pills-business-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-business-tab", "aria-selected", "false", 1, "show"], ["id", "pills-holidays-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-holidays-tab", "aria-selected", "false", 1, "show"], ["id", "pills-important-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-important-tab", "aria-selected", "false", 1, "show"], ["id", "pills-orgenization-tab", "data-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-orgenization-tab", "aria-selected", "false", 1, "show"], [1, "col-xl-9", "col-md-12", "box-col-12"], [1, "email-right-aside", "bookmark-tabcontent"], [1, "card", "email-body", "radius-left"], [1, "pl-0"], [1, "tab-content"], ["id", "pills-created", "role", "tabpanel", "aria-labelledby", "pills-created-tab", 1, "tab-pane", "fade", "active", "show"], [1, "card", "mb-0"], [1, "card-header", "d-flex"], [1, "mb-0"], ["href", "javascript:void(0)", 1, "grid-bookmark-view", 3, "click"], ["data-feather", "grid"], ["href", "javascript:void(0)", 1, "list-layout-view", 3, "click"], ["data-feather", "list"], [1, "card-body", "pb-0"], [1, "details-bookmark", "text-center"], ["id", "bookmarkData", 1, "row"], [1, "col-xl-3", "col-md-4", "xl-50"], [1, "card", "card-with-border", "bookmark-card", "o-hidden"], [1, "details-website"], ["src", "assets/images/lightgallry/01.jpg", "alt", "", 1, "img-fluid"], [1, "favourite-icon", "favourite_0"], ["href", "javascript:void(0)"], [1, "fa", "fa-star"], [1, "desciption-data"], [1, "title-bookmark"], [1, "title_0"], [1, "weburl_0"], [1, "hover-block"], ["href", "javascript:void(0)", "data-toggle", "modal", 3, "click"], ["data-feather", "edit-2"], ["data-feather", "link"], ["data-feather", "share-2"], ["data-feather", "trash-2"], [1, "pull-right", "text-right"], ["data-feather", "tag"], [1, "content-general"], [1, "desc_0"], [1, "collection_0"], ["src", "assets/images/lightgallry/02.jpg", "alt", "", 1, "img-fluid"], [1, "favourite-icon", "favourite_1"], [1, "title_1"], [1, "weburl_1"], [1, "desc_1"], [1, "collection_1"], ["src", "assets/images/lightgallry/03.jpg", "alt", "", 1, "img-fluid"], [1, "favourite-icon", "favourite_2"], [1, "title_2"], [1, "weburl_2"], [1, "desc_2"], [1, "collection_2"], ["src", "assets/images/lightgallry/04.jpg", "alt", "", 1, "img-fluid"], [1, "favourite-icon", "favourite_3"], [1, "title_3"], [1, "weburl_3"], [1, "desc_3"], [1, "collection_3"], ["src", "assets/images/lightgallry/05.jpg", "alt", "", 1, "img-fluid"], [1, "favourite-icon", "favourite_4"], [1, "title_4"], [1, "weburl_4"], [1, "desc_4"], [1, "collection_4"], ["src", "assets/images/lightgallry/06.jpg", "alt", "", 1, "img-fluid"], [1, "favourite-icon", "favourite_5"], [1, "title_5"], [1, "weburl_5"], [1, "desc_5"], [1, "collection_5"], ["id", "pills-favourites", "role", "tabpanel", "aria-labelledby", "pills-favourites-tab", 1, "fade", "tab-pane"], ["href", "javascript:void(0)", 1, "grid-bookmark-view"], ["href", "javascript:void(0)", 1, "list-layout-view"], ["id", "favouriteData", 1, "row"], [1, "no-favourite"], ["id", "pills-shared", "role", "tabpanel", "aria-labelledby", "pills-shared-tab", 1, "fade", "tab-pane"], ["id", "pills-bookmark", "role", "tabpanel", "aria-labelledby", "pills-bookmark-tab", 1, "fade", "tab-pane"], ["id", "bookmarkData1", 1, "row"], ["src", "assets/images/lightgallry/07.jpg", "alt", "", 1, "img-fluid"], ["id", "pills-notification", "role", "tabpanel", "aria-labelledby", "pills-notification-tab", 1, "fade", "tab-pane"], ["id", "pills-newsletter", "role", "tabpanel", "aria-labelledby", "pills-newsletter-tab", 1, "fade", "tab-pane"], ["id", "pills-business", "role", "tabpanel", "aria-labelledby", "pills-business-tab", 1, "fade", "tab-pane"], ["id", "pills-holidays", "role", "tabpanel", "aria-labelledby", "pills-holidays-tab", 1, "fade", "tab-pane"], ["id", "pills-important", "role", "tabpanel", "aria-labelledby", "pills-important-tab", 1, "fade", "tab-pane"], ["id", "pills-orgenization", "role", "tabpanel", "aria-labelledby", "pills-orgenization-tab", 1, "fade", "tab-pane"], ["addbookmark", ""], ["editbookmark", ""], ["createTag", ""]],
        template: function BookmarksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h6", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "MARK JENCO");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Markjecno@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ul", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BookmarksComponent_Template_button_click_19_listener() {
              return ctx.AddBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " New Bookmark");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Views");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Created by me");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " Favourites");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Shared with me");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, " My bookmark");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, " Tags");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_47_listener() {
              return ctx.CreateTag.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, " notification");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, " Newsletter");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, " Business");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, " Holidays");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, " Important");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, " Orgenization");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "h6", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "Created by me");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_85_listener() {
              return ctx.changeLayoutBookmark();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](86, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_88_listener() {
              return ctx.changeLayoutBookmark();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](89, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](96, "img", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](99, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "h6", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, "Admin Template");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "p", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, "http://admin.pixelstrap.com//ltr/landing-page.html");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_109_listener() {
              return ctx.EditBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](110, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](113, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](116, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](119, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "li", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](122, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "p", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125, " is beautifully crafted, clean and modern designed admin theme with 6 different demos and light - dark versions.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "span", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](127, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](131, "img", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](134, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "h6", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](138, "Universal Template");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "p", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](140, "https://angular.pixelstrap.com/universal/landing");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_144_listener() {
              return ctx.EditBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](145, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](148, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](151, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](154, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "li", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](157, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](159, "p", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](160, "Universal is beautifully crafted, clean and modern designed admin theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "span", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](162, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](163, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](164, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](165, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](166, "img", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](167, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](168, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](169, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](170, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](172, "h6", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](173, "Angular Theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](174, "p", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](175, "https://angular.pixelstrap.com/cuba/landing");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](176, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](177, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](178, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_179_listener() {
              return ctx.EditBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](180, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](181, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](182, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](183, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](184, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](185, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](186, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](187, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](188, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](189, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](190, "li", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](191, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](192, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](193, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](194, "p", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](195, "Cuba is beautifully crafted, clean and modern designed admin theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](196, "span", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](197, "Fs");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](198, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](199, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](200, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](201, "img", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](202, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](203, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](204, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](205, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](206, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](207, "h6", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](208, "Multikart Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](209, "p", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](210, "http://themes.pixelstrap.com/multikart/back-end/index.html");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](211, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](212, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](213, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](214, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_214_listener() {
              return ctx.EditBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](215, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](216, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](217, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](218, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](219, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](220, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](221, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](222, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](223, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](224, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](225, "li", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](226, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](227, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](228, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](229, "p", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](230, "Multikart Admin is modern designed admin theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](231, "span", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](232, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](233, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](234, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](235, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](236, "img", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](237, "div", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](238, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](239, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](240, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](241, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](242, "h6", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](243, "Ecommerece theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](244, "p", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](245, "http://themes.pixelstrap.com/multikart");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](246, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](247, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](248, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](249, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_249_listener() {
              return ctx.EditBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](250, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](251, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](252, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](253, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](254, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](255, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](256, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](257, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](258, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](259, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](260, "li", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](261, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](262, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](263, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](264, "p", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](265, "Multikart HTML template is an apparently simple but highly functional tempalate designed for creating a flourisahing online business.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](266, "span", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](267, "General ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](268, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](269, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](270, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](271, "img", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](272, "div", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](273, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](274, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](275, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](276, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](277, "h6", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](278, "Tovo app landing page");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](279, "p", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](280, "http://vue.pixelstrap.com/tovo/home-one");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](281, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](282, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](283, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](284, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_284_listener() {
              return ctx.EditBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](285, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](286, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](287, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](288, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](289, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](290, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](291, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](292, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](293, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](294, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](295, "li", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](296, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](297, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](298, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](299, "p", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](300, "Amazing Landing Page With Easy Customization");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](301, "span", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](302, "Fs ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](303, "div", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](304, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](305, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](306, "h6", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](307, "Favourites");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](308, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](309, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](310, "a", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](311, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](312, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](313, "a", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](314, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](315, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](316, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](317, "div", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](318, "div", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](319, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](320, "No Bookmarks Found.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](321, "div", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](322, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](323, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](324, "h6", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](325, "Shared with me");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](326, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](327, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](328, "a", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](329, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](330, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](331, "a", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](332, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](333, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](334, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](335, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](336, "No Bookmarks Found.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](337, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](338, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](339, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](340, "h6", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](341, "My bookmark");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](342, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](343, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](344, "a", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](345, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](346, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](347, "a", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](348, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](349, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](350, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](351, "div", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](352, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](353, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](354, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](355, "img", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](356, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](357, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](358, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](359, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](360, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](361, "h6", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](362, "Admin Template");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](363, "p", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](364, "http://admin.pixelstrap.com/Cuba/ltr/landing-page.html");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](365, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](366, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](367, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](368, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_368_listener() {
              return ctx.EditBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](369, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](370, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](371, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](372, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](373, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](374, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](375, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](376, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](377, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](378, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](379, "li", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](380, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](381, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](382, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](383, "p", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](384, "Cuba is beautifully crafted, clean and modern designed admin theme with 6 different demos and light - dark versions.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](385, "span", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](386, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](387, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](388, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](389, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](390, "img", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](391, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](392, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](393, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](394, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](395, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](396, "h6", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](397, "Universal Template");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](398, "p", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](399, "https://angular.pixelstrap.com/universal/landing");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](400, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](401, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](402, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](403, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_403_listener() {
              return ctx.EditBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](404, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](405, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](406, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](407, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](408, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](409, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](410, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](411, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](412, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](413, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](414, "li", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](415, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](416, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](417, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](418, "p", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](419, "Universal is beautifully crafted, clean and modern designed admin theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](420, "span", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](421, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](422, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](423, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](424, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](425, "img", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](426, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](427, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](428, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](429, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](430, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](431, "h6", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](432, "Angular Theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](433, "p", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](434, "https://angular.pixelstrap.com/cuba/landing");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](435, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](436, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](437, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](438, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_438_listener() {
              return ctx.EditBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](439, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](440, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](441, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](442, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](443, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](444, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](445, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](446, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](447, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](448, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](449, "li", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](450, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](451, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](452, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](453, "p", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](454, "Cuba is beautifully crafted, clean and modern designed admin theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](455, "span", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](456, "Fs");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](457, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](458, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](459, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](460, "img", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](461, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](462, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](463, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](464, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](465, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](466, "h6", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](467, "Multikart Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](468, "p", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](469, "http://themes.pixelstrap.com/multikart/back-end/index.html");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](470, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](471, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](472, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](473, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_473_listener() {
              return ctx.EditBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](474, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](475, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](476, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](477, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](478, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](479, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](480, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](481, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](482, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](483, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](484, "li", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](485, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](486, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](487, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](488, "p", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](489, "Multikart Admin is modern designed admin theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](490, "span", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](491, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](492, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](493, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](494, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](495, "img", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](496, "div", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](497, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](498, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](499, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](500, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](501, "h6", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](502, "Ecommerece theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](503, "p", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](504, "http://themes.pixelstrap.com/multikart");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](505, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](506, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](507, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](508, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_508_listener() {
              return ctx.EditBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](509, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](510, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](511, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](512, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](513, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](514, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](515, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](516, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](517, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](518, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](519, "li", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](520, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](521, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](522, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](523, "p", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](524, "Multikart HTML template is an apparently simple but highly functional tempalate designed for creating a flourisahing online business.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](525, "span", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](526, "General ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](527, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](528, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](529, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](530, "img", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](531, "div", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](532, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](533, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](534, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](535, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](536, "h6", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](537, "Tovo app landing page");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](538, "p", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](539, "http://vue.pixelstrap.com/tovo/home-one");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](540, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](541, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](542, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](543, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_543_listener() {
              return ctx.EditBookmark.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](544, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](545, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](546, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](547, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](548, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](549, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](550, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](551, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](552, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](553, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](554, "li", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](555, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](556, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](557, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](558, "p", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](559, "Amazing Landing Page With Easy Customization");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](560, "span", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](561, "Fs ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](562, "div", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](563, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](564, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](565, "h6", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](566, "notification");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](567, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](568, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](569, "a", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](570, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](571, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](572, "a", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](573, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](574, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](575, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](576, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](577, "No Bookmarks Found.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](578, "div", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](579, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](580, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](581, "h6", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](582, "Newsletter");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](583, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](584, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](585, "a", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](586, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](587, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](588, "a", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](589, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](590, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](591, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](592, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](593, "No Bookmarks Found.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](594, "div", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](595, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](596, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](597, "h6", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](598, "Business");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](599, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](600, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](601, "a", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](602, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](603, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](604, "a", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](605, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](606, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](607, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](608, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](609, "No Bookmarks Found.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](610, "div", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](611, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](612, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](613, "h6", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](614, "Holidays");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](615, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](616, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](617, "a", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](618, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](619, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](620, "a", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](621, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](622, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](623, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](624, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](625, "No Bookmarks Found.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](626, "div", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](627, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](628, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](629, "h6", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](630, "Important");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](631, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](632, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](633, "a", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](634, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](635, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](636, "a", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](637, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](638, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](639, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](640, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](641, "No Bookmarks Found.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](642, "div", 115);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](643, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](644, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](645, "h6", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](646, "Orgenization");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](647, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](648, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](649, "a", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](650, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](651, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](652, "a", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](653, "i", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](654, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](655, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](656, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](657, "No Bookmarks Found.");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](658, "app-add-bookmark", null, 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](660, "app-edit-bookmark", null, 117);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](662, "app-create-tag", null, 118);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Bookmark")("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c3))("active_item", "Bookmark");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](91);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("list-bookmark", ctx.listBookmark);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _modal_add_bookmark_add_bookmark_component__WEBPACK_IMPORTED_MODULE_1__.AddBookmarkComponent, _modal_edit_bookmark_edit_bookmark_component__WEBPACK_IMPORTED_MODULE_2__.EditBookmarkComponent, _modal_create_tag_create_tag_component__WEBPACK_IMPORTED_MODULE_3__.CreateTagComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29rbWFya3MuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    53711: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookmarksModule": function BookmarksModule() {
          return (
            /* binding */
            _BookmarksModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      44466);
      /* harmony import */


      var _bookmarks_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bookmarks-routing.module */
      20964);
      /* harmony import */


      var _bookmarks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bookmarks.component */
      22070);
      /* harmony import */


      var _modal_add_bookmark_add_bookmark_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modal/add-bookmark/add-bookmark.component */
      13930);
      /* harmony import */


      var _modal_edit_bookmark_edit_bookmark_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./modal/edit-bookmark/edit-bookmark.component */
      66569);
      /* harmony import */


      var _modal_create_tag_create_tag_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modal/create-tag/create-tag.component */
      75602);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _BookmarksModule = function _BookmarksModule() {
        _classCallCheck(this, _BookmarksModule);
      };

      _BookmarksModule.ɵfac = function BookmarksModule_Factory(t) {
        return new (t || _BookmarksModule)();
      };

      _BookmarksModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _BookmarksModule
      });
      _BookmarksModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _bookmarks_routing_module__WEBPACK_IMPORTED_MODULE_1__.BookmarksRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_BookmarksModule, {
          declarations: [_bookmarks_component__WEBPACK_IMPORTED_MODULE_2__.BookmarksComponent, _modal_add_bookmark_add_bookmark_component__WEBPACK_IMPORTED_MODULE_3__.AddBookmarkComponent, _modal_edit_bookmark_edit_bookmark_component__WEBPACK_IMPORTED_MODULE_4__.EditBookmarkComponent, _modal_create_tag_create_tag_component__WEBPACK_IMPORTED_MODULE_5__.CreateTagComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _bookmarks_routing_module__WEBPACK_IMPORTED_MODULE_1__.BookmarksRoutingModule]
        });
      })();
      /***/

    },

    /***/
    13930: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddBookmarkComponent": function AddBookmarkComponent() {
          return (
            /* binding */
            _AddBookmarkComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _c0 = ["addBookmark"];

      function AddBookmarkComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Bookmark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddBookmarkComponent_ng_template_0_Template_button_click_3_listener() {
            var modal_r2 = ctx.$implicit;
            return modal_r2.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Web Url");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "My Bookmarks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Collection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "General");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "fs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _AddBookmarkComponent = /*#__PURE__*/function () {
        function _AddBookmarkComponent(platformId, modalService) {
          _classCallCheck(this, _AddBookmarkComponent);

          this.platformId = platformId;
          this.modalService = modalService;
          this.modalOpen = false;
        }

        _createClass(_AddBookmarkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openModal",
          value: function openModal() {
            var _this = this;

            if ((0, _angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
              // For SSR 
              this.modalService.open(this.addBookmark, {
                size: 'lg',
                ariaLabelledBy: 'modal-bookmark',
                centered: true,
                windowClass: 'modal-bookmark'
              }).result.then(function (result) {
                _this.modalOpen = true;
                "Result ".concat(result);
              }, function (reason) {
                _this.closeResult = "Dismissed ".concat(_this.getDismissReason(reason));
              });
            }
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.modalOpen) {
              this.modalService.dismissAll();
            }
          }
        }]);

        return _AddBookmarkComponent;
      }();

      _AddBookmarkComponent.ɵfac = function AddBookmarkComponent_Factory(t) {
        return new (t || _AddBookmarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
      };

      _AddBookmarkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AddBookmarkComponent,
        selectors: [["app-add-bookmark"]],
        viewQuery: function AddBookmarkComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addBookmark = _t.first);
          }
        },
        decls: 2,
        vars: 0,
        consts: [["addBookmark", ""], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", "data-original-title", "", "title", "", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["id", "bookmark-form", "novalidate", "", 1, "form-bookmark", "needs-validation"], [1, "form-row"], [1, "form-group", "col-md-12"], ["for", "bm-weburl"], ["id", "bm-weburl", "type", "text", "required", "", "autocomplete", "off", 1, "form-control"], ["for", "bm-title"], ["id", "bm-title", "type", "text", "required", "", "autocomplete", "off", 1, "form-control"], ["id", "bm-desc", "required", "", "autocomplete", "off", 1, "form-control"], [1, "form-group", "col-md-6", "mb-0"], ["id", "bm-group", 1, "js-example-basic-single"], ["value", "bookmark"], ["id", "bm-collection", 1, "js-example-disabled-results"], ["value", "general"], ["value", "fs"], ["id", "index_var", "type", "hidden", "value", "6"], ["id", "Bookmark", "type", "submit", 1, "btn", "btn-secondary", "mr-1"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "mr-1"]],
        template: function AddBookmarkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddBookmarkComponent_ng_template_0_Template, 40, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYm9va21hcmsuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    75602: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CreateTagComponent": function CreateTagComponent() {
          return (
            /* binding */
            _CreateTagComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _c0 = ["createTag"];

      function CreateTagComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create Tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTagComponent_ng_template_0_Template_button_click_3_listener() {
            var modal_r2 = ctx.$implicit;
            return modal_r2.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Tag Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Tag color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _CreateTagComponent = /*#__PURE__*/function () {
        function _CreateTagComponent(platformId, modalService) {
          _classCallCheck(this, _CreateTagComponent);

          this.platformId = platformId;
          this.modalService = modalService;
          this.modalOpen = false;
        }

        _createClass(_CreateTagComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openModal",
          value: function openModal() {
            var _this2 = this;

            if ((0, _angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
              // For SSR 
              this.modalService.open(this.CreateTag, {
                size: 'lg',
                ariaLabelledBy: 'modal-bookmark',
                centered: true,
                windowClass: 'modal-bookmark'
              }).result.then(function (result) {
                _this2.modalOpen = true;
                "Result ".concat(result);
              }, function (reason) {
                _this2.closeResult = "Dismissed ".concat(_this2.getDismissReason(reason));
              });
            }
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.modalOpen) {
              this.modalService.dismissAll();
            }
          }
        }]);

        return _CreateTagComponent;
      }();

      _CreateTagComponent.ɵfac = function CreateTagComponent_Factory(t) {
        return new (t || _CreateTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
      };

      _CreateTagComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CreateTagComponent,
        selectors: [["app-create-tag"]],
        viewQuery: function CreateTagComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.CreateTag = _t.first);
          }
        },
        decls: 2,
        vars: 0,
        consts: [["createTag", ""], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["novalidate", "", 1, "form-bookmark", "needs-validation"], [1, "form-row"], [1, "form-group", "col-md-12"], ["type", "text", "required", "", "autocomplete", "off", 1, "form-control"], [1, "form-group", "col-md-12", "mb-0"], ["type", "color", "value", "#563d7c", 1, "form-control"], ["type", "button", 1, "btn", "btn-secondary", "mr-1"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "mr-1"]],
        template: function CreateTagComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CreateTagComponent_ng_template_0_Template, 21, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtdGFnLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    66569: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditBookmarkComponent": function EditBookmarkComponent() {
          return (
            /* binding */
            _EditBookmarkComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _c0 = ["editBookmark"];

      function EditBookmarkComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Bookmark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditBookmarkComponent_ng_template_0_Template_button_click_3_listener() {
            var modal_r2 = ctx.$implicit;
            return modal_r2.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Web Url");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "textarea", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cuba is beautifully crafted, clean and modern designed admin theme with 6 different demos and light - dark versions.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "My Bookmarks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Collection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "General");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "fs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _EditBookmarkComponent = /*#__PURE__*/function () {
        function _EditBookmarkComponent(platformId, modalService) {
          _classCallCheck(this, _EditBookmarkComponent);

          this.platformId = platformId;
          this.modalService = modalService;
          this.modalOpen = false;
        }

        _createClass(_EditBookmarkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openModal",
          value: function openModal() {
            var _this3 = this;

            if ((0, _angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
              // For SSR 
              this.modalService.open(this.EditBookmark, {
                size: 'lg',
                ariaLabelledBy: 'modal-bookmark',
                centered: true,
                windowClass: 'modal-bookmark'
              }).result.then(function (result) {
                _this3.modalOpen = true;
                "Result ".concat(result);
              }, function (reason) {
                _this3.closeResult = "Dismissed ".concat(_this3.getDismissReason(reason));
              });
            }
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.modalOpen) {
              this.modalService.dismissAll();
            }
          }
        }]);

        return _EditBookmarkComponent;
      }();

      _EditBookmarkComponent.ɵfac = function EditBookmarkComponent_Factory(t) {
        return new (t || _EditBookmarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
      };

      _EditBookmarkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _EditBookmarkComponent,
        selectors: [["app-edit-bookmark"]],
        viewQuery: function EditBookmarkComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.EditBookmark = _t.first);
          }
        },
        decls: 2,
        vars: 0,
        consts: [["editBookmark", ""], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["novalidate", "", 1, "form-bookmark", "needs-validation"], [1, "form-row"], [1, "form-group", "col-md-12"], ["id", "editurl", "type", "text", "required", "", "autocomplete", "off", "value", "http://admin.pixelstrap.com/Cuba/ltr/landing-page.html", 1, "form-control"], ["id", "edittitle", "type", "text", "required", "", "autocomplete", "off", "value", "Admin Template", 1, "form-control"], ["id", "editdesc", "required", "", "autocomplete", "off", 1, "form-control"], [1, "form-group", "col-md-6", "mb-0"], [1, "js-example-basic-single"], ["value", "AL"], [1, "js-example-disabled-results"], ["value", "general"], ["value", "fs"], ["type", "button", 1, "btn", "btn-secondary"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary"]],
        template: function EditBookmarkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditBookmarkComponent_ng_template_0_Template, 40, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWJvb2ttYXJrLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_components_apps_bookmarks_bookmarks_module_ts-es5.js.map