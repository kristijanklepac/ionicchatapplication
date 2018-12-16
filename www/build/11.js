webpackJsonp([11],{

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(659);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_token_token__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, authProviders, alertCtrl, loadingCtrl, tokenProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProviders = authProviders;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.tokenProvider = tokenProvider;
    }
    RegisterPage.prototype.ionViewDidLoad = function () { };
    RegisterPage.prototype.RegisterUser = function () {
        var _this = this;
        this.ShowLoader();
        this.authProviders
            .RegisterUser(this.username, this.email, this.password)
            .subscribe(function (data) {
            _this.tokenProvider.SetToken(data.token);
            setTimeout(function () {
                _this.loading.dismiss();
                _this.navCtrl.setRoot('TabsPage');
            }, 2000);
        }, function (err) {
            _this.loading.dismiss();
            if (err.error.msg) {
                _this.SHowErrorAlert(err.error.msg[0].message);
            }
            if (err.error.message) {
                _this.SHowErrorAlert(err.error.message);
            }
        });
    };
    RegisterPage.prototype.SHowErrorAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Sign Up Error',
            subTitle: "" + message,
            buttons: ['OK'],
            cssClass: 'alertCss'
        });
        alert.present();
    };
    RegisterPage.prototype.ShowLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/User/Desktop/chatapp-ionic-master/src/pages/register/register.html"*/'<ion-content class="sign" padding>\n  <div class="appForm" ion-fixed padding margin-bottom style="position: absolute !important; top: 0%; bottom: 0%; left: 0; margin-bottom: 1%;">\n    <ion-header no-border>\n      <ion-navbar>\n        <ion-title>Register</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-list style="margin-top: 43% !important">\n      <ion-item style="position: relative !important;">\n        <ion-icon name="ios-mail-outline" item-left></ion-icon>\n        <ion-input class="input-field" [(ngModel)]="username" name="username" type="text" placeholder="Username"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="ios-lock-outline" item-left></ion-icon>\n        <ion-input class="input-field" [(ngModel)]="email" name="email" type="email" placeholder="Email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="md-key" item-left></ion-icon>\n        <ion-input class="input-field" [(ngModel)]="password" name="password" type="password" placeholder="Password"></ion-input>\n      </ion-item>\n\n      <button ion-button block class="login-button" (click)="RegisterUser()">Sign Up</button>\n    </ion-list>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/User/Desktop/chatapp-ionic-master/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_token_token__["a" /* TokenProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_token_token__["a" /* TokenProvider */]) === "function" && _f || Object])
    ], RegisterPage);
    return RegisterPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=11.js.map