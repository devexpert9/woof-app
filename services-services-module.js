(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-services-module"],{

/***/ "334H":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPageModule", function() { return ServicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services-routing.module */ "fD4K");
/* harmony import */ var _services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services.page */ "O7F2");







let ServicesPageModule = class ServicesPageModule {
};
ServicesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _services_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServicesPageRoutingModule"]
        ],
        declarations: [_services_page__WEBPACK_IMPORTED_MODULE_6__["ServicesPage"]]
    })
], ServicesPageModule);



/***/ }),

/***/ "EV+0":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>services</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n<div class=\"top-head\">\r\n\t\t<img src=\"assets/images/logo1.png\" class=\"img-logo\">\r\n\t</div>\r\n\t<div class=\"bottm-conts\">\r\n\t\t<h4 class=\"ttl-tp\"> SERVICES </h4>\r\n\t\t<ion-item lines=\"none\">\r\n  <ion-label position=\"stacked\">Title</ion-label>\r\n  <ion-input ></ion-input>\r\n</ion-item>\r\n<ion-item lines=\"none\">\r\n  <ion-label position=\"stacked\">Description</ion-label>\r\n  <ion-textarea clearOnEdit=\"true\"></ion-textarea>\r\n</ion-item>\r\n<ion-row>\r\n<ion-col size=\"6\">\r\n<ion-item lines=\"none\">\r\n  <ion-label position=\"stacked\">Hours</ion-label>\r\n  <ion-input type=\"number\"> <img class=\"arrow-ic\" src=\"assets/images/arw.png\"></ion-input>\r\n</ion-item>\r\n</ion-col><ion-col size=\"6\">\r\n<ion-item lines=\"none\">\r\n  <ion-label position=\"stacked\">Price</ion-label>\r\n  <ion-input Placeholder=\"$\"></ion-input>\r\n</ion-item>\r\n</ion-col>\r\n</ion-row>\r\n<ion-item lines=\"none\">\r\n  <ion-label position=\"stacked\">Upload images & videos</ion-label>\r\n  <ion-textarea clearOnEdit=\"true\">\r\n  <img class=\"up-ic\" src=\"assets/images/upload.png\">\r\n  </ion-textarea>\r\n</ion-item><div class=\"bt-trs\">\r\n\t\t\t\t<ion-button  shape=\"round\" class=\"btn-save\">Save</ion-button>\r\n\t\t\t\t<ion-button  shape=\"round\" fill=\"outline\" class=\"btn-cancl\">Cancel</ion-button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "O7F2":
/*!*******************************************!*\
  !*** ./src/app/services/services.page.ts ***!
  \*******************************************/
/*! exports provided: ServicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPage", function() { return ServicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_services_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./services.page.html */ "EV+0");
/* harmony import */ var _services_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services.page.scss */ "odIF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ServicesPage = class ServicesPage {
    constructor() { }
    ngOnInit() {
    }
};
ServicesPage.ctorParameters = () => [];
ServicesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-services',
        template: _raw_loader_services_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_services_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ServicesPage);



/***/ }),

/***/ "fD4K":
/*!*****************************************************!*\
  !*** ./src/app/services/services-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ServicesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPageRoutingModule", function() { return ServicesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services.page */ "O7F2");




const routes = [
    {
        path: '',
        component: _services_page__WEBPACK_IMPORTED_MODULE_3__["ServicesPage"]
    }
];
let ServicesPageRoutingModule = class ServicesPageRoutingModule {
};
ServicesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServicesPageRoutingModule);



/***/ }),

