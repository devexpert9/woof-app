(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["marketplace-details-marketplace-details-module"],{

/***/ "IuOM":
/*!*****************************************************************!*\
  !*** ./src/app/marketplace-details/marketplace-details.page.ts ***!
  \*****************************************************************/
/*! exports provided: MarketplaceDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplaceDetailsPage", function() { return MarketplaceDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_marketplace_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./marketplace-details.page.html */ "oq1m");
/* harmony import */ var _marketplace_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marketplace-details.page.scss */ "r4ki");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/cart.service */ "tsKi");
/* harmony import */ var _core_market_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/market.service */ "rAh5");
/* harmony import */ var _core_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/utility.service */ "ZtwD");








let MarketplaceDetailsPage = class MarketplaceDetailsPage {
    constructor(utility, markerService, activeRoute, cartService) {
        this.utility = utility;
        this.markerService = markerService;
        this.activeRoute = activeRoute;
        this.cartService = cartService;
        this.selectedIndex = 0;
    }
    ngOnInit() {
        this.getParam();
    }
    selectedImage(i, k) {
        this.largeImage = i;
        this.selectedIndex = k;
    }
    getParam() {
        this.utility.present();
        let id = this.activeRoute.snapshot.params.id;
        this.markerService.getProductSingle(id).subscribe((res) => {
            this.product = res;
            console.log(this.product);
            this.largeImage = this.product.imageUrls[0];
            this.sellerInfo = JSON.parse(this.product.sellerInfo);
            this.utility.dismiss();
        });
    }
    cartAdd() {
        // this.utility.present();
        let json = {
            userId: this.utility.getUserId(),
            productId: this.product._id,
        };
        this.cartService.addToCart(json).subscribe((res) => {
            this.utility.dismiss();
            this.utility.presentToastWithOptions('Product added in your cart');
            // this.utility.navigate('/tabs/cart');
        }, (err) => {
            // this.utility.dismiss();
            console.log(err, 'error');
            // this.utility.showAlert(err.error.message);
            this.utility.presentToastWithOptions(err.error.message);
        });
    }
    goBack() {
        this.utility.goBack();
    }
};
MarketplaceDetailsPage.ctorParameters = () => [
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"] },
    { type: _core_market_service__WEBPACK_IMPORTED_MODULE_6__["MarketService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _core_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] }
];
MarketplaceDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-marketplace-details',
        template: _raw_loader_marketplace_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_marketplace_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MarketplaceDetailsPage);



/***/ }),

/***/ "YkqA":
/*!*******************************************************************!*\
  !*** ./src/app/marketplace-details/marketplace-details.module.ts ***!
  \*******************************************************************/
/*! exports provided: MarketplaceDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplaceDetailsPageModule", function() { return MarketplaceDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _marketplace_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marketplace-details-routing.module */ "gWGG");
/* harmony import */ var _marketplace_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marketplace-details.page */ "IuOM");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");








let MarketplaceDetailsPageModule = class MarketplaceDetailsPageModule {
};
MarketplaceDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _marketplace_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["MarketplaceDetailsPageRoutingModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_marketplace_details_page__WEBPACK_IMPORTED_MODULE_6__["MarketplaceDetailsPage"]],
    })
], MarketplaceDetailsPageModule);



/***/ }),

/***/ "gWGG":
/*!***************************************************************************!*\
  !*** ./src/app/marketplace-details/marketplace-details-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: MarketplaceDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplaceDetailsPageRoutingModule", function() { return MarketplaceDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _marketplace_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marketplace-details.page */ "IuOM");




const routes = [
    {
        path: ':id',
        component: _marketplace_details_page__WEBPACK_IMPORTED_MODULE_3__["MarketplaceDetailsPage"],
    },
];
let MarketplaceDetailsPageRoutingModule = class MarketplaceDetailsPageRoutingModule {
};
MarketplaceDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MarketplaceDetailsPageRoutingModule);



/***/ }),

