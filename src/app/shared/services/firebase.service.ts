import { inject, Injectable } from '@angular/core';
import { users } from './dummyData'
import { collection, doc, Firestore, getDocs, setDoc } from '@angular/fire/firestore';
import { UserInterface } from '../user.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  dummyData = users;
  firebase = inject(Firestore);

  allUsers: UserInterface[] = []; 
  constructor() { 
    // this.initializeUsers();
  }

    // #region vorlage 
    async initializeUsers() {
      try {
        const usersRef = collection(this.firebase, "users");
        this.dummyData.forEach(async (element) => {
          await setDoc(doc(usersRef), {
            email: element.email,
            fullname: `${element.name} ${element.lastname}`,
            firstname: element.name,
            lastname: element.lastname,
            avatar: element.avatar,
            status: element.status,
            privateMessages: element.privateMessages,
          });
        })
        console.log('Contact initialized successfully');
      } catch (error) {
        console.error('Error initializing contact:', error);
      }
    }
  // #endregion
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
          privateMessages: data.privateMessages,
        });
      });
      
      
      return usersList;
    } catch (error) {
      console.error("Error fetching users: ", error);
      return [];
    }
  }

}
