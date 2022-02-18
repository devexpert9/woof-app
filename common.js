(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "0cly":
/*!******************************************!*\
  !*** ./src/app/core/language.service.ts ***!
  \******************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



let LanguageService = class LanguageService {
    constructor(translate) {
        this.translate = translate;
        this.languages = [
            { name: 'English', code: 'en', icon: 'assets/svg/us.svg' },
            { name: 'Portuguese', code: 'pt', icon: 'assets/svg/pt.svg' },
        ];
    }
    useLanguage(language) {
        this.translate.use(language);
    }
};
LanguageService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
LanguageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], LanguageService);



/***/ }),

/***/ "3mfk":
/*!***********************************************************!*\
  !*** ./src/app/shared/directives/must-match.validator.ts ***!
  \***********************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "7RZW":
/*!**************************************************!*\
  !*** ./src/app/core/service-provider.service.ts ***!
  \**************************************************/
/*! exports provided: ServiceProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderService", function() { return ServiceProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utility.service */ "ZtwD");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








let ServiceProviderService = class ServiceProviderService {
    constructor(http, bHttp, utilityService) {
        this.http = http;
        this.bHttp = bHttp;
        this.utilityService = utilityService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'service/';
        this.servicesOfProvider = this.baseUrl + 'getServicesOfProvider';
        this.providers = this.baseUrl + 'getServicesById?serviceId={serviceId}';
        this.singleProvider = this.baseUrl + 'getSingleServiceProvider?id={id}';
        this.serviceCategory = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'service-category/get';
        this.serviceCatList1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'service/' + 'listServiceCategoryData';
        this.slots = this.baseUrl + 'getSlots';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            authorization: this.utilityService.getToken(),
        });
    }
    getServiceByCategoryId(id) {
        let url = this.providers.replace('{serviceId}', id);
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((resp) => {
            let data = resp['data'];
            return data;
        }));
    }
    getServiceProvider(cat) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(1, 2, 3);
    }
    getServicesOfProvider(id) {
        //let url = this.servicesOfProvider;
        let url = this.baseUrl + '/list/' + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((resp) => {
            let data = resp['data'];
            return data;
        }));
    }
    getSingleServiceProvider(id) {
        let url = this.singleProvider.replace('{id}', id);
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((resp) => {
            let data = resp['data'];
            data.imageUrl = this.utilityService.getPetImageUrl(data.image);
            return data;
        }));
    }
    getServiceCategory() {
        let url = this.serviceCategory;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((resp) => {
            let data = resp['data'];
            return data;
        }));
    }
    serviceCatList() {
        let url = this.serviceCatList1;
        console.log('url = ', url);
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((resp) => {
            let data = resp['data'];
            return data;
        }));
    }
    serviceUpdate(id, data) {
        let newHTTP = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](this.bHttp);
        return newHTTP.post(this.baseUrl + 'updatedata/' + id, data, {
            headers: this.headers,
        });
    }
    serviceAdd(data) {
        let newHTTP = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](this.bHttp);
        return newHTTP.post(this.baseUrl + '/add', data, {
            headers: this.headers,
        });
    }
    getSlots(id, date) {
        let obj = {
            id: id,
            date: date,
        };
        let url = this.slots;
        return this.http.post(url, obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((resp) => {
            let data = resp['data'];
            data = data.map((v) => {
                v.slot =
                    moment__WEBPACK_IMPORTED_MODULE_7__(v.time.split('-')[0]).format('HH:mm') +
                        ' - ' +
                        moment__WEBPACK_IMPORTED_MODULE_7__(v.time.split('-')[1]).format('HH:mm');
                return v;
            });
            return data;
        }));
    }
};
ServiceProviderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"] },
    { type: _utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"] }
];
ServiceProviderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], ServiceProviderService);



/***/ }),

/***/ "JbSX":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "acej":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "brL0":
/*!*********************************************!*\
  !*** ./src/app/core/appointment.service.ts ***!
  \*********************************************/
