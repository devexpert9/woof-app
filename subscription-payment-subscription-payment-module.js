(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscription-payment-subscription-payment-module"],{

/***/ "2UFG":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subscription-payment/subscription-payment.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>adoptions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n  <!-- <div class=\"top-head bg-prple\">\r\n\t\t<img src=\"assets/images/logo4.png\" class=\"img-logo\">\r\n\t\t<span class=\"back-icon\" routerLink=\"/tabs/cart\"> <ion-icon name=\"chevron-back-outline\"></ion-icon> </span>\r\n\t</div> -->\r\n  <app-header [pageName]='\"Subscription-Payment\"'></app-header>\r\n  <div class=\"bottm-conts\">\r\n    <!-- <h4 class=\"ttl-tp txt-prple\"> Subscription payment  </h4> -->\r\n    <div class=\"cont-calef\">\r\n      <div class=\"choose-paymt\">\r\n        <h4 class=\"txr-st\">Choose Payment Method</h4>\r\n        <ion-radio-group value=\"biff\" class=\"list-ict\">\r\n          <ion-item lines=\"none\">\r\n            <ion-label\r\n              ><img src=\"assets/images/pay1.png\" /> Payment with\r\n              Paypal</ion-label\r\n            >\r\n            <ion-radio slot=\"end\" value=\"biff\"></ion-radio>\r\n          </ion-item>\r\n          <ion-item lines=\"none\">\r\n            <ion-label\r\n              ><img src=\"assets/images/pay2.png\" /> Credit Card</ion-label\r\n            >\r\n            <ion-radio slot=\"end\" value=\"buford\"></ion-radio>\r\n          </ion-item>\r\n          <!-- <ion-item lines=\"none\">\r\n            <ion-label><img src=\"assets/images/pay3.png\" /> MB WAY </ion-label>\r\n            <ion-radio slot=\"end\" value=\"buford2\"></ion-radio>\r\n          </ion-item> -->\r\n        </ion-radio-group>\r\n      </div>\r\n      <div class=\"form-botm\">\r\n        <div class=\"box-sttf\">\r\n          <h4 class=\"mrgin\">Price Details</h4>\r\n          <ul class=\"list-dets\">\r\n            <li class=\"prp-col\">\r\n              Premium Plan - 60 Days <span> $15.99 </span>\r\n            </li>\r\n            <li class=\"bodt-tod\">Total Price <span> $15.99 </span></li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"btn-cnt-r\">\r\n          <a href=\"javascript:void(0)\" class=\"reset-btn\" (click)=\"navigate()\">\r\n            Pay\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "6mwk":
/*!*********************************************************************!*\
  !*** ./src/app/subscription-payment/subscription-payment.module.ts ***!
  \*********************************************************************/
/*! exports provided: SubscriptionPaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPaymentPageModule", function() { return SubscriptionPaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _subscription_payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscription-payment-routing.module */ "TFXh");
/* harmony import */ var _subscription_payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscription-payment.page */ "QQOT");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");








let SubscriptionPaymentPageModule = class SubscriptionPaymentPageModule {
};
SubscriptionPaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _subscription_payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubscriptionPaymentPageRoutingModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_subscription_payment_page__WEBPACK_IMPORTED_MODULE_6__["SubscriptionPaymentPage"]],
    })
], SubscriptionPaymentPageModule);



/***/ }),

