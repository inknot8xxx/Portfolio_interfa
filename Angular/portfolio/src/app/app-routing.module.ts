import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Página de inicio
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirección si no existe la ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
