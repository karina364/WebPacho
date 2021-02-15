import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { Routes, RouterModule } from '@angular/router';
import { ModelosComponent } from './components/modelos/modelos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BasicaComponent } from './components/basica/basica.component';
import { MujerComponent } from './components/mujer/mujer.component';
import { HombreComponent } from './components/hombre/hombre.component';

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
  path: '**',
  pathMatch: 'full',
  redirectTo: 'inicio' 
}

];
=======
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];
>>>>>>> 02c60e5... initial commit

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
