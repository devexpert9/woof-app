(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-provider-signup2-service-provider-signup2-module"],{

/***/ "7Ryn":
/*!*****************************************************************************!*\
  !*** ./src/app/service-provider-signup2/service-provider-signup2.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ServiceProviderSignup2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderSignup2PageModule", function() { return ServiceProviderSignup2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_provider_signup2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-provider-signup2-routing.module */ "IIeA");
/* harmony import */ var _service_provider_signup2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service-provider-signup2.page */ "R8N2");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");










let ServiceProviderSignup2PageModule = class ServiceProviderSignup2PageModule {
};
ServiceProviderSignup2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _service_provider_signup2_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServiceProviderSignup2PageRoutingModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
        ],
        declarations: [_service_provider_signup2_page__WEBPACK_IMPORTED_MODULE_6__["ServiceProviderSignup2Page"]]
    })
], ServiceProviderSignup2PageModule);



/***/ }),

/***/ "IIeA":
/*!*************************************************************************************!*\
  !*** ./src/app/service-provider-signup2/service-provider-signup2-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ServiceProviderSignup2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderSignup2PageRoutingModule", function() { return ServiceProviderSignup2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_provider_signup2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-provider-signup2.page */ "R8N2");




const routes = [
    {
        path: '',
        component: _service_provider_signup2_page__WEBPACK_IMPORTED_MODULE_3__["ServiceProviderSignup2Page"]
    }
];
let ServiceProviderSignup2PageRoutingModule = class ServiceProviderSignup2PageRoutingModule {
};
ServiceProviderSignup2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServiceProviderSignup2PageRoutingModule);



/***/ }),

/***/ "R8N2":
/*!***************************************************************************!*\
  !*** ./src/app/service-provider-signup2/service-provider-signup2.page.ts ***!
  \***************************************************************************/
/*! exports provided: ServiceProviderSignup2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderSignup2Page", function() { return ServiceProviderSignup2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_service_provider_signup2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./service-provider-signup2.page.html */ "eq+g");
/* harmony import */ var _service_provider_signup2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-provider-signup2.page.scss */ "phoR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "8PDw");
/* harmony import */ var _core_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/language.service */ "0cly");
/* harmony import */ var _core_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/utility.service */ "ZtwD");
/* harmony import */ var _signup_countryCode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../signup/countryCode */ "H7/F");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");










