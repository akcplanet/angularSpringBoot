import {
  NgModule, 
  ComponentRef, 
  Injectable, 
  Component, 
  Injector, 
  Inject,
  ViewContainerRef, 
  ViewChild, ComponentFactoryResolver, NgModuleFactoryLoader} from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {Routes, RouterModule} from "@angular/router";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { AlexisComponent} from './alexis/alexis.component';
import { TradeComponent } from './trade/trade.component';


const routes: Routes = [
  {path: 'product', component: AlexisComponent},
  {path: 'failtrade', component: TradeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AlexisComponent,  
    TradeComponent
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(routes,
       { enableTracing: true }
          ),
      NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
 exports: [RouterModule]
})
export class AppModule {
  ngDoBootstrap() {
  }

}
 
    


