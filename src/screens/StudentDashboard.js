import React, { useContext, useRef, useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import Course from "../components/Course";
import { users } from "../data/users";
import { GlobalContext } from "../context/GlobalContext";
const StudentDashboard = () => {
  const params = useParams();
  const { mobile } = useContext(GlobalContext);
  const user = users.find(({ userId }) => userId === params.user);

  return (
    <div style={{ display: "flex", justifyContent: mobile && "center" }}>
      <section className='course-content'>
        <div>
          <h2 style={{ marginLeft: "2rem" }}>Enrolled Courses</h2>
          <div className='browse-list'>
            {user.enrolledCourses.map((course) => {
              return (
                <Course
                  key={course.id}
                  title={course.title}
                  instructors={course.instructors}
                  info={course.info}
                  link={`../../browse/${course.title
                    .split(" ")
                    .join("-")
                    .toLowerCase()}`}
                />
              );
            })}
          </div>
        </div>
        <div>
          <h2 style={{ marginLeft: "2rem" }}>Pending for Approval</h2>
          <div className='dashboard-courses'>
            {user.requestedCourses.map((course) => {
              return (
                <Course
                  key={course.id}
                  title={course.title}
                  instructors={course.instructors}
                  info={course.info}
                  link={`../../browse/${course.title
                    .split(" ")
                    .join("-")
                    .toLowerCase()}`}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Outlet />
    </div>
  );
};

export default StudentDashboard;
