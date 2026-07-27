import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { CourseService } from './course';

describe('CourseService', () => {

  let service: CourseService;
  let httpMock: HttpTestingController;

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

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CourseService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch courses', () => {
    service.getCourses().subscribe(courses => {
      expect(courses.length).toBe(2);
      expect(courses).toEqual(mockCourses);
    });

    const request = httpMock.expectOne(
      'http://localhost:3000/courses'
    );

    expect(request.request.method).toBe('GET');

    request.flush(mockCourses);
  });

  it('should handle server error', () => {
    service.getCourses().subscribe({
      next: () => fail('Expected an error'),
      error: error => {
        expect(error.status).toBe(500);
      }
    });

    const request = httpMock.expectOne(
      'http://localhost:3000/courses'
    );

    request.flush('Server Error', {
      status: 500,
      statusText: 'Internal Server Error'
    });
  });

});