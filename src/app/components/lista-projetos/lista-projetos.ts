// src/app/components/lista-projetos/lista-projetos.ts

import { Component, inject, signal } from '@angular/core';
import { Projeto, ProjetoService } from '../../services/projeto';

import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-lista-projetos',
  standalone: true,
  imports: [], 
  templateUrl: './lista-projetos.html',
  styleUrl: './lista-projetos.css'
})
export class ListaProjetosComponent {

  private projetoService = inject(ProjetoService);

  public projetos = toSignal(
    this.projetoService.getProjetos(),
    { initialValue: [] } // <-- Isso diz: "Se falhar, use uma lista vazia"
  );
}