let ServiceProviderSignup2Page = class ServiceProviderSignup2Page {
    constructor(authService, utility, languageService, fb, menuCtrl) {
        this.authService = authService;
        this.utility = utility;
        this.languageService = languageService;
        this.fb = fb;
        this.menuCtrl = menuCtrl;
        this.model = {};
        this.countryList = _signup_countryCode__WEBPACK_IMPORTED_MODULE_8__["list"];
    }
    ngOnInit() {
        console.log('ngOnit');
        this.getServiceCategory();
        this.menuCtrl.enable(false);
        this.buildForm();
        this.languages = this.languageService.languages;
    }
    ionViewWillEnter() {
        this.menuCtrl.swipeGesture(false);
    }
    buildForm() {
        this.registerForm = this.fb.group({
            postalCode: [''],
            companyName: [''],
            // services_given: ['', [Validators.required]],
            gender: [''],
            fiscalNumber: [''],
            consultation: ['direct'],
        });
    }
    get petType() {
        return this.registerForm.get('petType');
    }
    // pattern=""
    get f() {
        return this.registerForm.controls;
    }
    addPetType() {
        const pet = this.fb.group({
            petType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
        this.petType.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));
    }
    removePetType(i) {
        this.petType.removeAt(i);
    }
    handleChange(e) {
        console.log(e);
        const val = e.detail.value;
        this.petType.clear();
        for (let i = 1; i <= val; i++) {
            this.addPetType();
        }
    }
    submit(form) {
        Object.keys(form.controls).forEach((key) => {
            form.get(key).markAsTouched();
        });
        if (form.status.toLowerCase() === 'valid') {
            const formObject = form.value;
            formObject.role = 'service provider';
            delete formObject.cPassword;
            // formObject.petType = formObject.petType.map((v) => v.petType);
            console.log(formObject);
            let signUpValues = JSON.parse(this.utility.getLocal('signUpData'));
            console.log(signUpValues);
            let dict = {
                firstname: signUpValues === null || signUpValues === void 0 ? void 0 : signUpValues.firstname,
                lastname: signUpValues === null || signUpValues === void 0 ? void 0 : signUpValues.lastname,
                gender: formObject === null || formObject === void 0 ? void 0 : formObject.gender,
                companyName: formObject === null || formObject === void 0 ? void 0 : formObject.companyName,
                fiscalNumber: formObject === null || formObject === void 0 ? void 0 : formObject.fiscalNumber,
                address: signUpValues === null || signUpValues === void 0 ? void 0 : signUpValues.address,
                country: signUpValues === null || signUpValues === void 0 ? void 0 : signUpValues.country,
                city: signUpValues === null || signUpValues === void 0 ? void 0 : signUpValues.city,
                zipCode: signUpValues === null || signUpValues === void 0 ? void 0 : signUpValues.zipCode,
                email: signUpValues === null || signUpValues === void 0 ? void 0 : signUpValues.email,
                password: signUpValues === null || signUpValues === void 0 ? void 0 : signUpValues.password,
                numberOfPet: signUpValues === null || signUpValues === void 0 ? void 0 : signUpValues.numberOfPet,
                petType: '',
                // services: formObject?.services_given,
                services: signUpValues === null || signUpValues === void 0 ? void 0 : signUpValues.services_given,
                consultationType: formObject === null || formObject === void 0 ? void 0 : formObject.consultation,
                role: 'service provider',
            };
            this.utility.present();
            this.authService.register(dict).subscribe((res) => {
                console.log(res);
                this.utility.dismiss();
                this.utility.setLocal('cred', window.btoa(JSON.stringify(formObject.email + ':' + formObject.password)));
                if (res.status == true) {
                    this.utility.setLocal('userObj', JSON.stringify(res.data));
                    let json = {
                        email: signUpValues === null || signUpValues === void 0 ? void 0 : signUpValues.email,
                        password: signUpValues === null || signUpValues === void 0 ? void 0 : signUpValues.password,
                        role: 'service provider',
                    };
                    this.authService.login(json).subscribe((resp) => {
                        console.log(resp);
                        const token = resp['token'];
                        const userObj = resp['data'];
                        this.utility.setLocal('token', token);
                        this.utility.setLocal('userObj', JSON.stringify(userObj));
                        this.utility.dismiss();
                        this.utility.navigateRoot('/tabs/calender-appointment');
                        this.utility.eventBus.sideMenu.next('service-provider');
                    });
                    this.utility.navigate('/login');
                }
                else {
                    // this.utility.showAlert(res['message']);
                    this.utility.presentToastWithOptions(res['message']);
                }
            }, (err) => {
                this.utility.dismiss();
                // this.utility.hideLoading();
            });
        }
    }
    switchLanguage(e) {
        console.log(e);
        const language = e.toLowerCase();
        this.languageService.useLanguage(language.code);
    }
    ngOnDestroy() {
        console.log('working');
        this.menuCtrl.enable(true);
    }
    ionViewWillLeave() {
        console.log('leaving');
        this.menuCtrl.enable(true);
        this.menuCtrl.swipeGesture(true);
    }
    getServiceCategory() {
        this.authService.getServiceCategory().subscribe((res) => {
            this.services = res['data'];
            console.log(this.services);
        });
    }
};
ServiceProviderSignup2Page.ctorParameters = () => [
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"] },
    { type: _core_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["MenuController"] }
];
ServiceProviderSignup2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-service-provider-signup2',
        template: _raw_loader_service_provider_signup2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_service_provider_signup2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ServiceProviderSignup2Page);



/***/ }),

