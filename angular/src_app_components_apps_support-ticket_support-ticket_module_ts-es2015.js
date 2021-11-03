(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_support-ticket_support-ticket_module_ts"],{

/***/ 70522:
/*!*********************************************************************************!*\
  !*** ./src/app/components/apps/support-ticket/support-ticket-routing.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportTicketRoutingModule": function() { return /* binding */ SupportTicketRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _support_ticket_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support-ticket.component */ 91007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _support_ticket_component__WEBPACK_IMPORTED_MODULE_0__.SupportTicketComponent
            }
        ]
    }
];
class SupportTicketRoutingModule {
}
SupportTicketRoutingModule.ɵfac = function SupportTicketRoutingModule_Factory(t) { return new (t || SupportTicketRoutingModule)(); };
SupportTicketRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SupportTicketRoutingModule });
SupportTicketRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SupportTicketRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 91007:
/*!****************************************************************************!*\
  !*** ./src/app/components/apps/support-ticket/support-ticket.component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportTicketComponent": function() { return /* binding */ SupportTicketComponent; }
/* harmony export */ });
/* harmony import */ var _shared_data_tables_support_ticket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/tables/support-ticket */ 98061);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-count-to */ 74848);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 38550);





const _c0 = function () { return ["Apps"]; };
const _c1 = function () { return { name: "img" }; };
const _c2 = function () { return { name: "position" }; };
const _c3 = function () { return { name: "salary" }; };
const _c4 = function () { return { name: "office" }; };
const _c5 = function () { return { name: "skill" }; };
const _c6 = function () { return { name: "extn" }; };
const _c7 = function () { return { name: "email" }; };
const _c8 = function (a0, a1, a2, a3, a4, a5, a6) { return [a0, a1, a2, a3, a4, a5, a6]; };
class SupportTicketComponent {
    constructor() {
        this.support = _shared_data_tables_support_ticket__WEBPACK_IMPORTED_MODULE_0__.supportDB.ticket;
        this.settings = {
            columns: {
                img: {
                    title: 'Image',
                    type: 'html',
                },
                position: {
                    title: 'Position'
                },
                salary: {
                    title: 'Salary'
                },
                office: {
                    title: 'Office'
                },
                skill: {
                    title: 'Skill',
                    type: 'html',
                },
                extn: {
                    title: 'Extn'
                },
                email: {
                    title: 'Email'
                }
            },
        };
    }
    ngOnInit() { }
}
SupportTicketComponent.ɵfac = function SupportTicketComponent_Factory(t) { return new (t || SupportTicketComponent)(); };
SupportTicketComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SupportTicketComponent, selectors: [["app-support-ticket"]], decls: 160, vars: 44, consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "col-xl-4", "col-sm-6", "box-col-6"], [1, "card", "ecommerce-widget"], [1, "card-body", "support-ticket-font"], [1, "col-5"], [1, "counter", 3, "CountTo", "from", "duration"], [1, "col-7"], [1, "text-md-right"], [1, "product-stts", "txt-success", "ml-2"], [1, "icon-angle-up", "f-12", "ml-1"], [1, "product-stts", "txt-danger", "ml-2"], [1, "icon-angle-down", "f-12", "ml-1"], [1, "progress-showcase"], [1, "progress", "sm-progress-bar"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-secondary", 2, "width", "70%"], [1, "progress-showcase", "mt-4"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "70%"], [1, "table-responsive"], [1, "custom-datatable", "product-list-custom"], [1, "bootstrap", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"]], template: function SupportTicketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Support Ticket List");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "List of ticket opend by customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "8989");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "2560");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "8989");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "2560");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Running");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "8989");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "2560");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Smooth");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](91, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "8989");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](99, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "2560");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](104, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](107, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](115, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, "8989");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](123, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "2560");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](128, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](131, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, "Cancle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](139, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "8989");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](147, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149, "Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, "2560");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](152, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](155, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](159, "ngx-datatable", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Support Ticket")("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](28, _c0))("active_item", "Support Ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("CountTo", 2563)("from", 0)("duration", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("CountTo", 8943)("from", 0)("duration", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("CountTo", 2500)("from", 0)("duration", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("CountTo", 2060)("from", 0)("duration", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("CountTo", 5600)("from", 0)("duration", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("CountTo", 2560)("from", 0)("duration", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", ctx.support)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction7"](36, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](29, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](30, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](31, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](32, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](33, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](34, _c6), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](35, _c7)))("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("limit", 10);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, angular_count_to__WEBPACK_IMPORTED_MODULE_2__.CountToDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DatatableComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwb3J0LXRpY2tldC5jb21wb25lbnQuc2NzcyJ9 */"], encapsulation: 2 });


/***/ }),

/***/ 93695:
/*!*************************************************************************!*\
  !*** ./src/app/components/apps/support-ticket/support-ticket.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportTicketModule": function() { return /* binding */ SupportTicketModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-count-to */ 74848);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 38550);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/shared.module */ 44466);
