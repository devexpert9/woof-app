(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["provider-home-provider-home-module"],{

/***/ "03Da":
/*!*****************************************************!*\
  !*** ./src/app/provider-home/provider-home.page.ts ***!
  \*****************************************************/
/*! exports provided: ProviderHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderHomePage", function() { return ProviderHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_provider_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./provider-home.page.html */ "yTbW");
/* harmony import */ var _provider_home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider-home.page.scss */ "bqv2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_service_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/service-provider.service */ "7RZW");
/* harmony import */ var _core_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/utility.service */ "ZtwD");







let ProviderHomePage = class ProviderHomePage {
    constructor(router, service, utility) {
        this.router = router;
        this.service = service;
        this.utility = utility;
        this.services = [];
    }
    ngOnInit() {
        this.getServices();
    }
    ionViewDidEnter() {
        // this.services = JSON.parse(localStorage.getItem('userObj')).services;
        console.log(this.services);
    }
    getServices() {
        var userId = JSON.parse(localStorage.getItem('userObj'))._id;
        this.service.getServicesOfProvider(userId).subscribe((res) => {
            console.log(res);
            this.services = res;
        });
    }
    viewService(service) {
        localStorage.setItem('service', service);
        this.utility.navigate('/tabs/service-details?id=' + service._id);
    }
};
ProviderHomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _core_service_provider_service__WEBPACK_IMPORTED_MODULE_5__["ServiceProviderService"] },
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"] }
];
ProviderHomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-provider-home',
        template: _raw_loader_provider_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_provider_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProviderHomePage);



/***/ }),

/***/ "W6UA":
/*!*******************************************************!*\
  !*** ./src/app/provider-home/provider-home.module.ts ***!
  \*******************************************************/
/*! exports provided: ProviderHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderHomePageModule", function() { return ProviderHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _provider_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./provider-home-routing.module */ "z/77");
/* harmony import */ var _provider_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./provider-home.page */ "03Da");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");








let ProviderHomePageModule = class ProviderHomePageModule {
};
ProviderHomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _provider_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProviderHomePageRoutingModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_provider_home_page__WEBPACK_IMPORTED_MODULE_6__["ProviderHomePage"]],
    })
], ProviderHomePageModule);



/***/ }),

