(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "5PmH":
/*!*********************************************************************!*\
  !*** ./src/app/signup/signup-pet-form/signup-pet-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: SignupPetFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPetFormComponent", function() { return SignupPetFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signup_pet_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signup-pet-form.component.html */ "axPx");
/* harmony import */ var _signup_pet_form_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-pet-form.component.scss */ "vFVX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/auth.service */ "8PDw");
/* harmony import */ var src_app_core_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/language.service */ "0cly");
/* harmony import */ var src_app_core_market_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/market.service */ "rAh5");
/* harmony import */ var src_app_core_utility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utility.service */ "ZtwD");
/* harmony import */ var _cat_breed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../cat-breed */ "z9Ho");
/* harmony import */ var _dog_breed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dog-breed */ "v3kf");












let SignupPetFormComponent = class SignupPetFormComponent {
    constructor(authService, utility, languageService, fb, menuCtrl, marketService) {
        this.authService = authService;
        this.utility = utility;
        this.languageService = languageService;
        this.fb = fb;
        this.menuCtrl = menuCtrl;
        this.marketService = marketService;
        this.options = { multi: false };
        this.dogBreed = _dog_breed__WEBPACK_IMPORTED_MODULE_11__["dog"];
        this.catBreed = _cat_breed__WEBPACK_IMPORTED_MODULE_10__["cat"];
        this.menus = [
            {
                name: 'Vaccine',
                iconClass: 'fa fa-code',
                active: true,
                submenu: [
                    { name: 'HTML', url: '#' },
                    { name: 'CSS', url: '#' },
                    { name: 'Javascript', url: '#' },
                ],
            },
            {
                name: 'Treatment',
                iconClass: 'fa fa-mobile',
                active: false,
                submenu: [
                    { name: 'Tablets', url: '#' },
                    { name: 'Mobiles', url: '#' },
                    { name: 'Desktop', url: '#' },
                ],
            },
        ];
    }
    ngOnInit() {
        this.buildForm();
        this.getPetTypes();
    }
    buildForm() {
        this.registerForm = this.fb.group({
            numberOfPet: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            petType: this.fb.array([]),
        });
    }
    get petType() {
        return this.registerForm.get('petType');
    }
    // pattern=""
    get f() {
        return this.registerForm.controls;
    }
    // get petBreed() {
    //   return this.registerForm.get('petBreed') as FormArray;
    // }
    // addBreed() {
    //   const pet = this.fb.group({
    //     petBreed: this.fb.array([]),
    //   });
    //   this.petBreed.push(new FormControl(''));
    // }
    removePetType(i) {
        this.petType.removeAt(i);
    }
    addPetType() {
        const pet = this.fb.group({
            petType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            petBreed: [''],
        });
        this.petType.push(pet);
    }
    getPetTypes() {
        this.marketService.getPetType().subscribe((res) => {
            this.petTypes = res;
        });
    }
    handleChange(e) {
        console.log(e);
        const val = e.detail.value;
        this.petType.clear();
        for (let i = 1; i <= val; i++) {
            this.addPetType();
        }
    }
    getPetValue(i) {
        return this.registerForm.value.petType[i].petType.toLowerCase() == 'dog';
    }
    handlePetTypeChange(e) {
        console.log(e);
        console.log(this.registerForm.value.petType);
        this.petType.controls[0].get('petBreed').setValue('');
    }
    submit(form) {
        console.log(form);
        if (form.status.toLowerCase() === 'valid') {
            const formObject = form.value;
            formObject.role = 'pet owner';
            delete formObject.cPassword;
            // formObject.petType = formObject.petType.map((v) => v.petType);
            console.log(formObject);
            this.utility.present();
            this.authService.register(formObject).subscribe((res) => {
                console.log(res);
                this.utility.setLocal('cred', window.btoa(JSON.stringify(formObject.email + ':' + formObject.password)));
                if (res['status'] == true) {
                    this.utility.setLocal('userObj', JSON.stringify(res.data));
                    let json = {
                        email: formObject.email,
                        password: formObject.password,
                        role: 'pet owner',
                    };
                    this.authService.login(json).subscribe((resp) => {
                        console.log(resp);
                        const token = resp['token'];
                        const userObj = resp['data'];
                        this.utility.setLocal('token', token);
                        this.utility.setLocal('userObj', JSON.stringify(userObj));
                        this.utility.setSideMenuUserDetail();
                        this.utility.dismiss();
                        this.utility.navigate('/subscription');
                    });
                    // this.utility.navigate('/login');
                }
                else {
                    // this.utility.showAlert(res['message']);
                    this.utility.dismiss();
                    this.utility.presentToastWithOptions(res['message']);
                }
            }, (err) => {
                this.utility.dismiss();
                // this.utility.hideLoading();
            });
        }
    }
};
SignupPetFormComponent.ctorParameters = () => [
    { type: src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_core_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"] },
    { type: src_app_core_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: src_app_core_market_service__WEBPACK_IMPORTED_MODULE_8__["MarketService"] }
];
SignupPetFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup-pet-form',
        template: _raw_loader_signup_pet_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_pet_form_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignupPetFormComponent);



/***/ }),

