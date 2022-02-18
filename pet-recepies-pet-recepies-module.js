(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pet-recepies-pet-recepies-module"],{

/***/ "GqGb":
/*!*************************************************************!*\
  !*** ./src/app/pet-recepies/pet-recepies-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PetRecepiesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetRecepiesPageRoutingModule", function() { return PetRecepiesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pet_recepies_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pet-recepies.page */ "JdJl");




const routes = [
    {
        path: '',
        component: _pet_recepies_page__WEBPACK_IMPORTED_MODULE_3__["PetRecepiesPage"]
    }
];
let PetRecepiesPageRoutingModule = class PetRecepiesPageRoutingModule {
};
PetRecepiesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PetRecepiesPageRoutingModule);



/***/ }),

/***/ "JdJl":
/*!***************************************************!*\
  !*** ./src/app/pet-recepies/pet-recepies.page.ts ***!
  \***************************************************/
/*! exports provided: PetRecepiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetRecepiesPage", function() { return PetRecepiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pet_recepies_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pet-recepies.page.html */ "ZeWc");
/* harmony import */ var _pet_recepies_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pet-recepies.page.scss */ "b4jS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PetRecepiesPage = class PetRecepiesPage {
    constructor() { }
    ngOnInit() {
    }
};
PetRecepiesPage.ctorParameters = () => [];
PetRecepiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pet-recepies',
        template: _raw_loader_pet_recepies_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pet_recepies_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PetRecepiesPage);



/***/ }),

/***/ "PSa7":
/*!*****************************************************!*\
  !*** ./src/app/pet-recepies/pet-recepies.module.ts ***!
  \*****************************************************/
/*! exports provided: PetRecepiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetRecepiesPageModule", function() { return PetRecepiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pet_recepies_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pet-recepies-routing.module */ "GqGb");
/* harmony import */ var _pet_recepies_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pet-recepies.page */ "JdJl");







let PetRecepiesPageModule = class PetRecepiesPageModule {
};
PetRecepiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pet_recepies_routing_module__WEBPACK_IMPORTED_MODULE_5__["PetRecepiesPageRoutingModule"]
        ],
        declarations: [_pet_recepies_page__WEBPACK_IMPORTED_MODULE_6__["PetRecepiesPage"]]
    })
], PetRecepiesPageModule);



/***/ }),

/***/ "ZeWc":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pet-recepies/pet-recepies.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>adoptions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n\t<div class=\"top-head\">\r\n\t\t<img src=\"assets/images/logo1.png\" class=\"img-logo\">\r\n\t</div>\r\n\t<div class=\"bottm-conts\">\r\n\t\t<h4 class=\"ttl-tp\"> PET RECIPES </h4>\r\n\t\t<div class=\"cont-calef\">\r\n\t\t\t<div class=\"bts-ss\">\r\n\t\t\t\t<ion-select interface=\"popover\" placeholder=\"Recipes\">\r\n\t\t\t\t\t<ion-select-option value=\"nes\">Recipes by WOOF</ion-select-option>\r\n\t\t\t\t\t<ion-select-option value=\"n64\">Recipes by Pet Owners</ion-select-option>\r\n\t\t\t\t\t<ion-select-option value=\"ps\">Recipes by Food manufacturers</ion-select-option>\r\n\t\t\t\t</ion-select>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"cont-bs-s\">\r\n\t\t\t\t<img src=\"assets/images/foo1.jpg\">\r\n\t\t\t\t<div class=\"cont-mis\">\r\n\t\t\t\t\tWhite Chocolate Peanut Butter Cookies\r\n\t\t\t\t\t<span class=\"icon-sf\"> <ion-icon name=\"download-outline\"></ion-icon> </span> \r\n\t\t\t\t\t<span class=\"icon-duf\"> <ion-icon name=\"heart-outline\"></ion-icon> </span> \r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"cont-bs-s\">\r\n\t\t\t\t<img src=\"assets/images/foo2.jpg\">\r\n\t\t\t\t<div class=\"cont-mis\">\r\n\t\t\t\t\tPremium Food \r\n\t\t\t\t\t<span class=\"icon-sf\"> <ion-icon name=\"download-outline\"></ion-icon> </span> \r\n\t\t\t\t\t<span class=\"icon-duf\"> <ion-icon name=\"heart-outline\"></ion-icon> </span> \r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<a href=\"javascript:void(0)\" class=\"fixed-btn-bi\" routerLink=\"/tabs/receipe-upload\"> <ion-icon name=\"add-outline\"></ion-icon> </a>\r\n</ion-content>\r\n");

/***/ }),

