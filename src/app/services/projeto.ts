import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Projeto {
  id: number;
  titulo: string;
  concluida: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  private readonly apiUrl = 'http://localhost:8080/tarefas';

  constructor(private http: HttpClient) { }

  getProjetos() {
    return this.http.get<Projeto[]>(this.apiUrl);
  }
}