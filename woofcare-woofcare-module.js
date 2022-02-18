(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["woofcare-woofcare-module"],{

/***/ "+rmM":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/woofcare/woofcare.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>add-product</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n  <app-header [pageName]=\"'Woof Cares'\"  app=\"woofcare\"></app-header>\r\n  <!-- <div class=\"top-head\">\r\n    <img src=\"assets/images/logo1.png\" class=\"img-logo\" />\r\n  </div> -->\r\n  <div class=\"bottm-conts\">\r\n    <h4 class=\"ttl-tp\">Woof Cares</h4>\r\n    <div class=\"tabs-cotsf\">\r\n      <ion-list  class=\"bt-syr\">\r\n          <div class=\"sec-box-s\">\r\n            <ion-row>\r\n              <ion-col size=\"6\" *ngFor=\"let doc of services\">\r\n                <div class=\"main-dv\">\r\n                  <div\r\n                    class=\"box-int\"\r\n                    routerLink=\"/pet-trainers\"\r\n                  >\r\n                    <img src=\"assets/images/home2.png\" />\r\n                    <h5>{{doc.name}} </h5>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n              <!-- <ion-col size=\"6\">\r\n                <div class=\"main-dv\">\r\n                  <div class=\"box-int\" routerLink=\"/tabs/join-the-walk\">\r\n                    <img src=\"assets/images/home3.png\" />\r\n                    <h5>Join the walk</h5>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"main-dv\">\r\n                  <div class=\"box-int\" routerLink=\"/tabs/woofcare\">\r\n                    <img src=\"assets/images/home4.png\" />\r\n                    <h5>Woof Cares</h5>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"main-dv\">\r\n                  <div class=\"box-int\" routerLink=\"/tabs/map\">\r\n                    <img src=\"assets/images/home5.png\" />\r\n                    <h5>Map</h5>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"main-dv\">\r\n                  <div class=\"box-int\" routerLink=\"/tabs/adoptions\">\r\n                    <img src=\"assets/images/home6.png\" />\r\n                    <h5>Adoptions</h5>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"main-dv\">\r\n                  <div class=\"box-int\" routerLink=\"/tabs/chat\">\r\n                    <img src=\"assets/images/home7.png\" />\r\n                    <h5>Woof Chat</h5>\r\n                  </div>\r\n                </div>\r\n              </ion-col> -->\r\n            </ion-row>\r\n          </div>\r\n        </ion-list>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "7UrR":
/*!*******************************************!*\
  !*** ./src/app/woofcare/woofcare.page.ts ***!
  \*******************************************/
/*! exports provided: WoofcarePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WoofcarePage", function() { return WoofcarePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_woofcare_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./woofcare.page.html */ "+rmM");
/* harmony import */ var _woofcare_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./woofcare.page.scss */ "zxg7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_service_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/service-provider.service */ "7RZW");
/* harmony import */ var _core_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/utility.service */ "ZtwD");







let WoofcarePage = class WoofcarePage {
    constructor(utility, providerService, activeRoute) {
        this.utility = utility;
        this.providerService = providerService;
        this.activeRoute = activeRoute;
    }
    ngOnInit() {
        this.getServiceCategoriesList();
    }
    getServices() {
        this.providerService.getServiceCategory().subscribe((res) => {
            this.services = res;
        });
    }
    getServiceCategoriesList() {
        this.providerService.serviceCatList().subscribe((res) => {
            console.log(res);
            this.services = res;
            this.utility.dismiss();
        }, (err) => {
            console.log(err);
            this.utility.dismiss();
            this.utility.showAlert('Something went wrong!');
        });
    }
};
WoofcarePage.ctorParameters = () => [
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"] },
    { type: _core_service_provider_service__WEBPACK_IMPORTED_MODULE_5__["ServiceProviderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
WoofcarePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-woofcare',
        template: _raw_loader_woofcare_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_woofcare_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WoofcarePage);



/***/ }),

/***/ "L/bu":
/*!*********************************************!*\
  !*** ./src/app/woofcare/woofcare.module.ts ***!
  \*********************************************/
/*! exports provided: WoofcarePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WoofcarePageModule", function() { return WoofcarePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _woofcare_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./woofcare-routing.module */ "iYfV");
/* harmony import */ var _woofcare_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./woofcare.page */ "7UrR");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");








let WoofcarePageModule = class WoofcarePageModule {
};
WoofcarePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _woofcare_routing_module__WEBPACK_IMPORTED_MODULE_5__["WoofcarePageRoutingModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_woofcare_page__WEBPACK_IMPORTED_MODULE_6__["WoofcarePage"]],
    })
], WoofcarePageModule);



