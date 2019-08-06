(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-upload-module"],{

/***/ "./src/app/upload/upload.module.ts":
/*!*****************************************!*\
  !*** ./src/app/upload/upload.module.ts ***!
  \*****************************************/
/*! exports provided: UploadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPageModule", function() { return UploadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _upload_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload.page */ "./src/app/upload/upload.page.ts");







var routes = [
    {
        path: '',
        component: _upload_page__WEBPACK_IMPORTED_MODULE_6__["UploadPage"]
    }
];
var UploadPageModule = /** @class */ (function () {
    function UploadPageModule() {
    }
    UploadPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_upload_page__WEBPACK_IMPORTED_MODULE_6__["UploadPage"]]
        })
    ], UploadPageModule);
    return UploadPageModule;
}());



/***/ }),

/***/ "./src/app/upload/upload.page.html":
/*!*****************************************!*\
  !*** ./src/app/upload/upload.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>upload</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <p style=\"font-size:30px;font-weight:bold\">Document Upload</p>\n  <form >\n    <ion-item>\n      <ion-input type=\"text\" id=\"title\" name=\"title\" [(ngModel)]=\"model.title\" placeholder=\"Course Title\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type=\"text\" id=\"year\" name=\"year\" [(ngModel)]=\"model.code\" placeholder=\"Course code\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type=\"text\" id=\"subject\" name=\"subject\" [(ngModel)]=\"model.subject\" placeholder=\"Subject\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type=\"text\" id=\"year\" name=\"year\" [(ngModel)]=\"model.year\" placeholder=\"Year\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Category</ion-label>\n      <ion-select id=\"notetype\" name=\"notetype\" [(ngModel)]=\"model.notetype\"  okText=\"Okay\" cancelText=\"Dismiss\">\n        <ion-select-option value=\"pastpaper\">pastpaper</ion-select-option>\n        <ion-select-option value=\"note\">Note</ion-select-option>\n        <ion-select-option value=\"tutorial\">Tutorial</ion-select-option>\n        <ion-select-option value=\"quiz\">Quiz</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type=\"file\" placeholder=\"Upload File\" (change)=\"onFileSelected($event)\"></ion-input>\n    </ion-item>\n    <div style=\"padding-bottom: 10px;padding-top: 20px\">\n      <ion-button size=\"medium\" type=\"ngSubmit\" expand=\"block\" (click)='onUpload()'>Upload</ion-button>\n    </div>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/upload/upload.page.scss":
/*!*****************************************!*\
  !*** ./src/app/upload/upload.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  padding-bottom: 30px; }\n\nion-content {\n  --background: url('img2.jpg') no-repeat center center / cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkL0Y6XFxNYWxpdGhcXElvbmljXFxEb2NzaGFyZVxcRnJvbnRlbmQvc3JjXFxhcHBcXHVwbG9hZFxcdXBsb2FkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFvQixFQUFBOztBQUV4QjtFQUNJLDZEQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91cGxvYWQvdXBsb2FkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pY29uL2ltZzIuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/upload/upload.page.ts":
/*!***************************************!*\
  !*** ./src/app/upload/upload.page.ts ***!
  \***************************************/
/*! exports provided: UploadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPage", function() { return UploadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UploadPage = /** @class */ (function () {
    function UploadPage(fb, router, fileservice) {
        this.fb = fb;
        this.router = router;
        this.fileservice = fileservice;
        this.selectedFiles = null;
        this.progress = null;
        this.model = {};
    }
    UploadPage.prototype.ngOnInit = function () {
    };
    UploadPage.prototype.onFileSelected = function (event) {
        console.log(event.target.files[0]);
        this.selectedFiles = event.target.files[0];
    };
    UploadPage.prototype.onUpload = function () {
        if (this.selectedFiles != null) {
            var formData = new FormData();
            formData.append('file', this.selectedFiles);
            formData.append('title', this.model.title);
            formData.append('code', this.model.code);
            formData.append('subject', this.model.subject);
            formData.append('year', this.model.year);
            formData.append('notetype', this.model.notetype);
            this.fileservice.upload(formData).subscribe(function (event) {
                console.log(event);
            });
            this.router.navigateByUrl('/download');
        }
    };
    UploadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.page.html */ "./src/app/upload/upload.page.html"),
            styles: [__webpack_require__(/*! ./upload.page.scss */ "./src/app/upload/upload.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"]])
    ], UploadPage);
    return UploadPage;
}());



/***/ })

}]);
//# sourceMappingURL=upload-upload-module.js.map