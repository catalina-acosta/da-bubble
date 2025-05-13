import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { UserInterface } from '../../user.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-profile-dialog',
  imports: [CommonModule, FormsModule],
  standalone:true,
  templateUrl: './edit-profile-dialog.component.html',
  styleUrl: './edit-profile-dialog.component.scss'
})
export class EditProfileDialogComponent {
  firebase = inject(FirebaseService);
    @Input() currentUser: UserInterface | null = null;
    @Output() close= new EventEmitter<void>();
    @Output() userUpdated = new EventEmitter<UserInterface>();

    filteredPersons: UserInterface[] = [];
    allPersons: UserInterface[] = [];
    editFullname: string = '';

    ngOnInit(): void {
      this.loadUsers();
      if(this.currentUser){
        this.editFullname = this.currentUser.fullname;
      }
    }
  
    async loadUsers() {
      this.allPersons = await this.firebase.getUserList();
      console.log(this.allPersons);
      this.filteredPersons = [...this.allPersons];
  
      // ersten Benutzer als aktuell eingeloggten Gast setzen
      if (this.allPersons.length > 0) {
        this.currentUser = this.allPersons[0];
      }
    }

    closeProfilDialog(){
      this.close.emit();
    }

async saveProfile() {
  if (this.currentUser && this.editFullname.trim() !== '') {
    try {
      const userId = this.currentUser.id;
      await this.firebase.updateUserName(userId, this.editFullname);
      
      this.currentUser.fullname = this.editFullname;

      this.userUpdated.emit(this.currentUser);
      
      this.closeProfilDialog();

    } catch (error) {
      console.error('Fehler beim Aktualisieren des Namens:', error);
    }
  }
}
}