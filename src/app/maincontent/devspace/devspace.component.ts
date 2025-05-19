import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FirebaseService } from '../../shared/services/firebase.service';
import { UserInterface } from '../../shared/user.interface';

@Component({
  selector: 'app-devspace',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './devspace.component.html',
  styleUrl: './devspace.component.scss'
})
export class DevspaceComponent {
firebase =inject(FirebaseService);
allPersons: UserInterface[] = [];
filteredPerson: UserInterface[] = []; 

ngOnInit():void {
  this.loadUsers();
}

async loadUsers(){
 this.allPersons =await this.firebase.getUserList();
 this.filteredPerson = this.allPersons;
}

}
