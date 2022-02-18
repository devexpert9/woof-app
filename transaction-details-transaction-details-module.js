(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transaction-details-transaction-details-module"],{

/***/ "8tRE":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transaction-details/transaction-details.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\t<app-header [pageName]='\"aa\"' [pn]='\"detail\"' app=\"serviceProvider\"></app-header>\r\n\t<div class=\"bottm-conts pd-m\">\r\n\t\t<h4 class=\"ttl-tp\">TRANSACTION DETAILS</h4>\r\n</div>\r\n\r\n\t<div class=\"cont-calef\">\r\n\t<div class=\"mm\">\r\n <ion-row>\r\n    <ion-col size=\"6\">\r\n\t<div class=\"left-t\">\r\n\t<img src=\"assets/images/t1.png\" class=\"img-tran\">\r\n\t<h3>$10.00</h3>\r\n\t<p>Total Fees</p>\r\n\t</div>\r\n    </ion-col>\r\n\t<ion-col size=\"6\">\r\n\t<div class=\"left-t right-s\">\r\n\t<img src=\"assets/images/dol.png\" class=\"img-tran\">\r\n\t<div class=\"flx\">\r\n\t<h3>$8.00</h3>\r\n\t<p>Payment Received</p>\r\n\t</div>\r\n\t</div>\r\n\t<div class=\"left-t right-s\">\r\n\t<img src=\"assets/images/per.png\" class=\"img-tran\">\r\n\t<div class=\"flx\">\r\n\t<h3>$2.00</h3>\r\n\t<p>Commission Deducted</p>\r\n\t</div>\r\n\t</div>\r\n    </ion-col>\r\n</ion-row>\r\n</div>\r\n<div class=\"listing\">\r\n<ion-row>\r\n    <ion-col size=\"6\">\r\n\t<div class=\"left-heading\">Payment ID</div>\r\n\t</ion-col>\r\n\t<ion-col size=\"6\">\r\n\t<div class=\"right-heading\">#35687554</div>\r\n\t</ion-col>\r\n</ion-row>\r\n</div><div class=\"listing\">\r\n<ion-row>\r\n    <ion-col size=\"6\">\r\n\t<div class=\"left-heading\">Date</div>\r\n\t</ion-col>\r\n\t<ion-col size=\"6\">\r\n\t<div class=\"right-heading\">3 Mar, 2021</div>\r\n\t</ion-col>\r\n</ion-row>\r\n</div>\r\n<div class=\"listing\">\r\n<ion-row>\r\n    <ion-col size=\"6\">\r\n\t<div class=\"left-heading\">Mode of Appointment</div>\r\n\t</ion-col>\r\n\t<ion-col size=\"6\">\r\n\t<div class=\"right-heading\">Online</div>\r\n\t</ion-col>\r\n</ion-row>\r\n</div>\r\n<div class=\"listing\">\r\n<ion-row>\r\n    <ion-col size=\"6\">\r\n\t<div class=\"left-heading\">Schedule By</div>\r\n\t</ion-col>\r\n\t<ion-col size=\"6\">\r\n\t<div class=\"right-heading\">Chethena Beith</div>\r\n\t</ion-col>\r\n</ion-row>\r\n</div>\r\n<div class=\"listing\">\r\n<ion-row>\r\n    <ion-col size=\"6\">\r\n\t<div class=\"left-heading\">Service Name</div>\r\n\t</ion-col>\r\n\t<ion-col size=\"6\">\r\n\t<div class=\"right-heading\">Pet Walker</div>\r\n\t</ion-col>\r\n</ion-row>\r\n</div>\r\n<div class=\"listing\">\r\n<ion-row>\r\n    <ion-col size=\"6\">\r\n\t<div class=\"left-heading\">Address</div>\r\n\t</ion-col>\r\n\t<ion-col size=\"6\">\r\n\t<div class=\"right-heading\">Park Hills, Street 12</div>\r\n\t</ion-col>\r\n</ion-row>\r\n</div>\r\n<div class=\"listing\">\r\n<ion-row>\r\n    <ion-col size=\"6\">\r\n\t<div class=\"left-heading\">Mode of payment</div>\r\n\t</ion-col>\r\n\t<ion-col size=\"6\">\r\n\t<div class=\"right-heading\">Paypal</div>\r\n\t</ion-col>\r\n</ion-row>\r\n</div>\r\n<div class=\"listing\">\r\n<ion-row>\r\n    <ion-col size=\"6\">\r\n\t<div class=\"left-heading\">Status</div>\r\n\t</ion-col>\r\n\t<ion-col size=\"6\">\r\n\t<div class=\"right-heading\"><img src=\"assets/images/paymnt-don.png\" class=\"img-paymnt\">Done</div>\r\n\t</ion-col>\r\n</ion-row>\r\n</div>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "grr4":
/*!*******************************************************************!*\
  !*** ./src/app/transaction-details/transaction-details.module.ts ***!
  \*******************************************************************/
/*! exports provided: TransactionDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailsPageModule", function() { return TransactionDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _transaction_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transaction-details-routing.module */ "xb/B");
/* harmony import */ var _transaction_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transaction-details.page */ "rvTI");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");








let TransactionDetailsPageModule = class TransactionDetailsPageModule {
};
TransactionDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _transaction_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["TransactionDetailsPageRoutingModule"]
        ],
        declarations: [_transaction_details_page__WEBPACK_IMPORTED_MODULE_6__["TransactionDetailsPage"]]
    })
], TransactionDetailsPageModule);



/***/ }),