/***/ "6h0i":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>add-product</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n  <!-- <div class=\"top-head logo-orange\">\r\n    <img src=\"assets/images/logo6.png\" class=\"img-logo\" />\r\n  </div> -->\r\n  <app-header [pageName]='\"Sign Up\"'></app-header>\r\n  <div class=\"bottm-conts\">\r\n    <h4 class=\"ttl-tp ttl-orange\">Signup</h4>\r\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"submit(registerForm)\">\r\n      <div class=\"form-botm\">\r\n        <ion-row class=\"marg-nsg\">\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\">forename*</ion-label>\r\n              <ion-input\r\n                placeholder=\"\"\r\n                name=\"firstname\"\r\n                value=\"Shelton\"\r\n                formControlName=\"firstname\"\r\n              ></ion-input>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.firstname.touched && f.firstname.errors?.required\"\r\n              >\r\n                Forename is required\r\n              </span>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.firstname.touched && f.firstname.errors?.pattern\"\r\n              >\r\n                Number not allowed\r\n              </span>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\">surname*</ion-label>\r\n              <ion-input\r\n                placeholder=\"\"\r\n                name=\"lastname\"\r\n                value=\"Bishop\"\r\n                formControlName=\"lastname\"\r\n              ></ion-input>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.lastname.touched && f.lastname.errors?.required\"\r\n              >\r\n                Surname is required\r\n              </span>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.lastname.touched && f.lastname.errors?.pattern\"\r\n              >\r\n                Number not allowed\r\n              </span>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"marg-nsg\">\r\n          <ion-col size=\"12\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\">gender</ion-label>\r\n              <ion-select name=\"gender\" formControlName=\"gender\">\r\n                <ion-select-option value=\"male\">Male</ion-select-option>\r\n                <ion-select-option value=\"female\">Female</ion-select-option>\r\n                <ion-select-option value=\"other\">Other</ion-select-option>\r\n              </ion-select>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.gender.touched && f.gender.errors?.required\"\r\n              >\r\n                Gender is required\r\n              </span>\r\n            </ion-item>\r\n          </ion-col>\r\n          <!-- <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\"\r\n                >{{'register.nationality' | translate}}</ion-label\r\n              >\r\n              <ion-input\r\n                placeholder=\"\"\r\n                name=\"nationality\"\r\n                value=\"N/A\"\r\n                formControlName=\"nationality\"\r\n              ></ion-input>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.nationality.touched && f.nationality.errors?.required\"\r\n              >\r\n                Nationality is required\r\n              </span>\r\n            </ion-item> -->\r\n          <!-- </ion-col> -->\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"inpt-f\">\r\n          <ion-label position=\"stacked\">fiscalNumber</ion-label>\r\n          <ion-input\r\n            placeholder=\"\"\r\n            name=\"fiscalNumber\"\r\n            formControlName=\"fiscalNumber\"\r\n            value=\"+1 987 6543 210\"\r\n            type=\"text\"\r\n          ></ion-input>\r\n          <span\r\n            class=\"text-danger\"\r\n            *ngIf=\"f.fiscalNumber.touched && f.fiscalNumber.errors?.required\"\r\n          >\r\n            Fiscal Number is required\r\n          </span>\r\n          <span\r\n            class=\"text-danger\"\r\n            *ngIf=\"f.fiscalNumber.touched && f.fiscalNumber.errors?.pattern\"\r\n          >\r\n            Fiscal Number only contain digits\r\n          </span>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"inpt-f\">\r\n          <ion-label position=\"stacked\">street</ion-label>\r\n          <ion-input\r\n            placeholder=\"\"\r\n            value=\"Telgu road near main market, 98500\"\r\n            name=\"address\"\r\n            formControlName=\"address\"\r\n          ></ion-input>\r\n          <span\r\n            class=\"text-danger\"\r\n            *ngIf=\"f.address.touched && f.address.errors?.required\"\r\n          >\r\n            Street is required\r\n          </span>\r\n        </ion-item>\r\n\r\n        <div class=\"inpt-f\">\r\n          <ion-label position=\"stacked\">country*</ion-label>\r\n\r\n          <ng-select\r\n            [clearable]=\"false\"\r\n            formControlName=\"country\"\r\n            class=\"custom\"\r\n          >\r\n            <ng-option selected hidden disabled>Select Country</ng-option>\r\n            <ng-option *ngFor=\"let c of countryList\" [value]=\"c.name\">\r\n              <span>\r\n                <!-- <img\r\n                  class=\"flag\"\r\n                  [src]=\"c.flag\"\r\n                  height=\"20px\"\r\n                  width=\"20px\"\r\n                  [alt]=\"c.code\"\r\n                /> --> </span\r\n              ><span class=\"lang-label\"> {{c.name}} </span>\r\n            </ng-option>\r\n          </ng-select>\r\n          <span\r\n            class=\"text-danger\"\r\n            *ngIf=\"f.country.touched && f.country.errors?.required\"\r\n          >\r\n            Country is required\r\n          </span>\r\n        </div>\r\n\r\n        <ion-row class=\"marg-nsg\">\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\">city</ion-label>\r\n              <ion-input\r\n                placeholder=\"\"\r\n                name=\"city\"\r\n                formControlName=\"city\"\r\n              ></ion-input>\r\n              <!-- <ion-select name=\"city\" required formControlName=\"city\">\r\n                <ion-select-option value=\"california\"\r\n                  >California</ion-select-option\r\n                >\r\n                <ion-select-option value=\"alaska\">Alaska</ion-select-option>\r\n                <ion-select-option value=\"new york\">New York</ion-select-option>\r\n              </ion-select> -->\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.city.touched && f.city.errors?.required\"\r\n              >\r\n                City is required\r\n              </span>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.city.touched && f.city.errors?.pattern\"\r\n              >\r\n                Number not allowed\r\n              </span>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\">zipcode</ion-label>\r\n              <ion-input\r\n                placeholder=\"\"\r\n                name=\"zipCode\"\r\n                formControlName=\"zipCode\"\r\n                value=\"05236\"\r\n              ></ion-input>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.zipCode.touched && f.zipCode.errors?.required\"\r\n              >\r\n                Zipcode is required\r\n              </span>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.zipCode.touched && f.zipCode.errors?.pattern\"\r\n              >\r\n                Zipcode only contain digits\r\n              </span>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <!-- <ion-row class=\"marg-nsg\">\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\">Vaccine</ion-label>\r\n              <ion-select\r\n                value=\"dog\"\r\n                name=\"vaccine\"\r\n                required\r\n                #vaccine=\"ngModel\"\r\n                [(ngModel)]=\"model.vaccine\"\r\n              >\r\n                <ion-select-option value=\"Hepatitis\"\r\n                  >Hepatitis</ion-select-option\r\n                >\r\n                <ion-select-option value=\"Distemper\"\r\n                  >Distemper</ion-select-option\r\n                >\r\n                <ion-select-option value=\"Rabies\">Rabies</ion-select-option>\r\n                <ion-select-option value=\"Parainfluenza\"\r\n                  >Parainfluenza</ion-select-option\r\n                >\r\n              </ion-select>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"(vaccine.touched || registerForm.submitted) && vaccine.errors?.required\"\r\n              >\r\n                vaccine is required\r\n              </span>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\">Treatment</ion-label>\r\n              <ion-select\r\n                value=\"dog\"\r\n                name=\"treatment\"\r\n                required\r\n                #treatment=\"ngModel\"\r\n                [(ngModel)]=\"model.treatment\"\r\n              >\r\n                <ion-select-option value=\"abc\">abc</ion-select-option>\r\n                <ion-select-option value=\"abc\">abc</ion-select-option>\r\n                <ion-select-option value=\"abc\">abc</ion-select-option>\r\n                <ion-select-option value=\"abc\">abc</ion-select-option>\r\n              </ion-select>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"(treatment.touched || registerForm.submitted) && treatment.errors?.required\"\r\n              >\r\n                Treatment is required\r\n              </span>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row> -->\r\n        <!-- <ion-row class=\"marg-nsg\">\r\n          <ion-col size=\"12\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\">Food</ion-label>\r\n              <ion-input\r\n                type=\"text\"\r\n                placeholder=\"\"\r\n                name=\"food\"\r\n                [(ngModel)]=\"model.food\"\r\n                #food=\"ngModel\"\r\n                required\r\n              ></ion-input>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"(food.touched || registerForm.submitted) && food.errors?.required\"\r\n              >\r\n                Food is required\r\n              </span>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row> -->\r\n\r\n        <ion-item lines=\"none\" class=\"inpt-f\">\r\n          <ion-label position=\"stacked\">email*</ion-label>\r\n          <ion-input\r\n            placeholder=\"\"\r\n            name=\"email\"\r\n            formControlName=\"email\"\r\n          ></ion-input>\r\n          <span\r\n            class=\"text-danger\"\r\n            *ngIf=\"f.email.touched && f.email.errors?.required\"\r\n          >\r\n            Email is required\r\n          </span>\r\n          <span\r\n            class=\"text-danger\"\r\n            *ngIf=\"f.email.touched && f.email.errors?.pattern\"\r\n          >\r\n            Email is not valid\r\n          </span>\r\n        </ion-item>\r\n        <ion-row class=\"marg-nsg\">\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\">password*</ion-label>\r\n              <ion-input\r\n                type=\"password\"\r\n                [clearOnEdit]=\"false\"\r\n                placeholder=\"\"\r\n                name=\"password\"\r\n                formControlName=\"password\"\r\n              ></ion-input>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.password.touched && f.password.errors?.required\"\r\n              >\r\n                Password is required\r\n              </span>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.password.touched && f.password.errors?.minlength\"\r\n              >\r\n                Password should contain 6 characters\r\n              </span>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\">confirmPassword*</ion-label>\r\n              <ion-input\r\n                type=\"password\"\r\n                placeholder=\"\"\r\n                [clearOnEdit]=\"false\"\r\n                name=\"cPassword\"\r\n                formControlName=\"cPassword\"\r\n              ></ion-input>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.cPassword.touched && f.cPassword.errors?.required\"\r\n              >\r\n                Confirm password is required\r\n              </span>\r\n              <span class=\"text-danger\" *ngIf=\"f.cPassword?.errors?.mustMatch\">\r\n                Passwords not match\r\n              </span>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.cPassword.touched && f.cPassword.errors?.minlength\"\r\n              >\r\n                Password should contain 6 characters\r\n              </span>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <div class=\"bt-trs\">\r\n          <ion-button\r\n            shape=\"round\"\r\n            fill=\"outline\"\r\n            class=\"btn-cancl\"\r\n            type=\"button\"\r\n            (click)=\"next(registerForm)\"\r\n            [disabled]=\"registerForm.invalid\"\r\n            >Next</ion-button\r\n          >\r\n        </div>\r\n        <!-- [disabled]=\"registerForm.invalid\" -->\r\n        <p class=\"sign-td\">\r\n          <a href=\"javascript:void(0)\" routerLink=\"/login\">\r\n            Already have an account? Sign In\r\n          </a>\r\n        </p>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <!-- <ng-select\r\n    [(ngModel)]=\"selectedCar\"\r\n    [clearable]=\"false\"\r\n    (change)=\"switchLanguage($event)\"\r\n    class=\"lang-select-dropdown\"\r\n  >\r\n    <ng-option selected hidden disabled>Select Language</ng-option>\r\n    <ng-option *ngFor=\"let l of languages\" [value]=\"l\">\r\n      <span>\r\n        <img\r\n          class=\"flag\"\r\n          [src]=\"l.icon\"\r\n          height=\"20px\"\r\n          width=\"20px\"\r\n          [alt]=\"l.code\"\r\n        /> </span\r\n      ><span class=\"lang-label\"> {{l.name}} </span>\r\n    </ng-option>\r\n  </ng-select> -->\r\n</ion-content>\r\n");

