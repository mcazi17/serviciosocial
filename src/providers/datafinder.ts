import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
/*
* Uses Injected HTTP service in order to find files and return them as usable data objects
*/
export class DataFinder {
    private url = "../../assets/data/items.data.json";
    
    constructor(private http: Http) {
    }
    /* 
        Gets data with a promise which will return with the data when the task is complete
        Uses generic type T to define schema interface to ensure returning json matches schema template.
     */
    
     public getJSONDataAsync(): Observable<any> {
        let data: Observable<any>;
        data = this.http.get(this.url).map(res => res.json());
        return data;
     }

    /* Takes an error, logs it to the console, and throws it */
    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toStrin();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}