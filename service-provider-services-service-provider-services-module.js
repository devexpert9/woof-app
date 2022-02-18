(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-provider-services-service-provider-services-module"],{

/***/ "4ZSL":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/service-provider-services/service-provider-services.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>adoptions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n\t<div class=\"top-head\">\r\n\t\t<img src=\"assets/images/logo1.png\" class=\"img-logo\">\r\n\t</div>\r\n\t<div class=\"bottm-conts\">\r\n\t\t<h4 class=\"ttl-tp\"> Services </h4>\r\n\t\t<div class=\"cont-calef\">\r\n\t\t\r\n\t\t\t<ion-list class=\"disply-mnes\">\r\n\t\t\t\t\r\n\t\t\t\t<ion-item lines=\"none\" detail=\"false\" class=\"unread\" routerLink=\"\">\r\n\t\t\t\t\t<ion-avatar slot=\"start\">\r\n\t\t\t\t\t\t<img src=\"assets/images/s-1.png\">\r\n\t\t\t\t\t</ion-avatar>\r\n\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t<h2>Pet Trainer Services </h2>\r\n\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t<span class=\"icon-arr\" slot=\"end\"> <ion-icon name=\"chevron-forward-outline\"></ion-icon> </span>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t<ion-item lines=\"none\" detail=\"false\" class=\"unread\" routerLink=\"\">\r\n\t\t\t\t\t<ion-avatar slot=\"start\">\r\n\t\t\t\t\t\t<img src=\"assets/images/s-1.png\">\r\n\t\t\t\t\t</ion-avatar>\r\n\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t<h2>Pet Walker Services </h2>\r\n\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t<span class=\"icon-arr\" slot=\"end\"> <ion-icon name=\"chevron-forward-outline\"></ion-icon> </span>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t</ion-list> \r\n\t\t</div>\r\n\t</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "cBNn":
/*!***************************************************************************************!*\
  !*** ./src/app/service-provider-services/service-provider-services-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ServiceProviderServicesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderServicesPageRoutingModule", function() { return ServiceProviderServicesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_provider_services_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-provider-services.page */ "tzKE");




const routes = [
    {
        path: '',
        component: _service_provider_services_page__WEBPACK_IMPORTED_MODULE_3__["ServiceProviderServicesPage"]
    }
];
let ServiceProviderServicesPageRoutingModule = class ServiceProviderServicesPageRoutingModule {
};
ServiceProviderServicesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServiceProviderServicesPageRoutingModule);



/***/ }),

