import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseListComponent } from './course-list';
import { CourseService } from '../../services/course';
import { of } from 'rxjs';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  const mockCourses = [
    {
      id: 1,
      title: 'Angular Fundamentals',
      instructor: 'John Smith',
      duration: '6 weeks',
      gradeStatus: 'passed',
      enrolled: true,
      credits: 3
    },
    {
      id: 2,
      title: 'Java Programming',
      instructor: 'Sarah Johnson',
      duration: '8 weeks',
      gradeStatus: 'failed',
      enrolled: false,
      credits: 4
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseListComponent],
      providers: [
        {
          provide: CourseService,
          useValue: {
            getCourses: () => of(mockCourses)
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});