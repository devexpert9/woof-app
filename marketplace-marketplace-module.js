(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["marketplace-marketplace-module"],{

/***/ "/cIy":
/*!***********************************************************!*\
  !*** ./src/app/marketplace/marketplace-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MarketplacePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplacePageRoutingModule", function() { return MarketplacePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _marketplace_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marketplace.page */ "dtEm");




const routes = [
    {
        path: '',
        component: _marketplace_page__WEBPACK_IMPORTED_MODULE_3__["MarketplacePage"],
    },
];
let MarketplacePageRoutingModule = class MarketplacePageRoutingModule {
};
MarketplacePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MarketplacePageRoutingModule);



/***/ }),

/***/ "Ogo4":
/*!***************************************************!*\
  !*** ./src/app/marketplace/marketplace.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .bottm-conts {\n  padding: 0px;\n}\n\nion-content h4.ttl-tp {\n  margin-right: 25px;\n}\n\nion-content .cont-calef {\n  padding: 20px 0px;\n  margin-top: 20px;\n  display: block;\n}\n\nion-content .cont-spa {\n  padding: 0px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\nion-content .cont-spa ion-segment {\n  display: flex;\n  background: transparent;\n  border-radius: 0px;\n  justify-content: flex-start;\n  padding: 0px;\n}\n\nion-content .cont-spa ion-segment ion-segment-button {\n  border: 1px solid #a2a2a2;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  height: 33px !important;\n  min-height: 33px !important;\n  color: #a2a2a2;\n  flex: initial;\n  font-size: 17px;\n  font-weight: 600;\n  border-radius: 50px;\n  margin-right: 8px;\n  line-height: 20px !important;\n  text-transform: capitalize;\n}\n\nion-content .cont-spa ion-segment ion-segment-button.segment-button-checked {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  background: #bfbfbf;\n  border-radius: 50px;\n  --border-radius: 50px;\n  --color-checked: var(--ion-color-white) !important;\n  flex: initial;\n  color: #fff;\n  border: 1px solid #bfbfbf;\n}\n\nion-content .top-search-s {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  background: #f7f7f7;\n  border: 1px solid #e8e8e8;\n  position: relative;\n  border-radius: 7px;\n  min-height: 52px;\n  margin: 25px 0 15px;\n  padding: 0px 10px;\n}\n\nion-content .top-search-s span.icos-f {\n  font-size: 25px;\n  color: #a2a2a2;\n  margin-right: 8px;\n  margin-top: 5px;\n}\n\nion-content .top-search-s ion-input {\n  font-size: 19px;\n  color: #302f2f;\n  --placeholder-color: #302f2f;\n  --placeholder-opacity: 1;\n  font-weight: 500;\n  padding: 0px;\n}\n\nion-content .select-rigt {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nion-content .select-rigt ion-select {\n  background: #bfbfbf;\n  color: #fff;\n  --placeholder-color: #fff;\n  --placeholder-opacity: 1;\n  border-radius: 50px;\n  font-weight: 600;\n  font-size: 16px;\n  padding: 9px 22px;\n}\n\nion-content .select-rigt h4 {\n  margin: 0px;\n  font-size: 18px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\nion-content .pos-rel {\n  padding: 0 20px;\n}\n\nion-content .list-afs {\n  display: block;\n  margin-top: 20px;\n}\n\nion-content ion-row.mn-5 {\n  margin: 0 -5px;\n}\n\nion-content ion-row.mn-5 ion-col {\n  padding: 0 7px;\n}\n\nion-content ion-row.mn-5 .box-sect {\n  background: #fff;\n  padding: 10px;\n  border-radius: 15px;\n  box-shadow: 0 0 16px rgba(0, 0, 0, 0.11);\n  margin-bottom: 15px;\n}\n\nion-content ion-row.mn-5 .box-sect img.prd-img {\n  width: 100%;\n  height: 75px;\n  object-fit: contain;\n  border: 1px solid #f0f0f0;\n  border-radius: 10px;\n}\n\nion-content ion-row.mn-5 .box-sect h4 {\n  margin: 0px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #676767;\n  margin-top: 8px;\n}\n\nion-content ion-row.mn-5 .box-sect p {\n  margin: 0px;\n  font-size: 15px;\n  color: #313131;\n  margin-top: 3px;\n  font-weight: 500;\n}\n\nion-content ion-row.mn-5 .box-sect p span {\n  font-size: 13px;\n  font-weight: 700;\n  display: inline-block;\n  color: #4e4e4e;\n  margin-left: 3px;\n}\n\nion-content ion-row.mn-5 .box-sect .post_by {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-top: 0px;\n  margin-bottom: 3px;\n}\n\nion-content ion-row.mn-5 .box-sect .post_by p {\n  font-size: 13px;\n  color: #313131;\n  margin: 0px;\n  font-weight: 700;\n}\n\nion-content ion-row.mn-5 .box-sect .post_by img {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  margin-left: 4px;\n  object-fit: cover;\n}\n\nion-content span.clear {\n  position: absolute;\n  right: 180px;\n  top: 103px;\n  font-size: 30px;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1hcmtldHBsYWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQVk7QUFBaEI7O0FBRkE7RUFLSSxrQkFBa0I7QUFDdEI7O0FBTkE7RUFRSSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFFbEI7O0FBWkE7RUFhSSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFHL0I7O0FBbkJBO0VBa0JNLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixZQUFZO0FBS2xCOztBQTNCQTtFQXdCUSx5QkFBeUI7RUFDekIsb0JBQWdCO0VBQ2hCLGtCQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsMEJBQTBCO0FBT2xDOztBQTNDQTtFQXVDUSx5Q0FBa0I7RUFDbEIsaURBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIscUJBQWdCO0VBQ2hCLGtEQUFnQjtFQUNoQixhQUFhO0VBQ2IsV0FBVztFQUNYLHlCQUF5QjtBQVFqQzs7QUF2REE7RUFvREksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBT3JCOztBQXBFQTtFQStETSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBU3JCOztBQTNFQTtFQXFFTSxlQUFlO0VBQ2YsY0FBYztFQUNkLDRCQUFvQjtFQUNwQix3QkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFVbEI7O0FBcEZBO0VBOEVJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBVWxDOztBQTFGQTtFQWtGTSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHlCQUFvQjtFQUNwQix3QkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBWXZCOztBQXJHQTtFQTRGTSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFhL0I7O0FBNUdBO0VBbUdJLGVBQWU7QUFhbkI7O0FBaEhBO0VBc0dJLGNBQWM7RUFDZCxnQkFBZ0I7QUFjcEI7O0FBckhBO0VBMEdJLGNBQWM7QUFlbEI7O0FBekhBO0VBNEdNLGNBQWM7QUFpQnBCOztBQTdIQTtFQStHTSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsbUJBQW1CO0FBa0J6Qjs7QUFySUE7RUFxSFEsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQW9CM0I7O0FBN0lBO0VBNEhRLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0FBcUJ2Qjs7QUFySkE7RUFtSVEsV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQXNCeEI7O0FBN0pBO0VBeUlVLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0I7QUF3QjFCOztBQXJLQTtFQWlKUSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2Ysa0JBQWtCO0FBd0IxQjs7QUE3S0E7RUF1SlUsZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0FBMEIxQjs7QUFwTEE7RUE2SlUsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQTJCM0I7O0FBNUxBO0VBdUtJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLGVBQWU7RUFDZixlQUFlO0FBeUJuQiIsImZpbGUiOiJtYXJrZXRwbGFjZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLmJvdHRtLWNvbnRzIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcbiAgaDQudHRsLXRwIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICB9XHJcbiAgLmNvbnQtY2FsZWYge1xyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5jb250LXNwYSB7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgaW9uLXNlZ21lbnQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYTJhMmEyO1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDMzcHggIWltcG9ydGFudDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICNhMmEyYTI7XHJcbiAgICAgICAgZmxleDogaW5pdGlhbDtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xyXG4gICAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2JmYmZiZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSkgIWltcG9ydGFudDtcclxuICAgICAgICBmbGV4OiBpbml0aWFsO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnRvcC1zZWFyY2gtcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgbWluLWhlaWdodDogNTJweDtcclxuICAgIG1hcmdpbjogMjVweCAwIDE1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIHNwYW4uaWNvcy1mIHtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICBjb2xvcjogI2EyYTJhMjtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgY29sb3I6ICMzMDJmMmY7XHJcbiAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICMzMDJmMmY7XHJcbiAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2VsZWN0LXJpZ3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBpb24tc2VsZWN0IHtcclxuICAgICAgYmFja2dyb3VuZDogI2JmYmZiZjtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNmZmY7XHJcbiAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBwYWRkaW5nOiA5cHggMjJweDtcclxuICAgIH1cclxuICAgIGg0IHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuICB9XHJcbiAgLnBvcy1yZWwge1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gIH1cclxuICAubGlzdC1hZnMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBpb24tcm93Lm1uLTUge1xyXG4gICAgbWFyZ2luOiAwIC01cHg7XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgcGFkZGluZzogMCA3cHg7XHJcbiAgICB9XHJcbiAgICAuYm94LXNlY3Qge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMTZweCByZ2JhKDAsIDAsIDAsIDAuMTEpO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICBpbWcucHJkLWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGg0IHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzY3Njc2NztcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMzEzMTMxO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGNvbG9yOiAjNGU0ZTRlO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnBvc3RfYnkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgIGNvbG9yOiAjMzEzMTMxO1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNwYW4uY2xlYXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE4MHB4O1xyXG4gICAgdG9wOiAxMDNweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "ZDTJ":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/marketplace/marketplace.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>adoptions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n  <app-header [pageName]='\"Marketplace\"'></app-header>\r\n  <div class=\"bottm-conts\">\r\n    <!-- <h4 class=\"ttl-tp\">MARKETPLACE</h4> -->\r\n    <div class=\"cont-calef\">\r\n      <div class=\"tabs-cotsf\">\r\n        <div class=\"cont-spa\">\r\n          <ion-segment\r\n            [(ngModel)]=\"profiletab\"\r\n            class=\"tabs-btns\"\r\n            (ionChange)=\"segmentChanged($event)\"\r\n          >\r\n            <ion-segment-button value=\"all\"> All </ion-segment-button>\r\n            <ion-segment-button [value]=\"t.name\" *ngFor=\"let t of types\">\r\n              {{t.name | titlecase}}\r\n            </ion-segment-button>\r\n          </ion-segment>\r\n        </div>\r\n\r\n        <div [ngSwitch]=\"profiletab\">\r\n          <ion-list *ngSwitchCase=\"'dog'\" class=\"bt-syr\">\r\n            <div class=\"pos-rel\">\r\n              <div class=\"top-search-s\">\r\n                <!-- <span class=\"icos-f\">\r\n                  <ion-icon name=\"location\"></ion-icon>\r\n                </span> -->\r\n                <ion-input\r\n                  placeholder=\"Search here...\"\r\n                  (keyup)=\"handleSearch($event,'dog')\"\r\n                ></ion-input>\r\n              </div>\r\n              <div class=\"select-rigt\">\r\n                <h4>{{label}}</h4>\r\n                <ion-select\r\n                  interface=\"popover\"\r\n                  placeholder=\"Filter\"\r\n                  (ionChange)=\"handleFilter($event,'dog')\"\r\n                  value=\"all\"\r\n                >\r\n                  <ion-select-option value=\"all\" selected\r\n                    >All</ion-select-option\r\n                  >\r\n\r\n                  <ion-select-option [value]=\"f.value\" *ngFor=\"let f of filter\"\r\n                    >{{f.name | titlecase}}</ion-select-option\r\n                  >\r\n                </ion-select>\r\n              </div>\r\n              <div class=\"list-afs\">\r\n                <ion-row class=\"mn-5\">\r\n                  <ion-col size=\"6\" *ngFor=\"let d of filterDogs\">\r\n                    <div\r\n                      class=\"box-sect\"\r\n                      [routerLink]=\"'/marketplace-details/'+d._id\"\r\n                    >\r\n                      <img [src]=\"d?.imageUrls[0]\" class=\"prd-img\" />\r\n                      <h4>{{d?.name}}</h4>\r\n                      <p><span> ${{d?.price}} </span></p>\r\n                      <!-- <div class=\"post_by\">\r\n                        <p>Posted by</p>\r\n                        <img src=\"assets/images/user5.jpg\" />\r\n                      </div> -->\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n              <div class=\"empty\" *ngIf=\"!filterDogs?.length\">\r\n                No data found with your search\r\n              </div>\r\n            </div>\r\n          </ion-list>\r\n          <ion-list *ngSwitchCase=\"'cat'\" class=\"bt-syr\">\r\n            <div class=\"pos-rel\">\r\n              <div class=\"top-search-s\">\r\n                <!-- <span class=\"icos-f\">\r\n                  <ion-icon name=\"location\"></ion-icon>\r\n                </span> -->\r\n                <ion-input\r\n                  placeholder=\"Search here...\"\r\n                  (keyup)=\"handleSearch($event,'cat')\"\r\n                ></ion-input>\r\n              </div>\r\n              <div class=\"select-rigt\">\r\n                <h4>{{label}}</h4>\r\n                <ion-select\r\n                  interface=\"popover\"\r\n                  placeholder=\"Filter\"\r\n                  (ionChange)=\"handleFilter($event,'cat')\"\r\n                  value=\"all\"\r\n                >\r\n                  <ion-select-option [value]=\"f.value\" *ngFor=\"let f of filter\"\r\n                    >{{f.name | titlecase}}</ion-select-option\r\n                  >\r\n                </ion-select>\r\n              </div>\r\n              <div class=\"list-afs\">\r\n                <ion-row class=\"mn-5\">\r\n                  <ion-col size=\"6\" *ngFor=\"let c of filterCats\">\r\n                    <div\r\n                      class=\"box-sect\"\r\n                      [routerLink]=\"'/marketplace-details/'+c._id\"\r\n                    >\r\n                      <img [src]=\"c?.imageUrls[0]\" class=\"prd-img\" />\r\n                      <h4>{{c?.name}}</h4>\r\n                      <p><span> ${{c?.price}} </span></p>\r\n                      <!-- <div class=\"post_by\">\r\n                        <p>Posted by</p>\r\n                        <img src=\"assets/images/user5.jpg\" />\r\n                      </div> -->\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <div class=\"empty\" *ngIf=\"!filterCats?.length\">\r\n                  No data found with your search\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-list>\r\n          <ion-list *ngSwitchCase=\"'all'\" class=\"bt-syr\">\r\n            <div class=\"pos-rel\">\r\n              <div class=\"top-search-s\">\r\n                <ion-input\r\n                  placeholder=\"Search here...\"\r\n                  (keyup)=\"handleSearch($event,'all')\"\r\n                ></ion-input>\r\n              </div>\r\n              <div class=\"select-rigt\">\r\n                <h4>{{label}}</h4>\r\n                <ion-select\r\n                  interface=\"popover\"\r\n                  placeholder=\"Filter\"\r\n                  (ionChange)=\"handleFilter($event,'all')\"\r\n                  value=\"all\"\r\n                >\r\n                  <ion-select-option value=\"all\" selected\r\n                    >All</ion-select-option\r\n                  >\r\n                  <ion-select-option [value]=\"f.value\" *ngFor=\"let f of filter\"\r\n                    >{{f.name | titlecase}}</ion-select-option\r\n                  >\r\n                </ion-select>\r\n              </div>\r\n              <div class=\"list-afs\">\r\n                <ion-row class=\"mn-5\">\r\n                  <ion-col size=\"6\" *ngFor=\"let d of filterProducts\">\r\n                    <div\r\n                      class=\"box-sect\"\r\n                      [routerLink]=\"'/marketplace-details/'+d._id\"\r\n                    >\r\n                      <img [src]=\"d?.imageUrls[0]\" class=\"prd-img\" />\r\n                      <h4>{{d?.name}}</h4>\r\n                      <p><span> ${{d?.price}} </span></p>\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <div class=\"empty\" *ngIf=\"!filterProducts?.length\">\r\n                  No data found with your search\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-list>\r\n\r\n          <ion-list *ngSwitchCase=\"'other'\" class=\"bt-syr\">\r\n            <div class=\"pos-rel\">\r\n              <div class=\"top-search-s\">\r\n                <ion-input\r\n                  placeholder=\"Search here...\"\r\n                  (keyup)=\"handleSearch($event,'all')\"\r\n                ></ion-input>\r\n              </div>\r\n              <div class=\"select-rigt\">\r\n                <h4>{{label}}</h4>\r\n                <ion-select\r\n                  interface=\"popover\"\r\n                  placeholder=\"Filter\"\r\n                  (ionChange)=\"handleFilter($event,'all')\"\r\n                  value=\"all\"\r\n                >\r\n                  <ion-select-option value=\"all\" selected\r\n                    >All</ion-select-option\r\n                  >\r\n\r\n                  <ion-select-option [value]=\"f.value\" *ngFor=\"let f of filter\"\r\n                    >{{f.name | titlecase}}</ion-select-option\r\n                  >\r\n                </ion-select>\r\n              </div>\r\n              <div class=\"list-afs\">\r\n                <ion-row class=\"mn-5\">\r\n                  <ion-col size=\"6\" *ngFor=\"let d of filterProducts\">\r\n                    <div\r\n                      class=\"box-sect\"\r\n                      [routerLink]=\"'/marketplace-details/'+d._id\"\r\n                    >\r\n                      <img [src]=\"d?.imageUrls[0]\" class=\"prd-img\" />\r\n                      <h4>{{d?.name}}</h4>\r\n                      <p><span> ${{d?.price}} </span></p>\r\n                      <!-- <div class=\"post_by\">\r\n                        <p>Posted by</p>\r\n                        <img src=\"assets/images/user5.jpg\" />\r\n                      </div> -->\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <div class=\"empty\" *ngIf=\"!filterProducts?.length\">\r\n                  No data found with your search\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-list>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "dtEm":
/*!*************************************************!*\
  !*** ./src/app/marketplace/marketplace.page.ts ***!
  \*************************************************/
