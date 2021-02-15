import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Models/Cliente';
import { ClienteService } from 'src/app/Services/cliente.service';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit {

  public clientes: any[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.obtenerCliente();
  }

  obtenerCliente(){
    this.clienteService.getClientes().then((res) => {
      this.clientes = res;

    });
  }
}
