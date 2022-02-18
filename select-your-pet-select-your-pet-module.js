(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-your-pet-select-your-pet-module"],{

/***/ "3FhW":
/*!*********************************************************!*\
  !*** ./src/app/select-your-pet/select-your-pet.page.ts ***!
  \*********************************************************/
/*! exports provided: SelectYourPetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectYourPetPage", function() { return SelectYourPetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_select_your_pet_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./select-your-pet.page.html */ "acVw");
/* harmony import */ var _select_your_pet_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-your-pet.page.scss */ "hN5g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SelectYourPetPage = class SelectYourPetPage {
    constructor() { }
    ngOnInit() {
    }
};
SelectYourPetPage.ctorParameters = () => [];
SelectYourPetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-select-your-pet',
        template: _raw_loader_select_your_pet_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_select_your_pet_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SelectYourPetPage);



/***/ }),

/***/ "BzeZ":
/*!***********************************************************!*\
  !*** ./src/app/select-your-pet/select-your-pet.module.ts ***!
  \***********************************************************/
/*! exports provided: SelectYourPetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectYourPetPageModule", function() { return SelectYourPetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _select_your_pet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-your-pet-routing.module */ "x/cF");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");
/* harmony import */ var _select_your_pet_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select-your-pet.page */ "3FhW");








let SelectYourPetPageModule = class SelectYourPetPageModule {
};
SelectYourPetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _select_your_pet_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectYourPetPageRoutingModule"]
        ],
        declarations: [_select_your_pet_page__WEBPACK_IMPORTED_MODULE_7__["SelectYourPetPage"]]
    })
], SelectYourPetPageModule);



/***/ }),