/*! exports provided: MarketplacePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplacePage", function() { return MarketplacePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_marketplace_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./marketplace.page.html */ "ZDTJ");
/* harmony import */ var _marketplace_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marketplace.page.scss */ "Ogo4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_market_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/market.service */ "rAh5");
/* harmony import */ var _core_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/utility.service */ "ZtwD");







let MarketplacePage = class MarketplacePage {
    constructor(marketService, utility, activateRoute) {
        this.marketService = marketService;
        this.utility = utility;
        this.activateRoute = activateRoute;
        this.profiletab = 'all';
        this.loaded = false;
        this.filter = [
            {
                name: 'Kibble/Dry',
                value: 'kibbleDry',
            },
            {
                name: 'Canned',
                value: 'canned',
            },
            {
                name: 'Semi-Moist',
                value: 'semiMoist',
            },
            {
                name: 'homeCooked',
                value: 'Home Cooked',
            },
        ];
    }
    ngOnInit() {
        this.configurePage();
        this.getProducts();
        this.getPetType();
    }
    configurePage() {
        let category = this.activateRoute.snapshot.queryParams.category;
        if (category == 'all') {
            this.label = 'all';
        }
        else if (category == 'food') {
            this.label = 'food';
        }
        else if (category == 'medicines') {
            this.label = 'medicines';
            this.filter = [];
        }
        else if (category == 'accessories') {
            this.label = 'accessories';
            this.filter = [];
        }
        else if (category == 'pets') {
            this.label = 'pets';
            this.filter = [];
        }
    }
    getProducts() {
        this.utility.present();
        let catId = this.activateRoute.snapshot.queryParams.id;
        this.marketService.getProducts(catId, 1, 10).subscribe((res) => {
            console.log(res);
            this.products = res;
            this.filterProducts = this.products;
            this.getCatProducts();
            this.getDogProducts();
            this.utility.dismiss();
        }, (err) => {
            this.utility.dismiss();
        });
    }
    getCatProducts() {
        this.catProducts = this.products.filter((v) => v.petTypeId.name === 'cat');
        this.filterCats = this.catProducts;
    }
    getDogProducts() {
        this.dogProducts = this.products.filter((v) => v.petTypeId.name === 'dog');
        this.filterDogs = this.dogProducts;
    }
    handleFilter(e, tab) {
        const val = e.target.value;
        console.log(val, tab);
        if (tab === 'cat') {
            if (val == 'all') {
                return this.getCatProducts();
            }
            this.catProducts = this.products.filter((v) => v.productType === val && v.petTypeId.name === 'cat');
        }
        else {
            if (val == 'all') {
                return this.getDogProducts();
            }
            this.dogProducts = this.products.filter((v) => v.productType === val && v.petTypeId.name === 'dog');
        }
        console.log(this.catProducts, this.dogProducts);
    }
    handleSearch(e, type) {
        if (type == 'dog') {
            this.filterDogs = this.dogProducts.filter((name) => {
                name = name.name.toLowerCase();
                return name.indexOf(e.target.value) > -1;
            });
        }
        else if (type == 'cat') {
            this.filterCats = this.catProducts.filter((name) => {
                name = name.name.toLowerCase();
                return name.indexOf(e.target.value) > -1;
            });
        }
        else if (type == 'all') {
            this.filterProducts = this.products.filter((name) => {
                name = name.name.toLowerCase();
                return name.indexOf(e.target.value) > -1;
            });
        }
        console.log(this.filterDogs);
    }
    segmentChanged(e) {
        console.log(e);
        this.getDogProducts();
        this.getCatProducts();
        const { detail } = e;
        if (detail == 'all') {
        }
        else {
        }
    }
    clearFilter() {
        this.fitlerValue = '';
        this.getDogProducts();
        this.getCatProducts();
    }
    goBack() {
        this.utility.goBack();
    }
    getPetType() {
        this.marketService.getPetType().subscribe((res) => {
            console.log(res, 'types');
            this.types = res;
        });
    }
};
MarketplacePage.ctorParameters = () => [
    { type: _core_market_service__WEBPACK_IMPORTED_MODULE_5__["MarketService"] },
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
MarketplacePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-marketplace',
        template: _raw_loader_marketplace_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_marketplace_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MarketplacePage);



/***/ }),

/***/ "h2Vq":
/*!***************************************************!*\
  !*** ./src/app/marketplace/marketplace.module.ts ***!
  \***************************************************/
/*! exports provided: MarketplacePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplacePageModule", function() { return MarketplacePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _marketplace_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marketplace-routing.module */ "/cIy");
/* harmony import */ var _marketplace_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marketplace.page */ "dtEm");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");








let MarketplacePageModule = class MarketplacePageModule {
};
MarketplacePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _marketplace_routing_module__WEBPACK_IMPORTED_MODULE_5__["MarketplacePageRoutingModule"],
        ],
        declarations: [_marketplace_page__WEBPACK_IMPORTED_MODULE_6__["MarketplacePage"]],
    })
], MarketplacePageModule);



/***/ })

}]);
//# sourceMappingURL=marketplace-marketplace-module.js.map