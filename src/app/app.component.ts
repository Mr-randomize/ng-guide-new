import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CmpDdComponent} from "./cmp-dd/cmp-dd.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CmpDdComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
