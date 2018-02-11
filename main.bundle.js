webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var appConstants = {
    routes: {
        DASHBOARD: "dashboard",
        NEW_UNICORN: "newUnicorn",
        UNICORN: "unicorn"
    },
    unicornImages: {
        female: ["./assets/unicorn1.png"],
        male: ["./assets/unicorn3.png"],
        baby: ["./assets/baby-unicorn.png"]
    }
};
/* harmony default export */ __webpack_exports__["a"] = (appConstants);
//# sourceMappingURL=app-constants.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_unicorn_unicorn_component__ = __webpack_require__("../../../../../src/app/components/unicorn/unicorn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_new_unicorn_new_unicorn_component__ = __webpack_require__("../../../../../src/app/components/new-unicorn/new-unicorn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_unicorns_unicorns_component__ = __webpack_require__("../../../../../src/app/components/unicorns/unicorns.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot([
                {
                    path: "dashboard",
                    component: __WEBPACK_IMPORTED_MODULE_4__components_unicorns_unicorns_component__["a" /* UnicornsComponent */]
                },
                {
                    path: "unicorn/:id",
                    component: __WEBPACK_IMPORTED_MODULE_2__components_unicorn_unicorn_component__["a" /* UnicornComponent */]
                },
                {
                    path: "newUnicorn",
                    component: __WEBPACK_IMPORTED_MODULE_3__components_new_unicorn_new_unicorn_component__["a" /* NewUnicornComponent */]
                },
                { path: "", redirectTo: "dashboard", pathMatch: "full" },
                { path: "**", redirectTo: "dashboard", pathMatch: "full" }
            ])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-topbar></app-topbar>\r\n<div class=\"mainContainer\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_unicorn_service__ = __webpack_require__("../../../../../src/app/services/unicorn.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(unicornService) {
        this.unicornService = unicornService;
        this.title = "app";
        unicornService.initiUnicorns();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-root",
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_unicorn_service__["a" /* UnicornService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_unicorn_service__["a" /* UnicornService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_unicorn_unicorn_component__ = __webpack_require__("../../../../../src/app/components/unicorn/unicorn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_new_unicorn_new_unicorn_component__ = __webpack_require__("../../../../../src/app/components/new-unicorn/new-unicorn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_unicorn_service__ = __webpack_require__("../../../../../src/app/services/unicorn.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_unicorn_card_unicorn_card_component__ = __webpack_require__("../../../../../src/app/components/unicorn-card/unicorn-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_unicorns_unicorns_component__ = __webpack_require__("../../../../../src/app/components/unicorns/unicorns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_topbar_topbar_component__ = __webpack_require__("../../../../../src/app/components/topbar/topbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_unicorns_unicorns_component__["a" /* UnicornsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_unicorn_unicorn_component__["a" /* UnicornComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_new_unicorn_new_unicorn_component__["a" /* NewUnicornComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_unicorn_card_unicorn_card_component__["a" /* UnicornCardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_topbar_topbar_component__["a" /* TopbarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_unicorn_service__["a" /* UnicornService */], __WEBPACK_IMPORTED_MODULE_12__services_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_14__services_utils_service__["a" /* UtilsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/new-unicorn/new-unicorn.component.html":
/***/ (function(module, exports) {

module.exports = "<img [src]=\"unicorn.picture\" />\r\n<div class=\"form-container\">\r\n    <h2>Personal Info</h2>\r\n    <form #unicornForm='ngForm' (change)=\"autoSave()\">\r\n        <md-input-container floatPlaceholder=\"always\">\r\n            <input placeholder=\"Name\" type=\"text\" maxlength=\"200\" #nameInput mdInput name=\"name\" required [(ngModel)]=\"unicorn.name\">\r\n            <md-hint align=\"end\" aria-live=\"polite\"> {{nameInput.value.length}} / 200 </md-hint>\r\n            <md-error>Name is required</md-error>\r\n        </md-input-container>\r\n\r\n        <md-input-container floatPlaceholder=\"always\">\r\n            <input placeholder=\"Color\" type=\"text\" maxlength=\"6\" #colorInput=\"ngModel\" name=\"colorInput\" mdInput required [(ngModel)]=\"unicorn.color\" pattern=\"^[0-9A-F]{6}$\">\r\n            <md-hint align=\"end\" aria-live=\"polite\"> {{colorInput.value?.length}} / 6 </md-hint>\r\n            <md-error *ngIf=\"colorInput.errors?.required\">\r\n                Color is required\r\n            </md-error>\r\n            <md-error *ngIf=\"colorInput.errors?.pattern\">\r\n                Wrong hex color. (Required format FFFFAA)\r\n            </md-error>\r\n        </md-input-container>\r\n        <md-input-container>\r\n            <input mdInput placeholder=\"Age\" type=\"number\" min=\"5\" name=\"age\" [(ngModel)]=\"unicorn.age\" required/>\r\n            <md-error>Age is required </md-error>\r\n        </md-input-container>\r\n        <md-select placeholder=\"Gender\" name=\"gender\" [ngModel]=\"unicorn.gender\" (change)=\"handleChange($event);\" required>\r\n            <md-option value=\"female\"> female </md-option>\r\n            <md-option value=\"male\"> male </md-option>\r\n            <md-option value=\"other\"> other </md-option>\r\n        </md-select>\r\n        <button md-button md-raised-button color=\"primary\" [disabled]=\"!unicornForm.valid || isSubmited\" (click)=\"createUnicorn()\">\r\n      Create\r\n    </button>\r\n        <md-spinner *ngIf=\"isSubmited\"></md-spinner>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/new-unicorn/new-unicorn.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  margin: 0; }\n\nimg {\n  height: 500px;\n  width: 500px;\n  margin: 0 auto; }\n  @media screen and (max-width: 740px) {\n    img {\n      height: 300px;\n      width: 300px; } }\n\n.form-container {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  margin: 10px;\n  text-align: center; }\n  @media screen and (max-width: 740px) {\n    .form-container {\n      text-align: left; } }\n\nform {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  height: 75%;\n  padding: 20px; }\n  form md-input-container,\n  form md-select,\n  form button {\n    width: 80%; }\n  @media screen and (max-width: 740px) {\n    form {\n      -ms-flex-align: start;\n          align-items: flex-start; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/new-unicorn/new-unicorn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUnicornComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_unicorn_service__ = __webpack_require__("../../../../../src/app/services/unicorn.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constants__ = __webpack_require__("../../../../../src/app/app-constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewUnicornComponent = (function () {
    function NewUnicornComponent(unicornService, router, notificationService) {
        this.unicornService = unicornService;
        this.router = router;
        this.notificationService = notificationService;
        this.isSubmited = false;
    }
    NewUnicornComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.autoSaveInterval);
    };
    NewUnicornComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.unicorn = this.unicornService.getSavedUnicorn();
        //autosave every 5 minutes, 300000 milliseconds
        this.autoSaveInterval = setInterval(function () {
            _this.autoSave();
            _this.notificationService.open("Unicorn auto-saved!", "success-toaster");
        }, 300000);
    };
    NewUnicornComponent.prototype.createUnicorn = function () {
        var _this = this;
        this.isSubmited = true;
        if (this.unicornService.isUniqueName(this.unicorn.name)) {
            this.unicornService.createUnicorn(this.unicorn);
            //simulating network latency
            setTimeout(function () {
                _this.router.navigate([__WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* default */].routes.UNICORN, _this.unicorn.name]);
                _this.notificationService.open("Unicorn created!", "success-toaster");
                _this.unicornService.cleanSavedUnicorn();
                clearInterval(_this.autoSaveInterval);
                _this.isSubmited = false;
            }, 1000);
        }
        else {
            this.notificationService.open("An unicorn with this name already exists!", "error-toaster");
            this.isSubmited = false;
        }
    };
    NewUnicornComponent.prototype.autoSave = function () {
        this.unicornService.saveUnicorn(this.unicorn);
    };
    NewUnicornComponent.prototype.handleChange = function (event) {
        this.unicorn.picture = this.unicornService.getRandomPic(event.value);
        this.unicorn.gender = event.value;
        this.autoSave();
    };
    return NewUnicornComponent;
}());
NewUnicornComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-new-unicorn",
        template: __webpack_require__("../../../../../src/app/components/new-unicorn/new-unicorn.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/new-unicorn/new-unicorn.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_unicorn_service__["a" /* UnicornService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_unicorn_service__["a" /* UnicornService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_notification_service__["a" /* NotificationService */]) === "function" && _c || Object])
], NewUnicornComponent);

