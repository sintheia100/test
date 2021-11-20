import React, { useState } from "react";
import Course from "../components/Course";
import { courses } from "../data/courses";
const BrowseScreen = () => {
  const [searchInput, setSearchInput] = useState("");
  console.log(courses[0].title.split(" ").join("-"));
  return (
    <div className=''>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "1rem 2rem",
        }}>
        <h1>Browse Courses</h1>

        <input
          type='text'
          className='search-input'
          placeholder='Search'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className='browse-list'>
        {courses.map((course) => {
          return (
            <Course
              key={course.id}
              title={course.title}
              info={course.info}
              instructors={course.instructors}
              link={course.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BrowseScreen;
