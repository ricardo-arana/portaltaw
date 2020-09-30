import { Routes } from  '@angular/router';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ListaComponent } from './components/lista/lista.component';

export const cursosRouting: Routes = [
    {path: 'lista', component: ListaComponent},
    {path: 'detalle/:id', component: DetalleComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'lista'}
]