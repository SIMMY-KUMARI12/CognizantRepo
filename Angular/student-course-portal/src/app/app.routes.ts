import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { EnrollmentFormComponent } from './pages/enrollment-form/enrollment-form';
import { ReactiveEnrollmentFormComponent } from './pages/reactive-enrollment-form/reactive-enrollment-form';
export const routes: Routes = [
   {
  path: 'enroll-reactive',
  component: ReactiveEnrollmentFormComponent
}

];
