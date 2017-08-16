import { Component } from '@angular/core';

import { AlexisserviceService } from './alexisservice.service';
import {TodoStore} from './todostore.service';

const store = new TodoStore();

@Component({
    selector: 'app-test',
    templateUrl: '<div> <button (click)="loadUser()">Load profile</button> {{ profile | json }} </div> ',
    styleUrls: ['./app.component.css'],
    providers: []
})
    
export class TestComponent {
     newItem = 'test';
  items = store.items; 
        
    manger: string = "";
    
    profile = {};
 
    constructor(private _alexisservice: AlexisserviceService) {
    console.log(this.items);
    }
    
    loadUser() {
    this._alexisservice.getValues().subscribe(data => this.profile = data);
  }

    ngOnInit(): void {
        this.manger = this._alexisservice.getApp();
        console.log(this._alexisservice.getValues());
 
    }
    
 
}
