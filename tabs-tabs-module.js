(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "AHrv":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\r\n  <ion-tab-bar\r\n    slot=\"bottom\"\r\n    class=\"tabs-nrs\"\r\n    *ngIf=\"user_role != 'service provider'\"\r\n  >\r\n    <ion-tab-button tab=\"home\">\r\n      <ion-icon name=\"paw\"></ion-icon>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"search\">\r\n      <ion-icon name=\"search\"></ion-icon>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"calendar\">\r\n    <!-- <ion-tab-button tab=\"appointments-new\"> -->\r\n      <ion-icon name=\"calendar-outline\"></ion-icon>\r\n    </ion-tab-button>\r\n    <!-- <ion-tab-button tab=\"profile\" profile> -->\r\n    <ion-tab-button tab=\"profile-details\" profile>\r\n      <img\r\n        *ngIf=\"utility.refreshDetail\"\r\n        [src]=\"utility.dogFooterImage ? utility.dogFooterImage:'assets/images/dummyuser.png'\"\r\n        class=\"icon-rsr\"\r\n      />\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n  <ng-container *ngIf=\"user_role == 'service provider'\">\r\n    <ion-tab-bar slot=\"bottom\" class=\"tabs-nrs\">\r\n      <!-- <ion-tab-button tab=\"provider-home\"> -->\r\n      <ion-tab-button tab=\"calender-appointment\">\r\n        <!-- <img src=\"assets/images/f-1.png\" class=\"\" /> -->\r\n        <img src=\"assets/images/c-1.png\" class=\"\" />\r\n      </ion-tab-button>\r\n\r\n      <!-- <ion-tab-button tab=\"calendar\"> -->\r\n      <ion-tab-button tab=\"requests-appointment\">\r\n        <img src=\"assets/images/notpad.png\" class=\"\" />\r\n      </ion-tab-button>\r\n\r\n      <!-- <ion-tab-button tab=\"service-provider-transaction\"> -->\r\n      <ion-tab-button tab=\"chat\">\r\n        <!-- <img src=\"assets/images/f-3.png\" class=\"\" /> -->\r\n        <img src=\"assets/images/chat-icon.png\" class=\"\" />\r\n      </ion-tab-button>\r\n      <ion-tab-button tab=\"profile\" profile class=\"profile\">\r\n        <!-- <img src=\"assets/images/f-4.png\" class=\"icon-rsr\" /> -->\r\n        <img src=\"{{user_image}}\" class=\"icon-rsr\" *ngIf=\"user_image != ''\"/>\r\n        <img src=\"assets/images/default.png\" class=\"icon-rsr\" *ngIf=\"user_image == ''\"/>\r\n\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ng-container>\r\n</ion-tabs>\r\n");

/***/ }),

/***/ "MJr+":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tabs.page.html */ "AHrv");
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page.scss */ "PkIa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_eventbus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/eventbus.service */ "J5XG");
/* harmony import */ var _core_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/utility.service */ "ZtwD");






let TabsPage = class TabsPage {
    constructor(eventBus, utility) {
        this.eventBus = eventBus;
        this.utility = utility;
        this.user_role = JSON.parse(localStorage.getItem('userObj')).role;
        this.user_image = JSON.parse(localStorage.getItem('userObj')).image;
        this.eventBus.getObservable().subscribe((res) => {
            console.log('here', this.user_image);
        });
    }
};
TabsPage.ctorParameters = () => [
    { type: _core_eventbus_service__WEBPACK_IMPORTED_MODULE_4__["EventbusService"] },
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TabsPage);



/***/ }),

