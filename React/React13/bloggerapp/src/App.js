import React from 'react';
import './App.css';
import { books, courses, blogs } from './data';

function App() {
  // 1. Conditional rendering with && operator
  const bookdet = (
    books.length > 0 && (
      <ul>
        {books.map((book) => (
          <div key={book.id}>
            <h3>{book.bname}</h3>
            <h4>{book.price}</h4>
          </div>
        ))}
      </ul>
    )
  );

  // 2. Conditional rendering with ternary operator
  const coursedet = (
    courses.length > 0 ? (
      <ul>
        {courses.map((course) => (
          <div key={course.id}>
            <h3>{course.cname}</h3>
            <h4>{course.date}</h4>
          </div>
        ))}
      </ul>
    ) : (
      <p>No courses available</p>
    )
  );

  // 3. Conditional rendering with if/else inside a function
  function getContent() {
    if (blogs.length === 0) {
      return <p>No blogs available</p>;
    } else {
      return (
        <ul>
          {blogs.map((blog) => (
            <div key={blog.id}>
              <h2>{blog.title}</h2>
              <h4>{blog.author}</h4>
              <p>{blog.desc}</p>
            </div>
          ))}
        </ul>
      );
    }
  }
  const content = getContent();

  return (
    <div>
      <div className="container">
        <div className="st2">
          <h1>Book Details</h1>
          {bookdet}
        </div>
        <div className="v1">
          <h1>Blog Details</h1>
          {content}
        </div>
        <div className="mystyle1">
          <h1>Course Details</h1>
          {coursedet}
        </div>
      </div>
    </div>
  );
}

export default App;