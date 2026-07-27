import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideState } from '@ngrx/store';

import { authInterceptor } from './interceptors/auth.interceptor';
import { routes } from './app.routes';
import { enrollmentReducer } from './store/enrollment/enrollment.reducer';
import { courseReducer } from './store/course/course.reducer';
import { CourseEffects } from './store/course/course.effects';
export const appConfig: ApplicationConfig = {
  providers: [
     provideRouter(routes),

    provideHttpClient(
      withInterceptors([authInterceptor])
    ),

    provideEffects(CourseEffects)
  ]
};