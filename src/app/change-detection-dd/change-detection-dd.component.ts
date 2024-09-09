import { Component } from '@angular/core';
import {CounterComponent} from "./counter/counter.component";
import {MessagesComponent} from "./messages/messages.component";

@Component({
  selector: 'app-change-detection-dd',
  standalone: true,
  imports: [
    CounterComponent,
    MessagesComponent
  ],
  templateUrl: './change-detection-dd.component.html',
  styleUrl: './change-detection-dd.component.css'
})
export class ChangeDetectionDdComponent {
  get debugOutput() {
    console.log('[AppComponent] "debugOutput" binding re-evaluated.');
    return 'AppComponent Component Debug Output';
  }
}
