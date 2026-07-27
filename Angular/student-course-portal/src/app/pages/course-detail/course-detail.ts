import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';
import { switchMap } from 'rxjs/operators';
import { EnrollmentService } from '../../services/enrollment';
@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetailComponent implements OnInit {

  course: Course | undefined;

  constructor(
  private route: ActivatedRoute,
  private courseService: CourseService,
  private enrollmentService: EnrollmentService
) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.course = this.courseService.getCourseById(id);
  }
}