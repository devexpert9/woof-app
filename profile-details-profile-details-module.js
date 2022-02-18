(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-details-profile-details-module"],{

/***/ "NX0N":
/*!***********************************************************!*\
  !*** ./src/app/profile-details/profile-details.module.ts ***!
  \***********************************************************/
/*! exports provided: ProfileDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailsPageModule", function() { return ProfileDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-details-routing.module */ "b7d+");
/* harmony import */ var _profile_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-details.page */ "TqdS");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");








let ProfileDetailsPageModule = class ProfileDetailsPageModule {
};
ProfileDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _profile_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileDetailsPageRoutingModule"],
        ],
        declarations: [_profile_details_page__WEBPACK_IMPORTED_MODULE_6__["ProfileDetailsPage"]],
    })
], ProfileDetailsPageModule);



/***/ }),

/***/ "TqdS":
/*!*********************************************************!*\
  !*** ./src/app/profile-details/profile-details.page.ts ***!
  \*********************************************************/
/*! exports provided: ProfileDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailsPage", function() { return ProfileDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile-details.page.html */ "pB6M");
/* harmony import */ var _profile_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-details.page.scss */ "Ydhi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/auth.service */ "8PDw");
/* harmony import */ var _core_pet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/pet.service */ "kSP7");
/* harmony import */ var _core_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/utility.service */ "ZtwD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let ProfileDetailsPage = class ProfileDetailsPage {
    constructor(petService, utility, auth, router) {
        this.petService = petService;
        this.utility = utility;
        this.auth = auth;
        this.router = router;
        this.profiletab = 'Basic';
        this.user_role = JSON.parse(localStorage.getItem('userObj')).role;
        console.log('contructor');
    }
    ionViewWillEnter() {
        //your methods
        console.log('entering');
    }
    ngOnInit() {
        this.utility.present();
        this.router.params.subscribe((res) => {
            console.log('working');
            this.getProfileData();
            this.getPets();
        });
        // this.getPets();
    }
    getPets() {
        this.petService.petGets().subscribe((res) => {
            console.log(res);
            this.pets = res;
        });
    }
    openPage(id) {
        this.utility.navigate('/add-edit-pet/' + id);
    }
    getProfileData() {
        let userid = JSON.parse(localStorage.getItem('userObj'))._id;
        this.auth.getProfile({ id: userid }).subscribe((res) => {
            console.log(res);
            this.profileData = res;
            this.utility.setLocal('userObj', JSON.stringify(res));
            this.utility.setSideMenuUserDetail();
            this.utility.dismiss();
        });
    }
    goBack() {
        this.utility.goBack();
    }
    logout() {
        localStorage.clear();
        this.utility.navigateRoot('/login');
    }
};
ProfileDetailsPage.ctorParameters = () => [
    { type: _core_pet_service__WEBPACK_IMPORTED_MODULE_5__["PetService"] },
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"] },
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
ProfileDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile-details',
        template: _raw_loader_profile_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfileDetailsPage);



/***/ }),

