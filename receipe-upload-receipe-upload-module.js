(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["receipe-upload-receipe-upload-module"],{

/***/ "7NdV":
/*!*****************************************************************!*\
  !*** ./src/app/receipe-upload/receipe-upload-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ReceipeUploadPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceipeUploadPageRoutingModule", function() { return ReceipeUploadPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _receipe_upload_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./receipe-upload.page */ "lRQ9");




const routes = [
    {
        path: '',
        component: _receipe_upload_page__WEBPACK_IMPORTED_MODULE_3__["ReceipeUploadPage"]
    }
];
let ReceipeUploadPageRoutingModule = class ReceipeUploadPageRoutingModule {
};
ReceipeUploadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReceipeUploadPageRoutingModule);



/***/ }),

/***/ "Ao94":
/*!*********************************************************!*\
  !*** ./src/app/receipe-upload/receipe-upload.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .edit-c {\n  display: block;\n  text-align: right;\n  margin: 15px 0 15px;\n}\n\nion-content .edit-c .icon-rig {\n  width: 35px;\n  height: 35px;\n  background: #bfbfbf;\n  display: inline-block;\n  text-align: center;\n  line-height: 37px;\n  color: #fff;\n  border-radius: 50%;\n  margin-right: 5px;\n  font-size: 16px;\n}\n\nion-content ion-item.inpt-f {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  padding: 0px;\n  margin-bottom: 15px;\n}\n\nion-content ion-item.inpt-f ion-label {\n  font-size: 12px;\n  color: rgba(100, 100, 100, 0.62);\n  font-weight: 700;\n  margin-top: 0px;\n  height: 16px;\n  max-height: 16px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\nion-content ion-item.inpt-f ion-input, ion-content ion-item.inpt-f ion-select, ion-content ion-item.inpt-f ion-datetime, ion-content ion-item.inpt-f ion-textarea {\n  border-bottom: 1px solid #adadad;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  height: 33px;\n  --height: 33px;\n  max-height: 33px;\n  font-size: 18px;\n  color: black;\n  --padding-end: 0px;\n}\n\nion-content ion-item.inpt-f ion-textarea {\n  height: auto;\n  --height: auto;\n  max-height: 100%;\n}\n\nion-content ion-item.inpt-f ion-select {\n  --padding-end: 10px;\n}\n\nion-content .marg-nsg {\n  margin: 0 -5px;\n}\n\nion-content h4.cnter-ttl {\n  margin-top: -7px;\n  margin-bottom: 15px;\n  font-size: 17px;\n  color: #828282;\n  font-weight: bold;\n}\n\nion-content .bt-trs {\n  display: block;\n  text-align: center;\n  margin-top: -7px;\n}\n\nion-content .bt-trs ion-button.btn-save {\n  background: #bfbfbf;\n  --background: #bfbfbf;\n  border-radius: 50px;\n  color: #fff;\n  --padding-start: 35px;\n  box-shadow: none;\n  --box-shadow: none;\n  --padding-end: 35px;\n  height: 38px;\n  text-transform: capitalize;\n  font-size: 17px;\n  margin-right: 7px;\n}\n\nion-content .bt-trs ion-button.btn-cancl {\n  border-radius: 50px;\n  color: #4d4d4d;\n  --padding-start: 40px;\n  box-shadow: none;\n  --box-shadow: none;\n  --padding-end: 40px;\n  height: 40px;\n  text-transform: capitalize;\n  font-size: 17px;\n  border-color: #9c9c9c;\n  --border-color: #9c9c9c;\n}\n\nion-content .bottm-conts {\n  padding: 20px 20px;\n}\n\nion-content label.uplos-imgs {\n  display: block;\n  border: 2px dashed #616161;\n  width: 100%;\n  text-align: center;\n  padding: 30px 0;\n  border-radius: 4px;\n  font-size: 13px;\n  color: #949494;\n  font-weight: 600;\n}\n\nion-content ion-item.lis-snrt {\n  --padding-start: 0px;\n  margin-top: -10px;\n  margin-bottom: 15px;\n  --padding-end: 0px;\n}\n\nion-content ion-item.lis-snrt ion-checkbox {\n  margin-right: 8px;\n}\n\nion-content ion-item.lis-snrt ion-label {\n  font-size: 18px;\n  color: #000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlY2VpcGUtdXBsb2FkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQXJCOztBQUpBO0VBTUcsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtBQUVsQjs7QUFqQkE7RUFtQkUsb0JBQWdCO0VBQ2hCLGtCQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtBQUVyQjs7QUF4QkE7RUF3QkcsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUl0Qjs7QUFuQ0E7RUFrQ0csZ0NBQWdDO0VBQ2hDLG9CQUFnQjtFQUNoQixrQkFBYztFQUNkLFlBQVk7RUFDWixjQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUF1QjtFQUN2QixrQkFBYztBQUtqQjs7QUEvQ0E7RUE2Q0csWUFBWTtFQUNaLGNBQVM7RUFDVCxnQkFBZ0I7QUFNbkI7O0FBckRBO0VBa0RHLG1CQUFjO0FBT2pCOztBQXpEQTtFQXNERSxjQUFhO0FBT2Y7O0FBN0RBO0VBeURFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7QUFRbkI7O0FBckVBO0VBZ0VFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBU2xCOztBQTNFQTtFQW9FRyxtQkFBbUI7RUFDbkIscUJBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHFCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWE7RUFDYixtQkFBYztFQUNkLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGlCQUFpQjtBQVdwQjs7QUExRkE7RUFrRkcsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxxQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFhO0VBQ2IsbUJBQWM7RUFDZCxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsdUJBQWU7QUFZbEI7O0FBeEdBO0VBZ0dFLGtCQUFrQjtBQVlwQjs7QUE1R0E7RUFtR0UsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFhbEI7O0FBeEhBO0VBOEdFLG9CQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFjO0FBY2hCOztBQS9IQTtFQW1IRyxpQkFBaUI7QUFnQnBCOztBQW5JQTtFQXNIRyxlQUFlO0VBQ2YsV0FBVztBQWlCZCIsImZpbGUiOiJyZWNlaXBlLXVwbG9hZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcblx0LmVkaXQtYyB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdFx0bWFyZ2luOiAxNXB4IDAgMTVweDtcclxuXHRcdC5pY29uLXJpZyB7XHJcblx0XHRcdHdpZHRoOiAzNXB4O1xyXG5cdFx0XHRoZWlnaHQ6IDM1cHg7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMzdweDtcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdH1cclxuXHR9IFxyXG5cdGlvbi1pdGVtLmlucHQtZiB7XHJcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuXHRcdC0tcGFkZGluZy1lbmQ6IDBweDtcclxuXHRcdHBhZGRpbmc6IDBweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0XHRpb24tbGFiZWwge1xyXG5cdFx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRcdGNvbG9yOiByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuNjIpO1xyXG5cdFx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAwcHg7XHJcblx0XHRcdGhlaWdodDogMTZweDtcclxuXHRcdFx0bWF4LWhlaWdodDogMTZweDtcclxuXHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHRcdH1cclxuXHRcdGlvbi1pbnB1dCwgaW9uLXNlbGVjdCwgaW9uLWRhdGV0aW1lLCBpb24tdGV4dGFyZWEge1xyXG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FkYWRhZDtcclxuXHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcblx0XHRcdC0tcGFkZGluZy10b3A6IDBweDtcclxuXHRcdFx0aGVpZ2h0OiAzM3B4O1xyXG5cdFx0XHQtLWhlaWdodDogMzNweDtcclxuXHRcdFx0bWF4LWhlaWdodDogMzNweDtcclxuXHRcdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0XHRjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcclxuXHRcdFx0LS1wYWRkaW5nLWVuZDogMHB4O1xyXG5cdFx0fVxyXG5cdFx0aW9uLXRleHRhcmVhIHtcclxuXHRcdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0XHQtLWhlaWdodDogYXV0bztcclxuXHRcdFx0bWF4LWhlaWdodDogMTAwJTtcclxuXHRcdH1cclxuXHRcdGlvbi1zZWxlY3QgeyBcclxuXHRcdFx0LS1wYWRkaW5nLWVuZDogMTBweDtcclxuXHRcdH1cclxuXHR9XHJcblx0Lm1hcmctbnNnIHtcclxuXHRcdG1hcmdpbjowIC01cHg7XHJcblx0fVxyXG5cdGg0LmNudGVyLXR0bCB7XHJcblx0XHRtYXJnaW4tdG9wOiAtN3B4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHRcdGZvbnQtc2l6ZTogMTdweDtcclxuXHRcdGNvbG9yOiAjODI4MjgyO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0fVxyXG5cdC5idC10cnMge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tdG9wOiAtN3B4O1xyXG5cdFx0aW9uLWJ1dHRvbi5idG4tc2F2ZXtcclxuXHRcdFx0YmFja2dyb3VuZDogI2JmYmZiZjtcclxuXHRcdFx0LS1iYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAzNXB4O1xyXG5cdFx0XHRib3gtc2hhZG93OiBub25lO1xyXG5cdFx0XHQtLWJveC1zaGFkb3c6IG5vbmU7XHJcblx0XHRcdC0tcGFkZGluZy1lbmQ6IDM1cHg7XHJcblx0XHRcdGhlaWdodDogMzhweDtcclxuXHRcdFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTdweDtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiA3cHg7XHJcblx0XHR9XHJcblx0XHRpb24tYnV0dG9uLmJ0bi1jYW5jbCB7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblx0XHRcdGNvbG9yOiAjNGQ0ZDRkO1xyXG5cdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDQwcHg7XHJcblx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0XHRcdC0tYm94LXNoYWRvdzogbm9uZTtcclxuXHRcdFx0LS1wYWRkaW5nLWVuZDogNDBweDtcclxuXHRcdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHRcdFx0Zm9udC1zaXplOiAxN3B4O1xyXG5cdFx0XHRib3JkZXItY29sb3I6ICM5YzljOWM7XHJcblx0XHRcdC0tYm9yZGVyLWNvbG9yOiAjOWM5YzljO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuYm90dG0tY29udHMge1xyXG5cdFx0cGFkZGluZzogMjBweCAyMHB4O1xyXG5cdH1cclxuXHRsYWJlbC51cGxvcy1pbWdzIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0Ym9yZGVyOiAycHggZGFzaGVkICM2MTYxNjE7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDMwcHggMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdGNvbG9yOiAjOTQ5NDk0O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHR9XHJcblx0aW9uLWl0ZW0ubGlzLXNucnQge1xyXG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcblx0XHRtYXJnaW4tdG9wOiAtMTBweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0XHQtLXBhZGRpbmctZW5kOiAwcHg7XHJcblx0XHRpb24tY2hlY2tib3gge1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDhweDtcclxuXHRcdH1cclxuXHRcdGlvbi1sYWJlbCB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdFx0Y29sb3I6ICMwMDA7XHJcblx0XHR9XHJcblx0fVxyXG59Il19 */");