var _a, _b, _c;
//# sourceMappingURL=new-unicorn.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/topbar/topbar.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"md-elevation-z5\">\r\n    <div class=\"nav\">\r\n        <a [routerLink]=\"[appConstants.routes.DASHBOARD] \" routerLinkActive=\"activeLink \"> Unicorns-App Home</a>\r\n        <a [routerLink]=\"[appConstants.routes.NEW_UNICORN] \" routerLinkActive=\"activeLink \"> New</a>\r\n    </div>\r\n</md-toolbar>"

/***/ }),

/***/ "../../../../../src/app/components/topbar/topbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h5, .mat-typography h5 {\n  font-size: 11.62px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n\n.mat-h6, .mat-typography h6 {\n  font-size: 9.38px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n  .mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px; }\n\n.mat-button, .mat-raised-button, .mat-icon-button, .mat-fab, .mat-mini-fab {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 400; }\n\n.mat-card-subtitle,\n.mat-card-content,\n.mat-card-header .mat-card-title {\n  font-size: 14px; }\n\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n\n.mat-chip {\n  font-size: 13px;\n  line-height: 18px; }\n  .mat-chip .mat-chip-remove.mat-icon {\n    font-size: 18px; }\n\n.mat-table {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-cell {\n  font-size: 14px; }\n\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-calendar-body {\n  font-size: 13px; }\n\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-expansion-panel-header {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\n\n.mat-expansion-panel-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-form-field {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125; }\n\n.mat-form-field-wrapper {\n  padding-bottom: 1.25em; }\n\n.mat-form-field-prefix .mat-icon,\n.mat-form-field-suffix .mat-icon {\n  font-size: 150%;\n  line-height: 1.125; }\n\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n  .mat-form-field-prefix .mat-icon-button .mat-icon,\n  .mat-form-field-suffix .mat-icon-button .mat-icon {\n    height: 1.125em;\n    line-height: 1.125; }\n\n.mat-form-field-infix {\n  padding: 0.4375em 0;\n  border-top: 0.84375em solid transparent; }\n\n.mat-form-field-autofill-float:-webkit-autofill + .mat-form-field-placeholder-wrapper .mat-form-field-float {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333333%; }\n\n.mat-form-field-placeholder-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n\n.mat-form-field-placeholder {\n  top: 1.28125em; }\n  .mat-form-field-placeholder.mat-form-field-float:not(.mat-form-field-empty),\n  .mat-focused .mat-form-field-placeholder.mat-form-field-float {\n    transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n    -ms-transform: translateY(-1.28125em) scale(0.75);\n    width: 133.33333333%; }\n\n.mat-form-field-underline {\n  bottom: 1.25em; }\n\n.mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.54166667em;\n  top: calc(100% - 1.66666667em); }\n\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px; }\n  .mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\ninput.mat-input-element {\n  margin-top: -0.0625em; }\n\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-select {\n  padding-top: 16px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-select-trigger {\n  font-size: 16px; }\n\n.mat-slide-toggle-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-slider-thumb-label-text {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0; }\n\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-list-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  font-size: 16px; }\n  .mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line, .mat-selection-list .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  font-size: 16px; }\n  .mat-list .mat-list-option .mat-line, .mat-nav-list .mat-list-option .mat-line, .mat-selection-list .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item, .mat-selection-list[dense] .mat-list-item {\n  font-size: 12px; }\n  .mat-list[dense] .mat-list-item .mat-line, .mat-nav-list[dense] .mat-list-item .mat-line, .mat-selection-list[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\n.mat-list[dense] .mat-list-option, .mat-nav-list[dense] .mat-list-option, .mat-selection-list[dense] .mat-list-option {\n  font-size: 12px; }\n  .mat-list[dense] .mat-list-option .mat-line, .mat-nav-list[dense] .mat-list-option .mat-line, .mat-selection-list[dense] .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\n.mat-list[dense] .mat-subheader, .mat-nav-list[dense] .mat-subheader, .mat-selection-list[dense] .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px; }\n\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n\n.mat-ripple {\n  overflow: hidden; }\n  @media screen and (-ms-high-contrast: active) {\n    .mat-ripple {\n      display: none; } }\n\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale(0); }\n\n.mat-option {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  position: relative;\n  cursor: pointer;\n  outline: none; }\n  .mat-option[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-option {\n    text-align: right; }\n  .mat-option .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-option .mat-icon {\n      margin-left: 16px;\n      margin-right: 0; }\n  .mat-option[aria-disabled='true'] {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default; }\n  .mat-optgroup .mat-option:not(.mat-option-multiple) {\n    padding-left: 32px; }\n    [dir='rtl'] .mat-optgroup .mat-option:not(.mat-option-multiple) {\n      padding-left: 16px;\n      padding-right: 32px; }\n\n.mat-option-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none; }\n  @media screen and (-ms-high-contrast: active) {\n    .mat-option-ripple {\n      opacity: 0.5; } }\n\n.mat-option-pseudo-checkbox {\n  margin-right: 8px; }\n  [dir='rtl'] .mat-option-pseudo-checkbox {\n    margin-left: 8px;\n    margin-right: 0; }\n\n.mat-optgroup-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: default; }\n  .mat-optgroup-label[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-optgroup-label {\n    text-align: right; }\n  .mat-optgroup-label .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-optgroup-label .mat-icon {\n      margin-left: 16px;\n      margin-right: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h5, .mat-typography h5 {\n  font-size: 11.62px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n\n.mat-h6, .mat-typography h6 {\n  font-size: 9.38px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n  .mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px; }\n\n.mat-button, .mat-raised-button, .mat-icon-button, .mat-fab, .mat-mini-fab {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 400; }\n\n.mat-card-subtitle,\n.mat-card-content,\n.mat-card-header .mat-card-title {\n  font-size: 14px; }\n\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n\n.mat-chip {\n  font-size: 13px;\n  line-height: 18px; }\n  .mat-chip .mat-chip-remove.mat-icon {\n    font-size: 18px; }\n\n.mat-table {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-cell {\n  font-size: 14px; }\n\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-calendar-body {\n  font-size: 13px; }\n\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-expansion-panel-header {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\n\n.mat-expansion-panel-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-form-field {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125; }\n\n.mat-form-field-wrapper {\n  padding-bottom: 1.25em; }\n\n.mat-form-field-prefix .mat-icon,\n.mat-form-field-suffix .mat-icon {\n  font-size: 150%;\n  line-height: 1.125; }\n\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n  .mat-form-field-prefix .mat-icon-button .mat-icon,\n  .mat-form-field-suffix .mat-icon-button .mat-icon {\n    height: 1.125em;\n    line-height: 1.125; }\n\n.mat-form-field-infix {\n  padding: 0.4375em 0;\n  border-top: 0.84375em solid transparent; }\n\n.mat-form-field-autofill-float:-webkit-autofill + .mat-form-field-placeholder-wrapper .mat-form-field-float {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333333%; }\n\n.mat-form-field-placeholder-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n\n.mat-form-field-placeholder {\n  top: 1.28125em; }\n  .mat-form-field-placeholder.mat-form-field-float:not(.mat-form-field-empty),\n  .mat-focused .mat-form-field-placeholder.mat-form-field-float {\n    transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n    -ms-transform: translateY(-1.28125em) scale(0.75);\n    width: 133.33333333%; }\n\n.mat-form-field-underline {\n  bottom: 1.25em; }\n\n.mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.54166667em;\n  top: calc(100% - 1.66666667em); }\n\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px; }\n  .mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\ninput.mat-input-element {\n  margin-top: -0.0625em; }\n\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-select {\n  padding-top: 16px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-select-trigger {\n  font-size: 16px; }\n\n.mat-slide-toggle-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-slider-thumb-label-text {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0; }\n\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-list-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  font-size: 16px; }\n  .mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line, .mat-selection-list .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  font-size: 16px; }\n  .mat-list .mat-list-option .mat-line, .mat-nav-list .mat-list-option .mat-line, .mat-selection-list .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item, .mat-selection-list[dense] .mat-list-item {\n  font-size: 12px; }\n  .mat-list[dense] .mat-list-item .mat-line, .mat-nav-list[dense] .mat-list-item .mat-line, .mat-selection-list[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\n.mat-list[dense] .mat-list-option, .mat-nav-list[dense] .mat-list-option, .mat-selection-list[dense] .mat-list-option {\n  font-size: 12px; }\n  .mat-list[dense] .mat-list-option .mat-line, .mat-nav-list[dense] .mat-list-option .mat-line, .mat-selection-list[dense] .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\n.mat-list[dense] .mat-subheader, .mat-nav-list[dense] .mat-subheader, .mat-selection-list[dense] .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px; }\n\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n\n.mat-ripple {\n  overflow: hidden; }\n  @media screen and (-ms-high-contrast: active) {\n    .mat-ripple {\n      display: none; } }\n\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale(0); }\n\n.mat-option {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  position: relative;\n  cursor: pointer;\n  outline: none; }\n  .mat-option[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-option {\n    text-align: right; }\n  .mat-option .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-option .mat-icon {\n      margin-left: 16px;\n      margin-right: 0; }\n  .mat-option[aria-disabled='true'] {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default; }\n  .mat-optgroup .mat-option:not(.mat-option-multiple) {\n    padding-left: 32px; }\n    [dir='rtl'] .mat-optgroup .mat-option:not(.mat-option-multiple) {\n      padding-left: 16px;\n      padding-right: 32px; }\n\n.mat-option-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none; }\n  @media screen and (-ms-high-contrast: active) {\n    .mat-option-ripple {\n      opacity: 0.5; } }\n\n.mat-option-pseudo-checkbox {\n  margin-right: 8px; }\n  [dir='rtl'] .mat-option-pseudo-checkbox {\n    margin-left: 8px;\n    margin-right: 0; }\n\n.mat-optgroup-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: default; }\n  .mat-optgroup-label[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-optgroup-label {\n    text-align: right; }\n  .mat-optgroup-label .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-optgroup-label .mat-icon {\n      margin-left: 16px;\n      margin-right: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.mat-option {\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n  .mat-primary .mat-option.mat-selected {\n    color: #3f51b5; }\n  .mat-accent .mat-option.mat-selected {\n    color: #ff9800; }\n  .mat-warn .mat-option.mat-selected {\n    color: #f44336; }\n  .mat-option.mat-selected:not(.mat-option-multiple) {\n    background: rgba(0, 0, 0, 0.04); }\n  .mat-option.mat-active {\n    background: rgba(0, 0, 0, 0.04);\n    color: rgba(0, 0, 0, 0.87); }\n  .mat-option.mat-option-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54); }\n  .mat-pseudo-checkbox::after {\n    color: #fafafa; }\n\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #ff9800; }\n\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #3f51b5; }\n\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #f44336; }\n\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0; }\n\n.mat-app-background {\n  background-color: #fafafa; }\n\n.mat-theme-loaded-marker {\n  display: none; }\n\n.mat-autocomplete-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: white;\n    color: rgba(0, 0, 0, 0.87); }\n\n.mat-button, .mat-icon-button {\n  background: transparent; }\n  .mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay {\n    background-color: rgba(63, 81, 181, 0.12); }\n  .mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay {\n    background-color: rgba(255, 152, 0, 0.12); }\n  .mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n  .mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n  .mat-button.mat-primary, .mat-icon-button.mat-primary {\n    color: #3f51b5; }\n  .mat-button.mat-accent, .mat-icon-button.mat-accent {\n    color: #ff9800; }\n  .mat-button.mat-warn, .mat-icon-button.mat-warn {\n    color: #f44336; }\n  .mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n  .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: rgba(255, 255, 255, 0.87); }\n  .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: rgba(0, 0, 0, 0.87); }\n  .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n  .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #3f51b5; }\n  .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #ff9800; }\n  .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #f44336; }\n  .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n  .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n  .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(0, 0, 0, 0.2); }\n  .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n\n.mat-button.mat-primary .mat-ripple-element {\n  background-color: rgba(63, 81, 181, 0.1); }\n\n.mat-button.mat-accent .mat-ripple-element {\n  background-color: rgba(255, 152, 0, 0.1); }\n\n.mat-button.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.1); }\n\n.mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(63, 81, 181, 0.2); }\n\n.mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(255, 152, 0, 0.2); }\n\n.mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.2); }\n\n.mat-button-toggle {\n  color: rgba(0, 0, 0, 0.38); }\n  .mat-button-toggle.cdk-focused .mat-button-toggle-focus-overlay {\n    background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-button-toggle-checked {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-button-toggle-disabled {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.38); }\n  .mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #bdbdbd; }\n\n.mat-card {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.mat-checkbox-checkmark {\n  fill: #fafafa; }\n\n.mat-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n\n.mat-checkbox-mixedmark {\n  background-color: #fafafa; }\n\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #3f51b5; }\n\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #ff9800; }\n\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #f44336; }\n\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #b0b0b0; }\n\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #b0b0b0; }\n\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: #b0b0b0; }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(63, 81, 181, 0.26); }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(255, 152, 0, 0.26); }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.mat-chip:not(.mat-basic-chip) {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-chip:not(.mat-basic-chip) .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n  .mat-chip:not(.mat-basic-chip) .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-chip.mat-chip-selected.mat-primary {\n  background-color: #3f51b5;\n  color: rgba(255, 255, 255, 0.87); }\n  .mat-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n    color: rgba(255, 255, 255, 0.87);\n    opacity: 0.4; }\n  .mat-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-chip.mat-chip-selected.mat-warn {\n  background-color: #f44336;\n  color: white; }\n  .mat-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n  .mat-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-chip.mat-chip-selected.mat-accent {\n  background-color: #ff9800;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n  .mat-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-table {\n  background: white; }\n\n.mat-row, .mat-header-row {\n  border-bottom-color: rgba(0, 0, 0, 0.12); }\n\n.mat-header-cell {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-cell {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-datepicker-content {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-calendar-arrow {\n  border-top-color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-next-button,\n.mat-calendar-previous-button {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-table-header {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-calendar-table-header-divider::after {\n  background: rgba(0, 0, 0, 0.12); }\n\n.mat-calendar-body-label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-body-cell-content {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent; }\n  .mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n    color: rgba(0, 0, 0, 0.38); }\n\n:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(0, 0, 0, 0.04); }\n\n.mat-calendar-body-selected {\n  background-color: #3f51b5;\n  color: rgba(255, 255, 255, 0.87); }\n\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(63, 81, 181, 0.4); }\n\n.mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.87); }\n\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.18); }\n\n.mat-dialog-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-expansion-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-action-row {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .mat-expansion-panel-header:not([aria-disabled='true']):hover {\n  background: rgba(0, 0, 0, 0.04); }\n\n.mat-expansion-panel-header-title {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-expansion-panel-header-description,\n.mat-expansion-indicator::after {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-expansion-panel-header[aria-disabled='true'] {\n  color: rgba(0, 0, 0, 0.38); }\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {\n    color: inherit; }\n\n.mat-form-field {\n  width: 200px; }\n\n.mat-form-field-placeholder {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-hint {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-focused .mat-form-field-placeholder {\n  color: #3f51b5; }\n  .mat-focused .mat-form-field-placeholder.mat-accent {\n    color: #ff9800; }\n  .mat-focused .mat-form-field-placeholder.mat-warn {\n    color: #f44336; }\n\n.mat-form-field-autofill-float:-webkit-autofill + .mat-form-field-placeholder .mat-form-field-required-marker,\n.mat-focused .mat-form-field-placeholder.mat-form-field-float .mat-form-field-required-marker {\n  color: #ff9800; }\n\n.mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n  .mat-form-field-underline.mat-disabled {\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n    background-size: 4px 1px;\n    background-repeat: repeat-x; }\n\n.mat-form-field-ripple {\n  background-color: #3f51b5; }\n  .mat-form-field-ripple.mat-accent {\n    background-color: #ff9800; }\n  .mat-form-field-ripple.mat-warn {\n    background-color: #f44336; }\n\n.mat-form-field-invalid .mat-form-field-placeholder {\n  color: #f44336; }\n  .mat-form-field-invalid .mat-form-field-placeholder.mat-accent,\n  .mat-form-field-invalid .mat-form-field-placeholder.mat-form-field-float .mat-form-field-required-marker {\n    color: #f44336; }\n\n.mat-form-field-invalid .mat-form-field-ripple {\n  background-color: #f44336; }\n\n.mat-error {\n  color: #f44336; }\n\n.mat-icon.mat-primary {\n  color: #3f51b5; }\n\n.mat-icon.mat-accent {\n  color: #ff9800; }\n\n.mat-icon.mat-warn {\n  color: #f44336; }\n\n.mat-input-element:disabled {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-list-item-disabled {\n  background-color: #eeeeee; }\n\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-nav-list .mat-list-item {\n  outline: none; }\n  .mat-nav-list .mat-list-item:hover, .mat-nav-list .mat-list-item.mat-list-item-focus {\n    background: rgba(0, 0, 0, 0.04); }\n\n.mat-list-option {\n  outline: none; }\n  .mat-list-option:hover, .mat-list-option.mat-list-item-focus {\n    background: rgba(0, 0, 0, 0.04); }\n\n.mat-menu-panel {\n  background: white; }\n\n.mat-menu-item {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-menu-item[disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-menu-item .mat-icon,\n.mat-menu-item-submenu-trigger::after {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-menu-item:hover:not([disabled]),\n.mat-menu-item:focus:not([disabled]),\n.mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04); }\n\n.mat-paginator {\n  background: white; }\n\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-paginator-increment,\n.mat-paginator-decrement {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54); }\n\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-decrement {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23c5cae9%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar-buffer {\n  background-color: #c5cae9; }\n\n.mat-progress-bar-fill::after {\n  background-color: #3f51b5; }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ffe0b2%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #ffe0b2; }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #ff9800; }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ffcdd2%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffcdd2; }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #f44336; }\n\n.mat-progress-spinner path, .mat-spinner path {\n  stroke: #3f51b5; }\n\n.mat-progress-spinner.mat-accent path, .mat-spinner.mat-accent path {\n  stroke: #ff9800; }\n\n.mat-progress-spinner.mat-warn path, .mat-spinner.mat-warn path {\n  stroke: #f44336; }\n\n.mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-disabled .mat-radio-ripple .mat-ripple-element, .mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #3f51b5; }\n\n.mat-radio-button.mat-primary .mat-radio-inner-circle {\n  background-color: #3f51b5; }\n\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(63, 81, 181, 0.26); }\n\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #ff9800; }\n\n.mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #ff9800; }\n\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(255, 152, 0, 0.26); }\n\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #f44336; }\n\n.mat-radio-button.mat-warn .mat-radio-inner-circle {\n  background-color: #f44336; }\n\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.mat-select-trigger,\n.mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-select-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n\n[aria-disabled='true'] .mat-select-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 1px;\n  background-repeat: repeat-x; }\n\n.mat-select-disabled .mat-select-value,\n.mat-select-arrow,\n.mat-select-trigger {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-select-content, .mat-select-panel-done-animating {\n  background: white; }\n\n.mat-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n  background: rgba(0, 0, 0, 0.12); }\n\n.mat-select:focus:not(.mat-select-disabled).mat-primary .mat-select-trigger, .mat-select:focus:not(.mat-select-disabled).mat-primary .mat-select-arrow {\n  color: #3f51b5; }\n\n.mat-select:focus:not(.mat-select-disabled).mat-primary .mat-select-underline {\n  background-color: #3f51b5; }\n\n.mat-select:focus:not(.mat-select-disabled).mat-accent .mat-select-trigger, .mat-select:focus:not(.mat-select-disabled).mat-accent .mat-select-arrow {\n  color: #ff9800; }\n\n.mat-select:focus:not(.mat-select-disabled).mat-accent .mat-select-underline {\n  background-color: #ff9800; }\n\n.mat-select:focus:not(.mat-select-disabled).mat-select-required .mat-select-placeholder::after {\n  color: #f44336; }\n\n.mat-select:focus:not(.mat-select-disabled).mat-warn .mat-select-trigger, .mat-select:focus:not(.mat-select-disabled).mat-warn .mat-select-arrow, .mat-select-invalid .mat-select-trigger, .mat-select-invalid .mat-select-arrow {\n  color: #f44336; }\n\n.mat-select:focus:not(.mat-select-disabled).mat-warn .mat-select-underline, .mat-select-invalid .mat-select-underline {\n  background-color: #f44336; }\n\n.mat-drawer-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-drawer {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-drawer.mat-drawer-push {\n    background-color: white; }\n\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #ff9800; }\n\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(255, 152, 0, 0.5); }\n\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle .mat-ripple-element {\n  background-color: rgba(255, 152, 0, 0.12); }\n\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #3f51b5; }\n\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(63, 81, 181, 0.5); }\n\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle.mat-primary .mat-ripple-element {\n  background-color: rgba(63, 81, 181, 0.12); }\n\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #f44336; }\n\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(244, 67, 54, 0.5); }\n\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.12); }\n\n.mat-disabled .mat-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n\n.mat-disabled .mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.mat-slide-toggle-thumb {\n  background-color: #fafafa; }\n\n.mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #3f51b5; }\n\n.mat-primary .mat-slider-thumb-label-text {\n  color: rgba(255, 255, 255, 0.87); }\n\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #ff9800; }\n\n.mat-accent .mat-slider-thumb-label-text {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #f44336; }\n\n.mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n\n.mat-slider-focus-ring {\n  background-color: rgba(255, 152, 0, 0.2); }\n\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.87); }\n\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(0, 0, 0, 0.7); }\n\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none; }\n\n.mat-tab-label, .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-tab-group[class*='mat-background-'] .mat-tab-header,\n.mat-tab-nav-bar[class*='mat-background-'] {\n  border-bottom: none;\n  border-top: none; }\n\n.mat-tab-group.mat-primary .mat-tab-label:focus, .mat-tab-group.mat-primary .mat-tab-link:focus, .mat-tab-nav-bar.mat-primary .mat-tab-label:focus, .mat-tab-nav-bar.mat-primary .mat-tab-link:focus {\n  background-color: rgba(197, 202, 233, 0.3); }\n\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #3f51b5; }\n\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: rgba(255, 255, 255, 0.87); }\n\n.mat-tab-group.mat-accent .mat-tab-label:focus, .mat-tab-group.mat-accent .mat-tab-link:focus, .mat-tab-nav-bar.mat-accent .mat-tab-label:focus, .mat-tab-nav-bar.mat-accent .mat-tab-link:focus {\n  background-color: rgba(255, 224, 178, 0.3); }\n\n.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #ff9800; }\n\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: rgba(0, 0, 0, 0.87); }\n\n.mat-tab-group.mat-warn .mat-tab-label:focus, .mat-tab-group.mat-warn .mat-tab-link:focus, .mat-tab-nav-bar.mat-warn .mat-tab-label:focus, .mat-tab-nav-bar.mat-warn .mat-tab-link:focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n\n.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #f44336; }\n\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white; }\n\n.mat-tab-group.mat-background-primary .mat-tab-label:focus, .mat-tab-group.mat-background-primary .mat-tab-link:focus, .mat-tab-nav-bar.mat-background-primary .mat-tab-label:focus, .mat-tab-nav-bar.mat-background-primary .mat-tab-link:focus {\n  background-color: rgba(197, 202, 233, 0.3); }\n\n.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links {\n  background-color: #3f51b5; }\n\n.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: rgba(255, 255, 255, 0.87); }\n  .mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.87); }\n\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-accent .mat-tab-label:focus, .mat-tab-group.mat-background-accent .mat-tab-link:focus, .mat-tab-nav-bar.mat-background-accent .mat-tab-label:focus, .mat-tab-nav-bar.mat-background-accent .mat-tab-link:focus {\n  background-color: rgba(255, 224, 178, 0.3); }\n\n.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links {\n  background-color: #ff9800; }\n\n.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.4); }\n\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.4); }\n\n.mat-tab-group.mat-background-warn .mat-tab-label:focus, .mat-tab-group.mat-background-warn .mat-tab-link:focus, .mat-tab-nav-bar.mat-background-warn .mat-tab-label:focus, .mat-tab-nav-bar.mat-background-warn .mat-tab-link:focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n\n.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links {\n  background-color: #f44336; }\n\n.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white; }\n  .mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white; }\n\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n\n.mat-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-toolbar.mat-primary {\n    background: #3f51b5;\n    color: rgba(255, 255, 255, 0.87); }\n  .mat-toolbar.mat-accent {\n    background: #ff9800;\n    color: rgba(0, 0, 0, 0.87); }\n  .mat-toolbar.mat-warn {\n    background: #f44336;\n    color: white; }\n\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n\n.mat-snack-bar-container {\n  background: #323232;\n  color: white; }\n\n.mat-simple-snackbar-action {\n  color: #ff9800; }\n\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h5, .mat-typography h5 {\n  font-size: 11.62px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n\n.mat-h6, .mat-typography h6 {\n  font-size: 9.38px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n  .mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px; }\n\n.mat-button, .mat-raised-button, .mat-icon-button, .mat-fab, .mat-mini-fab {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 400; }\n\n.mat-card-subtitle,\n.mat-card-content,\n.mat-card-header .mat-card-title {\n  font-size: 14px; }\n\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n\n.mat-chip {\n  font-size: 13px;\n  line-height: 18px; }\n  .mat-chip .mat-chip-remove.mat-icon {\n    font-size: 18px; }\n\n.mat-table {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-cell {\n  font-size: 14px; }\n\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-calendar-body {\n  font-size: 13px; }\n\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-expansion-panel-header {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\n\n.mat-expansion-panel-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-form-field {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125; }\n\n.mat-form-field-wrapper {\n  padding-bottom: 1.25em; }\n\n.mat-form-field-prefix .mat-icon,\n.mat-form-field-suffix .mat-icon {\n  font-size: 150%;\n  line-height: 1.125; }\n\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n  .mat-form-field-prefix .mat-icon-button .mat-icon,\n  .mat-form-field-suffix .mat-icon-button .mat-icon {\n    height: 1.125em;\n    line-height: 1.125; }\n\n.mat-form-field-infix {\n  padding: 0.4375em 0;\n  border-top: 0.84375em solid transparent; }\n\n.mat-form-field-autofill-float:-webkit-autofill + .mat-form-field-placeholder-wrapper .mat-form-field-float {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333333%; }\n\n.mat-form-field-placeholder-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n\n.mat-form-field-placeholder {\n  top: 1.28125em; }\n  .mat-form-field-placeholder.mat-form-field-float:not(.mat-form-field-empty),\n  .mat-focused .mat-form-field-placeholder.mat-form-field-float {\n    transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n    -ms-transform: translateY(-1.28125em) scale(0.75);\n    width: 133.33333333%; }\n\n.mat-form-field-underline {\n  bottom: 1.25em; }\n\n.mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.54166667em;\n  top: calc(100% - 1.66666667em); }\n\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px; }\n  .mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\ninput.mat-input-element {\n  margin-top: -0.0625em; }\n\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-select {\n  padding-top: 16px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-select-trigger {\n  font-size: 16px; }\n\n.mat-slide-toggle-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-slider-thumb-label-text {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0; }\n\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-list-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  font-size: 16px; }\n  .mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line, .mat-selection-list .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  font-size: 16px; }\n  .mat-list .mat-list-option .mat-line, .mat-nav-list .mat-list-option .mat-line, .mat-selection-list .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item, .mat-selection-list[dense] .mat-list-item {\n  font-size: 12px; }\n  .mat-list[dense] .mat-list-item .mat-line, .mat-nav-list[dense] .mat-list-item .mat-line, .mat-selection-list[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\n.mat-list[dense] .mat-list-option, .mat-nav-list[dense] .mat-list-option, .mat-selection-list[dense] .mat-list-option {\n  font-size: 12px; }\n  .mat-list[dense] .mat-list-option .mat-line, .mat-nav-list[dense] .mat-list-option .mat-line, .mat-selection-list[dense] .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\n.mat-list[dense] .mat-subheader, .mat-nav-list[dense] .mat-subheader, .mat-selection-list[dense] .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px; }\n\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n\n.mat-ripple {\n  overflow: hidden; }\n  @media screen and (-ms-high-contrast: active) {\n    .mat-ripple {\n      display: none; } }\n\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale(0); }\n\n.mat-option {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  position: relative;\n  cursor: pointer;\n  outline: none; }\n  .mat-option[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-option {\n    text-align: right; }\n  .mat-option .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-option .mat-icon {\n      margin-left: 16px;\n      margin-right: 0; }\n  .mat-option[aria-disabled='true'] {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default; }\n  .mat-optgroup .mat-option:not(.mat-option-multiple) {\n    padding-left: 32px; }\n    [dir='rtl'] .mat-optgroup .mat-option:not(.mat-option-multiple) {\n      padding-left: 16px;\n      padding-right: 32px; }\n\n.mat-option-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none; }\n  @media screen and (-ms-high-contrast: active) {\n    .mat-option-ripple {\n      opacity: 0.5; } }\n\n.mat-option-pseudo-checkbox {\n  margin-right: 8px; }\n  [dir='rtl'] .mat-option-pseudo-checkbox {\n    margin-left: 8px;\n    margin-right: 0; }\n\n.mat-optgroup-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: default; }\n  .mat-optgroup-label[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-optgroup-label {\n    text-align: right; }\n  .mat-optgroup-label .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-optgroup-label .mat-icon {\n      margin-left: 16px;\n      margin-right: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n\n.mat-toolbar {\n  z-index: 2;\n  position: relative;\n  background-color: #3f51b5 !important; }\n\n.nav {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  width: 100%;\n  height: 100%;\n  padding-left: 50px; }\n  .nav a {\n    text-decoration: none;\n    color: white;\n    padding: 0 16px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    height: 100%;\n    min-width: 100px;\n    -ms-flex-pack: center;\n        justify-content: center; }\n  .nav a:hover {\n    border-bottom: 3px solid #ff9a05; }\n  .nav a.activeLink {\n    border-bottom: 3px solid #ff9800;\n    color: #ff9800; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/topbar/topbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_constants__ = __webpack_require__("../../../../../src/app/app-constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopbarComponent = (function () {
    function TopbarComponent() {
        this.appConstants = __WEBPACK_IMPORTED_MODULE_1__app_constants__["a" /* default */];
    }
    TopbarComponent.prototype.ngOnInit = function () { };
    return TopbarComponent;
}());
TopbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-topbar",
        template: __webpack_require__("../../../../../src/app/components/topbar/topbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/topbar/topbar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TopbarComponent);

//# sourceMappingURL=topbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/unicorn-card/unicorn-card.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"unicorn-card\" [ngStyle]=\"{'background-color': transparentColor}\">\r\n    <md-card-header>\r\n        <md-card-title class=\"card-header\">\r\n            <h2> {{unicorn.name}} </h2>\r\n        </md-card-title>\r\n    </md-card-header>\r\n    <img md-card-image [src]=\"unicorn.picture\" />\r\n    <h2>Personal Info </h2>\r\n    <md-card-content>\r\n\r\n        <div>\r\n            <b>Name:</b> {{unicorn.name}}\r\n        </div>\r\n        <div>\r\n            <div>\r\n                <b>Color:</b> {{unicorn.color}}\r\n            </div>\r\n            <div class=\"displayColor\" [ngStyle]=\"{'background-color':color}\"> </div>\r\n        </div>\r\n        <div>\r\n            <b>Gender:</b> {{unicorn.gender}}\r\n        </div>\r\n        <div>\r\n            <b>Age:</b> {{unicorn.age}}\r\n        </div>\r\n    </md-card-content>\r\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/components/unicorn-card/unicorn-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".unicorn-card {\n  border: 1px solid;\n  height: 500px;\n  padding-top: 0px; }\n\nimg {\n  background-color: black;\n  max-height: 260px;\n  max-width: 260px; }\n\nmd-card-content {\n  font-size: 17px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/unicorn-card/unicorn-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnicornCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_unicorn_model__ = __webpack_require__("../../../../../src/app/models/unicorn.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_unicorn_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_unicorn_model__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnicornCardComponent = (function () {
    function UnicornCardComponent(utilsService) {
        this.utilsService = utilsService;
    }
    UnicornCardComponent.prototype.ngOnInit = function () {
        this.addTransparancy(0.35);
    };
    UnicornCardComponent.prototype.addTransparancy = function (transparency) {
        var rgbValues = this.utilsService.hexToRgb(this.unicorn.color);
        this.transparentColor = this.utilsService.addTransparency(rgbValues, transparency);
    };
    return UnicornCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_unicorn_model__["Unicorn"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_unicorn_model__["Unicorn"]) === "function" && _a || Object)
], UnicornCardComponent.prototype, "unicorn", void 0);
UnicornCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-unicorn-card",
        template: __webpack_require__("../../../../../src/app/components/unicorn-card/unicorn-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/unicorn-card/unicorn-card.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_utils_service__["a" /* UtilsService */]) === "function" && _b || Object])
], UnicornCardComponent);