/***/ }),

/***/ "iYfV":
/*!*****************************************************!*\
  !*** ./src/app/woofcare/woofcare-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: WoofcarePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WoofcarePageRoutingModule", function() { return WoofcarePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _woofcare_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./woofcare.page */ "7UrR");




const routes = [
    {
        path: '',
        component: _woofcare_page__WEBPACK_IMPORTED_MODULE_3__["WoofcarePage"]
    }
];
let WoofcarePageRoutingModule = class WoofcarePageRoutingModule {
};
WoofcarePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WoofcarePageRoutingModule);



/***/ }),

/***/ "zxg7":
/*!*********************************************!*\
  !*** ./src/app/woofcare/woofcare.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  min-height: 100%;\n  position: relative;\n  background: url('home-bg.png');\n  --background: url('home-bg.png');\n  background-size: cover;\n  background-position: center;\n}\n\nion-content ::ng-deep .top-head:after {\n  content: \"\";\n  background: #e3e3e3 !important;\n  position: absolute;\n  bottom: -30px;\n  left: 0;\n  width: 40px;\n  z-index: 11;\n  height: 30px;\n  border-radius: 30px 0px 0px 0;\n}\n\nion-content .edit-c {\n  display: block;\n  text-align: right;\n  margin: 15px 0 15px;\n}\n\nion-content .edit-c .icon-rig {\n  width: 35px;\n  height: 35px;\n  background: #bfbfbf;\n  display: inline-block;\n  text-align: center;\n  line-height: 37px;\n  color: #fff;\n  border-radius: 50%;\n  margin-right: 5px;\n  font-size: 16px;\n}\n\nion-content .marg-nsg {\n  margin: 0 -5px;\n}\n\nion-content h4.cnter-ttl {\n  margin-top: -7px;\n  margin-bottom: 15px;\n  font-size: 17px;\n  color: #828282;\n  font-weight: bold;\n}\n\nion-content .home-bgs {\n  min-height: 100%;\n  position: relative;\n  background: url('home-bg.png');\n  background-size: cover;\n  background-position: center;\n}\n\nion-content .home-bgs .menu-icn {\n  position: absolute;\n  top: 18px;\n  left: 20px;\n  z-index: 111;\n}\n\nion-content .home-bgs .menu-icn img {\n  width: 20px;\n}\n\nion-content .home-bgs .logo-top {\n  display: block;\n  position: relative;\n  text-align: center;\n  padding: 25px 0;\n}\n\nion-content .home-bgs .logo-top img {\n  max-width: 280px;\n  width: 100%;\n}\n\nion-content .cont-spa {\n  padding: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\nion-content .cont-spa ion-segment {\n  display: flex;\n  background: #babcbb;\n  width: 84px;\n  border-radius: 50px;\n  padding: 2px;\n}\n\nion-content .cont-spa ion-segment ion-segment-button {\n  width: 40px;\n  padding: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  max-width: 40px;\n  min-width: 40px;\n  height: 28px !important;\n  min-height: 28px !important;\n}\n\nion-content .cont-spa ion-segment ion-segment-button img {\n  height: 18px;\n  width: auto;\n}\n\nion-content .cont-spa ion-segment ion-segment-button.segment-button-checked {\n  width: 40px;\n  min-width: 40px;\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  background: #fff;\n  border-radius: 50px;\n  --border-radius: 50px;\n  --color-checked: var(--ion-color-white) !important;\n  font-weight: 500;\n}\n\nion-content .cont-spa ion-segment ion-segment-button.segment-button-checked img {\n  filter: invert(1);\n}\n\nion-content ion-list.bt-syr {\n  --background: transparent;\n  background: transparent;\n  padding: 0 15px;\n}\n\nion-content .box-stf {\n  display: block;\n  position: relative;\n  width: 100%;\n  margin-top: 10px;\n}\n\nion-content .box-stf .topimg-st {\n  position: relative;\n  display: block;\n  text-align: center;\n}\n\nion-content .box-stf .topimg-st img {\n  height: 180px;\n  width: auto;\n}\n\nion-content .box-stf .topimg-st h4 {\n  margin: 0px;\n  background: #fff;\n  padding: 17px 10px 12px;\n  width: 200px;\n  margin: 0 auto;\n  margin-top: -13px;\n  font-size: 18px;\n  text-transform: uppercase;\n  color: #545353;\n  letter-spacing: 0px;\n  font-weight: 500;\n  box-shadow: 6px 7px 20px rgba(0, 0, 0, 0.22);\n  margin-bottom: 40px;\n}\n\nion-content .centr-boc {\n  padding: 0 45px;\n}\n\nion-content .centr-boc .contf {\n  background: #f8f8f8;\n  padding: 15px 20px;\n  font-size: 16px;\n  text-align: left;\n  color: #686565;\n  border-radius: 5px;\n  box-shadow: 4px 5px 5px rgba(0, 0, 0, 0.23);\n  margin-bottom: 20px;\n}\n\nion-content .bottom-sit {\n  background: #f2ddfe;\n  text-align: left;\n  padding: 20px;\n  margin: 55px 0 30px;\n  position: relative;\n  padding-right: 155px;\n}\n\nion-content .bottom-sit h4 {\n  margin: 0px;\n  font-size: 22px;\n  color: #000;\n}\n\nion-content .bottom-sit p {\n  margin: 0px;\n  font-size: 13px;\n  color: #000;\n  opacity: 0.7;\n  margin-top: 3px;\n  font-weight: 600;\n}\n\nion-content .bottom-sit img.icon-syy {\n  position: absolute;\n  top: -22px;\n  width: 150px;\n  height: auto;\n  right: 6px;\n  max-height: initial;\n}\n\nion-content .btn-left-ar {\n  position: absolute;\n  left: -10px;\n  font-size: 30px;\n  top: 33%;\n  color: #c6c6c6;\n}\n\nion-content .btn-r8-ar {\n  position: absolute;\n  right: -10px;\n  font-size: 30px;\n  top: 33%;\n  color: #c6c6c6;\n}\n\nion-content .pos-rel {\n  position: relative;\n}\n\nion-content .sec-box-s {\n  margin-top: 6px;\n}\n\nion-content .sec-box-s .main-dv {\n  text-align: center;\n  padding: 10px;\n}\n\nion-content .sec-box-s .main-dv .box-int {\n  background: #fff;\n  position: relative;\n  box-shadow: 0px 17px 11px rgba(0, 0, 0, 0.12);\n  border-radius: 10px;\n  padding: 7px;\n  margin-bottom: 15px;\n}\n\nion-content .sec-box-s .main-dv .box-int img {\n  width: auto;\n  height: 100px;\n  margin-top: -27px;\n}\n\nion-content .sec-box-s .main-dv .box-int h5 {\n  margin: 0px;\n  font-size: 17px;\n  text-transform: uppercase;\n  color: #5f5f5f;\n  margin-top: 10px;\n  letter-spacing: 0px;\n}\n\n.bottm-conts {\n  padding: 20px 10px;\n}\n\nh4.ttl-tp {\n  color: #bfbfbf !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHdvb2ZjYXJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQWFFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsOEJBQWtEO0VBQ2xELGdDQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQVg3Qjs7QUFQQTtFQUVJLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixPQUFPO0VBQ1AsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0FBU2pDOztBQW5CQTtFQW9CSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUd2Qjs7QUF6QkE7RUF3Qk0sV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtBQUtyQjs7QUF0Q0E7RUFxQ0ksY0FBYztBQUtsQjs7QUExQ0E7RUF3Q0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtBQU1yQjs7QUFsREE7RUErQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw4QkFBa0Q7RUFDbEQsc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQU8vQjs7QUExREE7RUFxRE0sa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtBQVNsQjs7QUFqRUE7RUEwRFEsV0FBVztBQVduQjs7QUFyRUE7RUE4RE0sY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtBQVdyQjs7QUE1RUE7RUFtRVEsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFhbkI7O0FBakZBO0VBeUVJLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQVk3Qjs7QUF4RkE7RUE4RU0sYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7QUFjbEI7O0FBaEdBO0VBb0ZRLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWdCO0VBQ2hCLGtCQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsMkJBQTJCO0FBZ0JuQzs7QUEzR0E7RUE2RlUsWUFBWTtFQUNaLFdBQVc7QUFrQnJCOztBQWhIQTtFQWtHUSxXQUFXO0VBQ1gsZUFBZTtFQUNmLHlDQUFrQjtFQUNsQixpREFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixxQkFBZ0I7RUFDaEIsa0RBQWdCO0VBQ2hCLGdCQUFnQjtBQWtCeEI7O0FBNUhBO0VBNEdVLGlCQUFpQjtBQW9CM0I7O0FBaElBO0VBa0hJLHlCQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFrQm5COztBQXRJQTtFQXVISSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7QUFtQnBCOztBQTdJQTtFQTRITSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtBQXFCeEI7O0FBbkpBO0VBZ0lRLGFBQWE7RUFDYixXQUFXO0FBdUJuQjs7QUF4SkE7RUFvSVEsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiw0Q0FBNEM7RUFDNUMsbUJBQW1CO0FBd0IzQjs7QUF4S0E7RUFxSkksZUFBZTtBQXVCbkI7O0FBNUtBO0VBdUpNLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDJDQUEyQztFQUMzQyxtQkFBbUI7QUF5QnpCOztBQXZMQTtFQWtLSSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQXlCeEI7O0FBaE1BO0VBeUtNLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVztBQTJCakI7O0FBdE1BO0VBOEtNLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBNEJ0Qjs7QUEvTUE7RUFzTE0sa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVixtQkFBbUI7QUE2QnpCOztBQXhOQTtFQStMSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixRQUFRO0VBQ1IsY0FBYztBQTZCbEI7O0FBaE9BO0VBc01JLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLFFBQVE7RUFDUixjQUFjO0FBOEJsQjs7QUF4T0E7RUE2TUksa0JBQWtCO0FBK0J0Qjs7QUE1T0E7RUFnTkksZUFBZTtBQWdDbkI7O0FBaFBBO0VBa05NLGtCQUFrQjtFQUNsQixhQUFhO0FBa0NuQjs7QUFyUEE7RUFxTlEsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw2Q0FBNkM7RUFDN0MsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7QUFvQzNCOztBQTlQQTtFQTROVSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtBQXNDM0I7O0FBcFFBO0VBaU9VLFdBQVc7RUFDWCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBdUM3Qjs7QUFqQ0E7RUFDRSxrQkFBa0I7QUFvQ3BCOztBQWxDQTtFQUNFLHlCQUF5QjtBQXFDM0IiLCJmaWxlIjoid29vZmNhcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIDo6bmctZGVlcCAudG9wLWhlYWQ6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQ6ICNlM2UzZTMgIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTMwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICB6LWluZGV4OiAxMTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMHB4IDBweCAwO1xyXG4gIH1cclxuXHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lLWJnLnBuZ1wiKTtcclxuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS1iZy5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgLmVkaXQtYyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiAxNXB4IDAgMTVweDtcclxuICAgIC5pY29uLXJpZyB7XHJcbiAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICB9XHJcbiAgLm1hcmctbnNnIHtcclxuICAgIG1hcmdpbjogMCAtNXB4O1xyXG4gIH1cclxuICBoNC5jbnRlci10dGwge1xyXG4gICAgbWFyZ2luLXRvcDogLTdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogIzgyODI4MjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuaG9tZS1iZ3Mge1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS1iZy5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgLm1lbnUtaWNuIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDE4cHg7XHJcbiAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgIHotaW5kZXg6IDExMTtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxvZ28tdG9wIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyODBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuY29udC1zcGEge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGlvbi1zZWdtZW50IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYmFja2dyb3VuZDogI2JhYmNiYjtcclxuICAgICAgd2lkdGg6IDg0cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogNDBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogNDBweDtcclxuICAgICAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1saXN0LmJ0LXN5ciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgfVxyXG4gIC5ib3gtc3RmIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgLnRvcGltZy1zdCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIGg0IHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDE3cHggMTBweCAxMnB4O1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTNweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogIzU0NTM1MztcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNnB4IDdweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuY2VudHItYm9jIHtcclxuICAgIHBhZGRpbmc6IDAgNDVweDtcclxuICAgIC5jb250ZiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBjb2xvcjogIzY4NjU2NTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBib3gtc2hhZG93OiA0cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuYm90dG9tLXNpdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJkZGZlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDU1cHggMCAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTU1cHg7XHJcbiAgICBoNCB7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIGltZy5pY29uLXN5eSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAtMjJweDtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIHJpZ2h0OiA2cHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5idG4tbGVmdC1hciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRvcDogMzMlO1xyXG4gICAgY29sb3I6ICNjNmM2YzY7XHJcbiAgfVxyXG4gIC5idG4tcjgtYXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdG9wOiAzMyU7XHJcbiAgICBjb2xvcjogI2M2YzZjNjtcclxuICB9XHJcbiAgLnBvcy1yZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuc2VjLWJveC1zIHtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIC5tYWluLWR2IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAuYm94LWludCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDE3cHggMTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC0yN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNSB7XHJcbiAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICBjb2xvcjogIzVmNWY1ZjtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uYm90dG0tY29udHMge1xyXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcclxufVxyXG5oNC50dGwtdHAge1xyXG4gIGNvbG9yOiAjYmZiZmJmICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=woofcare-woofcare-module.js.map