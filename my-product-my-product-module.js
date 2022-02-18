(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-product-my-product-module"],{

/***/ "A/il":
/*!*************************************************!*\
  !*** ./src/app/my-product/my-product.module.ts ***!
  \*************************************************/
/*! exports provided: MyProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProductPageModule", function() { return MyProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _my_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-product-routing.module */ "ibPY");
/* harmony import */ var _my_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-product.page */ "Y7N6");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");








let MyProductPageModule = class MyProductPageModule {
};
MyProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _my_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyProductPageRoutingModule"],
        ],
        declarations: [_my_product_page__WEBPACK_IMPORTED_MODULE_6__["MyProductPage"]],
    })
], MyProductPageModule);



/***/ }),

/***/ "MwAm":
/*!*************************************************!*\
  !*** ./src/app/my-product/my-product.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .bottm-conts {\n  padding: 0px;\n}\n\nion-content h4.ttl-tp {\n  margin-right: 25px;\n}\n\nion-content .cont-calef {\n  padding: 20px 0px;\n  margin-top: 20px;\n  display: block;\n}\n\nion-content .top-search-s {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  background: #f7f7f7;\n  border: 1px solid #e8e8e8;\n  position: relative;\n  border-radius: 7px;\n  min-height: 52px;\n  margin: 25px 0 15px;\n  padding: 0px 10px;\n}\n\nion-content .top-search-s span.icos-f {\n  font-size: 25px;\n  color: #a2a2a2;\n  margin-right: 8px;\n  margin-top: 5px;\n}\n\nion-content .top-search-s ion-input {\n  font-size: 19px;\n  color: #302f2f;\n  --placeholder-color: #302f2f;\n  --placeholder-opacity: 1;\n  font-weight: 500;\n  padding: 0px;\n}\n\nion-content .select-rigt {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nion-content .select-rigt ion-select {\n  background: #bfbfbf;\n  color: #fff;\n  --placeholder-color: #fff;\n  --placeholder-opacity: 1;\n  border-radius: 50px;\n  font-weight: 600;\n  font-size: 16px;\n  padding: 9px 22px;\n}\n\nion-content .select-rigt h4 {\n  margin: 0px;\n  font-size: 18px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\nion-content .pos-rel {\n  padding: 0 20px;\n}\n\nion-content .list-afs {\n  display: block;\n  margin-top: 20px;\n}\n\nion-content ion-row.mn-5 {\n  margin: 0 -5px;\n}\n\nion-content ion-row.mn-5 ion-col {\n  padding: 0 7px;\n}\n\nion-content ion-row.mn-5 .box-sect {\n  background: #fff;\n  padding: 10px;\n  border-radius: 15px;\n  box-shadow: 0 0 16px rgba(0, 0, 0, 0.11);\n  margin-bottom: 15px;\n}\n\nion-content ion-row.mn-5 .box-sect img.prd-img {\n  width: 100%;\n  height: 75px;\n  object-fit: contain;\n  border: 1px solid #f0f0f0;\n  border-radius: 10px;\n}\n\nion-content ion-row.mn-5 .box-sect h4 {\n  margin: 0px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #676767;\n  margin-top: 8px;\n}\n\nion-content ion-row.mn-5 .box-sect p {\n  margin: 0px;\n  font-size: 15px;\n  color: #313131;\n  margin-top: 3px;\n  font-weight: 500;\n}\n\nion-content ion-row.mn-5 .box-sect p span {\n  font-size: 13px;\n  font-weight: 700;\n  display: inline-block;\n  color: #4e4e4e;\n  margin-left: 3px;\n}\n\nion-content ion-row.mn-5 .box-sect p span.rit-s {\n  float: right;\n  color: #343434;\n}\n\nion-content ion-row.mn-5 .box-sect .post_by {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-top: 4px;\n  margin-bottom: 3px;\n}\n\nion-content ion-row.mn-5 .box-sect .post_by p {\n  font-size: 13px;\n  color: #313131;\n  margin: 0px;\n  font-weight: 700;\n}\n\nion-content ion-row.mn-5 .box-sect .post_by img {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  margin-left: 4px;\n  object-fit: cover;\n}\n\nion-content .categr-st h4.catre-ttl {\n  margin: 0px;\n  font-size: 18px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\nion-content .categr-st ul.cate-boxs {\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n  margin: 15px 0 40px;\n  display: block;\n  white-space: nowrap;\n  overflow: auto;\n  margin-right: -20px;\n}\n\nion-content .categr-st ul.cate-boxs li {\n  display: inline-block;\n  margin-right: 12px;\n  text-align: center;\n}\n\nion-content .categr-st ul.cate-boxs li span.img-txt {\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f5999c;\n  border-radius: 50%;\n  font-size: 30px;\n  color: #fff;\n  font-weight: 700;\n  text-transform: capitalize;\n  box-shadow: 0px 5px 9px rgba(0, 0, 0, 0.14);\n  margin: 0 auto;\n  margin-bottom: 10px;\n}\n\nion-content .categr-st ul.cate-boxs li span.img-txt img {\n  height: 27px;\n  width: auto;\n}\n\nion-content .categr-st ul.cate-boxs li h4 {\n  margin: 0px;\n  text-align: center;\n  font-size: 15px;\n  color: #080808;\n  font-weight: 600;\n  letter-spacing: 0px;\n}\n\nion-content .categr-st ul.cate-boxs li:nth-child(2n) span.img-txt {\n  background: #b8ffa3;\n}\n\nion-content .categr-st ul.cate-boxs li:nth-child(3n) span.img-txt {\n  background: #be9ffc;\n}\n\nion-content .categr-st ul.cate-boxs li:nth-child(4n) span.img-txt {\n  background: #a6f9ff;\n}\n\nion-content .categr-st ul.cate-boxs li:nth-child(5n) span.img-txt {\n  background: #ffc198;\n}\n\nion-content .fixed-btn-bi {\n  position: fixed;\n  bottom: 25px;\n  right: 25px;\n  width: 56px;\n  height: 56px;\n  background: #bfbfbf;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n  border-radius: 50%;\n  color: #fff;\n  box-shadow: 2px 3px 9px rgba(0, 0, 0, 0.14);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG15LXByb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBWTtBQUFoQjs7QUFGQTtFQUtJLGtCQUFrQjtBQUN0Qjs7QUFOQTtFQVFJLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztBQUVsQjs7QUFaQTtFQWNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUVyQjs7QUF6QkE7RUF5Qk0sZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtBQUlyQjs7QUFoQ0E7RUErQk0sZUFBZTtFQUNmLGNBQWM7RUFDZCw0QkFBb0I7RUFDcEIsd0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixZQUFZO0FBS2xCOztBQXpDQTtFQXdDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUtsQzs7QUEvQ0E7RUE0Q00sbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx5QkFBb0I7RUFDcEIsd0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtBQU92Qjs7QUExREE7RUFzRE0sV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBUS9COztBQWpFQTtFQTZESSxlQUFlO0FBUW5COztBQXJFQTtFQWdFSSxjQUFjO0VBQ2QsZ0JBQWdCO0FBU3BCOztBQTFFQTtFQW9FSSxjQUFjO0FBVWxCOztBQTlFQTtFQXNFTSxjQUFjO0FBWXBCOztBQWxGQTtFQXlFTSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsbUJBQW1CO0FBYXpCOztBQTFGQTtFQStFUSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBZTNCOztBQWxHQTtFQXNGUSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtBQWdCdkI7O0FBMUdBO0VBNkZRLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFpQnhCOztBQWxIQTtFQW1HVSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0JBQWdCO0FBbUIxQjs7QUExSEE7RUEwR1UsWUFBWTtFQUNaLGNBQWM7QUFvQnhCOztBQS9IQTtFQStHUSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2Ysa0JBQWtCO0FBb0IxQjs7QUF2SUE7RUFxSFUsZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0FBc0IxQjs7QUE5SUE7RUEySFUsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQXVCM0I7O0FBdEpBO0VBc0lNLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQW9CL0I7O0FBN0pBO0VBNElNLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxtQkFBbUI7QUFxQnpCOztBQXhLQTtFQXFKUSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQXVCMUI7O0FBOUtBO0VBeUpVLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsMkNBQTJDO0VBQzNDLGNBQWM7RUFDZCxtQkFBbUI7QUF5QjdCOztBQS9MQTtFQXdLWSxZQUFZO0VBQ1osV0FBVztBQTJCdkI7O0FBcE1BO0VBNktVLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBMkI3Qjs7QUE3TUE7RUFzTFksbUJBQW1CO0FBMkIvQjs7QUFqTkE7RUEyTFksbUJBQW1CO0FBMEIvQjs7QUFyTkE7RUFnTVksbUJBQW1CO0FBeUIvQjs7QUF6TkE7RUFxTVksbUJBQW1CO0FBd0IvQjs7QUE3TkE7RUE0TUksZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsMkNBQTJDO0FBcUIvQyIsImZpbGUiOiJteS1wcm9kdWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAuYm90dG0tY29udHMge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuICBoNC50dGwtdHAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gIH1cclxuICAuY29udC1jYWxlZiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC50b3Atc2VhcmNoLXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIG1pbi1oZWlnaHQ6IDUycHg7XHJcbiAgICBtYXJnaW46IDI1cHggMCAxNXB4O1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBzcGFuLmljb3MtZiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgY29sb3I6ICNhMmEyYTI7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB9XHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgIGNvbG9yOiAjMzAyZjJmO1xyXG4gICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMzAyZjJmO1xyXG4gICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnNlbGVjdC1yaWd0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaW9uLXNlbGVjdCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjZmZmO1xyXG4gICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgcGFkZGluZzogOXB4IDIycHg7XHJcbiAgICB9XHJcbiAgICBoNCB7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wb3MtcmVsIHtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICB9XHJcbiAgLmxpc3QtYWZzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgaW9uLXJvdy5tbi01IHtcclxuICAgIG1hcmdpbjogMCAtNXB4O1xyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgIHBhZGRpbmc6IDAgN3B4O1xyXG4gICAgfVxyXG4gICAgLmJveC1zZWN0IHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDE2cHggcmdiYSgwLCAwLCAwLCAwLjExKTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgaW1nLnByZC1pbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgfVxyXG4gICAgICBoNCB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICM2NzY3Njc7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBjb2xvcjogIzMxMzEzMTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBjb2xvcjogIzRlNGU0ZTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ucml0LXMge1xyXG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgY29sb3I6ICMzNDM0MzQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5wb3N0X2J5IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICBjb2xvcjogIzMxMzEzMTtcclxuICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuY2F0ZWdyLXN0IHtcclxuICAgIGg0LmNhdHJlLXR0bCB7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgICB1bC5jYXRlLWJveHMge1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBtYXJnaW46IDE1cHggMCA0MHB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBzcGFuLmltZy10eHQge1xyXG4gICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y1OTk5YztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCA5cHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjdweDtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgY29sb3I6ICMwODA4MDg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpudGgtY2hpbGQoMm4pIHtcclxuICAgICAgICAgIHNwYW4uaW1nLXR4dCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiOGZmYTM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bnRoLWNoaWxkKDNuKSB7XHJcbiAgICAgICAgICBzcGFuLmltZy10eHQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmU5ZmZjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOm50aC1jaGlsZCg0bikge1xyXG4gICAgICAgICAgc3Bhbi5pbWctdHh0IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2E2ZjlmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjpudGgtY2hpbGQoNW4pIHtcclxuICAgICAgICAgIHNwYW4uaW1nLXR4dCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmMxOTg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5maXhlZC1idG4tYmkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAyNXB4O1xyXG4gICAgcmlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogNTZweDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAycHggM3B4IDlweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "Wy/E":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-product/my-product.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>adoptions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n  <app-header [pageName]='\"My Products\"'></app-header>\r\n  <div class=\"bottm-conts\">\r\n    <!-- <h4 class=\"ttl-tp\">My Products</h4> -->\r\n    <div class=\"tabs-cotsf\">\r\n      <div class=\"pos-rel\">\r\n        <div class=\"list-afs\">\r\n          <ion-row class=\"mn-5\">\r\n            <ion-col\r\n              size=\"6\"\r\n              *ngFor=\"let p of products\"\r\n              (click)=\"openEditProduct(p._id)\"\r\n            >\r\n              <div class=\"box-sect\">\r\n                <img [src]=\"p?.imageUrls[0]\" class=\"prd-img\" />\r\n                <h4>{{p?.name}}</h4>\r\n                <p>\r\n                  Price <span> ${{p?.price}}</span>\r\n                  <span class=\"rit-s\"> {{'Food'}} </span>\r\n                </p>\r\n                <div class=\"post_by\">\r\n                  <p>{{p?.description}}</p>\r\n                </div>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <a\r\n    href=\"javascript:void(0)\"\r\n    class=\"fixed-btn-bi\"\r\n    routerLink=\"/tabs/add-product\"\r\n  >\r\n    <ion-icon name=\"add-outline\"></ion-icon>\r\n  </a>\r\n</ion-content>\r\n");

/***/ }),

