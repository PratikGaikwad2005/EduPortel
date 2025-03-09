import './App.css';
import { Routes, Route } from "react-router-dom";
import { Dashbord } from './components/Dashbord';  // Student Dashboard
import TeacherDashboard from './components/TeacherDashboard';  // Teacher Dashboard
import {Course} from './components/Course';
import Assignment from './components/Assignment';
import {Messages} from './components/Messages';
import {Resources} from './components/Resources';
import Sidebar from './components/Sidebar';
import { Navbar } from './components/Navbar';
import TeacherSidebar from './components/TeacherSidebar';
import TeacherCourses from './components/TeacherCourses';
import SwitchPanel from './components/SwitchPanel ';
import TeacherAssignment from './components/TeacherAssignment';
import TeacherMessages from './components/TeacherMessages';

function App() {
  return (
    <>
      <Navbar />  {/* ✅ Navbar is always visible */}
      <Routes>
        {/* Student Dashboard with Sidebar */}
        <Route
          path="/dashbord/*"
          element={
            <div className="d-flex">
              <Sidebar userType="student" />  {/* ✅ Pass userType as 'student' */}
              <div className="container-fluid p-4">
                <Routes>
                  <Route index element={<Dashbord />} />
                  <Route path="course" element={<Course />} />
                  <Route path="assignment" element={<Assignment />} />
                  <Route path="messages" element={<Messages />} />
                  <Route path="resources" element={<Resources />} />
                </Routes>
              </div>
            </div>
          }
        />

        {/* Teacher Dashboard with Sidebar */}
        <Route
          path="/teacherdashboard/*"
          element={
            <div className="d-flex">
              <TeacherSidebar userType="teacher" />  {/* ✅ Pass userType as 'teacher' */}
              <div className="container-fluid p-4">
                <Routes>
                  <Route index element={<TeacherDashboard />} />
                  <Route path="course" element={<TeacherCourses/>} />
                  <Route path="TeacherAssignment" element={<TeacherAssignment/>} />
                  <Route path="TeacherMessages" element={<TeacherMessages/>} />
                  <Route path="resources" element={<Resources />} />
                </Routes>
              </div>
            </div>
          }
        />

        {/* 404 Page */}
        <Route path="*" element={<SwitchPanel/>} />
        
      </Routes>
    </>
  );
}

export default App;
