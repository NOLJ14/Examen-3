import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes
import { AppComponent } from './app.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { ContactosComponent } from './components/contactos/contactos.component';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    ListEmpleadosComponent,
    CreateEmpleadoComponent,
    NavbarComponent,
    ContactosComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
