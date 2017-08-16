import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'


@Injectable()
export class AlexisserviceService {

   private valuesUrl: string = 'http://localhost:8080/failtrade/str';


    constructor(private http: Http) { 
     console.log(this.valuesUrl);
    }


    getValues(): Observable<string[]> {    
        return this.http.get(this.valuesUrl).map((res:Response) => res.json());
    }

    private extractData(res: Response) {
       
        let body = res.json();
         console.log(body);
        return body || { };
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.log(errMsg);
        return Observable.throw(errMsg);
    }
    

    getApp(): string {
        return "Service Data is coming ";
    }

    getAlexisApp(): string {
        return "Alexis from diffrent apps ";
    }

}
