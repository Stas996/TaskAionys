import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ClientsService {
    private url: string = '/api/clients/';
    private updateUrl: string = '/api/clients/update/';
    private deleteUrl: string = '/api/clients/delete/';
    isChanged: boolean = false;

    constructor(private _http: Http) { }

    getAll(): Observable<Client[]> {
        //this.isChanged = false;
        return this._http.get(this.url)
            .map((response: Response) => response.json() as Client[])
            .catch(this.handleError);
    }

    getById(id: number): Observable<Client> {
        return this._http.get(this.url + id)
            .map((response: Response) => response.json() as Client)
            .catch(this.handleError);
    }

    create(model: Client): Observable<number> {
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.url, body, options)
            .map((response: Response) => {
                this.isChanged = true;
                return <number>response.json()
            })
            .catch(this.handleError);
    }

    update(model: Client): Observable<number> {
        this.isChanged = true;
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(this.updateUrl, body, options)
            .map((response: Response) => {
                this.isChanged = true;
                return <number>response.json()
            })
            .catch(this.handleError);
    }

    delete(id: number): Observable<number> {
        this.isChanged = true;
        return this._http.delete(this.deleteUrl + id)
            .map((response: Response) => {
                this.isChanged = true;
                return <number>response.json()
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}