/***/ "Y7N6":
/*!***********************************************!*\
  !*** ./src/app/my-product/my-product.page.ts ***!
  \***********************************************/
/*! exports provided: MyProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProductPage", function() { return MyProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_my_product_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./my-product.page.html */ "Wy/E");
/* harmony import */ var _my_product_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-product.page.scss */ "MwAm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_market_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/market.service */ "rAh5");
/* harmony import */ var _core_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/utility.service */ "ZtwD");







let MyProductPage = class MyProductPage {
    constructor(utility, marketService, activatedRoute) {
        this.utility = utility;
        this.marketService = marketService;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((res) => {
            console.log('working');
            this.getProducts();
        });
    }
    getProducts() {
        this.marketService.getUserProducts().subscribe((res) => {
            this.products = res;
            console.log(this.products);
        });
    }
    openEditProduct(id) {
        this.utility.navigate('/tabs/add-product/' + id);
    }
};
MyProductPage.ctorParameters = () => [
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"] },
    { type: _core_market_service__WEBPACK_IMPORTED_MODULE_5__["MarketService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
MyProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-product',
        template: _raw_loader_my_product_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_product_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MyProductPage);



/***/ }),

/***/ "ibPY":
/*!*********************************************************!*\
  !*** ./src/app/my-product/my-product-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MyProductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProductPageRoutingModule", function() { return MyProductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-product.page */ "Y7N6");




const routes = [
    {
        path: '',
        component: _my_product_page__WEBPACK_IMPORTED_MODULE_3__["MyProductPage"],
    },
];
let MyProductPageRoutingModule = class MyProductPageRoutingModule {
};
MyProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyProductPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=my-product-my-product-module.js.map