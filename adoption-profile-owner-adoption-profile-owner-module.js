(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adoption-profile-owner-adoption-profile-owner-module"],{

/***/ "5EQl":
/*!*************************************************************************!*\
  !*** ./src/app/adoption-profile-owner/adoption-profile-owner.module.ts ***!
  \*************************************************************************/
/*! exports provided: AdoptionProfileOwnerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdoptionProfileOwnerPageModule", function() { return AdoptionProfileOwnerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _adoption_profile_owner_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adoption-profile-owner-routing.module */ "mnNW");
/* harmony import */ var _adoption_profile_owner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adoption-profile-owner.page */ "bEmW");







let AdoptionProfileOwnerPageModule = class AdoptionProfileOwnerPageModule {
};
AdoptionProfileOwnerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _adoption_profile_owner_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdoptionProfileOwnerPageRoutingModule"]
        ],
        declarations: [_adoption_profile_owner_page__WEBPACK_IMPORTED_MODULE_6__["AdoptionProfileOwnerPage"]]
    })
], AdoptionProfileOwnerPageModule);



/***/ }),

/***/ "bEmW":
/*!***********************************************************************!*\
  !*** ./src/app/adoption-profile-owner/adoption-profile-owner.page.ts ***!
  \***********************************************************************/
/*! exports provided: AdoptionProfileOwnerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdoptionProfileOwnerPage", function() { return AdoptionProfileOwnerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_adoption_profile_owner_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./adoption-profile-owner.page.html */ "myVw");
/* harmony import */ var _adoption_profile_owner_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adoption-profile-owner.page.scss */ "bdUc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AdoptionProfileOwnerPage = class AdoptionProfileOwnerPage {
    constructor() { }
    ngOnInit() {
    }
};
AdoptionProfileOwnerPage.ctorParameters = () => [];
AdoptionProfileOwnerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-adoption-profile-owner',
        template: _raw_loader_adoption_profile_owner_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_adoption_profile_owner_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdoptionProfileOwnerPage);



/***/ }),