/***/ }),

/***/ "RPFs":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signup_pet_form_signup_pet_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup-pet-form/signup-pet-form.component */ "5PmH");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup.page */ "yL7A");





const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_4__["SignupPage"],
    },
    {
        path: 'pet-form',
        component: _signup_pet_form_signup_pet_form_component__WEBPACK_IMPORTED_MODULE_3__["SignupPetFormComponent"],
    },
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "T9iC":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup-routing.module */ "RPFs");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup.page */ "yL7A");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _signup_pet_form_signup_pet_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup-pet-form/signup-pet-form.component */ "5PmH");










let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_4__["SignupPageRoutingModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_5__["SignupPage"], _signup_pet_form_signup_pet_form_component__WEBPACK_IMPORTED_MODULE_9__["SignupPetFormComponent"]],
    })
], SignupPageModule);



/***/ }),

/***/ "axPx":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup-pet-form/signup-pet-form.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>add-product</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n  <app-header [pageName]=\"'Sign Up'\"></app-header>\r\n  <div class=\"bottm-conts\">\r\n    <!-- <h4 class=\"ttl-tp ttl-orange\">Sign Up</h4> -->\r\n\r\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"submit(registerForm)\">\r\n      <ion-row class=\"marg-nsg\">\r\n        <ion-col size=\"12\">\r\n          <ion-item lines=\"none\" class=\"inpt-f\">\r\n            <ion-label position=\"stacked\">Number of Pets *</ion-label>\r\n            <ion-select\r\n              value=\"dog\"\r\n              name=\"numberOfPet\"\r\n              formControlName=\"numberOfPet\"\r\n              (ionChange)=\"handleChange($event)\"\r\n            >\r\n              <ion-select-option [value]=\"n\" *ngFor=\"let n of [1, 2, 3, 4, 5]\">\r\n                {{ n }}</ion-select-option\r\n              >\r\n            </ion-select>\r\n            <span\r\n              class=\"text-danger\"\r\n              *ngIf=\"f.numberOfPet.touched && f.numberOfPet.errors?.required\"\r\n            >\r\n              Number of Pet is required\r\n            </span>\r\n            <!-- <ion-input\r\n                type=\"number\"\r\n                placeholder=\"\"\r\n                name=\"numberOfPet\"\r\n                pattern=\"[0-9]+\"\r\n                formControlName=\"numberOfPet\"\r\n              ></ion-input> -->\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col formArrayName=\"petType\">\r\n          <ion-col\r\n            size=\"12\"\r\n            *ngFor=\"let p of petType.controls; let i = index\"\r\n            [formGroupName]=\"i\"\r\n          >\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\">Pet Type</ion-label>\r\n              <ion-select\r\n                value=\"dog\"\r\n                name=\"petType\"\r\n                formControlName=\"petType\"\r\n                (ionChange)=\"handlePetTypeChange($event)\"\r\n              >\r\n                <ion-select-option [value]=\"p.name\" *ngFor=\"let p of petTypes\">\r\n                  {{ p.name | titlecase }}</ion-select-option\r\n                >\r\n              </ion-select>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"f.petType.touched && f.petType.errors?.required\"\r\n              >\r\n                Pet Type is required\r\n              </span>\r\n            </ion-item>\r\n\r\n            <ion-item\r\n              lines=\"none\"\r\n              class=\"inpt-f\"\r\n              *ngIf=\"registerForm.value.petType[i].petType != ''\"\r\n            >\r\n              <ion-label position=\"stacked\">Pet Breed</ion-label>\r\n              <ion-select\r\n                name=\"petBreed\"\r\n                formControlName=\"petBreed\"\r\n                (change)=\"handlePetTypeChange($event)\"\r\n              >\r\n                <ion-select-option\r\n                  [value]=\"b\"\r\n                  *ngFor=\"let b of getPetValue(i) ? dogBreed : catBreed\"\r\n                >\r\n                  {{ b }}</ion-select-option\r\n                >\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </div>\r\n  <app-accordion [options]=\"options\" [menus]=\"menus\"> </app-accordion>\r\n</ion-content>\r\n");

