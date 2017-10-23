"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Modules
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/platform-browser/animations");
var primeng_1 = require("primeng/primeng");
//Components
var app_component_1 = require("./components/app.component");
var clients_component_1 = require("./components/clients.component");
var clientsMenu_component_1 = require("./components/clientsMenu.component");
var tasks_component_1 = require("./components/tasks.component");
//Services
var clients_service_1 = require("./services/clients.service");
var tasks_service_1 = require("./services/tasks.service");
var cities_service_1 = require("./services/cities.service");
//Pipes
var clientFilter_pipe_1 = require("./pipes/clientFilter.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            common_1.CommonModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            ng2_bs3_modal_1.Ng2Bs3ModalModule,
            animations_1.BrowserAnimationsModule,
            primeng_1.CalendarModule,
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: 'clients', pathMatch: 'full' },
                { path: 'clients', component: clients_component_1.ClientsComponent },
                { path: 'client-tasks/:clientId', component: tasks_component_1.TasksComponent },
                { path: '**', redirectTo: 'clients' }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            clients_component_1.ClientsComponent,
            tasks_component_1.TasksComponent,
            clientsMenu_component_1.ClientsMenuComponent,
            clientFilter_pipe_1.ClientFilterPipe
        ],
        providers: [clients_service_1.ClientsService, tasks_service_1.TasksService, cities_service_1.CitiesService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map