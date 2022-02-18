(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>home</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n  <div class=\"home-bgs\">\r\n    <ion-menu-button class=\"menu-icn\"\r\n      ><span> <img src=\"assets/images/menu.png\" /> </span>\r\n    </ion-menu-button>\r\n    <div class=\"logo-top\">\r\n      <img src=\"assets/images/logo2.png\" />\r\n    </div>\r\n    <div class=\"tabs-cotsf\">\r\n      <div class=\"cont-spa\">\r\n        <ion-segment [(ngModel)]=\"profiletab\" class=\"tabs-btns\">\r\n          <ion-segment-button value=\"Basic\">\r\n            <img src=\"assets/images/icon10.png\" />\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"pwd\">\r\n            <img src=\"assets/images/icon9.png\" />\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </div>\r\n      <div [ngSwitch]=\"profiletab\">\r\n        <ion-list *ngSwitchCase=\"'Basic'\" class=\"bt-syr\">\r\n          <div class=\"pos-rel\">\r\n            <ion-slides pager=\"false\" [options]=\"slideOpts\">\r\n              <ion-slide>\r\n                <div class=\"box-stf\">\r\n                  <div\r\n                    class=\"topimg-st\"\r\n                    routerLink=\"/tabs/marketplace-categories\"\r\n                  >\r\n                    <img src=\"assets/images/home1.png\" />\r\n                    <h4 routerLink=\"/tabs/marketplace-categories\">\r\n                      Marketplace\r\n                    </h4>\r\n                  </div>\r\n                  <div class=\"centr-boc\">\r\n                    <div class=\"contf\">\r\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n                      ipsum dolor sit amet,conse\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"bottom-sit\">\r\n                    <h4>Donate!</h4>\r\n                    <p>\r\n                      Lorem Ipsum is simply dummy text of the printing and\r\n                      typesetting industry.\r\n                    </p>\r\n                    <img src=\"assets/images/think.png\" class=\"icon-syy\" />\r\n                  </div>\r\n                </div>\r\n              </ion-slide>\r\n              <ion-slide>\r\n                <div class=\"box-stf\">\r\n                  <div class=\"topimg-st\">\r\n                    <img src=\"assets/images/home1.png\" />\r\n                    <h4 routerLink=\"/tabs/marketplace-categories\">\r\n                      Marketplace\r\n                    </h4>\r\n                  </div>\r\n                  <div class=\"centr-boc\">\r\n                    <div class=\"contf\">\r\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n                      ipsum dolor sit amet,conse\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"bottom-sit\">\r\n                    <h4>Donate!</h4>\r\n                    <p>\r\n                      Lorem Ipsum is simply dummy text of the printing and\r\n                      typesetting industry.\r\n                    </p>\r\n                    <img src=\"assets/images/think.png\" class=\"icon-syy\" />\r\n                  </div>\r\n                </div>\r\n              </ion-slide>\r\n              <ion-slide>\r\n                <div class=\"box-stf\">\r\n                  <div class=\"topimg-st\">\r\n                    <img src=\"assets/images/home1.png\" />\r\n                    <h4 routerLink=\"/tabs/marketplace-categories\">\r\n                      Marketplace\r\n                    </h4>\r\n                  </div>\r\n                  <div class=\"centr-boc\">\r\n                    <div class=\"contf\">\r\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n                      ipsum dolor sit amet,conse\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"bottom-sit\">\r\n                    <h4>Donate!</h4>\r\n                    <p>\r\n                      Lorem Ipsum is simply dummy text of the printing and\r\n                      typesetting industry.\r\n                    </p>\r\n                    <img src=\"assets/images/think.png\" class=\"icon-syy\" />\r\n                  </div>\r\n                </div>\r\n              </ion-slide>\r\n            </ion-slides>\r\n            <a href=\"javascript:void(0)\" class=\"btn-left-ar\">\r\n              <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n            </a>\r\n            <a href=\"javascript:void(0)\" class=\"btn-r8-ar\">\r\n              <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n            </a>\r\n          </div>\r\n        </ion-list>\r\n        <ion-list *ngSwitchCase=\"'pwd'\" class=\"bt-syr\">\r\n          <div class=\"sec-box-s\">\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <div class=\"main-dv\">\r\n                  <div\r\n                    class=\"box-int\"\r\n                    routerLink=\"/tabs/marketplace-categories\"\r\n                  >\r\n                    <img src=\"assets/images/home2.png\" />\r\n                    <h5>Marketplace</h5>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"main-dv\">\r\n                  <div class=\"box-int\" routerLink=\"/tabs/join-the-walk\">\r\n                    <img src=\"assets/images/home3.png\" />\r\n                    <h5>Join the walk</h5>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"main-dv\">\r\n                  <div class=\"box-int\" routerLink=\"/tabs/woofcare\">\r\n                    <img src=\"assets/images/home4.png\" />\r\n                    <h5>Woof Cares</h5>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"main-dv\">\r\n                  <div class=\"box-int\" routerLink=\"/tabs/map\">\r\n                    <img src=\"assets/images/home5.png\" />\r\n                    <h5>Map</h5>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"main-dv\">\r\n                  <div class=\"box-int\" routerLink=\"/tabs/adoptions\">\r\n                    <img src=\"assets/images/home6.png\" />\r\n                    <h5>Adoptions</h5>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"main-dv\">\r\n                  <div class=\"box-int\" routerLink=\"/tabs/chat\">\r\n                    <img src=\"assets/images/home7.png\" />\r\n                    <h5>Woof Chat</h5>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </ion-list>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "zpKS");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .home-bgs {\n  min-height: 100%;\n  position: relative;\n  background: url('home-bg.png');\n  background-size: cover;\n  background-position: center;\n}\n\nion-content .home-bgs .menu-icn {\n  position: absolute;\n  top: 10%;\n  left: 20px;\n  z-index: 111;\n}\n\nion-content .home-bgs .menu-icn img {\n  width: 20px;\n}\n\nion-content .home-bgs .logo-top {\n  display: block;\n  position: relative;\n  text-align: center;\n  padding: 10% 0 5%;\n}\n\nion-content .home-bgs .logo-top img {\n  max-width: 280px;\n  width: 100%;\n}\n\nion-content .cont-spa {\n  padding: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\nion-content .cont-spa ion-segment {\n  display: flex;\n  background: #babcbb;\n  width: 84px;\n  border-radius: 50px;\n  padding: 2px;\n}\n\nion-content .cont-spa ion-segment ion-segment-button {\n  width: 40px;\n  padding: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  max-width: 40px;\n  min-width: 40px;\n  height: 28px !important;\n  min-height: 28px !important;\n}\n\nion-content .cont-spa ion-segment ion-segment-button img {\n  height: 18px;\n  width: auto;\n}\n\nion-content .cont-spa ion-segment ion-segment-button.segment-button-checked {\n  width: 40px;\n  min-width: 40px;\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  background: #fff;\n  border-radius: 50px;\n  --border-radius: 50px;\n  --color-checked: var(--ion-color-white)!important;\n  font-weight: 500;\n}\n\nion-content .cont-spa ion-segment ion-segment-button.segment-button-checked img {\n  filter: invert(1);\n}\n\nion-content ion-list.bt-syr {\n  --background: transparent;\n  background: transparent;\n  padding: 0 15px;\n}\n\nion-content .box-stf {\n  display: block;\n  position: relative;\n  width: 100%;\n  margin-top: 10px;\n}\n\nion-content .box-stf .topimg-st {\n  position: relative;\n  display: block;\n  text-align: center;\n}\n\nion-content .box-stf .topimg-st img {\n  height: 180px;\n  width: auto;\n}\n\nion-content .box-stf .topimg-st h4 {\n  margin: 0px;\n  background: #fff;\n  padding: 17px 10px 12px;\n  width: 200px;\n  margin: 0 auto;\n  margin-top: -13px;\n  font-size: 18px;\n  text-transform: uppercase;\n  color: #545353;\n  letter-spacing: 0px;\n  font-weight: 500;\n  box-shadow: 6px 7px 20px rgba(0, 0, 0, 0.22);\n  margin-bottom: 40px;\n}\n\nion-content .centr-boc {\n  padding: 0 45px;\n}\n\nion-content .centr-boc .contf {\n  background: #f8f8f8;\n  padding: 15px 20px;\n  font-size: 16px;\n  text-align: left;\n  color: #686565;\n  border-radius: 5px;\n  box-shadow: 4px 5px 5px rgba(0, 0, 0, 0.23);\n  margin-bottom: 20px;\n}\n\nion-content .bottom-sit {\n  background: #f2ddfe;\n  text-align: left;\n  padding: 20px;\n  margin: 55px 0 30px;\n  position: relative;\n  padding-right: 155px;\n}\n\nion-content .bottom-sit h4 {\n  margin: 0px;\n  font-size: 22px;\n  color: #000;\n}\n\nion-content .bottom-sit p {\n  margin: 0px;\n  font-size: 13px;\n  color: #000;\n  opacity: 0.7;\n  margin-top: 3px;\n  font-weight: 600;\n}\n\nion-content .bottom-sit img.icon-syy {\n  position: absolute;\n  top: -22px;\n  width: 150px;\n  height: auto;\n  right: 6px;\n  max-height: initial;\n}\n\nion-content .btn-left-ar {\n  position: absolute;\n  left: -10px;\n  font-size: 30px;\n  top: 33%;\n  color: #c6c6c6;\n}\n\nion-content .btn-r8-ar {\n  position: absolute;\n  right: -10px;\n  font-size: 30px;\n  top: 33%;\n  color: #c6c6c6;\n}\n\nion-content .pos-rel {\n  position: relative;\n}\n\nion-content .sec-box-s {\n  margin-top: 6px;\n}\n\nion-content .sec-box-s .main-dv {\n  text-align: center;\n  padding: 10px;\n}\n\nion-content .sec-box-s .main-dv .box-int {\n  background: #fff;\n  position: relative;\n  box-shadow: 15px 7px 14px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  padding: 7px;\n  margin-bottom: 15px;\n}\n\nion-content .sec-box-s .main-dv .box-int img {\n  width: auto;\n  height: 100px;\n  margin-top: -27px;\n}\n\nion-content .sec-box-s .main-dv .box-int h5 {\n  margin: 0px;\n  font-size: 17px;\n  text-transform: uppercase;\n  color: #5f5f5f;\n  margin-top: 10px;\n  letter-spacing: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw4QkFBa0Q7RUFDbEQsc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUE3Qjs7QUFOQTtFQVFHLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7QUFFZjs7QUFiQTtFQWFJLFdBQVc7QUFJZjs7QUFqQkE7RUFpQkcsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBSXBCOztBQXhCQTtFQXNCSSxnQkFBZ0I7RUFDaEIsV0FBVztBQU1mOztBQTdCQTtFQTRCRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFLM0I7O0FBcENBO0VBaUNHLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixZQUFZO0FBT2Y7O0FBNUNBO0VBdUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWdCO0VBQ2hCLGtCQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZix1QkFBc0I7RUFDdEIsMkJBQTJCO0FBUy9COztBQXZEQTtFQWdESyxZQUFXO0VBQ1gsV0FBVTtBQVdmOztBQTVEQTtFQXFESSxXQUFXO0VBQ1gsZUFBZTtFQUNmLHlDQUFrQjtFQUNsQixpREFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixxQkFBZ0I7RUFDaEIsaURBQWdCO0VBQ2hCLGdCQUFnQjtBQVdwQjs7QUF4RUE7RUErREssaUJBQWlCO0FBYXRCOztBQTVFQTtFQXFFRSx5QkFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0FBV2pCOztBQWxGQTtFQTBFRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7QUFZbEI7O0FBekZBO0VBK0VHLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0FBY3JCOztBQS9GQTtFQW1GSSxhQUFhO0VBQ2IsV0FBVztBQWdCZjs7QUFwR0E7RUF1RkksV0FBVztFQUNYLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiw0Q0FBNEM7RUFDNUMsbUJBQW1CO0FBaUJ2Qjs7QUFwSEE7RUF3R0UsZUFBZTtBQWdCakI7O0FBeEhBO0VBMEdHLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDJDQUEyQztFQUMzQyxtQkFBbUI7QUFrQnRCOztBQW5JQTtFQXFIRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWlCO0VBQ2pCLG9CQUFvQjtBQWtCdEI7O0FBNUlBO0VBNEhHLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVztBQW9CZDs7QUFsSkE7RUFpSUcsV0FBVztFQUNYLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7QUFxQm5COztBQTNKQTtFQXlJRyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtBQXNCdEI7O0FBcEtBO0VBa0pFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFFBQVE7RUFDUixjQUFjO0FBc0JoQjs7QUE1S0E7RUF5SkUsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsUUFBUTtFQUNSLGNBQWM7QUF1QmhCOztBQXBMQTtFQWdLRSxrQkFBaUI7QUF3Qm5COztBQXhMQTtFQW1LRSxlQUFlO0FBeUJqQjs7QUE1TEE7RUFxS0csa0JBQWtCO0VBQ2xCLGFBQWE7QUEyQmhCOztBQWpNQTtFQXdLSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDRDQUE2QztFQUM3QyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtBQTZCdkI7O0FBMU1BO0VBK0tLLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0FBK0J0Qjs7QUFoTkE7RUFvTEssV0FBVztFQUNYLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFnQ3hCIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG5cdC5ob21lLWJncyB7XHJcblx0XHRtaW4taGVpZ2h0OiAxMDAlO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0YmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lLWJnLnBuZ1wiKTtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0XHQubWVudS1pY24ge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDogMTAlO1xyXG5cdFx0XHRsZWZ0OiAyMHB4O1xyXG5cdFx0XHR6LWluZGV4OiAxMTE7XHJcblx0XHRcdGltZyB7XHJcblx0XHRcdFx0d2lkdGg6IDIwcHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5sb2dvLXRvcCB7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0cGFkZGluZzogMTAlIDAgNSU7XHJcblx0XHRcdGltZyB7XHJcblx0XHRcdFx0bWF4LXdpZHRoOiAyODBweDtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQuY29udC1zcGEge1xyXG5cdFx0cGFkZGluZzogMzBweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRcdGlvbi1zZWdtZW50IHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0YmFja2dyb3VuZDogI2JhYmNiYjtcclxuXHRcdFx0d2lkdGg6IDg0cHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblx0XHRcdHBhZGRpbmc6IDJweDtcclxuXHRcdFx0aW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuXHRcdFx0XHR3aWR0aDogNDBweDtcclxuXHRcdFx0XHRwYWRkaW5nOiAwcHg7XHJcblx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcblx0XHRcdFx0LS1wYWRkaW5nLWVuZDogMHB4O1xyXG5cdFx0XHRcdG1heC13aWR0aDogNDBweDtcclxuXHRcdFx0XHRtaW4td2lkdGg6IDQwcHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAyOHB4IWltcG9ydGFudDtcclxuXHRcdFx0XHRtaW4taGVpZ2h0OiAyOHB4ICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0aW1nIHtcclxuXHRcdFx0XHRcdGhlaWdodDoxOHB4O1xyXG5cdFx0XHRcdFx0d2lkdGg6YXV0bztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xyXG5cdFx0XHRcdHdpZHRoOiA0MHB4O1xyXG5cdFx0XHRcdG1pbi13aWR0aDogNDBweDtcclxuXHRcdFx0XHQtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuXHRcdFx0XHQtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRcdFx0XHQtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblx0XHRcdFx0LS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpIWltcG9ydGFudDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHRmaWx0ZXI6IGludmVydCgxKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gXHJcblx0XHR9XHJcblx0fVxyXG5cdGlvbi1saXN0LmJ0LXN5ciB7XHJcblx0XHQtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0XHRwYWRkaW5nOiAwIDE1cHg7XHJcblx0fVxyXG5cdC5ib3gtc3RmIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdFx0LnRvcGltZy1zdCB7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0aW1nIHtcclxuXHRcdFx0XHRoZWlnaHQ6IDE4MHB4O1xyXG5cdFx0XHRcdHdpZHRoOiBhdXRvO1xyXG5cdFx0XHR9XHJcblx0XHRcdGg0IHtcclxuXHRcdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDE3cHggMTBweCAxMnB4O1xyXG5cdFx0XHRcdHdpZHRoOiAyMDBweDtcclxuXHRcdFx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiAtMTNweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdFx0XHRjb2xvcjogIzU0NTM1MztcclxuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMHB4O1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0Ym94LXNoYWRvdzogNnB4IDdweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNDBweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQuY2VudHItYm9jIHtcclxuXHRcdHBhZGRpbmc6IDAgNDVweDtcclxuXHRcdC5jb250ZiB7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcblx0XHRcdHBhZGRpbmc6IDE1cHggMjBweDtcclxuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdFx0XHRjb2xvcjogIzY4NjU2NTtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0XHRib3gtc2hhZG93OiA0cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuYm90dG9tLXNpdCB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZjJkZGZlO1xyXG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdHBhZGRpbmc6IDIwcHg7XHJcblx0XHRtYXJnaW46IDU1cHggMCAzMHB4O1xyXG5cdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAxNTVweDtcclxuXHRcdGg0IHtcclxuXHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjJweDtcclxuXHRcdFx0Y29sb3I6ICMwMDA7XHJcblx0XHR9XHJcblx0XHRwIHtcclxuXHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdFx0Y29sb3I6ICMwMDA7XHJcblx0XHRcdG9wYWNpdHk6IDAuNztcclxuXHRcdFx0bWFyZ2luLXRvcDogM3B4O1xyXG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0fVxyXG5cdFx0aW1nLmljb24tc3l5IHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6IC0yMnB4O1xyXG5cdFx0XHR3aWR0aDogMTUwcHg7XHJcblx0XHRcdGhlaWdodDogYXV0bztcclxuXHRcdFx0cmlnaHQ6IDZweDtcclxuXHRcdFx0bWF4LWhlaWdodDogaW5pdGlhbDtcclxuXHRcdH1cclxuXHR9XHJcblx0LmJ0bi1sZWZ0LWFyIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IC0xMHB4O1xyXG5cdFx0Zm9udC1zaXplOiAzMHB4O1xyXG5cdFx0dG9wOiAzMyU7XHJcblx0XHRjb2xvcjogI2M2YzZjNjtcclxuXHR9XHJcblx0LmJ0bi1yOC1hciAgIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OiAtMTBweDtcclxuXHRcdGZvbnQtc2l6ZTogMzBweDtcclxuXHRcdHRvcDogMzMlO1xyXG5cdFx0Y29sb3I6ICNjNmM2YzY7XHJcblx0fVxyXG5cdC5wb3MtcmVsIHtcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdH1cclxuXHQuc2VjLWJveC1zIHtcclxuXHRcdG1hcmdpbi10b3A6IDZweDtcclxuXHRcdC5tYWluLWR2IHtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0XHQuYm94LWludCB7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0Ym94LXNoYWRvdzogMTVweCA3cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMTApO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0XHRcdFx0cGFkZGluZzogN3B4O1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0XHRcdFx0aW1nIHtcclxuXHRcdFx0XHRcdHdpZHRoOiBhdXRvO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDBweDtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6IC0yN3B4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRoNSB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTdweDtcclxuXHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0XHRjb2xvcjogIzVmNWY1ZjtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSJdfQ== */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomePage = class HomePage {
    constructor() {
        this.profiletab = "Basic";
    }
    ngOnInit() {
    }
};
HomePage.ctorParameters = () => [];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map