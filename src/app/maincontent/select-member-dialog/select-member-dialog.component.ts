import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInterface } from '../../shared/user.interface';
import { FirebaseService } from '../../shared/services/firebase.service';
import { ChannelInterface } from '../../shared/channels.interface';

@Component({
  selector: 'app-select-member-dialog',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './select-member-dialog.component.html',
  styleUrl: './select-member-dialog.component.scss',
})
export class SelectMemberDialogComponent {
  @Output() membersSelected = new EventEmitter<string[]>();

  firebase = inject(FirebaseService);

  selectAllMembers = false;
  selectSpecificMembers = false;

  searchQuery = '';
  allUsers: (UserInterface & { selected: boolean })[] = [];
  filteredUsers: (UserInterface & { selected: boolean })[] = [];
  selectedUsers: (UserInterface & { selected: boolean })[] = [];
  creatorUser: (UserInterface & { selected: boolean }) | null = null;

  async ngOnInit() {
    const users = await this.firebase.getUserList();
    this.allUsers = users.map((user) => ({ ...user, selected: false }));
    const currentUser = this.firebase.getCurrentUser();
    if (currentUser) {
      this.creatorUser =
        this.allUsers.find((u) => u.id === currentUser.id) || null;

      if (this.creatorUser) {
        this.creatorUser.selected = true;
        this.selectedUsers.push(this.creatorUser);
      }
    }

    this.filteredUsers = [...this.allUsers];
    this.onSearchChange();
  }

   async submit() {
    const selectedIds = this.selectAllMembers
      ? this.allUsers.map(u => u.id!)
      : this.selectedUsers.map(u => u.id!);

    this.membersSelected.emit(selectedIds);
    
    const currentUser = this.firebase.getCurrentUser();
    if (!currentUser) {
      console.error('Kein eingeloggter User gefunden');
      return;
    }

    const newChannel: ChannelInterface = {
      channelName: 'Neuer Channel', // Hier kannst du dynamisch Namen vergeben oder als Input übergeben
      description: 'Beschreibung hier', // Ebenfalls dynamisch machen
      userCreators: currentUser.id!, // Der eingeloggte User als Creator
      members: selectedIds as string[], // Mitglieder aus der Auswahl
    };

    await this.firebase.addChannelToData(newChannel);
    console.log('Channel erfolgreich erstellt', newChannel);
  }


  onSelectAllChange() {
    if (this.selectAllMembers) {
      this.selectSpecificMembers = false;
      this.allUsers.forEach((u) => (u.selected = true));
      this.selectedUsers = [...this.allUsers];
    } else {
      this.allUsers.forEach((u) => (u.selected = false));
      this.selectedUsers = [];
    }
    this.filteredUsers = [...this.allUsers];
  }

  onSelectSpecificChange() {
    if (this.selectSpecificMembers) {
      this.selectAllMembers = false;
      this.allUsers.forEach((u) => (u.selected = false));
      this.selectedUsers = [];
    }
    this.filteredUsers = [...this.allUsers];
  }

  onSearchChange() {
    const q = this.searchQuery.toLowerCase();
    this.filteredUsers = this.allUsers.filter(
      (user) =>
        user.fullname.toLowerCase().includes(q) &&
        !this.selectedUsers.some((u) => u.id === user.id)
    );
  }

  addUser(userId: string) {
    const user = this.allUsers.find((u) => u.id === userId);

    if (user && !this.selectedUsers.find((u) => u.id === userId)) {
      this.selectedUsers.push(user);
      user.selected = true;
      this.searchQuery = '';
      this.onSearchChange();
    }
  }

  removeUser(user: UserInterface & { selected: boolean }) {
    if (this.creatorUser && user.id === this.creatorUser.id) return;

    this.selectedUsers = this.selectedUsers.filter((u) => u.id !== user.id);
    const foundUser = this.allUsers.find((u) => u.id === user.id);
    if (foundUser) foundUser.selected = false;
    this.onSearchChange();
  }

  get hasSelection(): boolean {
    return this.selectAllMembers || this.selectedUsers.length > 0;
  }

  // submit() {
  //   const selectedIds = this.selectAllMembers
  //     ? this.allUsers.map((u) => u.id)
  //     : this.selectedUsers.map((u) => u.id);
  //   this.membersSelected.emit(selectedIds);
  // }

  closeDialog() {
    this.membersSelected.emit([]);
  }
}
