(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<mat-sidenav-container>\n    <mat-sidenav #sidenav mode=\"side\" [opened]=\"this.auth.isAuthenticated()\">\n        <mat-nav-list>\n            <a mat-list-item [routerLink]=\"'/home'\">\n                <div class=\"matlist-icon\">\n                    <svg class=\"Path_99\" viewBox=\"0 0 16 16\">\n                        <path fill=\"rgba(165,164,191,1)\" id=\"Path_99\" d=\"M 15.58104991912842 5.186039924621582 L 8.581049919128418 0.186039924621582 C 8.233389854431152 -0.06201007962226868 7.766599655151367 -0.06201007962226868 7.41894006729126 0.186039924621582 L 0.4189400672912598 5.186039924621582 C -0.03027993440628052 5.507329940795898 -0.1347699165344238 6.131839752197266 0.1865200698375702 6.58105993270874 C 0.506830096244812 7.031260013580322 1.132810115814209 7.133790016174316 1.581050157546997 6.81397008895874 L 2 6.514709949493408 L 2 15 C 2 15.55224990844727 2.447269916534424 16 3 16 L 13 16 C 13.55272960662842 16 14 15.55224990844727 14 15 L 14 6.514709949493408 C 14.34891033172607 6.76393985748291 14.59648036956787 7 14.99901962280273 7 C 15.31151962280273 7 15.61815929412842 6.854489803314209 15.81346988677979 6.581049919128418 C 16.13476943969727 6.131840229034424 16.03026962280273 5.507319927215576 15.58104991912842 5.186039924621582 Z M 12 14 L 10 14 L 10 11 C 10 9.895389556884766 9.104550361633301 9 8 9 C 6.895449638366699 9 6 9.895389556884766 6 11 L 6 14 L 4 14 L 4 5.086120128631592 L 8 2.229000091552734 L 12 5.086120128631592 L 12 14 Z\">\n                        </path>\n                    </svg>\n                </div>\n                <div class=\"matlist-text\">\n                    <span>Homy</span>\n                </div>\n            </a>\n\n            <a mat-list-item [routerLink]=\"'/dashboard'\">\n                <div class=\"matlist-icon\">\n                    <svg class=\"Union_8\" viewBox=\"0 0 16 16\">\n                        <path fill=\"rgba(165,164,191,1)\" id=\"Union_8\" d=\"M 13.00051879882812 16.00020217895508 C 12.40020751953125 16.00020217895508 11.99972534179688 15.60060119628906 11.99972534179688 15.00030136108398 L 11.99972534179688 6.000301361083984 C 11.99972534179688 5.400001525878906 12.40020751953125 5.000400543212891 13.00051879882812 5.000400543212891 L 15.00030517578125 5.000400543212891 C 15.59970092773438 5.000400543212891 16.00021362304688 5.400001525878906 16.00021362304688 6.000301361083984 L 16.00021362304688 15.00030136108398 C 16.00021362304688 15.60060119628906 15.59970092773438 16.00020217895508 15.00030517578125 16.00020217895508 L 13.00051879882812 16.00020217895508 Z M 7.000213623046875 16.00020217895508 C 6.39990234375 16.00020217895508 6.00030517578125 15.60060119628906 6.00030517578125 15.00030136108398 L 6.00030517578125 0.9999008178710938 C 6.00030517578125 0.4005012512207031 6.39990234375 0 7.000213623046875 0 L 9 0 C 9.600311279296875 0 9.999908447265625 0.4005012512207031 9.999908447265625 0.9999008178710938 L 9.999908447265625 15.00030136108398 C 9.999908447265625 15.60060119628906 9.600311279296875 16.00020217895508 9 16.00020217895508 L 7.000213623046875 16.00020217895508 Z M 0.999908447265625 16.00020217895508 C 0.4005126953125 16.00020217895508 0 15.60060119628906 0 15.00030136108398 L 0 11.00070095062256 C 0 10.40040111541748 0.4005126953125 9.999900817871094 0.999908447265625 9.999900817871094 L 2.99969482421875 9.999900817871094 C 3.600006103515625 9.999900817871094 4.000518798828125 10.40040111541748 4.000518798828125 11.00070095062256 L 4.000518798828125 15.00030136108398 C 4.000518798828125 15.60060119628906 3.600006103515625 16.00020217895508 2.99969482421875 16.00020217895508 L 0.999908447265625 16.00020217895508 Z\">\n                        </path>\n                    </svg>\n                </div>\n                <div class=\"matlist-text\">\n                    <span>Dashboard</span>\n                </div>\n            </a>\n\n            <a mat-list-item [routerLink]=\"'/inbox'\">\n                <div class=\"matlist-icon\">\n                    <svg class=\"Path_100\" viewBox=\"0 1 16 14\">\n                        <path fill=\"rgba(163,160,251,1)\" id=\"Path_100\" d=\"M 15 1 L 1 1 C 0.4480000138282776 1 0 1.447000026702881 0 2 L 0 14 C 0 14.55299949645996 0.4480000138282776 15 1 15 L 15 15 C 15.55200004577637 15 16 14.55300045013428 16 14 L 16 2 C 16 1.447000026702881 15.55200004577637 1 15 1 Z M 14 13 L 2 13 L 2 6.723000049591064 L 7.504000186920166 9.868000030517578 C 7.812000274658203 10.04399967193604 8.189000129699707 10.04399967193604 8.496000289916992 9.868000030517578 L 14 6.723000049591064 L 14 13 Z M 14 4.420000076293945 L 8 7.848999977111816 L 2 4.420000076293945 L 2 3 L 14 3 L 14 4.420000076293945 Z\">\n                        </path>\n                    </svg>\n                </div>\n                <div class=\"matlist-text\">\n                    <span>Inbox</span>\n                </div>\n            </a>\n\n            <a mat-list-item [routerLink]=\"'/wall'\">\n                <div class=\"matlist-icon\">\n                    <svg class=\"Union_9\" viewBox=\"0 0 15.999 15.999\">\n                        <path fill=\"rgba(165,164,191,1)\" id=\"Union_9\" d=\"M 13.9995002746582 15.99929809570312 L 13.9995002746582 0 L 15.99930000305176 0 L 15.99930000305176 15.99929809570312 L 13.9995002746582 15.99929809570312 Z M 0 15.99929809570312 L 0 0 L 1.999799966812134 0 L 1.999799966812134 15.99929809570312 L 0 15.99929809570312 Z M 10.99979972839355 10.99980163574219 L 10.99979972839355 0 L 12.99959945678711 0 L 12.99959945678711 10.99980163574219 L 10.99979972839355 10.99980163574219 Z M 5.99940013885498 10.99980163574219 L 5.99940013885498 0 L 9.999900817871094 0 L 9.999900817871094 10.99980163574219 L 5.99940013885498 10.99980163574219 Z M 2.99970006942749 10.99980163574219 L 2.99970006942749 0 L 4.999500274658203 0 L 4.999500274658203 10.99980163574219 L 2.99970006942749 10.99980163574219 Z\">\n                        </path>\n                    </svg>\n                </div>\n                <div class=\"matlist-text\">\n                    <span>Mur de la residence</span>\n                </div>\n            </a>\n\n            <a mat-list-item [routerLink]=\"'/notification'\">\n                <div class=\"matlist-icon\">\n                    <svg class=\"Path_102\" viewBox=\"1 0 14 16\">\n                        <path fill=\"rgba(165,164,191,1)\" id=\"Path_102\" d=\"M 14 0 L 2 0 C 1.399999976158142 0 1 0.4000000059604645 1 1 L 1 16 L 4 14 L 6 16 L 8 14 L 10 16 L 12 14 L 15 16 L 15 1 C 15 0.4000000059604645 14.60000038146973 0 14 0 Z M 12 10 L 4 10 L 4 8 L 12 8 L 12 10 Z M 12 6 L 4 6 L 4 4 L 12 4 L 12 6 Z\">\n                        </path>\n                    </svg>\n                </div>\n                <div class=\"matlist-text\">\n                    <span>Notification</span>\n                </div>\n            </a>\n\n            <a mat-list-item [routerLink]=\"'/profile'\">\n                <div class=\"matlist-icon\">\n                    <svg class=\"Union_10\" viewBox=\"0 0 14 16\">\n                        <path fill=\"rgba(165,164,191,1)\" id=\"Union_10\" d=\"M 0 16.00021362304688 C 0 12.69992065429688 2.700000286102295 9.999908447265625 5.99940013885498 9.999908447265625 L 7.999200344085693 9.999908447265625 C 11.29950046539307 9.999908447265625 13.9995002746582 12.69992065429688 13.9995002746582 16.00021362304688 L 0 16.00021362304688 Z M 2.599200248718262 13.99951171875 L 11.49930000305176 13.99951171875 C 10.80000019073486 12.7998046875 9.499500274658203 11.99969482421875 7.999200344085693 11.99969482421875 L 6.099300384521484 11.99969482421875 C 4.599900245666504 11.99969482421875 3.299400091171265 12.7998046875 2.599200248718262 13.99951171875 Z M 2.99970006942749 4.99951171875 L 2.99970006942749 3.999603271484375 C 2.99970006942749 1.800018310546875 4.799700260162354 0 6.999300003051758 0 C 9.199800491333008 0 10.99980068206787 1.800018310546875 10.99980068206787 3.999603271484375 L 10.99980068206787 4.99951171875 C 10.99980068206787 7.20001220703125 9.199800491333008 9 6.999300003051758 9 C 4.799700260162354 9 2.99970006942749 7.20001220703125 2.99970006942749 4.99951171875 Z M 4.999500274658203 3.999603271484375 L 4.999500274658203 4.99951171875 C 4.999500274658203 6.1002197265625 5.899500370025635 7.000213623046875 6.999300003051758 7.000213623046875 C 8.100000381469727 7.000213623046875 9 6.1002197265625 9 4.99951171875 L 9 3.999603271484375 C 9 2.899810791015625 8.100000381469727 1.99981689453125 6.999300003051758 1.99981689453125 C 5.899500370025635 1.99981689453125 4.999500274658203 2.899810791015625 4.999500274658203 3.999603271484375 Z\">\n                        </path>\n                    </svg>\n                </div>\n                <div class=\"matlist-text\">\n                    <span>Profile</span>\n                </div>\n            </a>\n\n            <a mat-list-item [routerLink]=\"'/settings'\">\n                <div class=\"matlist-icon\">\n                    <svg class=\"Path_108\" viewBox=\"0 0 16 16\">\n                        <path fill=\"rgba(165,164,191,1)\" id=\"Path_108\" d=\"M 13.30000019073486 5.199999809265137 L 14.40000057220459 3.099999904632568 L 13.00000095367432 1.699999928474426 L 10.90000152587891 2.799999952316284 C 10.60000133514404 2.599999904632568 10.20000171661377 2.5 9.80000114440918 2.399999856948853 L 9 0 L 7 0 L 6.199999809265137 2.299999952316284 C 5.900000095367432 2.400000095367432 5.5 2.5 5.199999809265137 2.700000047683716 L 3.099999904632568 1.600000023841858 L 1.600000023841858 3.099999904632568 L 2.700000047683716 5.199999809265137 C 2.5 5.5 2.400000095367432 5.900000095367432 2.299999952316284 6.199999809265137 L 0 7 L 0 9 L 2.299999952316284 9.800000190734863 C 2.399999856948853 10.19999980926514 2.599999904632568 10.5 2.700000047683716 10.90000057220459 L 1.600000023841858 13 L 3 14.39999961853027 L 5.099999904632568 13.29999923706055 C 5.400000095367432 13.49999904632568 5.799999713897705 13.59999942779541 6.199999809265137 13.69999885559082 L 7 16 L 9 16 L 9.800000190734863 13.69999980926514 C 10.19999980926514 13.59999942779541 10.5 13.39999961853027 10.90000057220459 13.30000019073486 L 13 14.40000057220459 L 14.39999961853027 13.00000095367432 L 13.29999923706055 10.90000152587891 C 13.49999904632568 10.60000133514404 13.59999942779541 10.20000171661377 13.69999885559082 9.80000114440918 L 16 9 L 16 7 L 13.69999980926514 6.199999809265137 C 13.60000038146973 5.900000095367432 13.5 5.5 13.30000019073486 5.199999809265137 Z M 8 11 C 6.300000190734863 11 5 9.699999809265137 5 8 C 5 6.300000190734863 6.300000190734863 5 8 5 C 9.699999809265137 5 11 6.300000190734863 11 8 C 11 9.699999809265137 9.699999809265137 11 8 11 Z\">\n                        </path>\n                    </svg>\n                </div>\n                <div class=\"matlist-text\">\n                    <span>Settings</span>\n                </div>\n            </a>\n\n            <a mat-list-item (click)=\"logout()\">Deconnection</a>\n\n        </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n        <div>\n            <router-outlet></router-outlet>\n        </div>\n    </mat-sidenav-content>\n</mat-sidenav-container>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>home works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/inbox.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/inbox.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n    <img src=\"assets/images/inbox/header.png\" />\n</div>\n<!-- <table>\n    <tr>\n        <td>\n            <img src=\"assets/images/inbox/pub1photo.png\" />        \n        </td>\n        <td>\n            <img src=\"assets/images/inbox/pub1content.png\" />            \n        </td>\n    </tr>\n\n    <tr>\n        <td>\n            <img src=\"assets/images/inbox/pub2photo.png\" />        \n        </td>\n        <td>\n            <img src=\"assets/images/inbox/pub2content.png\" />    \n        </td>\n    </tr>\n</table>     -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form class=\"login-form\">\n  <img srcset=\"assets/images/unknownuser.png 245w, assets/images/unknownuser@2x.png 490w\"\n       sizes=\"(max-width: 245px) 228px, (max-width: 490px) 456px\"\n       src=\"assets/images/unknownuser.png\" />\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\">\n    </mat-form-field>\n  \n    <mat-form-field class=\"full-width\">\n      <input matInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\">\n    </mat-form-field>\n\n    <button mat-flat-button (click)=\"onLoginBtnClicked()\">Connection</button>\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
            /* harmony import */ var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inbox/inbox.component */ "./src/app/inbox/inbox.component.ts");
            var routes = [
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
                { path: 'inbox', component: _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_6__["InboxComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
                { path: '', redirectTo: '/login', pathMatch: 'full' }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: false })],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("mat-sidenav {\n  background-color: #43425d;\n}\n\nmat-sidenav-container {\n  height: 100vh;\n  width: 100%;\n}\n\nmat-nav-list a {\n  width: 10%;\n}\n\n.matlist-icon {\n  float: left;\n  width: 25%;\n}\n\n.matlist-text {\n  float: left;\n  width: 75%;\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWxlaC9Eb2N1bWVudHMvcHJvcHJpby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjcsNjYsOTMsMSk7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxubWF0LW5hdi1saXN0IGEge1xuICAgIHdpZHRoOiAxMCU7XG59XG5cbi5tYXRsaXN0LWljb24ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAyNSU7XG59XG5cbi5tYXRsaXN0LXRleHQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA3NSU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufSIsIm1hdC1zaWRlbmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNDI1ZDtcbn1cblxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1uYXYtbGlzdCBhIHtcbiAgd2lkdGg6IDEwJTtcbn1cblxuLm1hdGxpc3QtaWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjUlO1xufVxuXG4ubWF0bGlzdC10ZXh0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA3NSU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(cookieService, auth, router) {
                    this.cookieService = cookieService;
                    this.auth = auth;
                    this.router = router;
                    this.title = 'proprio';
                }
                AppComponent.prototype.logout = function () {
                    console.log(this.cookieService.get('proprio-logged-in'));
                    this.cookieService.set('proprio-logged-in', '0');
                    this.router.navigateByUrl('/login');
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
            /* harmony import */ var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./inbox/inbox.component */ "./src/app/inbox/inbox.component.ts");
            /* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                        _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_13__["InboxComponent"]
                    ],
                    imports: [
                        _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebase),
                        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"],
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"]
                    ],
                    providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__["CookieService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/auth-guard.service.ts": 
        /*!***************************************!*\
          !*** ./src/app/auth-guard.service.ts ***!
          \***************************************/
        /*! exports provided: AuthGuardService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () { return AuthGuardService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AuthGuardService = /** @class */ (function () {
                function AuthGuardService(auth, router) {
                    this.auth = auth;
                    this.router = router;
                }
                AuthGuardService.prototype.canActivate = function () {
                    if (!this.auth.isAuthenticated()) {
                        return this.router.parseUrl('/login');
                    }
                    return true;
                };
                return AuthGuardService;
            }());
            AuthGuardService.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuardService);
            /***/ 
        }),
        /***/ "./src/app/auth.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/auth.service.ts ***!
          \*********************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
            var AuthService = /** @class */ (function () {
                function AuthService(cookieService) {
                    this.cookieService = cookieService;
                }
                AuthService.prototype.isAuthenticated = function () {
                    var token = this.cookieService.get('proprio-logged-in');
                    // Check whether the token is expired and return
                    // true or false
                    return (token === '1');
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/home/home.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/inbox/inbox.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/inbox/inbox.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 75%;\n  padding: 10px 5px 0px 30px;\n}\n\n.header {\n  width: 75%;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWxlaC9Eb2N1bWVudHMvcHJvcHJpby9zcmMvYXBwL2luYm94L2luYm94LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbmJveC9pbmJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9pbmJveC9pbmJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIHBhZGRpbmc6IDEwcHggNXB4IDBweCAzMHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgIFxufVxuXG4vLyAuaGVhZGVyIGltZyB7XG4vLyAgICAgaGVpZ2h0OiBhdXRvO1xuLy8gICAgIHdpZHRoOiA3MCU7XG4vLyB9XG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiA3NSU7XG4gIHBhZGRpbmc6IDEwcHggNXB4IDBweCAzMHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgd2lkdGg6IDc1JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/inbox/inbox.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/inbox/inbox.component.ts ***!
          \******************************************/
        /*! exports provided: InboxComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxComponent", function () { return InboxComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var InboxComponent = /** @class */ (function () {
                function InboxComponent() {
                }
                InboxComponent.prototype.ngOnInit = function () {
                };
                return InboxComponent;
            }());
            InboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-inbox',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inbox.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/inbox.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inbox.component.scss */ "./src/app/inbox/inbox.component.scss")).default]
                })
            ], InboxComponent);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/login/login.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".login-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.login-form img {\n  width: 30%;\n  height: 30%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.login-form button {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  transform: scale(1.5);\n}\n\n.full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWxlaC9Eb2N1bWVudHMvcHJvcHJpby9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxnQ0FBQTtBQ0NKOztBREVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICBcbi5sb2dpbi1mb3JtIGltZyB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMzAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmxvZ2luLWZvcm0gYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufSIsIi5sb2dpbi1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubG9naW4tZm9ybSBpbWcge1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDMwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5sb2dpbi1mb3JtIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(cookieService, router, db) {
                    this.cookieService = cookieService;
                    this.router = router;
                    this.db = db;
                    this.username = "";
                    this.password = "";
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.onLoginBtnClicked = function () {
                    var _this = this;
                    var users = this.db.collection('/users').valueChanges().subscribe(function (u) {
                        var user = u.filter(function (us) { return us.username === _this.username && us.password === _this.password; });
                        if (user.length > 0) {
                            console.log("login");
                            _this.cookieService.set('proprio-logged-in', '1');
                            _this.router.navigateByUrl("/home");
                        }
                    });
                    console.log(this.username);
                    console.log(this.password);
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                firebase: {
                    apiKey: "AIzaSyAgOAQUKUaqLaNYJmuSYugX2bV5wkUMhcI",
                    authDomain: "proprio-8d063.firebaseapp.com",
                    databaseURL: "https://proprio-8d063.firebaseio.com",
                    projectId: "proprio-8d063",
                    storageBucket: "proprio-8d063.appspot.com",
                    messagingSenderId: "171913856817",
                    appId: "1:171913856817:web:4b93729c65195f2e86d210",
                    measurementId: "G-8D6QDELDSE"
                }
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/saleh/Documents/proprio/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map