/*! exports provided: AppointmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentService", function() { return AppointmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






let AppointmentService = class AppointmentService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'appointment/';
        this.add = this.baseUrl + 'add';
        this.userAppointment = this.baseUrl + 'getUserAppointments';
        this.providerAppointment = this.baseUrl + 'getProviderAppointments';
        this.singleAppointment = this.baseUrl + 'getSingleAppointment';
    }
    addAppointment(data) {
        return this.http.post(this.add, data);
    }
    getUserAppointments(date) {
        let obj = {
            date: moment__WEBPACK_IMPORTED_MODULE_5__(date).format().split('T')[0],
        };
        return this.http.post(this.userAppointment, obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((v) => {
            let data = v['data'];
            data = data.map((v) => {
                v.start = moment__WEBPACK_IMPORTED_MODULE_5__(v.startTime).format('HH:mm:A');
                v.end = moment__WEBPACK_IMPORTED_MODULE_5__(v.endTime).format('HH:mm:A');
                return v;
            });
            return data;
        }));
    }
    getProviderAppointment(date) {
        let obj = {
            date: moment__WEBPACK_IMPORTED_MODULE_5__(date).format().split('T')[0],
        };
        return this.http.post(this.providerAppointment, obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((v) => {
            let data = v['data'];
            data = data.map((v) => {
                v.start = moment__WEBPACK_IMPORTED_MODULE_5__(v.startTime).format('HH:mm:A');
                v.end = moment__WEBPACK_IMPORTED_MODULE_5__(v.endTime).format('HH:mm:A');
                return v;
            });
            return data;
        }));
    }
    getSingleAppointment(id) {
        return this.http.get(this.singleAppointment + '?id=' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((v) => {
            let data = v['data'];
            data.slot =
                moment__WEBPACK_IMPORTED_MODULE_5__(data.startTime).format('HH:mm:A') +
                    ' - ' +
                    moment__WEBPACK_IMPORTED_MODULE_5__(data.endTime).format('HH:mm:A');
            return data;
        }));
    }
};
AppointmentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AppointmentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], AppointmentService);



/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "kSP7":
/*!*************************************!*\
  !*** ./src/app/core/pet.service.ts ***!
  \*************************************/
/*! exports provided: PetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetService", function() { return PetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utility.service */ "ZtwD");






let PetService = class PetService {
    constructor(http, utilityService, bHttp) {
        this.http = http;
        this.utilityService = utilityService;
        this.bHttp = bHttp;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'pet/';
        this.addPet = 'add';
        this.updatePet = 'update/{petId}';
        this.deletePet = 'delete/{petId}';
        this.getPets = 'get';
        this.getSinglePet = 'get/{petId}';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            authorization: this.utilityService.getToken(),
        });
    }
    getServiceDetails(data) {
        // return this.http.post(this.baseUrl + this.getServiceDetail, data);
        let newHTTP = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](this.bHttp);
        return newHTTP.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'service/details', data, {
            headers: this.headers,
        });
    }
    serviceAdd(data) {
        // return this.http.post(this.baseUrl + this.addPet, data);
        let newHTTP = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](this.bHttp);
        return newHTTP.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'service/add', data, {
            headers: this.headers,
        });
    }
    serviceUpdate(id, data) {
        let newHTTP = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](this.bHttp);
        this.updatePet = this.updatePet.replace('{petId}', id);
        return newHTTP.patch(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'service/update/' + id, data, {
            headers: this.headers,
        });
    }
    petAdd(data) {
        // return this.http.post(this.baseUrl + this.addPet, data);
        let newHTTP = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](this.bHttp);
        return newHTTP.post(this.baseUrl + this.addPet, data, {
            headers: this.headers,
        });
    }
    petUpdate(id, data) {
        let newHTTP = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](this.bHttp);
        this.updatePet = this.updatePet.replace('{petId}', id);
        return newHTTP.put(this.baseUrl + this.updatePet, data, {
            headers: this.headers,
        });
    }
    petGets() {
        return this.http.get(this.baseUrl + this.getPets).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            console.log(res);
            let data = res['data'];
            data = data.map((v) => {
                if (v.image) {
                    v.imageUrl = this.utilityService.getPetImageUrl(v.image);
                }
                else {
                    v.imageUrl = 'assets/images/pet4.jpg';
                }
                return v;
            });
            return data;
        }));
    }
    getPetSingle(id) {
        return this.http
            .get(this.baseUrl + this.getSinglePet.replace('{petId}', id))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            let data = res['data'];
            if (data === null || data === void 0 ? void 0 : data.image) {
                data.imageUrl = this.utilityService.getPetImageUrl(data.image);
            }
            return data;
        }));
    }
    petDelete(id) {
        return this.http.delete(this.baseUrl + this.deletePet.replace('{petId}', id));
    }
};
PetService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"] }
];
PetService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], PetService);



/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "rAh5":
/*!****************************************!*\
  !*** ./src/app/core/market.service.ts ***!
  \****************************************/
/*! exports provided: MarketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketService", function() { return MarketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utility.service */ "ZtwD");






