import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCardComponent } from './course-card';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;

    component.course = {
      id: 1,
      title: 'Angular Fundamentals',
      instructor: 'John Smith',
      duration: '6 weeks',
      gradeStatus: 'passed',
      enrolled: true,
      credits: 3
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});