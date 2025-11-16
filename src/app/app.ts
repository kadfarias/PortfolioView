import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header'; 
import { FooterComponent } from './components/footer/footer';
import { ListaProjetosComponent } from './components/lista-projetos/lista-projetos'; 
@Component({
  selector: 'app-root',
  standalone: true, 

  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent,
    ListaProjetosComponent], 

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Kadson Lemuel de Farias');
}