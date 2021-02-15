import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormClienteComponent } from './Components/form-cliente/form-cliente.component';
import { ListClienteComponent } from './Components/list-cliente/list-cliente.component';

const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  {path: "list" , component: ListClienteComponent},
  {path: "form" , component: FormClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