var _a, _b;
//# sourceMappingURL=unicorn-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/unicorn/unicorn.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"{{unicorn.picture}}\" />\r\n<div class=\"details-container\">\r\n    <h1>{{unicorn.name}}</h1>\r\n    <div>\r\n        <h2>Personal Info </h2>\r\n        <div>\r\n            <strong>Name:</strong> {{unicorn.name}}\r\n        </div>\r\n        <div>\r\n            <div>\r\n                <strong>Color:</strong> {{unicorn.color}}\r\n            </div>\r\n            <div class=\"display-color\" [ngStyle]=\"{'background-color':'#'+unicorn.color}\"> </div>\r\n        </div>\r\n        <div>\r\n            <strong>Gender:</strong> {{unicorn.gender}}\r\n        </div>\r\n        <div>\r\n            <strong>Age:</strong> {{unicorn.age}}\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"unicorn.age >=5\" class=\"form-container\">\r\n        <h2>Select Mate</h2>\r\n        <form #mateForm='ngForm'>\r\n            <md-select placeholder=\"Mate\" name=\"mate\" [(ngModel)]=\"mateName\" required>\r\n                <md-option *ngFor=\"let unicorn of matingUnicorns\" [value]=\"unicorn.name\">\r\n                    {{unicorn.name}}\r\n                    <span class=\"small-script\"><strong>Gender: </strong>{{unicorn.gender}} </span>\r\n                </md-option>\r\n            </md-select>\r\n            <button md-button md-raised-button color=\"accent\" [disabled]=\"!mateForm.valid || isSubmited\" (click)=\"mateUnicorns()\">Mate</button>\r\n        </form>\r\n        <md-spinner *ngIf=\"isSubmited\"></md-spinner>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/unicorn/unicorn.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  margin: 0; }\n\nimg {\n  height: 500px;\n  width: 500px;\n  margin: 0 auto; }\n  @media screen and (max-width: 740px) {\n    img {\n      height: 300px;\n      width: 300px; } }\n\n.display-color {\n  width: 100px;\n  height: 20px; }\n\n.details-container {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  margin: 10px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center; }\n  .details-container div {\n    width: 50%; }\n  .details-container h1 {\n    text-align: center; }\n\nform {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-line-pack: justify;\n      align-content: space-between;\n  height: 150px; }\n\n.form-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n\nmd-spinner {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center; }\n\n.small-script {\n  font-size: 13px;\n  position: relative;\n  font-size: 13px;\n  position: relative;\n  bottom: -13px;\n  text-align: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/unicorn/unicorn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnicornComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_unicorn_service__ = __webpack_require__("../../../../../src/app/services/unicorn.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_constants__ = __webpack_require__("../../../../../src/app/app-constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UnicornComponent = (function () {
    function UnicornComponent(route, unicornsService, router, notificationService) {
        this.route = route;
        this.unicornsService = unicornsService;
        this.router = router;
        this.notificationService = notificationService;
        this.isSubmited = false;
    }
    UnicornComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.map(function (params) { return params["id"]; }).subscribe(function (id) {
            var name = decodeURIComponent(id);
            _this.unicorn = _this.unicornsService.getUnicorn(name);
            _this.matingUnicorns = _this.unicornsService.getMatingUnicorns(name);
            if (!_this.unicorn) {
                _this.router.navigate([__WEBPACK_IMPORTED_MODULE_5__app_constants__["a" /* default */].routes.DASHBOARD]);
            }
        });
    };
    UnicornComponent.prototype.mateUnicorns = function () {
        var _this = this;
        var baby = this.unicornsService.mateUnicorns(this.unicorn, this.mateName);
        this.isSubmited = true;
        setTimeout(function () {
            if (baby) {
                _this.notificationService.open("Congrats, this is your newborn baby :) !", "success-toaster");
                _this.router.navigate([__WEBPACK_IMPORTED_MODULE_5__app_constants__["a" /* default */].routes.UNICORN, baby.name]);
            }
            else {
                _this.notificationService.open("Mating finished. No babies, mismatched genders", "success-toaster");
            }
            _this.isSubmited = false;
        }, 2000);
    };
    return UnicornComponent;
}());
UnicornComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-unicorn",
        template: __webpack_require__("../../../../../src/app/components/unicorn/unicorn.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/unicorn/unicorn.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_unicorn_service__["a" /* UnicornService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_unicorn_service__["a" /* UnicornService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_notification_service__["a" /* NotificationService */]) === "function" && _d || Object])
], UnicornComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=unicorn.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/unicorns/unicorns.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" (window:resize)=\"onResize($event)\">\r\n    <md-grid-list class=\"unicornsList\" [cols]=\"cols\" gutterSize=\"26px\" rowHeight=\"650px\">\r\n        <md-grid-tile *ngFor=\"let unicorn of unicorns\" [colspan]=\"1\" [rowspan]=\"1\" class=\"md-elevation-z4\">\r\n            <a [routerLink]=\"['/'+appConstants.routes.UNICORN, unicorn.name]\">\r\n                <app-unicorn-card [unicorn]=\"unicorn\"></app-unicorn-card>\r\n            </a>\r\n        </md-grid-tile>\r\n        <a md-mini-fab class=\"addUnicorn\" color=\"accent\" title=\"create\" [routerLink]=\"['/'+appConstants.routes.NEW_UNICORN]\">\r\n            <md-icon class=\"md-24\">add</md-icon>\r\n        </a>\r\n    </md-grid-list>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/unicorns/unicorns.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin: 0 auto;\n  width: 90%; }\n\n.unicornsList {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding-right: 26px; }\n\na {\n  text-decoration: none; }\n\n.addUnicorn {\n  position: absolute;\n  bottom: 16px;\n  right: 0;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/unicorns/unicorns.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnicornsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_unicorn_service__ = __webpack_require__("../../../../../src/app/services/unicorn.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("../../../../../src/app/app-constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnicornsComponent = (function () {
    function UnicornsComponent(unicornService) {
        this.unicornService = unicornService;
        this.appConstants = __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* default */];
    }
    UnicornsComponent.prototype.ngOnInit = function () {
        this.unicorns = this.unicornService.getUnicorns();
        this.cols = this.getCols(window.innerWidth);
    };
    UnicornsComponent.prototype.getCols = function (width) {
        if (width < 600) {
            return 1;
        }
        else if (width < 960) {
            return 2;
        }
        else if (width < 1280) {
            return 3;
        }
        return 4;
    };
    UnicornsComponent.prototype.onResize = function (event) {
        this.cols = this.getCols(event.target.innerWidth);
    };
    return UnicornsComponent;
}());
UnicornsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-unicorns",
        template: __webpack_require__("../../../../../src/app/components/unicorns/unicorns.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/unicorns/unicorns.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_unicorn_service__["a" /* UnicornService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_unicorn_service__["a" /* UnicornService */]) === "function" && _a || Object])
], UnicornsComponent);

