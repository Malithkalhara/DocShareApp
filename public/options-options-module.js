(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["options-options-module"],{

/***/ "./src/app/options/options.module.ts":
/*!*******************************************!*\
  !*** ./src/app/options/options.module.ts ***!
  \*******************************************/
/*! exports provided: OptionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsPageModule", function() { return OptionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _options_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options.page */ "./src/app/options/options.page.ts");







var routes = [
    {
        path: '',
        component: _options_page__WEBPACK_IMPORTED_MODULE_6__["OptionsPage"]
    }
];
var OptionsPageModule = /** @class */ (function () {
    function OptionsPageModule() {
    }
    OptionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_options_page__WEBPACK_IMPORTED_MODULE_6__["OptionsPage"]]
        })
    ], OptionsPageModule);
    return OptionsPageModule;
}());



/***/ }),

/***/ "./src/app/options/options.page.html":
/*!*******************************************!*\
  !*** ./src/app/options/options.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <ion-grid style=\"padding-top:100px; width:350px;\">\n      <ion-row justify-content-center>\n        <ion-col align-self-center size-md=\"15\">\n            <div style=\"padding-top:30px;padding-bottom: 10px\">\n                <ion-button size=\"medium\"  expand=\"block\" routerLink=\"/upload\">Upload document</ion-button>\n            </div>\n            <div style=\"padding-bottom: 10px\">\n                <ion-button size=\"medium\"  expand=\"block\" (click)=\"onCLick()\">Download document</ion-button>\n            </div>\n            <div style=\"padding-bottom: 10px\">\n                <ion-button size=\"medium\"  expand=\"block\" routerLink=\"/userprofile\">User Profile</ion-button>\n            </div>\n            <div style=\"padding-bottom: 10px\">\n                <ion-button size=\"medium\"  expand=\"block\" routerLink=\"/userprofile\">About</ion-button>\n            </div>\n            <div style=\"padding-bottom: 10px\">\n                <ion-button size=\"medium\" (click)=\"logout()\" expand=\"block\">Logout</ion-button>\n            </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/options/options.page.scss":
/*!*******************************************!*\
  !*** ./src/app/options/options.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: url('img2.jpg') no-repeat center center / cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3B0aW9ucy9GOlxcTWFsaXRoXFxJb25pY1xcRG9jc2hhcmVcXEZyb250ZW5kL3NyY1xcYXBwXFxvcHRpb25zXFxvcHRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZEQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9vcHRpb25zL29wdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pY29uL2ltZzIuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/options/options.page.ts":
/*!*****************************************!*\
  !*** ./src/app/options/options.page.ts ***!
  \*****************************************/
/*! exports provided: OptionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsPage", function() { return OptionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var OptionsPage = /** @class */ (function () {
    function OptionsPage(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    OptionsPage.prototype.ngOnInit = function () {
    };
    OptionsPage.prototype.logout = function () {
        this.auth.userLogout();
        this.router.navigate(['/home']);
    };
    OptionsPage.prototype.onCLick = function () {
        this.router.navigateByUrl('/download');
    };
    OptionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-options',
            template: __webpack_require__(/*! ./options.page.html */ "./src/app/options/options.page.html"),
            styles: [__webpack_require__(/*! ./options.page.scss */ "./src/app/options/options.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], OptionsPage);
    return OptionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=options-options-module.js.map