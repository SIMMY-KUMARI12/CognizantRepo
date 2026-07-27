import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnrollmentFormComponent } from '../../pages/enrollment-form/enrollment-form';
import { ReactiveEnrollmentFormComponent } from '../../pages/reactive-enrollment-form/reactive-enrollment-form';

const routes: Routes = [
  {
    path: '',
    component: EnrollmentFormComponent
  },
  {
    path: 'reactive',
    component: ReactiveEnrollmentFormComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class EnrollmentRoutingModule {}