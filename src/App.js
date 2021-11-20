import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/login' exact component={Login} />

        <Route path='/login/student' exact component={StudentLogin} />
        <Route path='/login/instructor' exact component={TeacherLogin} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/browse' exact component={Browse} />
        <Route path='/browse/:id' exact component={CoursePage} />
        <Route path='/:user/dashboard' exact component={StudentDashboard} />
        {/* <Route path='/dashboard' exact component={StudentDashboard} /> */}
        <Route
          path='/:user/dashboard/assignments'
          exact
          component={AssignmentsPage}
        />
        <Route
          path='/:user/assignments/:assignmentId'
          exact
          component={CourseAssignment}
        />
        <Route
          path='/:user/instructor/dashboard'
          component={TeacherDashboard}
        />
        {/* />
        <Route path=':user' component={<Dashboard />}>
          <Route path='dashboard' component={<StudentDashboard />} />
          <Route path='assignments' component={<AssignmentsPage />} />
          <Route
            path='assignments/:assignmentId'
            component={<CourseAssignment />}
          />
        </Route>
        <Route path='instructor/dashboard' component={<TeacherDashboard />} /> */}
      </Switch>
    </Router>
  );
};

export default App;
