import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './components/lista/lista.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { RouterModule } from '@angular/router';
import { cursosRouting } from './cursos.routing';
import { CursosComponent } from './cursos.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ListaComponent, DetalleComponent, CursosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(cursosRouting),
    SharedModule
  ]
})
export class CursosModule { }