/***/ "PkIa":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-bar.tabs-nrs {\n  background: #fff;\n  /* border-radius: 20px 20px 0 0;\r\n    --border-radius: 20px 20px 0 0; */\n  padding: 0 7px;\n  min-height: 54px;\n  box-shadow: 1px -7px 8px rgba(174, 174, 174, 0.38);\n  contain: initial !important;\n}\n\nion-tab-bar.tabs-nrs ion-tab-button {\n  color: #a1a1a1;\n}\n\nion-tab-bar.tabs-nrs ion-tab-button ion-icon {\n  font-size: 28px;\n}\n\nion-tab-bar.tabs-nrs ion-tab-button img.icon-rsr {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n\nion-tab-bar.tabs-nrs ion-tab-button.tab-selected ion-icon {\n  color: #000;\n}\n\nion-tab-bar.tabs-nrs ion-tab-button.tab-selected img {\n  filter: grayscale(1) invert(1);\n}\n\nion-tab-bar.tabs-nrs [profile] {\n  margin-top: -25px;\n  z-index: 222;\n  background: transparent;\n}\n\nimg.icon-rsr {\n  filter: grayscale(0) invert(0) !important;\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2xCO3FDQUNtQztFQUNwQyxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2Isa0RBQWtEO0VBQ3JELDJCQUEwQjtBQUMzQjs7QUFSQTtFQVNFLGNBQWM7QUFHaEI7O0FBWkE7RUFXRyxlQUFlO0FBS2xCOztBQWhCQTtFQWNHLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQU1wQjs7QUF2QkE7RUF1QkksV0FBVztBQUlmOztBQTNCQTtFQTJCSyw4QkFBOEI7QUFJbkM7O0FBL0JBO0VBZ0NFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osdUJBQXVCO0FBR3pCOztBQUNBO0VBQ0kseUNBQXlDO0FBRTdDIiwiZmlsZSI6InRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1iYXIudGFicy1ucnMge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdC8qIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7ICovXHJcblx0cGFkZGluZzogMCA3cHg7XHJcblx0bWluLWhlaWdodDogNTRweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAtN3B4IDhweCByZ2JhKDE3NCwgMTc0LCAxNzQsIDAuMzgpO1xyXG5cdGNvbnRhaW46IGluaXRpYWwhaW1wb3J0YW50O1xyXG5cdGlvbi10YWItYnV0dG9ue1xyXG5cdFx0Y29sb3I6ICNhMWExYTE7XHJcblx0XHRpb24taWNvbiB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjhweDtcclxuXHRcdH1cclxuXHRcdGltZy5pY29uLXJzciB7XHJcblx0XHRcdHdpZHRoOiA0OHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDQ4cHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHR9XHJcblx0XHQmLnRhYi1zZWxlY3RlZCBcclxuXHRcdHtcclxuXHRcdFx0aW9uLWljb24gXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb2xvcjogIzAwMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpbWcge1xyXG5cdFx0XHRcdCBmaWx0ZXI6IGdyYXlzY2FsZSgxKSBpbnZlcnQoMSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRbcHJvZmlsZV0ge1xyXG5cdFx0bWFyZ2luLXRvcDogLTI1cHg7XHJcblx0XHR6LWluZGV4OiAyMjI7XHJcblx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHR9XHJcbn1cclxuXHJcbmltZy5pY29uLXJzciB7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwKSBpbnZlcnQoMCkgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "hO9l":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "kB8F");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "MJr+");
/* harmony import */ var _core_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/utility.service */ "ZtwD");








let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]],
        providers: [_core_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"]],
    })
], TabsPageModule);



/***/ }),

