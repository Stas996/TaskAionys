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
var dbOperation_1 = require("../enums/dbOperation");
var clients_service_1 = require("../services/clients.service");
var cities_service_1 = require("../services/cities.service");
var forms_1 = require("@angular/forms");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var ClientsComponent = (function () {
    function ClientsComponent(_formBuilder, _clientsService, _citiesService) {
        var _this = this;
        this._formBuilder = _formBuilder;
        this._clientsService = _clientsService;
        this._citiesService = _citiesService;
        this.onSubmit = function () {
            if (_this.dbOperation == dbOperation_1.DBOperation.create)
                _this.create(_this.clientForm.value);
            else if (_this.dbOperation == dbOperation_1.DBOperation.update)
                _this.update(_this.clientForm.value);
            else {
                _this.delete(_this.clientForm.value.id);
                _this.clientForm.enable();
            }
            _this.modal.close();
        };
        this.loadData = function () {
            _this._clientsService.getAll()
                .subscribe(function (clients) { _this.clients = clients; });
        };
        this.loadCities = function () {
            _this._citiesService.getAll()
                .subscribe(function (cities) {
                _this.cities = cities;
                _this.selectedCity = _this.cities[0];
            });
        };
        this.addClick = function () {
            _this.modalTitle = "Add new client";
            _this.modalBtnTitle = "Add";
            _this.clientForm.reset();
            _this.clientForm.patchValue({ cityId: _this.cities[0].id });
            _this.clientForm.enable();
            _this.modal.open();
            _this.dbOperation = dbOperation_1.DBOperation.create;
        };
        this.editClick = function (id) {
            _this.modalTitle = "Edit client";
            _this.modalBtnTitle = "Update";
            _this.chosenClient = _this.clients.filter(function (x) { return x.id == id; })[0];
            _this.clientForm.setValue(_this.chosenClient);
            _this.clientForm.enable();
            _this.modal.open();
            _this.dbOperation = dbOperation_1.DBOperation.update;
        };
        this.deleteClick = function (id) {
            _this.modalTitle = "Confirm delete?";
            _this.modalBtnTitle = "Delete";
            _this.chosenClient = _this.clients.filter(function (x) { return x.id == id; })[0];
            _this.clientForm.setValue(_this.chosenClient);
            _this.clientForm.disable();
            _this.modal.open();
            _this.dbOperation = dbOperation_1.DBOperation.delete;
        };
        this.create = function (data) {
            _this._clientsService.create(data)
                .subscribe(function (data) {
                if (data == 1) {
                    _this.responseMessage = "Data successfully added.";
                    _this.loadData();
                }
                else {
                    _this.responseMessage = "There is some issue in saving records, please contact to system administrator!";
                }
            }, function (error) {
                _this.responseMessage = error;
            });
        };
        this.update = function (data) {
            _this._clientsService.update(data)
                .subscribe(function (data) {
                if (data == 1) {
                    _this.responseMessage = "Data successfully update.";
                    _this.loadData();
                }
                else {
                    _this.responseMessage = "There is some issue in saving records, please contact to system administrator!";
                }
            }, function (error) {
                _this.responseMessage = error;
            });
        };
        this.delete = function (id) {
            _this._clientsService.delete(id)
                .subscribe(function (data) {
                if (data == 1) {
                    _this.responseMessage = "Data successfully deleted.";
                    _this.loadData();
                }
                else {
                    _this.responseMessage = "There is some issue in saving records, please contact to system administrator!";
                }
            }, function (error) {
                _this.responseMessage = error;
            });
        };
        this.clientForm = this._formBuilder.group({
            id: [''],
            cityId: [''],
            firstName: ['', forms_1.Validators.required],
            lastName: [''],
            fullName: [''],
            address: [''],
            phoneNumbersCSV: [''],
            phoneNumbers: [[]]
        });
        this.loadData();
        this.loadCities();
    }
    return ClientsComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], ClientsComponent.prototype, "modal", void 0);
ClientsComponent = __decorate([
    core_1.Component({
        selector: 'clients',
        templateUrl: './app/views/clients.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        clients_service_1.ClientsService,
        cities_service_1.CitiesService])
], ClientsComponent);
exports.ClientsComponent = ClientsComponent;
//# sourceMappingURL=clients.component.js.map