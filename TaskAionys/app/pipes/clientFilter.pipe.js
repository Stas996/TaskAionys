"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ClientFilterPipe = (function () {
    function ClientFilterPipe() {
    }
    ClientFilterPipe.prototype.transform = function (items, fullname, cityId) {
        if (!items || (!fullname && cityId == 0))
            return items;
        if (cityId == 0)
            items.filter(function (v) { return v.fullName.toLowerCase().indexOf(fullname) >= 0; });
        return items.filter(function (v) { return v.fullName.toLowerCase().indexOf(fullname) >= 0 && v.cityId == cityId; });
    };
    return ClientFilterPipe;
}());
ClientFilterPipe = __decorate([
    core_1.Pipe({
        name: 'clientFilter',
        pure: false
    })
], ClientFilterPipe);
exports.ClientFilterPipe = ClientFilterPipe;
//# sourceMappingURL=clientFilter.pipe.js.map