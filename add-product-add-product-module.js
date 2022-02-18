(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-product-add-product-module"],{

/***/ "7py5":
/*!*************************************************!*\
  !*** ./src/app/add-product/add-product.page.ts ***!
  \*************************************************/
/*! exports provided: AddProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductPage", function() { return AddProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_product_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-product.page.html */ "SDL9");
/* harmony import */ var _add_product_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-product.page.scss */ "LZri");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_market_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/market.service */ "rAh5");
/* harmony import */ var _core_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/utility.service */ "ZtwD");








let AddProductPage = class AddProductPage {
    constructor(marketService, sanitizer, utility, activeRoute) {
        this.marketService = marketService;
        this.sanitizer = sanitizer;
        this.utility = utility;
        this.activeRoute = activeRoute;
        this.model = {
            name: '',
            price: '',
            description: '',
            productType: '',
            categoryId: '',
            petType: '',
            quantity: '',
            image: [],
        };
        this.userModel = {
            sellerName: '',
            email: '',
            address: '',
            contact: '',
        };
        this.file = null;
        this.pageLabel = 'Add Product';
        this.previewImages = [];
        this.btnName = 'Save';
        this.id = null;
    }
    ngOnInit() {
        this.getParams();
        this.getUserDetail();
        this.getCategories();
        this.getPetType();
    }
    getUserDetail() {
        const user = JSON.parse(this.utility.getLocal('userObj'));
        const { firstname, lastname, address, email, contact } = user;
        this.userModel.sellerName = firstname + ' ' + lastname;
        this.userModel.email = email;
        this.userModel.address = address;
        this.userModel.contact = contact;
    }
    getCategories() {
        this.marketService.getCategories().subscribe((res) => {
            console.log(res);
            this.categories = res;
        });
    }
    getPetType() {
        this.marketService.getPetType().subscribe((res) => {
            console.log(res);
            this.petTypes = res;
        });
    }
    handleFile(e) {
        console.log(e.target.files);
        this.file = e.target.files;
        const fileArray = Array.from(this.file);
        console.log(fileArray.length);
        const checkLength = fileArray.length + this.previewImages.length;
        if (checkLength > 4) {
            this.utility.showAlert('Max 4 images can be selected');
            return;
        }
        fileArray.forEach((v) => {
            this.previewImages.push(this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(v)));
        });
        // console.log(this.previewImage);
    }
    removeImage(index) {
        console.log(index, 'working');
        this.previewImages.splice(index, 1);
        if (this.file) {
            Array.from(this.file).splice(index, 1);
        }
        this.model.image.splice(index, 1);
        // this.previewImage = '';
        // this.model.image = '';
    }
    save(form) {
        console.log(this.model, this.file);
        if (form.status.toLowerCase() === 'invalid') {
            return;
        }
        if (this.previewImages.length === 0) {
            return this.utility.showAlert('Atlease one image is required');
        }
        this.utility.present();
        const fd = new FormData();
        console.log(this.model.image);
        fd.append('name', this.model.name);
        fd.append('petTypeId', this.model.petType);
        fd.append('productType', this.model.productType);
        fd.append('categoryId', this.model.categoryId);
        fd.append('description', this.model.description);
        fd.append('price', this.model.price);
        fd.append('quantity', this.model.quantity);
        fd.append('sellerInfo', JSON.stringify(this.userModel));
        if (this.id == null) {
            Array.from(this.file).forEach((v) => {
                fd.append('images', v);
            });
            this.marketService.productAdd(fd).subscribe((res) => {
                console.log(res);
                this.utility.dismiss();
                this.utility.navigateRoot('tabs/my-products');
            }, (err) => {
                console.log(err);
                this.utility.dismiss();
                this.utility.showAlert('Something went wrong!');
            });
        }
        else {
            console.log(this.id, 'id of item', typeof this.model.image);
            fd.append('images', JSON.stringify(this.model.image));
            if (this.file != null) {
                Array.from(this.file).forEach((v) => {
                    fd.append('images', v);
                });
            }
            this.marketService.productUpdate(this.id, fd).subscribe((res) => {
                console.log(res);
                this.utility.dismiss();
                this.utility.navigateRoot('/tabs/my-products');
            }, (err) => {
                console.log(err);
                this.utility.dismiss();
                this.utility.showAlert('Something went wrong!');
            });
        }
    }
    getSinglePet(id) {
        this.utility.present();
        this.marketService.getProductSingle(id).subscribe((res) => {
            console.log(res);
            const { name, price, description, productType, petTypeId, images, categoryId, imageUrls, sellerInfo, quantity, } = res;
            this.model.name = name;
            this.model.price = price;
            this.model.description = description;
            this.model.productType = productType;
            this.model.petType = petTypeId;
            this.model.categoryId = categoryId;
            this.model.quantity = quantity;
            this.model.image = JSON.parse(images);
            this.userModel = JSON.parse(sellerInfo);
            this.previewImages = imageUrls;
            console.log(this.model);
            this.utility.dismiss();
            // this.model = res;
        });
    }
    getParams() {
        this.activeRoute.params.subscribe((res) => {
            const id = res['id'];
            if (id !== undefined && id !== null) {
                this.getSinglePet(id);
                this.btnName = 'Update';
                this.pageLabel = 'Update Product';
                this.id = id;
            }
        });
    }
    goBack() {
        this.utility.goBack();
    }
    deletePet() {
        this.utility.confirmationAlert((cb) => {
            if (cb) {
                this.marketService.productDelete(this.id).subscribe((res) => {
                    console.log(res);
                    this.utility.navigateRoot('tabs/my-products');
                });
            }
        });
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.model = {
            name: '',
            price: '',
            description: '',
            productType: '',
            categoryId: '',
            petType: '',
            quantity: '',
            image: [],
        };
    }
};
AddProductPage.ctorParameters = () => [
    { type: _core_market_service__WEBPACK_IMPORTED_MODULE_6__["MarketService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _core_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
AddProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-product',
        template: _raw_loader_add_product_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_product_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddProductPage);



/***/ }),

