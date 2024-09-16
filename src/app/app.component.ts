import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CmpDdComponent} from "./cmp-dd/cmp-dd.component";
import {DirectiveDdComponent} from "./directive-dd/directive-dd.component";
import {PipesDdComponent} from "./pipes-dd/pipes-dd.component";
import {ServicesDdComponent} from "./services-dd/services-dd.component";
import {ChangeDetectionDdComponent} from "./change-detection-dd/change-detection-dd.component";
import {RxjsDdComponent} from "./rxjs-dd/rxjs-dd.component";
import {HttpDdComponent} from "./http-dd/http-dd.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CmpDdComponent, DirectiveDdComponent, PipesDdComponent, ServicesDdComponent, ChangeDetectionDdComponent, RxjsDdComponent, HttpDdComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