/***/ "bqv2":
/*!*******************************************************!*\
  !*** ./src/app/provider-home/provider-home.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .menu-icn {\n  position: absolute;\n  top: 10%;\n  left: 20px;\n  z-index: 111;\n}\n\nion-content .menu-icn img {\n  width: 20px;\n}\n\nion-content .bottm-conts {\n  padding: 0px;\n}\n\nion-content h4.ttl-tp {\n  margin-right: 25px;\n}\n\nion-content .cont-calef {\n  padding: 20px 15px;\n  margin-top: 20px;\n  display: block;\n}\n\nion-content .cont-box-s {\n  position: relative;\n  display: block;\n  padding: 5px;\n  border: 1px solid #c1c1c13b;\n  border-radius: 10px;\n  padding-left: 93px;\n  margin-bottom: 15px;\n}\n\nion-content .cont-box-s img.icm-str {\n  position: absolute;\n  left: 15px;\n  top: 10px;\n  width: 55px;\n  border-radius: 50%;\n  border: 1px solid #c1c1c1;\n}\n\nion-content .cont-box-s .cont-data {\n  height: 66px;\n}\n\nion-content .cont-box-s .cont-data h3 {\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n  width: 100%;\n  padding-top: 15px;\n}\n\nion-content .cont-box-s .cont-data a {\n  right: 16px;\n  position: absolute;\n  margin-top: -9%;\n  background: #afa3a3;\n  border-radius: 50%;\n  padding: 5px 6px;\n  color: #fff;\n}\n\nion-content .cont-box-s .cont-data p {\n  margin: 0px;\n  font-size: 14px;\n  color: #606060;\n  margin: 5px 0;\n}\n\nion-content .cont-box-s .cont-data p span {\n  margin-left: 20px;\n}\n\nion-content .cont-box-s .cont-data .qau-box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\nion-content .cont-box-s .cont-data .qau-box .icon-cos span.icon-ds {\n  width: 25px;\n  height: 25px;\n  display: inline-block;\n  background: #dcdcdc;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 28px;\n  font-size: 20px;\n}\n\nion-content .cont-box-s .cont-data .qau-box .icon-cos span.numbs {\n  display: inline-block;\n  font-size: 16px;\n  margin: 0 7px;\n  vertical-align: super;\n  color: #777;\n  position: relative;\n  top: 1px;\n}\n\nion-content .cont-box-s .cont-data .qau-box a {\n  width: 27px;\n  height: 27px;\n  display: inline-block;\n  background: #bfbfbf;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 29px;\n  font-size: 17px;\n  color: #fff;\n}\n\nion-content .data-dts {\n  display: block;\n  margin-top: 30px;\n}\n\nion-content .data-dts h4 {\n  margin: 0px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #636363;\n  border-bottom: 1px solid #d3d3d3;\n  padding-bottom: 9px;\n}\n\nion-content .data-dts h3 {\n  margin: 0px;\n  font-size: 17px;\n  color: #000000;\n  font-weight: 700;\n  padding-top: 13px;\n}\n\nion-content .data-dts h3 span {\n  float: right;\n}\n\nion-content .order-placed {\n  text-align: center;\n  margin-top: 30px;\n}\n\nion-content .order-placed .ordr-pls {\n  text-decoration: none;\n  color: #4d4d4d;\n  font-size: 16px;\n  border: 2px solid #989898;\n  padding: 10px 25px;\n  display: inline-block;\n  border-radius: 50px;\n  font-weight: 600;\n}\n\n.serv {\n  position: absolute;\n  margin-top: -8%;\n  text-align: right;\n  width: 100%;\n  font-size: 23px;\n  padding-right: 18px;\n  color: #bfbfbf;\n  text-transform: uppercase;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb3ZpZGVyLWhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsWUFBWTtBQUFoQjs7QUFMQTtFQU9NLFdBQVc7QUFFakI7O0FBVEE7RUFXSSxZQUFZO0FBRWhCOztBQWJBO0VBY0ksa0JBQWtCO0FBR3RCOztBQWpCQTtFQWlCSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFJbEI7O0FBdkJBO0VBc0JJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUt2Qjs7QUFqQ0E7RUE4Qk0sa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFPL0I7O0FBMUNBO0VBc0NNLFlBQVk7QUFRbEI7O0FBOUNBO0VBd0NRLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxpQkFBaUI7QUFVekI7O0FBdERBO0VBK0NRLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFXbkI7O0FBaEVBO0VBd0RRLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUNkLGFBQWE7QUFZckI7O0FBdkVBO0VBNkRVLGlCQUFpQjtBQWMzQjs7QUEzRUE7RUFpRVEsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQWMzQjs7QUFuRkE7RUF3RVksV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFlM0I7O0FBOUZBO0VBa0ZZLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7QUFnQnBCOztBQXhHQTtFQTRGVSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVc7QUFnQnJCOztBQXBIQTtFQTBHSSxjQUFjO0VBQ2QsZ0JBQWdCO0FBY3BCOztBQXpIQTtFQTZHTSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQWdCekI7O0FBbElBO0VBcUhNLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFpQnZCOztBQTFJQTtFQTJIUSxZQUFZO0FBbUJwQjs7QUE5SUE7RUFnSUksa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQWtCcEI7O0FBbkpBO0VBbUlNLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFvQnRCOztBQWZBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHlCQUF5QjtBQWtCM0IiLCJmaWxlIjoicHJvdmlkZXItaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLm1lbnUtaWNuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHotaW5kZXg6IDExMTtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuYm90dG0tY29udHMge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuICBoNC50dGwtdHAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gIH1cclxuICAuY29udC1jYWxlZiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5jb250LWJveC1zIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MxYzFjMTNiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogOTNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBpbWcuaWNtLXN0ciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMTVweDtcclxuICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICB3aWR0aDogNTVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzFjMWMxO1xyXG4gICAgfVxyXG4gICAgLmNvbnQtZGF0YSB7XHJcbiAgICAgIGhlaWdodDogNjZweDtcclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIGEge1xyXG4gICAgICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtOSU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2FmYTNhMztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDZweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICM2MDYwNjA7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAucWF1LWJveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgLmljb24tY29zIHtcclxuICAgICAgICAgIHNwYW4uaWNvbi1kcyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2RjZGNkYztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzcGFuLm51bWJzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA3cHg7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcclxuICAgICAgICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAxcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgd2lkdGg6IDI3cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI5cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmRhdGEtZHRzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGg0IHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICM2MzYzNjM7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkM2QzO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogOXB4O1xyXG4gICAgfVxyXG4gICAgaDMge1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAub3JkZXItcGxhY2VkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAub3Jkci1wbHMge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjNGQ0ZDRkO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM5ODk4OTg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNlcnYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAtOCU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE4cHg7XHJcbiAgY29sb3I6ICNiZmJmYmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "yTbW":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider-home/provider-home.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>adoptions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n  <app-header [pageName]='\"Services\"' app=\"serviceProvider\"></app-header>\r\n  <!-- <ion-menu-button class=\"menu-icn\"\r\n    ><span> <img src=\"assets/images/menu.png\" /> </span>\r\n  </ion-menu-button> -->\r\n  <!-- <div class=\"top-head\">\r\n    <img src=\"assets/images/logo1.png\" class=\"img-logo\" />\r\n  </div>\r\n  <div class=\"serv\">\r\n    <span>Services</span>\r\n  </div> -->\r\n  <div class=\"bottm-conts\">\r\n    <div class=\"cont-calef\">\r\n      <div\r\n        class=\"cont-box-s\"\r\n        *ngFor=\"let item of services;\"\r\n        (click)=\"viewService(item)\"\r\n      >\r\n        <img src=\"assets/images/dog.png\" class=\"icm-str\" />\r\n        <div class=\"cont-data\">\r\n          <h3>{{item.sname | titlecase}}</h3>\r\n          <!-- <div class=\"qau-box\"> -->\r\n          <!-- <a href=\"javascript:;\" (click)=\"update(item)\">\r\n            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n          </a> -->\r\n          <!-- </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "z/77":
/*!***************************************************************!*\
  !*** ./src/app/provider-home/provider-home-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ProviderHomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderHomePageRoutingModule", function() { return ProviderHomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _provider_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./provider-home.page */ "03Da");




const routes = [
    {
        path: '',
        component: _provider_home_page__WEBPACK_IMPORTED_MODULE_3__["ProviderHomePage"]
    }
];
let ProviderHomePageRoutingModule = class ProviderHomePageRoutingModule {
};
ProviderHomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProviderHomePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=provider-home-provider-home-module.js.map