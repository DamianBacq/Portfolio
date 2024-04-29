import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { AboutComponent } from './Pages/about/about.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProyectosComponent } from './Pages/proyectos/proyectos.component';
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormacionComponent } from './Pages/formacion/formacion.component';
import { HttpClientModule } from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AboutComponent,
    NavbarComponent,
    ProyectosComponent,
    ContactoComponent,
    FormacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FontAwesomeModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {

}
