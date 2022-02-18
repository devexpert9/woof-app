(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-single-chat-single-module"],{

/***/ "Chc5":
/*!*************************************************!*\
  !*** ./src/app/chat-single/chat-single.page.ts ***!
  \*************************************************/
/*! exports provided: ChatSinglePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSinglePage", function() { return ChatSinglePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chat_single_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chat-single.page.html */ "r11A");
/* harmony import */ var _chat_single_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-single.page.scss */ "OMH2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ChatSinglePage = class ChatSinglePage {
    constructor() { }
    ngOnInit() {
    }
};
ChatSinglePage.ctorParameters = () => [];
ChatSinglePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat-single',
        template: _raw_loader_chat_single_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_single_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChatSinglePage);



/***/ }),

/***/ "OMH2":
/*!***************************************************!*\
  !*** ./src/app/chat-single/chat-single.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .bottm-conts {\n  padding: 0px;\n}\n\nion-content h4.ttl-tp {\n  margin-right: 25px;\n}\n\nion-content .cont-calef {\n  padding: 20px 35px;\n  margin-top: 20px;\n  display: block;\n}\n\nion-content .top-tl {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nion-content .top-tl h3 {\n  margin: 0px;\n  font-size: 23px;\n  color: #a2a2a2;\n  font-weight: 600;\n}\n\nion-content .top-tl span.icos {\n  width: 35px;\n  height: 35px;\n  background: #bfbfbf;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  font-size: 23px;\n  color: #fff;\n}\n\nion-content .chat-box {\n  padding: 25px 12px;\n  box-shadow: -3px -3px 22px rgba(180, 179, 179, 0.38);\n  margin-top: 30px;\n  border-radius: 10px;\n  height: 45vh;\n  overflow: auto;\n}\n\nion-content .chat-box ul.chat-list {\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n}\n\nion-content .chat-box ul.chat-list li.left-chat {\n  position: relative;\n  min-height: 42px;\n  padding-left: 52px;\n  margin-bottom: 20px;\n}\n\nion-content .chat-box ul.chat-list li.left-chat img.usr-imgd {\n  width: 42px;\n  height: 42px;\n  object-fit: cover;\n  border-radius: 50%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\nion-content .chat-box ul.chat-list li.left-chat .cont-msg {\n  display: flex;\n  background: #f2f2f2;\n  align-items: center;\n  justify-content: space-between;\n  padding: 13px 13px;\n  border-radius: 50px;\n}\n\nion-content .chat-box ul.chat-list li.left-chat .cont-msg p {\n  margin: 0px;\n  font-size: 15px;\n  color: #626262;\n  font-weight: 500;\n}\n\nion-content .chat-box ul.chat-list li.left-chat .cont-msg span {\n  font-size: 10px;\n  color: #c3c3c3;\n}\n\nion-content .chat-box ul.chat-list li.left-chat span.online-icon {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  top: 28px;\n  left: 33px;\n  background: #1cde20;\n  border-radius: 50%;\n  border: 2px solid #fff;\n}\n\nion-content .chat-box ul.chat-list li.right-chat {\n  position: relative;\n  min-height: 42px;\n  padding-right: 52px;\n  margin-bottom: 20px;\n}\n\nion-content .chat-box ul.chat-list li.right-chat img.usr-imgd {\n  width: 42px;\n  height: 42px;\n  object-fit: cover;\n  border-radius: 50%;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\nion-content .chat-box ul.chat-list li.right-chat .cont-msg {\n  display: flex;\n  background: #f2f2f2;\n  align-items: center;\n  justify-content: space-between;\n  padding: 13px 13px;\n  border-radius: 50px;\n}\n\nion-content .chat-box ul.chat-list li.right-chat .cont-msg p {\n  margin: 0px;\n  font-size: 15px;\n  color: #626262;\n  font-weight: 500;\n}\n\nion-content .chat-box ul.chat-list li.right-chat .cont-msg span {\n  font-size: 10px;\n  color: #c3c3c3;\n}\n\nion-content .chat-box ul.chat-list li.right-chat span.online-icon {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  top: 28px;\n  right: 33px;\n  background: #1cde20;\n  border-radius: 50%;\n  border: 2px solid #fff;\n}\n\nion-content .send-inpt {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 35px;\n  padding: 3px 4px;\n  border: 1px solid #cccccc;\n  background: #fff;\n  border-radius: 50px;\n  box-shadow: -3px -3px 22px rgba(180, 179, 179, 0.38);\n  padding-left: 13px;\n}\n\nion-content .send-inpt ion-input {\n  font-size: 15px;\n  font-weight: 500;\n  color: #626262;\n  --placeholder-color: #626262;\n  --placeholder-opacity: 1;\n}\n\nion-content .send-inpt .icos-d span.attac {\n  font-size: 26px;\n  color: #9c9996;\n  margin-right: 5px;\n  position: relative;\n  top: 3px;\n}\n\nion-content .send-inpt .icos-d span.attac ion-icon {\n  transform: rotate(45deg);\n}\n\nion-content .send-inpt .icos-d .msg-snd {\n  width: 36px;\n  height: 36px;\n  display: inline-block;\n  background: #bfbfbf;\n  line-height: 41px;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 20px;\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoYXQtc2luZ2xlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFlBQVk7QUFBZDs7QUFGQTtFQUtFLGtCQUFrQjtBQUNwQjs7QUFOQTtFQVFFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYTtBQUVmOztBQVpBO0VBY0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFFaEM7O0FBbEJBO0VBa0JHLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQUluQjs7QUF6QkE7RUF3QkcsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0FBS2Q7O0FBckNBO0VBb0NFLGtCQUFrQjtFQUNsQixvREFBb0Q7RUFDcEQsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osY0FBYztBQUtoQjs7QUE5Q0E7RUEyQ0csWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFPbkI7O0FBcERBO0VBK0NJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQVN2Qjs7QUEzREE7RUFvREssV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtBQVdYOztBQXJFQTtFQTZESyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQVl4Qjs7QUE5RUE7RUFvRU0sV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBY3RCOztBQXJGQTtFQTBFTSxlQUFlO0VBQ2YsY0FBYztBQWVwQjs7QUExRkE7RUErRUssV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQWUzQjs7QUFyR0E7RUEwRkksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBZXZCOztBQTVHQTtFQStGSyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixNQUFNO0FBaUJYOztBQXRIQTtFQXdHSyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQWtCeEI7O0FBL0hBO0VBK0dNLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQW9CdEI7O0FBdElBO0VBcUhNLGVBQWU7RUFDZixjQUFjO0FBcUJwQjs7QUEzSUE7RUEwSEssV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQXFCM0I7O0FBdEpBO0VBdUlFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsb0RBQW9EO0VBQ3BELGtCQUFrQjtBQW1CcEI7O0FBbktBO0VBa0pHLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLDRCQUFvQjtFQUNwQix3QkFBc0I7QUFxQnpCOztBQTNLQTtFQTBKSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsUUFBUTtBQXFCWjs7QUFuTEE7RUFnS0ssd0JBQXdCO0FBdUI3Qjs7QUF2TEE7RUFvS0ksV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0FBdUJmIiwiZmlsZSI6ImNoYXQtc2luZ2xlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuXHQuYm90dG0tY29udHMge1xyXG5cdFx0cGFkZGluZzogMHB4O1xyXG5cdH1cclxuXHRoNC50dGwtdHAge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG5cdH1cclxuXHQuY29udC1jYWxlZiB7XHJcblx0XHRwYWRkaW5nOiAyMHB4IDM1cHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdFxyXG5cdH1cclxuXHQudG9wLXRsIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0aDMge1xyXG5cdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0Zm9udC1zaXplOiAyM3B4O1xyXG5cdFx0XHRjb2xvcjogI2EyYTJhMjtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdH1cclxuXHRcdHNwYW4uaWNvcyB7XHJcblx0XHRcdHdpZHRoOiAzNXB4O1xyXG5cdFx0XHRoZWlnaHQ6IDM1cHg7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjNweDtcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5jaGF0LWJveCB7XHJcblx0XHRwYWRkaW5nOiAyNXB4IDEycHg7XHJcblx0XHRib3gtc2hhZG93OiAtM3B4IC0zcHggMjJweCByZ2JhKDE4MCwgMTc5LCAxNzksIDAuMzgpO1xyXG5cdFx0bWFyZ2luLXRvcDogMzBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0XHRoZWlnaHQ6IDQ1dmg7XHJcblx0XHRvdmVyZmxvdzogYXV0bztcclxuXHRcdHVsLmNoYXQtbGlzdCB7XHJcblx0XHRcdHBhZGRpbmc6IDBweDtcclxuXHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0XHRcdGxpLmxlZnQtY2hhdCB7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdG1pbi1oZWlnaHQ6IDQycHg7XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiA1MnB4O1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0XHRcdFx0aW1nLnVzci1pbWdkIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA0MnB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiA0MnB4O1xyXG5cdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuY29udC1tc2cge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMTNweCAxM3B4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRcdFx0XHRcdHAge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogIzYyNjI2MjtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHNwYW4ge1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEwcHg7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjYzNjM2MzO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzcGFuLm9ubGluZS1pY29uIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMHB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAxMHB4O1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0dG9wOiAyOHB4O1xyXG5cdFx0XHRcdFx0bGVmdDogMzNweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMxY2RlMjA7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRsaS5yaWdodC1jaGF0IHtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0bWluLWhlaWdodDogNDJweDtcclxuXHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiA1MnB4O1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0XHRcdFx0aW1nLnVzci1pbWdkIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA0MnB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiA0MnB4O1xyXG5cdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRyaWdodDogMDtcclxuXHRcdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmNvbnQtbXNnIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDEzcHggMTNweDtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblx0XHRcdFx0XHRwIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICM2MjYyNjI7XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRzcGFuIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogI2MzYzNjMztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c3Bhbi5vbmxpbmUtaWNvbiB7XHJcblx0XHRcdFx0XHR3aWR0aDogMTBweDtcclxuXHRcdFx0XHRcdGhlaWdodDogMTBweDtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdHRvcDogMjhweDtcclxuXHRcdFx0XHRcdHJpZ2h0OiAzM3B4O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzFjZGUyMDtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5zZW5kLWlucHQge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRtYXJnaW4tdG9wOiAzNXB4O1xyXG5cdFx0cGFkZGluZzogM3B4IDRweDtcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRcdGJveC1zaGFkb3c6IC0zcHggLTNweCAyMnB4IHJnYmEoMTgwLCAxNzksIDE3OSwgMC4zOCk7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDEzcHg7XHJcblx0XHRpb24taW5wdXQge1xyXG5cdFx0XHRmb250LXNpemU6IDE1cHg7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdGNvbG9yOiAjNjI2MjYyO1xyXG5cdFx0XHQtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNjI2MjYyO1xyXG5cdFx0XHQtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcblx0XHR9XHJcblx0XHQuaWNvcy1kIHtcclxuXHRcdFx0c3Bhbi5hdHRhYyB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAyNnB4O1xyXG5cdFx0XHRcdGNvbG9yOiAjOWM5OTk2O1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogNXB4O1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHR0b3A6IDNweDtcclxuXHRcdFx0XHRpb24taWNvbiB7XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC5tc2ctc25kIHtcclxuXHRcdFx0XHR3aWR0aDogMzZweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDM2cHg7XHJcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDQxcHg7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0iXX0= */");

