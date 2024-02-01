import { Component } from '@angular/core';
import { Comentario } from '../../interfaces/Comentario';
import { CommonModule } from '@angular/common'; // para poder usar *ngFor / *ngIf

@Component({
  selector: 'app-list-comentarios',
  standalone: true,
  imports: [CommonModule],
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