/***/ "eq+g":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/service-provider-signup2/service-provider-signup2.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>add-product</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n  <app-header [pageName]='\"Sign Up\"'></app-header>\r\n  <div class=\"bottm-conts\">\r\n    <!-- <h4 class=\"ttl-tp ttl-orange\">{{'register.signUp' | translate}}</h4> -->\r\n\r\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"submit(registerForm)\">\r\n\r\n       <ion-button\r\n            shape=\"round\"\r\n            fill=\"outline\"\r\n            class=\"btn-cancl\"\r\n            type=\"submit\"\r\n            [disabled]=\"registerForm.invalid\"\r\n            >{{'register.skip' | translate}}</ion-button\r\n          >\r\n      <div class=\"form-botm\">\r\n\r\n           <ion-row class=\"marg-nsg\">\r\n          <ion-col size=\"12\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\"\r\n                >{{'register.gender' | translate}}</ion-label\r\n              >\r\n              <ion-select name=\"gender\" formControlName=\"gender\">\r\n                <ion-select-option value=\"male\">Male</ion-select-option>\r\n                <ion-select-option value=\"female\">Female</ion-select-option>\r\n                <ion-select-option value=\"other\">Other</ion-select-option>\r\n              </ion-select>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.gender.touched && f.gender.errors?.required\"\r\n              >\r\n                Gender is required\r\n              </span>\r\n            </ion-item>\r\n          </ion-col>\r\n          <!-- <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\"\r\n                >{{'register.nationality' | translate}}</ion-label\r\n              >\r\n              <ion-input\r\n                placeholder=\"\"\r\n                name=\"nationality\"\r\n                value=\"N/A\"\r\n                formControlName=\"nationality\"\r\n              ></ion-input>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.nationality.touched && f.nationality.errors?.required\"\r\n              >\r\n                Nationality is required\r\n              </span>\r\n            </ion-item> -->\r\n          <!-- </ion-col> -->\r\n        </ion-row>\r\n\r\n        <ion-item lines=\"none\" class=\"inpt-f\">\r\n          <ion-label position=\"stacked\"\r\n            >{{'register.companyName' | translate}}</ion-label\r\n          >\r\n          <ion-input\r\n            placeholder=\"\"\r\n            name=\"companyName\"\r\n            formControlName=\"companyName\"\r\n            value=\"+1 987 6543 210\"\r\n            \r\n            type=\"text\"\r\n          ></ion-input>\r\n          <span\r\n            class=\"text-danger\"\r\n            *ngIf=\"f.companyName.touched && f.companyName.errors?.required\"\r\n          >\r\n            Company Name is required\r\n          </span>\r\n          <span\r\n            class=\"text-danger\"\r\n            *ngIf=\"f.companyName.touched && f.companyName.errors?.pattern\"\r\n          >\r\n            Company Name only contain digits\r\n          </span>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"inpt-f\">\r\n          <ion-label position=\"stacked\"\r\n            >{{'register.fiscalNumber' | translate}}</ion-label\r\n          >\r\n          <ion-input\r\n            placeholder=\"\"\r\n            name=\"fiscalNumber\"\r\n            formControlName=\"fiscalNumber\"\r\n            value=\"+1 987 6543 210\"\r\n            \r\n            type=\"text\"\r\n          ></ion-input>\r\n          <span\r\n            class=\"text-danger\"\r\n            *ngIf=\"f.fiscalNumber.touched && f.fiscalNumber.errors?.required\"\r\n          >\r\n            Fiscal Number is required\r\n          </span>\r\n          <span\r\n            class=\"text-danger\"\r\n            *ngIf=\"f.fiscalNumber.touched && f.fiscalNumber.errors?.pattern\"\r\n          >\r\n            Fiscal Number only contain digits\r\n          </span>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\" class=\"inpt-f\">\r\n          <ion-label position=\"stacked\"\r\n            >{{'register.postalCode' | translate}}</ion-label\r\n          >\r\n          <ion-input\r\n            placeholder=\"\"\r\n            name=\"postalCode\"\r\n            formControlName=\"postalCode\"            \r\n            type=\"text\"\r\n          ></ion-input>\r\n          <span\r\n            class=\"text-danger\"\r\n            *ngIf=\"f.postalCode.touched && f.postalCode.errors?.required\"\r\n          >\r\n            Postal code is required\r\n          </span>\r\n          <!-- <span\r\n            class=\"text-danger\"\r\n            *ngIf=\"f.fiscalNumber.touched && f.fiscalNumber.errors?.pattern\"\r\n          >\r\n            Fiscal Number only contain digits\r\n          </span> -->\r\n        </ion-item>\r\n        \r\n        <ion-item lines=\"none\" class=\"inpt-f consult_type\">\r\n          <ion-list>\r\n            <ion-radio-group value=\"direct\" formControlName=\"consultation\">\r\n              <ion-list-header style=\"padding: 0\">\r\n                <ion-label>Consultation Type</ion-label>\r\n              </ion-list-header>\r\n\r\n              <ion-item>\r\n                <ion-label class=\"label_radio\"> Direct</ion-label>\r\n                <ion-radio slot=\"start\" value=\"direct\" mode=\"md\"></ion-radio>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label class=\"label_radio\">Online</ion-label>\r\n                <ion-radio slot=\"start\" value=\"online\" mode=\"md\"></ion-radio>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label class=\"label_radio\">Both</ion-label>\r\n                <ion-radio slot=\"start\" value=\"both\" mode=\"md\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-list>\r\n        </ion-item>\r\n\r\n        <div class=\"bt-trs\">\r\n          <ion-button\r\n            shape=\"round\"\r\n            fill=\"outline\"\r\n            class=\"btn-cancl\"\r\n            type=\"submit\"\r\n            [disabled]=\"registerForm.invalid\"\r\n            >{{'register.signUp' | translate}}</ion-button\r\n          >\r\n        </div>\r\n\r\n        <p class=\"sign-td\">\r\n          <a href=\"javascript:void(0)\" routerLink=\"/login\">\r\n            Already have an account? Sign In\r\n          </a>\r\n        </p>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <!-- <ng-select\r\n    [(ngModel)]=\"selectedCar\"\r\n    [clearable]=\"false\"\r\n    (change)=\"switchLanguage($event)\"\r\n    class=\"lang-select-dropdown\"\r\n  >\r\n    <ng-option selected hidden disabled>Select Language</ng-option>\r\n    <ng-option *ngFor=\"let l of languages\" [value]=\"l\">\r\n      <span>\r\n        <img\r\n          class=\"flag\"\r\n          [src]=\"l.icon\"\r\n          height=\"20px\"\r\n          width=\"20px\"\r\n          [alt]=\"l.code\"\r\n        /> </span\r\n      ><span class=\"lang-label\"> {{l.name}} </span>\r\n    </ng-option>\r\n  </ng-select> -->\r\n</ion-content>\r\n");

