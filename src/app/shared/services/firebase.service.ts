import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

    // #region vorlage 
    // async initializeContacts() {
    //   try {
    //     const contactsRef = collection(this.firebase, "contacts");
    //     this.dummyData.forEach(async (element) => {
    //       await setDoc(doc(contactsRef), {
    //         email: element.email,
    //         fullname: `${element.firstname} ${element.lastname}`,
    //         firstname: element.firstname,
    //         lastname: element.lastname,
    //         phone: element.phone,
    //         color: element.color,
    //       });
    //     })
    //     console.log('Contact initialized successfully');
    //   } catch (error) {
    //     console.error('Error initializing contact:', error);
    //   }
    // }
  // #endregion
}
