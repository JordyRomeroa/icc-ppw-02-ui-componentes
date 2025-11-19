// mundo-real-bueno.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'h2-page',
  standalone: true,
  imports: [CommonModule],
  template: ``
})
export class H2Page {
  lastOperation = signal('');

  executeOperation(action: string) {
    this.lastOperation.set(action);
  }
}
