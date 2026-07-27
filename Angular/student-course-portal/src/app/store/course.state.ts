export interface CourseState {
  courses: any[];
  loading: boolean;
  error: string | null;
}

export const initialCourseState: CourseState = {
  courses: [],
  loading: false,
  error: null
};