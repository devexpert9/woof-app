(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-settings-account-settings-module"],{

/***/ "Adv9":
/*!***********************************************************!*\
  !*** ./src/app/account-settings/account-settings.page.ts ***!
  \***********************************************************/
/*! exports provided: AccountSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsPage", function() { return AccountSettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_settings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account-settings.page.html */ "HwpE");
/* harmony import */ var _account_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-settings.page.scss */ "SNH0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AccountSettingsPage = class AccountSettingsPage {
    constructor() { }
    ngOnInit() {
    }
};
AccountSettingsPage.ctorParameters = () => [];
AccountSettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account-settings',
        template: _raw_loader_account_settings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AccountSettingsPage);



/***/ }),

/***/ "HwpE":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account-settings/account-settings.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>adoptions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n\t<app-header [pageName]='\"acc\"' [pn]='\"detail\"' app=\"serviceProvider\"></app-header>\r\n\t<div class=\"bottm-conts\">\r\n\t\t<h4 class=\"ttl-tp\"> Account Settings </h4>\r\n\t\t<div class=\"cont-calef\">\r\n\t\t\r\n\t\t\t<ion-list class=\"disply-mnes\">\r\n\t\t\t\t\r\n\t\t\t\t<ion-item lines=\"none\" detail=\"false\" class=\"unread\" routerLink=\"/edit-profile\">\r\n\t\t\t\t\r\n\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t<h2>Edit Profile </h2>\r\n\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t<span class=\"icon-arr\" slot=\"end\"> <ion-icon name=\"chevron-forward-outline\"></ion-icon> </span>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t<ion-item lines=\"none\" detail=\"false\" class=\"unread\" routerLink=\"/change-password\">\r\n\t\t\t\t\r\n\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t<h2>Change Password </h2>\r\n\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t<span class=\"icon-arr\" slot=\"end\"> <ion-icon name=\"chevron-forward-outline\"></ion-icon> </span>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t</ion-list> \r\n\t\t\t<a class=\"reset-btn\">Logout</a>\r\n\t\t\t<p class=\"copyright-txt\">© WoofCare 2021</p>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "SNH0":
/*!*************************************************************!*\
  !*** ./src/app/account-settings/account-settings.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .bottm-conts {\n  padding: 0px;\n}\n\nion-content h4.ttl-tp {\n  margin-right: 25px;\n}\n\nion-content .cont-calef {\n  padding: 5px 0px;\n  margin-top: 20px;\n  display: block;\n}\n\nion-content .cont-calef .top-icons {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0px 20px 10px;\n}\n\nion-content .cont-calef .top-icons .icon-fts {\n  width: 35px;\n  height: 35px;\n  background: #bfbfbf;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  margin-right: 7px;\n  font-size: 19px;\n}\n\nion-content .cont-calef .top-icons .icon-secr {\n  width: 35px;\n  height: 35px;\n  background: #bfbfbf;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 19px;\n}\n\nion-content .cont-calef ion-list.disply-mnes {\n  padding: 10px 20px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item {\n  background: #fff;\n  box-shadow: none;\n  margin-bottom: 12px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  padding: 10px 5px 10px 15px;\n  border-radius: 8px;\n  border: 2px solid #e4e4e478;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item ion-avatar {\n  margin: 0px;\n  margin-right: 15px;\n  width: 45px;\n  height: 45px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item ion-avatar .grupsf {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item ion-avatar .grupsf img {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin: 1px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item ion-label {\n  margin: 0px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item ion-label h2 {\n  font-size: 18px;\n  color: #000;\n  font-weight: 500;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item ion-label p {\n  font-size: 14px;\n  color: #545454;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item span.icon-arr {\n  margin: 0px;\n  width: 26px;\n  height: 26px;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #9e9e9e;\n  font-size: 24px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item span.nembrs {\n  width: 15px;\n  height: 15px;\n  background: #919191;\n  display: inline-block;\n  font-size: 10px;\n  vertical-align: text-bottom;\n  margin-left: 2px;\n  text-align: center;\n  line-height: 15px;\n  border-radius: 50%;\n  color: #fff;\n  position: relative;\n  top: -2px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item.unread ion-label h2 {\n  font-weight: 700;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item.unread ion-label p {\n  font-weight: 600;\n}\n\n.reset-btn {\n  display: inline-block;\n  font-size: 14px;\n  color: #4d4d4d;\n  text-decoration: none;\n  padding: 14px 17px;\n  border: 2px solid #bfbfbf;\n  border-radius: 50px;\n  font-weight: 400;\n  margin: 0 auto;\n  display: block;\n  text-align: center;\n  width: 125px;\n  color: #bfbfbf;\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 80px;\n}\n\n.copyright-txt {\n  color: #8f8f8f;\n  font-size: 12px;\n  text-align: center;\n  position: fixed;\n  bottom: 20px;\n  left: 0;\n  right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFjY291bnQtc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsWUFBWTtBQUFkOztBQUZBO0VBS0Usa0JBQWtCO0FBQ3BCOztBQU5BO0VBUUUsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFhO0FBRWY7O0FBWkE7RUFZRyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFJekI7O0FBbkJBO0VBaUJJLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7QUFNbkI7O0FBaENBO0VBNkJJLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQU9uQjs7QUE1Q0E7RUF5Q0csa0JBQWtCO0FBT3JCOztBQWhEQTtFQTJDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixvQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQVMvQjs7QUEzREE7RUFvREssV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQVdqQjs7QUFsRUE7RUF5RE0sYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZTtBQWFyQjs7QUF6RUE7RUE4RE8sV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFlbEI7O0FBakZBO0VBdUVLLFdBQVc7QUFjaEI7O0FBckZBO0VBeUVNLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0FBZ0J0Qjs7QUEzRkE7RUE4RU0sZUFBZTtFQUNmLGNBQWM7QUFpQnBCOztBQWhHQTtFQW1GSyxXQUFXO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0FBaUJuQjs7QUE3R0E7RUErRkssV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztBQWtCZDs7QUE3SEE7RUFpSE0sZ0JBQWdCO0FBZ0J0Qjs7QUFqSUE7RUFvSE0sZ0JBQWdCO0FBaUJ0Qjs7QUFWQztFQUNNLHFCQUFxQjtFQUN4QixlQUFlO0VBQ2YsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2YsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0FBYWhCOztBQVZBO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixPQUFPO0VBQ1AsUUFBUTtBQWFaIiwiZmlsZSI6ImFjY291bnQtc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG5cdC5ib3R0bS1jb250cyB7XHJcblx0XHRwYWRkaW5nOiAwcHg7XHJcblx0fVxyXG5cdGg0LnR0bC10cCB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcblx0fVxyXG5cdC5jb250LWNhbGVmIHtcclxuXHRcdHBhZGRpbmc6IDVweCAwcHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdC50b3AtaWNvbnMge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdFx0XHRwYWRkaW5nOiAwcHggMjBweCAxMHB4O1xyXG5cdFx0XHQuaWNvbi1mdHMge1xyXG5cdFx0XHRcdHdpZHRoOiAzNXB4O1xyXG5cdFx0XHRcdGhlaWdodDogMzVweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA3cHg7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxOXB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdC5pY29uLXNlY3Ige1xyXG5cdFx0XHRcdHdpZHRoOiAzNXB4O1xyXG5cdFx0XHRcdGhlaWdodDogMzVweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxOXB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpb24tbGlzdC5kaXNwbHktbW5lcyB7XHJcblx0XHRcdHBhZGRpbmc6IDEwcHggMjBweDtcclxuXHRcdFx0aW9uLWl0ZW0ge1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCA1cHggMTBweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2U0ZTRlNDc4O1xyXG5cdFx0XHRcdGlvbi1hdmF0YXIgIHtcclxuXHRcdFx0XHRcdG1hcmdpbjogMHB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG5cdFx0XHRcdFx0d2lkdGg6IDQ1cHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDQ1cHg7XHJcblx0XHRcdFx0XHQuZ3J1cHNmIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDIwcHg7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3ZlcjtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDFweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpb24tbGFiZWwge1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0XHRoMiB7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICMwMDA7XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRwIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogIzU0NTQ1NDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c3Bhbi5pY29uLWFyciB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDBweDtcclxuICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6ICM5ZTllOWU7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHNwYW4ubmVtYnJzIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxNXB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAxNXB4O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzkxOTE5MTtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcclxuXHRcdFx0XHRcdHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAycHg7XHJcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTVweDtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0dG9wOiAtMnB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpb24taXRlbS51bnJlYWQge1xyXG5cdFx0XHRcdGlvbi1sYWJlbCB7XHJcblx0XHRcdFx0XHRoMiB7XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRwIHtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIC5yZXNldC1idG4ge1xyXG4gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM0ZDRkNGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE3cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYmZiZmJmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgY29sb3I6ICNiZmJmYmY7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDgwcHg7XHJcblxyXG59XHJcbi5jb3B5cmlnaHQtdHh0IHtcclxuICAgIGNvbG9yOiAjOGY4ZjhmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG59Il19 */");

/***/ }),

/***/ "ktQK":
/*!*************************************************************!*\
  !*** ./src/app/account-settings/account-settings.module.ts ***!
  \*************************************************************/
/*! exports provided: AccountSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsPageModule", function() { return AccountSettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _account_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-settings-routing.module */ "mWxe");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");
/* harmony import */ var _account_settings_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account-settings.page */ "Adv9");








let AccountSettingsPageModule = class AccountSettingsPageModule {
};
AccountSettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _account_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountSettingsPageRoutingModule"]
        ],
        declarations: [_account_settings_page__WEBPACK_IMPORTED_MODULE_7__["AccountSettingsPage"]]
    })
], AccountSettingsPageModule);



/***/ }),

/***/ "mWxe":
/*!*********************************************************************!*\
  !*** ./src/app/account-settings/account-settings-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AccountSettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsPageRoutingModule", function() { return AccountSettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-settings.page */ "Adv9");




const routes = [
    {
        path: '',
        component: _account_settings_page__WEBPACK_IMPORTED_MODULE_3__["AccountSettingsPage"]
    }
];
let AccountSettingsPageRoutingModule = class AccountSettingsPageRoutingModule {
};
AccountSettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountSettingsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=account-settings-account-settings-module.js.map