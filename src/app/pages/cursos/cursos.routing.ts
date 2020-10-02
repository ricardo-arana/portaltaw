import { Routes } from  '@angular/router';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ListaComponent } from './components/lista/lista.component';
import { CursosComponent } from './cursos.component';

export const cursosRouting: Routes = [
    {path: '', component: CursosComponent,
children: [
    {path: 'lista', component: ListaComponent},
    {path: 'detalle/:id', component: DetalleComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'lista'}
]}
]