/***/ "bdUc":
/*!*************************************************************************!*\
  !*** ./src/app/adoption-profile-owner/adoption-profile-owner.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .edit-c {\n  display: block;\n  text-align: right;\n  margin: 15px 0 15px;\n}\n\nion-content .edit-c .icon-rig {\n  width: 35px;\n  height: 35px;\n  background: #bfbfbf;\n  display: inline-block;\n  text-align: center;\n  line-height: 37px;\n  color: #fff;\n  border-radius: 50%;\n  margin-right: 5px;\n  font-size: 16px;\n}\n\nion-content ion-item.inpt-f {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  padding: 0px;\n  margin-bottom: 15px;\n}\n\nion-content ion-item.inpt-f ion-label {\n  font-size: 13.67px;\n  color: rgba(0, 0, 0, 0.55);\n  font-weight: 700;\n  margin-top: 0px;\n  height: 16px;\n  max-height: 16px;\n}\n\nion-content ion-item.inpt-f ion-input, ion-content ion-item.inpt-f ion-select {\n  border-bottom: 1px solid rgba(80, 160, 157, 0.3);\n  --padding-start: 0px;\n  --padding-top: 0px;\n  height: 33px;\n  --height: 33px;\n  max-height: 33px;\n  font-size: 16px;\n  font-weight: 600;\n  font-family: \"Lato\", sans-serif !important;\n  color: #000;\n  --padding-end: 0px;\n}\n\nion-content ion-item.inpt-f ion-select {\n  --padding-end: 10px;\n}\n\nion-content .marg-nsg {\n  margin: 0 -5px;\n}\n\nion-content h4.cnter-ttl {\n  margin-top: -7px;\n  margin-bottom: 15px;\n  font-size: 17px;\n  color: #828282;\n  font-weight: bold;\n}\n\nion-content .bt-trs {\n  display: block;\n  margin-top: -10px;\n}\n\nion-content .bt-trs ion-button.btn-save {\n  background: #bfbfbf;\n  --background: #bfbfbf;\n  border-radius: 50px;\n  color: #fff;\n  --padding-start: 35px;\n  box-shadow: none;\n  --box-shadow: none;\n  --padding-end: 35px;\n  height: 40px;\n  text-transform: capitalize;\n  font-size: 17px;\n  margin-right: 7px;\n}\n\nion-content .bt-trs ion-button.btn-cancl {\n  border-radius: 50px;\n  color: #8d8d8d;\n  --padding-start: 30px;\n  box-shadow: none;\n  --box-shadow: none;\n  --padding-end: 30px;\n  height: 40px;\n  text-transform: capitalize;\n  font-size: 17px;\n  border-color: #8d8d8d;\n  --border-color: #8d8d8d;\n}\n\nion-content ion-list.item-list-s {\n  margin-bottom: 20px;\n  margin-top: 10px;\n}\n\nion-content ion-list.item-list-s ion-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  padding-bottom: 7px;\n  padding-top: 7px;\n  border-bottom: 1px solid #bfbfbf;\n}\n\nion-content ion-list.item-list-s ion-item ion-avatar {\n  width: 75px;\n  height: 75px;\n  margin-right: 30px;\n}\n\nion-content ion-list.item-list-s ion-item ion-label h2 {\n  font-size: 21px;\n  color: #000000;\n  font-weight: normal;\n}\n\nion-content ion-list.item-list-s ion-item ion-label h3 {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.65);\n  margin-top: 3px;\n}\n\nion-content ion-list.item-list-s ion-item .icon-rit {\n  width: 33px;\n  height: 33px;\n  background: #bfbfbf;\n  display: inline-block;\n  text-align: center;\n  line-height: 35px;\n  color: #fff;\n  border-radius: 50%;\n  margin-right: 0;\n  font-size: 14px;\n}\n\nion-content ion-list.item-list-s ion-item:last-child {\n  border-bottom: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkb3B0aW9uLXByb2ZpbGUtb3duZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFBckI7O0FBSkE7RUFNRyxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0FBRWxCOztBQWpCQTtFQW1CRSxvQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0FBRXJCOztBQXhCQTtFQXdCRyxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixlQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtBQUluQjs7QUFqQ0E7RUFnQ0csZ0RBQWdEO0VBQ2hELG9CQUFnQjtFQUNoQixrQkFBYztFQUNkLFlBQVk7RUFDWixjQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMENBQTBDO0VBQzFDLFdBQVc7RUFDWCxrQkFBYztBQUtqQjs7QUEvQ0E7RUE2Q0csbUJBQWM7QUFNakI7O0FBbkRBO0VBaURFLGNBQWE7QUFNZjs7QUF2REE7RUFvREUsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtBQU9uQjs7QUEvREE7RUEyREUsY0FBYztFQUNkLGlCQUFpQjtBQVFuQjs7QUFwRUE7RUE4REcsbUJBQW1CO0VBQ25CLHFCQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxxQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFhO0VBQ2IsbUJBQWM7RUFDZCxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixpQkFBaUI7QUFVcEI7O0FBbkZBO0VBNEVHLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QscUJBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBYTtFQUNiLG1CQUFjO0VBQ2QsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHVCQUFlO0FBV2xCOztBQWpHQTtFQTBGRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBV2xCOztBQXRHQTtFQTZGRyxvQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztBQWFuQzs7QUE5R0E7RUFtR0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFldEI7O0FBcEhBO0VBeUdLLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0FBZXhCOztBQTFIQTtFQThHSyxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGVBQWU7QUFnQnBCOztBQWhJQTtFQW9ISSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0FBZ0JuQjs7QUE3SUE7RUFnSUksbUJBQW1CO0FBaUJ2QiIsImZpbGUiOiJhZG9wdGlvbi1wcm9maWxlLW93bmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuXHQuZWRpdC1jIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0XHRtYXJnaW46IDE1cHggMCAxNXB4O1xyXG5cdFx0Lmljb24tcmlnIHtcclxuXHRcdFx0d2lkdGg6IDM1cHg7XHJcblx0XHRcdGhlaWdodDogMzVweDtcclxuXHRcdFx0YmFja2dyb3VuZDogI2JmYmZiZjtcclxuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0fVxyXG5cdH0gXHJcblx0aW9uLWl0ZW0uaW5wdC1mIHtcclxuXHRcdC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG5cdFx0LS1wYWRkaW5nLWVuZDogMHB4O1xyXG5cdFx0cGFkZGluZzogMHB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHRcdGlvbi1sYWJlbCB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTMuNjdweDtcclxuXHRcdFx0Y29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NSk7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdG1hcmdpbi10b3A6MHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDE2cHg7XHJcblx0XHRcdG1heC1oZWlnaHQ6IDE2cHg7XHJcblx0XHR9XHJcblx0XHRpb24taW5wdXQsIGlvbi1zZWxlY3Qge1xyXG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg4MCwgMTYwLCAxNTcsIDAuMyk7XHJcblx0XHRcdC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG5cdFx0XHQtLXBhZGRpbmctdG9wOiAwcHg7XHJcblx0XHRcdGhlaWdodDogMzNweDtcclxuXHRcdFx0LS1oZWlnaHQ6IDMzcHg7XHJcblx0XHRcdG1heC1oZWlnaHQ6IDMzcHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0Zm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcblx0XHRcdGNvbG9yOiAjMDAwO1xyXG5cdFx0XHQtLXBhZGRpbmctZW5kOiAwcHg7XHJcblx0XHR9XHJcblx0XHRpb24tc2VsZWN0IHsgXHJcblx0XHRcdC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5tYXJnLW5zZyB7XHJcblx0XHRtYXJnaW46MCAtNXB4O1xyXG5cdH1cclxuXHRoNC5jbnRlci10dGwge1xyXG5cdFx0bWFyZ2luLXRvcDogLTdweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0XHRmb250LXNpemU6IDE3cHg7XHJcblx0XHRjb2xvcjogIzgyODI4MjtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHQuYnQtdHJzIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0bWFyZ2luLXRvcDogLTEwcHg7XHJcblx0XHRpb24tYnV0dG9uLmJ0bi1zYXZle1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG5cdFx0XHQtLWJhY2tncm91bmQ6ICNiZmJmYmY7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDM1cHg7XHJcblx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0XHRcdC0tYm94LXNoYWRvdzogbm9uZTtcclxuXHRcdFx0LS1wYWRkaW5nLWVuZDogMzVweDtcclxuXHRcdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHRcdFx0Zm9udC1zaXplOiAxN3B4O1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDdweDtcclxuXHRcdH1cclxuXHRcdGlvbi1idXR0b24uYnRuLWNhbmNsIHtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRcdFx0Y29sb3I6ICM4ZDhkOGQ7XHJcblx0XHRcdC0tcGFkZGluZy1zdGFydDogMzBweDtcclxuXHRcdFx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHRcdFx0LS1ib3gtc2hhZG93OiBub25lO1xyXG5cdFx0XHQtLXBhZGRpbmctZW5kOiAzMHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cdFx0XHRmb250LXNpemU6IDE3cHg7XHJcblx0XHRcdGJvcmRlci1jb2xvcjogIzhkOGQ4ZDtcclxuXHRcdFx0LS1ib3JkZXItY29sb3I6ICM4ZDhkOGQ7XHJcblx0XHR9XHJcblx0fVxyXG5cdGlvbi1saXN0Lml0ZW0tbGlzdC1zIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdFx0aW9uLWl0ZW0ge1xyXG5cdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuXHRcdFx0LS1wYWRkaW5nLWVuZDogMHB4O1xyXG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG5cdFx0XHRwYWRkaW5nLXRvcDogN3B4O1xyXG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JmYmZiZjtcclxuXHRcdFx0aW9uLWF2YXRhciAge1xyXG5cdFx0XHRcdHdpZHRoOiA3NXB4O1xyXG5cdFx0XHRcdGhlaWdodDogNzVweDtcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0aW9uLWxhYmVsIHtcclxuXHRcdFx0XHRoMiB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDIxcHg7XHJcblx0XHRcdFx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGgzIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRcdGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogM3B4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQuaWNvbi1yaXQge1xyXG5cdFx0XHRcdHdpZHRoOiAzM3B4O1xyXG5cdFx0XHRcdGhlaWdodDogMzNweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDM1cHg7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMDtcclxuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0JjpsYXN0LWNoaWxkIHtcclxuXHRcdFx0XHRib3JkZXItYm90dG9tOiBub25lO1x0XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxufSJdfQ== */");

