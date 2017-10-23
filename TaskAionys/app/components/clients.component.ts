import { Component, Inject, ViewChild } from '@angular/core';
import { DBOperation } from '../enums/dbOperation';
import { ClientsService } from '../services/clients.service';
import { CitiesService } from '../services/cities.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Http } from '@angular/http';

@Component({
    selector: 'clients',
    templateUrl: './app/views/clients.component.html'
})

export class ClientsComponent {
    @ViewChild('modal') modal: ModalComponent;
    clients: Client[];
    chosenClient: Client;
    cities: City[];
    selectedCity: City;
    clientForm: FormGroup;
    responseMessage: string;
    modalTitle: string;
    modalBtnTitle: string;
    dbOperation: DBOperation;

    constructor(
        private _formBuilder: FormBuilder,
        private _clientsService: ClientsService,
        private _citiesService: CitiesService
    ) {
        this.clientForm = this._formBuilder.group({
            id: [''],
            cityId: [''],
            firstName: ['', Validators.required],
            lastName: [''],
            fullName: [''],
            address: [''],
            phoneNumbersCSV: [''],
            phoneNumbers: [[]]
        });
        this.loadData();
        this.loadCities();
    }

    onSubmit = () => {
        if (this.dbOperation == DBOperation.create)
            this.create(this.clientForm.value);
        else if (this.dbOperation == DBOperation.update)
            this.update(this.clientForm.value);
        else {
            this.delete(this.clientForm.value.id);
            this.clientForm.enable();
        }
        this.modal.close();
    }

    loadData = () => {
        this._clientsService.getAll()
            .subscribe(clients => { this.clients = clients; });
    }

    loadCities = () => {
        this._citiesService.getAll()
            .subscribe(cities => {
                this.cities = cities;
                this.selectedCity = this.cities[0];
            });
    }

    addClick = () => {
        this.modalTitle = "Add new client";
        this.modalBtnTitle = "Add";
        this.clientForm.reset();
        this.clientForm.patchValue({ cityId: this.cities[0].id });
        this.clientForm.enable();
        this.modal.open();
        this.dbOperation = DBOperation.create;
    }

    editClick = (id: number) => {
        this.modalTitle = "Edit client";
        this.modalBtnTitle = "Update";
        this.chosenClient = this.clients.filter(x => x.id == id)[0];
        this.clientForm.setValue(this.chosenClient);
        this.clientForm.enable();
        this.modal.open();
        this.dbOperation = DBOperation.update;
    }

    deleteClick = (id: number) => {
        this.modalTitle = "Confirm delete?";
        this.modalBtnTitle = "Delete";
        this.chosenClient = this.clients.filter(x => x.id == id)[0];
        this.clientForm.setValue(this.chosenClient);
        this.clientForm.disable();
        this.modal.open();
        this.dbOperation = DBOperation.delete;
    }

    create = (data: Client) => {
        this._clientsService.create(data)
            .subscribe(data => {
                if (data == 1) {
                    this.responseMessage = "Data successfully added.";
                    this.loadData();
                }
                else {
                    this.responseMessage = "There is some issue in saving records, please contact to system administrator!";
                }
            }, error => {
                this.responseMessage = error;
            });
    }

    update = (data: Client) => {
        this._clientsService.update(data)
            .subscribe(data => {
                if (data == 1) {
                    this.responseMessage = "Data successfully update.";
                    this.loadData();
                }
                else {
                    this.responseMessage = "There is some issue in saving records, please contact to system administrator!";
                }
            }, error => {
                this.responseMessage = error;
            });
    }

    delete = (id: number) => {
        this._clientsService.delete(id)
            .subscribe(data => {
                if (data == 1) {
                    this.responseMessage = "Data successfully deleted.";
                    this.loadData();
                }
                else {
                    this.responseMessage = "There is some issue in saving records, please contact to system administrator!";
                }
            }, error => {
                this.responseMessage = error;
            });
    }
}