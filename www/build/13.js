webpackJsonp([13],{

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(654);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, authProviders, alertCtrl, loadingCtrl, tokenProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProviders = authProviders;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.tokenProvider = tokenProvider;
        this.tabElement = document.querySelector('.tabbar.show-tabbar');
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        if (this.tabElement) {
            this.tabElement.style.display = 'none';
        }
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        if (this.tabElement) {
            this.tabElement.style.display = 'none';
        }
    };
    LoginPage.prototype.LoginUser = function () {
        var _this = this;
        this.ShowLoader();
        this.authProviders.LoginUser(this.username, this.password).subscribe(function (data) {
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
    LoginPage.prototype.RegisterPage = function () {
        this.navCtrl.push('RegisterPage');
    };
    LoginPage.prototype.SHowErrorAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Login Error',
            subTitle: "" + message,
            buttons: ['OK'],
            cssClass: 'alertCss'
        });
        alert.present();
    };
    LoginPage.prototype.ShowLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/User/Desktop/chatapp-ionic-master/src/pages/login/login.html"*/'<ion-content class="sign" padding>\n  <div class="appForm" ion-fixed padding margin-bottom style="position: absolute !important; top: 0%; bottom: 0%; left: 0; margin-bottom: 1%;">\n    <div class="logo">\n      <h2>SocialApp by ChrisVz</h2>\n    </div>\n\n    <ion-list style="margin-top: 43% !important">\n      <ion-item style="position: relative !important;">\n        <ion-icon name="ios-mail-outline" item-left></ion-icon>\n        <ion-input class="input-field" [(ngModel)]="username" name="username" type="text" placeholder="Username"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="md-key" item-left></ion-icon>\n        <ion-input class="input-field" [(ngModel)]="password" name="password" type="password" placeholder="Password"></ion-input>\n      </ion-item>\n\n      <button ion-button block class="login-button" (click)="LoginUser()">Login</button>\n\n      <p class="signin">\n        <button ion-button block clear color="color3" (click)="RegisterPage()">Sign Up</button>\n      </p>\n    </ion-list>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/User/Desktop/chatapp-ionic-master/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_token_token__["a" /* TokenProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_token_token__["a" /* TokenProvider */]) === "function" && _f || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=13.js.map