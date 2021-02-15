import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormClienteComponent } from './Components/form-cliente/form-cliente.component';
import { ListClienteComponent } from './Components/list-cliente/list-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from "./Services/cliente.service";

@NgModule({
  declarations: [
    AppComponent,
    FormClienteComponent,
    ListClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
