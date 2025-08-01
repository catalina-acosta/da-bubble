import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { FirebaseService } from '../../shared/services/firebase.service';
import { MessageInterface } from '../../shared/message.interface';
import { NgForm, FormsModule } from '@angular/forms';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBarComponent } from './message-bar/message-bar.component';

@Component({
  selector: 'app-privatmessages',
  imports: [FormsModule, CommonModule, MessageBarComponent],
  templateUrl: './privatmessages.component.html',
  styleUrl: './privatmessages.component.scss'
})
export class PrivatmessagesComponent implements AfterViewInit {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  firebase = inject(FirebaseService);
  currentUserId: string = '74izbWVB9XFaPrkOl2IW';
  @Input() currentConversationPartnerId: string = '';
  @Input() currentChannelId: string = '';
  currentCPAvatar: string = "";
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentConversationPartnerId'] && !changes['currentConversationPartnerId'].firstChange) {
      this.filterMessages();
      this.currentChannelId = '';
      setTimeout(() => this.scrollToBottom(), 0);
    }

    if (changes['currentConversationPartnerId']) {
      console.log('currentConversationPartnerId changed:', this.currentConversationPartnerId);
    }
  }

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
        // checks if a message already exists in the array to not show duplicate messages
        const alreadyExists = this.conversation.some(m => m.id === message.id);
        // if the message has been written between the 2 users and is not already exist in the conversation it will be pushed in the conversation array
        if (isBetweenUsers && !alreadyExists) {
          this.conversation.push(message);
        }
      });
      this.conversation.sort((a, b) => a.time - b.time);
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
    this.newMessage.channelId = this.currentChannelId;
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
      if(reaction.counter) {
        reaction.counter++;
        console.log(message.reactions);
        console.log(message.text);
      }
    } else {
      message.reactions.push({ emoji, counter: 1 });
      console.log(message.reactions);
    }

    if (message.id) {
      this.firebase.updateMessageReactions(message.id, message); 
    } else {
      console.error('Message id is undefined or not a string:', message.id);
    }
  }

  openEmojiMenu(message: MessageInterface) {
    console.log("opening emoji menu");
    
  }

  addThread(message: MessageInterface){
    console.log("adding thread");
  }
}
