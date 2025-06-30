import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FirebaseService } from '../../shared/services/firebase.service';
import { user } from '@angular/fire/auth';
import { SelectMemberDialogComponent } from '../select-member-dialog/select-member-dialog.component';
import { MessageInterface } from '../../shared/message.interface';

@Component({
  selector: 'app-add-channeldialog',
  imports: [CommonModule, FormsModule, SelectMemberDialogComponent],
  standalone:true,
  templateUrl: './add-channeldialog.component.html',
  styleUrl: './add-channeldialog.component.scss'
})
export class AddChanneldialogComponent {
@Output() close= new EventEmitter<void>();
firebase = inject(FirebaseService);
showForm = true;
showMemberDialog = false;

channelCreation = {
  channelName: "",
  description: "",
  userCreators: "",
  members: [] as string[],
   messages:[] as MessageInterface[]
}

onInitialSubmit(ngform: NgForm) {
  if (ngform.valid) {
    this.showForm = false;
    this.showMemberDialog = true;
  }
}

onMembersSelected(members: string[]) {
  this.channelCreation.members = members;
  this.createChannelAfterMembers(); // Danach wirklich erstellen
}

async createChannelAfterMembers() {
  const currentUser = this.firebase.getCurrentUser();
  if (currentUser) {
    this.channelCreation.userCreators = currentUser.id;
  }

  try {
    await this.firebase.addChannelToData(this.channelCreation); 
    this.closeDialog();
  } catch (error) {
    console.error("Fehler beim Erstellen des Channels:", error);
  }
}
onDialogCancelled() {
  this.closeDialog();
}


  closeDialog() {
    this.showForm = false;
    this.showMemberDialog = false;
  }

// async createChannel(ngform: NgForm){
//   if(ngform.valid && ngform.submitted){
//     const currentUser = this.firebase.getCurrentUser();
//     // console.log(this.channelCreation);

//     if (currentUser) {
//       this.channelCreation.userCreators = currentUser.id;
//     }
//     try {
//       await this.firebase.addChannelToData(this.channelCreation); 
//       this.closeDialog();
//       ngform.resetForm();
//     } catch(error) {
//       console.error("Error creating channel: ", error);
//     }
//   }
// }

}
