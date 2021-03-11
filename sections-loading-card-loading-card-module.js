(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sections-loading-card-loading-card-module"],{

/***/ "./src/app/sections/loading-card/loading-card-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/sections/loading-card/loading-card-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: LoadingCardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingCardRoutingModule", function() { return LoadingCardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _loading_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading-card.component */ "./src/app/sections/loading-card/loading-card.component.ts");





const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _loading_card_component__WEBPACK_IMPORTED_MODULE_2__["LoadingCardDocumentationComponent"]
            }
        ]
    }
];
class LoadingCardRoutingModule {
}
LoadingCardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoadingCardRoutingModule });
LoadingCardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoadingCardRoutingModule_Factory(t) { return new (t || LoadingCardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoadingCardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingCardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/sections/loading-card/loading-card.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/sections/loading-card/loading-card.module.ts ***!
  \**************************************************************/
/*! exports provided: LoadingCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingCardModule", function() { return LoadingCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _loading_card_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading-card-routing.module */ "./src/app/sections/loading-card/loading-card-routing.module.ts");
/* harmony import */ var src_app_shared_shared_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.modules */ "./src/app/shared/shared.modules.ts");
/* harmony import */ var _loading_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading-card.component */ "./src/app/sections/loading-card/loading-card.component.ts");
/* harmony import */ var projects_gctr_design_system_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/gctr-design-system/src/public_api */ "./projects/gctr-design-system/src/public_api.ts");







class LoadingCardModule {
}
LoadingCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoadingCardModule });
LoadingCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoadingCardModule_Factory(t) { return new (t || LoadingCardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            projects_gctr_design_system_src_public_api__WEBPACK_IMPORTED_MODULE_5__["GctrLoadingCardModule"],
            _loading_card_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoadingCardRoutingModule"],
            src_app_shared_shared_modules__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoadingCardModule, { declarations: [_loading_card_component__WEBPACK_IMPORTED_MODULE_4__["LoadingCardDocumentationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        projects_gctr_design_system_src_public_api__WEBPACK_IMPORTED_MODULE_5__["GctrLoadingCardModule"],
        _loading_card_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoadingCardRoutingModule"],
        src_app_shared_shared_modules__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_loading_card_component__WEBPACK_IMPORTED_MODULE_4__["LoadingCardDocumentationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    projects_gctr_design_system_src_public_api__WEBPACK_IMPORTED_MODULE_5__["GctrLoadingCardModule"],
                    _loading_card_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoadingCardRoutingModule"],
                    src_app_shared_shared_modules__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=sections-loading-card-loading-card-module.js.map