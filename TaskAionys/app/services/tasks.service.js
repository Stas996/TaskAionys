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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var TasksService = (function () {
    function TasksService(_http) {
        this._http = _http;
        this.getUrl = '/api/client-tasks/';
        this.postUrl = '/api/tasks/';
        this.updateUrl = '/api/tasks/update/';
        this.deleteUrl = '/api/tasks/delete/';
    }
    TasksService.prototype.getByClientId = function (clientId) {
        return this._http.get(this.getUrl + clientId)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TasksService.prototype.create = function (model) {
        var body = JSON.stringify(model);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this.postUrl, body, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TasksService.prototype.update = function (model) {
        var body = JSON.stringify(model);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(this.updateUrl, body, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TasksService.prototype.delete = function (id) {
        return this._http.delete(this.deleteUrl + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TasksService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return TasksService;
}());
TasksService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map