/***/ "8+2q":
/*!*********************************************************************!*\
  !*** ./src/app/subscription-payment/subscription-payment.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .bottm-conts {\n  padding: 0px;\n}\n\nion-content h4.ttl-tp {\n  margin-right: 25px;\n}\n\nion-content .cont-calef {\n  padding: 20px 20px;\n  margin-top: 20px;\n  display: block;\n}\n\nion-content .choose-paymt h4.txr-st {\n  margin-top: 0px;\n  font-size: 19px;\n  font-weight: 700;\n  color: #000;\n  letter-spacing: 0px;\n  margin-bottom: 15px;\n}\n\nion-content ion-radio-group.list-ict ion-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.14);\n  margin-bottom: 15px;\n  border-radius: 10px;\n  padding: 0 10px;\n}\n\nion-content ion-radio-group.list-ict ion-item ion-label {\n  font-size: 18px;\n  letter-spacing: 0px;\n  color: #000;\n  font-weight: 600;\n}\n\nion-content ion-radio-group.list-ict ion-item ion-label img {\n  vertical-align: middle;\n  height: 47px;\n  margin-right: 7px;\n}\n\nion-content ion-radio-group.list-ict ion-item ion-radio {\n  margin: 0px;\n  background: #fff;\n  width: 25px;\n  height: 25px;\n  border: 8px solid #d4d4d4;\n  border-radius: 50%;\n  --color-checked: transparent;\n  --color: transparent;\n}\n\nion-content ion-radio-group.list-ict ion-item ion-radio.radio-checked {\n  border: 8px solid #a194bb;\n}\n\nion-content .form-botm {\n  display: block;\n  margin-top: 20px;\n}\n\nion-content .btn-cnt-r {\n  text-align: center;\n  padding-top: 0px;\n  display: block;\n}\n\nion-content .btn-cnt-r .reset-btn {\n  display: inline-block;\n  font-size: 16px;\n  color: #b79cec;\n  text-decoration: none;\n  padding: 10px 60px;\n  border: 2px solid #d5c2fb;\n  border-radius: 50px;\n  font-weight: 600;\n}\n\nion-content .box-sttf {\n  margin-top: 25px;\n}\n\nion-content .box-sttf h4 {\n  margin-top: 0px;\n  font-size: 19px;\n  font-weight: 700;\n  color: #000;\n  letter-spacing: 0px;\n  display: block;\n}\n\nion-content .box-sttf h4 .right-ci {\n  float: right;\n  width: 35px;\n  height: 35px;\n  background: #a2a2a2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  margin-top: -5px;\n}\n\nion-content .box-sttf .ics-box {\n  border-bottom: 1px solid #a7a7a7;\n  padding-bottom: 14px;\n  margin-bottom: 12px;\n  position: relative;\n  font-size: 16px;\n  color: #000000;\n  line-height: 23px;\n}\n\nion-content .box-sttf .ics-box h3 {\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 6px;\n}\n\nion-content ul.list-dets {\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n  padding: 10px 15px;\n  background: #fff;\n  box-shadow: 0 0 18px rgba(0, 0, 0, 0.14);\n  border-radius: 10px;\n  margin: 10px 0px 20px;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 22px;\n  color: #000;\n}\n\nion-content ul.list-dets li span {\n  float: right;\n  font-weight: 700;\n}\n\nion-content ul.list-dets li.bodt-tod {\n  border-top: 1px solid #ececec;\n  padding-top: 4px;\n  margin-top: 6px;\n}\n\nion-content ul.list-dets li.prp-col {\n  color: #aa8ae9;\n}\n\nion-content ul.list-dets li.prp-col span {\n  color: #000;\n}\n\nion-content .main-boxs {\n  padding: 20px 15px;\n  background: #fff;\n  box-shadow: 0 0 18px rgba(0, 0, 0, 0.14);\n  border-radius: 10px;\n  margin: 20px 0px 20px;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n  color: #000;\n}\n\nion-content .main-boxs .ics-box:last-child {\n  border-bottom: 0px;\n  padding-bottom: 0px;\n  margin-bottom: 0px;\n}\n\nion-content .right-ci {\n  position: absolute;\n  right: 0;\n  top: -3px;\n  width: 35px;\n  height: 35px;\n  background: #a2a2a2;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 18px;\n}\n\nion-content span.rigt-aow {\n  float: right;\n  padding-right: 10px;\n  padding-top: 3px;\n}\n\nion-content h4.mrgin {\n  margin-top: 20px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN1YnNjcmlwdGlvbi1wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQVk7QUFBaEI7O0FBRkE7RUFLSSxrQkFBa0I7QUFDdEI7O0FBTkE7RUFRSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFFbEI7O0FBWkE7RUFjTSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUV6Qjs7QUFyQkE7RUF3Qk0sb0JBQWdCO0VBQ2hCLGtCQUFjO0VBQ2QsNENBQTRDO0VBQzVDLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNyQjs7QUE5QkE7RUErQlEsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0FBR3hCOztBQXJDQTtFQW9DVSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtBQUszQjs7QUEzQ0E7RUEwQ1EsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsNEJBQWdCO0VBQ2hCLG9CQUFRO0FBS2hCOztBQXREQTtFQW9EUSx5QkFBeUI7QUFNakM7O0FBMURBO0VBeURJLGNBQWM7RUFDZCxnQkFBZ0I7QUFLcEI7O0FBL0RBO0VBNkRJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztBQU1sQjs7QUFyRUE7RUFpRU0scUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQVF0Qjs7QUFoRkE7RUE0RUksZ0JBQWdCO0FBUXBCOztBQXBGQTtFQThFTSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGNBQWM7QUFVcEI7O0FBN0ZBO0VBcUZRLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtBQVl4Qjs7QUExR0E7RUFrR00sZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0FBWXZCOztBQXBIQTtFQTBHUSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFjMUI7O0FBM0hBO0VBa0hJLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsd0NBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsV0FBVztBQWFmOztBQTFJQTtFQWdJUSxZQUFZO0VBQ1osZ0JBQWdCO0FBY3hCOztBQS9JQTtFQXFJTSw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFjckI7O0FBckpBO0VBMElNLGNBQWM7QUFlcEI7O0FBekpBO0VBNElRLFdBQVc7QUFpQm5COztBQTdKQTtFQWlKSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHdDQUF3QztFQUN4QyxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFnQmY7O0FBektBO0VBNkpNLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBZ0J4Qjs7QUEvS0E7RUFtS0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxlQUFlO0FBZ0JuQjs7QUE5TEE7RUFpTEksWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFpQnBCOztBQXBNQTtFQXdMSSwyQkFBMkI7QUFnQi9CIiwiZmlsZSI6InN1YnNjcmlwdGlvbi1wYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAuYm90dG0tY29udHMge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuICBoNC50dGwtdHAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gIH1cclxuICAuY29udC1jYWxlZiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5jaG9vc2UtcGF5bXQge1xyXG4gICAgaDQudHhyLXN0IHtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24tcmFkaW8tZ3JvdXAubGlzdC1pY3Qge1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaW9uLXJhZGlvIHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBib3JkZXI6IDhweCBzb2xpZCAjZDRkNGQ0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIC0tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1yYWRpby5yYWRpby1jaGVja2VkIHtcclxuICAgICAgICBib3JkZXI6IDhweCBzb2xpZCAjYTE5NGJiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5mb3JtLWJvdG0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICAuYnRuLWNudC1yIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC5yZXNldC1idG4ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgY29sb3I6ICNiNzljZWM7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgcGFkZGluZzogMTBweCA2MHB4O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZDVjMmZiO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYm94LXN0dGYge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGg0IHtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgLnJpZ2h0LWNpIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNhMmEyYTI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaWNzLWJveCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTdhN2E3O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgaDMge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICB1bC5saXN0LWRldHMge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxOHB4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBsaSB7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsaS5ib2R0LXRvZCB7XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWNlY2VjO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICB9XHJcbiAgICBsaS5wcnAtY29sIHtcclxuICAgICAgY29sb3I6ICNhYThhZTk7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tYWluLWJveHMge1xyXG4gICAgcGFkZGluZzogMjBweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxOHB4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIC5tYWluLWJveHMge1xyXG4gICAgLmljcy1ib3g6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAucmlnaHQtY2kge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IC0zcHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJhY2tncm91bmQ6ICNhMmEyYTI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIHNwYW4ucmlndC1hb3cge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgfVxyXG4gIGg0LmNvc24ge1xyXG4gIH1cclxuICBoNC5tcmdpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi8vIHNwYW4uYmFjay1pY29uIHtcclxuLy8gXHRwYWRkaW5nOiAxNXB4O1xyXG4vLyBcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gXHRmb250LXNpemU6IDI1cHg7XHJcbi8vIFx0Y29sb3I6ICNmZmY7XHJcbi8vIFx0bWFyZ2luLXRvcDogMHB4O1xyXG4vLyB9XHJcbiJdfQ== */");