/***/ "acVw":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-your-pet/select-your-pet.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>adoptions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n<div class=\"home-bgs\">\r\n\t<app-header [pageName]='\"aa\"' [pn]='\"detail\"' app=\"serviceProvider\"></app-header>\r\n\t<div class=\"bottm-conts\">\r\n\t\t<h4 class=\"ttl-tp\">SELECT YOUR PET </h4>\r\n\t\t\r\n\t</div>\r\n\t<div class=\"cont-calef\">\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t\t\t<div class=\"main-dv\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"box-int active\" routerLink=\"#\">\r\n\t\t\t\t\t\t\t\t\t  <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/dog-img.png\">\r\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"heading\">DOG</h5>\r\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"small-head\">2 years old</h6>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t\t\t<div class=\"main-dv\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"box-int\" routerLink=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/cat.png\">\r\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"heading\">CAT</h5>\r\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"small-head\">8 months old</h6>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\t</ion-row>\r\n\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t\t\t<div class=\"main-dv\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"box-int \" routerLink=\"#\">\r\n\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/turtle.png\">\r\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"heading\">TURTLE</h5>\r\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"small-head\">25 days old</h6>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t<div class=\"btn-div\"><a class=\"btn-coy\"  routerLink=\"/visit-details\">Next </a></div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "hN5g":
/*!***********************************************************!*\
  !*** ./src/app/select-your-pet/select-your-pet.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home-bgs {\n  min-height: 100%;\n  position: relative;\n  background: url('home-bg.png');\n  background-size: cover;\n  background-position: center;\n}\n\n.main-dv {\n  background: #fff;\n  /* border: 1px solid #ddd; */\n  text-align: center;\n  border-radius: 7px;\n  box-shadow: 0px 13px 16px -4px #00000036;\n  margin-bottom: 10px;\n}\n\n.cont-calef {\n  padding: 0 23px;\n}\n\n.heading {\n  margin: 0 0;\n  color: #5f5f5f;\n  font-size: 17px;\n  font-weight: 500;\n}\n\n.box-int img {\n  padding: 6px !important;\n  padding-bottom: 0 !important;\n}\n\n.btn-coy {\n  text-decoration: none;\n  color: #4d4d4d;\n  display: inline-block;\n  border: 2px solid #bfbfbf;\n  padding: 10px 55px;\n  border-radius: 50px;\n  margin-top: 17px;\n  font-size: 17px;\n  color: #4d4d4d;\n  margin-bottom: 60px;\n  margin-top: 52px;\n}\n\n.btn-div {\n  text-align: center;\n}\n\n.small-head {\n  margin: 0;\n  margin-bottom: 12px !important;\n  padding-bottom: 7px;\n  font-size: 12px;\n  color: #5f5f5f;\n  font-weight: 400;\n  margin-top: 3px;\n  margin-bottom: 0 !important;\n}\n\n.active img {\n  padding: 4px;\n}\n\n.box-int.active {\n  border: 1px solid #ffac83;\n  border-radius: 7px;\n}\n\nion-icon {\n  position: absolute;\n  right: -3px;\n  font-size: 30px;\n  /* border: 2px solid; */\n  color: #86df77;\n  background: #fff;\n  border-radius: 100px;\n  top: -7px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlbGVjdC15b3VyLXBldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDhCQUFrRDtFQUNsRCxzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUNFO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRCQUFBO0VBQ0Esa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFBQyxtQkFDN0M7QUFFQTs7QUFEQTtFQUNJLGVBQWU7QUFJbkI7O0FBRkE7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFLcEI7O0FBSkM7RUFDRyx1QkFBdUI7RUFBSyw0QkFDaEM7QUFPQTs7QUFOQTtFQUNHLHFCQUFxQjtFQUNwQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFTcEI7O0FBUkM7RUFDRyxrQkFBa0I7QUFXdEI7O0FBUkE7RUFDSSxTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQUssMkJBQTJCO0FBWW5EOztBQVZBO0VBQ0ksWUFBWTtBQWFoQjs7QUFYQTtFQUNJLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFjdEI7O0FBYkM7RUFDRyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZix1QkFBQTtFQUNBLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLFNBQVM7QUFnQmIiLCJmaWxlIjoic2VsZWN0LXlvdXItcGV0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlx0LmhvbWUtYmdzIHtcclxuXHRcdG1pbi1oZWlnaHQ6IDEwMCU7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUtYmcucG5nXCIpO1xyXG5cdFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHRcdH1cclxuXHRcdC5tYWluLWR2IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEzcHggMTZweCAtNHB4ICMwMDAwMDAzNjttYXJnaW4tYm90dG9tOiAxMHB4XHJcbn1cclxuLmNvbnQtY2FsZWYge1xyXG4gICAgcGFkZGluZzogMCAyM3B4O1xyXG59XHJcbi5oZWFkaW5nIHtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgY29sb3I6ICM1ZjVmNWY7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59LmJveC1pbnQgaW1nIHtcclxuICAgIHBhZGRpbmc6IDZweCAhaW1wb3J0YW50OyAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50XHJcbn1cclxuLmJ0bi1jb3kge1xyXG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzRkNGQ0ZDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiZmJmYmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDU1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTdweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjNGQ0ZDRkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgIG1hcmdpbi10b3A6IDUycHg7XHJcbn0uYnRuLWRpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zbWFsbC1oZWFkIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzVmNWY1ZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7ICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG4uYWN0aXZlIGltZyB7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuLmJveC1pbnQuYWN0aXZlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmFjODM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1pb24taWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTNweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkOyAqL1xyXG4gICAgY29sb3I6ICM4NmRmNzc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICB0b3A6IC03cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "x/cF":
/*!*******************************************************************!*\
  !*** ./src/app/select-your-pet/select-your-pet-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SelectYourPetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectYourPetPageRoutingModule", function() { return SelectYourPetPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _select_your_pet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-your-pet.page */ "3FhW");




const routes = [
    {
        path: '',
        component: _select_your_pet_page__WEBPACK_IMPORTED_MODULE_3__["SelectYourPetPage"]
    }
];
let SelectYourPetPageRoutingModule = class SelectYourPetPageRoutingModule {
};
SelectYourPetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectYourPetPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=select-your-pet-select-your-pet-module.js.map