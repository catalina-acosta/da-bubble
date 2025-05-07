import { inject, Injectable } from '@angular/core';
import { users, messages } from './dummyData'
import { collection, doc, Firestore, getDocs, setDoc } from '@angular/fire/firestore';
import { UserInterface } from '../user.interface';
import { MessageInterface } from '../message.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  dummyDataUsers = users;
  dummyDataMesssages = messages;
  firebase = inject(Firestore);
  allUsers: UserInterface[] = []; 
  allMessages: MessageInterface[] = [];

  constructor() { 
    // this.initializeUsers();
    // console.log("initializing users");
    // this.initializeMessages();
    this.getMessages();
  }

    // #region vorlage 
    async initializeUsers() {
      try {
        const usersRef = collection(this.firebase, "users");
        this.dummyDataUsers.forEach(async (element) => {
          await setDoc(doc(usersRef), {
            email: element.email,
            fullname: `${element.name} ${element.lastname}`,
            firstname: element.name,
            lastname: element.lastname,
            avatar: element.avatar,
            status: element.status,
          });
        })
        console.log('Users initialized successfully');
      } catch (error) {
        console.error('Error initializing contact:', error);
      }
    }
  // #endregion

  //#region initialize Messages
    async initializeMessages() {
      try {
        const messagesRef = collection(this.firebase, "messages");
        this.dummyDataMesssages.forEach(async (element) => {
          await setDoc(doc(messagesRef), {
            senderId: element.senderId,
            receiverId: element.receiverId,
            channelId: element.channelId,
            text: element.text,
            date: element.date,
            time: element.time,
            reactions: element.reactions,
          });
        })
        console.log('Messages initialized successfully');
      } catch (error) {
        console.error('Error initializing contact:', error);
      }
    }
  //#endregion

  async getUsers(): Promise<UserInterface[]> {
    try {
      const usersRef = collection(this.firebase, "users");
      const usersSnapshot = await getDocs(usersRef);
      const usersList: UserInterface[] = [];
      
      usersSnapshot.forEach(doc => {
        const data = doc.data() as UserInterface; // <-- Typecast hinzufügen
        usersList.push({
          id: doc.id,
          fullname: data.fullname,
          name: data.name,
          lastname: data.lastname,
          email: data.email,
          avatar: data.avatar,
          status: data.status,
        });
      });
      return usersList;
    } catch (error) {
      console.error("Error fetching users: ", error);
      return [];
    }
  }

  async getMessages() {
    try {
      const messagesRef = collection(this.firebase, "messages");
      const messagesSnapshot = await getDocs(messagesRef);
      // const messagesList: MessageInterface[] = [];
      messagesSnapshot.forEach(doc => {
        const data = doc.data() as MessageInterface; // <-- Typecast hinzufügen
        this.allMessages.push({
          id: doc.id,
          senderId: data.senderId,
          receiverId: data.receiverId,
          channelId: data.channelId,
          text: data.text,
          date: data.date,
          time: data.time,
          reactions: data.reactions,
        });
      });
      console.log(this.allMessages);
      
      // return messagesList;
    } catch (error) {
      console.error("Error fetching messages: ", error);
      // return [];
    }
  }
}
