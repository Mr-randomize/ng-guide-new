import {ApplicationConfig, InjectionToken, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {TasksService} from "./services-dd/tasks/tasks.service";
import {HttpEventType, HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors} from "@angular/common/http";
import {tap} from "rxjs";

export const TasksServiceToken = new InjectionToken<TasksService>('tasks-service-token');

function loggingInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn) {
  // const req = request.clone({
  //   headers: request.headers.set('X-DEBUG', 'TESTING')
  // });
  console.log('[Outgoing Request]');
  console.log(request);
  return next(request).pipe(
    tap({
      next: event => {
        if (event.type === HttpEventType.Response) {
          console.log('[Incoming Response]');
          console.log(event.status);
          console.log(event.body);
        }
      }
    })
  );
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes),
    provideHttpClient(withInterceptors([loggingInterceptor]))
    // {provide: TasksServiceToken, useClass: TasksService}
  ]
};