/***/ "kEzn":
/*!*******************************************************************************!*\
  !*** ./src/app/service-provider-services/service-provider-services.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .bottm-conts {\n  padding: 0px;\n}\n\nion-content h4.ttl-tp {\n  margin-right: 25px;\n}\n\nion-content .cont-calef {\n  padding: 5px 0px;\n  margin-top: 20px;\n  display: block;\n}\n\nion-content .cont-calef .top-icons {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0px 20px 10px;\n}\n\nion-content .cont-calef .top-icons .icon-fts {\n  width: 35px;\n  height: 35px;\n  background: #bfbfbf;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  margin-right: 7px;\n  font-size: 19px;\n}\n\nion-content .cont-calef .top-icons .icon-secr {\n  width: 35px;\n  height: 35px;\n  background: #bfbfbf;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 19px;\n}\n\nion-content .cont-calef ion-list.disply-mnes {\n  padding: 10px 20px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item {\n  background: #fff;\n  box-shadow: 5px 8px 22px rgba(103, 103, 103, 0.18);\n  margin-bottom: 12px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  padding: 10px 5px 10px 15px;\n  border-radius: 5px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item ion-avatar {\n  margin: 0px;\n  margin-right: 15px;\n  width: 45px;\n  height: 45px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item ion-avatar .grupsf {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item ion-avatar .grupsf img {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin: 1px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item ion-label {\n  margin: 0px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item ion-label h2 {\n  font-size: 15px;\n  color: #000;\n  font-weight: 500;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item ion-label p {\n  font-size: 14px;\n  color: #545454;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item span.icon-arr {\n  margin: 0px;\n  width: 26px;\n  height: 26px;\n  background: #bfbfbf;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item span.nembrs {\n  width: 15px;\n  height: 15px;\n  background: #919191;\n  display: inline-block;\n  font-size: 10px;\n  vertical-align: text-bottom;\n  margin-left: 2px;\n  text-align: center;\n  line-height: 15px;\n  border-radius: 50%;\n  color: #fff;\n  position: relative;\n  top: -2px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item.unread ion-label h2 {\n  font-weight: 700;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item.unread ion-label p {\n  font-weight: 600;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlcnZpY2UtcHJvdmlkZXItc2VydmljZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsWUFBWTtBQUFkOztBQUZBO0VBS0Usa0JBQWtCO0FBQ3BCOztBQU5BO0VBUUUsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFhO0FBRWY7O0FBWkE7RUFZRyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFJekI7O0FBbkJBO0VBaUJJLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7QUFNbkI7O0FBaENBO0VBNkJJLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQU9uQjs7QUE1Q0E7RUF5Q0csa0JBQWtCO0FBT3JCOztBQWhEQTtFQTJDSSxnQkFBZ0I7RUFDaEIsa0RBQWtEO0VBQ2xELG1CQUFtQjtFQUNuQixvQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBU3RCOztBQTFEQTtFQW1ESyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBV2pCOztBQWpFQTtFQXdETSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixlQUFlO0FBYXJCOztBQXhFQTtFQTZETyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztBQWVsQjs7QUFoRkE7RUFzRUssV0FBVztBQWNoQjs7QUFwRkE7RUF3RU0sZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7QUFnQnRCOztBQTFGQTtFQTZFTSxlQUFlO0VBQ2YsY0FBYztBQWlCcEI7O0FBL0ZBO0VBa0ZLLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztBQWlCaEI7O0FBM0dBO0VBNkZLLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7QUFrQmQ7O0FBM0hBO0VBK0dNLGdCQUFnQjtBQWdCdEI7O0FBL0hBO0VBa0hNLGdCQUFnQjtBQWlCdEIiLCJmaWxlIjoic2VydmljZS1wcm92aWRlci1zZXJ2aWNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcblx0LmJvdHRtLWNvbnRzIHtcclxuXHRcdHBhZGRpbmc6IDBweDtcclxuXHR9XHJcblx0aDQudHRsLXRwIHtcclxuXHRcdG1hcmdpbi1yaWdodDogMjVweDtcclxuXHR9XHJcblx0LmNvbnQtY2FsZWYge1xyXG5cdFx0cGFkZGluZzogNXB4IDBweDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0LnRvcC1pY29ucyB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0XHRcdHBhZGRpbmc6IDBweCAyMHB4IDEwcHg7XHJcblx0XHRcdC5pY29uLWZ0cyB7XHJcblx0XHRcdFx0d2lkdGg6IDM1cHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAzNXB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDdweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDE5cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0Lmljb24tc2VjciB7XHJcblx0XHRcdFx0d2lkdGg6IDM1cHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAzNXB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHRmb250LXNpemU6IDE5cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlvbi1saXN0LmRpc3BseS1tbmVzIHtcclxuXHRcdFx0cGFkZGluZzogMTBweCAyMHB4O1xyXG5cdFx0XHRpb24taXRlbSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdFx0XHRib3gtc2hhZG93OiA1cHggOHB4IDIycHggcmdiYSgxMDMsIDEwMywgMTAzLCAwLjE4KTtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG5cdFx0XHRcdC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG5cdFx0XHRcdC0tcGFkZGluZy1lbmQ6IDBweDtcclxuXHRcdFx0XHRwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDE1cHg7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0XHRcdGlvbi1hdmF0YXIgIHtcclxuXHRcdFx0XHRcdG1hcmdpbjogMHB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG5cdFx0XHRcdFx0d2lkdGg6IDQ1cHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDQ1cHg7XHJcblx0XHRcdFx0XHQuZ3J1cHNmIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDIwcHg7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3ZlcjtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDFweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpb24tbGFiZWwge1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0XHRoMiB7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICMwMDA7XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRwIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogIzU0NTQ1NDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c3Bhbi5pY29uLWFyciB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0XHRcdHdpZHRoOiAyNnB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAyNnB4O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2JmYmZiZjtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c3Bhbi5uZW1icnMge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDE1cHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDE1cHg7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjOTE5MTkxO1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdFx0XHRcdFx0dmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDJweDtcclxuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHR0b3A6IC0ycHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlvbi1pdGVtLnVucmVhZCB7XHJcblx0XHRcdFx0aW9uLWxhYmVsIHtcclxuXHRcdFx0XHRcdGgyIHtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHAge1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSJdfQ== */");

/***/ }),

/***/ "tzKE":
/*!*****************************************************************************!*\
  !*** ./src/app/service-provider-services/service-provider-services.page.ts ***!
  \*****************************************************************************/
/*! exports provided: ServiceProviderServicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderServicesPage", function() { return ServiceProviderServicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_service_provider_services_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./service-provider-services.page.html */ "4ZSL");
/* harmony import */ var _service_provider_services_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-provider-services.page.scss */ "kEzn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ServiceProviderServicesPage = class ServiceProviderServicesPage {
    constructor() { }
    ngOnInit() {
    }
};
ServiceProviderServicesPage.ctorParameters = () => [];
ServiceProviderServicesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-service-provider-services',
        template: _raw_loader_service_provider_services_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_service_provider_services_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ServiceProviderServicesPage);



/***/ }),

/***/ "xNwD":
/*!*******************************************************************************!*\
  !*** ./src/app/service-provider-services/service-provider-services.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ServiceProviderServicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderServicesPageModule", function() { return ServiceProviderServicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_provider_services_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-provider-services-routing.module */ "cBNn");
/* harmony import */ var _service_provider_services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service-provider-services.page */ "tzKE");







let ServiceProviderServicesPageModule = class ServiceProviderServicesPageModule {
};
ServiceProviderServicesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _service_provider_services_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServiceProviderServicesPageRoutingModule"]
        ],
        declarations: [_service_provider_services_page__WEBPACK_IMPORTED_MODULE_6__["ServiceProviderServicesPage"]]
    })
], ServiceProviderServicesPageModule);



/***/ })

}]);
//# sourceMappingURL=service-provider-services-service-provider-services-module.js.map