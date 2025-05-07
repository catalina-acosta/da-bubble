import { Component, inject } from '@angular/core';
import { FirebaseService } from '../../shared/services/firebase.service';

@Component({
  selector: 'app-privatmessages',
  imports: [],
  templateUrl: './privatmessages.component.html',
  styleUrl: './privatmessages.component.scss'
})
export class PrivatmessagesComponent {
  firebase = inject(FirebaseService);
  currentUserId: string = '74izbWVB9XFaPrkOl2IW';
  currentConversationPartner: string = 'NsJ0o0lAuQVfQ7r28lRr';


}