var _a;
//# sourceMappingURL=unicorns.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/unicorn.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=unicorn.model.js.map

/***/ }),

/***/ "../../../../../src/app/services/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationService = (function () {
    function NotificationService(snackBar) {
        this.snackBar = snackBar;
        this.defaultClass = ["toast-top-right"];
    }
    NotificationService.prototype.open = function (message, extraClass, autoHide, action, actionButtonLabel) {
        if (autoHide === void 0) { autoHide = 3000; }
        if (action === void 0) { action = false; }
        if (actionButtonLabel === void 0) { actionButtonLabel = ""; }
        var classes = this.defaultClass.slice(0);
        var config = new __WEBPACK_IMPORTED_MODULE_0__angular_material__["c" /* MdSnackBarConfig */]();
        config.duration = autoHide;
        config.extraClasses = extraClass ? classes.concat([extraClass]) : classes;
        this.snackBar.open(message, action && actionButtonLabel, config);
    };
    return NotificationService;
}());
NotificationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MdSnackBar */]) === "function" && _a || Object])
], NotificationService);

var _a;
//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/unicorn.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnicornService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_constants__ = __webpack_require__("../../../../../src/app/app-constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnicornService = (function () {
    function UnicornService(utilsService) {
        this.utilsService = utilsService;
    }
    UnicornService.prototype.initiUnicorns = function () {
        var initialUnicorns = [
            {
                name: "Hylzarie",
                picture: this.getRandomPic("female"),
                age: "28",
                gender: "female",
                color: "7B64AC"
            },
            {
                name: "Demetrius",
                picture: this.getRandomPic("male"),
                age: "33",
                gender: "male",
                color: "41699A"
            },
            {
                name: "Quince",
                picture: this.getRandomPic("male"),
                age: "35",
                gender: "male",
                color: "FBDDDE"
            },
            {
                name: "Daisy",
                picture: this.getRandomPic("female"),
                age: "30",
                gender: "female",
                color: "B6D2E8"
            }
        ];
        if (!localStorage.getItem("unicorns")) {
            this.unicorns = initialUnicorns;
            localStorage.setItem("unicorns", JSON.stringify(initialUnicorns));
        }
        else {
            this.unicorns = JSON.parse(localStorage.getItem("unicorns"));
        }
    };
    UnicornService.prototype.getUnicorns = function () {
        return this.unicorns;
    };
    UnicornService.prototype.getMatingUnicorns = function (name) {
        return this.unicorns.filter(function (unicorn) { return unicorn.age > 5 && unicorn.name !== name; });
    };
    UnicornService.prototype.getUnicorn = function (name) {
        var foundUnicorn = this.unicorns.filter(function (unicorn) { return unicorn.name === name; });
        return foundUnicorn ? foundUnicorn[0] : null;
    };
    UnicornService.prototype.createUnicorn = function (unicorn) {
        this.unicorns = this.unicorns.concat([unicorn]);
        localStorage.setItem("unicorns", JSON.stringify(this.unicorns));
    };
    UnicornService.prototype.isUniqueName = function (name) {
        return this.unicorns.filter(function (unicorn) { return unicorn.name === name; }).length === 0;
    };
    UnicornService.prototype.saveUnicorn = function (unicorn) {
        localStorage.setItem("savedUnicorn", JSON.stringify(unicorn));
    };
    UnicornService.prototype.getSavedUnicorn = function () {
        if (!localStorage.getItem("savedUnicorn")) {
            var randomGender = this.getRandomGender();
            var randomPic = this.getRandomPic(randomGender);
            return {
                name: "",
                age: 5,
                gender: randomGender,
                picture: randomPic,
                color: "4574E0"
            };
        }
        return JSON.parse(localStorage.getItem("savedUnicorn"));
    };
    UnicornService.prototype.cleanSavedUnicorn = function () {
        localStorage.removeItem("savedUnicorn");
    };
    UnicornService.prototype.mateUnicorns = function (unicorn, mateName) {
        var mate = this.getUnicorn(mateName);
        if ((unicorn.gender === "male" && mate.gender === "female") ||
            (unicorn.gender === "female" && mate.gender === "male")) {
            var baby = {
                name: this.getBabyName(unicorn.name, mateName),
                age: 0,
                picture: this.getRandomPic("baby"),
                gender: this.getRandomGender(),
                color: this.utilsService.mixColors(unicorn.color, mate.color, 40)
            };
            this.createUnicorn(baby);
            return baby;
        }
        return null;
    };
    UnicornService.prototype.getBabyName = function (name1, name2) {
        var name = name1 + " " + name2 + " 1";
        if (this.isUniqueName(name)) {
            return name;
        }
        var index = parseInt(name.slice(name.length - 1), 10) + 1;
        name = name1 + " " + name2 + " " + index;
        return name;
    };
    UnicornService.prototype.getRandomPic = function (gender) {
        switch (gender) {
            case "other":
            case "female":
                return getRandomElement(__WEBPACK_IMPORTED_MODULE_1__app_constants__["a" /* default */].unicornImages.female, __WEBPACK_IMPORTED_MODULE_1__app_constants__["a" /* default */].unicornImages.female.length);
            case "male":
                return getRandomElement(__WEBPACK_IMPORTED_MODULE_1__app_constants__["a" /* default */].unicornImages.male, __WEBPACK_IMPORTED_MODULE_1__app_constants__["a" /* default */].unicornImages.male.length);
            default:
                return getRandomElement(__WEBPACK_IMPORTED_MODULE_1__app_constants__["a" /* default */].unicornImages.baby, __WEBPACK_IMPORTED_MODULE_1__app_constants__["a" /* default */].unicornImages.baby.length);
        }
        function getRandomElement(array, max) {
            return array[Math.floor(Math.random() * Math.floor(max))];
        }
    };
    UnicornService.prototype.getRandomGender = function () {
        var dice = Math.floor(Math.random() * Math.floor(3));
        switch (dice) {
            case 0:
                return "male";
            case 1:
                return "female";
            case 2:
                return "other";
        }
    };
    return UnicornService;
}());
UnicornService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__utils_service__["a" /* UtilsService */]) === "function" && _a || Object])
], UnicornService);

