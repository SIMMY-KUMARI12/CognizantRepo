import { CanDeactivateFn } from '@angular/router';

export const unsavedchangesGuard: CanDeactivateFn<any> = (component) => {

  if (component.enrollForm && component.enrollForm.dirty) {
    return window.confirm('You have unsaved changes. Leave?');
  }

  return true;
};