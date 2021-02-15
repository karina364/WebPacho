import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelosComponent } from './components/modelos/modelos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BasicaComponent } from './components/basica/basica.component';
import { MujerComponent } from './components/mujer/mujer.component';
import { HombreComponent } from './components/hombre/hombre.component';
import { ArticulosDeportivosComponent } from './components/articulos-deportivos/articulos-deportivos.component';
import { ArticulosPersonalizadosComponent } from './components/articulos-personalizados/articulos-personalizados.component';
import { BusosDamaComponent } from './components/busos-dama/busos-dama.component';

const routes: Routes = [
  
  {path: 'inicio',
   component: InicioComponent
},
{path: 'basica',
   component: BasicaComponent
},
{path: 'hombre',
   component: HombreComponent
},
{path: 'mujer',
   component: MujerComponent
},
{
  path: 'modelos',
  component: ModelosComponent
},
{
  path: 'articulos-deportivos',
  component: ArticulosDeportivosComponent
},
{
  path: 'articulos-personalizados',
  component: ArticulosPersonalizadosComponent
},
{
  path: 'busos-dama',
  component: BusosDamaComponent
},  
{
  path: '**',
  pathMatch: 'full',
  redirectTo: 'inicio' 
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
