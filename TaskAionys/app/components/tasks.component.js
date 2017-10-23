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
var tasks_service_1 = require("../services/tasks.service");
var clients_service_1 = require("../services/clients.service");
var forms_1 = require("@angular/forms");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var router_1 = require("@angular/router");
var TasksComponent = (function () {
    function TasksComponent(_formBuilder, _tasksService, _clientsService, _route) {
        var _this = this;
        this._formBuilder = _formBuilder;
        this._tasksService = _tasksService;
        this._clientsService = _clientsService;
        this._route = _route;
        this.minDate = new Date();
        this.onSubmit = function () {
            if (_this.dbOperation == dbOperation_1.DBOperation.create)
                _this.create(_this.taskForm.value);
            else if (_this.dbOperation == dbOperation_1.DBOperation.update)
                _this.update(_this.taskForm.value);
            else {
                _this.delete(_this.taskForm.value.id);
                _this.taskForm.enable();
            }
            _this.modal.close();
        };
        this.loadData = function (clientId) {
            _this._tasksService.getByClientId(clientId)
                .subscribe(function (tasks) {
                _this.tasks = tasks;
                for (var i = 0; i < tasks.length; i++) {
                    var startTime = tasks[i].startTime;
                    var endTime = tasks[i].endTime;
                    _this.tasks[i].startTime = new Date(startTime);
                    _this.tasks[i].endTime = new Date(endTime);
                }
            });
        };
        this.getCurrentClient = function (clientId) {
            _this._clientsService.getById(_this.clientId)
                .subscribe(function (client) { _this.currentClient = client; });
        };
        this.addClick = function () {
            _this.modalTitle = "Add new task";
            _this.modalBtnTitle = "Add";
            _this.taskForm.reset();
            _this.taskForm.patchValue({ clientId: _this.clientId });
            _this.taskForm.enable();
            _this.modal.open();
            _this.dbOperation = dbOperation_1.DBOperation.create;
        };
        this.editClick = function (id) {
            _this.modalTitle = "Edit task";
            _this.modalBtnTitle = "Update";
            _this.chosenTask = _this.tasks.filter(function (x) { return x.id == id; })[0];
            _this.taskForm.patchValue(_this.chosenTask);
            _this.taskForm.enable();
            _this.modal.open();
            _this.dbOperation = dbOperation_1.DBOperation.update;
        };
        this.deleteClick = function (id) {
            _this.modalTitle = "Confirm delete?";
            _this.modalBtnTitle = "Delete";
            _this.chosenTask = _this.tasks.filter(function (x) { return x.id == id; })[0];
            _this.taskForm.patchValue(_this.chosenTask);
            _this.taskForm.disable();
            _this.modal.open();
            _this.dbOperation = dbOperation_1.DBOperation.delete;
        };
        this.create = function (data) {
            _this._tasksService.create(data)
                .subscribe(function (data) {
                if (data == 1) {
                    _this.responseMessage = "Data successfully added.";
                    _this.loadData(_this.clientId);
                }
                else {
                    _this.responseMessage = "There is some issue in saving records, please contact to system administrator!";
                }
            }, function (error) {
                _this.responseMessage = error;
            });
        };
        this.update = function (data) {
            _this._tasksService.update(data)
                .subscribe(function (data) {
                if (data == 1) {
                    _this.responseMessage = "Data successfully update.";
                    _this.loadData(_this.clientId);
                }
                else {
                    _this.responseMessage = "There is some issue in saving records, please contact to system administrator!";
                }
            }, function (error) {
                _this.responseMessage = error;
            });
        };
        this.delete = function (id) {
            _this._tasksService.delete(id)
                .subscribe(function (data) {
                if (data == 1) {
                    _this.responseMessage = "Data successfully deleted.";
                    _this.loadData(_this.clientId);
                }
                else {
                    _this.responseMessage = "There is some issue in saving records, please contact to system administrator!";
                }
            }, function (error) {
                _this.responseMessage = error;
            });
        };
        this.taskForm = this._formBuilder.group({
            id: [''],
            name: [''],
            clientId: [''],
            description: [''],
            client: [''],
            startTime: [''],
            endTime: ['']
        });
        this._route.params
            .subscribe(function (params) {
            _this.clientId = +params['clientId'];
            _this.getCurrentClient(_this.clientId);
            _this.loadData(_this.clientId);
        });
    }
    return TasksComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], TasksComponent.prototype, "modal", void 0);
TasksComponent = __decorate([
    core_1.Component({
        selector: 'tasks',
        templateUrl: './app/views/tasks.component.html',
        styleUrls: ['./app/styles/tasks.style.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        tasks_service_1.TasksService,
        clients_service_1.ClientsService,
        router_1.ActivatedRoute])
], TasksComponent);
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=tasks.component.js.map