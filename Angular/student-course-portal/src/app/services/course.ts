import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses = [
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
    },
    {
      id: 3,
      title: 'Database Management',
      instructor: 'David Brown',
      duration: '5 weeks',
      gradeStatus: 'pending',
      enrolled: true,
      credits: 5
    }
  ];

  getCourses() {
    return this.courses;
  }
}