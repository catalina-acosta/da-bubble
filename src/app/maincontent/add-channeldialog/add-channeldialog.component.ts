import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-channeldialog',
  imports: [CommonModule, FormsModule],
  standalone:true,
  templateUrl: './add-channeldialog.component.html',
  styleUrl: './add-channeldialog.component.scss'
})
export class AddChanneldialogComponent {
@Output() close= new EventEmitter<void>();

channelName = {
  channelId: "",
  description: "",
}

closeDialog(){
  this.close.emit();
}

createChannel(ngform: NgForm){
  if(ngform.valid && ngform.submitted){
    console.log(this.channelName);
  }
}

prependHash(){
  if (!this.channelName.channelId.startsWith('#')) {
    this.channelName.channelId = '#';
  } 
}


}