/***/ "kB8F":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "MJr+");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ../home/home.module */ "ct+p")).then((m) => m.HomePageModule),
            },
            {
                path: 'woof-care',
                loadChildren: () => Promise.all(/*! import() | woofcare-woofcare-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("woofcare-woofcare-module")]).then(__webpack_require__.bind(null, /*! ../woofcare/woofcare.module */ "L/bu")).then((m) => m.WoofcarePageModule),
            },
            {
                path: 'calendar',
                loadChildren: () => Promise.all(/*! import() | calendar-calendar-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("calendar-calendar-module")]).then(__webpack_require__.bind(null, /*! ../calendar/calendar.module */ "O51e")).then((m) => m.CalendarPageModule),
            },
            {
                path: 'search',
                loadChildren: () => Promise.all(/*! import() | search-search-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("search-search-module")]).then(__webpack_require__.bind(null, /*! ../search/search.module */ "RmqX")).then((m) => m.SearchPageModule),
            },
            {
                path: 'profile-details',
                loadChildren: () => Promise.all(/*! import() | profile-details-profile-details-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("profile-details-profile-details-module")]).then(__webpack_require__.bind(null, /*! ../profile-details/profile-details.module */ "NX0N")).then((m) => m.ProfileDetailsPageModule),
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() | profile-new-profile-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("profile-new-profile-module")]).then(__webpack_require__.bind(null, /*! ../profile-new/profile.module */ "IKOr")).then((m) => m.ProfilePageModule),
            },
            {
                path: 'marketplace-categories',
                loadChildren: () => Promise.all(/*! import() | marketplace-categories-marketplace-categories-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("marketplace-categories-marketplace-categories-module")]).then(__webpack_require__.bind(null, /*! ../marketplace-categories/marketplace-categories.module */ "1DSL")).then((m) => m.MarketplaceCategoriesPageModule),
            },
            {
                path: 'edit-profile',
                loadChildren: () => Promise.all(/*! import() | edit-profile-edit-profile-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("default~edit-profile-edit-profile-module~service-provider-signup-service-provider-signup-module~serv~2170bb0f"), __webpack_require__.e("edit-profile-edit-profile-module")]).then(__webpack_require__.bind(null, /*! ../edit-profile/edit-profile.module */ "Wvzw")).then((m) => m.EditProfilePageModule),
            },
            {
                path: 'add-product',
                loadChildren: () => Promise.all(/*! import() | add-product-add-product-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("add-product-add-product-module")]).then(__webpack_require__.bind(null, /*! ../add-product/add-product.module */ "gp+k")).then((m) => m.AddProductPageModule),
            },
            {
                path: 'my-products',
                loadChildren: () => Promise.all(/*! import() | my-product-my-product-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("my-product-my-product-module")]).then(__webpack_require__.bind(null, /*! ../my-product/my-product.module */ "A/il")).then((m) => m.MyProductPageModule),
            },
            {
                path: 'marketplace',
                loadChildren: () => Promise.all(/*! import() | marketplace-marketplace-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("marketplace-marketplace-module")]).then(__webpack_require__.bind(null, /*! ../marketplace/marketplace.module */ "h2Vq")).then((m) => m.MarketplacePageModule),
            },
            {
                path: 'appointments',
                loadChildren: () => Promise.all(/*! import() | appointments-appointments-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("appointments-appointments-module")]).then(__webpack_require__.bind(null, /*! ../appointments/appointments.module */ "MCT3")).then((m) => m.AppointmentsPageModule),
            },
            {
                path: 'appointments-new',
                loadChildren: () => __webpack_require__.e(/*! import() | appointment-new-appointment-new-module */ "appointment-new-appointment-new-module").then(__webpack_require__.bind(null, /*! ../appointment-new/appointment-new.module */ "2GRR")).then((m) => m.AppointmentNewPageModule),
            } /*,
            {
              path: 'appointment-details',
              loadChildren: () =>
                import('../appointment-details/appointment-details.module').then(
                  (m) => m.AppointmentDetailsPageModule
                ),
            }*/,
            {
                path: 'cart',
                loadChildren: () => Promise.all(/*! import() | cart-cart-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("cart-cart-module")]).then(__webpack_require__.bind(null, /*! ../cart/cart.module */ "v35Q")).then((m) => m.CartPageModule),
            },
            {
                path: 'chat-single',
                loadChildren: () => __webpack_require__.e(/*! import() | chat-single-chat-single-module */ "chat-single-chat-single-module").then(__webpack_require__.bind(null, /*! ../chat-single/chat-single.module */ "sGPn")).then((m) => m.ChatSinglePageModule),
            },
            {
                path: 'join-the-walk',
                loadChildren: () => Promise.all(/*! import() | join-the-walk-join-the-walk-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("join-the-walk-join-the-walk-module")]).then(__webpack_require__.bind(null, /*! ../join-the-walk/join-the-walk.module */ "yFZh")).then((m) => m.JoinTheWalkPageModule),
            },
            {
                path: 'map',
                loadChildren: () => Promise.all(/*! import() | map-map-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("map-map-module")]).then(__webpack_require__.bind(null, /*! ../map/map.module */ "yX1w")).then((m) => m.MapPageModule),
            },
            {
                path: 'map-list',
                loadChildren: () => __webpack_require__.e(/*! import() | map-list-map-list-module */ "map-list-map-list-module").then(__webpack_require__.bind(null, /*! ../map-list/map-list.module */ "/Dwm")).then((m) => m.MapListPageModule),
            },
            {
                path: 'adoptions',
                loadChildren: () => Promise.all(/*! import() | adoptions-adoptions-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("adoptions-adoptions-module")]).then(__webpack_require__.bind(null, /*! ../adoptions/adoptions.module */ "7q4L")).then((m) => m.AdoptionsPageModule),
            },
            {
                path: 'adoption-profile',
                loadChildren: () => __webpack_require__.e(/*! import() | adoption-profile-adoption-profile-module */ "adoption-profile-adoption-profile-module").then(__webpack_require__.bind(null, /*! ../adoption-profile/adoption-profile.module */ "Jd14")).then((m) => m.AdoptionProfilePageModule),
            } /*,
            {
              path: 'chat',
              loadChildren: () =>
                import('../chat/chat.module').then((m) => m.ChatPageModule),
            }*/,
            {
                path: 'availability',
                loadChildren: () => Promise.all(/*! import() | availability-availability-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("availability-availability-module")]).then(__webpack_require__.bind(null, /*! ../availability/availability.module */ "/MNG")).then((m) => m.AvailabilityPageModule),
            },
            {
                path: 'park-near-me',
                loadChildren: () => Promise.all(/*! import() | park-near-me-park-near-me-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("park-near-me-park-near-me-module")]).then(__webpack_require__.bind(null, /*! ../park-near-me/park-near-me.module */ "Fcm6")).then((m) => m.ParkNearMePageModule),
            },
            {
                path: 'park-details',
                loadChildren: () => __webpack_require__.e(/*! import() | park-details-park-details-module */ "park-details-park-details-module").then(__webpack_require__.bind(null, /*! ../park-details/park-details.module */ "6Ya7")).then((m) => m.ParkDetailsPageModule),
            },
            {
                path: 'pet-doctors',
                loadChildren: () => Promise.all(/*! import() | pet-doctors-pet-doctors-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("common"), __webpack_require__.e("pet-doctors-pet-doctors-module")]).then(__webpack_require__.bind(null, /*! ../pet-doctors/pet-doctors.module */ "M/q2")).then((m) => m.PetDoctorsPageModule),
            },
            {
                path: 'pet-recepies',
                loadChildren: () => __webpack_require__.e(/*! import() | pet-recepies-pet-recepies-module */ "pet-recepies-pet-recepies-module").then(__webpack_require__.bind(null, /*! ../pet-recepies/pet-recepies.module */ "PSa7")).then((m) => m.PetRecepiesPageModule),
            },
            {
                path: 'pet-seaters',
                loadChildren: () => Promise.all(/*! import() | pet-seaters-pet-seaters-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("pet-seaters-pet-seaters-module")]).then(__webpack_require__.bind(null, /*! ../pet-seaters/pet-seaters.module */ "E7Xa")).then((m) => m.PetSeatersPageModule),
            },
            {
                path: 'pet-trainers',
                loadChildren: () => Promise.all(/*! import() | pet-trainers-pet-trainers-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("pet-trainers-pet-trainers-module")]).then(__webpack_require__.bind(null, /*! ../pet-trainers/pet-trainers.module */ "+DnE")).then((m) => m.PetTrainersPageModule),
            },
            {
                path: 'pet-walkers',
                loadChildren: () => Promise.all(/*! import() | pet-walkers-pet-walkers-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("common"), __webpack_require__.e("pet-walkers-pet-walkers-module")]).then(__webpack_require__.bind(null, /*! ../pet-walkers/pet-walkers.module */ "x8t0")).then((m) => m.PetWalkersPageModule),
            },
            {
                path: 'qr-code',
                loadChildren: () => Promise.all(/*! import() | qr-code-qr-code-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("qr-code-qr-code-module")]).then(__webpack_require__.bind(null, /*! ../qr-code/qr-code.module */ "jYn2")).then((m) => m.QrCodePageModule),
            },
            {
                path: 'receipe-upload',
                loadChildren: () => __webpack_require__.e(/*! import() | receipe-upload-receipe-upload-module */ "receipe-upload-receipe-upload-module").then(__webpack_require__.bind(null, /*! ../receipe-upload/receipe-upload.module */ "Ozxm")).then((m) => m.ReceipeUploadPageModule),
            },
            {
                path: 'woofcare',
                loadChildren: () => Promise.all(/*! import() | woofcare-woofcare-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("woofcare-woofcare-module")]).then(__webpack_require__.bind(null, /*! ../woofcare/woofcare.module */ "L/bu")).then((m) => m.WoofcarePageModule),
            },
            {
                path: 'subscription-transactions',
                loadChildren: () => Promise.all(/*! import() | subscription-transactions-subscription-transactions-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("subscription-transactions-subscription-transactions-module")]).then(__webpack_require__.bind(null, /*! ../subscription-transactions/subscription-transactions.module */ "wAaV")).then((m) => m.SubscriptionTransactionsPageModule),
            },
            {
                path: 'subscription',
                loadChildren: () => Promise.all(/*! import() | subscription-subscription-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("subscription-subscription-module")]).then(__webpack_require__.bind(null, /*! ../subscription/subscription.module */ "AfdY")).then((m) => m.SubscriptionPageModule),
            },
            {
                path: 'subscription-payment',
                loadChildren: () => Promise.all(/*! import() | subscription-payment-subscription-payment-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("subscription-payment-subscription-payment-module")]).then(__webpack_require__.bind(null, /*! ../subscription-payment/subscription-payment.module */ "6mwk")).then((m) => m.SubscriptionPaymentPageModule),
            },
            {
                path: 'calender-appointment',
                loadChildren: () => Promise.all(/*! import() | appointment-weeknew-appointment-week-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("appointment-weeknew-appointment-week-module")]).then(__webpack_require__.bind(null, /*! ../appointment-weeknew/appointment-week.module */ "eLO7")).then(m => m.AppointmentWeekPageModule)
            },
            {
                path: 'requests-appointment',
                loadChildren: () => Promise.all(/*! import() | appointment-requestnew-appointment-request-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("appointment-requestnew-appointment-request-module")]).then(__webpack_require__.bind(null, /*! ../appointment-requestnew/appointment-request.module */ "ZzUZ")).then(m => m.AppointmentRequestPageModule)
            } /*,
            {
              path: 'booking-detail',
              loadChildren: () => import('../request-appointment-details/request-appointment-details.module').then( m => m.RequestAppointmentDetailsPageModule)
            }*/,
            {
                path: 'chat',
                loadChildren: () => Promise.all(/*! import() | chat-new-chat-new-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("chat-new-chat-new-module")]).then(__webpack_require__.bind(null, /*! ../chat-new/chat-new.module */ "u4GQ")).then(m => m.ChatNewPageModule)
            },
            {
                path: 'provider-home',
                loadChildren: () => Promise.all(/*! import() | provider-home-provider-home-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("provider-home-provider-home-module")]).then(__webpack_require__.bind(null, /*! ../provider-home/provider-home.module */ "W6UA")).then(m => m.ProviderHomePageModule)
            },
            {
                path: 'service-details',
                loadChildren: () => Promise.all(/*! import() | service-details-service-details-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("service-details-service-details-module")]).then(__webpack_require__.bind(null, /*! ../service-details/service-details.module */ "zbSh")).then(m => m.ServiceDetailsPageModule)
            },
            {
                path: 'add-service',
                loadChildren: () => Promise.all(/*! import() | add-service-add-service-module */[__webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~5395c239"), __webpack_require__.e("default~account-settings-account-settings-module~add-edit-pet-add-edit-pet-module~add-new-services-a~ff7df9a8"), __webpack_require__.e("common"), __webpack_require__.e("add-service-add-service-module")]).then(__webpack_require__.bind(null, /*! ../add-service/add-service.module */ "oOJ9")).then(m => m.AddServicePageModule)
            },
            {
                path: 'service-provider-transaction',
                loadChildren: () => __webpack_require__.e(/*! import() | service-provider-transaction-service-provider-transaction-module */ "service-provider-transaction-service-provider-transaction-module").then(__webpack_require__.bind(null, /*! ../service-provider-transaction/service-provider-transaction.module */ "R5rF")).then(m => m.ServiceProviderTransactionPageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        redirectTo: '/service-provider-home',
        pathMatch: 'full',
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map