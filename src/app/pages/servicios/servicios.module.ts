import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { serviciosRoutes } from './servicios.routing';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(serviciosRoutes)
  ]
})
export class ServiciosModule { }
