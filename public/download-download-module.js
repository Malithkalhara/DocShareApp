(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["download-download-module"],{

/***/ "./src/app/download/download.module.ts":
/*!*********************************************!*\
  !*** ./src/app/download/download.module.ts ***!
  \*********************************************/
/*! exports provided: DownloadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadPageModule", function() { return DownloadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _grd_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../grd-filter.pipe */ "./src/app/grd-filter.pipe.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _download_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./download.page */ "./src/app/download/download.page.ts");








var routes = [
    {
        path: '',
        component: _download_page__WEBPACK_IMPORTED_MODULE_7__["DownloadPage"]
    }
];
var DownloadPageModule = /** @class */ (function () {
    function DownloadPageModule() {
    }
    DownloadPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_download_page__WEBPACK_IMPORTED_MODULE_7__["DownloadPage"], _grd_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["GrdFilterPipe"]]
        })
    ], DownloadPageModule);
    return DownloadPageModule;
}());



/***/ }),

/***/ "./src/app/download/download.page.html":
/*!*********************************************!*\
  !*** ./src/app/download/download.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>download</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar [(ngModel)]=\"searchText\"></ion-searchbar>\n  \n  <div>\n    <ion-card *ngFor=\"let file of allUploads | grdFilter: { title:searchText,subject:searchText,code:searchText};\">\n      <ion-card-header>\n        <ion-card-title>{{file.title}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <div >\n          <ion-button type=\"ngSubmit\" (click)=\"download(file.content)\" size=\"small\" >download</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/download/download.page.scss":
/*!*********************************************!*\
  !*** ./src/app/download/download.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rvd25sb2FkL2Rvd25sb2FkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/download/download.page.ts":
/*!*******************************************!*\
  !*** ./src/app/download/download.page.ts ***!
  \*******************************************/
/*! exports provided: DownloadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadPage", function() { return DownloadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/file.service */ "./src/app/services/file.service.ts");



var DownloadPage = /** @class */ (function () {
    function DownloadPage(fileservice) {
        this.fileservice = fileservice;
    }
    DownloadPage.prototype.ngOnInit = function () {
        var _this = this;
        this.fileservice.getUploads().subscribe(function (data) {
            if (data['status'] == 200) {
                _this.allUploads = data['data'];
                console.log(data['data']);
            }
            else {
                console.log(data);
            }
        });
    };
    DownloadPage.prototype.download = function (content) {
        console.log(content);
        var link = document.createElement('a');
        link.href = 'http://localhost:3000/api/file/download/' + content.fileId;
        link.download = content.fileName;
        link.click();
    };
    DownloadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-download',
            template: __webpack_require__(/*! ./download.page.html */ "./src/app/download/download.page.html"),
            styles: [__webpack_require__(/*! ./download.page.scss */ "./src/app/download/download.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"]])
    ], DownloadPage);
    return DownloadPage;
}());



/***/ }),

/***/ "./src/app/grd-filter.pipe.ts":
/*!************************************!*\
  !*** ./src/app/grd-filter.pipe.ts ***!
  \************************************/
/*! exports provided: GrdFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrdFilterPipe", function() { return GrdFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GrdFilterPipe = /** @class */ (function () {
    function GrdFilterPipe() {
    }
    GrdFilterPipe.prototype.transform = function (items, filter, defaultFilter) {
        if (!filter) {
            return items;
        }
        if (!Array.isArray(items)) {
            return items;
        }
        if (filter && Array.isArray(items)) {
            var filterKeys_1 = Object.keys(filter);
            if (defaultFilter) {
                return items.filter(function (item) {
                    return filterKeys_1.reduce(function (x, keyName) {
                        return (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "";
                    }, true);
                });
            }
            else {
                return items.filter(function (item) {
                    return filterKeys_1.some(function (keyName) {
                        return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
                    });
                });
            }
        }
    };
    GrdFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'grdFilter'
        })
    ], GrdFilterPipe);
    return GrdFilterPipe;
}());



/***/ })

}]);
//# sourceMappingURL=download-download-module.js.map