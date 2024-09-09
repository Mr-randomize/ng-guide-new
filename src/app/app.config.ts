import {ApplicationConfig, InjectionToken, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {TasksService} from "./services-dd/tasks/tasks.service";

export const TasksServiceToken = new InjectionToken<TasksService>('tasks-service-token');

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes),
    // {provide: TasksServiceToken, useClass: TasksService}
  ]
};
