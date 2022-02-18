(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-detailsnew-service-details-module"],{

/***/ "/QSZ":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/service-detailsnew/service-details.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\t<app-header [pageName]='\"aa\"' [pn]='\"detail\"' app=\"serviceProvider\"></app-header>\r\n\t<div class=\"bottm-conts\">\r\n\t\t<h4 class=\"ttl-tp\">Service Details </h4>\r\n\t\t\t<div class=\"btn-div edit-btn\"><a class=\"btn-coy\" (click)=\"goto()\" >Edit </a></div>\r\n\t <div class=\" fiels\">\r\n  <ion-label class=\"labl-nf\">Service Name</ion-label>\r\n  <p>{{serviceDetail?.data?.name}}</p>\r\n</div>\r\n <div class=\" fiels\">\r\n  <ion-label class=\"labl-nf\">Description</ion-label>\r\n <p>{{serviceDetail?.data?.description}}</p>\r\n</div>\r\n\r\n    \r\n <div class=\" fiels\">\r\n<ion-row>\r\n <ion-col size=\"6\">\r\n<ion-label class=\"labl-nf\">Start Time</ion-label>\r\n<p>{{start_time}}</p>\r\n</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t\t<ion-label class=\"labl-nf\">End Time</ion-label>\r\n  <p>{{end_time}}</p>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t</ion-row>\t\t\t\t\t \r\n</div>\r\n\r\n <div class=\" fiels field-outline mb-4 mhj\">\r\n  <ion-label class=\"labl-nf\">Visit Type</ion-label>\r\n\t</div>\r\n\t <div class=\" fiels field-outline pd\">\r\n <ion-row>\r\n <ion-col size=\"3\" *ngFor=\"let doc of serviceDetail?.data?.visit_type\">\r\n <div class=\"inner-dog\">\r\n {{doc.desc}}\r\n </div>\r\n <p class=\"wlk-txt\">${{doc.price}}</p>\r\n </ion-col> <!-- <ion-col size=\"3\">\r\n <div class=\"inner-dog \">\r\n1 Visit<br>\r\nPer Day\r\n </div>\r\n <p class=\"wlk-txt\">$17.00</p>\r\n </ion-col>\r\n <ion-col size=\"3\">\r\n <div class=\"inner-dog active\">\r\n 2 Visit<br>\r\nPer Day\r\n </div>\r\n <p class=\"wlk-txt\">$25.00</p>\r\n </ion-col> <ion-col size=\"3\">\r\n <div class=\"inner-dog \">\r\n 3 Visit<br>\r\nPer Day\r\n </div>\r\n <p class=\"wlk-txt\">$40.00</p>\r\n </ion-col> -->\r\n </ion-row>\r\n</div>\t\r\n\r\n\r\n\r\n\r\n <div class=\" fiels\">\r\n  <ion-label class=\"labl-nf\">Image</ion-label>\r\n <ul mainul>\r\n <li imgper *ngFor=\"let img of serviceDetail?.data?.image\"><img style=\"width: 50px;\" src=\"{{'http://3.17.11.111:3000/uploads/' + img}}\"></li>\r\n </ul>\r\n\r\n</div>\r\n\r\n\t<div class=\"btn-div\"><a class=\"btn-coy\" href=\"#\">Remove </a></div></div>\r\n\t\r\n\t</ion-content>");

/***/ }),

/***/ "NWec":
/*!**************************************************************!*\
  !*** ./src/app/service-detailsnew/service-details.module.ts ***!
  \**************************************************************/
/*! exports provided: ServiceDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceDetailsPageModule", function() { return ServiceDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-details-routing.module */ "svse");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");
/* harmony import */ var _service_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service-details.page */ "nSpv");








let ServiceDetailsPageModule = class ServiceDetailsPageModule {
};
ServiceDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _service_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServiceDetailsPageRoutingModule"]
        ],
        declarations: [_service_details_page__WEBPACK_IMPORTED_MODULE_7__["ServiceDetailsPage"]]
    })
], ServiceDetailsPageModule);



