import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HorizontalCardComponent } from './components/horizontal-card/horizontal-card.component';


const components = [NavbarComponent, LoadingComponent, HorizontalCardComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [...components]
})
export class SharedModule { }
