import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../course-card/course-card';
import { CourseService } from '../../services/course';
import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-course-list',
imports: [CommonModule, CourseCardComponent, Highlight],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {
  courses: any[] = [];

  // Initially true so the loading message is displayed
  isLoading = true;

  constructor(private courseService: CourseService) {
    this.courses = this.courseService.getCourses();
  }

  ngOnInit() {
    // Simulates loading courses from a server.
    // After 1.5 seconds, the loading message disappears.
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }
  trackByCourseId(index: number, course: any): any {
  // trackBy helps Angular identify courses by ID,
  // so only changed items are re-rendered instead of the entire list.
  return course.id;
}
}