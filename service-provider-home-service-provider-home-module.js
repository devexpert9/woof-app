(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-provider-home-service-provider-home-module"],{

/***/ "0MCa":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/service-provider-home/service-provider-home.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>service-provider-home</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n  <!-- <ion-menu-button class=\"menu-icn\"\r\n    ><span> <img src=\"assets/images/menu.png\" /> </span>\r\n  </ion-menu-button> -->\r\n  <div class=\"padding-all home-bg\">\r\n    <img class=\"main-img\" src=\"assets/images/main-l.png\" />\r\n    <p class=\"join-text\">J<span>O</span>in us as</p>\r\n    <ion-row>\r\n      <ion-col size=\"6\" routerLink=\"/signup\">\r\n        <div class=\"green-box\">\r\n          <img class=\"green-img\" src=\"assets/images/first-im.png\" />\r\n          <p class=\"green-text\">Pet Owner</p>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" routerLink=\"/service-provider-signup\">\r\n        <div class=\"gray-box\">\r\n          <img class=\"gray-img\" src=\"assets/images/sec-img.png\" />\r\n          <p class=\"gray-text\">Service Provider</p>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <p class=\"already-text\">\r\n      Already a user? <span> <a routerLink=\"/login\">Login</a></span>\r\n    </p>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "2pt1":
/*!***********************************************************************!*\
  !*** ./src/app/service-provider-home/service-provider-home.module.ts ***!
  \***********************************************************************/
/*! exports provided: ServiceProviderHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderHomePageModule", function() { return ServiceProviderHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_provider_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-provider-home-routing.module */ "cayT");
/* harmony import */ var _service_provider_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service-provider-home.page */ "y6BV");







let ServiceProviderHomePageModule = class ServiceProviderHomePageModule {
};
ServiceProviderHomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _service_provider_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServiceProviderHomePageRoutingModule"]
        ],
        declarations: [_service_provider_home_page__WEBPACK_IMPORTED_MODULE_6__["ServiceProviderHomePage"]]
    })
], ServiceProviderHomePageModule);



/***/ }),

/***/ "cayT":
/*!*******************************************************************************!*\
  !*** ./src/app/service-provider-home/service-provider-home-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ServiceProviderHomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderHomePageRoutingModule", function() { return ServiceProviderHomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_provider_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-provider-home.page */ "y6BV");




const routes = [
    {
        path: '',
        component: _service_provider_home_page__WEBPACK_IMPORTED_MODULE_3__["ServiceProviderHomePage"]
    }
];
let ServiceProviderHomePageRoutingModule = class ServiceProviderHomePageRoutingModule {
};
ServiceProviderHomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServiceProviderHomePageRoutingModule);



/***/ }),

/***/ "ea17":
/*!***********************************************************************!*\
  !*** ./src/app/service-provider-home/service-provider-home.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-img {\n  margin: 0 auto;\n  display: block;\n}\n\n.home-bg {\n  min-height: 100%;\n  position: relative;\n  background: url('home-bg.png');\n  background-size: cover;\n  background-position: center;\n}\n\n.join-text {\n  text-align: center;\n  font-size: 19px;\n  color: #5c5c5c;\n}\n\n.join-text span {\n  color: #f79025;\n}\n\n.green-img, .gray-img {\n  position: absolute;\n  top: -50px;\n  margin: 0 auto;\n  left: -9px;\n  right: 0;\n}\n\n.green-box {\n  position: relative;\n  width: 100%;\n  height: 82px;\n  border-radius: 10px;\n  background: #86df77;\n  box-shadow: 6px 7px 20px rgba(0, 0, 0, 0.22);\n}\n\n.gray-box {\n  position: relative;\n  box-shadow: 6px 7px 20px rgba(0, 0, 0, 0.22);\n  width: 100%;\n  height: 82px;\n  border-radius: 10px;\n  background: #bfbfbf;\n}\n\n.green-text, .gray-text {\n  text-align: center;\n  padding-top: 43px;\n  color: #ffffff;\n  font-size: 17px;\n}\n\n.padding-all {\n  padding: 15px;\n  padding-top: 0;\n}\n\n.already-text {\n  text-align: center;\n  padding-top: 72px;\n  font-size: 17px;\n  color: #4e4e4e;\n}\n\n.already-text a {\n  color: #f79025;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlcnZpY2UtcHJvdmlkZXItaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsY0FBYztBQUNsQjs7QUFDQTtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsOEJBQWdEO0VBQ2hELHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFFL0I7O0FBQUE7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7QUFHbEI7O0FBREE7RUFDSSxjQUFjO0FBSWxCOztBQUZBO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0VBQ2QsVUFBVTtFQUNWLFFBQVE7QUFLWjs7QUFIQTtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFBQyw0Q0FBNEM7QUFPcEU7O0FBTEE7RUFDSSxrQkFBa0I7RUFBQyw0Q0FBNEM7RUFDL0QsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBU3ZCOztBQVBBO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtBQVVuQjs7QUFSQTtFQUNJLGFBQWE7RUFBQyxjQUFjO0FBWWhDOztBQVhDO0VBQ0csa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYztBQWNsQjs7QUFiQztFQUNHLGNBQWM7QUFnQmxCIiwiZmlsZSI6InNlcnZpY2UtcHJvdmlkZXItaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1pbWcge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uaG9tZS1iZyB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS1iZy5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG4uam9pbi10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGNvbG9yOiAjNWM1YzVjO1xyXG59XHJcbi5qb2luLXRleHQgc3BhbiB7XHJcbiAgICBjb2xvcjogI2Y3OTAyNTtcclxufVxyXG4uZ3JlZW4taW1nLCAuZ3JheS1pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbGVmdDogLTlweDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcbi5ncmVlbi1ib3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzg2ZGY3Nztib3gtc2hhZG93OiA2cHggN3B4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxufVxyXG4uZ3JheS1ib3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO2JveC1zaGFkb3c6IDZweCA3cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2JmYmZiZjtcclxufVxyXG4uZ3JlZW4tdGV4dCwgLmdyYXktdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNDNweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcbi5wYWRkaW5nLWFsbCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O3BhZGRpbmctdG9wOiAwO1xyXG59LmFscmVhZHktdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNzJweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjNGU0ZTRlO1xyXG59LmFscmVhZHktdGV4dCBhIHtcclxuICAgIGNvbG9yOiAjZjc5MDI1O1xyXG59Il19 */");

/***/ }),

/***/ "y6BV":
/*!*********************************************************************!*\
  !*** ./src/app/service-provider-home/service-provider-home.page.ts ***!
  \*********************************************************************/
/*! exports provided: ServiceProviderHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderHomePage", function() { return ServiceProviderHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_service_provider_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./service-provider-home.page.html */ "0MCa");
/* harmony import */ var _service_provider_home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-provider-home.page.scss */ "ea17");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ServiceProviderHomePage = class ServiceProviderHomePage {
    constructor(menuCtrl) {
        this.menuCtrl = menuCtrl;
    }
    ngOnInit() {
        this.menuCtrl.enable(false);
    }
};
ServiceProviderHomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
ServiceProviderHomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-service-provider-home',
        template: _raw_loader_service_provider_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_service_provider_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ServiceProviderHomePage);



/***/ })

}]);
//# sourceMappingURL=service-provider-home-service-provider-home-module.js.map