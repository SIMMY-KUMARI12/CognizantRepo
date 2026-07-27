import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course';
@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentFormComponent {

  studentName = '';
  studentEmail = '';
  courseId: number | null = null;
  preferredSemester = '';
  agreeToTerms = false;

  submitted = false;
constructor(private courseService: CourseService) {}
  
onSubmit(form: NgForm) {
  if (form.valid) {

    const newCourse = {
      name: this.studentName,
      code: 'NEW101',
      credits: 3,
      gradeStatus: 'pending' as const
    };

    this.courseService.createCourse(newCourse).subscribe({
      next: (course) => {
        console.log('Course created:', course);
        this.submitted = true;
      },
      error: (err) => {
        console.error('Error creating course:', err);
        this.submitted = false;
      }
    });

  } else {
    this.submitted = false;
  }
}
}