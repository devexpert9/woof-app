(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-provider-signup-service-provider-signup-module"],{

/***/ "49+L":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/service-provider-signup/service-provider-signup.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>add-product</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n  <app-header [pageName]='\"Sign Up\"'> </app-header>\r\n  <div class=\"bottm-conts\">\r\n    <!-- <h4 class=\"ttl-tp ttl-orange\">{{'register.signUp' | translate}}</h4> -->\r\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"submit(registerForm)\">\r\n      <div class=\"form-botm\">\r\n        <ion-row class=\"marg-nsg\">\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\">\r\n                <!-- {{'register.forename' | translate}}* -->\r\n                {{'register.name' | translate}}*\r\n              </ion-label>\r\n              <ion-input\r\n                placeholder=\"\"\r\n                name=\"firstname\"\r\n                value=\"Shelton\"\r\n                formControlName=\"firstname\"\r\n              ></ion-input>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.firstname.touched && f.firstname.errors?.required\"\r\n              >\r\n                Name is required\r\n              </span>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.firstname.touched && f.firstname.errors?.pattern\"\r\n              >\r\n                Number not allowed\r\n              </span>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\"\r\n                >{{'register.surname' | translate}}*</ion-label\r\n              >\r\n              <ion-input\r\n                placeholder=\"\"\r\n                name=\"lastname\"\r\n                value=\"Bishop\"\r\n                formControlName=\"lastname\"\r\n              ></ion-input>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.lastname.touched && f.lastname.errors?.required\"\r\n              >\r\n                Surname is required\r\n              </span>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.lastname.touched && f.lastname.errors?.pattern\"\r\n              >\r\n                Number not allowed\r\n              </span>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-item lines=\"none\" class=\"inpt-f\">\r\n          <ion-label position=\"stacked\"\r\n            >{{'register.email' | translate}}*</ion-label\r\n          >\r\n          <ion-input\r\n            placeholder=\"\"\r\n            name=\"email\"\r\n            formControlName=\"email\"\r\n          ></ion-input>\r\n          <span\r\n            class=\"text-danger\"\r\n            *ngIf=\"f.email.touched && f.email.errors?.required\"\r\n          >\r\n            Email is required\r\n          </span>\r\n          <span\r\n            class=\"text-danger\"\r\n            *ngIf=\"f.email.touched && f.email.errors?.pattern\"\r\n          >\r\n            Email is not valid\r\n          </span>\r\n        </ion-item>\r\n\r\n        <div class=\"inpt-f\">\r\n          <ion-label position=\"stacked\"\r\n            >{{'register.country' | translate}}*</ion-label\r\n          >\r\n\r\n          <ng-select\r\n            [clearable]=\"false\"\r\n            formControlName=\"country\"\r\n            class=\"custom\"\r\n          >\r\n            <ng-option selected hidden disabled>Select Country</ng-option>\r\n            <ng-option *ngFor=\"let c of countryList\" [value]=\"c.name\">\r\n              <span>\r\n                <!-- <img\r\n                  class=\"flag\"\r\n                  [src]=\"c.flag\"\r\n                  height=\"20px\"\r\n                  width=\"20px\"\r\n                  [alt]=\"c.code\"\r\n                /> --> </span\r\n              ><span class=\"lang-label\"> {{c.name}} </span>\r\n            </ng-option>\r\n          </ng-select>\r\n          <span\r\n            class=\"text-danger\"\r\n            *ngIf=\"f.country.touched && f.country.errors?.required\"\r\n          >\r\n            Country is required\r\n          </span>\r\n        </div>\r\n\r\n        <ion-item lines=\"none\" class=\"inpt-f\">\r\n          <ion-label position=\"stacked\"\r\n            >{{'register.street' | translate}}*</ion-label\r\n          >\r\n          <ion-input\r\n            placeholder=\"\"\r\n            value=\"Telgu road near main market, 98500\"\r\n            name=\"address\"\r\n            formControlName=\"address\"\r\n          ></ion-input>\r\n          <span\r\n            class=\"text-danger\"\r\n            *ngIf=\"f.address.touched && f.address.errors?.required\"\r\n          >\r\n            Street is required\r\n          </span>\r\n        </ion-item>\r\n\r\n        <ion-row class=\"marg-nsg\">\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\"\r\n                >{{'register.city' | translate}}*</ion-label\r\n              >\r\n              <ion-input\r\n                placeholder=\"\"\r\n                name=\"city\"\r\n                formControlName=\"city\"\r\n              ></ion-input>\r\n              <!-- <ion-select name=\"city\" required formControlName=\"city\">\r\n                <ion-select-option value=\"california\"\r\n                  >California</ion-select-option\r\n                >\r\n                <ion-select-option value=\"alaska\">Alaska</ion-select-option>\r\n                <ion-select-option value=\"new york\">New York</ion-select-option>\r\n              </ion-select> -->\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.city.touched && f.city.errors?.required\"\r\n              >\r\n                City is required\r\n              </span>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.city.touched && f.city.errors?.pattern\"\r\n              >\r\n                Number not allowed\r\n              </span>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\"\r\n                >{{'register.zipcode' | translate}}*</ion-label\r\n              >\r\n              <ion-input\r\n                placeholder=\"\"\r\n                name=\"zipCode\"\r\n                formControlName=\"zipCode\"\r\n              ></ion-input>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.zipCode.touched && f.zipCode.errors?.required\"\r\n              >\r\n                Zipcode is required\r\n              </span>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.zipCode.touched && f.zipCode.errors?.pattern\"\r\n              >\r\n                Zipcode only contain digits\r\n              </span>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"marg-nsg\">\r\n          <ion-col size=\"12\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\"\r\n                >{{'register.services' | translate}}</ion-label\r\n              >\r\n              <ion-select\r\n                name=\"services_given\"\r\n                formControlName=\"services_given\"\r\n                multiple\r\n              >\r\n                <ion-select-option\r\n                  [value]=\"{id:s._id,name:s.name}\"\r\n                  *ngFor=\"let s of servicecat\"\r\n                  >{{s.name | titlecase}}</ion-select-option\r\n                >\r\n              </ion-select>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.services_given.touched && f.services_given.errors?.required\"\r\n              >\r\n                Service is required\r\n              </span>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"marg-nsg\">\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\"\r\n                >{{'register.password' | translate}}*</ion-label\r\n              >\r\n              <ion-input\r\n                type=\"password\"\r\n                [clearOnEdit]=\"false\"\r\n                placeholder=\"\"\r\n                name=\"password\"\r\n                formControlName=\"password\"\r\n              ></ion-input>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.password.touched && f.password.errors?.required\"\r\n              >\r\n                Password is required\r\n              </span>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.password.touched && f.password.errors?.minlength\"\r\n              >\r\n                Password should contain 6 characters\r\n              </span>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\"\r\n                >{{'register.confirmPassword' | translate}}*</ion-label\r\n              >\r\n              <ion-input\r\n                type=\"password\"\r\n                placeholder=\"\"\r\n                [clearOnEdit]=\"false\"\r\n                name=\"cPassword\"\r\n                formControlName=\"cPassword\"\r\n              ></ion-input>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.cPassword.touched && f.cPassword.errors?.required\"\r\n              >\r\n                Confirm password is required\r\n              </span>\r\n              <span class=\"text-danger\" *ngIf=\"f.cPassword?.errors?.mustMatch\">\r\n                Passwords not match\r\n              </span>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.cPassword.touched && f.cPassword.errors?.minlength\"\r\n              >\r\n                Password should contain 6 characters\r\n              </span>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <div class=\"bt-trs\">\r\n          <ion-button\r\n            shape=\"round\"\r\n            fill=\"outline\"\r\n            class=\"btn-cancl\"\r\n            type=\"submit\"\r\n            >Next</ion-button\r\n          >\r\n        </div>\r\n\r\n        <p class=\"sign-td\">\r\n          <a href=\"javascript:void(0)\" routerLink=\"/login\">\r\n            Already have an account? Sign In\r\n          </a>\r\n        </p>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <!-- <ng-select\r\n    [(ngModel)]=\"selectedCar\"\r\n    [clearable]=\"false\"\r\n    (change)=\"switchLanguage($event)\"\r\n    class=\"lang-select-dropdown\"\r\n  >\r\n    <ng-option selected hidden disabled>Select Language</ng-option>\r\n    <ng-option *ngFor=\"let l of languages\" [value]=\"l\">\r\n      <span>\r\n        <img\r\n          class=\"flag\"\r\n          [src]=\"l.icon\"\r\n          height=\"20px\"\r\n          width=\"20px\"\r\n          [alt]=\"l.code\"\r\n        /> </span\r\n      ><span class=\"lang-label\"> {{l.name}} </span>\r\n    </ng-option>\r\n  </ng-select> -->\r\n</ion-content>\r\n");

