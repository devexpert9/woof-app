(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["map-map-module"],{

/***/ "5MzG":
/*!*******************************************!*\
  !*** ./src/app/map/map-routing.module.ts ***!
  \*******************************************/
/*! exports provided: MapPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageRoutingModule", function() { return MapPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.page */ "SQ20");




const routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_3__["MapPage"]
    }
];
let MapPageRoutingModule = class MapPageRoutingModule {
};
MapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MapPageRoutingModule);



/***/ }),

/***/ "SQ20":
/*!*********************************!*\
  !*** ./src/app/map/map.page.ts ***!
  \*********************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_map_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./map.page.html */ "jBmT");
/* harmony import */ var _map_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.page.scss */ "je6D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MapPage = class MapPage {
    constructor() { }
    ngOnInit() {
    }
    hide() {
        this.hideMe = !this.hideMe;
    }
};
MapPage.ctorParameters = () => [];
MapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-map',
        template: _raw_loader_map_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_map_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MapPage);



/***/ }),

/***/ "jBmT":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>adoptions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n  <!-- <div class=\"top-head bg-blue\">\r\n    <img src=\"assets/images/logo3.png\" class=\"img-logo\" />\r\n    <h4 class=\"ttl-tp txt-blus\">Map</h4>\r\n  </div> -->\r\n  <app-header [pageName]='\"Map\"'></app-header>\r\n  <div class=\"bottm-conts\">\r\n    <div class=\"cont-calef\">\r\n      <div class=\"main-box-sr\">\r\n        <div class=\"inpt-cong\">\r\n          <span class=\"icon-int\"> <img src=\"assets/images/icon11.png\" /> </span>\r\n          <ion-input\r\n            placeholder=\"Add Location\"\r\n            value=\"2860  Orchard Street\"\r\n          ></ion-input>\r\n        </div>\r\n        <div class=\"select-rigt\">\r\n          <ion-select interface=\"popover\" placeholder=\"Filter\">\r\n            <ion-select-option value=\"nes\">Pet Parks</ion-select-option>\r\n            <ion-select-option value=\"n64\">Pet Hotels</ion-select-option>\r\n            <ion-select-option value=\"ps\">Pet Shops</ion-select-option>\r\n            <ion-select-option value=\"genesis\"\r\n              >Pet Restaurants</ion-select-option\r\n            >\r\n          </ion-select>\r\n          <ul class=\"icons-sets\">\r\n            <li routerLink=\"/tabs/map\">\r\n              <span class=\"activ-ico\"\r\n                ><img src=\"assets/images/map1.png\" />\r\n              </span>\r\n            </li>\r\n            <li routerLink=\"/tabs/map-list\">\r\n              <span> <img src=\"assets/images/map2.png\" /> </span>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <img src=\"assets/images/map.png\" class=\"imag-map\" />\r\n        <a href=\"javascript:void(0)\" class=\"add_places\" (click)=\"hide()\">\r\n          Add Place\r\n        </a>\r\n      </div>\r\n      <!--div class=\"map-sst\">\r\n\t\t\t\t<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6996666.650926983!2d-104.57208388558512!3d31.100249188334125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864070360b823249%3A0x16eb1c8f1808de3c!2sTexas%2C%20USA!5e0!3m2!1sen!2sin!4v1618899728306!5m2!1sen!2sin\" width=\"100%\" height=\"350\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"></iframe>\r\n\t\t\t</div-->\r\n    </div>\r\n  </div>\r\n  <div class=\"add-new-pop\" *ngIf=\"hideMe\">\r\n    <div class=\"cont-box\">\r\n      <span class=\"clos-icos\" (click)=\"hide()\">\r\n        <ion-icon name=\"close-outline\"></ion-icon>\r\n      </span>\r\n      <div class=\"cont-sf\">\r\n        <ion-input placeholder=\"LOCATION NAME\"></ion-input>\r\n      </div>\r\n      <div class=\"cont-sf\">\r\n        <ion-input placeholder=\"ADDRESS\"></ion-input>\r\n      </div>\r\n      <div class=\"cont-sf\">\r\n        <ion-select interface=\"popover\" placeholder=\"PLACE TYPE\">\r\n          <ion-select-option value=\"nes\">Place 1</ion-select-option>\r\n          <ion-select-option value=\"n64\">Place 2</ion-select-option>\r\n          <ion-select-option value=\"ps\">Place 3</ion-select-option>\r\n        </ion-select>\r\n      </div>\r\n      <div class=\"btn-ast\">\r\n        <a href=\"javascript:void(0)\" class=\"dav-gr\" (click)=\"hide()\"> Save </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "je6D":
/*!***********************************!*\
  !*** ./src/app/map/map.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .bottm-conts {\n  padding: 0px;\n}\n\nion-content h4.ttl-tp {\n  margin-right: 25px;\n}\n\nion-content .cont-calef {\n  padding: 10px 10px 20px;\n  margin-top: 20px;\n  display: block;\n}\n\nion-content .inpt-cong {\n  border: 1px solid #e8e8e8;\n  border-radius: 8px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 10px;\n  margin-bottom: 20px;\n  background: #fff !important;\n  z-index: 1;\n  position: relative;\n  margin-top: 5px;\n}\n\nion-content .inpt-cong span.icon-int img {\n  height: 25px;\n  margin-right: 12px;\n  margin-top: 3px;\n}\n\nion-content .inpt-cong ion-input {\n  font-size: 16px;\n  color: #babcbb;\n  font-family: 'Lato', sans-serif !important;\n}\n\nion-content .select-rigt {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nion-content .select-rigt ion-select {\n  background: #babcbb;\n  color: #fff;\n  --placeholder-color: #fff;\n  --placeholder-opacity: 1;\n  border-radius: 50px;\n  font-weight: 600;\n  font-size: 16px;\n  padding: 9px 22px;\n}\n\nion-content .map-sst {\n  position: relative;\n  border-radius: 25px;\n  overflow: hidden;\n  margin-top: -7px;\n}\n\nion-content .main-box-sr {\n  position: relative;\n  z-index: 0;\n  border-radius: 20px;\n  height: 450px;\n  padding: 15px;\n  overflow: hidden;\n}\n\nion-content .main-box-sr img.imag-map {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 0;\n  object-fit: cover;\n}\n\nion-content ul.icons-sets {\n  position: relative;\n  z-index: 11;\n  display: inline-block;\n  padding: 3px;\n  margin: 0px;\n  background: #babcbb;\n  border-radius: 50px;\n}\n\nion-content ul.icons-sets li {\n  display: inline-block;\n}\n\nion-content ul.icons-sets li span {\n  padding: 5px 8px;\n  display: inline-block;\n  border-radius: 50px;\n}\n\nion-content ul.icons-sets li span img {\n  height: 20px;\n}\n\nion-content ul.icons-sets li span.activ-ico {\n  background: #fff;\n  padding: 5px 15px;\n}\n\nion-content ul.icons-sets li span.activ-ico img {\n  filter: brightness(0.5);\n}\n\nion-content .add_places {\n  background: #7cf0f8;\n  padding: 9px 20px;\n  color: #fff;\n  position: absolute;\n  border-radius: 50px;\n  text-decoration: none;\n  right: 15px;\n  bottom: 30px;\n  border: 1px solid #5bd1da;\n  font-size: 17px;\n  font-weight: 600;\n}\n\nion-content .add-new-pop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  min-height: 100%;\n  background: rgba(0, 0, 0, 0.56);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 30px;\n}\n\nion-content .add-new-pop .cont-box {\n  width: 100%;\n  background: #fff;\n  padding: 30px 20px;\n  border-radius: 20px;\n  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);\n  position: relative;\n}\n\nion-content .add-new-pop .cont-box span.clos-icos {\n  position: absolute;\n  right: -15px;\n  top: -15px;\n  z-index: 11;\n  background: #f45252;\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  color: #fff;\n}\n\nion-content .add-new-pop .cont-box .cont-sf ion-input, ion-content .add-new-pop .cont-box .cont-sf ion-select {\n  --padding-start: 0px;\n  border-bottom: 1px solid #ababab;\n  font-size: 14px;\n  font-weight: 500;\n  color: #000;\n  margin-bottom: 12px;\n}\n\nion-content .add-new-pop .cont-box .dav-gr {\n  display: inline-block;\n  background: #0fe0ee;\n  color: #fff;\n  font-size: 14px;\n  text-decoration: none;\n  padding: 11px 30px;\n  border-radius: 50px;\n  margin-top: 13px;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxZQUFZO0FBQWQ7O0FBRkE7RUFLRSxrQkFBa0I7QUFDcEI7O0FBTkE7RUFRRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGNBQWE7QUFFZjs7QUFaQTtFQWFFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtBQUdqQjs7QUEzQkE7RUEyQkksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBSW5COztBQWpDQTtFQWlDRyxlQUFlO0VBQ2YsY0FBYztFQUNkLDBDQUEwQztBQUk3Qzs7QUF2Q0E7RUF1Q0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFJaEM7O0FBN0NBO0VBMkNHLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gseUJBQW9CO0VBQ3BCLHdCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7QUFNcEI7O0FBeERBO0VBc0RFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQU1sQjs7QUEvREE7RUE0REUsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGFBQVk7RUFDWixnQkFBZ0I7QUFPbEI7O0FBeEVBO0VBbUVHLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFVBQVU7RUFDVixpQkFBaUI7QUFTcEI7O0FBbkZBO0VBOEVFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQVNyQjs7QUE3RkE7RUFzRkcscUJBQXFCO0FBV3hCOztBQWpHQTtFQXdGSSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQWF2Qjs7QUF2R0E7RUE0RkssWUFBWTtBQWVqQjs7QUEzR0E7RUFnR0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQWVyQjs7QUFoSEE7RUFtR0ssdUJBQXVCO0FBaUI1Qjs7QUFwSEE7RUF5R0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtBQWVsQjs7QUFsSUE7RUFzSEksZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0FBZ0JqQjs7QUFqSkE7RUFtSUUsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDJDQUE0QztFQUM1QyxrQkFBaUI7QUFrQm5COztBQTFKQTtFQTBJRyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixXQUFXO0FBb0JkOztBQTFLQTtFQTBKSSxvQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1CQUFtQjtBQW9CdkI7O0FBbkxBO0VBbUtHLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQW9CbkIiLCJmaWxlIjoibWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuXHQuYm90dG0tY29udHMge1xyXG5cdFx0cGFkZGluZzogMHB4O1xyXG5cdH1cclxuXHRoNC50dGwtdHAge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG5cdH1cclxuXHQuY29udC1jYWxlZiB7XHJcblx0XHRwYWRkaW5nOiAxMHB4IDEwcHggMjBweDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdH1cclxuXHQuaW5wdC1jb25nIHtcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0XHRoZWlnaHQ6IDUwcHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdFx0YmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG5cdFx0ei1pbmRleDogMTtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdG1hcmdpbi10b3A6IDVweDtcclxuXHRcdHNwYW4uaWNvbi1pbnQge1xyXG5cdFx0XHRpbWcge1xyXG5cdFx0XHRcdGhlaWdodDogMjVweDtcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEycHg7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogM3B4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpb24taW5wdXQge1xyXG5cdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdGNvbG9yOiAjYmFiY2JiO1xyXG5cdFx0XHRmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5zZWxlY3QtcmlndCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGlvbi1zZWxlY3Qge1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjYmFiY2JiO1xyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0LS1wbGFjZWhvbGRlci1jb2xvcjogI2ZmZjtcclxuXHRcdFx0LS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdHBhZGRpbmc6IDlweCAyMnB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHQubWFwLXNzdCB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyNXB4O1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdG1hcmdpbi10b3A6IC03cHg7XHJcblx0fVxyXG5cdC5tYWluLWJveC1zciB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR6LWluZGV4OiAwO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcclxuXHRcdGhlaWdodDogNDUwcHg7XHJcblx0XHRwYWRkaW5nOjE1cHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHRpbWcuaW1hZy1tYXAge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6IDA7XHJcblx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0bGVmdDogMDtcclxuXHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdHotaW5kZXg6IDA7XHJcblx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cdFx0fVxyXG5cdH1cclxuXHR1bC5pY29ucy1zZXRzIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHotaW5kZXg6IDExO1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0cGFkZGluZzogM3B4O1xyXG5cdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAjYmFiY2JiO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRcdGxpIHtcclxuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRzcGFuIHtcclxuXHRcdFx0XHRwYWRkaW5nOiA1cHggOHB4O1xyXG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHNwYW4uYWN0aXYtaWNvIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDVweCAxNXB4O1xyXG5cdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHRmaWx0ZXI6IGJyaWdodG5lc3MoMC41KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0LmFkZF9wbGFjZXMge1xyXG5cdFx0YmFja2dyb3VuZDogIzdjZjBmODtcclxuXHRcdHBhZGRpbmc6IDlweCAyMHB4O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0cmlnaHQ6IDE1cHg7XHJcblx0XHRib3R0b206IDMwcHg7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjNWJkMWRhO1xyXG5cdFx0Zm9udC1zaXplOiAxN3B4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHR9XHJcbi5hZGQtbmV3LXBvcCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTYpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcblx0LmNvbnQtYm94IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdHBhZGRpbmc6IDMwcHggMjBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0XHRib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjIwKTtcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0c3Bhbi5jbG9zLWljb3Mge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHJpZ2h0OiAtMTVweDtcclxuXHRcdFx0dG9wOiAtMTVweDtcclxuXHRcdFx0ei1pbmRleDogMTE7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNmNDUyNTI7XHJcblx0XHRcdHdpZHRoOiAzOHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDM4cHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjZweDtcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHR9XHJcblx0XHQuY29udC1zZiB7XHJcblx0XHRcdGlvbi1pbnB1dCwgaW9uLXNlbGVjdCB7XHJcblx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYmFiYWI7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0Y29sb3I6ICMwMDA7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTJweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LmRhdi1nciB7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0YmFja2dyb3VuZDogIzBmZTBlZTtcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRwYWRkaW5nOiAxMXB4IDMwcHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblx0XHRcdG1hcmdpbi10b3A6IDEzcHg7XHJcblx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbn0iXX0= */");

/***/ }),

/***/ "yX1w":
/*!***********************************!*\
  !*** ./src/app/map/map.module.ts ***!
  \***********************************/
/*! exports provided: MapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-routing.module */ "5MzG");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map.page */ "SQ20");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");








let MapPageModule = class MapPageModule {
};
MapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _map_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapPageRoutingModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]],
    })
], MapPageModule);



/***/ })

}]);
//# sourceMappingURL=map-map-module.js.map