/***/ }),

/***/ "phoR":
/*!*****************************************************************************!*\
  !*** ./src/app/service-provider-signup2/service-provider-signup2.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .edit-c {\n  display: block;\n  text-align: right;\n  margin: 15px 0 15px;\n}\n\nion-content .edit-c .icon-rig {\n  width: 35px;\n  height: 35px;\n  background: #bfbfbf;\n  display: inline-block;\n  text-align: center;\n  line-height: 37px;\n  color: #fff;\n  border-radius: 50%;\n  margin-right: 5px;\n  font-size: 16px;\n}\n\nion-content ion-item.inpt-f {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  padding: 0px;\n  margin-bottom: 5px;\n}\n\nion-content ion-item.inpt-f ion-label {\n  font-size: 12px;\n  color: rgba(100, 100, 100, 0.62);\n  font-weight: 700;\n  margin-top: 0px;\n  height: 16px;\n  max-height: 16px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\nion-content ion-item.inpt-f ion-input,\nion-content ion-item.inpt-f ion-select,\nion-content ion-item.inpt-f ion-datetime,\nion-content ion-item.inpt-f ion-textarea {\n  border-bottom: 1px solid #adadad;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  height: 33px;\n  --height: 33px;\n  max-height: 33px;\n  font-size: 18px;\n  color: black;\n  --padding-end: 0px;\n}\n\nion-content ion-item.inpt-f ion-textarea {\n  height: auto;\n  --height: auto;\n  max-height: 100%;\n}\n\nion-content ion-item.inpt-f ion-select {\n  --padding-end: 10px;\n}\n\nion-content .marg-nsg {\n  margin: 0 -5px;\n}\n\nion-content h4.cnter-ttl {\n  margin-top: -7px;\n  margin-bottom: 15px;\n  font-size: 17px;\n  color: #828282;\n  font-weight: bold;\n}\n\nion-content .bt-trs {\n  display: block;\n  text-align: center;\n  margin-top: 0px;\n}\n\nion-content .bt-trs ion-button.btn-save {\n  background: #bfbfbf;\n  --background: #bfbfbf;\n  border-radius: 50px;\n  color: #fff;\n  --padding-start: 35px;\n  box-shadow: none;\n  --box-shadow: none;\n  --padding-end: 35px;\n  height: 38px;\n  text-transform: capitalize;\n  font-size: 17px;\n  margin-right: 7px;\n}\n\nion-content .bt-trs ion-button.btn-cancl {\n  border-radius: 50px;\n  color: #4d4d4d;\n  --padding-start: 45px;\n  box-shadow: none;\n  --box-shadow: none;\n  --padding-end: 45px;\n  height: 41px;\n  text-transform: capitalize;\n  font-size: 17px;\n  border-color: #ffac83;\n  --border-color: #ffac83;\n  font-weight: 500;\n}\n\nion-content .bottm-conts {\n  padding: 20px 20px;\n}\n\nion-content label.uplos-imgs {\n  display: block;\n  border: 2px dashed #616161;\n  width: 100%;\n  text-align: center;\n  padding: 30px 0;\n  border-radius: 4px;\n  font-size: 13px;\n  color: #949494;\n  font-weight: 600;\n}\n\nion-content ion-item.lis-snrt {\n  --padding-start: 0px;\n  margin-top: -10px;\n  margin-bottom: 15px;\n  --padding-end: 0px;\n}\n\nion-content ion-item.lis-snrt ion-checkbox {\n  margin-right: 8px;\n}\n\nion-content ion-item.lis-snrt ion-label {\n  font-size: 18px;\n  color: #000;\n}\n\nion-content span .flag {\n  vertical-align: middle;\n  height: 20px;\n  width: 20px;\n  margin: 0px 5px;\n}\n\nion-content .lang-label {\n  font-size: 18px;\n  color: black;\n  vertical-align: middle;\n}\n\nion-content p.sign-td {\n  text-align: center;\n  margin-top: 5px;\n  margin-bottom: 0px;\n}\n\nion-content p.sign-td a {\n  text-decoration: none;\n  font-size: 18px;\n  color: #4e4e4e;\n  font-weight: 500;\n}\n\nion-content .inpt-f {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  padding: 0px;\n  margin-bottom: 5px;\n}\n\nion-content .inpt-f ion-label {\n  font-size: 9px;\n  color: rgba(100, 100, 100, 0.62);\n  font-weight: 700;\n  margin-top: 0px;\n  height: 16px;\n  max-height: 16px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\nion-content .consult_type ion-item {\n  float: left;\n  width: 50%;\n}\n\nion-content .consult_type ion-item .label_radio {\n  font-size: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlcnZpY2UtcHJvdmlkZXItc2lnbnVwMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFTSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUF6Qjs7QUFKQTtFQU1RLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFFdkI7O0FBakJBO0VBbUJNLG9CQUFnQjtFQUNoQixrQkFBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7QUFFeEI7O0FBeEJBO0VBd0JRLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFJM0I7O0FBbkNBOzs7O0VBc0NRLGdDQUFnQztFQUNoQyxvQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCxZQUFZO0VBQ1osY0FBUztFQUNULGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBdUI7RUFDdkIsa0JBQWM7QUFJdEI7O0FBbERBO0VBaURRLFlBQVk7RUFDWixjQUFTO0VBQ1QsZ0JBQWdCO0FBS3hCOztBQXhEQTtFQXNEUSxtQkFBYztBQU10Qjs7QUE1REE7RUEwRE0sY0FBYztBQU1wQjs7QUFoRUE7RUE2RE0sZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtBQU92Qjs7QUF4RUE7RUFvRU0sY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0FBUXJCOztBQTlFQTtFQXdFUSxtQkFBbUI7RUFDbkIscUJBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHFCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWE7RUFDYixtQkFBYztFQUNkLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGlCQUFpQjtBQVV6Qjs7QUE3RkE7RUFzRlEsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxxQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFhO0VBQ2IsbUJBQWM7RUFDZCxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsdUJBQWU7RUFDZixnQkFBZ0I7QUFXeEI7O0FBNUdBO0VBcUdNLGtCQUFrQjtBQVd4Qjs7QUFoSEE7RUF3R00sY0FBYztFQUNkLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFZdEI7O0FBNUhBO0VBbUhNLG9CQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFjO0FBYXBCOztBQW5JQTtFQXdIUSxpQkFBaUI7QUFlekI7O0FBdklBO0VBMkhRLGVBQWU7RUFDZixXQUFXO0FBZ0JuQjs7QUE1SUE7RUEySVEsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBRVgsZUFBZTtBQUl2Qjs7QUFuSkE7RUFtSk0sZUFBZTtFQUNmLFlBQXVCO0VBQ3ZCLHNCQUFzQjtBQUk1Qjs7QUF6SkE7RUF3Sk0sa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7QUFLeEI7O0FBL0pBO0VBNEpRLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQU94Qjs7QUF0S0E7RUFtS00sb0JBQWdCO0VBQ2hCLGtCQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtBQU94Qjs7QUE3S0E7RUF3S1EsY0FBYztFQUNkLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQVMzQjs7QUF4TEE7RUFxTFksV0FBVztFQUNYLFVBQVU7QUFPdEI7O0FBN0xBO0VBd0xnQixlQUFlO0FBUy9CIiwiZmlsZSI6InNlcnZpY2UtcHJvdmlkZXItc2lnbnVwMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAuZWRpdC1jIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBtYXJnaW46IDE1cHggMCAxNXB4O1xyXG4gICAgICAuaWNvbi1yaWcge1xyXG4gICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW0uaW5wdC1mIHtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuNjIpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBpb24taW5wdXQsXHJcbiAgICAgIGlvbi1zZWxlY3QsXHJcbiAgICAgIGlvbi1kYXRldGltZSxcclxuICAgICAgaW9uLXRleHRhcmVhIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FkYWRhZDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzM3B4O1xyXG4gICAgICAgIC0taGVpZ2h0OiAzM3B4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgfVxyXG4gICAgICBpb24tdGV4dGFyZWEge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAtLWhlaWdodDogYXV0bztcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXJnLW5zZyB7XHJcbiAgICAgIG1hcmdpbjogMCAtNXB4O1xyXG4gICAgfVxyXG4gICAgaDQuY250ZXItdHRsIHtcclxuICAgICAgbWFyZ2luLXRvcDogLTdweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuYnQtdHJzIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICBpb24tYnV0dG9uLmJ0bi1zYXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2JmYmZiZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMzVweDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiAzNXB4O1xyXG4gICAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWJ1dHRvbi5idG4tY2FuY2wge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgY29sb3I6ICM0ZDRkNGQ7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA0NXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDQ1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNmZmFjODM7XHJcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNmZmFjODM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJvdHRtLWNvbnRzIHtcclxuICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgfVxyXG4gICAgbGFiZWwudXBsb3MtaW1ncyB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBib3JkZXI6IDJweCBkYXNoZWQgIzYxNjE2MTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgY29sb3I6ICM5NDk0OTQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICBpb24taXRlbS5saXMtc25ydCB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICBpb24tY2hlY2tib3gge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgICAvLyAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWRhZGFkO1xyXG4gICAgLy8gICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC8vICAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgLy8gICBoZWlnaHQ6IDMzcHg7XHJcbiAgICAvLyAgIC0taGVpZ2h0OiAzM3B4O1xyXG4gICAgLy8gICBtYXgtaGVpZ2h0OiAzM3B4O1xyXG4gICAgLy8gICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAvLyAgIGNvbG9yOiBibGFjaztcclxuICAgIC8vIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICAuZmxhZyB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgXHJcbiAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubGFuZy1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgICBwLnNpZ24tdGQge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNGU0ZTRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbnB0LWYge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICBjb2xvcjogcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjYyKTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTZweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29uc3VsdF90eXBle1xyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIC5sYWJlbF9yYWRpbyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=service-provider-signup2-service-provider-signup2-module.js.map