/***/ }),

/***/ "r11A":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-single/chat-single.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>adoptions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n\t<div class=\"top-head\">\r\n\t\t<img src=\"assets/images/logo1.png\" class=\"img-logo\">\r\n\t</div>\r\n\t<div class=\"bottm-conts\">\r\n\t\t<h4 class=\"ttl-tp\"> CHAT </h4>\r\n\t\t<div class=\"cont-calef\">\r\n\t\t\t<div class=\"top-tl\">\r\n\t\t\t\t<h3> Sumona Joshi </h3>\r\n\t\t\t\t<span class=\"icos\"> <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon> </span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"chat-box\">\r\n\t\t\t\t<ul class=\"chat-list\">\r\n\t\t\t\t\t<li class=\"left-chat\">\r\n\t\t\t\t\t\t<img src=\"assets/images/user3.jpg\" class=\"usr-imgd\">\r\n\t\t\t\t\t\t<span class=\"online-icon\"></span>\r\n\t\t\t\t\t\t<div class=\"cont-msg\">\r\n\t\t\t\t\t\t\t<p> Hello </p>\r\n\t\t\t\t\t\t\t<span class=\"tims\"> 6:30am </span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"right-chat\">\r\n\t\t\t\t\t\t<img src=\"assets/images/user4.jpg\" class=\"usr-imgd\">\r\n\t\t\t\t\t\t<span class=\"online-icon\"></span>\r\n\t\t\t\t\t\t<div class=\"cont-msg\">\r\n\t\t\t\t\t\t\t<p> Hello </p>\r\n\t\t\t\t\t\t\t<span class=\"tims\"> 6:30am </span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"send-inpt\">\r\n\t\t\t\t<ion-input type=\"text\" placeholder=\"Say Something...\"></ion-input>\r\n\t\t\t\t<div class=\"icos-d\">\r\n\t\t\t\t\t<span class=\"attac\"> <ion-icon name=\"attach-outline\"></ion-icon> </span>\r\n\t\t\t\t\t<a href=\"#\" class=\"msg-snd\"> <ion-icon name=\"paper-plane-outline\"></ion-icon> </a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "sGPn":
/*!***************************************************!*\
  !*** ./src/app/chat-single/chat-single.module.ts ***!
  \***************************************************/
/*! exports provided: ChatSinglePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSinglePageModule", function() { return ChatSinglePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _chat_single_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-single-routing.module */ "yBNy");
/* harmony import */ var _chat_single_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-single.page */ "Chc5");







let ChatSinglePageModule = class ChatSinglePageModule {
};
ChatSinglePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chat_single_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatSinglePageRoutingModule"]
        ],
        declarations: [_chat_single_page__WEBPACK_IMPORTED_MODULE_6__["ChatSinglePage"]]
    })
], ChatSinglePageModule);



/***/ }),

/***/ "yBNy":
/*!***********************************************************!*\
  !*** ./src/app/chat-single/chat-single-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ChatSinglePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSinglePageRoutingModule", function() { return ChatSinglePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chat_single_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-single.page */ "Chc5");




const routes = [
    {
        path: '',
        component: _chat_single_page__WEBPACK_IMPORTED_MODULE_3__["ChatSinglePage"]
    }
];
let ChatSinglePageRoutingModule = class ChatSinglePageRoutingModule {
};
ChatSinglePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatSinglePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=chat-single-chat-single-module.js.map