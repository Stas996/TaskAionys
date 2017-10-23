import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class TasksService {
    private getUrl: string = '/api/client-tasks/';
    private postUrl: string = '/api/tasks/';
    private updateUrl: string = '/api/tasks/update/';
    private deleteUrl: string = '/api/tasks/delete/';

    constructor(private _http: Http) { }

    getByClientId(clientId: number): Observable<Task[]> {
        return this._http.get(this.getUrl + clientId)
            .map((response: Response) => response.json() as Task[])
            .catch(this.handleError);
    }

    create(model: Task): Observable<number> {
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.postUrl, body, options)
            .map((response: Response) => <number>response.json())
            .catch(this.handleError);
    }

    update(model: Task): Observable<number> {
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(this.updateUrl, body, options)
            .map((response: Response) => <number>response.json())
            .catch(this.handleError);
    }

    delete(id: number): Observable<number> {
        return this._http.delete(this.deleteUrl + id)
            .map((response: Response) => <number>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}