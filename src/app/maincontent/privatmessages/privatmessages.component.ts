import { Component, inject } from '@angular/core';
import { FirebaseService } from '../../shared/services/firebase.service';
import { MessageInterface } from '../../shared/message.interface';
import { NgForm, FormsModule } from '@angular/forms';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privatmessages',
  imports: [FormsModule, CommonModule],
  templateUrl: './privatmessages.component.html',
  styleUrl: './privatmessages.component.scss'
})
export class PrivatmessagesComponent implements AfterViewInit {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  firebase = inject(FirebaseService);
  currentUserId: string = '74izbWVB9XFaPrkOl2IW';
  currentConversationPartnerId: string = 'NsJ0o0lAuQVfQ7r28lRr';
  currentCPAvatar: string = "";
  currentChannel: string = 'testChannel';
  currentUserName: string = 'Felix';
  currentUserAvatar: string = "";
  inputMessageText: string = '';
  formSubmitted: boolean = false;
  newMessageAdded: boolean = false;
  conversation: MessageInterface[] = [];
  newMessage: MessageInterface = {
    senderId: "",
    receiverId: "",
    channelId: "",
    text: "",
    date: "",
    time: 0,
    formattedTime: "",
    reactions: [
      {
        emoji: "",
        counter: 0,
      }
    ]
  };

  async ngOnInit() {
    await this.firebase.getMessages();
    this.filterMessages();
  }
  
  ngAfterViewInit() {
    this.scrollToBottom();
  }

    ngOnChanges() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }

  filterMessages() {
  if (this.firebase.allMessages && this.firebase.allMessages.length > 0) {
    this.conversation = [];
    this.firebase.allMessages.forEach(message => {
      const isBetweenUsers =
        (message.senderId === this.currentUserId && message.receiverId === this.currentConversationPartnerId) ||
        (message.senderId === this.currentConversationPartnerId && message.receiverId === this.currentUserId);

      const alreadyExists = this.conversation.some(m => m.id === message.id);

      if (isBetweenUsers && !alreadyExists) {
        this.conversation.push(message);
      }
    });
    this.conversation.sort((a, b) => a.time - b.time);
    console.log(this.conversation);
  } else {
    this.conversation = [];
  }
}
  // findAvatar() {
  //   for (let index = 0; index < this.firebase.allUsersList.length; index++) {
  //     if(this.firebase.allUsersList[index].id == this.currentUserId) {
  //       this.currentUserAvatar = this.firebase.allUsersList[index].avatar;
  //     } else if(this.firebase.allUsersList[index].id == this.currentConversationPartnerId) {
  //       this.currentCPAvatar = this.firebase.allUsersList[index].avatar;
  //     }
      
  //   }
  // }
  
  submitForm(ngform: NgForm) {
    console.log("form is submitted");
    const now = new Date();
  // Format date as YYYY-MM-DD
    this.newMessage.date = now.toISOString().split('T')[0];
    console.log(this.newMessage.date);
    // Use Unix timestamp (milliseconds since epoch)
    this.newMessage.time = now.getTime();
    console.log(this.newMessage.time);

    // Format time as HH:mm
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;

    // Option 1: Add a new property
    this.newMessage.formattedTime = formattedTime;
    console.log(formattedTime);
    
    
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
