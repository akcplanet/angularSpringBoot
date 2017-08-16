import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TestComponent } from './tradefail/alexis.app.component';
import { AlexisComponent } from './tradefail/alexis.sandli.component';
import { AlexisserviceService } from './tradefail/alexisservice.service'; 

@NgModule({
  declarations: [
    TestComponent,
    AlexisComponent,
  ],
  imports: [
    BrowserModule,
      FormsModule,
    HttpModule  
  ],
  providers: [AlexisserviceService],
  bootstrap: [TestComponent,AlexisComponent]
})
export class AlexisModule { }