/***/ }),

/***/ "V8Pe":
/*!***************************************************************************!*\
  !*** ./src/app/service-provider-signup/service-provider-signup.module.ts ***!
  \***************************************************************************/
/*! exports provided: ServiceProviderSignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderSignupPageModule", function() { return ServiceProviderSignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_provider_signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-provider-signup-routing.module */ "zjRz");
/* harmony import */ var _service_provider_signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service-provider-signup.page */ "ZoSv");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");










let ServiceProviderSignupPageModule = class ServiceProviderSignupPageModule {
};
ServiceProviderSignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _service_provider_signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServiceProviderSignupPageRoutingModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
        ],
        declarations: [_service_provider_signup_page__WEBPACK_IMPORTED_MODULE_6__["ServiceProviderSignupPage"]]
    })
], ServiceProviderSignupPageModule);



/***/ }),

/***/ "ZoSv":
/*!*************************************************************************!*\
  !*** ./src/app/service-provider-signup/service-provider-signup.page.ts ***!
  \*************************************************************************/
/*! exports provided: ServiceProviderSignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderSignupPage", function() { return ServiceProviderSignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_service_provider_signup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./service-provider-signup.page.html */ "49+L");
/* harmony import */ var _service_provider_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-provider-signup.page.scss */ "bD+m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "8PDw");
/* harmony import */ var _core_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/language.service */ "0cly");
/* harmony import */ var _core_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/utility.service */ "ZtwD");
/* harmony import */ var _signup_countryCode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../signup/countryCode */ "H7/F");
/* harmony import */ var src_app_shared_directives_must_match_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/directives/must-match.validator */ "3mfk");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _core_service_provider_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/service-provider.service */ "7RZW");