/***/ "LZri":
/*!***************************************************!*\
  !*** ./src/app/add-product/add-product.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .edit-c {\n  display: block;\n  text-align: right;\n  margin: 15px 0 15px;\n}\n\nion-content .edit-c .icon-rig {\n  width: 35px;\n  height: 35px;\n  background: #bfbfbf;\n  display: inline-block;\n  text-align: center;\n  line-height: 37px;\n  color: #fff;\n  border-radius: 50%;\n  margin-right: 5px;\n  font-size: 16px;\n}\n\nion-content ion-item.inpt-f {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  padding: 0px;\n  margin-bottom: 15px;\n}\n\nion-content ion-item.inpt-f ion-label {\n  font-size: 13.67px;\n  color: rgba(0, 0, 0, 0.55);\n  font-weight: 700;\n  margin-top: 0px;\n  height: 16px;\n  max-height: 16px;\n}\n\nion-content ion-item.inpt-f ion-input,\nion-content ion-item.inpt-f ion-select {\n  border-bottom: 1px solid rgba(80, 160, 157, 0.3);\n  --padding-start: 0px;\n  --padding-top: 0px;\n  height: 33px;\n  --height: 33px;\n  max-height: 33px;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: \"Lato\", sans-serif !important;\n  color: rgba(0, 0, 0, 0.65);\n  --padding-end: 0px;\n}\n\nion-content ion-item.inpt-f ion-select {\n  --padding-end: 10px;\n}\n\nion-content ion-item.inpt-f label.uplos-imgs {\n  display: block;\n  border: 2px dashed #616161;\n  width: 100%;\n  text-align: center;\n  padding: 30px 0;\n  border-radius: 4px;\n  font-size: 13px;\n  color: #949494;\n  font-weight: 600;\n}\n\nion-content .marg-nsg {\n  margin: 0 -5px;\n}\n\nion-content h4.cnter-ttl {\n  margin-top: -7px;\n  margin-bottom: 15px;\n  font-size: 17px;\n  color: #828282;\n  font-weight: bold;\n}\n\nion-content .bt-trs {\n  display: block;\n  margin-top: -7px;\n}\n\nion-content .bt-trs ion-button.btn-save {\n  background: #bfbfbf;\n  --background: #bfbfbf;\n  border-radius: 50px;\n  color: #fff;\n  --padding-start: 35px;\n  box-shadow: none;\n  --box-shadow: none;\n  --padding-end: 35px;\n  height: 38px;\n  text-transform: capitalize;\n  font-size: 17px;\n  margin-right: 7px;\n}\n\nion-content .bt-trs ion-button.btn-cancl {\n  border-radius: 50px;\n  color: #8d8d8d;\n  --padding-start: 30px;\n  box-shadow: none;\n  --box-shadow: none;\n  --padding-end: 30px;\n  height: 38px;\n  text-transform: capitalize;\n  font-size: 17px;\n  border-color: #8d8d8d;\n  --border-color: #8d8d8d;\n}\n\nion-content .previewImage {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  padding: 10px;\n}\n\nion-content .image-container {\n  position: relative;\n}\n\nion-content .image-container .remove-icon {\n  position: absolute;\n  right: 0px;\n}\n\nion-content .image-container .remove-icon ion-icon {\n  font-size: 22px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkZC1wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQXZCOztBQUpBO0VBTU0sV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtBQUVyQjs7QUFqQkE7RUFtQkksb0JBQWdCO0VBQ2hCLGtCQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtBQUV2Qjs7QUF4QkE7RUF3Qk0sa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7QUFJdEI7O0FBakNBOztFQWtDTSxnREFBZ0Q7RUFDaEQsb0JBQWdCO0VBQ2hCLGtCQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsMEJBQTBCO0VBQzFCLGtCQUFjO0FBSXBCOztBQWhEQTtFQStDTSxtQkFBYztBQUtwQjs7QUFwREE7RUFrRE0sY0FBYztFQUNkLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFNdEI7O0FBaEVBO0VBOERJLGNBQWM7QUFNbEI7O0FBcEVBO0VBaUVJLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7QUFPckI7O0FBNUVBO0VBd0VJLGNBQWM7RUFDZCxnQkFBZ0I7QUFRcEI7O0FBakZBO0VBMkVNLG1CQUFtQjtFQUNuQixxQkFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gscUJBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBYTtFQUNiLG1CQUFjO0VBQ2QsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsaUJBQWlCO0FBVXZCOztBQWhHQTtFQXlGTSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHFCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWE7RUFDYixtQkFBYztFQUNkLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQix1QkFBZTtBQVdyQjs7QUE5R0E7RUF1R0ksYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtBQVdqQjs7QUFySEE7RUE2R0ksa0JBQWtCO0FBWXRCOztBQXpIQTtFQStHTSxrQkFBa0I7RUFDbEIsVUFBVTtBQWNoQjs7QUE5SEE7RUFrSFEsZUFBZTtBQWdCdkIiLCJmaWxlIjoiYWRkLXByb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC5lZGl0LWMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbjogMTVweCAwIDE1cHg7XHJcbiAgICAuaWNvbi1yaWcge1xyXG4gICAgICB3aWR0aDogMzVweDtcclxuICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1pdGVtLmlucHQtZiB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDEzLjY3cHg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgbWF4LWhlaWdodDogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taW5wdXQsXHJcbiAgICBpb24tc2VsZWN0IHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoODAsIDE2MCwgMTU3LCAwLjMpO1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMzcHg7XHJcbiAgICAgIC0taGVpZ2h0OiAzM3B4O1xyXG4gICAgICBtYXgtaGVpZ2h0OiAzM3B4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLXNlbGVjdCB7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBsYWJlbC51cGxvcy1pbWdzIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjNjE2MTYxO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBjb2xvcjogIzk0OTQ5NDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbiAgLm1hcmctbnNnIHtcclxuICAgIG1hcmdpbjogMCAtNXB4O1xyXG4gIH1cclxuICBoNC5jbnRlci10dGwge1xyXG4gICAgbWFyZ2luLXRvcDogLTdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogIzgyODI4MjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuYnQtdHJzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogLTdweDtcclxuICAgIGlvbi1idXR0b24uYnRuLXNhdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjYmZiZmJmO1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICNiZmJmYmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDM1cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMzVweDtcclxuICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIH1cclxuICAgIGlvbi1idXR0b24uYnRuLWNhbmNsIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgY29sb3I6ICM4ZDhkOGQ7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMzBweDtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzhkOGQ4ZDtcclxuICAgICAgLS1ib3JkZXItY29sb3I6ICM4ZDhkOGQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wcmV2aWV3SW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLnJlbW92ZS1pY29uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMHB4O1xyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "SDL9":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>add-product</ion-title>\r\n  </ion-toolbar>\r\n</ion-header-->\r\n\r\n<ion-content>\r\n  <app-header [pageName]=\"pageLabel\"></app-header>\r\n\r\n  <div class=\"bottm-conts\">\r\n    <!-- <h4 class=\"ttl-tp\">{{pageLabel}}</h4> -->\r\n    <!-- <div class=\"edit-c\">\r\n      <a href=\"javascript:void(0)\" class=\"icon-rig\">\r\n        <ion-icon name=\"pencil-sharp\"></ion-icon>\r\n      </a>\r\n    </div> -->\r\n    <form #productForm=\"ngForm\" (ngSubmit)=\"save(productForm)\">\r\n      <div class=\"form-botm\">\r\n        <ion-item lines=\"none\" class=\"inpt-f\">\r\n          <ion-label position=\"stacked\">Product Name</ion-label>\r\n          <ion-input\r\n            placeholder=\"\"\r\n            [(ngModel)]=\"model.name\"\r\n            name=\"name\"\r\n            required\r\n            #name=\"ngModel\"\r\n          ></ion-input>\r\n          <span\r\n            class=\"text-danger\"\r\n            *ngIf=\"(name.touched || productForm.submitted) && name.errors?.required\"\r\n          >\r\n            Name is required\r\n          </span>\r\n        </ion-item>\r\n        <ion-row class=\"marg-nsg\">\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\">Category</ion-label>\r\n              <ion-select\r\n                [(ngModel)]=\"model.categoryId\"\r\n                name=\"categoryId\"\r\n                required\r\n                #categoryId=\"ngModel\"\r\n              >\r\n                <ion-select-option [value]=\"c._id\" *ngFor=\"let c of categories\"\r\n                  >{{c.name | titlecase}}</ion-select-option\r\n                >\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\">Price</ion-label>\r\n              <ion-input\r\n                placeholder=\"\"\r\n                [(ngModel)]=\"model.price\"\r\n                name=\"price\"\r\n                #price=\"ngModel\"\r\n                pattern=\"[0-9]+\"\r\n              ></ion-input>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"(price.touched || productForm.submitted) && price.errors?.required\"\r\n              >\r\n                Price is required\r\n              </span>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"(price.touched || productForm.submitted) && price.errors?.pattern\"\r\n              >\r\n                Price should be in number\r\n              </span>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"marg-nsg\">\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\">Product Type</ion-label>\r\n              <ion-select\r\n                [(ngModel)]=\"model.productType\"\r\n                name=\"productType\"\r\n                #productType=\"ngModel\"\r\n              >\r\n                <ion-select-option value=\"kibbleDry\"\r\n                  >Kibble/Dry</ion-select-option\r\n                >\r\n                <ion-select-option value=\"canned\">Canned</ion-select-option>\r\n                <ion-select-option value=\"semiMoist\"\r\n                  >Semi-Moist</ion-select-option\r\n                >\r\n                <ion-select-option value=\"homeCooked\"\r\n                  >Home Cooked</ion-select-option\r\n                >\r\n              </ion-select>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"(productType.touched || productForm.submitted) && productType.errors?.required\"\r\n              >\r\n                Product Type is required\r\n              </span>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\">Pet Type</ion-label>\r\n              <ion-select\r\n                [(ngModel)]=\"model.petType\"\r\n                name=\"petType\"\r\n                #petType=\"ngModel\"\r\n              >\r\n                <ion-select-option [value]=\"p._id\" *ngFor=\"let p of petTypes\"\r\n                  >{{p.name |titlecase}}</ion-select-option\r\n                >\r\n              </ion-select>\r\n              <span\r\n                class=\"text-danger\"\r\n                *ngIf=\"(petType.touched || productForm.submitted) && petType.errors?.required\"\r\n              >\r\n                Pet Type is required\r\n              </span>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-item lines=\"none\" class=\"inpt-f\">\r\n          <ion-label position=\"stacked\">Quantity</ion-label>\r\n          <ion-input\r\n            placeholder=\"\"\r\n            [(ngModel)]=\"model.quantity\"\r\n            name=\"quantity\"\r\n            #quantity=\"ngModel\"\r\n            pattern=\"[0-9]+\"\r\n          ></ion-input>\r\n          <span\r\n            class=\"text-danger\"\r\n            *ngIf=\"(quantity.touched || productForm.submitted) && quantity.errors?.required\"\r\n          >\r\n            Quantity is required\r\n          </span>\r\n          <span\r\n            class=\"text-danger\"\r\n            *ngIf=\"(quantity.touched || productForm.submitted) && quantity.errors?.pattern\"\r\n          >\r\n            Quantity should be in number\r\n          </span>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"inpt-f\">\r\n          <ion-label position=\"stacked\">Description</ion-label>\r\n          <ion-input\r\n            placeholder=\"\"\r\n            [(ngModel)]=\"model.description\"\r\n            name=\"description\"\r\n            #description=\"ngModel\"\r\n          ></ion-input>\r\n          <span\r\n            class=\"text-danger\"\r\n            *ngIf=\"(description.touched || productForm.submitted) && description.errors?.required\"\r\n          >\r\n            Description is required\r\n          </span>\r\n        </ion-item>\r\n        <ion-row class=\"marg-nsg\">\r\n          <ion-col size=\"12\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\">Image</ion-label>\r\n              <label for=\"uplos-ff\" class=\"uplos-imgs\">\r\n                Upload Image Here\r\n                <input\r\n                  type=\"file\"\r\n                  (change)=\"handleFile($event)\"\r\n                  id=\"uplos-ff\"\r\n                  accept=\"image/*\"\r\n                  multiple\r\n                  style=\"display: none\"\r\n                />\r\n              </label>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <span\r\n                class=\"image-container\"\r\n                *ngFor=\"let p of previewImages;let i = index\"\r\n              >\r\n                <img [src]=\"p\" alt=\"\" class=\"previewImage\" />\r\n                <span class=\"remove-icon\">\r\n                  <ion-icon\r\n                    (click)=\"removeImage(i)\"\r\n                    name=\"close-circle-outline\"\r\n                  ></ion-icon>\r\n                </span>\r\n              </span>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <h4 class=\"cnter-ttl\">Seller Information</h4>\r\n        <ion-row class=\"marg-nsg\">\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\">Name</ion-label>\r\n              <ion-input\r\n                placeholder=\"\"\r\n                [(ngModel)]=\"userModel.sellerName\"\r\n                name=\"sellerName\"\r\n              ></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\">Phone Number</ion-label>\r\n              <ion-input\r\n                placeholder=\"\"\r\n                [(ngModel)]=\"userModel.contact\"\r\n                name=\"contact\"\r\n              ></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"marg-nsg\">\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\">Email</ion-label>\r\n              <ion-input\r\n                placeholder=\"\"\r\n                [(ngModel)]=\"userModel.email\"\r\n                name=\"email\"\r\n              ></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"inpt-f\">\r\n              <ion-label position=\"stacked\">Address</ion-label>\r\n              <ion-input\r\n                placeholder=\"\"\r\n                [(ngModel)]=\"userModel.address\"\r\n                name=\"address\"\r\n              ></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div class=\"bt-trs\">\r\n          <ion-button shape=\"round\" class=\"btn-save\" type=\"submit\"\r\n            >{{btnName}}</ion-button\r\n          >\r\n          <ion-button\r\n            shape=\"round\"\r\n            fill=\"outline\"\r\n            class=\"btn-cancl\"\r\n            (click)=\"goBack()\"\r\n            >Cancel</ion-button\r\n          >\r\n          <ion-button\r\n            *ngIf=\"id != null\"\r\n            shape=\"round\"\r\n            fill=\"outline\"\r\n            class=\"btn-cancl\"\r\n            (click)=\"deletePet()\"\r\n          >\r\n            <ion-icon name=\"trash-outline\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "aRnh":
/*!***********************************************************!*\
  !*** ./src/app/add-product/add-product-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddProductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductPageRoutingModule", function() { return AddProductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-product.page */ "7py5");




const routes = [
    {
        path: '',
        component: _add_product_page__WEBPACK_IMPORTED_MODULE_3__["AddProductPage"],
    },
    {
        path: ':id',
        component: _add_product_page__WEBPACK_IMPORTED_MODULE_3__["AddProductPage"],
    },
];
let AddProductPageRoutingModule = class AddProductPageRoutingModule {
};
AddProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddProductPageRoutingModule);



/***/ }),

/***/ "gp+k":
/*!***************************************************!*\
  !*** ./src/app/add-product/add-product.module.ts ***!
  \***************************************************/
/*! exports provided: AddProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductPageModule", function() { return AddProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-product-routing.module */ "aRnh");
/* harmony import */ var _add_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-product.page */ "7py5");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");








let AddProductPageModule = class AddProductPageModule {
};
AddProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddProductPageRoutingModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_add_product_page__WEBPACK_IMPORTED_MODULE_6__["AddProductPage"]],
    })
], AddProductPageModule);



/***/ })

}]);
//# sourceMappingURL=add-product-add-product-module.js.map