/***/ }),

/***/ "QQOT":
/*!*******************************************************************!*\
  !*** ./src/app/subscription-payment/subscription-payment.page.ts ***!
  \*******************************************************************/
/*! exports provided: SubscriptionPaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPaymentPage", function() { return SubscriptionPaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_subscription_payment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./subscription-payment.page.html */ "2UFG");
/* harmony import */ var _subscription_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscription-payment.page.scss */ "8+2q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/utility.service */ "ZtwD");





let SubscriptionPaymentPage = class SubscriptionPaymentPage {
    constructor(utility) {
        this.utility = utility;
    }
    ngOnInit() { }
    navigate() {
        let trail = this.utility.getLocal('trial');
        if (trail == '1') {
            this.utility.navigate('/tabs/home');
        }
        else {
            this.utility.navigate('/qr-code');
        }
    }
};
SubscriptionPaymentPage.ctorParameters = () => [
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"] }
];
SubscriptionPaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-subscription-payment',
        template: _raw_loader_subscription_payment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_subscription_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SubscriptionPaymentPage);



/***/ }),

/***/ "TFXh":
/*!*****************************************************************************!*\
  !*** ./src/app/subscription-payment/subscription-payment-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SubscriptionPaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPaymentPageRoutingModule", function() { return SubscriptionPaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _subscription_payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscription-payment.page */ "QQOT");




const routes = [
    {
        path: '',
        component: _subscription_payment_page__WEBPACK_IMPORTED_MODULE_3__["SubscriptionPaymentPage"]
    }
];
let SubscriptionPaymentPageRoutingModule = class SubscriptionPaymentPageRoutingModule {
};
SubscriptionPaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubscriptionPaymentPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=subscription-payment-subscription-payment-module.js.map