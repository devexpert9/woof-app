(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["availability-availability-module"],{

/***/ "/MNG":
/*!*****************************************************!*\
  !*** ./src/app/availability/availability.module.ts ***!
  \*****************************************************/
/*! exports provided: AvailabilityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailabilityPageModule", function() { return AvailabilityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _availability_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./availability-routing.module */ "7qKD");
/* harmony import */ var _availability_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./availability.page */ "8b+p");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");








let AvailabilityPageModule = class AvailabilityPageModule {
};
AvailabilityPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _availability_routing_module__WEBPACK_IMPORTED_MODULE_5__["AvailabilityPageRoutingModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_availability_page__WEBPACK_IMPORTED_MODULE_6__["AvailabilityPage"]],
    })
], AvailabilityPageModule);



/***/ }),

/***/ "7qKD":
/*!*************************************************************!*\
  !*** ./src/app/availability/availability-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AvailabilityPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailabilityPageRoutingModule", function() { return AvailabilityPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _availability_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./availability.page */ "8b+p");




const routes = [
    {
        path: '',
        component: _availability_page__WEBPACK_IMPORTED_MODULE_3__["AvailabilityPage"]
    }
];
let AvailabilityPageRoutingModule = class AvailabilityPageRoutingModule {
};
AvailabilityPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AvailabilityPageRoutingModule);



/***/ }),

/***/ "8b+p":
/*!***************************************************!*\
  !*** ./src/app/availability/availability.page.ts ***!
  \***************************************************/
/*! exports provided: AvailabilityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailabilityPage", function() { return AvailabilityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_availability_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./availability.page.html */ "NEAD");
/* harmony import */ var _availability_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./availability.page.scss */ "C5CI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_service_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/service-provider.service */ "7RZW");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/utility.service */ "ZtwD");
/* harmony import */ var _core_appointment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/appointment.service */ "brL0");









let AvailabilityPage = class AvailabilityPage {
    constructor(activatedRoute, service, utility, appointment) {
        this.activatedRoute = activatedRoute;
        this.service = service;
        this.utility = utility;
        this.appointment = appointment;
        this.selectedDate = moment__WEBPACK_IMPORTED_MODULE_6__().toString();
        console.log('working');
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.getData();
    }
    onChange($event) {
        console.log($event);
        let date = $event.toString();
        console.log(date);
        this.selectedDate = date;
        console.log(this.selectedDate);
        this.getSlotsData();
    }
    getData() {
        console.log('working');
        let id = this.activatedRoute.snapshot.queryParams.id;
        this.serviceProviderId = id;
        this.service.getSingleServiceProvider(id).subscribe((res) => {
            console.log(res);
            this.data = res;
            this.getSlotsData();
        });
    }
    getSlotsData() {
        this.utility.present();
        let id = this.activatedRoute.snapshot.queryParams.id;
        this.service.getSlots(id, this.selectedDate).subscribe((res) => {
            this.slots = res;
            console.log(this.slots, 'slots');
            this.utility.dismiss();
        });
    }
    timeBook(s) {
        console.log(s);
        let start = s.slot.split('-')[0];
        let end = s.slot.split('-')[1];
        start = parseInt(start.split(':')[0]);
        end = parseInt(end.split(':')[0]);
        console.log(start, end);
        let startDate = moment__WEBPACK_IMPORTED_MODULE_6__(this.selectedDate)
            .set({ hour: start, minute: 0, second: 0 })
            .toString();
        let endDate = moment__WEBPACK_IMPORTED_MODULE_6__(this.selectedDate)
            .set({ hour: end, minute: 0, second: 0 })
            .toString();
        console.log(startDate, endDate);
        console.log(moment__WEBPACK_IMPORTED_MODULE_6__(this.selectedDate).set({ hour: start }).toString());
    }
    addAppointment(slot) {
        this.utility.present();
        let obj = {
            serviceProvider: this.data.userId._id,
            user: this.utility.getUserId(),
            service: this.data.service,
            serviceName: this.data.sname,
            startTime: slot.split('-')[0],
            endTime: slot.split('-')[1],
            appointmentDate: this.selectedDate,
        };
        this.appointment.addAppointment(obj).subscribe((res) => {
            console.log(res);
            if (res['status'] == true) {
                this.utility.presentToastWithOptions('Appointment Booked Successfully.');
                this.utility.navigate('/tabs/appointments');
            }
            else {
                this.utility.showAlert(res['message']);
            }
            this.getData();
            this.utility.dismiss();
        }, (err) => {
            this.utility.dismiss();
        });
    }
    addTime(slot) {
        console.log(slot, 'slot');
        this.addAppointment(slot);
    }
};
AvailabilityPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _core_service_provider_service__WEBPACK_IMPORTED_MODULE_5__["ServiceProviderService"] },
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"] },
    { type: _core_appointment_service__WEBPACK_IMPORTED_MODULE_8__["AppointmentService"] }
];
AvailabilityPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-availability',
        template: _raw_loader_availability_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_availability_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AvailabilityPage);



