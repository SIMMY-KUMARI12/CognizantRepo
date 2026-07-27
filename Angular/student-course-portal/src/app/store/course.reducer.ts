import { createReducer } from '@ngrx/store';
import { initialCourseState } from './course.state';

export const courseReducer = createReducer(
  initialCourseState
);