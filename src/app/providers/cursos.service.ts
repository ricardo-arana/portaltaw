import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from '../shared/models/cursos.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  obtenerCursos(): Observable<Curso[]> {
    const { baseurl, endpoints } = environment.apis.jsonserver;
    const url = `${baseurl}${endpoints.cursos}`;
    return this.http.get<Curso[]>(url);
  }

  obtenerCurso(id: number): Observable<Curso> {
    const { baseurl, endpoints } = environment.apis.jsonserver;
    const url = `${baseurl}${endpoints.cursos}/${id}`;
    return this.http.get<Curso>(url);
  }
}
