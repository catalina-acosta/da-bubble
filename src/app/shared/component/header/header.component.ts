import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule],
  standalone:true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchTerm: string = '';
  showDropdown: boolean = false;
  filteredPersons: Array<{ name: string }> = [];
  allPersons: Array<{ name: string }> = [
    { name: 'Alice Smith' },
    { name: 'Bob Johnson' },
    { name: 'Charlie Brown' },
    { name: 'David Williams' }
  ];

  onInputFocus(): void {
    if (!this.searchTerm.startsWith('@')) {
      this.searchTerm = '@';
    }
    this.showDropdown = true;
    this.filteredPersons = [...this.allPersons];
  }
  
  
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
  
    if (value.includes('@')) {
      const query = value.split('@')[1]?.toLowerCase() || ''; 
      this.filteredPersons = query
        ? this.allPersons.filter(person => person.name.toLowerCase().includes(query))
        : [...this.allPersons];  
      this.showDropdown = true; 
    } else {
      this.showDropdown = false;
    }
  }
  

  selectPerson(person: { name: string }): void {
    this.searchTerm = `@${person.name}`;
    this.showDropdown = false;
  }
}