/***/ "Ydhi":
/*!***********************************************************!*\
  !*** ./src/app/profile-details/profile-details.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .edit-c {\n  display: block;\n  text-align: right;\n  margin: 15px 0 15px;\n}\n\nion-content .edit-c .icon-rig {\n  width: 35px;\n  height: 35px;\n  background: #bfbfbf;\n  display: inline-block;\n  text-align: center;\n  line-height: 37px;\n  color: #fff;\n  border-radius: 50%;\n  margin-right: 5px;\n  font-size: 16px;\n}\n\nion-content .btn-save {\n  margin: auto;\n  margin-left: 12%;\n  width: 77%;\n}\n\nion-content .marg-nsg {\n  margin: 0 -5px;\n}\n\nion-content h4.cnter-ttl {\n  margin-top: -7px;\n  margin-bottom: 15px;\n  font-size: 17px;\n  color: #828282;\n  font-weight: bold;\n}\n\nion-content ion-list.item-list-s {\n  margin-bottom: 20px;\n  margin-top: 10px;\n}\n\nion-content ion-list.item-list-s ion-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  padding-bottom: 7px;\n  padding-top: 7px;\n  border-bottom: 1px solid #bfbfbf;\n}\n\nion-content ion-list.item-list-s ion-item ion-avatar {\n  width: 80px;\n  height: 80px;\n  margin-right: 15px;\n  border: 1px solid #ebebeb;\n}\n\nion-content ion-list.item-list-s ion-item ion-label h2 {\n  font-size: 21px;\n  color: #000000;\n  font-weight: normal;\n}\n\nion-content ion-list.item-list-s ion-item ion-label h3 {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.65);\n  margin-top: 3px;\n}\n\nion-content ion-list.item-list-s ion-item .icon-rit {\n  width: 33px;\n  height: 33px;\n  background: #bfbfbf;\n  display: inline-block;\n  text-align: center;\n  line-height: 35px;\n  color: #fff;\n  border-radius: 50%;\n  margin-right: 0;\n  font-size: 14px;\n}\n\nion-content ion-list.item-list-s ion-item .icon-rit:focus-visible {\n  outline: none;\n}\n\nion-content ion-list.item-list-s ion-item:last-child {\n  border-bottom: none;\n}\n\nion-content ion-segment {\n  background: transparent;\n  --background: transparent;\n  border-radius: 30px;\n  padding: 0px 22px;\n  margin-bottom: 20px;\n}\n\nion-content ion-segment ion-segment-button {\n  text-transform: capitalize;\n  min-height: 45px !important;\n  height: 45px !important;\n  font-size: 14px;\n  color: #6b6b6b;\n  font-weight: 600;\n  background: #f4f4f4;\n  border-radius: 50px;\n  --border-radius: 50px;\n  letter-spacing: 0px;\n  margin: 0 4px;\n}\n\nion-content ion-segment ion-segment-button.segment-button-checked {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  background: #bfbfbf;\n  border-radius: 50px;\n  --border-radius: 50px;\n  color: #fff;\n  --color-checked: #fff !important;\n  font-weight: 600;\n  box-shadow: none;\n  --box-shadow: none;\n  --indicator-box-shadow: none !important;\n}\n\n.bottm-conts {\n  padding: 0px 0px;\n  margin-top: 20px;\n}\n\n.des-box {\n  margin-bottom: 20px;\n  padding: 0 25px;\n}\n\n.des-box span {\n  font-size: 13px;\n  color: #6a6a6a;\n  font-weight: 700;\n}\n\n.des-box p {\n  margin: 0px;\n  font-size: 14px;\n  color: #b4b3b3;\n  line-height: 18px;\n  margin-top: 3px;\n}\n\nul.detils-box {\n  padding: 10px 15px;\n  background: #fff;\n  list-style: none;\n  margin: 0px;\n  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.12);\n  border-radius: 13px;\n  margin: 10px 0;\n  display: flex;\n  flex-wrap: wrap;\n}\n\nul.detils-box li {\n  flex: 0 0 50%;\n  width: 50%;\n  color: #a2a2a2;\n  font-size: 13px;\n  border-bottom: 1px dashed #cecece;\n  padding: 10px 0;\n  line-height: 18px;\n}\n\nul.detils-box li span {\n  font-size: 13px;\n  color: #6a6a6a;\n  font-weight: 700;\n  display: block;\n}\n\nul.detils-box li.w-100 {\n  flex: 0 0 100%;\n  width: 100%;\n}\n\n.top-img-pets {\n  padding: 0 25px;\n}\n\nh4.ttl-tp {\n  margin-right: 25px;\n}\n\n.pet-detsl {\n  padding: 0 20px;\n  display: block;\n  position: relative;\n  height: 38vh;\n  overflow: scroll;\n}\n\n.cont-vox {\n  display: block;\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.cont-vox img {\n  width: 90px;\n  height: 90px;\n  object-fit: cover;\n  border-radius: 50%;\n  border: 1px solid #e1e1e1;\n}\n\n.cont-vox h4 {\n  margin: 0px;\n  font-size: 16px;\n  color: #000000;\n  font-weight: 600;\n  margin-top: 3px;\n  margin-bottom: 10px;\n}\n\n.cont-vox .btn-cns {\n  display: inline-block;\n  background: #bfbfbf;\n  padding: 9px 20px;\n  border-radius: 50px;\n  color: #fff;\n  text-decoration: none;\n  font-size: 14px;\n}\n\n.fixed-btn-bi {\n  position: fixed;\n  bottom: 0px;\n  right: 25px;\n  width: 56px;\n  height: 56px;\n  background: #bfbfbf;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n  border-radius: 50%;\n  color: #fff;\n  box-shadow: 2px 3px 9px rgba(0, 0, 0, 0.14);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2ZpbGUtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUF2Qjs7QUFKQTtFQU1NLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFFckI7O0FBakJBO0VBb0JJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNkOztBQXZCQTtFQXlCSSxjQUFjO0FBRWxCOztBQTNCQTtFQTRCSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0FBR3JCOztBQW5DQTtFQW1DSSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBSXBCOztBQXhDQTtFQXNDTSxvQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztBQU10Qzs7QUFoREE7RUE0Q1EsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0FBUWpDOztBQXZEQTtFQW1EVSxlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtBQVE3Qjs7QUE3REE7RUF3RFUsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixlQUFlO0FBU3pCOztBQW5FQTtFQThEUSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0FBU3ZCOztBQWhGQTtFQXlFVSxhQUFhO0FBV3ZCOztBQXBGQTtFQThFUSxtQkFBbUI7QUFVM0I7O0FBeEZBO0VBbUZJLHVCQUF1QjtFQUN2Qix5QkFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBU3ZCOztBQWhHQTtFQXlGTSwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHFCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtBQVduQjs7QUE5R0E7RUFxR1EseUNBQWtCO0VBQ2xCLGlEQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHFCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0NBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWE7RUFDYix1Q0FBdUI7QUFhL0I7O0FBUkE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBV2xCOztBQVRBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFZakI7O0FBZEE7RUFJSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQWNwQjs7QUFwQkE7RUFTSSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtBQWVuQjs7QUFaQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCw0Q0FBNEM7RUFDNUMsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZUFBZTtBQWVqQjs7QUF4QkE7RUFXSSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixpQkFBaUI7QUFpQnJCOztBQWxDQTtFQW1CTSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixjQUFjO0FBbUJwQjs7QUF6Q0E7RUEwQkksY0FBYztFQUNkLFdBQVc7QUFtQmY7O0FBaEJBO0VBQ0UsZUFBZTtBQW1CakI7O0FBakJBO0VBQ0Usa0JBQWtCO0FBb0JwQjs7QUFsQkE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0FBcUJsQjs7QUFsQkE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQXFCckI7O0FBeEJBO0VBS0ksV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQXVCN0I7O0FBaENBO0VBWUksV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7QUF3QnZCOztBQXpDQTtFQW9CSSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixlQUFlO0FBeUJuQjs7QUF0QkE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCwyQ0FBMkM7QUF5QjdDIiwiZmlsZSI6InByb2ZpbGUtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLmVkaXQtYyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiAxNXB4IDAgMTVweDtcclxuICAgIC5pY29uLXJpZyB7XHJcbiAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idG4tc2F2ZSB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogMTIlO1xyXG4gICAgd2lkdGg6IDc3JTtcclxuICB9XHJcbiAgLm1hcmctbnNnIHtcclxuICAgIG1hcmdpbjogMCAtNXB4O1xyXG4gIH1cclxuICBoNC5jbnRlci10dGwge1xyXG4gICAgbWFyZ2luLXRvcDogLTdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogIzgyODI4MjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBpb24tbGlzdC5pdGVtLWxpc3QtcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICAgICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZmJmYmY7XHJcbiAgICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgICAgfVxyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5pY29uLXJpdCB7XHJcbiAgICAgICAgd2lkdGg6IDMzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAmOmZvY3VzLXZpc2libGUge1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpb24tc2VnbWVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDIycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICM2YjZiNmI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgbWFyZ2luOiAwIDRweDtcclxuICAgICAgJi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcclxuICAgICAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgLS1jb2xvci1jaGVja2VkOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAtLWluZGljYXRvci1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmJvdHRtLWNvbnRzIHtcclxuICBwYWRkaW5nOiAwcHggMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmRlcy1ib3gge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcGFkZGluZzogMCAyNXB4O1xyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICM2YTZhNmE7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICBwIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNiNGIzYjM7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICB9XHJcbn1cclxudWwuZGV0aWxzLWJveCB7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW46IDBweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGxpIHtcclxuICAgIGZsZXg6IDAgMCA1MCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgY29sb3I6ICNhMmEyYTI7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjZWNlY2U7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGNvbG9yOiAjNmE2YTZhO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbiAgbGkudy0xMDAge1xyXG4gICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuLnRvcC1pbWctcGV0cyB7XHJcbiAgcGFkZGluZzogMCAyNXB4O1xyXG59XHJcbmg0LnR0bC10cCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG59XHJcbi5wZXQtZGV0c2wge1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAzOHZoO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5jb250LXZveCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gIH1cclxuICBoNCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5idG4tY25zIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcbiAgICBwYWRkaW5nOiA5cHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuLmZpeGVkLWJ0bi1iaSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiA1NnB4O1xyXG4gIGhlaWdodDogNTZweDtcclxuICBiYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDJweCAzcHggOXB4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "b7d+":
/*!*******************************************************************!*\
  !*** ./src/app/profile-details/profile-details-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailsPageRoutingModule", function() { return ProfileDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-details.page */ "TqdS");




