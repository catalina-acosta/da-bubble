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
  currentConversationPartnerId: string = 'gGUdTt5YJBczhJi2tZTe';
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
  showReactionMenu: number | null = null;

  //#region scroll down to input field logic
  async ngOnInit() {
    await this.firebase.getMessages();
    this.filterMessages();
  }
  
  ngAfterViewInit() {
    this.scrollToBottom();
  }

  //   ngOnChanges() {
  //   this.scrollToBottom();
  // }

  // ngAfterViewChecked() {
  //   this.scrollToBottom();
  // }

  scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }

  //#endregion

  //#region filter Messages to display older messages on top and newest message at the bottom
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
  //#endregion

  //#region save new message - display instantly - clear form
  async submitForm(ngform: NgForm) {
    console.log("form is submitted");
    const now = new Date();
    this.newMessage.date = now.toISOString().split('T')[0];
    this.newMessage.time = now.getTime();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    this.newMessage.formattedTime = `${hours}:${minutes}`;
    this.newMessage.senderId = this.currentUserId;
    this.newMessage.receiverId = this.currentConversationPartnerId;
    this.newMessage.channelId = this.currentChannel;
    this.newMessage.text = this.inputMessageText;
    this.formSubmitted = true;

    if (ngform.valid) {
      console.log("form is valid");
      await this.firebase.addMessageToData(this.newMessage); // Wait for message to be added
      await this.firebase.getMessages();                     // Wait for messages to be fetched
      this.filterMessages();                                 // Update the conversation array
      this.newMessageAdded = true;
      this.clearFormular(ngform);
      setTimeout(() => this.scrollToBottom(), 0);
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
  //#endregion

  openEmoji() {
    console.log("open emojis");
  }

  openContacts() {
    console.log("opening contacts");
  }

  addReaction(message: MessageInterface, emoji: string) {
    // Find if this emoji already exists
    const reaction = message.reactions.find(r => r.emoji === emoji);
    if (reaction) {
      reaction.counter++;
      console.log(message.reactions);
      console.log(message.text);
      
      
    } else {
      message.reactions.push({ emoji, counter: 1 });
      console.log(message.reactions);
    }
    // Optionally, save the updated message to your backend here
    this.firebase.updateMessageReactions(); // Implement this in your service
  }

  openEmojiMenu(message: MessageInterface) {
    console.log("opening emoji menu");
    
  }

  addThread(message: MessageInterface){
    console.log("adding thread");
  }
}
