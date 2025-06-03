import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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
export class DevspaceComponent{
  firebase = inject(FirebaseService);
  isAvatarContentVisible: boolean = true;
  isChannelsVisible: boolean = true;
  isClicked:boolean = false;
  channels: ChannelInterface[] =[];

  async ngOnInit() {
    this.channels =await this.firebase.getChannels();
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
}
