(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-service-add-service-module"],{

/***/ "9cQi":
/*!***************************************************!*\
  !*** ./src/app/add-service/add-service.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item.item.md.ion-focusable.hydrated.item-label.item-label-stacked.item-interactive.item-input {\n  --border-width: 0 !important;\n}\n\nion-item {\n  overflow: visible;\n  margin-bottom: 12px;\n}\n\nion-input,\nion-textarea,\nion-datetime {\n  box-shadow: 6px 3px 8px -3px #d2d2d2;\n  margin: 17px 0;\n  border-radius: 13px;\n  padding: 7px 0 !important;\n  margin-bottom: 0;\n}\n\nion-label {\n  font-size: 21px !important;\n  color: #000000;\n  font-weight: 700;\n}\n\n.up-ic {\n  position: absolute;\n  width: 7%;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  top: 40%;\n}\n\n.arrow-ic {\n  width: 9px;\n  position: absolute;\n  right: 12px;\n}\n\nion-input,\nion-datetime {\n  font-weight: bold;\n}\n\n.bt-trs {\n  display: block;\n  margin-top: -7px;\n}\n\n.bt-trs ion-button.btn-save {\n  background: #bfbfbf;\n  --background: #bfbfbf;\n  border-radius: 50px;\n  color: #fff;\n  --padding-start: 35px;\n  box-shadow: none;\n  --box-shadow: none;\n  --padding-end: 35px;\n  height: 38px;\n  text-transform: capitalize;\n  font-size: 17px;\n  margin-right: 7px;\n}\n\n.bt-trs ion-button.btn-cancl {\n  border-radius: 50px;\n  color: #8d8d8d;\n  --padding-start: 30px;\n  box-shadow: none;\n  --box-shadow: none;\n  --padding-end: 30px;\n  height: 38px;\n  text-transform: capitalize;\n  font-size: 17px;\n  border-color: #8d8d8d;\n  --border-color: #8d8d8d;\n}\n\n.bt-trs {\n  margin-top: 32px !important;\n  margin-bottom: 13px;\n  text-align: center;\n}\n\n.image-upload > input {\n  display: none;\n}\n\n.file-label {\n  font-size: 21px;\n  font-weight: 700;\n}\n\nlabel.file-icon {\n  width: 100%;\n  height: 50px;\n  margin-top: 10px;\n  box-shadow: 6px 3px 8px -3px #d2d2d2;\n  margin: 17px 0;\n  border-radius: 13px;\n  padding: 7px 0 !important;\n  margin-bottom: 0;\n}\n\n.preview {\n  margin-top: 15px;\n}\n\n.preview img {\n  border-radius: 50%;\n  height: 100px;\n  width: 100px;\n  position: relative;\n}\n\n.preview .remove-icon {\n  position: absolute;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkZC1zZXJ2aWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFlO0FBQ2pCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUVyQjs7QUFBQTs7O0VBR0Usb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUdsQjs7QUFEQTtFQUNFLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsZ0JBQWdCO0FBSWxCOztBQUZBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxjQUFjO0VBQ2QsT0FBTztFQUNQLFFBQVE7RUFDUixRQUFRO0FBS1Y7O0FBSEE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFNYjs7QUFKQTs7RUFFRSxpQkFBaUI7QUFPbkI7O0FBTEE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBUWxCOztBQVZBO0VBSUksbUJBQW1CO0VBQ25CLHFCQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxxQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFhO0VBQ2IsbUJBQWM7RUFDZCxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixpQkFBaUI7QUFVckI7O0FBekJBO0VBa0JJLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QscUJBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBYTtFQUNiLG1CQUFjO0VBQ2QsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHVCQUFlO0FBV25COztBQVJBO0VBQ0UsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFXcEI7O0FBVEE7RUFDRSxhQUFhO0FBWWY7O0FBVkE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBYWxCOztBQVhBO0VBQ0UsV0FBVztFQUVYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQWFsQjs7QUFYQTtFQUNFLGdCQUFnQjtBQWNsQjs7QUFmQTtFQUlJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtBQWV0Qjs7QUF0QkE7RUFVSSxrQkFBa0I7QUFnQnRCIiwiZmlsZSI6ImFkZC1zZXJ2aWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtLml0ZW0ubWQuaW9uLWZvY3VzYWJsZS5oeWRyYXRlZC5pdGVtLWxhYmVsLml0ZW0tbGFiZWwtc3RhY2tlZC5pdGVtLWludGVyYWN0aXZlLml0ZW0taW5wdXQge1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuaW9uLWlucHV0LFxyXG5pb24tdGV4dGFyZWEsXHJcbmlvbi1kYXRldGltZSB7XHJcbiAgYm94LXNoYWRvdzogNnB4IDNweCA4cHggLTNweCAjZDJkMmQyO1xyXG4gIG1hcmdpbjogMTdweCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgcGFkZGluZzogN3B4IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAyMXB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4udXAtaWMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNyU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDQwJTtcclxufVxyXG4uYXJyb3ctaWMge1xyXG4gIHdpZHRoOiA5cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMnB4O1xyXG59XHJcbmlvbi1pbnB1dCxcclxuaW9uLWRhdGV0aW1lIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uYnQtdHJzIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAtN3B4O1xyXG4gIGlvbi1idXR0b24uYnRuLXNhdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2JmYmZiZjtcclxuICAgIC0tYmFja2dyb3VuZDogI2JmYmZiZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMzVweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICB9XHJcbiAgaW9uLWJ1dHRvbi5idG4tY2FuY2wge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGNvbG9yOiAjOGQ4ZDhkO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGJvcmRlci1jb2xvcjogIzhkOGQ4ZDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjOGQ4ZDhkO1xyXG4gIH1cclxufVxyXG4uYnQtdHJzIHtcclxuICBtYXJnaW4tdG9wOiAzMnB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmltYWdlLXVwbG9hZCA+IGlucHV0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5maWxlLWxhYmVsIHtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5sYWJlbC5maWxlLWljb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBib3gtc2hhZG93OiA2cHggM3B4IDhweCAtM3B4ICNkMmQyZDI7XHJcbiAgbWFyZ2luOiAxN3B4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICBwYWRkaW5nOiA3cHggMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLnByZXZpZXcge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAucmVtb3ZlLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "aAcI":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-service/add-service.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <app-header [pageName]=\"'Service'\"></app-header>\r\n  <div class=\"bottm-conts\">\r\n    <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\">Title</ion-label>\r\n      <ion-input name=\"sname\" disabled [(ngModel)]=\"model.sname\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <ion-label position=\"stacked\">Description</ion-label>\r\n      <ion-textarea\r\n        clearOnEdit=\"true\"\r\n        name=\"description\"\r\n        [(ngModel)]=\"model.description\"\r\n      ></ion-textarea>\r\n    </ion-item>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-item lines=\"none\">\r\n          <ion-label position=\"stacked\">Experience</ion-label>\r\n          <ion-input\r\n            type=\"text\"\r\n            name=\"expereince\"\r\n            [(ngModel)]=\"model.expereince\"\r\n          >\r\n          </ion-input>\r\n        </ion-item> </ion-col\r\n      ><ion-col size=\"6\">\r\n        <ion-item lines=\"none\">\r\n          <ion-label position=\"stacked\">Hourly Price</ion-label>\r\n          <ion-input Placeholder=\"\" name=\"price\" [(ngModel)]=\"model.price\">\r\n            <span class=\"dollar\"> $ </span>\r\n          </ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-item lines=\"none\">\r\n          <ion-label position=\"stacked\">Start Time</ion-label>\r\n          <ion-datetime\r\n            displayFormat=\"HH:mm\"\r\n            name=\"startTime\"\r\n            [(ngModel)]=\"model.startTime\"\r\n          ></ion-datetime>\r\n        </ion-item> </ion-col\r\n      ><ion-col size=\"6\">\r\n        <ion-item lines=\"none\">\r\n          <ion-label position=\"stacked\">End Time</ion-label>\r\n          <ion-datetime\r\n            displayFormat=\"HH:mm\"\r\n            name=\"endTime\"\r\n            [(ngModel)]=\"model.endTime\"\r\n          ></ion-datetime>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-item lines=\"none\">\r\n          <ion-label position=\"stacked\">Avaialability</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row> -->\r\n    <div class=\"file-label\">Upload image</div>\r\n    <ion-item lines=\"none\" class=\"image-upload\" *ngIf=\"previewImage == null\">\r\n      <label for=\"file-input\" class=\"file-icon\" position=\"stacked\">\r\n        <img class=\"up-ic\" src=\"assets/images/upload.png\" />\r\n      </label>\r\n      <input\r\n        (change)=\"handleFileImage($event,'image')\"\r\n        type=\"file\"\r\n        id=\"file-input\"\r\n      />\r\n    </ion-item>\r\n\r\n    <div class=\"preview\" *ngIf=\"previewImage != null\">\r\n      <img [src]=\"previewImage\" alt=\"\" />\r\n      <span class=\"remove-icon\">\r\n        <ion-icon\r\n          (click)=\"removeImage()\"\r\n          name=\"close-circle-outline\"\r\n        ></ion-icon>\r\n      </span>\r\n    </div>\r\n\r\n    <div class=\"bt-trs\">\r\n      <ion-button shape=\"round\" class=\"btn-save\" (click)=\"submit()\"\r\n        >Save</ion-button\r\n      >\r\n      <ion-button\r\n        shape=\"round\"\r\n        fill=\"outline\"\r\n        class=\"btn-cancl\"\r\n        (click)=\"goBack()\"\r\n        >Cancel</ion-button\r\n      >\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "nXAF":
/*!***********************************************************!*\
  !*** ./src/app/add-service/add-service-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddServicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServicePageRoutingModule", function() { return AddServicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_service_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-service.page */ "wW+W");




