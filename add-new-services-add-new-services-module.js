(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-new-services-add-new-services-module"],{

/***/ "PP3j":
/*!***********************************************************!*\
  !*** ./src/app/add-new-services/add-new-services.page.ts ***!
  \***********************************************************/
/*! exports provided: AddNewServicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewServicesPage", function() { return AddNewServicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_new_services_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-new-services.page.html */ "Yb5B");
/* harmony import */ var _add_new_services_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-new-services.page.scss */ "hYor");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_pet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/pet.service */ "kSP7");
/* harmony import */ var _core_service_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/service-provider.service */ "7RZW");
/* harmony import */ var _core_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/utility.service */ "ZtwD");









let AddNewServicesPage = class AddNewServicesPage {
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
            description: '',
        };
        this.previewImage = null;
        this.price = [
            {
                desc: '',
                price: '',
            },
        ];
        this.images = [];
        this.previewimages = [];
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.initializtion();
        this.getServiceCategoriesList();
    }
    getServiceCategoriesList() {
        this.providerService.serviceCatList().subscribe((res) => {
            this.servicecat = res;
            this.utility.dismiss();
        }, (err) => {
            this.utility.dismiss();
            this.utility.showAlert('Something went wrong!');
        });
    }
    initializtion() {
        this.getServiceDetail();
        // this.model.sname = localStorage.getItem('service');
    }
    add() {
        this.price.push({
            desc: '',
            price: '',
        });
    }
    handleFileImage(e) {
        // this.images.push(e.target.files[0]);
        //  console.log('here', this.images);
        //  this.previewimages.push(this.sanitizer.bypassSecurityTrustUrl(
        //   URL.createObjectURL(e.target.files[0])));
        // // this.previewImage = this.sanitizer.bypassSecurityTrustUrl(
        // //   URL.createObjectURL(e.target.files[0])
        // // );
        this.images = e.target.files;
        const fileArray = Array.from(this.images);
        const checkLength = fileArray.length + this.previewimages.length;
        if (checkLength > 4) {
            this.utility.showAlert('Max 4 images can be selected');
            return;
        }
        fileArray.forEach((v) => {
            this.previewimages.push(this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(v)));
        });
    }
    submit() {
        if (this.model.sname == '') {
            return this.utility.showAlert('Name is required');
        }
        if (this.model.description == '') {
            return this.utility.showAlert('Description is required');
        }
        if (this.model.startTime == '') {
            return this.utility.showAlert('Start time is required');
        }
        if (this.model.endTime == '') {
            return this.utility.showAlert('End time is required');
        }
        if (this.price.length == 0) {
            return this.utility.showAlert('Price is required');
        }
        if (this.previewimages.length === 0) {
            return this.utility.showAlert('Atlease one image is required');
        }
        this.utility.present();
        const fd = new FormData();
        Array.from(this.images).forEach((v) => {
            fd.append('images', v);
        });
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
        fd.append('price', JSON.stringify(this.price));
        fd.append('sname', this.model.sname);
        var id = JSON.parse(localStorage.getItem('userObj'))._id;
        fd.append('userId', id);
        console.log(fd);
        this.providerService.serviceAdd(fd).subscribe((res) => {
            this.utility.dismiss();
            this.utility.navigateRoot('/tabs/calender-appointment');
        }, (err) => {
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
AddNewServicesPage.ctorParameters = () => [
    { type: _core_pet_service__WEBPACK_IMPORTED_MODULE_6__["PetService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"] },
    { type: _core_service_provider_service__WEBPACK_IMPORTED_MODULE_7__["ServiceProviderService"] }
];
AddNewServicesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-new-services',
        template: _raw_loader_add_new_services_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_new_services_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddNewServicesPage);



/***/ }),

/***/ "QQCK":
/*!*************************************************************!*\
  !*** ./src/app/add-new-services/add-new-services.module.ts ***!
  \*************************************************************/
/*! exports provided: AddNewServicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewServicesPageModule", function() { return AddNewServicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_new_services_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-new-services-routing.module */ "lYQ4");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");
/* harmony import */ var _add_new_services_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-new-services.page */ "PP3j");








let AddNewServicesPageModule = class AddNewServicesPageModule {
};
AddNewServicesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_new_services_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddNewServicesPageRoutingModule"]
        ],
        declarations: [_add_new_services_page__WEBPACK_IMPORTED_MODULE_7__["AddNewServicesPage"]]
    })
], AddNewServicesPageModule);



