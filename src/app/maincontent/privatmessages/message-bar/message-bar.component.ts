import { Component, inject, Input } from '@angular/core';
import { FirebaseService } from '../../../shared/services/firebase.service';

@Component({
  selector: 'app-message-bar',
  imports: [],
  templateUrl: './message-bar.component.html',
  styleUrl: './message-bar.component.scss'
})
export class MessageBarComponent {
  firebase = inject(FirebaseService);
  @Input() currentConversationPartnerId: string = '';
  @Input() currentChannelId: string = '';
}