/***/ "oq1m":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/marketplace-details/marketplace-details.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>adoptions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n  <app-header [pageName]='\"Marketplace\"'></app-header>\r\n  <div class=\"bottm-conts\">\r\n    <!-- <h4 class=\"ttl-tp\">MARKETPLACE</h4> -->\r\n    <div class=\"cont-calef\">\r\n      <div class=\"top-stg\">\r\n        <h3>{{product?.name}}</h3>\r\n        <img [src]=\"largeImage\" class=\"main-img\" />\r\n        <ul class=\"list-smll-imgs\">\r\n          <li\r\n            (click)=\"selectedImage(i,k)\"\r\n            *ngFor=\"let i of product?.imageUrls;let k  = index\"\r\n          >\r\n            <img [src]=\"i\" [class.active]=\"selectedIndex === k\" />\r\n          </li>\r\n          <!-- <li> <img src=\"assets/images/mar3.jpg\"> </li>\r\n\t\t\t\t\t<li> <img src=\"assets/images/mar4.jpg\"> </li>\r\n\t\t\t\t\t<li> <img src=\"assets/images/mar5.jpg\"> </li>\r\n\t\t\t\t\t<li> <img src=\"assets/images/mar2.jpg\"> </li> -->\r\n        </ul>\r\n      </div>\r\n      <div class=\"details-ds\">\r\n        <p class=\"pric\">Price: ${{product?.price}}</p>\r\n        <div class=\"des-box\">\r\n          <span> Description </span>\r\n          <p>{{product?.description}}</p>\r\n        </div>\r\n        <div class=\"des-box\">\r\n          <span> Seller Information </span>\r\n          <ul class=\"detils-box\">\r\n            <li>\r\n              Name\r\n              <span> {{sellerInfo?.sellerName |titlecase}} </span>\r\n            </li>\r\n            <!-- <li>Phone Number <span>{{sellerInfo?.contact}} </span></li> -->\r\n            <li>Email Address <span> {{sellerInfo?.email}}</span></li>\r\n            <li>Address <span> {{sellerInfo?.address}} </span></li>\r\n            <!-- <li>City <span> Alaska </span></li>\r\n            <li>Country <span> USA </span></li> -->\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"fixd-bottm\">\r\n    <a href=\"javascript:void(0)\" class=\"cart-s\" (click)=\"cartAdd()\">\r\n      Add to Cart\r\n    </a>\r\n    <a\r\n      href=\"javascript:void(0)\"\r\n      routerLink=\"/tabs/chat-single\"\r\n      class=\"cont-slr\"\r\n    >\r\n      Contact Seller\r\n    </a>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "r4ki":
/*!*******************************************************************!*\
  !*** ./src/app/marketplace-details/marketplace-details.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .bottm-conts {\n  padding: 0px;\n}\n\nion-content h4.ttl-tp {\n  margin-right: 25px;\n}\n\nion-content .cont-calef {\n  padding: 20px 20px 60px;\n  margin-top: 20px;\n  display: block;\n}\n\nion-content .top-stg h3 {\n  margin: 0px;\n  font-size: 19px;\n  font-weight: 700;\n  color: #000;\n  letter-spacing: 0px;\n}\n\nion-content .top-stg img.main-img {\n  width: 100%;\n  background: #fff;\n  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);\n  border-radius: 15px;\n  margin-top: 14px;\n  height: 200px;\n  object-fit: cover;\n}\n\nion-content ul.list-smll-imgs {\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n  display: block;\n  white-space: nowrap;\n  overflow: auto;\n  margin-top: 15px;\n}\n\nion-content ul.list-smll-imgs li {\n  display: inline-block;\n}\n\nion-content ul.list-smll-imgs li img {\n  width: 52px;\n  height: 52px;\n  object-fit: cover;\n  border: 1px solid #a2a2a2;\n  border-radius: 10px;\n  margin-right: 12px;\n}\n\nion-content ul.list-smll-imgs img.active {\n  border: 2px solid !important;\n}\n\nion-content p.pric {\n  font-size: 16px;\n  color: #a2a2a2;\n  font-weight: 600;\n  margin-top: 12px;\n}\n\nion-content .des-box {\n  margin-bottom: 20px;\n}\n\nion-content .des-box span {\n  font-size: 13px;\n  color: #6a6a6a;\n  font-weight: 700;\n}\n\nion-content .des-box p {\n  margin: 0px;\n  font-size: 14px;\n  color: #b4b3b3;\n  line-height: 18px;\n  margin-top: 3px;\n}\n\nion-content ul.detils-box {\n  padding: 10px 15px;\n  background: #fff;\n  list-style: none;\n  margin: 0px;\n  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.17);\n  border-radius: 13px;\n  margin: 10px 0;\n  display: flex;\n  flex-wrap: wrap;\n}\n\nion-content ul.detils-box li {\n  flex: 0 0 50%;\n  width: 50%;\n  color: #a2a2a2;\n  font-size: 13px;\n  border-bottom: 1px dashed #cecece;\n  padding: 10px 0;\n  line-height: 18px;\n}\n\nion-content ul.detils-box li span {\n  font-size: 13px;\n  color: #6a6a6a;\n  font-weight: 700;\n  display: block;\n}\n\nion-content .fixd-bottm {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 14px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: linear-gradient(to bottom, #ffffff, #d7d7d7);\n}\n\nion-content .fixd-bottm .cart-s {\n  flex: 1;\n  text-align: center;\n  background: #bfbfbf;\n  border: 1px solid #bfbfbf;\n  padding: 10px;\n  border-radius: 50px;\n  color: #fff;\n  font-size: 16px;\n  text-decoration: none;\n  font-weight: 500;\n  margin: 0 3px;\n}\n\nion-content .fixd-bottm .cont-slr {\n  flex: 1;\n  text-align: center;\n  background: transparent;\n  border: 1px solid #bfbfbf;\n  padding: 10px;\n  border-radius: 50px;\n  color: #a2a2a2;\n  font-size: 16px;\n  text-decoration: none;\n  font-weight: 500;\n  margin: 0 3px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1hcmtldHBsYWNlLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBWTtBQUFoQjs7QUFGQTtFQUtJLGtCQUFrQjtBQUN0Qjs7QUFOQTtFQVFJLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsY0FBYztBQUVsQjs7QUFaQTtFQWNNLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7QUFFekI7O0FBcEJBO0VBcUJNLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsNENBQTRDO0VBQzVDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQjtBQUd2Qjs7QUE5QkE7RUErQkksWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCO0FBR3BCOztBQXhDQTtFQXVDTSxxQkFBcUI7QUFLM0I7O0FBNUNBO0VBeUNRLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBTzFCOztBQXJEQTtFQWtETSw0QkFBNEI7QUFPbEM7O0FBekRBO0VBc0RJLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQU9wQjs7QUFoRUE7RUE0REksbUJBQW1CO0FBUXZCOztBQXBFQTtFQThETSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQVV0Qjs7QUExRUE7RUFtRU0sV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7QUFXckI7O0FBbEZBO0VBMkVJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCw0Q0FBNEM7RUFDNUMsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZUFBZTtBQVduQjs7QUE5RkE7RUFxRk0sYUFBYTtFQUNiLFVBQVU7RUFDVixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsaUJBQWlCO0FBYXZCOztBQXhHQTtFQTZGUSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixjQUFjO0FBZXRCOztBQS9HQTtFQXFHSSxlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHdEQUF3RDtBQWM1RDs7QUEzSEE7RUErR00sT0FBTztFQUNQLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFnQm5COztBQXpJQTtFQTRITSxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsYUFBYTtBQWlCbkIiLCJmaWxlIjoibWFya2V0cGxhY2UtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLmJvdHRtLWNvbnRzIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcbiAgaDQudHRsLXRwIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICB9XHJcbiAgLmNvbnQtY2FsZWYge1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC50b3Atc3RnIHtcclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICBpbWcubWFpbi1pbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG4gIH1cclxuICB1bC5saXN0LXNtbGwtaW1ncyB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBsaSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNTJweDtcclxuICAgICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2EyYTJhMjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW1nLmFjdGl2ZSB7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHAucHJpYyB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2EyYTJhMjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIH1cclxuICAuZGVzLWJveCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgY29sb3I6ICM2YTZhNmE7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICNiNGIzYjM7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVsLmRldGlscy1ib3gge1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGxpIHtcclxuICAgICAgZmxleDogMCAwIDUwJTtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgY29sb3I6ICNhMmEyYTI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2VjZWNlO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICM2YTZhNmE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuZml4ZC1ib3R0bSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZmZmYsICNkN2Q3ZDcpO1xyXG4gICAgLmNhcnQtcyB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDogI2JmYmZiZjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmZiZjtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBtYXJnaW46IDAgM3B4O1xyXG4gICAgfVxyXG4gICAgLmNvbnQtc2xyIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmZiZjtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgY29sb3I6ICNhMmEyYTI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBtYXJnaW46IDAgM3B4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vLyBzcGFuLmJhY2staWNvbiB7XHJcbi8vICAgcGFkZGluZzogMTVweDtcclxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgZm9udC1zaXplOiAyNXB4O1xyXG4vLyAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgIG1hcmdpbi10b3A6IDBweDtcclxuLy8gfVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=marketplace-details-marketplace-details-module.js.map