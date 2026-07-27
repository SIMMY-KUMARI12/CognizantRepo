import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseListComponent } from './course-list';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
let store: MockStore;
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
  provideMockStore({
    initialState: {
      course: {
        courses: mockCourses,
        loading: false,
        error: null
      }
    }
  })
]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render courses from the store', () => {
  const cards = fixture.debugElement.queryAll(
    By.css('app-course-card')
  );
it('should show loading indicator when loading is true', () => {
  store.setState({
    course: {
      courses: [],
      loading: true,
      error: null
    }
  });

  fixture.detectChanges();

  const loadingElement = fixture.debugElement.query(
    By.css('.loading')
  );

  expect(loadingElement).toBeTruthy();
});
  expect(cards.length).toBe(2);
});
});