/***/ }),

/***/ "mnNW":
/*!*********************************************************************************!*\
  !*** ./src/app/adoption-profile-owner/adoption-profile-owner-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AdoptionProfileOwnerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdoptionProfileOwnerPageRoutingModule", function() { return AdoptionProfileOwnerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _adoption_profile_owner_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adoption-profile-owner.page */ "bEmW");




const routes = [
    {
        path: '',
        component: _adoption_profile_owner_page__WEBPACK_IMPORTED_MODULE_3__["AdoptionProfileOwnerPage"]
    }
];
let AdoptionProfileOwnerPageRoutingModule = class AdoptionProfileOwnerPageRoutingModule {
};
AdoptionProfileOwnerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdoptionProfileOwnerPageRoutingModule);



/***/ }),

/***/ "myVw":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adoption-profile-owner/adoption-profile-owner.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>add-product</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n\t<div class=\"top-head\">\r\n\t\t<img src=\"assets/images/logo1.png\" class=\"img-logo\">\r\n\t</div>\r\n\t<div class=\"bottm-conts\">\r\n\t\t<h4 class=\"ttl-tp\"> PET OWNER PROFILE </h4>\r\n\t\t<div class=\"top-img-pets\">\r\n\t\t\t<ion-list class=\"item-list-s\">\r\n\t\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t  <ion-avatar slot=\"start\">\r\n\t\t\t\t\t<img src=\"assets/images/user1.jpg\">\r\n\t\t\t\t  </ion-avatar>\r\n\t\t\t\t  <ion-label>\r\n\t\t\t\t\t<h2>Jolly Smith</h2>\r\n\t\t\t\t\t<h3>jollysm@gmail.com</h3>\r\n\t\t\t\t  </ion-label>\r\n\t\t\t\t  <a href=\"javascript:void(0)\" class=\"icon-rit\" slot=\"end\"> <ion-icon name=\"pencil-sharp\"></ion-icon>  </a>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t  <ion-avatar slot=\"start\">\r\n\t\t\t\t\t<img src=\"assets/images/pet1.jpg\">\r\n\t\t\t\t  </ion-avatar>\r\n\t\t\t\t  <ion-label>\r\n\t\t\t\t\t<h2>DabourRock</h2>\r\n\t\t\t\t\t<h3>Dog</h3>\r\n\t\t\t\t  </ion-label>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</ion-list>\r\n\t\t\t\r\n\t\t</div>\r\n\t\t<div class=\"form-botm\">\r\n\t\t\t<ion-item lines=\"none\" class=\"inpt-f\">\r\n\t\t\t  <ion-label position=\"stacked\">Name</ion-label>\r\n\t\t\t  <ion-input placeholder=\"\" value=\"Jolly\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item lines=\"none\" class=\"inpt-f\">\r\n\t\t\t  <ion-label position=\"stacked\">Email</ion-label>\r\n\t\t\t  <ion-input placeholder=\"\" value=\"jlly@gmail.com\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item lines=\"none\" class=\"inpt-f\">\r\n\t\t\t  <ion-label position=\"stacked\">Phone Number</ion-label>\r\n\t\t\t  <ion-input placeholder=\"\" value=\"989-3847-8329\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\t<div class=\"bt-trs\">\r\n\t\t\t\t<ion-button  shape=\"round\" class=\"btn-save\">Save</ion-button>\r\n\t\t\t\t<ion-button  shape=\"round\" fill=\"outline\" class=\"btn-cancl\">Cancel</ion-button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=adoption-profile-owner-adoption-profile-owner-module.js.map