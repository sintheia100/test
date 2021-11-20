import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Browse from "./screens/BrowseScreen";
import StudentLogin from "./screens/StudentLogin";
import TeacherLogin from "./screens/TeacherLogin";
import Header from "./components/Header";
import CoursePage from "./screens/CoursePage";
import StudentDashboard from "./screens/StudentDashboard";
import AssignmentsPage from "./screens/AssignmentsPage";
import CourseAssignment from "./screens/CourseAssignment";
import TeacherDashboard from "./screens/TeacherDashboard";
import Dashboard from "./screens/Dashboard";
const App = () => {
  return (
    <Router basename='/'>
      <Header />
      <hr className='header-divider' />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<Login />} />

        <Route path='login/student' element={<StudentLogin />} />
        <Route path='login/instructor' element={<TeacherLogin />} />
        <Route path='signup' element={<Signup />} />
        <Route path='browse' element={<Browse />} />
        <Route path='browse/:id' element={<CoursePage />} />
        <Route path=':user' element={<Dashboard />}>
          <Route path='dashboard' element={<StudentDashboard />} />
          <Route path='assignments' element={<AssignmentsPage />} />
          <Route
            path='assignments/:assignmentId'
            element={<CourseAssignment />}
          />
        </Route>
        <Route path='instructor/dashboard' element={<TeacherDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
