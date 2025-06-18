import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../../shared/services/firebase.service';
import { AddChanneldialogComponent } from "../add-channeldialog/add-channeldialog.component";
import { ChannelInterface } from '../../shared/channels.interface';

@Component({
  selector: 'app-devspace',
  imports: [CommonModule, AddChanneldialogComponent, AddChanneldialogComponent],
  standalone: true,
  templateUrl: './devspace.component.html',
  styleUrl: './devspace.component.scss',
})
export class DevspaceComponent implements OnInit{
  firebase = inject(FirebaseService);
  isAvatarContentVisible: boolean = true;
  isChannelsVisible: boolean = true;
  isClicked:boolean = false;
  channels: ChannelInterface[] =[];
  @Output() conversationPartnerId = new EventEmitter<string>();

  ngOnInit(): void {
    this.firebase.getChannels();
  }
  onToggleClickChannels() {
    this.isChannelsVisible = !this.isChannelsVisible;
  }
  onToggleClick() {
    this.isAvatarContentVisible = !this.isAvatarContentVisible;
  }

  openChannelDialog(){
    this.isClicked = true;
  }

  closeDialog(){
    this.isClicked =false;
  }

  openPrivateConversation(id: string) {
    this.conversationPartnerId.emit(id);
  }
}
