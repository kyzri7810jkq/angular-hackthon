import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routeComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialsModule } from './app-materials';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';

@NgModule({
  declarations: [
    AppComponent,
    routeComponents,
    ServiceDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
