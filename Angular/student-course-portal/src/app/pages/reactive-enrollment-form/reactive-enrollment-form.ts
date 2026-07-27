import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-reactive-enrollment-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentFormComponent implements OnInit {

  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],

      studentEmail: ['', [
        Validators.required,
        Validators.email
      ]],

      courseId: [null, Validators.required],

      preferredSemester: ['Odd', Validators.required],

      agreeToTerms: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (this.enrollForm.valid) {
      // enrollForm.value excludes disabled controls,
      // while getRawValue() includes all controls, even disabled ones.
      console.log('Form Value:', this.enrollForm.value);
      console.log('Raw Form Value:', this.enrollForm.getRawValue());
    }
  }
}