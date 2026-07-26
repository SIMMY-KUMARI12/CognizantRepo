import { Component } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-list',
  imports: [CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent {
  courses: any[] = [];

  constructor(private courseService: CourseService) {
    this.courses = this.courseService.getCourses();
  }
}