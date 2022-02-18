(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-detail-chat-detail-module"],{

/***/ "3Vyh":
/*!***************************************************!*\
  !*** ./src/app/chat-detail/chat-detail.module.ts ***!
  \***************************************************/
/*! exports provided: ChatDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetailPageModule", function() { return ChatDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _chat_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-detail-routing.module */ "ohpt");
/* harmony import */ var _chat_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-detail.page */ "vpRY");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");








let ChatDetailPageModule = class ChatDetailPageModule {
};
ChatDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chat_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatDetailPageRoutingModule"]
        ],
        declarations: [_chat_detail_page__WEBPACK_IMPORTED_MODULE_6__["ChatDetailPage"]]
    })
], ChatDetailPageModule);



/***/ }),

/***/ "ohpt":
/*!***********************************************************!*\
  !*** ./src/app/chat-detail/chat-detail-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ChatDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetailPageRoutingModule", function() { return ChatDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chat_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-detail.page */ "vpRY");




const routes = [
    {
        path: '',
        component: _chat_detail_page__WEBPACK_IMPORTED_MODULE_3__["ChatDetailPage"]
    }
];
let ChatDetailPageRoutingModule = class ChatDetailPageRoutingModule {
};
ChatDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatDetailPageRoutingModule);



/***/ }),

/***/ "tbiV":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-detail/chat-detail.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>adoptions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n\t<app-header [pageName]='\"chat\"' [pn]='\"detail\"' app=\"serviceProvider\"></app-header>\r\n\t<div class=\"bottm-conts\">\r\n\t\t<h4 class=\"ttl-tp\"> CHAT </h4>\r\n\t\t<div class=\"cont-calef\">\r\n\t\t\t<img src=\"assets/images/user3.jpg\" class=\"usr-imgd\"><div class=\"top-tl\">\r\n\t\t\t\t<h3> Sumona Joshi </h3>\r\n\t\t\t\t<h6>Online</h6>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"chat-box\">\r\n\t\t\t\t<ul class=\"chat-list\">\r\n\t\t\t\t\t<li class=\"right-chat\">\r\n\t\t\t\t\t\t<div class=\"cont-msg\">\r\n\t\t\t\t\t\t\t<p> Hi, Cethena! How’s your day going? </p>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"left-chat\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"cont-msg\">\r\n\t\t\t\t\t\t\t<p> Hello , all good what about you? </p>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"right-chat\">\r\n\t\t\t\t\t\t<div class=\"cont-msg\">\r\n\t\t\t\t\t\t\t<p> It  was good </p>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"right-chat\">\r\n\t\t\t\t\t\t<div class=\"cont-msg\">\r\n\t\t\t\t\t\t\t<p>Hi, Cethena! How’s your day going? </p>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"left-chat\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"cont-msg\">\r\n\t\t\t\t\t\t\t<p> Hello , all good what about you? </p>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"right-chat\">\r\n\t\t\t\t\t\t<div class=\"cont-msg\">\r\n\t\t\t\t\t\t\t<p> It  was good </p>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t</div>\r\n\t\t\t\t<div class=\"inpt-cvr\">\r\n\t\t\t\t<img class=\"camer-s\"src=\"assets/images/camera-d.png\">\r\n\t\t<div class=\"send-inpt\">\r\n\t\t\t\t<ion-input type=\"text\" placeholder=\"Say Something...\"></ion-input>\r\n\t\t\t\t\r\n\t\t\t</div><div class=\"icos-d\">\r\n\t\t\t\t\t<a href=\"#\" class=\"msg-snd\"> <ion-icon name=\"paper-plane-outline\"></ion-icon> </a>\r\n\t\t\t\t</div></div>\r\n\t</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "vpRY":
/*!*************************************************!*\
  !*** ./src/app/chat-detail/chat-detail.page.ts ***!
  \*************************************************/
/*! exports provided: ChatDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetailPage", function() { return ChatDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chat_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chat-detail.page.html */ "tbiV");
/* harmony import */ var _chat_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-detail.page.scss */ "zJcY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ChatDetailPage = class ChatDetailPage {
    constructor() { }
    ngOnInit() {
    }
};
ChatDetailPage.ctorParameters = () => [];
ChatDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat-detail',
        template: _raw_loader_chat_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChatDetailPage);



