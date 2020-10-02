import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './pages/cursos/cursos.component';
import { cursosRouting } from './pages/cursos/cursos.routing';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  {path: 'home',
  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
},
  {path: 'about',
  loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)},
  {path: 'services',
  loadChildren: () => import('./pages/servicios/servicios.module').then(m => m.ServiciosModule)
},
  {path: 'cursos',
  loadChildren: () => import('./pages/cursos/cursos.module').then( m => m.CursosModule)},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
