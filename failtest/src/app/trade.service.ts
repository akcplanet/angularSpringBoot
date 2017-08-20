import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Subscription } from 'rxjs/Subscription';



@Injectable()
export class TradeService {

  constructor() { }
    
    
    private handleError(error: Response)
{
 console.error(error);
 return Observable.throw(error.json().error());
}

}