/***/ "b4jS":
/*!*****************************************************!*\
  !*** ./src/app/pet-recepies/pet-recepies.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .bottm-conts {\n  padding: 0px;\n}\n\nion-content h4.ttl-tp {\n  margin-right: 25px;\n}\n\nion-content .cont-calef {\n  padding: 10px 20px;\n  margin-top: 20px;\n  display: block;\n}\n\nion-content .bts-ss {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin-bottom: 20px;\n}\n\nion-content .bts-ss ion-select {\n  background: #bfbfbf;\n  color: #fff;\n  --placeholder-color: #fff;\n  --placeholder-opacity: 1;\n  border-radius: 50px;\n  font-weight: 600;\n  font-size: 16px;\n  padding: 9px 22px;\n}\n\nion-content .cont-bs-s {\n  padding: 15px;\n  background: #f6f6f6;\n  border-radius: 10px;\n  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.23);\n  margin-bottom: 15px;\n}\n\nion-content .cont-bs-s img {\n  width: 100%;\n  height: 100px;\n  object-fit: cover;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\nion-content .cont-bs-s .cont-mis {\n  position: relative;\n  padding-right: 74px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #131313;\n  min-height: 34px;\n  display: flex;\n  align-items: center;\n}\n\nion-content .cont-bs-s .cont-mis span.icon-sf {\n  width: 28px;\n  height: 28px;\n  background: #bfbfbf;\n  position: absolute;\n  right: 33px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  bottom: 5px;\n  color: #fff;\n  font-size: 18px;\n}\n\nion-content .cont-bs-s .cont-mis span.icon-duf {\n  width: 28px;\n  height: 28px;\n  background: #bfbfbf;\n  position: absolute;\n  right: 0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  bottom: 5px;\n  color: #fff;\n  font-size: 18px;\n}\n\nion-content .fixed-btn-bi {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  width: 49px;\n  height: 49px;\n  background: #bfbfbf;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n  border-radius: 50%;\n  color: #fff;\n  box-shadow: 2px 3px 9px rgba(0, 0, 0, 0.14);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBldC1yZWNlcGllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxZQUFZO0FBQWQ7O0FBRkE7RUFLRSxrQkFBa0I7QUFDcEI7O0FBTkE7RUFRRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWE7QUFFZjs7QUFaQTtFQWFFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUdyQjs7QUFuQkE7RUFrQkcsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx5QkFBb0I7RUFDcEIsd0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtBQUtwQjs7QUE5QkE7RUE2QkUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLG1CQUFtQjtBQUtyQjs7QUF0Q0E7RUFtQ0csV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQU90Qjs7QUE5Q0E7RUEwQ0csa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDYixnQkFBZ0I7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtBQVF0Qjs7QUF6REE7RUFtREksV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0FBVW5COztBQXhFQTtFQWlFSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7QUFXbkI7O0FBdkZBO0VBaUZFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDJDQUEyQztBQVU3QyIsImZpbGUiOiJwZXQtcmVjZXBpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG5cdC5ib3R0bS1jb250cyB7XHJcblx0XHRwYWRkaW5nOiAwcHg7XHJcblx0fVxyXG5cdGg0LnR0bC10cCB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcblx0fVxyXG5cdC5jb250LWNhbGVmIHtcclxuXHRcdHBhZGRpbmc6IDEwcHggMjBweDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdH1cclxuXHQuYnRzLXNzIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0XHRpb24tc2VsZWN0IHtcclxuXHRcdFx0YmFja2dyb3VuZDogI2JmYmZiZjtcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdC0tcGxhY2Vob2xkZXItY29sb3I6ICNmZmY7XHJcblx0XHRcdC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRwYWRkaW5nOiA5cHggMjJweDtcclxuXHRcdH1cclxuXHR9XHJcblx0LmNvbnQtYnMtcyB7XHJcblx0XHRwYWRkaW5nOiAxNXB4O1xyXG5cdFx0YmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0XHRib3gtc2hhZG93OiA0cHggNHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHRcdGltZyB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRoZWlnaHQ6IDEwMHB4O1xyXG5cdFx0XHRvYmplY3QtZml0OiBjb3ZlcjtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHRcdH1cclxuXHRcdC5jb250LW1pcyB7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0cGFkZGluZy1yaWdodDogNzRweDtcclxuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRjb2xvcjogIzEzMTMxMztcclxuXHRcdFx0IG1pbi1oZWlnaHQ6IDM0cHg7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdHNwYW4uaWNvbi1zZiB7XHJcblx0XHRcdFx0d2lkdGg6IDI4cHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAyOHB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdHJpZ2h0OiAzM3B4O1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0Ym90dG9tOiA1cHg7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdHNwYW4uaWNvbi1kdWYge1xyXG5cdFx0XHRcdHdpZHRoOiAyOHB4O1xyXG5cdFx0XHRcdGhlaWdodDogMjhweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRyaWdodDogMDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdGJvdHRvbTogNXB4O1xyXG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQuZml4ZWQtYnRuLWJpIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGJvdHRvbTogMTVweDtcclxuXHRcdHJpZ2h0OiAxNXB4O1xyXG5cdFx0d2lkdGg6IDQ5cHg7XHJcblx0XHRoZWlnaHQ6IDQ5cHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogNDBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0Ym94LXNoYWRvdzogMnB4IDNweCA5cHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcclxuXHR9XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pet-recepies-pet-recepies-module.js.map