/***/ }),

/***/ "Ho8k":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/receipe-upload/receipe-upload.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>add-product</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n  <div class=\"top-head\">\r\n    <img src=\"assets/images/logo1.png\" class=\"img-logo\" />\r\n    <h4 class=\"ttl-tp\">Add RECIPE</h4>\r\n  </div>\r\n  <div class=\"bottm-conts\">\r\n    <div class=\"form-botm\">\r\n      <ion-row class=\"marg-nsg\">\r\n        <ion-col size=\"6\">\r\n          <ion-item lines=\"none\" class=\"inpt-f\">\r\n            <ion-label position=\"stacked\">RECIPE NAME</ion-label>\r\n            <ion-input placeholder=\"\" value=\"Premium Food\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-item lines=\"none\" class=\"inpt-f\">\r\n            <ion-label position=\"stacked\">prepration Time</ion-label>\r\n            <ion-datetime\r\n              displayFormat=\"HH:mm\"\r\n              placeholder=\"35 mins : 20 secs\"\r\n            ></ion-datetime>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-item lines=\"none\" class=\"inpt-f\">\r\n        <ion-label position=\"stacked\">ingredients</ion-label>\r\n        <ion-input placeholder=\"\" value=\"Milk, Bread, Butter\"></ion-input>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" class=\"inpt-f\">\r\n        <ion-label position=\"stacked\">Details</ion-label>\r\n        <ion-textarea\r\n          placeholder=\"\"\r\n          value=\"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \"\r\n          rows=\"2\"\r\n        ></ion-textarea>\r\n      </ion-item>\r\n      <ion-row class=\"marg-nsg\">\r\n        <ion-col size=\"12\">\r\n          <ion-item lines=\"none\" class=\"inpt-f\">\r\n            <ion-label position=\"stacked\">Image</ion-label>\r\n            <label for=\"uplos-ff\" class=\"uplos-imgs\">\r\n              Upload Image Here\r\n              <input type=\"file\" id=\"uplos-ff\" style=\"display: none\" />\r\n            </label>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"marg-nsg\">\r\n        <ion-col size=\"12\">\r\n          <ion-item lines=\"none\" class=\"lis-snrt\">\r\n            <ion-checkbox color=\"dark\" checked slot=\"start\"></ion-checkbox>\r\n            <ion-label>I agree all terms and conditions</ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <div class=\"bt-trs\">\r\n        <ion-button shape=\"round\" fill=\"outline\" class=\"btn-cancl\"\r\n          >Submit</ion-button\r\n        >\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "Ozxm":
/*!*********************************************************!*\
  !*** ./src/app/receipe-upload/receipe-upload.module.ts ***!
  \*********************************************************/
