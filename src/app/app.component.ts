import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CmpDdComponent} from "./cmp-dd/cmp-dd.component";
import {DirectiveDdComponent} from "./directive-dd/directive-dd.component";
import {PipesDdComponent} from "./pipes-dd/pipes-dd.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CmpDdComponent, DirectiveDdComponent, PipesDdComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
