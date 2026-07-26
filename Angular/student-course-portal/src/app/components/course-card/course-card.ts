import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent implements OnChanges {
  @Input() course: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['course']) {
      console.log('CourseCard updated:', this.course);
    }
  }
}