/***/ }),

/***/ "Yb5B":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-new-services/add-new-services.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\t<app-header [pageName]='\"aa\"' [pn]='\"detail\"' app=\"serviceProvider\"></app-header>\r\n\t<div class=\"bottm-conts\">\r\n\t\t<h4 class=\"ttl-tp\">Add New Service </h4>\r\n\t <div class=\" fiels\">\r\n  <ion-label class=\"labl-nf\">Service Name</ion-label>\r\n  <!-- <ion-input placeholder=\"\" [(ngModel)]=\"model.sname\"></ion-input> -->\r\n  <ion-select\r\n      name=\"type\"\r\n      [(ngModel)]=\"model.sname\"\r\n      #type=\"ngModel\"\r\n      required\r\n    >\r\n      <ion-select-option *ngFor=\"let p of servicecat\" [value]=\"p._id\">\r\n        {{p.name}}</ion-select-option\r\n      >\r\n    </ion-select>\r\n</div>\r\n <div class=\" fiels\">\r\n  <ion-label class=\"labl-nf\">Description</ion-label>\r\n  <ion-textarea rows=\"6\" placeholder=\"\" [(ngModel)]=\"model.description\"></ion-textarea>\r\n\r\n</div>\r\n\r\n  <div class=\"cover-pad watch\"><ion-label class=\"labl-nf\">Choose Time</ion-label>\r\n    \r\n\r\n<ion-row>\r\n <ion-col size=\"6\">\r\n  <p>Start Time</p>\r\n  <ion-datetime\r\n    displayFormat=\"HH:mm\"\r\n    name=\"startTime\"\r\n    [(ngModel)]=\"model.startTime\"\r\n  ></ion-datetime>\r\n<img src=\"assets/images/clock.png\" class=\"cal-loc\">\r\n</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t\t<p>End Time</p>\r\n  \r\n  <ion-datetime\r\n            displayFormat=\"HH:mm\"\r\n            name=\"endTime\"\r\n            [(ngModel)]=\"model.endTime\"\r\n          ></ion-datetime>\r\n<img src=\"assets/images/clock.png\" class=\"cal-loc\">\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t</ion-row>\t\t\t\t\t \r\n\r\n</div>\r\n\r\n\r\n <div class=\" fiels\">\r\n  <ion-label class=\"labl-nf\">Image</ion-label>\r\n <ul mainul>\r\n <li imgper *ngFor=\"let img of previewimages; let i = index;\"><img [src]=\"img\" style=\"background: #bfbfbf;\r\n    height: 66px;\r\n    width: 66px;\r\n    text-align: center;\r\n    line-height: 118px;\r\n    border-radius: 5px;\r\n    position: relative;\"></li>\r\n <!-- <li imgper><img src=\"assets/images/borde.png\"></li> -->\r\n <li imgper newimg><!-- <img src=\"assets/images/add-half.png\"> --><label for=\"file-input\" class=\"file-icon\" position=\"stacked\">\r\n       <img src=\"assets/images/add-half.png\">\r\n      </label>\r\n      <input \r\n        id=\"file-input\"\r\n\r\n        type=\"file\"\r\n      (change)=\"handleFileImage($event)\"\r\n      accept=\"image/*\"\r\n      multiple\r\n      style=\"display: none\"\r\n      /></li>\r\n </ul>\r\n\r\n</div>\r\n\r\n <div class=\" fiels field-outline mb-4\">\r\n  <ion-label class=\"labl-nf\">Price</ion-label>\r\n<ion-row *ngFor=\"let doc of price; let i  = index;\">\r\n <ion-col size=\"8\" >\r\n \t{{doc.pricee}}\r\n   <ion-input placeholder=\"\" [(ngModel)]=\"doc.desc\"></ion-input>\r\n</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"4\">\r\n  <ion-input placeholder=\"\" [(ngModel)]=\"doc.price\"></ion-input>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-icon name=\"add-circle-outline\" (click)=\"add()\" *ngIf=\"i == (price?.length -1)\"></ion-icon>\r\n\t\t</ion-row>\r\n\t\t<!-- <ion-row>\r\n <ion-col size=\"8\">\r\n   <ion-input placeholder=\"Stay Overnight\"></ion-input>\r\n</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"4\">\r\n  <ion-input placeholder=\"$50.00\"></ion-input>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t</ion-row>\t\t<ion-row>\r\n <ion-col size=\"8\">\r\n   <ion-input placeholder=\"1 Visits Per Day\"></ion-input>\r\n</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"4\">\r\n  <ion-input placeholder=\"$17.00\"></ion-input>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t</ion-row>\t\t\r\n\t\t<ion-row newadd>\r\n <ion-col size=\"8\">\r\n   <ion-input placeholder=\"Add More\"></ion-input>\r\n</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"4\">\r\n  <ion-input placeholder=\"$00.00\"></ion-input>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t</ion-row>\t\r\n\t\t -->\r\n\r\n</div>\r\n\t<div class=\"btn-div\"><a class=\"btn-coy\"  (click)=\"submit()\"> Submit </a></div></div>\r\n\t\r\n\t</ion-content>");