/***/ }),

/***/ "fJgH":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .edit-c {\n  display: block;\n  text-align: right;\n  margin: 15px 0 15px;\n}\n\nion-content .edit-c .icon-rig {\n  width: 35px;\n  height: 35px;\n  background: #bfbfbf;\n  display: inline-block;\n  text-align: center;\n  line-height: 37px;\n  color: #fff;\n  border-radius: 50%;\n  margin-right: 5px;\n  font-size: 16px;\n}\n\nion-content ion-item.inpt-f,\nion-content .inpt-f {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  padding: 0px;\n  margin-bottom: 5px;\n}\n\nion-content ion-item.inpt-f ion-label,\nion-content .inpt-f ion-label {\n  font-size: 12px;\n  color: rgba(100, 100, 100, 0.62);\n  font-weight: 700;\n  margin-top: 0px;\n  height: 16px;\n  max-height: 16px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\nion-content ion-item.inpt-f ion-input,\nion-content ion-item.inpt-f ion-select,\nion-content ion-item.inpt-f ion-datetime,\nion-content ion-item.inpt-f ion-textarea,\nion-content .inpt-f ion-input,\nion-content .inpt-f ion-select,\nion-content .inpt-f ion-datetime,\nion-content .inpt-f ion-textarea {\n  border-bottom: 1px solid #adadad;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  height: 33px;\n  --height: 33px;\n  max-height: 33px;\n  font-size: 18px;\n  color: black;\n  --padding-end: 0px;\n}\n\nion-content ion-item.inpt-f ion-textarea,\nion-content .inpt-f ion-textarea {\n  height: auto;\n  --height: auto;\n  max-height: 100%;\n}\n\nion-content ion-item.inpt-f ion-select,\nion-content .inpt-f ion-select {\n  --padding-end: 10px;\n  font-size: 15px;\n}\n\nion-content .marg-nsg {\n  margin: 0 -5px;\n}\n\nion-content h4.cnter-ttl {\n  margin-top: -7px;\n  margin-bottom: 15px;\n  font-size: 17px;\n  color: #828282;\n  font-weight: bold;\n}\n\nion-content .bt-trs {\n  display: block;\n  text-align: center;\n  margin-top: 0px;\n}\n\nion-content .bt-trs ion-button.btn-save {\n  background: #bfbfbf;\n  --background: #bfbfbf;\n  border-radius: 50px;\n  color: #fff;\n  --padding-start: 35px;\n  box-shadow: none;\n  --box-shadow: none;\n  --padding-end: 35px;\n  height: 38px;\n  text-transform: capitalize;\n  font-size: 17px;\n  margin-right: 7px;\n}\n\nion-content .bt-trs ion-button.btn-cancl {\n  border-radius: 50px;\n  color: #4d4d4d;\n  --padding-start: 45px;\n  box-shadow: none;\n  --box-shadow: none;\n  --padding-end: 45px;\n  height: 41px;\n  text-transform: capitalize;\n  font-size: 17px;\n  border-color: #ffac83;\n  --border-color: #ffac83;\n  font-weight: 500;\n}\n\nion-content .bottm-conts {\n  padding: 20px 20px;\n  margin-top: 25px;\n}\n\nion-content label.uplos-imgs {\n  display: block;\n  border: 2px dashed #616161;\n  width: 100%;\n  text-align: center;\n  padding: 30px 0;\n  border-radius: 4px;\n  font-size: 13px;\n  color: #949494;\n  font-weight: 600;\n}\n\nion-content ion-item.lis-snrt {\n  --padding-start: 0px;\n  margin-top: -10px;\n  margin-bottom: 15px;\n  --padding-end: 0px;\n}\n\nion-content ion-item.lis-snrt ion-checkbox {\n  margin-right: 8px;\n}\n\nion-content ion-item.lis-snrt ion-label {\n  font-size: 18px;\n  color: #000;\n}\n\nion-content span .flag {\n  vertical-align: middle;\n  height: 20px;\n  width: 20px;\n  margin: 0px 5px;\n}\n\nion-content .lang-label {\n  font-size: 18px;\n  color: black;\n  vertical-align: middle;\n}\n\nion-content p.sign-td {\n  text-align: center;\n  margin-top: 5px;\n  margin-bottom: 0px;\n}\n\nion-content p.sign-td a {\n  text-decoration: none;\n  font-size: 18px;\n  color: #4e4e4e;\n  font-weight: 500;\n}\n\nion-content .inpt-f {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  padding: 0px;\n  margin-bottom: 5px;\n}\n\nion-content .inpt-f ion-label {\n  font-size: 12px;\n  color: rgba(100, 100, 100, 0.62);\n  font-weight: 700;\n  margin-top: 0px;\n  height: 16px;\n  max-height: 16px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUF2Qjs7QUFKQTtFQU1NLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFFckI7O0FBakJBOztFQW9CSSxvQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0FBRXRCOztBQXpCQTs7RUF5Qk0sZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUt6Qjs7QUFyQ0E7Ozs7Ozs7O0VBdUNNLGdDQUFnQztFQUNoQyxvQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCxZQUFZO0VBQ1osY0FBUztFQUNULGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBdUI7RUFDdkIsa0JBQWM7QUFTcEI7O0FBeERBOztFQWtETSxZQUFZO0VBQ1osY0FBUztFQUNULGdCQUFnQjtBQVd0Qjs7QUEvREE7O0VBdURNLG1CQUFjO0VBQ2QsZUFBZTtBQWFyQjs7QUFyRUE7RUE0REksY0FBYztBQWFsQjs7QUF6RUE7RUErREksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtBQWNyQjs7QUFqRkE7RUFzRUksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0FBZW5COztBQXZGQTtFQTBFTSxtQkFBbUI7RUFDbkIscUJBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHFCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWE7RUFDYixtQkFBYztFQUNkLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGlCQUFpQjtBQWlCdkI7O0FBdEdBO0VBd0ZNLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QscUJBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBYTtFQUNiLG1CQUFjO0VBQ2QsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHVCQUFlO0VBQ2YsZ0JBQWdCO0FBa0J0Qjs7QUFySEE7RUF1R0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQWtCcEI7O0FBMUhBO0VBMkdJLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBbUJwQjs7QUF0SUE7RUFzSEksb0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWM7QUFvQmxCOztBQTdJQTtFQTJITSxpQkFBaUI7QUFzQnZCOztBQWpKQTtFQThITSxlQUFlO0VBQ2YsV0FBVztBQXVCakI7O0FBdEpBO0VBOElNLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUVYLGVBQWU7QUFXckI7O0FBN0pBO0VBc0pJLGVBQWU7RUFDZixZQUF1QjtFQUN2QixzQkFBc0I7QUFXMUI7O0FBbktBO0VBMkpJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0FBWXRCOztBQXpLQTtFQStKTSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFjdEI7O0FBaExBO0VBc0tJLG9CQUFnQjtFQUNoQixrQkFBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7QUFjdEI7O0FBdkxBO0VBMktNLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFnQnpCIiwiZmlsZSI6InNpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLmVkaXQtYyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiAxNXB4IDAgMTVweDtcclxuICAgIC5pY29uLXJpZyB7XHJcbiAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWl0ZW0uaW5wdC1mLFxyXG4gIC5pbnB0LWYge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuNjIpO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgbWF4LWhlaWdodDogMTZweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taW5wdXQsXHJcbiAgICBpb24tc2VsZWN0LFxyXG4gICAgaW9uLWRhdGV0aW1lLFxyXG4gICAgaW9uLXRleHRhcmVhIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhZGFkYWQ7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgIGhlaWdodDogMzNweDtcclxuICAgICAgLS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIH1cclxuICAgIGlvbi10ZXh0YXJlYSB7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgLS1oZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBpb24tc2VsZWN0IHtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAubWFyZy1uc2cge1xyXG4gICAgbWFyZ2luOiAwIC01cHg7XHJcbiAgfVxyXG4gIGg0LmNudGVyLXR0bCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5idC10cnMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBpb24tYnV0dG9uLmJ0bi1zYXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogI2JmYmZiZjtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAzNXB4O1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDM1cHg7XHJcbiAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9uLmJ0bi1jYW5jbCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGNvbG9yOiAjNGQ0ZDRkO1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDQ1cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogNDVweDtcclxuICAgICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICBib3JkZXItY29sb3I6ICNmZmFjODM7XHJcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiAjZmZhYzgzO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYm90dG0tY29udHMge1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICB9XHJcbiAgbGFiZWwudXBsb3MtaW1ncyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjNjE2MTYxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzk0OTQ5NDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIGlvbi1pdGVtLmxpcy1zbnJ0IHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgaW9uLWNoZWNrYm94IHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgLy8gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FkYWRhZDtcclxuICAvLyAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gIC8vICAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG4gIC8vICAgaGVpZ2h0OiAzM3B4O1xyXG4gIC8vICAgLS1oZWlnaHQ6IDMzcHg7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAzM3B4O1xyXG4gIC8vICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIC8vICAgY29sb3I6IGJsYWNrO1xyXG4gIC8vIH1cclxuICBzcGFuIHtcclxuICAgIC5mbGFnIHtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuXHJcbiAgICAgIG1hcmdpbjogMHB4IDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmxhbmctbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICBwLnNpZ24tdGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgYSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBjb2xvcjogIzRlNGU0ZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICB9XHJcbiAgLmlucHQtZiB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC42Mik7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICBtYXgtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "vFVX":
/*!***********************************************************************!*\
  !*** ./src/app/signup/signup-pet-form/signup-pet-form.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .edit-c {\n  display: block;\n  text-align: right;\n  margin: 15px 0 15px;\n}\n\nion-content .edit-c .icon-rig {\n  width: 35px;\n  height: 35px;\n  background: #bfbfbf;\n  display: inline-block;\n  text-align: center;\n  line-height: 37px;\n  color: #fff;\n  border-radius: 50%;\n  margin-right: 5px;\n  font-size: 16px;\n}\n\nion-content ion-item.inpt-f {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  padding: 0px;\n  margin-bottom: 5px;\n}\n\nion-content ion-item.inpt-f ion-label {\n  font-size: 12px;\n  color: rgba(100, 100, 100, 0.62);\n  font-weight: 700;\n  margin-top: 0px;\n  height: 16px;\n  max-height: 16px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\nion-content ion-item.inpt-f ion-input,\nion-content ion-item.inpt-f ion-select,\nion-content ion-item.inpt-f ion-datetime,\nion-content ion-item.inpt-f ion-textarea {\n  border-bottom: 1px solid #adadad;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  height: 33px;\n  --height: 33px;\n  max-height: 33px;\n  font-size: 18px;\n  color: black;\n  --padding-end: 0px;\n}\n\nion-content ion-item.inpt-f ion-textarea {\n  height: auto;\n  --height: auto;\n  max-height: 100%;\n}\n\nion-content ion-item.inpt-f ion-select {\n  --padding-end: 10px;\n  font-size: 15px !important;\n}\n\nion-content .marg-nsg {\n  margin: 0 -5px;\n}\n\nion-content h4.cnter-ttl {\n  margin-top: -7px;\n  margin-bottom: 15px;\n  font-size: 17px;\n  color: #828282;\n  font-weight: bold;\n}\n\nion-content .bt-trs {\n  display: block;\n  text-align: center;\n  margin-top: 10px;\n}\n\nion-content .bt-trs ion-button.btn-save {\n  background: #bfbfbf;\n  --background: #bfbfbf;\n  border-radius: 50px;\n  color: #fff;\n  --padding-start: 35px;\n  box-shadow: none;\n  --box-shadow: none;\n  --padding-end: 35px;\n  height: 38px;\n  text-transform: capitalize;\n  font-size: 17px;\n  margin-right: 7px;\n}\n\nion-content .bt-trs ion-button.btn-cancl {\n  border-radius: 50px;\n  color: #4d4d4d;\n  --padding-start: 45px;\n  box-shadow: none;\n  --box-shadow: none;\n  --padding-end: 45px;\n  height: 41px;\n  text-transform: capitalize;\n  font-size: 17px;\n  border-color: #ffac83;\n  --border-color: #ffac83;\n  font-weight: 500;\n}\n\nion-content .bottm-conts {\n  padding: 20px 20px;\n}\n\nion-content label.uplos-imgs {\n  display: block;\n  border: 2px dashed #616161;\n  width: 100%;\n  text-align: center;\n  padding: 30px 0;\n  border-radius: 4px;\n  font-size: 13px;\n  color: #949494;\n  font-weight: 600;\n}\n\nion-content ion-item.lis-snrt {\n  --padding-start: 0px;\n  margin-top: -10px;\n  margin-bottom: 15px;\n  --padding-end: 0px;\n}\n\nion-content ion-item.lis-snrt ion-checkbox {\n  margin-right: 8px;\n}\n\nion-content ion-item.lis-snrt ion-label {\n  font-size: 18px;\n  color: #000;\n}\n\nion-content span .flag {\n  vertical-align: middle;\n  height: 20px;\n  width: 20px;\n  margin: 0px 5px;\n}\n\nion-content .lang-label {\n  font-size: 18px;\n  color: black;\n  vertical-align: middle;\n}\n\nion-content p.sign-td {\n  text-align: center;\n  margin-top: 5px;\n  margin-bottom: 0px;\n}\n\nion-content p.sign-td a {\n  text-decoration: none;\n  font-size: 18px;\n  color: #4e4e4e;\n  font-weight: 500;\n}\n\nion-content .inpt-f {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  padding: 0px;\n  margin-bottom: 5px;\n}\n\nion-content .inpt-f ion-label {\n  font-size: 9px;\n  color: rgba(100, 100, 100, 0.62);\n  font-weight: 700;\n  margin-top: 0px;\n  height: 16px;\n  max-height: 16px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWdudXAtcGV0LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUF2Qjs7QUFKQTtFQU1NLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFFckI7O0FBakJBO0VBbUJJLG9CQUFnQjtFQUNoQixrQkFBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7QUFFdEI7O0FBeEJBO0VBd0JNLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFJekI7O0FBbkNBOzs7O0VBc0NNLGdDQUFnQztFQUNoQyxvQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCxZQUFZO0VBQ1osY0FBUztFQUNULGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBdUI7RUFDdkIsa0JBQWM7QUFJcEI7O0FBbERBO0VBaURNLFlBQVk7RUFDWixjQUFTO0VBQ1QsZ0JBQWdCO0FBS3RCOztBQXhEQTtFQXNETSxtQkFBYztFQUNkLDBCQUEwQjtBQU1oQzs7QUE3REE7RUEyREksY0FBYztBQU1sQjs7QUFqRUE7RUE4REksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtBQU9yQjs7QUF6RUE7RUFxRUksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFRcEI7O0FBL0VBO0VBeUVNLG1CQUFtQjtFQUNuQixxQkFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gscUJBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBYTtFQUNiLG1CQUFjO0VBQ2QsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsaUJBQWlCO0FBVXZCOztBQTlGQTtFQXVGTSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHFCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWE7RUFDYixtQkFBYztFQUNkLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQix1QkFBZTtFQUNmLGdCQUFnQjtBQVd0Qjs7QUE3R0E7RUFzR0ksa0JBQWtCO0FBV3RCOztBQWpIQTtFQXlHSSxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQVlwQjs7QUE3SEE7RUFvSEksb0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWM7QUFhbEI7O0FBcElBO0VBeUhNLGlCQUFpQjtBQWV2Qjs7QUF4SUE7RUE0SE0sZUFBZTtFQUNmLFdBQVc7QUFnQmpCOztBQTdJQTtFQTRJTSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFFWCxlQUFlO0FBSXJCOztBQXBKQTtFQW9KSSxlQUFlO0VBQ2YsWUFBdUI7RUFDdkIsc0JBQXNCO0FBSTFCOztBQTFKQTtFQXlKSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtBQUt0Qjs7QUFoS0E7RUE2Sk0scUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBT3RCOztBQXZLQTtFQW9LSSxvQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0FBT3RCOztBQTlLQTtFQXlLTSxjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBU3pCIiwiZmlsZSI6InNpZ251cC1wZXQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAuZWRpdC1jIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDE1cHggMCAxNXB4O1xyXG4gICAgLmljb24tcmlnIHtcclxuICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgYmFja2dyb3VuZDogI2JmYmZiZjtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24taXRlbS5pbnB0LWYge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuNjIpO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgbWF4LWhlaWdodDogMTZweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taW5wdXQsXHJcbiAgICBpb24tc2VsZWN0LFxyXG4gICAgaW9uLWRhdGV0aW1lLFxyXG4gICAgaW9uLXRleHRhcmVhIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhZGFkYWQ7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgIGhlaWdodDogMzNweDtcclxuICAgICAgLS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIH1cclxuICAgIGlvbi10ZXh0YXJlYSB7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgLS1oZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBpb24tc2VsZWN0IHtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tYXJnLW5zZyB7XHJcbiAgICBtYXJnaW46IDAgLTVweDtcclxuICB9XHJcbiAgaDQuY250ZXItdHRsIHtcclxuICAgIG1hcmdpbi10b3A6IC03cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmJ0LXRycyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBpb24tYnV0dG9uLmJ0bi1zYXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogI2JmYmZiZjtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAzNXB4O1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDM1cHg7XHJcbiAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9uLmJ0bi1jYW5jbCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGNvbG9yOiAjNGQ0ZDRkO1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDQ1cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogNDVweDtcclxuICAgICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICBib3JkZXItY29sb3I6ICNmZmFjODM7XHJcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiAjZmZhYzgzO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYm90dG0tY29udHMge1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gIH1cclxuICBsYWJlbC51cGxvcy1pbWdzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkICM2MTYxNjE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjOTQ5NDk0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgaW9uLWl0ZW0ubGlzLXNucnQge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICBpb24tY2hlY2tib3gge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICAvLyAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWRhZGFkO1xyXG4gIC8vICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgLy8gICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgLy8gICBoZWlnaHQ6IDMzcHg7XHJcbiAgLy8gICAtLWhlaWdodDogMzNweDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDMzcHg7XHJcbiAgLy8gICBmb250LXNpemU6IDE4cHg7XHJcbiAgLy8gICBjb2xvcjogYmxhY2s7XHJcbiAgLy8gfVxyXG4gIHNwYW4ge1xyXG4gICAgLmZsYWcge1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG5cclxuICAgICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAubGFuZy1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIHAuc2lnbi10ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBhIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiAjNGU0ZTRlO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuaW5wdC1mIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuNjIpO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgbWF4LWhlaWdodDogMTZweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "yL7A":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signup.page.html */ "6h0i");
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.page.scss */ "fJgH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "8PDw");
/* harmony import */ var _core_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/language.service */ "0cly");
/* harmony import */ var _core_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/utility.service */ "ZtwD");
/* harmony import */ var _countryCode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./countryCode */ "H7/F");
/* harmony import */ var src_app_shared_directives_must_match_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/directives/must-match.validator */ "3mfk");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _core_market_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/market.service */ "rAh5");
/* harmony import */ var _cat_breed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cat-breed */ "z9Ho");
/* harmony import */ var _dog_breed__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dog-breed */ "v3kf");