let ServiceProviderSignupPage = class ServiceProviderSignupPage {
    constructor(authService, utility, languageService, fb, menuCtrl, providerService) {
        this.authService = authService;
        this.utility = utility;
        this.languageService = languageService;
        this.fb = fb;
        this.menuCtrl = menuCtrl;
        this.providerService = providerService;
        this.model = {};
        this.countryList = _signup_countryCode__WEBPACK_IMPORTED_MODULE_8__["list"];
        this.servicecat = [];
        this.buildForm();
    }
    getServiceCategoriesList() {
        this.providerService.serviceCatList().subscribe((res) => {
            console.log(res);
            this.servicecat = res;
            this.utility.dismiss();
        }, (err) => {
            console.log(err);
            this.utility.dismiss();
            this.utility.showAlert('Something went wrong!');
        });
    }
    ngOnInit() {
        console.log('ngOnit');
        this.menuCtrl.enable(false);
        this.languages = this.languageService.languages;
    }
    ionViewWillEnter() {
        this.menuCtrl.swipeGesture(false);
        this.getServiceCategoriesList();
    }
    buildForm() {
        this.registerForm = this.fb.group({
            firstname: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z]+$/)],
            ],
            lastname: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z]+$/)],
            ],
            // gender: [''/*, [Validators.required]*/],
            // fiscalNumber: [''/*, [Validators.required, Validators.pattern(/^\d+$/)]*/],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z]+$/)]],
            zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            services_given: ['' /*, [Validators.required]*/],
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
                ],
            ],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
            cPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
            numberOfPet: [''],
            petType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]),
        }, {
            validator: Object(src_app_shared_directives_must_match_validator__WEBPACK_IMPORTED_MODULE_9__["MustMatch"])('password', 'cPassword'),
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
        console.log('here');
        Object.keys(form.controls).forEach((key) => {
            form.get(key).markAsTouched();
        });
        if (form.status.toLowerCase() === 'valid') {
            const formObject = form.value;
            formObject.role = 'service provider';
            delete formObject.cPassword;
            this.utility.setLocal('signUpData', JSON.stringify(formObject));
            this.utility.navigate('/service-provider-signup2');
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
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
};
ServiceProviderSignupPage.ctorParameters = () => [
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"] },
    { type: _core_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["MenuController"] },
    { type: _core_service_provider_service__WEBPACK_IMPORTED_MODULE_11__["ServiceProviderService"] }
];
ServiceProviderSignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-service-provider-signup',
        template: _raw_loader_service_provider_signup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_service_provider_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ServiceProviderSignupPage);



