(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-provider-transaction-new-service-provider-transaction-module"],{

/***/ "4Mrz":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/service-provider-transaction-new/service-provider-transaction.page.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>adoptions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n\t<app-header [pageName]='\"aa\"' [pn]='\"detail\"' app=\"serviceProvider\"></app-header>\r\n\t<div class=\"bottm-conts\">\r\n\t\t<h4 class=\"ttl-tp\"> TRANSACTIONS </h4>\r\n\t\t<ion-list class=\"list-pstr\">\r\n\t\t\t<ion-item lines=\"none\" routerLink=\"/transaction-detail\" detail=\"false\">\r\n\t\t\t  <ion-avatar slot=\"start\">\r\n\t\t\t\t<img src=\"assets/images/beauti.png\">\r\n\t\t\t\t\t\t\t<img class=\"check\" src=\"assets/images/map-check.png\">\r\n\t\t\t  </ion-avatar>\r\n\t\t\t  <ion-label>\r\n\t\t\t\t<h2>Rozy <span class=\"pull-right\">Price : $8</span></h2>\r\n\t\t\t\t<h3>#123354657687</h3>\r\n\t\t\t\t<h3>Wed, 4 May 2021</h3>\r\n\t\t\t\t<h3 class=\"mb-0\">via paypal</h3>\r\n\t\t\t  </ion-label>\r\n\t\t\t</ion-item>\r\n\t\t\t\t<ion-item lines=\"none\" routerLink=\"/transaction-detail\" detail=\"false\">\r\n\t\t\t  <ion-avatar slot=\"start\">\r\n\t\t\t\t<img src=\"assets/images/beauti.png\">\r\n\t\t\t\t\t\t\t<img class=\"check\" src=\"assets/images/map-check.png\">\r\n\t\t\t  </ion-avatar>\r\n\t\t\t  <ion-label>\r\n\t\t\t\t<h2>Rozy <span class=\"pull-right\">Price : $8</span></h2>\r\n\t\t\t\t<h3>#123354657687</h3>\r\n\t\t\t\t<h3>Wed, 4 May 2021</h3>\r\n\t\t\t\t<h3 class=\"mb-0\">via MBWay</h3>\r\n\t\t\t  </ion-label>\r\n\t\t\t</ion-item>\r\n\t\t\t\t<ion-item lines=\"none\" routerLink=\"/transaction-detail\" detail=\"false\">\r\n\t\t\t  <ion-avatar slot=\"start\">\r\n\t\t\t\t<img src=\"assets/images/beauti.png\">\r\n\t\t\t\t\t\t\t<img class=\"check\" src=\"assets/images/map-check.png\">\r\n\t\t\t  </ion-avatar>\r\n\t\t\t  <ion-label>\r\n\t\t\t\t<h2>Rozy <span class=\"pull-right\">Price : $8</span></h2>\r\n\t\t\t\t<h3>#123354657687</h3>\r\n\t\t\t\t<h3>Wed, 4 May 2021</h3>\r\n\t\t\t\t<h3 class=\"mb-0\">via paypal</h3>\r\n\t\t\t  </ion-label>\r\n\t\t\t</ion-item>\r\n\t\t</ion-list>\r\n\t</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "4Rc3":
/*!***************************************************************************************!*\
  !*** ./src/app/service-provider-transaction-new/service-provider-transaction.page.ts ***!
  \***************************************************************************************/
/*! exports provided: ServiceProviderTransactionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderTransactionPage", function() { return ServiceProviderTransactionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_service_provider_transaction_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./service-provider-transaction.page.html */ "4Mrz");
/* harmony import */ var _service_provider_transaction_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-provider-transaction.page.scss */ "JN6Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ServiceProviderTransactionPage = class ServiceProviderTransactionPage {
    constructor() { }
    ngOnInit() {
    }
};
ServiceProviderTransactionPage.ctorParameters = () => [];
ServiceProviderTransactionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-service-provider-transaction',
        template: _raw_loader_service_provider_transaction_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_service_provider_transaction_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ServiceProviderTransactionPage);



/***/ }),

