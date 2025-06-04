import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FirebaseService } from '../../shared/services/firebase.service';

@Component({
  selector: 'app-add-channeldialog',
  imports: [CommonModule, FormsModule],
  standalone:true,
  templateUrl: './add-channeldialog.component.html',
  styleUrl: './add-channeldialog.component.scss'
})
export class AddChanneldialogComponent {
@Output() close= new EventEmitter<void>();
firebase = inject(FirebaseService);

channelCreation = {
  channelName: "",
  description: "",
}

closeDialog(){
  this.close.emit();
}

async createChannel(ngform: NgForm){
  if(ngform.valid && ngform.submitted){
    // console.log(this.channelCreation);
    try {
      await this.firebase.addChannelToData(this.channelCreation); 
      this.closeDialog();
      ngform.resetForm();
    } catch(error) {
      console.error("Error creating channel: ", error);
    }
  }
}

}