/***/ }),

/***/ "hYor":
/*!*************************************************************!*\
  !*** ./src/app/add-new-services/add-new-services.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".labl-nf {\n  margin-bottom: 0;\n  font-size: 16px !important;\n  color: #8f8f8f;\n  font-weight: 400;\n  margin-top: 0;\n  display: block;\n}\n\n.fiels {\n  padding: 0 19px;\n  margin-bottom: 25px;\n}\n\nion-textarea {\n  --padding-start: 0;\n  --padding-top: 0;\n  --placeholder-color: #000 !important;\n}\n\nion-input {\n  border: 1px solid #bfbfbf !important;\n  border-radius: 0;\n  --padding-start:0px;\n  margin-top: 0px !important;\n  border: transparent !important;\n  border-bottom: 1px solid #bfbfbf !important;\n}\n\nion-item {\n  margin-bottom: 16px;\n}\n\n.bottm-conts {\n  padding: 20px 2px;\n}\n\nion-input {\n  padding-left: 11px;\n}\n\nion-input.sc-ion-input-ios-h.sc-ion-input-ios-s.ios.hydrated {\n  padding-left: 9px !important;\n}\n\n.img-loc {\n  margin-left: 8px;\n}\n\nion-input {\n  --placeholder-color: #000 !important;\n  --placeholder-opacity: 1;\n  font-size: 16px !important;\n}\n\nion-item.item.ios.item-lines-none.ion-focusable.hydrated.item-label.item-label-stacked.item-interactive.item-input.item-has-placeholder {\n  margin-bottom: 25px;\n}\n\nion-datetime {\n  border: 1px solid #bfbfbf;\n  padding: 10px 9px;\n  border-radius: 7px;\n  font-size: 16px;\n}\n\n.cover-pad {\n  padding: 0 19px;\n  margin-bottom: 25px;\n}\n\n.btn-coy {\n  text-decoration: none;\n  color: #4d4d4d;\n  display: inline-block;\n  border: 2px solid #bfbfbf;\n  padding: 11px 36px;\n  border-radius: 50px;\n  margin-top: 17px;\n  font-size: 17px;\n  color: #4d4d4d;\n  margin-bottom: 30px;\n  margin-top: 22px;\n}\n\n.btn-div {\n  text-align: center;\n}\n\n.ttl-tp {\n  position: relative;\n  left: -18px;\n}\n\n.cover-pad p {\n  margin: 0;\n  font-size: 12px;\n  color: #6b6b6b;\n  font-weight: 500;\n  margin-top: 11px;\n  margin-bottom: 5px;\n}\n\n.datetime-text {\n  padding-left: 20px;\n}\n\nion-textarea {\n  --placeholder-color: #000 !important;\n  --placeholder-opacity: 1;\n  font-size: 15px !important;\n}\n\nion-textarea {\n  border: 1px solid #bfbfbf !important;\n  /* border-radius: 7px; */\n  /* margin-top: 15px; */\n  padding: 12px !important;\n  border-radius: 6px !important;\n  height: 185px;\n  margin-top: 12px !important;\n}\n\nion-datetime.pading.ios.hydrated {\n  padding-left: 37px;\n}\n\nimg.cal-loc {\n  position: absolute;\n  top: 43px;\n  left: 13px;\n}\n\n/*span {\r\n      width: 100%;\r\n    display: block;\r\n    position: absolute;\r\n    left: -5px;\r\n    top: -26px;\r\n    color: #080808;\r\n    font-weight: 700;\r\n    font-size: 15px;\r\n}*/\n\n.inner-dog {\n  width: 71px;\n  height: 71px;\n  background: #dcdcdc;\n  border-radius: 50%;\n  line-height: 92px;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  margin: 0 auto;\n  margin-top: 14px;\n  position: relative;\n}\n\n.inner-dog.active:after {\n  /* background: white; */\n  /* height: 20px; */\n  /* width: 20px; */\n  position: absolute;\n  content: \"\";\n  height: 60px;\n  width: 60px;\n  left: 4px;\n  border-radius: 60%;\n  top: 4px;\n  border: 2px solid #fff;\n}\n\n.inner-dog.active {\n  background: #be9ffc;\n}\n\n.active span {\n  color: #fff;\n}\n\ninput {\n  --padding-start: 15px\r\n;\n}\n\n.wlk-txt {\n  text-align: center;\n  text-align: center;\n  font-size: 13px !important;\n  color: #080808 !important;\n  margin-top: 6px !important;\n}\n\nion-select {\n  border: 1px solid #ddd;\n  ---padding-start: 15px !important;\n  padding: 8px 10px;\n  border-radius: 6px;\n}\n\nion-radio-group.radus {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\nion-radio-group.radus ion-item ion-radio {\n  background: #fff;\n  border: 1px solid #cacaca;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\nion-radio-group.radus ion-item {\n  --padding-start: 5px;\n}\n\nion-select {\n  width: 100%;\n}\n\nion-datetime {\n  padding-left: 33px !important;\n}\n\n.watch .cal-loc {\n  top: 47px !important;\n}\n\n.watch ion-select {\n  --padding-start: 0;\n}\n\n.op {\n  font-weight: 400 !important;\n  margin-left: 8px;\n}\n\n[mainul] {\n  padding: 0;\n  list-style: none;\n}\n\n[imgper] {\n  display: inline-block;\n  margin-right: 7px;\n}\n\n[newimg] img {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  top: 29%;\n}\n\n[newimg] {\n  background: #bfbfbf;\n  height: 66px;\n  width: 66px;\n  text-align: center;\n  line-height: 118px;\n  border-radius: 5px;\n  position: relative;\n}\n\n.field-outline ion-input {\n  border: 1px solid #bfbfbf !important;\n  border-radius: 7px;\n  --padding-start: 8px;\n}\n\n.mb-4 ion-label {\n  margin-bottom: 14px !important;\n}\n\n[newadd] ion-input {\n  opacity: .5;\n}\n\n.fiels.field-outline ion-row {\n  margin-bottom: 4px;\n}\n\n.p0 {\n  padding: 0px;\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkZC1uZXctc2VydmljZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2QsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGNBQWM7QUFDbEI7O0FBQUM7RUFDRyxlQUFlO0VBQ2YsbUJBQW1CO0FBR3ZCOztBQUZDO0VBQ0csa0JBQWdCO0VBQ2hCLGdCQUFjO0VBQ2Qsb0NBQW9CO0FBS3hCOztBQUhBO0VBQ08sb0NBQW9DO0VBQ3ZDLGdCQUFnQjtFQUFDLG1CQUFnQjtFQUNqQywwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLDJDQUEyQztBQU8vQzs7QUFOQztFQUNHLG1CQUFtQjtBQVN2Qjs7QUFQQTtFQUNJLGlCQUFpQjtBQVVyQjs7QUFUQztFQUNHLGtCQUFrQjtBQVl0Qjs7QUFWQTtFQUNJLDRCQUE0QjtBQWFoQzs7QUFYQTtFQUNJLGdCQUFnQjtBQWNwQjs7QUFaQTtFQUNJLG9DQUFvQjtFQUFpQix3QkFBc0I7RUFBRywwQkFBMEI7QUFpQjVGOztBQWZBO0VBQ0ksbUJBQW1CO0FBa0J2Qjs7QUFqQkM7RUFDRyx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0FBb0JuQjs7QUFuQkM7RUFDQyxlQUFlO0VBQ2IsbUJBQW1CO0FBc0J2Qjs7QUFyQkM7RUFDQyxxQkFBcUI7RUFDbkIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBd0JwQjs7QUF2QkM7RUFDRyxrQkFBa0I7QUEwQnRCOztBQXpCQztFQUNHLGtCQUFrQjtFQUNsQixXQUFXO0FBNEJmOztBQTFCQTtFQUNPLFNBQVM7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBNkJ0Qjs7QUE1QkM7RUFDRyxrQkFBa0I7QUErQnRCOztBQTlCQztFQUNJLG9DQUFvQjtFQUNwQix3QkFBc0I7RUFDdkIsMEJBQTBCO0FBaUM5Qjs7QUFoQ0M7RUFDRyxvQ0FBb0M7RUFDcEMsd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLDJCQUEyQjtBQW1DL0I7O0FBakNBO0VBQ0ksa0JBQWtCO0FBb0N0Qjs7QUFuQ0M7RUFDRyxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7QUFzQ2Q7O0FBckNDOzs7Ozs7Ozs7RUFnREM7O0FBdkNDO0VBQ0csV0FBVztFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQXlDdEI7O0FBeENDO0VBQ0csdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLHNCQUFzQjtBQTJDMUI7O0FBekNBO0VBQ0ksbUJBQW1CO0FBNEN2Qjs7QUEzQ0M7RUFDRyxXQUFXO0FBOENmOztBQTdDQztFQUFNO0FBQWdCO0FBa0R2Qjs7QUFoREE7RUFBUyxrQkFBa0I7RUFDeEIsa0JBQWtCO0VBQ2pCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFBSywwQkFDakM7QUFvREQ7O0FBbkRBO0VBQ0ksc0JBQXNCO0VBQ3RCLGlDQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBc0R0Qjs7QUFwREE7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQXVEL0I7O0FBdERDO0VBQ0csZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7QUF5RHRCOztBQXZEQTtFQUNJLG9CQUFnQjtBQTBEcEI7O0FBekRDO0VBQ0csV0FBVztBQTREZjs7QUEzREM7RUFDRyw2QkFBNkI7QUE4RGpDOztBQTdEQztFQUNHLG9CQUFvQjtBQWdFeEI7O0FBOURBO0VBQ0Usa0JBQWdCO0FBaUVsQjs7QUFoRUM7RUFDRywyQkFBMkI7RUFDM0IsZ0JBQWdCO0FBbUVwQjs7QUFFQTtFQW5FSSxVQUFVO0VBQ1YsZ0JBQWdCO0FBcUVwQjs7QUFFQTtFQXJFSSxxQkFBcUI7RUFDckIsaUJBQWlCO0FBdUVyQjs7QUFFQTtFQXZFSSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixjQUFjO0VBQ2QsUUFBUTtBQXlFWjs7QUFFQTtFQXpFSSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUEyRXRCOztBQTFFQztFQUNHLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsb0JBQWdCO0FBNkVwQjs7QUEzRUM7RUFDRyw4QkFBOEI7QUE4RWxDOztBQUVBO0VBOUVJLFdBQVc7QUFnRmY7O0FBL0VDO0VBQ0csa0JBQWtCO0FBa0Z0Qjs7QUFoRkE7RUFBSSxZQUFXO0FBb0ZmIiwiZmlsZSI6ImFkZC1uZXctc2VydmljZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmwtbmYge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjOGY4ZjhmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufS5maWVscyB7XHJcbiAgICBwYWRkaW5nOiAwIDE5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59aW9uLXRleHRhcmVhIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWlucHV0IHtcclxuICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7LS1wYWRkaW5nLXN0YXJ0OjBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZmJmYmYgIWltcG9ydGFudDtcclxufWlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuLmJvdHRtLWNvbnRzIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMnB4O1xyXG59aW9uLWlucHV0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTFweDtcclxufVxyXG5pb24taW5wdXQuc2MtaW9uLWlucHV0LWlvcy1oLnNjLWlvbi1pbnB1dC1pb3Mtcy5pb3MuaHlkcmF0ZWQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5cHggIWltcG9ydGFudDtcclxufVxyXG4uaW1nLWxvYyB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcbmlvbi1pbnB1dHtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICMwMDAgIWltcG9ydGFudDstLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7Zm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWl0ZW0uaXRlbS5pb3MuaXRlbS1saW5lcy1ub25lLmlvbi1mb2N1c2FibGUuaHlkcmF0ZWQuaXRlbS1sYWJlbC5pdGVtLWxhYmVsLXN0YWNrZWQuaXRlbS1pbnRlcmFjdGl2ZS5pdGVtLWlucHV0Lml0ZW0taGFzLXBsYWNlaG9sZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1pb24tZGF0ZXRpbWUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmZiZjtcclxuICAgIHBhZGRpbmc6IDEwcHggOXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59LmNvdmVyLXBhZCB7XHJcbiAgcGFkZGluZzogMCAxOXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufS5idG4tY295IHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzRkNGQ0ZDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiZmJmYmY7XHJcbiAgICBwYWRkaW5nOiAxMXB4IDM2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTdweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjNGQ0ZDRkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbn0uYnRuLWRpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0udHRsLXRwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IC0xOHB4O1xyXG59XHJcbi5jb3Zlci1wYWQgcCB7XHJcbiAgICAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzZiNmI2YjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxMXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59LmRhdGV0aW1lLXRleHQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59aW9uLXRleHRhcmVhIHtcclxuICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7IFxyXG4gICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG59aW9uLXRleHRhcmVhIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmYgIWltcG9ydGFudDtcclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDdweDsgKi9cclxuICAgIC8qIG1hcmdpbi10b3A6IDE1cHg7ICovXHJcbiAgICBwYWRkaW5nOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTg1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWRhdGV0aW1lLnBhZGluZy5pb3MuaHlkcmF0ZWQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzN3B4O1xyXG59aW1nLmNhbC1sb2Mge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0M3B4O1xyXG4gICAgbGVmdDogMTNweDtcclxufS8qc3BhbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtNXB4O1xyXG4gICAgdG9wOiAtMjZweDtcclxuICAgIGNvbG9yOiAjMDgwODA4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufSovLmlubmVyLWRvZyB7XHJcbiAgICAgIHdpZHRoOiA3MXB4O1xyXG4gICAgaGVpZ2h0OiA3MXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RjZGNkYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiA5MnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufS5pbm5lci1kb2cuYWN0aXZlOmFmdGVyIHtcclxuICAgIC8qIGJhY2tncm91bmQ6IHdoaXRlOyAqL1xyXG4gICAgLyogaGVpZ2h0OiAyMHB4OyAqL1xyXG4gICAgLyogd2lkdGg6IDIwcHg7ICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2MCU7XHJcbiAgICB0b3A6IDRweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbn1cclxuLmlubmVyLWRvZy5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2JlOWZmYztcclxufS5hY3RpdmUgc3BhbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufWlucHV0ey0tcGFkZGluZy1zdGFydDogMTVweFxyXG59XHJcbi53bGstdHh0e3RleHQtYWxpZ246IGNlbnRlcjtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzA4MDgwOCAhaW1wb3J0YW50OyAgICBtYXJnaW4tdG9wOiA2cHggIWltcG9ydGFudFxyXG5cdH1cclxuaW9uLXNlbGVjdCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgLS0tcGFkZGluZy1zdGFydDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuaW9uLXJhZGlvLWdyb3VwLnJhZHVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59aW9uLXJhZGlvLWdyb3VwLnJhZHVzIGlvbi1pdGVtIGlvbi1yYWRpbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbmlvbi1yYWRpby1ncm91cC5yYWR1cyBpb24taXRlbSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxufWlvbi1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1pb24tZGF0ZXRpbWUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzM3B4ICFpbXBvcnRhbnQ7XHJcbn0ud2F0Y2ggLmNhbC1sb2Mge1xyXG4gICAgdG9wOiA0N3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLndhdGNoIGlvbi1zZWxlY3Qge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxufS5vcCB7XHJcbiAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG59W21haW51bF0ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1baW1ncGVyXSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxufVtuZXdpbWddIGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRvcDogMjklO1xyXG59W25ld2ltZ10ge1xyXG4gICAgYmFja2dyb3VuZDogI2JmYmZiZjtcclxuICAgIGhlaWdodDogNjZweDtcclxuICAgIHdpZHRoOiA2NnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDExOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59LmZpZWxkLW91dGxpbmUgaW9uLWlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG5cdFxyXG59Lm1iLTQgaW9uLWxhYmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE0cHggIWltcG9ydGFudDtcclxufVtuZXdhZGRdIGlvbi1pbnB1dCB7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxufS5maWVscy5maWVsZC1vdXRsaW5lIGlvbi1yb3cge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcbi5wMHtwYWRkaW5nOjBweDt9Il19 */");

/***/ }),

/***/ "lYQ4":
/*!*********************************************************************!*\
  !*** ./src/app/add-new-services/add-new-services-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AddNewServicesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewServicesPageRoutingModule", function() { return AddNewServicesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_new_services_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-new-services.page */ "PP3j");




const routes = [
    {
        path: '',
        component: _add_new_services_page__WEBPACK_IMPORTED_MODULE_3__["AddNewServicesPage"]
    }
];
let AddNewServicesPageRoutingModule = class AddNewServicesPageRoutingModule {
};
AddNewServicesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddNewServicesPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=add-new-services-add-new-services-module.js.map