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
  allUsersList: UserInterface[] = []; 

  constructor() { 
    // this.initializeUsers();
    // console.log("initializing users");
    // this.initializeMessages();
    this.getMessages();
    this.getUserList();
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

  async getUserList(): Promise<UserInterface[]> {
    try {
      const usersRef = collection(this.firebase, "users");
      const usersSnapshot = await getDocs(usersRef);
  
      // Zurücksetzen der Liste, falls sie vorher schon Daten hatte
      this.allUsersList = [];
  
      usersSnapshot.forEach(doc => {
        const data = doc.data() as UserInterface; 
        this.allUsersList.push({
          id: doc.id,
          fullname: data.fullname,
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          avatar: data.avatar,
          status: data.status,
        });
      });
  
      // Gib die Liste der Benutzer zurück
      return this.allUsersList;
      
    } catch (error) {
      console.error("Error fetching users: ", error);
      // Gib im Fehlerfall ein leeres Array zurück
      return [];
    }
  }
  
}
