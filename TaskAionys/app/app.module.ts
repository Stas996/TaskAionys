//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/primeng';
//Components
import { AppComponent } from './components/app.component';
import { ClientsComponent } from './components/clients.component';
import { ClientsMenuComponent } from './components/clientsMenu.component';
import { TasksComponent } from './components/tasks.component';
//Services
import { ClientsService } from './services/clients.service';
import { TasksService } from './services/tasks.service';
import { CitiesService } from './services/cities.service';
//Pipes
import { ClientFilterPipe } from './pipes/clientFilter.pipe';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2Bs3ModalModule,
        BrowserAnimationsModule,
        CalendarModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'clients', pathMatch: 'full' },
            { path: 'clients', component: ClientsComponent },
            { path: 'client-tasks/:clientId', component: TasksComponent },
            { path: '**', redirectTo: 'clients' }
        ])
    ],
    declarations: [
        AppComponent,
        ClientsComponent,
        TasksComponent,
        ClientsMenuComponent,
        ClientFilterPipe
    ],
    providers: [ClientsService, TasksService, CitiesService],
    bootstrap: [AppComponent]
})
export class AppModule { }