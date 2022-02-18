(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-bank-detail-manage-bank-detail-module"],{

/***/ "4z/Z":
/*!***************************************************************!*\
  !*** ./src/app/manage-bank-detail/manage-bank-detail.page.ts ***!
  \***************************************************************/
/*! exports provided: ManageBankDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageBankDetailPage", function() { return ManageBankDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_manage_bank_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./manage-bank-detail.page.html */ "5BqA");
/* harmony import */ var _manage_bank_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-bank-detail.page.scss */ "CQ1g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ManageBankDetailPage = class ManageBankDetailPage {
    constructor() { }
    ngOnInit() {
    }
};
ManageBankDetailPage.ctorParameters = () => [];
ManageBankDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-manage-bank-detail',
        template: _raw_loader_manage_bank_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_manage_bank_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ManageBankDetailPage);



/***/ }),

/***/ "5BqA":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-bank-detail/manage-bank-detail.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content>\r\n\t<app-header [pageName]='\"aa\"' [pn]='\"detail\"' app=\"serviceProvider\"></app-header>\r\n<div class=\"bottm-conts\">\r\n\t\t<h4 class=\"ttl-tp\">Manage Bank Details </h4>\r\n\t\t</div>\r\n\t\t<div class=\"main-sd\">\r\n\t\t<ion-row>\r\n\t\t<ion-col size=\"12\">\r\n\t\t<div class=\"inner-bod\">\r\n\t\t<img src=\"assets/images/bankok.png\">\r\n\t\t<p class=\"main-tx\">Bank of America\r\n\t\t<span>A/c No. :123354657687</span>\r\n\t\t<span class=\"green\">Primary</span>\r\n\t\t</p>\r\n\t\t<p class=\"main-acc\">Remove A/c</p>\r\n\t\t</div>\r\n\t\t<div class=\"inner-bod inactv\">\r\n\t\t<img src=\"assets/images/pnb.png\">\r\n\t\t<p class=\"main-tx\">PNC Bank\r\n\t\t<span>A/c No. :123354657687</span>\r\n\t\t</p>\r\n\t\t<p class=\"main-acc\">Remove A/c</p>\r\n\t\t</div>\r\n\t\t</ion-col>\r\n\t\t\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n<ion-col size=\"12\">\r\n<div class=\"main-flx\">\r\n<img src=\"assets/images/add-sign.png\"> <span>Add New Bank Account</span>\r\n</div>\r\n\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "CQ1g":
/*!*****************************************************************!*\
  !*** ./src/app/manage-bank-detail/manage-bank-detail.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inner-bod {\n  background: #dfdfdf;\n  padding: 6px 10px;\n  border: 2px solid #8f8f8f;\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nspan {\n  display: block;\n}\n\n.main-tx {\n  font-size: 18px;\n  font-weight: 800;\n}\n\nspan {\n  font-size: 12px;\n  font-weight: 300;\n  margin-top: 5px;\n}\n\n.inner-bod img {\n  height: 66px;\n  object-fit: cover;\n  margin-right: 7px;\n}\n\n.green {\n  font-size: 12px;\n  font-weight: 500;\n  color: #32d421;\n  margin-top: 7px;\n}\n\n.main-sd {\n  padding: 19px;\n  padding-top: 0;\n}\n\n.main-acc {\n  font-size: 12px;\n  color: #434343;\n  font-weight: 300;\n  margin-top: 2px;\n}\n\n.inner-bod {\n  background: #dfdfdf;\n  padding: 6px 10px;\n  border: 2px solid #8f8f8f;\n  border-radius: 10px;\n  display: flex;\n  height: 90px;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n\n.main-flx span {\n  font-size: 14px !important;\n  display: inline-block;\n  margin-left: 9px;\n  font-weight: 400 !important;\n  color: #8f8f8f;\n  margin-top: 0;\n}\n\n.main-flx {\n  display: flex;\n  align-items: center;\n}\n\n.inner-bod.inactv {\n  border: transparent;\n}\n\n.inner-bod.inactv {\n  background: #ececec;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1hbmFnZS1iYW5rLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxtQkFBbUI7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDdkI7O0FBQ0E7RUFDSSxjQUFjO0FBRWxCOztBQUFBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtBQUdwQjs7QUFEQTtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtBQUluQjs7QUFGQTtFQUNPLFlBQVk7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0FBS3JCOztBQUhBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtBQU1uQjs7QUFKQTtFQUNJLGFBQWE7RUFDYixjQUFjO0FBT2xCOztBQU5DO0VBQ00sZUFBZTtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFTbkI7O0FBUEE7RUFDSSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUFDLFlBQVk7RUFDMUIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUFLLG1CQUFtQjtBQVkvQzs7QUFYQztFQUNPLDBCQUEwQjtFQUM5QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsYUFBYTtBQWNqQjs7QUFiQztFQUNHLGFBQWE7RUFDYixtQkFBbUI7QUFnQnZCOztBQWZDO0VBQ0csbUJBQW1CO0FBa0J2Qjs7QUFqQkM7RUFDRyxtQkFBbUI7QUFvQnZCIiwiZmlsZSI6Im1hbmFnZS1iYW5rLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXItYm9kIHtcclxuIGJhY2tncm91bmQ6ICNkZmRmZGY7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM4ZjhmOGY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ubWFpbi10eCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcbnNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uaW5uZXItYm9kIGltZyB7XHJcbiAgICAgICBoZWlnaHQ6IDY2cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG59XHJcbi5ncmVlbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMzMmQ0MjE7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbn1cclxuLm1haW4tc2Qge1xyXG4gICAgcGFkZGluZzogMTlweDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG59Lm1haW4tYWNjIHtcclxuICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNDM0MzQzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG4uaW5uZXItYm9kIHtcclxuICAgIGJhY2tncm91bmQ6ICNkZmRmZGY7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM4ZjhmOGY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtoZWlnaHQ6IDkwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59Lm1haW4tZmx4IHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjOGY4ZjhmO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufS5tYWluLWZseCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufS5pbm5lci1ib2QuaW5hY3R2IHtcclxuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbn0uaW5uZXItYm9kLmluYWN0diB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xyXG59Il19 */");

/***/ }),

/***/ "eJpq":
/*!*************************************************************************!*\
  !*** ./src/app/manage-bank-detail/manage-bank-detail-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ManageBankDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageBankDetailPageRoutingModule", function() { return ManageBankDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _manage_bank_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-bank-detail.page */ "4z/Z");




const routes = [
    {
        path: '',
        component: _manage_bank_detail_page__WEBPACK_IMPORTED_MODULE_3__["ManageBankDetailPage"]
    }
];
let ManageBankDetailPageRoutingModule = class ManageBankDetailPageRoutingModule {
};
ManageBankDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ManageBankDetailPageRoutingModule);



/***/ }),

/***/ "uOQY":
/*!*****************************************************************!*\
  !*** ./src/app/manage-bank-detail/manage-bank-detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: ManageBankDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageBankDetailPageModule", function() { return ManageBankDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _manage_bank_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-bank-detail-routing.module */ "eJpq");
/* harmony import */ var _manage_bank_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-bank-detail.page */ "4z/Z");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");








let ManageBankDetailPageModule = class ManageBankDetailPageModule {
};
ManageBankDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _manage_bank_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManageBankDetailPageRoutingModule"]
        ],
        declarations: [_manage_bank_detail_page__WEBPACK_IMPORTED_MODULE_6__["ManageBankDetailPage"]]
    })
], ManageBankDetailPageModule);



/***/ })

}]);
//# sourceMappingURL=manage-bank-detail-manage-bank-detail-module.js.map