webpackJsonp([15],{

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_password__ = __webpack_require__(648);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangePasswordPageModule = /** @class */ (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */])]
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());

//# sourceMappingURL=change-password.module.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_users__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(navCtrl, navParams, fb, usersProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.usersProvider = usersProvider;
        this.alertCtrl = alertCtrl;
        this.tabElement = document.querySelector('.tabbar.show-tabbar');
        this.Init();
    }
    ChangePasswordPage.prototype.Init = function () {
        this.passwordForm = this.fb.group({
            cpassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            newPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        }, {
            validator: this.Validate.bind(this)
        });
    };
    ChangePasswordPage.prototype.ionViewDidLoad = function () { };
    ChangePasswordPage.prototype.ionViewWillEnter = function () {
        this.tabElement.style.display = 'none';
    };
    ChangePasswordPage.prototype.ionViewWillLeave = function () {
        this.tabElement.style.display = 'flex';
    };
    ChangePasswordPage.prototype.OnPasswordChange = function () {
        var _this = this;
        this.usersProvider.ChangePassword(this.passwordForm.value).subscribe(function (data) {
            var alert = _this.alertCtrl.create({
                title: 'Password Change',
                subTitle: 'Password changed successfully',
                buttons: ['OK']
            });
            alert.present();
        }, function (err) {
            if (err.error.msg) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Validation Error',
                    subTitle: "" + err.error.msg[0].message,
                    buttons: ['OK']
                });
                alert_1.present();
            }
            if (err.error.message) {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Password Change Error',
                    subTitle: "" + err.error.message,
                    buttons: ['OK']
                });
                alert_2.present();
            }
        });
    };
    ChangePasswordPage.prototype.Validate = function (passwordFormGroup) {
        var new_password = passwordFormGroup.controls.newPassword.value;
        var confirm_password = passwordFormGroup.controls.confirmPassword.value;
        if (confirm_password.length <= 0) {
            return null;
        }
        if (confirm_password !== new_password) {
            return {
                doesNotMatch: true
            };
        }
        return null;
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-change-password',template:/*ion-inline-start:"/Users/User/Desktop/chatapp-ionic-master/src/pages/change-password/change-password.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Change Password</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="passwordForm" (ngSubmit)="OnPasswordChange()">\n    <ion-label color="primary" stacked>Current Password</ion-label>\n    <ion-item>\n      <ion-input type="password" formControlName="cpassword"></ion-input>\n    </ion-item>\n    <p class="error" *ngIf="!passwordForm.controls[\'cpassword\'].valid && passwordForm.controls[\'cpassword\'].touched">\n      Current password is required\n    </p>\n    <ion-label color="primary" stacked>New Password</ion-label>\n    <ion-item>\n      <ion-input type="password" formControlName="newPassword"></ion-input>\n    </ion-item>\n    <p class="error" *ngIf="!passwordForm.controls[\'newPassword\'].valid && passwordForm.controls[\'newPassword\'].touched">\n      New password is required\n    </p>\n    <ion-label color="primary" stacked>Confirm Password</ion-label>\n    <ion-item>\n      <ion-input type="password" formControlName="confirmPassword"></ion-input>\n    </ion-item>\n    <p class="error" *ngIf="!passwordForm.controls[\'confirmPassword\'].valid && passwordForm.controls[\'confirmPassword\'].touched">\n      Confirm password is required\n    </p>\n    <p class="error" *ngIf="passwordForm.errors">Password does not match</p>\n\n    <button class="passwordChange" ion-button block [disabled]="!passwordForm.valid">\n      Change Password\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/User/Desktop/chatapp-ionic-master/src/pages/change-password/change-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_users_users__["a" /* UsersProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ })

});
//# sourceMappingURL=15.js.map