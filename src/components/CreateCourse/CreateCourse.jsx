import { Button } from "../../common/Button/Button";
import { Input } from "../../common/Input/Input";
import "./CreateCourse.css";
import { mockedAuthorsList } from "../../constants";
import { useState } from "react";

export const CreateCourse = (props) => {
  const [newCourse, setNewCourse] = useState({
    id: "",
    title: "",
    description: "",
    creationDate: "",
    duration: "",
    authors: []
  });

  const [authors, setAuthors] = useState(mockedAuthorsList);

  const authorToShow = authors.filter((auth) => {
    const found = newCourse.authors.find((ele) => ele === auth.id);
    if (!found) {
      return auth;
    }
  });

  const addAuthor = (authID) => {
    setNewCourse({ ...newCourse, authors: [...newCourse.authors, authID] });
  };

  const deleteAuthor = (id) => {
    const newList = newCourse.authors.filter((authID) => authID !== id);
    setNewCourse({ ...newCourse, authors: newList });
  };

  const [showError, setShowError] = useState(false);

  const dateFormatting = () => {
    let dateFormat = new Date();
    let yyyy = dateFormat.getFullYear();
    let mm = dateFormat.getMonth() + 1; // Months start at 0!
    let dd = dateFormat.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    const formattedToday = dd + "/" + mm + "/" + yyyy;
    return formattedToday;
  };

  const addNewCourse = () => {
    if (
      newCourse.title.trim() === "" ||
      newCourse.description.trim() === "" ||
      newCourse.duration.trim() === ""
    ) {
      setShowError(true);
    } else {
      let creationDate = dateFormatting();
      const finalCourse = { ...newCourse, creationDate: creationDate };
      setShowError(false);
      props.setCourseList([...props.coursesList, finalCourse]);
      props.setFData([...props.fData,finalCourse])
      props.setShowAddCourse(false);
    }
  };

  return (
    <div className="flex-column">
      {showError && (
        <h3 style={{ color: "red" }}>Please Fill All the details</h3>
      )}
      <div className="create-courses">
        <div className="course_title">
          <p>Title</p>
          <Input
            type="text"
            name="title"
            placeholder='Title'
            onChange={(e) =>
              setNewCourse({ ...newCourse, [e.target.name]: e.target.value })
            }
          />
        </div>
        <Button onClick={() => addNewCourse()} name="Create Course" />
      </div>
      <div className="flex-column justify-space-between course-desc">
        <p>Description</p>
        <textarea
          type="text"
          name="description"
          placeholder="Add Description..."
          onChange={(e) =>
            setNewCourse({ ...newCourse, [e.target.name]: e.target.value })
          }
        />
      </div>
      <div className="flex-row justify-space-between align-center pad-3-rem ">
        <div className="flex-column  ">
          <div className="flex-column align-center ">
            <h3>Add Author</h3>
            <div >
              <p>Author Name</p>
              <Input type="text" />
            </div>
            <Button name="Create Author" />
          </div>
          <div className="flex-column align-center">
            <h3>Duration</h3>
            <div>
              <p>Duration</p>
              <Input
                type="number"
                name="duration"
                onChange={(e) =>
                  setNewCourse({
                    ...newCourse,
                    [e.target.name]: e.target.value
                  })
                }
              />
            </div>
            <h2>Duration 
               { " " + `${Math.floor(Number(newCourse.duration) / 60)}:${
                Number(newCourse.duration) % 60
              } hours`}
               </h2>
          </div>
        </div>
        <div>
          <div>
            <h3>Authors</h3>
            <div >
              {authorToShow.map((auth) => {
                return (
                  <div className="show-author">
                    <p>{auth.name}</p>
                    <Button onClick={() => addAuthor(auth.id)} name="Add Author" />
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h3>Course Authors</h3>
            {newCourse.authors.length === 0 ? (
              <p>Authors list is empty</p>
            ) : (
              <div>
                {newCourse.authors.map((el) => {
                  const found = authors.find((a) => a.id === el);
                  return (
                    <div className="flex-row justify-space-between align-center">
                      <p>{found.name}</p>
                      <Button name='Delete Author' onClick={() => deleteAuthor(found.id)}/>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
