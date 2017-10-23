import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class CitiesService {
    private url: string = '/api/cities/';
   
    constructor(private _http: Http) { }

    getAll(): Observable<City[]> {
        return this._http.get(this.url)
            .map((response: Response) => response.json() as City[])
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}