import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInterface } from '../../user.interface';
import { FirebaseService } from '../../services/firebase.service';
import { EditProfileDialogComponent } from '../edit-profile-dialog/edit-profile-dialog.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule, EditProfileDialogComponent],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  firebase = inject(FirebaseService);
  private elementRef = inject(ElementRef);

  searchTerm: string = '';
  showDropdown: boolean = false;
  showProfilDropdown: boolean = false;
  profilDialogisClicked:boolean =false;
  editDialogisClicked:boolean = false;
  filteredPersons: UserInterface[] = [];
  allPersons: UserInterface[] = [];
  currentUser: UserInterface | null = null;

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

  async loginUser() {
  if (this.currentUser) {
    await this.firebase.updateUserStatus(this.currentUser.id, true);
    this.currentUser.status = true; // Lokale Anzeige auch aktualisieren
  }
}

async logoutUser() {
  if (this.currentUser) {
    await this.firebase.updateUserStatus(this.currentUser.id, false);
    this.currentUser.status = false; // Lokale Anzeige auch aktualisieren
  }
  // evtl. noch Weiterleitung oder User leeren
  // this.currentUser = null;
}


  onInputFocus(): void {
    if (!this.searchTerm.startsWith('@')) {
      this.searchTerm = '@';
    }
    this.showDropdown = true;
    this.filteredPersons = [...this.allPersons];
  }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim().toLowerCase();

    if (value.includes('@')) {
      const query = value.split('@')[1] || '';
      this.filteredPersons = this.allPersons.filter(
        (person) =>
          person.firstname.toLowerCase().includes(query) ||
          person.fullname.toLocaleLowerCase().includes(query)
      );

      this.showDropdown = this.filteredPersons.length > 0;
    } else {
      this.showDropdown = false;
      this.filteredPersons = [];
    }
  }

  selectPerson(person: UserInterface): void {
    this.searchTerm = `@${person.fullname}`;
    this.showDropdown = false;
  }

  // schließt das Dropdown beim Klick außerhalb
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.showDropdown = false;
      this.showProfilDropdown = false;
      this.editDialogisClicked =false;


      if (this.searchTerm === '@') {
        this.searchTerm = '';
      }
    }
  }

  openProfilMenu(){
    this.showProfilDropdown = true;
  }
  closeProfilMenu() {
    this.showProfilDropdown = false;
  }
  openProfilDialog(){
    this.profilDialogisClicked=true;
  }
  closeProfilDialog(){
    this.profilDialogisClicked=false;
  }

  editDialog(){
    this.editDialogisClicked =true;
  }
}
