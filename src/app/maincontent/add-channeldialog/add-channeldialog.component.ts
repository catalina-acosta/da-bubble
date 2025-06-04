import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FirebaseService } from '../../shared/services/firebase.service';
import { user } from '@angular/fire/auth';

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
  userCreators: "",
  members: [] as string[] 
}

closeDialog(){
  this.close.emit();
}

async createChannel(ngform: NgForm){
  if(ngform.valid && ngform.submitted){
    const currentUser = this.firebase.getCurrentUser();
    // console.log(this.channelCreation);

    if (currentUser) {
      this.channelCreation.userCreators = currentUser.id;
    }
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
