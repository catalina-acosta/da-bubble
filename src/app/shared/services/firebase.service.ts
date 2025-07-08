import { inject, Injectable } from '@angular/core';
import { users, messages, channels } from './dummyData'
import { addDoc, collection, doc, Firestore, getDocs, setDoc, updateDoc, onSnapshot } from '@angular/fire/firestore';
import { UserInterface } from '../user.interface';
import { MessageInterface } from '../message.interface';
import { ChannelInterface } from '../channels.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  dummyDataUsers = users;
  dummyDataMesssages = messages;
  dummyDataChannels = channels;
  firebase = inject(Firestore);
  allUsers: UserInterface[] = []; 
  allMessages: MessageInterface[] = [];
  allUsersList: UserInterface[] = []; 
  allChannels: ChannelInterface[] = []; // Liste für Channels, falls benötigt
  currentUser: UserInterface | null = null;

  constructor() { 
    // this.initializeUsers();
    // console.log("initializing users");
    // this.initializeMessages();
    // this.initializeChannels();
    this.getMessages();
    this.getUserList();
    this.getChannels();
  }

  //#region vorlage Users
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
            formattedTime: element.formattedTime,
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

  //#region initialize channels
  async initializeChannels() {
    try {
      const channelsRef = collection(this.firebase, "channels");
      for (const element of this.dummyDataChannels) {
        const { id, ...dataWithoutId } = element; // Remove id from data
        const channelDocRef = doc(channelsRef, element.id); // Use existing id
        await setDoc(channelDocRef, dataWithoutId); // Overwrite or create with same id
      }
      console.log('Channels initialized successfully');
    } catch (error) {
      console.error('Error initializing channels:', error);
    }
  }
  //#endregion
  
  setCurrentUser(user: UserInterface) {
    this.currentUser = user;
  }

  getCurrentUser(): UserInterface | null {
    return this.currentUser;
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
          formattedTime: data.formattedTime,
          reactions: data.reactions,
        });
      });
      // console.log(this.allMessages);
      
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
  
      return this.allUsersList;
      
    } catch (error) {
      console.error("Error fetching users: ", error);
      // Gib im Fehlerfall ein leeres Array zurück
      return [];
    }
  }

  async updateUserStatus(userId: string, status: boolean): Promise<void> {
  try {
    const userDocRef = doc(this.firebase, 'users', userId);
    await setDoc(userDocRef, { status: status }, { merge: true });
    console.log(`User status updated to ${status}`);
  } catch (error) {
    console.error('Error updating user status:', error);
  }
}

  async updateUserName(userId: string, fullname: string): Promise<void> {
    try {
      const userDocRef = doc(this.firebase, 'users', userId);
      await setDoc(userDocRef, { fullname: fullname }, { merge: true });
    } catch (error) {
      console.error('Error updating user fullname:', error);
    }
  }

  
  async addMessageToData(newMessage: MessageInterface) {
    await addDoc(collection(this.firebase, "messages"), newMessage);
  }

  async updateMessageReactions(id: string, data: MessageInterface ) {
    await updateDoc(doc(this.firebase, "messages", id), {
      reactions: data.reactions,
    });
    console.log("message updated");
  }

  async addChannelToData(newChannel: ChannelInterface) {
    await addDoc(collection(this.firebase, "channels"), newChannel);
  }

  getChannels(): void { 
  const channelsRef = collection(this.firebase, "channels");

    onSnapshot(channelsRef, (snapshot) => {
      this.allChannels = [];
      snapshot.forEach(doc => {
        const data = doc.data() as ChannelInterface;
        this.allChannels.push({
          id: doc.id,
          channelName: data.channelName,
          description: data.description,
          userCreators: data.userCreators,
          members: data.members || [],
          messages: data.messages
        });
      });
    });
  }
}