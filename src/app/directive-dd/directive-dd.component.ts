import {Component, computed, inject} from '@angular/core';
import {LearningResourcesComponent} from "./learning-resources/learning-resources.component";
import {AuthComponent} from "./auth/auth.component";
import {AuthService} from "./auth/auth.service";
import {AuthDirective} from "./auth/auth.directive";
import {LogDirective} from "./log.directive";

@Component({
  selector: 'app-directive-dd',
  standalone: true,
  imports: [
    LearningResourcesComponent,
    AuthComponent,
    AuthDirective,
    LogDirective
  ],
  templateUrl: './directive-dd.component.html',
  styleUrl: './directive-dd.component.css'
})
export class DirectiveDdComponent {

  private authService = inject(AuthService);

  isAdmin = computed(() => this.authService.activePermission() === 'admin');
}
