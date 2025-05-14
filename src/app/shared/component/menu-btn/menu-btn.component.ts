import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-btn',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './menu-btn.component.html',
  styleUrl: './menu-btn.component.scss',
})
export class MenuBtnComponent {
  @Input() isDevspaceOpen =true;
  @Output() toggle = new EventEmitter<void>();

  onToggleClick() {
    this.toggle.emit();
  }
}
