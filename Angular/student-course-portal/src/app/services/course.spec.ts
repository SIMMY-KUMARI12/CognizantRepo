import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course';
describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [CourseService]
  });

  service = TestBed.inject(CourseService);
  httpMock = TestBed.inject(HttpTestingController);
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return courses', () => {
  const mockCourses = [
    {
      id: 1,
      name: 'Angular Fundamentals',
      code: 'CS101',
      credits: 3,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'Java Programming',
      code: 'CS102',
      credits: 4,
      gradeStatus: 'pending'
    }
  ];

  service.getCourses().subscribe(courses => {
    expect(courses.length).toBe(2);
  });

  const req = httpMock.expectOne('http://localhost:3000/courses');

  expect(req.request.method).toBe('GET');

  req.flush(mockCourses);

  httpMock.verify();
});
it('should handle error when loading courses fails', () => {
  service.getCourses().subscribe({
    next: () => fail('Expected an error'),
    error: err => {
      expect(err.message).toBe(
        'Failed to load courses. Please try again.'
      );
    }
  });

  const req = httpMock.expectOne('http://localhost:3000/courses');

  req.flush('Server error', {
    status: 500,
    statusText: 'Internal Server Error'
  });

  httpMock.verify();
});

  it('should find a course by id', () => {
    const course = service.getCourseById(1);

    expect(course).toBeTruthy();
    expect(course?.name).toBe('Angular Fundamentals');
  });

  it('should add a course', () => {
    const initialLength = service.getCourses().length;

    service.addCourse({
      id: 6,
      name: 'Python Programming',
      code: 'PY101',
      credits: 3,
      gradeStatus: 'pending'
    });

    expect(service.getCourses().length).toBe(initialLength + 1);
  });
});