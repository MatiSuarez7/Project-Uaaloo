import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../Models/Cliente';
import { Observable } from 'rxjs';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string = "http://localhost:5000/clientes/";

  constructor(private http: HttpClient) { }

  getClientes(){
    return this.http.get<Cliente[]>(this.url,httpOption);

  }

  postClientes(cliente:Cliente){
    return  this.http.post(`${this.url}`,cliente,httpOption);
  }
}