/***/ }),

/***/ "bD+m":
/*!***************************************************************************!*\
  !*** ./src/app/service-provider-signup/service-provider-signup.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .edit-c {\n  display: block;\n  text-align: right;\n  margin: 15px 0 15px;\n}\n\nion-content .edit-c .icon-rig {\n  width: 35px;\n  height: 35px;\n  background: #bfbfbf;\n  display: inline-block;\n  text-align: center;\n  line-height: 37px;\n  color: #fff;\n  border-radius: 50%;\n  margin-right: 5px;\n  font-size: 16px;\n}\n\nion-content ion-item.inpt-f {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  padding: 0px;\n  margin-bottom: 5px;\n}\n\nion-content ion-item.inpt-f ion-label {\n  font-size: 12px;\n  color: rgba(100, 100, 100, 0.62);\n  font-weight: 700;\n  margin-top: 0px;\n  height: 16px;\n  max-height: 16px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\nion-content ion-item.inpt-f ion-input,\nion-content ion-item.inpt-f ion-select,\nion-content ion-item.inpt-f ion-datetime,\nion-content ion-item.inpt-f ion-textarea {\n  border-bottom: 1px solid #adadad;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  height: 33px;\n  --height: 33px;\n  max-height: 33px;\n  font-size: 18px;\n  color: black;\n  --padding-end: 0px;\n}\n\nion-content ion-item.inpt-f ion-textarea {\n  height: auto;\n  --height: auto;\n  max-height: 100%;\n}\n\nion-content ion-item.inpt-f ion-select {\n  --padding-end: 10px;\n}\n\nion-content .marg-nsg {\n  margin: 0 -5px;\n}\n\nion-content h4.cnter-ttl {\n  margin-top: -7px;\n  margin-bottom: 15px;\n  font-size: 17px;\n  color: #828282;\n  font-weight: bold;\n}\n\nion-content .bt-trs {\n  display: block;\n  text-align: center;\n  margin-top: 0px;\n}\n\nion-content .bt-trs ion-button.btn-save {\n  background: #bfbfbf;\n  --background: #bfbfbf;\n  border-radius: 50px;\n  color: #fff;\n  --padding-start: 35px;\n  box-shadow: none;\n  --box-shadow: none;\n  --padding-end: 35px;\n  height: 38px;\n  text-transform: capitalize;\n  font-size: 17px;\n  margin-right: 7px;\n}\n\nion-content .bt-trs ion-button.btn-cancl {\n  border-radius: 50px;\n  color: #4d4d4d;\n  --padding-start: 45px;\n  box-shadow: none;\n  --box-shadow: none;\n  --padding-end: 45px;\n  height: 41px;\n  text-transform: capitalize;\n  font-size: 17px;\n  border-color: #ffac83;\n  --border-color: #ffac83;\n  font-weight: 500;\n}\n\nion-content .bottm-conts {\n  padding: 20px 20px;\n}\n\nion-content label.uplos-imgs {\n  display: block;\n  border: 2px dashed #616161;\n  width: 100%;\n  text-align: center;\n  padding: 30px 0;\n  border-radius: 4px;\n  font-size: 13px;\n  color: #949494;\n  font-weight: 600;\n}\n\nion-content ion-item.lis-snrt {\n  --padding-start: 0px;\n  margin-top: -10px;\n  margin-bottom: 15px;\n  --padding-end: 0px;\n}\n\nion-content ion-item.lis-snrt ion-checkbox {\n  margin-right: 8px;\n}\n\nion-content ion-item.lis-snrt ion-label {\n  font-size: 18px;\n  color: #000;\n}\n\nion-content span .flag {\n  vertical-align: middle;\n  height: 20px;\n  width: 20px;\n  margin: 0px 5px;\n}\n\nion-content .lang-label {\n  font-size: 18px;\n  color: black;\n  vertical-align: middle;\n}\n\nion-content p.sign-td {\n  text-align: center;\n  margin-top: 5px;\n  margin-bottom: 0px;\n}\n\nion-content p.sign-td a {\n  text-decoration: none;\n  font-size: 18px;\n  color: #4e4e4e;\n  font-weight: 500;\n}\n\nion-content .inpt-f {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  padding: 0px;\n  margin-bottom: 5px;\n}\n\nion-content .inpt-f ion-label {\n  font-size: 9px;\n  color: rgba(100, 100, 100, 0.62);\n  font-weight: 700;\n  margin-top: 0px;\n  height: 16px;\n  max-height: 16px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlcnZpY2UtcHJvdmlkZXItc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVNLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQXpCOztBQUpBO0VBTVEsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtBQUV2Qjs7QUFqQkE7RUFtQk0sb0JBQWdCO0VBQ2hCLGtCQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtBQUV4Qjs7QUF4QkE7RUF3QlEsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUkzQjs7QUFuQ0E7Ozs7RUFzQ1EsZ0NBQWdDO0VBQ2hDLG9CQUFnQjtFQUNoQixrQkFBYztFQUNkLFlBQVk7RUFDWixjQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUF1QjtFQUN2QixrQkFBYztBQUl0Qjs7QUFsREE7RUFpRFEsWUFBWTtFQUNaLGNBQVM7RUFDVCxnQkFBZ0I7QUFLeEI7O0FBeERBO0VBc0RRLG1CQUFjO0FBTXRCOztBQTVEQTtFQTBETSxjQUFjO0FBTXBCOztBQWhFQTtFQTZETSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0FBT3ZCOztBQXhFQTtFQW9FTSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7QUFRckI7O0FBOUVBO0VBd0VRLG1CQUFtQjtFQUNuQixxQkFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gscUJBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBYTtFQUNiLG1CQUFjO0VBQ2QsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsaUJBQWlCO0FBVXpCOztBQTdGQTtFQXNGUSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHFCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWE7RUFDYixtQkFBYztFQUNkLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQix1QkFBZTtFQUNmLGdCQUFnQjtBQVd4Qjs7QUE1R0E7RUFxR00sa0JBQWtCO0FBV3hCOztBQWhIQTtFQXdHTSxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQVl0Qjs7QUE1SEE7RUFtSE0sb0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWM7QUFhcEI7O0FBbklBO0VBd0hRLGlCQUFpQjtBQWV6Qjs7QUF2SUE7RUEySFEsZUFBZTtFQUNmLFdBQVc7QUFnQm5COztBQTVJQTtFQTJJUSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFFWCxlQUFlO0FBSXZCOztBQW5KQTtFQW1KTSxlQUFlO0VBQ2YsWUFBdUI7RUFDdkIsc0JBQXNCO0FBSTVCOztBQXpKQTtFQXdKTSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtBQUt4Qjs7QUEvSkE7RUE0SlEscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBT3hCOztBQXRLQTtFQW1LTSxvQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0FBT3hCOztBQTdLQTtFQXdLUSxjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBUzNCIiwiZmlsZSI6InNlcnZpY2UtcHJvdmlkZXItc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC5lZGl0LWMge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIG1hcmdpbjogMTVweCAwIDE1cHg7XHJcbiAgICAgIC5pY29uLXJpZyB7XHJcbiAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24taXRlbS5pbnB0LWYge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC42Mik7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlvbi1pbnB1dCxcclxuICAgICAgaW9uLXNlbGVjdCxcclxuICAgICAgaW9uLWRhdGV0aW1lLFxyXG4gICAgICBpb24tdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWRhZGFkO1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAgIC0tcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDMzcHg7XHJcbiAgICAgICAgLS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzNweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi10ZXh0YXJlYSB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIC0taGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLXNlbGVjdCB7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hcmctbnNnIHtcclxuICAgICAgbWFyZ2luOiAwIC01cHg7XHJcbiAgICB9XHJcbiAgICBoNC5jbnRlci10dGwge1xyXG4gICAgICBtYXJnaW4tdG9wOiAtN3B4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5idC10cnMge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIGlvbi1idXR0b24uYnRuLXNhdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAzNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDM1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgICAgfVxyXG4gICAgICBpb24tYnV0dG9uLmJ0bi1jYW5jbCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBjb2xvcjogIzRkNGQ0ZDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDQ1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogNDVweDtcclxuICAgICAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmYWM4MztcclxuICAgICAgICAtLWJvcmRlci1jb2xvcjogI2ZmYWM4MztcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYm90dG0tY29udHMge1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICB9XHJcbiAgICBsYWJlbC51cGxvcy1pbWdzIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjNjE2MTYxO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBjb2xvcjogIzk0OTQ5NDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIGlvbi1pdGVtLmxpcy1zbnJ0IHtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgIGlvbi1jaGVja2JveCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICAgIC8vICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhZGFkYWQ7XHJcbiAgICAvLyAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLy8gICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAvLyAgIGhlaWdodDogMzNweDtcclxuICAgIC8vICAgLS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAvLyAgIG1heC1oZWlnaHQ6IDMzcHg7XHJcbiAgICAvLyAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIC8vICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLy8gfVxyXG4gICAgc3BhbiB7XHJcbiAgICAgIC5mbGFnIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICBcclxuICAgICAgICBtYXJnaW46IDBweCA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5sYW5nLWxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICAgIHAuc2lnbi10ZCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgY29sb3I6ICM0ZTRlNGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmlucHQtZiB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuNjIpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "zjRz":
/*!***********************************************************************************!*\
  !*** ./src/app/service-provider-signup/service-provider-signup-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ServiceProviderSignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderSignupPageRoutingModule", function() { return ServiceProviderSignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_provider_signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-provider-signup.page */ "ZoSv");




const routes = [
    {
        path: '',
        component: _service_provider_signup_page__WEBPACK_IMPORTED_MODULE_3__["ServiceProviderSignupPage"]
    }
];
let ServiceProviderSignupPageRoutingModule = class ServiceProviderSignupPageRoutingModule {
};
ServiceProviderSignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServiceProviderSignupPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=service-provider-signup-service-provider-signup-module.js.map