/***/ }),

/***/ "nSpv":
/*!************************************************************!*\
  !*** ./src/app/service-detailsnew/service-details.page.ts ***!
  \************************************************************/
/*! exports provided: ServiceDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceDetailsPage", function() { return ServiceDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_service_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./service-details.page.html */ "/QSZ");
/* harmony import */ var _service_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-details.page.scss */ "of9i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/auth.service */ "8PDw");
/* harmony import */ var _core_pet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/pet.service */ "kSP7");
/* harmony import */ var _core_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/utility.service */ "ZtwD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let ServiceDetailsPage = class ServiceDetailsPage {
    constructor(petService, utility, auth, activatedRoute, router) {
        this.petService = petService;
        this.utility = utility;
        this.auth = auth;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.id = this.activatedRoute.snapshot.params.id;
        console.log(this.id, this.activatedRoute);
    }
    goto() {
        this.router.navigate(['/edit-service', this.id]);
    }
    ngOnInit() {
        this.getServiceDetail();
    }
    getServiceDetail() {
        let dict = {
            _id: this.id,
            userId: JSON.parse(localStorage.getItem('userObj'))._id
        };
        this.auth.getServiceDetail(dict).subscribe((res) => {
            console.log(res);
            this.serviceDetail = res;
            this.start_time = this.formatAMPM(new Date(this.serviceDetail.data.start_time));
            this.end_time = this.formatAMPM(new Date(this.serviceDetail.data.end_time));
            this.utility.dismiss();
        }, (err) => {
            console.log(err);
            this.utility.dismiss();
            this.utility.showAlert('Something went wrong!');
        });
    }
    formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
};
ServiceDetailsPage.ctorParameters = () => [
    { type: _core_pet_service__WEBPACK_IMPORTED_MODULE_5__["PetService"] },
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"] },
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
ServiceDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-service-details',
        template: _raw_loader_service_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_service_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ServiceDetailsPage);



/***/ }),

