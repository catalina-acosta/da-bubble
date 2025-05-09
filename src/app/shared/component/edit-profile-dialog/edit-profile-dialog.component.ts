import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { UserInterface } from '../../user.interface';

@Component({
  selector: 'app-edit-profile-dialog',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './edit-profile-dialog.component.html',
  styleUrl: './edit-profile-dialog.component.scss'
})
export class EditProfileDialogComponent {
  firebase = inject(FirebaseService);
    @Input() currentUser: UserInterface | null = null;
    @Output() close= new EventEmitter<void>();

    filteredPersons: UserInterface[] = [];
    allPersons: UserInterface[] = [];

    ngOnInit(): void {
      this.loadUsers();
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

}