const routes = [
    {
        path: '',
        component: _profile_details_page__WEBPACK_IMPORTED_MODULE_3__["ProfileDetailsPage"]
    }
];
let ProfileDetailsPageRoutingModule = class ProfileDetailsPageRoutingModule {
};
ProfileDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileDetailsPageRoutingModule);



/***/ }),

/***/ "pB6M":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile-details/profile-details.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>add-product</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n  <!-- <app-header></app-header> -->\r\n<!-- <app-header [pageName]='\"PROFILE\"' app=\"serviceProvider\"></app-header> -->\r\n  <app-header [pageName]=\"'Profile'\" app=\"serviceProvider\"></app-header>\r\n  <div class=\"bottm-conts\">\r\n    <!-- <h4 class=\"ttl-tp\">PROFILE</h4> -->\r\n    <div class=\"top-img-pets\">\r\n      <ion-list class=\"item-list-s\">\r\n        <ion-item lines=\"none\">\r\n          <ion-avatar slot=\"start\">\r\n            <img\r\n              [src]=\"profileData?.imageUrl != ''? profileData?.imageUrl:'assets/images/user11.jpg'\"\r\n            />\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2>{{profileData?.firstname}} {{profileData?.lastname}}</h2>\r\n            <h3>{{profileData?.email}}</h3>\r\n          </ion-label>\r\n          <a\r\n            href=\"javascript:void(0)\"\r\n            class=\"icon-rit\"\r\n            slot=\"end\"\r\n            routerLink=\"/tabs/edit-profile\"\r\n          >\r\n            <ion-icon name=\"pencil-sharp\"></ion-icon>\r\n          </a>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n    <div class=\"form-botm\">\r\n      <ion-segment [(ngModel)]=\"profiletab\" *ngIf=\"user_role == 'pet owner'\">\r\n        <ion-segment-button value=\"Basic\">\r\n          Personal Details\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"pwd\"> Pets Details </ion-segment-button>\r\n      </ion-segment>\r\n      <div [ngSwitch]=\"profiletab\">\r\n        <ion-list *ngSwitchCase=\"'Basic'\">\r\n          <div class=\"des-box\">\r\n            <ul class=\"detils-box\">\r\n              <li>\r\n                Name\r\n                <span>\r\n                  {{profileData?.firstname +' '+profileData?.lastname}}\r\n                </span>\r\n              </li>\r\n              <li>Gender <span> {{profileData?.gender}} </span></li>\r\n              <li>Email Address <span> {{profileData?.email}}</span></li>\r\n\r\n              <li>\r\n                Fiscal Number <span> {{profileData?.fiscalNumber}} </span>\r\n              </li>\r\n\r\n              <li class=\"w-100\">\r\n                Street <span> {{profileData?.address}} </span>\r\n              </li>\r\n              <li>Town / City <span> {{profileData?.city}}</span></li>\r\n              <li>Postal code <span> {{profileData?.zipCode}}</span></li>\r\n              <li>Country <span> {{profileData?.country}} </span></li>\r\n              <li>Phone <span> {{profileData?.contact}} </span></li>\r\n              <li>No of Pet <span> {{profileData?.numberOfPet}} </span></li>\r\n\r\n              <li>Pet Type <span> {{profileData?.petType}} </span></li>\r\n            </ul>\r\n          </div>\r\n        </ion-list>\r\n        <ion-list *ngSwitchCase=\"'pwd'\">\r\n          <div class=\"pet-detsl\">\r\n            <ion-row>\r\n              <ion-col size=\"6\" size-md=\"3\" *ngFor=\"let p of pets\">\r\n                <div class=\"cont-vox\">\r\n                  <img [src]=\"p?.imageUrl\" />\r\n                  <h4>{{p?.name | titlecase}}</h4>\r\n                  <a\r\n                    href=\"javascript:void(0)\"\r\n                    (click)=\"openPage(p._id)\"\r\n                    class=\"btn-cns\"\r\n                  >\r\n                    View Details\r\n                  </a>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n          <a\r\n            href=\"javascript:void(0)\"\r\n            class=\"fixed-btn-bi\"\r\n            routerLink=\"/add-edit-pet\"\r\n          >\r\n            <ion-icon name=\"add-outline\"></ion-icon>\r\n          </a>\r\n        </ion-list>\r\n      </div>\r\n    </div>\r\n\r\n    <ion-button\r\n      shape=\"round\"\r\n      class=\"btn-save\"\r\n      (click)=\"logout()\"\r\n      *ngIf=\"user_role != 'pet owner'\"\r\n    >\r\n      Logout\r\n    </ion-button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=profile-details-profile-details-module.js.map