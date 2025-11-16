import { Component, Input } from '@angular/core'; // 1. Importe o Input

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  
  @Input() titulo!: string; 

}