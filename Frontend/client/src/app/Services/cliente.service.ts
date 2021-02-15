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

  url: string = "http://localhost:5000/clientes";

  constructor(private http: HttpClient) { }

    async getClientes(){
    return await this.http.get<Cliente[]>(this.url,httpOption).toPromise();

  }

  async postClientes(nombre: string, apellido: string, direccion: string){
    return await this.http.post(`${this.url}/create/${nombre}/${apellido}/${direccion}`,httpOption).toPromise();
  }
}
