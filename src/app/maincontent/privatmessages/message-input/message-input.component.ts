import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-input',
  imports: [FormsModule],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.scss'
})
export class MessageInputComponent {
  @Input() inputMessageText: string = '';
  @Output() inputMessageTextChange = new EventEmitter<string>();
  @Output() submitMessage = new EventEmitter<any>();

  onSubmit(ngform: any) {
    this.submitMessage.emit(ngform);
    this.inputMessageTextChange.emit(this.inputMessageText);
  }

    openEmoji() {
    console.log("open emojis");
  }

  openContacts() {
    console.log("opening contacts");
  }

}
