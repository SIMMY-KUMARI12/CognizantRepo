import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses = [
    {
      title: 'Angular Fundamentals',
      instructor: 'John Smith',
      duration: '6 weeks'
    },
    {
      title: 'Java Programming',
      instructor: 'Sarah Johnson',
      duration: '8 weeks'
    },
    {
      title: 'Database Management',
      instructor: 'David Brown',
      duration: '5 weeks'
    }
  ];

  getCourses() {
    return this.courses;
  }
}