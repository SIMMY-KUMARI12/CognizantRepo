import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnrollmentFormComponent } from './enrollment-form';
describe('EnrollmentFormComponent', () => {
  let component: EnrollmentFormComponent;
  let fixture: ComponentFixture<EnrollmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
  CommonModule,
  FormsModule,
  EnrollmentFormComponent
]
    }).compileComponents();

    fixture = TestBed.createComponent(EnrollmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});