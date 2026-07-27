import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course';
import { CourseListComponent } from '../../components/course-list/course-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CourseListComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {

  portalName = 'Student Course Portal';
  message = 'Welcome to the Student Course Portal.';
  isPortalActive = true;
  searchTerm = '';

  courseCount = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseCount = this.courseService.getCourses().length;
    console.log('HomeComponent initialised — courses loaded');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment process started!';
  }
}