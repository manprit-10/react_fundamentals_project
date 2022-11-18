import { mockedCoursesList } from "./../../constants";
import { CourseCard } from "./components/CourseCard/CourseCard";
import { SearchBar } from "../Courses/components/SearchBar/SearchBar";
import { CreateCourse } from "../CreateCourse/CreateCourse";
import "./Courses.css";
import { Header } from "../Header/Header";
import { useState } from "react";
import { Button } from "../../common/Button/Button";

export const Courses = function () {
  const [coursesList, setCourseList] = useState(mockedCoursesList);
  const [showAddCourse, setShowAddCourse] = useState(false);
  const [search, setSearch] = useState("");
  const [fData, setFData] = useState(coursesList);
  
  const filteredData = () => {
    if (search.trim() === "0") {
      setFData(coursesList);
    } else {
      const filter = coursesList.filter(
        (c) =>
          c.id.toLowerCase().includes(search.toLowerCase()) ||
          c.title.toLowerCase().includes(search.toLowerCase())
      );
      setFData(filter);
    }
  };

  return (
    <div className="main-courses">
    <Header />
      <div className="courses_container">
        <div className="courses-header">
          <SearchBar
            onChange={(e) => setSearch(e.target.value)}
            search={search}
            onClick={() => filteredData()}
          />
          <Button
            onClick={() => setShowAddCourse((prev) => !prev)}
            name={showAddCourse ? "Show Courses" : "Add New Course"}
          />
        </div>
        {showAddCourse && (
          <CreateCourse
            showAddCourse={showAddCourse}
            setShowAddCourse={setShowAddCourse}
            setCourseList={setCourseList}
            coursesList={coursesList}
            fData={fData}
            setFData={setFData}
          />
        )}
        {!showAddCourse && (
          <ul className="courses">
            {fData.map((course) => {
              return <CourseCard key={course.id} course={course} />;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
