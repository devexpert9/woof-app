(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscription-transactions-subscription-transactions-module"],{

/***/ "H9L3":
/*!***************************************************************************************!*\
  !*** ./src/app/subscription-transactions/subscription-transactions-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: SubscriptionTransactionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionTransactionsPageRoutingModule", function() { return SubscriptionTransactionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _subscription_transactions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscription-transactions.page */ "JNB0");




const routes = [
    {
        path: '',
        component: _subscription_transactions_page__WEBPACK_IMPORTED_MODULE_3__["SubscriptionTransactionsPage"]
    }
];
let SubscriptionTransactionsPageRoutingModule = class SubscriptionTransactionsPageRoutingModule {
};
SubscriptionTransactionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubscriptionTransactionsPageRoutingModule);



/***/ }),

/***/ "JNB0":
/*!*****************************************************************************!*\
  !*** ./src/app/subscription-transactions/subscription-transactions.page.ts ***!
  \*****************************************************************************/
/*! exports provided: SubscriptionTransactionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionTransactionsPage", function() { return SubscriptionTransactionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_subscription_transactions_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./subscription-transactions.page.html */ "hUwl");
/* harmony import */ var _subscription_transactions_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscription-transactions.page.scss */ "bkmU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SubscriptionTransactionsPage = class SubscriptionTransactionsPage {
    constructor() {
        this.profiletab = "Basic";
    }
    ngOnInit() {
    }
};
SubscriptionTransactionsPage.ctorParameters = () => [];
SubscriptionTransactionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-subscription-transactions',
        template: _raw_loader_subscription_transactions_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_subscription_transactions_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SubscriptionTransactionsPage);



/***/ }),

