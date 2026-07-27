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
  isLoading = true;
  error: string | null = null;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
        this.isLoading = false;
      },
      error: (error) => {
        this.error = 'Failed to load courses.';
        this.isLoading = false;
        console.error(error);
      }
    });
  }

  trackByCourseId(index: number, course: any): any {
    return course.id;
  }
}