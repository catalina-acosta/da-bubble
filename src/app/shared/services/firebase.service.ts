import { inject, Injectable } from '@angular/core';
import { users } from './dummyData'
import { collection, doc, Firestore, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  dummyData = users;
  firebase = inject(Firestore);

  constructor() { }

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
}
