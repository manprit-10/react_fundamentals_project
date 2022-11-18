import { mockedAuthorsList } from "../../../../constants";
import { Button } from "../../../../common/Button/Button";
import { useNavigate } from "react-router-dom";
export const CourseCard = function (props) {
  const navigate = useNavigate()
  return (
    <div style={{ "margin-bottom": "10px" }}>
      <div style={{ border: "1px solid green", padding: "7px 14px" }}>
        <li>
          <div className="description">
            <h2>{props.course.title}</h2>
            <p>{props.course.description}</p>
          </div>
          <div className="details">
            <p>
              <strong>Authors</strong> :{" "}
              {props.course.authors
                .map(function (id) {
                  const author = mockedAuthorsList.find(function (author) {
                    return author.id === id;
                  });

                  return author.name;
                })
                .join(", ")}
            </p>
            <p>
              <strong>Duration</strong> :{" "}
              {`${Math.floor(Number(props.course.duration) / 60)}:${
                Number(props.course.duration) % 60
              } hours`}
            </p>
            <p>
              <strong>Created</strong> : {props.course.creationDate}
            </p>
            <Button onClick={()=>navigate(`/course/${props.course.id}`)} name="Show Course" />
          </div>
        </li>
      </div>
    </div>
  );
};