const routes = [
    {
        path: '',
        component: _add_service_page__WEBPACK_IMPORTED_MODULE_3__["AddServicePage"]
    }
];
let AddServicePageRoutingModule = class AddServicePageRoutingModule {
};
AddServicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddServicePageRoutingModule);



/***/ }),

/***/ "oOJ9":
/*!***************************************************!*\
  !*** ./src/app/add-service/add-service.module.ts ***!
  \***************************************************/
/*! exports provided: AddServicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServicePageModule", function() { return AddServicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_service_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-service-routing.module */ "nXAF");
/* harmony import */ var _add_service_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-service.page */ "wW+W");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");








let AddServicePageModule = class AddServicePageModule {
};
AddServicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _add_service_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddServicePageRoutingModule"],
        ],
        declarations: [_add_service_page__WEBPACK_IMPORTED_MODULE_6__["AddServicePage"]],
    })
], AddServicePageModule);



/***/ }),

/***/ "wW+W":
/*!*************************************************!*\
  !*** ./src/app/add-service/add-service.page.ts ***!
  \*************************************************/
/*! exports provided: AddServicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServicePage", function() { return AddServicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_service_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-service.page.html */ "aAcI");
/* harmony import */ var _add_service_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-service.page.scss */ "9cQi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_pet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/pet.service */ "kSP7");
/* harmony import */ var _core_service_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/service-provider.service */ "7RZW");
/* harmony import */ var _core_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/utility.service */ "ZtwD");









