import { Component } from '@angular/core';

import { AlexisserviceService } from './alexisservice.service';

@Component({
    selector: 'alexis-new',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: []
})
export class AlexisComponent {
        


    manger: string = "";
    constructor(private _alexisservice: AlexisserviceService) { }

    ngOnInit(): void {
        this.manger = this._alexisservice.getAlexisApp();
    }



}
