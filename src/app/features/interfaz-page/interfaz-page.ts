import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Heuristica {
  id: number;
  titulo: string;
  icono: string;
  descripcion: string;
}

@Component({
  selector: 'app-interfaz-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './interfaz-page.html',
  styleUrls: ['./interfaz-page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterfazPage {

  heuristicas = signal<Heuristica[]>([
    {
      id: 1,
      titulo: 'Visibilidad del Estado del Sistema',
      icono: '👁️',
      descripcion: 'El sistema mantiene informado al usuario sobre lo que está pasando en tiempo real.'
    },
    {
      id: 2,
      titulo: 'Correspondencia con el Mundo Real',
      icono: '🌍',
      descripcion: 'La interfaz utiliza palabras, íconos y conceptos que el usuario ya conoce.'
    },
    {
      id: 3,
      titulo: 'Control y Libertad del Usuario',
      icono: '🎮',
      descripcion: 'Debe existir una forma clara de deshacer, rehacer o cancelar acciones.'
    },
    {
      id: 4,
      titulo: 'Consistencia y Estándares',
      icono: '📏',
      descripcion: 'Todo el sistema debe ser consistente y seguir convenciones de diseño.'
    },
    {
      id: 5,
      titulo: 'Prevención de Errores',
      icono: '🚫',
      descripcion: 'La UI ayuda a prevenir errores antes de que ocurran.'
    },
    {
      id: 6,
      titulo: 'Reconocimiento antes que Recordar',
      icono: '💭',
      descripcion: 'Evita que el usuario tenga que memorizar procesos u opciones.'
    },
    {
      id: 7,
      titulo: 'Flexibilidad y Eficiencia',
      icono: '⚡',
      descripcion: 'Permite atajos y configuraciones avanzadas sin afectar a los nuevos usuarios.'
    },
    {
      id: 8,
      titulo: 'Diseño Estético y Minimalista',
      icono: '🎨',
      descripcion: 'Menos es más: solo se muestra lo necesario.'
    },
    {
      id: 9,
      titulo: 'Ayuda ante Errores',
      icono: '🆘',
      descripcion: 'Los errores deben explicarse en lenguaje claro e indicar cómo solucionarlos.'
    },
    {
      id: 10,
      titulo: 'Ayuda y Documentación',
      icono: '📚',
      descripcion: 'Debe existir documentación accesible, clara y orientada a tareas.'
    }
  ]);

}