let AddServicePage = class AddServicePage {
    constructor(petService, sanitizer, utility, activeRoute, utilityService, providerService) {
        this.petService = petService;
        this.sanitizer = sanitizer;
        this.utility = utility;
        this.activeRoute = activeRoute;
        this.utilityService = utilityService;
        this.providerService = providerService;
        this.file = '';
        this.description = '';
        this.model = {
            startTime: '',
            endTime: '',
            sname: '',
            experience: '1',
            price: '',
        };
        this.previewImage = null;
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.initializtion();
    }
    initializtion() {
        this.getServiceDetail();
        // this.model.sname = localStorage.getItem('service');
    }
    handleFileImage(e, type) {
        console.log('here');
        if (type == 'image') {
            this.file = e.target.files[0];
        }
        else {
            this.file1 = e.target.files[0];
        }
        this.previewImage = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(e.target.files[0]));
    }
    submit() {
        if (this.file == '') {
            return this.utility.showAlert('Image is required');
        }
        this.utility.present();
        const fd = new FormData();
        fd.append('image', this.file == '' ? this.model.previewImage : this.file);
        // fd.append(
        //   'video',
        //   this.file1 != ''
        //     ? this.file1
        //     : JSON.parse(localStorage.getItem('data')).video
        // );
        fd.append('description', this.model.description);
        fd.append('startTime', this.model.startTime);
        fd.append('endTime', this.model.endTime);
        fd.append('experience', this.model.experience);
        fd.append('price', this.model.price);
        fd.append('sname', this.model.sname);
        fd.append('userId', this.userId);
        console.log(fd);
        this.providerService.serviceUpdate(this.id, fd).subscribe((res) => {
            console.log(res);
            this.utility.dismiss();
            this.utility.navigateRoot('/tabs/provider-home');
        }, (err) => {
            console.log(err);
            this.utility.dismiss();
            this.utility.showAlert('Something went wrong!');
        });
    }
    removeImage() {
        this.previewImage = null;
        this.file = '';
    }
    goBack() {
        this.utility.goBack();
    }
    getServiceDetail() {
        this.utilityService.present();
        let id = this.activeRoute.snapshot.queryParams.id;
        this.id = id;
        this.providerService.getSingleServiceProvider(id).subscribe((res) => {
            let data = res;
            this.userId = data['userId']._id;
            console.log(res);
            this.model.description = data.description;
            this.model.sname = data.sname;
            this.model.expereince = data.experience;
            this.model.price = data.price;
            this.model.startTime = data.startTime;
            this.model.endTime = data.endTime;
            this.previewImage = data.imageUrl;
            console.log(this.model);
            this.utilityService.dismiss();
        }, (err) => {
            console.log(err);
            this.utilityService.dismiss();
        });
    }
};
AddServicePage.ctorParameters = () => [
    { type: _core_pet_service__WEBPACK_IMPORTED_MODULE_6__["PetService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"] },
    { type: _core_service_provider_service__WEBPACK_IMPORTED_MODULE_7__["ServiceProviderService"] }
];
AddServicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-service',
        template: _raw_loader_add_service_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_service_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddServicePage);



/***/ })

}]);
//# sourceMappingURL=add-service-add-service-module.js.map