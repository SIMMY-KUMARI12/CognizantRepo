import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Course } from '../../models/course.model';
import { CourseCardComponent } from '../course-card/course-card';

import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses } from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCardComponent
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {

  courses$ = this.store.select(selectAllCourses);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}