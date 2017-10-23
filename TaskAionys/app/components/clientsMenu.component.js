"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var clients_service_1 = require("../services/clients.service");
var cities_service_1 = require("../services/cities.service");
var ClientsMenuComponent = (function () {
    function ClientsMenuComponent(_clientsService, _citiesService) {
        var _this = this;
        this._clientsService = _clientsService;
        this._citiesService = _citiesService;
        this.loadData = function () {
            _this._clientsService.getAll()
                .subscribe(function (clients) {
                _this.clients = clients;
                _this.menuClients = clients;
            });
        };
        this.loadCities = function () {
            _this._citiesService.getAll()
                .subscribe(function (cities) {
                _this.cities = cities;
                _this.cities.unshift({ id: 0, name: 'Select city' });
                _this.selectedCity = _this.cities[0];
            });
        };
        this.resetFilter = function () {
            if (_this._clientsService.isChanged)
                _this.filterName = '';
            _this.selectedCity = _this.cities[0];
        };
        this.loadData();
        this.loadCities();
        this.filterName = '';
        setInterval(function () {
            if (_this._clientsService.isChanged) {
                _this.loadData();
                _this._clientsService.isChanged = false;
            }
        }, 100);
    }
    return ClientsMenuComponent;
}());
ClientsMenuComponent = __decorate([
    core_1.Component({
        selector: 'clients-menu',
        templateUrl: './app/views/clientsMenu.component.html',
        styleUrls: ['./app/styles/clientsMenu.style.css']
    }),
    __metadata("design:paramtypes", [clients_service_1.ClientsService, cities_service_1.CitiesService])
], ClientsMenuComponent);
exports.ClientsMenuComponent = ClientsMenuComponent;
//# sourceMappingURL=clientsMenu.component.js.map