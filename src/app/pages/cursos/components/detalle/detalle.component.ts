import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from 'src/app/providers/cursos.service';
import { Curso } from 'src/app/shared/models/cursos.model';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  id: string;
  curso: Curso;
  loading= true;

  constructor(private cursosService: CursosService, private activatedRouter: ActivatedRoute) {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    this.cursosService.obtenerCurso(+this.id).subscribe( curso => {
      this.loading = false;
      this.curso = curso;
    })

  }

  ngOnInit(): void {
  }

}