/***/ "qWQB":
/*!*******************************************************************!*\
  !*** ./src/app/transaction-details/transaction-details.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pd-m .bottm-conts {\n  position: relative;\n  padding: 20px 15px;\n  display: block;\n}\n\n.bottm-conts.pd-m {\n  padding: 18px 14px;\n}\n\n.cont-calef {\n  padding: 8px;\n}\n\n.left-t {\n  background: #f2f2f2;\n  padding: 12px;\n  border-radius: 11px;\n  padding: 22px 12px;\n}\n\n.left-t h3 {\n  color: #bfbfbf;\n  font-size: 21px;\n  font-weight: bold;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.left-t p {\n  margin: 0;\n  font-weight: 400;\n  font-size: 12px;\n  color: #000;\n  opacity: .5;\n  letter-spacing: 0;\n}\n\n.left-t.right-s {\n  display: flex;\n  margin-bottom: 9px;\n  padding: 10px 5px;\n}\n\n.flx p {\n  font-size: 11px !important;\n  font-weight: 600;\n}\n\n.right-s img.img-tran {\n  width: 100%;\n  max-width: 43px;\n  height: 50px;\n  object-fit: contain;\n  margin-right: 3px;\n}\n\n.flx h3 {\n  color: #bfbfbf;\n  font-size: 17px;\n}\n\n.right-heading {\n  text-align: right;\n  color: #000;\n  opacity: .6;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.left-heading {\n  color: #080808;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.img-paymnt {\n  position: relative;\n  left: -2px;\n  top: 3px;\n}\n\n.mm {\n  margin-bottom: 16px;\n}\n\n.listing {\n  margin-bottom: 21px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRyYW5zYWN0aW9uLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2xCOztBQUNBO0VBQ0ksa0JBQWtCO0FBRXRCOztBQUFBO0VBQ0ksWUFBWTtBQUdoQjs7QUFEQTtFQUNJLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQUssa0JBQWtCO0FBSzlDOztBQUhBO0VBQ0csY0FBYztFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtBQU10Qjs7QUFKQTtFQUNHLFNBQVM7RUFDUixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUJBQWlCO0FBT3JCOztBQUxBO0VBQ0UsYUFBYTtFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFRckI7O0FBTkE7RUFDSSwwQkFBMEI7RUFBSyxnQkFBZ0I7QUFVbkQ7O0FBUkE7RUFDSSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBV3JCOztBQVZDO0VBQ0csY0FBYztFQUNkLGVBQWU7QUFhbkI7O0FBWEM7RUFDRyxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0FBY3BCOztBQVpBO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFlcEI7O0FBZEM7RUFDRyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7QUFpQlo7O0FBZkE7RUFDSSxtQkFBbUI7QUFrQnZCOztBQWhCQTtFQUNJLG1CQUFtQjtBQW1CdkIiLCJmaWxlIjoidHJhbnNhY3Rpb24tZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGQtbSAuYm90dG0tY29udHMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMjBweCAxNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmJvdHRtLWNvbnRzLnBkLW0ge1xyXG4gICAgcGFkZGluZzogMThweCAxNHB4O1xyXG59XHJcbi5jb250LWNhbGVmIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxufVxyXG4ubGVmdC10IHtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTFweDsgICAgcGFkZGluZzogMjJweCAxMnB4O1xyXG59XHJcbi5sZWZ0LXQgaDMge1xyXG4gICBjb2xvcjogI2JmYmZiZjtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5sZWZ0LXQgcCB7XHJcbiAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuLmxlZnQtdC5yaWdodC1zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG4gICAgcGFkZGluZzogMTBweCA1cHg7XHJcbn1cclxuLmZseCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50OyAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5yaWdodC1zIGltZy5pbWctdHJhbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNDNweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufS5mbHggIGgzIHtcclxuICAgIGNvbG9yOiAjYmZiZmJmO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG5cdH1cclxuXHQucmlnaHQtaGVhZGluZyB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgb3BhY2l0eTogLjY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5sZWZ0LWhlYWRpbmcge1xyXG4gICAgY29sb3I6ICMwODA4MDg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59LmltZy1wYXltbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTJweDtcclxuICAgIHRvcDogM3B4O1xyXG59XHJcbi5tbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcbi5saXN0aW5nIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIxcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "rvTI":
/*!*****************************************************************!*\
  !*** ./src/app/transaction-details/transaction-details.page.ts ***!
  \*****************************************************************/
/*! exports provided: TransactionDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailsPage", function() { return TransactionDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_transaction_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./transaction-details.page.html */ "8tRE");
/* harmony import */ var _transaction_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transaction-details.page.scss */ "qWQB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TransactionDetailsPage = class TransactionDetailsPage {
    constructor() { }
    ngOnInit() {
    }
};
TransactionDetailsPage.ctorParameters = () => [];
TransactionDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-transaction-details',
        template: _raw_loader_transaction_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_transaction_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TransactionDetailsPage);



/***/ }),

/***/ "xb/B":
/*!***************************************************************************!*\
  !*** ./src/app/transaction-details/transaction-details-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: TransactionDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailsPageRoutingModule", function() { return TransactionDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _transaction_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction-details.page */ "rvTI");




const routes = [
    {
        path: '',
        component: _transaction_details_page__WEBPACK_IMPORTED_MODULE_3__["TransactionDetailsPage"]
    }
];
let TransactionDetailsPageRoutingModule = class TransactionDetailsPageRoutingModule {
};
TransactionDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TransactionDetailsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=transaction-details-transaction-details-module.js.map