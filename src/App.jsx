import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Courses } from "./components/Courses/Courses";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import ShowCourses from "./components/ShowCourses/ShowCourses";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="course/:courseId" element= {< ShowCourses/>}/>
      </Routes>
    </div>
  );
}

export default App;
