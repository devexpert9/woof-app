(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-new-profile-module"],{

/***/ "CEhM":
/*!*******************************************************!*\
  !*** ./src/app/profile-new/profile-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "v1cI");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "IKOr":
/*!***********************************************!*\
  !*** ./src/app/profile-new/profile.module.ts ***!
  \***********************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "CEhM");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "v1cI");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "LL96":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile-new/profile.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>adoptions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n\t<app-header [pageName]='\"profile\"' [pn]='\"profile\"' app=\"serviceProvider\"></app-header>\r\n\t<div class=\"bottm-conts\">\r\n\t\t<h4 class=\"ttl-tp\"> PROFILE </h4>\r\n\t\t<div class=\"cont-calef\">\r\n\t\t<div class=\"img-pro\">\r\n\t\t\t <img\r\n              [src]=\"profileData?.imageUrl != ''? profileData?.imageUrl:'assets/images/default.png'\" class=\"img-profile\"/>\r\n\t\t<!-- <img src=\"assets/images/sp-profile.png\" class=\"img-profile\"> -->\r\n\t\t<p class=\"name\">{{profileData?.firstname}} {{profileData?.lastname}}</p>\r\n\t\t<p class=\"email\">{{profileData?.email}}</p>\r\n\t\t</div>\r\n\t\t\t<ion-list class=\"disply-mnes\">\r\n\t\t\t\t\r\n\t\t\t\t<ion-item lines=\"none\" detail=\"false\" class=\"unread\" routerLink=\"/account-settings\">\r\n\t\t\t\t\t<ion-avatar slot=\"start\">\r\n\t\t\t\t\t\t<!-- <img src=\"assets/images/ac-1.png\"> -->\r\n\t\t\t\t\t\t<img src=\"assets/images/ac-1.png\">\r\n\t\t\t\t\t</ion-avatar>\r\n\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t<h2>Account Settings </h2>\r\n\t\t\t\t\t\t<p class=\"small-tx\">Profile Picture, Name, password & Email.</p>\r\n\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t<span class=\"icon-arr\" slot=\"end\"> <ion-icon name=\"chevron-forward-outline\"></ion-icon> </span>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t<ion-item lines=\"none\" detail=\"false\" class=\"unread\" routerLink=\"/services-of-provider\">\r\n\t\t\t\t\t<ion-avatar slot=\"start\">\r\n\t\t\t\t\t\t<!-- <img src=\"assets/images/m-s.png\"> -->\r\n\t\t\t\t\t\t<img src=\"assets/images/m-s.png\">\r\n\t\t\t\t\t</ion-avatar>\r\n\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t<h2>Manage Services </h2>\r\n\t\t\t\t\t\t<p class=\"small-tx\">Add, Update, delete your services.</p>\r\n\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t<span class=\"icon-arr\" slot=\"end\"> <ion-icon name=\"chevron-forward-outline\"></ion-icon> </span>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t<ion-item lines=\"none\" detail=\"false\" class=\"unread\" routerLink=\"/manage-bank-detail\">\r\n\t\t\t\t\t<ion-avatar slot=\"start\">\r\n\t\t\t\t\t\t<img src=\"assets/images/mb-1.png\">\r\n\t\t\t\t\t</ion-avatar>\r\n\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t<h2>Manage Bank details </h2>\r\n\t\t\t\t\t\t<p class=\"small-tx\">Add New or Change your bank details.</p>\r\n\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t<span class=\"icon-arr\" slot=\"end\"> <ion-icon name=\"chevron-forward-outline\"></ion-icon> </span>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t<ion-item lines=\"none\" detail=\"false\" class=\"unread\" routerLink=\"/service-provider-transaction\">\r\n\t\t\t\t\t<ion-avatar slot=\"start\">\r\n\t\t\t\t\t\t<!-- <img src=\"assets/images/vt.png\"> -->\r\n\t\t\t\t\t\t<img src=\"assets/images/vt.png\">\r\n\t\t\t\t\t</ion-avatar>\r\n\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t<h2>View Transactions </h2>\r\n\t\t\t\t\t\t<p class=\"small-tx\">Check your recent transactions</p>\r\n\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t<span class=\"icon-arr\" slot=\"end\"> <ion-icon name=\"chevron-forward-outline\"></ion-icon> </span>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t</ion-list> \r\n\t\t\t \r\n\t\t\t<div class=\"banner-lis\"><img src=\"assets/images/profile-banner.png\"></div>\r\n\t\t\t<a href=\"\" class=\"reset-btn\">Logout</a>\r\n\t\t\t<p href=\"\" class=\"copyright-txt\">© WoofCare 2021</p>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "Ru8V":
/*!***********************************************!*\
  !*** ./src/app/profile-new/profile.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .bottm-conts {\n  padding: 0px;\n}\n\nion-content h4.ttl-tp {\n  margin-right: 25px;\n}\n\nion-content .cont-calef {\n  padding: 5px 0px;\n  margin-top: 20px;\n  display: block;\n}\n\nion-content .cont-calef .top-icons {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0px 20px 10px;\n}\n\nion-content .cont-calef .top-icons .icon-fts {\n  width: 35px;\n  height: 35px;\n  background: #bfbfbf;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  margin-right: 7px;\n  font-size: 19px;\n}\n\nion-content .cont-calef .top-icons .icon-secr {\n  width: 35px;\n  height: 35px;\n  background: #bfbfbf;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 19px;\n}\n\nion-content .cont-calef ion-list.disply-mnes {\n  padding: 10px 20px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item {\n  background: #f1f1f1;\n  /* box-shadow: 5px 8px 22px rgb(103 103 103 / 18%); */\n  margin-bottom: 12px;\n  --padding-start: 0px;\n  --background: transparent;\n  --padding-end: 0px;\n  padding: 20px 5px 20px 8px;\n  border-radius: 9px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item ion-avatar {\n  margin: 0px;\n  margin-right: 3px;\n  width: 45px;\n  height: 45px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item ion-avatar .grupsf {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item ion-avatar .grupsf img {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin: 1px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item ion-label {\n  margin: 0px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item ion-label h2 {\n  font-size: 20px;\n  color: #000;\n  font-weight: 500 !important;\n  letter-spacing: 0;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item ion-label p {\n  font-size: 14px;\n  color: #545454;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item span.icon-arr {\n  margin: 0px;\n  width: 26px;\n  height: 26px;\n  /* background: #bfbfbf; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #8f8f8f;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item span.nembrs {\n  width: 15px;\n  height: 15px;\n  background: #919191;\n  display: inline-block;\n  font-size: 10px;\n  vertical-align: text-bottom;\n  margin-left: 2px;\n  text-align: center;\n  line-height: 15px;\n  border-radius: 50%;\n  color: #fff;\n  position: relative;\n  top: -2px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item.unread ion-label h2 {\n  font-weight: 700;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item.unread ion-label p {\n  font-weight: 600;\n}\n\n.img-profile {\n  margin: 0 auto;\n  display: block;\n  margin-bottom: 11px;\n}\n\n.name {\n  font-size: 22px;\n  font-weight: 500;\n  color: #000000;\n  letter-spacing: 0;\n}\n\n.email {\n  margin-top: 5px !important;\n}\n\n.cont-calef .small-tx {\n  font-size: 12px !important;\n  color: #8f8f8f !important;\n  letter-spacing: 0;\n  font-weight: 400 !important;\n}\n\n.img-pro {\n  margin-bottom: 20px;\n}\n\n.email {\n  font-size: 12px;\n  color: #434343;\n  font-weight: 500;\n  letter-spacing: 0;\n}\n\n.img-pro p {\n  text-align: center;\n  margin-bottom: 0 !important;\n  margin-top: 0;\n}\n\n.banner-lis img {\n  margin: 0 auto;\n  text-align: center;\n  display: block;\n  padding: 0 20px;\n  margin-top: 35px;\n}\n\n.reset-btn {\n  display: inline-block;\n  font-size: 14px;\n  color: #4d4d4d;\n  text-decoration: none;\n  padding: 14px 17px;\n  border: 2px solid #bfbfbf;\n  border-radius: 50px;\n  font-weight: 400;\n  margin: 0 auto;\n  display: block;\n  text-align: center;\n  width: 125px;\n  color: #bfbfbf;\n  margin-top: 52px;\n}\n\n.copyright-txt {\n  color: #8f8f8f;\n  font-size: 12px;\n  text-align: center;\n  margin-top: 42px;\n  margin-bottom: 40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsWUFBWTtBQUFkOztBQUZBO0VBS0Usa0JBQWtCO0FBQ3BCOztBQU5BO0VBUUUsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFhO0FBRWY7O0FBWkE7RUFZRyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFJekI7O0FBbkJBO0VBaUJJLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7QUFNbkI7O0FBaENBO0VBNkJJLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQU9uQjs7QUE1Q0E7RUF5Q0csa0JBQWtCO0FBT3JCOztBQWhEQTtFQTJDSSxtQkFBbUI7RUFDbkIscURBQUE7RUFDQSxtQkFBbUI7RUFDbkIsb0JBQWdCO0VBQVMseUJBQWE7RUFDdEMsa0JBQWM7RUFDZCwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBVXRCOztBQTNEQTtFQW1ESyxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0FBWWpCOztBQWxFQTtFQXdETSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixlQUFlO0FBY3JCOztBQXpFQTtFQTZETyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztBQWdCbEI7O0FBakZBO0VBc0VLLFdBQVc7QUFlaEI7O0FBckZBO0VBd0VNLGVBQWU7RUFDakIsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFpQnJCOztBQTVGQTtFQThFTSxlQUFlO0VBQ2YsY0FBYztBQWtCcEI7O0FBakdBO0VBbUZTLFdBQVc7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBQTtFQUNBLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixjQUFjO0FBa0JsQjs7QUE3R0E7RUE4RkssV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztBQW1CZDs7QUE3SEE7RUFnSE0sZ0JBQWdCO0FBaUJ0Qjs7QUFqSUE7RUFtSE0sZ0JBQWdCO0FBa0J0Qjs7QUFYQTtFQUFnQixjQUFjO0VBQzFCLGNBQWM7RUFDZCxtQkFBbUI7QUFldkI7O0FBYkE7RUFDRyxlQUFlO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7QUFnQnJCOztBQWRBO0VBQ0ksMEJBQTBCO0FBaUI5Qjs7QUFmQTtFQUNHLDBCQUEwQjtFQUN6Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtBQWtCL0I7O0FBakJDO0VBQ0csbUJBQW1CO0FBb0J2Qjs7QUFsQkE7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFxQnJCOztBQW5CQTtFQUNJLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsYUFBYTtBQXNCakI7O0FBcEJBO0VBQ08sY0FBYztFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUF1QnBCOztBQXJCQTtFQUNJLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGNBQWM7RUFDZixnQkFBZ0I7QUF3Qm5COztBQXRCQTtFQUNRLGNBQWM7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBeUJ2QiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuXHQuYm90dG0tY29udHMge1xyXG5cdFx0cGFkZGluZzogMHB4O1xyXG5cdH1cclxuXHRoNC50dGwtdHAge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG5cdH1cclxuXHQuY29udC1jYWxlZiB7XHJcblx0XHRwYWRkaW5nOiA1cHggMHB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjBweDtcclxuXHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHQudG9wLWljb25zIHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRcdFx0cGFkZGluZzogMHB4IDIwcHggMTBweDtcclxuXHRcdFx0Lmljb24tZnRzIHtcclxuXHRcdFx0XHR3aWR0aDogMzVweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDM1cHg7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI2JmYmZiZjtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogN3B4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTlweDtcclxuXHRcdFx0fVxyXG5cdFx0XHQuaWNvbi1zZWNyIHtcclxuXHRcdFx0XHR3aWR0aDogMzVweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDM1cHg7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI2JmYmZiZjtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTlweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aW9uLWxpc3QuZGlzcGx5LW1uZXMge1xyXG5cdFx0XHRwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblx0XHRcdGlvbi1pdGVtIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgLyogYm94LXNoYWRvdzogNXB4IDhweCAyMnB4IHJnYigxMDMgMTAzIDEwMyAvIDE4JSk7ICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7ICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDVweCAyMHB4IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuXHRcdFx0XHRpb24tYXZhdGFyICB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogM3B4O1xyXG5cdFx0XHRcdFx0d2lkdGg6IDQ1cHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDQ1cHg7XHJcblx0XHRcdFx0XHQuZ3J1cHNmIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDIwcHg7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3ZlcjtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDFweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpb24tbGFiZWwge1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0XHRoMiB7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRwIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogIzU0NTQ1NDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c3Bhbi5pY29uLWFyciB7XHJcblx0XHRcdFx0XHQgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogMjZweDtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIC8qIGJhY2tncm91bmQ6ICNiZmJmYmY7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6ICM4ZjhmOGY7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHNwYW4ubmVtYnJzIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxNXB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAxNXB4O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzkxOTE5MTtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcclxuXHRcdFx0XHRcdHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAycHg7XHJcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTVweDtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0dG9wOiAtMnB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpb24taXRlbS51bnJlYWQge1xyXG5cdFx0XHRcdGlvbi1sYWJlbCB7XHJcblx0XHRcdFx0XHRoMiB7XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRwIHtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuLmltZy1wcm9maWxlIHsgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG59XHJcbi5uYW1lIHtcclxuICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuLmVtYWlsIHtcclxuICAgIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jb250LWNhbGVmIC5zbWFsbC10eCB7XHJcbiAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM4ZjhmOGYgIWltcG9ydGFudDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG59LmltZy1wcm8ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uZW1haWwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM0MzQzNDM7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuLmltZy1wcm8gcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcbi5iYW5uZXItbGlzIGltZyB7XHJcbiAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxufVxyXG4ucmVzZXQtYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNGQ0ZDRkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMTRweCAxN3B4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2JmYmZiZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMjVweDtcclxuICAgIGNvbG9yOiAjYmZiZmJmO1xyXG4gICBtYXJnaW4tdG9wOiA1MnB4O1xyXG59XHJcbi5jb3B5cmlnaHQtdHh0IHtcclxuICAgICAgICBjb2xvcjogIzhmOGY4ZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDQycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gXHJcbn0iXX0= */");

/***/ }),

/***/ "v1cI":
/*!*********************************************!*\
  !*** ./src/app/profile-new/profile.page.ts ***!
  \*********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "LL96");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "Ru8V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/auth.service */ "8PDw");
/* harmony import */ var _core_pet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/pet.service */ "kSP7");
/* harmony import */ var _core_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/utility.service */ "ZtwD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let ProfilePage = class ProfilePage {
    constructor(petService, utility, auth, router) {
        this.petService = petService;
        this.utility = utility;
        this.auth = auth;
        this.router = router;
        this.profiletab = 'Basic';
        this.user_role = JSON.parse(localStorage.getItem('userObj')).role;
        console.log('contructor');
    }
    ionViewWillEnter() {
        //your methods
        console.log('entering');
    }
    ngOnInit() {
        this.utility.present();
        this.router.params.subscribe((res) => {
            console.log('working');
            this.getProfileData();
            this.getPets();
        });
        // this.getPets();
    }
    getPets() {
        this.petService.petGets().subscribe((res) => {
            console.log(res);
            this.pets = res;
        });
    }
    openPage(id) {
        this.utility.navigate('/add-edit-pet/' + id);
    }
    getProfileData() {
        let userid = JSON.parse(localStorage.getItem('userObj'))._id;
        this.auth.getProfile({ id: userid }).subscribe((res) => {
            console.log(res);
            this.profileData = res;
            this.utility.setLocal('userObj', JSON.stringify(res));
            this.utility.setSideMenuUserDetail();
            this.utility.dismiss();
        });
    }
    goBack() {
        this.utility.goBack();
    }
    logout() {
        localStorage.clear();
        this.utility.navigateRoot('/login');
    }
};
ProfilePage.ctorParameters = () => [
    { type: _core_pet_service__WEBPACK_IMPORTED_MODULE_5__["PetService"] },
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"] },
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-new-profile-module.js.map