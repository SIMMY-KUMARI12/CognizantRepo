import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { enrollInCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent implements OnChanges {

  @Input() course: any;

  isExpanded = false;

  enrolledIds$ = this.store.select(selectEnrolledIds);

  constructor(
    private router: Router,
    private store: Store
  ) {}

  get cardClasses() {
    return {
      'card--enrolled': this.course?.enrolled,
      'card--full': this.course?.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('CourseCard updated:', this.course);
    }
  }

  openCourse(): void {
    this.router.navigate(['courses', this.course.id]);
  }

  enroll(): void {
    this.store.dispatch(
      enrollInCourse({ courseId: this.course.id })
    );
  }
}