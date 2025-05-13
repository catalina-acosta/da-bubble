import { Component, inject } from '@angular/core';
import { FirebaseService } from '../../shared/services/firebase.service';
import { MessageInterface } from '../../shared/message.interface';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-privatmessages',
  imports: [FormsModule],
  templateUrl: './privatmessages.component.html',
  styleUrl: './privatmessages.component.scss'
})
export class PrivatmessagesComponent {
  firebase = inject(FirebaseService);
  currentUserId: string = '74izbWVB9XFaPrkOl2IW';
  currentConversationPartnerId: string = 'NsJ0o0lAuQVfQ7r28lRr';
  currentChannel: string = 'testChannel';
  currentUserName: string = 'Felix';
  inputMessageText: string = '';
  formSubmitted: boolean = false;
  newMessageAdded: boolean = false;

  newMessage: MessageInterface = {
    senderId: "",
    receiverId: "",
    channelId: "",
    text: "",
    date: "",
    time: 0,
    reactions: [
        {
            emoji: "",
            counter: 0,
        }
    ]
  }

  submitForm(ngform: NgForm) {
    console.log("form is submitted");
    const now = new Date();
  // Format date as YYYY-MM-DD
    this.newMessage.date = now.toISOString().split('T')[0];
    // Use Unix timestamp (milliseconds since epoch)
    this.newMessage.time = now.getTime();
    
    this.newMessage.senderId = this.currentUserId;
    this.newMessage.receiverId = this.currentConversationPartnerId;
    this.newMessage.channelId = this.currentChannel;
    this.newMessage.text = this.inputMessageText;
    this.formSubmitted = true;
    if (ngform.valid) {    
      console.log("form is valid");
              // Only check if the form is valid
        this.firebase.addMessageToData(this.newMessage);          // Save the task to the database
        this.newMessageAdded = true;
        this.clearFormular(ngform);                        // Reset the form after submission                                  //set back all flags and arrays to default
    }
  }
  clearFormular(ngform: NgForm) {
    ngform.reset(); 
    this.newMessage.senderId = "";
    this.newMessage.receiverId = "";
    this.newMessage.channelId = "";
    this.newMessage.text = "";
    this.formSubmitted = false;
    this.newMessageAdded = false;
  }

}
