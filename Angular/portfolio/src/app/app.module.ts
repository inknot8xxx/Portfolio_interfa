import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreMiComponent,
    HabilidadesComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