/***/ "bkmU":
/*!*******************************************************************************!*\
  !*** ./src/app/subscription-transactions/subscription-transactions.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .edit-c {\n  display: block;\n  text-align: right;\n  margin: 15px 0 15px;\n}\n\nion-content .edit-c .icon-rig {\n  width: 35px;\n  height: 35px;\n  background: #bfbfbf;\n  display: inline-block;\n  text-align: center;\n  line-height: 37px;\n  color: #fff;\n  border-radius: 50%;\n  margin-right: 5px;\n  font-size: 16px;\n}\n\nion-content .marg-nsg {\n  margin: 0 -5px;\n}\n\nion-content h4.cnter-ttl {\n  margin-top: -7px;\n  margin-bottom: 15px;\n  font-size: 17px;\n  color: #828282;\n  font-weight: bold;\n}\n\nion-content ion-segment {\n  background: transparent;\n  --background:transparent;\n  border-radius: 30px;\n  padding: 0px 22px;\n  margin-bottom: 20px;\n}\n\nion-content ion-segment ion-segment-button {\n  text-transform: capitalize;\n  min-height: 45px !important;\n  height: 45px !important;\n  font-size: 14px;\n  color: #6b6b6b;\n  font-weight: 500;\n  background: #f4f4f4;\n  border-radius: 50px;\n  --border-radius: 50px;\n  letter-spacing: 0px;\n  margin: 0 4px;\n}\n\nion-content ion-segment ion-segment-button.segment-button-checked {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  background: #bfbfbf;\n  border-radius: 50px;\n  --border-radius: 50px;\n  color: #fff;\n  --color-checked: #fff !important;\n  font-weight: 500;\n  box-shadow: none;\n  --box-shadow:none;\n  --indicator-box-shadow: none !important;\n}\n\n.bottm-conts {\n  padding: 0px 0px;\n  margin-top: 20px;\n}\n\n.des-box {\n  margin-bottom: 20px;\n  padding: 0 0px;\n}\n\n.des-box span {\n  font-size: 13px;\n  color: #6a6a6a;\n  font-weight: 700;\n}\n\n.des-box p {\n  margin: 0px;\n  font-size: 14px;\n  color: #b4b3b3;\n  line-height: 18px;\n  margin-top: 3px;\n}\n\nul.detils-box {\n  padding: 10px 15px;\n  background: #fff;\n  list-style: none;\n  margin: 0px;\n  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.12);\n  border-radius: 13px;\n  margin: 10px 0;\n  display: flex;\n  flex-wrap: wrap;\n}\n\nul.detils-box li {\n  flex: 0 0 50%;\n  width: 50%;\n  color: #a2a2a2;\n  font-size: 13px;\n  border-bottom: 1px dashed #cecece;\n  padding: 10px 0;\n  line-height: 18px;\n}\n\nul.detils-box li span {\n  font-size: 13px;\n  color: #6a6a6a;\n  font-weight: 700;\n  display: block;\n}\n\nul.detils-box li.w-100 {\n  flex: 0 0 100%;\n  width: 100%;\n}\n\n.top-img-pets {\n  padding: 0 25px;\n}\n\nh4.ttl-tp {\n  margin-right: 25px;\n}\n\n.pet-detsl {\n  padding: 0 20px;\n  display: block;\n  position: relative;\n}\n\n.cont-vox {\n  display: block;\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.cont-vox img {\n  width: 90px;\n  height: 90px;\n  object-fit: cover;\n  border-radius: 50%;\n  border: 1px solid #e1e1e1;\n}\n\n.cont-vox h4 {\n  margin: 0px;\n  font-size: 16px;\n  color: #000000;\n  font-weight: 600;\n  margin-top: 3px;\n  margin-bottom: 10px;\n}\n\n.cont-vox .btn-cns {\n  display: inline-block;\n  background: #bfbfbf;\n  padding: 9px 20px;\n  border-radius: 50px;\n  color: #fff;\n  text-decoration: none;\n  font-size: 14px;\n}\n\n.form-botm {\n  padding-top: 20px;\n}\n\nion-list.item-list-s {\n  margin-bottom: 20px;\n  margin-top: 0px;\n  padding: 10px 18px;\n}\n\nion-list.item-list-s ion-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.14);\n  margin-bottom: 15px;\n  padding: 15px 5px 15px 15px;\n  border-radius: 10px;\n}\n\nion-list.item-list-s ion-item ion-avatar {\n  width: 60px;\n  height: 60px;\n  margin-right: 15px;\n}\n\nion-list.item-list-s ion-item ion-label h2 {\n  font-size: 22px;\n  color: #000000;\n  font-weight: normal;\n}\n\nion-list.item-list-s ion-item ion-label h3 {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.65);\n  margin-top: 3px;\n}\n\nion-list.item-list-s ion-item .icon-rit {\n  background: #bfbfbf;\n  display: inline-block;\n  text-align: center;\n  line-height: 34px;\n  color: #fff;\n  border-radius: 5px;\n  margin-right: 0;\n  font-size: 15px;\n  padding: 0px 6px;\n}\n\nion-list.item-list-s ion-item:last-child {\n  border-bottom: none;\n}\n\n.sbsc-box {\n  display: block;\n  width: 150px;\n  min-height: 150px;\n  border: 1px solid #e1e1e1;\n  text-align: center;\n  border-radius: 30px;\n  background: #fff;\n  position: relative;\n  margin: 0 auto 20px;\n  z-index: 0;\n  margin-top: 20px;\n}\n\n.sbsc-box h3 {\n  font-size: 33px;\n  color: #4c4c4c;\n  margin-bottom: 0px;\n  margin-top: 14px;\n}\n\n.sbsc-box h5 {\n  font-size: 16px;\n  color: #4c4c4c;\n  margin-top: 3px;\n}\n\n.sbsc-box span.info-v {\n  font-size: 24px;\n  color: #9c9c9c;\n  margin-top: 5px;\n  display: inline-block;\n}\n\n.sbsc-box.selected {\n  border: 1px solid #a2a2a2;\n  overflow: hidden;\n  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.11);\n}\n\n.sbsc-box.selected h3 {\n  font-size: 36px;\n  margin-top: 34px;\n  font-weight: 600;\n  color: #bfbfbf;\n}\n\n.sbsc-box.selected h5 {\n  font-size: 17px;\n  color: #585858;\n  margin-bottom: 5px;\n}\n\n.sbsc-box.selected span.selct-check {\n  position: absolute;\n  background: #bfbfbf;\n  color: #fff;\n  width: 105px;\n  transform: rotate(41deg);\n  top: -25px;\n  padding: 6px;\n  font-size: 23px;\n  right: -41px;\n  padding-top: 34px;\n  padding-bottom: 0px;\n  padding-left: 15px;\n}\n\n.sbsc-box.selected span.selct-check ion-icon {\n  transform: rotate(-25deg);\n}\n\n.btn-cnt-r {\n  text-align: center;\n  padding-top: 20px;\n  display: block;\n}\n\n.btn-cnt-r .reset-btn {\n  display: inline-block;\n  font-size: 14px;\n  color: #fff;\n  text-decoration: none;\n  padding: 11px 40px;\n  border: 2px solid #bfbfbf;\n  border-radius: 50px;\n  font-weight: 500;\n  background: #bfbfbf;\n}\n\np.tct-sf {\n  text-align: center;\n  color: #696969;\n  font-size: 14px;\n  text-transform: uppercase;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN1YnNjcmlwdGlvbi10cmFuc2FjdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFBckI7O0FBSkE7RUFNRyxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0FBRWxCOztBQWpCQTtFQW1CRSxjQUFhO0FBRWY7O0FBckJBO0VBc0JFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7QUFHbkI7O0FBN0JBO0VBOEJFLHVCQUFzQjtFQUN0Qix3QkFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBR3JCOztBQXJDQTtFQXFDRywwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHFCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtBQUloQjs7QUFuREE7RUFrREkseUNBQWtCO0VBQ2xCLGlEQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHFCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0NBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGlCQUFhO0VBQ1osdUNBQXVCO0FBSzVCOztBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUdwQjs7QUFEQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBSWhCOztBQU5BO0VBSUcsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFNbkI7O0FBWkE7RUFTRyxXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7RUFDZCxp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Qjs7QUE1QkM7RUFDQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUErQmhCOztBQWxDQztFQUtFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBaUN0Qjs7QUE5QkM7RUFDQyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZix5QkFBeUI7QUFpQzNCIiwiZmlsZSI6InN1YnNjcmlwdGlvbi10cmFuc2FjdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG5cdC5lZGl0LWMge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRcdG1hcmdpbjogMTVweCAwIDE1cHg7XHJcblx0XHQuaWNvbi1yaWcge1xyXG5cdFx0XHR3aWR0aDogMzVweDtcclxuXHRcdFx0aGVpZ2h0OiAzNXB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDM3cHg7XHJcblx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogNXB4O1xyXG5cdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHR9XHJcblx0fSBcclxuXHQubWFyZy1uc2cge1xyXG5cdFx0bWFyZ2luOjAgLTVweDtcclxuXHR9XHJcblx0aDQuY250ZXItdHRsIHtcclxuXHRcdG1hcmdpbi10b3A6IC03cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cdFx0Zm9udC1zaXplOiAxN3B4O1xyXG5cdFx0Y29sb3I6ICM4MjgyODI7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblx0aW9uLXNlZ21lbnQgXHJcblx0XHR7XHJcblx0XHRiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG5cdFx0LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMzBweDtcclxuXHRcdHBhZGRpbmc6IDBweCAyMnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcdFxyXG5cdFx0aW9uLXNlZ21lbnQtYnV0dG9uXHJcblx0XHR7ICAgIFxyXG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHRcdFx0bWluLWhlaWdodDogNDVweCAhaW1wb3J0YW50O1xyXG5cdFx0XHRoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcclxuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRjb2xvcjogIzZiNmI2YjtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0YmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRcdFx0LS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdFx0XHRsZXR0ZXItc3BhY2luZzogMHB4O1xyXG5cdFx0XHRtYXJnaW46IDAgNHB4O1xyXG5cdFx0XHQmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWRcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI2JmYmZiZjtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdFx0XHRcdC0tYm9yZGVyLXJhZGl1czogNTBweDtcclxuXHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHQtLWNvbG9yLWNoZWNrZWQ6ICNmZmYgIWltcG9ydGFudDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6bm9uZTtcclxuXHRcdFx0XHQtLWJveC1zaGFkb3c6bm9uZTtcclxuXHRcdFx0XHQgLS1pbmRpY2F0b3ItYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVx0XHJcbn1cclxuLmJvdHRtLWNvbnRzIHtcclxuICAgIHBhZGRpbmc6IDBweCAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5kZXMtYm94IHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0XHRwYWRkaW5nOiAwIDBweDtcclxuXHRcdHNwYW4ge1xyXG5cdFx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRcdGNvbG9yOiAjNmE2YTZhO1xyXG5cdFx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0fVxyXG5cdFx0cCB7XHJcblx0XHRcdG1hcmdpbjogMHB4O1xyXG5cdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdGNvbG9yOiAjYjRiM2IzO1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMThweDtcclxuXHRcdFx0bWFyZ2luLXRvcDogM3B4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHR1bC5kZXRpbHMtYm94IHtcclxuXHRcdHBhZGRpbmc6IDEwcHggMTVweDtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRib3gtc2hhZG93OiAwcHggMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcblx0XHRtYXJnaW46IDEwcHggMDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRsaSB7XHJcblx0XHRcdGZsZXg6IDAgMCA1MCU7XHJcblx0XHRcdHdpZHRoOiA1MCU7XHJcblx0XHRcdGNvbG9yOiAjYTJhMmEyO1xyXG5cdFx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRcdGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NlY2VjZTtcclxuXHRcdFx0cGFkZGluZzogMTBweCAwO1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMThweDtcclxuXHRcdFx0c3BhbiB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0XHRcdGNvbG9yOiAjNmE2YTZhO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0bGkudy0xMDAge1xyXG5cdFx0XHRmbGV4OiAwIDAgMTAwJTtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHR9XHJcblx0fVxyXG4udG9wLWltZy1wZXRzIHtcclxuICAgIHBhZGRpbmc6IDAgMjVweDtcclxufVxyXG5oNC50dGwtdHAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG59XHJcbi5wZXQtZGV0c2wge1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jb250LXZveCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdGltZyB7XHJcblx0XHR3aWR0aDogOTBweDtcclxuXHRcdGhlaWdodDogOTBweDtcclxuXHRcdG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcclxuXHR9XHJcblx0aDQge1xyXG5cdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRtYXJnaW4tdG9wOiAzcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxuXHQuYnRuLWNucyB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRiYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG5cdFx0cGFkZGluZzogOXB4IDIwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0fVxyXG59XHJcbi5mb3JtLWJvdG0ge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuaW9uLWxpc3QuaXRlbS1saXN0LXMge1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0bWFyZ2luLXRvcDogMHB4O1xyXG5cdHBhZGRpbmc6IDEwcHggMThweDtcclxuXHRpb24taXRlbSB7XHJcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuXHRcdC0tcGFkZGluZy1lbmQ6IDBweDtcclxuXHRcdGJveC1zaGFkb3c6IDBweCAwcHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHRcdHBhZGRpbmc6IDE1cHggNXB4IDE1cHggMTVweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0XHRpb24tYXZhdGFyICB7XHJcblx0XHRcdHdpZHRoOiA2MHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDYwcHg7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMTVweDtcclxuXHRcdH1cclxuXHRcdGlvbi1sYWJlbCB7XHJcblx0XHRcdGgyIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDIycHg7XHJcblx0XHRcdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRoMyB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IDNweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Lmljb24tcml0IHtcclxuXHRcdFx0YmFja2dyb3VuZDogI2JmYmZiZjtcclxuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDA7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdFx0cGFkZGluZzogMHB4IDZweDtcclxuXHRcdH1cclxuXHRcdCY6bGFzdC1jaGlsZCB7XHJcblx0XHRcdGJvcmRlci1ib3R0b206IG5vbmU7XHRcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcbn1cclxuLnNic2MtYm94IHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0d2lkdGg6IDE1MHB4O1xyXG5cdFx0bWluLWhlaWdodDogMTUwcHg7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMzBweDtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRtYXJnaW46IDAgYXV0byAyMHB4O1xyXG5cdFx0ei1pbmRleDogMDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0XHRoMyB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMzNweDtcclxuXHRcdFx0Y29sb3I6ICM0YzRjNGM7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDBweDtcclxuXHRcdFx0bWFyZ2luLXRvcDogMTRweDtcclxuXHRcdH1cclxuXHRcdGg1IHtcclxuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRjb2xvcjogIzRjNGM0YztcclxuXHRcdFx0bWFyZ2luLXRvcDogM3B4O1xyXG5cdFx0fVxyXG5cdFx0c3Bhbi5pbmZvLXYge1xyXG5cdFx0XHRmb250LXNpemU6IDI0cHg7XHJcblx0XHRcdGNvbG9yOiAjOWM5YzljO1xyXG5cdFx0XHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdH1cclxuXHR9XHJcblx0LnNic2MtYm94LnNlbGVjdGVkIHtcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNhMmEyYTI7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0Ym94LXNoYWRvdzowcHggMHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjExKTtcclxuXHRcdGgzIHtcclxuXHRcdFx0Zm9udC1zaXplOiAzNnB4O1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAzNHB4O1xyXG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRjb2xvcjogI2JmYmZiZjtcclxuXHRcdH1cclxuXHRcdGg1IHtcclxuXHRcdFx0Zm9udC1zaXplOiAxN3B4O1xyXG5cdFx0XHRjb2xvcjogIzU4NTg1ODtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cdFx0fVxyXG5cdFx0c3Bhbi5zZWxjdC1jaGVjayB7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0YmFja2dyb3VuZDogI2JmYmZiZjtcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdHdpZHRoOiAxMDVweDtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoNDFkZWcpO1xyXG5cdFx0XHR0b3A6IC0yNXB4O1xyXG5cdFx0XHRwYWRkaW5nOiA2cHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjNweDtcclxuXHRcdFx0cmlnaHQ6IC00MXB4O1xyXG5cdFx0XHRwYWRkaW5nLXRvcDogMzRweDtcclxuXHRcdFx0cGFkZGluZy1ib3R0b206IDBweDtcclxuXHRcdFx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG5cdFx0XHRpb24taWNvbiB7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTI1ZGVnKTtcclxuXHRcdFx0fSBcclxuXHRcdH1cclxuXHR9XHJcblx0LmJ0bi1jbnQtciB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nLXRvcDogMjBweDtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0LnJlc2V0LWJ0biB7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRwYWRkaW5nOiAxMXB4IDQwcHg7XHJcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNiZmJmYmY7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcblx0XHR9XHJcblx0fVxyXG5cdHAudGN0LXNmIHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGNvbG9yOiAjNjk2OTY5O1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHR9Il19 */");

