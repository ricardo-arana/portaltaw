import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { ListaComponent } from './pages/cursos/components/lista/lista.component';
import { DetalleComponent } from './pages/cursos/components/detalle/detalle.component';
import { HttpClientModule  } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiciosComponent,
    CursosComponent,
    ListaComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
