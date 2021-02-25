import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Models/Cliente';
import { ClienteService } from 'src/app/Services/cliente.service';


@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

  formCliente: FormGroup;

  constructor(private formBuilder: FormBuilder, private clienteService: ClienteService, private router: Router) {
    this.formValidaciones();
  }

  ngOnInit(): void {
  }

  formValidaciones(){
    this.formCliente = this.formBuilder.group({
      Id: 0,
      Nombre: ['',[Validators.required]],
      Apellido:['',[Validators.required]],
      Direccion: ['',[Validators.required]]
    });
  }

    async guardarCliente(){
    const cliente: Cliente = this.formCliente.value;
    await this.clienteService.postClientes(cliente).subscribe( res => {
      this.router.navigate(['/list']);
    })
  }

}