/* eslint-disable @typescript-eslint/naming-convention */











let SignupPage = class SignupPage {
    constructor(authService, utility, languageService, fb, menuCtrl, marketService) {
        this.authService = authService;
        this.utility = utility;
        this.languageService = languageService;
        this.fb = fb;
        this.menuCtrl = menuCtrl;
        this.marketService = marketService;
        this.model = {};
        this.countryList = _countryCode__WEBPACK_IMPORTED_MODULE_8__["list"];
        this.dogBreed = _dog_breed__WEBPACK_IMPORTED_MODULE_13__["dog"];
        this.catBreed = _cat_breed__WEBPACK_IMPORTED_MODULE_12__["cat"];
    }
    ngOnInit() {
        console.log('ngOnit', this.dogBreed, this.catBreed);
        this.menuCtrl.enable(false);
        this.getPetTypes();
        this.buildForm();
        // this.languages = this.languageService.languages;
        // console.log(this.languages);
        this.languageService.useLanguage('en');
    }
    ionViewWillEnter() {
        this.menuCtrl.swipeGesture(false);
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
            gender: [''],
            fiscalNumber: [''],
            address: [''],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            city: [''],
            zipCode: [''],
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
                ],
            ],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
            cPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
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
            petBreed: [''],
        });
        this.petType.push(pet);
    }
    // get petBreed() {
    //   return this.registerForm.get('petBreed') as FormArray;
    // }
    // addBreed() {
    //   const pet = this.fb.group({
    //     petBreed: this.fb.array([]),
    //   });
    //   this.petBreed.push(new FormControl(''));
    // }
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
        console.log(form);
        if (form.status.toLowerCase() === 'valid') {
            const formObject = form.value;
            formObject.role = 'pet owner';
            delete formObject.cPassword;
            // formObject.petType = formObject.petType.map((v) => v.petType);
            console.log(formObject);
            this.utility.present();
            this.authService.register(formObject).subscribe((res) => {
                console.log(res);
                this.utility.setLocal('cred', window.btoa(JSON.stringify(formObject.email + ':' + formObject.password)));
                if (res['status'] == true) {
                    this.utility.setLocal('userObj', JSON.stringify(res.data));
                    let json = {
                        email: formObject.email,
                        password: formObject.password,
                        role: 'pet owner',
                    };
                    this.authService.login(json).subscribe((resp) => {
                        console.log(resp);
                        const token = resp['token'];
                        const userObj = resp['data'];
                        this.utility.setLocal('token', token);
                        this.utility.setLocal('userObj', JSON.stringify(userObj));
                        this.utility.setSideMenuUserDetail();
                        this.utility.dismiss();
                        this.utility.navigate('/subscription');
                    });
                    // this.utility.navigate('/login');
                }
                else {
                    // this.utility.showAlert(res['message']);
                    this.utility.dismiss();
                    this.utility.presentToastWithOptions(res['message']);
                }
            }, (err) => {
                this.utility.dismiss();
                // this.utility.hideLoading();
            });
        }
    }
    getPetTypes() {
        this.marketService.getPetType().subscribe((res) => {
            this.petTypes = res;
        });
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
    next(form) {
        const formObject = form.value;
        formObject.role = 'pet owner';
        delete formObject.cPassword;
        this.utility.setLocal('userData', JSON.stringify(formObject));
        this.utility.navigate('signup/pet-form');
    }
    handlePetTypeChange(e) {
        console.log(e);
        console.log(this.registerForm.value.petType);
        this.petType.controls[0].get('petBreed').setValue('');
    }
    test(f) {
        console.log(f.petType.value == '');
    }
    getPetValue(i) {
        return this.registerForm.value.petType[i].petType.toLowerCase() == 'dog';
    }
};
SignupPage.ctorParameters = () => [
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"] },
    { type: _core_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["MenuController"] },
    { type: _core_market_service__WEBPACK_IMPORTED_MODULE_11__["MarketService"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map