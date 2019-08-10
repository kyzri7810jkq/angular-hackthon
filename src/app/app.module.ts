import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routeComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialsModule } from './app-materials';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { ServicesCreateComponent } from './components/services-create/services-create.component';

@NgModule({
  declarations: [
    AppComponent,
    routeComponents,
    ServiceDetailsComponent,
    ServicesCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
