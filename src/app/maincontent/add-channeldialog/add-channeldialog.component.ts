import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-channeldialog',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './add-channeldialog.component.html',
  styleUrl: './add-channeldialog.component.scss'
})
export class AddChanneldialogComponent {
@Output() close= new EventEmitter<void>();

closeDialog(){
  this.close.emit();
}
}
