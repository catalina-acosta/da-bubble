import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/component/header/header.component';
import { PrivatmessagesComponent } from './privatmessages/privatmessages.component';

@Component({
  selector: 'app-maincontent',
  imports: [HeaderComponent, PrivatmessagesComponent],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss'
})
export class MaincontentComponent {

}
