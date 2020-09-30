import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CursosService } from 'src/app/providers/cursos.service';
import { Curso } from 'src/app/shared/models/cursos.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  loading = false;
  cursos: Curso[] = [];
  constructor(private cursosService: CursosService) {
    this.loading = true;
    this.cursosService.obtenerCursos().subscribe( cursos => {
      this.cursos = cursos;
      this.loading= false;
    });
  }

  ngOnInit(): void {
  }

}
