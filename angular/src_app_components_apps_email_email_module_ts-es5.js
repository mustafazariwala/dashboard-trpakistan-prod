(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_email_email_module_ts"], {
    /***/
    51790: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmailRoutingModule": function EmailRoutingModule() {
          return (
            /* binding */
            _EmailRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _email_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./email.component */
      61351);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _email_component__WEBPACK_IMPORTED_MODULE_0__.EmailComponent
        }]
      }];

      var _EmailRoutingModule = function _EmailRoutingModule() {
        _classCallCheck(this, _EmailRoutingModule);
      };

      _EmailRoutingModule.ɵfac = function EmailRoutingModule_Factory(t) {
        return new (t || _EmailRoutingModule)();
      };

      _EmailRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _EmailRoutingModule
      });
      _EmailRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_EmailRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    61351: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmailComponent": function EmailComponent() {
          return (
            /* binding */
            _EmailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_data_email_email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/data/email/email */
      91647);
      /* harmony import */


      var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-build-classic */
      78556);
      /* harmony import */


      var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-angular */
      22723);

      function EmailComponent_a_121_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function EmailComponent_a_121_Template_input_change_3_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var userEmail_r2 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r3.selectedmail($event, userEmail_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_a_121_Template_div_click_4_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var userEmail_r2 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r5.selectedUserEmail(userEmail_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_a_121_Template_div_click_6_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var userEmail_r2 = restoredCtx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r6.selectedUserEmail(userEmail_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "(");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var userEmail_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", userEmail_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", userEmail_r2.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](userEmail_r2.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](userEmail_r2.cc);
        }
      }

      function EmailComponent_ng_container_123_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "No mail found");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["Apps", "Ecommerce"];
      };

      var _c1 = function _c1(a0) {
        return {
          "active show": a0
        };
      };

      var _EmailComponent = /*#__PURE__*/function () {
        function _EmailComponent() {
          _classCallCheck(this, _EmailComponent);

          this.compose = true;
          this.allEmails = _shared_data_email_email__WEBPACK_IMPORTED_MODULE_0__.Mail.Emails;
          this.selectedEmails = [];
          this.ClassicEditor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
        }

        _createClass(_EmailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getUserEmail",
          value: function getUserEmail(type) {
            var emails = [];
            return this.allEmails.filter(function (email) {
              if (type == 'allmail') {
                return emails.push(email);
              } else if (type == 'favourite') {
                if (email.favourite) {
                  return emails.push(email);
                }
              } else if (email.type === type) {
                return emails.push(email);
              }
            });
          }
        }, {
          key: "selectedUserEmail",
          value: function selectedUserEmail(email) {
            this.selectEmail = email;
            this.compose = false;
          }
        }, {
          key: "selectedmail",
          value: function selectedmail($event, email) {
            var index = this.selectedEmails.indexOf(email);

            if ($event.target.checked === true && index === -1) {
              // val not found, pushing onto array
              this.selectedEmails.push(email);
            } else {
              // val is found, removing from array
              this.selectedEmails.splice(index, 1);
            }
          }
        }, {
          key: "moveEmails",
          value: function moveEmails(val) {
            if (!val) return;
            this.selectedEmails.filter(function (email) {
              return email.type = val;
            });
          }
        }, {
          key: "addFavourite",
          value: function addFavourite(email) {
            email.favourite = !email.favourite;
          }
        }]);

        return _EmailComponent;
      }();

      _EmailComponent.ɵfac = function EmailComponent_Factory(t) {
        return new (t || _EmailComponent)();
      };

      _EmailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _EmailComponent,
        selectors: [["app-email"]],
        decls: 211,
        vars: 32,
        consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "email-wrap"], [1, "row"], [1, "col-xl-3", "col-md-6", "box-col-6"], [1, "email-left-aside"], [1, "card"], [1, "card-body"], [1, "email-app-sidebar"], [1, "media"], [1, "media-size-email"], ["src", "assets/images/user/1.jpg", "alt", "", 1, "mr-3", "rounded-circle", "img-60"], [1, "media-body"], [1, "f-w-600"], ["role", "tablist", 1, "nav", "main-menu"], [1, "nav-item"], ["href", "javascript:void(0)", "id", "pills-darkhome-tab", "data-toggle", "pill", "role", "tab", "aria-controls", "pills-darkhome", "aria-selected", "true", 1, "btn-primary", "btn-block", "btn-mail", 3, "click"], [1, "icofont", "icofont-envelope", "mr-2"], [1, "nav-item", 3, "click"], ["href", "javascript:void(0)", "id", "pills-darkprofile-tab", "data-toggle", "pill", "role", "tab", "aria-controls", "pills-darkprofile", "aria-selected", "false", 1, "show"], [1, "title"], [1, "icon-import"], [1, "badge", "pull-right", "digits"], [3, "click"], ["href", "javascript:void(0)"], [1, "icon-folder"], [1, "icon-new-window"], [1, "icon-pencil-alt"], [1, "icon-trash"], [1, "icon-info-alt"], [1, "icon-star"], [1, "icon-email"], [1, "icon-export"], [1, "icon-share"], [1, "icon-file"], [1, "icon-bell"], [1, "icon-notepad"], [1, "email-right-aside"], [1, "card", "email-body"], [1, "pr-0", "b-r-light"], [1, "email-top"], [1, "col"], [1, "col", "text-right"], ["ngbDropdown", "", 1, "dropdown"], ["id", "dropdownMenuButton", "ngbDropdownToggle", "", 1, "btn", "bg-transparent", "dropdown-toggle", "p-0", "text-muted"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownMenuButton", 1, "email-option-position"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"], [1, "inbox"], ["href", "javascript:void(0)", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-xl-6", "col-md-12", "box-col-12"], [1, "card", "email-body", "radius-left"], [1, "pl-0"], [1, "tab-content"], ["id", "pills-darkhome", "role", "tabpanel", "aria-labelledby", "pills-darkhome-tab", 1, "tab-pane", "fade", 3, "ngClass"], [1, "email-compose"], [1, "email-top", "compose-border"], [1, "col-sm-8", "xl-50"], [1, "mb-0"], [1, "col-sm-4", "btn-middle", "xl-50"], ["type", "button", 1, "btn", "btn-primary", "btn-block", "btn-mail", "text-center", "mb-0", "mt-0"], [1, "fa", "fa-paper-plane", "mr-2"], [1, "email-wrapper"], [1, "theme-form"], [1, "form-group"], ["for", "exampleInputEmail1", 1, "col-form-label", "pt-0"], ["id", "exampleInputEmail1", "type", "email", 1, "form-control"], ["for", "exampleInputPassword1"], ["id", "exampleInputPassword1", "type", "text", 1, "form-control"], [1, "form-group", "mb-0"], [1, "text-muted"], ["data", "<p>Hello, world!</p>", 3, "editor"], ["id", "pills-darkprofile", "role", "tabpanel", "aria-labelledby", "pills-darkprofile-tab", 1, "tab-pane", "fade", 3, "ngClass"], [1, "email-content"], [1, "col-md-6", "xl-100", "col-sm-12"], ["alt", "image", 1, "mr-3", "rounded-circle", "img-50", 3, "src"], [1, "digits"], [1, "col-md-6", "col-sm-12"], [1, "float-right", "d-flex"], [1, "user-emailid"], [1, "fa", "fa-star-o", "f-18", "mt-1", 3, "click"], [3, "innerHTML"], [1, "d-inline-block"], [1, "icofont", "icofont-clip"], ["href", "javascript:void(0)", 1, "text-muted", "text-right", "right-download"], [1, "fa", "fa-long-arrow-down", "mr-2"], [1, "clearfix"], [1, "attachment"], [1, "list-inline"], [1, "list-inline-item"], ["src", "assets/images/email/1.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/email/2.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/email/3.jpg", "alt", "", 1, "img-fluid"], [1, "action-wrapper"], [1, "actions"], ["href", "javascript:void(0)", 1, "text-muted"], [1, "fa", "fa-reply", "mr-2"], [1, "fa", "fa-reply-all", "mr-2"], [1, "fa", "fa-share", "mr-2"], ["for", "chk-ani", 1, "d-block"], ["id", "chk-ani", "name", "chk-ani", "type", "checkbox", 1, "checkbox_animated", 3, "change"], [1, "media-size-email", 3, "click"], ["alt", "", 1, "mr-3", "rounded-circle", "img-50", 3, "src"], [1, "media-body", 3, "click"], [1, "search-not-found", "text-center"], [1, ""], ["src", "assets/images/search-not-found.png", "alt", "", 1, "second-search"]],
        template: function EmailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumb", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h6", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "MARKJENCO");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Markjecno@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ul", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_a_click_19_listener() {
              return ctx.compose = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " NEW MAIL ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_22_listener() {
              return ctx.getUserEmail(ctx.type = "inbox");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Inbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "li", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_29_listener() {
              return ctx.getUserEmail(ctx.type = "allmail");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " All mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "li", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_34_listener() {
              return ctx.getUserEmail(ctx.type = "sent");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " Sent");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "li", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_41_listener() {
              return ctx.getUserEmail(ctx.type = "draft");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, " DRAFT");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "li", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_48_listener() {
              return ctx.getUserEmail(ctx.type = "trash");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, " TRASH");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, " IMPORTANT");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "li", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_60_listener() {
              return ctx.getUserEmail(ctx.type = "favourite");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, " Starred");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "li", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_67_listener() {
              return ctx.getUserEmail(ctx.type = "unread");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, " UNREAD");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "li", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_72_listener() {
              return ctx.getUserEmail(ctx.type = "spam");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "i", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, " SPAM");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "li", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_77_listener() {
              return ctx.getUserEmail(ctx.type = "outbox");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "i", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, " OUTBOX");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](85, "i", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, " UPDATE");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](90, "i", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, " ALERT");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](95, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, " NOTES");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "(20)");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](108, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "More");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "a", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_a_click_114_listener() {
              return ctx.moveEmails("draft");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "Move to Draft");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "a", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_a_click_116_listener() {
              return ctx.moveEmails("trash");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "Move to Trash");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "a", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_a_click_118_listener() {
              return ctx.moveEmails("spam");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "Move to Spam");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](121, EmailComponent_a_121_Template, 16, 4, "a", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](122, "slice");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](123, EmailComponent_ng_container_123_Template, 6, 0, "ng-container", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "h4", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "New Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "button", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](138, "i", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, " SEND");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "form", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "label", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "To");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](145, "input", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "label", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "Subject");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](149, "input", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "label", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, "Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](153, "ckeditor", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](160, "img", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "span", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](166);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "span", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](168, " 6:00");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, " AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "p", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](175);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "i", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_i_click_176_listener() {
              return ctx.addFavourite(ctx.selectEmail);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](178, "span", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](179, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "h6", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](182, "i", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](183, " ATTACHMENTS");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "a", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](185, "i", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](186, "Download All");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](187, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "ul", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](190, "li", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](191, "img", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "li", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](193, "img", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "li", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](195, "img", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](196, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "div", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "ul", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "a", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](201, "i", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](202, "Reply");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](203, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "a", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](205, "i", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](206, "Reply All");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](207, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "a", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](209, "i", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210, "Forward");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Email")("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](27, _c0))("active_item", "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", ctx.getUserEmail("inbox").length, ")");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", ctx.getUserEmail("sent").length, ")");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", ctx.getUserEmail("draft").length, ")");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", ctx.getUserEmail("trash").length, ")");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.type ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](108, 21, ctx.type) : "Inbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](122, 23, ctx.getUserEmail(ctx.type ? ctx.type : "inbox"), 0, 7));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.getUserEmail(ctx.type ? ctx.type : "inbox").length);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](28, _c1, ctx.compose));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("editor", ctx.ClassicEditor);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](30, _c1, !ctx.compose));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.selectEmail == null ? null : ctx.selectEmail.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.selectEmail == null ? null : ctx.selectEmail.name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", ctx.selectEmail == null ? null : ctx.selectEmail.date, ")");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.selectEmail == null ? null : ctx.selectEmail.cc);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.selectEmail == null ? null : ctx.selectEmail.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("starred", ctx.selectEmail == null ? null : ctx.selectEmail.favourite);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx.selectEmail == null ? null : ctx.selectEmail.text, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__.CKEditorComponent],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.SlicePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    57395: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmailModule": function EmailModule() {
          return (
            /* binding */
            _EmailModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-angular */
      22723);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      44466);
      /* harmony import */


      var _email_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./email-routing.module */
      51790);
      /* harmony import */


      var _email_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./email.component */
      61351);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _EmailModule = function _EmailModule() {
        _classCallCheck(this, _EmailModule);
      };

      _EmailModule.ɵfac = function EmailModule_Factory(t) {
        return new (t || _EmailModule)();
      };

      _EmailModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _EmailModule
      });
      _EmailModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__.CKEditorModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _email_routing_module__WEBPACK_IMPORTED_MODULE_1__.EmailRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_EmailModule, {
          declarations: [_email_component__WEBPACK_IMPORTED_MODULE_2__.EmailComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__.CKEditorModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _email_routing_module__WEBPACK_IMPORTED_MODULE_1__.EmailRoutingModule]
        });
      })();
      /***/

    },

    /***/
    91647: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Mail": function Mail() {
          return (
            /* binding */
            _Mail
          );
        }
        /* harmony export */

      });

      var _Mail = function _Mail() {
        _classCallCheck(this, _Mail);
      };

      _Mail.Emails = [{
        id: 1,
        image: "assets/images/user/9.jpg",
        name: "Hileri makr",
        email: "pork@company.com",
        date: "15 Feb 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "inbox",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 2,
        image: "assets/images/user/2.png",
        name: "Lorm lpsa",
        email: "lpsa@company.com",
        date: "16 Feb 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "inbox",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: true
      }, {
        id: 3,
        image: "assets/images/user/3.jpg",
        name: "Vincent Porter",
        email: "vincent@company.com",
        date: "17 Feb 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "inbox",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 4,
        image: "assets/images/user/9.jpg",
        name: "Hileri makr",
        email: "vincent@company.com",
        date: "18 Feb 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "sent",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 5,
        image: "assets/images/user/2.png",
        name: "Lorm lpsa",
        email: "Lion@company.com",
        date: "19 Feb 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "sent",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 6,
        image: "assets/images/user/3.jpg",
        name: "Vincent Porter",
        email: "solvn@company.com",
        date: "20 Feb 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "sent",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: true
      }, {
        id: 7,
        image: "assets/images/user/9.jpg",
        name: "Hileri makr",
        email: "soft@company.com",
        date: "21 Feb 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "trash",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 8,
        image: "assets/images/user/2.png",
        name: "Lorm lpsa",
        email: "lorapasoft23@company.com",
        date: "1 March 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "trash",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 9,
        image: "assets/images/user/3.jpg",
        name: "Vincent Porter",
        email: "vincent@company.com",
        date: "2 March 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "trash",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 10,
        image: "assets/images/user/9.jpg",
        name: "Hileri makr",
        email: "vincent@company.com",
        date: "15 March 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "draft",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 11,
        image: "assets/images/user/2.png",
        name: "Lorm lpsa",
        email: "herry@company.com",
        date: "16 March 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "draft",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 12,
        image: "assets/images/user/9.jpg",
        name: "Hileri makr",
        email: "john@company.com",
        date: "21 Apr 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "outbox",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: true
      }, {
        id: 13,
        image: "assets/images/user/2.png",
        name: "Lorm lpsa",
        email: "deojoseph@company.com",
        date: "22 Apr 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "outbox",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 14,
        image: "assets/images/user/6.jpg",
        name: "Charlie Porter",
        email: "charle21@company.com",
        date: "23 Apr 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "unread",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 15,
        image: "assets/images/user/9.jpg",
        name: "Hileri makr",
        email: "sam1254@company.com",
        date: "30 Apr 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "inbox",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 16,
        image: "assets/images/user/8.jpg",
        name: "Ross Singh",
        email: "sam1254@company.com",
        date: "30 Apr 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "inbox",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: true
      }, {
        id: 17,
        image: "assets/images/user/14.png",
        name: "Sam Porter",
        email: "sam1254@company.com",
        date: "30 Apr 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "inbox",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: true
      }, {
        id: 18,
        image: "assets/images/user/7.jpg",
        name: "Jenisha Trivedi",
        email: "sam1254@company.com",
        date: "30 Apr 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "inbox",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 19,
        image: "assets/images/user/8.jpg",
        name: "Ross Singh",
        email: "sam1254@company.com",
        date: "30 Apr 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "inbox",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 20,
        image: "assets/images/user/9.jpg",
        name: "Hileri makr",
        email: "sam1254@company.com",
        date: "30 Apr 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "inbox",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 21,
        image: "assets/images/user/14.png",
        name: "Sam Porter",
        email: "sam1254@company.com",
        date: "30 Apr 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "inbox",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 22,
        image: "assets/images/user/5.jpg",
        name: "Ashiyana Oza",
        email: "sam1254@company.com",
        date: "30 Apr 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "sent",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 23,
        image: "assets/images/user/6.jpg",
        name: "Charlie Porter",
        email: "sam1254@company.com",
        date: "30 Apr 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "sent",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 24,
        image: "assets/images/user/7.jpg",
        name: "Jenisha Trivedi",
        email: "sam1254@company.com",
        date: "30 Apr 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "draft",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 25,
        image: "assets/images/user/8.jpg",
        name: "Ross Singh",
        email: "sam1254@company.com",
        date: "30 Apr 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "draft",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 26,
        image: "assets/images/user/9.jpg",
        name: "Hileri makr",
        email: "sam1254@company.com",
        date: "30 Apr 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "sent",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 27,
        image: "assets/images/user/14.png",
        name: "Sam Porter",
        email: "sam1254@company.com",
        date: "30 Apr 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "spam",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 28,
        image: "assets/images/user/8.jpg",
        name: "Ross Singh",
        email: "sam1254@company.com",
        date: "30 Apr 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "spam",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 29,
        image: "assets/images/user/9.jpg",
        name: "Hileri makr",
        email: "sam1254@company.com",
        date: "30 Apr 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "spam",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 30,
        image: "assets/images/user/14.png",
        name: "Sam Porter",
        email: "sam1254@company.com",
        date: "30 Apr 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "spam",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }, {
        id: 32,
        image: "assets/images/user/5.jpg",
        name: "Ashiyana Oza",
        email: "sam1254@company.com",
        date: "30 Apr 2019",
        cc: "Mattis luctus. Donec nisi diam,",
        type: "spam",
        text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
        favourite: false
      }];
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_components_apps_email_email_module_ts-es5.js.map