/***/ }),

/***/ "C5CI":
/*!*****************************************************!*\
  !*** ./src/app/availability/availability.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .bottm-conts {\n  padding: 0px;\n}\n\nion-content h4.ttl-tp {\n  margin-right: 25px;\n}\n\nion-content .cont-calef {\n  padding: 20px 0px;\n  margin-top: 20px;\n  display: block;\n}\n\nion-content .top-sect {\n  position: relative;\n  padding: 10px 40px 30px;\n  display: flex;\n  align-items: center;\n  z-index: 0;\n  border-bottom: 1px solid #d0d0d0;\n}\n\nion-content .top-sect img.usr-imgd {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-right: 15px;\n}\n\nion-content .top-sect .conte-f h4 {\n  margin: 0px;\n  font-size: 19px;\n  font-weight: 600;\n  color: #000;\n}\n\nion-content .top-sect .conte-f h4 img {\n  height: 18px;\n  position: relative;\n  top: 3px;\n}\n\nion-content .top-sect .conte-f p {\n  margin: 0px;\n  font-size: 11px;\n  position: relative;\n  padding-left: 15px;\n  margin-top: 5px;\n}\n\nion-content .top-sect .conte-f p ion-icon {\n  font-size: 14px;\n  color: #50a09d;\n  position: absolute;\n  left: 0;\n}\n\nion-content .top-sect:after {\n  content: \"\";\n  background: url('bg2.png');\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n  opacity: 0.31;\n  background-size: cover;\n}\n\nion-content .top-sect ul.rates-s {\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n  display: inline-block;\n  margin-top: 5px;\n}\n\nion-content .top-sect ul.rates-s li {\n  display: inline-block;\n  font-size: 15px;\n  color: #f6dd33;\n  margin-right: 1px;\n}\n\nion-content .top-sect span.revs {\n  font-size: 12px;\n  font-weight: 800;\n  vertical-align: text-top;\n  position: relative;\n  top: 1px;\n}\n\nion-content .ntms-tl {\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #d0d0d0;\n}\n\nion-content .ntms-tl span.text-n {\n  flex: 1;\n  text-align: center;\n  border-right: 1px solid #d0d0d0;\n  padding: 10px;\n  font-size: 33px;\n  color: #000;\n}\n\nion-content .ntms-tl span.text-n small {\n  display: block;\n  font-size: 12px;\n  color: #7b7b7b;\n  text-transform: uppercase;\n  margin-top: 1px;\n}\n\nion-content .ntms-tl span.text-n i {\n  font-style: normal !important;\n  font-size: 20px;\n  font-weight: 600;\n}\n\nion-content .ntms-tl span.text-n:last-child {\n  border-right: 0px;\n}\n\nion-content .btn-wos {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 35px 25px 20px;\n}\n\nion-content .btn-wos .btn-sd {\n  flex: 1;\n  font-size: 13px;\n  padding: 14px;\n  text-decoration: none;\n  background: #efefef;\n  border-radius: 50px;\n  text-align: center;\n  color: #6b6b6b;\n  font-weight: 600;\n  margin: 0 3px;\n}\n\nion-content .btn-wos .btn-dt {\n  flex: 1;\n  font-size: 13px;\n  padding: 14px;\n  text-decoration: none;\n  background: #bfbfbf;\n  border-radius: 50px;\n  text-align: center;\n  color: #ffffff;\n  font-weight: 600;\n  margin: 0 3px;\n}\n\nion-content .clndr {\n  position: relative;\n  display: block;\n  padding: 0 15px;\n}\n\nion-content .slot {\n  background: #5f94f5;\n  color: white;\n  border-radius: 5px;\n  text-align: center;\n  padding: 10px 5px;\n}\n\nion-content .slotText {\n  color: gray;\n  font-size: 14px;\n  margin-left: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGF2YWlsYWJpbGl0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFZO0FBQWhCOztBQUZBO0VBS0ksa0JBQWtCO0FBQ3RCOztBQU5BO0VBUUksaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0FBRWxCOztBQVpBO0VBYUksa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixnQ0FBZ0M7QUFHcEM7O0FBckJBO0VBb0JNLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFLeEI7O0FBN0JBO0VBNEJRLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFLbkI7O0FBcENBO0VBaUNVLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtBQU9sQjs7QUExQ0E7RUF1Q1EsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFPdkI7O0FBbERBO0VBNkNVLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLE9BQU87QUFTakI7O0FBekRBO0VBcURNLFdBQVc7RUFDWCwwQkFBOEM7RUFDOUMsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsTUFBTTtFQUNOLFNBQVM7RUFDVCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtBQVE1Qjs7QUF0RUE7RUFpRU0sWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFTckI7O0FBOUVBO0VBdUVRLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtBQVd6Qjs7QUFyRkE7RUE4RU0sZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFFBQVE7QUFXZDs7QUE3RkE7RUFzRkksVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGdDQUFnQztBQVdwQzs7QUFyR0E7RUE0Rk0sT0FBTztFQUNQLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0FBYWpCOztBQTlHQTtFQW1HUSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtBQWV2Qjs7QUF0SEE7RUEwR1EsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixnQkFBZ0I7QUFnQnhCOztBQTVIQTtFQStHUSxpQkFBaUI7QUFpQnpCOztBQWhJQTtFQW9ISSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix1QkFBdUI7QUFnQjNCOztBQXZJQTtFQXlITSxPQUFPO0VBQ1AsZUFBZTtFQUNmLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0FBa0JuQjs7QUFwSkE7RUFxSU0sT0FBTztFQUNQLGVBQWU7RUFDZixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsYUFBYTtBQW1CbkI7O0FBaktBO0VBa0pJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtBQW1CbkI7O0FBdktBO0VBdUpJLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFvQnJCOztBQS9LQTtFQStKSSxXQUFXO0VBQ1gsZUFBZTtFQUVmLGlCQUFpQjtBQW1CckIiLCJmaWxlIjoiYXZhaWxhYmlsaXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAuYm90dG0tY29udHMge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuICBoNC50dGwtdHAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gIH1cclxuICAuY29udC1jYWxlZiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnRvcC1zZWN0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDEwcHggNDBweCAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMGQwZDA7XHJcbiAgICBpbWcudXNyLWltZ2Qge1xyXG4gICAgICB3aWR0aDogOTBweDtcclxuICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuY29udGUtZiB7XHJcbiAgICAgIGg0IHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdG9wOiAzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzUwYTA5ZDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzIucG5nXCIpO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgIG9wYWNpdHk6IDAuMzE7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbiAgICB1bC5yYXRlcy1zIHtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZjZkZDMzO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzcGFuLnJldnMge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDFweDtcclxuICAgIH1cclxuICB9XHJcbiAgLm50bXMtdGwge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMGQwZDA7XHJcbiAgICBzcGFuLnRleHQtbiB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QwZDBkMDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgZm9udC1zaXplOiAzM3B4O1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgc21hbGwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzdiN2I3YjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgICAgfVxyXG4gICAgICBpIHtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5idG4td29zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMzVweCAyNXB4IDIwcHg7XHJcbiAgICAuYnRuLXNkIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICM2YjZiNmI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLWR0IHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jbG5kciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICB9XHJcbiAgLnNsb3Qge1xyXG4gICAgYmFja2dyb3VuZDogIzVmOTRmNTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gIH1cclxuXHJcbiAgLnNsb3RUZXh0IHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "NEAD":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/availability/availability.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>adoptions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n  <app-header [pageName]=\"'Availibility'\"></app-header>\r\n  <div class=\"bottm-conts\">\r\n    <!-- <h4 class=\"ttl-tp\">AVAILABILITY</h4> -->\r\n    <div class=\"cont-calef\">\r\n      <div class=\"top-sect\">\r\n        <img src=\"assets/images/user2.jpg\" class=\"usr-imgd\" />\r\n        <div class=\"conte-f\">\r\n          <h4>\r\n            {{data?.userId?.firstname +' '+data?.userId?.lastname}}\r\n            <img src=\"assets/images/icon8.png\" />\r\n          </h4>\r\n          <p>\r\n            <ion-icon name=\"location\"></ion-icon> {{data?.userId?.address}},\r\n            {{data?.userId?.zipCode}}\r\n          </p>\r\n          <ul class=\"rates-s\">\r\n            <li><ion-icon name=\"star\"></ion-icon></li>\r\n            <li><ion-icon name=\"star\"></ion-icon></li>\r\n            <li><ion-icon name=\"star\"></ion-icon></li>\r\n            <li><ion-icon name=\"star\"></ion-icon></li>\r\n            <li><ion-icon name=\"star-half\"></ion-icon></li>\r\n          </ul>\r\n          <span class=\"revs\"> (25) </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"ntms-tl\">\r\n        <span class=\"text-n\">\r\n          {{data?.experience}} <small> Years Experience </small></span\r\n        >\r\n        <span class=\"text-n\">\r\n          ${{data?.price}}<i>/h</i> <small> Rate </small></span\r\n        >\r\n      </div>\r\n      <div class=\"btn-wos\">\r\n        <a href=\"javascript:void(0)\" class=\"btn-sd\"> Services Provide </a>\r\n        <a\r\n          href=\"javascript:void(0)\"\r\n          class=\"btn-dt\"\r\n          routerLink=\"/tabs/appointment-details\"\r\n        >\r\n          Availability\r\n        </a>\r\n      </div>\r\n      <div class=\"clndr\">\r\n        <!-- <img src=\"assets/images/calendar.png\" /> -->\r\n        <ion-calendar\r\n          [(ngModel)]=\"date\"\r\n          (change)=\"onChange($event)\"\r\n          [type]=\"type\"\r\n          [format]=\"'YYYY-MM-DD'\"\r\n        >\r\n        </ion-calendar>\r\n      </div>\r\n\r\n      <div class=\"slot-block\">\r\n        <div class=\"slotText\">Slots Available</div>\r\n        <ion-row>\r\n          <ion-col size=\"6\" *ngFor=\"let s of slots\">\r\n            <!-- <div class=\"slot\">{{s?.time }}</div> -->\r\n            <ion-button\r\n              shape=\"round\"\r\n              [disabled]=\"s.value == 1?true:false\"\r\n              [color]=\"s.value == 0?'Primary':'secondary'\"\r\n              fill=\"outline\"\r\n              (click)=\"addTime(s.time)\"\r\n              >{{s?.slot}}</ion-button\r\n            >\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=availability-availability-module.js.map