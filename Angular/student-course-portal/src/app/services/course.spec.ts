import { TestBed } from '@angular/core/testing';
import { CourseService } from './course';
import { CommonModule } from '@angular/common';
describe('CourseService', () => {
  let service: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseService]
    });

    service = TestBed.inject(CourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return courses', () => {
    const courses = service.getCourses();

    expect(courses.length).toBe(5);
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