import { Component, Inject, ViewChild } from '@angular/core';
import { DBOperation } from '../enums/dbOperation';
import { TasksService } from '../services/tasks.service';
import { ClientsService } from '../services/clients.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
    selector: 'tasks',
    templateUrl: './app/views/tasks.component.html',
    styleUrls: ['./app/styles/tasks.style.css']
})

export class TasksComponent {
    @ViewChild('modal') modal: ModalComponent;
    tasks: Task[];
    chosenTask: Task;
    taskForm: FormGroup;
    responseMessage: string;
    modalTitle: string;
    modalBtnTitle: string;
    dbOperation: DBOperation;
    clientId: number;
    minDate: Date = new Date();
    public currentClient: Client;

    constructor(
        private _formBuilder: FormBuilder,
        private _tasksService: TasksService,
        private _clientsService: ClientsService,
        private _route: ActivatedRoute)
    {
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
            .subscribe(params => {
                this.clientId = +params['clientId'];
                this.getCurrentClient(this.clientId);
                this.loadData(this.clientId);
            });
    }

    onSubmit = () => {
        if (this.dbOperation == DBOperation.create)
            this.create(this.taskForm.value);
        else if (this.dbOperation == DBOperation.update)
            this.update(this.taskForm.value);
        else {
            this.delete(this.taskForm.value.id);
            this.taskForm.enable();
        }           
        this.modal.close();
    }

    loadData = (clientId: number) => {
        this._tasksService.getByClientId(clientId)
            .subscribe(tasks => {
                this.tasks = tasks;
                for (let i = 0; i < tasks.length; i++)
                {
                    let startTime = tasks[i].startTime;
                    let endTime = tasks[i].endTime;
                    this.tasks[i].startTime = new Date(startTime);
                    this.tasks[i].endTime = new Date(endTime);
                }
            });
    }

    getCurrentClient = (clientId: number) => {
        this._clientsService.getById(this.clientId)
            .subscribe(client => { this.currentClient = client; });
    }

    addClick = () => {
        this.modalTitle = "Add new task";
        this.modalBtnTitle = "Add";
        this.taskForm.reset();
        this.taskForm.patchValue({ clientId: this.clientId });
        this.taskForm.enable();
        this.modal.open();
        this.dbOperation = DBOperation.create;
    }

    editClick = (id: number) => {
        this.modalTitle = "Edit task";
        this.modalBtnTitle = "Update";
        this.chosenTask = this.tasks.filter(x => x.id == id)[0];
        this.taskForm.patchValue(this.chosenTask);
        this.taskForm.enable();
        this.modal.open();
        this.dbOperation = DBOperation.update;
    }

    deleteClick = (id: number) => {
        this.modalTitle = "Confirm delete?";
        this.modalBtnTitle = "Delete";
        this.chosenTask = this.tasks.filter(x => x.id == id)[0];
        this.taskForm.patchValue(this.chosenTask);
        this.taskForm.disable();
        this.modal.open();
        this.dbOperation = DBOperation.delete;
    }

    create = (data: Task) => {
        this._tasksService.create(data)
            .subscribe(data => {
                if (data == 1) {
                    this.responseMessage = "Data successfully added.";
                    this.loadData(this.clientId);
                }
                else {
                    this.responseMessage = "There is some issue in saving records, please contact to system administrator!";
                }
            }, error => {
                this.responseMessage = error;
            });
    }

    update = (data: Task) => {
        this._tasksService.update(data)
            .subscribe(data => {
                if (data == 1) {
                    this.responseMessage = "Data successfully update.";
                    this.loadData(this.clientId);
                }
                else {
                    this.responseMessage = "There is some issue in saving records, please contact to system administrator!";
                }
            }, error => {
                this.responseMessage = error;
            });
    }

    delete = (id: number) => {
        this._tasksService.delete(id)
            .subscribe(data => {
                if (data == 1) {
                    this.responseMessage = "Data successfully deleted.";
                    this.loadData(this.clientId);
                }
                else {
                    this.responseMessage = "There is some issue in saving records, please contact to system administrator!";
                }
            }, error => {
                this.responseMessage = error;
            });
    }
}