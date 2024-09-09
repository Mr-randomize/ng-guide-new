import { Component } from '@angular/core';
import {TasksComponent} from "./tasks/tasks.component";

@Component({
  selector: 'app-services-dd',
  standalone: true,
  imports: [
    TasksComponent
  ],
  templateUrl: './services-dd.component.html',
  styleUrl: './services-dd.component.css'
})
export class ServicesDdComponent {

}
