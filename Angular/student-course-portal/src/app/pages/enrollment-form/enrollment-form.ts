import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-enrollment-form',
  imports: [CommonModule],
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

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Value:', form.value);
      console.log('Form Valid:', form.valid);

      this.submitted = true;
    } else {
      this.submitted = false;
    }
  }
}