/***/ }),

/***/ "zJcY":
/*!***************************************************!*\
  !*** ./src/app/chat-detail/chat-detail.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .bottm-conts {\n  padding: 0px;\n}\n\nion-content h4.ttl-tp {\n  margin-right: 25px;\n}\n\nion-content .cont-calef {\n  padding: 20px 35px;\n  margin-top: 20px;\n  display: block;\n}\n\nion-content .top-tl h3 {\n  margin: 0px;\n  font-size: 17px;\n  color: #000000;\n  font-weight: 700;\n}\n\nion-content .top-tl span.icos {\n  width: 35px;\n  height: 35px;\n  background: #bfbfbf;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  font-size: 23px;\n  color: #fff;\n}\n\nion-content .chat-box {\n  margin-top: 30px;\n  border-radius: 10px;\n  height: 45vh;\n  overflow: auto;\n}\n\nion-content .chat-box ul.chat-list {\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n}\n\nion-content .chat-box ul.chat-list li.left-chat {\n  position: relative;\n  min-height: 42px;\n  padding-left: 52px;\n  margin-bottom: 20px;\n}\n\nion-content .chat-box ul.chat-list li.left-chat img.usr-imgd {\n  width: 42px;\n  height: 42px;\n  object-fit: cover;\n  border-radius: 50%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\nion-content .chat-box ul.chat-list li.left-chat .cont-msg {\n  display: flex;\n  background: #bfbfbf;\n  align-items: center;\n  justify-content: space-between;\n  padding: 13px 13px;\n  border-radius: 100px 100px 1px 100px;\n}\n\nion-content .chat-box ul.chat-list li.left-chat .cont-msg p {\n  margin: 0px;\n  font-size: 14px;\n  color: #fff;\n  font-weight: 500;\n}\n\nion-content .chat-box ul.chat-list li.left-chat .cont-msg span {\n  font-size: 10px;\n  color: #c3c3c3;\n}\n\nion-content .chat-box ul.chat-list li.left-chat span.online-icon {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  top: 28px;\n  left: 33px;\n  background: #1cde20;\n  border-radius: 50%;\n  border: 2px solid #fff;\n}\n\nion-content .chat-box ul.chat-list li.right-chat {\n  position: relative;\n  min-height: 42px;\n  padding-right: 45px;\n  margin-bottom: 20px;\n}\n\nion-content .chat-box ul.chat-list li.right-chat img.usr-imgd {\n  width: 42px;\n  height: 42px;\n  object-fit: cover;\n  border-radius: 50%;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\nion-content .chat-box ul.chat-list li.right-chat .cont-msg {\n  display: inline-flex;\n  background: #f2f2f2;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 13px;\n  border-radius: 120px 100px 98px 0px;\n}\n\nion-content .chat-box ul.chat-list li.right-chat .cont-msg p {\n  margin: 0px;\n  font-size: 14px;\n  color: #000;\n  font-weight: 500;\n}\n\nion-content .chat-box ul.chat-list li.right-chat .cont-msg span {\n  font-size: 10px;\n  color: #c3c3c3;\n}\n\nion-content .chat-box ul.chat-list li.right-chat span.online-icon {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  top: 28px;\n  right: 33px;\n  background: #1cde20;\n  border-radius: 50%;\n  border: 2px solid #fff;\n}\n\nion-content .send-inpt {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 0px;\n  padding: 3px 4px;\n  border: 1px solid #cccccc;\n  background: #fff;\n  border-radius: 50px;\n  padding-left: 13px;\n  width: -webkit-fill-available;\n}\n\nion-content .send-inpt ion-input {\n  font-size: 15px;\n  font-weight: 500;\n  color: #626262;\n  --placeholder-color: #626262;\n  --placeholder-opacity: 1;\n}\n\nion-content .send-inpt .icos-d span.attac {\n  font-size: 26px;\n  color: #9c9996;\n  margin-right: 5px;\n  position: relative;\n  top: 3px;\n}\n\nion-content .send-inpt .icos-d span.attac ion-icon {\n  transform: rotate(45deg);\n}\n\nion-content .send-inpt .icos-d .msg-snd {\n  width: 36px;\n  height: 36px;\n  display: inline-block;\n  background: #bfbfbf;\n  line-height: 41px;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 20px;\n  color: #fff;\n}\n\nh6 {\n  color: #00de2a;\n  opacity: .7;\n  font-size: 12px;\n  margin-top: 0;\n}\n\n.usr-imgd {\n  height: 36px;\n  width: 36px;\n  border-radius: 100px;\n  float: left;\n  margin-right: 9px;\n}\n\n.top-tl {\n  padding-bottom: 15px;\n  border-bottom: 1px solid #bfbfbf69;\n  margin-bottom: 22px !important;\n}\n\n.inpt-cvr {\n  background: #f8f8f8;\n  padding: 26px;\n  display: flex;\n}\n\n.camer-s {\n  width: 21px;\n  height: 16px;\n  margin-top: 17px;\n  margin-right: 11px;\n}\n\n.msg-snd {\n  color: #bfbfbf;\n  font-size: 22px;\n  position: relative;\n  top: 10px !important;\n  left: 6px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoYXQtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFlBQVk7QUFBZDs7QUFGQTtFQUtFLGtCQUFrQjtBQUNwQjs7QUFOQTtFQVFFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYTtBQUVmOztBQVpBO0VBZ0JPLFdBQVc7RUFDZCxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQUFwQjs7QUFuQkE7RUFzQkcsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0FBQ2Q7O0FBL0JBO0VBa0NFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBdENBO0VBdUNHLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0FBR25COztBQTVDQTtFQTJDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFLdkI7O0FBbkRBO0VBZ0RLLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07QUFPWDs7QUE3REE7RUF5REssYUFBYTtFQUNkLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixvQ0FBb0M7QUFReEM7O0FBdEVBO0VBaUVNLFdBQVc7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtBQVNwQjs7QUE3RUE7RUF1RU0sZUFBZTtFQUNmLGNBQWM7QUFVcEI7O0FBbEZBO0VBNEVLLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFVM0I7O0FBN0ZBO0VBdUZJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQVV2Qjs7QUFwR0E7RUE0RkssV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsTUFBTTtBQVlYOztBQTlHQTtFQXFHUSxvQkFBb0I7RUFDeEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLG1DQUFtQztBQWF2Qzs7QUF2SEE7RUE0R00sV0FBVztFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0FBZXBCOztBQTlIQTtFQWtITSxlQUFlO0VBQ2YsY0FBYztBQWdCcEI7O0FBbklBO0VBdUhLLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFnQjNCOztBQTlJQTtFQW9JQyxhQUFhO0VBQ1YsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFjakM7O0FBM0pBO0VBK0lHLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLDRCQUFvQjtFQUNwQix3QkFBc0I7QUFnQnpCOztBQW5LQTtFQXVKSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsUUFBUTtBQWdCWjs7QUEzS0E7RUE2Skssd0JBQXdCO0FBa0I3Qjs7QUEvS0E7RUFpS0ksV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0FBa0JmOztBQWJBO0VBQ0ksY0FBYztFQUNkLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtBQWdCakI7O0FBZkM7RUFDRyxZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsaUJBQWlCO0FBa0JyQjs7QUFqQkM7RUFDRyxvQkFBb0I7RUFDcEIsa0NBQWtDO0VBQ2xDLDhCQUE4QjtBQW9CbEM7O0FBbkJDO0VBQ0csbUJBQW1CO0VBQ25CLGFBQWE7RUFBQyxhQUFZO0FBdUI5Qjs7QUFyQkE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7QUF3QnRCOztBQXRCQTtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixTQUFTO0FBeUJiIiwiZmlsZSI6ImNoYXQtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuXHQuYm90dG0tY29udHMge1xyXG5cdFx0cGFkZGluZzogMHB4O1xyXG5cdH1cclxuXHRoNC50dGwtdHAge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG5cdH1cclxuXHQuY29udC1jYWxlZiB7XHJcblx0XHRwYWRkaW5nOiAyMHB4IDM1cHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdFxyXG5cdH1cclxuXHQudG9wLXRsIHtcclxuXHRcdFxyXG5cdFx0aDMge1xyXG5cdFx0XHQgICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHR9XHJcblx0XHRzcGFuLmljb3Mge1xyXG5cdFx0XHR3aWR0aDogMzVweDtcclxuXHRcdFx0aGVpZ2h0OiAzNXB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRmb250LXNpemU6IDIzcHg7XHJcblx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuY2hhdC1ib3gge1xyXG5cdFx0bWFyZ2luLXRvcDogMzBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0XHRoZWlnaHQ6IDQ1dmg7XHJcblx0XHRvdmVyZmxvdzogYXV0bztcclxuXHRcdHVsLmNoYXQtbGlzdCB7XHJcblx0XHRcdHBhZGRpbmc6IDBweDtcclxuXHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0XHRcdGxpLmxlZnQtY2hhdCB7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdG1pbi1oZWlnaHQ6IDQycHg7XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiA1MnB4O1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0XHRcdFx0aW1nLnVzci1pbWdkIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA0MnB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiA0MnB4O1xyXG5cdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuY29udC1tc2cge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMTNweCAxM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHggMTAwcHggMXB4IDEwMHB4O1xyXG4gICBcclxuXHRcdFx0XHRcdHAge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHNwYW4ge1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEwcHg7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjYzNjM2MzO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzcGFuLm9ubGluZS1pY29uIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMHB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAxMHB4O1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0dG9wOiAyOHB4O1xyXG5cdFx0XHRcdFx0bGVmdDogMzNweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMxY2RlMjA7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRsaS5yaWdodC1jaGF0IHtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0bWluLWhlaWdodDogNDJweDtcclxuXHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiA0NXB4O1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0XHRcdFx0aW1nLnVzci1pbWdkIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA0MnB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiA0MnB4O1xyXG5cdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRyaWdodDogMDtcclxuXHRcdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmNvbnQtbXNnIHtcclxuXHRcdFx0XHQgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDE4cHggMTNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEyMHB4IDEwMHB4IDk4cHggMHB4O1xyXG5cdFx0XHRcdFx0cCB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0c3BhbiB7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICNjM2MzYzM7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHNwYW4ub25saW5lLWljb24ge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwcHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDEwcHg7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHR0b3A6IDI4cHg7XHJcblx0XHRcdFx0XHRyaWdodDogMzNweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMxY2RlMjA7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQuc2VuZC1pbnB0IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHBhZGRpbmc6IDNweCA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuXHRcdGlvbi1pbnB1dCB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0Y29sb3I6ICM2MjYyNjI7XHJcblx0XHRcdC0tcGxhY2Vob2xkZXItY29sb3I6ICM2MjYyNjI7XHJcblx0XHRcdC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuXHRcdH1cclxuXHRcdC5pY29zLWQge1xyXG5cdFx0XHRzcGFuLmF0dGFjIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDI2cHg7XHJcblx0XHRcdFx0Y29sb3I6ICM5Yzk5OTY7XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdHRvcDogM3B4O1xyXG5cdFx0XHRcdGlvbi1pY29uIHtcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Lm1zZy1zbmQge1xyXG5cdFx0XHRcdHdpZHRoOiAzNnB4O1xyXG5cdFx0XHRcdGhlaWdodDogMzZweDtcclxuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI2JmYmZiZjtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogNDFweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcclxuXHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5oNiB7XHJcbiAgICBjb2xvcjogIzAwZGUyYTtcclxuICAgIG9wYWNpdHk6IC43O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufS51c3ItaW1nZCB7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDlweDtcclxufS50b3AtdGwge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JmYmZiZjY5O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjJweCAhaW1wb3J0YW50O1xyXG59LmlucHQtY3ZyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgICBwYWRkaW5nOiAyNnB4O2Rpc3BsYXk6ZmxleDtcclxufVxyXG4uY2FtZXItcyB7XHJcbiAgICB3aWR0aDogMjFweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDE3cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDExcHg7XHJcbn1cclxuLm1zZy1zbmQge1xyXG4gICAgY29sb3I6ICNiZmJmYmY7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDZweDtcclxufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=chat-detail-chat-detail-module.js.map