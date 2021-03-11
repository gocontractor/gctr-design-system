(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sections-modal-modal-module"],{

/***/ "./src/app/sections/modal/constants.ts":
/*!*********************************************!*\
  !*** ./src/app/sections/modal/constants.ts ***!
  \*********************************************/
/*! exports provided: CONTAINER_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTAINER_DATA", function() { return CONTAINER_DATA; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const CONTAINER_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CONTAINER_DATA');


/***/ }),

/***/ "./src/app/sections/modal/example-modal/example-modal.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/sections/modal/example-modal/example-modal.component.ts ***!
  \*************************************************************************/
/*! exports provided: ExampleModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleModalComponent", function() { return ExampleModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/app/sections/modal/constants.ts");
/* harmony import */ var _projects_gctr_design_system_src_lib_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../projects/gctr-design-system/src/lib/modal/modal.component */ "./projects/gctr-design-system/src/lib/modal/modal.component.ts");




class ExampleModalComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
    closeModal() {
        this.data.closeModal();
    }
}
ExampleModalComponent.ɵfac = function ExampleModalComponent_Factory(t) { return new (t || ExampleModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_constants__WEBPACK_IMPORTED_MODULE_1__["CONTAINER_DATA"])); };
ExampleModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleModalComponent, selectors: [["app-example-modal"]], decls: 2, vars: 0, consts: [["overlay", "true", 3, "close"]], template: function ExampleModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "gctr-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function ExampleModalComponent_Template_gctr_modal_close_0_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hello World");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_projects_gctr_design_system_src_lib_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL21vZGFsL2V4YW1wbGUtbW9kYWwvZXhhbXBsZS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-example-modal',
                templateUrl: './example-modal.component.html',
                styleUrls: ['./example-modal.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_constants__WEBPACK_IMPORTED_MODULE_1__["CONTAINER_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/sections/modal/modal-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/sections/modal/modal-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ModalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalRoutingModule", function() { return ModalRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.component */ "./src/app/sections/modal/modal.component.ts");





const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalDocumentationComponent"]
            }
        ]
    }
];
class ModalRoutingModule {
}
ModalRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ModalRoutingModule });
ModalRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ModalRoutingModule_Factory(t) { return new (t || ModalRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModalRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/sections/modal/modal.component.ts":
/*!***************************************************!*\
  !*** ./src/app/sections/modal/modal.component.ts ***!
  \***************************************************/
/*! exports provided: ModalDocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDocumentationComponent", function() { return ModalDocumentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _example_modal_example_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example-modal/example-modal.component */ "./src/app/sections/modal/example-modal/example-modal.component.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/app/sections/modal/constants.ts");
/* harmony import */ var _shared_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/documentation/documentation.component */ "./src/app/shared/documentation/documentation.component.ts");
/* harmony import */ var _projects_gctr_design_system_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../projects/gctr-design-system/src/lib/button/button.component */ "./projects/gctr-design-system/src/lib/button/button.component.ts");









class ModalDocumentationComponent {
    constructor(_overlay, _injector) {
        this._overlay = _overlay;
        this._injector = _injector;
        this.componentName = 'ModalComponent';
        this.module = 'GctrModalModule';
    }
    ngOnInit() {
    }
    handleButtonClick() {
        const overlayRef = this._overlay.create();
        this.injectionData = {
            closeModal: () => overlayRef.detach()
        };
        const userProfilePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](_example_modal_example_modal_component__WEBPACK_IMPORTED_MODULE_3__["ExampleModalComponent"], null, this.createInjector(this.injectionData));
        overlayRef.attach(userProfilePortal);
    }
    createInjector(dataToPass) {
        const injectorTokens = new WeakMap();
        injectorTokens.set(_constants__WEBPACK_IMPORTED_MODULE_4__["CONTAINER_DATA"], dataToPass);
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalInjector"](this._injector, injectorTokens);
    }
}
ModalDocumentationComponent.ɵfac = function ModalDocumentationComponent_Factory(t) { return new (t || ModalDocumentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
ModalDocumentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalDocumentationComponent, selectors: [["app-modal"]], decls: 2, vars: 4, consts: [[3, "componentName", "module", "codeTitle"], ["design", "stroke", "color", "primary", "label", "Show Example Modal", "tooltip", "Show example", 3, "disabled", "callback"]], template: function ModalDocumentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-documentation", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "gctr-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("callback", function ModalDocumentationComponent_Template_gctr_button_callback_1_listener() { return ctx.handleButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("componentName", ctx.componentName)("module", ctx.module)("codeTitle", "modal/modal.html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", false);
    } }, directives: [_shared_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_5__["DocumentationComponent"], _projects_gctr_design_system_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalDocumentationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.scss']
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sections/modal/modal.module.ts":
/*!************************************************!*\
  !*** ./src/app/sections/modal/modal.module.ts ***!
  \************************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _modal_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-routing.module */ "./src/app/sections/modal/modal-routing.module.ts");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.component */ "./src/app/sections/modal/modal.component.ts");
/* harmony import */ var projects_gctr_design_system_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/gctr-design-system/src/public_api */ "./projects/gctr-design-system/src/public_api.ts");
/* harmony import */ var src_app_shared_shared_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.modules */ "./src/app/shared/shared.modules.ts");
/* harmony import */ var _example_modal_example_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./example-modal/example-modal.component */ "./src/app/sections/modal/example-modal/example-modal.component.ts");









class ModalModule {
}
ModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ModalModule });
ModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ModalModule_Factory(t) { return new (t || ModalModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_shared_modules__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
            _modal_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModalRoutingModule"],
            projects_gctr_design_system_src_public_api__WEBPACK_IMPORTED_MODULE_5__["GctrModalModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModalModule, { declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalDocumentationComponent"], _example_modal_example_modal_component__WEBPACK_IMPORTED_MODULE_7__["ExampleModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_shared_shared_modules__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
        _modal_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModalRoutingModule"],
        projects_gctr_design_system_src_public_api__WEBPACK_IMPORTED_MODULE_5__["GctrModalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalDocumentationComponent"], _example_modal_example_modal_component__WEBPACK_IMPORTED_MODULE_7__["ExampleModalComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_shared_modules__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
                    _modal_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModalRoutingModule"],
                    projects_gctr_design_system_src_public_api__WEBPACK_IMPORTED_MODULE_5__["GctrModalModule"]
                ],
                entryComponents: [_example_modal_example_modal_component__WEBPACK_IMPORTED_MODULE_7__["ExampleModalComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=sections-modal-modal-module.js.map