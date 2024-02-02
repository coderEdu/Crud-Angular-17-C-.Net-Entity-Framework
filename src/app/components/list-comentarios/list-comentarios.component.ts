import { Component } from '@angular/core';
import { Comentario } from '../../interfaces/Comentario';
import { CommonModule } from '@angular/common'; // para poder usar *ngFor / *ngIf
import { RouterModule } from '@angular/router'; // para poder usar 'routerLink', etc

@Component({
  selector: 'app-list-comentarios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-comentarios.component.html',
  styleUrl: './list-comentarios.component.css'
})
export class ListComentariosComponent {

  listComentarios : Comentario[] = [
    { titulo: 'Angular', creador: 'Eduardito', fechaCreacion: new Date(), texto: 'Framework para crear SPA' },
    { titulo: 'React', creador: 'Andresito', fechaCreacion: new Date(), texto: 'Librería para crear SPA' },
    { titulo: 'Entity Framework', creador: 'Chirinito', fechaCreacion: new Date(), texto: 'Mapeador de DB (ORM)' }
  ]
}
