import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCardComponent } from './course-card';
import { By } from '@angular/platform-browser';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { enrollInCourse } from '../../store/enrollment/enrollment.actions';
describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;
  let store: MockStore;

  beforeEach(async () => {
   await TestBed.configureTestingModule({
  imports: [CourseCardComponent],
  providers: [
    provideMockStore({
      initialState: {
        enrollment: {
          enrolledCourseIds: []
        }
      }
    })
  ]
}).compileComponents();
store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;

    component.course = {
      id: 1,
      title: 'Angular Fundamentals',
      instructor: 'John Smith',
      duration: '6 weeks',
      gradeStatus: 'passed',
      enrolled: false,
      credits: 3
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display the course name', () => {
  component.course = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed'
  };
  it('should dispatch enroll action when Enroll is clicked', () => {
  spyOn(store, 'dispatch');
it('should log when course changes', () => {
  spyOn(console, 'log');

  component.ngOnChanges({
    course: {
      currentValue: component.course,
      previousValue: undefined,
      firstChange: true,
      isFirstChange: () => true
    }
  });

  expect(console.log).toHaveBeenCalledWith(
    'CourseCard updated:',
    component.course
  );
});
  component.course = {
    id: 1,
    title: 'Angular Fundamentals',
    instructor: 'John Smith',
    duration: '6 weeks',
    gradeStatus: 'passed',
    enrolled: false,
    credits: 3
  };

  fixture.detectChanges();

  const buttons = fixture.debugElement.queryAll(By.css('button'));

  const enrollButton = buttons.find(
    button => button.nativeElement.textContent.trim() === 'Enroll'
  );

  expect(enrollButton).toBeTruthy();

  enrollButton!.nativeElement.click();

  expect(store.dispatch).toHaveBeenCalledWith(
    enrollInCourse({ courseId: 1 })
  );
});

  fixture.detectChanges();

  const heading = fixture.debugElement
    .query(By.css('h3'))
    .nativeElement;

  expect(heading.textContent).toContain('Data Structures');
});
});