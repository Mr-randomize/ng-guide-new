import {Component, inject} from '@angular/core';
import {AvailablePlacesComponent} from "./places/available-places/available-places.component";
import {UserPlacesComponent} from "./places/user-places/user-places.component";
import {ErrorService} from "./error.service";
import {ErrorModalComponent} from "./modal/error-modal/error-modal.component";

@Component({
  selector: 'app-http-dd',
  standalone: true,
  imports: [
    AvailablePlacesComponent,
    UserPlacesComponent,
    ErrorModalComponent
  ],
  templateUrl: './http-dd.component.html',
  styleUrl: './http-dd.component.css'
})
export class HttpDdComponent {
  private errorService = inject(ErrorService);

  error = this.errorService.error;
}
