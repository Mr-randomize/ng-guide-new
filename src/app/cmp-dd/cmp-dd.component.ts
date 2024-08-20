import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {ServerStatusComponent} from "./dashboard/server-status/server-status.component";
import {TicketsComponent} from "./dashboard/tickets/tickets.component";
import {TrafficComponent} from "./dashboard/traffic/traffic.component";
import {DashboardItemComponent} from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-cmp-dd',
  standalone: true,
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TicketsComponent,
    TrafficComponent,
    DashboardItemComponent
  ],
  templateUrl: './cmp-dd.component.html',
  styleUrl: './cmp-dd.component.css'
})
export class CmpDdComponent {


}