/***/ "JN6Z":
/*!*****************************************************************************************!*\
  !*** ./src/app/service-provider-transaction-new/service-provider-transaction.page.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .bottm-conts {\n  padding: 0px;\n}\n\nion-content .pull-right {\n  float: right;\n}\n\nion-content .item-inner {\n  padding-right: 0;\n}\n\nion-content h4.ttl-tp {\n  margin-right: 25px;\n}\n\nion-content .check {\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  bottom: 0;\n  right: 0;\n}\n\nion-content ion-list.list-pstr {\n  display: block;\n  margin-top: 20px;\n  overflow: visible;\n  --overflow: visible;\n  padding: 20px 15px;\n}\n\nion-content ion-list.list-pstr ion-item {\n  border-radius: 18px;\n  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.19);\n  margin-bottom: 13px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  padding: 12px;\n}\n\nion-content ion-list.list-pstr ion-item ion-avatar {\n  width: 62px;\n  height: 62px;\n  margin-right: 12px;\n  position: relative;\n}\n\nion-content ion-list.list-pstr ion-item h2 {\n  font-size: 17px;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.87);\n  margin-bottom: 5px;\n}\n\nion-content ion-list.list-pstr ion-item h2 img {\n  height: 19px;\n  vertical-align: bottom;\n  margin-right: 5px;\n}\n\nion-content ion-list.list-pstr ion-item h3 {\n  font-size: 14px;\n  font-weight: 600;\n  color: #7d7d7d;\n  margin-bottom: 0px;\n}\n\nion-content ion-list.list-pstr ion-item h3 img {\n  height: 16px;\n  vertical-align: bottom;\n  margin-right: 5px;\n}\n\nion-content ion-list.list-pstr ion-item ion-label {\n  margin: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlcnZpY2UtcHJvdmlkZXItdHJhbnNhY3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsWUFBWTtBQUFkOztBQUZBO0VBSUksWUFBWTtBQUVoQjs7QUFOQTtFQU1JLGdCQUFnQjtBQUlwQjs7QUFWQTtFQVNFLGtCQUFrQjtBQUtwQjs7QUFkQTtFQVdJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxRQUFRO0FBT1o7O0FBdEJBO0VBa0JFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFXO0VBQ1gsa0JBQWtCO0FBUXBCOztBQTlCQTtFQXdCRyxtQkFBbUI7RUFDbkIsNENBQTRDO0VBQzVDLG1CQUFtQjtFQUNuQixvQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCxhQUFhO0FBVWhCOztBQXZDQTtFQStCSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUFDLGtCQUFrQjtBQWF6Qzs7QUE5Q0E7RUFvQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBY3RCOztBQXJEQTtFQXlDSyxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQWdCdEI7O0FBM0RBO0VBK0NJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtBQWdCdEI7O0FBbEVBO0VBb0RLLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBa0J0Qjs7QUF4RUE7RUEwREksV0FBVztBQWtCZiIsImZpbGUiOiJzZXJ2aWNlLXByb3ZpZGVyLXRyYW5zYWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuXHQuYm90dG0tY29udHMge1xyXG5cdFx0cGFkZGluZzogMHB4O1xyXG5cdH0ucHVsbC1yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0uaXRlbS1pbm5lciB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcblx0aDQudHRsLXRwIHtcclxuXHRcdG1hcmdpbi1yaWdodDogMjVweDtcclxuXHR9LmNoZWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHRpb24tbGlzdC5saXN0LXBzdHIge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdFx0b3ZlcmZsb3c6IHZpc2libGU7XHJcblx0XHQtLW92ZXJmbG93OiB2aXNpYmxlO1xyXG5cdFx0cGFkZGluZzogMjBweCAxNXB4O1xyXG5cdFx0aW9uLWl0ZW0ge1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxOHB4O1xyXG5cdFx0XHRib3gtc2hhZG93OiAtNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTNweDtcclxuXHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcblx0XHRcdC0tcGFkZGluZy1lbmQ6IDBweDtcclxuXHRcdFx0cGFkZGluZzogMTJweDtcclxuXHRcdFx0aW9uLWF2YXRhciB7XHJcblx0XHRcdFx0d2lkdGg6IDYycHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA2MnB4O1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMTJweDtwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdH1cclxuXHRcdFx0aDIge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTdweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRcdGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDVweDtcclxuXHRcdFx0XHRpbWcge1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAxOXB4O1xyXG5cdFx0XHRcdFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogNXB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRoMyB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0Y29sb3I6ICM3ZDdkN2Q7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMHB4O1xyXG5cdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDE2cHg7XHJcblx0XHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlvbi1sYWJlbCB7XHJcblx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0iXX0= */");

/***/ }),

/***/ "gS8y":
/*!*************************************************************************************************!*\
  !*** ./src/app/service-provider-transaction-new/service-provider-transaction-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: ServiceProviderTransactionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderTransactionPageRoutingModule", function() { return ServiceProviderTransactionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_provider_transaction_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-provider-transaction.page */ "4Rc3");




const routes = [
    {
        path: '',
        component: _service_provider_transaction_page__WEBPACK_IMPORTED_MODULE_3__["ServiceProviderTransactionPage"]
    }
];
let ServiceProviderTransactionPageRoutingModule = class ServiceProviderTransactionPageRoutingModule {
};
ServiceProviderTransactionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServiceProviderTransactionPageRoutingModule);



/***/ }),

/***/ "j9NX":
/*!*****************************************************************************************!*\
  !*** ./src/app/service-provider-transaction-new/service-provider-transaction.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ServiceProviderTransactionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderTransactionPageModule", function() { return ServiceProviderTransactionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_provider_transaction_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-provider-transaction-routing.module */ "gS8y");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");
/* harmony import */ var _service_provider_transaction_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service-provider-transaction.page */ "4Rc3");








let ServiceProviderTransactionPageModule = class ServiceProviderTransactionPageModule {
};
ServiceProviderTransactionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _service_provider_transaction_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServiceProviderTransactionPageRoutingModule"]
        ],
        declarations: [_service_provider_transaction_page__WEBPACK_IMPORTED_MODULE_7__["ServiceProviderTransactionPage"]]
    })
], ServiceProviderTransactionPageModule);



/***/ })

}]);
//# sourceMappingURL=service-provider-transaction-new-service-provider-transaction-module.js.map