import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { UserInterface } from '../../user.interface';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule],
  standalone:true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  firebase = inject(FirebaseService);
  private elementRef = inject(ElementRef);

  searchTerm: string = '';
  showDropdown: boolean = false;
  filteredPersons: UserInterface[] = [];
  allPersons: UserInterface[] = []; 

  ngOnInit(): void {
    this.loadUsers();
  }

  async loadUsers() {
    this.allPersons = await this.firebase.getUserList(); 
    this.filteredPersons = [...this.allPersons]; 
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
      this.filteredPersons = this.allPersons.filter(person => 
          person.firstname.toLowerCase().includes(query) || 
          person.fullname.toLocaleLowerCase().includes(query));

      this.showDropdown = this.filteredPersons.length > 0; 
    } else {
      this.showDropdown = false;
      this.filteredPersons=[];
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

        if(this.searchTerm === '@'){
          this.searchTerm = '';
        }
      }
    }
}
