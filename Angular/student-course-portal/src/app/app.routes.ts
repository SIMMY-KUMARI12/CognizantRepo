import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CoursesComponent } from './pages/courses/courses';
import { ProfileComponent } from './pages/profile/profile';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];