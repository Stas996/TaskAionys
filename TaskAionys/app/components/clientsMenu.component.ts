import { Component, Inject } from '@angular/core';
import { ClientsService } from '../services/clients.service';
import { CitiesService } from '../services/cities.service';
import { Http } from '@angular/http';

@Component({
    selector: 'clients-menu',
    templateUrl: './app/views/clientsMenu.component.html',
    styleUrls: ['./app/styles/clientsMenu.style.css']
})

export class ClientsMenuComponent {
    clients: Client[];
    menuClients: Client[];
    cities: City[];
    selectedCity: City;
    filterName: string;

    constructor(private _clientsService: ClientsService, private _citiesService: CitiesService) {       
        this.loadData();
        this.loadCities();
        this.filterName = '';
        setInterval(() => {
            if (this._clientsService.isChanged) {
                this.loadData();
                this._clientsService.isChanged = false;
            }              
        }, 100);
    }

    loadData = () => {
        this._clientsService.getAll()
            .subscribe(clients => {
                this.clients = clients;
                this.menuClients = clients;
            });
    }

    loadCities = () => {
        this._citiesService.getAll()
            .subscribe(cities => {
                this.cities = cities;
                this.cities.unshift({ id: 0, name: 'Select city' });
                this.selectedCity = this.cities[0];
            });
    }

    resetFilter = () => {
        if (this._clientsService.isChanged)

        this.filterName = '';
        this.selectedCity = this.cities[0];
    }
}