/***/ "odIF":
/*!*********************************************!*\
  !*** ./src/app/services/services.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item.item.md.ion-focusable.hydrated.item-label.item-label-stacked.item-interactive.item-input {\n  --border-width: 0 !important;\n}\n\nion-item {\n  overflow: visible;\n  margin-bottom: 12px;\n}\n\nion-input, ion-textarea {\n  box-shadow: 6px 3px 8px -3px #d2d2d2;\n  margin: 17px 0;\n  border-radius: 13px;\n  padding: 7px 0 !important;\n  margin-bottom: 0;\n}\n\nion-label {\n  font-size: 21px !important;\n  color: #000000;\n  font-weight: 700;\n}\n\n.up-ic {\n  position: absolute;\n  width: 7%;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  top: 40%;\n}\n\n.arrow-ic {\n  width: 9px;\n  position: absolute;\n  right: 12px;\n}\n\nion-input {\n  font-weight: bold;\n}\n\n.bt-trs {\n  display: block;\n  margin-top: -7px;\n}\n\n.bt-trs ion-button.btn-save {\n  background: #bfbfbf;\n  --background: #bfbfbf;\n  border-radius: 50px;\n  color: #fff;\n  --padding-start: 35px;\n  box-shadow: none;\n  --box-shadow: none;\n  --padding-end: 35px;\n  height: 38px;\n  text-transform: capitalize;\n  font-size: 17px;\n  margin-right: 7px;\n}\n\n.bt-trs ion-button.btn-cancl {\n  border-radius: 50px;\n  color: #8d8d8d;\n  --padding-start: 30px;\n  box-shadow: none;\n  --box-shadow: none;\n  --padding-end: 30px;\n  height: 38px;\n  text-transform: capitalize;\n  font-size: 17px;\n  border-color: #8d8d8d;\n  --border-color: #8d8d8d;\n}\n\n.bt-trs {\n  margin-top: 32px !important;\n  margin-bottom: 13px;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlcnZpY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFlO0FBQ25COztBQUFDO0VBQ0csaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUd2Qjs7QUFGQztFQUNTLG9DQUFvQztFQUMxQyxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFLcEI7O0FBRkE7RUFDSSwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGdCQUFnQjtBQUtwQjs7QUFIQTtFQUFXLGtCQUFrQjtFQUN6QixTQUFTO0VBQ1QsY0FBYztFQUNkLE9BQU87RUFDUCxRQUFRO0VBQ1IsUUFBUTtBQU9aOztBQVBjO0VBQ1YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0FBVWY7O0FBUkE7RUFBVSxpQkFBZ0I7QUFZMUI7O0FBWEE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBY2xCOztBQWhCQTtFQUlHLG1CQUFtQjtFQUNuQixxQkFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gscUJBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBYTtFQUNiLG1CQUFjO0VBQ2QsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsaUJBQWlCO0FBZ0JwQjs7QUEvQkE7RUFrQkcsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxxQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFhO0VBQ2IsbUJBQWM7RUFDZCxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsdUJBQWU7QUFpQmxCOztBQWRFO0VBQ0UsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUFLLGtCQUFrQjtBQWtCOUMiLCJmaWxlIjoic2VydmljZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0uaXRlbS5tZC5pb24tZm9jdXNhYmxlLmh5ZHJhdGVkLml0ZW0tbGFiZWwuaXRlbS1sYWJlbC1zdGFja2VkLml0ZW0taW50ZXJhY3RpdmUuaXRlbS1pbnB1dCB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xyXG59aW9uLWl0ZW0ge1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59aW9uLWlucHV0LCBpb24tdGV4dGFyZWEge1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogNnB4IDNweCA4cHggLTNweCAjZDJkMmQyO1xyXG4gICAgbWFyZ2luOiAxN3B4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgcGFkZGluZzogN3B4IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDIxcHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4udXAtaWN7ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA3JTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA0MCU7fS5hcnJvdy1pYyB7XHJcbiAgICB3aWR0aDogOXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEycHg7XHJcbn1cclxuaW9uLWlucHV0e2ZvbnQtd2VpZ2h0OmJvbGQ7fVxyXG4uYnQtdHJzIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0bWFyZ2luLXRvcDogLTdweDtcclxuXHRcdGlvbi1idXR0b24uYnRuLXNhdmV7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcblx0XHRcdC0tYmFja2dyb3VuZDogI2JmYmZiZjtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdC0tcGFkZGluZy1zdGFydDogMzVweDtcclxuXHRcdFx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHRcdFx0LS1ib3gtc2hhZG93OiBub25lO1xyXG5cdFx0XHQtLXBhZGRpbmctZW5kOiAzNXB4O1xyXG5cdFx0XHRoZWlnaHQ6IDM4cHg7XHJcblx0XHRcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cdFx0XHRmb250LXNpemU6IDE3cHg7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogN3B4O1xyXG5cdFx0fVxyXG5cdFx0aW9uLWJ1dHRvbi5idG4tY2FuY2wge1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdFx0XHRjb2xvcjogIzhkOGQ4ZDtcclxuXHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAzMHB4O1xyXG5cdFx0XHRib3gtc2hhZG93OiBub25lO1xyXG5cdFx0XHQtLWJveC1zaGFkb3c6IG5vbmU7XHJcblx0XHRcdC0tcGFkZGluZy1lbmQ6IDMwcHg7XHJcblx0XHRcdGhlaWdodDogMzhweDtcclxuXHRcdFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTdweDtcclxuXHRcdFx0Ym9yZGVyLWNvbG9yOiAjOGQ4ZDhkO1xyXG5cdFx0XHQtLWJvcmRlci1jb2xvcjogIzhkOGQ4ZDtcclxuXHRcdH1cclxuXHRcdH1cclxuXHRcdC5idC10cnMge1xyXG4gICAgbWFyZ2luLXRvcDogMzJweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDsgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=services-services-module.js.map