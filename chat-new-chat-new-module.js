(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-new-chat-new-module"],{

/***/ "5k1y":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-new/chat-new.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>adoptions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n\t<app-header [pageName]='\"chat\"' [pn]='\"req\"' app=\"serviceProvider\"></app-header>\r\n\t<div class=\"bottm-conts\">\r\n\t\t<h4 class=\"ttl-tp\"> CHAT </h4>\r\n\t\t<div class=\"cont-calef\">\r\n\t\t\t\r\n\t\t\t<ion-list class=\"disply-mnes\">\r\n\t\t\t\t\r\n\t\t\t\t<ion-item lines=\"none\" detail=\"false\"  routerLink=\"/chat-single\">\r\n\t\t\t\t\t<ion-avatar slot=\"start\">\r\n\t\t\t\t\t\t<img src=\"assets/images/user1.jpg\">\r\n\t\t\t\t\t</ion-avatar>\r\n\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t<h2>Sumona Joshi  </h2>\r\n\t\t\t\t\t\t<p>Thank you so much!</p>\r\n\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t<div class=\"main-numbers\">\r\n\t\t\t\t\t<span class=\"main-numbers\">20 min ago</span>\r\n\t\t\t\t\t<span class=\"nembrs\"> 3 </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t<ion-item lines=\"none\" detail=\"false\" routerLink=\"/chat-single\">\r\n\t\t\t\t\t<ion-avatar slot=\"start\">\r\n\t\t\t\t\t\t<img src=\"assets/images/user4.jpg\">\r\n\t\t\t\t\t</ion-avatar>\r\n\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t<h2>Rumia Nanda  </h2>\r\n\t\t\t\t\t\t<p>Ok, See you then</p>\r\n\t\t\t\t\t</ion-label>\r\n\t\t\t<div class=\"main-numbers\">\r\n\t\t\t\t\t<span class=\"main-numbers\">20 min ago</span>\r\n\t\t\t\t\t<span class=\"nembrs\"> 3 </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t<ion-item lines=\"none\" detail=\"false\" class=\"unread\" routerLink=\"/chat-single\">\r\n\t\t\t\t\t<ion-avatar slot=\"start\">\r\n\t\t\t\t\t\t<img src=\"assets/images/user2.jpg\">\r\n\t\t\t\t\t</ion-avatar>\r\n\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t<h2>John Doe </h2>\r\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet...</p>\r\n\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t<div class=\"main-numbers\">\r\n\t\t\t\t\t<span class=\"main-numbers\">Yesterday</span>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t<ion-item lines=\"none\" detail=\"false\" class=\"unread\" routerLink=\"/chat-single\">\r\n\t\t\t\t\t<ion-avatar slot=\"start\">\r\n\t\t\t\t\t\t<img src=\"assets/images/user4.jpg\">\r\n\t\t\t\t\t</ion-avatar>\r\n\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t<h2>Rumia Nanda  </h2>\r\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet...</p>\r\n\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t<div class=\"main-numbers\">\r\n\t\t\t\t\t<span class=\"main-numbers\">This Week</span>\r\n\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</ion-list> \r\n\t\t</div>\r\n\t</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "OuGA":
/*!*********************************************!*\
  !*** ./src/app/chat-new/chat-new.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .bottm-conts {\n  padding: 0px;\n}\n\nion-content h4.ttl-tp {\n  margin-right: 25px;\n}\n\nion-content .cont-calef {\n  padding: 5px 0px;\n  margin-top: 20px;\n  display: block;\n}\n\nion-content .cont-calef .top-icons {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0px 20px 10px;\n}\n\nion-content .cont-calef .top-icons .icon-fts {\n  width: 35px;\n  height: 35px;\n  background: #bfbfbf;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  margin-right: 7px;\n  font-size: 19px;\n}\n\nion-content .cont-calef .top-icons .icon-secr {\n  width: 35px;\n  height: 35px;\n  background: #bfbfbf;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 19px;\n}\n\nion-content .cont-calef ion-list.disply-mnes {\n  padding: 10px 20px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item {\n  background: #fff;\n  /*box-shadow: 5px 8px 22px rgb(103 103 103 / 18%);*/\n  margin-bottom: 12px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  padding: 10px 5px 10px 15px;\n  border-radius: 5px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item ion-avatar {\n  margin: 0px;\n  margin-right: 9px;\n  width: 30px;\n  height: 30px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item ion-avatar .grupsf {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item ion-avatar .grupsf img {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin: 1px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item ion-label {\n  margin: 0px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item ion-label h2 {\n  font-size: 16px;\n  color: #000;\n  font-weight: 700;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item ion-label p {\n  font-size: 12px;\n  color: #434343;\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  line-height: 14px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item span.icon-arr {\n  margin: 0px;\n  width: 26px;\n  height: 26px;\n  background: #bfbfbf;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item span.nembrs {\n  width: 20px;\n  height: 20px;\n  background: #bfbfbf;\n  display: inline-block;\n  font-size: 10px;\n  vertical-align: text-bottom;\n  margin-left: 2px;\n  text-align: center;\n  line-height: 20px;\n  border-radius: 50%;\n  color: #fff;\n  position: relative;\n  top: -2px;\n}\n\nion-content .cont-calef ion-list.disply-mnes ion-item.unread ion-label h2 {\n  font-weight: 700;\n  line-height: 16px;\n}\n\n.main-numbers {\n  display: block;\n  text-align: right;\n}\n\n.main-numbers {\n  /* width: 59%; */\n  /* float: right; */\n  display: block;\n  /* justify-content: left; */\n  text-align: right;\n}\n\nspan.main-numbers {\n  font-size: 10px;\n  color: #bfbfbf;\n  margin-bottom: 7px;\n}\n\n.unread ion-label h2, .unread ion-label p {\n  opacity: .7 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoYXQtbmV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFlBQVk7QUFBZDs7QUFGQTtFQUtFLGtCQUFrQjtBQUNwQjs7QUFOQTtFQVFFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYTtBQUVmOztBQVpBO0VBWUcsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsc0JBQXNCO0FBSXpCOztBQW5CQTtFQWlCSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0FBTW5COztBQWhDQTtFQTZCSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7QUFPbkI7O0FBNUNBO0VBeUNHLGtCQUFrQjtBQU9yQjs7QUFoREE7RUEyQ0ksZ0JBQWdCO0VBQ2hCLG1EQUFBO0VBQ0EsbUJBQW1CO0VBQ25CLG9CQUFnQjtFQUNoQixrQkFBYztFQUNkLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFTdEI7O0FBMURBO0VBbURJLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7QUFXaEI7O0FBakVBO0VBd0RNLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGVBQWU7QUFhckI7O0FBeEVBO0VBNkRPLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0FBZWxCOztBQWhGQTtFQXNFSyxXQUFXO0FBY2hCOztBQXBGQTtFQXdFVSxlQUFlO0VBQ3JCLFdBQVc7RUFDWCxnQkFBZ0I7QUFnQnBCOztBQTFGQTtFQTZFVSxlQUFlO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQWlCckI7O0FBbEdBO0VBcUZLLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztBQWlCaEI7O0FBOUdBO0VBZ0dTLFdBQVc7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0FBa0JiOztBQTlIQTtFQWtITSxnQkFBZ0I7RUFDbEIsaUJBQWlCO0FBZ0JyQjs7QUFSQTtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7QUFXckI7O0FBVEE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBYztFQUNkLDJCQUFBO0VBQ0EsaUJBQWlCO0FBWXJCOztBQVZBO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7QUFhdEI7O0FBWEE7RUFDSSxzQkFBc0I7QUFjMUIiLCJmaWxlIjoiY2hhdC1uZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG5cdC5ib3R0bS1jb250cyB7XHJcblx0XHRwYWRkaW5nOiAwcHg7XHJcblx0fVxyXG5cdGg0LnR0bC10cCB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcblx0fVxyXG5cdC5jb250LWNhbGVmIHtcclxuXHRcdHBhZGRpbmc6IDVweCAwcHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdC50b3AtaWNvbnMge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdFx0XHRwYWRkaW5nOiAwcHggMjBweCAxMHB4O1xyXG5cdFx0XHQuaWNvbi1mdHMge1xyXG5cdFx0XHRcdHdpZHRoOiAzNXB4O1xyXG5cdFx0XHRcdGhlaWdodDogMzVweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA3cHg7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxOXB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdC5pY29uLXNlY3Ige1xyXG5cdFx0XHRcdHdpZHRoOiAzNXB4O1xyXG5cdFx0XHRcdGhlaWdodDogMzVweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxOXB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpb24tbGlzdC5kaXNwbHktbW5lcyB7XHJcblx0XHRcdHBhZGRpbmc6IDEwcHggMjBweDtcclxuXHRcdFx0aW9uLWl0ZW0ge1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdFx0Lypib3gtc2hhZG93OiA1cHggOHB4IDIycHggcmdiKDEwMyAxMDMgMTAzIC8gMTglKTsqL1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDEycHg7XHJcblx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcblx0XHRcdFx0LS1wYWRkaW5nLWVuZDogMHB4O1xyXG5cdFx0XHRcdHBhZGRpbmc6IDEwcHggNXB4IDEwcHggMTVweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRcdFx0aW9uLWF2YXRhciAge1xyXG5cdFx0XHRcdG1hcmdpbjogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuXHRcdFx0XHRcdC5ncnVwc2Yge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdFx0XHRcdFx0aW1nIHtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMjBweDtcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMXB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlvbi1sYWJlbCB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0XHRcdGgyIHtcclxuXHRcdFx0XHRcdFx0ICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHAge1xyXG5cdFx0XHRcdFx0XHQgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM0MzQzNDM7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHNwYW4uaWNvbi1hcnIge1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0XHR3aWR0aDogMjZweDtcclxuXHRcdFx0XHRcdGhlaWdodDogMjZweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHNwYW4ubmVtYnJzIHtcclxuXHRcdFx0XHRcdCAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTJweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aW9uLWl0ZW0udW5yZWFkIHtcclxuXHRcdFx0XHRpb24tbGFiZWwge1xyXG5cdFx0XHRcdFx0aDIge1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuLm1haW4tbnVtYmVycyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5tYWluLW51bWJlcnMge1xyXG4gICAgLyogd2lkdGg6IDU5JTsgKi9cclxuICAgIC8qIGZsb2F0OiByaWdodDsgKi9cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBsZWZ0OyAqL1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuc3Bhbi5tYWluLW51bWJlcnMge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICNiZmJmYmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxuLnVucmVhZCBpb24tbGFiZWwgaDIsIC51bnJlYWQgaW9uLWxhYmVsIHAge1xyXG4gICAgb3BhY2l0eTogLjcgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "tyGC":
/*!*****************************************************!*\
  !*** ./src/app/chat-new/chat-new-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ChatNewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatNewPageRoutingModule", function() { return ChatNewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chat_new_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-new.page */ "xzvR");




const routes = [
    {
        path: '',
        component: _chat_new_page__WEBPACK_IMPORTED_MODULE_3__["ChatNewPage"]
    }
];
let ChatNewPageRoutingModule = class ChatNewPageRoutingModule {
};
ChatNewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatNewPageRoutingModule);



/***/ }),

/***/ "u4GQ":
/*!*********************************************!*\
  !*** ./src/app/chat-new/chat-new.module.ts ***!
  \*********************************************/
/*! exports provided: ChatNewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatNewPageModule", function() { return ChatNewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _chat_new_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-new-routing.module */ "tyGC");
/* harmony import */ var _chat_new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-new.page */ "xzvR");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");








let ChatNewPageModule = class ChatNewPageModule {
};
ChatNewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chat_new_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatNewPageRoutingModule"]
        ],
        declarations: [_chat_new_page__WEBPACK_IMPORTED_MODULE_6__["ChatNewPage"]]
    })
], ChatNewPageModule);



/***/ }),

/***/ "xzvR":
/*!*******************************************!*\
  !*** ./src/app/chat-new/chat-new.page.ts ***!
  \*******************************************/
/*! exports provided: ChatNewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatNewPage", function() { return ChatNewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chat_new_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chat-new.page.html */ "5k1y");
/* harmony import */ var _chat_new_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-new.page.scss */ "OuGA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ChatNewPage = class ChatNewPage {
    constructor() { }
    ngOnInit() {
    }
};
ChatNewPage.ctorParameters = () => [];
ChatNewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat-new',
        template: _raw_loader_chat_new_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_new_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChatNewPage);



/***/ })

}]);
//# sourceMappingURL=chat-new-chat-new-module.js.map