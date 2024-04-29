import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { AboutComponent } from './Pages/about/about.component';
import { ProyectosComponent } from './Pages/proyectos/proyectos.component';
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { FormacionComponent } from './Pages/formacion/formacion.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'formacion', component: FormacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