/***/ }),

/***/ "hUwl":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subscription-transactions/subscription-transactions.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>add-product</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n  <app-header [pageName]='\"Payments\"'></app-header>\r\n  <div class=\"bottm-conts\">\r\n    <!-- <h4 class=\"ttl-tp\">PAYMENTS</h4> -->\r\n\r\n    <div class=\"form-botm\">\r\n      <ion-segment [(ngModel)]=\"profiletab\">\r\n        <ion-segment-button value=\"Basic\"> TRANSACTIONS </ion-segment-button>\r\n        <ion-segment-button value=\"pwd\"> SUBSCRIPTIONS </ion-segment-button>\r\n      </ion-segment>\r\n      <div [ngSwitch]=\"profiletab\">\r\n        <ion-list *ngSwitchCase=\"'Basic'\">\r\n          <div class=\"des-box\">\r\n            <ion-list class=\"item-list-s\">\r\n              <ion-item lines=\"none\">\r\n                <ion-avatar slot=\"start\">\r\n                  <img src=\"assets/images/user11.jpg\" />\r\n                </ion-avatar>\r\n                <ion-label>\r\n                  <h2>Jolly Smith</h2>\r\n                  <h3>jollysm@gmail.com</h3>\r\n                </ion-label>\r\n                <span class=\"icon-rit\" slot=\"end\"> $20 </span>\r\n              </ion-item>\r\n              <ion-item lines=\"none\">\r\n                <ion-avatar slot=\"start\">\r\n                  <img src=\"assets/images/user1.jpg\" />\r\n                </ion-avatar>\r\n                <ion-label>\r\n                  <h2>Leeza</h2>\r\n                  <h3>jollysm@gmail.com</h3>\r\n                </ion-label>\r\n                <span class=\"icon-rit\" slot=\"end\"> $40 </span>\r\n              </ion-item>\r\n              <ion-item lines=\"none\">\r\n                <ion-avatar slot=\"start\">\r\n                  <img src=\"assets/images/user7.jpg\" />\r\n                </ion-avatar>\r\n                <ion-label>\r\n                  <h2>Adam Smith</h2>\r\n                  <h3>jollysm@gmail.com</h3>\r\n                </ion-label>\r\n                <span class=\"icon-rit\" slot=\"end\"> $10 </span>\r\n              </ion-item>\r\n            </ion-list>\r\n          </div>\r\n        </ion-list>\r\n        <ion-list *ngSwitchCase=\"'pwd'\">\r\n          <div class=\"pet-detsl\">\r\n            <ion-row>\r\n              <ion-col size=\"12\" size-md=\"4\">\r\n                <div class=\"sbsc-box selected\">\r\n                  <span class=\"selct-check\">\r\n                    <ion-icon name=\"checkmark-outline\"></ion-icon>\r\n                  </span>\r\n                  <h3>$15.99</h3>\r\n                  <h5>60 days</h5>\r\n                  <span class=\"info-v\">\r\n                    <ion-icon name=\"information-circle\"></ion-icon>\r\n                  </span>\r\n                </div>\r\n                <p class=\"tct-sf\">Active Plan</p>\r\n              </ion-col>\r\n            </ion-row>\r\n            <div class=\"btn-cnt-r\">\r\n              <a\r\n                href=\"javascript:void(0)\"\r\n                class=\"reset-btn\"\r\n                routerLink=\"/tabs/subscription\"\r\n              >\r\n                Buy Now\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "wAaV":
/*!*******************************************************************************!*\
  !*** ./src/app/subscription-transactions/subscription-transactions.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SubscriptionTransactionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionTransactionsPageModule", function() { return SubscriptionTransactionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _subscription_transactions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscription-transactions-routing.module */ "H9L3");
/* harmony import */ var _subscription_transactions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscription-transactions.page */ "JNB0");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");








let SubscriptionTransactionsPageModule = class SubscriptionTransactionsPageModule {
};
SubscriptionTransactionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _subscription_transactions_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubscriptionTransactionsPageRoutingModule"],
        ],
        declarations: [_subscription_transactions_page__WEBPACK_IMPORTED_MODULE_6__["SubscriptionTransactionsPage"]],
    })
], SubscriptionTransactionsPageModule);



/***/ })

}]);
//# sourceMappingURL=subscription-transactions-subscription-transactions-module.js.map