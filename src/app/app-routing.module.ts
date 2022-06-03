import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './components/contactos/contactos.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: "", component: InicioComponent },
  {
    path:'contactos',
    component:ContactosComponent

  },
  {
    path: 'inicio',
    component:InicioComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