var _a;
//# sourceMappingURL=unicorn.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/utils.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilsService = (function () {
    function UtilsService() {
    }
    UtilsService.prototype.hexToRgb = function (hex) {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
        });
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? result : null;
    };
    UtilsService.prototype.addTransparency = function (rgbValues, transparency) {
        if (rgbValues) {
            return "rgba(" + parseInt(rgbValues[1], 16) + "," + parseInt(rgbValues[2], 16) + "," + parseInt(rgbValues[3], 16) + "," + transparency + ")";
        }
        return "rgba(0,0,0,0)";
    };
    UtilsService.prototype.mixColors = function (color_1, color_2, weight) {
        function d2h(d) {
            return d.toString(16);
        } // convert a decimal value to hex
        function h2d(h) {
            return parseInt(h, 16);
        } // convert a hex value to decimal
        weight = typeof weight !== "undefined" ? weight : 50; // set the weight to 50%, if that argument is omitted
        var color = "";
        for (var i = 0; i <= 5; i += 2) {
            // loop through each of the 3 hex pairs—red, green, and blue
            var v1 = h2d(color_1.substr(i, 2)); // extract the current pairs
            var v2 = h2d(color_2.substr(i, 2));
            // combine the current pairs from each source color, according to the specified weight
            var value = d2h(Math.floor(v2 + (v1 - v2) * (weight / 100.0)));
            while (value.length < 2) {
                value = "0" + value;
            } // prepend a '0' if val results in a single digit
            color += value; // concatenate val to our new color string
        }
        return color; // PROFIT!
    };
    return UtilsService;
}());
UtilsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UtilsService);

//# sourceMappingURL=utils.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map