/***/ "of9i":
/*!**************************************************************!*\
  !*** ./src/app/service-detailsnew/service-details.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".labl-nf {\n  margin-bottom: 0;\n  font-size: 16px !important;\n  color: #8f8f8f;\n  font-weight: 400;\n  margin-top: 0;\n  display: block;\n}\n\n.fiels {\n  padding: 0 19px;\n  margin-bottom: 25px;\n}\n\nion-textarea {\n  --padding-start: 0;\n  --padding-top: 0;\n  --placeholder-color: #000 !important;\n}\n\nion-input {\n  border: 1px solid #bfbfbf !important;\n  border-radius: 0;\n  --padding-start:0px;\n  margin-top: 0px !important;\n  border: transparent !important;\n  border-bottom: 1px solid #bfbfbf !important;\n}\n\nion-item {\n  margin-bottom: 16px;\n}\n\n.fiels.field-outline.pd {\n  padding: 0 5px;\n}\n\n.fiels.field-outline.mb-4.mhj {\n  margin-bottom: 0;\n}\n\n.btn-div.edit-btn {\n  float: right;\n  width: 100%;\n  text-align: right;\n  padding: 0 20px;\n}\n\n.bottm-conts {\n  padding: 20px 2px;\n}\n\nion-input {\n  padding-left: 11px;\n}\n\nion-input.sc-ion-input-ios-h.sc-ion-input-ios-s.ios.hydrated {\n  padding-left: 9px !important;\n}\n\n.img-loc {\n  margin-left: 8px;\n}\n\nion-input {\n  --placeholder-color: #000 !important;\n  --placeholder-opacity: 1;\n  font-size: 16px !important;\n}\n\nion-item.item.ios.item-lines-none.ion-focusable.hydrated.item-label.item-label-stacked.item-interactive.item-input.item-has-placeholder {\n  margin-bottom: 25px;\n}\n\nion-datetime {\n  border: 1px solid #bfbfbf;\n  padding: 10px 9px;\n  border-radius: 7px;\n  font-size: 16px;\n}\n\n.cover-pad {\n  padding: 0 19px;\n  margin-bottom: 25px;\n}\n\n.btn-coy {\n  text-decoration: none;\n  color: #4d4d4d;\n  display: inline-block;\n  border: 2px solid #bfbfbf;\n  padding: 11px 36px;\n  border-radius: 50px;\n  margin-top: 17px;\n  font-size: 17px;\n  color: #4d4d4d;\n  margin-bottom: 30px;\n  margin-top: 22px;\n}\n\n.btn-div.edit-btn .btn-coy {\n  text-decoration: none;\n  color: #4d4d4d;\n  display: inline-block;\n  border: 2px solid #bfbfbf;\n  padding: 7px 28px;\n  border-radius: 50px;\n  margin-top: 17px;\n  font-size: 17px;\n  color: #4d4d4d;\n  margin-bottom: 11px;\n  margin-top: 4px;\n}\n\n.btn-div {\n  text-align: center;\n}\n\n.ttl-tp {\n  position: relative;\n  left: -18px;\n}\n\n.cover-pad p {\n  margin: 0;\n  font-size: 12px;\n  color: #6b6b6b;\n  font-weight: 500;\n  margin-top: 11px;\n  margin-bottom: 5px;\n}\n\n.datetime-text {\n  padding-left: 20px;\n}\n\nion-textarea {\n  --placeholder-color: #000 !important;\n  --placeholder-opacity: 1;\n  font-size: 15px !important;\n}\n\nion-textarea {\n  border: 1px solid #bfbfbf !important;\n  /* border-radius: 7px; */\n  /* margin-top: 15px; */\n  padding: 12px !important;\n  border-radius: 6px !important;\n  height: 185px;\n  margin-top: 12px !important;\n}\n\nion-datetime.pading.ios.hydrated {\n  padding-left: 37px;\n}\n\nimg.cal-loc {\n  position: absolute;\n  top: 43px;\n  left: 13px;\n}\n\n.inner-dog {\n  width: 83px;\n  height: 83px;\n  background: #e5d9fe;\n  border-radius: 50%;\n  line-height: 15px;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  margin: 0 auto;\n  margin-top: 0px;\n  position: relative;\n  color: #080808;\n  font-size: 14px;\n  padding-top: 27px;\n  font-weight: 600;\n}\n\n.inner-dog.active {\n  background: #be9ffc;\n}\n\n.active span {\n  color: #fff;\n}\n\ninput {\n  --padding-start: 15px\r\n;\n}\n\n.wlk-txt {\n  text-align: center;\n  text-align: center;\n  font-size: 14px !important;\n  color: #000000 !important;\n  margin-top: 6px !important;\n  opacity: .6;\n  font-weight: 600;\n}\n\nion-select {\n  border: 1px solid #ddd;\n  ---padding-start: 15px !important;\n  padding: 8px 10px;\n  border-radius: 6px;\n}\n\nion-radio-group.radus {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\nion-radio-group.radus ion-item ion-radio {\n  background: #fff;\n  border: 1px solid #cacaca;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\nion-radio-group.radus ion-item {\n  --padding-start: 5px;\n}\n\nion-select {\n  width: 100%;\n}\n\nion-datetime {\n  padding-left: 33px !important;\n}\n\n.watch .cal-loc {\n  top: 47px !important;\n}\n\n.watch ion-select {\n  --padding-start: 0;\n}\n\n.op {\n  font-weight: 400 !important;\n  margin-left: 8px;\n}\n\n[mainul] {\n  padding: 0;\n  list-style: none;\n}\n\n[imgper] {\n  display: inline-block;\n  margin-right: 7px;\n}\n\n[newimg] img {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  top: 29%;\n}\n\n[newimg] {\n  background: #bfbfbf;\n  height: 66px;\n  width: 66px;\n  text-align: center;\n  line-height: 118px;\n  border-radius: 5px;\n  position: relative;\n}\n\n.field-outline ion-input {\n  border: 1px solid #bfbfbf !important;\n  border-radius: 7px;\n  --padding-start: 8px;\n}\n\n.mb-4 ion-label {\n  margin-bottom: 14px !important;\n}\n\n[newadd] ion-input {\n  opacity: .5;\n}\n\n.fiels.field-outline ion-row {\n  margin-bottom: 4px;\n}\n\np {\n  margin: 3px 0 !important;\n}\n\n.p0 {\n  padding: 0px;\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlcnZpY2UtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDZCwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztBQUNsQjs7QUFBQztFQUNLLGVBQWU7RUFDakIsbUJBQW1CO0FBR3ZCOztBQURBO0VBQ0ksa0JBQWdCO0VBQ2hCLGdCQUFjO0VBQ2Qsb0NBQW9CO0FBSXhCOztBQUZBO0VBQ08sb0NBQW9DO0VBQ3ZDLGdCQUFnQjtFQUFDLG1CQUFnQjtFQUNqQywwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLDJDQUEyQztBQU0vQzs7QUFMQztFQUNHLG1CQUFtQjtBQVF2Qjs7QUFQQztFQUNHLGNBQWM7QUFVbEI7O0FBVEM7RUFDRyxnQkFBZ0I7QUFZcEI7O0FBWEM7RUFDRyxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0FBY25COztBQVpBO0VBQ0ksaUJBQWlCO0FBZXJCOztBQWRDO0VBQ0csa0JBQWtCO0FBaUJ0Qjs7QUFmQTtFQUNJLDRCQUE0QjtBQWtCaEM7O0FBaEJBO0VBQ0ksZ0JBQWdCO0FBbUJwQjs7QUFqQkE7RUFDSSxvQ0FBb0I7RUFBaUIsd0JBQXNCO0VBQUcsMEJBQTBCO0FBc0I1Rjs7QUFwQkE7RUFDSSxtQkFBbUI7QUF1QnZCOztBQXRCQztFQUNHLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7QUF5Qm5COztBQXhCQztFQUNDLGVBQWU7RUFDYixtQkFBbUI7QUEyQnZCOztBQTFCQztFQUNDLHFCQUFxQjtFQUNuQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUE2QnBCOztBQTNCQTtFQUNDLHFCQUFxQjtFQUNsQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0FBOEJuQjs7QUE3QkM7RUFDRyxrQkFBa0I7QUFnQ3RCOztBQS9CQztFQUNHLGtCQUFrQjtFQUNsQixXQUFXO0FBa0NmOztBQWhDQTtFQUNPLFNBQVM7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBbUN0Qjs7QUFsQ0M7RUFDRyxrQkFBa0I7QUFxQ3RCOztBQXBDQztFQUNJLG9DQUFvQjtFQUNwQix3QkFBc0I7RUFDdkIsMEJBQTBCO0FBdUM5Qjs7QUF0Q0M7RUFDRyxvQ0FBb0M7RUFDcEMsd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLDJCQUEyQjtBQXlDL0I7O0FBdkNBO0VBQ0ksa0JBQWtCO0FBMEN0Qjs7QUF6Q0M7RUFDRyxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7QUE0Q2Q7O0FBM0NDO0VBQ0ssV0FBVztFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUFDLGdCQUFnQjtBQStDdEM7O0FBNUNBO0VBQ0ksbUJBQW1CO0FBK0N2Qjs7QUE5Q0M7RUFDRyxXQUFXO0FBaURmOztBQWhEQztFQUFNO0FBQWdCO0FBcUR2Qjs7QUFuREE7RUFBUyxrQkFBa0I7RUFDdkIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxnQkFBZ0I7QUF1RHBCOztBQXJEQTtFQUNJLHNCQUFzQjtFQUN0QixpQ0FBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQXdEdEI7O0FBdERBO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUF5RC9COztBQXhEQztFQUNHLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBMkR0Qjs7QUF6REE7RUFDSSxvQkFBZ0I7QUE0RHBCOztBQTNEQztFQUNHLFdBQVc7QUE4RGY7O0FBN0RDO0VBQ0csNkJBQTZCO0FBZ0VqQzs7QUEvREM7RUFDRyxvQkFBb0I7QUFrRXhCOztBQWhFQTtFQUNFLGtCQUFnQjtBQW1FbEI7O0FBbEVDO0VBQ0csMkJBQTJCO0VBQzNCLGdCQUFnQjtBQXFFcEI7O0FBRUE7RUFyRUksVUFBVTtFQUNWLGdCQUFnQjtBQXVFcEI7O0FBRUE7RUF2RUkscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQXlFckI7O0FBRUE7RUF6RUksa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsY0FBYztFQUNkLFFBQVE7QUEyRVo7O0FBRUE7RUEzRUksbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBNkV0Qjs7QUE1RUM7RUFDRyxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLG9CQUFnQjtBQStFcEI7O0FBN0VDO0VBQ0csOEJBQThCO0FBZ0ZsQzs7QUFFQTtFQWhGSSxXQUFXO0FBa0ZmOztBQWpGQztFQUNHLGtCQUFrQjtBQW9GdEI7O0FBbEZBO0VBQ0ksd0JBQXdCO0FBcUY1Qjs7QUFuRkE7RUFBSSxZQUFXO0FBdUZmIiwiZmlsZSI6InNlcnZpY2UtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFibC1uZiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM4ZjhmOGY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59LmZpZWxzIHtcclxuICAgICAgcGFkZGluZzogMCAxOXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5pb24tdGV4dGFyZWEge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMDtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG5pb24taW5wdXQge1xyXG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmZiZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDstLXBhZGRpbmctc3RhcnQ6MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JmYmZiZiAhaW1wb3J0YW50O1xyXG59aW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufS5maWVscy5maWVsZC1vdXRsaW5lLnBkIHtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG59LmZpZWxzLmZpZWxkLW91dGxpbmUubWItNC5taGoge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufS5idG4tZGl2LmVkaXQtYnRuIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuLmJvdHRtLWNvbnRzIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMnB4O1xyXG59aW9uLWlucHV0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTFweDtcclxufVxyXG5pb24taW5wdXQuc2MtaW9uLWlucHV0LWlvcy1oLnNjLWlvbi1pbnB1dC1pb3Mtcy5pb3MuaHlkcmF0ZWQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5cHggIWltcG9ydGFudDtcclxufVxyXG4uaW1nLWxvYyB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcbmlvbi1pbnB1dHtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICMwMDAgIWltcG9ydGFudDstLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7Zm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWl0ZW0uaXRlbS5pb3MuaXRlbS1saW5lcy1ub25lLmlvbi1mb2N1c2FibGUuaHlkcmF0ZWQuaXRlbS1sYWJlbC5pdGVtLWxhYmVsLXN0YWNrZWQuaXRlbS1pbnRlcmFjdGl2ZS5pdGVtLWlucHV0Lml0ZW0taGFzLXBsYWNlaG9sZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1pb24tZGF0ZXRpbWUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmZiZjtcclxuICAgIHBhZGRpbmc6IDEwcHggOXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59LmNvdmVyLXBhZCB7XHJcbiAgcGFkZGluZzogMCAxOXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufS5idG4tY295IHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzRkNGQ0ZDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiZmJmYmY7XHJcbiAgICBwYWRkaW5nOiAxMXB4IDM2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTdweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjNGQ0ZDRkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbn1cclxuLmJ0bi1kaXYuZWRpdC1idG4gLmJ0bi1jb3kge1xyXG4gdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICM0ZDRkNGQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYmZiZmJmO1xyXG4gICAgcGFkZGluZzogN3B4IDI4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTdweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjNGQ0ZDRkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTFweDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxufS5idG4tZGl2IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufS50dGwtdHAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTE4cHg7XHJcbn1cclxuLmNvdmVyLXBhZCBwIHtcclxuICAgICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNmI2YjZiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi10b3A6IDExcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn0uZGF0ZXRpbWUtdGV4dCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1pb24tdGV4dGFyZWEge1xyXG4gICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICMwMDAgIWltcG9ydGFudDsgXHJcbiAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1pb24tdGV4dGFyZWEge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmZiZiAhaW1wb3J0YW50O1xyXG4gICAgLyogYm9yZGVyLXJhZGl1czogN3B4OyAqL1xyXG4gICAgLyogbWFyZ2luLXRvcDogMTVweDsgKi9cclxuICAgIHBhZGRpbmc6IDEycHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxODVweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcclxufVxyXG5pb24tZGF0ZXRpbWUucGFkaW5nLmlvcy5oeWRyYXRlZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM3cHg7XHJcbn1pbWcuY2FsLWxvYyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQzcHg7XHJcbiAgICBsZWZ0OiAxM3B4O1xyXG59LmlubmVyLWRvZyB7XHJcbiAgICAgIHdpZHRoOiA4M3B4O1xyXG4gICAgaGVpZ2h0OiA4M3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2U1ZDlmZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6ICMwODA4MDg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjdweDtmb250LXdlaWdodDogNjAwO1xyXG4gICAgXHJcbn1cclxuLmlubmVyLWRvZy5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2JlOWZmYztcclxufS5hY3RpdmUgc3BhbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufWlucHV0ey0tcGFkZGluZy1zdGFydDogMTVweFxyXG59XHJcbi53bGstdHh0e3RleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogLjY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5cdH1cclxuaW9uLXNlbGVjdCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgLS0tcGFkZGluZy1zdGFydDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuaW9uLXJhZGlvLWdyb3VwLnJhZHVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59aW9uLXJhZGlvLWdyb3VwLnJhZHVzIGlvbi1pdGVtIGlvbi1yYWRpbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbmlvbi1yYWRpby1ncm91cC5yYWR1cyBpb24taXRlbSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxufWlvbi1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1pb24tZGF0ZXRpbWUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzM3B4ICFpbXBvcnRhbnQ7XHJcbn0ud2F0Y2ggLmNhbC1sb2Mge1xyXG4gICAgdG9wOiA0N3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLndhdGNoIGlvbi1zZWxlY3Qge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxufS5vcCB7XHJcbiAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG59W21haW51bF0ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1baW1ncGVyXSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxufVtuZXdpbWddIGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRvcDogMjklO1xyXG59W25ld2ltZ10ge1xyXG4gICAgYmFja2dyb3VuZDogI2JmYmZiZjtcclxuICAgIGhlaWdodDogNjZweDtcclxuICAgIHdpZHRoOiA2NnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDExOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59LmZpZWxkLW91dGxpbmUgaW9uLWlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG5cdFxyXG59Lm1iLTQgaW9uLWxhYmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE0cHggIWltcG9ydGFudDtcclxufVtuZXdhZGRdIGlvbi1pbnB1dCB7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxufS5maWVscy5maWVsZC1vdXRsaW5lIGlvbi1yb3cge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcbnAge1xyXG4gICAgbWFyZ2luOiAzcHggMCAhaW1wb3J0YW50O1xyXG59XHJcbi5wMHtwYWRkaW5nOjBweDt9Il19 */");

/***/ }),

/***/ "svse":
/*!**********************************************************************!*\
  !*** ./src/app/service-detailsnew/service-details-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ServiceDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceDetailsPageRoutingModule", function() { return ServiceDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-details.page */ "nSpv");




const routes = [
    {
        path: '',
        component: _service_details_page__WEBPACK_IMPORTED_MODULE_3__["ServiceDetailsPage"]
    }
];
let ServiceDetailsPageRoutingModule = class ServiceDetailsPageRoutingModule {
};
ServiceDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServiceDetailsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=service-detailsnew-service-details-module.js.map