let MarketService = class MarketService {
    constructor(http, utilityService, bHttp) {
        this.http = http;
        this.utilityService = utilityService;
        this.bHttp = bHttp;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'product/';
        this.add = 'add';
        this.update = 'update/{id}';
        this.delete = 'delete/{id}';
        this.getAll = 'get';
        this.userProducts = 'getUserProducts';
        this.getSingle = 'get/{id}';
        this.categories = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'category/' + 'get';
        this.petType = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'pet-type/get';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            authorization: this.utilityService.getToken(),
        });
    }
    productAdd(data) {
        let newHTTP = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](this.bHttp);
        return newHTTP.post(this.baseUrl + this.add, data, {
            headers: this.headers,
        });
    }
    productUpdate(id, data) {
        let newHTTP = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](this.bHttp);
        let url = this.baseUrl + this.update.replace('{id}', id);
        // alert(url);
        console.log(url);
        return newHTTP.put(url, data, {
            headers: this.headers,
        });
    }
    getProducts(categoryId, page, limit) {
        return this.http
            .get(this.baseUrl +
            this.getAll +
            '?categoryId=' +
            categoryId +
            '&page=' +
            page +
            '&limit=' +
            limit)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            console.log(res);
            let data = res['data'];
            data = data.map((v) => {
                console.log(v);
                v.imageUrls = this.utilityService.getImageUrl(v.images);
                v.count = res['total'];
                return v;
            });
            return data;
        }));
    }
    getUserProducts() {
        return this.http.get(this.baseUrl + this.userProducts).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            console.log(res);
            let data = res['data'];
            data = data.map((v) => {
                console.log(v);
                v.imageUrls = this.utilityService.getImageUrl(v.images);
                return v;
            });
            return data;
        }));
    }
    getCategories() {
        return this.http.get(this.categories).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            console.log(res);
            let data = res['data'];
            return data;
        }));
    }
    getPetType() {
        return this.http.get(this.petType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            console.log(res);
            let data = res['data'];
            return data;
        }));
    }
    getProductSingle(id) {
        return this.http
            .get(this.baseUrl + this.getSingle.replace('{id}', id))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            let data = res['data'];
            data.imageUrls = this.utilityService.getImageUrl(data.images);
            return data;
        }));
    }
    productDelete(id) {
        return this.http.delete(this.baseUrl + this.delete.replace('{id}', id));
    }
};
MarketService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"] }
];
MarketService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], MarketService);



/***/ }),

/***/ "tsKi":
/*!**************************************!*\
  !*** ./src/app/core/cart.service.ts ***!
  \**************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utility.service */ "ZtwD");






let CartService = class CartService {
    constructor(http, utilityService) {
        this.http = http;
        this.utilityService = utilityService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'cart/';
        this.add = 'add';
        this.delete = 'delete/{id}';
        this.getAll = 'get';
        this.clearCart = this.baseUrl + 'clearUserCart/';
        this.placeOrder = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'order/add';
    }
    addToCart(data) {
        return this.http.post(this.baseUrl + this.add, data);
    }
    deleteCart(id) {
        return this.http.delete(this.baseUrl + this.delete.replace('{id}', id));
    }
    getCart() {
        return this.http.get(this.baseUrl + this.getAll).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            console.log(res);
            let data = res['data'];
            data = data.map((v) => {
                console.log(v);
                v.productId.imageUrls = this.utilityService.getImageUrl(v.productId.images);
                return v;
            });
            return data;
        }));
    }
    saveOrder(data) {
        return this.http.post(this.placeOrder, data);
    }
    userCartClear(id) {
        return this.http.delete(this.clearCart + id);
    }
};
CartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] }
];
CartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], CartService);



/***/ }),

/***/ "v3kf":
/*!*************************************!*\
  !*** ./src/app/signup/dog-breed.ts ***!
  \*************************************/
/*! exports provided: dog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dog", function() { return dog; });
var dog = [
    'Labrador Retriever',
    'English Cocker Spaniel',
    'English Springer Spaniel',
    'German Shepherd',
    'Staffordshire Bull Terrier',
    'Cavalier King Charles Spaniel',
    'Golden Retriever',
    'West Highland White Terrier',
    'Boxer',
    'Border Terrier',
    'Rottweiler',
    'Shih Tzu',
    'Miniature Schnauzer',
    'Lhasa Apso',
    'Yorkshire Terrier',
    'Bulldog',
    'Dobermann Pinscher',
    'Bull Terrier',
    'Weimaraner',
    'Pug',
    'Whippet',
    'Border Collie',
    'Siberian Husky',
    'Shar-Pei',
    'Dalmatian',
    'Great Dane',
    'Cairn Terrier',
    'Beagle',
];


/***/ }),

/***/ "z9Ho":
/*!*************************************!*\
  !*** ./src/app/signup/cat-breed.ts ***!
  \*************************************/
/*! exports provided: cat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cat", function() { return cat; });
var cat = [
    'Abyssinian',
    'American Shorthair',
    'Balinese',
    'Bengal',
    'Birman',
    'Bombay',
    'British Shorthair',
    'Devon Rex',
    'European Burmese',
    'Exotic',
    'Maine Coon Cat',
    'Manx',
    'Oriental',
    'Persian',
    'Ragdoll',
    'Siamese',
    'Siberian',
    'Scottish Fold',
    'Sphynx',
    'Turkish Angora',
];


/***/ })

}]);
//# sourceMappingURL=common.js.map