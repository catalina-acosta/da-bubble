import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInterface } from '../../shared/user.interface';
import { FirebaseService } from '../../shared/services/firebase.service';

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

  async ngOnInit() {
    const users = await this.firebase.getUserList();
    this.allUsers = users.map(user => ({ ...user, selected: false }));
    this.filteredUsers = [...this.allUsers];
  }

  onSelectAllChange() {
    if (this.selectAllMembers) {
      this.selectSpecificMembers = false;
      this.allUsers.forEach(u => u.selected = true);
    } else {
      this.allUsers.forEach(u => u.selected = false);
    }
    this.filteredUsers = [...this.allUsers];
  }

  onSelectSpecificChange() {
    if (this.selectSpecificMembers) {
      this.selectAllMembers = false;
      this.allUsers.forEach(u => u.selected = false);
    }
    this.filteredUsers = [...this.allUsers];
  }

  onSearchChange() {
    const q = this.searchQuery.toLowerCase();
    this.filteredUsers = this.allUsers.filter(user =>
      user.fullname.toLowerCase().includes(q)
    );
  }

  addUser(userId: string) {
    const user = this.allUsers.find(u => u.id === userId);
    if (user) user.selected = !user.selected;
    this.filteredUsers = [...this.allUsers];
  }

  get hasSelection(): boolean {
    return this.selectAllMembers || this.allUsers.some(user => user.selected);
  }

  submit() {
    const selectedIds = this.selectAllMembers
      ? this.allUsers.map(u => u.id)
      : this.allUsers.filter(u => u.selected).map(u => u.id);
    this.membersSelected.emit(selectedIds);
  }

  closeDialog() {
    this.membersSelected.emit([]);
  }
}
