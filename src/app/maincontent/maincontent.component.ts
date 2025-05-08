import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/component/header/header.component';
import { PrivatmessagesComponent } from './privatmessages/privatmessages.component';
import { DevspaceComponent } from "./devspace/devspace.component";
import { ThreadComponent } from "./thread/thread.component";

@Component({
  selector: 'app-maincontent',
  imports: [HeaderComponent, PrivatmessagesComponent, DevspaceComponent, ThreadComponent],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss'
})
export class MaincontentComponent {

}
