import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { courseReducer } from './store/course.reducer';
export const appConfig: ApplicationConfig = {
  providers: [
provideRouter(routes),
  provideHttpClient(),
  provideStore({
    course: courseReducer
  })
  ]
};
