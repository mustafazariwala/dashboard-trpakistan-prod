(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_gallery_gallery_module_ts"],{

/***/ 58152:
/*!***************************************************************************************!*\
  !*** ./node_modules/angular2_photoswipe/__ivy_ngcc__/fesm2015/angular2_photoswipe.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Angular2PhotoswipeService": function() { return /* binding */ Angular2PhotoswipeService; },
/* harmony export */   "Angular2PhotoswipeComponent": function() { return /* binding */ Angular2PhotoswipeComponent; },
/* harmony export */   "LightboxAdapter": function() { return /* binding */ LightboxAdapter; },
/* harmony export */   "Angular2PhotoswipeModule": function() { return /* binding */ Angular2PhotoswipeModule; },
/* harmony export */   "Image": function() { return /* binding */ Image; },
/* harmony export */   "ɵf": function() { return /* binding */ GalleryItemComponent; },
/* harmony export */   "ɵe": function() { return /* binding */ GalleryComponent; },
/* harmony export */   "ɵa": function() { return /* binding */ ANGULAR2_PHOTO_SWIPE_FACTORY; },
/* harmony export */   "ɵb": function() { return /* binding */ DefaultLightboxAdapter; },
/* harmony export */   "ɵc": function() { return /* binding */ LightboxComponent; },
/* harmony export */   "ɵd": function() { return /* binding */ NgpService; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! photoswipe */ 78710);
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(photoswipe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! photoswipe/dist/photoswipe-ui-default */ 22371);
/* harmony import */ var photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



const _c0 = ["ngpLightbox"];
const _c1 = function (a0) { return { "card-img-top": a0 }; };
const _c2 = ["ngpGallery"];
const _c3 = [[["ngp-gallery-item"]]];
const _c4 = function (a0) { return { "card-columns": a0 }; };
const _c5 = ["ngp-gallery-item"];
class Angular2PhotoswipeService {
    constructor() { }
}
Angular2PhotoswipeService.ɵfac = function Angular2PhotoswipeService_Factory(t) { return new (t || Angular2PhotoswipeService)(); };
Angular2PhotoswipeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Angular2PhotoswipeService, factory: Angular2PhotoswipeService.ɵfac, providedIn: 'root' });
/** @nocollapse */
Angular2PhotoswipeService.ctorParameters = () => [];
/** @nocollapse */ Angular2PhotoswipeService.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({ factory: function Angular2PhotoswipeService_Factory() { return new Angular2PhotoswipeService(); }, token: Angular2PhotoswipeService, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Angular2PhotoswipeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Angular2PhotoswipeComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
Angular2PhotoswipeComponent.ɵfac = function Angular2PhotoswipeComponent_Factory(t) { return new (t || Angular2PhotoswipeComponent)(); };
Angular2PhotoswipeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Angular2PhotoswipeComponent, selectors: [["ngp-angular2-photoswipe"]], decls: 2, vars: 0, template: function Angular2PhotoswipeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " angular2-photoswipe works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/** @nocollapse */
Angular2PhotoswipeComponent.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Angular2PhotoswipeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
        args: [{
                selector: 'ngp-angular2-photoswipe',
                template: `
    <p>
      angular2-photoswipe works!
    </p>
  `
            }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgpService {
}
NgpService.ɵfac = function NgpService_Factory(t) { return new (t || NgpService)(); };
NgpService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NgpService, factory: NgpService.ɵfac, providedIn: 'root' });
/** @nocollapse */ NgpService.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({ factory: function NgpService_Factory() { return new NgpService(); }, token: NgpService, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LightboxComponent {
    /**
     * @param {?} ngp
     */
    constructor(ngp) {
        this.ngp = ngp;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.ngp.LightboxElement = this.el;
    }
}
LightboxComponent.ɵfac = function LightboxComponent_Factory(t) { return new (t || LightboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NgpService)); };
LightboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LightboxComponent, selectors: [["ngp-lightbox"]], viewQuery: function LightboxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
    } }, decls: 25, vars: 0, consts: [["tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "pswp"], ["ngpLightbox", ""], [1, "pswp__bg"], [1, "pswp__scroll-wrap"], [1, "pswp__container"], [1, "pswp__item"], [1, "pswp__ui", "pswp__ui--hidden"], [1, "pswp__top-bar"], [1, "pswp__counter"], ["title", "Close (Esc)", 1, "pswp__button", "pswp__button--close"], ["title", "Share", 1, "pswp__button", "pswp__button--share"], ["title", "Toggle fullscreen", 1, "pswp__button", "pswp__button--fs"], ["title", "Zoom in/out", 1, "pswp__button", "pswp__button--zoom"], [1, "pswp__preloader"], [1, "pswp__preloader__icn"], [1, "pswp__preloader__cut"], [1, "pswp__preloader__donut"], [1, "pswp__share-modal", "pswp__share-modal--hidden", "pswp__single-tap"], [1, "pswp__share-tooltip"], ["title", "Previous (arrow left)", 1, "pswp__button", "pswp__button--arrow--left"], ["title", "Next (arrow right)", 1, "pswp__button", "pswp__button--arrow--right"], [1, "pswp__caption"], [1, "pswp__caption__center"]], template: function LightboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: [".pswp[_ngcontent-%COMP%]{display:none;position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden;touch-action:none;z-index:1500;-webkit-text-size-adjust:100%;-webkit-backface-visibility:hidden;outline:0}.pswp[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{box-sizing:border-box}.pswp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:none}.pswp--animate_opacity[_ngcontent-%COMP%]{opacity:.001;will-change:opacity;transition:opacity 333ms cubic-bezier(.4,0,.22,1)}.pswp--open[_ngcontent-%COMP%]{display:block}.pswp--zoom-allowed[_ngcontent-%COMP%]   .pswp__img[_ngcontent-%COMP%]{cursor:-webkit-zoom-in;cursor:-moz-zoom-in;cursor:zoom-in}.pswp--zoomed-in[_ngcontent-%COMP%]   .pswp__img[_ngcontent-%COMP%]{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.pswp--dragging[_ngcontent-%COMP%]   .pswp__img[_ngcontent-%COMP%]{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.pswp__bg[_ngcontent-%COMP%]{position:absolute;left:0;top:0;width:100%;height:100%;background:#000;opacity:0;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-backface-visibility:hidden;will-change:opacity}.pswp__scroll-wrap[_ngcontent-%COMP%]{position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden}.pswp__container[_ngcontent-%COMP%], .pswp__zoom-wrap[_ngcontent-%COMP%]{touch-action:none;position:absolute;left:0;right:0;top:0;bottom:0;-webkit-backface-visibility:hidden}.pswp__container[_ngcontent-%COMP%], .pswp__img[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}.pswp__zoom-wrap[_ngcontent-%COMP%]{position:absolute;width:100%;-webkit-transform-origin:left top;transform-origin:left top;transition:transform 333ms cubic-bezier(.4,0,.22,1),-webkit-transform 333ms cubic-bezier(.4,0,.22,1)}.pswp__bg[_ngcontent-%COMP%]{will-change:opacity;transition:opacity 333ms cubic-bezier(.4,0,.22,1)}.pswp--animated-in[_ngcontent-%COMP%]   .pswp__bg[_ngcontent-%COMP%], .pswp--animated-in[_ngcontent-%COMP%]   .pswp__zoom-wrap[_ngcontent-%COMP%]{transition:none}.pswp__item[_ngcontent-%COMP%]{position:absolute;left:0;right:0;top:0;bottom:0;overflow:hidden}.pswp__img[_ngcontent-%COMP%]{position:absolute;width:auto;height:auto;top:0;left:0}.pswp__img--placeholder[_ngcontent-%COMP%]{-webkit-backface-visibility:hidden}.pswp__img--placeholder--blank[_ngcontent-%COMP%]{background:#222}.pswp--ie[_ngcontent-%COMP%]   .pswp__img[_ngcontent-%COMP%]{width:100%!important;height:auto!important;left:0;top:0}.pswp__error-msg[_ngcontent-%COMP%]{position:absolute;left:0;top:50%;width:100%;text-align:center;font-size:14px;line-height:16px;margin-top:-8px;color:#ccc}.pswp__error-msg[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#ccc;text-decoration:underline}.pswp__button[_ngcontent-%COMP%]{position:relative;cursor:pointer;overflow:visible;-webkit-appearance:none;display:block;border:0;padding:0;margin:0;float:right;opacity:.75;transition:opacity .2s;box-shadow:none}.pswp__button[_ngcontent-%COMP%]:focus, .pswp__button[_ngcontent-%COMP%]:hover{opacity:1}.pswp__button[_ngcontent-%COMP%]:active{outline:0;opacity:.9}.pswp__button[_ngcontent-%COMP%]::-moz-focus-inner{padding:0;border:0}.pswp__ui--over-close[_ngcontent-%COMP%]   .pswp__button--close[_ngcontent-%COMP%]{opacity:1}.pswp__button[_ngcontent-%COMP%], .pswp__button--arrow--left[_ngcontent-%COMP%]:before, .pswp__button--arrow--right[_ngcontent-%COMP%]:before{background:url(/assets/media/default-skin.png) 0 0/264px 88px no-repeat;width:44px;height:44px}@media (-webkit-min-device-pixel-ratio:1.1),(-webkit-min-device-pixel-ratio:1.09375),(min-resolution:105dpi),(min-resolution:1.1dppx){.pswp--svg[_ngcontent-%COMP%]   .pswp__button[_ngcontent-%COMP%], .pswp--svg[_ngcontent-%COMP%]   .pswp__button--arrow--left[_ngcontent-%COMP%]:before, .pswp--svg[_ngcontent-%COMP%]   .pswp__button--arrow--right[_ngcontent-%COMP%]:before{background-image:url(/assets/media/default-skin.svg)}.pswp--svg[_ngcontent-%COMP%]   .pswp__button--arrow--left[_ngcontent-%COMP%], .pswp--svg[_ngcontent-%COMP%]   .pswp__button--arrow--right[_ngcontent-%COMP%]{background:0 0}}.pswp__button--close[_ngcontent-%COMP%]{background-position:0 -44px}.pswp__button--share[_ngcontent-%COMP%]{background-position:-44px -44px}.pswp__button--fs[_ngcontent-%COMP%]{display:none}.pswp--supports-fs[_ngcontent-%COMP%]   .pswp__button--fs[_ngcontent-%COMP%]{display:block}.pswp--fs[_ngcontent-%COMP%]   .pswp__button--fs[_ngcontent-%COMP%]{background-position:-44px 0}.pswp__button--zoom[_ngcontent-%COMP%]{display:none;background-position:-88px 0}.pswp--zoom-allowed[_ngcontent-%COMP%]   .pswp__button--zoom[_ngcontent-%COMP%]{display:block}.pswp--zoomed-in[_ngcontent-%COMP%]   .pswp__button--zoom[_ngcontent-%COMP%]{background-position:-132px 0}.pswp--touch[_ngcontent-%COMP%]   .pswp__button--arrow--left[_ngcontent-%COMP%], .pswp--touch[_ngcontent-%COMP%]   .pswp__button--arrow--right[_ngcontent-%COMP%]{visibility:hidden}.pswp__button--arrow--left[_ngcontent-%COMP%], .pswp__button--arrow--right[_ngcontent-%COMP%]{background:0 0;top:50%;margin-top:-50px;width:70px;height:100px;position:absolute}.pswp__button--arrow--left[_ngcontent-%COMP%]{left:0}.pswp__button--arrow--right[_ngcontent-%COMP%]{right:0}.pswp__button--arrow--left[_ngcontent-%COMP%]:before, .pswp__button--arrow--right[_ngcontent-%COMP%]:before{content:'';top:35px;background-color:rgba(0,0,0,.3);height:30px;width:32px;position:absolute}.pswp__button--arrow--left[_ngcontent-%COMP%]:before{left:6px;background-position:-138px -44px}.pswp__button--arrow--right[_ngcontent-%COMP%]:before{right:6px;background-position:-94px -44px}.pswp__counter[_ngcontent-%COMP%], .pswp__share-modal[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pswp__share-modal[_ngcontent-%COMP%]{display:block;background:rgba(0,0,0,.5);width:100%;height:100%;top:0;left:0;padding:10px;position:absolute;z-index:1600;opacity:0;transition:opacity .25s ease-out;-webkit-backface-visibility:hidden;will-change:opacity}.pswp__share-modal--hidden[_ngcontent-%COMP%]{display:none}.pswp__share-tooltip[_ngcontent-%COMP%]{z-index:1620;position:absolute;background:#fff;top:56px;border-radius:2px;display:block;width:auto;right:44px;box-shadow:0 2px 5px rgba(0,0,0,.25);-webkit-transform:translateY(6px);transform:translateY(6px);transition:transform .25s;transition:transform .25s,-webkit-transform .25s;-webkit-backface-visibility:hidden;will-change:transform}.pswp__share-tooltip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;padding:8px 12px;color:#000;text-decoration:none;font-size:14px;line-height:18px}.pswp__share-tooltip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none;color:#000}.pswp__share-tooltip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{border-radius:2px 2px 0 0}.pswp__share-tooltip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child{border-radius:0 0 2px 2px}.pswp__share-modal--fade-in[_ngcontent-%COMP%]{opacity:1}.pswp__share-modal--fade-in[_ngcontent-%COMP%]   .pswp__share-tooltip[_ngcontent-%COMP%]{-webkit-transform:translateY(0);transform:translateY(0)}.pswp--touch[_ngcontent-%COMP%]   .pswp__share-tooltip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:16px 12px}a.pswp__share--facebook[_ngcontent-%COMP%]:before{content:'';display:block;width:0;height:0;position:absolute;top:-12px;right:15px;border:6px solid transparent;border-bottom-color:#fff;-webkit-pointer-events:none;-moz-pointer-events:none;pointer-events:none}a.pswp__share--facebook[_ngcontent-%COMP%]:hover{background:#3e5c9a;color:#fff}a.pswp__share--facebook[_ngcontent-%COMP%]:hover:before{border-bottom-color:#3e5c9a}a.pswp__share--twitter[_ngcontent-%COMP%]:hover{background:#55acee;color:#fff}a.pswp__share--pinterest[_ngcontent-%COMP%]:hover{background:#ccc;color:#ce272d}a.pswp__share--download[_ngcontent-%COMP%]:hover{background:#ddd}.pswp__counter[_ngcontent-%COMP%]{position:absolute;left:0;top:0;height:44px;font-size:13px;line-height:44px;color:#fff;opacity:.75;padding:0 10px}.pswp__caption[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0;width:100%;min-height:44px}.pswp__caption[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:11px;color:#bbb}.pswp__caption__center[_ngcontent-%COMP%]{text-align:left;max-width:420px;margin:0 auto;font-size:13px;padding:10px;line-height:20px;color:#ccc}.pswp__caption--empty[_ngcontent-%COMP%]{display:none}.pswp__caption--fake[_ngcontent-%COMP%]{visibility:hidden}.pswp__preloader[_ngcontent-%COMP%]{width:44px;height:44px;position:absolute;top:0;left:50%;margin-left:-22px;opacity:0;transition:opacity .25s ease-out;will-change:opacity;direction:ltr}.pswp__preloader__icn[_ngcontent-%COMP%]{width:20px;height:20px;margin:12px}.pswp__preloader--active[_ngcontent-%COMP%]{opacity:1}.pswp__preloader--active[_ngcontent-%COMP%]   .pswp__preloader__icn[_ngcontent-%COMP%]{background:url(/assets/media/preloader.gif) no-repeat}.pswp--css_animation[_ngcontent-%COMP%]   .pswp__preloader--active[_ngcontent-%COMP%]{opacity:1}.pswp--css_animation[_ngcontent-%COMP%]   .pswp__preloader--active[_ngcontent-%COMP%]   .pswp__preloader__icn[_ngcontent-%COMP%]{-webkit-animation:.5s linear infinite clockwise;animation:.5s linear infinite clockwise}.pswp--css_animation[_ngcontent-%COMP%]   .pswp__preloader--active[_ngcontent-%COMP%]   .pswp__preloader__donut[_ngcontent-%COMP%]{-webkit-animation:1s cubic-bezier(.4,0,.22,1) infinite donut-rotate;animation:1s cubic-bezier(.4,0,.22,1) infinite donut-rotate}.pswp--css_animation[_ngcontent-%COMP%]   .pswp__preloader__icn[_ngcontent-%COMP%]{background:0 0;opacity:.75;width:14px;height:14px;position:absolute;left:15px;top:15px;margin:0}.pswp--css_animation[_ngcontent-%COMP%]   .pswp__preloader__cut[_ngcontent-%COMP%]{position:relative;width:7px;height:14px;overflow:hidden}.pswp--css_animation[_ngcontent-%COMP%]   .pswp__preloader__donut[_ngcontent-%COMP%]{box-sizing:border-box;width:14px;height:14px;border:2px solid #fff;border-radius:50%;border-left-color:transparent;border-bottom-color:transparent;position:absolute;top:0;left:0;background:0 0;margin:0}@media screen and (max-width:1024px){.pswp__preloader[_ngcontent-%COMP%]{position:relative;left:auto;top:auto;margin:0;float:right}}@-webkit-keyframes clockwise{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes clockwise{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes donut-rotate{0%,100%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(-140deg);transform:rotate(-140deg)}}@keyframes donut-rotate{0%,100%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(-140deg);transform:rotate(-140deg)}}.pswp__ui[_ngcontent-%COMP%]{-webkit-font-smoothing:auto;visibility:visible;opacity:1;z-index:1550}.pswp__top-bar[_ngcontent-%COMP%]{position:absolute;left:0;top:0;height:44px;width:100%}.pswp--has_mouse[_ngcontent-%COMP%]   .pswp__button--arrow--left[_ngcontent-%COMP%], .pswp--has_mouse[_ngcontent-%COMP%]   .pswp__button--arrow--right[_ngcontent-%COMP%], .pswp__caption[_ngcontent-%COMP%], .pswp__top-bar[_ngcontent-%COMP%]{-webkit-backface-visibility:hidden;will-change:opacity;transition:opacity 333ms cubic-bezier(.4,0,.22,1)}.pswp--has_mouse[_ngcontent-%COMP%]   .pswp__button--arrow--left[_ngcontent-%COMP%], .pswp--has_mouse[_ngcontent-%COMP%]   .pswp__button--arrow--right[_ngcontent-%COMP%]{visibility:visible}.pswp__caption[_ngcontent-%COMP%], .pswp__top-bar[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.5)}.pswp__ui--fit[_ngcontent-%COMP%]   .pswp__caption[_ngcontent-%COMP%], .pswp__ui--fit[_ngcontent-%COMP%]   .pswp__top-bar[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.3)}.pswp__ui--idle[_ngcontent-%COMP%]   .pswp__button--arrow--left[_ngcontent-%COMP%], .pswp__ui--idle[_ngcontent-%COMP%]   .pswp__button--arrow--right[_ngcontent-%COMP%], .pswp__ui--idle[_ngcontent-%COMP%]   .pswp__top-bar[_ngcontent-%COMP%]{opacity:0}.pswp__ui--hidden[_ngcontent-%COMP%]   .pswp__button--arrow--left[_ngcontent-%COMP%], .pswp__ui--hidden[_ngcontent-%COMP%]   .pswp__button--arrow--right[_ngcontent-%COMP%], .pswp__ui--hidden[_ngcontent-%COMP%]   .pswp__caption[_ngcontent-%COMP%], .pswp__ui--hidden[_ngcontent-%COMP%]   .pswp__top-bar[_ngcontent-%COMP%]{opacity:.001}.pswp__ui--one-slide[_ngcontent-%COMP%]   .pswp__button--arrow--left[_ngcontent-%COMP%], .pswp__ui--one-slide[_ngcontent-%COMP%]   .pswp__button--arrow--right[_ngcontent-%COMP%], .pswp__ui--one-slide[_ngcontent-%COMP%]   .pswp__counter[_ngcontent-%COMP%]{display:none}.pswp__element--disabled[_ngcontent-%COMP%]{display:none!important}.pswp--minimal--dark[_ngcontent-%COMP%]   .pswp__top-bar[_ngcontent-%COMP%]{background:0 0}"] });
/** @nocollapse */
LightboxComponent.ctorParameters = () => [
    { type: NgpService }
];
LightboxComponent.propDecorators = {
    el: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['ngpLightbox', { static: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LightboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
        args: [{
                selector: 'ngp-lightbox',
                template: "<!-- Root element of PhotoSwipe. Must have class pswp. -->\n<div class=\"pswp\" #ngpLightbox tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <!-- Background of PhotoSwipe.\n         It's a separate element, as animating opacity is faster than rgba(). -->\n    <div class=\"pswp__bg\"></div>\n    <!-- Slides wrapper with overflow:hidden. -->\n    <div class=\"pswp__scroll-wrap\">\n        <!-- Container that holds slides. PhotoSwipe keeps only 3 slides in DOM to save memory. -->\n        <!-- don't modify these 3 pswp__item elements, data is added later on. -->\n        <div class=\"pswp__container\">\n            <div class=\"pswp__item\"></div>\n            <div class=\"pswp__item\"></div>\n            <div class=\"pswp__item\"></div>\n        </div>\n        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->\n        <div class=\"pswp__ui pswp__ui--hidden\">\n            <div class=\"pswp__top-bar\">\n                <!--  Controls are self-explanatory. Order can be changed. -->\n                <div class=\"pswp__counter\"></div>\n                <button class=\"pswp__button pswp__button--close\" title=\"Close (Esc)\"></button>\n                <button class=\"pswp__button pswp__button--share\" title=\"Share\"></button>\n                <button class=\"pswp__button pswp__button--fs\" title=\"Toggle fullscreen\"></button>\n                <button class=\"pswp__button pswp__button--zoom\" title=\"Zoom in/out\"></button>\n                <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->\n                <!-- element will get class pswp__preloader--active when preloader is running -->\n                <div class=\"pswp__preloader\">\n                    <div class=\"pswp__preloader__icn\">\n                        <div class=\"pswp__preloader__cut\">\n                            <div class=\"pswp__preloader__donut\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"pswp__share-modal pswp__share-modal--hidden pswp__single-tap\">\n                <div class=\"pswp__share-tooltip\"></div>\n            </div>\n            <button class=\"pswp__button pswp__button--arrow--left\" title=\"Previous (arrow left)\">\n            </button>\n            <button class=\"pswp__button pswp__button--arrow--right\" title=\"Next (arrow right)\">\n            </button>\n            <div class=\"pswp__caption\">\n                <div class=\"pswp__caption__center\"></div>\n            </div>\n        </div>\n    </div>\n</div>",
                styles: ["/*! PhotoSwipe main CSS by Dmitry Semenov | photoswipe.com | MIT license */.pswp{display:none;position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden;touch-action:none;z-index:1500;-webkit-text-size-adjust:100%;-webkit-backface-visibility:hidden;outline:0}.pswp *{box-sizing:border-box}.pswp img{max-width:none}.pswp--animate_opacity{opacity:.001;will-change:opacity;transition:opacity 333ms cubic-bezier(.4,0,.22,1)}.pswp--open{display:block}.pswp--zoom-allowed .pswp__img{cursor:-webkit-zoom-in;cursor:-moz-zoom-in;cursor:zoom-in}.pswp--zoomed-in .pswp__img{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.pswp--dragging .pswp__img{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.pswp__bg{position:absolute;left:0;top:0;width:100%;height:100%;background:#000;opacity:0;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-backface-visibility:hidden;will-change:opacity}.pswp__scroll-wrap{position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden}.pswp__container,.pswp__zoom-wrap{touch-action:none;position:absolute;left:0;right:0;top:0;bottom:0;-webkit-backface-visibility:hidden}.pswp__container,.pswp__img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}.pswp__zoom-wrap{position:absolute;width:100%;-webkit-transform-origin:left top;transform-origin:left top;transition:transform 333ms cubic-bezier(.4,0,.22,1),-webkit-transform 333ms cubic-bezier(.4,0,.22,1)}.pswp__bg{will-change:opacity;transition:opacity 333ms cubic-bezier(.4,0,.22,1)}.pswp--animated-in .pswp__bg,.pswp--animated-in .pswp__zoom-wrap{transition:none}.pswp__item{position:absolute;left:0;right:0;top:0;bottom:0;overflow:hidden}.pswp__img{position:absolute;width:auto;height:auto;top:0;left:0}.pswp__img--placeholder{-webkit-backface-visibility:hidden}.pswp__img--placeholder--blank{background:#222}.pswp--ie .pswp__img{width:100%!important;height:auto!important;left:0;top:0}.pswp__error-msg{position:absolute;left:0;top:50%;width:100%;text-align:center;font-size:14px;line-height:16px;margin-top:-8px;color:#ccc}.pswp__error-msg a{color:#ccc;text-decoration:underline}/*! PhotoSwipe Default UI CSS by Dmitry Semenov | photoswipe.com | MIT license */.pswp__button{position:relative;cursor:pointer;overflow:visible;-webkit-appearance:none;display:block;border:0;padding:0;margin:0;float:right;opacity:.75;transition:opacity .2s;box-shadow:none}.pswp__button:focus,.pswp__button:hover{opacity:1}.pswp__button:active{outline:0;opacity:.9}.pswp__button::-moz-focus-inner{padding:0;border:0}.pswp__ui--over-close .pswp__button--close{opacity:1}.pswp__button,.pswp__button--arrow--left:before,.pswp__button--arrow--right:before{background:url(/assets/media/default-skin.png) 0 0/264px 88px no-repeat;width:44px;height:44px}@media (-webkit-min-device-pixel-ratio:1.1),(-webkit-min-device-pixel-ratio:1.09375),(min-resolution:105dpi),(min-resolution:1.1dppx){.pswp--svg .pswp__button,.pswp--svg .pswp__button--arrow--left:before,.pswp--svg .pswp__button--arrow--right:before{background-image:url(/assets/media/default-skin.svg)}.pswp--svg .pswp__button--arrow--left,.pswp--svg .pswp__button--arrow--right{background:0 0}}.pswp__button--close{background-position:0 -44px}.pswp__button--share{background-position:-44px -44px}.pswp__button--fs{display:none}.pswp--supports-fs .pswp__button--fs{display:block}.pswp--fs .pswp__button--fs{background-position:-44px 0}.pswp__button--zoom{display:none;background-position:-88px 0}.pswp--zoom-allowed .pswp__button--zoom{display:block}.pswp--zoomed-in .pswp__button--zoom{background-position:-132px 0}.pswp--touch .pswp__button--arrow--left,.pswp--touch .pswp__button--arrow--right{visibility:hidden}.pswp__button--arrow--left,.pswp__button--arrow--right{background:0 0;top:50%;margin-top:-50px;width:70px;height:100px;position:absolute}.pswp__button--arrow--left{left:0}.pswp__button--arrow--right{right:0}.pswp__button--arrow--left:before,.pswp__button--arrow--right:before{content:'';top:35px;background-color:rgba(0,0,0,.3);height:30px;width:32px;position:absolute}.pswp__button--arrow--left:before{left:6px;background-position:-138px -44px}.pswp__button--arrow--right:before{right:6px;background-position:-94px -44px}.pswp__counter,.pswp__share-modal{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pswp__share-modal{display:block;background:rgba(0,0,0,.5);width:100%;height:100%;top:0;left:0;padding:10px;position:absolute;z-index:1600;opacity:0;transition:opacity .25s ease-out;-webkit-backface-visibility:hidden;will-change:opacity}.pswp__share-modal--hidden{display:none}.pswp__share-tooltip{z-index:1620;position:absolute;background:#fff;top:56px;border-radius:2px;display:block;width:auto;right:44px;box-shadow:0 2px 5px rgba(0,0,0,.25);-webkit-transform:translateY(6px);transform:translateY(6px);transition:transform .25s;transition:transform .25s,-webkit-transform .25s;-webkit-backface-visibility:hidden;will-change:transform}.pswp__share-tooltip a{display:block;padding:8px 12px;color:#000;text-decoration:none;font-size:14px;line-height:18px}.pswp__share-tooltip a:hover{text-decoration:none;color:#000}.pswp__share-tooltip a:first-child{border-radius:2px 2px 0 0}.pswp__share-tooltip a:last-child{border-radius:0 0 2px 2px}.pswp__share-modal--fade-in{opacity:1}.pswp__share-modal--fade-in .pswp__share-tooltip{-webkit-transform:translateY(0);transform:translateY(0)}.pswp--touch .pswp__share-tooltip a{padding:16px 12px}a.pswp__share--facebook:before{content:'';display:block;width:0;height:0;position:absolute;top:-12px;right:15px;border:6px solid transparent;border-bottom-color:#fff;-webkit-pointer-events:none;-moz-pointer-events:none;pointer-events:none}a.pswp__share--facebook:hover{background:#3e5c9a;color:#fff}a.pswp__share--facebook:hover:before{border-bottom-color:#3e5c9a}a.pswp__share--twitter:hover{background:#55acee;color:#fff}a.pswp__share--pinterest:hover{background:#ccc;color:#ce272d}a.pswp__share--download:hover{background:#ddd}.pswp__counter{position:absolute;left:0;top:0;height:44px;font-size:13px;line-height:44px;color:#fff;opacity:.75;padding:0 10px}.pswp__caption{position:absolute;left:0;bottom:0;width:100%;min-height:44px}.pswp__caption small{font-size:11px;color:#bbb}.pswp__caption__center{text-align:left;max-width:420px;margin:0 auto;font-size:13px;padding:10px;line-height:20px;color:#ccc}.pswp__caption--empty{display:none}.pswp__caption--fake{visibility:hidden}.pswp__preloader{width:44px;height:44px;position:absolute;top:0;left:50%;margin-left:-22px;opacity:0;transition:opacity .25s ease-out;will-change:opacity;direction:ltr}.pswp__preloader__icn{width:20px;height:20px;margin:12px}.pswp__preloader--active{opacity:1}.pswp__preloader--active .pswp__preloader__icn{background:url(/assets/media/preloader.gif) no-repeat}.pswp--css_animation .pswp__preloader--active{opacity:1}.pswp--css_animation .pswp__preloader--active .pswp__preloader__icn{-webkit-animation:.5s linear infinite clockwise;animation:.5s linear infinite clockwise}.pswp--css_animation .pswp__preloader--active .pswp__preloader__donut{-webkit-animation:1s cubic-bezier(.4,0,.22,1) infinite donut-rotate;animation:1s cubic-bezier(.4,0,.22,1) infinite donut-rotate}.pswp--css_animation .pswp__preloader__icn{background:0 0;opacity:.75;width:14px;height:14px;position:absolute;left:15px;top:15px;margin:0}.pswp--css_animation .pswp__preloader__cut{position:relative;width:7px;height:14px;overflow:hidden}.pswp--css_animation .pswp__preloader__donut{box-sizing:border-box;width:14px;height:14px;border:2px solid #fff;border-radius:50%;border-left-color:transparent;border-bottom-color:transparent;position:absolute;top:0;left:0;background:0 0;margin:0}@media screen and (max-width:1024px){.pswp__preloader{position:relative;left:auto;top:auto;margin:0;float:right}}@-webkit-keyframes clockwise{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes clockwise{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes donut-rotate{0%,100%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(-140deg);transform:rotate(-140deg)}}@keyframes donut-rotate{0%,100%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(-140deg);transform:rotate(-140deg)}}.pswp__ui{-webkit-font-smoothing:auto;visibility:visible;opacity:1;z-index:1550}.pswp__top-bar{position:absolute;left:0;top:0;height:44px;width:100%}.pswp--has_mouse .pswp__button--arrow--left,.pswp--has_mouse .pswp__button--arrow--right,.pswp__caption,.pswp__top-bar{-webkit-backface-visibility:hidden;will-change:opacity;transition:opacity 333ms cubic-bezier(.4,0,.22,1)}.pswp--has_mouse .pswp__button--arrow--left,.pswp--has_mouse .pswp__button--arrow--right{visibility:visible}.pswp__caption,.pswp__top-bar{background-color:rgba(0,0,0,.5)}.pswp__ui--fit .pswp__caption,.pswp__ui--fit .pswp__top-bar{background-color:rgba(0,0,0,.3)}.pswp__ui--idle .pswp__button--arrow--left,.pswp__ui--idle .pswp__button--arrow--right,.pswp__ui--idle .pswp__top-bar{opacity:0}.pswp__ui--hidden .pswp__button--arrow--left,.pswp__ui--hidden .pswp__button--arrow--right,.pswp__ui--hidden .pswp__caption,.pswp__ui--hidden .pswp__top-bar{opacity:.001}.pswp__ui--one-slide .pswp__button--arrow--left,.pswp__ui--one-slide .pswp__button--arrow--right,.pswp__ui--one-slide .pswp__counter{display:none}.pswp__element--disabled{display:none!important}.pswp--minimal--dark .pswp__top-bar{background:0 0}"]
            }]
    }], function () { return [{ type: NgpService }]; }, { el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
            args: ['ngpLightbox', { static: true }]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Image {
    constructor() { }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function ANGULAR2_PHOTO_SWIPE_FACTORY() {
    return new DefaultLightboxAdapter();
}
/**
 * @abstract
 */
class LightboxAdapter {
}
LightboxAdapter.ɵfac = function LightboxAdapter_Factory(t) { return new (t || LightboxAdapter)(); };
LightboxAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LightboxAdapter, factory: function () { return ANGULAR2_PHOTO_SWIPE_FACTORY(); }, providedIn: 'root' });
/** @nocollapse */ LightboxAdapter.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({ factory: ANGULAR2_PHOTO_SWIPE_FACTORY, token: LightboxAdapter, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LightboxAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
        args: [{ providedIn: 'root', useFactory: ANGULAR2_PHOTO_SWIPE_FACTORY }]
    }], null, null); })();
class DefaultLightboxAdapter extends LightboxAdapter {
    constructor() {
        super(...arguments);
        this.allowPanToNext = true;
        this.spacing = 0.12;
        this.bgOpacity = 1.0;
        this.mouseUsed = false;
        this.loop = true;
        this.pinchToClose = true;
        this.closeOnScroll = true;
        this.closeOnVerticalDrag = true;
        this.hideAnimationDuration = 333;
        this.showAnimationDuration = 333;
        this.showHideOpacity = false;
        this.escKey = true;
        this.arrowKeys = true;
    }
}
DefaultLightboxAdapter.ɵfac = /*@__PURE__*/ function () { let ɵDefaultLightboxAdapter_BaseFactory; return function DefaultLightboxAdapter_Factory(t) { return (ɵDefaultLightboxAdapter_BaseFactory || (ɵDefaultLightboxAdapter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](DefaultLightboxAdapter)))(t || DefaultLightboxAdapter); }; }();
DefaultLightboxAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DefaultLightboxAdapter, factory: DefaultLightboxAdapter.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DefaultLightboxAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GalleryItemComponent {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.isBootstrapEnabled = false;
        this.isBootstrapEnabled = this.adapter.enableBootstrap4;
    }
    /**
     * @return {?}
     */
    onClick() {
        this.clicked.emit(this.image);
        return false;
    }
}
GalleryItemComponent.ɵfac = function GalleryItemComponent_Factory(t) { return new (t || GalleryItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](LightboxAdapter)); };
GalleryItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GalleryItemComponent, selectors: [["ngp-gallery-item"]], hostVars: 2, hostBindings: function GalleryItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("card", ctx.isBootstrapEnabled);
    } }, inputs: { image: "image" }, outputs: { clicked: "clicked" }, decls: 2, vars: 8, consts: [["itemprop", "contentUrl", 3, "href", "click"], ["itemprop", "thumbnail", 3, "src", "ngClass", "alt"]], template: function GalleryItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GalleryItemComponent_Template_a_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx.image.largeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-size", ctx.image.width + "x" + ctx.image.height)("data-author", ctx.image.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.image.thumbUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", ctx.image.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, ctx.isBootstrapEnabled));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass], styles: [""] });
/** @nocollapse */
GalleryItemComponent.ctorParameters = () => [
    { type: LightboxAdapter }
];
GalleryItemComponent.propDecorators = {
    image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    clicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    isBootstrapEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding, args: ['class.card',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](GalleryItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
        args: [{
                selector: 'ngp-gallery-item',
                template: "<a href=\"{{image.largeUrl}}\" itemprop=\"contentUrl\" [attr.data-size]=\"image.width + 'x' + image.height\"\n    [attr.data-author]=\"image.author\" (click)=\"onClick()\">\n    <img src=\"{{image.thumbUrl}}\" [ngClass]=\"{'card-img-top': isBootstrapEnabled }\"  itemprop=\"thumbnail\" alt=\"{{image.description}}\" />\n</a>",
                styles: [""]
            }]
    }], function () { return [{ type: LightboxAdapter }]; }, { clicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], isBootstrapEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding,
            args: ['class.card']
        }], image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GalleryComponent {
    /**
     * @param {?} ngp
     * @param {?} adapter
     */
    constructor(ngp, adapter) {
        this.ngp = ngp;
        this.adapter = adapter;
        this.shareLinkClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.subscriptions = [];
        this.images = [];
        this.isBootstrapEnabled = this.adapter.enableBootstrap4;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.images = (/** @type {?} */ (this.galleryItems.toArray().map((/**
         * @param {?} cp
         * @return {?}
         */
        cp => {
            // listen for clicks;
            this.subscriptions.push(cp.clicked.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => this.onClick(data))));
            return cp.image;
        }))));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach((/**
         * @param {?} sub
         * @return {?}
         */
        sub => sub.unsubscribe()));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onClick(data) {
        this.openPhotoSwipe(data, this.galleryElement);
    }
    /**
     * @private
     * @param {?} img
     * @param {?} galleryDOM
     * @return {?}
     */
    openPhotoSwipe(img, galleryDOM) {
        this.adapter.galleryUID = galleryDOM.nativeElement.getAttribute('data-pswp-uid');
        this.adapter.index = img.id;
        /** @type {?} */
        const PSWP = (/** @type {?} */ (this.ngp.LightboxElement.nativeElement));
        this.pswp = new photoswipe__WEBPACK_IMPORTED_MODULE_0__(PSWP, photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_1__, this.getImagesAsPhotoswipe(), this.adapter);
        /** @type {?} */
        const _this = this;
        this.pswp.listen('shareLinkClick', (/**
         * @param {?} e
         * @param {?} target
         * @return {?}
         */
        function (e, target) {
            _this.shareLinkClick.emit({ e, target });
        }));
        this.pswp.init();
        return false;
    }
    /**
     * @private
     * @return {?}
     */
    getImagesAsPhotoswipe() {
        return this.images.map((/**
         * @param {?} image
         * @return {?}
         */
        image => {
            return {
                src: image.largeUrl,
                w: image.width,
                h: image.height,
                pid: image.id,
                title: image.description,
                author: image.author
            };
        }));
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NgpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](LightboxAdapter)); };
GalleryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["ngp-gallery"]], contentQueries: function GalleryComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, GalleryItemComponent, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.galleryItems = _t);
    } }, viewQuery: function GalleryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.galleryElement = _t.first);
    } }, inputs: { galleryId: "galleryId" }, outputs: { shareLinkClick: "shareLinkClick" }, ngContentSelectors: _c5, decls: 3, vars: 3, consts: [["id", "sampleId", "itemscope", "", "itemtype", "http://schema.org/ImageGallery", 1, "angular2_photoswipe", 3, "ngClass"], ["ngpGallery", ""]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c4, ctx.isBootstrapEnabled));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass], styles: [""] });
/** @nocollapse */
GalleryComponent.ctorParameters = () => [
    { type: NgpService },
    { type: LightboxAdapter }
];
GalleryComponent.propDecorators = {
    galleryElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['ngpGallery', { static: true },] }],
    galleryItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChildren, args: [GalleryItemComponent,] }],
    galleryId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    shareLinkClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
        args: [{
                selector: 'ngp-gallery',
                template: "<div class=\"angular2_photoswipe\" [ngClass]=\"{'card-columns': isBootstrapEnabled }\"  #ngpGallery id=\"sampleId\" itemscope itemtype=\"http://schema.org/ImageGallery\">\n  <ng-content select=\"ngp-gallery-item\"></ng-content>\n</div>",
                styles: [""]
            }]
    }], function () { return [{ type: NgpService }, { type: LightboxAdapter }]; }, { shareLinkClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], galleryElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
            args: ['ngpGallery', { static: true }]
        }], galleryItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChildren,
            args: [GalleryItemComponent]
        }], galleryId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Angular2PhotoswipeModule {
}
Angular2PhotoswipeModule.ɵfac = function Angular2PhotoswipeModule_Factory(t) { return new (t || Angular2PhotoswipeModule)(); };
Angular2PhotoswipeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: Angular2PhotoswipeModule });
Angular2PhotoswipeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Angular2PhotoswipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
                declarations: [Angular2PhotoswipeComponent, LightboxComponent, GalleryComponent, GalleryItemComponent],
                exports: [LightboxComponent, GalleryComponent, GalleryItemComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](Angular2PhotoswipeModule, { declarations: function () { return [Angular2PhotoswipeComponent, LightboxComponent, GalleryComponent, GalleryItemComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]; }, exports: function () { return [LightboxComponent, GalleryComponent, GalleryItemComponent]; } }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular2_photoswipe.js.map

/***/ }),

/***/ 56766:
/*!********************************************************************!*\
  !*** ./node_modules/desandro-matches-selector/matches-selector.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));


/***/ }),

/***/ 82026:
/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( typeof window != 'undefined' ? window : this, function() {

"use strict";

function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));


/***/ }),

/***/ 94060:
/*!**********************************************!*\
  !*** ./node_modules/fizzy-ui-utils/utils.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! desandro-matches-selector/matches-selector */ 56766)
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( matchesSelector ) {
      return factory( window, matchesSelector );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, matchesSelector ) {

'use strict';

var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));


/***/ }),

/***/ 32575:
/*!*******************************************!*\
  !*** ./node_modules/get-size/get-size.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});


/***/ }),

/***/ 96302:
/*!***************************************************!*\
  !*** ./node_modules/imagesloaded/imagesloaded.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! ev-emitter/ev-emitter */ 82026)
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter ) {
      return factory( window, EvEmitter );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})( typeof window !== 'undefined' ? window : this,

// --------------------------  factory -------------------------- //

function factory( window, EvEmitter ) {

'use strict';

var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
function makeArray( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  var queryElem = elem;
  if ( typeof elem == 'string' ) {
    queryElem = document.querySelectorAll( elem );
  }
  // bail if bad element
  if ( !queryElem ) {
    console.error( 'Bad element for imagesLoaded ' + ( queryElem || elem ) );
    return;
  }

  this.elements = makeArray( queryElem );
  this.options = extend( {}, this.options );
  // shift arguments if no options set
  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( this.check.bind( this ) );
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.options = {};

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  // check for non-zero, non-undefined naturalWidth
  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
  return this.img.complete && this.img.naturalWidth;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, callback ) {
    var instance = new ImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

});


/***/ }),

/***/ 98745:
/*!************************************************!*\
  !*** ./node_modules/masonry-layout/masonry.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! outlayer/outlayer */ 22933),
        __webpack_require__(/*! get-size/get-size */ 32575)
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( Outlayer, getSize ) {

'use strict';

// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  var proto = Masonry.prototype;

  proto._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
    this.horizontalColIndex = 0;
  };

  proto.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  proto.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );
    // use horizontal or top column position
    var colPosMethod = this.options.horizontalOrder ?
      '_getHorizontalColPosition' : '_getTopColPosition';
    var colPosition = this[ colPosMethod ]( colSpan, item );
    // position the brick
    var position = {
      x: this.columnWidth * colPosition.col,
      y: colPosition.y
    };
    // apply setHeight to necessary columns
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for ( var i = colPosition.col; i < setMax; i++ ) {
      this.colYs[i] = setHeight;
    }

    return position;
  };

  proto._getTopColPosition = function( colSpan ) {
    var colGroup = this._getTopColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );

    return {
      col: colGroup.indexOf( minimumY ),
      y: minimumY,
    };
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  proto._getTopColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      colGroup[i] = this._getColGroupY( i, colSpan );
    }
    return colGroup;
  };

  proto._getColGroupY = function( col, colSpan ) {
    if ( colSpan < 2 ) {
      return this.colYs[ col ];
    }
    // make an array of colY values for that one group
    var groupColYs = this.colYs.slice( col, col + colSpan );
    // and get the max value of the array
    return Math.max.apply( Math, groupColYs );
  };

  // get column position based on horizontal index. #873
  proto._getHorizontalColPosition = function( colSpan, item ) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    // shift to next row if item can't fit on current row
    col = isOver ? 0 : col;
    // don't let zero-size items take up space
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

    return {
      col: col,
      y: this._getColGroupY( col, colSpan ),
    };
  };

  proto._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  proto._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  proto._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  proto.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));


/***/ }),

/***/ 97669:
/*!***************************************************************************************!*\
  !*** ./node_modules/ngx-crystal-gallery/__ivy_ngcc__/fesm2015/ngx-crystal-gallery.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrystalLightbox": function() { return /* binding */ CrystalLightbox; },
/* harmony export */   "GalleryComponent": function() { return /* binding */ GalleryComponent; },
/* harmony export */   "CrystalGalleryModule": function() { return /* binding */ CrystalGalleryModule; },
/* harmony export */   "LightboxComponent": function() { return /* binding */ LightboxComponent; },
/* harmony export */   "LightboxMobileComponent": function() { return /* binding */ LightboxMobileComponent; },
/* harmony export */   "MasonryLayoutComponent": function() { return /* binding */ MasonryLayoutComponent; },
/* harmony export */   "ɵa": function() { return /* binding */ PinchDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



const _c0 = ["currImageElem"];
const _c1 = ["prevImageElem"];
const _c2 = ["wrapper"];
function LightboxComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.counter);
} }
function LightboxComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.description);
} }
function LightboxComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
} }
function LightboxMobileComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function LightboxMobileComponent_img_4_Template_img_load_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onImageLoaded("prevImage"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cg-hide", !ctx_r1.prevImage.loaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.prevImagePath.full, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function LightboxMobileComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
} }
function LightboxMobileComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
} }
function LightboxMobileComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function LightboxMobileComponent_div_6_Template_img_load_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onImageLoaded("currImage"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LightboxMobileComponent_div_6_div_2_Template, 1, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cg-hide", !ctx_r3.currImage.loaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.currImagePath == null ? null : ctx_r3.currImagePath.full, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.currImage.loaded);
} }
function LightboxMobileComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function LightboxMobileComponent_img_8_Template_img_load_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onImageLoaded("nextImage"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cg-hide", !ctx_r4.nextImage.loaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.nextImagePath.full, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function LightboxMobileComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
} }
const _c3 = ["contentWrapper"];
function GalleryComponent_masonry_layout_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "masonry-layout", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("events", function GalleryComponent_masonry_layout_3_Template_masonry_layout_events_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.handleMasonryLayoutEvents($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max-height", ctx_r1.masonryMaxHeight)("gutter", ctx_r1.masonryGutter)("masonry", ctx_r1.masonryState)("class-name", "cg-image")("images", ctx_r1.images);
} }
const _c4 = ["*"];
function MasonryLayoutComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasonryLayoutComponent_div_0_Template_img_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const image_r1 = restoredCtx.$implicit; const i_r2 = restoredCtx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.clickOnImage(image_r1, i_r2); })("load", function MasonryLayoutComponent_div_0_Template_img_load_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onImageLoaded(_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", image_r1.computedWidth)("height", image_r1.computedHeight)("float", "left")("margin", image_r1.margin)("background", "#eeeeee")("line-height", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.CLASS_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 100, "%")("height", "auto")("opacity", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r1.preview || image_r1.full, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class LightboxComponent {
    /**
     * @param {?} elementRef
     * @param {?} ref
     */
    constructor(elementRef, ref) {
        this.elementRef = elementRef;
        this.ref = ref;
        this.currentImageIndex = 0;
        this.spinnerHeight = 30;
        this.descriptionHeight = 43;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.showLightbox = false;
        this.hideControls = false;
    }
    /**
     * @return {?}
     */
    get images() {
        return this.data.images;
    }
    /**
     * @return {?}
     */
    get config() {
        return this.data.config;
    }
    /**
     * @return {?}
     */
    get index() {
        return this.currentImageIndex;
    }
    /**
     * @return {?}
     */
    get currImagePath() {
        /** @type {?} */
        let image = this.images[this.index];
        if (!image) {
            return false;
        }
        if (image.path) {
            image.full = image.path;
        }
        return image;
    }
    /**
     * @return {?}
     */
    get prevImagePath() {
        return this.images[this.prevIndex];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set prevImagePath(value) {
        this.images[this.prevIndex] = value;
    }
    /**
     * @return {?}
     */
    get isFirst() {
        return this.index === 0;
    }
    /**
     * @return {?}
     */
    get isLast() {
        return this.index === (this.images.length - 1);
    }
    /**
     * @return {?}
     */
    get latestImageIndex() {
        return this.images.length - 1;
    }
    /**
     * @return {?}
     */
    get description() {
        return this.images[this.index].description;
    }
    /**
     * @return {?}
     */
    get counter() {
        return this.currentImageIndex + 1 + '/' + this.images.length;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        switch (event.key) {
            case 'ArrowLeft':
                this.prev();
                break;
            case 'ArrowRight':
                this.next();
                break;
            case 'Escape':
                this.closeLightbox();
                break;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseEnter(event) {
        this.hideControls = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setBackgroundOpacity(this.config.backgroundOpacity);
        this.currentImageIndex = this.config.index;
        //document.body.style.overflow = 'hidden';
        setTimeout(() => {
            this.showLightbox = true;
        }, 30);
        this.setMaxDimensions();
        this.setAnimationDuration();
    }
    /**
     * @return {?}
     */
    closeLightbox() {
        this.showLightbox = false;
        setTimeout(() => {
            this.close.emit('close');
            //document.body.style.overflow = '';
        }, this.config.animationDuration);
    }
    /**
     * @return {?}
     */
    next() {
        if (this.isLast) {
            if (this.config.loop) {
                this.currentImageIndex = 0;
            }
            else {
                return;
            }
        }
        else {
            this.currentImageIndex++;
        }
        this.currImageLoaded = 'loading';
        setTimeout(() => {
            if (this.currImageLoaded === 'loading') {
                this.currImageLoaded = false;
            }
        }, 50);
        this.setMaxDimensions();
    }
    /**
     * @return {?}
     */
    prev() {
        if (this.isFirst) {
            if (this.config.loop) {
                this.currentImageIndex = this.latestImageIndex;
            }
            else {
                return;
            }
        }
        else {
            this.currentImageIndex--;
        }
        setTimeout(() => {
            if (this.currImageLoaded === 'loading') {
                this.currImageLoaded = false;
            }
        }, 50);
        this.setMaxDimensions();
    }
    /**
     * @return {?}
     */
    onImageLoaded() {
        this.currImageLoaded = true;
        this.ref.detectChanges();
    }
    /**
     * @param {?} opacity
     * @return {?}
     */
    setBackgroundOpacity(opacity) {
        this.hostStyleBackgroundColor = 'rgba(0, 0, 0, ' + opacity + ')';
    }
    /**
     * @return {?}
     */
    setMaxDimensions() {
        if (this.description) {
            this.wrapperElem.nativeElement.style.height = 'calc(100% - ' + (this.descriptionHeight * 2) + 'px)';
        }
        else {
            this.wrapperElem.nativeElement.style.height = '';
        }
        this.currImageElem.nativeElement.style.maxHeight = 'calc(' + this.config.lightboxMaxHeight + ')';
        this.currImageElem.nativeElement.style.maxWidth = this.config.lightboxMaxWidth;
    }
    /**
     * @return {?}
     */
    setAnimationDuration() {
        this.hostStyleTransition = 'opacity ' + this.config.animationDuration + 'ms';
    }
}
LightboxComponent.ɵfac = function LightboxComponent_Factory(t) { return new (t || LightboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
LightboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LightboxComponent, selectors: [["crystal-lightbox"]], viewQuery: function LightboxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.currImageElem = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.prevImageElem = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wrapperElem = _t.first);
    } }, hostVars: 8, hostBindings: function LightboxComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function LightboxComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("mouseenter", function LightboxComponent_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.hostStyleBackgroundColor)("transition", ctx.hostStyleTransition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cg-show", ctx.showLightbox)("cg-hide-controls", ctx.hideControls);
    } }, inputs: { data: "data" }, decls: 11, vars: 8, consts: [["class", "cg-counter", 4, "ngIf"], ["class", "cg-description", 4, "ngIf"], [1, "cg-close", 3, "click"], ["class", "cg-spinner", 4, "ngIf"], [1, "cg-wrapper"], ["wrapper", ""], [1, "cg-curr-image", 3, "src", "load"], ["currImageElem", ""], [1, "cg-prev", 3, "hidden", "click"], [1, "cg-next", 3, "hidden", "click"], [1, "cg-counter"], [1, "cg-description"], [1, "cg-spinner"]], template: function LightboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LightboxComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LightboxComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LightboxComponent_Template_div_click_2_listener() { return ctx.closeLightbox(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LightboxComponent_div_4_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function LightboxComponent_Template_img_load_7_listener() { return ctx.onImageLoaded(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LightboxComponent_Template_div_click_9_listener() { return ctx.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LightboxComponent_Template_div_click_10_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config.counter && ctx.images.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currImageLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cg-show", ctx.currImageLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.currImagePath == null ? null : ctx.currImagePath.full, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isFirst && !ctx.config.loop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isLast && !ctx.config.loop);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["._cg-spinner[_ngcontent-%COMP%], ._cg-spinner[_ngcontent-%COMP%]:after{border-radius:50%;width:36px;height:36px}._cg-spinner[_ngcontent-%COMP%]{margin:0 auto;font-size:10px;position:relative;text-indent:-9999em;border-top:4px solid rgba(255,255,255,.2);border-right:4px solid rgba(255,255,255,.2);border-bottom:4px solid rgba(255,255,255,.2);border-left:4px solid #fff;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:.9s linear infinite load8;animation:.9s linear infinite load8}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cg-spinner[_ngcontent-%COMP%], .cg-spinner[_ngcontent-%COMP%]:after, .cg-spinner[_ngcontent-%COMP%]:before{border-radius:50%;width:10px;height:10px;-webkit-animation:1.5s ease-in-out infinite load7;animation:1.5s ease-in-out infinite load7}.cg-spinner[_ngcontent-%COMP%]{color:#fff;font-size:10px;margin:0 auto 20px;position:relative;text-indent:-9999em;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s}.cg-spinner[_ngcontent-%COMP%]:after, .cg-spinner[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:0}.cg-spinner[_ngcontent-%COMP%]:before{left:-3em;-webkit-animation-delay:-.32s;animation-delay:-.32s}.cg-spinner[_ngcontent-%COMP%]:after{left:3em}@-webkit-keyframes load7{0%,100%,80%{box-shadow:0 2.5em 0 -1.3em}40%{box-shadow:0 2.5em 0 0}}@keyframes load7{0%,100%,80%{box-shadow:0 10px 0 -1.3em}40%{box-shadow:0 10px 0 0}}.cg-show[_nghost-%COMP%]{opacity:1}.cg-hide-controls[_nghost-%COMP%]   .cg-close[_ngcontent-%COMP%], .cg-hide-controls[_nghost-%COMP%]   .cg-next[_ngcontent-%COMP%], .cg-hide-controls[_nghost-%COMP%]   .cg-prev[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]{opacity:0;position:fixed;top:0;left:0;width:100%;height:100%;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:opacity .1s cubic-bezier(.645,.045,.355,1);z-index:10000;background-color:rgba(0,0,0,.85)}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{opacity:1;max-width:100%;max-height:100%;box-shadow:0 4px 15px 2px rgba(0,0,0,.35)}[_nghost-%COMP%]   img.cg-curr-image.cg-show[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   img.cg-curr-image[_ngcontent-%COMP%]{opacity:0;z-index:10}[_nghost-%COMP%]   .cg-wrapper.cg-hide[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .cg-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;top:0;left:0;width:100%;height:100%}[_nghost-%COMP%]   .cg-spinner[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;margin-top:-15px;margin-left:-5px}[_nghost-%COMP%]   .cg-counter[_ngcontent-%COMP%]{text-align:left;position:absolute;left:22px;top:13px;font-size:14px;text-shadow:0 0 1px rgba(0,0,0,.65);z-index:30}[_nghost-%COMP%]   .cg-description[_ngcontent-%COMP%]{text-align:center;max-width:calc(100% - 200px);margin:0 auto;font-size:14px;line-height:43px;position:relative;z-index:50}[_nghost-%COMP%]   .cg-close[_ngcontent-%COMP%]{position:absolute;top:0;right:0;padding:13px 22px;font-size:13px;text-transform:uppercase;cursor:pointer;opacity:.5;z-index:30;transition:opacity .1s ease-in-out;text-shadow:0 0 1px rgba(0,0,0,.65)}[_nghost-%COMP%]   .cg-close[_ngcontent-%COMP%]:hover{opacity:1}[_nghost-%COMP%]   .cg-next[_ngcontent-%COMP%], [_nghost-%COMP%]   .cg-prev[_ngcontent-%COMP%]{width:40%;height:100%;position:absolute;top:0;cursor:pointer;opacity:.5;z-index:20;transition:opacity .1s ease-in-out;-webkit-tap-highlight-color:rgba(255,255,255,0)}[_nghost-%COMP%]   .cg-next[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .cg-prev[_ngcontent-%COMP%]:hover{opacity:1}[_nghost-%COMP%]   .cg-prev[_ngcontent-%COMP%]{left:0;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAiCAYAAABbXymAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMzMTZCQzFERDgzMTExRTc5QUYxQTUxRDI5MkM5ODZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMzMTZCQzFFRDgzMTExRTc5QUYxQTUxRDI5MkM5ODZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzMxNkJDMUJEODMxMTFFNzlBRjFBNTFEMjkyQzk4NkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzMxNkJDMUNEODMxMTFFNzlBRjFBNTFEMjkyQzk4NkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7VrwZKAAAClElEQVR42qzWSY8SQRgGYLoVHPeTXlwCiIwMArJGtiABNep4IGZi4oEfMJooLjePrnFGf5yJS0hYmq2b/aBxiQ6+lRRJdaUZq5vp5E2TLnioVFd9VZLN+iUxIdeMiW2fRVCmvz2DpJBVCk6X6SVBHQRLpVKb7Xb782g0Usrl8jM8W0P20+9YQn3JZPIhwN6MXoPBoI3nG8iKGZhF14A+AqrOmKtWq31F213kkOgQ69B0Ol0BqrFot9vV/H7/c7RfEoVZ1G+EdjqdvtfrfYn2K8gJkaHQodlstjIej/ssihdH0Ddov4acQo7QlycJo5PJhEc1j8fzmqJk2h1D7Lv1lkUv5nK5xzzaarWMUIcwms/nCTrgUbfbTdCrVtAAQafTqQ5VFEVdCi0UCk/Q0yGLNptN1el0vqLoaRHUxqPoKY/2KFo0g0r0ba4Wi8WnQEcs2mg0VAPULrJsZTqpNzDZ6yxar9dVl8tFVtR10SnFohJdgnZYuh9IkjSTZfknPn5DviO/kL/IjkgtIOhhJJ7JZF5gdU24hdDG6qqg/QJywEzlmg/FSTLhE4nE9nA4nHJFRvH5fJto94gOBfvyjtJxXI/H4x+A63re6/UUVDCCnzeDz6fbceQscjsWi703wFsM7hDBJQN8PRqNbmNn0OGapu0JfoviYx4PBAL30e5dCg+Hw0Z4e8/wfr/P451QKPRgaRzIFjDdksefsbjdKn5zER6JRMiwuP+3Ne2KB4PBLVVVR1xd+YK2O2bOFYvwd8CHbK/x/J6Zc8Ui/AZmxdtqtdrAwlFLpRLZrS/PYcnkEUuiY7hCS+g5sovT55+Qj7QS/jYD8zjp/UF6t9GS+oPed8zCLC5zJ0tSo//Q+8wKLHTw/ifAAMQVS4vHZR2VAAAAAElFTkSuQmCC) center left 22px no-repeat}[_nghost-%COMP%]   .cg-next[_ngcontent-%COMP%]{right:0;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAiCAYAAABbXymAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEyNDE3MDE1RDgzMTExRTc5NjM4QTIzQzI2Rjc2Qjg2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEyNDE3MDE2RDgzMTExRTc5NjM4QTIzQzI2Rjc2Qjg2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTI0MTcwMTNEODMxMTFFNzk2MzhBMjNDMjZGNzZCODYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTI0MTcwMTREODMxMTFFNzk2MzhBMjNDMjZGNzZCODYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7zv5BKAAACl0lEQVR42rTW224SQRwGcHZb8FT1Sm88BJCiFAE5JpyCBNRE8coYEy94AGqi9XDXS0+JVh/CB/EhiFET5LjAclgWjaa1aazfJDM6u6LuLjrJl2124cd0duY/I9h+NoELabtcTLcFCon0bw+SRE4h28hn2xyNoIvISrlcfqAoSluSpLepVKqCe6cRB/2MYAXei1wfjUbSLm34gX4ymbyN+z6rOBmC/ciNer3+fpdrwGXgd8h/YwVn8Dm/37/e6/UGOnyQTqfXrOBsKI4g571e76Nutzv8De43gwv05S0hx5CLwJ/iBWrwyWQyzGazpnHyITtyCDlBcI/H8wS4ZlhUVbWMO/R4p9P5Bc/lcnfx/Ow8+AW32z0LH+Xz+X+Dt9ttmcen0ynDA1bx4wR3Op2PW62WrOv5uFAo3JsXL1K8r+v5LNxmZrb8wJvNpn5YlGKxeJ/WFruZBcRPxUsul2u90WhocCyqBqk3dLGJiwbgb/T6FflCSqkoiluCIGjqNGzWgQUz9YR8aQ9yBqtyDQtH0q1KNZPJPMTzOHKA4oaHwuPz+SooUm0eHY/H00QisUEWFHKUDYVRdBmVr9Lv9/WoGo/HX+J5iY7/QSMvj003hnb0aCwWe4HnV5GTyGEj002DDgYDDYqdRo1Goxu0p3pU+BvqDQQCqzPQCUWvzINKejQcDltHQ6HQLaBdHh0Oh5ZRO0OBaFD8iIL7z82ibGtyRyKR1T+gl82g/GZ6Dev/HY/KsqwEg0FLKL/93+R7C3QM9Nk8KDtiOWq12jb2s2XS01Kp9Kparb7G/TfIR2QT2TF6UBS42bBEi/UK/SIBPyCfkC0zKA+z6rWPXm30tLlJr6ZQ/ZmYDYnI1eEdejV9Thb+18H7uwADAOG/Wcm4x+knAAAAAElFTkSuQmCC) center right 22px no-repeat}"] });
/** @nocollapse */
LightboxComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
LightboxComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    showLightbox: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.cg-show',] }],
    hideControls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.cg-hide-controls',] }],
    hostStyleTransition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['style.transition',] }],
    hostStyleBackgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['style.backgroundColor',] }],
    currImageElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['currImageElem',] }],
    prevImageElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['prevImageElem',] }],
    wrapperElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['wrapper',] }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['window:keydown', ['$event'],] }],
    onMouseEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ["mouseenter", ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LightboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'crystal-lightbox',
                template: `<div class="cg-counter" *ngIf="config.counter && images.length > 1">{{counter}}</div>
<div class="cg-description" *ngIf="description">{{description}}</div>

<div 
	class="cg-close" 
	(click)="closeLightbox()">Close</div>

<div 
	class="cg-spinner" 
	 *ngIf="!currImageLoaded"></div>

<div class="cg-wrapper" #wrapper>
	<img 
		class="cg-curr-image" 
		#currImageElem 
		[src]="currImagePath?.full" 
		[class.cg-show]="currImageLoaded" 
		(load)="onImageLoaded()" />
</div>

<div 
	class="cg-prev" 
	[hidden]="isFirst && !config.loop" 
	(click)="prev()"></div>
<div 
	class="cg-next" 
	[hidden]="isLast && !config.loop" 
	(click)="next()"></div>`,
                styles: [`._cg-spinner,._cg-spinner:after{border-radius:50%;width:36px;height:36px}._cg-spinner{margin:0 auto;font-size:10px;position:relative;text-indent:-9999em;border-top:4px solid rgba(255,255,255,.2);border-right:4px solid rgba(255,255,255,.2);border-bottom:4px solid rgba(255,255,255,.2);border-left:4px solid #fff;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:.9s linear infinite load8;animation:.9s linear infinite load8}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cg-spinner,.cg-spinner:after,.cg-spinner:before{border-radius:50%;width:10px;height:10px;-webkit-animation:1.5s ease-in-out infinite load7;animation:1.5s ease-in-out infinite load7}.cg-spinner{color:#fff;font-size:10px;margin:0 auto 20px;position:relative;text-indent:-9999em;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s}.cg-spinner:after,.cg-spinner:before{content:"";position:absolute;top:0}.cg-spinner:before{left:-3em;-webkit-animation-delay:-.32s;animation-delay:-.32s}.cg-spinner:after{left:3em}@-webkit-keyframes load7{0%,100%,80%{box-shadow:0 2.5em 0 -1.3em}40%{box-shadow:0 2.5em 0 0}}@keyframes load7{0%,100%,80%{box-shadow:0 10px 0 -1.3em}40%{box-shadow:0 10px 0 0}}:host(.cg-show){opacity:1}:host(.cg-hide-controls) .cg-close,:host(.cg-hide-controls) .cg-next,:host(.cg-hide-controls) .cg-prev{opacity:0}:host{opacity:0;position:fixed;top:0;left:0;width:100%;height:100%;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:opacity .1s cubic-bezier(.645,.045,.355,1);z-index:10000;background-color:rgba(0,0,0,.85)}:host img{opacity:1;max-width:100%;max-height:100%;box-shadow:0 4px 15px 2px rgba(0,0,0,.35)}:host img.cg-curr-image.cg-show{opacity:1}:host img.cg-curr-image{opacity:0;z-index:10}:host .cg-wrapper.cg-hide{display:none}:host .cg-wrapper{display:flex;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;top:0;left:0;width:100%;height:100%}:host .cg-spinner{position:absolute;top:50%;left:50%;margin-top:-15px;margin-left:-5px}:host .cg-counter{text-align:left;position:absolute;left:22px;top:13px;font-size:14px;text-shadow:0 0 1px rgba(0,0,0,.65);z-index:30}:host .cg-description{text-align:center;max-width:calc(100% - 200px);margin:0 auto;font-size:14px;line-height:43px;position:relative;z-index:50}:host .cg-close{position:absolute;top:0;right:0;padding:13px 22px;font-size:13px;text-transform:uppercase;cursor:pointer;opacity:.5;z-index:30;transition:opacity .1s ease-in-out;text-shadow:0 0 1px rgba(0,0,0,.65)}:host .cg-close:hover{opacity:1}:host .cg-next,:host .cg-prev{width:40%;height:100%;position:absolute;top:0;cursor:pointer;opacity:.5;z-index:20;transition:opacity .1s ease-in-out;-webkit-tap-highlight-color:rgba(255,255,255,0)}:host .cg-next:hover,:host .cg-prev:hover{opacity:1}:host .cg-prev{left:0;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAiCAYAAABbXymAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMzMTZCQzFERDgzMTExRTc5QUYxQTUxRDI5MkM5ODZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMzMTZCQzFFRDgzMTExRTc5QUYxQTUxRDI5MkM5ODZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzMxNkJDMUJEODMxMTFFNzlBRjFBNTFEMjkyQzk4NkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzMxNkJDMUNEODMxMTFFNzlBRjFBNTFEMjkyQzk4NkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7VrwZKAAAClElEQVR42qzWSY8SQRgGYLoVHPeTXlwCiIwMArJGtiABNep4IGZi4oEfMJooLjePrnFGf5yJS0hYmq2b/aBxiQ6+lRRJdaUZq5vp5E2TLnioVFd9VZLN+iUxIdeMiW2fRVCmvz2DpJBVCk6X6SVBHQRLpVKb7Xb782g0Usrl8jM8W0P20+9YQn3JZPIhwN6MXoPBoI3nG8iKGZhF14A+AqrOmKtWq31F213kkOgQ69B0Ol0BqrFot9vV/H7/c7RfEoVZ1G+EdjqdvtfrfYn2K8gJkaHQodlstjIej/ssihdH0Ddov4acQo7QlycJo5PJhEc1j8fzmqJk2h1D7Lv1lkUv5nK5xzzaarWMUIcwms/nCTrgUbfbTdCrVtAAQafTqQ5VFEVdCi0UCk/Q0yGLNptN1el0vqLoaRHUxqPoKY/2KFo0g0r0ba4Wi8WnQEcs2mg0VAPULrJsZTqpNzDZ6yxar9dVl8tFVtR10SnFohJdgnZYuh9IkjSTZfknPn5DviO/kL/IjkgtIOhhJJ7JZF5gdU24hdDG6qqg/QJywEzlmg/FSTLhE4nE9nA4nHJFRvH5fJto94gOBfvyjtJxXI/H4x+A63re6/UUVDCCnzeDz6fbceQscjsWi703wFsM7hDBJQN8PRqNbmNn0OGapu0JfoviYx4PBAL30e5dCg+Hw0Z4e8/wfr/P451QKPRgaRzIFjDdksefsbjdKn5zER6JRMiwuP+3Ne2KB4PBLVVVR1xd+YK2O2bOFYvwd8CHbK/x/J6Zc8Ui/AZmxdtqtdrAwlFLpRLZrS/PYcnkEUuiY7hCS+g5sovT55+Qj7QS/jYD8zjp/UF6t9GS+oPed8zCLC5zJ0tSo//Q+8wKLHTw/ifAAMQVS4vHZR2VAAAAAElFTkSuQmCC) center left 22px no-repeat}:host .cg-next{right:0;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAiCAYAAABbXymAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEyNDE3MDE1RDgzMTExRTc5NjM4QTIzQzI2Rjc2Qjg2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEyNDE3MDE2RDgzMTExRTc5NjM4QTIzQzI2Rjc2Qjg2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTI0MTcwMTNEODMxMTFFNzk2MzhBMjNDMjZGNzZCODYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTI0MTcwMTREODMxMTFFNzk2MzhBMjNDMjZGNzZCODYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7zv5BKAAACl0lEQVR42rTW224SQRwGcHZb8FT1Sm88BJCiFAE5JpyCBNRE8coYEy94AGqi9XDXS0+JVh/CB/EhiFET5LjAclgWjaa1aazfJDM6u6LuLjrJl2124cd0duY/I9h+NoELabtcTLcFCon0bw+SRE4h28hn2xyNoIvISrlcfqAoSluSpLepVKqCe6cRB/2MYAXei1wfjUbSLm34gX4ymbyN+z6rOBmC/ciNer3+fpdrwGXgd8h/YwVn8Dm/37/e6/UGOnyQTqfXrOBsKI4g571e76Nutzv8De43gwv05S0hx5CLwJ/iBWrwyWQyzGazpnHyITtyCDlBcI/H8wS4ZlhUVbWMO/R4p9P5Bc/lcnfx/Ow8+AW32z0LH+Xz+X+Dt9ttmcen0ynDA1bx4wR3Op2PW62WrOv5uFAo3JsXL1K8r+v5LNxmZrb8wJvNpn5YlGKxeJ/WFruZBcRPxUsul2u90WhocCyqBqk3dLGJiwbgb/T6FflCSqkoiluCIGjqNGzWgQUz9YR8aQ9yBqtyDQtH0q1KNZPJPMTzOHKA4oaHwuPz+SooUm0eHY/H00QisUEWFHKUDYVRdBmVr9Lv9/WoGo/HX+J5iY7/QSMvj003hnb0aCwWe4HnV5GTyGEj002DDgYDDYqdRo1Goxu0p3pU+BvqDQQCqzPQCUWvzINKejQcDltHQ6HQLaBdHh0Oh5ZRO0OBaFD8iIL7z82ibGtyRyKR1T+gl82g/GZ6Dev/HY/KsqwEg0FLKL/93+R7C3QM9Nk8KDtiOWq12jb2s2XS01Kp9Kparb7G/TfIR2QT2TF6UBS42bBEi/UK/SIBPyCfkC0zKA+z6rWPXm30tLlJr6ZQ/ZmYDYnI1eEdejV9Thb+18H7uwADAOG/Wcm4x+knAAAAAElFTkSuQmCC) center right 22px no-repeat}`]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, { showLightbox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.cg-show']
        }], hideControls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.cg-hide-controls']
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['window:keydown', ['$event']]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ["mouseenter", ['$event']]
        }], hostStyleBackgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.backgroundColor']
        }], hostStyleTransition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.transition']
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], currImageElem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['currImageElem']
        }], prevImageElem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['prevImageElem']
        }], wrapperElem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['wrapper']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LightboxMobileComponent {
    /**
     * @param {?} elementRef
     * @param {?} ref
     */
    constructor(elementRef, ref) {
        this.elementRef = elementRef;
        this.ref = ref;
        this.currImage = {
            show: false,
            loaded: false,
            index: 0
        };
        this.prevImage = {
            loaded: false
        };
        this.nextImage = {
            loaded: false
        };
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.lightboxShown = false;
    }
    /**
     * @return {?}
     */
    get images() {
        return this.data.images;
    }
    /**
     * @return {?}
     */
    get config() {
        return this.data.config;
    }
    /**
     * @return {?}
     */
    get index() {
        return this.currImage.index;
    }
    /**
     * @return {?}
     */
    get currImagePath() {
        /** @type {?} */
        let image = this.images[this.index];
        if (!image) {
            return false;
        }
        if (image.path) {
            image.full = image.path;
        }
        return image;
    }
    /**
     * @return {?}
     */
    get prevImagePath() {
        if (this.prevIndex < 0 && this.config.loop) {
            this.prevIndex = this.latestImageIndex;
        }
        /** @type {?} */
        let image = this.images[this.prevIndex];
        if (image && image.path) {
            image.full = image.path;
        }
        return image;
    }
    /**
     * @return {?}
     */
    get nextImagePath() {
        /** @type {?} */
        let image = this.images[this.nextIndex];
        if (image && image.path) {
            image.full = image.path;
        }
        return image;
    }
    /**
     * @return {?}
     */
    get isFirst() {
        if (this.config.loop) {
            return false;
        }
        else {
            return this.index === 0;
        }
    }
    /**
     * @return {?}
     */
    get isLast() {
        if (this.config.loop) {
            return false;
        }
        else {
            return this.index === this.latestImageIndex;
        }
    }
    /**
     * @return {?}
     */
    get latestImageIndex() {
        return this.images.length - 1;
    }
    /**
     * @return {?}
     */
    get isLandscape() {
        return window.innerWidth > window.innerHeight;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onWindowResize(event) {
        this.landscapeMode = this.isLandscape;
        this.ref.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.currImage.index = this.config.index;
        this.prevIndex = this.currImage.index - 1;
        this.nextIndex = this.currImage.index + 1;
        this.showLightbox();
    }
    /**
     * @return {?}
     */
    showLightbox() {
        this.currImage.show = true;
        setTimeout(() => {
            this.lightboxShown = true;
        }, 30);
    }
    /**
     * @return {?}
     */
    closeLightbox() {
        this.lightboxShown = false;
        setTimeout(() => {
            this.close.emit(true);
        }, 200);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    slide(event) {
        if (event === 'next') {
            if (this.isLast) {
                return;
            }
            else {
                setTimeout(() => {
                    this.currImage.index++;
                }, 200);
            }
            if (this.index === this.latestImageIndex) {
                setTimeout(() => {
                    this.currImage.index = 0;
                }, 200);
            }
            setTimeout(() => {
                this.afterSlide('next');
            }, 300);
        }
        if (event === 'prev') {
            if (this.isFirst) {
                return;
            }
            else {
                setTimeout(() => {
                    this.currImage.index--;
                }, 200);
            }
            if (this.index === 0) {
                setTimeout(() => {
                    this.currImage.index = this.latestImageIndex;
                }, 200);
            }
            setTimeout(() => {
                this.afterSlide('prev');
            }, 300);
        }
    }
    /**
     * @param {?} eventType
     * @return {?}
     */
    afterSlide(eventType) {
        this.currImage.show = true;
        if (this.index === this.latestImageIndex && this.config.loop) {
            this.nextIndex = 0;
        }
        else {
            this.nextIndex = this.index + 1;
        }
        if (this.index === 0 && this.config.loop) {
            this.prevIndex = this.latestImageIndex;
        }
        else {
            this.prevIndex = this.index - 1;
        }
        if (eventType === 'prev') {
            if (!this.prevImage.loaded) {
                this.currImage.loaded = false;
                this.prevImage.loaded = false;
            }
            if (!this.currImage.loaded) {
                this.nextImage.loaded = false;
            }
        }
        if (eventType === 'next') {
            if (!this.nextImage.loaded) {
                this.currImage.loaded = false;
                this.nextImage.loaded = false;
            }
            if (!this.currImage.loaded) {
                this.prevImage.loaded = false;
            }
        }
        this.defaultWrapperPosition();
        this.ref.detectChanges();
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    onImageLoaded(elem) {
        this[elem].loaded = true;
        this.ref.detectChanges();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handlePinchEvents($event) {
        if ($event === 'prev') {
            this.slide('prev');
        }
        if ($event === 'next') {
            this.slide('next');
        }
    }
    /**
     * @return {?}
     */
    defaultWrapperPosition() {
        /** @type {?} */
        let elem = this.wrapperEl.nativeElement;
        elem.style.transition = 'all 0ms';
        elem.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
        elem.style.webkitTransform = 'matrix(1, 0, 0, 1, 0, 0)';
    }
}
LightboxMobileComponent.ɵfac = function LightboxMobileComponent_Factory(t) { return new (t || LightboxMobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
LightboxMobileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LightboxMobileComponent, selectors: [["crystal-lightbox-mobile"]], viewQuery: function LightboxMobileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wrapperEl = _t.first);
    } }, hostVars: 2, hostBindings: function LightboxMobileComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function LightboxMobileComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cg-show", ctx.lightboxShown);
    } }, inputs: { data: "data" }, decls: 10, vars: 9, consts: [[1, "cg-back", 3, "click"], ["pinch", "", 1, "cg-wrapper", 3, "isLast", "isFirst", "events"], ["wrapper", ""], [1, "cg-image-wrap", "cg-prev-image"], [3, "src", "cg-hide", "load", 4, "ngIf"], ["class", "cg-spinner", 4, "ngIf"], ["class", "cg-image-wrap cg-curr-image", 4, "ngIf"], [1, "cg-image-wrap", "cg-next-image"], [3, "src", "load"], [1, "cg-spinner"], [1, "cg-image-wrap", "cg-curr-image"]], template: function LightboxMobileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LightboxMobileComponent_Template_div_click_0_listener() { return ctx.closeLightbox(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("events", function LightboxMobileComponent_Template_div_events_1_listener($event) { return ctx.handlePinchEvents($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LightboxMobileComponent_img_4_Template, 1, 3, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LightboxMobileComponent_div_5_Template, 1, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LightboxMobileComponent_div_6_Template, 3, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LightboxMobileComponent_img_8_Template, 1, 3, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LightboxMobileComponent_div_9_Template, 1, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cg-landscape", ctx.landscapeMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isLast", ctx.isLast)("isFirst", ctx.isFirst);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.prevImagePath);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.prevImage.loaded && ctx.prevImagePath);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currImage.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nextImagePath);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nextImage.loaded && ctx.nextImagePath);
    } }, directives: function () { return [PinchDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf]; }, styles: ["._cg-spinner[_ngcontent-%COMP%], ._cg-spinner[_ngcontent-%COMP%]:after{border-radius:50%;width:36px;height:36px}._cg-spinner[_ngcontent-%COMP%]{margin:0 auto;font-size:10px;position:relative;text-indent:-9999em;border-top:4px solid rgba(255,255,255,.2);border-right:4px solid rgba(255,255,255,.2);border-bottom:4px solid rgba(255,255,255,.2);border-left:4px solid #fff;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:.9s linear infinite load8;animation:.9s linear infinite load8}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cg-spinner[_ngcontent-%COMP%], .cg-spinner[_ngcontent-%COMP%]:after, .cg-spinner[_ngcontent-%COMP%]:before{border-radius:50%;width:10px;height:10px;-webkit-animation:1.5s ease-in-out infinite load7;animation:1.5s ease-in-out infinite load7}.cg-spinner[_ngcontent-%COMP%]{color:#fff;font-size:10px;margin:0 auto 20px;position:relative;text-indent:-9999em;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s}.cg-spinner[_ngcontent-%COMP%]:after, .cg-spinner[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:0}.cg-spinner[_ngcontent-%COMP%]:before{left:-3em;-webkit-animation-delay:-.32s;animation-delay:-.32s}.cg-spinner[_ngcontent-%COMP%]:after{left:3em}@-webkit-keyframes load7{0%,100%,80%{box-shadow:0 2.5em 0 -1.3em}40%{box-shadow:0 2.5em 0 0}}@keyframes load7{0%,100%,80%{box-shadow:0 10px 0 -1.3em}40%{box-shadow:0 10px 0 0}}.cg-show[_nghost-%COMP%]{opacity:1}.cg-hide-controls[_nghost-%COMP%]   .cg-close[_ngcontent-%COMP%], .cg-hide-controls[_nghost-%COMP%]   .cg-next[_ngcontent-%COMP%], .cg-hide-controls[_nghost-%COMP%]   .cg-prev[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]{opacity:0;position:fixed;top:0;left:0;width:100%;height:100%;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:opacity .2s cubic-bezier(.645,.045,.355,1);z-index:10000;background-color:#000}[_nghost-%COMP%]   .cg-back[_ngcontent-%COMP%]{background:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2210px%22 height%3D%2216px%22 viewBox%3D%220 0 10 16%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A sketchtool 40.2 (33826) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3E11A73872-5EBF-46F6-B7C5-142D47A33339%3C%2Ftitle%3E    %3Cdesc%3ECreated with sketchtool.%3C%2Fdesc%3E    %3Cdefs%3E%3C%2Fdefs%3E    %3Cg id%3D%22Interface-1280-x-800%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%22Lot_viewpage_open%22 transform%3D%22translate(-111.000000%2C -296.000000)%22 fill%3D%22%23FFFFFF%22%3E            %3Cg id%3D%22arrows-16px-1_minimal-left%22 transform%3D%22translate(111.000000%2C 296.000000)%22%3E                %3Cpolygon id%3D%22Shape%22 points%3D%228.1 15.7 0.4 8 8.1 0.3 9.6 1.7 3.3 8 9.6 14.3%22%3E%3C%2Fpolygon%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\") center/12px no-repeat;width:40px;height:40px;opacity:.9;position:fixed;top:0;left:0;z-index:1000}[_nghost-%COMP%]   .cg-wrapper.cg-landscape[_ngcontent-%COMP%]   .cg-image-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]   .cg-wrapper[_ngcontent-%COMP%]{transition:none;width:100%;height:100%;display:block}[_nghost-%COMP%]   .cg-wrapper[_ngcontent-%COMP%]   .cg-image-wrap.cg-prev-image[_ngcontent-%COMP%]{-webkit-transform:translate3d(calc(-100% - 8px),0,0);transform:translate3d(calc(-100% - 8px),0,0)}[_nghost-%COMP%]   .cg-wrapper[_ngcontent-%COMP%]   .cg-image-wrap.cg-next-image[_ngcontent-%COMP%]{-webkit-transform:translate3d(calc(100% + 8px),0,0);transform:translate3d(calc(100% + 8px),0,0)}[_nghost-%COMP%]   .cg-wrapper[_ngcontent-%COMP%]   .cg-image-wrap[_ngcontent-%COMP%]{width:100%;height:100%;text-align:center;position:absolute;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .cg-wrapper[_ngcontent-%COMP%]   .cg-image-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:100%;width:auto;height:auto;position:relative}[_nghost-%COMP%]   .cg-wrapper[_ngcontent-%COMP%]   .cg-image-wrap[_ngcontent-%COMP%]   img.cg-hide[_ngcontent-%COMP%]{display:none}"] });
/** @nocollapse */
LightboxMobileComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
LightboxMobileComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    wrapperEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['wrapper',] }],
    lightboxShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.cg-show',] }],
    onWindowResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['window:resize', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LightboxMobileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'crystal-lightbox-mobile',
                template: `<div class="cg-back" (click)="closeLightbox()"></div>

<div 
	class="cg-wrapper" 
	[class.cg-landscape]="landscapeMode"
	pinch [isLast]="isLast" [isFirst]="isFirst" (events)="handlePinchEvents($event)"
	#wrapper>
	<div class="cg-image-wrap cg-prev-image">
		<img 
			*ngIf="prevImagePath"
			[src]="prevImagePath.full" 
			[class.cg-hide]="!prevImage.loaded"
			(load)="onImageLoaded('prevImage')"
		/>
		<div class="cg-spinner" *ngIf="!prevImage.loaded && prevImagePath"></div>
	</div>

	<div class="cg-image-wrap cg-curr-image" *ngIf="currImage.show">
		<img 
			[src]="currImagePath?.full" 
			[class.cg-hide]="!currImage.loaded" 
			(load)="onImageLoaded('currImage')"
		/>
		<div class="cg-spinner" *ngIf="!currImage.loaded"></div>
	</div>
	
	<div class="cg-image-wrap cg-next-image">
		<img 
			*ngIf="nextImagePath"
			[src]="nextImagePath.full" 
			[class.cg-hide]="!nextImage.loaded" 
			(load)="onImageLoaded('nextImage')"
		/>
		<div class="cg-spinner" *ngIf="!nextImage.loaded && nextImagePath"></div>
	</div>
</div>`,
                styles: [`._cg-spinner,._cg-spinner:after{border-radius:50%;width:36px;height:36px}._cg-spinner{margin:0 auto;font-size:10px;position:relative;text-indent:-9999em;border-top:4px solid rgba(255,255,255,.2);border-right:4px solid rgba(255,255,255,.2);border-bottom:4px solid rgba(255,255,255,.2);border-left:4px solid #fff;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:.9s linear infinite load8;animation:.9s linear infinite load8}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cg-spinner,.cg-spinner:after,.cg-spinner:before{border-radius:50%;width:10px;height:10px;-webkit-animation:1.5s ease-in-out infinite load7;animation:1.5s ease-in-out infinite load7}.cg-spinner{color:#fff;font-size:10px;margin:0 auto 20px;position:relative;text-indent:-9999em;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s}.cg-spinner:after,.cg-spinner:before{content:"";position:absolute;top:0}.cg-spinner:before{left:-3em;-webkit-animation-delay:-.32s;animation-delay:-.32s}.cg-spinner:after{left:3em}@-webkit-keyframes load7{0%,100%,80%{box-shadow:0 2.5em 0 -1.3em}40%{box-shadow:0 2.5em 0 0}}@keyframes load7{0%,100%,80%{box-shadow:0 10px 0 -1.3em}40%{box-shadow:0 10px 0 0}}:host(.cg-show){opacity:1}:host(.cg-hide-controls) .cg-close,:host(.cg-hide-controls) .cg-next,:host(.cg-hide-controls) .cg-prev{opacity:0}:host{opacity:0;position:fixed;top:0;left:0;width:100%;height:100%;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:opacity .2s cubic-bezier(.645,.045,.355,1);z-index:10000;background-color:#000}:host .cg-back{background:url("data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2210px%22 height%3D%2216px%22 viewBox%3D%220 0 10 16%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A sketchtool 40.2 (33826) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3E11A73872-5EBF-46F6-B7C5-142D47A33339%3C%2Ftitle%3E    %3Cdesc%3ECreated with sketchtool.%3C%2Fdesc%3E    %3Cdefs%3E%3C%2Fdefs%3E    %3Cg id%3D%22Interface-1280-x-800%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%22Lot_viewpage_open%22 transform%3D%22translate(-111.000000%2C -296.000000)%22 fill%3D%22%23FFFFFF%22%3E            %3Cg id%3D%22arrows-16px-1_minimal-left%22 transform%3D%22translate(111.000000%2C 296.000000)%22%3E                %3Cpolygon id%3D%22Shape%22 points%3D%228.1 15.7 0.4 8 8.1 0.3 9.6 1.7 3.3 8 9.6 14.3%22%3E%3C%2Fpolygon%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E") center/12px no-repeat;width:40px;height:40px;opacity:.9;position:fixed;top:0;left:0;z-index:1000}:host .cg-wrapper.cg-landscape .cg-image-wrap img{height:100%}:host .cg-wrapper{transition:none;width:100%;height:100%;display:block}:host .cg-wrapper .cg-image-wrap.cg-prev-image{-webkit-transform:translate3d(calc(-100% - 8px),0,0);transform:translate3d(calc(-100% - 8px),0,0)}:host .cg-wrapper .cg-image-wrap.cg-next-image{-webkit-transform:translate3d(calc(100% + 8px),0,0);transform:translate3d(calc(100% + 8px),0,0)}:host .cg-wrapper .cg-image-wrap{width:100%;height:100%;text-align:center;position:absolute;display:flex;align-items:center;justify-content:center}:host .cg-wrapper .cg-image-wrap img{max-width:100%;max-height:100%;width:auto;height:auto;position:relative}:host .cg-wrapper .cg-image-wrap img.cg-hide{display:none}`]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, { lightboxShown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.cg-show']
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['window:resize', ['$event']]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], wrapperEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['wrapper']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultConfig = {
    masonry: true,
    masonryMaxHeight: 200,
    masonryGutter: 4,
    loop: false,
    index: 0,
    backgroundOpacity: 0.85,
    counter: false,
    lightboxMaxHeight: "100%",
    lightboxMaxWidth: "100%",
    animationDuration: 100
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CrystalLightbox {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} appRef
     * @param {?} injector
     */
    constructor(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    /**
     * @return {?}
     */
    get isMobile() {
        /** @type {?} */
        var check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true; })(navigator.userAgent || navigator.vendor);
        return check;
    }
    ;
    /**
     * @param {?} component
     * @param {?} data
     * @return {?}
     */
    appendComponentToBody(component, data) {
        /** @type {?} */
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        (/** @type {?} */ (componentRef.instance)).data = data;
        this.appRef.attachView(componentRef.hostView);
        /** @type {?} */
        const domElem = /** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]);
        document.body.appendChild(domElem);
        (/** @type {?} */ (componentRef.instance)).close.subscribe(() => {
            this.appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        });
    }
    /**
     * @param {?} images
     * @param {?=} config
     * @return {?}
     */
    open(images, config = {}) {
        config = this.applyConfigDefaults(defaultConfig, config);
        /** @type {?} */
        let data = {
            images,
            config
        };
        /** @type {?} */
        let component = this.getLightboxComponent();
        this.appendComponentToBody(component, data);
    }
    /**
     * @return {?}
     */
    getLightboxComponent() {
        return !this.isMobile ? LightboxComponent : LightboxMobileComponent;
    }
    /**
     * @param {?} defaultConfig
     * @param {?} config
     * @return {?}
     */
    applyConfigDefaults(defaultConfig$$1, config) {
        if (!config.index) {
            config.index = 0;
        }
        return Object.assign(defaultConfig$$1, config);
    }
}
CrystalLightbox.ɵfac = function CrystalLightbox_Factory(t) { return new (t || CrystalLightbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector)); };
CrystalLightbox.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CrystalLightbox, factory: CrystalLightbox.ɵfac });
/** @nocollapse */
CrystalLightbox.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrystalLightbox, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class GalleryComponent {
    /**
     * @param {?} lightbox
     * @param {?} elementRef
     */
    constructor(lightbox, elementRef) {
        this.lightbox = lightbox;
        this.elementRef = elementRef;
        this.config = {};
    }
    /**
     * @return {?}
     */
    get isNgContent() {
        return this.contentWrapper.nativeElement.children.length > 0;
    }
    /**
     * @return {?}
     */
    get masonryState() {
        return this.config.masonry;
    }
    /**
     * @return {?}
     */
    get masonryMaxHeight() {
        return this.config.masonryMaxHeight;
    }
    /**
     * @return {?}
     */
    get masonryGutter() {
        return this.config.masonryGutter;
    }
    /**
     * @param {?} images
     * @param {?} i
     * @return {?}
     */
    showLightbox(images, i) {
        this.config.index = i;
        this.lightbox.open(images, this.config);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleMasonryLayoutEvents(event) {
        this.showLightbox(this.images, event.index);
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CrystalLightbox), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
GalleryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["crystal-gallery"]], viewQuery: function GalleryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentWrapper = _t.first);
    } }, inputs: { config: "config", images: "images" }, ngContentSelectors: _c4, decls: 4, vars: 2, consts: [[3, "hidden"], ["contentWrapper", ""], ["class", "cg-wrapper", 3, "max-height", "gutter", "masonry", "class-name", "images", "events", 4, "ngIf"], [1, "cg-wrapper", 3, "max-height", "gutter", "masonry", "class-name", "images", "events"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GalleryComponent_masonry_layout_3_Template, 1, 5, "masonry-layout", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isNgContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isNgContent);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, MasonryLayoutComponent]; }, styles: ["[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]   .cg-wrapper[_ngcontent-%COMP%]{display:block;width:100%;overflow:hidden}[_nghost-%COMP%]   .cg-wrapper.cg-show[_ngcontent-%COMP%]{height:auto;position:relative;display:table}[_nghost-%COMP%]   .cg-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;width:100%}"] });
/** @nocollapse */
GalleryComponent.ctorParameters = () => [
    { type: CrystalLightbox },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
GalleryComponent.propDecorators = {
    images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['images',] }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['config',] }],
    contentWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['contentWrapper',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'crystal-gallery',
                template: `<div #contentWrapper [hidden]="isNgContent">
    <ng-content></ng-content>
</div>

<masonry-layout 
    class="cg-wrapper"
    *ngIf="!isNgContent" 

    [max-height]="masonryMaxHeight" 
    [gutter]="masonryGutter"
    [masonry]="masonryState"
    [class-name]="'cg-image'"
    [images]="images"
    (events)="handleMasonryLayoutEvents($event)"></masonry-layout>`,
                styles: [`:host{display:block;width:100%}:host .cg-wrapper{display:block;width:100%;overflow:hidden}:host .cg-wrapper.cg-show{height:auto;position:relative;display:table}:host .cg-image img{cursor:pointer;width:100%}`]
            }]
    }], function () { return [{ type: CrystalLightbox }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['config']
        }], images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['images']
        }], contentWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['contentWrapper']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MasonryLayoutComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.GUTTER = 0;
        this.savedNodeDimensions = [];
        this.gridState = 'not started';
        this.ENABLE_MASONRY = true;
        this.MAX_HEIGHT = 400;
        this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.elem = this.elementRef.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set gutter(value) {
        this.GUTTER = value / 2;
    }
    /**
     * @return {?}
     */
    get isMobile() {
        /** @type {?} */
        var check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true; })(navigator.userAgent || navigator.vendor);
        return check;
    }
    ;
    /**
     * @param {?} event
     * @return {?}
     */
    onWindowResize(event) {
        clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(() => {
            this.gridState = 'not started';
            this.buildGrid();
        }, 250);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.buildGrid();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        clearTimeout(this.changesTimer);
        this.changesTimer = setTimeout(() => {
            this.gridState = 'not started';
            this.buildGrid();
        }, 250);
    }
    /**
     * @return {?}
     */
    buildGrid() {
        /** @type {?} */
        let parentWidth = Math.floor(this.elem.parentNode.offsetWidth);
        /** @type {?} */
        let row = {
            startIndex: 0,
            endIndex: 0,
            length: 0,
            totalWidth: 0
        };
        if (!this.images || !this.images.length) {
            return;
        }
        this.elem.style.width = parentWidth + 'px';
        this.elem.style.display = 'table';
        this.images.forEach((node, index) => {
            if (row.totalWidth === 0) {
                row.startIndex = index;
                row.length = 0;
            }
            row.length++;
            row.totalWidth += this.getComputedWidth(index);
            if (row.totalWidth >= parentWidth || this.isLastChild(index)) {
                row.endIndex = index;
                /** @type {?} */
                let scaling = row.totalWidth / parentWidth;
                this.setColDimensions(scaling, row);
                row.totalWidth = 0;
            }
        });
    }
    /**
     * @param {?} scaling
     * @param {?} row
     * @return {?}
     */
    setColDimensions(scaling, row) {
        /** @type {?} */
        let totalRowWidth = 0;
        /** @type {?} */
        let parentWidth = this.elem.parentNode.offsetWidth;
        scaling = (scaling < 1) ? 1 : scaling;
        this.images.forEach((node, index) => {
            if (!this.ENABLE_MASONRY) {
                node.computedHeight = this.MAX_HEIGHT + 'px';
                node.computedWidth = this.getComputedWidth(index) + 'px';
                node.margin = this.getNodeMargin(parentWidth);
                return;
            }
            if (index >= row.startIndex && index <= row.endIndex) {
                /** @type {?} */
                let nodeWidth;
                // last image
                if (index === row.endIndex && scaling > 1) {
                    nodeWidth = (100 - totalRowWidth) - ((this.GUTTER * 2) / parentWidth * 100);
                    node.computedWidth = 'calc(' + nodeWidth + '%)';
                    if (this.gridState === 'not started') {
                        this.gridState = 'pre-building';
                        setTimeout(() => {
                            this.buildGrid();
                        }, 100);
                    }
                }
                else {
                    nodeWidth = ((this.getComputedWidth(index) / scaling) / parentWidth * 100) - ((row.length * (this.GUTTER * 2)) * (this.getComputedWidth(index) / scaling) / parentWidth) / parentWidth * 100;
                    node.computedWidth = 'calc(' + nodeWidth + '%)';
                    totalRowWidth += nodeWidth;
                    totalRowWidth += (this.GUTTER / parentWidth * 100) * 2;
                }
                // last row and last image
                if (index === row.endIndex && row.length === 1 && this.isMobile) {
                    nodeWidth = 100 - ((this.GUTTER * 2) / parentWidth * 100);
                    /** @type {?} */
                    let height = node.height * (parentWidth * (nodeWidth / 100) / node.width);
                    if (height / 2 < this.MAX_HEIGHT) {
                        node.computedWidth = 'calc(' + nodeWidth + '%)';
                    }
                }
                node.margin = this.getNodeMargin(parentWidth);
                node.computedHeight = node.height * (parentWidth * (nodeWidth / 100) / node.width) + 'px';
            }
        });
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getComputedWidth(index) {
        return this.images[index].width / (this.images[index].height / this.MAX_HEIGHT);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    isLastChild(index) {
        return index + 1 === this.images.length;
    }
    /**
     * @param {?} parentWidth
     * @return {?}
     */
    getNodeMargin(parentWidth) {
        return 'calc(' + this.GUTTER / parentWidth * 100 + '%)';
    }
    /**
     * @param {?} image
     * @param {?} i
     * @return {?}
     */
    clickOnImage(image, i) {
        this.events.emit({
            type: 'click-on-image',
            image: image,
            index: i
        });
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    onImageLoaded(elem) {
        elem.style.opacity = 1;
    }
}
MasonryLayoutComponent.ɵfac = function MasonryLayoutComponent_Factory(t) { return new (t || MasonryLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
MasonryLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MasonryLayoutComponent, selectors: [["masonry-layout"]], hostBindings: function MasonryLayoutComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function MasonryLayoutComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { ENABLE_MASONRY: ["masonry", "ENABLE_MASONRY"], MAX_HEIGHT: ["max-height", "MAX_HEIGHT"], gutter: "gutter", images: "images", CLASS_NAME: ["class-name", "CLASS_NAME"] }, outputs: { events: "events" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[3, "ngClass", "width", "height", "float", "margin", "background", "lineHeight", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "src", "click", "load"], ["imageElem", ""]], template: function MasonryLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MasonryLayoutComponent_div_0_Template, 3, 20, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], encapsulation: 2 });
/** @nocollapse */
MasonryLayoutComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
MasonryLayoutComponent.propDecorators = {
    images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['images',] }],
    ENABLE_MASONRY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['masonry',] }],
    MAX_HEIGHT: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['max-height',] }],
    CLASS_NAME: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['class-name',] }],
    gutter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['gutter',] }],
    events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onWindowResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['window:resize', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasonryLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'masonry-layout',
                template: `<div 
	[ngClass]="CLASS_NAME"
	*ngFor="let image of images; let i = index;"
    [style.width]="image.computedWidth"
    [style.height]="image.computedHeight"
    [style.float]="'left'"
    [style.margin]="image.margin"
    [style.background]="'#eeeeee'"
    [style.lineHeight]="0">
	<img 
        #imageElem
        [src]="image.preview || image.full" 
        [style.width.%]="100" 
        [style.height]="'auto'"
        [style.opacity]="0"
        (click)="clickOnImage(image, i)"
        (load)="onImageLoaded(imageElem)" />
</div>`
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, { ENABLE_MASONRY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['masonry']
        }], MAX_HEIGHT: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['max-height']
        }], events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], gutter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['gutter']
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['window:resize', ['$event']]
        }], images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['images']
        }], CLASS_NAME: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['class-name']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PinchDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.scale = 1;
        this.initialScale = 1;
        this.moveX = 0;
        this.moveY = 0;
        this.initialMoveX = 0;
        this.initialMoveY = 0;
        this.isNextImageLoaded = true;
        this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.elem = this.elementRef.nativeElement;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    touchstartHandler(event) {
        this.elem.style.transformOrigin = '0 0';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    touchmoveHandler(event) {
        /** @type {?} */
        let touches = event.touches;
        if (touches.length === 1 && this.scale === 1 && !this.eventType || this.eventType == 'swipe') {
            event.preventDefault();
            if (!this.isNextImageLoaded) {
                return;
            }
            if (!this.eventType) {
                this.startX = event.touches[0].pageX;
                this.startY = event.touches[0].pageY;
            }
            this.eventType = 'swipe';
            this.moveX = this.initialMoveX + (event.touches[0].pageX - this.startX);
            this.moveY = 0;
            this.transformElem(0);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    touchendHandler(event) {
        /** @type {?} */
        let touches = event.touches;
        /** @type {?} */
        let img = this.elem.getElementsByTagName("img")[0];
        if (!this.isNextImageLoaded) {
            return;
        }
        if (this.scale < 1) {
            this.scale = 1;
        }
        if (this.moveY > 0) {
            this.moveY = 0;
        }
        if (this.moveX > 100) {
            this.slide('prev');
        }
        else if (this.moveX < -100) {
            this.slide('next');
        }
        else {
            this.moveX = 0;
        }
        this.initialScale = this.scale;
        this.initialMoveX = this.moveX;
        this.initialMoveY = this.moveY;
        this.transformElem(200);
        this.eventType = 'touchend';
        if (touches.length == 0) {
            this.eventType = '';
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    slide(event) {
        this.onSlide(event);
        if (event === 'prev') {
            this.moveX = window.innerWidth + 8;
            if (this.isFirst) {
                this.moveX = 0;
            }
        }
        if (event === 'next') {
            this.moveX = -window.innerWidth - 8;
            if (this.isLast) {
                this.moveX = 0;
            }
        }
        this.isNextImageLoaded = false;
        setTimeout(() => {
            this.moveX = 0;
            this.initialMoveX = 0;
            this.isNextImageLoaded = true;
        }, 200);
    }
    /**
     * @param {?} evenType
     * @return {?}
     */
    onSlide(evenType) {
        this.events.emit(evenType);
    }
    /**
     * @param {?=} duration
     * @return {?}
     */
    transformElem(duration = 50) {
        /** @type {?} */
        let matrixVal = 'matrix(' + Number(this.scale) + ',' + 0 + ',' + 0 + ',' + Number(this.scale) + ',' + Number(this.moveX) + ',' + Number(this.moveY) + ')';
        this.elem.style.transition = 'all ' + duration + 'ms';
        this.elem.style.transform = matrixVal;
        this.elem.style.webkitTransform = matrixVal;
    }
}
PinchDirective.ɵfac = function PinchDirective_Factory(t) { return new (t || PinchDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
PinchDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PinchDirective, selectors: [["", "pinch", ""]], hostBindings: function PinchDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart", function PinchDirective_touchstart_HostBindingHandler($event) { return ctx.touchstartHandler($event); })("touchmove", function PinchDirective_touchmove_HostBindingHandler($event) { return ctx.touchmoveHandler($event); })("touchend", function PinchDirective_touchend_HostBindingHandler($event) { return ctx.touchendHandler($event); });
    } }, inputs: { isLast: "isLast", isFirst: "isFirst" }, outputs: { events: "events" } });
/** @nocollapse */
PinchDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
PinchDirective.propDecorators = {
    isLast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    isFirst: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    touchstartHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['touchstart', ['$event'],] }],
    touchmoveHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['touchmove', ['$event'],] }],
    touchendHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['touchend', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PinchDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[pinch]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, { events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    touchstartHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['touchstart', ['$event']]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    touchmoveHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['touchmove', ['$event']]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    touchendHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['touchend', ['$event']]
        }], isLast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], isFirst: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CrystalGalleryModule {
}
CrystalGalleryModule.ɵfac = function CrystalGalleryModule_Factory(t) { return new (t || CrystalGalleryModule)(); };
CrystalGalleryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CrystalGalleryModule });
CrystalGalleryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        CrystalLightbox
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrystalGalleryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [
                    LightboxComponent,
                    LightboxMobileComponent,
                    GalleryComponent,
                    MasonryLayoutComponent,
                    PinchDirective
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule
                ],
                exports: [
                    GalleryComponent
                ],
                providers: [
                    CrystalLightbox
                ],
                bootstrap: [],
                entryComponents: [
                    LightboxComponent,
                    LightboxMobileComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CrystalGalleryModule, { declarations: function () { return [LightboxComponent, LightboxMobileComponent, GalleryComponent, MasonryLayoutComponent, PinchDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]; }, exports: function () { return [GalleryComponent]; } }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNyeXN0YWwtZ2FsbGVyeS5qcyIsInNvdXJjZXMiOlsibmd4LWNyeXN0YWwtZ2FsbGVyeS9saWIvbGlnaHRib3guY29tcG9uZW50LnRzIiwibmd4LWNyeXN0YWwtZ2FsbGVyeS9saWIvbGlnaHRib3gtbW9iaWxlLmNvbXBvbmVudC50cyIsIm5neC1jcnlzdGFsLWdhbGxlcnkvbGliL2NvbmZpZy50cyIsIm5neC1jcnlzdGFsLWdhbGxlcnkvbGliL2RvbS5zZXJ2aWNlLnRzIiwibmd4LWNyeXN0YWwtZ2FsbGVyeS9saWIvZ2FsbGVyeS5jb21wb25lbnQudHMiLCJuZ3gtY3J5c3RhbC1nYWxsZXJ5L2xpYi9tYXNvbnJ5LWxheW91dC5jb21wb25lbnQudHMiLCJuZ3gtY3J5c3RhbC1nYWxsZXJ5L2xpYi9waW5jaC5kaXJlY3RpdmUudHMiLCJuZ3gtY3J5c3RhbC1nYWxsZXJ5L2xpYi9nYWxsZXJ5Lm1vZHVsZS50cyJdLCJuYW1lcyI6WyJkZWZhdWx0Q29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQztBQUFTO0FBRUQ7QUFFUjtBQUFTLElBdUlOLFlBQW9CLFVBQXNCLEVBQVUsR0FBc0I7QUFDNUUsUUFEc0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFFLFFBQVEsUUFBRyxHQUFILEdBQUcsQ0FBbUI7QUFBRSxpQ0EzRmhELENBQUM7QUFDaEMsNkJBQTJCLEVBQUU7QUFDN0IsaUNBQStCLEVBQUU7QUFFbEMscUJBRVksSUFBSSxZQUFZLEVBQUU7QUFFOUIsNEJBQTBELEtBQUs7QUFDOUQsNEJBQWtFLEtBQUs7QUFDdkUsS0FrRkk7QUFFTDtBQUFTO0FBQ0k7QUFBUyxJQTlFbEIsSUFBSSxNQUFNO0FBQ1osUUFBTSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxD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LEFBQUEsQUFBQSxBQTNGQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBbUZBLEFBM0VBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUtBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBeE5BLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBMkJBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFsQ0EsQUFBQSxBQUNBLEFBQUEsQUE2Q0EsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBd0RBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFlQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFDeElBLEFBc0pBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQXZHQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBS0EsQUFBQSxBQUFBLEFBQUEsQUE4RUEsQUFBQSxBQVNBLEFBakZBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFLQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUtBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFyUkEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFtQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQXpDQSxBQUFBLEFBQUEsQUFBQSxBQWtFQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUEwRUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFDaEpBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFDWEEsQUEyQkEsQUFDQSxBQUNBLEFBQ0EsQUFGQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQVZBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFRQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFuREEsQUFBQSxBQWZBLEFBQUEsQUFFQSxBQUFBLEFBSEEsQUFBQSxBQ0ZBLEFBNENBLEFBQ0EsQUFDQSxBQURBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUF0QkEsQUFBQSxBQXVCQSxBQW5CQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFPQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQXJEQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQWFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFuQkEsQUFBQSxBQURBLEFBQUEsQUF1QkEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFDMUJBLEFBK0RBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUEzQkEsQUFBQSxBQUdBLEFBQUEsQUFFQSxBQUFBLEFBS0EsQUFBQSxBQUNBLEFBQUEsQUFRQSxBQUFBLEFBQUEsQUFBQSxBQVNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQWZBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUlBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFPQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQTVMQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQWlCQSxBQUNBLEFBakNBLEFBQUEsQUE2Q0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUtBLEFBQUEsQUFZQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFDbkVBLEFBbUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUF4QkEsQUFBQSxBQUNBLEFBQUEsQUFLQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBUUEsQUFBQSxBQUtBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUExSUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUpBLEFBQUEsQUE4QkEsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBTUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUtBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUF5QkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQ3JFQSxBQVNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFFQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFxuICAgIENvbXBvbmVudCwgXG4gICAgSW5wdXQsIFxuICAgIEV2ZW50RW1pdHRlciwgXG4gICAgT25Jbml0LCBcbiAgICBIb3N0QmluZGluZywgXG4gICAgSG9zdExpc3RlbmVyLCBcbiAgICBWaWV3Q2hpbGQsIFxuICAgIEVsZW1lbnRSZWYsIFxuICAgIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY3J5c3RhbC1saWdodGJveCcsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiY2ctY291bnRlclwiICpuZ0lmPVwiY29uZmlnLmNvdW50ZXIgJiYgaW1hZ2VzLmxlbmd0aCA+IDFcIj57e2NvdW50ZXJ9fTwvZGl2PlxuPGRpdiBjbGFzcz1cImNnLWRlc2NyaXB0aW9uXCIgKm5nSWY9XCJkZXNjcmlwdGlvblwiPnt7ZGVzY3JpcHRpb259fTwvZGl2PlxuXG48ZGl2IFxuXHRjbGFzcz1cImNnLWNsb3NlXCIgXG5cdChjbGljayk9XCJjbG9zZUxpZ2h0Ym94KClcIj5DbG9zZTwvZGl2PlxuXG48ZGl2IFxuXHRjbGFzcz1cImNnLXNwaW5uZXJcIiBcblx0ICpuZ0lmPVwiIWN1cnJJbWFnZUxvYWRlZFwiPjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY2ctd3JhcHBlclwiICN3cmFwcGVyPlxuXHQ8aW1nIFxuXHRcdGNsYXNzPVwiY2ctY3Vyci1pbWFnZVwiIFxuXHRcdCNjdXJySW1hZ2VFbGVtIFxuXHRcdFtzcmNdPVwiY3VyckltYWdlUGF0aD8uZnVsbFwiIFxuXHRcdFtjbGFzcy5jZy1zaG93XT1cImN1cnJJbWFnZUxvYWRlZFwiIFxuXHRcdChsb2FkKT1cIm9uSW1hZ2VMb2FkZWQoKVwiIC8+XG48L2Rpdj5cblxuPGRpdiBcblx0Y2xhc3M9XCJjZy1wcmV2XCIgXG5cdFtoaWRkZW5dPVwiaXNGaXJzdCAmJiAhY29uZmlnLmxvb3BcIiBcblx0KGNsaWNrKT1cInByZXYoKVwiPjwvZGl2PlxuPGRpdiBcblx0Y2xhc3M9XCJjZy1uZXh0XCIgXG5cdFtoaWRkZW5dPVwiaXNMYXN0ICYmICFjb25maWcubG9vcFwiIFxuXHQoY2xpY2spPVwibmV4dCgpXCI+PC9kaXY+YCxcbiAgICBzdHlsZXM6IFtgLl9jZy1zcGlubmVyLC5fY2ctc3Bpbm5lcjphZnRlcntib3JkZXItcmFkaXVzOjUwJTt3aWR0aDozNnB4O2hlaWdodDozNnB4fS5fY2ctc3Bpbm5lcnttYXJnaW46MCBhdXRvO2ZvbnQtc2l6ZToxMHB4O3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtaW5kZW50Oi05OTk5ZW07Ym9yZGVyLXRvcDo0cHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMik7Ym9yZGVyLXJpZ2h0OjRweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4yKTtib3JkZXItYm90dG9tOjRweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4yKTtib3JkZXItbGVmdDo0cHggc29saWQgI2ZmZjstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApOy13ZWJraXQtYW5pbWF0aW9uOi45cyBsaW5lYXIgaW5maW5pdGUgbG9hZDg7YW5pbWF0aW9uOi45cyBsaW5lYXIgaW5maW5pdGUgbG9hZDh9QC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ4ezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIGxvYWQ4ezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0uY2ctc3Bpbm5lciwuY2ctc3Bpbm5lcjphZnRlciwuY2ctc3Bpbm5lcjpiZWZvcmV7Ym9yZGVyLXJhZGl1czo1MCU7d2lkdGg6MTBweDtoZWlnaHQ6MTBweDstd2Via2l0LWFuaW1hdGlvbjoxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGxvYWQ3O2FuaW1hdGlvbjoxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGxvYWQ3fS5jZy1zcGlubmVye2NvbG9yOiNmZmY7Zm9udC1zaXplOjEwcHg7bWFyZ2luOjAgYXV0byAyMHB4O3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtaW5kZW50Oi05OTk5ZW07LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjE2czthbmltYXRpb24tZGVsYXk6LS4xNnN9LmNnLXNwaW5uZXI6YWZ0ZXIsLmNnLXNwaW5uZXI6YmVmb3Jle2NvbnRlbnQ6XCJcIjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MH0uY2ctc3Bpbm5lcjpiZWZvcmV7bGVmdDotM2VtOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMzJzO2FuaW1hdGlvbi1kZWxheTotLjMyc30uY2ctc3Bpbm5lcjphZnRlcntsZWZ0OjNlbX1ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDd7MCUsMTAwJSw4MCV7Ym94LXNoYWRvdzowIDIuNWVtIDAgLTEuM2VtfTQwJXtib3gtc2hhZG93OjAgMi41ZW0gMCAwfX1Aa2V5ZnJhbWVzIGxvYWQ3ezAlLDEwMCUsODAle2JveC1zaGFkb3c6MCAxMHB4IDAgLTEuM2VtfTQwJXtib3gtc2hhZG93OjAgMTBweCAwIDB9fTpob3N0KC5jZy1zaG93KXtvcGFjaXR5OjF9Omhvc3QoLmNnLWhpZGUtY29udHJvbHMpIC5jZy1jbG9zZSw6aG9zdCguY2ctaGlkZS1jb250cm9scykgLmNnLW5leHQsOmhvc3QoLmNnLWhpZGUtY29udHJvbHMpIC5jZy1wcmV2e29wYWNpdHk6MH06aG9zdHtvcGFjaXR5OjA7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Y29sb3I6I2ZmZjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7dHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBjdWJpYy1iZXppZXIoLjY0NSwuMDQ1LC4zNTUsMSk7ei1pbmRleDoxMDAwMDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjg1KX06aG9zdCBpbWd7b3BhY2l0eToxO21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJTtib3gtc2hhZG93OjAgNHB4IDE1cHggMnB4IHJnYmEoMCwwLDAsLjM1KX06aG9zdCBpbWcuY2ctY3Vyci1pbWFnZS5jZy1zaG93e29wYWNpdHk6MX06aG9zdCBpbWcuY2ctY3Vyci1pbWFnZXtvcGFjaXR5OjA7ei1pbmRleDoxMH06aG9zdCAuY2ctd3JhcHBlci5jZy1oaWRle2Rpc3BsYXk6bm9uZX06aG9zdCAuY2ctd3JhcHBlcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfTpob3N0IC5jZy1zcGlubmVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7bWFyZ2luLXRvcDotMTVweDttYXJnaW4tbGVmdDotNXB4fTpob3N0IC5jZy1jb3VudGVye3RleHQtYWxpZ246bGVmdDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjIycHg7dG9wOjEzcHg7Zm9udC1zaXplOjE0cHg7dGV4dC1zaGFkb3c6MCAwIDFweCByZ2JhKDAsMCwwLC42NSk7ei1pbmRleDozMH06aG9zdCAuY2ctZGVzY3JpcHRpb257dGV4dC1hbGlnbjpjZW50ZXI7bWF4LXdpZHRoOmNhbGMoMTAwJSAtIDIwMHB4KTttYXJnaW46MCBhdXRvO2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjQzcHg7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDo1MH06aG9zdCAuY2ctY2xvc2V7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtwYWRkaW5nOjEzcHggMjJweDtmb250LXNpemU6MTNweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTouNTt6LWluZGV4OjMwO3RyYW5zaXRpb246b3BhY2l0eSAuMXMgZWFzZS1pbi1vdXQ7dGV4dC1zaGFkb3c6MCAwIDFweCByZ2JhKDAsMCwwLC42NSl9Omhvc3QgLmNnLWNsb3NlOmhvdmVye29wYWNpdHk6MX06aG9zdCAuY2ctbmV4dCw6aG9zdCAuY2ctcHJldnt3aWR0aDo0MCU7aGVpZ2h0OjEwMCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTouNTt6LWluZGV4OjIwO3RyYW5zaXRpb246b3BhY2l0eSAuMXMgZWFzZS1pbi1vdXQ7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMCl9Omhvc3QgLmNnLW5leHQ6aG92ZXIsOmhvc3QgLmNnLXByZXY6aG92ZXJ7b3BhY2l0eToxfTpob3N0IC5jZy1wcmV2e2xlZnQ6MDtiYWNrZ3JvdW5kOnVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJZQUFBQWlDQVlBQUFCYlh5bUFBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlacFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1UTTRJRGM1TGpFMU9UZ3lOQ3dnTWpBeE5pOHdPUzh4TkMwd01Ub3dPVG93TVNBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElESXdNVGNnS0ZkcGJtUnZkM01wSWlCNGJYQk5UVHBKYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2pNek1UWkNRekZFUkRnek1URXhSVGM1UVVZeFFUVXhSREk1TWtNNU9EWkNJaUI0YlhCTlRUcEViMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPak16TVRaQ1F6RkZSRGd6TVRFeFJUYzVRVVl4UVRVeFJESTVNa001T0RaQ0lqNGdQSGh0Y0UxTk9rUmxjbWwyWldSR2NtOXRJSE4wVW1WbU9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZNek14TmtKRE1VSkVPRE14TVRGRk56bEJSakZCTlRGRU1qa3lRems0TmtJaUlITjBVbVZtT21SdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk16TXhOa0pETVVORU9ETXhNVEZGTnpsQlJqRkJOVEZFTWpreVF6azROa0lpTHo0Z1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0lEd3ZjbVJtT2xKRVJqNGdQQzk0T25odGNHMWxkR0UrSUR3L2VIQmhZMnRsZENCbGJtUTlJbklpUHo3VnJ3WktBQUFDbEVsRVFWUjQycXpXU1k4U1FSZ0dZTG9WSFBlVFhsd0NpSXdNQXJKR3RpQUJOZXA0SUdaaTRvRWZNSm9vTGplUHJuRkdmNXlKUzBoWW1xMmIvYUJ4aVE2K2xSUkpkYVVacTV2cDVFMlRMbmlvVkZkOVZaTE4raVV4SWRlTWlXMmZSVkNtdnoyRHBKQlZDazZYNlNWQkhRUkxwVktiN1hiNzgyZzBVc3JsOGpNOFcwUDIwKzlZUW4zSlpQSWh3TjZNWG9QQm9JM25HOGlLR1poRjE0QStBcXJPbUt0V3EzMUYyMTNra09nUTY5QjBPbDBCcXJGb3Q5dlYvSDcvYzdSZkVvVloxRytFZGpxZHZ0ZnJmWW4ySzhnSmthSFFvZGxzdGpJZWovc3NpaGRIMERkb3Y0YWNRbzdRbHljSm81UEpoRWMxajhmem1xSmsyaDFEN0x2MWxrVXY1bks1eHp6YWFyV01VSWN3bXMvbkNUcmdVYmZiVGRDclZ0QUFRYWZUcVE1VkZFVmRDaTBVQ2svUTB5R0xOcHROMWVsMHZxTG9hUkhVeHFQb0tZLzJLRm8wZzByMGJhNFdpOFduUUVjczJtZzBWQVBVTHJKc1pUcXBOekRaNnl4YXI5ZFZsOHRGVnRSMTBTbkZvaEpkZ25aWXVoOUlralNUWmZrblBuNUR2aU8va0wvSWprZ3RJT2hoSko3SlpGNWdkVTI0aGRERzZxcWcvUUp5d0V6bG1nL0ZTVExoRTRuRTluQTRuSEpGUnZINWZKdG85NGdPQmZ2eWp0SnhYSS9INHgrQTYzcmU2L1VVVkRDQ256ZUR6NmZiY2VRc2Nqc1dpNzAzd0ZzTTdoREJKUU44UFJxTmJtTm4wT0dhcHUwSmZvdmlZeDRQQkFMMzBlNWRDZytIdzBaNGU4L3dmci9QNDUxUUtQUmdhUnpJRmpEZGtzZWZzYmpkS241ekVSNkpSTWl3dVArM05lMktCNFBCTFZWVlIxeGQrWUsyTzJiT0ZZdndkOENIYksveC9KNlpjOFVpL0FabXhkdHF0ZHJBd2xGTHBSTFpyUy9QWWNua0VVdWlZN2hDUytnNXNvdlQ1NStRajdRUy9qWUQ4empwL1VGNnQ5R1Mrb1BlZDh6Q0xDNXpKMHRTby8vUSs4d0tMSFR3L2lmQUFNUVZTNHZIWlIyVkFBQUFBRWxGVGtTdVFtQ0MpIGNlbnRlciBsZWZ0IDIycHggbm8tcmVwZWF0fTpob3N0IC5jZy1uZXh0e3JpZ2h0OjA7YmFja2dyb3VuZDp1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCWUFBQUFpQ0FZQUFBQmJYeW1BQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5WnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5pMWpNVE00SURjNUxqRTFPVGd5TkN3Z01qQXhOaTh3T1M4eE5DMHdNVG93T1Rvd01TQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJREl3TVRjZ0tGZHBibVJ2ZDNNcElpQjRiWEJOVFRwSmJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09qRXlOREUzTURFMVJEZ3pNVEV4UlRjNU5qTTRRVEl6UXpJMlJqYzJRamcySWlCNGJYQk5UVHBFYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pFeU5ERTNNREUyUkRnek1URXhSVGM1TmpNNFFUSXpRekkyUmpjMlFqZzJJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TVRJME1UY3dNVE5FT0RNeE1URkZOemsyTXpoQk1qTkRNalpHTnpaQ09EWWlJSE4wVW1WbU9tUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZNVEkwTVRjd01UUkVPRE14TVRGRk56azJNemhCTWpORE1qWkdOelpDT0RZaUx6NGdQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtJRHd2Y21SbU9sSkVSajRnUEM5NE9uaHRjRzFsZEdFK0lEdy9lSEJoWTJ0bGRDQmxibVE5SW5JaVB6N3p2NUJLQUFBQ2wwbEVRVlI0MnJUVzIyNFNRUndHY0haYjhGVDFTbTg4QkpDaUZBRTVKcHlDQk5SRThjb1lFeTk0QUdxaTlYRFhTMCtKVmgvQ0IvRWhpRkVUNUxqQWNsZ1dqYWExYWF6ZkpETTZ1Nkx1TGpySmwyMTI0Y2QwZHVZL0k5aCtOb0VMYWJ0Y1RMY0ZDb24wYncrU1JFNGgyOGhuMnh5Tm9JdklTcmxjZnFBb1NsdVNwTGVwVktxQ2U2Y1JCLzJNWUFYZWkxd2ZqVWJTTG0zNGdYNHltYnlOK3o2ck9CbUMvY2lOZXIzK2ZwZHJ3R1hnZDhoL1l3Vm44RG0vMzcvZTYvVUdPbnlRVHFmWHJPQnNLSTRnNTcxZTc2TnV0enY4RGU0M2d3djA1UzBoeDVDTHdKL2lCV3J3eVdReXpHYXpwbkh5SVR0eUNEbEJjSS9IOHdTNFpsaFVWYldNTy9SNHA5UDVCYy9sY25meC9PdzgrQVczMnowTEgrWHorWCtEdDl0dG1jZW4weW5EQTFieDR3UjNPcDJQVzYyV3JPdjV1RkFvM0pzWEwxSzhyK3Y1TE54bVpyYjh3SnZOcG41WWxHS3hlSi9XRnJ1WkJjUlB4VXN1bDJ1OTBXaG9jQ3lxQnFrM2RMR0ppd2JnYi9UNkZmbENTcWtvaWx1Q0lHanFOR3pXZ1FVejlZUjhhUTl5QnF0eURRdEgwcTFLTlpQSlBNVHpPSEtBNG9hSHd1UHorU29vVW0wZUhZL0gwMFFpc1VFV0ZIS1VEWVZSZEJtVnI5THY5L1dvR28vSFgrSjVpWTcvUVNNdmowMDNobmIwYUN3V2U0SG5WNUdUeUdFajAwMkREZ1lERFlxZFJvMUdveHUwcDNwVStCdnFEUVFDcXpQUUNVV3Z6SU5LZWpRY0RsdEhRNkhRTGFCZEhoME9oNVpSTzBPQmFGRDhpSUw3ejgyaWJHdHlSeUtSMVQrZ2w4MmcvR1o2RGV2L0hZL0tzcXdFZzBGTEtMLzkzK1I3QzNRTTlOazhLRHRpT1dxMTJqYjJzMlhTMDFLcDlLcGFyYjdHL1RmSVIyUVQyVEY2VUJTNDJiQkVpL1VLL1NJQlB5Q2ZrQzB6S0ErejZyV1BYbTMwdExsSnI2WlEvWm1ZRFluSTFlRWRlalY5VGhiKzE4SDd1d0FEQU9HL1djbTR4K2tuQUFBQUFFbEZUa1N1UW1DQykgY2VudGVyIHJpZ2h0IDIycHggbm8tcmVwZWF0fWBdXG59KVxuZXhwb3J0IGNsYXNzIExpZ2h0Ym94Q29tcG9uZW50IHtcbiAgICBfaW5kZXg6IGFueTtcbiAgICBwcmV2SW5kZXg6IGFueTtcbiAgICBjdXJySW1hZ2VMb2FkZWQ6IGFueTsgXG4gICAgcHJldkltYWdlSGlkZTogYW55O1xuICAgIHdyYXBwZXJQcm9wOiBhbnk7XG4gICAgX2RhdGE6IGFueTtcbiAgICBjdXJyZW50SW1hZ2VJbmRleDogbnVtYmVyID0gMDtcbiAgICBzcGlubmVySGVpZ2h0OiBudW1iZXIgPSAzMDtcbiAgICBkZXNjcmlwdGlvbkhlaWdodDogbnVtYmVyID0gNDM7XG5cbiAgICBASW5wdXQoKSBkYXRhOiBhbnk7XG5cbiAgICBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuY2ctc2hvdycpIHNob3dMaWdodGJveDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuY2ctaGlkZS1jb250cm9scycpIGhpZGVDb250cm9sczogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUudHJhbnNpdGlvbicpIGhvc3RTdHlsZVRyYW5zaXRpb246IHN0cmluZztcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmJhY2tncm91bmRDb2xvcicpIGhvc3RTdHlsZUJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuXG4gICAgQFZpZXdDaGlsZCgnY3VyckltYWdlRWxlbScpIGN1cnJJbWFnZUVsZW06IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgncHJldkltYWdlRWxlbScpIHByZXZJbWFnZUVsZW06IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnd3JhcHBlcicpIHdyYXBwZXJFbGVtOiBFbGVtZW50UmVmO1xuXG4gICAgZ2V0IGltYWdlcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmltYWdlcztcbiAgICB9XG5cbiAgICBnZXQgY29uZmlnKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuY29uZmlnO1xuICAgIH1cblxuICAgIGdldCBpbmRleCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50SW1hZ2VJbmRleDtcbiAgICB9XG5cbiAgICBnZXQgY3VyckltYWdlUGF0aCgpe1xuICAgICAgICBsZXQgaW1hZ2UgPSB0aGlzLmltYWdlc1t0aGlzLmluZGV4XTtcblxuICAgICAgICBpZiAoIWltYWdlKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbWFnZS5wYXRoKXtcbiAgICAgICAgICAgIGltYWdlLmZ1bGwgPSBpbWFnZS5wYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGltYWdlO1xuICAgIH1cblxuICAgIGdldCBwcmV2SW1hZ2VQYXRoKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlc1t0aGlzLnByZXZJbmRleF07XG4gICAgfVxuXG4gICAgc2V0IHByZXZJbWFnZVBhdGgodmFsdWU6IGFueSl7XG4gICAgICAgIHRoaXMuaW1hZ2VzW3RoaXMucHJldkluZGV4XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBpc0ZpcnN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4ID09PSAwO1xuICAgIH1cblxuICAgIGdldCBpc0xhc3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXggPT09ICh0aGlzLmltYWdlcy5sZW5ndGgtMSk7XG4gICAgfVxuXG4gICAgZ2V0IGxhdGVzdEltYWdlSW5kZXgoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VzLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlc1t0aGlzLmluZGV4XS5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBnZXQgY291bnRlcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50SW1hZ2VJbmRleCArIDEgKycvJysgdGhpcy5pbWFnZXMubGVuZ3RoO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duJywgWyckZXZlbnQnXSlcbiAgICBvbktleURvd24oZXZlbnQ6IGFueSkge1xuICAgICAgICBzd2l0Y2goZXZlbnQua2V5KSB7XG4gICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgICAgIHRoaXMucHJldigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VMaWdodGJveCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgWyckZXZlbnQnXSlcbiAgICBvbk1vdXNlRW50ZXIoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLmhpZGVDb250cm9scyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKXtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLnNldEJhY2tncm91bmRPcGFjaXR5KHRoaXMuY29uZmlnLmJhY2tncm91bmRPcGFjaXR5KTtcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9IHRoaXMuY29uZmlnLmluZGV4O1xuICAgICAgICAvL2RvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xpZ2h0Ym94ID0gdHJ1ZTtcbiAgICAgICAgfSwgMzApO1xuXG4gICAgICAgIHRoaXMuc2V0TWF4RGltZW5zaW9ucygpO1xuICAgICAgICB0aGlzLnNldEFuaW1hdGlvbkR1cmF0aW9uKCk7XG4gICAgfVxuXG4gICAgY2xvc2VMaWdodGJveCgpe1xuICAgICAgICB0aGlzLnNob3dMaWdodGJveCA9IGZhbHNlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgdGhpcy5jbG9zZS5lbWl0KCdjbG9zZScpO1xuICAgICAgICAgICAvL2RvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgICAgfSwgdGhpcy5jb25maWcuYW5pbWF0aW9uRHVyYXRpb24pOyBcbiAgICB9XG5cbiAgICBuZXh0KCl7XG4gICAgICAgIGlmICh0aGlzLmlzTGFzdCl7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcubG9vcCl7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJJbWFnZUxvYWRlZCA9ICdsb2FkaW5nJztcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJJbWFnZUxvYWRlZCA9PT0gJ2xvYWRpbmcnKXtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJJbWFnZUxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCA1MCk7XG5cbiAgICAgICAgdGhpcy5zZXRNYXhEaW1lbnNpb25zKCk7XG4gICAgfVxuICAgIHByZXYoKXtcbiAgICAgICAgaWYgKHRoaXMuaXNGaXJzdCl7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcubG9vcCl7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9IHRoaXMubGF0ZXN0SW1hZ2VJbmRleDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleC0tO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJySW1hZ2VMb2FkZWQgPT09ICdsb2FkaW5nJyl7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJySW1hZ2VMb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNTApO1xuXG4gICAgICAgIHRoaXMuc2V0TWF4RGltZW5zaW9ucygpO1xuICAgIH1cblxuICAgIG9uSW1hZ2VMb2FkZWQoKXtcbiAgICAgICAgdGhpcy5jdXJySW1hZ2VMb2FkZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgc2V0QmFja2dyb3VuZE9wYWNpdHkob3BhY2l0eTogYW55KXtcbiAgICAgICAgdGhpcy5ob3N0U3R5bGVCYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLCAwLCAwLCAnK29wYWNpdHkrJyknO1xuICAgIH1cblxuICAgIHNldE1heERpbWVuc2lvbnMoKXtcbiAgICAgICAgaWYgKHRoaXMuZGVzY3JpcHRpb24pe1xuICAgICAgICAgICAgdGhpcy53cmFwcGVyRWxlbS5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9ICdjYWxjKDEwMCUgLSAnICsgKHRoaXMuZGVzY3JpcHRpb25IZWlnaHQgKiAyKSArICdweCknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy53cmFwcGVyRWxlbS5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdXJySW1hZ2VFbGVtLm5hdGl2ZUVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJ2NhbGMoJyArIHRoaXMuY29uZmlnLmxpZ2h0Ym94TWF4SGVpZ2h0ICsgJyknO1xuICAgICAgICB0aGlzLmN1cnJJbWFnZUVsZW0ubmF0aXZlRWxlbWVudC5zdHlsZS5tYXhXaWR0aCA9IHRoaXMuY29uZmlnLmxpZ2h0Ym94TWF4V2lkdGg7XG4gICAgfVxuXG4gICAgc2V0QW5pbWF0aW9uRHVyYXRpb24oKXtcbiAgICAgICAgdGhpcy5ob3N0U3R5bGVUcmFuc2l0aW9uID0gJ29wYWNpdHkgJyt0aGlzLmNvbmZpZy5hbmltYXRpb25EdXJhdGlvbisnbXMnO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjcnlzdGFsLWxpZ2h0Ym94LW1vYmlsZScsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImNnLWJhY2tcIiAoY2xpY2spPVwiY2xvc2VMaWdodGJveCgpXCI+PC9kaXY+XG5cbjxkaXYgXG5cdGNsYXNzPVwiY2ctd3JhcHBlclwiIFxuXHRbY2xhc3MuY2ctbGFuZHNjYXBlXT1cImxhbmRzY2FwZU1vZGVcIlxuXHRwaW5jaCBbaXNMYXN0XT1cImlzTGFzdFwiIFtpc0ZpcnN0XT1cImlzRmlyc3RcIiAoZXZlbnRzKT1cImhhbmRsZVBpbmNoRXZlbnRzKCRldmVudClcIlxuXHQjd3JhcHBlcj5cblx0PGRpdiBjbGFzcz1cImNnLWltYWdlLXdyYXAgY2ctcHJldi1pbWFnZVwiPlxuXHRcdDxpbWcgXG5cdFx0XHQqbmdJZj1cInByZXZJbWFnZVBhdGhcIlxuXHRcdFx0W3NyY109XCJwcmV2SW1hZ2VQYXRoLmZ1bGxcIiBcblx0XHRcdFtjbGFzcy5jZy1oaWRlXT1cIiFwcmV2SW1hZ2UubG9hZGVkXCJcblx0XHRcdChsb2FkKT1cIm9uSW1hZ2VMb2FkZWQoJ3ByZXZJbWFnZScpXCJcblx0XHQvPlxuXHRcdDxkaXYgY2xhc3M9XCJjZy1zcGlubmVyXCIgKm5nSWY9XCIhcHJldkltYWdlLmxvYWRlZCAmJiBwcmV2SW1hZ2VQYXRoXCI+PC9kaXY+XG5cdDwvZGl2PlxuXG5cdDxkaXYgY2xhc3M9XCJjZy1pbWFnZS13cmFwIGNnLWN1cnItaW1hZ2VcIiAqbmdJZj1cImN1cnJJbWFnZS5zaG93XCI+XG5cdFx0PGltZyBcblx0XHRcdFtzcmNdPVwiY3VyckltYWdlUGF0aD8uZnVsbFwiIFxuXHRcdFx0W2NsYXNzLmNnLWhpZGVdPVwiIWN1cnJJbWFnZS5sb2FkZWRcIiBcblx0XHRcdChsb2FkKT1cIm9uSW1hZ2VMb2FkZWQoJ2N1cnJJbWFnZScpXCJcblx0XHQvPlxuXHRcdDxkaXYgY2xhc3M9XCJjZy1zcGlubmVyXCIgKm5nSWY9XCIhY3VyckltYWdlLmxvYWRlZFwiPjwvZGl2PlxuXHQ8L2Rpdj5cblx0XG5cdDxkaXYgY2xhc3M9XCJjZy1pbWFnZS13cmFwIGNnLW5leHQtaW1hZ2VcIj5cblx0XHQ8aW1nIFxuXHRcdFx0Km5nSWY9XCJuZXh0SW1hZ2VQYXRoXCJcblx0XHRcdFtzcmNdPVwibmV4dEltYWdlUGF0aC5mdWxsXCIgXG5cdFx0XHRbY2xhc3MuY2ctaGlkZV09XCIhbmV4dEltYWdlLmxvYWRlZFwiIFxuXHRcdFx0KGxvYWQpPVwib25JbWFnZUxvYWRlZCgnbmV4dEltYWdlJylcIlxuXHRcdC8+XG5cdFx0PGRpdiBjbGFzcz1cImNnLXNwaW5uZXJcIiAqbmdJZj1cIiFuZXh0SW1hZ2UubG9hZGVkICYmIG5leHRJbWFnZVBhdGhcIj48L2Rpdj5cblx0PC9kaXY+XG48L2Rpdj5gLFxuICAgIHN0eWxlczogW2AuX2NnLXNwaW5uZXIsLl9jZy1zcGlubmVyOmFmdGVye2JvcmRlci1yYWRpdXM6NTAlO3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHh9Ll9jZy1zcGlubmVye21hcmdpbjowIGF1dG87Zm9udC1zaXplOjEwcHg7cG9zaXRpb246cmVsYXRpdmU7dGV4dC1pbmRlbnQ6LTk5OTllbTtib3JkZXItdG9wOjRweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4yKTtib3JkZXItcmlnaHQ6NHB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjIpO2JvcmRlci1ib3R0b206NHB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjIpO2JvcmRlci1sZWZ0OjRweCBzb2xpZCAjZmZmOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7LXdlYmtpdC1hbmltYXRpb246LjlzIGxpbmVhciBpbmZpbml0ZSBsb2FkODthbmltYXRpb246LjlzIGxpbmVhciBpbmZpbml0ZSBsb2FkOH1ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDh7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgbG9hZDh7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fS5jZy1zcGlubmVyLC5jZy1zcGlubmVyOmFmdGVyLC5jZy1zcGlubmVyOmJlZm9yZXtib3JkZXItcmFkaXVzOjUwJTt3aWR0aDoxMHB4O2hlaWdodDoxMHB4Oy13ZWJraXQtYW5pbWF0aW9uOjEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgbG9hZDc7YW5pbWF0aW9uOjEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgbG9hZDd9LmNnLXNwaW5uZXJ7Y29sb3I6I2ZmZjtmb250LXNpemU6MTBweDttYXJnaW46MCBhdXRvIDIwcHg7cG9zaXRpb246cmVsYXRpdmU7dGV4dC1pbmRlbnQ6LTk5OTllbTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMTZzO2FuaW1hdGlvbi1kZWxheTotLjE2c30uY2ctc3Bpbm5lcjphZnRlciwuY2ctc3Bpbm5lcjpiZWZvcmV7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowfS5jZy1zcGlubmVyOmJlZm9yZXtsZWZ0Oi0zZW07LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4zMnM7YW5pbWF0aW9uLWRlbGF5Oi0uMzJzfS5jZy1zcGlubmVyOmFmdGVye2xlZnQ6M2VtfUAtd2Via2l0LWtleWZyYW1lcyBsb2FkN3swJSwxMDAlLDgwJXtib3gtc2hhZG93OjAgMi41ZW0gMCAtMS4zZW19NDAle2JveC1zaGFkb3c6MCAyLjVlbSAwIDB9fUBrZXlmcmFtZXMgbG9hZDd7MCUsMTAwJSw4MCV7Ym94LXNoYWRvdzowIDEwcHggMCAtMS4zZW19NDAle2JveC1zaGFkb3c6MCAxMHB4IDAgMH19Omhvc3QoLmNnLXNob3cpe29wYWNpdHk6MX06aG9zdCguY2ctaGlkZS1jb250cm9scykgLmNnLWNsb3NlLDpob3N0KC5jZy1oaWRlLWNvbnRyb2xzKSAuY2ctbmV4dCw6aG9zdCguY2ctaGlkZS1jb250cm9scykgLmNnLXByZXZ7b3BhY2l0eTowfTpob3N0e29wYWNpdHk6MDtwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtjb2xvcjojZmZmOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt0cmFuc2l0aW9uOm9wYWNpdHkgLjJzIGN1YmljLWJlemllciguNjQ1LC4wNDUsLjM1NSwxKTt6LWluZGV4OjEwMDAwO2JhY2tncm91bmQtY29sb3I6IzAwMH06aG9zdCAuY2ctYmFja3tiYWNrZ3JvdW5kOnVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0MlM0Z4bWwgdmVyc2lvbiUzRCUyMjEuMCUyMiBlbmNvZGluZyUzRCUyMlVURi04JTIyJTNGJTNFJTNDc3ZnIHdpZHRoJTNEJTIyMTBweCUyMiBoZWlnaHQlM0QlMjIxNnB4JTIyIHZpZXdCb3glM0QlMjIwIDAgMTAgMTYlMjIgdmVyc2lvbiUzRCUyMjEuMSUyMiB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiB4bWxucyUzQXhsaW5rJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYxOTk5JTJGeGxpbmslMjIlM0UgICAgJTNDIS0tIEdlbmVyYXRvciUzQSBza2V0Y2h0b29sIDQwLjIgKDMzODI2KSAtIGh0dHAlM0ElMkYlMkZ3d3cuYm9oZW1pYW5jb2RpbmcuY29tJTJGc2tldGNoIC0tJTNFICAgICUzQ3RpdGxlJTNFMTFBNzM4NzItNUVCRi00NkY2LUI3QzUtMTQyRDQ3QTMzMzM5JTNDJTJGdGl0bGUlM0UgICAgJTNDZGVzYyUzRUNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLiUzQyUyRmRlc2MlM0UgICAgJTNDZGVmcyUzRSUzQyUyRmRlZnMlM0UgICAgJTNDZyBpZCUzRCUyMkludGVyZmFjZS0xMjgwLXgtODAwJTIyIHN0cm9rZSUzRCUyMm5vbmUlMjIgc3Ryb2tlLXdpZHRoJTNEJTIyMSUyMiBmaWxsJTNEJTIybm9uZSUyMiBmaWxsLXJ1bGUlM0QlMjJldmVub2RkJTIyJTNFICAgICAgICAlM0NnIGlkJTNEJTIyTG90X3ZpZXdwYWdlX29wZW4lMjIgdHJhbnNmb3JtJTNEJTIydHJhbnNsYXRlKC0xMTEuMDAwMDAwJTJDIC0yOTYuMDAwMDAwKSUyMiBmaWxsJTNEJTIyJTIzRkZGRkZGJTIyJTNFICAgICAgICAgICAgJTNDZyBpZCUzRCUyMmFycm93cy0xNnB4LTFfbWluaW1hbC1sZWZ0JTIyIHRyYW5zZm9ybSUzRCUyMnRyYW5zbGF0ZSgxMTEuMDAwMDAwJTJDIDI5Ni4wMDAwMDApJTIyJTNFICAgICAgICAgICAgICAgICUzQ3BvbHlnb24gaWQlM0QlMjJTaGFwZSUyMiBwb2ludHMlM0QlMjI4LjEgMTUuNyAwLjQgOCA4LjEgMC4zIDkuNiAxLjcgMy4zIDggOS42IDE0LjMlMjIlM0UlM0MlMkZwb2x5Z29uJTNFICAgICAgICAgICAgJTNDJTJGZyUzRSAgICAgICAgJTNDJTJGZyUzRSAgICAlM0MlMkZnJTNFJTNDJTJGc3ZnJTNFXCIpIGNlbnRlci8xMnB4IG5vLXJlcGVhdDt3aWR0aDo0MHB4O2hlaWdodDo0MHB4O29wYWNpdHk6Ljk7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3otaW5kZXg6MTAwMH06aG9zdCAuY2ctd3JhcHBlci5jZy1sYW5kc2NhcGUgLmNnLWltYWdlLXdyYXAgaW1ne2hlaWdodDoxMDAlfTpob3N0IC5jZy13cmFwcGVye3RyYW5zaXRpb246bm9uZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2Rpc3BsYXk6YmxvY2t9Omhvc3QgLmNnLXdyYXBwZXIgLmNnLWltYWdlLXdyYXAuY2ctcHJldi1pbWFnZXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZChjYWxjKC0xMDAlIC0gOHB4KSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZChjYWxjKC0xMDAlIC0gOHB4KSwwLDApfTpob3N0IC5jZy13cmFwcGVyIC5jZy1pbWFnZS13cmFwLmNnLW5leHQtaW1hZ2V7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoY2FsYygxMDAlICsgOHB4KSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZChjYWxjKDEwMCUgKyA4cHgpLDAsMCl9Omhvc3QgLmNnLXdyYXBwZXIgLmNnLWltYWdlLXdyYXB7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcjtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Omhvc3QgLmNnLXdyYXBwZXIgLmNnLWltYWdlLXdyYXAgaW1ne21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJTt3aWR0aDphdXRvO2hlaWdodDphdXRvO3Bvc2l0aW9uOnJlbGF0aXZlfTpob3N0IC5jZy13cmFwcGVyIC5jZy1pbWFnZS13cmFwIGltZy5jZy1oaWRle2Rpc3BsYXk6bm9uZX1gXVxufSlcbmV4cG9ydCBjbGFzcyBMaWdodGJveE1vYmlsZUNvbXBvbmVudCB7IFxuXHRfaW5kZXg6IGFueTtcbiAgICBwcmV2SW5kZXg6IGFueTtcbiAgICBuZXh0SW5kZXg6IGFueTtcblxuICAgIGN1cnJJbWFnZSA9IHtcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgIGluZGV4OiAwXG4gICAgfTsgXG5cbiAgICBwcmV2SW1hZ2UgPSB7XG4gICAgICAgIGxvYWRlZDogZmFsc2VcbiAgICB9OyBcblxuICAgIG5leHRJbWFnZSA9IHtcbiAgICAgICAgbG9hZGVkOiBmYWxzZVxuICAgIH07IFxuXG4gICAgd3JhcHBlclByb3A6IGFueTtcbiAgICBsYW5kc2NhcGVNb2RlOiBhbnk7XG5cblx0Y2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBASW5wdXQoKSBkYXRhOiBhbnk7XG5cbiAgICBAVmlld0NoaWxkKCd3cmFwcGVyJykgd3JhcHBlckVsOiBFbGVtZW50UmVmO1xuXG4gICAgZ2V0IGltYWdlcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmltYWdlcztcbiAgICB9XG5cbiAgICBnZXQgY29uZmlnKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuY29uZmlnO1xuICAgIH1cblxuICAgIGdldCBpbmRleCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJySW1hZ2UuaW5kZXg7XG4gICAgfVxuXG4gICAgZ2V0IGN1cnJJbWFnZVBhdGgoKXtcbiAgICAgICAgbGV0IGltYWdlID0gdGhpcy5pbWFnZXNbdGhpcy5pbmRleF07XG5cbiAgICAgICAgaWYgKCFpbWFnZSl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW1hZ2UucGF0aCl7XG4gICAgICAgICAgICBpbWFnZS5mdWxsID0gaW1hZ2UucGF0aDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGltYWdlO1xuICAgIH1cblxuICAgIGdldCBwcmV2SW1hZ2VQYXRoKCl7XG4gICAgICAgIGlmICh0aGlzLnByZXZJbmRleCA8IDAgJiYgdGhpcy5jb25maWcubG9vcCl7XG4gICAgICAgICAgICB0aGlzLnByZXZJbmRleCA9IHRoaXMubGF0ZXN0SW1hZ2VJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbWFnZSA9IHRoaXMuaW1hZ2VzW3RoaXMucHJldkluZGV4XTtcblxuICAgICAgICBpZiAoaW1hZ2UgJiYgaW1hZ2UucGF0aCl7XG4gICAgICAgICAgICBpbWFnZS5mdWxsID0gaW1hZ2UucGF0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW1hZ2U7XG4gICAgfVxuXG4gICAgZ2V0IG5leHRJbWFnZVBhdGgoKXtcbiAgICAgICAgbGV0IGltYWdlID0gdGhpcy5pbWFnZXNbdGhpcy5uZXh0SW5kZXhdO1xuXG4gICAgICAgIGlmIChpbWFnZSAmJiBpbWFnZS5wYXRoKXtcbiAgICAgICAgICAgIGltYWdlLmZ1bGwgPSBpbWFnZS5wYXRoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbWFnZTtcbiAgICB9XG5cbiAgICBnZXQgaXNGaXJzdCgpe1xuICAgICAgICBpZiAodGhpcy5jb25maWcubG9vcCl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgXHQgICAgcmV0dXJuIHRoaXMuaW5kZXggPT09IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgaXNMYXN0KCl7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5sb29wKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluZGV4ID09PSB0aGlzLmxhdGVzdEltYWdlSW5kZXg7XG4gICAgICAgIH0gICAgICAgIFxuICAgIH1cblxuICAgIGdldCBsYXRlc3RJbWFnZUluZGV4KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlcy5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIGdldCBpc0xhbmRzY2FwZSgpe1xuICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jZy1zaG93JykgbGlnaHRib3hTaG93bjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gICAgb25XaW5kb3dSZXNpemUoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLmxhbmRzY2FwZU1vZGUgPSB0aGlzLmlzTGFuZHNjYXBlO1xuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpe1xuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuY3VyckltYWdlLmluZGV4ID0gdGhpcy5jb25maWcuaW5kZXg7XG4gICAgICAgIHRoaXMucHJldkluZGV4ID0gdGhpcy5jdXJySW1hZ2UuaW5kZXgtMTtcbiAgICAgICAgdGhpcy5uZXh0SW5kZXggPSB0aGlzLmN1cnJJbWFnZS5pbmRleCsxO1xuXG4gICAgICAgIHRoaXMuc2hvd0xpZ2h0Ym94KCk7XG4gICAgfVxuXG4gICAgc2hvd0xpZ2h0Ym94KCl7XG4gICAgICAgIHRoaXMuY3VyckltYWdlLnNob3cgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgdGhpcy5saWdodGJveFNob3duID0gdHJ1ZTtcbiAgICAgICAgfSwgMzApO1xuICAgIH1cblxuXHRjbG9zZUxpZ2h0Ym94KCl7XG5cdFx0dGhpcy5saWdodGJveFNob3duID0gZmFsc2U7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICB0aGlzLmNsb3NlLmVtaXQodHJ1ZSk7XG4gICAgICAgIH0sIDIwMCk7IFxuXHR9XG5cbiAgICBzbGlkZShldmVudDogYW55KXtcbiAgICAgICAgaWYgKGV2ZW50ID09PSAnbmV4dCcpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5pc0xhc3Qpe1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyckltYWdlLmluZGV4Kys7XG4gICAgICAgICAgICAgICAgfSwgMjAwKTsgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4ID09PSB0aGlzLmxhdGVzdEltYWdlSW5kZXgpe1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJJbWFnZS5pbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgfSwgMjAwKTsgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJTbGlkZSgnbmV4dCcpO1xuICAgICAgICAgICAgfSwgMzAwKTsgXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQgPT09ICdwcmV2Jyl7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzRmlyc3Qpe1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyckltYWdlLmluZGV4LS07XG4gICAgICAgICAgICAgICAgfSwgMjAwKTsgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4ID09PSAwKXtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJySW1hZ2UuaW5kZXggPSB0aGlzLmxhdGVzdEltYWdlSW5kZXg7XG4gICAgICAgICAgICAgICAgfSwgMjAwKTsgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJTbGlkZSgncHJldicpO1xuICAgICAgICAgICAgfSwgMzAwKTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZnRlclNsaWRlKGV2ZW50VHlwZTogYW55KXtcbiAgICAgICAgdGhpcy5jdXJySW1hZ2Uuc2hvdyA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5pbmRleCA9PT0gdGhpcy5sYXRlc3RJbWFnZUluZGV4ICYmIHRoaXMuY29uZmlnLmxvb3Ape1xuICAgICAgICAgICAgdGhpcy5uZXh0SW5kZXggPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5uZXh0SW5kZXggPSB0aGlzLmluZGV4KzE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbmRleCA9PT0gMCAmJiB0aGlzLmNvbmZpZy5sb29wKXtcbiAgICAgICAgICAgIHRoaXMucHJldkluZGV4ID0gdGhpcy5sYXRlc3RJbWFnZUluZGV4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcmV2SW5kZXggPSB0aGlzLmluZGV4LTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnRUeXBlID09PSAncHJldicpe1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJldkltYWdlLmxvYWRlZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJySW1hZ2UubG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2SW1hZ2UubG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuY3VyckltYWdlLmxvYWRlZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0SW1hZ2UubG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnRUeXBlID09PSAnbmV4dCcpe1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMubmV4dEltYWdlLmxvYWRlZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJySW1hZ2UubG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0SW1hZ2UubG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuY3VyckltYWdlLmxvYWRlZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2SW1hZ2UubG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRlZmF1bHRXcmFwcGVyUG9zaXRpb24oKTtcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIG9uSW1hZ2VMb2FkZWQoZWxlbTogYW55KXtcbiAgICAgICAgdGhpc1tlbGVtXS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgaGFuZGxlUGluY2hFdmVudHMoJGV2ZW50KXtcbiAgICAgICAgaWYgKCRldmVudCA9PT0gJ3ByZXYnKXtcbiAgICAgICAgICAgIHRoaXMuc2xpZGUoJ3ByZXYnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJGV2ZW50ID09PSAnbmV4dCcpe1xuICAgICAgICAgICAgdGhpcy5zbGlkZSgnbmV4dCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVmYXVsdFdyYXBwZXJQb3NpdGlvbigpe1xuICAgICAgICBsZXQgZWxlbSA9IHRoaXMud3JhcHBlckVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGVsZW0uc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgMG1zJztcbiAgICAgICAgZWxlbS5zdHlsZS50cmFuc2Zvcm0gPSAnbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApJztcbiAgICAgICAgZWxlbS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAnbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApJztcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IGRlZmF1bHRDb25maWcgPSB7XG5cdG1hc29ucnk6IHRydWUsXG5cdG1hc29ucnlNYXhIZWlnaHQ6IDIwMCxcblx0bWFzb25yeUd1dHRlcjogNCxcblx0bG9vcDogZmFsc2UsXG5cdGluZGV4OiAwLFxuXHRiYWNrZ3JvdW5kT3BhY2l0eTogMC44NSxcblx0Y291bnRlcjogZmFsc2UsXG5cdGxpZ2h0Ym94TWF4SGVpZ2h0OiBcIjEwMCVcIixcblx0bGlnaHRib3hNYXhXaWR0aDogXCIxMDAlXCIsXG5cdGFuaW1hdGlvbkR1cmF0aW9uOiAxMDBcbn0iLCJpbXBvcnQge1xuICAgIEluamVjdGFibGUsXG4gICAgSW5qZWN0b3IsXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIEVtYmVkZGVkVmlld1JlZixcbiAgICBBcHBsaWNhdGlvblJlZixcbiAgICBDb21wb25lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExpZ2h0Ym94Q29tcG9uZW50IH0gZnJvbSAnLi9saWdodGJveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlnaHRib3hNb2JpbGVDb21wb25lbnQgfSBmcm9tICcuL2xpZ2h0Ym94LW1vYmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgZGVmYXVsdENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBBZENvbXBvbmVudCB7XG4gIGRhdGE6IGFueTtcbiAgY2xvc2U6IGFueTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENyeXN0YWxMaWdodGJveCB7XG5cbiAgICBnZXQgaXNNb2JpbGUoKSB7XG4gICAgICAgIHZhciBjaGVjayA9IGZhbHNlO1xuICAgICAgICAoZnVuY3Rpb24oYSl7aWYoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYSl8fC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCw0KSkpIGNoZWNrID0gdHJ1ZTt9KShuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yKTtcbiAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH07XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG5cdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3Jcblx0KSB7IH1cbiBcblx0YXBwZW5kQ29tcG9uZW50VG9Cb2R5KGNvbXBvbmVudDogYW55LCBkYXRhOiBhbnkpIHtcdFx0XG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcblx0XHRcdC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpXG5cdFx0XHQuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuXG5cdFx0KDxBZENvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblx0XHRjb25zdCBkb21FbGVtID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRWxlbSk7XG5cdFx0XG4gICAgICAgICg8QWRDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5jbG9zZS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0dGhpcy5hcHBSZWYuZGV0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXHRcdFx0Y29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG5cdH1cblxuXHRvcGVuKGltYWdlczogYW55LCBjb25maWc6IGFueSA9IHt9KXtcblx0XHRjb25maWcgPSB0aGlzLmFwcGx5Q29uZmlnRGVmYXVsdHMoZGVmYXVsdENvbmZpZywgY29uZmlnKTtcblx0XHRsZXQgZGF0YSA9IHtcblx0XHRcdGltYWdlcywgXG5cdFx0XHRjb25maWdcblx0XHR9O1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5nZXRMaWdodGJveENvbXBvbmVudCgpO1xuICAgICAgICBcblx0XHR0aGlzLmFwcGVuZENvbXBvbmVudFRvQm9keShjb21wb25lbnQsIGRhdGEpO1xuXHR9XG5cblx0Z2V0TGlnaHRib3hDb21wb25lbnQoKXtcblx0XHRyZXR1cm4gIXRoaXMuaXNNb2JpbGUgPyBMaWdodGJveENvbXBvbmVudCA6IExpZ2h0Ym94TW9iaWxlQ29tcG9uZW50O1xuXHR9XG5cblx0YXBwbHlDb25maWdEZWZhdWx0cyhkZWZhdWx0Q29uZmlnLCBjb25maWcpe1xuXHRcdGlmICghY29uZmlnLmluZGV4KXsgXG5cdFx0XHRjb25maWcuaW5kZXggPSAwO1xuXHRcdH1cblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q29uZmlnLCBjb25maWcpO1xuXHR9XG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENyeXN0YWxMaWdodGJveCB9IGZyb20nLi9kb20uc2VydmljZSdcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY3J5c3RhbC1nYWxsZXJ5JywgXG5cdHRlbXBsYXRlOiBgPGRpdiAjY29udGVudFdyYXBwZXIgW2hpZGRlbl09XCJpc05nQ29udGVudFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuXG48bWFzb25yeS1sYXlvdXQgXG4gICAgY2xhc3M9XCJjZy13cmFwcGVyXCJcbiAgICAqbmdJZj1cIiFpc05nQ29udGVudFwiIFxuXG4gICAgW21heC1oZWlnaHRdPVwibWFzb25yeU1heEhlaWdodFwiIFxuICAgIFtndXR0ZXJdPVwibWFzb25yeUd1dHRlclwiXG4gICAgW21hc29ucnldPVwibWFzb25yeVN0YXRlXCJcbiAgICBbY2xhc3MtbmFtZV09XCInY2ctaW1hZ2UnXCJcbiAgICBbaW1hZ2VzXT1cImltYWdlc1wiXG4gICAgKGV2ZW50cyk9XCJoYW5kbGVNYXNvbnJ5TGF5b3V0RXZlbnRzKCRldmVudClcIj48L21hc29ucnktbGF5b3V0PmAsXG4gICAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJX06aG9zdCAuY2ctd3JhcHBlcntkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7b3ZlcmZsb3c6aGlkZGVufTpob3N0IC5jZy13cmFwcGVyLmNnLXNob3d7aGVpZ2h0OmF1dG87cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTp0YWJsZX06aG9zdCAuY2ctaW1hZ2UgaW1ne2N1cnNvcjpwb2ludGVyO3dpZHRoOjEwMCV9YF0sXG59KVxuZXhwb3J0IGNsYXNzIEdhbGxlcnlDb21wb25lbnQge1xuXG4gICAgQElucHV0KCdpbWFnZXMnKSBpbWFnZXM6IGFueTtcbiAgICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55ID0ge307XG5cbiAgICBAVmlld0NoaWxkKCdjb250ZW50V3JhcHBlcicpIGNvbnRlbnRXcmFwcGVyOiBFbGVtZW50UmVmO1xuXG4gICAgZ2V0IGlzTmdDb250ZW50KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRlbnRXcmFwcGVyLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBnZXQgbWFzb25yeVN0YXRlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5tYXNvbnJ5O1xuICAgIH1cblxuICAgIGdldCBtYXNvbnJ5TWF4SGVpZ2h0KCl7XG4gICAgXHRyZXR1cm4gdGhpcy5jb25maWcubWFzb25yeU1heEhlaWdodDtcbiAgICB9XG5cbiAgICBnZXQgbWFzb25yeUd1dHRlcigpe1xuICAgIFx0cmV0dXJuIHRoaXMuY29uZmlnLm1hc29ucnlHdXR0ZXI7XG4gICAgfVxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgbGlnaHRib3g6IENyeXN0YWxMaWdodGJveCxcblx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcblx0KSB7fVxuXG5cdHNob3dMaWdodGJveChpbWFnZXM6IGFueSwgaTogbnVtYmVyKXtcbiAgICAgICAgdGhpcy5jb25maWcuaW5kZXggPSBpO1xuXHRcdHRoaXMubGlnaHRib3gub3BlbihpbWFnZXMsIHRoaXMuY29uZmlnKTtcblx0fVxuXG4gICAgaGFuZGxlTWFzb25yeUxheW91dEV2ZW50cyhldmVudCl7XG4gICAgICAgIHRoaXMuc2hvd0xpZ2h0Ym94KHRoaXMuaW1hZ2VzLCBldmVudC5pbmRleCk7XG4gICAgfVxufSIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2Uge1xuICAgIHBhdGg6IHN0cmluZzsgXG4gICAgd2lkdGg6IG51bWJlcjsgXG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgY29tcHV0ZWRIZWlnaHQ/OiBzdHJpbmc7XG4gICAgY29tcHV0ZWRXaWR0aD86IHN0cmluZztcbiAgICBtYXJnaW4/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlcyBleHRlbmRzIEFycmF5PEltYWdlPnt9XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWFzb25yeS1sYXlvdXQnLCBcbiAgICB0ZW1wbGF0ZTogYDxkaXYgXG5cdFtuZ0NsYXNzXT1cIkNMQVNTX05BTUVcIlxuXHQqbmdGb3I9XCJsZXQgaW1hZ2Ugb2YgaW1hZ2VzOyBsZXQgaSA9IGluZGV4O1wiXG4gICAgW3N0eWxlLndpZHRoXT1cImltYWdlLmNvbXB1dGVkV2lkdGhcIlxuICAgIFtzdHlsZS5oZWlnaHRdPVwiaW1hZ2UuY29tcHV0ZWRIZWlnaHRcIlxuICAgIFtzdHlsZS5mbG9hdF09XCInbGVmdCdcIlxuICAgIFtzdHlsZS5tYXJnaW5dPVwiaW1hZ2UubWFyZ2luXCJcbiAgICBbc3R5bGUuYmFja2dyb3VuZF09XCInI2VlZWVlZSdcIlxuICAgIFtzdHlsZS5saW5lSGVpZ2h0XT1cIjBcIj5cblx0PGltZyBcbiAgICAgICAgI2ltYWdlRWxlbVxuICAgICAgICBbc3JjXT1cImltYWdlLnByZXZpZXcgfHwgaW1hZ2UuZnVsbFwiIFxuICAgICAgICBbc3R5bGUud2lkdGguJV09XCIxMDBcIiBcbiAgICAgICAgW3N0eWxlLmhlaWdodF09XCInYXV0bydcIlxuICAgICAgICBbc3R5bGUub3BhY2l0eV09XCIwXCJcbiAgICAgICAgKGNsaWNrKT1cImNsaWNrT25JbWFnZShpbWFnZSwgaSlcIlxuICAgICAgICAobG9hZCk9XCJvbkltYWdlTG9hZGVkKGltYWdlRWxlbSlcIiAvPlxuPC9kaXY+YCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBNYXNvbnJ5TGF5b3V0Q29tcG9uZW50IHtcbiAgICBHVVRURVI6IG51bWJlciA9IDA7XG4gICAgbm9kZXM6IGFueTtcbiAgICBlbGVtOiBhbnk7XG4gICAgc2F2ZWROb2RlRGltZW5zaW9uczogYW55ID0gW107XG4gICAgb2JzZXJ2ZXI6IGFueTtcbiAgICBncmlkU3RhdGU6IHN0cmluZyA9ICdub3Qgc3RhcnRlZCc7XG4gICAgcmVzaXplVGltZXI6IGFueTtcbiAgICBjaGFuZ2VzVGltZXI6IGFueTtcblxuICAgIEBJbnB1dCgnaW1hZ2VzJykgaW1hZ2VzOiBJbWFnZXM7IFxuICAgIEBJbnB1dCgnbWFzb25yeScpIEVOQUJMRV9NQVNPTlJZOiBib29sZWFuID0gdHJ1ZTsgXG4gICAgQElucHV0KCdtYXgtaGVpZ2h0JykgTUFYX0hFSUdIVDogbnVtYmVyID0gNDAwOyBcbiAgICBASW5wdXQoJ2NsYXNzLW5hbWUnKSBDTEFTU19OQU1FOiBzdHJpbmcgfCB7IFtrZXk6IHN0cmluZ106IGFueTsgfTtcblxuICAgIEBJbnB1dCgnZ3V0dGVyJylcbiAgICBzZXQgZ3V0dGVyKHZhbHVlOiBudW1iZXIpe1xuICAgICAgICB0aGlzLkdVVFRFUiA9IHZhbHVlIC8gMjtcbiAgICB9XG5cbiAgICBAT3V0cHV0KCkgZXZlbnRzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgICBcbiAgICBnZXQgaXNNb2JpbGUoKTpib29sZWFuIHtcbiAgICAgICAgdmFyIGNoZWNrID0gZmFsc2U7XG4gICAgICAgIChmdW5jdGlvbihhKXtpZigvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKXx8LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLDQpKSkgY2hlY2sgPSB0cnVlO30pKG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3IpO1xuICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgfTtcbiAgICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKXtcbiAgICAgICAgdGhpcy5lbGVtID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gICAgb25XaW5kb3dSZXNpemUoZXZlbnQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZXIpO1xuXG4gICAgICAgIHRoaXMucmVzaXplVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZFN0YXRlID0gJ25vdCBzdGFydGVkJztcbiAgICAgICAgICAgIHRoaXMuYnVpbGRHcmlkKCk7IFxuICAgICAgICB9LCAyNTApO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJ1aWxkR3JpZCgpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCl7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNoYW5nZXNUaW1lcik7XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VzVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZFN0YXRlID0gJ25vdCBzdGFydGVkJztcbiAgICAgICAgICAgIHRoaXMuYnVpbGRHcmlkKCk7IFxuICAgICAgICB9LCAyNTApO1xuICAgIH1cblxuICAgIGJ1aWxkR3JpZCgpe1xuICAgICAgICBsZXQgcGFyZW50V2lkdGggPSBNYXRoLmZsb29yKHRoaXMuZWxlbS5wYXJlbnROb2RlLm9mZnNldFdpZHRoKTtcbiAgICAgICAgbGV0IHRvdGFsUm93V2lkdGg6IGFueSA9IDA7IFxuICAgICAgICBsZXQgcm93OiBhbnkgPSB7XG4gICAgICAgICAgICBzdGFydEluZGV4OiAwLFxuICAgICAgICAgICAgZW5kSW5kZXg6IDAsXG4gICAgICAgICAgICBsZW5ndGg6IDAsXG4gICAgICAgICAgICB0b3RhbFdpZHRoOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCF0aGlzLmltYWdlcyB8fCAhdGhpcy5pbWFnZXMubGVuZ3RoKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWxlbS5zdHlsZS53aWR0aCA9IHBhcmVudFdpZHRoICsncHgnO1xuICAgICAgICB0aGlzLmVsZW0uc3R5bGUuZGlzcGxheSA9ICd0YWJsZSc7XG5cbiAgICAgICAgdGhpcy5pbWFnZXMuZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChyb3cudG90YWxXaWR0aCA9PT0gMCl7XG4gICAgICAgICAgICAgICAgcm93LnN0YXJ0SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICByb3cubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm93Lmxlbmd0aCsrO1xuICAgICAgICAgICAgcm93LnRvdGFsV2lkdGggKz0gdGhpcy5nZXRDb21wdXRlZFdpZHRoKGluZGV4KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHJvdy50b3RhbFdpZHRoID49IHBhcmVudFdpZHRoIHx8IHRoaXMuaXNMYXN0Q2hpbGQoaW5kZXgpKXtcbiAgICAgICAgICAgICAgICByb3cuZW5kSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICBsZXQgc2NhbGluZyA9IHJvdy50b3RhbFdpZHRoL3BhcmVudFdpZHRoO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDb2xEaW1lbnNpb25zKHNjYWxpbmcsIHJvdyk7XG4gICAgICAgICAgICAgICAgcm93LnRvdGFsV2lkdGggPSAwOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0Q29sRGltZW5zaW9ucyhzY2FsaW5nOiBudW1iZXIsIHJvdzogYW55KXtcbiAgICAgICAgbGV0IHRvdGFsUm93V2lkdGg6IGFueSA9IDA7XG4gICAgICAgIGxldCBwYXJlbnRXaWR0aCA9IHRoaXMuZWxlbS5wYXJlbnROb2RlLm9mZnNldFdpZHRoO1xuICAgICAgICBzY2FsaW5nID0gKHNjYWxpbmcgPCAxKSA/IDEgOiBzY2FsaW5nO1xuXG4gICAgICAgIHRoaXMuaW1hZ2VzLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuRU5BQkxFX01BU09OUlkpe1xuICAgICAgICAgICAgICAgIG5vZGUuY29tcHV0ZWRIZWlnaHQgPSB0aGlzLk1BWF9IRUlHSFQgKyAncHgnO1xuICAgICAgICAgICAgICAgIG5vZGUuY29tcHV0ZWRXaWR0aCA9IHRoaXMuZ2V0Q29tcHV0ZWRXaWR0aChpbmRleCkgKyAncHgnO1xuICAgICAgICAgICAgICAgIG5vZGUubWFyZ2luID0gdGhpcy5nZXROb2RlTWFyZ2luKHBhcmVudFdpZHRoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+PSByb3cuc3RhcnRJbmRleCAmJiBpbmRleCA8PSByb3cuZW5kSW5kZXgpe1xuICAgICAgICAgICAgICAgIGxldCBub2RlV2lkdGg7XG5cbiAgICAgICAgICAgICAgICAvLyBsYXN0IGltYWdlXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSByb3cuZW5kSW5kZXggJiYgc2NhbGluZyA+IDEpeyBcbiAgICAgICAgICAgICAgICAgICAgbm9kZVdpZHRoID0gKDEwMCAtIHRvdGFsUm93V2lkdGgpIC0gKCh0aGlzLkdVVFRFUiAqIDIpIC8gcGFyZW50V2lkdGggKiAxMDApO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmNvbXB1dGVkV2lkdGggPSAnY2FsYygnK25vZGVXaWR0aCsnJSknO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdyaWRTdGF0ZSA9PT0gJ25vdCBzdGFydGVkJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRTdGF0ZSA9ICdwcmUtYnVpbGRpbmcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkR3JpZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVXaWR0aCA9ICgodGhpcy5nZXRDb21wdXRlZFdpZHRoKGluZGV4KSAvIHNjYWxpbmcpIC8gcGFyZW50V2lkdGggKiAxMDApIC0gKChyb3cubGVuZ3RoICogKHRoaXMuR1VUVEVSICogMikpICogKHRoaXMuZ2V0Q29tcHV0ZWRXaWR0aChpbmRleCkgLyBzY2FsaW5nKSAvIHBhcmVudFdpZHRoKSAvIHBhcmVudFdpZHRoICogMTAwO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmNvbXB1dGVkV2lkdGggPSAnY2FsYygnK25vZGVXaWR0aCsnJSknO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdG90YWxSb3dXaWR0aCArPSBub2RlV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsUm93V2lkdGggKz0gKHRoaXMuR1VUVEVSIC8gcGFyZW50V2lkdGggKiAxMDApICogMjsgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGxhc3Qgcm93IGFuZCBsYXN0IGltYWdlXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSByb3cuZW5kSW5kZXggJiYgcm93Lmxlbmd0aCA9PT0gMSAmJiB0aGlzLmlzTW9iaWxlKXtcbiAgICAgICAgICAgICAgICBcdG5vZGVXaWR0aCA9IDEwMCAtICgodGhpcy5HVVRURVIgKiAyKSAvIHBhcmVudFdpZHRoICogMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IG5vZGUuaGVpZ2h0ICogKCBwYXJlbnRXaWR0aCAqIChub2RlV2lkdGggLyAxMDApIC8gbm9kZS53aWR0aCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGhlaWdodC8yIDwgdGhpcy5NQVhfSEVJR0hUKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuY29tcHV0ZWRXaWR0aCA9ICdjYWxjKCcrbm9kZVdpZHRoKyclKSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBub2RlLm1hcmdpbiA9IHRoaXMuZ2V0Tm9kZU1hcmdpbihwYXJlbnRXaWR0aCk7XG4gICAgICAgICAgICAgICAgbm9kZS5jb21wdXRlZEhlaWdodCA9IG5vZGUuaGVpZ2h0ICogKCBwYXJlbnRXaWR0aCAqIChub2RlV2lkdGggLyAxMDApIC8gbm9kZS53aWR0aCkgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRDb21wdXRlZFdpZHRoKGluZGV4OiBudW1iZXIpe1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZXNbaW5kZXhdLndpZHRoIC8gKHRoaXMuaW1hZ2VzW2luZGV4XS5oZWlnaHQgLyB0aGlzLk1BWF9IRUlHSFQpO1xuICAgIH1cblxuICAgIGlzTGFzdENoaWxkKGluZGV4OiBudW1iZXIpe1xuICAgICAgICByZXR1cm4gaW5kZXggKyAxID09PSB0aGlzLmltYWdlcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgZ2V0Tm9kZU1hcmdpbihwYXJlbnRXaWR0aDogbnVtYmVyKXtcbiAgICAgICAgcmV0dXJuICdjYWxjKCcrdGhpcy5HVVRURVIgLyBwYXJlbnRXaWR0aCAqIDEwMCsnJSknO1xuICAgIH1cblxuICAgIGNsaWNrT25JbWFnZShpbWFnZTogYW55LCBpOiBudW1iZXIpe1xuICAgICAgICB0aGlzLmV2ZW50cy5lbWl0KHtcbiAgICAgICAgICAgIHR5cGU6ICdjbGljay1vbi1pbWFnZScsXG4gICAgICAgICAgICBpbWFnZTogaW1hZ2UsXG4gICAgICAgICAgICBpbmRleDogaVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkltYWdlTG9hZGVkKGVsZW0pe1xuICAgICAgICBlbGVtLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3BpbmNoXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBQaW5jaERpcmVjdGl2ZXtcblxuICAgIGVsZW06IGFueTtcbiAgICBldmVudFR5cGU6IGFueTtcblxuICAgIHNjYWxlOiBhbnkgPSAxO1xuICAgIGluaXRpYWxTY2FsZTogYW55ID0gMTtcblxuICAgIHN0YXJ0WDogYW55O1xuICAgIHN0YXJ0WTogYW55O1xuXG4gICAgbW92ZVg6IGFueSA9IDA7XG4gICAgbW92ZVk6IGFueSA9IDA7XG4gICAgaW5pdGlhbE1vdmVYOiBhbnkgPSAwO1xuICAgIGluaXRpYWxNb3ZlWTogYW55ID0gMDtcblxuICAgIG1vdmVYQzogYW55O1xuICAgIG1vdmVZQzogYW55O1xuXG4gICAgZGlzdGFuY2U6IGFueTtcbiAgICBpbml0aWFsRGlzdGFuY2U6IGFueTtcblxuICAgIGlzTmV4dEltYWdlTG9hZGVkOiBhbnkgPSB0cnVlO1xuXG4gICAgQElucHV0KCkgaXNMYXN0OiBhbnk7XG4gICAgQElucHV0KCkgaXNGaXJzdDogYW55O1xuXG4gICAgQE91dHB1dCgpIGV2ZW50cyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKXtcbiAgICAgICAgdGhpcy5lbGVtID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigndG91Y2hzdGFydCcsIFsnJGV2ZW50J10pXG4gICAgdG91Y2hzdGFydEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9ICcwIDAnO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3RvdWNobW92ZScsIFsnJGV2ZW50J10pXG4gICAgdG91Y2htb3ZlSGFuZGxlcihldmVudCkge1xuICAgICAgICBsZXQgdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXM7XG5cbiAgICAgICAgaWYgKHRvdWNoZXMubGVuZ3RoID09PSAxICYmIHRoaXMuc2NhbGUgPT09IDEgJiYgIXRoaXMuZXZlbnRUeXBlIHx8IHRoaXMuZXZlbnRUeXBlID09ICdzd2lwZScpe1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzTmV4dEltYWdlTG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXZlbnRUeXBlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0WCA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFkgPSBldmVudC50b3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmV2ZW50VHlwZSA9ICdzd2lwZSc7XG5cbiAgICAgICAgICAgIHRoaXMubW92ZVggPSB0aGlzLmluaXRpYWxNb3ZlWCArIChldmVudC50b3VjaGVzWzBdLnBhZ2VYIC0gdGhpcy5zdGFydFgpO1xuICAgICAgICAgICAgdGhpcy5tb3ZlWSA9IDA7XG5cbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbSgwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3RvdWNoZW5kJywgWyckZXZlbnQnXSlcbiAgICB0b3VjaGVuZEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgbGV0IHRvdWNoZXMgPSBldmVudC50b3VjaGVzO1xuICAgICAgICBsZXQgaW1nID0gdGhpcy5lbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW1nXCIpWzBdO1xuXG4gICAgICAgIGlmICghdGhpcy5pc05leHRJbWFnZUxvYWRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5zY2FsZSA8IDEpe1xuICAgICAgICAgICAgdGhpcy5zY2FsZSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubW92ZVkgPiAwKXtcbiAgICAgICAgICAgIHRoaXMubW92ZVkgPSAwO1xuICAgICAgICB9IFxuXG4gICAgICAgIGlmICh0aGlzLm1vdmVYID4gMTAwKXtcbiAgICAgICAgICAgIHRoaXMuc2xpZGUoJ3ByZXYnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmVYIDwgLTEwMCl7XG4gICAgICAgICAgICB0aGlzLnNsaWRlKCduZXh0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVYID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdGlhbFNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICAgICAgdGhpcy5pbml0aWFsTW92ZVggPSB0aGlzLm1vdmVYO1xuICAgICAgICB0aGlzLmluaXRpYWxNb3ZlWSA9IHRoaXMubW92ZVk7XG5cbiAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtKDIwMCk7IFxuXG4gICAgICAgIHRoaXMuZXZlbnRUeXBlID0gJ3RvdWNoZW5kJzsgICAgICAgIFxuICAgICAgICBpZiAodG91Y2hlcy5sZW5ndGggPT0gMCl7XG4gICAgICAgICAgICB0aGlzLmV2ZW50VHlwZSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2xpZGUoZXZlbnQ6IGFueSl7XG4gICAgICAgIHRoaXMub25TbGlkZShldmVudCk7XG5cbiAgICAgICAgaWYgKGV2ZW50ID09PSAncHJldicpe1xuICAgICAgICAgICAgdGhpcy5tb3ZlWCA9IHdpbmRvdy5pbm5lcldpZHRoICsgODsgXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ZpcnN0KXtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVYID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQgPT09ICduZXh0Jyl7XG4gICAgICAgICAgICB0aGlzLm1vdmVYID0gLXdpbmRvdy5pbm5lcldpZHRoIC0gODtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTGFzdCl7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlWCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzTmV4dEltYWdlTG9hZGVkID0gZmFsc2U7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vdmVYID0gMDtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbE1vdmVYID0gMDtcbiAgICAgICAgICAgIHRoaXMuaXNOZXh0SW1hZ2VMb2FkZWQgPSB0cnVlO1xuICAgICAgICB9LCAyMDApO1xuICAgIH1cblxuICAgIG9uU2xpZGUoZXZlblR5cGU6YW55KSB7XG4gICAgICAgIHRoaXMuZXZlbnRzLmVtaXQoZXZlblR5cGUpO1xuICAgIH1cblxuICAgIHRyYW5zZm9ybUVsZW0oZHVyYXRpb246IGFueSA9IDUwKXtcbiAgICAgICAgbGV0IG1hdHJpeFZhbCA9ICdtYXRyaXgoJysgTnVtYmVyKHRoaXMuc2NhbGUpICsnLCcrIDAgKycsJysgMCArJywnKyBOdW1iZXIodGhpcy5zY2FsZSkgKycsJysgTnVtYmVyKHRoaXMubW92ZVgpICsnLCcrIE51bWJlcih0aGlzLm1vdmVZKSArJyknO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5lbGVtLnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsICcrIGR1cmF0aW9uICsnbXMnO1xuICAgICAgICB0aGlzLmVsZW0uc3R5bGUudHJhbnNmb3JtID0gbWF0cml4VmFsO1xuICAgICAgICB0aGlzLmVsZW0uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gbWF0cml4VmFsO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IExpZ2h0Ym94Q29tcG9uZW50IH0gZnJvbSAnLi9saWdodGJveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlnaHRib3hNb2JpbGVDb21wb25lbnQgfSBmcm9tICcuL2xpZ2h0Ym94LW1vYmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2FsbGVyeUNvbXBvbmVudCB9IGZyb20gJy4vZ2FsbGVyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3J5c3RhbExpZ2h0Ym94IH0gZnJvbScuL2RvbS5zZXJ2aWNlJyBcbmltcG9ydCB7IE1hc29ucnlMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL21hc29ucnktbGF5b3V0LmNvbXBvbmVudCc7IFxuaW1wb3J0IHsgUGluY2hEaXJlY3RpdmUgfSBmcm9tICcuL3BpbmNoLmRpcmVjdGl2ZSc7IFxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBMaWdodGJveENvbXBvbmVudCxcbiAgICAgICAgTGlnaHRib3hNb2JpbGVDb21wb25lbnQsXG4gICAgICAgIEdhbGxlcnlDb21wb25lbnQsXG4gICAgICAgIE1hc29ucnlMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIFBpbmNoRGlyZWN0aXZlXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBHYWxsZXJ5Q29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ3J5c3RhbExpZ2h0Ym94XG4gICAgXSxcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgXG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgTGlnaHRib3hDb21wb25lbnQsXG4gICAgICAgIExpZ2h0Ym94TW9iaWxlQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDcnlzdGFsR2FsbGVyeU1vZHVsZSB7IH1cbiJdfQ==

/***/ }),

/***/ 25918:
/*!***************************************************************************************!*\
  !*** ./node_modules/ngx-masonry-gallery/__ivy_ngcc__/fesm2015/ngx-masonry-gallery.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMasonryGalleryImage": function() { return /* binding */ IMasonryGalleryImage; },
/* harmony export */   "MasonryGalleryComponent": function() { return /* binding */ MasonryGalleryComponent; },
/* harmony export */   "MasonryGalleryModule": function() { return /* binding */ MasonryGalleryModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imagesloaded */ 96302);
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(imagesloaded__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! masonry-layout */ 98745);
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(masonry_layout__WEBPACK_IMPORTED_MODULE_1__);





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

class Utilities {
    /**
     * @return {?}
     */
    newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (/**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            // tslint:disable-next-line:no-bitwise triple-equals
            /** @type {?} */
            const r = Math.random() * 16 | 0;
            /** @type {?} */
            const v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }));
    }
}
/** @type {?} */
let utilities = new Utilities();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MasonryGalleryComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.images = [];
        this.width = 330;
        this.gutter = 5;
        this.verticalGutter = 5;
        this.imageClasses = [];
        this.clickImage = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.removeComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.layoutComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.galleryGuid = utilities.newGuid();
        this.mansonryItemSelectorClass = `grid-item-${this.galleryGuid}`;
        this.activeImages = [];
        this.viewReady = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.images && changes.images.currentValue) {
            if (!this.viewReady) {
                // process images once we can
                this.changesToProcess = changes;
            }
            else {
                this.processImages(changes);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.msnry) {
            this.msnry.destroy();
        }
    }
    /**
     * @param {?} image
     * @return {?}
     */
    handleClick(image) {
        this.clickImage.next(image);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.viewReady = true;
        this.initMasonry();
        // process images now
        if (this.changesToProcess) {
            this.processImages(this.changesToProcess);
            this.changesToProcess = undefined;
        }
    }
    /**
     * @param {?} images
     * @return {?}
     */
    addImages(images) {
        if (images && images.length > 0) {
            this.addImagesToGallery(images);
        }
    }
    /**
     * @param {?} images
     * @return {?}
     */
    removeImages(images) {
        if (images && images.length > 0) {
            images.forEach((/**
             * @param {?} image
             * @return {?}
             */
            image => {
                this.removeImageFromGallery(image);
            }));
        }
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    processImages(changes) {
        /** @type {?} */
        const imagesToProcess = this.getAddedAndRemovesImages(changes);
        // add images to mansonry layout
        this.addImages(imagesToProcess.addedImages);
        // removes images from layout
        this.removeImages(imagesToProcess.removedImages);
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    getAddedAndRemovesImages(changes) {
        /** @type {?} */
        let addedImages = [];
        /** @type {?} */
        const removedImages = [];
        /** @type {?} */
        const newImagesValue = (/** @type {?} */ (changes.images
            .currentValue));
        /** @type {?} */
        const oldImagesValue = (/** @type {?} */ (changes.images
            .previousValue));
        if (!oldImagesValue) {
            // all images are new ones
            addedImages = changes.images.currentValue;
        }
        else {
            // process added images
            newImagesValue.forEach((/**
             * @param {?} newImage
             * @return {?}
             */
            newImage => {
                /** @type {?} */
                const existingImage = oldImagesValue.find((/**
                 * @param {?} m
                 * @return {?}
                 */
                m => m.imageUrl.toLowerCase() === newImage.imageUrl.toLowerCase()));
                if (existingImage) ;
                else {
                    // image is new
                    addedImages.push(newImage);
                }
            }));
            // process removed images
            oldImagesValue.forEach((/**
             * @param {?} oldImage
             * @return {?}
             */
            oldImage => {
                /** @type {?} */
                const existingImage = newImagesValue.find((/**
                 * @param {?} m
                 * @return {?}
                 */
                m => m.imageUrl.toLowerCase() === oldImage.imageUrl.toLowerCase()));
                if (existingImage) ;
                else {
                    // image is removed
                    removedImages.push(oldImage);
                }
            }));
        }
        return {
            addedImages: addedImages,
            removedImages: removedImages
        };
    }
    /**
     * @private
     * @return {?}
     */
    initMasonry() {
        this.grid = document.getElementById(this.galleryGuid);
        // remove all existing data from grid
        this.grid.innerHTML = '';
        if (!this.grid) {
            throw Error(`Could not init mansory due to non existing elem with id '${this.galleryGuid}'`);
        }
        this.msnry = new masonry_layout__WEBPACK_IMPORTED_MODULE_1__(this.grid, {
            // options...
            itemSelector: '.' + this.mansonryItemSelectorClass,
            columnWidth: this.width,
            gutter: this.gutter,
        });
        /** @type {?} */
        const that = this;
        this.msnry.on('layoutComplete', (/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            that.layoutComplete.next(items);
        }));
        this.msnry.on('removeComplete', (/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            that.removeComplete.next(items);
        }));
    }
    /**
     * @private
     * @param {?} image
     * @return {?}
     */
    removeImageFromGallery(image) {
        // get image guid
        /** @type {?} */
        const imageIdResult = this.activeImages.find((/**
         * @param {?} m
         * @return {?}
         */
        m => m.image.imageUrl.toLowerCase() === image.imageUrl.toLowerCase()));
        if (!imageIdResult) {
            // image was not found, this is probably an error
            console.warn(`Image with url '${image.imageUrl}' was not found. If you are adding images, make sure to 'replace' the images array with a new one
                so that detection change can be executed instead of just adding an image to array
                (which doesn't fire change detection on array property)`);
            return;
        }
        // find image based on its id
        /** @type {?} */
        const imageElem = document.getElementById(imageIdResult.id);
        if (!imageElem) {
            // image was not found in DOM
            console.warn(`Image with id '{${imageIdResult.id}}' was not found in DOM. Have you manipulated the DOM in some way?`);
            return;
        }
        // remove image from gallery
        this.msnry.remove(imageElem);
        // refresh layout
        this.msnry.layout();
        // remove image from array
        for (let i = 0; i < this.activeImages.length; i++) {
            /** @type {?} */
            const idWithImage = this.activeImages[i];
            if (idWithImage.image.imageUrl.toLowerCase() ===
                imageIdResult.image.imageUrl.toLowerCase()) {
                this.activeImages.splice(i, 1);
            }
        }
    }
    /**
     * @private
     * @param {?} images
     * @return {?}
     */
    addImagesToGallery(images) {
        if (!this.grid) {
            throw Error('Grid element is not yet ready, are you trying to add image too soon?');
        }
        /** @type {?} */
        const imagesWrapper = this.renderer.createElement('span');
        images.forEach((/**
         * @param {?} image
         * @return {?}
         */
        image => {
            // generate unique image id
            /** @type {?} */
            const imageId = this.getImageId();
            // create element
            /** @type {?} */
            const imageElem = this.renderer.createElement('img');
            imageElem.setAttribute('id', imageId);
            imageElem.setAttribute('alt', image.alt ? image.alt : 'no description');
            imageElem.setAttribute('src', image.imageUrl);
            // note - images are hidden by default and should be shown only after they are loaded
            imageElem.setAttribute('style', `display: none; width: ${this.width}px; margin-bottom: ${this.verticalGutter}px`);
            imageElem.className = this.getImageClass();
            imageElem.addEventListener('click', (/**
             * @return {?}
             */
            () => {
                this.handleClick(image);
            }));
            // store guid with this image
            this.activeImages.push({
                id: imageId,
                image: image
            });
            // add to dom and mansory & refresh layout
            this.renderer.appendChild(imagesWrapper, imageElem);
        }));
        // add html to dom
        this.renderer.appendChild(this.grid, imagesWrapper);
        // add images once they are loaded
        /** @type {?} */
        const imgLoad = imagesloaded__WEBPACK_IMPORTED_MODULE_0___default()(imagesWrapper);
        imgLoad.on('progress', (/**
         * @param {?} instance
         * @param {?} image
         * @return {?}
         */
        (instance, image) => {
            if (image.isLoaded) {
                this.renderer.appendChild(this.grid, image.img);
                // unhide image
                this.renderer.setStyle(image.img, 'display', 'block');
                this.msnry.appended(image.img);
                this.msnry.reloadItems();
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getImageClass() {
        /** @type {?} */
        let className = this.mansonryItemSelectorClass;
        if (this.imageClasses && this.imageClasses.length > 0) {
            /** @type {?} */
            const customClass = this.imageClasses.join(' ');
            className += ' ' + customClass;
        }
        return className;
    }
    /**
     * @private
     * @return {?}
     */
    getImageId() {
        return this.galleryGuid + '_' + utilities.newGuid();
    }
}
MasonryGalleryComponent.ɵfac = function MasonryGalleryComponent_Factory(t) { return new (t || MasonryGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2)); };
MasonryGalleryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MasonryGalleryComponent, selectors: [["ngx-masonry-gallery"]], inputs: { images: "images", width: "width", gutter: "gutter", verticalGutter: "verticalGutter", imageClasses: "imageClasses" }, outputs: { clickImage: "clickImage", removeComplete: "removeComplete", layoutComplete: "layoutComplete" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[3, "id"]], template: function MasonryGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.galleryGuid);
    } }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
MasonryGalleryComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2 }
];
MasonryGalleryComponent.propDecorators = {
    images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    gutter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    verticalGutter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    imageClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    clickImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    removeComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    layoutComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MasonryGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
                selector: 'ngx-masonry-gallery',
                template: '<div [id]="galleryGuid"></div>'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2 }]; }, { images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], gutter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], verticalGutter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], imageClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], clickImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], removeComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], layoutComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MasonryGalleryModule {
}
MasonryGalleryModule.ɵfac = function MasonryGalleryModule_Factory(t) { return new (t || MasonryGalleryModule)(); };
MasonryGalleryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MasonryGalleryModule });
MasonryGalleryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MasonryGalleryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
                ],
                declarations: [
                    MasonryGalleryComponent,
                ],
                exports: [
                    MasonryGalleryComponent,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MasonryGalleryModule, { declarations: function () { return [MasonryGalleryComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]; }, exports: function () { return [MasonryGalleryComponent]; } }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IMasonryGalleryImage {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-masonry-gallery.js.map

/***/ }),

/***/ 70346:
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-masonry/__ivy_ngcc__/fesm2015/ngx-masonry.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxMasonryComponent": function() { return /* binding */ NgxMasonryComponent; },
/* harmony export */   "NgxMasonryDirective": function() { return /* binding */ NgxMasonryDirective; },
/* harmony export */   "NgxMasonryModule": function() { return /* binding */ NgxMasonryModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 17238);







const _c0 = ["ngx-masonry", ""];
const _c1 = ["*"];
let masonryConstructor;
class NgxMasonryComponent {
    constructor(platformId, _element) {
        this.platformId = platformId;
        this._element = _element;
        this.updateLayout = false;
        this.ordered = false;
        // Outputs
        this.layoutComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.removeComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.itemsLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.pendingItems = [];
    }
    ngOnInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId) && masonryConstructor === undefined) {
            masonryConstructor = __webpack_require__(/*! masonry-layout */ 98745);
        }
        // Create masonry options object
        if (!this.options) {
            this.options = {};
        }
        // Set default itemSelector
        if (!this.options.itemSelector) {
            this.options.itemSelector = '[ngxMasonryItem], ngxMasonryItem';
        }
        this.options['transitionDuration'] = '0s';
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            // Initialize Masonry
            this.masonryInstance = new masonryConstructor(this._element.nativeElement, this.options);
            // Bind to events
            this.masonryInstance.on('layoutComplete', (items) => {
                this.layoutComplete.emit(items);
            });
            this.masonryInstance.on('removeComplete', (items) => {
                this.removeComplete.emit(items);
            });
        }
    }
    ngOnChanges(changes) {
        // only update layout if it's not the first change
        if (changes.updateLayout) {
            if (!changes.updateLayout.firstChange) {
                this.layout();
            }
        }
    }
    ngOnDestroy() {
        if (this.masonryInstance) {
            this.masonryInstance.destroy();
        }
    }
    layout() {
        setTimeout(() => {
            this.masonryInstance.layout();
        });
    }
    reloadItems() {
        setTimeout(() => {
            this.masonryInstance.reloadItems();
        });
    }
    addPendingItem(item) {
        this.pendingItems.push(item);
    }
    add(newItem) {
        if (this.ordered) {
            for (const [index, item] of this.pendingItems.entries()) {
                if (item) {
                    if (item.images && item.images.size === 0) {
                        this.pendingItems[index] = undefined;
                        this.itemLoaded(item);
                        if (index + 1 === this.pendingItems.length) {
                            // All items are loaded
                            this.itemsLoaded.emit(this.pendingItems.length);
                            this.pendingItems = [];
                        }
                    }
                    else {
                        return;
                    }
                }
            }
        }
        else {
            this.itemLoaded(newItem);
        }
    }
    itemLoaded(item) {
        // Tell Masonry that a child element has been added
        if (item.prepend) {
            this.masonryInstance.prepended(item.element.nativeElement);
        }
        else {
            this.masonryInstance.appended(item.element.nativeElement);
        }
        // Check if first item
        if (this.masonryInstance.items.length === 1) {
            this.masonryInstance.layout();
        }
        item.playAnimation(true);
    }
    remove(element) {
        // Tell Masonry that a child element has been removed
        this.masonryInstance.remove(element);
        // Layout items
        this.layout();
    }
}
NgxMasonryComponent.ɵfac = function NgxMasonryComponent_Factory(t) { return new (t || NgxMasonryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
NgxMasonryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxMasonryComponent, selectors: [["", "ngx-masonry", ""], ["ngx-masonry"]], inputs: { updateLayout: "updateLayout", ordered: "ordered", options: "options" }, outputs: { layoutComplete: "layoutComplete", removeComplete: "removeComplete", itemsLoaded: "itemsLoaded" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], attrs: _c0, ngContentSelectors: _c1, decls: 1, vars: 0, template: function NgxMasonryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["[_nghost-%COMP%] {\n\t\t\tdisplay: block;\n\t\t}"] });
NgxMasonryComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
NgxMasonryComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    updateLayout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    ordered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    layoutComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    removeComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    itemsLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMasonryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: '[ngx-masonry], ngx-masonry',
                template: '<ng-content></ng-content>',
                styles: [`
		:host {
			display: block;
		}
	`]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, { updateLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], ordered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], layoutComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], removeComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], itemsLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class NgxMasonryDirective {
    constructor(element, builder, parent, renderer) {
        this.element = element;
        this.builder = builder;
        this.parent = parent;
        this.renderer = renderer;
        this.prepend = false;
        this.animations = {
            show: [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ opacity: 0 }),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('400ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ opacity: 1 })),
            ],
            hide: [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ opacity: '*' }),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('400ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ opacity: 0 })),
            ]
        };
    }
    ngOnInit() {
        if (this.parent.options.animations !== undefined) {
            this.animations = this.parent.options.animations;
        }
        this.renderer.setStyle(this.element.nativeElement, 'position', 'fixed');
        this.renderer.setStyle(this.element.nativeElement, 'right', '-150vw');
        this.parent.addPendingItem(this);
    }
    ngAfterViewInit() {
        const images = Array.from(this.element.nativeElement.getElementsByTagName('img'));
        if (images.length === 0) {
            setTimeout(() => {
                this.parent.add(this);
            });
        }
        else {
            this.images = new Set(images);
            for (const imageRef of images) {
                // skip image render check if image has `masonryLazy` attribute
                if (imageRef.hasAttribute('masonryLazy')) {
                    this.imageLoaded(imageRef);
                }
                else {
                    this.renderer.listen(imageRef, 'load', _ => {
                        this.imageLoaded(imageRef);
                    });
                    this.renderer.listen(imageRef, 'error', _ => {
                        this.imageLoaded(imageRef);
                    });
                }
            }
        }
    }
    ngOnDestroy() {
        if (this.images && this.images.size === 0 && this.element.nativeElement.parentNode) {
            this.playAnimation(false);
            this.parent.remove(this.element.nativeElement);
        }
    }
    imageLoaded(image) {
        this.images.delete(image);
        if (this.images.size === 0) {
            this.parent.add(this);
        }
    }
    playAnimation(show) {
        const metadata = show ? this.animations.show : this.animations.hide;
        if (metadata) {
            const player = this.builder.build(metadata).create(this.element.nativeElement);
            player.play();
        }
    }
}
NgxMasonryDirective.ɵfac = function NgxMasonryDirective_Factory(t) { return new (t || NgxMasonryDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_2__.AnimationBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgxMasonryComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
NgxMasonryDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgxMasonryDirective, selectors: [["", "ngxMasonryItem", ""], ["ngxMasonryItem"]], inputs: { prepend: "prepend" } });
NgxMasonryDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_2__.AnimationBuilder },
    { type: NgxMasonryComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgxMasonryComponent),] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }
];
NgxMasonryDirective.propDecorators = {
    prepend: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMasonryDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[ngxMasonryItem], ngxMasonryItem'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_animations__WEBPACK_IMPORTED_MODULE_2__.AnimationBuilder }, { type: NgxMasonryComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgxMasonryComponent)]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }]; }, { prepend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class NgxMasonryModule {
}
NgxMasonryModule.ɵfac = function NgxMasonryModule_Factory(t) { return new (t || NgxMasonryModule)(); };
NgxMasonryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxMasonryModule });
NgxMasonryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMasonryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [],
                declarations: [NgxMasonryComponent, NgxMasonryDirective],
                exports: [NgxMasonryComponent, NgxMasonryDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxMasonryModule, { declarations: [NgxMasonryComponent, NgxMasonryDirective], exports: [NgxMasonryComponent, NgxMasonryDirective] }); })();

/*
 * Public API Surface of ngx-masonry
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-masonry.js.map

/***/ }),

/***/ 15853:
/*!***************************************!*\
  !*** ./node_modules/outlayer/item.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ev-emitter/ev-emitter */ 82026),
        __webpack_require__(/*! get-size/get-size */ 32575)
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  var x = parseFloat( xValue );
  var y = parseFloat( yValue );
  // convert percent to pixels
  var layoutSize = this.layout.size;
  if ( xValue.indexOf('%') != -1 ) {
    x = ( x / 100 ) * layoutSize.width;
  }
  if ( yValue.indexOf('%') != -1 ) {
    y = ( y / 100 ) * layoutSize.height;
  }
  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var didNotMove = x == this.position.x && y == this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseFloat( x );
  this.position.y = parseFloat( y );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' + toDashedAll( transformProperty );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // munge number to millisecond, to match stagger
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- stagger ----- //

proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));


/***/ }),

/***/ 22933:
/*!*******************************************!*\
  !*** ./node_modules/outlayer/outlayer.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ev-emitter/ev-emitter */ 82026),
        __webpack_require__(/*! get-size/get-size */ 32575),
        __webpack_require__(/*! fizzy-ui-utils/utils */ 94060),
        __webpack_require__(/*! ./item */ 15853)
      ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};

// set stagger from option in milliseconds number
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- helpers ----- //

// how many milliseconds are in each unit
var msUnits = {
  ms: 1,
  s: 1000
};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));


/***/ }),

/***/ 22371:
/*!***************************************************************!*\
  !*** ./node_modules/photoswipe/dist/photoswipe-ui-default.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
/**
*
* UI on top of main sliding area (caption, arrows, close button, etc.).
* Built just using public methods/properties of PhotoSwipe.
* 
*/
(function (root, factory) { 
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
})(this, function () {

	'use strict';



var PhotoSwipeUI_Default =
 function(pswp, framework) {

	var ui = this;
	var _overlayUIUpdated = false,
		_controlsVisible = true,
		_fullscrenAPI,
		_controls,
		_captionContainer,
		_fakeCaptionContainer,
		_indexIndicator,
		_shareButton,
		_shareModal,
		_shareModalHidden = true,
		_initalCloseOnScrollValue,
		_isIdle,
		_listen,

		_loadingIndicator,
		_loadingIndicatorHidden,
		_loadingIndicatorTimeout,

		_galleryHasOneSlide,

		_options,
		_defaultUIOptions = {
			barsSize: {top:44, bottom:'auto'},
			closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'], 
			timeToIdle: 4000, 
			timeToIdleOutside: 1000,
			loadingIndicatorDelay: 1000, // 2s
			
			addCaptionHTMLFn: function(item, captionEl /*, isFake */) {
				if(!item.title) {
					captionEl.children[0].innerHTML = '';
					return false;
				}
				captionEl.children[0].innerHTML = item.title;
				return true;
			},

			closeEl:true,
			captionEl: true,
			fullscreenEl: true,
			zoomEl: true,
			shareEl: true,
			counterEl: true,
			arrowEl: true,
			preloaderEl: true,

			tapToClose: false,
			tapToToggleControls: true,

			clickToCloseNonZoomable: true,

			shareButtons: [
				{id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
				{id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
				{id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/'+
													'?url={{url}}&media={{image_url}}&description={{text}}'},
				{id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
			],
			getImageURLForShare: function( /* shareButtonData */ ) {
				return pswp.currItem.src || '';
			},
			getPageURLForShare: function( /* shareButtonData */ ) {
				return window.location.href;
			},
			getTextForShare: function( /* shareButtonData */ ) {
				return pswp.currItem.title || '';
			},
				
			indexIndicatorSep: ' / ',
			fitControlsWidth: 1200

		},
		_blockControlsTap,
		_blockControlsTapTimeout;



	var _onControlsTap = function(e) {
			if(_blockControlsTap) {
				return true;
			}


			e = e || window.event;

			if(_options.timeToIdle && _options.mouseUsed && !_isIdle) {
				// reset idle timer
				_onIdleMouseMove();
			}


			var target = e.target || e.srcElement,
				uiElement,
				clickedClass = target.getAttribute('class') || '',
				found;

			for(var i = 0; i < _uiElements.length; i++) {
				uiElement = _uiElements[i];
				if(uiElement.onTap && clickedClass.indexOf('pswp__' + uiElement.name ) > -1 ) {
					uiElement.onTap();
					found = true;

				}
			}

			if(found) {
				if(e.stopPropagation) {
					e.stopPropagation();
				}
				_blockControlsTap = true;

				// Some versions of Android don't prevent ghost click event 
				// when preventDefault() was called on touchstart and/or touchend.
				// 
				// This happens on v4.3, 4.2, 4.1, 
				// older versions strangely work correctly, 
				// but just in case we add delay on all of them)	
				var tapDelay = framework.features.isOldAndroid ? 600 : 30;
				_blockControlsTapTimeout = setTimeout(function() {
					_blockControlsTap = false;
				}, tapDelay);
			}

		},
		_fitControlsInViewport = function() {
			return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > _options.fitControlsWidth;
		},
		_togglePswpClass = function(el, cName, add) {
			framework[ (add ? 'add' : 'remove') + 'Class' ](el, 'pswp__' + cName);
		},

		// add class when there is just one item in the gallery
		// (by default it hides left/right arrows and 1ofX counter)
		_countNumItems = function() {
			var hasOneSlide = (_options.getNumItemsFn() === 1);

			if(hasOneSlide !== _galleryHasOneSlide) {
				_togglePswpClass(_controls, 'ui--one-slide', hasOneSlide);
				_galleryHasOneSlide = hasOneSlide;
			}
		},
		_toggleShareModalClass = function() {
			_togglePswpClass(_shareModal, 'share-modal--hidden', _shareModalHidden);
		},
		_toggleShareModal = function() {

			_shareModalHidden = !_shareModalHidden;
			
			
			if(!_shareModalHidden) {
				_toggleShareModalClass();
				setTimeout(function() {
					if(!_shareModalHidden) {
						framework.addClass(_shareModal, 'pswp__share-modal--fade-in');
					}
				}, 30);
			} else {
				framework.removeClass(_shareModal, 'pswp__share-modal--fade-in');
				setTimeout(function() {
					if(_shareModalHidden) {
						_toggleShareModalClass();
					}
				}, 300);
			}
			
			if(!_shareModalHidden) {
				_updateShareURLs();
			}
			return false;
		},

		_openWindowPopup = function(e) {
			e = e || window.event;
			var target = e.target || e.srcElement;

			pswp.shout('shareLinkClick', e, target);

			if(!target.href) {
				return false;
			}

			if( target.hasAttribute('download') ) {
				return true;
			}

			window.open(target.href, 'pswp_share', 'scrollbars=yes,resizable=yes,toolbar=no,'+
										'location=yes,width=550,height=420,top=100,left=' + 
										(window.screen ? Math.round(screen.width / 2 - 275) : 100)  );

			if(!_shareModalHidden) {
				_toggleShareModal();
			}
			
			return false;
		},
		_updateShareURLs = function() {
			var shareButtonOut = '',
				shareButtonData,
				shareURL,
				image_url,
				page_url,
				share_text;

			for(var i = 0; i < _options.shareButtons.length; i++) {
				shareButtonData = _options.shareButtons[i];

				image_url = _options.getImageURLForShare(shareButtonData);
				page_url = _options.getPageURLForShare(shareButtonData);
				share_text = _options.getTextForShare(shareButtonData);

				shareURL = shareButtonData.url.replace('{{url}}', encodeURIComponent(page_url) )
									.replace('{{image_url}}', encodeURIComponent(image_url) )
									.replace('{{raw_image_url}}', image_url )
									.replace('{{text}}', encodeURIComponent(share_text) );

				shareButtonOut += '<a href="' + shareURL + '" target="_blank" '+
									'class="pswp__share--' + shareButtonData.id + '"' +
									(shareButtonData.download ? 'download' : '') + '>' + 
									shareButtonData.label + '</a>';

				if(_options.parseShareButtonOut) {
					shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
				}
			}
			_shareModal.children[0].innerHTML = shareButtonOut;
			_shareModal.children[0].onclick = _openWindowPopup;

		},
		_hasCloseClass = function(target) {
			for(var  i = 0; i < _options.closeElClasses.length; i++) {
				if( framework.hasClass(target, 'pswp__' + _options.closeElClasses[i]) ) {
					return true;
				}
			}
		},
		_idleInterval,
		_idleTimer,
		_idleIncrement = 0,
		_onIdleMouseMove = function() {
			clearTimeout(_idleTimer);
			_idleIncrement = 0;
			if(_isIdle) {
				ui.setIdle(false);
			}
		},
		_onMouseLeaveWindow = function(e) {
			e = e ? e : window.event;
			var from = e.relatedTarget || e.toElement;
			if (!from || from.nodeName === 'HTML') {
				clearTimeout(_idleTimer);
				_idleTimer = setTimeout(function() {
					ui.setIdle(true);
				}, _options.timeToIdleOutside);
			}
		},
		_setupFullscreenAPI = function() {
			if(_options.fullscreenEl && !framework.features.isOldAndroid) {
				if(!_fullscrenAPI) {
					_fullscrenAPI = ui.getFullscreenAPI();
				}
				if(_fullscrenAPI) {
					framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
					ui.updateFullscreen();
					framework.addClass(pswp.template, 'pswp--supports-fs');
				} else {
					framework.removeClass(pswp.template, 'pswp--supports-fs');
				}
			}
		},
		_setupLoadingIndicator = function() {
			// Setup loading indicator
			if(_options.preloaderEl) {
			
				_toggleLoadingIndicator(true);

				_listen('beforeChange', function() {

					clearTimeout(_loadingIndicatorTimeout);

					// display loading indicator with delay
					_loadingIndicatorTimeout = setTimeout(function() {

						if(pswp.currItem && pswp.currItem.loading) {

							if( !pswp.allowProgressiveImg() || (pswp.currItem.img && !pswp.currItem.img.naturalWidth)  ) {
								// show preloader if progressive loading is not enabled, 
								// or image width is not defined yet (because of slow connection)
								_toggleLoadingIndicator(false); 
								// items-controller.js function allowProgressiveImg
							}
							
						} else {
							_toggleLoadingIndicator(true); // hide preloader
						}

					}, _options.loadingIndicatorDelay);
					
				});
				_listen('imageLoadComplete', function(index, item) {
					if(pswp.currItem === item) {
						_toggleLoadingIndicator(true);
					}
				});

			}
		},
		_toggleLoadingIndicator = function(hide) {
			if( _loadingIndicatorHidden !== hide ) {
				_togglePswpClass(_loadingIndicator, 'preloader--active', !hide);
				_loadingIndicatorHidden = hide;
			}
		},
		_applyNavBarGaps = function(item) {
			var gap = item.vGap;

			if( _fitControlsInViewport() ) {
				
				var bars = _options.barsSize; 
				if(_options.captionEl && bars.bottom === 'auto') {
					if(!_fakeCaptionContainer) {
						_fakeCaptionContainer = framework.createEl('pswp__caption pswp__caption--fake');
						_fakeCaptionContainer.appendChild( framework.createEl('pswp__caption__center') );
						_controls.insertBefore(_fakeCaptionContainer, _captionContainer);
						framework.addClass(_controls, 'pswp__ui--fit');
					}
					if( _options.addCaptionHTMLFn(item, _fakeCaptionContainer, true) ) {

						var captionSize = _fakeCaptionContainer.clientHeight;
						gap.bottom = parseInt(captionSize,10) || 44;
					} else {
						gap.bottom = bars.top; // if no caption, set size of bottom gap to size of top
					}
				} else {
					gap.bottom = bars.bottom === 'auto' ? 0 : bars.bottom;
				}
				
				// height of top bar is static, no need to calculate it
				gap.top = bars.top;
			} else {
				gap.top = gap.bottom = 0;
			}
		},
		_setupIdle = function() {
			// Hide controls when mouse is used
			if(_options.timeToIdle) {
				_listen('mouseUsed', function() {
					
					framework.bind(document, 'mousemove', _onIdleMouseMove);
					framework.bind(document, 'mouseout', _onMouseLeaveWindow);

					_idleInterval = setInterval(function() {
						_idleIncrement++;
						if(_idleIncrement === 2) {
							ui.setIdle(true);
						}
					}, _options.timeToIdle / 2);
				});
			}
		},
		_setupHidingControlsDuringGestures = function() {

			// Hide controls on vertical drag
			_listen('onVerticalDrag', function(now) {
				if(_controlsVisible && now < 0.95) {
					ui.hideControls();
				} else if(!_controlsVisible && now >= 0.95) {
					ui.showControls();
				}
			});

			// Hide controls when pinching to close
			var pinchControlsHidden;
			_listen('onPinchClose' , function(now) {
				if(_controlsVisible && now < 0.9) {
					ui.hideControls();
					pinchControlsHidden = true;
				} else if(pinchControlsHidden && !_controlsVisible && now > 0.9) {
					ui.showControls();
				}
			});

			_listen('zoomGestureEnded', function() {
				pinchControlsHidden = false;
				if(pinchControlsHidden && !_controlsVisible) {
					ui.showControls();
				}
			});

		};



	var _uiElements = [
		{ 
			name: 'caption', 
			option: 'captionEl',
			onInit: function(el) {  
				_captionContainer = el; 
			} 
		},
		{ 
			name: 'share-modal', 
			option: 'shareEl',
			onInit: function(el) {  
				_shareModal = el;
			},
			onTap: function() {
				_toggleShareModal();
			} 
		},
		{ 
			name: 'button--share', 
			option: 'shareEl',
			onInit: function(el) { 
				_shareButton = el;
			},
			onTap: function() {
				_toggleShareModal();
			} 
		},
		{ 
			name: 'button--zoom', 
			option: 'zoomEl',
			onTap: pswp.toggleDesktopZoom
		},
		{ 
			name: 'counter', 
			option: 'counterEl',
			onInit: function(el) {  
				_indexIndicator = el;
			} 
		},
		{ 
			name: 'button--close', 
			option: 'closeEl',
			onTap: pswp.close
		},
		{ 
			name: 'button--arrow--left', 
			option: 'arrowEl',
			onTap: pswp.prev
		},
		{ 
			name: 'button--arrow--right', 
			option: 'arrowEl',
			onTap: pswp.next
		},
		{ 
			name: 'button--fs', 
			option: 'fullscreenEl',
			onTap: function() {  
				if(_fullscrenAPI.isFullscreen()) {
					_fullscrenAPI.exit();
				} else {
					_fullscrenAPI.enter();
				}
			} 
		},
		{ 
			name: 'preloader', 
			option: 'preloaderEl',
			onInit: function(el) {  
				_loadingIndicator = el;
			} 
		}

	];

	var _setupUIElements = function() {
		var item,
			classAttr,
			uiElement;

		var loopThroughChildElements = function(sChildren) {
			if(!sChildren) {
				return;
			}

			var l = sChildren.length;
			for(var i = 0; i < l; i++) {
				item = sChildren[i];
				classAttr = item.className;

				for(var a = 0; a < _uiElements.length; a++) {
					uiElement = _uiElements[a];

					if(classAttr.indexOf('pswp__' + uiElement.name) > -1  ) {

						if( _options[uiElement.option] ) { // if element is not disabled from options
							
							framework.removeClass(item, 'pswp__element--disabled');
							if(uiElement.onInit) {
								uiElement.onInit(item);
							}
							
							//item.style.display = 'block';
						} else {
							framework.addClass(item, 'pswp__element--disabled');
							//item.style.display = 'none';
						}
					}
				}
			}
		};
		loopThroughChildElements(_controls.children);

		var topBar =  framework.getChildByClass(_controls, 'pswp__top-bar');
		if(topBar) {
			loopThroughChildElements( topBar.children );
		}
	};


	

	ui.init = function() {

		// extend options
		framework.extend(pswp.options, _defaultUIOptions, true);

		// create local link for fast access
		_options = pswp.options;

		// find pswp__ui element
		_controls = framework.getChildByClass(pswp.scrollWrap, 'pswp__ui');

		// create local link
		_listen = pswp.listen;


		_setupHidingControlsDuringGestures();

		// update controls when slides change
		_listen('beforeChange', ui.update);

		// toggle zoom on double-tap
		_listen('doubleTap', function(point) {
			var initialZoomLevel = pswp.currItem.initialZoomLevel;
			if(pswp.getZoomLevel() !== initialZoomLevel) {
				pswp.zoomTo(initialZoomLevel, point, 333);
			} else {
				pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
			}
		});

		// Allow text selection in caption
		_listen('preventDragEvent', function(e, isDown, preventObj) {
			var t = e.target || e.srcElement;
			if(
				t && 
				t.getAttribute('class') && e.type.indexOf('mouse') > -1 && 
				( t.getAttribute('class').indexOf('__caption') > 0 || (/(SMALL|STRONG|EM)/i).test(t.tagName) ) 
			) {
				preventObj.prevent = false;
			}
		});

		// bind events for UI
		_listen('bindEvents', function() {
			framework.bind(_controls, 'pswpTap click', _onControlsTap);
			framework.bind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);

			if(!pswp.likelyTouchDevice) {
				framework.bind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);
			}
		});

		// unbind events for UI
		_listen('unbindEvents', function() {
			if(!_shareModalHidden) {
				_toggleShareModal();
			}

			if(_idleInterval) {
				clearInterval(_idleInterval);
			}
			framework.unbind(document, 'mouseout', _onMouseLeaveWindow);
			framework.unbind(document, 'mousemove', _onIdleMouseMove);
			framework.unbind(_controls, 'pswpTap click', _onControlsTap);
			framework.unbind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);
			framework.unbind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);

			if(_fullscrenAPI) {
				framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
				if(_fullscrenAPI.isFullscreen()) {
					_options.hideAnimationDuration = 0;
					_fullscrenAPI.exit();
				}
				_fullscrenAPI = null;
			}
		});


		// clean up things when gallery is destroyed
		_listen('destroy', function() {
			if(_options.captionEl) {
				if(_fakeCaptionContainer) {
					_controls.removeChild(_fakeCaptionContainer);
				}
				framework.removeClass(_captionContainer, 'pswp__caption--empty');
			}

			if(_shareModal) {
				_shareModal.children[0].onclick = null;
			}
			framework.removeClass(_controls, 'pswp__ui--over-close');
			framework.addClass( _controls, 'pswp__ui--hidden');
			ui.setIdle(false);
		});
		

		if(!_options.showAnimationDuration) {
			framework.removeClass( _controls, 'pswp__ui--hidden');
		}
		_listen('initialZoomIn', function() {
			if(_options.showAnimationDuration) {
				framework.removeClass( _controls, 'pswp__ui--hidden');
			}
		});
		_listen('initialZoomOut', function() {
			framework.addClass( _controls, 'pswp__ui--hidden');
		});

		_listen('parseVerticalMargin', _applyNavBarGaps);
		
		_setupUIElements();

		if(_options.shareEl && _shareButton && _shareModal) {
			_shareModalHidden = true;
		}

		_countNumItems();

		_setupIdle();

		_setupFullscreenAPI();

		_setupLoadingIndicator();
	};

	ui.setIdle = function(isIdle) {
		_isIdle = isIdle;
		_togglePswpClass(_controls, 'ui--idle', isIdle);
	};

	ui.update = function() {
		// Don't update UI if it's hidden
		if(_controlsVisible && pswp.currItem) {
			
			ui.updateIndexIndicator();

			if(_options.captionEl) {
				_options.addCaptionHTMLFn(pswp.currItem, _captionContainer);

				_togglePswpClass(_captionContainer, 'caption--empty', !pswp.currItem.title);
			}

			_overlayUIUpdated = true;

		} else {
			_overlayUIUpdated = false;
		}

		if(!_shareModalHidden) {
			_toggleShareModal();
		}

		_countNumItems();
	};

	ui.updateFullscreen = function(e) {

		if(e) {
			// some browsers change window scroll position during the fullscreen
			// so PhotoSwipe updates it just in case
			setTimeout(function() {
				pswp.setScrollOffset( 0, framework.getScrollY() );
			}, 50);
		}
		
		// toogle pswp--fs class on root element
		framework[ (_fullscrenAPI.isFullscreen() ? 'add' : 'remove') + 'Class' ](pswp.template, 'pswp--fs');
	};

	ui.updateIndexIndicator = function() {
		if(_options.counterEl) {
			_indexIndicator.innerHTML = (pswp.getCurrentIndex()+1) + 
										_options.indexIndicatorSep + 
										_options.getNumItemsFn();
		}
	};
	
	ui.onGlobalTap = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		if(_blockControlsTap) {
			return;
		}

		if(e.detail && e.detail.pointerType === 'mouse') {

			// close gallery if clicked outside of the image
			if(_hasCloseClass(target)) {
				pswp.close();
				return;
			}

			if(framework.hasClass(target, 'pswp__img')) {
				if(pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
					if(_options.clickToCloseNonZoomable) {
						pswp.close();
					}
				} else {
					pswp.toggleDesktopZoom(e.detail.releasePoint);
				}
			}
			
		} else {

			// tap anywhere (except buttons) to toggle visibility of controls
			if(_options.tapToToggleControls) {
				if(_controlsVisible) {
					ui.hideControls();
				} else {
					ui.showControls();
				}
			}

			// tap to close gallery
			if(_options.tapToClose && (framework.hasClass(target, 'pswp__img') || _hasCloseClass(target)) ) {
				pswp.close();
				return;
			}
			
		}
	};
	ui.onMouseOver = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		// add class when mouse is over an element that should close the gallery
		_togglePswpClass(_controls, 'ui--over-close', _hasCloseClass(target));
	};

	ui.hideControls = function() {
		framework.addClass(_controls,'pswp__ui--hidden');
		_controlsVisible = false;
	};

	ui.showControls = function() {
		_controlsVisible = true;
		if(!_overlayUIUpdated) {
			ui.update();
		}
		framework.removeClass(_controls,'pswp__ui--hidden');
	};

	ui.supportsFullscreen = function() {
		var d = document;
		return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
	};

	ui.getFullscreenAPI = function() {
		var dE = document.documentElement,
			api,
			tF = 'fullscreenchange';

		if (dE.requestFullscreen) {
			api = {
				enterK: 'requestFullscreen',
				exitK: 'exitFullscreen',
				elementK: 'fullscreenElement',
				eventK: tF
			};

		} else if(dE.mozRequestFullScreen ) {
			api = {
				enterK: 'mozRequestFullScreen',
				exitK: 'mozCancelFullScreen',
				elementK: 'mozFullScreenElement',
				eventK: 'moz' + tF
			};

			

		} else if(dE.webkitRequestFullscreen) {
			api = {
				enterK: 'webkitRequestFullscreen',
				exitK: 'webkitExitFullscreen',
				elementK: 'webkitFullscreenElement',
				eventK: 'webkit' + tF
			};

		} else if(dE.msRequestFullscreen) {
			api = {
				enterK: 'msRequestFullscreen',
				exitK: 'msExitFullscreen',
				elementK: 'msFullscreenElement',
				eventK: 'MSFullscreenChange'
			};
		}

		if(api) {
			api.enter = function() { 
				// disable close-on-scroll in fullscreen
				_initalCloseOnScrollValue = _options.closeOnScroll; 
				_options.closeOnScroll = false; 

				if(this.enterK === 'webkitRequestFullscreen') {
					pswp.template[this.enterK]( Element.ALLOW_KEYBOARD_INPUT );
				} else {
					return pswp.template[this.enterK](); 
				}
			};
			api.exit = function() { 
				_options.closeOnScroll = _initalCloseOnScrollValue;

				return document[this.exitK](); 

			};
			api.isFullscreen = function() { return document[this.elementK]; };
		}

		return api;
	};



};
return PhotoSwipeUI_Default;


});


/***/ }),

/***/ 78710:
/*!****************************************************!*\
  !*** ./node_modules/photoswipe/dist/photoswipe.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! PhotoSwipe - v4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
(function (root, factory) { 
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
})(this, function () {

	'use strict';
	var PhotoSwipe = function(template, UiClass, items, options){

/*>>framework-bridge*/
/**
 *
 * Set of generic functions used by gallery.
 * 
 * You're free to modify anything here as long as functionality is kept.
 * 
 */
var framework = {
	features: null,
	bind: function(target, type, listener, unbind) {
		var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
		type = type.split(' ');
		for(var i = 0; i < type.length; i++) {
			if(type[i]) {
				target[methodName]( type[i], listener, false);
			}
		}
	},
	isArray: function(obj) {
		return (obj instanceof Array);
	},
	createEl: function(classes, tag) {
		var el = document.createElement(tag || 'div');
		if(classes) {
			el.className = classes;
		}
		return el;
	},
	getScrollY: function() {
		var yOffset = window.pageYOffset;
		return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
	},
	unbind: function(target, type, listener) {
		framework.bind(target,type,listener,true);
	},
	removeClass: function(el, className) {
		var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
		el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, ''); 
	},
	addClass: function(el, className) {
		if( !framework.hasClass(el,className) ) {
			el.className += (el.className ? ' ' : '') + className;
		}
	},
	hasClass: function(el, className) {
		return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
	},
	getChildByClass: function(parentEl, childClassName) {
		var node = parentEl.firstChild;
		while(node) {
			if( framework.hasClass(node, childClassName) ) {
				return node;
			}
			node = node.nextSibling;
		}
	},
	arraySearch: function(array, value, key) {
		var i = array.length;
		while(i--) {
			if(array[i][key] === value) {
				return i;
			} 
		}
		return -1;
	},
	extend: function(o1, o2, preventOverwrite) {
		for (var prop in o2) {
			if (o2.hasOwnProperty(prop)) {
				if(preventOverwrite && o1.hasOwnProperty(prop)) {
					continue;
				}
				o1[prop] = o2[prop];
			}
		}
	},
	easing: {
		sine: {
			out: function(k) {
				return Math.sin(k * (Math.PI / 2));
			},
			inOut: function(k) {
				return - (Math.cos(Math.PI * k) - 1) / 2;
			}
		},
		cubic: {
			out: function(k) {
				return --k * k * k + 1;
			}
		}
		/*
			elastic: {
				out: function ( k ) {

					var s, a = 0.1, p = 0.4;
					if ( k === 0 ) return 0;
					if ( k === 1 ) return 1;
					if ( !a || a < 1 ) { a = 1; s = p / 4; }
					else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
					return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

				},
			},
			back: {
				out: function ( k ) {
					var s = 1.70158;
					return --k * k * ( ( s + 1 ) * k + s ) + 1;
				}
			}
		*/
	},

	/**
	 * 
	 * @return {object}
	 * 
	 * {
	 *  raf : request animation frame function
	 *  caf : cancel animation frame function
	 *  transfrom : transform property key (with vendor), or null if not supported
	 *  oldIE : IE8 or below
	 * }
	 * 
	 */
	detectFeatures: function() {
		if(framework.features) {
			return framework.features;
		}
		var helperEl = framework.createEl(),
			helperStyle = helperEl.style,
			vendor = '',
			features = {};

		// IE8 and below
		features.oldIE = document.all && !document.addEventListener;

		features.touch = 'ontouchstart' in window;

		if(window.requestAnimationFrame) {
			features.raf = window.requestAnimationFrame;
			features.caf = window.cancelAnimationFrame;
		}

		features.pointerEvent = !!(window.PointerEvent) || navigator.msPointerEnabled;

		// fix false-positive detection of old Android in new IE
		// (IE11 ua string contains "Android 4.0")
		
		if(!features.pointerEvent) { 

			var ua = navigator.userAgent;

			// Detect if device is iPhone or iPod and if it's older than iOS 8
			// http://stackoverflow.com/a/14223920
			// 
			// This detection is made because of buggy top/bottom toolbars
			// that don't trigger window.resize event.
			// For more info refer to _isFixedPosition variable in core.js

			if (/iP(hone|od)/.test(navigator.platform)) {
				var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
				if(v && v.length > 0) {
					v = parseInt(v[1], 10);
					if(v >= 1 && v < 8 ) {
						features.isOldIOSPhone = true;
					}
				}
			}

			// Detect old Android (before KitKat)
			// due to bugs related to position:fixed
			// http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript
			
			var match = ua.match(/Android\s([0-9\.]*)/);
			var androidversion =  match ? match[1] : 0;
			androidversion = parseFloat(androidversion);
			if(androidversion >= 1 ) {
				if(androidversion < 4.4) {
					features.isOldAndroid = true; // for fixed position bug & performance
				}
				features.androidVersion = androidversion; // for touchend bug
			}	
			features.isMobileOpera = /opera mini|opera mobi/i.test(ua);

			// p.s. yes, yes, UA sniffing is bad, propose your solution for above bugs.
		}
		
		var styleChecks = ['transform', 'perspective', 'animationName'],
			vendors = ['', 'webkit','Moz','ms','O'],
			styleCheckItem,
			styleName;

		for(var i = 0; i < 4; i++) {
			vendor = vendors[i];

			for(var a = 0; a < 3; a++) {
				styleCheckItem = styleChecks[a];

				// uppercase first letter of property name, if vendor is present
				styleName = vendor + (vendor ? 
										styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) : 
										styleCheckItem);
			
				if(!features[styleCheckItem] && styleName in helperStyle ) {
					features[styleCheckItem] = styleName;
				}
			}

			if(vendor && !features.raf) {
				vendor = vendor.toLowerCase();
				features.raf = window[vendor+'RequestAnimationFrame'];
				if(features.raf) {
					features.caf = window[vendor+'CancelAnimationFrame'] || 
									window[vendor+'CancelRequestAnimationFrame'];
				}
			}
		}
			
		if(!features.raf) {
			var lastTime = 0;
			features.raf = function(fn) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				var id = window.setTimeout(function() { fn(currTime + timeToCall); }, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
			features.caf = function(id) { clearTimeout(id); };
		}

		// Detect SVG support
		features.svg = !!document.createElementNS && 
						!!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;

		framework.features = features;

		return features;
	}
};

framework.detectFeatures();

// Override addEventListener for old versions of IE
if(framework.features.oldIE) {

	framework.bind = function(target, type, listener, unbind) {
		
		type = type.split(' ');

		var methodName = (unbind ? 'detach' : 'attach') + 'Event',
			evName,
			_handleEv = function() {
				listener.handleEvent.call(listener);
			};

		for(var i = 0; i < type.length; i++) {
			evName = type[i];
			if(evName) {

				if(typeof listener === 'object' && listener.handleEvent) {
					if(!unbind) {
						listener['oldIE' + evName] = _handleEv;
					} else {
						if(!listener['oldIE' + evName]) {
							return false;
						}
					}

					target[methodName]( 'on' + evName, listener['oldIE' + evName]);
				} else {
					target[methodName]( 'on' + evName, listener);
				}

			}
		}
	};
	
}

/*>>framework-bridge*/

/*>>core*/
//function(template, UiClass, items, options)

var self = this;

/**
 * Static vars, don't change unless you know what you're doing.
 */
var DOUBLE_TAP_RADIUS = 25, 
	NUM_HOLDERS = 3;

/**
 * Options
 */
var _options = {
	allowPanToNext:true,
	spacing: 0.12,
	bgOpacity: 1,
	mouseUsed: false,
	loop: true,
	pinchToClose: true,
	closeOnScroll: true,
	closeOnVerticalDrag: true,
	verticalDragRange: 0.75,
	hideAnimationDuration: 333,
	showAnimationDuration: 333,
	showHideOpacity: false,
	focus: true,
	escKey: true,
	arrowKeys: true,
	mainScrollEndFriction: 0.35,
	panEndFriction: 0.35,
	isClickableElement: function(el) {
        return el.tagName === 'A';
    },
    getDoubleTapZoom: function(isMouseClick, item) {
    	if(isMouseClick) {
    		return 1;
    	} else {
    		return item.initialZoomLevel < 0.7 ? 1 : 1.33;
    	}
    },
    maxSpreadZoom: 1.33,
	modal: true,

	// not fully implemented yet
	scaleMode: 'fit' // TODO
};
framework.extend(_options, options);


/**
 * Private helper variables & functions
 */

var _getEmptyPoint = function() { 
		return {x:0,y:0}; 
	};

var _isOpen,
	_isDestroying,
	_closedByScroll,
	_currentItemIndex,
	_containerStyle,
	_containerShiftIndex,
	_currPanDist = _getEmptyPoint(),
	_startPanOffset = _getEmptyPoint(),
	_panOffset = _getEmptyPoint(),
	_upMoveEvents, // drag move, drag end & drag cancel events array
	_downEvents, // drag start events array
	_globalEventHandlers,
	_viewportSize = {},
	_currZoomLevel,
	_startZoomLevel,
	_translatePrefix,
	_translateSufix,
	_updateSizeInterval,
	_itemsNeedUpdate,
	_currPositionIndex = 0,
	_offset = {},
	_slideSize = _getEmptyPoint(), // size of slide area, including spacing
	_itemHolders,
	_prevItemIndex,
	_indexDiff = 0, // difference of indexes since last content update
	_dragStartEvent,
	_dragMoveEvent,
	_dragEndEvent,
	_dragCancelEvent,
	_transformKey,
	_pointerEventEnabled,
	_isFixedPosition = true,
	_likelyTouchDevice,
	_modules = [],
	_requestAF,
	_cancelAF,
	_initalClassName,
	_initalWindowScrollY,
	_oldIE,
	_currentWindowScrollY,
	_features,
	_windowVisibleSize = {},
	_renderMaxResolution = false,
	_orientationChangeTimeout,


	// Registers PhotoSWipe module (History, Controller ...)
	_registerModule = function(name, module) {
		framework.extend(self, module.publicMethods);
		_modules.push(name);
	},

	_getLoopedId = function(index) {
		var numSlides = _getNumItems();
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	
	// Micro bind/trigger
	_listeners = {},
	_listen = function(name, fn) {
		if(!_listeners[name]) {
			_listeners[name] = [];
		}
		return _listeners[name].push(fn);
	},
	_shout = function(name) {
		var listeners = _listeners[name];

		if(listeners) {
			var args = Array.prototype.slice.call(arguments);
			args.shift();

			for(var i = 0; i < listeners.length; i++) {
				listeners[i].apply(self, args);
			}
		}
	},

	_getCurrentTime = function() {
		return new Date().getTime();
	},
	_applyBgOpacity = function(opacity) {
		_bgOpacity = opacity;
		self.bg.style.opacity = opacity * _options.bgOpacity;
	},

	_applyZoomTransform = function(styleObj,x,y,zoom,item) {
		if(!_renderMaxResolution || (item && item !== self.currItem) ) {
			zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);	
		}
			
		styleObj[_transformKey] = _translatePrefix + x + 'px, ' + y + 'px' + _translateSufix + ' scale(' + zoom + ')';
	},
	_applyCurrentZoomPan = function( allowRenderResolution ) {
		if(_currZoomElementStyle) {

			if(allowRenderResolution) {
				if(_currZoomLevel > self.currItem.fitRatio) {
					if(!_renderMaxResolution) {
						_setImageSize(self.currItem, false, true);
						_renderMaxResolution = true;
					}
				} else {
					if(_renderMaxResolution) {
						_setImageSize(self.currItem);
						_renderMaxResolution = false;
					}
				}
			}
			

			_applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
		}
	},
	_applyZoomPanToItem = function(item) {
		if(item.container) {

			_applyZoomTransform(item.container.style, 
								item.initialPosition.x, 
								item.initialPosition.y, 
								item.initialZoomLevel,
								item);
		}
	},
	_setTranslateX = function(x, elStyle) {
		elStyle[_transformKey] = _translatePrefix + x + 'px, 0px' + _translateSufix;
	},
	_moveMainScroll = function(x, dragging) {

		if(!_options.loop && dragging) {
			var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x,
				delta = Math.round(x - _mainScrollPos.x);

			if( (newSlideIndexOffset < 0 && delta > 0) || 
				(newSlideIndexOffset >= _getNumItems() - 1 && delta < 0) ) {
				x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
			} 
		}
		
		_mainScrollPos.x = x;
		_setTranslateX(x, _containerStyle);
	},
	_calculatePanOffset = function(axis, zoomLevel) {
		var m = _midZoomPoint[axis] - _offset[axis];
		return _startPanOffset[axis] + _currPanDist[axis] + m - m * ( zoomLevel / _startZoomLevel );
	},
	
	_equalizePoints = function(p1, p2) {
		p1.x = p2.x;
		p1.y = p2.y;
		if(p2.id) {
			p1.id = p2.id;
		}
	},
	_roundPoint = function(p) {
		p.x = Math.round(p.x);
		p.y = Math.round(p.y);
	},

	_mouseMoveTimeout = null,
	_onFirstMouseMove = function() {
		// Wait until mouse move event is fired at least twice during 100ms
		// We do this, because some mobile browsers trigger it on touchstart
		if(_mouseMoveTimeout ) { 
			framework.unbind(document, 'mousemove', _onFirstMouseMove);
			framework.addClass(template, 'pswp--has_mouse');
			_options.mouseUsed = true;
			_shout('mouseUsed');
		}
		_mouseMoveTimeout = setTimeout(function() {
			_mouseMoveTimeout = null;
		}, 100);
	},

	_bindEvents = function() {
		framework.bind(document, 'keydown', self);

		if(_features.transform) {
			// don't bind click event in browsers that don't support transform (mostly IE8)
			framework.bind(self.scrollWrap, 'click', self);
		}
		

		if(!_options.mouseUsed) {
			framework.bind(document, 'mousemove', _onFirstMouseMove);
		}

		framework.bind(window, 'resize scroll orientationchange', self);

		_shout('bindEvents');
	},

	_unbindEvents = function() {
		framework.unbind(window, 'resize scroll orientationchange', self);
		framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
		framework.unbind(document, 'keydown', self);
		framework.unbind(document, 'mousemove', _onFirstMouseMove);

		if(_features.transform) {
			framework.unbind(self.scrollWrap, 'click', self);
		}

		if(_isDragging) {
			framework.unbind(window, _upMoveEvents, self);
		}

		clearTimeout(_orientationChangeTimeout);

		_shout('unbindEvents');
	},
	
	_calculatePanBounds = function(zoomLevel, update) {
		var bounds = _calculateItemSize( self.currItem, _viewportSize, zoomLevel );
		if(update) {
			_currPanBounds = bounds;
		}
		return bounds;
	},
	
	_getMinZoomLevel = function(item) {
		if(!item) {
			item = self.currItem;
		}
		return item.initialZoomLevel;
	},
	_getMaxZoomLevel = function(item) {
		if(!item) {
			item = self.currItem;
		}
		return item.w > 0 ? _options.maxSpreadZoom : 1;
	},

	// Return true if offset is out of the bounds
	_modifyDestPanOffset = function(axis, destPanBounds, destPanOffset, destZoomLevel) {
		if(destZoomLevel === self.currItem.initialZoomLevel) {
			destPanOffset[axis] = self.currItem.initialPosition[axis];
			return true;
		} else {
			destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel); 

			if(destPanOffset[axis] > destPanBounds.min[axis]) {
				destPanOffset[axis] = destPanBounds.min[axis];
				return true;
			} else if(destPanOffset[axis] < destPanBounds.max[axis] ) {
				destPanOffset[axis] = destPanBounds.max[axis];
				return true;
			}
		}
		return false;
	},

	_setupTransforms = function() {

		if(_transformKey) {
			// setup 3d transforms
			var allow3dTransform = _features.perspective && !_likelyTouchDevice;
			_translatePrefix = 'translate' + (allow3dTransform ? '3d(' : '(');
			_translateSufix = _features.perspective ? ', 0px)' : ')';	
			return;
		}

		// Override zoom/pan/move functions in case old browser is used (most likely IE)
		// (so they use left/top/width/height, instead of CSS transform)
	
		_transformKey = 'left';
		framework.addClass(template, 'pswp--ie');

		_setTranslateX = function(x, elStyle) {
			elStyle.left = x + 'px';
		};
		_applyZoomPanToItem = function(item) {

			var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
				s = item.container.style,
				w = zoomRatio * item.w,
				h = zoomRatio * item.h;

			s.width = w + 'px';
			s.height = h + 'px';
			s.left = item.initialPosition.x + 'px';
			s.top = item.initialPosition.y + 'px';

		};
		_applyCurrentZoomPan = function() {
			if(_currZoomElementStyle) {

				var s = _currZoomElementStyle,
					item = self.currItem,
					zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
					w = zoomRatio * item.w,
					h = zoomRatio * item.h;

				s.width = w + 'px';
				s.height = h + 'px';


				s.left = _panOffset.x + 'px';
				s.top = _panOffset.y + 'px';
			}
			
		};
	},

	_onKeyDown = function(e) {
		var keydownAction = '';
		if(_options.escKey && e.keyCode === 27) { 
			keydownAction = 'close';
		} else if(_options.arrowKeys) {
			if(e.keyCode === 37) {
				keydownAction = 'prev';
			} else if(e.keyCode === 39) { 
				keydownAction = 'next';
			}
		}

		if(keydownAction) {
			// don't do anything if special key pressed to prevent from overriding default browser actions
			// e.g. in Chrome on Mac cmd+arrow-left returns to previous page
			if( !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey ) {
				if(e.preventDefault) {
					e.preventDefault();
				} else {
					e.returnValue = false;
				} 
				self[keydownAction]();
			}
		}
	},

	_onGlobalClick = function(e) {
		if(!e) {
			return;
		}

		// don't allow click event to pass through when triggering after drag or some other gesture
		if(_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
			e.preventDefault();
			e.stopPropagation();
		}
	},

	_updatePageScrollOffset = function() {
		self.setScrollOffset(0, framework.getScrollY());		
	};
	


	



// Micro animation engine
var _animations = {},
	_numAnimations = 0,
	_stopAnimation = function(name) {
		if(_animations[name]) {
			if(_animations[name].raf) {
				_cancelAF( _animations[name].raf );
			}
			_numAnimations--;
			delete _animations[name];
		}
	},
	_registerStartAnimation = function(name) {
		if(_animations[name]) {
			_stopAnimation(name);
		}
		if(!_animations[name]) {
			_numAnimations++;
			_animations[name] = {};
		}
	},
	_stopAllAnimations = function() {
		for (var prop in _animations) {

			if( _animations.hasOwnProperty( prop ) ) {
				_stopAnimation(prop);
			} 
			
		}
	},
	_animateProp = function(name, b, endProp, d, easingFn, onUpdate, onComplete) {
		var startAnimTime = _getCurrentTime(), t;
		_registerStartAnimation(name);

		var animloop = function(){
			if ( _animations[name] ) {
				
				t = _getCurrentTime() - startAnimTime; // time diff
				//b - beginning (start prop)
				//d - anim duration

				if ( t >= d ) {
					_stopAnimation(name);
					onUpdate(endProp);
					if(onComplete) {
						onComplete();
					}
					return;
				}
				onUpdate( (endProp - b) * easingFn(t/d) + b );

				_animations[name].raf = _requestAF(animloop);
			}
		};
		animloop();
	};
	


var publicMethods = {

	// make a few local variables and functions public
	shout: _shout,
	listen: _listen,
	viewportSize: _viewportSize,
	options: _options,

	isMainScrollAnimating: function() {
		return _mainScrollAnimating;
	},
	getZoomLevel: function() {
		return _currZoomLevel;
	},
	getCurrentIndex: function() {
		return _currentItemIndex;
	},
	isDragging: function() {
		return _isDragging;
	},	
	isZooming: function() {
		return _isZooming;
	},
	setScrollOffset: function(x,y) {
		_offset.x = x;
		_currentWindowScrollY = _offset.y = y;
		_shout('updateScrollOffset', _offset);
	},
	applyZoomPan: function(zoomLevel,panX,panY,allowRenderResolution) {
		_panOffset.x = panX;
		_panOffset.y = panY;
		_currZoomLevel = zoomLevel;
		_applyCurrentZoomPan( allowRenderResolution );
	},

	init: function() {

		if(_isOpen || _isDestroying) {
			return;
		}

		var i;

		self.framework = framework; // basic functionality
		self.template = template; // root DOM element of PhotoSwipe
		self.bg = framework.getChildByClass(template, 'pswp__bg');

		_initalClassName = template.className;
		_isOpen = true;
				
		_features = framework.detectFeatures();
		_requestAF = _features.raf;
		_cancelAF = _features.caf;
		_transformKey = _features.transform;
		_oldIE = _features.oldIE;
		
		self.scrollWrap = framework.getChildByClass(template, 'pswp__scroll-wrap');
		self.container = framework.getChildByClass(self.scrollWrap, 'pswp__container');

		_containerStyle = self.container.style; // for fast access

		// Objects that hold slides (there are only 3 in DOM)
		self.itemHolders = _itemHolders = [
			{el:self.container.children[0] , wrap:0, index: -1},
			{el:self.container.children[1] , wrap:0, index: -1},
			{el:self.container.children[2] , wrap:0, index: -1}
		];

		// hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
		_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'none';

		_setupTransforms();

		// Setup global events
		_globalEventHandlers = {
			resize: self.updateSize,

			// Fixes: iOS 10.3 resize event
			// does not update scrollWrap.clientWidth instantly after resize
			// https://github.com/dimsemenov/PhotoSwipe/issues/1315
			orientationchange: function() {
				clearTimeout(_orientationChangeTimeout);
				_orientationChangeTimeout = setTimeout(function() {
					if(_viewportSize.x !== self.scrollWrap.clientWidth) {
						self.updateSize();
					}
				}, 500);
			},
			scroll: _updatePageScrollOffset,
			keydown: _onKeyDown,
			click: _onGlobalClick
		};

		// disable show/hide effects on old browsers that don't support CSS animations or transforms, 
		// old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.
		var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
		if(!_features.animationName || !_features.transform || oldPhone) {
			_options.showAnimationDuration = _options.hideAnimationDuration = 0;
		}

		// init modules
		for(i = 0; i < _modules.length; i++) {
			self['init' + _modules[i]]();
		}
		
		// init
		if(UiClass) {
			var ui = self.ui = new UiClass(self, framework);
			ui.init();
		}

		_shout('firstUpdate');
		_currentItemIndex = _currentItemIndex || _options.index || 0;
		// validate index
		if( isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems() ) {
			_currentItemIndex = 0;
		}
		self.currItem = _getItemAt( _currentItemIndex );

		
		if(_features.isOldIOSPhone || _features.isOldAndroid) {
			_isFixedPosition = false;
		}
		
		template.setAttribute('aria-hidden', 'false');
		if(_options.modal) {
			if(!_isFixedPosition) {
				template.style.position = 'absolute';
				template.style.top = framework.getScrollY() + 'px';
			} else {
				template.style.position = 'fixed';
			}
		}

		if(_currentWindowScrollY === undefined) {
			_shout('initialLayout');
			_currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
		}
		
		// add classes to root element of PhotoSwipe
		var rootClasses = 'pswp--open ';
		if(_options.mainClass) {
			rootClasses += _options.mainClass + ' ';
		}
		if(_options.showHideOpacity) {
			rootClasses += 'pswp--animate_opacity ';
		}
		rootClasses += _likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
		rootClasses += _features.animationName ? ' pswp--css_animation' : '';
		rootClasses += _features.svg ? ' pswp--svg' : '';
		framework.addClass(template, rootClasses);

		self.updateSize();

		// initial update
		_containerShiftIndex = -1;
		_indexDiff = null;
		for(i = 0; i < NUM_HOLDERS; i++) {
			_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
		}

		if(!_oldIE) {
			framework.bind(self.scrollWrap, _downEvents, self); // no dragging for old IE
		}	

		_listen('initialZoomInEnd', function() {
			self.setContent(_itemHolders[0], _currentItemIndex-1);
			self.setContent(_itemHolders[2], _currentItemIndex+1);

			_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'block';

			if(_options.focus) {
				// focus causes layout, 
				// which causes lag during the animation, 
				// that's why we delay it untill the initial zoom transition ends
				template.focus();
			}
			 

			_bindEvents();
		});

		// set content for center slide (first time)
		self.setContent(_itemHolders[1], _currentItemIndex);
		
		self.updateCurrItem();

		_shout('afterInit');

		if(!_isFixedPosition) {

			// On all versions of iOS lower than 8.0, we check size of viewport every second.
			// 
			// This is done to detect when Safari top & bottom bars appear, 
			// as this action doesn't trigger any events (like resize). 
			// 
			// On iOS8 they fixed this.
			// 
			// 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.
			
			_updateSizeInterval = setInterval(function() {
				if(!_numAnimations && !_isDragging && !_isZooming && (_currZoomLevel === self.currItem.initialZoomLevel)  ) {
					self.updateSize();
				}
			}, 1000);
		}

		framework.addClass(template, 'pswp--visible');
	},

	// Close the gallery, then destroy it
	close: function() {
		if(!_isOpen) {
			return;
		}

		_isOpen = false;
		_isDestroying = true;
		_shout('close');
		_unbindEvents();

		_showOrHide(self.currItem, null, true, self.destroy);
	},

	// destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
	destroy: function() {
		_shout('destroy');

		if(_showOrHideTimeout) {
			clearTimeout(_showOrHideTimeout);
		}
		
		template.setAttribute('aria-hidden', 'true');
		template.className = _initalClassName;

		if(_updateSizeInterval) {
			clearInterval(_updateSizeInterval);
		}

		framework.unbind(self.scrollWrap, _downEvents, self);

		// we unbind scroll event at the end, as closing animation may depend on it
		framework.unbind(window, 'scroll', self);

		_stopDragUpdateLoop();

		_stopAllAnimations();

		_listeners = null;
	},

	/**
	 * Pan image to position
	 * @param {Number} x     
	 * @param {Number} y     
	 * @param {Boolean} force Will ignore bounds if set to true.
	 */
	panTo: function(x,y,force) {
		if(!force) {
			if(x > _currPanBounds.min.x) {
				x = _currPanBounds.min.x;
			} else if(x < _currPanBounds.max.x) {
				x = _currPanBounds.max.x;
			}

			if(y > _currPanBounds.min.y) {
				y = _currPanBounds.min.y;
			} else if(y < _currPanBounds.max.y) {
				y = _currPanBounds.max.y;
			}
		}
		
		_panOffset.x = x;
		_panOffset.y = y;
		_applyCurrentZoomPan();
	},
	
	handleEvent: function (e) {
		e = e || window.event;
		if(_globalEventHandlers[e.type]) {
			_globalEventHandlers[e.type](e);
		}
	},


	goTo: function(index) {

		index = _getLoopedId(index);

		var diff = index - _currentItemIndex;
		_indexDiff = diff;

		_currentItemIndex = index;
		self.currItem = _getItemAt( _currentItemIndex );
		_currPositionIndex -= diff;
		
		_moveMainScroll(_slideSize.x * _currPositionIndex);
		

		_stopAllAnimations();
		_mainScrollAnimating = false;

		self.updateCurrItem();
	},
	next: function() {
		self.goTo( _currentItemIndex + 1);
	},
	prev: function() {
		self.goTo( _currentItemIndex - 1);
	},

	// update current zoom/pan objects
	updateCurrZoomItem: function(emulateSetContent) {
		if(emulateSetContent) {
			_shout('beforeChange', 0);
		}

		// itemHolder[1] is middle (current) item
		if(_itemHolders[1].el.children.length) {
			var zoomElement = _itemHolders[1].el.children[0];
			if( framework.hasClass(zoomElement, 'pswp__zoom-wrap') ) {
				_currZoomElementStyle = zoomElement.style;
			} else {
				_currZoomElementStyle = null;
			}
		} else {
			_currZoomElementStyle = null;
		}
		
		_currPanBounds = self.currItem.bounds;	
		_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;

		_panOffset.x = _currPanBounds.center.x;
		_panOffset.y = _currPanBounds.center.y;

		if(emulateSetContent) {
			_shout('afterChange');
		}
	},


	invalidateCurrItems: function() {
		_itemsNeedUpdate = true;
		for(var i = 0; i < NUM_HOLDERS; i++) {
			if( _itemHolders[i].item ) {
				_itemHolders[i].item.needsUpdate = true;
			}
		}
	},

	updateCurrItem: function(beforeAnimation) {

		if(_indexDiff === 0) {
			return;
		}

		var diffAbs = Math.abs(_indexDiff),
			tempHolder;

		if(beforeAnimation && diffAbs < 2) {
			return;
		}


		self.currItem = _getItemAt( _currentItemIndex );
		_renderMaxResolution = false;
		
		_shout('beforeChange', _indexDiff);

		if(diffAbs >= NUM_HOLDERS) {
			_containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
			diffAbs = NUM_HOLDERS;
		}
		for(var i = 0; i < diffAbs; i++) {
			if(_indexDiff > 0) {
				tempHolder = _itemHolders.shift();
				_itemHolders[NUM_HOLDERS-1] = tempHolder; // move first to last

				_containerShiftIndex++;
				_setTranslateX( (_containerShiftIndex+2) * _slideSize.x, tempHolder.el.style);
				self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
			} else {
				tempHolder = _itemHolders.pop();
				_itemHolders.unshift( tempHolder ); // move last to first

				_containerShiftIndex--;
				_setTranslateX( _containerShiftIndex * _slideSize.x, tempHolder.el.style);
				self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
			}
			
		}

		// reset zoom/pan on previous item
		if(_currZoomElementStyle && Math.abs(_indexDiff) === 1) {

			var prevItem = _getItemAt(_prevItemIndex);
			if(prevItem.initialZoomLevel !== _currZoomLevel) {
				_calculateItemSize(prevItem , _viewportSize );
				_setImageSize(prevItem);
				_applyZoomPanToItem( prevItem ); 				
			}

		}

		// reset diff after update
		_indexDiff = 0;

		self.updateCurrZoomItem();

		_prevItemIndex = _currentItemIndex;

		_shout('afterChange');
		
	},



	updateSize: function(force) {
		
		if(!_isFixedPosition && _options.modal) {
			var windowScrollY = framework.getScrollY();
			if(_currentWindowScrollY !== windowScrollY) {
				template.style.top = windowScrollY + 'px';
				_currentWindowScrollY = windowScrollY;
			}
			if(!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
				return;
			}
			_windowVisibleSize.x = window.innerWidth;
			_windowVisibleSize.y = window.innerHeight;

			//template.style.width = _windowVisibleSize.x + 'px';
			template.style.height = _windowVisibleSize.y + 'px';
		}



		_viewportSize.x = self.scrollWrap.clientWidth;
		_viewportSize.y = self.scrollWrap.clientHeight;

		_updatePageScrollOffset();

		_slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
		_slideSize.y = _viewportSize.y;

		_moveMainScroll(_slideSize.x * _currPositionIndex);

		_shout('beforeResize'); // even may be used for example to switch image sources


		// don't re-calculate size on inital size update
		if(_containerShiftIndex !== undefined) {

			var holder,
				item,
				hIndex;

			for(var i = 0; i < NUM_HOLDERS; i++) {
				holder = _itemHolders[i];
				_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, holder.el.style);

				hIndex = _currentItemIndex+i-1;

				if(_options.loop && _getNumItems() > 2) {
					hIndex = _getLoopedId(hIndex);
				}

				// update zoom level on items and refresh source (if needsUpdate)
				item = _getItemAt( hIndex );

				// re-render gallery item if `needsUpdate`,
				// or doesn't have `bounds` (entirely new slide object)
				if( item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds) ) {

					self.cleanSlide( item );
					
					self.setContent( holder, hIndex );

					// if "center" slide
					if(i === 1) {
						self.currItem = item;
						self.updateCurrZoomItem(true);
					}

					item.needsUpdate = false;

				} else if(holder.index === -1 && hIndex >= 0) {
					// add content first time
					self.setContent( holder, hIndex );
				}
				if(item && item.container) {
					_calculateItemSize(item, _viewportSize);
					_setImageSize(item);
					_applyZoomPanToItem( item );
				}
				
			}
			_itemsNeedUpdate = false;
		}	

		_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
		_currPanBounds = self.currItem.bounds;

		if(_currPanBounds) {
			_panOffset.x = _currPanBounds.center.x;
			_panOffset.y = _currPanBounds.center.y;
			_applyCurrentZoomPan( true );
		}
		
		_shout('resize');
	},
	
	// Zoom current item to
	zoomTo: function(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
		/*
			if(destZoomLevel === 'fit') {
				destZoomLevel = self.currItem.fitRatio;
			} else if(destZoomLevel === 'fill') {
				destZoomLevel = self.currItem.fillRatio;
			}
		*/

		if(centerPoint) {
			_startZoomLevel = _currZoomLevel;
			_midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x ;
			_midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y ;
			_equalizePoints(_startPanOffset, _panOffset);
		}

		var destPanBounds = _calculatePanBounds(destZoomLevel, false),
			destPanOffset = {};

		_modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);
		_modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);

		var initialZoomLevel = _currZoomLevel;
		var initialPanOffset = {
			x: _panOffset.x,
			y: _panOffset.y
		};

		_roundPoint(destPanOffset);

		var onUpdate = function(now) {
			if(now === 1) {
				_currZoomLevel = destZoomLevel;
				_panOffset.x = destPanOffset.x;
				_panOffset.y = destPanOffset.y;
			} else {
				_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
				_panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
				_panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
			}

			if(updateFn) {
				updateFn(now);
			}

			_applyCurrentZoomPan( now === 1 );
		};

		if(speed) {
			_animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
		} else {
			onUpdate(1);
		}
	}


};


/*>>core*/

/*>>gestures*/
/**
 * Mouse/touch/pointer event handlers.
 * 
 * separated from @core.js for readability
 */

var MIN_SWIPE_DISTANCE = 30,
	DIRECTION_CHECK_OFFSET = 10; // amount of pixels to drag to determine direction of swipe

var _gestureStartTime,
	_gestureCheckSpeedTime,

	// pool of objects that are used during dragging of zooming
	p = {}, // first point
	p2 = {}, // second point (for zoom gesture)
	delta = {},
	_currPoint = {},
	_startPoint = {},
	_currPointers = [],
	_startMainScrollPos = {},
	_releaseAnimData,
	_posPoints = [], // array of points during dragging, used to determine type of gesture
	_tempPoint = {},

	_isZoomingIn,
	_verticalDragInitiated,
	_oldAndroidTouchEndTimeout,
	_currZoomedItemIndex = 0,
	_centerPoint = _getEmptyPoint(),
	_lastReleaseTime = 0,
	_isDragging, // at least one pointer is down
	_isMultitouch, // at least two _pointers are down
	_zoomStarted, // zoom level changed during zoom gesture
	_moved,
	_dragAnimFrame,
	_mainScrollShifted,
	_currentPoints, // array of current touch points
	_isZooming,
	_currPointsDistance,
	_startPointsDistance,
	_currPanBounds,
	_mainScrollPos = _getEmptyPoint(),
	_currZoomElementStyle,
	_mainScrollAnimating, // true, if animation after swipe gesture is running
	_midZoomPoint = _getEmptyPoint(),
	_currCenterPoint = _getEmptyPoint(),
	_direction,
	_isFirstMove,
	_opacityChanged,
	_bgOpacity,
	_wasOverInitialZoom,

	_isEqualPoints = function(p1, p2) {
		return p1.x === p2.x && p1.y === p2.y;
	},
	_isNearbyPoints = function(touch0, touch1) {
		return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
	},
	_calculatePointsDistance = function(p1, p2) {
		_tempPoint.x = Math.abs( p1.x - p2.x );
		_tempPoint.y = Math.abs( p1.y - p2.y );
		return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
	},
	_stopDragUpdateLoop = function() {
		if(_dragAnimFrame) {
			_cancelAF(_dragAnimFrame);
			_dragAnimFrame = null;
		}
	},
	_dragUpdateLoop = function() {
		if(_isDragging) {
			_dragAnimFrame = _requestAF(_dragUpdateLoop);
			_renderMovement();
		}
	},
	_canPan = function() {
		return !(_options.scaleMode === 'fit' && _currZoomLevel ===  self.currItem.initialZoomLevel);
	},
	
	// find the closest parent DOM element
	_closestElement = function(el, fn) {
	  	if(!el || el === document) {
	  		return false;
	  	}

	  	// don't search elements above pswp__scroll-wrap
	  	if(el.getAttribute('class') && el.getAttribute('class').indexOf('pswp__scroll-wrap') > -1 ) {
	  		return false;
	  	}

	  	if( fn(el) ) {
	  		return el;
	  	}

	  	return _closestElement(el.parentNode, fn);
	},

	_preventObj = {},
	_preventDefaultEventBehaviour = function(e, isDown) {
	    _preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);

		_shout('preventDragEvent', e, isDown, _preventObj);
		return _preventObj.prevent;

	},
	_convertTouchToPoint = function(touch, p) {
		p.x = touch.pageX;
		p.y = touch.pageY;
		p.id = touch.identifier;
		return p;
	},
	_findCenterOfPoints = function(p1, p2, pCenter) {
		pCenter.x = (p1.x + p2.x) * 0.5;
		pCenter.y = (p1.y + p2.y) * 0.5;
	},
	_pushPosPoint = function(time, x, y) {
		if(time - _gestureCheckSpeedTime > 50) {
			var o = _posPoints.length > 2 ? _posPoints.shift() : {};
			o.x = x;
			o.y = y; 
			_posPoints.push(o);
			_gestureCheckSpeedTime = time;
		}
	},

	_calculateVerticalDragOpacityRatio = function() {
		var yOffset = _panOffset.y - self.currItem.initialPosition.y; // difference between initial and current position
		return 1 -  Math.abs( yOffset / (_viewportSize.y / 2)  );
	},

	
	// points pool, reused during touch events
	_ePoint1 = {},
	_ePoint2 = {},
	_tempPointsArr = [],
	_tempCounter,
	_getTouchPoints = function(e) {
		// clean up previous points, without recreating array
		while(_tempPointsArr.length > 0) {
			_tempPointsArr.pop();
		}

		if(!_pointerEventEnabled) {
			if(e.type.indexOf('touch') > -1) {

				if(e.touches && e.touches.length > 0) {
					_tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
					if(e.touches.length > 1) {
						_tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
					}
				}
				
			} else {
				_ePoint1.x = e.pageX;
				_ePoint1.y = e.pageY;
				_ePoint1.id = '';
				_tempPointsArr[0] = _ePoint1;//_ePoint1;
			}
		} else {
			_tempCounter = 0;
			// we can use forEach, as pointer events are supported only in modern browsers
			_currPointers.forEach(function(p) {
				if(_tempCounter === 0) {
					_tempPointsArr[0] = p;
				} else if(_tempCounter === 1) {
					_tempPointsArr[1] = p;
				}
				_tempCounter++;

			});
		}
		return _tempPointsArr;
	},

	_panOrMoveMainScroll = function(axis, delta) {

		var panFriction,
			overDiff = 0,
			newOffset = _panOffset[axis] + delta[axis],
			startOverDiff,
			dir = delta[axis] > 0,
			newMainScrollPosition = _mainScrollPos.x + delta.x,
			mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x,
			newPanPos,
			newMainScrollPos;

		// calculate fdistance over the bounds and friction
		if(newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
			panFriction = _options.panEndFriction;
			// Linear increasing of friction, so at 1/4 of viewport it's at max value. 
			// Looks not as nice as was expected. Left for history.
			// panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
		} else {
			panFriction = 1;
		}
		
		newOffset = _panOffset[axis] + delta[axis] * panFriction;

		// move main scroll or start panning
		if(_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {


			if(!_currZoomElementStyle) {
				
				newMainScrollPos = newMainScrollPosition;

			} else if(_direction === 'h' && axis === 'x' && !_zoomStarted ) {
				
				if(dir) {
					if(newOffset > _currPanBounds.min[axis]) {
						panFriction = _options.panEndFriction;
						overDiff = _currPanBounds.min[axis] - newOffset;
						startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
					}
					
					// drag right
					if( (startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1 ) {
						newMainScrollPos = newMainScrollPosition;
						if(mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
							newMainScrollPos = _startMainScrollPos.x;
						}
					} else {
						if(_currPanBounds.min.x !== _currPanBounds.max.x) {
							newPanPos = newOffset;
						}
						
					}

				} else {

					if(newOffset < _currPanBounds.max[axis] ) {
						panFriction =_options.panEndFriction;
						overDiff = newOffset - _currPanBounds.max[axis];
						startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
					}

					if( (startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1 ) {
						newMainScrollPos = newMainScrollPosition;

						if(mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
							newMainScrollPos = _startMainScrollPos.x;
						}

					} else {
						if(_currPanBounds.min.x !== _currPanBounds.max.x) {
							newPanPos = newOffset;
						}
					}

				}


				//
			}

			if(axis === 'x') {

				if(newMainScrollPos !== undefined) {
					_moveMainScroll(newMainScrollPos, true);
					if(newMainScrollPos === _startMainScrollPos.x) {
						_mainScrollShifted = false;
					} else {
						_mainScrollShifted = true;
					}
				}

				if(_currPanBounds.min.x !== _currPanBounds.max.x) {
					if(newPanPos !== undefined) {
						_panOffset.x = newPanPos;
					} else if(!_mainScrollShifted) {
						_panOffset.x += delta.x * panFriction;
					}
				}

				return newMainScrollPos !== undefined;
			}

		}

		if(!_mainScrollAnimating) {
			
			if(!_mainScrollShifted) {
				if(_currZoomLevel > self.currItem.fitRatio) {
					_panOffset[axis] += delta[axis] * panFriction;
				
				}
			}

			
		}
		
	},

	// Pointerdown/touchstart/mousedown handler
	_onDragStart = function(e) {

		// Allow dragging only via left mouse button.
		// As this handler is not added in IE8 - we ignore e.which
		// 
		// http://www.quirksmode.org/js/events_properties.html
		// https://developer.mozilla.org/en-US/docs/Web/API/event.button
		if(e.type === 'mousedown' && e.button > 0  ) {
			return;
		}

		if(_initialZoomRunning) {
			e.preventDefault();
			return;
		}

		if(_oldAndroidTouchEndTimeout && e.type === 'mousedown') {
			return;
		}

		if(_preventDefaultEventBehaviour(e, true)) {
			e.preventDefault();
		}



		_shout('pointerDown');

		if(_pointerEventEnabled) {
			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
			if(pointerIndex < 0) {
				pointerIndex = _currPointers.length;
			}
			_currPointers[pointerIndex] = {x:e.pageX, y:e.pageY, id: e.pointerId};
		}
		


		var startPointsList = _getTouchPoints(e),
			numPoints = startPointsList.length;

		_currentPoints = null;

		_stopAllAnimations();

		// init drag
		if(!_isDragging || numPoints === 1) {

			

			_isDragging = _isFirstMove = true;
			framework.bind(window, _upMoveEvents, self);

			_isZoomingIn = 
				_wasOverInitialZoom = 
				_opacityChanged = 
				_verticalDragInitiated = 
				_mainScrollShifted = 
				_moved = 
				_isMultitouch = 
				_zoomStarted = false;

			_direction = null;

			_shout('firstTouchStart', startPointsList);

			_equalizePoints(_startPanOffset, _panOffset);

			_currPanDist.x = _currPanDist.y = 0;
			_equalizePoints(_currPoint, startPointsList[0]);
			_equalizePoints(_startPoint, _currPoint);

			//_equalizePoints(_startMainScrollPos, _mainScrollPos);
			_startMainScrollPos.x = _slideSize.x * _currPositionIndex;

			_posPoints = [{
				x: _currPoint.x,
				y: _currPoint.y
			}];

			_gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();

			//_mainScrollAnimationEnd(true);
			_calculatePanBounds( _currZoomLevel, true );
			
			// Start rendering
			_stopDragUpdateLoop();
			_dragUpdateLoop();
			
		}

		// init zoom
		if(!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
			_startZoomLevel = _currZoomLevel;
			_zoomStarted = false; // true if zoom changed at least once

			_isZooming = _isMultitouch = true;
			_currPanDist.y = _currPanDist.x = 0;

			_equalizePoints(_startPanOffset, _panOffset);

			_equalizePoints(p, startPointsList[0]);
			_equalizePoints(p2, startPointsList[1]);

			_findCenterOfPoints(p, p2, _currCenterPoint);

			_midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
			_midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
			_currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
		}


	},

	// Pointermove/touchmove/mousemove handler
	_onDragMove = function(e) {

		e.preventDefault();

		if(_pointerEventEnabled) {
			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
			if(pointerIndex > -1) {
				var p = _currPointers[pointerIndex];
				p.x = e.pageX;
				p.y = e.pageY; 
			}
		}

		if(_isDragging) {
			var touchesList = _getTouchPoints(e);
			if(!_direction && !_moved && !_isZooming) {

				if(_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
					// if main scroll position is shifted – direction is always horizontal
					_direction = 'h';
				} else {
					var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
					// check the direction of movement
					if(Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
						_direction = diff > 0 ? 'h' : 'v';
						_currentPoints = touchesList;
					}
				}
				
			} else {
				_currentPoints = touchesList;
			}
		}	
	},
	// 
	_renderMovement =  function() {

		if(!_currentPoints) {
			return;
		}

		var numPoints = _currentPoints.length;

		if(numPoints === 0) {
			return;
		}

		_equalizePoints(p, _currentPoints[0]);

		delta.x = p.x - _currPoint.x;
		delta.y = p.y - _currPoint.y;

		if(_isZooming && numPoints > 1) {
			// Handle behaviour for more than 1 point

			_currPoint.x = p.x;
			_currPoint.y = p.y;
		
			// check if one of two points changed
			if( !delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2) ) {
				return;
			}

			_equalizePoints(p2, _currentPoints[1]);


			if(!_zoomStarted) {
				_zoomStarted = true;
				_shout('zoomGestureStarted');
			}
			
			// Distance between two points
			var pointsDistance = _calculatePointsDistance(p,p2);

			var zoomLevel = _calculateZoomLevel(pointsDistance);

			// slightly over the of initial zoom level
			if(zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
				_wasOverInitialZoom = true;
			}

			// Apply the friction if zoom level is out of the bounds
			var zoomFriction = 1,
				minZoomLevel = _getMinZoomLevel(),
				maxZoomLevel = _getMaxZoomLevel();

			if ( zoomLevel < minZoomLevel ) {
				
				if(_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
					// fade out background if zooming out
					var minusDiff = minZoomLevel - zoomLevel;
					var percent = 1 - minusDiff / (minZoomLevel / 1.2);

					_applyBgOpacity(percent);
					_shout('onPinchClose', percent);
					_opacityChanged = true;
				} else {
					zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
					if(zoomFriction > 1) {
						zoomFriction = 1;
					}
					zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
				}
				
			} else if ( zoomLevel > maxZoomLevel ) {
				// 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
				zoomFriction = (zoomLevel - maxZoomLevel) / ( minZoomLevel * 6 );
				if(zoomFriction > 1) {
					zoomFriction = 1;
				}
				zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
			}

			if(zoomFriction < 0) {
				zoomFriction = 0;
			}

			// distance between touch points after friction is applied
			_currPointsDistance = pointsDistance;

			// _centerPoint - The point in the middle of two pointers
			_findCenterOfPoints(p, p2, _centerPoint);
		
			// paning with two pointers pressed
			_currPanDist.x += _centerPoint.x - _currCenterPoint.x;
			_currPanDist.y += _centerPoint.y - _currCenterPoint.y;
			_equalizePoints(_currCenterPoint, _centerPoint);

			_panOffset.x = _calculatePanOffset('x', zoomLevel);
			_panOffset.y = _calculatePanOffset('y', zoomLevel);

			_isZoomingIn = zoomLevel > _currZoomLevel;
			_currZoomLevel = zoomLevel;
			_applyCurrentZoomPan();

		} else {

			// handle behaviour for one point (dragging or panning)

			if(!_direction) {
				return;
			}

			if(_isFirstMove) {
				_isFirstMove = false;

				// subtract drag distance that was used during the detection direction  

				if( Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
					delta.x -= _currentPoints[0].x - _startPoint.x;
				}
				
				if( Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
					delta.y -= _currentPoints[0].y - _startPoint.y;
				}
			}

			_currPoint.x = p.x;
			_currPoint.y = p.y;

			// do nothing if pointers position hasn't changed
			if(delta.x === 0 && delta.y === 0) {
				return;
			}

			if(_direction === 'v' && _options.closeOnVerticalDrag) {
				if(!_canPan()) {
					_currPanDist.y += delta.y;
					_panOffset.y += delta.y;

					var opacityRatio = _calculateVerticalDragOpacityRatio();

					_verticalDragInitiated = true;
					_shout('onVerticalDrag', opacityRatio);

					_applyBgOpacity(opacityRatio);
					_applyCurrentZoomPan();
					return ;
				}
			}

			_pushPosPoint(_getCurrentTime(), p.x, p.y);

			_moved = true;
			_currPanBounds = self.currItem.bounds;
			
			var mainScrollChanged = _panOrMoveMainScroll('x', delta);
			if(!mainScrollChanged) {
				_panOrMoveMainScroll('y', delta);

				_roundPoint(_panOffset);
				_applyCurrentZoomPan();
			}

		}

	},
	
	// Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
	_onDragRelease = function(e) {

		if(_features.isOldAndroid ) {

			if(_oldAndroidTouchEndTimeout && e.type === 'mouseup') {
				return;
			}

			// on Android (v4.1, 4.2, 4.3 & possibly older) 
			// ghost mousedown/up event isn't preventable via e.preventDefault,
			// which causes fake mousedown event
			// so we block mousedown/up for 600ms
			if( e.type.indexOf('touch') > -1 ) {
				clearTimeout(_oldAndroidTouchEndTimeout);
				_oldAndroidTouchEndTimeout = setTimeout(function() {
					_oldAndroidTouchEndTimeout = 0;
				}, 600);
			}
			
		}

		_shout('pointerUp');

		if(_preventDefaultEventBehaviour(e, false)) {
			e.preventDefault();
		}

		var releasePoint;

		if(_pointerEventEnabled) {
			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
			
			if(pointerIndex > -1) {
				releasePoint = _currPointers.splice(pointerIndex, 1)[0];

				if(navigator.msPointerEnabled) {
					var MSPOINTER_TYPES = {
						4: 'mouse', // event.MSPOINTER_TYPE_MOUSE
						2: 'touch', // event.MSPOINTER_TYPE_TOUCH 
						3: 'pen' // event.MSPOINTER_TYPE_PEN
					};
					releasePoint.type = MSPOINTER_TYPES[e.pointerType];

					if(!releasePoint.type) {
						releasePoint.type = e.pointerType || 'mouse';
					}
				} else {
					releasePoint.type = e.pointerType || 'mouse';
				}

			}
		}

		var touchList = _getTouchPoints(e),
			gestureType,
			numPoints = touchList.length;

		if(e.type === 'mouseup') {
			numPoints = 0;
		}

		// Do nothing if there were 3 touch points or more
		if(numPoints === 2) {
			_currentPoints = null;
			return true;
		}

		// if second pointer released
		if(numPoints === 1) {
			_equalizePoints(_startPoint, touchList[0]);
		}				


		// pointer hasn't moved, send "tap release" point
		if(numPoints === 0 && !_direction && !_mainScrollAnimating) {
			if(!releasePoint) {
				if(e.type === 'mouseup') {
					releasePoint = {x: e.pageX, y: e.pageY, type:'mouse'};
				} else if(e.changedTouches && e.changedTouches[0]) {
					releasePoint = {x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type:'touch'};
				}		
			}

			_shout('touchRelease', e, releasePoint);
		}

		// Difference in time between releasing of two last touch points (zoom gesture)
		var releaseTimeDiff = -1;

		// Gesture completed, no pointers left
		if(numPoints === 0) {
			_isDragging = false;
			framework.unbind(window, _upMoveEvents, self);

			_stopDragUpdateLoop();

			if(_isZooming) {
				// Two points released at the same time
				releaseTimeDiff = 0;
			} else if(_lastReleaseTime !== -1) {
				releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
			}
		}
		_lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;
		
		if(releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
			gestureType = 'zoom';
		} else {
			gestureType = 'swipe';
		}

		if(_isZooming && numPoints < 2) {
			_isZooming = false;

			// Only second point released
			if(numPoints === 1) {
				gestureType = 'zoomPointerUp';
			}
			_shout('zoomGestureEnded');
		}

		_currentPoints = null;
		if(!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
			// nothing to animate
			return;
		}
	
		_stopAllAnimations();

		
		if(!_releaseAnimData) {
			_releaseAnimData = _initDragReleaseAnimationData();
		}
		
		_releaseAnimData.calculateSwipeSpeed('x');


		if(_verticalDragInitiated) {

			var opacityRatio = _calculateVerticalDragOpacityRatio();

			if(opacityRatio < _options.verticalDragRange) {
				self.close();
			} else {
				var initalPanY = _panOffset.y,
					initialBgOpacity = _bgOpacity;

				_animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function(now) {
					
					_panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;

					_applyBgOpacity(  (1 - initialBgOpacity) * now + initialBgOpacity );
					_applyCurrentZoomPan();
				});

				_shout('onVerticalDrag', 1);
			}

			return;
		}


		// main scroll 
		if(  (_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
			var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
			if(itemChanged) {
				return;
			}
			gestureType = 'zoomPointerUp';
		}

		// prevent zoom/pan animation when main scroll animation runs
		if(_mainScrollAnimating) {
			return;
		}
		
		// Complete simple zoom gesture (reset zoom level if it's out of the bounds)  
		if(gestureType !== 'swipe') {
			_completeZoomGesture();
			return;
		}
	
		// Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
		if(!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
			_completePanGesture(_releaseAnimData);
		}
	},


	// Returns object with data about gesture
	// It's created only once and then reused
	_initDragReleaseAnimationData  = function() {
		// temp local vars
		var lastFlickDuration,
			tempReleasePos;

		// s = this
		var s = {
			lastFlickOffset: {},
			lastFlickDist: {},
			lastFlickSpeed: {},
			slowDownRatio:  {},
			slowDownRatioReverse:  {},
			speedDecelerationRatio:  {},
			speedDecelerationRatioAbs:  {},
			distanceOffset:  {},
			backAnimDestination: {},
			backAnimStarted: {},
			calculateSwipeSpeed: function(axis) {
				

				if( _posPoints.length > 1) {
					lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
					tempReleasePos = _posPoints[_posPoints.length-2][axis];
				} else {
					lastFlickDuration = _getCurrentTime() - _gestureStartTime; // total gesture duration
					tempReleasePos = _startPoint[axis];
				}
				s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
				s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
				if(s.lastFlickDist[axis] > 20) {
					s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
				} else {
					s.lastFlickSpeed[axis] = 0;
				}
				if( Math.abs(s.lastFlickSpeed[axis]) < 0.1 ) {
					s.lastFlickSpeed[axis] = 0;
				}
				
				s.slowDownRatio[axis] = 0.95;
				s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
				s.speedDecelerationRatio[axis] = 1;
			},

			calculateOverBoundsAnimOffset: function(axis, speed) {
				if(!s.backAnimStarted[axis]) {

					if(_panOffset[axis] > _currPanBounds.min[axis]) {
						s.backAnimDestination[axis] = _currPanBounds.min[axis];
						
					} else if(_panOffset[axis] < _currPanBounds.max[axis]) {
						s.backAnimDestination[axis] = _currPanBounds.max[axis];
					}

					if(s.backAnimDestination[axis] !== undefined) {
						s.slowDownRatio[axis] = 0.7;
						s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
						if(s.speedDecelerationRatioAbs[axis] < 0.05) {

							s.lastFlickSpeed[axis] = 0;
							s.backAnimStarted[axis] = true;

							_animateProp('bounceZoomPan'+axis,_panOffset[axis], 
								s.backAnimDestination[axis], 
								speed || 300, 
								framework.easing.sine.out, 
								function(pos) {
									_panOffset[axis] = pos;
									_applyCurrentZoomPan();
								}
							);

						}
					}
				}
			},

			// Reduces the speed by slowDownRatio (per 10ms)
			calculateAnimOffset: function(axis) {
				if(!s.backAnimStarted[axis]) {
					s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] + 
												s.slowDownRatioReverse[axis] - 
												s.slowDownRatioReverse[axis] * s.timeDiff / 10);

					s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
					s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
					_panOffset[axis] += s.distanceOffset[axis];

				}
			},

			panAnimLoop: function() {
				if ( _animations.zoomPan ) {
					_animations.zoomPan.raf = _requestAF(s.panAnimLoop);

					s.now = _getCurrentTime();
					s.timeDiff = s.now - s.lastNow;
					s.lastNow = s.now;
					
					s.calculateAnimOffset('x');
					s.calculateAnimOffset('y');

					_applyCurrentZoomPan();
					
					s.calculateOverBoundsAnimOffset('x');
					s.calculateOverBoundsAnimOffset('y');


					if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {

						// round pan position
						_panOffset.x = Math.round(_panOffset.x);
						_panOffset.y = Math.round(_panOffset.y);
						_applyCurrentZoomPan();
						
						_stopAnimation('zoomPan');
						return;
					}
				}

			}
		};
		return s;
	},

	_completePanGesture = function(animData) {
		// calculate swipe speed for Y axis (paanning)
		animData.calculateSwipeSpeed('y');

		_currPanBounds = self.currItem.bounds;
		
		animData.backAnimDestination = {};
		animData.backAnimStarted = {};

		// Avoid acceleration animation if speed is too low
		if(Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05 ) {
			animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;

			// Run pan drag release animation. E.g. if you drag image and release finger without momentum.
			animData.calculateOverBoundsAnimOffset('x');
			animData.calculateOverBoundsAnimOffset('y');
			return true;
		}

		// Animation loop that controls the acceleration after pan gesture ends
		_registerStartAnimation('zoomPan');
		animData.lastNow = _getCurrentTime();
		animData.panAnimLoop();
	},


	_finishSwipeMainScrollGesture = function(gestureType, _releaseAnimData) {
		var itemChanged;
		if(!_mainScrollAnimating) {
			_currZoomedItemIndex = _currentItemIndex;
		}


		
		var itemsDiff;

		if(gestureType === 'swipe') {
			var totalShiftDist = _currPoint.x - _startPoint.x,
				isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10;

			// if container is shifted for more than MIN_SWIPE_DISTANCE, 
			// and last flick gesture was in right direction
			if(totalShiftDist > MIN_SWIPE_DISTANCE && 
				(isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20) ) {
				// go to prev item
				itemsDiff = -1;
			} else if(totalShiftDist < -MIN_SWIPE_DISTANCE && 
				(isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20) ) {
				// go to next item
				itemsDiff = 1;
			}
		}

		var nextCircle;

		if(itemsDiff) {
			
			_currentItemIndex += itemsDiff;

			if(_currentItemIndex < 0) {
				_currentItemIndex = _options.loop ? _getNumItems()-1 : 0;
				nextCircle = true;
			} else if(_currentItemIndex >= _getNumItems()) {
				_currentItemIndex = _options.loop ? 0 : _getNumItems()-1;
				nextCircle = true;
			}

			if(!nextCircle || _options.loop) {
				_indexDiff += itemsDiff;
				_currPositionIndex -= itemsDiff;
				itemChanged = true;
			}
			

			
		}

		var animateToX = _slideSize.x * _currPositionIndex;
		var animateToDist = Math.abs( animateToX - _mainScrollPos.x );
		var finishAnimDuration;


		if(!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
			// "return to current" duration, e.g. when dragging from slide 0 to -1
			finishAnimDuration = 333; 
		} else {
			finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ? 
									animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) : 
									333;

			finishAnimDuration = Math.min(finishAnimDuration, 400);
			finishAnimDuration = Math.max(finishAnimDuration, 250);
		}

		if(_currZoomedItemIndex === _currentItemIndex) {
			itemChanged = false;
		}
		
		_mainScrollAnimating = true;
		
		_shout('mainScrollAnimStart');

		_animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out, 
			_moveMainScroll,
			function() {
				_stopAllAnimations();
				_mainScrollAnimating = false;
				_currZoomedItemIndex = -1;
				
				if(itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
					self.updateCurrItem();
				}
				
				_shout('mainScrollAnimComplete');
			}
		);

		if(itemChanged) {
			self.updateCurrItem(true);
		}

		return itemChanged;
	},

	_calculateZoomLevel = function(touchesDistance) {
		return  1 / _startPointsDistance * touchesDistance * _startZoomLevel;
	},

	// Resets zoom if it's out of bounds
	_completeZoomGesture = function() {
		var destZoomLevel = _currZoomLevel,
			minZoomLevel = _getMinZoomLevel(),
			maxZoomLevel = _getMaxZoomLevel();

		if ( _currZoomLevel < minZoomLevel ) {
			destZoomLevel = minZoomLevel;
		} else if ( _currZoomLevel > maxZoomLevel ) {
			destZoomLevel = maxZoomLevel;
		}

		var destOpacity = 1,
			onUpdate,
			initialOpacity = _bgOpacity;

		if(_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
			//_closedByScroll = true;
			self.close();
			return true;
		}

		if(_opacityChanged) {
			onUpdate = function(now) {
				_applyBgOpacity(  (destOpacity - initialOpacity) * now + initialOpacity );
			};
		}

		self.zoomTo(destZoomLevel, 0, 200,  framework.easing.cubic.out, onUpdate);
		return true;
	};


_registerModule('Gestures', {
	publicMethods: {

		initGestures: function() {

			// helper function that builds touch/pointer/mouse events
			var addEventNames = function(pref, down, move, up, cancel) {
				_dragStartEvent = pref + down;
				_dragMoveEvent = pref + move;
				_dragEndEvent = pref + up;
				if(cancel) {
					_dragCancelEvent = pref + cancel;
				} else {
					_dragCancelEvent = '';
				}
			};

			_pointerEventEnabled = _features.pointerEvent;
			if(_pointerEventEnabled && _features.touch) {
				// we don't need touch events, if browser supports pointer events
				_features.touch = false;
			}

			if(_pointerEventEnabled) {
				if(navigator.msPointerEnabled) {
					// IE10 pointer events are case-sensitive
					addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
				} else {
					addEventNames('pointer', 'down', 'move', 'up', 'cancel');
				}
			} else if(_features.touch) {
				addEventNames('touch', 'start', 'move', 'end', 'cancel');
				_likelyTouchDevice = true;
			} else {
				addEventNames('mouse', 'down', 'move', 'up');	
			}

			_upMoveEvents = _dragMoveEvent + ' ' + _dragEndEvent  + ' ' +  _dragCancelEvent;
			_downEvents = _dragStartEvent;

			if(_pointerEventEnabled && !_likelyTouchDevice) {
				_likelyTouchDevice = (navigator.maxTouchPoints > 1) || (navigator.msMaxTouchPoints > 1);
			}
			// make variable public
			self.likelyTouchDevice = _likelyTouchDevice; 
			
			_globalEventHandlers[_dragStartEvent] = _onDragStart;
			_globalEventHandlers[_dragMoveEvent] = _onDragMove;
			_globalEventHandlers[_dragEndEvent] = _onDragRelease; // the Kraken

			if(_dragCancelEvent) {
				_globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
			}

			// Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.
			if(_features.touch) {
				_downEvents += ' mousedown';
				_upMoveEvents += ' mousemove mouseup';
				_globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
				_globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
				_globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
			}

			if(!_likelyTouchDevice) {
				// don't allow pan to next slide from zoomed state on Desktop
				_options.allowPanToNext = false;
			}
		}

	}
});


/*>>gestures*/

/*>>show-hide-transition*/
/**
 * show-hide-transition.js:
 *
 * Manages initial opening or closing transition.
 *
 * If you're not planning to use transition for gallery at all,
 * you may set options hideAnimationDuration and showAnimationDuration to 0,
 * and just delete startAnimation function.
 * 
 */


var _showOrHideTimeout,
	_showOrHide = function(item, img, out, completeFn) {

		if(_showOrHideTimeout) {
			clearTimeout(_showOrHideTimeout);
		}

		_initialZoomRunning = true;
		_initialContentSet = true;
		
		// dimensions of small thumbnail {x:,y:,w:}.
		// Height is optional, as calculated based on large image.
		var thumbBounds; 
		if(item.initialLayout) {
			thumbBounds = item.initialLayout;
			item.initialLayout = null;
		} else {
			thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
		}

		var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;

		var onComplete = function() {
			_stopAnimation('initialZoom');
			if(!out) {
				_applyBgOpacity(1);
				if(img) {
					img.style.display = 'block';
				}
				framework.addClass(template, 'pswp--animated-in');
				_shout('initialZoom' + (out ? 'OutEnd' : 'InEnd'));
			} else {
				self.template.removeAttribute('style');
				self.bg.removeAttribute('style');
			}

			if(completeFn) {
				completeFn();
			}
			_initialZoomRunning = false;
		};

		// if bounds aren't provided, just open gallery without animation
		if(!duration || !thumbBounds || thumbBounds.x === undefined) {

			_shout('initialZoom' + (out ? 'Out' : 'In') );

			_currZoomLevel = item.initialZoomLevel;
			_equalizePoints(_panOffset,  item.initialPosition );
			_applyCurrentZoomPan();

			template.style.opacity = out ? 0 : 1;
			_applyBgOpacity(1);

			if(duration) {
				setTimeout(function() {
					onComplete();
				}, duration);
			} else {
				onComplete();
			}

			return;
		}

		var startAnimation = function() {
			var closeWithRaf = _closedByScroll,
				fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity;
			
			// apply hw-acceleration to image
			if(item.miniImg) {
				item.miniImg.style.webkitBackfaceVisibility = 'hidden';
			}

			if(!out) {
				_currZoomLevel = thumbBounds.w / item.w;
				_panOffset.x = thumbBounds.x;
				_panOffset.y = thumbBounds.y - _initalWindowScrollY;

				self[fadeEverything ? 'template' : 'bg'].style.opacity = 0.001;
				_applyCurrentZoomPan();
			}

			_registerStartAnimation('initialZoom');
			
			if(out && !closeWithRaf) {
				framework.removeClass(template, 'pswp--animated-in');
			}

			if(fadeEverything) {
				if(out) {
					framework[ (closeWithRaf ? 'remove' : 'add') + 'Class' ](template, 'pswp--animate_opacity');
				} else {
					setTimeout(function() {
						framework.addClass(template, 'pswp--animate_opacity');
					}, 30);
				}
			}

			_showOrHideTimeout = setTimeout(function() {

				_shout('initialZoom' + (out ? 'Out' : 'In') );
				

				if(!out) {

					// "in" animation always uses CSS transitions (instead of rAF).
					// CSS transition work faster here, 
					// as developer may also want to animate other things, 
					// like ui on top of sliding area, which can be animated just via CSS
					
					_currZoomLevel = item.initialZoomLevel;
					_equalizePoints(_panOffset,  item.initialPosition );
					_applyCurrentZoomPan();
					_applyBgOpacity(1);

					if(fadeEverything) {
						template.style.opacity = 1;
					} else {
						_applyBgOpacity(1);
					}

					_showOrHideTimeout = setTimeout(onComplete, duration + 20);
				} else {

					// "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
					var destZoomLevel = thumbBounds.w / item.w,
						initialPanOffset = {
							x: _panOffset.x,
							y: _panOffset.y
						},
						initialZoomLevel = _currZoomLevel,
						initalBgOpacity = _bgOpacity,
						onUpdate = function(now) {
							
							if(now === 1) {
								_currZoomLevel = destZoomLevel;
								_panOffset.x = thumbBounds.x;
								_panOffset.y = thumbBounds.y  - _currentWindowScrollY;
							} else {
								_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
								_panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
								_panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
							}
							
							_applyCurrentZoomPan();
							if(fadeEverything) {
								template.style.opacity = 1 - now;
							} else {
								_applyBgOpacity( initalBgOpacity - now * initalBgOpacity );
							}
						};

					if(closeWithRaf) {
						_animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
					} else {
						onUpdate(1);
						_showOrHideTimeout = setTimeout(onComplete, duration + 20);
					}
				}
			
			}, out ? 25 : 90); // Main purpose of this delay is to give browser time to paint and
					// create composite layers of PhotoSwipe UI parts (background, controls, caption, arrows).
					// Which avoids lag at the beginning of scale transition.
		};
		startAnimation();

		
	};

/*>>show-hide-transition*/

/*>>items-controller*/
/**
*
* Controller manages gallery items, their dimensions, and their content.
* 
*/

var _items,
	_tempPanAreaSize = {},
	_imagesToAppendPool = [],
	_initialContentSet,
	_initialZoomRunning,
	_controllerDefaultOptions = {
		index: 0,
		errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
		forceProgressiveLoading: false, // TODO
		preload: [1,1],
		getNumItemsFn: function() {
			return _items.length;
		}
	};


var _getItemAt,
	_getNumItems,
	_initialIsLoop,
	_getZeroBounds = function() {
		return {
			center:{x:0,y:0}, 
			max:{x:0,y:0}, 
			min:{x:0,y:0}
		};
	},
	_calculateSingleItemPanBounds = function(item, realPanElementW, realPanElementH ) {
		var bounds = item.bounds;

		// position of element when it's centered
		bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
		bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;

		// maximum pan position
		bounds.max.x = (realPanElementW > _tempPanAreaSize.x) ? 
							Math.round(_tempPanAreaSize.x - realPanElementW) : 
							bounds.center.x;
		
		bounds.max.y = (realPanElementH > _tempPanAreaSize.y) ? 
							Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top : 
							bounds.center.y;
		
		// minimum pan position
		bounds.min.x = (realPanElementW > _tempPanAreaSize.x) ? 0 : bounds.center.x;
		bounds.min.y = (realPanElementH > _tempPanAreaSize.y) ? item.vGap.top : bounds.center.y;
	},
	_calculateItemSize = function(item, viewportSize, zoomLevel) {

		if (item.src && !item.loadError) {
			var isInitial = !zoomLevel;
			
			if(isInitial) {
				if(!item.vGap) {
					item.vGap = {top:0,bottom:0};
				}
				// allows overriding vertical margin for individual items
				_shout('parseVerticalMargin', item);
			}


			_tempPanAreaSize.x = viewportSize.x;
			_tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;

			if (isInitial) {
				var hRatio = _tempPanAreaSize.x / item.w;
				var vRatio = _tempPanAreaSize.y / item.h;

				item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
				//item.fillRatio = hRatio > vRatio ? hRatio : vRatio;

				var scaleMode = _options.scaleMode;

				if (scaleMode === 'orig') {
					zoomLevel = 1;
				} else if (scaleMode === 'fit') {
					zoomLevel = item.fitRatio;
				}

				if (zoomLevel > 1) {
					zoomLevel = 1;
				}

				item.initialZoomLevel = zoomLevel;
				
				if(!item.bounds) {
					// reuse bounds object
					item.bounds = _getZeroBounds(); 
				}
			}

			if(!zoomLevel) {
				return;
			}

			_calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);

			if (isInitial && zoomLevel === item.initialZoomLevel) {
				item.initialPosition = item.bounds.center;
			}

			return item.bounds;
		} else {
			item.w = item.h = 0;
			item.initialZoomLevel = item.fitRatio = 1;
			item.bounds = _getZeroBounds();
			item.initialPosition = item.bounds.center;

			// if it's not image, we return zero bounds (content is not zoomable)
			return item.bounds;
		}
		
	},

	


	_appendImage = function(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {
		

		if(item.loadError) {
			return;
		}

		if(img) {

			item.imageAppended = true;
			_setImageSize(item, img, (item === self.currItem && _renderMaxResolution) );
			
			baseDiv.appendChild(img);

			if(keepPlaceholder) {
				setTimeout(function() {
					if(item && item.loaded && item.placeholder) {
						item.placeholder.style.display = 'none';
						item.placeholder = null;
					}
				}, 500);
			}
		}
	},
	


	_preloadImage = function(item) {
		item.loading = true;
		item.loaded = false;
		var img = item.img = framework.createEl('pswp__img', 'img');
		var onComplete = function() {
			item.loading = false;
			item.loaded = true;

			if(item.loadComplete) {
				item.loadComplete(item);
			} else {
				item.img = null; // no need to store image object
			}
			img.onload = img.onerror = null;
			img = null;
		};
		img.onload = onComplete;
		img.onerror = function() {
			item.loadError = true;
			onComplete();
		};		

		img.src = item.src;// + '?a=' + Math.random();

		return img;
	},
	_checkForError = function(item, cleanUp) {
		if(item.src && item.loadError && item.container) {

			if(cleanUp) {
				item.container.innerHTML = '';
			}

			item.container.innerHTML = _options.errorMsg.replace('%url%',  item.src );
			return true;
			
		}
	},
	_setImageSize = function(item, img, maxRes) {
		if(!item.src) {
			return;
		}

		if(!img) {
			img = item.container.lastChild;
		}

		var w = maxRes ? item.w : Math.round(item.w * item.fitRatio),
			h = maxRes ? item.h : Math.round(item.h * item.fitRatio);
		
		if(item.placeholder && !item.loaded) {
			item.placeholder.style.width = w + 'px';
			item.placeholder.style.height = h + 'px';
		}

		img.style.width = w + 'px';
		img.style.height = h + 'px';
	},
	_appendImagesPool = function() {

		if(_imagesToAppendPool.length) {
			var poolItem;

			for(var i = 0; i < _imagesToAppendPool.length; i++) {
				poolItem = _imagesToAppendPool[i];
				if( poolItem.holder.index === poolItem.index ) {
					_appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
				}
			}
			_imagesToAppendPool = [];
		}
	};
	


_registerModule('Controller', {

	publicMethods: {

		lazyLoadItem: function(index) {
			index = _getLoopedId(index);
			var item = _getItemAt(index);

			if(!item || ((item.loaded || item.loading) && !_itemsNeedUpdate)) {
				return;
			}

			_shout('gettingData', index, item);

			if (!item.src) {
				return;
			}

			_preloadImage(item);
		},
		initController: function() {
			framework.extend(_options, _controllerDefaultOptions, true);
			self.items = _items = items;
			_getItemAt = self.getItemAt;
			_getNumItems = _options.getNumItemsFn; //self.getNumItems;



			_initialIsLoop = _options.loop;
			if(_getNumItems() < 3) {
				_options.loop = false; // disable loop if less then 3 items
			}

			_listen('beforeChange', function(diff) {

				var p = _options.preload,
					isNext = diff === null ? true : (diff >= 0),
					preloadBefore = Math.min(p[0], _getNumItems() ),
					preloadAfter = Math.min(p[1], _getNumItems() ),
					i;


				for(i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
					self.lazyLoadItem(_currentItemIndex+i);
				}
				for(i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
					self.lazyLoadItem(_currentItemIndex-i);
				}
			});

			_listen('initialLayout', function() {
				self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
			});

			_listen('mainScrollAnimComplete', _appendImagesPool);
			_listen('initialZoomInEnd', _appendImagesPool);



			_listen('destroy', function() {
				var item;
				for(var i = 0; i < _items.length; i++) {
					item = _items[i];
					// remove reference to DOM elements, for GC
					if(item.container) {
						item.container = null; 
					}
					if(item.placeholder) {
						item.placeholder = null;
					}
					if(item.img) {
						item.img = null;
					}
					if(item.preloader) {
						item.preloader = null;
					}
					if(item.loadError) {
						item.loaded = item.loadError = false;
					}
				}
				_imagesToAppendPool = null;
			});
		},


		getItemAt: function(index) {
			if (index >= 0) {
				return _items[index] !== undefined ? _items[index] : false;
			}
			return false;
		},

		allowProgressiveImg: function() {
			// 1. Progressive image loading isn't working on webkit/blink 
			//    when hw-acceleration (e.g. translateZ) is applied to IMG element.
			//    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
			//    
			// 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
			//    That's why it's disabled on touch devices (mainly because of swipe transition)
			//    
			// 3. Progressive image loading sometimes doesn't work in IE (up to 11).

			// Don't allow progressive loading on non-large touch devices
			return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200; 
			// 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
		},

		setContent: function(holder, index) {

			if(_options.loop) {
				index = _getLoopedId(index);
			}

			var prevItem = self.getItemAt(holder.index);
			if(prevItem) {
				prevItem.container = null;
			}
	
			var item = self.getItemAt(index),
				img;
			
			if(!item) {
				holder.el.innerHTML = '';
				return;
			}

			// allow to override data
			_shout('gettingData', index, item);

			holder.index = index;
			holder.item = item;

			// base container DIV is created only once for each of 3 holders
			var baseDiv = item.container = framework.createEl('pswp__zoom-wrap'); 

			

			if(!item.src && item.html) {
				if(item.html.tagName) {
					baseDiv.appendChild(item.html);
				} else {
					baseDiv.innerHTML = item.html;
				}
			}

			_checkForError(item);

			_calculateItemSize(item, _viewportSize);
			
			if(item.src && !item.loadError && !item.loaded) {

				item.loadComplete = function(item) {

					// gallery closed before image finished loading
					if(!_isOpen) {
						return;
					}

					// check if holder hasn't changed while image was loading
					if(holder && holder.index === index ) {
						if( _checkForError(item, true) ) {
							item.loadComplete = item.img = null;
							_calculateItemSize(item, _viewportSize);
							_applyZoomPanToItem(item);

							if(holder.index === _currentItemIndex) {
								// recalculate dimensions
								self.updateCurrZoomItem();
							}
							return;
						}
						if( !item.imageAppended ) {
							if(_features.transform && (_mainScrollAnimating || _initialZoomRunning) ) {
								_imagesToAppendPool.push({
									item:item,
									baseDiv:baseDiv,
									img:item.img,
									index:index,
									holder:holder,
									clearPlaceholder:true
								});
							} else {
								_appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning, true);
							}
						} else {
							// remove preloader & mini-img
							if(!_initialZoomRunning && item.placeholder) {
								item.placeholder.style.display = 'none';
								item.placeholder = null;
							}
						}
					}

					item.loadComplete = null;
					item.img = null; // no need to store image element after it's added

					_shout('imageLoadComplete', index, item);
				};

				if(framework.features.transform) {
					
					var placeholderClassName = 'pswp__img pswp__img--placeholder'; 
					placeholderClassName += (item.msrc ? '' : ' pswp__img--placeholder--blank');

					var placeholder = framework.createEl(placeholderClassName, item.msrc ? 'img' : '');
					if(item.msrc) {
						placeholder.src = item.msrc;
					}
					
					_setImageSize(item, placeholder);

					baseDiv.appendChild(placeholder);
					item.placeholder = placeholder;

				}
				

				

				if(!item.loading) {
					_preloadImage(item);
				}


				if( self.allowProgressiveImg() ) {
					// just append image
					if(!_initialContentSet && _features.transform) {
						_imagesToAppendPool.push({
							item:item, 
							baseDiv:baseDiv, 
							img:item.img, 
							index:index, 
							holder:holder
						});
					} else {
						_appendImage(index, item, baseDiv, item.img, true, true);
					}
				}
				
			} else if(item.src && !item.loadError) {
				// image object is created every time, due to bugs of image loading & delay when switching images
				img = framework.createEl('pswp__img', 'img');
				img.style.opacity = 1;
				img.src = item.src;
				_setImageSize(item, img);
				_appendImage(index, item, baseDiv, img, true);
			}
			

			if(!_initialContentSet && index === _currentItemIndex) {
				_currZoomElementStyle = baseDiv.style;
				_showOrHide(item, (img ||item.img) );
			} else {
				_applyZoomPanToItem(item);
			}

			holder.el.innerHTML = '';
			holder.el.appendChild(baseDiv);
		},

		cleanSlide: function( item ) {
			if(item.img ) {
				item.img.onload = item.img.onerror = null;
			}
			item.loaded = item.loading = item.img = item.imageAppended = false;
		}

	}
});

/*>>items-controller*/

/*>>tap*/
/**
 * tap.js:
 *
 * Displatches tap and double-tap events.
 * 
 */

var tapTimer,
	tapReleasePoint = {},
	_dispatchTapEvent = function(origEvent, releasePoint, pointerType) {		
		var e = document.createEvent( 'CustomEvent' ),
			eDetail = {
				origEvent:origEvent, 
				target:origEvent.target, 
				releasePoint: releasePoint, 
				pointerType:pointerType || 'touch'
			};

		e.initCustomEvent( 'pswpTap', true, true, eDetail );
		origEvent.target.dispatchEvent(e);
	};

_registerModule('Tap', {
	publicMethods: {
		initTap: function() {
			_listen('firstTouchStart', self.onTapStart);
			_listen('touchRelease', self.onTapRelease);
			_listen('destroy', function() {
				tapReleasePoint = {};
				tapTimer = null;
			});
		},
		onTapStart: function(touchList) {
			if(touchList.length > 1) {
				clearTimeout(tapTimer);
				tapTimer = null;
			}
		},
		onTapRelease: function(e, releasePoint) {
			if(!releasePoint) {
				return;
			}

			if(!_moved && !_isMultitouch && !_numAnimations) {
				var p0 = releasePoint;
				if(tapTimer) {
					clearTimeout(tapTimer);
					tapTimer = null;

					// Check if taped on the same place
					if ( _isNearbyPoints(p0, tapReleasePoint) ) {
						_shout('doubleTap', p0);
						return;
					}
				}

				if(releasePoint.type === 'mouse') {
					_dispatchTapEvent(e, releasePoint, 'mouse');
					return;
				}

				var clickedTagName = e.target.tagName.toUpperCase();
				// avoid double tap delay on buttons and elements that have class pswp__single-tap
				if(clickedTagName === 'BUTTON' || framework.hasClass(e.target, 'pswp__single-tap') ) {
					_dispatchTapEvent(e, releasePoint);
					return;
				}

				_equalizePoints(tapReleasePoint, p0);

				tapTimer = setTimeout(function() {
					_dispatchTapEvent(e, releasePoint);
					tapTimer = null;
				}, 300);
			}
		}
	}
});

/*>>tap*/

/*>>desktop-zoom*/
/**
 *
 * desktop-zoom.js:
 *
 * - Binds mousewheel event for paning zoomed image.
 * - Manages "dragging", "zoomed-in", "zoom-out" classes.
 *   (which are used for cursors and zoom icon)
 * - Adds toggleDesktopZoom function.
 * 
 */

var _wheelDelta;
	
_registerModule('DesktopZoom', {

	publicMethods: {

		initDesktopZoom: function() {

			if(_oldIE) {
				// no zoom for old IE (<=8)
				return;
			}

			if(_likelyTouchDevice) {
				// if detected hardware touch support, we wait until mouse is used,
				// and only then apply desktop-zoom features
				_listen('mouseUsed', function() {
					self.setupDesktopZoom();
				});
			} else {
				self.setupDesktopZoom(true);
			}

		},

		setupDesktopZoom: function(onInit) {

			_wheelDelta = {};

			var events = 'wheel mousewheel DOMMouseScroll';
			
			_listen('bindEvents', function() {
				framework.bind(template, events,  self.handleMouseWheel);
			});

			_listen('unbindEvents', function() {
				if(_wheelDelta) {
					framework.unbind(template, events, self.handleMouseWheel);
				}
			});

			self.mouseZoomedIn = false;

			var hasDraggingClass,
				updateZoomable = function() {
					if(self.mouseZoomedIn) {
						framework.removeClass(template, 'pswp--zoomed-in');
						self.mouseZoomedIn = false;
					}
					if(_currZoomLevel < 1) {
						framework.addClass(template, 'pswp--zoom-allowed');
					} else {
						framework.removeClass(template, 'pswp--zoom-allowed');
					}
					removeDraggingClass();
				},
				removeDraggingClass = function() {
					if(hasDraggingClass) {
						framework.removeClass(template, 'pswp--dragging');
						hasDraggingClass = false;
					}
				};

			_listen('resize' , updateZoomable);
			_listen('afterChange' , updateZoomable);
			_listen('pointerDown', function() {
				if(self.mouseZoomedIn) {
					hasDraggingClass = true;
					framework.addClass(template, 'pswp--dragging');
				}
			});
			_listen('pointerUp', removeDraggingClass);

			if(!onInit) {
				updateZoomable();
			}
			
		},

		handleMouseWheel: function(e) {

			if(_currZoomLevel <= self.currItem.fitRatio) {
				if( _options.modal ) {

					if (!_options.closeOnScroll || _numAnimations || _isDragging) {
						e.preventDefault();
					} else if(_transformKey && Math.abs(e.deltaY) > 2) {
						// close PhotoSwipe
						// if browser supports transforms & scroll changed enough
						_closedByScroll = true;
						self.close();
					}

				}
				return true;
			}

			// allow just one event to fire
			e.stopPropagation();

			// https://developer.mozilla.org/en-US/docs/Web/Events/wheel
			_wheelDelta.x = 0;

			if('deltaX' in e) {
				if(e.deltaMode === 1 /* DOM_DELTA_LINE */) {
					// 18 - average line height
					_wheelDelta.x = e.deltaX * 18;
					_wheelDelta.y = e.deltaY * 18;
				} else {
					_wheelDelta.x = e.deltaX;
					_wheelDelta.y = e.deltaY;
				}
			} else if('wheelDelta' in e) {
				if(e.wheelDeltaX) {
					_wheelDelta.x = -0.16 * e.wheelDeltaX;
				}
				if(e.wheelDeltaY) {
					_wheelDelta.y = -0.16 * e.wheelDeltaY;
				} else {
					_wheelDelta.y = -0.16 * e.wheelDelta;
				}
			} else if('detail' in e) {
				_wheelDelta.y = e.detail;
			} else {
				return;
			}

			_calculatePanBounds(_currZoomLevel, true);

			var newPanX = _panOffset.x - _wheelDelta.x,
				newPanY = _panOffset.y - _wheelDelta.y;

			// only prevent scrolling in nonmodal mode when not at edges
			if (_options.modal ||
				(
				newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x &&
				newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y
				) ) {
				e.preventDefault();
			}

			// TODO: use rAF instead of mousewheel?
			self.panTo(newPanX, newPanY);
		},

		toggleDesktopZoom: function(centerPoint) {
			centerPoint = centerPoint || {x:_viewportSize.x/2 + _offset.x, y:_viewportSize.y/2 + _offset.y };

			var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);
			var zoomOut = _currZoomLevel === doubleTapZoomLevel;
			
			self.mouseZoomedIn = !zoomOut;

			self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
			framework[ (!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
		}

	}
});


/*>>desktop-zoom*/

/*>>history*/
/**
 *
 * history.js:
 *
 * - Back button to close gallery.
 * 
 * - Unique URL for each slide: example.com/&pid=1&gid=3
 *   (where PID is picture index, and GID and gallery index)
 *   
 * - Switch URL when slides change.
 * 
 */


var _historyDefaultOptions = {
	history: true,
	galleryUID: 1
};

var _historyUpdateTimeout,
	_hashChangeTimeout,
	_hashAnimCheckTimeout,
	_hashChangedByScript,
	_hashChangedByHistory,
	_hashReseted,
	_initialHash,
	_historyChanged,
	_closedFromURL,
	_urlChangedOnce,
	_windowLoc,

	_supportsPushState,

	_getHash = function() {
		return _windowLoc.hash.substring(1);
	},
	_cleanHistoryTimeouts = function() {

		if(_historyUpdateTimeout) {
			clearTimeout(_historyUpdateTimeout);
		}

		if(_hashAnimCheckTimeout) {
			clearTimeout(_hashAnimCheckTimeout);
		}
	},

	// pid - Picture index
	// gid - Gallery index
	_parseItemIndexFromURL = function() {
		var hash = _getHash(),
			params = {};

		if(hash.length < 5) { // pid=1
			return params;
		}

		var i, vars = hash.split('&');
		for (i = 0; i < vars.length; i++) {
			if(!vars[i]) {
				continue;
			}
			var pair = vars[i].split('=');	
			if(pair.length < 2) {
				continue;
			}
			params[pair[0]] = pair[1];
		}
		if(_options.galleryPIDs) {
			// detect custom pid in hash and search for it among the items collection
			var searchfor = params.pid;
			params.pid = 0; // if custom pid cannot be found, fallback to the first item
			for(i = 0; i < _items.length; i++) {
				if(_items[i].pid === searchfor) {
					params.pid = i;
					break;
				}
			}
		} else {
			params.pid = parseInt(params.pid,10)-1;
		}
		if( params.pid < 0 ) {
			params.pid = 0;
		}
		return params;
	},
	_updateHash = function() {

		if(_hashAnimCheckTimeout) {
			clearTimeout(_hashAnimCheckTimeout);
		}


		if(_numAnimations || _isDragging) {
			// changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
			// that's why we update hash only when no animations running
			_hashAnimCheckTimeout = setTimeout(_updateHash, 500);
			return;
		}
		
		if(_hashChangedByScript) {
			clearTimeout(_hashChangeTimeout);
		} else {
			_hashChangedByScript = true;
		}


		var pid = (_currentItemIndex + 1);
		var item = _getItemAt( _currentItemIndex );
		if(item.hasOwnProperty('pid')) {
			// carry forward any custom pid assigned to the item
			pid = item.pid;
		}
		var newHash = _initialHash + '&'  +  'gid=' + _options.galleryUID + '&' + 'pid=' + pid;

		if(!_historyChanged) {
			if(_windowLoc.hash.indexOf(newHash) === -1) {
				_urlChangedOnce = true;
			}
			// first time - add new hisory record, then just replace
		}

		var newURL = _windowLoc.href.split('#')[0] + '#' +  newHash;

		if( _supportsPushState ) {

			if('#' + newHash !== window.location.hash) {
				history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);
			}

		} else {
			if(_historyChanged) {
				_windowLoc.replace( newURL );
			} else {
				_windowLoc.hash = newHash;
			}
		}
		
		

		_historyChanged = true;
		_hashChangeTimeout = setTimeout(function() {
			_hashChangedByScript = false;
		}, 60);
	};



	

_registerModule('History', {

	

	publicMethods: {
		initHistory: function() {

			framework.extend(_options, _historyDefaultOptions, true);

			if( !_options.history ) {
				return;
			}


			_windowLoc = window.location;
			_urlChangedOnce = false;
			_closedFromURL = false;
			_historyChanged = false;
			_initialHash = _getHash();
			_supportsPushState = ('pushState' in history);


			if(_initialHash.indexOf('gid=') > -1) {
				_initialHash = _initialHash.split('&gid=')[0];
				_initialHash = _initialHash.split('?gid=')[0];
			}
			

			_listen('afterChange', self.updateURL);
			_listen('unbindEvents', function() {
				framework.unbind(window, 'hashchange', self.onHashChange);
			});


			var returnToOriginal = function() {
				_hashReseted = true;
				if(!_closedFromURL) {

					if(_urlChangedOnce) {
						history.back();
					} else {

						if(_initialHash) {
							_windowLoc.hash = _initialHash;
						} else {
							if (_supportsPushState) {

								// remove hash from url without refreshing it or scrolling to top
								history.pushState('', document.title,  _windowLoc.pathname + _windowLoc.search );
							} else {
								_windowLoc.hash = '';
							}
						}
					}
					
				}

				_cleanHistoryTimeouts();
			};


			_listen('unbindEvents', function() {
				if(_closedByScroll) {
					// if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
					// this is done to keep the scroll position
					returnToOriginal();
				}
			});
			_listen('destroy', function() {
				if(!_hashReseted) {
					returnToOriginal();
				}
			});
			_listen('firstUpdate', function() {
				_currentItemIndex = _parseItemIndexFromURL().pid;
			});

			

			
			var index = _initialHash.indexOf('pid=');
			if(index > -1) {
				_initialHash = _initialHash.substring(0, index);
				if(_initialHash.slice(-1) === '&') {
					_initialHash = _initialHash.slice(0, -1);
				}
			}
			

			setTimeout(function() {
				if(_isOpen) { // hasn't destroyed yet
					framework.bind(window, 'hashchange', self.onHashChange);
				}
			}, 40);
			
		},
		onHashChange: function() {

			if(_getHash() === _initialHash) {

				_closedFromURL = true;
				self.close();
				return;
			}
			if(!_hashChangedByScript) {

				_hashChangedByHistory = true;
				self.goTo( _parseItemIndexFromURL().pid );
				_hashChangedByHistory = false;
			}
			
		},
		updateURL: function() {

			// Delay the update of URL, to avoid lag during transition, 
			// and to not to trigger actions like "refresh page sound" or "blinking favicon" to often
			
			_cleanHistoryTimeouts();
			

			if(_hashChangedByHistory) {
				return;
			}

			if(!_historyChanged) {
				_updateHash(); // first time
			} else {
				_historyUpdateTimeout = setTimeout(_updateHash, 800);
			}
		}
	
	}
});


/*>>history*/
	framework.extend(self, publicMethods); };
	return PhotoSwipe;
});

/***/ }),

/***/ 31777:
/*!********************************************************************************!*\
  !*** ./src/app/components/apps/gallery/gallery-desc/gallery-desc.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryDescComponent": function() { return /* binding */ GalleryDescComponent; }
/* harmony export */ });
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ 59715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);





function GalleryDescComponent_figure_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "figure", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GalleryDescComponent_figure_9_Template_img_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const img_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.openImageModalRowDescription(img_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Portfolio Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r1.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return ["Apps", "Gallery"]; };
const _c1 = function () { return { downloadable: true }; };
class GalleryDescComponent {
    constructor(galleryService) {
        this.galleryService = galleryService;
        this.imagesRect = [
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(0, {
                img: 'assets/images/lightgallry/01.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(1, {
                img: 'assets/images/lightgallry/02.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(2, {
                img: 'assets/images/lightgallry/03.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(3, {
                img: 'assets/images/lightgallry/04.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(4, {
                img: 'assets/images/lightgallry/05.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(5, {
                img: 'assets/images/lightgallry/06.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(6, {
                img: 'assets/images/lightgallry/07.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(7, {
                img: 'assets/images/lightgallry/08.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(8, {
                img: 'assets/images/lightgallry/09.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(9, {
                img: 'assets/images/lightgallry/010.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(10, {
                img: 'assets/images/lightgallry/011.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(11, {
                img: 'assets/images/lightgallry/012.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
            }),
        ];
        this.buttonsConfigDefault = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.DEFAULT
        };
        this.buttonsConfigSimple = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.SIMPLE
        };
        this.buttonsConfigAdvanced = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.ADVANCED
        };
        this.buttonsConfigFull = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.FULL
        };
        this.buttonsConfigCustom = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.CUSTOM,
            buttons: [
                _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_FULL_SCREEN,
                _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_DELETE,
                _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_EXTURL,
                _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_DOWNLOAD,
                _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_CLOSE
            ]
        };
        this.customPlainGalleryRowDescConfig = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.PlainGalleryStrategy.CUSTOM,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.AdvancedLayout(-1, true)
        };
    }
    openImageModalRowDescription(image) {
        const index = this.getCurrentIndexCustomLayout(image, this.imagesRect);
        this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.AdvancedLayout(index, true) });
    }
    getCurrentIndexCustomLayout(image, images) {
        return image ? images.indexOf(image) : -1;
    }
    ;
    onButtonBeforeHook(event) {
        if (!event || !event.button) {
            return;
        }
        if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonType.DELETE) {
            this.imagesRect = this.imagesRect.filter((val) => event.image && val.id !== event.image.id);
        }
    }
    onButtonAfterHook(event) {
        if (!event || !event.button) {
            return;
        }
    }
    onCustomButtonBeforeHook(event, galleryId) {
        if (!event || !event.button) {
            return;
        }
        if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonType.CUSTOM) {
            this.addRandomImage();
            setTimeout(() => {
                this.galleryService.openGallery(galleryId, this.imagesRect.length - 1);
            }, 0);
        }
    }
    onCustomButtonAfterHook(event, galleryId) {
        if (!event || !event.button) {
            return;
        }
    }
    addRandomImage() {
        const imageToCopy = this.imagesRect[Math.floor(Math.random() * this.imagesRect.length)];
        const newImage = new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(this.imagesRect.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
        this.imagesRect = [...this.imagesRect, newImage];
    }
    ngOnInit() { }
}
GalleryDescComponent.ɵfac = function GalleryDescComponent_Factory(t) { return new (t || GalleryDescComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.GalleryService)); };
GalleryDescComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GalleryDescComponent, selectors: [["app-gallery-desc"]], decls: 11, vars: 11, consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], ["itemscope", "", 1, "my-gallery", "card-body", "row", "gallery-with-description"], ["class", "col-xl-3 col-sm-6", "itemprop", "associatedMedia", 4, "ngFor", "ngForOf"], [3, "id", "modalImages", "plainGalleryConfig", "currentImageConfig", "buttonsConfig"], ["itemprop", "associatedMedia", 1, "col-xl-3", "col-sm-6"], ["href", "javascript:void(0)", "itemprop", "contentUrl"], ["itemprop", "thumbnail", "alt", "Image description", 1, "img-thumbnail", 3, "src", "click"], [1, "caption"]], template: function GalleryDescComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "IMAGE GALLERY WITH DESCRIPTION");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, GalleryDescComponent_figure_9_Template, 8, 1, "figure", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ks-modal-gallery", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Gallery Description")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0))("active_item", "Gallery Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.imagesRect);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", 1)("modalImages", ctx.imagesRect)("plainGalleryConfig", ctx.customPlainGalleryRowDescConfig)("currentImageConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1))("buttonsConfig", ctx.buttonsConfigCustom);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ɵd"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYWxsZXJ5LWRlc2MuY29tcG9uZW50LnNjc3MifQ== */"], encapsulation: 2 });


/***/ }),

/***/ 6381:
/*!********************************************************************************!*\
  !*** ./src/app/components/apps/gallery/gallery-grid/gallery-grid.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryGridComponent": function() { return /* binding */ GalleryGridComponent; }
/* harmony export */ });
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ 59715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);





function GalleryGridComponent_figure_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "figure", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GalleryGridComponent_figure_9_Template_img_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const img_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.openImageModalRowDescription(img_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r1.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return ["Apps", "Gallery"]; };
const _c1 = function () { return { downloadable: true }; };
class GalleryGridComponent {
    constructor(galleryService) {
        this.galleryService = galleryService;
        this.imagesRect = [
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(0, {
                img: 'assets/images/lightgallry/01.jpg',
                extUrl: 'http://www.google.com',
                description: 'Image Caption 1'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(1, {
                img: 'assets/images/lightgallry/02.jpg',
                extUrl: 'http://www.google.com',
                description: 'Image Caption 2'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(2, {
                img: 'assets/images/lightgallry/03.jpg',
                extUrl: 'http://www.google.com',
                description: 'Image Caption 3'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(3, {
                img: 'assets/images/lightgallry/04.jpg',
                extUrl: 'http://www.google.com',
                description: 'Image Caption 4'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(4, {
                img: 'assets/images/lightgallry/05.jpg',
                extUrl: 'http://www.google.com',
                title: 'Portfolio Title',
                description: 'Image Caption 5'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(5, {
                img: 'assets/images/lightgallry/06.jpg',
                extUrl: 'http://www.google.com',
                description: 'Image Caption 6'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(6, {
                img: 'assets/images/lightgallry/07.jpg',
                extUrl: 'http://www.google.com',
                description: 'Image Caption 1'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(7, {
                img: 'assets/images/lightgallry/08.jpg',
                extUrl: 'http://www.google.com',
                description: 'Image Caption 8'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(8, {
                img: 'assets/images/lightgallry/09.jpg',
                extUrl: 'http://www.google.com',
                description: 'Image Caption 9'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(9, {
                img: 'assets/images/lightgallry/010.jpg',
                extUrl: 'http://www.google.com',
                description: 'Image Caption 10'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(10, {
                img: 'assets/images/lightgallry/011.jpg',
                extUrl: 'http://www.google.com',
                description: 'Image Caption 11'
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(11, {
                img: 'assets/images/lightgallry/012.jpg',
                extUrl: 'http://www.google.com',
                description: 'Image Caption 12'
            }),
        ];
        this.buttonsConfigDefault = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.DEFAULT
        };
        this.buttonsConfigSimple = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.SIMPLE
        };
        this.buttonsConfigAdvanced = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.ADVANCED
        };
        this.buttonsConfigFull = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.FULL
        };
        this.buttonsConfigCustom = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.CUSTOM,
            buttons: [
                _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_FULL_SCREEN,
                _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_DELETE,
                _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_EXTURL,
                _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_DOWNLOAD,
                _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_CLOSE
            ]
        };
        this.customPlainGalleryRowDescConfig = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.PlainGalleryStrategy.CUSTOM,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.AdvancedLayout(-1, true)
        };
    }
    openImageModalRowDescription(image) {
        const index = this.getCurrentIndexCustomLayout(image, this.imagesRect);
        this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.AdvancedLayout(index, true) });
    }
    getCurrentIndexCustomLayout(image, images) {
        return image ? images.indexOf(image) : -1;
    }
    ;
    onButtonBeforeHook(event) {
        if (!event || !event.button) {
            return;
        }
        if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonType.DELETE) {
            this.imagesRect = this.imagesRect.filter((val) => event.image && val.id !== event.image.id);
        }
    }
    onButtonAfterHook(event) {
        if (!event || !event.button) {
            return;
        }
    }
    onCustomButtonBeforeHook(event, galleryId) {
        if (!event || !event.button) {
            return;
        }
        if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonType.CUSTOM) {
            this.addRandomImage();
            setTimeout(() => {
                this.galleryService.openGallery(galleryId, this.imagesRect.length - 1);
            }, 0);
        }
    }
    onCustomButtonAfterHook(event, galleryId) {
        if (!event || !event.button) {
            return;
        }
    }
    addRandomImage() {
        const imageToCopy = this.imagesRect[Math.floor(Math.random() * this.imagesRect.length)];
        const newImage = new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(this.imagesRect.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
        this.imagesRect = [...this.imagesRect, newImage];
    }
    ngOnInit() { }
}
GalleryGridComponent.ɵfac = function GalleryGridComponent_Factory(t) { return new (t || GalleryGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.GalleryService)); };
GalleryGridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GalleryGridComponent, selectors: [["app-gallery-grid"]], decls: 11, vars: 11, consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], ["itemscope", "", 1, "gallery", "my-gallery", "card-body", "row"], ["class", "col-xl-3 col-md-4 col-6", "itemprop", "associatedMedia", "itemscope", "", 4, "ngFor", "ngForOf"], [3, "id", "modalImages", "plainGalleryConfig", "currentImageConfig", "buttonsConfig", "buttonBeforeHook", "buttonAfterHook"], ["itemprop", "associatedMedia", "itemscope", "", 1, "col-xl-3", "col-md-4", "col-6"], ["href", "javascript:void(0)", "itemprop", "contentUrl", "data-size", "1600x950"], [1, "img-thumbnail", 3, "src", "click"]], template: function GalleryGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "IMAGE GALLERY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, GalleryGridComponent_figure_9_Template, 3, 1, "figure", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ks-modal-gallery", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("buttonBeforeHook", function GalleryGridComponent_Template_ks_modal_gallery_buttonBeforeHook_10_listener($event) { return ctx.onButtonBeforeHook($event); })("buttonAfterHook", function GalleryGridComponent_Template_ks_modal_gallery_buttonAfterHook_10_listener($event) { return ctx.onButtonAfterHook($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Gallery Grid")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0))("active_item", "Gallery Grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.imagesRect);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", 1)("modalImages", ctx.imagesRect)("plainGalleryConfig", ctx.customPlainGalleryRowDescConfig)("currentImageConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1))("buttonsConfig", ctx.buttonsConfigCustom);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ɵd"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYWxsZXJ5LWdyaWQuY29tcG9uZW50LnNjc3MifQ== */"], encapsulation: 2 });


/***/ }),

/***/ 6678:
/*!*******************************************************************!*\
  !*** ./src/app/components/apps/gallery/gallery-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryRoutingModule": function() { return /* binding */ GalleryRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _gallery_desc_gallery_desc_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery-desc/gallery-desc.component */ 31777);
/* harmony import */ var _gallery_grid_gallery_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery-grid/gallery-grid.component */ 6381);
/* harmony import */ var _hover_effect_hover_effect_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hover-effect/hover-effect.component */ 71890);
/* harmony import */ var _mesonry_mesonry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mesonry/mesonry.component */ 74170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







const routes = [{
        path: '',
        children: [
            {
                path: 'gallery-grid',
                component: _gallery_grid_gallery_grid_component__WEBPACK_IMPORTED_MODULE_1__.GalleryGridComponent
            },
            {
                path: 'gallery-desc',
                component: _gallery_desc_gallery_desc_component__WEBPACK_IMPORTED_MODULE_0__.GalleryDescComponent
            },
            {
                path: 'mesonry',
                component: _mesonry_mesonry_component__WEBPACK_IMPORTED_MODULE_3__.MesonryComponent
            },
            {
                path: 'hover',
                component: _hover_effect_hover_effect_component__WEBPACK_IMPORTED_MODULE_2__.HoverEffectComponent
            }
        ]
    }];
class GalleryRoutingModule {
}
GalleryRoutingModule.ɵfac = function GalleryRoutingModule_Factory(t) { return new (t || GalleryRoutingModule)(); };
GalleryRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: GalleryRoutingModule });
GalleryRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GalleryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 45770:
/*!***********************************************************!*\
  !*** ./src/app/components/apps/gallery/gallery.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryDemoModule": function() { return /* binding */ GalleryDemoModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ 59715);
/* harmony import */ var angular2_photoswipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2_photoswipe */ 58152);
/* harmony import */ var ngx_crystal_gallery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-crystal-gallery */ 97669);
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-masonry */ 70346);
/* harmony import */ var ngx_masonry_gallery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-masonry-gallery */ 25918);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 44466);
/* harmony import */ var _gallery_desc_gallery_desc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery-desc/gallery-desc.component */ 31777);
/* harmony import */ var _gallery_grid_gallery_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery-grid/gallery-grid.component */ 6381);
/* harmony import */ var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery-routing.module */ 6678);
/* harmony import */ var _hover_effect_hover_effect_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hover-effect/hover-effect.component */ 71890);
/* harmony import */ var _mesonry_mesonry_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mesonry/mesonry.component */ 74170);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ 11524);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mousetrap */ 13544);
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
















class GalleryDemoModule {
}
GalleryDemoModule.ɵfac = function GalleryDemoModule_Factory(t) { return new (t || GalleryDemoModule)(); };
GalleryDemoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: GalleryDemoModule });
GalleryDemoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _gallery_routing_module__WEBPACK_IMPORTED_MODULE_3__.GalleryRoutingModule,
            angular2_photoswipe__WEBPACK_IMPORTED_MODULE_10__.Angular2PhotoswipeModule,
            _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_11__.GalleryModule.forRoot(),
            ngx_masonry_gallery__WEBPACK_IMPORTED_MODULE_12__.MasonryGalleryModule,
            ngx_crystal_gallery__WEBPACK_IMPORTED_MODULE_13__.CrystalGalleryModule,
            ngx_masonry__WEBPACK_IMPORTED_MODULE_14__.NgxMasonryModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](GalleryDemoModule, { declarations: [_gallery_grid_gallery_grid_component__WEBPACK_IMPORTED_MODULE_2__.GalleryGridComponent, _gallery_desc_gallery_desc_component__WEBPACK_IMPORTED_MODULE_1__.GalleryDescComponent, _mesonry_mesonry_component__WEBPACK_IMPORTED_MODULE_5__.MesonryComponent, _hover_effect_hover_effect_component__WEBPACK_IMPORTED_MODULE_4__.HoverEffectComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _gallery_routing_module__WEBPACK_IMPORTED_MODULE_3__.GalleryRoutingModule,
        angular2_photoswipe__WEBPACK_IMPORTED_MODULE_10__.Angular2PhotoswipeModule, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_11__.GalleryModule, ngx_masonry_gallery__WEBPACK_IMPORTED_MODULE_12__.MasonryGalleryModule,
        ngx_crystal_gallery__WEBPACK_IMPORTED_MODULE_13__.CrystalGalleryModule,
        ngx_masonry__WEBPACK_IMPORTED_MODULE_14__.NgxMasonryModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 71890:
/*!********************************************************************************!*\
  !*** ./src/app/components/apps/gallery/hover-effect/hover-effect.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HoverEffectComponent": function() { return /* binding */ HoverEffectComponent; }
/* harmony export */ });
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ 59715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);





function HoverEffectComponent_figure_12_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "figure", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HoverEffectComponent_figure_12_Template_img_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const img_r15 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.openImageModalRowDescription(img_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r15.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HoverEffectComponent_figure_24_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "figure", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HoverEffectComponent_figure_24_Template_img_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const img_r18 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.openImageModalRowDescription(img_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r18.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HoverEffectComponent_figure_35_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "figure", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HoverEffectComponent_figure_35_Template_img_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const img_r21 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.openImageModalRowDescription(img_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r21.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HoverEffectComponent_figure_46_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "figure", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HoverEffectComponent_figure_46_Template_img_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const img_r24 = restoredCtx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.openImageModalRowDescription(img_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r24.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HoverEffectComponent_figure_57_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "figure", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HoverEffectComponent_figure_57_Template_img_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const img_r27 = restoredCtx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.openImageModalRowDescription(img_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r27.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HoverEffectComponent_figure_68_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "figure", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HoverEffectComponent_figure_68_Template_img_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const img_r30 = restoredCtx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.openImageModalRowDescription(img_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r30.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HoverEffectComponent_figure_79_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "figure", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HoverEffectComponent_figure_79_Template_img_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const img_r33 = restoredCtx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.openImageModalRowDescription(img_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r33.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HoverEffectComponent_figure_90_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "figure", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HoverEffectComponent_figure_90_Template_img_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const img_r36 = restoredCtx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r37.openImageModalRowDescription(img_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r36.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HoverEffectComponent_figure_101_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "figure", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HoverEffectComponent_figure_101_Template_img_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); const img_r39 = restoredCtx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r40.openImageModalRowDescription(img_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r39.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HoverEffectComponent_figure_112_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "figure", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HoverEffectComponent_figure_112_Template_img_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const img_r42 = restoredCtx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r43.openImageModalRowDescription(img_r42); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r42.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HoverEffectComponent_figure_123_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "figure", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HoverEffectComponent_figure_123_Template_img_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const img_r45 = restoredCtx.$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r46.openImageModalRowDescription(img_r45); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r45.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HoverEffectComponent_figure_134_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "figure", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HoverEffectComponent_figure_134_Template_img_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); const img_r48 = restoredCtx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r49.openImageModalRowDescription(img_r48); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r48.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HoverEffectComponent_figure_145_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "figure", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HoverEffectComponent_figure_145_Template_img_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53); const img_r51 = restoredCtx.$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r52.openImageModalRowDescription(img_r51); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r51.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HoverEffectComponent_figure_156_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "figure", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HoverEffectComponent_figure_156_Template_img_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56); const img_r54 = restoredCtx.$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r55.openImageModalRowDescription(img_r54); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r54.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HoverEffectComponent_figure_167_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "figure", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HoverEffectComponent_figure_167_Template_img_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r59); const img_r57 = restoredCtx.$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r58.openImageModalRowDescription(img_r57); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r57.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return ["Apps", "Gallery"]; };
const _c1 = function () { return { downloadable: true }; };
class HoverEffectComponent {
    constructor(galleryService) {
        this.galleryService = galleryService;
        this.imageIndex = 1;
        this.galleryId = 1;
        this.isPlaying = true;
        this.imagesRect = [
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(0, {
                img: 'assets/images/lightgallry/08.jpg',
                extUrl: 'http://www.google.com',
                description: 'Image Caption 1'
            }, {
                img: 'assets/images/lightgallry/08.jpg',
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(1, {
                img: 'assets/images/lightgallry/09.jpg',
                extUrl: 'http://www.google.com',
                description: 'Image Caption 2'
            }, {
                img: 'assets/images/lightgallry/09.jpg',
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(2, {
                img: 'assets/images/lightgallry/010.jpg',
                extUrl: 'http://www.google.com',
                description: 'Image Caption 3'
            }, {
                img: 'assets/images/lightgallry/010.jpg',
            }),
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(3, {
                img: 'assets/images/lightgallry/011.jpg',
                extUrl: 'http://www.google.com',
                description: 'Image Caption 4'
            }, {
                img: 'assets/images/lightgallry/011.jpg',
            })
        ];
        this.buttonsConfigDefault = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.DEFAULT
        };
        this.buttonsConfigSimple = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.SIMPLE
        };
        this.buttonsConfigAdvanced = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.ADVANCED
        };
        this.buttonsConfigFull = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.FULL
        };
        this.buttonsConfigCustom = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonsStrategy.CUSTOM,
            buttons: [
                _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_FULL_SCREEN,
                _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_DELETE,
                _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_EXTURL,
                _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_DOWNLOAD,
                _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.KS_DEFAULT_BTN_CLOSE
            ]
        };
        this.customPlainGalleryRowConfig = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.PlainGalleryStrategy.CUSTOM,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.AdvancedLayout(-1, true)
        };
        this.customPlainGalleryRowDescConfig = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.PlainGalleryStrategy.CUSTOM,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.AdvancedLayout(-1, true)
        };
        this.isShownAutoNavigate = false;
    }
    openImageModalRow(image) {
        const index = this.getCurrentIndexCustomLayout(image, this.imagesRect);
        this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, { layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.AdvancedLayout(index, true) });
    }
    openImageModalRowDescription(image) {
        const index = this.getCurrentIndexCustomLayout(image, this.imagesRect);
        this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.AdvancedLayout(index, true) });
    }
    getCurrentIndexCustomLayout(image, images) {
        return image ? images.indexOf(image) : -1;
    }
    ;
    onButtonBeforeHook(event) {
        if (!event || !event.button) {
            return;
        }
        if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonType.DELETE) {
            this.imagesRect = this.imagesRect.filter((val) => event.image && val.id !== event.image.id);
        }
    }
    onButtonAfterHook(event) {
        if (!event || !event.button) {
            return;
        }
    }
    onCustomButtonBeforeHook(event, galleryId) {
        if (!event || !event.button) {
            return;
        }
        if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.ButtonType.CUSTOM) {
            this.addRandomImage();
            setTimeout(() => {
                this.galleryService.openGallery(galleryId, this.imagesRect.length - 1);
            }, 0);
        }
    }
    onCustomButtonAfterHook(event, galleryId) {
        if (!event || !event.button) {
            return;
        }
    }
    addRandomImage() {
        const imageToCopy = this.imagesRect[Math.floor(Math.random() * this.imagesRect.length)];
        const newImage = new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.Image(this.imagesRect.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
        this.imagesRect = [...this.imagesRect, newImage];
    }
    ngOnInit() { }
}
HoverEffectComponent.ɵfac = function HoverEffectComponent_Factory(t) { return new (t || HoverEffectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__.GalleryService)); };
HoverEffectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HoverEffectComponent, selectors: [["app-hover-effect"]], decls: 168, vars: 25, consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "digits"], [1, "card-body"], ["id", "aniimated-thumbnials", "itemscope", "", 1, "row", "my-gallery", "gallery"], ["class", "col-md-3 col-6 img-hover hover-1", 4, "ngFor", "ngForOf"], [3, "id", "modalImages", "plainGalleryConfig", "currentImageConfig", "buttonsConfig", "buttonBeforeHook", "buttonAfterHook"], ["id", "aniimated-thumbnials1", "itemscope", "", 1, "row", "my-gallery", "gallery"], ["class", "col-md-3 col-6 img-hover hover-2", 4, "ngFor", "ngForOf"], ["id", "aniimated-thumbnials2", "itemscope", "", 1, "row", "gallery", "my-gallery"], ["class", "col-md-3 col-6 img-hover hover-3", 4, "ngFor", "ngForOf"], ["id", "aniimated-thumbnials3", "itemscope", "", 1, "row", "gallery", "my-gallery"], ["class", "col-md-3 col-6 img-hover hover-4", 4, "ngFor", "ngForOf"], ["id", "aniimated-thumbnials4", "itemscope", "", 1, "row", "gallery", "my-gallery"], ["class", "col-md-3 col-6 img-hover hover-5", 4, "ngFor", "ngForOf"], ["id", "aniimated-thumbnials5", "itemscope", "", 1, "row", "gallery", "my-gallery"], ["class", "col-sm-3 col-6 img-hover hover-6", 4, "ngFor", "ngForOf"], ["id", "aniimated-thumbnials6", "itemscope", "", 1, "row", "gallery", "my-gallery"], ["class", "col-md-3 col-6 img-hover hover-7", 4, "ngFor", "ngForOf"], ["id", "aniimated-thumbnials7", "itemscope", "", 1, "row", "gallery", "my-gallery"], ["class", "col-md-3 col-6 img-hover hover-8", 4, "ngFor", "ngForOf"], ["id", "aniimated-thumbnials8", "itemscope", "", 1, "row", "gallery", "my-gallery"], ["class", "col-md-3 col-6 img-hover hover-9", 4, "ngFor", "ngForOf"], ["id", "aniimated-thumbnials9", "itemscope", "", 1, "row", "gallery", "my-gallery"], ["class", "col-md-3 col-6 img-hover hover-10", 4, "ngFor", "ngForOf"], ["id", "aniimated-thumbnials10", "itemscope", "", 1, "row", "gallery", "my-gallery"], ["class", "col-sm-3 col-6 img-hover hover-11", 4, "ngFor", "ngForOf"], ["id", "aniimated-thumbnials11", "itemscope", "", 1, "row", "gallery", "my-gallery"], ["class", "col-md-3 col-6 img-hover", 4, "ngFor", "ngForOf"], ["id", "aniimated-thumbnials12", "itemscope", "", 1, "row", "gallery", "my-gallery"], ["class", "col-md-3 col-6 img-hover hover-13", 4, "ngFor", "ngForOf"], ["id", "aniimated-thumbnials13", "itemscope", "", 1, "row", "gallery", "my-gallery"], ["class", "col-md-3 col-6 img-hover hover-14", 4, "ngFor", "ngForOf"], ["id", "aniimated-thumbnials14", "itemscope", "", 1, "row", "gallery", "my-gallery"], ["class", "col-md-3 col-6 img-hover hover-15", 4, "ngFor", "ngForOf"], [1, "col-md-3", "col-6", "img-hover", "hover-1"], [1, "img-hover", "hover-1"], [1, "img-fluid", 3, "src", "click"], [1, "col-md-3", "col-6", "img-hover", "hover-2"], [1, "img-hover", "hover-2"], [3, "src", "click"], [1, "col-md-3", "col-6", "img-hover", "hover-3"], [1, "img-hover", "hover-3"], [1, "col-md-3", "col-6", "img-hover", "hover-4"], [1, "img-hover", "hover-4"], [1, "col-md-3", "col-6", "img-hover", "hover-5"], [1, "img-hover", "hover-5"], [1, "col-sm-3", "col-6", "img-hover", "hover-6"], [1, "col-md-3", "col-6", "img-hover", "hover-7"], [1, "img-hover", "hover-7"], [1, "col-md-3", "col-6", "img-hover", "hover-8"], [1, "img-hover", "hover-8"], [1, "col-md-3", "col-6", "img-hover", "hover-9"], [1, "img-hover", "hover-9"], [1, "col-md-3", "col-6", "img-hover", "hover-10"], [1, "img-hover", "hover-10"], [1, "col-sm-3", "col-6", "img-hover", "hover-11"], [1, "col-md-3", "col-6", "img-hover"], [1, "img-hover", "hover-12"], [1, "col-md-3", "col-6", "img-hover", "hover-13"], [1, "img-hover", "hover-13"], [1, "col-md-3", "col-6", "img-hover", "hover-14"], [1, "img-hover", "hover-14"], [1, "col-md-3", "col-6", "img-hover", "hover-15"], [1, "img-hover", "hover-15"]], template: function HoverEffectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Hover Effect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HoverEffectComponent_figure_12_Template, 3, 1, "figure", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ks-modal-gallery", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("buttonBeforeHook", function HoverEffectComponent_Template_ks_modal_gallery_buttonBeforeHook_13_listener($event) { return ctx.onButtonBeforeHook($event); })("buttonAfterHook", function HoverEffectComponent_Template_ks_modal_gallery_buttonAfterHook_13_listener($event) { return ctx.onButtonAfterHook($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Hover Effect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, HoverEffectComponent_figure_24_Template, 3, 1, "figure", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Hover Effect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, HoverEffectComponent_figure_35_Template, 3, 1, "figure", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Hover Effect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, HoverEffectComponent_figure_46_Template, 3, 1, "figure", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Hover Effect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, HoverEffectComponent_figure_57_Template, 3, 1, "figure", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Hover Effect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, HoverEffectComponent_figure_68_Template, 3, 1, "figure", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Hover Effect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, HoverEffectComponent_figure_79_Template, 3, 1, "figure", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Hover Effect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, HoverEffectComponent_figure_90_Template, 3, 1, "figure", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Hover Effect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, HoverEffectComponent_figure_101_Template, 3, 1, "figure", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Hover Effect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](112, HoverEffectComponent_figure_112_Template, 3, 1, "figure", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Hover Effect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](123, HoverEffectComponent_figure_123_Template, 3, 1, "figure", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Hover Effect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](134, HoverEffectComponent_figure_134_Template, 3, 1, "figure", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Hover Effect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "13");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](145, HoverEffectComponent_figure_145_Template, 3, 1, "figure", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Hover Effect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](156, HoverEffectComponent_figure_156_Template, 3, 1, "figure", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Hover Effect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](167, HoverEffectComponent_figure_167_Template, 3, 1, "figure", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Gallery Effect")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c0))("active_item", "Gallery Effect");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.imagesRect);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", 2)("modalImages", ctx.imagesRect)("plainGalleryConfig", ctx.customPlainGalleryRowDescConfig)("currentImageConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c1))("buttonsConfig", ctx.buttonsConfigCustom);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.imagesRect);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.imagesRect);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.imagesRect);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.imagesRect);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.imagesRect);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.imagesRect);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.imagesRect);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.imagesRect);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.imagesRect);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.imagesRect);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.imagesRect);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.imagesRect);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.imagesRect);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.imagesRect);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ɵd"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Zlci1lZmZlY3QuY29tcG9uZW50LnNjc3MifQ== */"], encapsulation: 2 });


/***/ }),

/***/ 74170:
/*!**********************************************************************!*\
  !*** ./src/app/components/apps/gallery/mesonry/mesonry.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MesonryComponent": function() { return /* binding */ MesonryComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var ngx_masonry_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-masonry-gallery */ 25918);



const _c0 = ["masonryGallery"];
const _c1 = function () { return ["Apps", "Gallery"]; };
class MesonryComponent {
    constructor() {
        this.numberOfInitiallyShownImages = 8;
        this.numberOfImages = 23;
        this.multipleImagesCount = 3;
        this.usedImages = [];
        this.pool = [];
        this.urls = [
            'assets/images/masonry/1.jpg',
            'assets/images/masonry/2.jpg',
            'assets/images/masonry/3.jpg',
            'assets/images/masonry/4.jpg',
            'assets/images/masonry/5.jpg',
            'assets/images/masonry/6.jpg',
            'assets/images/masonry/7.jpg',
            'assets/images/masonry/8.jpg',
            'assets/images/masonry/9.jpg',
            'assets/images/masonry/10.jpg',
            'assets/images/masonry/11.jpg',
            'assets/images/masonry/12.jpg'
        ];
        // init initial images
        const images = [];
        for (let i = 1; i <= this.numberOfInitiallyShownImages; i++) {
            const image = this.pool[Math.floor(Math.random() * this.pool.length)];
            images.push(image);
            this.usedImages.push(image);
        }
        this.initialImages = images;
    }
    ngOnInit() { }
    get images() {
        return this.urls.map(m => ({
            imageUrl: m
        }));
    }
}
MesonryComponent.ɵfac = function MesonryComponent_Factory(t) { return new (t || MesonryComponent)(); };
MesonryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MesonryComponent, selectors: [["app-mesonry"]], viewQuery: function MesonryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.masonryGallery = _t.first);
    } }, decls: 11, vars: 6, consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], ["itemprop", "associatedMedia", "itemscope", "", 1, "card-body", "photoswipe-pb-responsive"], [1, "custom-mesonry", 3, "width", "images"], ["masonryGallery", ""]], template: function MesonryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "MASONRY GALLERY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ngx-masonry-gallery", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Masonry Gallery")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1))("active_item", "Masonry Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 250)("images", ctx.images);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, ngx_masonry_gallery__WEBPACK_IMPORTED_MODULE_2__.MasonryGalleryComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNvbnJ5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_components_apps_gallery_gallery_module_ts-es2015.js.map