/* harmony import */ var _support_ticket_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support-ticket-routing.module */ 70522);
/* harmony import */ var _support_ticket_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./support-ticket.component */ 91007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);








class SupportTicketModule {
}
SupportTicketModule.ɵfac = function SupportTicketModule_Factory(t) { return new (t || SupportTicketModule)(); };
SupportTicketModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SupportTicketModule });
SupportTicketModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _support_ticket_routing_module__WEBPACK_IMPORTED_MODULE_2__.SupportTicketRoutingModule,
            angular_count_to__WEBPACK_IMPORTED_MODULE_0__.CountToModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.NgxDatatableModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SupportTicketModule, { declarations: [_support_ticket_component__WEBPACK_IMPORTED_MODULE_3__.SupportTicketComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _support_ticket_routing_module__WEBPACK_IMPORTED_MODULE_2__.SupportTicketRoutingModule,
        angular_count_to__WEBPACK_IMPORTED_MODULE_0__.CountToModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.NgxDatatableModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 98061:
/*!******************************************************!*\
  !*** ./src/app/shared/data/tables/support-ticket.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "supportDB": function() { return /* binding */ supportDB; }
/* harmony export */ });
class supportDB {
}
supportDB.ticket = [
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/1.jpg'><div class='media-body align-self-center'> <div>Tiger</div></div></div>",
        position: "System Architect",
        salary: "$320,800",
        office: "Edinburgh",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-danger w-50' style='width: 70%' role='progressbar'></div></div></div>",
        extn: 5421,
        email: "t.nixon@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/2.png'><div class='media-body align-self-center'> <div>Tiger</div></div></div>",
        position: "System Architect",
        salary: "$320,800",
        office: "Edinburgh",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-secondary w-100'  style='width: 20%' role='progressbar'></div></div></div>",
        extn: 5421,
        email: "t.nixon@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/3.jpg'><div class='media-body align-self-center'> <div>Garrett Winters</div></div></div>",
        position: "Accountant",
        salary: "$170,750",
        office: "Tokyo",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success w-100'  style='width: 50%' role='progressbar'></div></div></div>",
        extn: 8422,
        email: "g.winters@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/4.jpg'><div class='media-body align-self-center'> <div>Garrett Winters</div></div></div>",
        position: "Accountant",
        salary: "$170,750",
        office: "Tokyo",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success w-100'  style='width: 45%' role='progressbar'></div></div></div>",
        extn: 8422,
        email: "g.winters@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/5.jpg'><div class='media-body align-self-center'> <div>Garrett Winters</div></div></div>",
        position: "Accountant",
        salary: "$170,750",
        office: "Tokyo",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success w-100'  style='width: 57%' role='progressbar'></div></div></div>",
        extn: 8422,
        email: "g.winters@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/6.jpg'><div class='media-body align-self-center'> <div>Ashton Cox</div></div></div>",
        position: "Junior Technical Author",
        salary: "$86,000",
        office: "San Francisco",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success w-100'  style='width: 100%' role='progressbar'></div></div></div>",
        extn: 1562,
        email: "a.cox@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/7.jpg'><div class='media-body align-self-center'> <div>Cedric Kelly</div></div></div>",
        position: "Senior Javascript Developer",
        salary: "$433,060",
        office: "San Francisco",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-secondary w-100'  style='width: 35%' role='progressbar'></div></div></div>",
        extn: 6224,
        email: "c.kelly@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/8.jpg'><div class='media-body align-self-center'> <div>Cedric Kelly</div></div></div>",
        position: "Senior Javascript Developer",
        salary: "$433,060",
        office: "San Francisco",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-secondary w-100'  style='width: 76%' role='progressbar'></div></div></div>",
        extn: 6224,
        email: "c.kelly@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/9.jpg'><div class='media-body align-self-center'> <div>Airi Satou</div></div></div>",
        position: "Accountant",
        salary: "$162,700",
        office: "Tokyo",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success w-100'  style='width: 20%' role='progressbar'></div></div></div>",
        extn: 5407,
        email: "a.satou@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/10.jpg'><div class='media-body align-self-center'> <div>Brielle Williamson</div></div></div>",
        position: "Integration Specialist",
        salary: "$372,000",
        office: "New York",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-info w-100' style='width: 30%' role='progressbar'></div></div></div>",
        extn: 4804,
        email: "b.williamson@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/1.jpg'><div class='media-body align-self-center'> <div>Herrod Chandler</div></div></div>",
        position: "Sales Assistant",
        salary: "$137,500",
        office: "San Francisco",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-warning w-100' style='width: 60%' role='progressbar'></div></div></div>",
        extn: 9608,
        email: "h.chandler@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/5.jpg'><div class='media-body align-self-center'> <div>Rhona Davidson</div></div></div>",
        position: "Integration Specialist",
        salary: "$327,900",
        office: "Tokyo",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-secondary w-100' style='width: 50%' role='progressbar'></div></div></div>",
        extn: 6200,
        email: "r.davidson@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/1.jpg'><div class='media-body align-self-center'> <div>Colleen Hurst</div></div></div>",
        position: "Javascript Developer",
        salary: "$205,500",
        office: "San Francisco",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success w-100' style='width: 25%' role='progressbar'></div></div></div>",
        extn: 2360,
        email: "c.hurst@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/2.png'><div class='media-body align-self-center'> <div>Sonya Frost</div></div></div>",
        position: "Software Engineer",
        salary: "$103,600",
        office: "Edinburgh",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-primary w-100' style='width: 40%' role='progressbar'></div></div></div>",
        extn: 1667,
        email: "s.frost@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/3.jpg'><div class='media-body align-self-center'> <div>Jena Gaines</div></div></div>",
        position: "Office Manager",
        salary: "$90,560",
        office: "London",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-warning w-60' style='width: 57%' role='progressbar'></div></div></div>",
        extn: 3814,
        email: "j.gaines@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/4.jpg'><div class='media-body align-self-center'> <div>Quinn Flynn</div></div></div>",
        position: "Support Lead",
        salary: "$342,000",
        office: "Edinburgh",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-danger w-70' style='width: 50%' role='progressbar'></div></div></div>",
        extn: 9497,
        email: "q.flynn@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/5.jpg'><div class='media-body align-self-center'> <div>Charde Marshall</div></div></div>",
        position: "Regional Director",
        salary: "$470,600",
        office: "San Francisco",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-info w-80' style='width: 27%' role='progressbar'></div></div></div>",
        extn: 6741,
        email: "c.marshall@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/6.jpg'><div class='media-body align-self-center'> <div>Haley Kennedy</div></div></div>",
        position: "Senior Marketing Designer",
        salary: "$313,500",
        office: "London",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success w-90'  style='width: 35%' role='progressbar'></div></div></div>",
        extn: 3597,
        email: "h.kennedy@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/7.jpg'><div class='media-body align-self-center'> <div>Tatyana Fitzpatrick</div></div></div>",
        position: "Regional Director",
        salary: "$385,750",
        office: "London",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-warning w-100' style='width: 80%' role='progressbar'></div></div></div>",
        extn: 1965,
        email: "t.fitzpatrick@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/8.jpg'><div class='media-body align-self-center'> <div>Michael Silva</div></div></div>",
        position: "Marketing Designer",
        salary: "$198,500",
        office: "London",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-primary w-90' style='width: 74%' role='progressbar'></div></div></div>",
        extn: 1581,
        email: "m.silva@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/9.jpg'><div class='media-body align-self-center'> <div>Michael Silva</div></div></div>",
        position: "Paul Byrd",
        salary: "Chief Financial Officer (CFO)",
        office: "$725,000",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-ress-bar w-100 bg-success' style='width: 30%' role='progressbar'></div></div></div>",
        extn: 3059,
        email: "p.byrd@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/10.jpg'><div class='media-body align-self-center'> <div>Gloria Little</div></div></div>",
        position: "Systems Administrator",
        salary: "$237,500",
        office: "New York",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success w-60' style='width: 50%' role='progressbar'></div></div></div>",
        extn: 1721,
        email: "g.little@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/2.png'><div class='media-body align-self-center'> <div>Bradley Greer</div></div></div>",
        position: "Software Engineer",
        salary: "$132,000",
        office: "London",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-primary w-50' style='width: 30%' role='progressbar'></div></div></div>",
        extn: 2558,
        email: "b.greer@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/5.jpg'><div class='media-body align-self-center'> <div>Michael Silva</div></div></div>",
        position: "Dai Rios",
        salary: "Personnel Lead",
        office: "$217,500",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-gress-bar w-50 bg-warning w-40' style='width: 40%' role='progressbar'></div></div></div>",
        extn: 2290,
        email: "d.rios@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/1.jpg'><div class='media-body align-self-center'> <div>Jenette Caldwell</div></div></div>",
        position: "Development Lead",
        salary: "$345,000",
        office: "New York",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-primary w-30' style='width: 80%' role='progressbar'></div></div></div>",
        extn: 1937,
        email: "j.caldwell@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/2.png'><div class='media-body align-self-center'> <div>Yuri Berry</div></div></div>",
        position: "Chief Marketing Officer (CMO)",
        salary: "$675,000",
        office: "New York",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-danger w-20' style='width: 30%' role='progressbar'></div></div></div>",
        extn: 6154,
        email: "y.berry@datatables.net"
    },
    {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/3.jpg'><div class='media-body align-self-center'> <div>C</div></div></div>",
        position: "Pre-Sales Support",
        salary: "$106,450",
        office: "New York",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success w-10' style='width: 70%' role='progressbar'></div></div></div>",
        extn: 8330,
        email: "c.vance@datatables.net"
    }
];


/***/ })

}]);
//# sourceMappingURL=src_app_components_apps_support-ticket_support-ticket_module_ts-es2015.js.map