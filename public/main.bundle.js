webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media print{\r\n\r\n    .hideinprint{\r\n        display: none !important;  \r\n    }\r\n    #print-footer {\r\n        display: block;\r\n        position: fixed;\r\n        bottom: 0;\r\n        left:0;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<b>Test</b>\n<div [hidden]=\"!showinvoice\">\n   <div class=\"row\">\n      <div class=\"col-sm-6\">\n         <select [(ngModel)]=\"selected\" (change)=\"selectCompany();\" class=\"form-control\">\n         <option *ngFor=\"let o of CompanyList\" [value]=\"o.Name\">{{o.Name}}</option>\n         </select>\n      </div>\n      <div class=\"col-sm-6\">\n         {{ClientCompany.Name}} <br>   \n         {{ClientCompany.Add1}} <br>   \n         {{ClientCompany.Add2}} <br>   \n         {{ClientCompany.Add3}} <br>   \n      </div>\n   </div>\n   <div class=\"row\">\n      <div class=\"col-sm-3\">\n         <!-- <input type=\"number\" [(ngModel)]=\"count\" class=\"form-control\">  -->\n      </div>\n      <div class=\"col-sm-3\">\n         <!-- <input type=\"button\"  (click)=\"counterfilling()\" value=\"submit\" class=\"form-control\"> -->\n      </div>\n      <div class=\"col-sm-3\"></div>\n      <div class=\"col-sm-3\">\n         <!-- <input type=\"button\" value=\"Add\" (click)=\"AddCounter()\" class=\"form-control\" [hidden]=\"!AddButtonShow\"> -->\n      </div>\n   </div>\n   <div class=\"row\"  align=\"center\" style=\"padding: 10px;\">\n      <div class=\"col-sm-1\">SL#</div>\n      <div class=\"col-sm-2\" align=\"left\">Description</div>\n      <div class=\"col-sm-1\" style=\"text-align:right;\">Billed</div>\n      <div class=\"col-sm-1\" style=\"text-align:right;\">Rate</div>\n      <div class=\"col-sm-1\" style=\"text-align:right;\">Per</div>\n      <div class=\"col-sm-1\" style=\"text-align:right;\">Amount</div>\n      <div class=\"col-sm-1\" style=\"text-align:right;\">Vat%</div>\n      <div class=\"col-sm-2\" style=\"text-align:right;\">Amnt Taxable</div>\n      <div class=\"col-sm-2\" style=\"text-align:right;\">Tax AMnt</div>\n   </div>\n   <div class=\"row\" *ngFor=\"let o of item_array_counter\"  align=\"center\" style=\"padding: 10px;\">\n      <div class=\"col-sm-1\">{{o+1}}</div>\n      <div class=\"col-sm-2\" align=\"left\">\n         <!-- <input class=\"form-control\"  type=\"text\" [(ngModel)]=\"InvItem[o].Name\"> -->\n         <select [(ngModel)]=\"InvItem[o].Name\" (change)=\"selectItem(InvItem[o].Name,o);\" class=\"form-control\">\n         <option *ngFor=\"let item of ItemList\" [value]=\"item.Name\">{{item.Name}}</option>\n         </select>\n      </div>\n      <div class=\"col-sm-1\" style=\"text-align:right;\"><input class=\"form-control\"  type=\"number\" [(ngModel)]=\"InvItem[o].Billed\" (change)=\"additem(o)\"></div>\n      <div class=\"col-sm-1\" style=\"text-align:right;\"><input class=\"form-control\"  type=\"number\" [(ngModel)]=\"InvItem[o].Rate\" (change)=\"additem(o)\"></div>\n      <div class=\"col-sm-1\" style=\"text-align:right;\">{{InvItem[o].Qty}}</div>\n      <div class=\"col-sm-1\" style=\"text-align:right;\">{{InvItem[o].Amount.toFixed(2)}}</div>\n      <div class=\"col-sm-1\" style=\"text-align:right;\">{{InvItem[o].Tax.toFixed(2)}}</div>\n      <div class=\"col-sm-2\" style=\"text-align:right;\">{{InvItem[o].TaxableAmnt.toFixed(2)}}</div>\n      <div class=\"col-sm-2\" style=\"text-align:right;\">{{InvItem[o].TaxAmnt.toFixed(2)}}</div> \n      \n   </div>\n   <div class=\"row\">\n       <div class=\"col-sm 3\"></div>\n       <div class=\"col-sm 3\"></div>\n       <div class=\"col-sm 3\"></div>\n       <div class=\"col-sm 3\">\n           \n           <input type=\"button\" value=\"Add\" (click)=\"AddCounter()\" class=\"form-control\" [hidden]=\"!AddButtonShow\">\n       </div>\n   </div>\n   <br>\n   <br>\n   <br>\n   <br>\n   <div class=\"row\">\n      <div class=\"col-sm-3\">Total Amount:   {{invoicesum.Total_Amt.toFixed(2)}}</div>\n      <div class=\"col-sm-3\"><input type=\"button\" class=\"form-control\" (click)=\"totalcheck()\" value=\"Compute\"></div>\n      <div class=\"col-sm-3\"></div>\n      <div class=\"col-sm-3\">\n          <div  [hidden]=\"invoicesum.Total_Amt==0.00\">\n            <input type=\"button\" [hidden]=\"ClientCompany.Name==''\" class=\"form-control\" (click)=\"SavetoDB()\" value=\"Save\">\n          </div>\n    </div>\n   </div>\n</div>\n\n<div [hidden]=\"showinvoice\">\n   <div class=\"row\">\n      <div class=\"col-sm-3\">\n         <input type=\"button\" (click)=\"showinvoice=!showinvoice\" value=\"Edit\" class=\"form-control hideinprint\">\n      </div>\n      <div class=\"col-sm-3\"></div>\n      <div class=\"col-sm-3\"></div>\n      <div class=\"col-sm-3\">\n         <input type=\"button\" (click)=\"print()\" value=\"Print\" class=\"form-control hideinprint\">\n      </div>\n   </div>\n   <br>\n   <div style=\"border:1px solid black; padding: 10px;\">\n      <div class=\"row\">\n         <div class=\"col-sm-6\"><span style=\"float: left;text-align:left;\"><b>SASH INTERGRATED FOODSTUFF TRADING LLC</b> <br/>\n            Arenco Bldg 4, Office G-05, Dubai Investment Park 1<br/>\n            Emirate, Dubai<br/>\n            TRN : {{trnNo}}<br/>\n            E-Mail : info@sashfoodstuff.ae<br/></span>\n         </div>\n         <div class=\"col-sm-6\"><span style=\"float: right;text-align:right;\">Dubai<br> TRN : {{trnNo}}<br/>\n            E-Mail : info@sashfoodstuff.ae<br/></span>\n         </div>\n      </div>\n      <div class=\"row\">\n         <div class=\"col-sm-12\" align=\"center\"><b>Tax Invoice</b></div>\n      </div>\n   </div>\n   <div style=\"border:1px solid black; padding: 10px;\">\n      <div class=\"row\">\n         <div class=\"col-sm-4\">\n            <span style=\"float: left;text-align:left;\">\n               <!-- <select [(ngModel)]=\"selected\" (change)=\"selectCompany(o);\">\n                  <option *ngFor=\"let o of CompanyList\" [value]=\"o\">{{o.Name}}</option>\n                  </select><br> {{selected.Name}} <br>  -->\n               <b>{{ClientCompany.Name}}</b><br>{{ClientCompany.Add1}} <br>{{ClientCompany.Add2}} <br>{{ClientCompany.Add3}} <br> \n            </span>\n         </div>\n         <div class=\"col-sm-8\">\n            <div class=\"row\" >\n               <div class=\"col-sm-6\">\n                  <span style=\"float: left;text-align:left;\"><b>In#</b><br>{{currentInv}}</span>\n                  <!-- <span style=\"float: right;text-align:right;\"><b>In#(AR)</b><br>{{currentInv}}</span> -->\n               </div>\n               <div class=\"col-sm-6\">\n                  <span style=\"float: left;text-align:left;\"><b>Date</b><br>{{ dt | date }}</span>\n                  <!-- <span style=\"float: right;text-align:right;\"><b>Date(AR)</b><br>{{ dt | date }}</span> -->\n               </div>\n            </div>\n            <div class=\"row\">\n               <div class=\"col-sm-6\">\n                  <span style=\"float: left;text-align:left;\"><b>BuyersO#</b><br>{{ClientCompany.BuyerOrderNo}}</span>\n                  <!-- <span style=\"float: right;text-align:right;\"><b>BuyersO#(AR)</b><br>{{ClientCompany.BuyerOrderNo}}</span> -->\n               </div>\n               <div class=\"col-sm-6\">\n                  <span style=\"float: left;text-align:left;\"><b>Dated#</b><br>{{ dt | date }}</span>\n                  <!-- <span style=\"float: right;text-align:right;\"><b>Dated#(AR)</b><br>{{ dt | date }}</span> -->\n               </div>\n            </div>\n            <div class=\"row\">\n               <div class=\"col-sm-6\">\n                  <span style=\"float: left;text-align:left;\"><b>DespatchThru#</b><br>{{ClientCompany.DespThru}}</span>\n                  <!-- <span style=\"float: right;text-align:right;\"><b>DespatchThru#(AR)</b><br>{{ClientCompany.DespThru}}</span> -->\n               </div>\n               <div class=\"col-sm-6\">\n                  <span style=\"float: left;text-align:left;\"><b>Place of Supp#</b><br>{{ClientCompany.PlaceOfSupply}}</span>\n                  <!-- <span style=\"float: right;text-align:right;\"><b>Place of Supp#(AR)</b><br>{{ClientCompany.PlaceOfSupply}}</span> -->\n               </div>\n            </div>\n            <div class=\"row\">\n               <div class=\"col-sm-12\">\n                  <span style=\"float: left;text-align:left;\"><b>Mode of Pay#</b><br>{{ClientCompany.ModeOfPay}}</span>\n                  <!-- <span style=\"float: right;text-align:right;\"><b>Mode of Pay#(AR)</b><br>{{ClientCompany.ModeOfPay}}</span> -->\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n   <div align=\"center\"  style=\"border:1px solid black;\">\n      <div align=\"center\"  style=\"border:1px solid black; padding: 10px;\">\n         <div class=\"row\">\n            <div class=\"col-sm-1\">SL#</div>\n            <div class=\"col-sm-2\">Description</div>\n            <div class=\"col-sm-1\">Billed</div>\n            <div class=\"col-sm-1\">Rate</div>\n            <div class=\"col-sm-1\">Per</div>\n            <div class=\"col-sm-1\">Amount</div>\n            <div class=\"col-sm-1\">Vat%</div>\n            <div class=\"col-sm-2\">Amnt Taxable</div>\n            <div class=\"col-sm-2\">Tax AMnt</div>\n         </div>\n      </div>\n      <div align=\"center\" class=\"row\" style=\"padding: 10px;\" *ngFor=\"let o of item_array_counter\">\n         <div class=\"col-sm-1\">{{o+1}}</div>\n         <div class=\"col-sm-2\" align=\"left\">{{InvItem[o].Name}}</div>\n         <div class=\"col-sm-1\" style=\"text-align:right;\">{{InvItem[o].Billed}}</div>\n         <div class=\"col-sm-1\" style=\"text-align:right;\">{{InvItem[o].Rate}}</div>\n         <div class=\"col-sm-1\" style=\"text-align:right;\">{{InvItem[o].Qty}}</div>\n         <div class=\"col-sm-1\" style=\"text-align:right;\">{{InvItem[o].Amount.toFixed(2)}}</div>\n         <div class=\"col-sm-1\" style=\"text-align:right;\">{{InvItem[o].Tax.toFixed(2)}}</div>\n         <div class=\"col-sm-2\" style=\"text-align:right;\">{{InvItem[o].TaxableAmnt.toFixed(2)}}</div>\n         <div class=\"col-sm-2\" style=\"text-align:right;\">{{InvItem[o].TaxAmnt.toFixed(2)}}</div>\n      </div>\n      <br>\n      <br>\n      <br>\n      <br>\n      <div align=\"right\"  style=\"border:1px solid black; padding: 10px;\">\n         <div class=\"row\">\n            <div class=\"col-sm-1\"></div>\n            <div class=\"col-sm-2\">Total</div>\n            <div class=\"col-sm-1\">{{invoicesum.Total_Billed_Qty}} Kg</div>\n            <div class=\"col-sm-1\"></div>\n            <div class=\"col-sm-1\"></div>\n            <div class=\"col-sm-1\">{{invoicesum.Total_Amt.toFixed(2)}}</div>\n            <div class=\"col-sm-1\"></div>\n            <div class=\"col-sm-2\">{{invoicesum.Total_Taxable_Amt.toFixed(2)}}</div>\n            <div class=\"col-sm-2\">{{invoicesum.Total_Tax_Amt.toFixed(2)}}</div>\n         </div>\n      </div>\n   </div>\n   <div   style=\"padding: 10px;\">\n      <div class=\"row\">\n         <div class=\"col-sm-9\">\n            Amount Chargable in words\n         </div>\n         <div class=\"col-sm-1\"style=\"text-align:right;\">Vat%</div>\n         <div class=\"col-sm-1\"style=\"text-align:right;\">Taxable Amt</div>\n         <div class=\"col-sm-1\"style=\"text-align:right;\">Tax Amt</div>\n      </div>\n      <div class=\"row\">\n         <div class=\"col-sm-9\">\n         </div>\n         <div class=\"col-sm-1\"style=\"text-align:right;\">{{total_tax_amt.toFixed(2)}}%</div>\n         <div class=\"col-sm-1\"style=\"text-align:right;\">{{invoicesum.Total_Taxable_Amt.toFixed(2)}}</div>\n         <div class=\"col-sm-1\"style=\"text-align:right;\">{{invoicesum.Total_Tax_Amt.toFixed(2)}}</div>\n      </div>\n      <div id=\"print-footer\">\n         <div id=\"spacer\" class=\"row\">\n            <div class=\"col-sm-12\">\n               <br>\n               <br>\n               <br>\n               <br>\n               <br>   \n               <u>Declaration</u> <br> We declare that the invoice shows the actual price of the goods described and that of particular....\n            </div>\n         </div>\n      </div>\n      <div   style=\"border:1px solid black; padding: 10px;\">\n         <div class=\"row\">\n            <div class=\"col-sm-6\" style=\"border-right:1px solid black;\">\n               Customer seal and signature\n               <br>\n               <br>\n               <br>\n               <br>\n            </div>\n            <div class=\"col-sm-6\">\n               <b>For SASH INTEGRATED FOODSTUFF TRADING LLC</b><br>\n               For SASH INTEGRATED FOODSTUFF TRADING LLC <br>\n               <br>\n               <br>\n               <br>\n               <br>\n               <div class=\"row\">\n                  <div class=\"col-sm-4\">Prepared by</div>\n                  <div class=\"col-sm-4\">Verified by</div>\n                  <div class=\"col-sm-4\">Authorised Signatory</div>\n               </div>\n            </div>\n         </div>\n      </div>\n      <br>\n      <br>\n   </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(router, http) {
        this.router = router;
        this.http = http;
        this.AddButtonShow = true;
        this.i = -1;
        this.k = 0;
        this.showinvoice = true;
        this.count = 1;
        this.item_array_counter = [0];
        this.total_tax_amt = 0;
        this.InvItem = [
            {
                InvoiceNum: 0,
                Name: "",
                Billed: 0.00,
                Rate: 0.00,
                Qty: "Kg",
                Tax: 0.00,
                TaxableAmnt: 0.00,
                TaxAmnt: 0.00,
                Amount: 0.00
            },
            {
                InvoiceNum: 0,
                Name: "",
                Billed: 0.00,
                Rate: 0.00,
                Qty: "Kg",
                Tax: 0.00,
                TaxableAmnt: 0.00,
                TaxAmnt: 0.00,
                Amount: 0.00
            },
            {
                InvoiceNum: 0,
                Name: "",
                Billed: 0.00,
                Rate: 0.00,
                Qty: "Kg",
                Tax: 0.00,
                TaxableAmnt: 0.00,
                TaxAmnt: 0.00,
                Amount: 0.00
            },
            {
                InvoiceNum: 0,
                Name: "",
                Billed: 0.00,
                Rate: 0.00,
                Qty: "Kg",
                Tax: 0.00,
                TaxableAmnt: 0.00,
                TaxAmnt: 0.00,
                Amount: 0.00
            },
            {
                InvoiceNum: 0,
                Name: "",
                Billed: 0.00,
                Rate: 0.00,
                Qty: "Kg",
                Tax: 0.00,
                TaxableAmnt: 0.00,
                TaxAmnt: 0.00,
                Amount: 0.00
            },
            {
                InvoiceNum: 0,
                Name: "",
                Billed: 0.00,
                Rate: 0.00,
                Qty: "Kg",
                Tax: 0.00,
                TaxableAmnt: 0.00,
                TaxAmnt: 0.00,
                Amount: 0.00
            },
            {
                InvoiceNum: 0,
                Name: "",
                Billed: 0.00,
                Rate: 0.00,
                Qty: "Kg",
                Tax: 0.00,
                TaxableAmnt: 0.00,
                TaxAmnt: 0.00,
                Amount: 0.00
            },
            {
                InvoiceNum: 0,
                Name: "",
                Billed: 0.00,
                Rate: 0.00,
                Qty: "Kg",
                Tax: 0.00,
                TaxableAmnt: 0.00,
                TaxAmnt: 0.00,
                Amount: 0.00
            }
        ];
        this.ItemList = [
            {
                Name: "Mutton",
                Billed: 1.00,
                Rate: 24.00,
                Qty: "Kg",
                Tax: 5.00,
                TaxableAmnt: 0.00,
                TaxAmnt: 0.00,
                InvoiceNum: 0,
                Amount: 0.00
            },
            {
                Name: "Beef",
                Billed: 1.00,
                Rate: 26.00,
                Qty: "Kg",
                Tax: 5.00,
                TaxableAmnt: 0.00,
                TaxAmnt: 0.00,
                InvoiceNum: 0, Amount: 0.00
            },
            {
                Name: "Mutton SP",
                Billed: 1.00,
                Rate: 23.00,
                Qty: "Kg",
                Tax: 5.00,
                TaxableAmnt: 0.00,
                TaxAmnt: 0.00,
                InvoiceNum: 0, Amount: 0.00
            },
            {
                Name: "Beef SP",
                Billed: 0.00,
                Rate: 0.00,
                Qty: "Kg",
                Tax: 5.00,
                TaxableAmnt: 0.00,
                TaxAmnt: 0.00,
                InvoiceNum: 0, Amount: 0.00
            },
            {
                Name: "Sausage",
                Billed: 0.00,
                Rate: 0.00,
                Qty: "Kg",
                Tax: 5.00,
                TaxableAmnt: 0.00,
                TaxAmnt: 0.00,
                InvoiceNum: 0, Amount: 0.00
            },
            {
                Name: "itemName_6",
                Billed: 0.00,
                Rate: 0.00,
                Qty: "Kg",
                Tax: 5.00,
                TaxableAmnt: 0.00,
                TaxAmnt: 0.00,
                InvoiceNum: 0, Amount: 0.00
            },
            {
                Name: "itemName_7",
                Billed: 0.00,
                Rate: 0.00,
                Qty: "Kg",
                Tax: 5.00,
                TaxableAmnt: 0.00,
                TaxAmnt: 0.00,
                InvoiceNum: 0, Amount: 0.00
            },
            {
                Name: "itemName_8",
                Billed: 0.00,
                Rate: 0.00,
                Qty: "Kg",
                Tax: 5.00,
                TaxableAmnt: 0.00,
                TaxAmnt: 0.00,
                InvoiceNum: 0, Amount: 0.00
            }
        ];
        this.invoicesum = {
            Invoice_No: 0,
            Currency: "AED",
            Total_Billed_Qty: 0,
            Total_Amt: 0,
            Total_Taxable_Amt: 0,
            Total_Tax_Amt: 0,
            Total_Amt_inWords: "string",
            Total_VAT_Amt_inWords: "string"
        };
        this.CompanyList = [
            {
                Invoice_No: 0,
                Name: "ClientName1",
                Add1: "fzllc",
                Add2: "address2",
                Add3: "address 3",
                BuyerOrderNo: 135790,
                DespThru: "nith",
                ModeOfPay: "CASH",
                ModeOfPayAr: "CASH AR",
                PlaceOfSupply: "Emirate"
            },
            {
                Invoice_No: 0,
                Name: "ClientName2",
                Add1: "fzllc",
                Add2: "address2",
                Add3: "address 3",
                BuyerOrderNo: 135790,
                DespThru: "nith",
                ModeOfPay: "CASH",
                ModeOfPayAr: "CASH AR",
                PlaceOfSupply: "Emirate"
            },
            {
                Invoice_No: 0,
                Name: "ClientName3",
                Add1: "fzllc",
                Add2: "address2",
                Add3: "address 3",
                BuyerOrderNo: 135790,
                DespThru: "nith",
                ModeOfPay: "CASH",
                ModeOfPayAr: "CASH AR",
                PlaceOfSupply: "Emirate"
            },
            {
                Invoice_No: 0,
                Name: "ClientName4",
                Add1: "fzllc",
                Add2: "address2",
                Add3: "address 3",
                BuyerOrderNo: 135790,
                DespThru: "nith",
                ModeOfPay: "CASH",
                ModeOfPayAr: "CASH AR",
                PlaceOfSupply: "Emirate"
            },
            {
                Invoice_No: 0,
                Name: "ClientName5",
                Add1: "fzllc",
                Add2: "address2",
                Add3: "address 3",
                BuyerOrderNo: 135790,
                DespThru: "nith",
                ModeOfPay: "CASH",
                ModeOfPayAr: "CASH AR",
                PlaceOfSupply: "Emirate"
            }
        ];
        this.ClientCompany = {
            Invoice_No: 0,
            Name: "",
            Add1: "",
            Add2: "",
            Add3: "",
            BuyerOrderNo: 0,
            DespThru: "",
            ModeOfPay: "",
            ModeOfPayAr: "",
            PlaceOfSupply: ""
        };
        this.MainInvVar = {
            InvNoNext: 1919,
            Locked: false
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.dt = new Date();
        this.trnNo = 100397147800003;
        this.emailID = "info@sashfoodstuff.ae";
        //  this.MainInvVar.InvNoNext=123467676767;
        this.currentInv = this.MainInvVar.InvNoNext;
        this.MainInvVar.Locked = true;
    };
    DashboardComponent.prototype.selectCompany = function () {
        console.log("selectCompany");
        do {
            this.i = this.i + 1;
            this.ClientCompany = this.CompanyList[this.i];
        } while (this.selected != this.CompanyList[this.i].Name);
        this.i = -1;
        console.log(this.selected);
    };
    DashboardComponent.prototype.additem = function (k) {
        console.log("additem");
        this.InvItem[k].TaxableAmnt = this.InvItem[k].Billed * this.InvItem[k].Rate;
        this.InvItem[k].TaxAmnt =
            this.InvItem[k].TaxableAmnt * (this.InvItem[k].Tax / 100);
        this.InvItem[k].Amount =
            this.InvItem[k].TaxAmnt + this.InvItem[k].TaxableAmnt;
        console.log("taxable" + this.InvItem[k].TaxableAmnt);
        console.log("tax" + this.InvItem[k].TaxAmnt);
        console.log("amt" + this.InvItem[k].Amount);
        this.totalcheck();
    };
    DashboardComponent.prototype.totalcheck = function () {
        if (this.MainInvVar.InvNoNext == 1919) {
            this.updateInvNum();
        }
        else {
            this.invoicesum.Invoice_No = this.MainInvVar.InvNoNext;
            this.ClientCompany.Invoice_No = this.MainInvVar.InvNoNext;
        }
        this.currentInv = this.MainInvVar.InvNoNext;
        console.log("totalcheck");
        this.k = 0;
        this.TotalInvAmnt = 0.00;
        this.invoicesum.Total_Billed_Qty = 0.00;
        this.total_tax_amt = 0.00;
        this.invoicesum.Total_Taxable_Amt = 0.00;
        this.invoicesum.Total_Tax_Amt = 0.00;
        this.invoicesum.Total_Amt = 0.00;
        for (this.k = 0; this.k < this.InvItem.length; this.k++) {
            if (this.InvItem[this.k].Amount > 0) {
                this.TotalInvAmnt += this.InvItem[this.k].Amount;
                this.invoicesum.Total_Tax_Amt += this.InvItem[this.k].TaxAmnt;
                this.invoicesum.Total_Taxable_Amt += this.InvItem[this.k].TaxableAmnt;
                this.invoicesum.Total_Billed_Qty += this.InvItem[this.k].Billed;
            }
        }
        this.invoicesum.Total_Amt = this.TotalInvAmnt;
        this.total_tax_amt = this.invoicesum.Total_Tax_Amt / this.TotalInvAmnt;
    };
    DashboardComponent.prototype.selectItem = function (item, o) {
        console.log("selectItem");
        this.k = 0;
        console.log("listitem:" + this.ItemList.length);
        console.log(item + "," + o);
        for (this.k = 0; this.k < this.ItemList.length; this.k++) {
            if (this.ItemList[this.k].Name == item) {
                // this.InvItem[o].=this.ItemList[this.k];
                this.InvItem[o].Name = this.ItemList[this.k].Name;
                this.InvItem[o].Billed = this.ItemList[this.k].Billed;
                this.InvItem[o].Rate = this.ItemList[this.k].Rate;
                this.InvItem[o].Qty = this.ItemList[this.k].Qty;
                this.InvItem[o].Tax = this.ItemList[this.k].Tax;
                this.InvItem[o].TaxableAmnt =
                    this.InvItem[o].Billed * this.InvItem[o].Rate;
                this.InvItem[o].TaxAmnt =
                    this.InvItem[o].TaxableAmnt * (this.InvItem[o].Tax / 100);
                this.InvItem[o].Amount =
                    this.InvItem[o].TaxAmnt + this.InvItem[o].TaxableAmnt;
                console.log(this.ItemList[this.k].Name);
                console.log(this.InvItem[o].Name);
                console.log("runs at " + this.k);
            }
        }
        // this.additem(o);
        this.totalcheck();
    };
    DashboardComponent.prototype.counterfilling = function () {
        console.log("counterfilling");
        this.k = 0;
        while (this.k < this.count) {
            if (this.item_array_counter.length == 8) {
                console.log("Maximum limit reached");
            }
            else {
                this.item_array_counter[this.k] = this.k;
                this.InvItem[this.k].Name = "item " + this.k;
                console.log(this.k);
                console.log(this.item_array_counter[this.k]);
            }
            this.k += 1;
        }
    };
    DashboardComponent.prototype.AddCounter = function () {
        console.log("AddCounter");
        console.log(this.item_array_counter);
        console.log(this.item_array_counter.length);
        this.k = this.item_array_counter.length;
        this.item_array_counter[this.k] = this.item_array_counter.length;
        this.AddButtonShow = true;
        if (this.item_array_counter.length == 8) {
            this.AddButtonShow = false;
        }
    };
    DashboardComponent.prototype.print = function () {
        console.log("print");
        window.print();
    };
    DashboardComponent.prototype.SavetoDB = function () {
        console.log("1st");
        console.log(this.MainInvVar.InvNoNext);
        this.buffer = this.MainInvVar.InvNoNext;
        this.showinvoice = !this.showinvoice;
        console.log(this.buffer);
        for (this.k = 0; this.k < this.item_array_counter.length; this.k++) {
            this.InvItem[this.k].InvoiceNum = this.buffer;
        }
        this.postrequestSumm(this.invoicesum);
        this.postrequest(this.InvItem);
        this.postrequestComp(this.ClientCompany);
        // console.log(buffer);
    };
    DashboardComponent.prototype.updateInvNum = function () {
        var _this = this;
        console.log("2nd");
        this.http.get('/NextInvoiceNum/show/5a9bb669734d1d5a71e666d4').map(function (res) { return res; })
            .subscribe(function (res) {
            var data = JSON.parse(res['_body']);
            _this.MainInvVar.InvNoNext = data;
            console.log(_this.MainInvVar.InvNoNext);
            _this.buffer = _this.MainInvVar.InvNoNext;
            // this.updateNextInvoiceNum();
        });
    };
    DashboardComponent.prototype.updateNextInvoiceNum = function () {
        var _this = this;
        console.log("3rd");
        this.http.get('/NextInvoiceNum/update').map(function (res) { return res; })
            .subscribe(function (res) {
            var data = JSON.parse(res['_body']);
            console.log(data);
            console.log(_this.MainInvVar.InvNoNext);
        });
    };
    DashboardComponent.prototype.postrequest = function (savethis) {
        console.log("4th");
        var k = 0;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // this.http.get('/NextInvoiceNum/show/5a9bb669734d1d5a71e666d4').map(res => res)
        // .subscribe(res=>{
        //   var data = JSON.parse(res['_body']);
        //   console.log(data);
        //   this.MainInvVar.InvNoNext=data;
        // });
        for (var i = 0; i < savethis.length; i++) {
            if (savethis[i].InvoiceNum != 0) {
                // savethis[i].InvoiceNum= this.MainInvVar.InvNoNext;
                this.http.post('invoiceitems/add', savethis[i], { headers: headers })
                    .subscribe(function (res) {
                    // this.router.navigate(['/dashboard']);
                    // console.log(res);
                    console.log("Saved item Vs Inv");
                    k = 1;
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                console.log(i);
            }
        }
        console.log(k);
    };
    DashboardComponent.prototype.postrequestSumm = function (savethisSumm) {
        console.log("4th");
        var k = 0;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.http.post('Invoicesummary/add', savethisSumm, { headers: headers })
            .subscribe(function (res) {
            // this.router.navigate(['/dashboard']);
            console.log("Saved Sum Vs Inv");
            // console.log(res);
            k = 1;
        }, function (err) {
            console.log(err);
        });
        console.log(k);
    };
    DashboardComponent.prototype.postrequestComp = function (savethisComp) {
        console.log("4th");
        var k = 0;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.http.post('Invoicecompany/add', savethisComp, { headers: headers })
            .subscribe(function (res) {
            // this.router.navigate(['/dashboard']);
            console.log("Saved company Vs Inv");
            k = 1;
        }, function (err) {
            console.log(err);
        });
        console.log(k);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-dashboard",
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>MEAN Authentication App</h1>\n  <p class=\"lead\">Welcome to our custom MEAN authentication application built from scratch </p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-dark\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Express Backend</h3>\n    <p>A rock solid Node.js/Express server using Mongoose to organize models and query the database</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Angular-CLI</h3>\n    <p>Angular-CLI to generate components, services and more. Local dev server and easy compilation</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>JWT Tokens</h3>\n    <p>Full featured authentication using JSON web tokens. Login and store user data</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\" >Login</h2>\n<form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"Username\">Username</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter Username\" [(ngModel)]=\"username\" name=\"username\">\n        </div>\n        <div class=\"form-group\">\n        <label for=\"Password\">Password</label>\n        <input type=\"password\" class=\"form-control\" placeholder=\" Enter Password\" [(ngModel)]=\"password\" name=\"password\">\n        </div>\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" value=\"remember-me\"> Remember me\n          </label>\n        </div>\n        <input class=\"btn btn-lg btn-primary\" type=\"submit\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n      <a class=\"navbar-brand\" href=\"#\">MEAN Auth App</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/']\">Home <span></span></a>\n          </li>\n        </ul>\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard </a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile </a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/login']\">Login </a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\"><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username : {{user.username}}</li>\n    <li class=\"list-group-item\">Email : {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\" >\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Enter Name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Enter Username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\" Enter Password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can now login', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = true; // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map