/*! exports provided: ReceipeUploadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceipeUploadPageModule", function() { return ReceipeUploadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _receipe_upload_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./receipe-upload-routing.module */ "7NdV");
/* harmony import */ var _receipe_upload_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./receipe-upload.page */ "lRQ9");







let ReceipeUploadPageModule = class ReceipeUploadPageModule {
};
ReceipeUploadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _receipe_upload_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReceipeUploadPageRoutingModule"]
        ],
        declarations: [_receipe_upload_page__WEBPACK_IMPORTED_MODULE_6__["ReceipeUploadPage"]]
    })
], ReceipeUploadPageModule);



/***/ }),

/***/ "lRQ9":
/*!*******************************************************!*\
  !*** ./src/app/receipe-upload/receipe-upload.page.ts ***!
  \*******************************************************/
/*! exports provided: ReceipeUploadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceipeUploadPage", function() { return ReceipeUploadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_receipe_upload_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./receipe-upload.page.html */ "Ho8k");
/* harmony import */ var _receipe_upload_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./receipe-upload.page.scss */ "Ao94");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ReceipeUploadPage = class ReceipeUploadPage {
    constructor() { }
    ngOnInit() {
    }
};
ReceipeUploadPage.ctorParameters = () => [];
ReceipeUploadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-receipe-upload',
        template: _raw_loader_receipe_upload_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_receipe_upload_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReceipeUploadPage);



/***/ })

}]);
//# sourceMappingURL=receipe-upload-receipe-upload-module.js.map